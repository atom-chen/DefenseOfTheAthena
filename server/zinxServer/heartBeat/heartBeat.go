package heartBeat

import (
	"encoding/json"
	"server/messageCommand"
	"server/zinx/ziface"
	"server/zinx/znet"
	"server/zinxServer/link"
)

//验证Websocket连接
type HeartBeat struct {
	znet.BaseRouter
}

func (t *HeartBeat) Handle(request ziface.IRequest) {
	//根据连接获取玩家
	l, _ := request.GetConnection().GetProperty("linkId")
	linkId := l.(uint32)
	userLink := link.Manager.Find(linkId)
	jsonData, err := json.Marshal("pong")
	if err != nil {
		return
	}
	userLink.SendMsg(messageCommand.HeartBeat, jsonData)
}
