import { pb } from "../../other/proto";


export class RoomData {
    public RoomId: number;
    public RoomName: string;
    public Password: string;
    public MapId: number;
    public RoomUser: Array<RoomUser>

    //房间最大人数
    public get MaxUser() {
        return 6
    }

    public get MapName(): string {
        return "守卫雅典娜"
    }

    constructor(data?: pb.IRoomInfo) {
        if (data == null) {
            return;
        }
        this.RoomId = data.RoomId;
        this.RoomName = data.RoomName;
        this.Password = data.Password
        // this.MapId = data.MapId;
        this.RoomUser = new Array<RoomUser>();
        for (let index = 0; index < data.Users.length; index++) {
            const element = data.Users[index];
            let item = new RoomUser(element)
            this.RoomUser.push(item)
        }
    }
}

export class RoomUser {
    public UserId: number
    public UserNickName: string;
    public GameRoleId: pb.EnumGameRole;
    public IsReady: boolean;
    public TotalNum: number;
    public PassNum: number;
    public MapLv: number
    constructor(data: pb.RoomInfo.IRoomUser) {
        if (data == null) {
            return;
        }
        this.UserNickName = data.UserNickName;
        this.UserId = data.UserId;
        this.GameRoleId = data.GameRoleId;
        this.TotalNum = data.TotalNum;
        this.PassNum = data.PassNum
        this.MapLv = data.MapLv;
        this.IsReady = data.IsReady;
    }
}

