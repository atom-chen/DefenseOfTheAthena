package api

import (
	"encoding/json"
	"fmt"
	"server/messageCommand"
	"server/zinx/ziface"
	"server/zinx/znet"
	"server/zinxServer/link"
)

//验证Websocket连接
type HeartBeat struct {
	znet.BaseRouter
}

func (t *HeartBeat) Handle(request ziface.IRequest) {
	//根据连接获取玩家
	l, _ := request.GetConn().GetProperty("linkId")
	linkId := l.(uint32)
	userLink := link.Manager.Find(linkId)
	type heartBeatResp struct {
		Cmd messageCommand.CmdType
		Msg string
	}
	resp := &heartBeatResp{
		Cmd: messageCommand.HeartBeat,
		Msg: "pong",
	}
	jsonData, err := json.Marshal(resp)
	if err != nil {
		return
	}
	//心跳特殊处理
	if err := userLink.Conn.SendMsg(string(jsonData)); err != nil {
		fmt.Println("userLink HeartBeat error !")
		return
	}
	fmt.Printf("发送心跳成功, resp:%s\n", string(jsonData))
	return
}
