
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/ui/UIEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '162f6I+r1ZK/5YPHqfaTsJ8', 'UIEnum');
// script/framework/ui/UIEnum.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumUIHierarchy;
(function (EnumUIHierarchy) {
    EnumUIHierarchy[EnumUIHierarchy["Base"] = 0] = "Base";
    EnumUIHierarchy[EnumUIHierarchy["Normal"] = 10000] = "Normal";
    EnumUIHierarchy[EnumUIHierarchy["Fix"] = 20000] = "Fix";
    EnumUIHierarchy[EnumUIHierarchy["Marquee"] = 20100] = "Marquee";
    EnumUIHierarchy[EnumUIHierarchy["Tip"] = 20200] = "Tip";
    EnumUIHierarchy[EnumUIHierarchy["Loading"] = 20300] = "Loading";
    EnumUIHierarchy[EnumUIHierarchy["Waiting"] = 20400] = "Waiting";
    EnumUIHierarchy[EnumUIHierarchy["NetDlg"] = 20500] = "NetDlg";
    EnumUIHierarchy[EnumUIHierarchy["FrameMask"] = 20700] = "FrameMask";
})(EnumUIHierarchy = exports.EnumUIHierarchy || (exports.EnumUIHierarchy = {}));
var EnumUIOpenTween;
(function (EnumUIOpenTween) {
    EnumUIOpenTween["None"] = "None";
    EnumUIOpenTween["Scale"] = "Scale";
    EnumUIOpenTween["FadeIn"] = "FadeIn";
    EnumUIOpenTween["PullUp"] = "PullUp";
})(EnumUIOpenTween = exports.EnumUIOpenTween || (exports.EnumUIOpenTween = {}));
var EnumUICloseTween;
(function (EnumUICloseTween) {
    EnumUICloseTween["None"] = "None";
    EnumUICloseTween["Scale"] = "Scale";
    EnumUICloseTween["FadeOut"] = "FadeOut";
    EnumUICloseTween["PullDown"] = "PullDown";
})(EnumUICloseTween = exports.EnumUICloseTween || (exports.EnumUICloseTween = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHVpXFxVSUVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLGVBVVg7QUFWRCxXQUFZLGVBQWU7SUFDdkIscURBQVEsQ0FBQTtJQUNSLDZEQUFjLENBQUE7SUFDZCx1REFBVyxDQUFBO0lBQ1gsK0RBQWUsQ0FBQTtJQUNmLHVEQUFXLENBQUE7SUFDWCwrREFBZSxDQUFBO0lBQ2YsK0RBQWUsQ0FBQTtJQUNmLDZEQUFjLENBQUE7SUFDZCxtRUFBaUIsQ0FBQTtBQUNyQixDQUFDLEVBVlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFVMUI7QUFFRCxJQUFZLGVBS1g7QUFMRCxXQUFZLGVBQWU7SUFDdkIsZ0NBQWEsQ0FBQTtJQUNiLGtDQUFlLENBQUE7SUFDZixvQ0FBaUIsQ0FBQTtJQUNqQixvQ0FBaUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFLMUI7QUFFRCxJQUFZLGdCQUtYO0FBTEQsV0FBWSxnQkFBZ0I7SUFDeEIsaUNBQWEsQ0FBQTtJQUNiLG1DQUFlLENBQUE7SUFDZix1Q0FBbUIsQ0FBQTtJQUNuQix5Q0FBcUIsQ0FBQTtBQUN6QixDQUFDLEVBTFcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFLM0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBFbnVtVUlIaWVyYXJjaHkge1xuICAgIEJhc2UgPSAwLCAgICAgICAgICAgICAgICAgICAvL+WfuuehgOWxgiBlZzrlu7rnrZHlkI3np7DvvIzop5LoibLlpLTpobbkuIrnmoTooYDmnaEgICBcbiAgICBOb3JtYWwgPSAxMDAwMCwgICAgICAgICAgICAgLy/nqpflj6MgXG4gICAgRml4ID0gMjAwMDAsICAgICAgICAgICAgICAgIC8v5Zu65a6aXG4gICAgTWFycXVlZSA9IDIwMTAwLCAgICAgICAgICAgIC8v6LeR6ams54GvXG4gICAgVGlwID0gMjAyMDAsICAgICAgICAgICAgICAgIC8v5o+Q56S6XG4gICAgTG9hZGluZyA9IDIwMzAwLCAgICAgICAgICAgIC8v5Zy65pmv5YiH5o2iXG4gICAgV2FpdGluZyA9IDIwNDAwLCAgICAgICAgICAgIC8v562J5b6F55WM6Z2iXG4gICAgTmV0RGxnID0gMjA1MDAsICAgICAgICAgICAgIC8v572R57uc5raI5oGv5by55qGG5bGCICAgICDns7vnu5/pu5jorqTmnIDlpKfkuI3og73otoXov4czNTY3NVxuICAgIEZyYW1lTWFzayA9IDIwNzAwLCAgICAgICAgICAvL+WkluahhumBrue9qVxufVxuXG5leHBvcnQgZW51bSBFbnVtVUlPcGVuVHdlZW4ge1xuICAgIE5vbmUgPSAnTm9uZScsXG4gICAgU2NhbGUgPSAnU2NhbGUnLFxuICAgIEZhZGVJbiA9ICdGYWRlSW4nLFxuICAgIFB1bGxVcCA9ICdQdWxsVXAnLFxufVxuXG5leHBvcnQgZW51bSBFbnVtVUlDbG9zZVR3ZWVuIHtcbiAgICBOb25lID0gJ05vbmUnLFxuICAgIFNjYWxlID0gJ1NjYWxlJyxcbiAgICBGYWRlT3V0ID0gJ0ZhZGVPdXQnLFxuICAgIFB1bGxEb3duID0gJ1B1bGxEb3duJyxcbn0iXX0=