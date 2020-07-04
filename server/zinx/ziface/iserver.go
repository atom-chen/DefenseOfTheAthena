package ziface

//服务器接口
type IServer interface {
	//启动服务器
	Start()
	//停止服务器
	Stop()
	//运行服务器
	Serve()
	//路由功能：给当前服务注册一个路由业务方法，供客户端链接处理使用
	AddRouter(cmd uint32, router IRouter)
	//得到链接管理
	GetConnMgr() IConnManager
	//设置该Server的链接创建时的Hook函数
	SetOnConnStart(func(IWSConnection))
	//设置该Server的连接断开时的Hook函数
	SetOnConnStop(func(IWSConnection))
	//调用连接OnConnStart Hook函数
	CallOnConnStart(conn IWSConnection)
	//调用连接OnConnStop Hook函数
	CallOnConnStop(conn IWSConnection)
}
