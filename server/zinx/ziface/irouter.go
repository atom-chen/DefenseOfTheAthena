package ziface

//路由接口
type IRouter interface {
	//处理业务之前
	PreHandle(request IRequest)
	//处理业务
	Handle(request IRequest)
	//处理业务之后
	PostHandle(request IRequest)
}
