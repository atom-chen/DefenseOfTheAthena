import Clog from "../../framework/clog/Clog";
import { UIManager } from "../../framework/ui/UIManager";
import { UILogin } from "../../login/view/UILogin";
import { AudioManager } from "../../framework/audio/AudioManager";
import { LoginController } from "../../login/controller/LoginController";



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
        await LoginController.HttpHello();
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
}