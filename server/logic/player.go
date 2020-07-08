package logic

import (
	"math/rand"
	"server/zinx/ziface"
	"sync"
)

//玩家对象
type Player struct {
	Pid  uint32               //玩家Id
	Conn ziface.IWSConnection //当前玩家的连接
	X    float32
	Y    float32
	V    float32
}

var playerIdGen uint32 = 1  //用来生成玩家ID的计数器
var playerIdLock sync.Mutex //保护PidGen的互斥机制

//创建一个玩家对象
func NewPlayer(conn ziface.IWSConnection) *Player {
	//生成一个PID
	playerIdLock.Lock()
	id := playerIdGen
	playerIdGen++
	playerIdLock.Unlock()

	p := &Player{
		Pid:  id,
		Conn: conn,
		X:    float32(160 + rand.Intn(50)), //随机在160坐标点 基于X轴偏移若干坐标
		Y:    0,                            //高度为0
		V:    0,                            //角度为0
	}
	return p
}
