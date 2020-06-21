"use strict";
cc._RF.push(module, '7fb02m9ELpMMqAfleOReJnT', 'CellData');
// script/battle/map/modle/CellData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapController_1 = require("../control/MapController");
var EnumMap_1 = require("./EnumMap");
var CellData = /** @class */ (function () {
    function CellData(id) {
        this.Id = id;
    }
    Object.defineProperty(CellData.prototype, "Icon", {
        get: function () {
            return "T_M" + MapController_1.MapController.CurMapId + this.Id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CellData.prototype, "CellType", {
        get: function () {
            if (this.Id == 0 || this.Id == 1) {
                return EnumMap_1.EnumMapCell.None;
            }
            if ([801, 802, 803, 804].indexOf(this.Id) >= 0) {
                return EnumMap_1.EnumMapCell.Flower;
            }
            return EnumMap_1.EnumMapCell.Water;
        },
        enumerable: true,
        configurable: true
    });
    return CellData;
}());
exports.CellData = CellData;

cc._RF.pop();