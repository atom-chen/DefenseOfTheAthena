
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/battle/map/modle/CellData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0bGVcXG1hcFxcbW9kbGVcXENlbGxEYXRhLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMERBQXlEO0FBQ3pELHFDQUF3QztBQUt4QztJQUdJLGtCQUFZLEVBQVU7UUFDbEIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUlELHNCQUFXLDBCQUFJO2FBQWY7WUFDSSxPQUFPLEtBQUssR0FBRyw2QkFBYSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO1FBQ3BELENBQUM7OztPQUFBO0lBRUQsc0JBQVcsOEJBQVE7YUFBbkI7WUFDSSxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFO2dCQUM5QixPQUFPLHFCQUFXLENBQUMsSUFBSSxDQUFBO2FBQzFCO1lBQ0QsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO2dCQUM1QyxPQUFPLHFCQUFXLENBQUMsTUFBTSxDQUFDO2FBQzdCO1lBQ0QsT0FBTyxxQkFBVyxDQUFDLEtBQUssQ0FBQztRQUM3QixDQUFDOzs7T0FBQTtJQUlMLGVBQUM7QUFBRCxDQXpCQSxBQXlCQyxJQUFBO0FBekJZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTWFwQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sL01hcENvbnRyb2xsZXJcIjtcbmltcG9ydCB7IEVudW1NYXBDZWxsIH0gZnJvbSBcIi4vRW51bU1hcFwiO1xuaW1wb3J0IHsgTWFwQ2VsbCB9IGZyb20gXCIuLi92aWV3L01hcENlbGxcIjtcbmltcG9ydCB7IENvbmZpZ01hcCB9IGZyb20gXCIuL0NvbmZpZ01hcFwiO1xuXG5cbmV4cG9ydCBjbGFzcyBDZWxsRGF0YSB7XG5cblxuICAgIGNvbnN0cnVjdG9yKGlkOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5JZCA9IGlkO1xuICAgIH1cblxuICAgIHB1YmxpYyBJZDogbnVtYmVyO1xuXG4gICAgcHVibGljIGdldCBJY29uKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBcIlRfTVwiICsgTWFwQ29udHJvbGxlci5DdXJNYXBJZCArIHRoaXMuSWQ7XG4gICAgfVxuXG4gICAgcHVibGljIGdldCBDZWxsVHlwZSgpOiBFbnVtTWFwQ2VsbCB7XG4gICAgICAgIGlmICh0aGlzLklkID09IDAgfHwgdGhpcy5JZCA9PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gRW51bU1hcENlbGwuTm9uZVxuICAgICAgICB9XG4gICAgICAgIGlmIChbODAxLCA4MDIsIDgwMywgODA0XS5pbmRleE9mKHRoaXMuSWQpID49IDApIHtcbiAgICAgICAgICAgIHJldHVybiBFbnVtTWFwQ2VsbC5GbG93ZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEVudW1NYXBDZWxsLldhdGVyO1xuICAgIH1cblxuXG4gICAgXG59Il19