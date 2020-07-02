package enum

const (
	None    LinkStatus = 0 //留空
	Gaming  LinkStatus = 1 //游戏中
	Lobby   LinkStatus = 2 //在大厅
	OffLine LinkStatus = 3 //下线
	Idle    LinkStatus = 4 //空闲
)

type LinkStatus uint

func (e LinkStatus) ToString() string {
	switch e {
	case None:
		return "空"
	case Gaming:
		return "游戏中"
	case Lobby:
		return "在大厅"
	case OffLine:
		return "下线"
	case Idle:
		return "空闲"
	default:
		return "UNKNOWN"
	}
}
