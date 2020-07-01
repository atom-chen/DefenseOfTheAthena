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
	//获取远程客户端的TCP状态  IP PORT
	//RemoteAddr() net.Addr
	//直接将Message数据发送数据给远程的TCP客户端(无缓冲)
	//SendMsg(msgId uint32, data []byte) error
	//直接将Message数据发送数据给远程的TCP客户端(有缓冲)
	//SendBuffMsg(msgId uint32, data []byte) error   //添加带缓冲发送消息接口

	WriteMessage([]byte)  error

	//设置连接属性
	SetProperty(key string, value interface{})
	//获取链接属性
	GetProperty(key string)(interface{}, error)
	//移除连接属性
	RemoveProperty(key string)
}
