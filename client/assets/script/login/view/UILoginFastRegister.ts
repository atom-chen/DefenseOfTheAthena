import { EnumUIOpenTween, EnumUICloseTween } from "../../framework/ui/UIEnum";
import { UIBase } from "../../framework/ui/UIBase";
import { UIEventCenter } from "../../framework/util/UIEventCenter";
import { UIManager } from "../../framework/ui/UIManager";
import { IsNullOrEmpty } from "../../framework/util/StringUtil";
import { UITip } from "../../commonUI/UITip";


export default class UILoginFastRegister extends UIBase {
    public PrefabName = 'PanelLoginFastRegister'
    public OpenTween = EnumUIOpenTween.Scale;
    public CloseTween = EnumUICloseTween.Scale;

    private _btnClose: cc.Button;
    private _btnOK: cc.Button;
    private _inputAccount: cc.EditBox;
    private _inputPassword1: cc.EditBox;
    private _inputPassword2: cc.EditBox;

    onLoad() {
        this._btnClose = cc.find('Close', this.node).getComponent(cc.Button)
        this._btnOK = cc.find('OK', this.node).getComponent(cc.Button)
        this._inputAccount = cc.find('Account/input', this.node).getComponent(cc.EditBox)
        this._inputPassword1 = cc.find('Password1/input', this.node).getComponent(cc.EditBox)
        this._inputPassword2 = cc.find('Password2/input', this.node).getComponent(cc.EditBox)
        this.initEvent();
    }

    private initEvent() {
        UIEventCenter.ButtonEvent(this._btnClose, () => this.OnBtnCloseClick())
        UIEventCenter.ButtonEvent(this._btnOK, () => this.OnBtnOKClick())
    }


    private OnBtnCloseClick() {
        UIManager.CloseUI(UILoginFastRegister)
    }

    private OnBtnOKClick() {
        if (IsNullOrEmpty(this._inputAccount.string)) {
            UITip.Info('您输入的账号为空')
            return;
        }

        if (IsNullOrEmpty(this._inputPassword1.string) || IsNullOrEmpty(this._inputPassword2.string)) {
            UITip.Info('您输入的密码为空')
            return;
        }

        if (this._inputPassword2.string != this._inputPassword1.string) {
            UITip.Info('您两次出输入的密码不一致')
            return;
        }
    }

    
}