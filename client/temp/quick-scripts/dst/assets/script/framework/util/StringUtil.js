
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/util/StringUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aeeb9w2CrNGVKIuYI7PTbWB', 'StringUtil');
// script/framework/util/StringUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//校验地址是否为http
exports.CheckNetUrl = function (httpUrl) {
    var isHttp = /^http[s]*:\/\//;
    return isHttp.test(httpUrl);
};
//判断字符是否为空
exports.IsNullOrEmpty = function (str) {
    return str == null || str === "";
};
//打印map
exports.MapToString = function (map) {
    return JSON.stringify(Array.from(map.entries()).reduce(function (o, _a) {
        var key = _a[0], value = _a[1];
        o[key] = value;
        return o;
    }, {}));
};
//限制为n个字符，超过的显示...
exports.StringLimit = function (str, n) {
    var strLength = 0;
    var cutIndex = 0;
    for (var i = 0; i < str.length; i++) {
        if (strLength >= n && cutIndex == 0) {
            cutIndex = i;
        }
        if (escape(str[i]).indexOf("%u") < 0) //不是中文
         {
            strLength += 1;
        }
        else //中文
         {
            strLength += 2;
        }
    }
    //如果字符长度小于截取长度，直接返回
    if (strLength <= n) {
        return str;
    }
    var finalStr = str.slice(0, cutIndex) + '...';
    return finalStr;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHV0aWxcXFN0cmluZ1V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxhQUFhO0FBQ0YsUUFBQSxXQUFXLEdBQUcsVUFBQyxPQUFlO0lBQ3JDLElBQUksTUFBTSxHQUFHLGdCQUFnQixDQUFDO0lBQzlCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUMvQixDQUFDLENBQUE7QUFFRCxVQUFVO0FBQ0MsUUFBQSxhQUFhLEdBQUcsVUFBQyxHQUFXO0lBQ25DLE9BQU8sR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFBO0FBQ3BDLENBQUMsQ0FBQTtBQUVELE9BQU87QUFDSSxRQUFBLFdBQVcsR0FBRyxVQUFDLEdBQWtCO0lBQ3hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxFQUFZO1lBQVgsV0FBRyxFQUFFLGFBQUs7UUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQUMsT0FBTyxDQUFDLENBQUM7SUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUNuSCxDQUFDLENBQUE7QUFFRCxrQkFBa0I7QUFDUCxRQUFBLFdBQVcsR0FBRyxVQUFDLEdBQVcsRUFBRSxDQUFTO0lBQzVDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDakMsUUFBUSxHQUFHLENBQUMsQ0FBQztTQUNoQjtRQUNELElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTTtTQUM1QztZQUNJLFNBQVMsSUFBSSxDQUFDLENBQUM7U0FDbEI7YUFDSSxJQUFJO1NBQ1Q7WUFDSSxTQUFTLElBQUksQ0FBQyxDQUFDO1NBQ2xCO0tBQ0o7SUFFRCxtQkFBbUI7SUFDbkIsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFO1FBQ2hCLE9BQU8sR0FBRyxDQUFBO0tBQ2I7SUFFRCxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDOUMsT0FBTyxRQUFRLENBQUE7QUFDbkIsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8v5qCh6aqM5Zyw5Z2A5piv5ZCm5Li6aHR0cFxyXG5leHBvcnQgbGV0IENoZWNrTmV0VXJsID0gKGh0dHBVcmw6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgbGV0IGlzSHR0cCA9IC9eaHR0cFtzXSo6XFwvXFwvLztcclxuICAgIHJldHVybiBpc0h0dHAudGVzdChodHRwVXJsKVxyXG59XHJcblxyXG4vL+WIpOaWreWtl+espuaYr+WQpuS4uuepulxyXG5leHBvcnQgbGV0IElzTnVsbE9yRW1wdHkgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiBzdHIgPT0gbnVsbCB8fCBzdHIgPT09IFwiXCJcclxufVxyXG5cclxuLy/miZPljbBtYXBcclxuZXhwb3J0IGxldCBNYXBUb1N0cmluZyA9IChtYXA6IE1hcDxhbnksIGFueT4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20obWFwLmVudHJpZXMoKSkucmVkdWNlKChvLCBba2V5LCB2YWx1ZV0pID0+IHsgb1trZXldID0gdmFsdWU7IHJldHVybiBvOyB9LCB7fSkpXHJcbn1cclxuXHJcbi8v6ZmQ5Yi25Li6buS4quWtl+espu+8jOi2hei/h+eahOaYvuekui4uLlxyXG5leHBvcnQgbGV0IFN0cmluZ0xpbWl0ID0gKHN0cjogc3RyaW5nLCBuOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgdmFyIHN0ckxlbmd0aCA9IDA7XHJcbiAgICB2YXIgY3V0SW5kZXggPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoc3RyTGVuZ3RoID49IG4gJiYgY3V0SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBjdXRJbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlc2NhcGUoc3RyW2ldKS5pbmRleE9mKFwiJXVcIikgPCAwKSAvL+S4jeaYr+S4reaWh1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyTGVuZ3RoICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgLy/kuK3mlodcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0ckxlbmd0aCArPSAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WmguaenOWtl+espumVv+W6puWwj+S6juaIquWPlumVv+W6pu+8jOebtOaOpei/lOWbnlxyXG4gICAgaWYgKHN0ckxlbmd0aCA8PSBuKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG5cclxuICAgIHZhciBmaW5hbFN0ciA9IHN0ci5zbGljZSgwLCBjdXRJbmRleCkgKyAnLi4uJztcclxuICAgIHJldHVybiBmaW5hbFN0clxyXG59Il19