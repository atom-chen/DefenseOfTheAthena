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

type CreateRoom struct {
	znet.BaseRouter
}

func (t *CreateRoom) Handle(request ziface.IRequest) {
	//根据连接获取玩家
	l, _ := request.GetConnection().GetProperty("linkId")
	linkId := l.(uint32)
	userLink := link.Manager.Find(linkId)
	var req pb.ReqCreateRoom
	err := proto.Unmarshal(request.GetMsg(), &req)
	if err != nil {
		return
	}
	curRoom := userLink.CurRoom
	if curRoom == nil {
		newRoom := room.NewRoom(req.RoomName, req.MapId)
		userLink.CurRoom = newRoom
	}
	userLink.CurRoom.AddUser(userLink.User)

	resp := &pb.RespCreateRoom{
		PreGame: userLink.GetPreGameState(),
	}
	respBuf, err := proto.Marshal(resp)
	if err != nil {
		return
	}

	pkg := &pb.RespPackage{
		Cmd:     pb.MessageCommand_CreateRoom,
		ErrCode: pb.ErrorCode_OK,
		Msg:     respBuf,
	}

	pkgBuf, err := proto.Marshal(pkg)
	if err != nil {
		return
	}
	if err := userLink.Conn.WriteMessage(pkgBuf); err != nil {
		log.Println("CreateRoom error !")
		return
	}
	fmt.Printf("[创建房间],connId=%d, cmd=%d, errcode=%s pkg=%v\n", userLink.Conn.GetConnId(), pkg.Cmd, pkg.ErrCode, resp)
	return
}
