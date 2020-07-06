import { UIBase } from "../../framework/ui/UIBase";
import { UIUtil } from "../../framework/ui/UIUtil";
import { Session } from "../../login/model/SessionData";
import { pb } from "../../other/proto";
import { UIEventCenter } from "../../framework/util/UIEventCenter";
import Clog, { ClogKey } from "../../framework/clog/Clog";
import { LobbyController } from "../controller/LobbyController";

export class UILobby extends UIBase {

    public PrefabName = "PanelLobby"

    private _icon: cc.Sprite;
    private _nickName: cc.Label;
    private _sexIcon: cc.Sprite;
    private _gold: cc.Label;
    private _diamond: cc.Label;

    private _btnCreateRoom: cc.Button;
    private _btnJoinRoom: cc.Button;


    onLoad() {
        this.initRoot();
        this.initEvent();
    }

    start() {
        this.refresh();
    }

    private initRoot() {
        this._icon = cc.find("Mask/Icon", this.node).getComponent(cc.Sprite);
        this._nickName = cc.find("NickName", this.node).getComponent(cc.Label);
        this._sexIcon = cc.find("Sex", this.node).getComponent(cc.Sprite);
        this._gold = cc.find("Gold/Num", this.node).getComponent(cc.Label);
        this._diamond = cc.find("Diamond/Num", this.node).getComponent(cc.Label);
        this._btnJoinRoom = cc.find("Layout/JoinRoom", this.node).getComponent(cc.Button)
        this._btnCreateRoom = cc.find("Layout/CreateRoom", this.node).getComponent(cc.Button)
    }

    private initEvent() {
        UIEventCenter.ButtonEvent(this._btnJoinRoom, this.OnBtnJoinRoomClick)
        UIEventCenter.ButtonEvent(this._btnCreateRoom, this.OnBtnCreateRoomClick)
    }

    private refresh() {
        this.refreshUserIcon();
        this.refreshUserNick();
        this.refreshUserSex();
        this.refreshUserGold();
        this.refreshUserDimand();
    }

    private refreshUserIcon() {
        // https://xs-image-proxy.oss-cn-hangzhou.aliyuncs.com/202006/16/5ee8daa9675ac6.31716764.bmp
        // https://xs-image-proxy.oss-cn-hangzhou.aliyuncs.com/202006/05/5ed9b282686ae5.11771642.png
        // https://xs-image-proxy.oss-cn-hangzhou.aliyuncs.com/202006/05/5eda0d1e2cfca7.03159201.png
        // https://xs-image-proxy.oss-cn-hangzhou.aliyuncs.com/202006/05/5eda277c19d801.88620245.jpg
        UIUtil.LoadRemoteImage(Session.UserInfo.Icon, this._icon)
    }

    private refreshUserNick() {
        this._nickName.string = Session.UserInfo.NickName;
    }

    private refreshUserSex() {
        switch (Session.UserInfo.Sex) {
            case pb.EnumSex.Unknow:
                {
                    this._sexIcon.node.active = false;
                }
                break;
            case pb.EnumSex.Male:
                {
                    UIUtil.ChangeSprite("T_Com_Male", this._sexIcon)
                }
                break;
            case pb.EnumSex.Female:
                {
                    UIUtil.ChangeSprite("T_Com_Female", this._sexIcon)
                }
                break;
        }
    }

    private refreshUserGold() {
        this._gold.string = Session.MoneyInfo.Gold.toString();
    }

    private refreshUserDimand() {
        this._diamond.string = Session.MoneyInfo.Diamond.toString();
    }

    private OnBtnJoinRoomClick() {
        Clog.Trace(ClogKey.UI, "OnBtnJoinRoomClick")
        LobbyController.JoinRoom();
    }

    private OnBtnCreateRoomClick() {
        Clog.Trace(ClogKey.UI, "OnBtnCreateRoomClick")
        LobbyController.CreateRoom();
    }
}