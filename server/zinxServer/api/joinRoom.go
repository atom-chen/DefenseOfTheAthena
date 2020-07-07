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

	pkg := new(pb.RespPackage)
	//房间不存在
	if targetRoom == nil {
		pkg = &pb.RespPackage{
			Cmd:     pb.MessageCommand_JoinRoom,
			ErrCode: pb.ErrorCode_RoomUnExistent,
		}
		pkgBuf, err := proto.Marshal(pkg)
		if err != nil {
			return
		}
		if err := userLink.Conn.WriteMessage(pkgBuf); err != nil {
			log.Println("JoinRoom error !")
			return
		}
		fmt.Printf("[加入房间],connId=%d, cmd=%d, errcode=%s\n", userLink.Conn.GetConnId(), pkg.Cmd, pkg.ErrCode)
		return
	}

	//加入房间
	targetRoom.AddUser(userLink.User)
	userLink.CurRoom = targetRoom

	//回复结果
	resp := &pb.RespJoinRoom{
		PreGame: userLink.GetPreGameState(),
	}
	respBuf, err := proto.Marshal(resp)
	if err != nil {
		return
	}
	pkg = &pb.RespPackage{
		Cmd:     pb.MessageCommand_JoinRoom,
		ErrCode: pb.ErrorCode_OK,
		Msg:     respBuf,
	}
	pkgBuf, err := proto.Marshal(pkg)
	if err != nil {
		return
	}
	if err := userLink.Conn.WriteMessage(pkgBuf); err != nil {
		log.Println("JoinRoom error !")
		return
	}
	fmt.Printf("[加入房间],connId=%d, cmd=%d, errcode=%s\n", userLink.Conn.GetConnId(), pkg.Cmd, pkg.ErrCode)
	return
}
