package api

import (
	"github.com/golang/protobuf/proto"
	"log"
	"server/pb"
	"server/zinx/ziface"
	"server/zinx/znet"
	"server/zinxServer/link"
)

type CreateRoom struct {
	znet.BaseRouter
}

func (t *CreateRoom) Handle(request ziface.IRequest) {
	//根据连接获取玩家
	l, _ := request.GetConnection().GetProperty("linkId")
	linkId := l.(uint32)
	userLink := link.Manager.Find(linkId)
	resp := &pb.RespPackage{
		Cmd:     pb.MessageCommand_CallCreateRoom,
		ErrCode: pb.ErrorCode_OK,
	}

	msg := &pb.RespCreateRoom{
		RoomId:   10001,
		RoomName: "替天行道",
		MapName:  "守卫水泊梁山",
		MaxNum:   6,
		CurNum:   1,
	}

	msgBuf, err := proto.Marshal(msg)
	if err != nil {
		return
	}
	resp.Msg = msgBuf

	pbBuf, err := proto.Marshal(resp)
	if err != nil {
		return
	}
	if err := userLink.Conn.WriteMessage(pbBuf); err != nil {
		log.Println("CreateRoom error !")
		return
	}
	//log.Printf("[心跳],connId=%d, resp=%v\n", userLink.Conn.GetConnId(), resp)
	return
}
