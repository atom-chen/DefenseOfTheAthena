

export class SystemInfo {
    /**
     * 根地址
     */
    public static MainURL = "http://127.0.0.1:3650"     
    public static Address: Address;
}

export class Address {

    public Login: string;           //登录http地址
    public Register: string;        //注册http地址
    public LobbyWS: string;         //大厅websocket地址
    public GameWS: string;          //游戏websocket地址

    constructor(data?: any) {
        if (data == null) {
            return
        }
        this.Login = "http://" + data.Login;
        this.Register = "http://" + data.Register;
        this.LobbyWS = "ws://" + data.LobbyWS;
        this.GameWS = "ws://" + data.GameWS;
    }
}



