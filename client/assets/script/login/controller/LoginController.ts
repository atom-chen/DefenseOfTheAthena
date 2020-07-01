import { SessionData, Address, Session } from "../model/LoginData";
import Http from "../../framework/net/Http";
import { GameInfo } from "../../entry/model/GameInfo";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { UITip } from "../../commonUI/UITip";


export class LoginController {

    public static async HttpHello() {
        let postData = {
            world: "151df4d2ddbdd1ad6a64c2c18b294828",
        }
        Clog.Green(ClogKey.Login, "HttpHello >>" + JSON.stringify(postData));
        let data = await Http.Post(GameInfo.MainURL, postData)
        let errorCode = data["ErrorCode"]
        if (errorCode != 0) {
            UITip.Info(errorCode)
            return;
        }
        Clog.Green(ClogKey.Login, "HttpHello >> data:" + JSON.stringify(data));
        Session.Address = new Address(data["Address"])
    }


    public static async HttpLogin(account: string, password: string) {
        let postData = {
            account: account,
            password: password
        }
        Clog.Green(ClogKey.Login, "HttpLogin >>" + JSON.stringify(postData));
        let data = await Http.Post(Session.Address.Login, postData)
        let errorCode = data["ErrorCode"]
        if (errorCode != 0) {
            UITip.Info(errorCode)
            return;
        }
        Clog.Green(ClogKey.Login, "HttpLogin >> data:" + JSON.stringify(data));

    }

    
    public static async HttpRegishter(account: string, password: string) {
        let postData = {
            account: account,
            password: password
        }
        Clog.Green(ClogKey.Login, "HttpLogin >>" + JSON.stringify(postData));
        let data = await Http.Post(Session.Address.Register, postData)
        let errorCode = data["ErrorCode"]
        if (errorCode != 0) {
            UITip.Info(errorCode)
            return;
        }
        Clog.Green(ClogKey.Login, "HttpLogin >> data:" + JSON.stringify(data));

    }

}

