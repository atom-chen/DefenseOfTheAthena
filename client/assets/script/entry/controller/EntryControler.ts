import Clog, { ClogKey } from "../../framework/clog/Clog";
import { UIManager } from "../../framework/ui/UIManager";
import { UILogin } from "../../login/view/UILogin";
import { AudioManager } from "../../framework/audio/AudioManager";
import { LoginController } from "../../login/controller/LoginController";
import Http from "../../framework/net/Http";
import { SystemInfo, Address } from "../model/SystemInfo";
import { UITip } from "../../commonUI/UITip";





export class EntryControler {

    public static Init() {
        cc.game.setFrameRate(30)                //初始化帧率
        cc.debug.setDisplayStats(false);        //浏览器左下角是否显示FPS
        this.InitGameEvent();                   //初始化切入切出事件
        AudioManager.Init();
        Clog.Init();                            //初始化日志工具
        this.onLogin();
    }


    private static async onLogin() {
        await this.HttpHello();
        UIManager.OpenUI(UILogin)
    }

    private static InitGameEvent() {
        cc.game.on(cc.game.EVENT_HIDE, () => { this.OnGameHide(); });
        cc.game.on(cc.game.EVENT_SHOW, () => { this.GameShow(); });
    }

    //从游戏返回后台
    private static OnGameHide() {

    }

    //从后台返回游戏
    private static GameShow() {

    }

    public static async HttpHello() {
        let postData = {
            world: "151df4d2ddbdd1ad6a64c2c18b294828",
        }
        Clog.Green(ClogKey.Login, "HttpHello >>" + JSON.stringify(postData));
        let data = await Http.Post(SystemInfo.MainURL, postData)
        let errorCode = data["ErrorCode"]
        if (errorCode != 0) {
            UITip.Info(errorCode)
            return;
        }
        Clog.Green(ClogKey.Login, "HttpHello >> data:" + JSON.stringify(data));
        SystemInfo.Address = new Address(data["Address"])
    }
}