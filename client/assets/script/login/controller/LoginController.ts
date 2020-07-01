
import Http from "../../framework/net/Http";
import { SystemInfo } from "../../entry/model/SystemInfo";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { UITip } from "../../commonUI/UITip";
import { UserData } from "../model/UserData";
import { Session } from "../model/SessionData";
import { UIManager } from "../../framework/ui/UIManager";
import { UILogin } from "../view/UILogin";
import { UIMap } from "../../battle/map/view/UIMap";



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
        Clog.Green(ClogKey.Login, "HttpLogin >>" + JSON.stringify(postData));
        let data = await Http.Post(SystemInfo.Address.Login, postData)
        let errorCode = data["ErrorCode"]
        if (errorCode != 0) {
            UITip.Info(errorCode)
            return;
        }
        Clog.Green(ClogKey.Login, "HttpLogin >> data:" + JSON.stringify(data));
        Session.User = new UserData(data["User"])
        await UIManager.CloseUI(UILogin)
        await UIManager.OpenUI(UIMap)
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
        Clog.Green(ClogKey.Login, "HttpLogin >>" + JSON.stringify(postData));
        let data = await Http.Post(SystemInfo.Address.Register, postData)
        let errorCode = data["ErrorCode"]
        if (errorCode != 0) {
            UITip.Info(errorCode)
            return;
        }
        Clog.Green(ClogKey.Login, "HttpLogin >> data:" + JSON.stringify(data));

    }

}

