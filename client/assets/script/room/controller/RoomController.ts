import { pb } from "../../other/proto";
import { WebSocketController } from "../../websocket/WebSocketController";
import { UITip } from "../../commonUI/UITip";
import { ErrorDecode } from "../../other/ErrorDecode";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { RoomData } from "../model/RoomData";
import { UIManager } from "../../framework/ui/UIManager";
import { UIRoom } from "../view/UIRoom";

export class RoomController {

    public static CurRoom: RoomData

    /**
     * 创建房间
     * @param roomName 房间名称 
     * @param mapId 地图Id
     */
    public static async CreateRoom(roomName: string, mapId: number) {
        let req = pb.ReqCreateRoom.create({ RoomName: roomName, MapId: mapId })
        let postData = pb.ReqCreateRoom.encode(req).finish();
        let resp: pb.RespPackage = await WebSocketController.Call(pb.MessageCommand.CreateRoom, postData)
        if (resp.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(ErrorDecode.ToChinese(resp.ErrCode))
            return;
        }
        let respCreateRoom = pb.RespCreateRoom.decode(resp.Msg);
        this.CurRoom = new RoomData(respCreateRoom.PreGame);
        Clog.Green(ClogKey.Net, "创建房间成功 msg=" + JSON.stringify( this.CurRoom))
        UIManager.OpenUI(UIRoom)
    }

    /**
     * 加入房间
     * @param roomId 房间Id 
     */
    public static async JoinRoom(roomId: number) {
        let req = pb.ReqJoinRoom.create({ RoomId: roomId })
        let postData = pb.ReqJoinRoom.encode(req).finish();
        let resp: pb.RespPackage = await WebSocketController.Call(pb.MessageCommand.JoinRoom, postData)
        if (resp.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(ErrorDecode.ToChinese(resp.ErrCode))
            return;
        }
        let msg = pb.RespJoinRoom.decode(resp.Msg);
        this.CurRoom = new RoomData(msg.PreGame);
        Clog.Green(ClogKey.Net, "加入房间成功 msg=" + JSON.stringify( this.CurRoom))
        UIManager.OpenUI(UIRoom)
    }

    /**
     * 同步开始游戏前状态
     * @param data 服务器返回的resp
     */
    public static SyncPreGame(data: pb.RespPackage) {
        if (data.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(ErrorDecode.ToChinese(data.ErrCode))
            return;
        }
        let info = pb.SyncPreGame.decode(data.Msg)
        this.CurRoom = new RoomData(info);
        Clog.Green(ClogKey.Net, "同步房间状态，this.CurRoom:" + JSON.stringify(this.CurRoom))

    }


}



