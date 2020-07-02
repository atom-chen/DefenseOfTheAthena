import Clog, { ClogKey } from "../framework/clog/Clog";

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
                let msg = new Uint8Array(event.data)
                var str = String.fromCharCode.apply(null, msg);
                var res = JSON.parse(str);
                Clog.Purple(ClogKey.Net, "ws onmessage << " + JSON.stringify(res));
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
        this.ws.close();
    }
}