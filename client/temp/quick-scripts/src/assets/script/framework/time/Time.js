"use strict";
cc._RF.push(module, '8953a6WuN9F3YItnGXF194I', 'Time');
// script/framework/time/Time.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Time = /** @class */ (function () {
    function Time() {
    }
    //将时间转成相应格式  by ming.lei 2018.06.06
    Time.Format = function (time, format) {
        if (format === void 0) { format = 'yyyy/MM/dd hh:mm:ss'; }
        var o = {
            "M+": time.getMonth() + 1,
            "d+": time.getDate(),
            "h+": time.getHours(),
            "m+": time.getMinutes(),
            "s+": time.getSeconds(),
            "q+": Math.floor((time.getMonth() + 3) / 3),
            "S": time.getMilliseconds() //millisecond 
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    };
    //时间戳转时间
    Time.TimestampToTime = function (timestamp) {
        return this.Format(new Date(timestamp));
    };
    return Time;
}());
exports.Time = Time;

cc._RF.pop();