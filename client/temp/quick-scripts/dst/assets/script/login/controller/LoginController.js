
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login/controller/LoginController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcY29udHJvbGxlclxcTG9naW5Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBbUU7QUFDbkUsaURBQTRDO0FBQzVDLHVEQUFzRDtBQUN0RCxrREFBMEQ7QUFDMUQsOENBQTZDO0FBRzdDO0lBQUE7SUFzREEsQ0FBQztJQWpEdUIseUJBQVMsR0FBN0I7Ozs7Ozt3QkFDUSxRQUFRLEdBQUc7NEJBQ1gsS0FBSyxFQUFFLGtDQUFrQzt5QkFDNUMsQ0FBQTt3QkFDRCxjQUFJLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxLQUFLLEVBQUUsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDMUQscUJBQU0sY0FBSSxDQUFDLElBQUksQ0FBQyxtQkFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBQTs7d0JBQWxELElBQUksR0FBRyxTQUEyQzt3QkFDbEQsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTt3QkFDakMsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFOzRCQUNoQixhQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBOzRCQUNyQixzQkFBTzt5QkFDVjt3QkFDRCxjQUFJLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxLQUFLLEVBQUUsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUN2RSxtQkFBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLG1CQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7Ozs7O0tBQ2pEO0lBR21CLHlCQUFTLEdBQTdCLFVBQThCLE9BQWUsRUFBRSxRQUFnQjs7Ozs7O3dCQUN2RCxRQUFRLEdBQUc7NEJBQ1gsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLFFBQVEsRUFBRSxRQUFRO3lCQUNyQixDQUFBO3dCQUNELGNBQUksQ0FBQyxLQUFLLENBQUMsY0FBTyxDQUFDLEtBQUssRUFBRSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMxRCxxQkFBTSxjQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQTs7d0JBQXZELElBQUksR0FBRyxTQUFnRDt3QkFDdkQsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTt3QkFDakMsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFOzRCQUNoQixhQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBOzRCQUNyQixzQkFBTzt5QkFDVjt3QkFDRCxjQUFJLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxLQUFLLEVBQUUsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7OztLQUUxRTtJQUdtQiw2QkFBYSxHQUFqQyxVQUFrQyxPQUFlLEVBQUUsUUFBZ0I7Ozs7Ozt3QkFDM0QsUUFBUSxHQUFHOzRCQUNYLE9BQU8sRUFBRSxPQUFPOzRCQUNoQixRQUFRLEVBQUUsUUFBUTt5QkFDckIsQ0FBQTt3QkFDRCxjQUFJLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxLQUFLLEVBQUUsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDMUQscUJBQU0sY0FBSSxDQUFDLElBQUksQ0FBQyxtQkFBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQUE7O3dCQUExRCxJQUFJLEdBQUcsU0FBbUQ7d0JBQzFELFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7d0JBQ2pDLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTs0QkFDaEIsYUFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTs0QkFDckIsc0JBQU87eUJBQ1Y7d0JBQ0QsY0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFPLENBQUMsS0FBSyxFQUFFLG9CQUFvQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7S0FFMUU7SUFFTCxzQkFBQztBQUFELENBdERBLEFBc0RDLElBQUE7QUF0RFksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXNzaW9uRGF0YSwgQWRkcmVzcywgU2Vzc2lvbiB9IGZyb20gXCIuLi9tb2RlbC9Mb2dpbkRhdGFcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvbmV0L0h0dHBcIjtcbmltcG9ydCB7IEdhbWVJbmZvIH0gZnJvbSBcIi4uLy4uL2VudHJ5L21vZGVsL0dhbWVJbmZvXCI7XG5pbXBvcnQgQ2xvZywgeyBDbG9nS2V5IH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9jbG9nL0Nsb2dcIjtcbmltcG9ydCB7IFVJVGlwIH0gZnJvbSBcIi4uLy4uL2NvbW1vblVJL1VJVGlwXCI7XG5cblxuZXhwb3J0IGNsYXNzIExvZ2luQ29udHJvbGxlciB7XG5cblxuICAgIHByaXZhdGUgc3RhdGljIGxvZ2luRGF0YTogU2Vzc2lvbkRhdGFcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgSHR0cEhlbGxvKCkge1xuICAgICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgICAgICB3b3JsZDogXCIxNTFkZjRkMmRkYmRkMWFkNmE2NGMyYzE4YjI5NDgyOFwiLFxuICAgICAgICB9XG4gICAgICAgIENsb2cuR3JlZW4oQ2xvZ0tleS5Mb2dpbiwgXCJIdHRwSGVsbG8gPj5cIiArIEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSk7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgSHR0cC5Qb3N0KEdhbWVJbmZvLk1haW5VUkwsIHBvc3REYXRhKVxuICAgICAgICBsZXQgZXJyb3JDb2RlID0gZGF0YVtcIkVycm9yQ29kZVwiXVxuICAgICAgICBpZiAoZXJyb3JDb2RlICE9IDApIHtcbiAgICAgICAgICAgIFVJVGlwLkluZm8oZXJyb3JDb2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIENsb2cuR3JlZW4oQ2xvZ0tleS5Mb2dpbiwgXCJIdHRwSGVsbG8gPj4gZGF0YTpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgU2Vzc2lvbi5BZGRyZXNzID0gbmV3IEFkZHJlc3MoZGF0YVtcIkFkZHJlc3NcIl0pXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIEh0dHBMb2dpbihhY2NvdW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHBvc3REYXRhID0ge1xuICAgICAgICAgICAgYWNjb3VudDogYWNjb3VudCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9XG4gICAgICAgIENsb2cuR3JlZW4oQ2xvZ0tleS5Mb2dpbiwgXCJIdHRwTG9naW4gPj5cIiArIEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSk7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgSHR0cC5Qb3N0KFNlc3Npb24uQWRkcmVzcy5Mb2dpbiwgcG9zdERhdGEpXG4gICAgICAgIGxldCBlcnJvckNvZGUgPSBkYXRhW1wiRXJyb3JDb2RlXCJdXG4gICAgICAgIGlmIChlcnJvckNvZGUgIT0gMCkge1xuICAgICAgICAgICAgVUlUaXAuSW5mbyhlcnJvckNvZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQ2xvZy5HcmVlbihDbG9nS2V5LkxvZ2luLCBcIkh0dHBMb2dpbiA+PiBkYXRhOlwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIEh0dHBSZWdpc2h0ZXIoYWNjb3VudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBwb3N0RGF0YSA9IHtcbiAgICAgICAgICAgIGFjY291bnQ6IGFjY291bnQsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgICBDbG9nLkdyZWVuKENsb2dLZXkuTG9naW4sIFwiSHR0cExvZ2luID4+XCIgKyBKU09OLnN0cmluZ2lmeShwb3N0RGF0YSkpO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IEh0dHAuUG9zdChTZXNzaW9uLkFkZHJlc3MuUmVnaXN0ZXIsIHBvc3REYXRhKVxuICAgICAgICBsZXQgZXJyb3JDb2RlID0gZGF0YVtcIkVycm9yQ29kZVwiXVxuICAgICAgICBpZiAoZXJyb3JDb2RlICE9IDApIHtcbiAgICAgICAgICAgIFVJVGlwLkluZm8oZXJyb3JDb2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIENsb2cuR3JlZW4oQ2xvZ0tleS5Mb2dpbiwgXCJIdHRwTG9naW4gPj4gZGF0YTpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgIH1cblxufVxuXG4iXX0=