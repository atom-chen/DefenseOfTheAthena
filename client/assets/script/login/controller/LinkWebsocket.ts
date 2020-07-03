import { WebSocketController } from "../../websocket/WebSocketController";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { SystemInfo } from "../../entry/model/SystemInfo";
import { WebSocketCall } from "../../websocket/WebSocketCall";
import { HeatBeat } from "../../websocket/HeatBeat";
import { Session } from "../model/SessionData";


export class LinkWebsocket {

    public static async Start(): Promise<void> {
        await WebSocketController.OnInit(SystemInfo.Address.Websocket + "/Game").catch(() => { Clog.Error("---- error link ws ----") })
        HeatBeat.Start()
        WebSocketCall.LongLinkAuth(Session.Token);
    }





}