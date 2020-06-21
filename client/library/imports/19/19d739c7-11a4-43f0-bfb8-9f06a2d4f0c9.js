"use strict";
cc._RF.push(module, '19d73nHEaRD8L+4nwai1PDJ', 'MapCell');
// script/battle/map/view/MapCell.ts

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
var CellData_1 = require("../modle/CellData");
var UIUtil_1 = require("../../../framework/ui/UIUtil");
var Clog_1 = require("../../../framework/clog/Clog");
var MapCell = /** @class */ (function (_super) {
    __extends(MapCell, _super);
    function MapCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapCell.prototype.Init = function (id, row, col) {
        this.data = new CellData_1.CellData(id);
        var pos = cc.v2(-1800 + col * 64 + 32, 900 - row * 64 - 32);
        Clog_1.default.Green(Clog_1.ClogKey.UI, "this.id=" + this.data.Id + ",pos={" + pos.x + "," + pos.y + "}");
        this.node.setPosition(pos);
        this.initRoot();
        this.initEvent();
    };
    MapCell.prototype.initRoot = function () {
        this._sprite = this.node.getComponent(cc.Sprite);
        UIUtil_1.UIUtil.ChangeSprite(this.data.Icon, this._sprite);
    };
    MapCell.prototype.initEvent = function () {
    };
    return MapCell;
}(cc.Component));
exports.MapCell = MapCell;

cc._RF.pop();