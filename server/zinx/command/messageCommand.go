package command

const (
	HeartBeat    MessageCommand = 1
	LongLinkAuth MessageCommand = 2
	GetUserInfo  MessageCommand = 3
)

//消息类型
type MessageCommand uint32

func (t MessageCommand) ToString() string {
	switch t {
	case HeartBeat:
		return "心跳"
	case LongLinkAuth:
		return "长连接授权"
	case GetUserInfo:
		return "获取该玩家的数据信息"
	default:
		return "UNKNOWN"
	}
}
