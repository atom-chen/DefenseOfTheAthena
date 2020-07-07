import { pb } from "./proto"

export class ErrorDecode {
   
    public static ToChinese(code: pb.ErrorCode):string {
        switch (code) {
            case pb.ErrorCode.OK:
                return "OK"
            case pb.ErrorCode.EntryError:
                return "签名错误"
            case pb.ErrorCode.LoginAccountOrPasswordError:
                return "账号或密码错误"
            case pb.ErrorCode.RegisterAccountExit:
                return "账号已存在"
            case pb.ErrorCode.RoomUnExistent:
                return "房间不存在"
            default:
                return "UNKNOWN"
        }
    }
}

