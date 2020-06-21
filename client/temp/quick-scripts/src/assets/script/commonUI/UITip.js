"use strict";
cc._RF.push(module, 'a14dahZdVpPgYgm16gHs3WA', 'UITip');
// script/commonUI/UITip.ts

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
var UIBase_1 = require("../framework/ui/UIBase");
var UIManager_1 = require("../framework/ui/UIManager");
var UIEnum_1 = require("../framework/ui/UIEnum");
var UITip = /** @class */ (function (_super) {
    __extends(UITip, _super);
    function UITip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PrefabName = "P_UITip";
        _this.HierarchyType = UIEnum_1.EnumUIHierarchy.Tip;
        return _this;
    }
    /**
     * 提供打开该界面的API静态方法,方便直接调用
     * @param content 文字内容
     * @param duration 秒
     */
    UITip.Info = function (content, duration) {
        if (content === void 0) { content = ''; }
        if (duration === void 0) { duration = UITip.DURATION_SHORT; }
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UIManager_1.UIManager.OpenUI(UITip)];
                    case 1:
                        toast = _a.sent();
                        toast.OnOpen(content, duration);
                        return [2 /*return*/];
                }
            });
        });
    };
    UITip.prototype.start = function () {
        this._content = cc.find("bg/Label", this.node).getComponent(cc.Label);
    };
    UITip.prototype.OnOpen = function (content, duration) {
        this._content.string = content;
        this.scheduleOnce(function () { UIManager_1.UIManager.CloseUI(UITip); }, duration);
    };
    UITip.DURATION_SHORT = 2.5; //s
    UITip.DURATION_LONG = 5;
    return UITip;
}(UIBase_1.UIBase));
exports.UITip = UITip;

cc._RF.pop();