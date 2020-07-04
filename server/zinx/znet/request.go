package znet

import (
	"server/pb"
	"server/zinx/ziface"
)

type Request struct {
	conn ziface.IWSConnection //已经和客户端建立好的 链接
	msg  pb.ReqPackage        //客户端请求的数据
}

func NewRequest(conn ziface.IWSConnection, msg pb.ReqPackage) *Request {
	return &Request{
		conn: conn,
		msg:  msg,
	}
}

//获取请求连接信息
func (r *Request) GetConnection() ziface.IWSConnection {
	return r.conn
}

//获取请求消息的数据
func (r *Request) GetData() []byte {
	return r.msg.Msg
}

//获取请求的消息的ID
func (r *Request) GetMsgID() uint32 {
	return uint32(r.msg.Cmd)
}
