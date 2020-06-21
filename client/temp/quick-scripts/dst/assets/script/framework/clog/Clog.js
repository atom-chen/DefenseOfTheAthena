
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/clog/Clog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXGNsb2dcXENsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBb0M7QUFFcEMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDO0FBRXJCO0lBQUE7SUFTQSxDQUFDO0lBUmlCLFdBQUcsR0FBRyxLQUFLLENBQUE7SUFDWCxVQUFFLEdBQUcsSUFBSSxDQUFBO0lBQ1Qsb0JBQVksR0FBRyxjQUFjLENBQUE7SUFDN0IsV0FBRyxHQUFHLEtBQUssQ0FBQTtJQUNYLGFBQUssR0FBRyxPQUFPLENBQUE7SUFDZixXQUFHLEdBQUcsS0FBSyxDQUFBO0lBQ1gsYUFBSyxHQUFHLE9BQU8sQ0FBQTtJQUNmLFlBQUksR0FBRyxNQUFNLENBQUE7SUFDL0IsY0FBQztDQVRELEFBU0MsSUFBQTtBQVRZLDBCQUFPO0FBWXBCO0lBQUE7SUFvR0EsQ0FBQztJQWhHaUIsU0FBSSxHQUFsQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFYSxZQUFPLEdBQXJCLFVBQXNCLEdBQUc7UUFD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QUMsQ0FBQztJQUM1QyxDQUFDO0lBRWEsVUFBSyxHQUFuQixVQUFvQixHQUFRO1FBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBakdhLFNBQUksR0FBa0IsSUFBSSxLQUFLLEVBQVUsQ0FBQztJQW1HNUQsV0FBQztDQXBHRCxBQW9HQyxJQUFBO2tCQXBHb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWUgfSBmcm9tIFwiLi4vdGltZS9UaW1lXCI7XG5cbmxldCBkZWJ1ZyA9IENDX0RFQlVHO1xuXG5leHBvcnQgY2xhc3MgQ2xvZ0tleSB7XG4gICAgcHVibGljIHN0YXRpYyBSZXMgPSBcIlJlc1wiXG4gICAgcHVibGljIHN0YXRpYyBVSSA9IFwiVUlcIlxuICAgIHB1YmxpYyBzdGF0aWMgTG9jYWxTdG9yYWdlID0gXCJMb2NhbFN0b3JhZ2VcIlxuICAgIHB1YmxpYyBzdGF0aWMgTmV0ID0gXCJOZXRcIlxuICAgIHB1YmxpYyBzdGF0aWMgRW50cnkgPSBcIkVudHJ5XCJcbiAgICBwdWJsaWMgc3RhdGljIEFwaSA9IFwiQXBpXCJcbiAgICBwdWJsaWMgc3RhdGljIExvZ2luID0gXCJMb2dpblwiXG4gICAgcHVibGljIHN0YXRpYyBIdHRwID0gXCJIdHRwXCJcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9nIHtcbiAgICBwdWJsaWMgc3RhdGljIFRhZ3M6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG5cbiAgICBwdWJsaWMgc3RhdGljIEluaXQoKSB7XG4gICAgICAgIHRoaXMuT3BlblRhZyhDbG9nS2V5LlJlcylcbiAgICAgICAgdGhpcy5PcGVuVGFnKENsb2dLZXkuVUkpXG4gICAgICAgIHRoaXMuT3BlblRhZyhDbG9nS2V5LkxvY2FsU3RvcmFnZSlcbiAgICAgICAgdGhpcy5PcGVuVGFnKENsb2dLZXkuTmV0KVxuICAgICAgICB0aGlzLk9wZW5UYWcoQ2xvZ0tleS5FbnRyeSlcbiAgICAgICAgdGhpcy5PcGVuVGFnKENsb2dLZXkuQXBpKVxuICAgICAgICB0aGlzLk9wZW5UYWcoQ2xvZ0tleS5Mb2dpbilcbiAgICAgICAgdGhpcy5PcGVuVGFnKENsb2dLZXkuSHR0cClcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIE9wZW5UYWcodGFnKSB7XG4gICAgICAgIGlmICh0aGlzLlRhZ3MuaW5kZXhPZih0YWcpIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5UYWdzLnB1c2godGFnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBPYmoodGFnPzogc3RyaW5nLCAuLi5tc2c6IGFueVtdKSB7XG4gICAgICAgIGlmICghZGVidWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5qCH6K6w5rKh5pyJ5omT5byA77yM5LiN5omT5Y2w6K+l5pel5b+XXG4gICAgICAgIGlmICh0aGlzLlRhZ3MuaW5kZXhPZih0YWcpIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1zZy51bnNoaWZ0KCfjgJAnICsgVGltZS5Gb3JtYXQobmV3IERhdGUoKSkgKyAn44CRJyArICfjgJAnICsgdGFnICsgJ+OAkScpO1xuICAgICAgICBjYy5sb2coXCIlYyB0YWdcIiwgXCJjb2xvcjojZmYxNDkzO1wiLCBbXS5zbGljZS5jYWxsKG1zZykpO1xuICAgIH1cblxuICAgIC8v5peg6aKc6ImyXG4gICAgcHVibGljIHN0YXRpYyBUcmFjZSh0YWc6IHN0cmluZywgbXNnOiBhbnkpIHtcbiAgICAgICAgdGhpcy5wcmludCh0YWcsIHRoaXMuR2V0U3RyaW5nKG1zZyksIFwiXCIpXG4gICAgfVxuXG4gICAgLy/nuqLoibJcbiAgICBwdWJsaWMgc3RhdGljIFJlZCh0YWc6IHN0cmluZywgbXNnOiBhbnkpIHtcbiAgICAgICAgdGhpcy5wcmludCh0YWcsIHRoaXMuR2V0U3RyaW5nKG1zZyksIFwiY29sb3I6cmVkO1wiKVxuICAgIH1cblxuICAgIC8v57u/6ImyXG4gICAgcHVibGljIHN0YXRpYyBHcmVlbih0YWc6IHN0cmluZywgbXNnKSB7XG4gICAgICAgIHRoaXMucHJpbnQodGFnLCB0aGlzLkdldFN0cmluZyhtc2cpLCBcImNvbG9yOmdyZWVuO1wiKVxuICAgIH1cblxuICAgIC8v5qmZ6ImyXG4gICAgcHVibGljIHN0YXRpYyBPcmFuZ2UodGFnOiBzdHJpbmcsIG1zZykge1xuICAgICAgICB0aGlzLnByaW50KHRhZywgdGhpcy5HZXRTdHJpbmcobXNnKSwgXCJjb2xvcjojZWU3NzAwO1wiKVxuICAgIH1cblxuICAgIC8v54Gw6ImyXG4gICAgcHVibGljIHN0YXRpYyBHcmF5KHRhZzogc3RyaW5nLCBtc2cpIHtcbiAgICAgICAgdGhpcy5wcmludCh0YWcsIHRoaXMuR2V0U3RyaW5nKG1zZyksIFwiY29sb3I6Z3JheTtcIilcbiAgICB9XG5cbiAgICAvL+iTneiJslxuICAgIHB1YmxpYyBzdGF0aWMgQmx1ZSh0YWc6IHN0cmluZywgbXNnKSB7XG4gICAgICAgIHRoaXMucHJpbnQodGFnLCB0aGlzLkdldFN0cmluZyhtc2cpLCBcImNvbG9yOiMzYTVmY2Q7XCIpXG4gICAgfVxuXG4gICAgLy/ntKvoibJcbiAgICBwdWJsaWMgc3RhdGljIFB1cnBsZSh0YWc6IHN0cmluZywgbXNnKSB7XG4gICAgICAgIHRoaXMucHJpbnQodGFnLCB0aGlzLkdldFN0cmluZyhtc2cpLCBcImNvbG9yOiNiMjNhZWU7XCIpXG4gICAgfVxuXG4gICAgLy/mt7HnsonoibJcbiAgICBwdWJsaWMgc3RhdGljIERlZXBQaW5rKHRhZywgbXNnKSB7XG4gICAgICAgIHRoaXMucHJpbnQodGFnLCB0aGlzLkdldFN0cmluZyhtc2cpLCBcImNvbG9yOiNmZjE0OTM7XCIpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0U3RyaW5nKG1zZykge1xuICAgICAgICByZXR1cm4gKCFBcnJheS5pc0FycmF5KG1zZykgJiYgdHlwZW9mIG1zZyA9PT0gJ29iamVjdCcpID8gSlNPTi5zdHJpbmdpZnkobXNnKSA6IG1zZztcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBwcmludCh0YWcsIG1zZywgY29sb3IpIHtcbiAgICAgICAgaWYgKCFkZWJ1Zykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/moIforrDmsqHmnInmiZPlvIDvvIzkuI3miZPljbDor6Xml6Xlv5dcbiAgICAgICAgaWYgKHRoaXMuVGFncy5pbmRleE9mKHRhZykgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJhY2tMb2cgPSBjb25zb2xlLmxvZyB8fCBjYy5sb2c7XG4gICAgICAgIGJhY2tMb2cuY2FsbCh0aGlzLCBcIiVjJXM6XCIgKyBjYy5qcy5mb3JtYXRTdHIuYXBwbHkoY2MsIFttc2ddKSwgY29sb3IsICfjgJAnICsgVGltZS5Gb3JtYXQobmV3IERhdGUoKSkgKyAn44CRJyArICfjgJAnICsgdGFnICsgJ+OAkScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgV2Fybih0YWc/OiBzdHJpbmcsIC4uLm1zZzogYW55W10pIHtcbiAgICAgICAgbXNnLnVuc2hpZnQoJ+OAkCcgKyBUaW1lLkZvcm1hdChuZXcgRGF0ZSgpKSArICfjgJEnICsgJ+OAkCcgKyB0YWcgKyAn44CRJyk7XG4gICAgICAgIGNjLndhcm4uYXBwbHkobnVsbCwgW10uc2xpY2UuY2FsbChtc2cpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEVycm9yKG1zZzogYW55KSB7XG4gICAgICAgIGNjLmVycm9yKCfjgJAnICsgVGltZS5Gb3JtYXQobmV3IERhdGUoKSkgKyAn44CRJyArIG1zZyk7XG4gICAgfVxuXG59Il19