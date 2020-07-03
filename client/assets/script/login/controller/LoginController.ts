
import Http from "../../framework/net/Http";
import { SystemInfo } from "../../entry/model/SystemInfo";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { UITip } from "../../commonUI/UITip";
import { UserData } from "../model/UserData";
import { Session } from "../model/SessionData";
import { LinkWebsocket } from "./LinkWebsocket";
import { ErrorCode } from "../../other/ErrorCode";
import { UIManager } from "../../framework/ui/UIManager";


export class LoginController {

    /**
     * 登录服务器
     * @param account 账号
     * @param password 密码
     */
    public static async HttpLogin(account: string, password: string) {
        let postData = {
            account: account,
            password: password
        }
        let data = await Http.Post(SystemInfo.Address.Http + "/Login", postData)
        let errorCode = data["ErrorCode"]
        if (errorCode != ErrorCode.OK) {
            UITip.Info(ErrorCode.ToString(errorCode))
            return;
        }
        Session.User = new UserData(data["User"])
        Session.Token = data["Token"]
        await LinkWebsocket.Start();
    }


    /**
     * 注册用户
     * @param account 账号
     * @param password 密码
     */
    public static async HttpRegishter(account: string, password: string) {
        let postData = {
            account: account,
            password: password
        }
        Clog.Green(ClogKey.Login, "HttpRegishter >>" + JSON.stringify(postData));
        let data = await Http.Post(SystemInfo.Address.Http + "/Register", postData)
        let errorCode = data["ErrorCode"]
        if (errorCode != ErrorCode.OK) {
            UITip.Info(ErrorCode.ToString(errorCode))
            return;
        }
        Clog.Green(ClogKey.Login, "HttpRegishter >> data:" + JSON.stringify(data));

    }

    /**
     * 连接websocket
     */
    public static LinkWebsocket() {

    }
}

