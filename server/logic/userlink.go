package logic

import (
	"server/db"
	"server/enum"
	"server/zinx/ziface"
	"sync"
)

//单个用户的长连接
type UserLink struct {
	User    *db.User             //玩家的数据
	LinkId  uint32               //该连接的Id
	Conn    ziface.IWSConnection //当前玩家的ws连接
	CurRoom *Room                //当前玩家所在的房间
	Status  enum.LinkStatus      //玩家的连接状态
}

var linkIdGen uint32 = 1  //用来生成玩家ID的计数器
var linkIdLock sync.Mutex //保护PidGen的互斥机制

//创建一个玩家link
func NewLink(conn ziface.IWSConnection) *UserLink {
	linkIdLock.Lock()
	id := linkIdGen
	linkIdGen++
	linkIdLock.Unlock()
	link := &UserLink{
		LinkId: id,
		Conn:   conn,
	}
	LinkManager.Add(link)
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
	LinkManager.Remove(l.LinkId)
}
