
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/util/UIEventCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0eed05Mn0ZKKYmAUrDn/LlP', 'UIEventCenter');
// script/framework/util/UIEventCenter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtil_1 = require("./StringUtil");
var AudioManager_1 = require("../audio/AudioManager");
var UIEventCenter = /** @class */ (function () {
    function UIEventCenter() {
    }
    //按钮点击方法封装
    UIEventCenter.ButtonEvent = function (btn, callback, clickSoundName, disableTime) {
        if (clickSoundName === void 0) { clickSoundName = "S_Button"; }
        if (disableTime === void 0) { disableTime = 0.4; }
        btn.node.on("click", function () {
            if (!btn.interactable) {
                return;
            }
            if (!StringUtil_1.IsNullOrEmpty(clickSoundName)) {
                AudioManager_1.AudioManager.PlaySound(clickSoundName);
            }
            //如果屏蔽时间大于0，点击之后屏蔽
            if (disableTime > 0) {
                btn.interactable = false; //禁用按钮 一定时间后再启用，防连击
                window.setTimeout(function () { if (btn) {
                    btn.interactable = true;
                } }, disableTime * 1000);
            }
            callback();
        });
    };
    //在节点上移动方法封装
    UIEventCenter.TouchNodeStart = function (node, callback) {
        node.on(cc.Node.EventType.TOUCH_START, function (e) { callback(e); });
    };
    UIEventCenter.TouchNodeEnd = function (node, callback) {
        node.on(cc.Node.EventType.TOUCH_END, function (e) { callback(e); });
    };
    UIEventCenter.TouchNodeCancel = function (node, callback) {
        node.on(cc.Node.EventType.TOUCH_CANCEL, function (e) { callback(e); });
    };
    UIEventCenter.TouchNodeMove = function (node, callback) {
        node.on(cc.Node.EventType.TOUCH_MOVE, function (e) { callback(e); });
    };
    UIEventCenter.ScrollSelect = function () {
    };
    return UIEventCenter;
}());
exports.UIEventCenter = UIEventCenter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHV0aWxcXFVJRXZlbnRDZW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBNkM7QUFDN0Msc0RBQXFEO0FBR3JEO0lBQUE7SUF3Q0EsQ0FBQztJQXRDRyxVQUFVO0lBQ0kseUJBQVcsR0FBekIsVUFBMEIsR0FBYyxFQUFFLFFBQWtCLEVBQUUsY0FBbUMsRUFBRSxXQUF5QjtRQUE5RCwrQkFBQSxFQUFBLDJCQUFtQztRQUFFLDRCQUFBLEVBQUEsaUJBQXlCO1FBQ3hILEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRTtnQkFDbkIsT0FBTzthQUNWO1lBQ0QsSUFBSSxDQUFDLDBCQUFhLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ2hDLDJCQUFZLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzFDO1lBQ0Qsa0JBQWtCO1lBQ2xCLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRTtnQkFDakIsR0FBRyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBTSxtQkFBbUI7Z0JBQ2xELE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBUSxJQUFJLEdBQUcsRUFBRTtvQkFBRSxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtpQkFBRSxDQUFDLENBQUMsRUFBRSxXQUFXLEdBQUMsSUFBSSxDQUFDLENBQUE7YUFDdEY7WUFDRCxRQUFRLEVBQUUsQ0FBQTtRQUNkLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELFlBQVk7SUFDRSw0QkFBYyxHQUE1QixVQUE2QixJQUFhLEVBQUUsUUFBMEM7UUFDbEYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsVUFBQyxDQUFzQixJQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFYSwwQkFBWSxHQUExQixVQUEyQixJQUFhLEVBQUUsUUFBMEM7UUFDaEYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBQyxDQUFzQixJQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFYSw2QkFBZSxHQUE3QixVQUE4QixJQUFhLEVBQUUsUUFBMEM7UUFDbkYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBQyxDQUFzQixJQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFYSwyQkFBYSxHQUEzQixVQUE0QixJQUFhLEVBQUUsUUFBMEM7UUFDakYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFzQixJQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFYSwwQkFBWSxHQUExQjtJQUVBLENBQUM7SUFDTCxvQkFBQztBQUFELENBeENBLEFBd0NDLElBQUE7QUF4Q1ksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IElzTnVsbE9yRW1wdHkgfSBmcm9tIFwiLi9TdHJpbmdVdGlsXCI7XG5pbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi4vYXVkaW8vQXVkaW9NYW5hZ2VyXCI7XG5cblxuZXhwb3J0IGNsYXNzIFVJRXZlbnRDZW50ZXIge1xuXG4gICAgLy/mjInpkq7ngrnlh7vmlrnms5XlsIHoo4VcbiAgICBwdWJsaWMgc3RhdGljIEJ1dHRvbkV2ZW50KGJ0bjogY2MuQnV0dG9uLCBjYWxsYmFjazogRnVuY3Rpb24sIGNsaWNrU291bmROYW1lOiBzdHJpbmcgPSBcIlNfQnV0dG9uXCIsIGRpc2FibGVUaW1lOiBudW1iZXIgPSAwLjQpIHtcbiAgICAgICAgYnRuLm5vZGUub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWJ0bi5pbnRlcmFjdGFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIUlzTnVsbE9yRW1wdHkoY2xpY2tTb3VuZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlBsYXlTb3VuZChjbGlja1NvdW5kTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+WmguaenOWxj+iUveaXtumXtOWkp+S6jjDvvIzngrnlh7vkuYvlkI7lsY/olL1cbiAgICAgICAgICAgIGlmIChkaXNhYmxlVGltZSA+IDApIHtcbiAgICAgICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gZmFsc2U7ICAgICAgLy/npoHnlKjmjInpkq4g5LiA5a6a5pe26Ze05ZCO5YaN5ZCv55So77yM6Ziy6L+e5Ye7XG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4geyBpZiAoYnRuKSB7IGJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlIH0gfSwgZGlzYWJsZVRpbWUqMTAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvL+WcqOiKgueCueS4iuenu+WKqOaWueazleWwgeijhVxuICAgIHB1YmxpYyBzdGF0aWMgVG91Y2hOb2RlU3RhcnQobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s6IChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB2b2lkKSB7XG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7IGNhbGxiYWNrKGUpIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgVG91Y2hOb2RlRW5kKG5vZGU6IGNjLk5vZGUsIGNhbGxiYWNrOiAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4gdm9pZCkge1xuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHsgY2FsbGJhY2soZSkgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBUb3VjaE5vZGVDYW5jZWwobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s6IChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB2b2lkKSB7XG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4geyBjYWxsYmFjayhlKSB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIFRvdWNoTm9kZU1vdmUobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s6IChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB2b2lkKSB7XG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHsgY2FsbGJhY2soZSkgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBTY3JvbGxTZWxlY3QoKXtcblxuICAgIH1cbn0iXX0=