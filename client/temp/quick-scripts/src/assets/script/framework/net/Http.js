"use strict";
cc._RF.push(module, '1d792aKiZJJi4WTYqLDzn2O', 'Http');
// script/framework/net/Http.ts

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
var Clog_1 = require("../clog/Clog");
var Http = /** @class */ (function () {
    function Http() {
    }
    Http.Get = function (url) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                Clog_1.default.Green(Clog_1.ClogKey.Http, "get json from " + url + " status code :" + xhr.status);
                                switch (xhr.status) {
                                    case 200:
                                        {
                                            var msg = void 0;
                                            try {
                                                msg = JSON.parse(xhr.responseText);
                                            }
                                            catch (e) {
                                                reject({ message: '返回信息错误' });
                                            }
                                            Clog_1.default.Green(Clog_1.ClogKey.Http, "[XHR GET]\t\n[url]:" + url + "\t\n[msg]:" + JSON.stringify(msg));
                                            resolve(msg);
                                        }
                                        break;
                                    default:
                                        {
                                            reject(_this.getEror(xhr.status));
                                        }
                                        break;
                                }
                            }
                        };
                        xhr.open("GET", url, true);
                        xhr.send(null);
                    })];
            });
        });
    };
    Http.Post = function (url, data) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                switch (xhr.status) {
                                    case 200:
                                        {
                                            var msg = void 0;
                                            try {
                                                msg = JSON.parse(xhr.responseText);
                                            }
                                            catch (e) {
                                                reject({ message: '返回信息错误' });
                                            }
                                            Clog_1.default.Green(Clog_1.ClogKey.Net, "[XHR POST]\t\n[url]:" + url + "\t\n[msg]:" + JSON.stringify(msg));
                                            resolve(msg);
                                        }
                                        break;
                                    default:
                                        {
                                            reject(_this.getEror(xhr.status));
                                        }
                                        break;
                                }
                            }
                        };
                        xhr.open("POST", url, true);
                        xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");
                        if (data) {
                            var tempArr = [];
                            for (var key in data) {
                                if (data.hasOwnProperty(key) && data[key]) {
                                    tempArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
                                }
                            }
                            var dataToSend = tempArr.join('&');
                            xhr.send(dataToSend);
                        }
                        else {
                            xhr.send(null);
                        }
                        Clog_1.default.Green(Clog_1.ClogKey.Net, "[XHR POST]\t\n[url]:" + url + "\t\n[post data]:" + JSON.stringify(data));
                    })];
            });
        });
    };
    Http.getEror = function (code) {
        if (code >= 500) {
            return { message: '服务器返回异常，请重试' };
        }
        if (code >= 400) {
            return { message: '错误的请求，请重试' };
        }
        if (code >= 300) {
            return { message: '登录状态可能已过期，请重试' };
        }
        return { message: '服务器返回数据错误，请重试' };
    };
    return Http;
}());
exports.default = Http;

cc._RF.pop();