package db

import (
	"fmt"
	"gopkg.in/mgo.v2/bson"
	"server/mongodb"
)

//执久层游戏统计数据,用于统计玩家在一个地图
type Statistics struct {
	UserId   uint32 //用户Id
	MapId    uint32 //地图Id
	TotalNum uint32 //总场次
	PassNum  uint32 //通过场次
	MapLv    uint32 //游戏等级
}

//查询用户统计数据
func FindStatisticsByUid(id uint32) *Statistics {
	var target = new(Statistics)
	err := mongodb.FindOne("UserStatistics", bson.M{"Id": id}, nil, &target)
	if err != nil {
		fmt.Printf("FindUserByAccountAndPassword Error, id=%d\n", id)
		return &Statistics{
			UserId:   0,
			TotalNum: 0, //总场次
			PassNum:  0, //通过场次
			MapLv:    0, //游戏等级
		}
	}
	return target
}
