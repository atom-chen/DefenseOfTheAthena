"use strict";
cc._RF.push(module, '935f5uEF4BPGJgPsaDxdOpd', 'SyncPromise');
// script/framework/util/SyncPromise.ts

"use strict";
// 界面同步
Object.defineProperty(exports, "__esModule", { value: true });
var SyncPromise = /** @class */ (function () {
    function SyncPromise() {
        var _this = this;
        this.promise = new Promise(function (resolve, reject) {
            _this.resolve = resolve;
            _this.reject = reject;
        });
    }
    return SyncPromise;
}());
exports.SyncPromise = SyncPromise;

cc._RF.pop();