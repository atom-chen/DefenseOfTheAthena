"use strict";
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