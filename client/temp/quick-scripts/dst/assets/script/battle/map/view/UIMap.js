
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/battle/map/view/UIMap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0bGVcXG1hcFxcdmlld1xcVUlNYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdURBQXNEO0FBQ3RELHFEQUE2RDtBQUM3RCxnREFBK0M7QUFDL0MscUNBQW9DO0FBSXBDO0lBQTJCLHlCQUFNO0lBQWpDO1FBQUEscUVBc0NDO1FBcENVLGdCQUFVLEdBQUcsU0FBUyxDQUFBOztJQW9DakMsQ0FBQztJQTdCRyxxQkFBSyxHQUFMO1FBQ0ksY0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFPLENBQUMsRUFBRSxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVPLHdCQUFRLEdBQWhCO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLEtBQUssRUFBVyxDQUFDO1FBQ3ZDLEtBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxxQkFBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7WUFDakQsSUFBTSxPQUFPLEdBQUcscUJBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkMsS0FBSyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLEVBQUU7Z0JBQzNDLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDeEIsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFO29CQUNULElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO29CQUNyQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFPLENBQUMsQ0FBQTtvQkFDckMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7b0JBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDeEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzlCO2FBQ0o7U0FDSjtRQUNELElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM5QixDQUFDO0lBRU8seUJBQVMsR0FBakI7SUFFQSxDQUFDO0lBRUwsWUFBQztBQUFELENBdENBLEFBc0NDLENBdEMwQixlQUFNLEdBc0NoQztBQXRDWSxzQkFBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJQmFzZSB9IGZyb20gXCIuLi8uLi8uLi9mcmFtZXdvcmsvdWkvVUlCYXNlXCI7XG5pbXBvcnQgQ2xvZywgeyBDbG9nS2V5IH0gZnJvbSBcIi4uLy4uLy4uL2ZyYW1ld29yay9jbG9nL0Nsb2dcIjtcbmltcG9ydCB7IENvbmZpZ01hcCB9IGZyb20gXCIuLi9tb2RsZS9Db25maWdNYXBcIjtcbmltcG9ydCB7IE1hcENlbGwgfSBmcm9tIFwiLi9NYXBDZWxsXCI7XG5cblxuXG5leHBvcnQgY2xhc3MgVUlNYXAgZXh0ZW5kcyBVSUJhc2Uge1xuXG4gICAgcHVibGljIFByZWZhYk5hbWUgPSBcIlBfVUlNYXBcIlxuXG4gICAgcHJpdmF0ZSBfaXRlbTogY2MuTm9kZTtcbiAgICAvLyBwcml2YXRlIF9ncmlkOiBjYy5Ob2RlO1xuICAgIHByaXZhdGUgYWxsTWFwSXRlbTogQXJyYXk8TWFwQ2VsbD5cblxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIENsb2cuR3JlZW4oQ2xvZ0tleS5VSSwgXCJ1aSBtYXAgc3RhcnRcIik7XG4gICAgICAgIHRoaXMuaW5pdFJvb3QoKTtcbiAgICAgICAgdGhpcy5pbml0RXZlbnQoKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGluaXRSb290KCkge1xuICAgICAgICB0aGlzLl9pdGVtID0gY2MuZmluZChcIkl0ZW1cIiwgdGhpcy5ub2RlKVxuICAgICAgICB0aGlzLmFsbE1hcEl0ZW0gPSBuZXcgQXJyYXk8TWFwQ2VsbD4oKTtcbiAgICAgICAgZm9yIChsZXQgcm93ID0gMDsgcm93IDwgQ29uZmlnTWFwLk1hcC5sZW5ndGg7IHJvdysrKSB7XG4gICAgICAgICAgICBjb25zdCBSb3dJdGVtID0gQ29uZmlnTWFwLk1hcFtyb3ddO1xuICAgICAgICAgICAgZm9yIChsZXQgY29sID0gMDsgY29sIDwgUm93SXRlbS5sZW5ndGg7IGNvbCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBSb3dJdGVtW2NvbF07XG4gICAgICAgICAgICAgICAgaWYgKGlkICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLl9pdGVtKVxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IG5vZGUuYWRkQ29tcG9uZW50KE1hcENlbGwpXG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UGFyZW50KHRoaXMubm9kZSlcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5Jbml0KGlkLCByb3csIGNvbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsTWFwSXRlbS5wdXNoKGl0ZW0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pdGVtLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHByaXZhdGUgaW5pdEV2ZW50KCkge1xuXG4gICAgfVxuXG59Il19