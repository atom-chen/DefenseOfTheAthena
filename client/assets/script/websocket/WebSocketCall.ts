import { WebSocketController } from "./WebSocketController";
import { MessageCommand } from "./MessageCommond";
import Clog, { ClogKey } from "../framework/clog/Clog";
import { HeatBeat } from "./HeatBeat";


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
        let data = await WebSocketController.Call(MessageCommand.CallHeartBeat, "ping")
        Clog.Trace(ClogKey.Net, "【心跳】 >>" + JSON.stringify(data))
        HeatBeat.OnHeatBeat()
    }

    /**
     * 授权
     */
    public static async LongLinkAuth(code: string) {
        let postData = { code: code }
        let data = await WebSocketController.Call(MessageCommand.CallLongLinkAuth, postData)
        Clog.Trace(ClogKey.Net, "【授权】 >>" + JSON.stringify(data))
        let errorCode = data["ErrorCode"]
        if (errorCode != 0) {
            Clog.Error("【授权失败】")
            return;
        }
    }


    
}