
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/battle/map/view/MapCell.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0bGVcXG1hcFxcdmlld1xcTWFwQ2VsbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw4Q0FBNkM7QUFDN0MsdURBQXNEO0FBQ3RELHFEQUE2RDtBQUc3RDtJQUE2QiwyQkFBWTtJQUF6Qzs7SUF1QkEsQ0FBQztJQW5CRyxzQkFBSSxHQUFKLFVBQUssRUFBVSxFQUFFLEdBQVcsRUFBRSxHQUFXO1FBQ3JDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxtQkFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBRTVCLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUE7UUFDM0QsY0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFPLENBQUMsRUFBRSxFQUFFLFVBQVUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTywwQkFBUSxHQUFoQjtRQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2pELGVBQU0sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFTywyQkFBUyxHQUFqQjtJQUVBLENBQUM7SUFFTCxjQUFDO0FBQUQsQ0F2QkEsQUF1QkMsQ0F2QjRCLEVBQUUsQ0FBQyxTQUFTLEdBdUJ4QztBQXZCWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENlbGxEYXRhIH0gZnJvbSBcIi4uL21vZGxlL0NlbGxEYXRhXCI7XG5pbXBvcnQgeyBVSVV0aWwgfSBmcm9tIFwiLi4vLi4vLi4vZnJhbWV3b3JrL3VpL1VJVXRpbFwiO1xuaW1wb3J0IENsb2csIHsgQ2xvZ0tleSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvY2xvZy9DbG9nXCI7XG5cblxuZXhwb3J0IGNsYXNzIE1hcENlbGwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuXG4gICAgcHJpdmF0ZSBkYXRhOiBDZWxsRGF0YTtcbiAgICBwcml2YXRlIF9zcHJpdGU6IGNjLlNwcml0ZTtcbiAgICBJbml0KGlkOiBudW1iZXIsIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcikge1xuICAgICAgICB0aGlzLmRhdGEgPSBuZXcgQ2VsbERhdGEoaWQpXG5cbiAgICAgICAgbGV0IHBvcyA9IGNjLnYyKC0xODAwICsgY29sICogNjQgKyAzMiwgOTAwIC0gcm93ICogNjQgLSAzMilcbiAgICAgICAgQ2xvZy5HcmVlbihDbG9nS2V5LlVJLCBcInRoaXMuaWQ9XCIgKyB0aGlzLmRhdGEuSWQgKyBcIixwb3M9e1wiICsgcG9zLnggKyBcIixcIiArIHBvcy55ICsgXCJ9XCIpO1xuICAgICAgICB0aGlzLm5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgdGhpcy5pbml0Um9vdCgpO1xuICAgICAgICB0aGlzLmluaXRFdmVudCgpO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdFJvb3QoKSB7XG4gICAgICAgIHRoaXMuX3Nwcml0ZSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgVUlVdGlsLkNoYW5nZVNwcml0ZSh0aGlzLmRhdGEuSWNvbiwgdGhpcy5fc3ByaXRlKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRFdmVudCgpIHtcblxuICAgIH1cblxufSJdfQ==