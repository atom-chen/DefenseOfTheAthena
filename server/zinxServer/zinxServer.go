package zinxServer

import (
	"fmt"
	"server/enum"
	logic2 "server/logic"
	"server/pb"
	"server/zinx/ziface"
	"server/zinx/znet"
	"server/zinxServer/api"
)

//当客户端建立连接的时候的hook函数
func OnConnectionAdd(conn ziface.IWSConnection) {
	//创建一个用户长连接
	newLink := logic2.NewLink(conn)
	//将该连接绑定属性linkId
	linkId := newLink.LinkId
	newLink.Status = enum.Idle
	conn.SetProperty("linkId", linkId)
	fmt.Printf("====> 玩家上线 ,linkId:%d\n", linkId)

	//time.AfterFunc(time.Second * 30, func() {
	//	if oid,_ := conn.GetProperty("OutId"); oid == nil {
	//		log.Println("数据异常，断开连接！")
	//		conn.Stop()
	//	}
	//})
}

//当客户端断开连接的时候的hook函数
func OnConnectionLost(conn ziface.IWSConnection) {
	//获取当前连接的Pid属性
	linkId, _ := conn.GetProperty("linkId")
	//根据pid获取对应的玩家对象
	target := logic2.LinkManager.Find(linkId.(uint32))
	//触发玩家下线业务
	if linkId == nil {
		return
	}
	target.LostConnection()
	fmt.Printf("====> 玩家下线 ,linkId:%d\n", linkId)
}

//说明：服务器数据结构分三类，
//1. 执久层数据，即mongodb中的数据，按数据执久需求定义，在db模块里
//2. 逻辑层数据，即服务器本地数据，用来服务器作各种运算，按逻辑需求定义，在logic模块里
//3. 传输层数据，即服务器与客户端交互数据，在pb模块里（即protobuf）

func Init() {
	//创建服务器句柄
	s := znet.NewServer()
	//注册客户端连接建立和丢失函数
	s.SetOnConnStart(OnConnectionAdd)
	s.SetOnConnStop(OnConnectionLost)
	//注册路由
	s.AddRouter(uint32(pb.MessageCommand_CallLinkAuth), &api.Auth{})
	s.AddRouter(uint32(pb.MessageCommand_CallHeartBeat), &api.HeartBeat{})
	s.AddRouter(uint32(pb.MessageCommand_CallGetUserInfo), &api.UserInfo{})
	s.AddRouter(uint32(pb.MessageCommand_CallCreateRoom), &api.CreateRoom{})
	s.AddRouter(uint32(pb.MessageCommand_CallJoinRoom), &api.JoinRoom{})
	s.AddRouter(uint32(pb.MessageCommand_InputRoomReady), &api.RoomReady{})
	s.AddRouter(uint32(pb.MessageCommand_InputRoomRole), &api.RoomRole{})
	//启动服务
	s.Serve()
}
