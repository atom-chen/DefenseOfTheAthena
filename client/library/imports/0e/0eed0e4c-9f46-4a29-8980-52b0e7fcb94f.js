"use strict";
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