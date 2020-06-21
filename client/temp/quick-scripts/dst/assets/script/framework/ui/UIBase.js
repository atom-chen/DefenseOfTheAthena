
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/ui/UIBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2189dctMNhMBY8M+HKo10Vr', 'UIBase');
// script/framework/ui/UIBase.ts

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
var UIEnum_1 = require("./UIEnum");
var UIBase = /** @class */ (function (_super) {
    __extends(UIBase, _super);
    function UIBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HierarchyType = UIEnum_1.EnumUIHierarchy.Normal;
        _this.OpenTween = UIEnum_1.EnumUIOpenTween.None;
        _this.CloseTween = UIEnum_1.EnumUICloseTween.None;
        return _this;
    }
    UIBase.prototype.onLoad = function () {
        this.Mask = cc.find('UIMask', this.node);
    };
    return UIBase;
}(cc.Component));
exports.UIBase = UIBase;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHVpXFxVSUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThFO0FBSzlFO0lBQXFDLDBCQUFZO0lBQWpEO1FBQUEscUVBVUM7UUFSVSxtQkFBYSxHQUFHLHdCQUFlLENBQUMsTUFBTSxDQUFBO1FBQ3RDLGVBQVMsR0FBRyx3QkFBZSxDQUFDLElBQUksQ0FBQztRQUNqQyxnQkFBVSxHQUFHLHlCQUFnQixDQUFDLElBQUksQ0FBQzs7SUFNOUMsQ0FBQztJQUhHLHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0wsYUFBQztBQUFELENBVkEsQUFVQyxDQVZvQyxFQUFFLENBQUMsU0FBUyxHQVVoRDtBQVZxQix3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1VSUhpZXJhcmNoeSwgRW51bVVJT3BlblR3ZWVuLCBFbnVtVUlDbG9zZVR3ZWVuIH0gZnJvbSBcIi4vVUlFbnVtXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVUlCYXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBQcmVmYWJOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgSGllcmFyY2h5VHlwZSA9IEVudW1VSUhpZXJhcmNoeS5Ob3JtYWxcclxuICAgIHB1YmxpYyBPcGVuVHdlZW4gPSBFbnVtVUlPcGVuVHdlZW4uTm9uZTtcclxuICAgIHB1YmxpYyBDbG9zZVR3ZWVuID0gRW51bVVJQ2xvc2VUd2Vlbi5Ob25lO1xyXG4gICAgcHVibGljIE1hc2s6IGNjLk5vZGVcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5NYXNrID0gY2MuZmluZCgnVUlNYXNrJywgdGhpcy5ub2RlKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19