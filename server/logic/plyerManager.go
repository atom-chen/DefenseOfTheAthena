package logic

import (
	"sync"
)

/*
当前游戏世界的所有玩家
*/
type Manager struct {
	AoiMgr  *AOIManager        //当前世界地图的AOI规划管理器
	Players map[uint32]*Player //当前的玩家集合
	pLock   sync.RWMutex       //保护Players的互斥读写机制
}

//提供WorldManager 初始化方法
func NewPlayerManager() *Manager {
	return &Manager{
		Players: make(map[uint32]*Player),
		AoiMgr:  NewAOIManager(),
	}
}

//提供添加一个玩家的的功能，将玩家添加进玩家信息表Players
func (m *Manager) AddPlayer(player *Player) {
	//将player添加到 世界管理器中
	m.pLock.Lock()
	m.Players[player.Pid] = player
	m.pLock.Unlock()
	//将player 添加到AOI网络规划中
	m.AoiMgr.AddToGridByPos(player.Pid, player.X, player.Y)
}

//从玩家信息表中移除一个玩家
func (m *Manager) RemovePlayerByPid(pid uint32) {
	m.pLock.Lock()
	delete(m.Players, pid)
	m.pLock.Unlock()
}

//通过玩家ID 获取对应玩家信息
func (m *Manager) GetPlayerByPid(pid uint32) *Player {
	m.pLock.RLock()
	defer m.pLock.RUnlock()
	return m.Players[pid]
}

//获取所有玩家的信息
func (m *Manager) GetAllPlayers() []*Player {
	m.pLock.RLock()
	defer m.pLock.RUnlock()
	//创建返回的player集合切片
	players := make([]*Player, 0)
	//添加切片
	for _, v := range m.Players {
		players = append(players, v)
	}
	//返回
	return players
}

//获取指定gid中的所有player信息
func (m *Manager) GetPlayersByGid(gid int) []*Player {
	//通过gid获取 对应 格子中的所有pid
	playerIds := m.AoiMgr.Grids[gid].GetPlayerIds()
	//通过pid找到对应的player对象
	players := make([]*Player, 0, len(playerIds))
	m.pLock.RLock()
	for _, pid := range playerIds {
		players = append(players, m.Players[pid])
	}
	m.pLock.RUnlock()
	return players
}
