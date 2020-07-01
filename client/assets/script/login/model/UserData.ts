import { EnumSex } from "../../other/EnumCenter";



export class UserData {
    public Id: number;
    public Account: string;
    public Password: string;
    public NickName: string;
    public Age: number;
    public Sex: EnumSex;

    constructor(data?: any) {
        if (data == null) {
            return;
        }
        this.Id = data.Id;
        this.Account = data.Account;
        this.Password = data.Password;
        this.NickName = data.NickName;
        this.Age = data.Age;
        this.Sex = data.Sex;
    }
}

