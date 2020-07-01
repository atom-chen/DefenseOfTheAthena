package MessageCommand

const (
	LongLinkAuth MessageCommand =1
	GetUserInfo MessageCommand = 2
)

type MessageCommand uint

func (m MessageCommand) ToString() string {
	switch m {
	case LongLinkAuth:
		return "长连接授权"
	case GetUserInfo:
		return "获取该玩家的数据信息"
	default:
		return "UNKNOWN"
	}
}