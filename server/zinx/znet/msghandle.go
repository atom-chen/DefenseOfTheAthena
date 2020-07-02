package znet

import (
	"fmt"
	"log"
	"server/zinx/utils"
	"server/zinx/ziface"
	"strconv"
)

//消息处理模块
type MsgHandle struct {
	//消息处理
	Apis map[uint32]ziface.IRouter //存放每个MsgId 所对应的处理方法的map属性
	//负责worker取任务消息队列
	TaskQueue []chan ziface.IRequest
	//业务工作worker池的worker数量
	WorkerPoolSize uint32
}

//创建
func NewMsgHandle() *MsgHandle {
	return &MsgHandle{
		Apis:           make(map[uint32]ziface.IRouter),
		TaskQueue:      make([]chan ziface.IRequest, utils.GlobalObject.WorkerPoolSize),
		WorkerPoolSize: utils.GlobalObject.WorkerPoolSize, //从全局配置获取
	}
}

//执行对应的路由处理方法
func (mh *MsgHandle) DoMsgHandler(request ziface.IRequest) {
	handler, ok := mh.Apis[request.GetCommand()]
	if !ok {
		fmt.Println("api msgId = ", request.GetCommand(), " is not FOUND!")
		return
	}
	handler.PreHandle(request)
	handler.Handle(request)
	handler.PostHandle(request)
}

//添加路由
func (mh *MsgHandle) AddRouter(msgId uint32, router ziface.IRouter) {
	//1 判断当前msg绑定的API处理方法是否已经存在
	if _, ok := mh.Apis[msgId]; ok {
		panic("repeated api , msgId = " + strconv.Itoa(int(msgId)))
	}
	//2 添加msg与api的绑定关系
	mh.Apis[msgId] = router
	fmt.Println("Add api msgId = ", msgId)
}

//启动一个worker工作池 只能发生一次
func (mh *MsgHandle) StartWorkerPool() {
	//根据workerPoolSize启动一个go承载
	for i := 0; i < int(mh.WorkerPoolSize); i++ {
		//一个worker被启动
		//当前worker对应的chan开启空间
		mh.TaskQueue[i] = make(chan ziface.IRequest, utils.GlobalObject.MaxWorkerTaskLen)
		//启动当前的worker，阻塞等待
		go mh.StartOneWorker(i, mh.TaskQueue[i])
	}
}

//启动一个工作流程
func (mh *MsgHandle) StartOneWorker(workerID int, taskQueue chan ziface.IRequest) {
	// log.Println("msgHandle StartOneWorker workerId:", workerID)
	for {
		select {
		//如果有消息过来，执行绑定的业务
		case request := <-taskQueue:
			mh.DoMsgHandler(request)
		}
	}
}

//将消息交给taskQueue处理
func (mh *MsgHandle) SendMsgToTaskQueue(request ziface.IRequest) {
	//将消息平均分配
	workerID := request.GetConn().GetConnId() % utils.GlobalObject.WorkerPoolSize
	log.Println("msgHandle SendMsgToTaskQueue workerID:", workerID, " connId:", request.GetConn().GetConnId())
	//将消息发送给对应的worker
	mh.TaskQueue[workerID] <- request
}
