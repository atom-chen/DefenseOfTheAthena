import { WebSocketController } from "./WebSocketController";
import { MessageCommand } from "./MessageCommond";
import Clog, { ClogKey } from "../framework/clog/Clog";
import { HeatBeat } from "./HeatBeat";
import { pb } from "../other/proto";
import { Session } from "../login/model/SessionData";
import { UITip } from "../commonUI/UITip";
import { ErrorCode } from "../other/ErrorCode";
import { UserInfoData, MoneyInfo } from "../login/model/UserData";


/**
 *1.有req有resp的方法叫Call，即客户端发送数据给服务器，同时服务器也响应数据给客户端
* 2.有req无resp的方法叫Input，即客户端发送数据给服务器
* 3.无req有resp的方法叫Sync，即服务器同步数据给客户端
* 4.本类为call
 */
export class WebSocketCall {

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
            UITip.Info(ErrorCode.ToString(resp.ErrCode))
            return;
        }
        let msg: pb.RespUserInfo = pb.RespUserInfo.decode(resp.Msg)
        Clog.Trace(ClogKey.Net, "GetUserInfo:" + JSON.stringify(msg))
        Session.UserInfo = new UserInfoData(msg.BaseInfo)
        Session.MoneyInfo = new MoneyInfo(msg.MoneyInfo)
    }


    
}