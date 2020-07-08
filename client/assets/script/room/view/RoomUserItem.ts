import { UIEventCenter } from "../../framework/util/UIEventCenter";
import { RoomController } from "../controller/RoomController";
import { RoomUser } from "../model/RoomData";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import DropDown from "./DropDown";
import { pb } from "../../other/proto";
import { Pb2String  } from "../../other/Pb2String";


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
    private dropDown: DropDown;
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
        let _dropDown = cc.find("DropDown", this.node)
        this.dropDown = _dropDown.addComponent(DropDown)
        this.dropDown.Init();

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
        RoomController.InputReadyState(!this.data.IsReady)
    }


    private onBtnUserArrowClick() {
        Clog.Trace(ClogKey.Net, "onBtnUserArrowClick")
        this.dropDown.node.active = true;
        this.dropDown.node.setPosition(cc.v2(-493, 0))
        this.dropDown.Refresh([
            { Id: 1, Desc: "打开", Action: () => { this.dropDown.node.active = false; } },
            { Id: 2, Desc: "关闭", Action: () => { this.dropDown.node.active = false; } },
        ]);
    }

    private onBtnRoleArrowClick() {
        Clog.Trace(ClogKey.Net, "onBtnRoleArrowClick")
        this.dropDown.node.active = true;
        this.dropDown.node.setPosition(cc.v2(-332, 0))

        this.dropDown.Refresh([
            {
                Id: 0, Desc: Pb2String.GameRole(pb.EnumGameRole.DefaultRole), Action: () => {
                    RoomController.InputGameRole(pb.EnumGameRole.DefaultRole)
                    this.dropDown.node.active = false;
                }
            },
            {
                Id: 1, Desc: Pb2String.GameRole(pb.EnumGameRole.Warrior), Action: () => {
                    RoomController.InputGameRole(pb.EnumGameRole.Warrior)
                    this.dropDown.node.active = false;
                }
            },
            {
                Id: 2, Desc: Pb2String.GameRole(pb.EnumGameRole.Rogue), Action: () => {
                    RoomController.InputGameRole(pb.EnumGameRole.Rogue)
                    this.dropDown.node.active = false;
                }
            },
            {
                Id: 3, Desc: Pb2String.GameRole(pb.EnumGameRole.Mage), Action: () => {
                    RoomController.InputGameRole(pb.EnumGameRole.Mage)
                    this.dropDown.node.active = false;
                }
            },
            {
                Id: 4, Desc: Pb2String.GameRole(pb.EnumGameRole.Hunter), Action: () => {
                    RoomController.InputGameRole(pb.EnumGameRole.Hunter)
                    this.dropDown.node.active = false;
                }
            },
            {
                Id: 5, Desc: Pb2String.GameRole(pb.EnumGameRole.Druid), Action: () => {
                    RoomController.InputGameRole(pb.EnumGameRole.Druid)
                    this.dropDown.node.active = false;
                }
            },
            {
                Id: 6, Desc: Pb2String.GameRole(pb.EnumGameRole.Paladin), Action: () => {
                    RoomController.InputGameRole(pb.EnumGameRole.Paladin)
                    this.dropDown.node.active = false;
                }
            },
            {
                Id: 7, Desc: Pb2String.GameRole(pb.EnumGameRole.Priest), Action: () => {
                    RoomController.InputGameRole(pb.EnumGameRole.Priest)
                    this.dropDown.node.active = false;
                }
            },
            {
                Id: 8, Desc: Pb2String.GameRole(pb.EnumGameRole.Warlock), Action: () => {
                    RoomController.InputGameRole(pb.EnumGameRole.Warlock)
                    this.dropDown.node.active = false;
                }
            },
            {
                Id: 9, Desc: Pb2String.GameRole(pb.EnumGameRole.Shaman), Action: () => {
                    RoomController.InputGameRole(pb.EnumGameRole.Shaman)
                    this.dropDown.node.active = false;
                }
            },
        ]);
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
        this._roleName.string = Pb2String.GameRole(this.data.GameRoleId)
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