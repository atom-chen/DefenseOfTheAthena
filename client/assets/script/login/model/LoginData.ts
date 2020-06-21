

export class SessionData {

    public Address: Address;
    constructor(data?: any) {
        if (data == null) {
            return
        }
        this.Address = new Address(data)
    }
}


export class Address {

    public Login: string;
    public Register: string;
    public LobbyWS: string;
    public GameWS: string;


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

//登录模块的数据别名：session
export let Session = new SessionData()
