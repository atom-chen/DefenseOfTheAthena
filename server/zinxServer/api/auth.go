package api

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"log"
	"server/model"
	"server/pb"
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

	u := model.FindUserByToken(request.GetToken())
	var resp = new(pb.RespPackage)
	resp.Cmd = pb.MessageCommand_CallLinkAuth
	if u == nil {
		resp.ErrCode = pb.ErrorCode_LoginAccountOrPasswordError
		userLink.Conn.Stop()
	} else {
		userLink.User = u
		resp.ErrCode = pb.ErrorCode_OK
	}
	pbBuf, err := proto.Marshal(resp)
	if err != nil {
		return
	}
	//心跳特殊处理
	if err := userLink.Conn.WriteMessage(pbBuf); err != nil {
		log.Println("userLink HeartBeat error !")
		return
	}
	fmt.Printf("[授权],connId=%d, resp=%v\n", userLink.Conn.GetConnId(), resp)
	return
}
