import { pb } from "../../other/proto";



export class UserInfoData {

    public NickName: string;
    public Age: number;
    public Sex: pb.EnumSex;
    public Icon: string;
    constructor(data?: pb.IUserBaseInfo) {
        if (data == null) {
            return;
        }
        this.NickName = data.NickName;
        this.Age = data.Age;
        this.Sex = data.Sex;
        this.Icon = data.Icon
    }
}


export class MoneyInfo {

    public Gold: number;
    public Diamond: number

    constructor(data?: pb.IUserMoneyInfo) {
        if (data == null) {
            this.Gold = 0;
            this.Diamond = 0;
            return;
        }
        this.Gold = data.Gold;
        this.Diamond = data.Diamond;
    }
}
