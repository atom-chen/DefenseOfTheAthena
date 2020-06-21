
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login/view/UILoginFastRegister.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcdmlld1xcVUlMb2dpbkZhc3RSZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBOEU7QUFDOUUsb0RBQW1EO0FBQ25ELG9FQUFtRTtBQUNuRSwwREFBeUQ7QUFDekQsOERBQWdFO0FBQ2hFLDhDQUE2QztBQUc3QztJQUFpRCx1Q0FBTTtJQUF2RDtRQUFBLHFFQWdEQztRQS9DVSxnQkFBVSxHQUFHLHdCQUF3QixDQUFBO1FBQ3JDLGVBQVMsR0FBRyx3QkFBZSxDQUFDLEtBQUssQ0FBQztRQUNsQyxnQkFBVSxHQUFHLHlCQUFnQixDQUFDLEtBQUssQ0FBQzs7SUE2Qy9DLENBQUM7SUFyQ0csb0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDcEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2pGLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNyRixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDckYsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyx1Q0FBUyxHQUFqQjtRQUFBLGlCQUdDO1FBRkcsNkJBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUE7UUFDdkUsNkJBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUE7SUFDckUsQ0FBQztJQUdPLDZDQUFlLEdBQXZCO1FBQ0kscUJBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBRU8sMENBQVksR0FBcEI7UUFDSSxJQUFJLDBCQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQyxhQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3RCLE9BQU87U0FDVjtRQUVELElBQUksMEJBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLDBCQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxRixhQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3RCLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDNUQsYUFBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUMxQixPQUFPO1NBQ1Y7SUFHTCxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQWhEQSxBQWdEQyxDQWhEZ0QsZUFBTSxHQWdEdEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnVtVUlPcGVuVHdlZW4sIEVudW1VSUNsb3NlVHdlZW4gfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL1VJRW51bVwiO1xyXG5pbXBvcnQgeyBVSUJhc2UgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL1VJQmFzZVwiO1xyXG5pbXBvcnQgeyBVSUV2ZW50Q2VudGVyIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay91dGlsL1VJRXZlbnRDZW50ZXJcIjtcclxuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay91aS9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSXNOdWxsT3JFbXB0eSB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdXRpbC9TdHJpbmdVdGlsXCI7XHJcbmltcG9ydCB7IFVJVGlwIH0gZnJvbSBcIi4uLy4uL2NvbW1vblVJL1VJVGlwXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlMb2dpbkZhc3RSZWdpc3RlciBleHRlbmRzIFVJQmFzZSB7XHJcbiAgICBwdWJsaWMgUHJlZmFiTmFtZSA9ICdQYW5lbExvZ2luRmFzdFJlZ2lzdGVyJ1xyXG4gICAgcHVibGljIE9wZW5Ud2VlbiA9IEVudW1VSU9wZW5Ud2Vlbi5TY2FsZTtcclxuICAgIHB1YmxpYyBDbG9zZVR3ZWVuID0gRW51bVVJQ2xvc2VUd2Vlbi5TY2FsZTtcclxuXHJcbiAgICBwcml2YXRlIF9idG5DbG9zZTogY2MuQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfYnRuT0s6IGNjLkJ1dHRvbjtcclxuICAgIHByaXZhdGUgX2lucHV0QWNjb3VudDogY2MuRWRpdEJveDtcclxuICAgIHByaXZhdGUgX2lucHV0UGFzc3dvcmQxOiBjYy5FZGl0Qm94O1xyXG4gICAgcHJpdmF0ZSBfaW5wdXRQYXNzd29yZDI6IGNjLkVkaXRCb3g7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX2J0bkNsb3NlID0gY2MuZmluZCgnQ2xvc2UnLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5fYnRuT0sgPSBjYy5maW5kKCdPSycsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLl9pbnB1dEFjY291bnQgPSBjYy5maW5kKCdBY2NvdW50L2lucHV0JywgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveClcclxuICAgICAgICB0aGlzLl9pbnB1dFBhc3N3b3JkMSA9IGNjLmZpbmQoJ1Bhc3N3b3JkMS9pbnB1dCcsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpXHJcbiAgICAgICAgdGhpcy5faW5wdXRQYXNzd29yZDIgPSBjYy5maW5kKCdQYXNzd29yZDIvaW5wdXQnLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0RXZlbnQoKSB7XHJcbiAgICAgICAgVUlFdmVudENlbnRlci5CdXR0b25FdmVudCh0aGlzLl9idG5DbG9zZSwgKCkgPT4gdGhpcy5PbkJ0bkNsb3NlQ2xpY2soKSlcclxuICAgICAgICBVSUV2ZW50Q2VudGVyLkJ1dHRvbkV2ZW50KHRoaXMuX2J0bk9LLCAoKSA9PiB0aGlzLk9uQnRuT0tDbGljaygpKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIE9uQnRuQ2xvc2VDbGljaygpIHtcclxuICAgICAgICBVSU1hbmFnZXIuQ2xvc2VVSShVSUxvZ2luRmFzdFJlZ2lzdGVyKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25CdG5PS0NsaWNrKCkge1xyXG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KHRoaXMuX2lucHV0QWNjb3VudC5zdHJpbmcpKSB7XHJcbiAgICAgICAgICAgIFVJVGlwLkluZm8oJ+aCqOi+k+WFpeeahOi0puWPt+S4uuepuicpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KHRoaXMuX2lucHV0UGFzc3dvcmQxLnN0cmluZykgfHwgSXNOdWxsT3JFbXB0eSh0aGlzLl9pbnB1dFBhc3N3b3JkMi5zdHJpbmcpKSB7XHJcbiAgICAgICAgICAgIFVJVGlwLkluZm8oJ+aCqOi+k+WFpeeahOWvhueggeS4uuepuicpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pbnB1dFBhc3N3b3JkMi5zdHJpbmcgIT0gdGhpcy5faW5wdXRQYXNzd29yZDEuc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIFVJVGlwLkluZm8oJ+aCqOS4pOasoeWHuui+k+WFpeeahOWvhueggeS4jeS4gOiHtCcpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il19