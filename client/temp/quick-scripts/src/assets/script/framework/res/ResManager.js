"use strict";
cc._RF.push(module, '226a2sBh/9CYqQw/Ph9JPz5', 'ResManager');
// script/framework/res/ResManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtil_1 = require("../util/StringUtil");
var ResPath_1 = require("./ResPath");
var ResManager = /** @class */ (function () {
    function ResManager() {
    }
    ResManager.getUrlByName = function (name) {
        if (!ResPath_1.ResPath.hasOwnProperty(name)) {
            return name;
        }
        return ResPath_1.ResPath[name];
    };
    /**
     *
     * @param name 资源名称
     * @param type 资源类型
     * @param completeCallback 回调 > error错误resource > 返回的资源
     */
    ResManager.LoadRes = function (name, type, completeCallback) {
        var url = this.getUrlByName(name);
        if (StringUtil_1.IsNullOrEmpty(url)) {
            return;
        }
        cc.loader.loadRes(url, type, completeCallback);
    };
    /**
     * @param name 释放的资源名
     */
    ResManager.Release = function (name) {
        var url = this.getUrlByName(name);
        if (StringUtil_1.IsNullOrEmpty(url)) {
            return;
        }
        cc.loader.releaseRes(url);
    };
    return ResManager;
}());
exports.ResManager = ResManager;

cc._RF.pop();