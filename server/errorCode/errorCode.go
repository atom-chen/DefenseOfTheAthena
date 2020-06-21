package errorCode

const (
	OK                          ErrorCode = 0
	HelloError ErrorCode = 1
	LoginAccountOrPasswordError ErrorCode = 2
	RegisterAccountExit         ErrorCode = 3
)

type ErrorCode uint

func (e ErrorCode) ToString() string {
	switch e {
	case OK:
		return "OK"
	case HelloError:
		return "签名错误"
	case LoginAccountOrPasswordError:
		return "账号或密码错误"
	case RegisterAccountExit:
		return "账号已存在"
	default:
		return "UNKNOWN"
	}
}
