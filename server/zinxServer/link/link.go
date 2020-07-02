package link

import (
	"fmt"
	"server/enum"
	"server/messageCommand"
	"server/model"
	"server/zinx/ziface"
	"strconv"
	"sync"
)

//单个用户的长连接
type UserLink struct {
	User   *model.User          //玩家的数据
	LinkId uint32               //该连接的Id
	Conn   ziface.IWSConnection //当前玩家的ws连接
	Status enum.LinkStatus      //玩家的连接状态
}

var Gen uint32 = 1    //用来生成玩家ID的计数器
var IdLock sync.Mutex //保护PidGen的互斥机制

//创建一个玩家link
func NewLink(conn ziface.IWSConnection) *UserLink {
	//生成一个PID
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

//上线
func (l *UserLink) OnLine() {
	data := "Pid:" + strconv.Itoa(int(l.LinkId))
	l.SendMsg(1, []byte(data))
}

//下线
func (l *UserLink) LostConnection() {
	Manager.Remove(l.LinkId)
}

/*
	发送消息给客户端，
*/
func (l *UserLink) SendMsg(msgId messageCommand.CmdType, data []byte) {
	if l.Conn == nil {
		fmt.Println("connection in player is nil")
		return
	}
	fmt.Println("发送消息给客户端: ", msgId)
	//调用Zinx框架的SendMsg发包
	if err := l.Conn.WriteMessage(data); err != nil {
		fmt.Println("Player SendMsg error !")
		return
	}
	return
}
