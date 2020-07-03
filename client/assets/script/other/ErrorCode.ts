
export class ErrorCode {
    public static readonly OK: number = 0
    public static readonly HelloError: number = 1
    public static readonly LoginAccountOrPasswordError: number = 2
    public static readonly RegisterAccountExit: number = 3

    public static ToString(code: number):string {
        switch (code) {
            case this.OK:
                return "OK"
            case this.HelloError:
                return "签名错误"
            case this.LoginAccountOrPasswordError:
                return "账号或密码错误"
            case this.RegisterAccountExit:
                return "账号已存在"
            default:
                return "UNKNOWN"
        }
    }
}

