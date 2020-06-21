
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/time/Time.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHRpbWVcXFRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO0lBZ0NBLENBQUM7SUE5QkcsbUNBQW1DO0lBQ3JCLFdBQU0sR0FBcEIsVUFBcUIsSUFBVSxFQUFFLE1BQThCO1FBQTlCLHVCQUFBLEVBQUEsOEJBQThCO1FBQzNELElBQUksQ0FBQyxHQUFHO1lBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFxQixjQUFjO1NBQ2pFLENBQUE7UUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUM5RjtRQUVELEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2IsSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDeEMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDL0c7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxRQUFRO0lBQ00sb0JBQWUsR0FBN0IsVUFBOEIsU0FBaUI7UUFDM0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUdMLFdBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLG9CQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZSB7XHJcblxyXG4gICAgLy/lsIbml7bpl7TovazmiJDnm7jlupTmoLzlvI8gIGJ5IG1pbmcubGVpIDIwMTguMDYuMDZcclxuICAgIHB1YmxpYyBzdGF0aWMgRm9ybWF0KHRpbWU6IERhdGUsIGZvcm1hdCA9ICd5eXl5L01NL2RkIGhoOm1tOnNzJykge1xyXG4gICAgICAgIHZhciBvID0ge1xyXG4gICAgICAgICAgICBcIk0rXCI6IHRpbWUuZ2V0TW9udGgoKSArIDEsICAgICAgICAgICAgICAgICAgICAgIC8vbW9udGggXHJcbiAgICAgICAgICAgIFwiZCtcIjogdGltZS5nZXREYXRlKCksICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXkgXHJcbiAgICAgICAgICAgIFwiaCtcIjogdGltZS5nZXRIb3VycygpLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ob3VyIFxyXG4gICAgICAgICAgICBcIm0rXCI6IHRpbWUuZ2V0TWludXRlcygpLCAgICAgICAgICAgICAgICAgICAgICAgIC8vbWludXRlIFxyXG4gICAgICAgICAgICBcInMrXCI6IHRpbWUuZ2V0U2Vjb25kcygpLCAgICAgICAgICAgICAgICAgICAgICAgIC8vc2Vjb25kIFxyXG4gICAgICAgICAgICBcInErXCI6IE1hdGguZmxvb3IoKHRpbWUuZ2V0TW9udGgoKSArIDMpIC8gMyksICAgIC8vcXVhcnRlciBcclxuICAgICAgICAgICAgXCJTXCI6IHRpbWUuZ2V0TWlsbGlzZWNvbmRzKCkgICAgICAgICAgICAgICAgICAgICAvL21pbGxpc2Vjb25kIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKC8oeSspL2kudGVzdChmb3JtYXQpKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKHRpbWUuZ2V0RnVsbFllYXIoKSArIFwiXCIpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgayBpbiBvKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKFwiKFwiICsgayArIFwiKVwiKS50ZXN0KGZvcm1hdCkpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKFJlZ0V4cC4kMSwgUmVnRXhwLiQxLmxlbmd0aCA9PSAxID8gb1trXSA6IChcIjAwXCIgKyBvW2tdKS5zdWJzdHIoKFwiXCIgKyBvW2tdKS5sZW5ndGgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm9ybWF0O1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pe26Ze05oiz6L2s5pe26Ze0XHJcbiAgICBwdWJsaWMgc3RhdGljIFRpbWVzdGFtcFRvVGltZSh0aW1lc3RhbXA6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkZvcm1hdChuZXcgRGF0ZSh0aW1lc3RhbXApKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59Il19