
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/entry/controller/EntryControler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'afa17tlvplFwYylZJFiq+Xu', 'EntryControler');
// script/entry/controller/EntryControler.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Clog_1 = require("../../framework/clog/Clog");
var UIManager_1 = require("../../framework/ui/UIManager");
var UILogin_1 = require("../../login/view/UILogin");
var AudioManager_1 = require("../../framework/audio/AudioManager");
var LoginController_1 = require("../../login/controller/LoginController");
var EntryControler = /** @class */ (function () {
    function EntryControler() {
    }
    EntryControler.Init = function () {
        cc.game.setFrameRate(30); //初始化帧率
        cc.debug.setDisplayStats(false); //浏览器左下角是否显示FPS
        this.InitGameEvent(); //初始化切入切出事件
        AudioManager_1.AudioManager.Init();
        Clog_1.default.Init(); //初始化日志工具
        this.onLogin();
    };
    EntryControler.onLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, LoginController_1.LoginController.HttpHello()];
                    case 1:
                        _a.sent();
                        UIManager_1.UIManager.OpenUI(UILogin_1.UILogin);
                        return [2 /*return*/];
                }
            });
        });
    };
    EntryControler.InitGameEvent = function () {
        var _this = this;
        cc.game.on(cc.game.EVENT_HIDE, function () { _this.OnGameHide(); });
        cc.game.on(cc.game.EVENT_SHOW, function () { _this.GameShow(); });
    };
    //从游戏返回后台
    EntryControler.OnGameHide = function () {
    };
    //从后台返回游戏
    EntryControler.GameShow = function () {
    };
    return EntryControler;
}());
exports.EntryControler = EntryControler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbnRyeVxcY29udHJvbGxlclxcRW50cnlDb250cm9sZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE2QztBQUM3QywwREFBeUQ7QUFDekQsb0RBQW1EO0FBQ25ELG1FQUFrRTtBQUNsRSwwRUFBeUU7QUFJekU7SUFBQTtJQStCQSxDQUFDO0lBN0JpQixtQkFBSSxHQUFsQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQWdCLE9BQU87UUFDL0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBUSxlQUFlO1FBQ3ZELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFtQixXQUFXO1FBQ25ELDJCQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsY0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQTRCLFNBQVM7UUFDakQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFHb0Isc0JBQU8sR0FBNUI7Ozs7NEJBQ0kscUJBQU0saUNBQWUsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQWpDLFNBQWlDLENBQUM7d0JBQ2xDLHFCQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFPLENBQUMsQ0FBQTs7Ozs7S0FDNUI7SUFFYyw0QkFBYSxHQUE1QjtRQUFBLGlCQUdDO1FBRkcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBUSxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxjQUFRLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxTQUFTO0lBQ00seUJBQVUsR0FBekI7SUFFQSxDQUFDO0lBRUQsU0FBUztJQUNNLHVCQUFRLEdBQXZCO0lBRUEsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbG9nIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvY2xvZy9DbG9nXCI7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL1VJTWFuYWdlclwiO1xuaW1wb3J0IHsgVUlMb2dpbiB9IGZyb20gXCIuLi8uLi9sb2dpbi92aWV3L1VJTG9naW5cIjtcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvYXVkaW8vQXVkaW9NYW5hZ2VyXCI7XG5pbXBvcnQgeyBMb2dpbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vbG9naW4vY29udHJvbGxlci9Mb2dpbkNvbnRyb2xsZXJcIjtcblxuXG5cbmV4cG9ydCBjbGFzcyBFbnRyeUNvbnRyb2xlciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIEluaXQoKSB7XG4gICAgICAgIGNjLmdhbWUuc2V0RnJhbWVSYXRlKDMwKSAgICAgICAgICAgICAgICAvL+WIneWni+WMluW4p+eOh1xuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpOyAgICAgICAgLy/mtY/op4jlmajlt6bkuIvop5LmmK/lkKbmmL7npLpGUFNcbiAgICAgICAgdGhpcy5Jbml0R2FtZUV2ZW50KCk7ICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL5YyW5YiH5YWl5YiH5Ye65LqL5Lu2XG4gICAgICAgIEF1ZGlvTWFuYWdlci5Jbml0KCk7XG4gICAgICAgIENsb2cuSW5pdCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+WMluaXpeW/l+W3peWFt1xuICAgICAgICB0aGlzLm9uTG9naW4oKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIG9uTG9naW4oKSB7XG4gICAgICAgIGF3YWl0IExvZ2luQ29udHJvbGxlci5IdHRwSGVsbG8oKTtcbiAgICAgICAgVUlNYW5hZ2VyLk9wZW5VSShVSUxvZ2luKVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIEluaXRHYW1lRXZlbnQoKSB7XG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCAoKSA9PiB7IHRoaXMuT25HYW1lSGlkZSgpOyB9KTtcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csICgpID0+IHsgdGhpcy5HYW1lU2hvdygpOyB9KTtcbiAgICB9XG5cbiAgICAvL+S7jua4uOaIj+i/lOWbnuWQjuWPsFxuICAgIHByaXZhdGUgc3RhdGljIE9uR2FtZUhpZGUoKSB7XG5cbiAgICB9XG5cbiAgICAvL+S7juWQjuWPsOi/lOWbnua4uOaIj1xuICAgIHByaXZhdGUgc3RhdGljIEdhbWVTaG93KCkge1xuXG4gICAgfVxufSJdfQ==