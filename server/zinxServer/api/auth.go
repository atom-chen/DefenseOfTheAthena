package api

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"log"
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
	resp := &pb.RespPackage{
		Cmd:     pb.MessageCommand_HeartBeat,
		ErrCode: pb.ErrorCode_OK,
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
	fmt.Printf("发送授权成功, resp:%v\n", resp)
	return
}
