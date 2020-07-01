package zinxWebsocket

import (
	"fmt"
	"server/zinx/ziface"
	"server/zinx/znet"
	"server/zinxWebsocket/link"
	"time"
)

//当客户端建立连接的时候的hook函数
func OnConnectionAdd(conn ziface.IWSConnection) {
	//创建一个用户长连接
	newLink := link.NewLink(conn)
	//将该连接绑定属性linkId
	conn.SetProperty("linkId", newLink.LinkId)
	time.AfterFunc(time.Second * 30, func() {
		if oid,_ := conn.GetProperty("OutId"); oid == nil {
			fmt.Println("数据异常，断开连接！")
			conn.Stop()
		}
	})
}

//当客户端断开连接的时候的hook函数
func OnConnectionLost(conn ziface.IWSConnection) {
	//获取当前连接的Pid属性
	linkId, _ := conn.GetProperty("linkId")
	//根据pid获取对应的玩家对象
	target := link.Manager.Find(linkId.(uint32))
	//触发玩家下线业务
	if linkId != nil {
		target.LostConnection()
	}
	fmt.Println("====> Player ", linkId, " left =====")
}

func Init()  {
	//创建服务器句柄
	s := znet.NewServer()

	//注册客户端连接建立和丢失函数
	s.SetOnConnStart(OnConnectionAdd)
	s.SetOnConnStop(OnConnectionLost)
	//注册路由


	//启动服务
	s.Serve()
}