package messageCommand

const (
	HeartBeat    CmdType = 1
	LongLinkAuth CmdType = 2
	GetUserInfo  CmdType = 3
)

type CmdType uint

func (t CmdType) ToString() string {
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
