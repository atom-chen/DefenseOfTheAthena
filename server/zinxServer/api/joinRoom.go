package api

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"log"
	"server/game/room"
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
	targetRoom := room.Manager.GetRoomById(req.RoomId)
	targetRoom.AddUser(userLink.User)
	userLink.CurRoom = targetRoom
	resp := new(pb.RespPackage)
	if targetRoom == nil {
		resp = &pb.RespPackage{
			Cmd:     pb.MessageCommand_JoinRoom,
			ErrCode: pb.ErrorCode_RoomUnExistent,
		}
	} else {
		resp = &pb.RespPackage{
			Cmd:     pb.MessageCommand_JoinRoom,
			ErrCode: pb.ErrorCode_OK,
		}
	}
	pbBuf, err := proto.Marshal(resp)
	if err != nil {
		return
	}
	if err := userLink.Conn.WriteMessage(pbBuf); err != nil {
		log.Println("JoinRoom error !")
		return
	}
	return
}
