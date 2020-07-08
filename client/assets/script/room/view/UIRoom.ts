import { UIBase } from "../../framework/ui/UIBase";
import { UIEventCenter } from "../../framework/util/UIEventCenter";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { RoomController } from "../controller/RoomController";
import { RoomUserItem } from "./RoomUserItem";
import { GameCenter, UIEventCommand } from "../../other/GameCenter";

export class UIRoom extends UIBase {

    public PrefabName = "PanelRoom"

    private _roomId: cc.Label;
    private _roomName: cc.Label;
    private _mapName: cc.Label;
    private _scrollview: cc.Node;
    private _btnStart: cc.Button;
    private _userItem: cc.Node;

    private allRoomUsers: Array<RoomUserItem>

    onLoad() {
        this.initRoot();
        this.initEvent();
    }

    start() {
        this.refreshRoomId();
        this.refreshRoomName();
        this.refreshMapName();
    }

    onDestroy() {
        this.removeEvent();
    }

    private initRoot() {
        this._roomId = cc.find("RoomId", this.node).getComponent(cc.Label);
        this._roomName = cc.find("RoomName", this.node).getComponent(cc.Label);
        this._mapName = cc.find("MapName", this.node).getComponent(cc.Label);
        this._scrollview = cc.find("ScrollView/view/content", this.node);
        this._btnStart = cc.find("BtnStart", this.node).getComponent(cc.Button);
        this._userItem = cc.find("UserItem", this.node)
        this._userItem.active = false;
        this.allRoomUsers = new Array<RoomUserItem>();
        for (let index = 0; index < RoomController.CurRoom.MaxUser; index++) {
            let node = cc.instantiate(this._userItem)
            node.setParent(this._scrollview)
            let item = node.addComponent(RoomUserItem)
            item.Init(index)
            this.allRoomUsers.push(item)
        }
    }

    private initEvent() {
        UIEventCenter.ButtonEvent(this._btnStart, () => this.onBtnStartClick())
        GameCenter.EventTarget.on(UIEventCommand.RefreshRoomState, this.RefreshRoomInfo, this)
    }

    private removeEvent() {
        GameCenter.EventTarget.off(UIEventCommand.RefreshRoomState, this.RefreshRoomInfo, this)
    }

    private RefreshRoomInfo() {
        this.allRoomUsers.forEach(item => item.Refresh())
    }

    private onBtnStartClick() {
        Clog.Trace(ClogKey.Net, "onBtnStartClick")
    }

    private refreshRoomId() {
        this._roomId.string = "房号：" + RoomController.CurRoom.RoomId.toString();
    }

    private refreshRoomName() {
        this._roomName.string = "房间名称：" + RoomController.CurRoom.RoomName;
    }

    private refreshMapName() {
        this._mapName.string = "地图名称：" + RoomController.CurRoom.MapName;
    }

}