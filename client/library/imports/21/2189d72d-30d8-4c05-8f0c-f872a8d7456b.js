"use strict";
cc._RF.push(module, '2189dctMNhMBY8M+HKo10Vr', 'UIBase');
// script/framework/ui/UIBase.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var UIEnum_1 = require("./UIEnum");
var UIBase = /** @class */ (function (_super) {
    __extends(UIBase, _super);
    function UIBase() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.HierarchyType = UIEnum_1.EnumUIHierarchy.Normal;
        _this.OpenTween = UIEnum_1.EnumUIOpenTween.None;
        _this.CloseTween = UIEnum_1.EnumUICloseTween.None;
        return _this;
    }
    UIBase.prototype.onLoad = function () {
        this.Mask = cc.find('UIMask', this.node);
    };
    return UIBase;
}(cc.Component));
exports.UIBase = UIBase;

cc._RF.pop();