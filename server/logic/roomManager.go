package logic

import (
	"sync"
)

/*
当前游戏世界的所有玩家
*/
type roomManager struct {
	Rooms map[uint32]*Room //当前的所有的房间
	lock  sync.RWMutex     //保护Players的互斥读写机制
}

var RoomManager *roomManager

func init() {
	RoomManager = &roomManager{
		Rooms: make(map[uint32]*Room),
	}
}

func (m *roomManager) AddRoom(room *Room) {
	//将player添加到 世界管理器中
	m.lock.Lock()
	m.Rooms[room.RoomId] = room
	m.lock.Unlock()
}

func (m *roomManager) RemoveRoomById(rid uint32) {
	m.lock.Lock()
	delete(m.Rooms, rid)
	m.lock.Unlock()
}

//通过玩家ID 获取对应玩家信息
func (m *roomManager) GetRoomById(rid uint32) *Room {
	m.lock.RLock()
	defer m.lock.RUnlock()
	return m.Rooms[rid]
}

//获取所有玩家的信息
func (m *roomManager) AllRooms() []*Room {
	m.lock.RLock()
	defer m.lock.RUnlock()
	target := make([]*Room, 0)
	//添加切片
	for _, v := range m.Rooms {
		target = append(target, v)
	}
	return target
}
