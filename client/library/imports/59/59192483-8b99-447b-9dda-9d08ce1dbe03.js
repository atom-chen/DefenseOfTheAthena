"use strict";
cc._RF.push(module, '59192SDi5lEe53anQjOHb4D', 'UILogin');
// script/login/view/UILogin.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UIBase_1 = require("../../framework/ui/UIBase");
var Clog_1 = require("../../framework/clog/Clog");
var UIEventCenter_1 = require("../../framework/util/UIEventCenter");
var UIManager_1 = require("../../framework/ui/UIManager");
var UILoginFast_1 = require("./UILoginFast");
var UILogin = /** @class */ (function (_super) {
    __extends(UILogin, _super);
    function UILogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PrefabName = 'PanelLogin';
        return _this;
    }
    UILogin.prototype.start = function () {
        UILogin.Instance = this;
        Clog_1.default.Trace(Clog_1.ClogKey.Login, 'UILogin start');
        this.InitRoot();
        this.InitEvent();
        this.Refresh();
    };
    //初始化各面板节点
    UILogin.prototype.InitRoot = function () {
        this._btnFastLogin = cc.find('BtnGroup/btnFastLogin', this.node).getComponent(cc.Button);
        this._btnGuestLogin = cc.find('BtnGroup/btnGuestLogin', this.node).getComponent(cc.Button);
    };
    //初始化各事件
    UILogin.prototype.InitEvent = function () {
        var _this = this;
        UIEventCenter_1.UIEventCenter.ButtonEvent(this._btnFastLogin, function () { return _this.OnBtnFastLoginClick(); });
        UIEventCenter_1.UIEventCenter.ButtonEvent(this._btnGuestLogin, function () { return _this.OnBtnGuestLoginClick(); });
    };
    //游客登录 >> 随机账号
    UILogin.prototype.OnBtnGuestLoginClick = function () {
    };
    UILogin.prototype.OnBtnFastLoginClick = function () {
        UIManager_1.UIManager.OpenUI(UILoginFast_1.UILoginFast);
    };
    UILogin.prototype.Refresh = function () {
        this.RefreshLoginBtns();
    };
    UILogin.prototype.RefreshLoginBtns = function () {
        this._btnFastLogin.node.active = CC_DEV ? true : false;
        this._btnGuestLogin.node.active = false;
    };
    return UILogin;
}(UIBase_1.UIBase));
exports.UILogin = UILogin;

cc._RF.pop();