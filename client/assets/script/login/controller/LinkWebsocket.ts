import { WebSocketController } from "../../websocket/WebSocketController";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { SystemInfo } from "../../entry/model/SystemInfo";
import { WebSocketCall } from "../../websocket/WebSocketCall";
import { MessageCommand } from "../../websocket/MessageCommond";
import { HeatBeat } from "../../websocket/HeatBeat";


export class LinkWebsocket {

    public static async Start(): Promise<void> {
        await WebSocketController.OnInit(SystemInfo.Address.GameWS+"/ws").catch(()=>{Clog.Error("---- error link ws ----")})
        HeatBeat.Start()
        WebSocketCall.LongLinkAuth("123456");
        
    }

    



}