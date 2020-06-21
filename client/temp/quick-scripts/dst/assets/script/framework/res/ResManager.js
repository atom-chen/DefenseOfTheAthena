
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/res/ResManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHJlc1xcUmVzTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFtRDtBQUNuRCxxQ0FBb0M7QUFLcEM7SUFBQTtJQWlDQSxDQUFDO0lBL0JrQix1QkFBWSxHQUEzQixVQUE0QixJQUFZO1FBQ3BDLElBQUksQ0FBQyxpQkFBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxpQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNXLGtCQUFPLEdBQXJCLFVBQXNCLElBQVksRUFBRSxJQUFxQixFQUFFLGdCQUF1RDtRQUM5RyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pDLElBQUksMEJBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFNO1NBQ1Q7UUFDRCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVEOztPQUVHO0lBQ1csa0JBQU8sR0FBckIsVUFBc0IsSUFBWTtRQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pDLElBQUksMEJBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFNO1NBQ1Q7UUFDRCxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNOdWxsT3JFbXB0eSB9IGZyb20gXCIuLi91dGlsL1N0cmluZ1V0aWxcIjtcbmltcG9ydCB7IFJlc1BhdGggfSBmcm9tIFwiLi9SZXNQYXRoXCI7XG5cblxuXG5cbmV4cG9ydCBjbGFzcyBSZXNNYW5hZ2VyIHtcblxuICAgIHByaXZhdGUgc3RhdGljIGdldFVybEJ5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFSZXNQYXRoLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVzUGF0aFtuYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbmFtZSDotYTmupDlkI3np7BcbiAgICAgKiBAcGFyYW0gdHlwZSDotYTmupDnsbvlnosgXG4gICAgICogQHBhcmFtIGNvbXBsZXRlQ2FsbGJhY2sg5Zue6LCDID4gZXJyb3LplJnor69yZXNvdXJjZSA+IOi/lOWbnueahOi1hOa6kFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTG9hZFJlcyhuYW1lOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCwgY29tcGxldGVDYWxsYmFjazogKGVycm9yOiBFcnJvciwgcmVzb3VyY2U6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmxCeU5hbWUobmFtZSlcbiAgICAgICAgaWYgKElzTnVsbE9yRW1wdHkodXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCB0eXBlLCBjb21wbGV0ZUNhbGxiYWNrKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBuYW1lIOmHiuaUvueahOi1hOa6kOWQjVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUmVsZWFzZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsQnlOYW1lKG5hbWUpXG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KHVybCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNjLmxvYWRlci5yZWxlYXNlUmVzKHVybClcbiAgICB9XG59XG5cblxuXG4iXX0=