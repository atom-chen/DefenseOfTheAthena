import Clog, { ClogKey } from "../../framework/clog/Clog";
import { UIManager } from "../../framework/ui/UIManager";
import { UILogin } from "../../login/view/UILogin";
import { AudioManager } from "../../framework/audio/AudioManager";
import Http from "../../framework/net/Http";
import { SystemInfo } from "../model/SystemInfo";
import { UITip } from "../../commonUI/UITip";
import { ErrorDecode } from "../../other/ErrorDecode";
import { pb } from "../../other/proto";

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
        let req = new pb.ReqEntry({
            Secret: "151df4d2ddbdd1ad6a64c2c18b294828"
        })
        Clog.Green(ClogKey.Login, "HttpHello >>" + JSON.stringify(req));
        let data = await Http.Post(SystemInfo.EntryUrl, req)
        let resp = pb.RespEntry.fromObject(data)
        Clog.Green(ClogKey.Login, "HttpHello >> resp:" + JSON.stringify(resp));
        if (resp.ErrCode != pb.ErrorCode.OK) {
            UITip.Info(ErrorDecode.ToChinese(resp.ErrCode))
            return;
        }
        SystemInfo.LoginUrl = resp.LoginUrl
        SystemInfo.RegisterUrl = resp.RegisterUrl;
        SystemInfo.WebSocketUrl = resp.WebSocketUrl;
    }
}