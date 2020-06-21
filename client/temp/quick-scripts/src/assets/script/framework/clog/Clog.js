"use strict";
cc._RF.push(module, 'aec44K6D4FKPrIYOWDJoq14', 'Clog');
// script/framework/clog/Clog.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Time_1 = require("../time/Time");
var debug = CC_DEBUG;
var ClogKey = /** @class */ (function () {
    function ClogKey() {
    }
    ClogKey.Res = "Res";
    ClogKey.UI = "UI";
    ClogKey.LocalStorage = "LocalStorage";
    ClogKey.Net = "Net";
    ClogKey.Entry = "Entry";
    ClogKey.Api = "Api";
    ClogKey.Login = "Login";
    ClogKey.Http = "Http";
    return ClogKey;
}());
exports.ClogKey = ClogKey;
var Clog = /** @class */ (function () {
    function Clog() {
    }
    Clog.Init = function () {
        this.OpenTag(ClogKey.Res);
        this.OpenTag(ClogKey.UI);
        this.OpenTag(ClogKey.LocalStorage);
        this.OpenTag(ClogKey.Net);
        this.OpenTag(ClogKey.Entry);
        this.OpenTag(ClogKey.Api);
        this.OpenTag(ClogKey.Login);
        this.OpenTag(ClogKey.Http);
    };
    Clog.OpenTag = function (tag) {
        if (this.Tags.indexOf(tag) < 0) {
            this.Tags.push(tag);
        }
    };
    Clog.Obj = function (tag) {
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        if (!debug) {
            return;
        }
        //标记没有打开，不打印该日志
        if (this.Tags.indexOf(tag) < 0) {
            return;
        }
        msg.unshift('【' + Time_1.Time.Format(new Date()) + '】' + '【' + tag + '】');
        cc.log("%c tag", "color:#ff1493;", [].slice.call(msg));
    };
    //无颜色
    Clog.Trace = function (tag, msg) {
        this.print(tag, this.GetString(msg), "");
    };
    //红色
    Clog.Red = function (tag, msg) {
        this.print(tag, this.GetString(msg), "color:red;");
    };
    //绿色
    Clog.Green = function (tag, msg) {
        this.print(tag, this.GetString(msg), "color:green;");
    };
    //橙色
    Clog.Orange = function (tag, msg) {
        this.print(tag, this.GetString(msg), "color:#ee7700;");
    };
    //灰色
    Clog.Gray = function (tag, msg) {
        this.print(tag, this.GetString(msg), "color:gray;");
    };
    //蓝色
    Clog.Blue = function (tag, msg) {
        this.print(tag, this.GetString(msg), "color:#3a5fcd;");
    };
    //紫色
    Clog.Purple = function (tag, msg) {
        this.print(tag, this.GetString(msg), "color:#b23aee;");
    };
    //深粉色
    Clog.DeepPink = function (tag, msg) {
        this.print(tag, this.GetString(msg), "color:#ff1493;");
    };
    Clog.GetString = function (msg) {
        return (!Array.isArray(msg) && typeof msg === 'object') ? JSON.stringify(msg) : msg;
    };
    Clog.print = function (tag, msg, color) {
        if (!debug) {
            return;
        }
        //标记没有打开，不打印该日志
        if (this.Tags.indexOf(tag) < 0) {
            return;
        }
        var backLog = console.log || cc.log;
        backLog.call(this, "%c%s:" + cc.js.formatStr.apply(cc, [msg]), color, '【' + Time_1.Time.Format(new Date()) + '】' + '【' + tag + '】');
    };
    Clog.Warn = function (tag) {
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        msg.unshift('【' + Time_1.Time.Format(new Date()) + '】' + '【' + tag + '】');
        cc.warn.apply(null, [].slice.call(msg));
    };
    Clog.Error = function (msg) {
        cc.error('【' + Time_1.Time.Format(new Date()) + '】' + msg);
    };
    Clog.Tags = new Array();
    return Clog;
}());
exports.default = Clog;

cc._RF.pop();