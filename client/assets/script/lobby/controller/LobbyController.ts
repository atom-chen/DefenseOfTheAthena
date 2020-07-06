import { WebSocketController } from "../../websocket/WebSocketController";
import { pb } from "../../other/proto";
import { UITip } from "../../commonUI/UITip";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { ErrorCode } from "../../other/ErrorCode";


export class LobbyController {


    public static async CreateRoom() {
        let resp: pb.RespPackage = await WebSocketController.Call(pb.MessageCommand.CallCreateRoom)
        if (resp.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(ErrorCode.ToString(resp.ErrCode))
            return;
        }
        let msg: pb.RespCreateRoom = pb.RespCreateRoom.decode(resp.Msg)
        Clog.Trace(ClogKey.Net, "CreateRoom:" + JSON.stringify(msg))
    }


    public static async JoinRoom() {
        let req = pb.ReqJoinRoom.create({ RoomId: 10001 })
        let postData = pb.ReqJoinRoom.encode(req).finish();
        let resp: pb.RespPackage = await WebSocketController.Call(pb.MessageCommand.CallCreateRoom, postData)
        if (resp.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(ErrorCode.ToString(resp.ErrCode))
            return;
        }
        let msg: pb.RespJoinRoom = pb.RespJoinRoom.decode(resp.Msg)
        Clog.Trace(ClogKey.Net, "JoinRoom:" + JSON.stringify(msg))

    }

}