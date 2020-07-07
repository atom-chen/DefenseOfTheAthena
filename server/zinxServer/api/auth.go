package api

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"log"
	"server/db"
	"server/pb"
	"server/zinx/ziface"
	"server/zinx/znet"
	"server/zinxServer/link"
)

//验证Websocket连接
type Auth struct {
	znet.BaseRouter
}

func (a *Auth) Handle(request ziface.IRequest) {
	//根据连接获取玩家
	l, _ := request.GetConnection().GetProperty("linkId")
	linkId := l.(uint32)
	userLink := link.Manager.Find(linkId)
	u := db.FindUserByToken(request.GetToken())
	var pkg = new(pb.RespPackage)
	pkg.Cmd = pb.MessageCommand_LinkAuth
	if u == nil {
		pkg.ErrCode = pb.ErrorCode_LoginAccountOrPasswordError
		userLink.Conn.Stop()
	} else {
		userLink.User = u
		pkg.ErrCode = pb.ErrorCode_OK
	}
	pkgBuf, err := proto.Marshal(pkg)
	if err != nil {
		return
	}
	//心跳特殊处理
	if err := userLink.Conn.WriteMessage(pkgBuf); err != nil {
		log.Println("userLink HeartBeat error !")
		return
	}
	fmt.Printf("[授权],connId=%d, pkg=%v\n", userLink.Conn.GetConnId(), pkg)
	return
}
