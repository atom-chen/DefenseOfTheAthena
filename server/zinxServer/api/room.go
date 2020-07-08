package api

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"log"
	"server/db"
	"server/logic"
	"server/pb"
	"server/zinx/ziface"
	"server/zinx/znet"
)

/*******************************创建房间*******************************/

type CreateRoom struct {
	znet.BaseRouter
}

func (t *CreateRoom) Handle(request ziface.IRequest) {
	//根据连接获取玩家
	l, _ := request.GetConnection().GetProperty("linkId")
	linkId := l.(uint32)
	userLink := logic.LinkManager.Find(linkId)
	var req pb.ReqCreateRoom
	err := proto.Unmarshal(request.GetMsg(), &req)
	if err != nil {
		return
	}

	//没有房间就创建房间
	if userLink.CurRoom == nil {
		userLink.CurRoom = logic.NewRoom(req.RoomName, req.Password)
	}

	//查询该玩家该地图的统计数据
	dbStatistics := db.FindStatisticsByUid(userLink.User.Id)

	//房间玩家数据
	roomUser := &logic.RoomUser{
		UserId:   userLink.User.Id,
		NickName: userLink.User.NickName,
		TotalNum: dbStatistics.TotalNum,
		PassNum:  dbStatistics.PassNum,
		MapLv:    dbStatistics.MapLv,
		IsReady:  false,
	}

	//加入房间
	userLink.CurRoom.AddUser(roomUser)

	resp := &pb.RespCreateRoom{
		Info: userLink.CurRoom.GetRoomInfo(),
	}
	respBuf, err := proto.Marshal(resp)
	if err != nil {
		return
	}

	pkg := &pb.RespPackage{
		Cmd:     pb.MessageCommand_CallCreateRoom,
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

/*******************************加入房间*******************************/

type JoinRoom struct {
	znet.BaseRouter
}

func (t *JoinRoom) Handle(request ziface.IRequest) {
	//根据连接获取玩家
	l, _ := request.GetConnection().GetProperty("linkId")
	linkId := l.(uint32)
	userLink := logic.LinkManager.Find(linkId)
	reqMsg := request.GetMsg()
	var req pb.ReqJoinRoom
	err := proto.Unmarshal(reqMsg, &req)
	if err != nil {
		return
	}
	fmt.Println("req join roomId:", req.RoomId)

	if userLink.CurRoom != nil {
		//todo 走重连房间流程
		return
	}

	targetRoom := logic.RoomManager.GetRoomById(req.RoomId)
	pkg := new(pb.RespPackage)
	//房间不存在
	if targetRoom == nil {
		pkg = &pb.RespPackage{
			Cmd:     pb.MessageCommand_CallJoinRoom,
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

	//加入房间流程
	if targetRoom.Password != req.Password {
		pkg = &pb.RespPackage{
			Cmd:     pb.MessageCommand_CallJoinRoom,
			ErrCode: pb.ErrorCode_RoomPasswordError,
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

	//统计数据
	dbStatistics := db.FindStatisticsByUid(userLink.User.Id)

	//房间玩家数据
	roomUser := &logic.RoomUser{
		UserId:   userLink.User.Id,
		NickName: userLink.User.NickName,
		TotalNum: dbStatistics.TotalNum, //总场次
		PassNum:  dbStatistics.PassNum,
		MapLv:    dbStatistics.MapLv,
		RoleId:   pb.EnumGameRole_DefaultRole, //默认
		IsReady:  false,
	}

	//加入房间
	userLink.CurRoom = targetRoom
	userLink.CurRoom.AddUser(roomUser)
	//回复结果
	resp := &pb.RespJoinRoom{
		Info: userLink.CurRoom.GetRoomInfo(),
	}
	respBuf, err := proto.Marshal(resp)
	if err != nil {
		return
	}
	pkg = &pb.RespPackage{
		Cmd:     pb.MessageCommand_CallJoinRoom,
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
	fmt.Printf("[加入房间],connId=%d, cmd=%s, errcode=%s\n", userLink.Conn.GetConnId(), pkg.Cmd.String(), pkg.ErrCode)
	return
}

/*******************************在房间中准备*******************************/

type RoomReady struct {
	znet.BaseRouter
}

func (t *RoomReady) Handle(request ziface.IRequest) {
	l, _ := request.GetConnection().GetProperty("linkId")
	linkId := l.(uint32)
	userLink := logic.LinkManager.Find(linkId)
	reqMsg := request.GetMsg()
	var req pb.RoomReady
	err := proto.Unmarshal(reqMsg, &req)
	if err != nil {
		return
	}
	roomUser := userLink.CurRoom.RoomUser[userLink.User.Id]
	roomUser.IsReady = req.IsReady
	userLink.CurRoom.SyncRoomInfo()
}

/*******************************在房间中换角色*******************************/
type RoomRole struct {
	znet.BaseRouter
}

func (t *RoomRole) Handle(request ziface.IRequest) {
	l, _ := request.GetConnection().GetProperty("linkId")
	linkId := l.(uint32)
	userLink := logic.LinkManager.Find(linkId)
	reqMsg := request.GetMsg()
	var req pb.GameRole
	err := proto.Unmarshal(reqMsg, &req)
	if err != nil {
		return
	}

	roomUser := userLink.CurRoom.RoomUser[userLink.User.Id]
	roomUser.RoleId = req.RoleId
	fmt.Printf("[Input GameRole],req.RoleId=%s  roomUser.RoleId=%s \n", req.RoleId, roomUser.RoleId)
	userLink.CurRoom.SyncRoomInfo()
}
