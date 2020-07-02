package player

//
//import (
//	"server/game/aoi"
//	"sync"
//)
//
///*
//	当前游戏世界的所有玩家
//*/
//type manager struct {
//	AoiMgr  *aoi.AOIManager   //当前世界地图的AOI规划管理器
//	Players map[int32]*Player //当前在线的玩家集合
//	pLock   sync.RWMutex      //保护Players的互斥读写机制
//}
//
////提供一个对外的世界管理模块句柄
//var Manager *manager
//
//
////提供WorldManager 初始化方法
//func init() {
//	Manager = &manager{
//		Players: make(map[int32]*Player),
//		AoiMgr:  aoi.NewAOIManager(aoi.AOI_MIN_X, aoi.AOI_MAX_X, aoi.AOI_CNTS_X, aoi.AOI_MIN_Y, aoi.AOI_MAX_Y, aoi.AOI_CNTS_Y),
//	}
//}
//
////提供添加一个玩家的的功能，将玩家添加进玩家信息表Players
//func (this *manager) AddPlayer(player *Player) {
//	//将player添加到 世界管理器中
//	this.pLock.Lock()
//	this.Players[player.Pid] = player
//	this.pLock.Unlock()
//
//	//将player 添加到AOI网络规划中
//	this.AoiMgr.AddToGridByPos(int(player.Pid), player.X, player.Z)
//}
//
////从玩家信息表中移除一个玩家
//func (this *manager) RemovePlayerByPid(pid int32) {
//	this.pLock.Lock()
//	delete(this.Players, pid)
//	this.pLock.Unlock()
//}
//
////通过玩家ID 获取对应玩家信息
//func (this *manager) GetPlayerByPid(pid int32) *Player {
//	this.pLock.RLock()
//	defer this.pLock.RUnlock()
//
//	return this.Players[pid]
//}
//
////获取所有玩家的信息
//func (this *manager) GetAllPlayers() []*Player {
//	this.pLock.RLock()
//	defer this.pLock.RUnlock()
//
//	//创建返回的player集合切片
//	players := make([]*Player, 0)
//
//	//添加切片
//	for _, v := range this.Players {
//		players = append(players, v)
//	}
//
//	//返回
//	return players
//}
//
////获取指定gid中的所有player信息
//func (this *manager) GetPlayersByGid(gid int) []*Player {
//	//通过gid获取 对应 格子中的所有pid
//	pids := this.AoiMgr.Grids[gid].GetPlyerIDs()
//
//	//通过pid找到对应的player对象
//	players := make([]*Player, 0, len(pids))
//	this.pLock.RLock()
//	for _, pid := range pids {
//		players = append(players, this.Players[int32(pid)])
//	}
//	this.pLock.RUnlock()
//
//	return players
//}
