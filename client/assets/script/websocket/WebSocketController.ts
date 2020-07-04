import Clog, { ClogKey } from "../framework/clog/Clog";
import { pb } from "../other/proto";
import { Session } from "../login/model/SessionData";
import protobuf = require("protobufjs");

export class WebSocketController {

    private static ws: WebSocket;
    private static RerlinkTimer: number = 0;                    //重连次数计时器
    private static linkIndex = 0                                //第index初始化连接   
    private static sendIndex = 1;                               //第index发送数据

    //#region ----------- websocket 基础方法----------------------------
    //初始化
    public static async OnInit(url: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.linkIndex++;
            Clog.Purple(ClogKey.Net, "RoomSocket >>> OnInit >>>  url:" + url + ', linkIndex:' + this.linkIndex);
            this.ws = new WebSocket(url);
            this.ws.binaryType = "arraybuffer";

            //长连接打开
            this.ws.onopen = () => {
                Clog.Trace(ClogKey.Net, "RoomSocket open success! url:" + url);
                if (this.RerlinkTimer > 0) {
                    Clog.Trace(ClogKey.Net, 'Websocket 初始化成功，重连次数清零')
                    this.RerlinkTimer = 0;
                }
                resolve()
            };

            //有消息过来
            this.ws.onmessage = (event: any) => {
                let buff=new Uint8Array(event.data)
                let resp = pb.RespPackage.decode(buff)
                Clog.Purple(ClogKey.Net, "onmessage <<" + JSON.stringify(resp))
                let func = this.funcMap.get(resp.Cmd)
                if (!func) {
                    Clog.Error("on message error! func is null, cmd =" + resp.Cmd)
                    return;
                }
                func(resp.Msg)
            };

            // 网络不通
            this.ws.onerror = () => {
                reject()
            };

            //网络不通或者服务器主动断开连接
            this.ws.onclose = () => {
                Clog.Error("RoomSocket: ws link close !");
            };
        })
    }

    //发送消息的方法
    public static OnSend(data: any) {
        this.ws.send(data);
    }

    //当前网络是否连接 
    public static get IsOpen(): boolean {
        if (this.ws != null && this.ws.readyState == WebSocket.OPEN) {
            return true;
        }
        return false;
    }

    //手动断开
    public static ManulClose(): void {
        if (!this.IsOpen) {
            return;
        }
        //手动断开事件
        Clog.Error("手动断开事件")
        this.ws.close();
    }


    private static funcMap: Map<number, Function> = new Map<number, Function>();

    /**
     * 注册回调方法
     * @param messageCommand 消息命令
     * @param callback callback里有Promise,所以map每次都需要重新给新的callback
     */
    public static Register(messageCommand: number, callback: Function) {
        this.funcMap.set(messageCommand, callback)
    }

    public static Call(command: pb.MessageCommand, postData?: any): Promise<any> {
        return new Promise((reslove, reject) => {
            this.Register(command, (data: any) => {
                if (data) {
                    reslove(data)
                    return
                }
                reject();
            })
            let req = pb.ReqPackage.create({ Cmd: command, Token: Session.Token });//构造对象
            let reqBuf = pb.ReqPackage.encode(req).finish(); //获取二进制数据，一定要注意使用finish函数
            Clog.Trace(ClogKey.Net, "call message" + JSON.stringify(req))
            this.OnSend(reqBuf)
        })
    }

    public static Input(messageCommand: number, postData: any) {
        let info = {
            Cmd: messageCommand,
            Msg: postData,
        }
        this.OnSend(JSON.stringify(info))
    }

}