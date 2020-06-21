
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/entry/view/UIEntry.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '930575s9rRA3I32O6Z5t4XG', 'UIEntry');
// script/entry/view/UIEntry.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIManager_1 = require("../../framework/ui/UIManager");
var EntryControler_1 = require("../controller/EntryControler");
var ccclass = cc._decorator.ccclass;
var UIEntry = /** @class */ (function (_super) {
    __extends(UIEntry, _super);
    function UIEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIEntry.prototype.onLoad = function () {
        window.CC_ENGINE_VERSION = cc.ENGINE_VERSION;
    };
    UIEntry.prototype.start = function () {
        cc.game.addPersistRootNode(this.node); //设为驻留节点
        this.InitUIManager();
        EntryControler_1.EntryControler.Init();
    };
    //初始化UIManger
    UIEntry.prototype.InitUIManager = function () {
        var uiRoot = cc.find("UIManager", this.node);
        UIManager_1.UIManager.Init(uiRoot);
    };
    UIEntry = __decorate([
        ccclass
    ], UIEntry);
    return UIEntry;
}(cc.Component));
exports.UIEntry = UIEntry;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbnRyeVxcdmlld1xcVUlFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwwREFBeUQ7QUFDekQsK0RBQThEO0FBS3RELElBQUEsK0JBQU8sQ0FBbUI7QUFFbEM7SUFBNkIsMkJBQVk7SUFBekM7O0lBdUJBLENBQUM7SUFuQkcsd0JBQU0sR0FBTjtRQUNLLE1BQWMsQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO0lBQzFELENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRSxRQUFRO1FBQ2hELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQiwrQkFBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhO0lBQ0wsK0JBQWEsR0FBckI7UUFDSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQWxCUSxPQUFPO1FBRG5CLE9BQU87T0FDSyxPQUFPLENBdUJuQjtJQUFELGNBQUM7Q0F2QkQsQUF1QkMsQ0F2QjRCLEVBQUUsQ0FBQyxTQUFTLEdBdUJ4QztBQXZCWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbG9nIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvY2xvZy9DbG9nXCI7XHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvYXVkaW8vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdWkvVUlNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEVudHJ5Q29udHJvbGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvRW50cnlDb250cm9sZXJcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFVJRW50cnkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHVibGljIEhpZGVUaW1lOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgU2hvd1RpbWU6IG51bWJlcjtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgKHdpbmRvdyBhcyBhbnkpLkNDX0VOR0lORV9WRVJTSU9OID0gY2MuRU5HSU5FX1ZFUlNJT047XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTsgIC8v6K6+5Li66am755WZ6IqC54K5XHJcbiAgICAgICAgdGhpcy5Jbml0VUlNYW5hZ2VyKCk7XHJcbiAgICAgICAgRW50cnlDb250cm9sZXIuSW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyWVUlNYW5nZXJcclxuICAgIHByaXZhdGUgSW5pdFVJTWFuYWdlcigpIHtcclxuICAgICAgICBsZXQgdWlSb290ID0gY2MuZmluZChcIlVJTWFuYWdlclwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgVUlNYW5hZ2VyLkluaXQodWlSb290KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgIFxyXG59XHJcblxyXG4iXX0=