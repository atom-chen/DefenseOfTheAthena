package logic

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"server/pb"
	"sync"
)

//房间内的玩家
type RoomUser struct {
	UserId   uint32
	NickName string
	TotalNum uint32 //总场次
	RoleId   pb.EnumGameRole
	PassNum  uint32
	MapLv    uint32 //
	IsReady  bool   //非执行性数据，缓存层及传输层需要
}

//房间
type Room struct {
	RoomId   uint32
	RoomName string
	Password string
	MaxNum   uint32
	RoomUser map[uint32]*RoomUser //房间内的玩家
	State    uint32
	pLock    sync.RWMutex
}

var roomIdGen uint32 = 10001 //用来生成房间Id
var roomIdLock sync.Mutex    //保护Id的互斥机制

func NewRoom(name string, password string) *Room {
	roomIdLock.Lock()
	id := roomIdGen
	roomIdGen++
	roomIdLock.Unlock()
	newRoom := &Room{
		RoomId:   id,
		RoomName: name,
		Password: password,
		MaxNum:   6,
		RoomUser: make(map[uint32]*RoomUser),
	}
	RoomManager.AddRoom(newRoom)
	return newRoom
}

//提供添加一个玩家的的功能，将玩家添加进玩家信息表Players
func (m *Room) AddUser(u *RoomUser) {
	//将player添加到 世界管理器中
	m.pLock.Lock()
	m.RoomUser[u.UserId] = u
	m.pLock.Unlock()
}

//从玩家信息表中移除一个玩家
func (m *Room) RemoveUser(uid uint32) {
	m.pLock.Lock()
	delete(m.RoomUser, uid)
	m.pLock.Unlock()
}

//通过玩家ID 获取对应玩家信息
func (m *Room) GetUserByUid(uid uint32) *RoomUser {
	m.pLock.RLock()
	defer m.pLock.RUnlock()
	return m.RoomUser[uid]
}

//获取所有玩家的信息
func (m *Room) GetAllRoomUsers() []*RoomUser {
	m.pLock.RLock()
	defer m.pLock.RUnlock()
	//创建返回的player集合切片
	roomUsers := make([]*RoomUser, 0)
	//添加切片
	for _, v := range m.RoomUser {
		roomUsers = append(roomUsers, v)
	}
	//返回
	return roomUsers
}

//给房间内的所有玩家同步房间里的信息
func (m *Room) SyncRoomInfo() {
	roomInfo := m.GetRoomInfo()
	repBuf, err := proto.Marshal(roomInfo)
	if err != nil {
		return
	}

	pkg := &pb.RespPackage{
		Cmd:     pb.MessageCommand_SyncRoomInfo,
		ErrCode: pb.ErrorCode_OK,
		Msg:     repBuf,
	}
	pkgBuf, err := proto.Marshal(pkg)
	if err != nil {
		return
	}

	//给同房间的所有人同步房间状态
	targets := LinkManager.GetLinkByRoomId(m.RoomId)
	if len(targets) == 0 {
		return
	}
	for _, v := range targets {
		v.Conn.WriteMessage(pkgBuf)
		fmt.Printf("[同步Game信息],connId=%d, cmd=%d, errcode=%s, msg=%v\n", v.Conn.GetConnId(), pkg.Cmd, pkg.ErrCode, roomInfo)
	}
	return
}

//logic层数据转pb数据，用于传输
func (m *Room) GetRoomInfo() *pb.RoomInfo {
	userStates := make([]*pb.RoomInfo_RoomUser, 0)
	for _, v := range m.RoomUser {
		item := &pb.RoomInfo_RoomUser{
			UserId:       v.UserId,
			UserNickName: v.NickName,
			IsReady:      v.IsReady,
			GameRoleId:   v.RoleId,
			MapLv:        v.MapLv,
			PassNum:      v.PassNum,
			TotalNum:     v.TotalNum,
		}
		userStates = append(userStates, item)
	}
	return &pb.RoomInfo{
		RoomId:   m.RoomId,
		RoomName: m.RoomName,
		Password: m.Password,
		Users:    userStates,
	}
}
