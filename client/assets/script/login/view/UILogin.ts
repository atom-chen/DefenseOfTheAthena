import { UIBase } from "../../framework/ui/UIBase";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { AudioManager } from "../../framework/audio/AudioManager";
import { UIEventCenter } from "../../framework/util/UIEventCenter";
import { UIManager } from "../../framework/ui/UIManager";
import { UILoginFast } from "./UILoginFast";


export class UILogin extends UIBase {
    public static Instance: UILogin
    public PrefabName = 'PanelLogin'
    private _btnFastLogin: cc.Button;
    private _btnGuestLogin: cc.Button;

    start() {
        UILogin.Instance = this;
        Clog.Trace(ClogKey.Login, 'UILogin start')
        this.InitRoot();
        this.InitEvent();
        this.Refresh();
    }

    //初始化各面板节点
    private InitRoot() {
        this._btnFastLogin = cc.find('BtnGroup/btnFastLogin', this.node).getComponent(cc.Button)
        this._btnGuestLogin = cc.find('BtnGroup/btnGuestLogin', this.node).getComponent(cc.Button)
    }

    //初始化各事件
    private InitEvent() {
        UIEventCenter.ButtonEvent(this._btnFastLogin, () => this.OnBtnFastLoginClick())
        UIEventCenter.ButtonEvent(this._btnGuestLogin, () => this.OnBtnGuestLoginClick())
    }

    //游客登录 >> 随机账号
    private OnBtnGuestLoginClick() {

    }

    private OnBtnFastLoginClick() {
        UIManager.OpenUI(UILoginFast)
    }

    private Refresh() {
        this.RefreshLoginBtns();
    }

    private RefreshLoginBtns() {
        this._btnFastLogin.node.active = CC_DEV ? true : false;
        this._btnGuestLogin.node.active = false;
    }
}