package ziface

import (
	"github.com/gorilla/websocket"
)

type IWSConnection interface {
	//启动链接 让当前的链接准备开始工作
	Start()
	//停止链接
	Stop()
	//获取当前连接的绑定webSocket conn
	GetTCPConnection() *websocket.Conn
	//获取当前连接模块的连接ID
	GetConnID() uint32

	WriteMessage([]byte) error
	//设置连接属性
	SetProperty(key string, value interface{})
	//获取链接属性
	GetProperty(key string) (interface{}, error)
	//移除连接属性
	RemoveProperty(key string)
}
