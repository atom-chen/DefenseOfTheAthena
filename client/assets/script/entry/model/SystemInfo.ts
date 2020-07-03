

export class SystemInfo {
    /**
     * 根地址
     */
    public static URL = "http://127.0.0.1:3650/"     
    public static Address: Address;
}

export class Address {

    public Http: string;           //登录http地址
    public Websocket: string;          //游戏websocket地址

    constructor(data?: any) {
        if (data == null) {
            return
        }
        this.Http = "http://" + data.Http;
        this.Websocket = "ws://" + data.Websocket;
    }
}



