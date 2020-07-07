import { UIEventCenter } from "../../framework/util/UIEventCenter";
import { RoomController } from "../controller/RoomController";
import { RoomUser } from "../model/RoomData";
import Clog, { ClogKey } from "../../framework/clog/Clog";


export class RoomUserItem extends cc.Component {

    private _userName: cc.Label;
    private _roleName: cc.Label;
    private _passTimes: cc.Label;
    private _totalTimes: cc.Label;
    private _mapLv: cc.Label;
    private _readyState: cc.Label;
    private _btnReady: cc.Button;
    private _btnUserArrow: cc.Button;
    private _btnRoleArrow: cc.Button;
    private itemIndex: number;
    private get data(): RoomUser {
        if (this.itemIndex < RoomController.CurRoom.RoomUser.length) {
            return RoomController.CurRoom.RoomUser[this.itemIndex]
        }
        return null
    }

    public Init(i: number) {
        this.itemIndex = i;
        this.initRoot();
        this.initEvent();
        this.Refresh();
    }

    onDestroy() {

    }

    private initRoot() {
        this._userName = cc.find("UserName", this.node).getComponent(cc.Label);
        this._roleName = cc.find("RoleName", this.node).getComponent(cc.Label);
        this._passTimes = cc.find("PassTimes", this.node).getComponent(cc.Label);
        this._totalTimes = cc.find("TotalTimes", this.node).getComponent(cc.Label);
        this._mapLv = cc.find("MapLv", this.node).getComponent(cc.Label);
        this._readyState = cc.find("ReadyState", this.node).getComponent(cc.Label);
        this._btnReady = cc.find("BtnReady", this.node).getComponent(cc.Button);
        this._btnUserArrow = cc.find("BtnUserArrow", this.node).getComponent(cc.Button);
        this._btnRoleArrow = cc.find("BtnRoleArrow", this.node).getComponent(cc.Button);
    }

    private initEvent() {
        UIEventCenter.ButtonEvent(this._btnReady, () => this.onBtnReadyClick())
        UIEventCenter.ButtonEvent(this._btnUserArrow, () => this.onBtnUserArrowClick())
        UIEventCenter.ButtonEvent(this._btnRoleArrow, () => this.onBtnRoleArrowClick())
    }

    private onBtnReadyClick() {
        Clog.Trace(ClogKey.Net, "onBtnReadyClick")
    }


    private onBtnUserArrowClick() {
        Clog.Trace(ClogKey.Net, "onBtnUserArrowClick")
    }

    private onBtnRoleArrowClick() {
        Clog.Trace(ClogKey.Net, "onBtnRoleArrowClick")
    }

    public Refresh() {
        if (this.data == null) {
            this.node.active = false;
            return;
        }
        this.node.active = true;
        this.refreshUserName();
        this.refreshRoleName();
        this.refershPassTimes();
        this.refershTotalTimes();
        this.refreshGameLv();
        this.refreshIsReady();
    }

    private refreshUserName() {
        this._userName.string = this.data.UserNickName;
    }

    private refreshRoleName() {
        this._roleName.string = this.data.GameRoleName
    }

    private refershPassTimes() {
        this._passTimes.string = this.data.PassNum.toString();
    }

    private refershTotalTimes() {
        this._totalTimes.string = this.data.TotalNum.toString();
    }

    private refreshGameLv() {
        this._mapLv.string = this.data.MapLv.toString();
    }

    private refreshIsReady() {
        if (this.data.IsReady) {
            this._readyState.string = "已准备"
            this._btnUserArrow.node.active = false;
            this._btnRoleArrow.node.active = false;
            return;
        }

        this._readyState.string = "未准备"
        this._btnUserArrow.node.active = true;
        this._btnRoleArrow.node.active = true;

    }


}