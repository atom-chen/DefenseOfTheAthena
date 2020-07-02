package znet

import (
	"server/messageCommand"
	"server/zinx/ziface"
)

type Request struct {
	conn ziface.IWSConnection   //已经和客户端建立好的 链接
	cmd  messageCommand.CmdType //消息cmd
	msg  interface{}            //客户端请求的数据
}

//获取请求连接信息
func (r *Request) GetConnection() ziface.IWSConnection {
	return r.conn
}

//获取请求消息的数据
func (r *Request) GetMsg() interface{} {
	return r.msg
}

//获取请求的消息的ID
func (r *Request) GetCmd() messageCommand.CmdType {
	return r.cmd
}
