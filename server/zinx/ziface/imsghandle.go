package ziface

import (
	"server/zinx/command"
)

//消息管理抽象层
type IMsgHandle interface {
	//执行对应的路由处理方法
	DoMsgHandler(request IRequest)
	//添加路由
	AddRouter(command command.MessageCommand, router IRouter)
	//启动一个worker工作池 只能发生一次
	StartWorkerPool()
	//将消息交给taskQueue处理
	SendMsgToTaskQueue(request IRequest)
}
