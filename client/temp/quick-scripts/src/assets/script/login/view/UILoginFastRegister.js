"use strict";
cc._RF.push(module, '680c6tN8YZAnaeAQbWvHnT/', 'UILoginFastRegister');
// script/login/view/UILoginFastRegister.ts

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
var UIEnum_1 = require("../../framework/ui/UIEnum");
var UIBase_1 = require("../../framework/ui/UIBase");
var UIEventCenter_1 = require("../../framework/util/UIEventCenter");
var UIManager_1 = require("../../framework/ui/UIManager");
var StringUtil_1 = require("../../framework/util/StringUtil");
var UITip_1 = require("../../commonUI/UITip");
var UILoginFastRegister = /** @class */ (function (_super) {
    __extends(UILoginFastRegister, _super);
    function UILoginFastRegister() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PrefabName = 'PanelLoginFastRegister';
        _this.OpenTween = UIEnum_1.EnumUIOpenTween.Scale;
        _this.CloseTween = UIEnum_1.EnumUICloseTween.Scale;
        return _this;
    }
    UILoginFastRegister.prototype.onLoad = function () {
        this._btnClose = cc.find('Close', this.node).getComponent(cc.Button);
        this._btnOK = cc.find('OK', this.node).getComponent(cc.Button);
        this._inputAccount = cc.find('Account/input', this.node).getComponent(cc.EditBox);
        this._inputPassword1 = cc.find('Password1/input', this.node).getComponent(cc.EditBox);
        this._inputPassword2 = cc.find('Password2/input', this.node).getComponent(cc.EditBox);
        this.initEvent();
    };
    UILoginFastRegister.prototype.initEvent = function () {
        var _this = this;
        UIEventCenter_1.UIEventCenter.ButtonEvent(this._btnClose, function () { return _this.OnBtnCloseClick(); });
        UIEventCenter_1.UIEventCenter.ButtonEvent(this._btnOK, function () { return _this.OnBtnOKClick(); });
    };
    UILoginFastRegister.prototype.OnBtnCloseClick = function () {
        UIManager_1.UIManager.CloseUI(UILoginFastRegister);
    };
    UILoginFastRegister.prototype.OnBtnOKClick = function () {
        if (StringUtil_1.IsNullOrEmpty(this._inputAccount.string)) {
            UITip_1.UITip.Info('您输入的账号为空');
            return;
        }
        if (StringUtil_1.IsNullOrEmpty(this._inputPassword1.string) || StringUtil_1.IsNullOrEmpty(this._inputPassword2.string)) {
            UITip_1.UITip.Info('您输入的密码为空');
            return;
        }
        if (this._inputPassword2.string != this._inputPassword1.string) {
            UITip_1.UITip.Info('您两次出输入的密码不一致');
            return;
        }
    };
    return UILoginFastRegister;
}(UIBase_1.UIBase));
exports.default = UILoginFastRegister;

cc._RF.pop();