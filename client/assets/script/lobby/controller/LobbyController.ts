import { WebSocketController } from "../../websocket/WebSocketController";
import { pb } from "../../other/proto";
import { UITip } from "../../commonUI/UITip";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { Pb2String } from "../../other/Pb2String";
import { Session } from "../../login/model/SessionData";
import { UserInfoData, MoneyInfo } from "../../login/model/UserData";
import { HeatBeat } from "../../websocket/HeatBeat";


export class LobbyController {

    /**
     * 心跳
     */
    public static async HeartBeat() {
        await WebSocketController.Call(pb.MessageCommand.CallHeartBeat)
        HeatBeat.OnHeatBeat()
    }

    /**
     * 授权
     */
    public static async LongLinkAuth() {
        let data = await WebSocketController.Call(pb.MessageCommand.CallLinkAuth)
    }

    /**
     * 获取用户信息
     */
    public static async GetUserInfo() {
        let resp = await WebSocketController.Call(pb.MessageCommand.CallGetUserInfo)
        if (resp.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(Pb2String.ErrCode(resp.ErrCode))
            return;
        }
        let msg: pb.RespUserInfo = pb.RespUserInfo.decode(resp.Msg)
        Clog.Trace(ClogKey.Net, "GetUserInfo:" + JSON.stringify(msg))
        Session.UserInfo = new UserInfoData(msg.BaseInfo)
        Session.MoneyInfo = new MoneyInfo(msg.MoneyInfo)
    }

}