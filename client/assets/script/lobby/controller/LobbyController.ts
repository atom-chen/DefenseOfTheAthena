import { WebSocketController } from "../../websocket/WebSocketController";
import { pb } from "../../other/proto";
import { UITip } from "../../commonUI/UITip";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { ErrorCode } from "../../other/ErrorCode";


export class LobbyController {


    public static async CreateRoom(roomName: string, mapId: number) {
        let req = pb.ReqCreateRoom.create({ RoomName: roomName, MapId: mapId })
        let postData = pb.ReqCreateRoom.encode(req).finish();
        let resp: pb.RespPackage = await WebSocketController.Call(pb.MessageCommand.CreateRoom, postData)
        if (resp.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(ErrorCode.ToString(resp.ErrCode))
            return;
        }
    }


    public static async JoinRoom(roomId: number) {
        let req = pb.ReqJoinRoom.create({ RoomId: roomId })
        let postData = pb.ReqJoinRoom.encode(req).finish();
        let resp: pb.RespPackage = await WebSocketController.Call(pb.MessageCommand.CreateRoom, postData)
        if (resp.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(ErrorCode.ToString(resp.ErrCode))
            return;
        }
    }

    public static SyncPreGame(data: pb.RespPackage) {
        if (data.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(ErrorCode.ToString(data.ErrCode))
            return;
        }
        let info = pb.SyncPreGame.decode(data.Msg)
        Clog.Green(ClogKey.Net, "SyncPreStartState=" + JSON.stringify(info))
    }

}