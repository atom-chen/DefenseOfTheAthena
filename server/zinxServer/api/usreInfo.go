package api

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"log"
	"server/db"
	"server/logic"
	"server/pb"
	"server/zinx/ziface"
	"server/zinx/znet"
)

type UserInfo struct {
	znet.BaseRouter
}

func (a *UserInfo) Handle(request ziface.IRequest) {
	//根据连接获取玩家
	l, _ := request.GetConnection().GetProperty("linkId")
	linkId := l.(uint32)
	userLink := logic.LinkManager.Find(linkId)
	u := db.FindUserByToken(request.GetToken())
	var pkg = new(pb.RespPackage)
	if u == nil {
		pkg.Cmd = pb.MessageCommand_CallGetUserInfo
		pkg.ErrCode = pb.ErrorCode_AuthFailed
		userLink.Conn.Stop()
		return
	}
	resp := &pb.RespUserInfo{
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
	userInfoBuf, err := proto.Marshal(resp)
	if err != nil {
		return
	}

	pkg.Cmd = pb.MessageCommand_CallGetUserInfo
	pkg.ErrCode = pb.ErrorCode_OK
	pkg.Msg = userInfoBuf

	pkgBuf, err := proto.Marshal(pkg)
	if err != nil {
		return
	}
	if err := userLink.Conn.WriteMessage(pkgBuf); err != nil {
		log.Println("[获取用户信息] error !")
		return
	}
	fmt.Printf("[获取用户信息],connId=%d, cmd=%d, errcode=%s, msg=%v\n", userLink.Conn.GetConnId(), pkg.Cmd, pkg.ErrCode, resp)
	return
}
