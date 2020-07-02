package auth

import (
	"encoding/json"
	"server/errorCode"
	"server/messageCommand"
	"server/zinx/ziface"
	"server/zinx/znet"
	"server/zinxServer/link"
)

//验证Websocket连接
type Auth struct {
	znet.BaseRouter
}

func (a *Auth) Handle(request ziface.IRequest) {
	//根据连接获取玩家
	l, _ := request.GetConnection().GetProperty("linkId")
	linkId := l.(uint32)
	userLink := link.Manager.Find(linkId)
	resp := &respAuth{
		ErrorCode: errorCode.OK,
	}
	jsonData, err := json.Marshal(resp)
	if err != nil {
		return
	}
	userLink.SendMsg(messageCommand.LongLinkAuth, jsonData)
}
