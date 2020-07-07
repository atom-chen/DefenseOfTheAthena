package link

import (
	"fmt"
	"github.com/golang/protobuf/proto"
	"log"
	"server/pb"
)

//同步当前玩家的游戏启动前的状态
func (l *UserLink) SyncPreGame() {
	if l.User == nil || l.CurRoom == nil {
		return
	}

	userStates := make([]*pb.SyncPreGame_ProGameState, 0)
	for _, v := range l.CurRoom.Users {
		item := &pb.SyncPreGame_ProGameState{
			UserId:       v.Id,
			UserNickName: v.NickName,
			IsReady:      false,
			GameRoleId:   1,
		}
		userStates = append(userStates, item)
	}
	msg := &pb.SyncPreGame{
		RoomId:   l.CurRoom.RoomId,
		RoomName: l.CurRoom.RoomName,
		MapId:    1,
		States:   userStates,
	}
	msgBuf, err := proto.Marshal(msg)
	if err != nil {
		return
	}

	resp := &pb.RespPackage{
		Cmd:     pb.MessageCommand_PreGame,
		ErrCode: pb.ErrorCode_OK,
		Msg:     msgBuf,
	}
	pbBuf, err := proto.Marshal(resp)
	if err != nil {
		return
	}
	if err := l.Conn.WriteMessage(pbBuf); err != nil {
		log.Println("CreateRoom error !")
		return
	}
	fmt.Printf("[同步preGame信息],connId=%d, cmd=%d, errcode=%s, msg=%v\n", l.Conn.GetConnId(), resp.Cmd, resp.ErrCode, msg)
	return
}
