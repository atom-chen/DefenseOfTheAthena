package znet

import (
	"errors"
	"log"
	"server/zinx/ziface"
	"sync"
)

//连接管理
type ConnManager struct {
	//管理连接
	connections map[uint32]ziface.IConnection
	//保护连接锁
	connLock sync.RWMutex
}

//创建管理
func NewConnManager() *ConnManager {
	return &ConnManager{
		connections: make(map[uint32]ziface.IConnection),
	}
}

//添加连接
func (connMgr *ConnManager) Add(conn ziface.IConnection) {
	//共享锁
	connMgr.connLock.Lock()
	defer connMgr.connLock.Unlock()
	connMgr.connections[conn.GetConnId()] = conn
	log.Println("connManager add connId:", conn.GetConnId())
}

//删除连接
func (connMgr *ConnManager) Remove(conn ziface.IConnection) {
	//共享锁
	connMgr.connLock.Lock()
	defer connMgr.connLock.Unlock()
	delete(connMgr.connections, conn.GetConnId())
	log.Println("connManager Remove connId:", conn.GetConnId())
}

//根据id查找连接
func (connMgr *ConnManager) Get(connId uint32) (ziface.IConnection, error) {
	//共享锁
	connMgr.connLock.RLock()
	defer connMgr.connLock.RUnlock()
	if conn, ok := connMgr.connections[connId]; ok {
		return conn, nil
	} else {
		return nil, errors.New("connmanager Get err")
	}
}

//总连接个数
func (connMgr *ConnManager) Len() int {
	return len(connMgr.connections)
}

//清除全部连接
func (connMgr *ConnManager) ClearConn() {
	//共享锁
	connMgr.connLock.Lock()
	defer connMgr.connLock.Unlock()
	//删除conn停止工作
	for connId, conn := range connMgr.connections {
		conn.Stop()
		delete(connMgr.connections, connId)
	}
	log.Println("connManager Clear Conn success")
}
