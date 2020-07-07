import { WebSocketController } from "./WebSocketController";
import Clog from "../framework/clog/Clog";
import { LoginController } from "../login/controller/LoginController";
import { LobbyController } from "../lobby/controller/LobbyController";


/**
 * 房间心跳类
 */
export class HeatBeat {

    private static handle: number;
    private static readonly heatBeatInterval: number = 5     //发送心跳时间间隔
    private static heatBeatTimer: number = 0                //心跳计时器
    private static lostTimeMax: number = 12;                //判定心跳丢失时长

    public static Start() {
        this.handle = window.setInterval(() => { this.HeatBeat() }, this.heatBeatInterval * 1000)
    }

    public static End() {
        window.clearInterval(this.handle);
    }

    public static OnHeatBeat() {
        //计时器清零
        this.heatBeatTimer = 0;
    }

    private static HeatBeat() {
        if (!WebSocketController.IsOpen) {
            return;
        }

        if (this.heatBeatTimer >= this.lostTimeMax) {
            this.heatBeatTimer = 0;
            Clog.Error('心跳丢失')
            WebSocketController.ManulClose();
            return
        }

        //发送心跳
        LobbyController.HeartBeat();
        //计时器累加
        this.heatBeatTimer += this.heatBeatInterval;
    }



}

