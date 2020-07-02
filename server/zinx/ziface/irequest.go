package ziface

//把客户端数据包装成一个request
type IRequest interface {
	//得到当前连接
	GetConn() IConnection
	//得到请求数据
	GetMessage() interface{}
	//得到请求messageCommand
	GetCommand() uint32
}
