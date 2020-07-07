
import Http from "../../framework/net/Http";
import { SystemInfo } from "../../entry/model/SystemInfo";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { UITip } from "../../commonUI/UITip";
import { UserInfoData, MoneyInfo } from "../model/UserData";
import { Session } from "../model/SessionData";
import { ErrorCode } from "../../other/ErrorCode";
import { UIManager } from "../../framework/ui/UIManager";
import { pb } from "../../other/proto";
import { WebSocketController } from "../../websocket/WebSocketController";
import { HeatBeat } from "../../websocket/HeatBeat";
import { UILobby } from "../../lobby/view/UILobby";
import { UILogin } from "../view/UILogin";


export class LoginController {

    /**
     * 登录服务器
     * @param account 账号
     * @param password 密码
     */
    public static async HttpLogin(account: string, password: string) {
        let req = new pb.ReqLogin({
            Account: account,
            Password: password
        })
        let data = await Http.Post(SystemInfo.LoginUrl, req)
        let resp = pb.RespLogin.fromObject(data)
        if (resp.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(ErrorCode.ToString(resp.ErrCode))
            return;
        }
        Session.Token = resp.Token
        await WebSocketController.OnInit(SystemInfo.WebSocketUrl).catch(() => { Clog.Error("---- error link ws ----") })
        HeatBeat.Start()
        await this.LongLinkAuth();
        await this.GetUserInfo();
        UIManager.OpenUI(UILobby)
        UIManager.CloseUI(UILogin)
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
        let data = await Http.Post(SystemInfo.RegisterUrl, postData)
        let resp = pb.RespRegister.fromObject(data)
        if (resp.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(ErrorCode.ToString(resp.ErrCode))
            return;
        }
    }

    /**
     * 心跳
     */
    public static async HeartBeat() {
        await WebSocketController.Call(pb.MessageCommand.HeartBeat)
        HeatBeat.OnHeatBeat()
    }

    /**
     * 授权
     */
    public static async LongLinkAuth() {
        let data = await WebSocketController.Call(pb.MessageCommand.LinkAuth)
    }

    /**
     * 获取用户信息
     */
    public static async GetUserInfo() {
        let resp = await WebSocketController.Call(pb.MessageCommand.GetUserInfo)
        if (resp.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(ErrorCode.ToString(resp.ErrCode))
            return;
        }
        let msg: pb.RespUserInfo = pb.RespUserInfo.decode(resp.Msg)
        Clog.Trace(ClogKey.Net, "GetUserInfo:" + JSON.stringify(msg))
        Session.UserInfo = new UserInfoData(msg.BaseInfo)
        Session.MoneyInfo = new MoneyInfo(msg.MoneyInfo)
    }

}

