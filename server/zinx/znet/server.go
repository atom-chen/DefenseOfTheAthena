package znet

import (
	"errors"
	"fmt"
	"github.com/gorilla/websocket"
	"net"
	"net/http"
	"server/zinx/utils"
	"server/zinx/ziface"
	"strconv"
	"sync"
	"time"
)

//iServer的接口实现，定义一个Server的服务器模块
type Server struct {
	//服务器的名称
	Name string
	//服务器绑定的IP版本
	IPVersion string
	//服务器监听的IP
	IP string
	//服务器监听的端口
	Port int
	//当前Server由用户绑定的回调router,也就是Server注册的链接对应的处理业务
	MsgHandle ziface.IMsgHandle
	// 唯一的route  Router ziface.IRouter
	//当前的Server的链接管理器
	ConnMgr ziface.IConnManager

	// ============================
	//新增两个hook函数原型

	//该Server的连接创建时Hook函数
	OnConnStart func(conn ziface.IWSConnection)
	//该Server的连接断开时的Hook函数
	OnConnStop func(conn ziface.IWSConnection)
}

var (
	cid uint32 = 0
 	cIdLock sync.Mutex //保护CidGen的互斥机制
	upgrader = websocket.Upgrader{
		//允许跨域
		CheckOrigin: func(r *http.Request) bool {
			return true
		},
	}
)


/*
  创建一个服务器句柄
*/
func NewServer() ziface.IServer {
	//先初始化全局配置文件
	//utils.GlobalObject.Reload()

	s := &Server{
		Name: utils.GlobalObject.Name,
		IPVersion: "tcp4",
		IP: utils.GlobalObject.Host,
		Port:utils.GlobalObject.TcpPort,
		MsgHandle: NewMsgHandle(), //msgHandler 初始化
		ConnMgr: NewConnManager(), //创建ConnManager
	}

	return s
}
//============== 实现 ziface.IServer 里的全部接口方法 ========

//路由功能：给当前服务注册一个路由业务方法，供客户端链接处理使用
func (s *Server) AddRouter(msgId uint32, router ziface.IRouter) {
	//s.Router = router

	s.MsgHandle.AddRouter(msgId, router)
	fmt.Println("Add Router succ! " )
	//panic("implement me")
}

//定义当前客户端连接所绑定的handle api（目前这个handle是写死的，以后优化应该又用户自定义）
func CallBackToClient(conn *net.TCPConn, data []byte, cnt int)error{
	//回显的业务
	fmt.Println("【Conn Handle】 CallbackToClient")
	if _, err := conn.Write(data[:cnt]); err != nil{
		fmt.Println("write back buf err", err)
		return errors.New("CallBackToClient error")
	}

	return nil

}


func (s *Server) wsHandler(w http.ResponseWriter, r *http.Request){
	var (
		wsConn *websocket.Conn
		err error
		conn *WSConnection
		//data []byte
	)


	if wsConn, err = upgrader.Upgrade(w, r,nil); err != nil {
		return
	}
	go func() {
		//TODO server.go 应该有一个自动生成ID的方法
		//3 启动server网络连接业务
		//开启一个go去做服务端Linster业务
		//3.1 阻塞等待客户端建立连接请求
		//=============
		//3.2 TODO Server.Start() 设置服务器最大连接控制,如果超过最大连接，那么则关闭此新的连接
		if s.ConnMgr.Len() >= utils.GlobalObject.MaxConn {
			conn.Stop()
			return
		}
		//=============
		//3.3 处理该新连接请求的 业务 方法， 此时应该有 handler 和 conn是绑定的
		cIdLock.Lock()
		if conn,err = InitConnection(wsConn,s,cid ,s.MsgHandle);err != nil {
			conn.Stop()
		}
		cid ++
		cIdLock.Unlock()
		//3.4 启动当前链接的处理业务
		go conn.Start()
		//if err = conn.WriteMessage([]byte("HeartBeat: ")); err != nil {
		//	return
		//}
	}()

}


func (s *Server)Start()  {
	fmt.Printf("[Start] Server Listenner at IP :%s,Port:%s,is starting \n",s.IP,s.Port)
	fmt.Printf("[Zinx] Version: %s, MaxConn: %d,  MaxPacketSize: %d\n",
		utils.GlobalObject.Version,
		utils.GlobalObject.MaxConn,
		utils.GlobalObject.MaxPacketSize)
	go func() {
		//0 启动worker工作池机智
		port := strconv.Itoa(s.Port)
		s.MsgHandle.StartWorkerPool()
		http.HandleFunc("/ws",s.wsHandler)
		http.ListenAndServe("0.0.0.0:" + port,nil)
	}()
}

func (s *Server)Stop()  {
	fmt.Println("[STOP] Zinx server , name " , s.Name)

	//TODO  Server.Stop() 将其他需要清理的连接信息或者其他信息 也要一并停止或者清理
	s.ConnMgr.ClearConn()

}

func (s *Server)Serve()  {
	//启动server的服务功能
	s.Start()

	//TODO Server.Serve() 是否在启动服务的时候 还要处理其他的事情呢 可以在这里添加

	//阻塞,否则主Go退出， listenner的go将会退出
	for {
		time.Sleep(10*time.Second)
	}
}


//得到链接管理
func (s *Server) GetConnMgr() ziface.IConnManager {
	return s.ConnMgr
}

//设置该Server的连接创建时Hook函数
func (s *Server) SetOnConnStart(hookFunc func(connection ziface.IWSConnection)){
	s.OnConnStart = hookFunc
}

//设置该Server的连接断开时的Hook函数
func (s *Server) SetOnConnStop(hookFunc func (ziface.IWSConnection)) {
	s.OnConnStop = hookFunc
}

//调用连接OnConnStart Hook函数
func (s *Server) CallOnConnStart(conn ziface.IWSConnection) {
	if s.OnConnStart != nil {
		fmt.Println("---> CallOnConnStart....")
		s.OnConnStart(conn)
	}
}

//调用连接OnConnStop Hook函数
func (s *Server) CallOnConnStop(conn ziface.IWSConnection) {
	if s.OnConnStop != nil {
		fmt.Println("---> CallOnConnStop....")
		s.OnConnStop(conn)
	}
}