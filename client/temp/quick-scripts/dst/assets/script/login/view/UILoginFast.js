
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login/view/UILoginFast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcdmlld1xcVUlMb2dpbkZhc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBQ25ELG9EQUE4RTtBQUM5RSxvRUFBbUU7QUFDbkUsOERBQWdFO0FBQ2hFLDBEQUF5RDtBQUN6RCw2REFBd0Q7QUFDeEQsOENBQTZDO0FBQzdDLGlFQUFnRTtBQUloRTtJQUFpQywrQkFBTTtJQUF2QztRQUFBLHFFQStEQztRQTVEVSxlQUFTLEdBQUcsd0JBQWUsQ0FBQyxLQUFLLENBQUM7UUFDbEMsZ0JBQVUsR0FBRyx5QkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDcEMsZ0JBQVUsR0FBRyxnQkFBZ0IsQ0FBQTs7SUEwRHhDLENBQUM7SUFqREcsMkJBQUssR0FBTDtRQUNJLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxVQUFVO0lBQ0YsOEJBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2pGLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNuRixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM3RSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBRU8sK0JBQVMsR0FBakI7UUFBQSxpQkFLQztRQUhHLDZCQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFBO1FBQ2pFLDZCQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFBO1FBQ3ZFLDZCQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUF6QixDQUF5QixDQUFDLENBQUE7SUFDakYsQ0FBQztJQUVNLDZCQUFPLEdBQWQ7SUFFQSxDQUFDO0lBRU8sa0NBQVksR0FBcEI7UUFDSSxJQUFJLDBCQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQyxhQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3RCLE9BQU87U0FDVjtRQUNELElBQUksMEJBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNDLGFBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDcEIsT0FBTztTQUNWO1FBRUQsaUNBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNwRixDQUFDO0lBRU8scUNBQWUsR0FBdkI7UUFDSSxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRU8sd0NBQWtCLEdBQTFCO1FBQ0kscUJBQVMsQ0FBQyxNQUFNLENBQUMsNkJBQW1CLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQS9EQSxBQStEQyxDQS9EZ0MsZUFBTSxHQStEdEM7QUEvRFksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSUJhc2UgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL1VJQmFzZVwiO1xuaW1wb3J0IHsgRW51bVVJT3BlblR3ZWVuLCBFbnVtVUlDbG9zZVR3ZWVuIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay91aS9VSUVudW1cIjtcbmltcG9ydCB7IFVJRXZlbnRDZW50ZXIgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3V0aWwvVUlFdmVudENlbnRlclwiO1xuaW1wb3J0IHsgSXNOdWxsT3JFbXB0eSB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdXRpbC9TdHJpbmdVdGlsXCI7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL1VJTWFuYWdlclwiO1xuaW1wb3J0IFVJTG9naW5GYXN0UmVnaXN0ZXIgZnJvbSBcIi4vVUlMb2dpbkZhc3RSZWdpc3RlclwiO1xuaW1wb3J0IHsgVUlUaXAgfSBmcm9tIFwiLi4vLi4vY29tbW9uVUkvVUlUaXBcIjtcbmltcG9ydCB7IExvZ2luQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVyL0xvZ2luQ29udHJvbGxlclwiO1xuXG5cblxuZXhwb3J0IGNsYXNzIFVJTG9naW5GYXN0IGV4dGVuZHMgVUlCYXNlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IFVJTG9naW5GYXN0XG4gICAgcHVibGljIE9wZW5Ud2VlbiA9IEVudW1VSU9wZW5Ud2Vlbi5TY2FsZTtcbiAgICBwdWJsaWMgQ2xvc2VUd2VlbiA9IEVudW1VSUNsb3NlVHdlZW4uU2NhbGU7XG4gICAgcHVibGljIFByZWZhYk5hbWUgPSAnUGFuZWxMb2dpbkZhc3QnXG4gICAgcHJpdmF0ZSBfaW5wdXRBY2NvdW50OiBjYy5FZGl0Qm94O1xuICAgIHByaXZhdGUgX2lucHV0UGFzc3dvcmQ6IGNjLkVkaXRCb3g7XG4gICAgcHJpdmF0ZSBfYnRuT0s6IGNjLkJ1dHRvbjtcbiAgICBwcml2YXRlIF9idG5DbG9zZTogY2MuQnV0dG9uO1xuICAgIHByaXZhdGUgX2J0blJlZ2lzdGVyOiBjYy5CdXR0b247XG4gICAgcHJpdmF0ZSBfZmFzdFJlZ2lzdGVyOiBjYy5Ob2RlO1xuXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgVUlMb2dpbkZhc3QuSW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLkluaXRSb290KCk7XG4gICAgICAgIHRoaXMuSW5pdEV2ZW50KCk7XG4gICAgICAgIHRoaXMuUmVmcmVzaCgpO1xuICAgIH1cblxuICAgIC8v5Yid5aeL5YyW5ZCE6Z2i5p2/6IqC54K5XG4gICAgcHJpdmF0ZSBJbml0Um9vdCgpIHtcbiAgICAgICAgdGhpcy5faW5wdXRBY2NvdW50ID0gY2MuZmluZCgnQWNjb3VudC9pbnB1dCcsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpXG4gICAgICAgIHRoaXMuX2lucHV0UGFzc3dvcmQgPSBjYy5maW5kKCdQYXNzd29yZC9pbnB1dCcsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpXG4gICAgICAgIHRoaXMuX2J0bk9LID0gY2MuZmluZCgnQnRuT0snLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXG4gICAgICAgIHRoaXMuX2J0bkNsb3NlID0gY2MuZmluZCgnQnRuQ2xvc2UnLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXG4gICAgICAgIHRoaXMuX2J0blJlZ2lzdGVyID0gY2MuZmluZCgnQnRuUmVnaXN0ZXInLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXG4gICAgICAgIHRoaXMuX2Zhc3RSZWdpc3RlciA9IGNjLmZpbmQoJ0Zhc3RSZWdpc3RlcicsIHRoaXMubm9kZSlcbiAgICB9XG5cbiAgICBwcml2YXRlIEluaXRFdmVudCgpIHtcblxuICAgICAgICBVSUV2ZW50Q2VudGVyLkJ1dHRvbkV2ZW50KHRoaXMuX2J0bk9LLCAoKSA9PiB0aGlzLk9uQnRuT0tDbGljaygpKVxuICAgICAgICBVSUV2ZW50Q2VudGVyLkJ1dHRvbkV2ZW50KHRoaXMuX2J0bkNsb3NlLCAoKSA9PiB0aGlzLk9uQnRuQ2xvc2VDbGljaygpKVxuICAgICAgICBVSUV2ZW50Q2VudGVyLkJ1dHRvbkV2ZW50KHRoaXMuX2J0blJlZ2lzdGVyLCAoKSA9PiB0aGlzLk9uQnRuUmVnaXN0ZXJDbGljaygpKVxuICAgIH1cblxuICAgIHB1YmxpYyBSZWZyZXNoKCkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBPbkJ0bk9LQ2xpY2soKSB7XG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KHRoaXMuX2lucHV0QWNjb3VudC5zdHJpbmcpKSB7XG4gICAgICAgICAgICBVSVRpcC5JbmZvKCfmgqjovpPlhaXnmoTotKblj7fkuLrnqbonKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KHRoaXMuX2lucHV0UGFzc3dvcmQuc3RyaW5nKSkge1xuICAgICAgICAgICAgVUlUaXAuSW5mbygn5oKo6L6T5YWl55qE5Li656m6JylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZ2luQ29udHJvbGxlci5IdHRwTG9naW4odGhpcy5faW5wdXRBY2NvdW50LnN0cmluZywgdGhpcy5faW5wdXRQYXNzd29yZC5zdHJpbmcpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBPbkJ0bkNsb3NlQ2xpY2soKSB7XG4gICAgICAgIFVJTWFuYWdlci5DbG9zZVVJKFVJTG9naW5GYXN0KVxuICAgIH1cblxuICAgIHByaXZhdGUgT25CdG5SZWdpc3RlckNsaWNrKCkge1xuICAgICAgICBVSU1hbmFnZXIuT3BlblVJKFVJTG9naW5GYXN0UmVnaXN0ZXIpXG4gICAgfVxuXG59XG5cblxuIl19