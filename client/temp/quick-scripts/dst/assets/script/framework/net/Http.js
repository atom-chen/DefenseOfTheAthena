
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/net/Http.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXG5ldFxcSHR0cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQTZDO0FBTTdDO0lBQUE7SUFnR0EsQ0FBQztJQTlGdUIsUUFBRyxHQUF2QixVQUF3QixHQUFXO3VDQUFHLE9BQU87OztnQkFDekMsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDL0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQzt3QkFDL0IsR0FBRyxDQUFDLGtCQUFrQixHQUFHOzRCQUNyQixJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO2dDQUNyQixjQUFJLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDakYsUUFBUSxHQUFHLENBQUMsTUFBTSxFQUFFO29DQUNoQixLQUFLLEdBQUc7d0NBQ0o7NENBQ0ksSUFBSSxHQUFHLFNBQU0sQ0FBQzs0Q0FDZCxJQUFJO2dEQUNBLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs2Q0FDdEM7NENBQ0QsT0FBTyxDQUFDLEVBQUU7Z0RBQ04sTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7NkNBQ2pDOzRDQUNELGNBQUksQ0FBQyxLQUFLLENBQUMsY0FBTyxDQUFDLElBQUksRUFBRSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0Q0FDM0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lDQUNoQjt3Q0FDRCxNQUFNO29DQUNWO3dD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U0FDckM7UUFDRCxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUU7WUFDYixPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFO1lBQ2IsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQztTQUN2QztRQUNELE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVMLFdBQUM7QUFBRCxDQWhHQSxBQWdHQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsb2csIHsgQ2xvZ0tleSB9IGZyb20gXCIuLi9jbG9nL0Nsb2dcIjtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgR2V0KHVybDogc3RyaW5nKTogUHJvbWlzZTxKU09OPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIENsb2cuR3JlZW4oQ2xvZ0tleS5IdHRwLCBcImdldCBqc29uIGZyb20gXCIgKyB1cmwgKyBcIiBzdGF0dXMgY29kZSA6XCIgKyB4aHIuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtc2c6IEpTT047XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoeyBtZXNzYWdlOiAn6L+U5Zue5L+h5oGv6ZSZ6K+vJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9nLkdyZWVuKENsb2dLZXkuSHR0cCwgXCJbWEhSIEdFVF1cXHRcXG5bdXJsXTpcIiArIHVybCArIFwiXFx0XFxuW21zZ106XCIgKyBKU09OLnN0cmluZ2lmeShtc2cpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5nZXRFcm9yKHhoci5zdGF0dXMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgeGhyLnNlbmQobnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgUG9zdCh1cmw6IHN0cmluZywgZGF0YTogYW55KTogUHJvbWlzZTxKU09OPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoeGhyLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXNnOiBKU09OO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHsgbWVzc2FnZTogJ+i/lOWbnuS/oeaBr+mUmeivrycgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvZy5HcmVlbihDbG9nS2V5Lk5ldCwgXCJbWEhSIFBPU1RdXFx0XFxuW3VybF06XCIgKyB1cmwgKyBcIlxcdFxcblttc2ddOlwiICsgSlNPTi5zdHJpbmdpZnkobXNnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMuZ2V0RXJvcih4aHIuc3RhdHVzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignY29udGVudC10eXBlJywgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG5cbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBBcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEFyci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkYXRhVG9TZW5kID0gdGVtcEFyci5qb2luKCcmJyk7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZGF0YVRvU2VuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChudWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQ2xvZy5HcmVlbihDbG9nS2V5Lk5ldCwgXCJbWEhSIFBPU1RdXFx0XFxuW3VybF06XCIgKyB1cmwgKyBcIlxcdFxcbltwb3N0IGRhdGFdOlwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRFcm9yKGNvZGU6IG51bWJlcikge1xuICAgICAgICBpZiAoY29kZSA+PSA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICfmnI3liqHlmajov5Tlm57lvILluLjvvIzor7fph43or5UnIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPj0gNDAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAn6ZSZ6K+v55qE6K+35rGC77yM6K+36YeN6K+VJyB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlID49IDMwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ+eZu+W9leeKtuaAgeWPr+iDveW3sui/h+acn++8jOivt+mHjeivlScgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAn5pyN5Yqh5Zmo6L+U5Zue5pWw5o2u6ZSZ6K+v77yM6K+36YeN6K+VJyB9O1xuICAgIH1cblxufVxuIl19