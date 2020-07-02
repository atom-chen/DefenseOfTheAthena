
import Http from "../../framework/net/Http";
import { SystemInfo } from "../../entry/model/SystemInfo";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { UITip } from "../../commonUI/UITip";
import { UserData } from "../model/UserData";
import { Session } from "../model/SessionData";
import { UIManager } from "../../framework/ui/UIManager";
import { UILogin } from "../view/UILogin";
import { UIMap } from "../../battle/map/view/UIMap";
import { WebSocketController } from "../../websocket/WebSocketController";
import { WebSocketCall } from "../../websocket/WebSocketCall";
import { LinkWebsocket } from "./LinkWebsocket";



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
        let data = await Http.Post(SystemInfo.Address.Login, postData)
        let errorCode = data["ErrorCode"]
        if (errorCode != 0) {
            UITip.Info(errorCode)
            return;
        }
        Session.User = new UserData(data["User"])
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
        let data = await Http.Post(SystemInfo.Address.Register, postData)
        let errorCode = data["ErrorCode"]
        if (errorCode != 0) {
            UITip.Info(errorCode)
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

