"use strict";
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