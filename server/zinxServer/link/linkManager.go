package link

import (
	"log"
	"sync"
)

type manager struct {
	UserLink map[uint32]*UserLink //管理的玩家连接
	Lock     sync.RWMutex         //读写玩家的读写锁
}

//提供一个对外的管理模块句柄
var Manager *manager

func init() {
	Manager = &manager{
		UserLink: make(map[uint32]*UserLink),
	}
}

//增加玩家长连接
func (m *manager) Add(link *UserLink) {
	//保护共享资源Map 加写锁
	Manager.Lock.Lock()
	defer Manager.Lock.Unlock()
	//将玩家添加到PlayerManager中
	Manager.UserLink[link.LinkId] = link
	log.Println("add link successfully: player num = ", Manager.Len())
}

//删除玩家长连接
func (m *manager) Remove(linkId uint32) {
	//保护共享资源Map 加写锁
	Manager.Lock.Lock()
	defer Manager.Lock.Unlock()
	//将玩家添加到PlayerManager中
	delete(Manager.UserLink, linkId)
	log.Println("link Remove linkId=", linkId, " successfully: linked num = ", Manager.Len())
}

func (m *manager) Find(linkId uint32) *UserLink {
	//保护共享资源Map 加写锁
	Manager.Lock.Lock()
	defer Manager.Lock.Unlock()
	return Manager.UserLink[linkId]
}

//获取所有玩家的信息
func (m *manager) AllLinks() []*UserLink {
	Manager.Lock.RLock()
	defer Manager.Lock.RUnlock()
	//创建返回的player集合切片
	links := make([]*UserLink, 0)
	//添加切片
	for _, v := range Manager.UserLink {
		links = append(links, v)
	}
	//返回
	return links
}

//清空玩家连接
func (m *manager) Clear() {
	//保护共享资源Map 加写锁
	Manager.Lock.Lock()
	defer Manager.Lock.Unlock()

	//停止并删除全部的玩家信息
	for lindId, userLink := range Manager.UserLink {
		//清空玩家信息，踢掉在线的玩家
		userLink.Conn.Stop()
		//删除
		delete(Manager.UserLink, lindId)
	}
}

//获取长连接玩家数量
func (m *manager) Len() int {
	return len(Manager.UserLink)
}
