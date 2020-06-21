"use strict";
cc._RF.push(module, 'fc732le7qJGxqGVXnK5iFC3', 'UIMap');
// script/battle/map/view/UIMap.ts

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
var UIBase_1 = require("../../../framework/ui/UIBase");
var Clog_1 = require("../../../framework/clog/Clog");
var ConfigMap_1 = require("../modle/ConfigMap");
var MapCell_1 = require("./MapCell");
var UIMap = /** @class */ (function (_super) {
    __extends(UIMap, _super);
    function UIMap() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PrefabName = "P_UIMap";
        return _this;
    }
    UIMap.prototype.start = function () {
        Clog_1.default.Green(Clog_1.ClogKey.UI, "ui map start");
        this.initRoot();
        this.initEvent();
    };
    UIMap.prototype.initRoot = function () {
        this._item = cc.find("Item", this.node);
        this.allMapItem = new Array();
        for (var row = 0; row < ConfigMap_1.ConfigMap.Map.length; row++) {
            var RowItem = ConfigMap_1.ConfigMap.Map[row];
            for (var col = 0; col < RowItem.length; col++) {
                var id = RowItem[col];
                if (id != 0) {
                    var node = cc.instantiate(this._item);
                    var item = node.addComponent(MapCell_1.MapCell);
                    node.setParent(this.node);
                    item.Init(id, row, col);
                    this.allMapItem.push(item);
                }
            }
        }
        this._item.active = false;
    };
    UIMap.prototype.initEvent = function () {
    };
    return UIMap;
}(UIBase_1.UIBase));
exports.UIMap = UIMap;

cc._RF.pop();