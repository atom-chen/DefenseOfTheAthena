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

type JoinRoom struct {
	znet.BaseRouter
}

func (t *JoinRoom) Handle(request ziface.IRequest) {
	//根据连接获取玩家
	l, _ := request.GetConnection().GetProperty("linkId")
	linkId := l.(uint32)
	userLink := link.Manager.Find(linkId)

	reqMsg := request.GetMsg()
	var req pb.ReqJoinRoom

	err := proto.Unmarshal(reqMsg, &req)
	if err != nil {
		return
	}
	fmt.Println("req join roomId:", req.RoomId)

	resp := &pb.RespPackage{
		Cmd:     pb.MessageCommand_CallJoinRoom,
		ErrCode: pb.ErrorCode_OK,
	}

	pbBuf, err := proto.Marshal(resp)
	if err != nil {
		return
	}
	if err := userLink.Conn.WriteMessage(pbBuf); err != nil {
		log.Println("JoinRoom error !")
		return
	}
	//log.Printf("[心跳],connId=%d, resp=%v\n", userLink.Conn.GetConnId(), resp)
	return
}
