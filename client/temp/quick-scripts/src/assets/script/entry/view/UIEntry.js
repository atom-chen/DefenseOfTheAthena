"use strict";
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