package logic

import (
	"log"
	"sync"
)

type UserLinkManager struct {
	UserLink map[uint32]*UserLink //管理的玩家连接
	Lock     sync.RWMutex         //读写玩家的读写锁
}

//提供一个对外的管理模块句柄
var LinkManager *UserLinkManager

func init() {
	LinkManager = &UserLinkManager{
		UserLink: make(map[uint32]*UserLink),
	}
}

//增加玩家长连接
func (m *UserLinkManager) Add(link *UserLink) {
	//保护共享资源Map 加写锁
	LinkManager.Lock.Lock()
	defer LinkManager.Lock.Unlock()
	//将玩家添加到PlayerManager中
	LinkManager.UserLink[link.LinkId] = link
	log.Println("add link successfully: player num = ", LinkManager.Len())
}

//删除玩家长连接
func (m *UserLinkManager) Remove(linkId uint32) {
	//保护共享资源Map 加写锁
	LinkManager.Lock.Lock()
	defer LinkManager.Lock.Unlock()
	//将玩家添加到PlayerManager中
	delete(LinkManager.UserLink, linkId)
	log.Println("link Remove linkId=", linkId, " successfully: linked num = ", LinkManager.Len())
}

func (m *UserLinkManager) Find(linkId uint32) *UserLink {
	//保护共享资源Map 加写锁
	LinkManager.Lock.Lock()
	defer LinkManager.Lock.Unlock()
	return LinkManager.UserLink[linkId]
}

//获取所有玩家的信息
func (m *UserLinkManager) AllLinks() []*UserLink {
	LinkManager.Lock.RLock()
	defer LinkManager.Lock.RUnlock()
	//创建返回的player集合切片
	links := make([]*UserLink, 0)
	//添加切片
	for _, v := range LinkManager.UserLink {
		links = append(links, v)
	}
	//返回
	return links
}

//清空玩家连接
func (m *UserLinkManager) Clear() {
	//保护共享资源Map 加写锁
	LinkManager.Lock.Lock()
	defer LinkManager.Lock.Unlock()
	//停止并删除全部的玩家信息
	for lindId, userLink := range LinkManager.UserLink {
		//清空玩家信息，踢掉在线的玩家
		userLink.Conn.Stop()
		//删除
		delete(LinkManager.UserLink, lindId)
	}
}

//获取长连接玩家数量
func (m *UserLinkManager) Len() int {
	return len(LinkManager.UserLink)
}

//同一个房间的所有玩家连接
func (m *UserLinkManager) GetLinkByRoomId(rid uint32) []*UserLink {
	links := make([]*UserLink, 0)
	for _, v := range LinkManager.UserLink {
		if v.CurRoom != nil && v.CurRoom.RoomId == rid {
			links = append(links, v)
		}
	}
	return links
}
