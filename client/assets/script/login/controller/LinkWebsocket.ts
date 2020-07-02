import { WebSocketController } from "../../websocket/WebSocketController";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { SystemInfo } from "../../entry/model/SystemInfo";
import { WebSocketCall } from "../../websocket/WebSocketCall";


export class LinkWebsocket {

    public static async Start(): Promise<void> {
        await WebSocketController.OnInit(SystemInfo.Address.GameWS+"/ws").catch(()=>{Clog.Error("---- error link ws ----")})
        await this.LongLinkAuth(1, "ping");
    }

    public static LongLinkAuth(messageCommand: number, postData: any): Promise<boolean> {
        return new Promise<boolean>((resolve, reject) => {
            let info = {
                cmd: messageCommand,
                msg: postData,
            }
            WebSocketController.OnSend(JSON.stringify(info))
            resolve(true)


            reject()
        })
    }



}