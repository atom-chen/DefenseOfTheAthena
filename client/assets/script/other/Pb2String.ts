import { pb } from "./proto"

export class Pb2String {

    public static ErrCode(code: pb.ErrorCode): string {
        switch (code) {
            case pb.ErrorCode.OK:
                return "OK"
            case pb.ErrorCode.EntryError:
                return "签名错误"
            case pb.ErrorCode.LoginAccountOrPasswordError:
                return "账号或密码错误"
            case pb.ErrorCode.RegisterAccountExit:
                return "账号已存在"
            case pb.ErrorCode.RoomUnExistent:
                return "房间不存在"
            default:
                return "UNKNOWN"
        }
    }

    public static MessageCmd(cmd: pb.MessageCommand): string {
        switch (cmd) {
            case pb.MessageCommand.CallLinkAuth:
                return "CallLinkAuth"
            case pb.MessageCommand.CallHeartBeat:
                return "CallHeartBeat"
            case pb.MessageCommand.CallGetUserInfo:
                return "CallGetUserInfo"
            case pb.MessageCommand.CallCreateRoom:
                return "CallCreateRoom"
            case pb.MessageCommand.CallJoinRoom:
                return "CallJoinRoom"
            case pb.MessageCommand.SyncRoomInfo:
                return "SyncRoomInfo"
            case pb.MessageCommand.InputRoomReady:
                return "InputRoomReady"
            case pb.MessageCommand.InputRoomRole:
                return "InputRoomRole"
            default:
                return "UNKNOWN"
        }
    }


    public static GameRole(role: pb.EnumGameRole): string {
        switch (role) {
            case pb.EnumGameRole.DefaultRole:
                return "无"
            case pb.EnumGameRole.Warrior:
                return "战士"
            case pb.EnumGameRole.Rogue:
                return "潜行者"
            case pb.EnumGameRole.Mage:
                return "法师"
            case pb.EnumGameRole.Hunter:
                return "猎人"
            case pb.EnumGameRole.Druid:
                return "德鲁伊"
            case pb.EnumGameRole.Paladin:
                return "圣骑士"
            case pb.EnumGameRole.Priest:
                return "牧师"
            case pb.EnumGameRole.Warlock:
                return "术士"
            case pb.EnumGameRole.Shaman:
                return "萨满"
        }
    }


}

