package znet

import (
	"errors"
	"fmt"
	"github.com/golang/protobuf/proto"
	"github.com/gorilla/websocket"
	"log"
	"server/pb"
	"server/zinx/utils"
	"server/zinx/ziface"
	"sync"
)

type WSConnection struct {
	//当前Conn属于哪个Server
	TcpServer ziface.IServer //当前conn属于哪个server，在conn初始化的时候添加即可
	//当前连接的 websocket TCP套接字
	WsConn *websocket.Conn
	//连接的ID
	ConnID uint32
	//有缓冲管道，用于读、写两个goroutine之间的消息通信
	inChan    chan []byte
	outChan   chan []byte
	closeChan chan byte
	mutex     sync.Mutex
	isClosed  bool
	//该连接的处理方法router
	MsgHandler ziface.IMsgHandle
	// ====================================
	//连接属性
	property map[string]interface{}
	//保护连接属性修改的锁
	propertyLock sync.RWMutex
	// ====================================

}

//{“cmd”:command(int),”msg”:”msg_data”(string)}
type JsonMsg struct {
	Cmd interface{} `json:"cmd"`
	Msg interface{} `json:"msg"`
}

func InitConnection(wsConn *websocket.Conn, server ziface.IServer, connID uint32, msgHandler ziface.IMsgHandle) (conn *WSConnection, err error) {
	conn = &WSConnection{
		TcpServer:  server,
		WsConn:     wsConn,
		ConnID:     connID,
		MsgHandler: msgHandler,
		inChan:     make(chan []byte, 1000),
		outChan:    make(chan []byte, 1000),
		closeChan:  make(chan byte, 1),
		isClosed:   false,
		property:   make(map[string]interface{}), //对链接属性map初始化
	}
	//将新创建的Conn添加到链接管理中
	conn.TcpServer.GetConnMgr().Add(conn) //将当前新创建的连接添加到ConnManager中

	return
}

//启动链接 让当前的链接准备开始工作
func (conn *WSConnection) Start() {
	fmt.Println("Conn start() ..ConnID=", conn.ConnID)
	//1 开启用户从客户端读取数据流程的Goroutine
	go conn.readLoop()
	//2 开启用于写回客户端数据流程的Goroutine
	go conn.writeLoop()

	//==================
	//按照用户传递进来的创建连接时需要处理的业务，执行钩子方法
	conn.TcpServer.CallOnConnStart(conn)
	//==================

}

//停止链接
func (conn *WSConnection) Stop() {
	fmt.Println("Conn stop() ..ConnID=", conn.ConnID)

	conn.close()
}

func (conn *WSConnection) ReadMessage() (data []byte, err error) {
	select {
	case data = <-conn.inChan:
	case <-conn.closeChan:
		err = errors.New("connection is closed")
	}

	return
}

func (conn *WSConnection) WriteMessage(data []byte) (err error) {
	select {
	case conn.outChan <- data:
	case <-conn.closeChan:
		err = errors.New("connection is closed")
	}
	return
}

func (conn *WSConnection) GetConnID() uint32 {
	return conn.ConnID
}

func (conn *WSConnection) close() {
	//线程安全的可重入的Close
	_ = conn.WsConn.Close()

	//如果当前链接已经关闭
	if conn.isClosed == true {
		return
	}

	//如果用户注册了该链接的关闭回调业务，那么在此刻应该显示调用
	conn.TcpServer.CallOnConnStop(conn)

	//将链接从连接管理器中删除
	conn.TcpServer.GetConnMgr().Remove(conn)

	conn.mutex.Lock()
	//保证只关闭一次channel
	if !conn.isClosed {
		close(conn.closeChan)
		conn.isClosed = true
	}
	conn.mutex.Unlock()

}

//内部实现
func (conn *WSConnection) readLoop() {
	fmt.Println("Reader Goroutine is running")
	defer fmt.Println(conn.ConnID, " conn reader exit!")
	defer conn.Stop()

	var (
		data []byte
		err  error
	)
	for {
		if _, data, err = conn.WsConn.ReadMessage(); err != nil {
			log.Println("websocket read message err, err=", err)
			goto ERR
		}

		temp := pb.ReqPackage{}
		err = proto.Unmarshal(data, &temp)
		if err != nil {
			log.Println("Unmarshal ReqPackage err, err=", err)
			return
		}

		//todo 每次这里都要检查一上token是否正确，如果token错误，断开连接,暂时只检查有无
		//if temp.Token == "" {
		//	goto ERR
		//}
		req := NewRequest(conn, temp)
		if utils.GlobalObject.WorkerPoolSize > 0 {
			//已经启动工作池机制，将消息交给Worker处理
			//fmt.Println("已经启动工作池机制，将消息交给Worker处理")
			conn.MsgHandler.SendMsgToTaskQueue(req)
		} else {
			//从绑定好的消息和对应的处理方法中执行对应的Handle方法
			//fmt.Println("从绑定好的消息和对应的处理方法中执行对应的Handle方法")
			go conn.MsgHandler.DoMsgHandler(req)
		}
	}
ERR:
	conn.close()
}

func (conn *WSConnection) writeLoop() {
	var (
		data []byte
		err  error
	)
	for {
		select {
		case data = <-conn.outChan:
		case <-conn.closeChan:
			goto ERR
		}
		if err = conn.WsConn.WriteMessage(websocket.BinaryMessage, data); err != nil {
			goto ERR
		}
	}
ERR:
	conn.close()
}

//设置链接属性
func (conn *WSConnection) SetProperty(key string, value interface{}) {
	conn.propertyLock.Lock()
	defer conn.propertyLock.Unlock()

	conn.property[key] = value
}

//获取链接属性
func (conn *WSConnection) GetProperty(key string) (interface{}, error) {
	conn.propertyLock.RLock()
	defer conn.propertyLock.RUnlock()

	if value, ok := conn.property[key]; ok {
		return value, nil
	} else {
		return nil, errors.New("no property found")
	}
}

//移除链接属性
func (conn *WSConnection) RemoveProperty(key string) {
	conn.propertyLock.Lock()
	defer conn.propertyLock.Unlock()

	delete(conn.property, key)
}
