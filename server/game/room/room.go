package room

import (
	"server/db"
	"sync"
)

type Room struct {
	RoomId   uint32
	RoomName string
	MaxNum   uint32
	Users    map[uint32]*db.User
	State    uint32
	pLock    sync.RWMutex
}

var IdGen uint32 = 10001 //用来生成房间Id
var IdLock sync.Mutex    //保护Id的互斥机制

func NewRoom(name string, maxNum uint32) *Room {
	IdLock.Lock()
	id := IdGen
	IdGen++
	IdLock.Unlock()
	newRoom := &Room{
		RoomId:   id,
		RoomName: name,
		MaxNum:   maxNum,
		Users:    make(map[uint32]*db.User),
	}
	Manager.AddRoom(newRoom)
	return newRoom
}

//提供添加一个玩家的的功能，将玩家添加进玩家信息表Players
func (m *Room) AddUser(u *db.User) {
	//将player添加到 世界管理器中
	m.pLock.Lock()
	m.Users[u.Id] = u
	m.pLock.Unlock()
}

//从玩家信息表中移除一个玩家
func (m *Room) RemoveUser(uid uint32) {
	m.pLock.Lock()
	delete(m.Users, uid)
	m.pLock.Unlock()
}

//通过玩家ID 获取对应玩家信息
func (m *Room) GetUserByPid(uid uint32) *db.User {
	m.pLock.RLock()
	defer m.pLock.RUnlock()
	return m.Users[uid]
}

//获取所有玩家的信息
func (m *Room) GetAllPlayers() []*db.User {
	m.pLock.RLock()
	defer m.pLock.RUnlock()
	//创建返回的player集合切片
	players := make([]*db.User, 0)
	//添加切片
	for _, v := range m.Users {
		players = append(players, v)
	}
	//返回
	return players
}
