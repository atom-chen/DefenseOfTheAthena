"use strict";
cc._RF.push(module, '18dde6cVHVFwLGr0ZjcMLSg', 'UILoginFast');
// script/login/view/UILoginFast.ts

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
var UIEnum_1 = require("../../framework/ui/UIEnum");
var UIEventCenter_1 = require("../../framework/util/UIEventCenter");
var StringUtil_1 = require("../../framework/util/StringUtil");
var UIManager_1 = require("../../framework/ui/UIManager");
var UILoginFastRegister_1 = require("./UILoginFastRegister");
var UITip_1 = require("../../commonUI/UITip");
var LoginController_1 = require("../controller/LoginController");
var UILoginFast = /** @class */ (function (_super) {
    __extends(UILoginFast, _super);
    function UILoginFast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OpenTween = UIEnum_1.EnumUIOpenTween.Scale;
        _this.CloseTween = UIEnum_1.EnumUICloseTween.Scale;
        _this.PrefabName = 'PanelLoginFast';
        return _this;
    }
    UILoginFast.prototype.start = function () {
        UILoginFast.Instance = this;
        this.InitRoot();
        this.InitEvent();
        this.Refresh();
    };
    //初始化各面板节点
    UILoginFast.prototype.InitRoot = function () {
        this._inputAccount = cc.find('Account/input', this.node).getComponent(cc.EditBox);
        this._inputPassword = cc.find('Password/input', this.node).getComponent(cc.EditBox);
        this._btnOK = cc.find('BtnOK', this.node).getComponent(cc.Button);
        this._btnClose = cc.find('BtnClose', this.node).getComponent(cc.Button);
        this._btnRegister = cc.find('BtnRegister', this.node).getComponent(cc.Button);
        this._fastRegister = cc.find('FastRegister', this.node);
    };
    UILoginFast.prototype.InitEvent = function () {
        var _this = this;
        UIEventCenter_1.UIEventCenter.ButtonEvent(this._btnOK, function () { return _this.OnBtnOKClick(); });
        UIEventCenter_1.UIEventCenter.ButtonEvent(this._btnClose, function () { return _this.OnBtnCloseClick(); });
        UIEventCenter_1.UIEventCenter.ButtonEvent(this._btnRegister, function () { return _this.OnBtnRegisterClick(); });
    };
    UILoginFast.prototype.Refresh = function () {
    };
    UILoginFast.prototype.OnBtnOKClick = function () {
        if (StringUtil_1.IsNullOrEmpty(this._inputAccount.string)) {
            UITip_1.UITip.Info('您输入的账号为空');
            return;
        }
        if (StringUtil_1.IsNullOrEmpty(this._inputPassword.string)) {
            UITip_1.UITip.Info('您输入的为空');
            return;
        }
        LoginController_1.LoginController.HttpLogin(this._inputAccount.string, this._inputPassword.string);
    };
    UILoginFast.prototype.OnBtnCloseClick = function () {
        UIManager_1.UIManager.CloseUI(UILoginFast);
    };
    UILoginFast.prototype.OnBtnRegisterClick = function () {
        UIManager_1.UIManager.OpenUI(UILoginFastRegister_1.default);
    };
    return UILoginFast;
}(UIBase_1.UIBase));
exports.UILoginFast = UILoginFast;

cc._RF.pop();