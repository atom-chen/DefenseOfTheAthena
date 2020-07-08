import { UIBase } from "../../framework/ui/UIBase";
import { UIEventCenter } from "../../framework/util/UIEventCenter";
import { UIManager } from "../../framework/ui/UIManager";
import { RoomController } from "../controller/RoomController";
import { IsNullOrEmpty } from "../../framework/util/StringUtil";
import { UITip } from "../../commonUI/UITip";

export class UICreateRoom extends UIBase {

    public PrefabName = "PanelCreateRoom"

    private _btnOK: cc.Button;
    private _btnClose: cc.Button;
    private _inputName: cc.EditBox;
    private _inputPassword: cc.EditBox;

    onLoad() {
        this.initRoot();
        this.initEvent();
    }

    private initRoot() {
        this._btnOK = cc.find("BtnOK", this.node).getComponent(cc.Button)
        this._btnClose = cc.find("BtnClose", this.node).getComponent(cc.Button)
        this._inputName = cc.find("InputName", this.node).getComponent(cc.EditBox)
        this._inputPassword = cc.find("InputPassword", this.node).getComponent(cc.EditBox)
    }

    private initEvent() {
        UIEventCenter.ButtonEvent(this._btnOK, () => this.onBtnOkClick())
        UIEventCenter.ButtonEvent(this._btnClose, () => this.onBtnCloseClick())
    }

    private onBtnOkClick() {
        if (IsNullOrEmpty(this._inputName.string)) {
            UITip.Info("房间名称为空")
            return
        }
        if (IsNullOrEmpty(this._inputPassword.string)) {
            UITip.Info("房间密码为空")
            return
        }
        RoomController.CreateRoom(this._inputName.string, this._inputPassword.string)
    }

    private onBtnCloseClick() {
        UIManager.CloseUI(UICreateRoom)
    }


}