package link

import (
	"encoding/json"
	"log"
	"server/enum"
	"server/model"
	"server/zinx/command"
	"server/zinx/ziface"
	"sync"
)

//单个用户的长连接
type UserLink struct {
	User   *model.User        //玩家的数据
	LinkId uint32             //该连接的Id
	Conn   ziface.IConnection //当前玩家的ws连接
	Status enum.LinkStatus    //玩家的连接状态
}

var Gen uint32 = 1    //用来生成玩家ID的计数器
var IdLock sync.Mutex //保护PidGen的互斥机制

//创建一个玩家link
func NewLink(conn ziface.IConnection) *UserLink {
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
	//data := "Pid:" + strconv.Itoa(int(l.LinkId))
	//l.SendMsg(1, []byte(data))
}

//下线
func (l *UserLink) LostConnection() {
	Manager.Remove(l.LinkId)
}

/*
	发送消息给客户端，
*/
func (l *UserLink) SendMsg(msgId command.MessageCommand, resp interface{}) {
	if l.Conn == nil {
		log.Println("connection in player is nil")
		return
	}

	type pack struct {
		Cmd command.MessageCommand
		Msg interface{}
	}

	p := pack{
		Cmd: msgId,
		Msg: resp,
	}

	jsonData, err := json.Marshal(&p)
	if err != nil {
		return
	}
	//调用zinx框架的SendMsg发包
	if err := l.Conn.SendMsg(string(jsonData)); err != nil {
		log.Println("userLink WriteMessage error !")
		return
	}

	log.Printf("消息发送成功 ! Cmd:%s, Msg:%v, jsonData:%s\n", p.Cmd.ToString(), p.Msg, string(jsonData))
	return
}
