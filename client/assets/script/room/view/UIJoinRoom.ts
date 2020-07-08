import { UIBase } from "../../framework/ui/UIBase";
import { UIEventCenter } from "../../framework/util/UIEventCenter";
import { UIManager } from "../../framework/ui/UIManager";
import { RoomController } from "../controller/RoomController";
import { IsNullOrEmpty } from "../../framework/util/StringUtil";
import { UITip } from "../../commonUI/UITip";

export class UIJoinRoom extends UIBase {

    public PrefabName = "PanelJoinRoom"

    private _btnOK: cc.Button;
    private _btnClose: cc.Button;
    private _inputId: cc.EditBox;
    private _inputPassword: cc.EditBox;

    onLoad() {
        this.initRoot();
        this.initEvent();
    }

    private initRoot() {
        this._btnOK = cc.find("BtnOK", this.node).getComponent(cc.Button)
        this._btnClose = cc.find("BtnClose", this.node).getComponent(cc.Button)
        this._inputId = cc.find("InputId", this.node).getComponent(cc.EditBox)
        this._inputPassword = cc.find("InputPassword", this.node).getComponent(cc.EditBox)
    }

    private initEvent() {
        UIEventCenter.ButtonEvent(this._btnOK, () => this.onBtnOkClick())
        UIEventCenter.ButtonEvent(this._btnClose, () => this.onBtnCloseClick())
    }

    private onBtnOkClick() {
        if (IsNullOrEmpty(this._inputId.string)) {
            UITip.Info("房间Id为空")
            return
        }
        if (IsNullOrEmpty(this._inputPassword.string)) {
            UITip.Info("房间密码为空")
            return
        }
        RoomController.JoinRoom(Number(this._inputId.string), this._inputPassword.string)
    }

    private onBtnCloseClick() {
        UIManager.CloseUI(UIJoinRoom)
    }


}