
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/util/ArrayUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d5c2RY7x5PBINfgAVlQgFU', 'ArrayUtil');
// script/framework/util/ArrayUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//数组中是否包含target
exports.IsArrayContain = function (array, target) {
    return array.indexOf(target) >= 0;
};
//从数组中移除target
exports.ArrayRemove = function (array, target) {
    var index = array.indexOf(target);
    if (index >= 0) {
        array.splice(index, 1);
    }
};
//复制数组
exports.ArrayCopy = function (array, target) {
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        target.push(element);
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHV0aWxcXEFycmF5VXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWU7QUFDSixRQUFBLGNBQWMsR0FBRyxVQUFLLEtBQWUsRUFBRSxNQUFRO0lBQ3RELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFBO0FBRUQsY0FBYztBQUNILFFBQUEsV0FBVyxHQUFHLFVBQUssS0FBZSxFQUFFLE1BQVM7SUFDcEQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDWixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMxQjtBQUNMLENBQUMsQ0FBQTtBQUVELE1BQU07QUFDSyxRQUFBLFNBQVMsR0FBSSxVQUFJLEtBQWUsRUFBRSxNQUFnQjtJQUN6RCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUMvQyxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUN2QjtBQUNMLENBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v5pWw57uE5Lit5piv5ZCm5YyF5ZCrdGFyZ2V0XHJcbmV4cG9ydCBsZXQgSXNBcnJheUNvbnRhaW4gPSA8VD4gKGFycmF5OiBBcnJheTxUPiwgdGFyZ2V0OlQpOiBib29sZWFuPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmluZGV4T2YodGFyZ2V0KSA+PSAwXHJcbn1cclxuXHJcbi8v5LuO5pWw57uE5Lit56e76ZmkdGFyZ2V0XHJcbmV4cG9ydCBsZXQgQXJyYXlSZW1vdmUgPSA8VD4gKGFycmF5OiBBcnJheTxUPiwgdGFyZ2V0OiBUKSA9PntcclxuICAgIHZhciBpbmRleCA9IGFycmF5LmluZGV4T2YodGFyZ2V0KTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuLy/lpI3liLbmlbDnu4RcclxuZXhwb3J0IGxldCBBcnJheUNvcHkgPSAgPFQ+KGFycmF5OiBBcnJheTxUPiwgdGFyZ2V0OiBBcnJheTxUPikgPT4ge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcbiAgICAgICAgdGFyZ2V0LnB1c2goZWxlbWVudClcclxuICAgIH1cclxufSJdfQ==