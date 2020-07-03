package znet

import (
	"server/zinx/command"
	"server/zinx/ziface"
)

type Request struct {
	//当前用户连接
	conn ziface.IConnection
	//消息messageCommand
	command command.MessageCommand
	//消息体
	message interface{}
}

//创建消息
func NewRequest(conn ziface.IConnection, command command.MessageCommand, message interface{}) *Request {
	r := &Request{
		conn:    conn,
		command: command,
		message: message,
	}
	return r
}

//得到当前连接
func (r *Request) GetConn() ziface.IConnection {
	return r.conn
}

//得到请求数据
func (r *Request) GetMessage() interface{} {
	return r.message
}

//得到Command
func (r *Request) GetCommand() command.MessageCommand {
	return r.command
}
