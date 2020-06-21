"use strict";
cc._RF.push(module, '720faM772lNH6zAly4txqkQ', 'LoginController');
// script/login/controller/LoginController.ts

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
var LoginData_1 = require("../model/LoginData");
var Http_1 = require("../../framework/net/Http");
var GameInfo_1 = require("../../entry/model/GameInfo");
var Clog_1 = require("../../framework/clog/Clog");
var UITip_1 = require("../../commonUI/UITip");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.HttpHello = function () {
        return __awaiter(this, void 0, void 0, function () {
            var postData, data, errorCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postData = {
                            world: "151df4d2ddbdd1ad6a64c2c18b294828",
                        };
                        Clog_1.default.Green(Clog_1.ClogKey.Login, "HttpHello >>" + JSON.stringify(postData));
                        return [4 /*yield*/, Http_1.default.Post(GameInfo_1.GameInfo.MainURL, postData)];
                    case 1:
                        data = _a.sent();
                        errorCode = data["ErrorCode"];
                        if (errorCode != 0) {
                            UITip_1.UITip.Info(errorCode);
                            return [2 /*return*/];
                        }
                        Clog_1.default.Green(Clog_1.ClogKey.Login, "HttpHello >> data:" + JSON.stringify(data));
                        LoginData_1.Session.Address = new LoginData_1.Address(data["Address"]);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginController.HttpLogin = function (account, password) {
        return __awaiter(this, void 0, void 0, function () {
            var postData, data, errorCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postData = {
                            account: account,
                            password: password
                        };
                        Clog_1.default.Green(Clog_1.ClogKey.Login, "HttpLogin >>" + JSON.stringify(postData));
                        return [4 /*yield*/, Http_1.default.Post(LoginData_1.Session.Address.Login, postData)];
                    case 1:
                        data = _a.sent();
                        errorCode = data["ErrorCode"];
                        if (errorCode != 0) {
                            UITip_1.UITip.Info(errorCode);
                            return [2 /*return*/];
                        }
                        Clog_1.default.Green(Clog_1.ClogKey.Login, "HttpLogin >> data:" + JSON.stringify(data));
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginController.HttpRegishter = function (account, password) {
        return __awaiter(this, void 0, void 0, function () {
            var postData, data, errorCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postData = {
                            account: account,
                            password: password
                        };
                        Clog_1.default.Green(Clog_1.ClogKey.Login, "HttpLogin >>" + JSON.stringify(postData));
                        return [4 /*yield*/, Http_1.default.Post(LoginData_1.Session.Address.Register, postData)];
                    case 1:
                        data = _a.sent();
                        errorCode = data["ErrorCode"];
                        if (errorCode != 0) {
                            UITip_1.UITip.Info(errorCode);
                            return [2 /*return*/];
                        }
                        Clog_1.default.Green(Clog_1.ClogKey.Login, "HttpLogin >> data:" + JSON.stringify(data));
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoginController;
}());
exports.LoginController = LoginController;

cc._RF.pop();