package player

//
//import (
//	"math/rand"
//	"server/zinx/ziface"
//	"sync"
//)
//
////玩家对象
//type Player struct {
//	Pid  int32              //玩家Id
//	Conn ziface.IWSConnection //当前玩家的连接
//	X    float32            //平面x坐标
//	Y    float32            //平面y坐标
//	V    float32            //旋转0-360度
//}
//
///*
//	Player ID 生成器
//*/
//var PidGen int32 = 1  //用来生成玩家ID的计数器
//var IdLock sync.Mutex //保护PidGen的互斥机制
//
////创建一个玩家对象
//func NewPlayer(conn ziface.IWSConnection) *Player {
//	//生成一个PID
//	IdLock.Lock()
//	id := PidGen
//	PidGen++
//	IdLock.Unlock()
//
//	p := &Player{
//		Pid:  id,
//		Conn: conn,
//		X:    float32(160 + rand.Intn(50)), //随机在160坐标点 基于X轴偏移若干坐标
//		Y:    0,                              //高度为0
//		V:    0,                              //角度为0
//	}
//	return p
//}
//
////告知客户端pid,同步已经生成的玩家ID给客户端
//func (p *Player) SyncPid() {
//	//组建command0 proto数据
//	//data := &pb.SyncPid{
//	//	Pid: p.Pid,
//	//}
//	//
//	////发送数据给客户端
//	p.SendMsg(1, "")
//}
//
////广播玩家自己的出生地点
//func (p *Player) BroadCastStartPosition() {
//
//	//组建command200 proto数据
//	//msg := &pb.BroadCast{
//	//	Pid: p.Pid,
//	//	Tp:  2, //TP2 代表广播坐标
//	//	Data: &pb.BroadCast_P{
//	//		P: &pb.Position{
//	//			X: p.X,
//	//			Y: p.Y,
//	//			Z: p.Z,
//	//			V: p.V,
//	//		},
//	//	},
//	//}
//	//
//	////发送数据给客户端
//	//p.SendMsg(200, msg)
//}
//
//
////玩家下线
//func (p *Player) LostConnection() {
//
//}
//
//
///*
//	发送消息给客户端，
//	主要是将pb的protobuf数据序列化之后发送
//*/
//func (p *Player) SendMsg(command uint32, data string) {
//
//
//	return
//}
