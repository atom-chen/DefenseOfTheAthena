package api

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"log"
	"server/model"
	"server/pb"
	"server/zinx/ziface"
	"server/zinx/znet"
	"server/zinxServer/link"
)

type UserInfo struct {
	znet.BaseRouter
}

func (a *UserInfo) Handle(request ziface.IRequest) {
	//根据连接获取玩家
	l, _ := request.GetConnection().GetProperty("linkId")
	linkId := l.(uint32)

	userLink := link.Manager.Find(linkId)

	u := model.FindUserByToken(request.GetToken())
	var resp = new(pb.RespPackage)
	resp.Cmd = pb.MessageCommand_CallGetUserInfo
	if u == nil {
		resp.ErrCode = pb.ErrorCode_AuthFailed
		userLink.Conn.Stop()
		return
	}
	resp.ErrCode = pb.ErrorCode_OK
	userInfo := &pb.RespUserInfo{
		BaseInfo: &pb.UserBaseInfo{
			NickName: u.NickName,
			Age:      u.Age,
			Lv:       u.Lv,
			Sex:      u.Sex,
			Icon:     u.Icon,
		},
		MoneyInfo: &pb.UserMoneyInfo{
			Gold:    u.Gold,
			Diamond: u.Diamond,
		},
	}
	userInfoBuf, err := proto.Marshal(userInfo)
	if err != nil {
		return
	}
	resp.Msg = userInfoBuf

	respBuf, err := proto.Marshal(resp)
	if err != nil {
		return
	}
	if err := userLink.Conn.WriteMessage(respBuf); err != nil {
		log.Println("[获取用户信息] error !")
		return
	}
	fmt.Printf("[获取用户信息],connId=%d, cmd=%d, errcode=%s, msg=%v\n", userLink.Conn.GetConnId(), resp.Cmd, resp.ErrCode, userInfo)
	return
}
