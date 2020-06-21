"use strict";
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