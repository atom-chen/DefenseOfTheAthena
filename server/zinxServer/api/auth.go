package api

import (
	"fmt"
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
	l, _ := request.GetConn().GetProperty("linkId")
	linkId := l.(uint32)
	userLink := link.Manager.Find(linkId)

	type respAuth struct {
		ErrorCode errorCode.ErrorCode
	}

	resp := &respAuth{
		ErrorCode: errorCode.OK,
	}
	fmt.Printf("api auth send Msg:%v\n", resp)
	userLink.SendMsg(messageCommand.LongLinkAuth, resp)
}
