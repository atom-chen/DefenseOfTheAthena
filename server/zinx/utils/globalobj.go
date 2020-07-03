package utils

import (
	"server/zinx/ziface"
)

//存储一些数据供全局使用
type GlobalObj struct {
	//当前zinx实例对象
	WsServer ziface.IServer
	//服务器名字
	Name string
	//允许最大连接人数
	MaxConn int
	//当前数据包最大值
	MaxPackageSize uint32
	//类型 ws,wss
	Scheme string
	//连接地址
	Host string
	//端口
	Port uint32
	//子协议
	Path string
	//工作池大小 一般是cpu大小
	WorkerPoolSize uint32
	//一个工作池处理消息的最大数量
	MaxWorkerTaskLen uint32
	//发送消息的缓冲最大长度
	MaxMsgChanLen uint32
}

var GlobalObject *GlobalObj

//初始化
func init() {
	GlobalObject = &GlobalObj{
		Name:             "zinx websocket",
		Scheme:           "ws",
		Host:             "127.0.0.1",
		Port:             3660,
		Path:             "Game",
		MaxConn:          1000,
		MaxPackageSize:   4096,
		WorkerPoolSize:   10,
		MaxWorkerTaskLen: 1024,
		MaxMsgChanLen:    1024,
	}
}
