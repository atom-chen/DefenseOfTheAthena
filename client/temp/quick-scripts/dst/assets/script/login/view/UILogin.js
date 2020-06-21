
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login/view/UILogin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcdmlld1xcVUlMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBbUQ7QUFDbkQsa0RBQTBEO0FBRTFELG9FQUFtRTtBQUNuRSwwREFBeUQ7QUFDekQsNkNBQTRDO0FBRzVDO0lBQTZCLDJCQUFNO0lBQW5DO1FBQUEscUVBMkNDO1FBekNVLGdCQUFVLEdBQUcsWUFBWSxDQUFBOztJQXlDcEMsQ0FBQztJQXJDRyx1QkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDeEIsY0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFPLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFBO1FBQzFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxVQUFVO0lBQ0YsMEJBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEYsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzlGLENBQUM7SUFFRCxRQUFRO0lBQ0EsMkJBQVMsR0FBakI7UUFBQSxpQkFHQztRQUZHLDZCQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUExQixDQUEwQixDQUFDLENBQUE7UUFDL0UsNkJBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixFQUFFLEVBQTNCLENBQTJCLENBQUMsQ0FBQTtJQUNyRixDQUFDO0lBRUQsY0FBYztJQUNOLHNDQUFvQixHQUE1QjtJQUVBLENBQUM7SUFFTyxxQ0FBbUIsR0FBM0I7UUFDSSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyx5QkFBVyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVPLHlCQUFPLEdBQWY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8sa0NBQWdCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBQ0wsY0FBQztBQUFELENBM0NBLEFBMkNDLENBM0M0QixlQUFNLEdBMkNsQztBQTNDWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJQmFzZSB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdWkvVUlCYXNlXCI7XG5pbXBvcnQgQ2xvZywgeyBDbG9nS2V5IH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9jbG9nL0Nsb2dcIjtcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvYXVkaW8vQXVkaW9NYW5hZ2VyXCI7XG5pbXBvcnQgeyBVSUV2ZW50Q2VudGVyIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay91dGlsL1VJRXZlbnRDZW50ZXJcIjtcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdWkvVUlNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVSUxvZ2luRmFzdCB9IGZyb20gXCIuL1VJTG9naW5GYXN0XCI7XG5cblxuZXhwb3J0IGNsYXNzIFVJTG9naW4gZXh0ZW5kcyBVSUJhc2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IFVJTG9naW5cbiAgICBwdWJsaWMgUHJlZmFiTmFtZSA9ICdQYW5lbExvZ2luJ1xuICAgIHByaXZhdGUgX2J0bkZhc3RMb2dpbjogY2MuQnV0dG9uO1xuICAgIHByaXZhdGUgX2J0bkd1ZXN0TG9naW46IGNjLkJ1dHRvbjtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBVSUxvZ2luLkluc3RhbmNlID0gdGhpcztcbiAgICAgICAgQ2xvZy5UcmFjZShDbG9nS2V5LkxvZ2luLCAnVUlMb2dpbiBzdGFydCcpXG4gICAgICAgIHRoaXMuSW5pdFJvb3QoKTtcbiAgICAgICAgdGhpcy5Jbml0RXZlbnQoKTtcbiAgICAgICAgdGhpcy5SZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgLy/liJ3lp4vljJblkITpnaLmnb/oioLngrlcbiAgICBwcml2YXRlIEluaXRSb290KCkge1xuICAgICAgICB0aGlzLl9idG5GYXN0TG9naW4gPSBjYy5maW5kKCdCdG5Hcm91cC9idG5GYXN0TG9naW4nLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXG4gICAgICAgIHRoaXMuX2J0bkd1ZXN0TG9naW4gPSBjYy5maW5kKCdCdG5Hcm91cC9idG5HdWVzdExvZ2luJywgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxuICAgIH1cblxuICAgIC8v5Yid5aeL5YyW5ZCE5LqL5Lu2XG4gICAgcHJpdmF0ZSBJbml0RXZlbnQoKSB7XG4gICAgICAgIFVJRXZlbnRDZW50ZXIuQnV0dG9uRXZlbnQodGhpcy5fYnRuRmFzdExvZ2luLCAoKSA9PiB0aGlzLk9uQnRuRmFzdExvZ2luQ2xpY2soKSlcbiAgICAgICAgVUlFdmVudENlbnRlci5CdXR0b25FdmVudCh0aGlzLl9idG5HdWVzdExvZ2luLCAoKSA9PiB0aGlzLk9uQnRuR3Vlc3RMb2dpbkNsaWNrKCkpXG4gICAgfVxuXG4gICAgLy/muLjlrqLnmbvlvZUgPj4g6ZqP5py66LSm5Y+3XG4gICAgcHJpdmF0ZSBPbkJ0bkd1ZXN0TG9naW5DbGljaygpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgT25CdG5GYXN0TG9naW5DbGljaygpIHtcbiAgICAgICAgVUlNYW5hZ2VyLk9wZW5VSShVSUxvZ2luRmFzdClcbiAgICB9XG5cbiAgICBwcml2YXRlIFJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuUmVmcmVzaExvZ2luQnRucygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgUmVmcmVzaExvZ2luQnRucygpIHtcbiAgICAgICAgdGhpcy5fYnRuRmFzdExvZ2luLm5vZGUuYWN0aXZlID0gQ0NfREVWID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLl9idG5HdWVzdExvZ2luLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxufSJdfQ==