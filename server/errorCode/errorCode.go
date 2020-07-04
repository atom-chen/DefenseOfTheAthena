package errorCode

import "server/pb"

//打印错误日志
func Print(e pb.ErrorCode) string {
	switch e {
	case pb.ErrorCode_OK:
		return "OK"
	case pb.ErrorCode_HelloError:
		return "签名错误"
	case pb.ErrorCode_LoginAccountOrPasswordError:
		return "账号或密码错误"
	case pb.ErrorCode_RegisterAccountExit:
		return "账号已存在"
	default:
		return "UNKNOWN"
	}
}
