package link

import (
	"server/db"
	"server/enum"
	"server/game/room"
	"server/zinx/ziface"
	"sync"
)

//单个用户的长连接
type UserLink struct {
	User    *db.User             //玩家的数据
	LinkId  uint32               //该连接的Id
	Conn    ziface.IWSConnection //当前玩家的ws连接
	CurRoom *room.Room           //当前玩家所在的房间
	Status  enum.LinkStatus      //玩家的连接状态
}

var Gen uint32 = 1    //用来生成玩家ID的计数器
var IdLock sync.Mutex //保护PidGen的互斥机制

//创建一个玩家link
func NewLink(conn ziface.IWSConnection) *UserLink {
	IdLock.Lock()
	id := Gen
	Gen++
	IdLock.Unlock()
	link := &UserLink{
		LinkId: id,
		Conn:   conn,
	}
	Manager.Add(link)
	return link
}

//下线
func (l *UserLink) LostConnection() {
	if l.User == nil {
		return
	}
	//下线时清掉token
	l.User.Token = ""
	l.User.UpdateUser()
	Manager.Remove(l.LinkId)
}
