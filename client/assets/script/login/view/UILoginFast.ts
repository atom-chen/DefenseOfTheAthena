import { UIBase } from "../../framework/ui/UIBase";
import { EnumUIOpenTween, EnumUICloseTween } from "../../framework/ui/UIEnum";
import { UIEventCenter } from "../../framework/util/UIEventCenter";
import { IsNullOrEmpty } from "../../framework/util/StringUtil";
import { UIManager } from "../../framework/ui/UIManager";
import UILoginFastRegister from "./UILoginFastRegister";
import { UITip } from "../../commonUI/UITip";
import { LoginController } from "../controller/LoginController";



export class UILoginFast extends UIBase {

    public static Instance: UILoginFast
    public OpenTween = EnumUIOpenTween.Scale;
    public CloseTween = EnumUICloseTween.Scale;
    public PrefabName = 'PanelLoginFast'
    private _inputAccount: cc.EditBox;
    private _inputPassword: cc.EditBox;
    private _btnOK: cc.Button;
    private _btnClose: cc.Button;
    private _btnRegister: cc.Button;
    private _fastRegister: cc.Node;


    start() {
        UILoginFast.Instance = this;
        this.InitRoot();
        this.InitEvent();
        this.Refresh();
    }

    //初始化各面板节点
    private InitRoot() {
        this._inputAccount = cc.find('Account/input', this.node).getComponent(cc.EditBox)
        this._inputPassword = cc.find('Password/input', this.node).getComponent(cc.EditBox)
        this._btnOK = cc.find('BtnOK', this.node).getComponent(cc.Button)
        this._btnClose = cc.find('BtnClose', this.node).getComponent(cc.Button)
        this._btnRegister = cc.find('BtnRegister', this.node).getComponent(cc.Button)
        this._fastRegister = cc.find('FastRegister', this.node)
    }

    private InitEvent() {

        UIEventCenter.ButtonEvent(this._btnOK, () => this.OnBtnOKClick())
        UIEventCenter.ButtonEvent(this._btnClose, () => this.OnBtnCloseClick())
        UIEventCenter.ButtonEvent(this._btnRegister, () => this.OnBtnRegisterClick())
    }

    public Refresh() {

    }

    private OnBtnOKClick() {
        if (IsNullOrEmpty(this._inputAccount.string)) {
            UITip.Info('您输入的账号为空')
            return;
        }
        if (IsNullOrEmpty(this._inputPassword.string)) {
            UITip.Info('您输入的为空')
            return;
        }

        LoginController.HttpLogin(this._inputAccount.string, this._inputPassword.string)
    }

    private OnBtnCloseClick() {
        UIManager.CloseUI(UILoginFast)
    }

    private OnBtnRegisterClick() {
        UIManager.OpenUI(UILoginFastRegister)
    }

}


