import { pb } from "../../other/proto";
import { WebSocketController } from "../../websocket/WebSocketController";
import { UITip } from "../../commonUI/UITip";
import { Pb2String } from "../../other/Pb2String";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { RoomData } from "../model/RoomData";
import { UIManager } from "../../framework/ui/UIManager";
import { UIRoom } from "../view/UIRoom";
import { GameCenter, UIEventCommand } from "../../other/GameCenter";

export class RoomController {

    public static CurRoom: RoomData

    /**
     * 创建房间
     * @param roomName 房间名称 
     * @param mapId 地图Id
     */
    public static async CreateRoom(roomName: string, password: string) {
        let req = pb.ReqCreateRoom.create({ RoomName: roomName, Password: password })
        let postData = pb.ReqCreateRoom.encode(req).finish();
        let resp: pb.RespPackage = await WebSocketController.Call(pb.MessageCommand.CallCreateRoom, postData)
        if (resp.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(Pb2String.ErrCode(resp.ErrCode))
            return;
        }
        let respCreateRoom = pb.RespCreateRoom.decode(resp.Msg);
        this.CurRoom = new RoomData(respCreateRoom.Info);
        Clog.Green(ClogKey.Net, "创建房间成功 msg=" + JSON.stringify(this.CurRoom))
        UIManager.OpenUI(UIRoom)
    }

    /**
     * 加入房间
     * @param roomId 房间Id 
     */
    public static async JoinRoom(roomId: number,passwrod :string) {
        let req = pb.ReqJoinRoom.create({ RoomId: roomId ,Password:passwrod})
        let postData = pb.ReqJoinRoom.encode(req).finish();
        let resp: pb.RespPackage = await WebSocketController.Call(pb.MessageCommand.CallJoinRoom, postData)
        if (resp.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(Pb2String.ErrCode(resp.ErrCode))
            return;
        }
        let msg = pb.RespJoinRoom.decode(resp.Msg);
        this.CurRoom = new RoomData(msg.Info);
        Clog.Green(ClogKey.Net, "加入房间成功 msg=" + JSON.stringify(this.CurRoom))
        UIManager.OpenUI(UIRoom)
    }

    /**
     * 同步开始游戏前状态
     * @param data 服务器返回的resp
     */
    public static SyncRoomInfo(data: pb.RespPackage) {
        if (data.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(Pb2String.ErrCode(data.ErrCode))
            return;
        }
        let info = pb.RoomInfo.decode(data.Msg)
        this.CurRoom = new RoomData(info);
        Clog.Green(ClogKey.Net, "同步房间状态，this.CurRoom:" + JSON.stringify(this.CurRoom))
        GameCenter.EventTarget.emit(UIEventCommand.RefreshRoomState)
    }

    /**
     * Input房间ready
     * @param isReady 是否准备
     */
    public static InputReadyState(isReady: boolean) {
        let input = pb.RoomReady.create({ IsReady: isReady })
        let buf = pb.RoomReady.encode(input).finish();
        WebSocketController.Input(pb.MessageCommand.InputRoomReady, buf)
        Clog.Green(ClogKey.Net, "cmd=" + Pb2String.MessageCmd(pb.MessageCommand.InputRoomReady) + ",input=" + JSON.stringify(input))
    }

    /**
     * input更换角色
     * @param roleId 角色Id
     */
    public static InputGameRole(roleId: pb.EnumGameRole) {
        let input = pb.GameRole.create({ RoleId: roleId })
        let buf = pb.GameRole.encode(input).finish();
        WebSocketController.Input(pb.MessageCommand.InputRoomRole, buf)
        Clog.Green(ClogKey.Net, "cmd=" + Pb2String.MessageCmd(pb.MessageCommand.InputRoomRole) + ",input=" + JSON.stringify(input))
    }


}



