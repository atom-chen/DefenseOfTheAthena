
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/ui/UIManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'af6c8bTCb5Mw7sKmsyEp4i/', 'UIManager');
// script/framework/ui/UIManager.ts

"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtil_1 = require("../util/StringUtil");
var ArrayUtil_1 = require("../util/ArrayUtil");
var Clog_1 = require("../clog/Clog");
var UIEnum_1 = require("./UIEnum");
var ResManager_1 = require("../res/ResManager");
var AudioManager_1 = require("../audio/AudioManager");
//by ming.lei 2018.09.03
var UIManager = /** @class */ (function () {
    function UIManager() {
    }
    //初始化
    UIManager.Init = function (root) {
        this._root = root;
    };
    //打开UI
    UIManager.OpenUI = function (UIClass) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
                        var targetName, target, isOnOpen, RemoveFromOnOpen;
                        var _this = this;
                        return __generator(this, function (_a) {
                            targetName = new UIClass().PrefabName;
                            if (StringUtil_1.IsNullOrEmpty(targetName)) {
                                Clog_1.default.Error('Open UI -> UI Name is null! ');
                                return [2 /*return*/, null];
                            }
                            target = this.OpenedUI.find(function (item) { return item.PrefabName == targetName; });
                            if (target != null) {
                                this.PrintOpenedUIList('Open UI -> UI Name is opened! name:' + targetName);
                                ArrayUtil_1.ArrayRemove(this.OpenedUI, target); //移除
                                this.OpenedUI.push(target); //放队尾
                                this.SortOrder(); //显示在最上层
                                return [2 /*return*/];
                            }
                            isOnOpen = this.OnOpenUITag.find(function (item) { return item == targetName; });
                            if (isOnOpen) {
                                Clog_1.default.Warn(Clog_1.ClogKey.UI, 'Open UI -> but UI is OnOpen, name:' + targetName);
                                return [2 /*return*/];
                            }
                            //未打开的情况
                            this.OnOpenUITag.push(targetName);
                            this.PrintOnOpenUIList('Open UI -> before Open UI with name:' + targetName);
                            RemoveFromOnOpen = function () {
                                var isOnOpen = _this.OnOpenUITag.find(function (item) { return item == targetName; });
                                if (isOnOpen) {
                                    Clog_1.default.Trace(Clog_1.ClogKey.UI, "remove target Name from OnOpen List!");
                                    ArrayUtil_1.ArrayRemove(_this.OnOpenUITag, targetName);
                                }
                                else {
                                    Clog_1.default.Error("can not find onOpen UI name, targetName:" + targetName);
                                }
                                _this.PrintOnOpenUIList('Open UI -> After Open UI with name:' + targetName);
                            };
                            //加载UI
                            ResManager_1.ResManager.LoadRes(targetName, cc.Prefab, function (error, prefab) {
                                if (error) {
                                    RemoveFromOnOpen();
                                    Clog_1.default.Error('UIManager >> GetInstance >> node is null!, name:' + targetName + ",err" + JSON.stringify(error));
                                    return;
                                }
                                var node = cc.instantiate(prefab);
                                var targetUI = node.addComponent(UIClass);
                                targetUI.PrefabName = targetName;
                                _this._root.addChild(node);
                                node.setPosition(0, 0);
                                //从onOpen UI List 中移除该已打开的UI
                                RemoveFromOnOpen();
                                //在已打开的UI List 中添加该UI
                                _this.OpenedUI.push(targetUI);
                                //调整UI层级
                                _this.SortOrder();
                                //打印层级
                                _this.PrintOpenedUIList('After Open UI >>' + targetName);
                                //UI打开动画
                                switch (targetUI.OpenTween) {
                                    case UIEnum_1.EnumUIOpenTween.None:
                                        {
                                            if (targetUI.Mask) {
                                                targetUI.Mask.active = true;
                                                targetUI.Mask.runAction(cc.fadeTo(0.2, _this.maskColorA));
                                            }
                                            resolve(targetUI);
                                        }
                                        break;
                                    case UIEnum_1.EnumUIOpenTween.Scale:
                                        {
                                            //动画音效
                                            AudioManager_1.AudioManager.PlaySound('S_OpenUI');
                                            //动画
                                            var OpenConstScale = node.scale;
                                            var action1 = cc.callFunc(function () {
                                                //遮罩不参与动画
                                                if (targetUI.Mask) {
                                                    targetUI.Mask.active = false;
                                                }
                                                node.scale = 0.2;
                                            });
                                            var action2 = cc.scaleTo(_this.scaleTweenTime, OpenConstScale, OpenConstScale).easing(cc.easeBezierAction(OpenConstScale - 0.1, OpenConstScale + 0.2, OpenConstScale + 0.1, OpenConstScale));
                                            var action3 = cc.callFunc(function () {
                                                if (targetUI.Mask) {
                                                    targetUI.Mask.active = true;
                                                    targetUI.Mask.runAction(cc.fadeTo(0.2, _this.maskColorA));
                                                }
                                                resolve(targetUI);
                                            });
                                            node.runAction(cc.sequence(action1, action2, action3));
                                        }
                                        break;
                                    case UIEnum_1.EnumUIOpenTween.FadeIn:
                                        {
                                            //动画音效
                                            AudioManager_1.AudioManager.PlaySound('S_OpenUI');
                                            //动画
                                            var action1 = cc.callFunc(function () {
                                                //遮罩不参与动画
                                                if (targetUI.Mask) {
                                                    targetUI.Mask.active = false;
                                                }
                                                node.opacity = 0;
                                            });
                                            var action2 = cc.fadeIn(_this.feadTweenTime);
                                            var action3 = cc.callFunc(function () {
                                                if (targetUI.Mask) {
                                                    targetUI.Mask.active = true;
                                                    targetUI.Mask.runAction(cc.fadeTo(0.2, _this.maskColorA));
                                                }
                                                resolve(targetUI);
                                            });
                                            node.runAction(cc.sequence(action1, action2, action3));
                                        }
                                        break;
                                    case UIEnum_1.EnumUIOpenTween.PullUp:
                                        {
                                            //动画音效
                                            // AudioManager.PlaySound('S_OpenUI');
                                            //动画
                                            node.setPosition(node.x, -node.parent.anchorY * node.parent.height - (1 - node.anchorY) * node.height);
                                            var action1_1 = cc.callFunc(function () {
                                                //遮罩不参与动画
                                                if (targetUI.Mask) {
                                                    targetUI.Mask.active = false;
                                                }
                                            });
                                            var action2_1 = cc.moveTo(_this.pullTweenTime, node.x, -(node.parent.anchorY - 0.5) * node.parent.height + (node.anchorY - 0.5) * node.height).easing(cc.easeOut(3)); // 移动到屏幕中心
                                            var action3_1 = cc.callFunc(function () {
                                                if (targetUI.Mask) {
                                                    targetUI.Mask.active = true;
                                                }
                                                resolve(targetUI);
                                            });
                                            // 延迟修改，防止prefab上根节点挂的widget冲突
                                            targetUI.scheduleOnce(function () { return node.runAction(cc.sequence(action1_1, action2_1, action3_1)); });
                                        }
                                        break;
                                }
                            });
                            return [2 /*return*/];
                        });
                    }); })];
            });
        });
    };
    //关闭单个UI
    UIManager.CloseUI = function (UIClass) {
        var _this = this;
        return new Promise(function (resolve) { return __awaiter(_this, void 0, void 0, function () {
            var targetName, targetUI, CloseConstScale_1;
            var _this = this;
            return __generator(this, function (_a) {
                targetName = new UIClass().PrefabName;
                Clog_1.default.Orange(Clog_1.ClogKey.UI, 'Close UI  -> UIName=' + targetName);
                targetUI = this.OpenedUI.find(function (item) { return item.PrefabName == targetName; });
                if (targetUI == null) {
                    Clog_1.default.Warn(Clog_1.ClogKey.UI, 'CloseUI -> target UI is null,name:' + targetName);
                    return [2 /*return*/];
                }
                switch (targetUI.CloseTween) {
                    case UIEnum_1.EnumUICloseTween.None:
                        {
                            targetUI.node.destroy();
                            ArrayUtil_1.ArrayRemove(this.OpenedUI, targetUI);
                            this.PrintOpenedUIList('After Close UI :' + targetName);
                            resolve();
                        }
                        break;
                    case UIEnum_1.EnumUICloseTween.Scale:
                        {
                            if (targetUI.Mask) {
                                targetUI.Mask.active = false;
                            }
                            CloseConstScale_1 = targetUI.node.scale;
                            targetUI.node.runAction(cc.sequence(cc.callFunc(function () { targetUI.node.scale = CloseConstScale_1; }), cc.scaleTo(0.1, 0.1, 0.1), cc.callFunc(function () {
                                targetUI.node.destroy();
                                ArrayUtil_1.ArrayRemove(_this.OpenedUI, targetUI);
                                _this.PrintOpenedUIList('After Close UI :' + targetName);
                                resolve();
                            })));
                        }
                        break;
                    case UIEnum_1.EnumUICloseTween.FadeOut:
                        {
                            if (targetUI.Mask) {
                                targetUI.Mask.active = false;
                            }
                            targetUI.node.runAction(cc.sequence(cc.fadeOut(this.feadTweenTime), cc.callFunc(function () {
                                targetUI.node.destroy();
                                ArrayUtil_1.ArrayRemove(_this.OpenedUI, targetUI);
                                _this.PrintOpenedUIList('After Close UI :' + targetName);
                                resolve();
                            })));
                        }
                        break;
                    case UIEnum_1.EnumUICloseTween.PullDown:
                        {
                            if (targetUI.Mask) {
                                targetUI.Mask.active = false;
                            }
                            targetUI.node.runAction(cc.sequence(cc.moveTo(this.pullTweenTime, targetUI.node.x, -targetUI.node.parent.anchorY * targetUI.node.parent.height - (1 - targetUI.node.anchorY) * targetUI.node.height).easing(cc.easeIn(3)), cc.callFunc(function () {
                                targetUI.node.destroy();
                                ArrayUtil_1.ArrayRemove(_this.OpenedUI, targetUI);
                                _this.PrintOpenedUIList('After Close UI :' + targetName);
                                resolve();
                            })));
                        }
                        break;
                }
                return [2 /*return*/];
            });
        }); });
    };
    //一次关闭所有UI
    UIManager.CloseAll = function () {
        for (var index = 0; index < this.OpenedUI.length; index++) {
            var ui = this.OpenedUI[index];
            ui.node.destroy();
        }
        this.OpenedUI = new Array();
        this.PrintOpenedUIList('After Close All UI');
    };
    //调整UI层级
    UIManager.SortOrder = function () {
        for (var index = 0; index < this.OpenedUI.length; index++) {
            var targetUI = this.OpenedUI[index];
            targetUI.node.zIndex = targetUI.HierarchyType + index * 2;
        }
    };
    //打印已打开的UI队列
    UIManager.PrintOpenedUIList = function (desc) {
        if (desc === void 0) { desc = null; }
        if (this.OpenedUI.length <= 0) {
            Clog_1.default.Orange(Clog_1.ClogKey.UI, desc + '>>> Now Opened UI List is Empty');
            return;
        }
        var str = '';
        for (var index = 0; index < this.OpenedUI.length; index++) {
            var ui = this.OpenedUI[index];
            str = str + '\n[ name: ' + ui.PrefabName + ', zIndex: ' + ui.node.zIndex + ' ]';
        }
        Clog_1.default.Orange(Clog_1.ClogKey.UI, desc + '>>> Now  Opened UI List :' + str);
    };
    //打印正在打开的UI队列
    UIManager.PrintOnOpenUIList = function (desc) {
        if (desc === void 0) { desc = null; }
        if (this.OnOpenUITag.length <= 0) {
            Clog_1.default.Orange(Clog_1.ClogKey.UI, desc + '>>> Now OnOpen UI List is Empty');
            return;
        }
        var str = '';
        for (var index = 0; index < this.OnOpenUITag.length; index++) {
            var name = this.OnOpenUITag[index];
            str = str + '\n[ name: ' + name + ' ]';
        }
        Clog_1.default.Orange(Clog_1.ClogKey.UI, desc + '>>> Now OnOpen UI List :' + str);
    };
    //放大动画时长
    UIManager.scaleTweenTime = 0.2;
    //渐隐渐出动画时长
    UIManager.feadTweenTime = 0.5;
    //上拉动画时长
    UIManager.pullTweenTime = 0.2;
    //遮罩的透明度（alpha值）
    UIManager.maskColorA = 180;
    //已打开的UI的对象List   注：用array不用map的原因，主要原因是map是无序的集合，别再帮我改成map了各位大爷
    UIManager.OpenedUI = new Array();
    //正在打开的UI的名称List
    UIManager.OnOpenUITag = new Array();
    return UIManager;
}());
exports.UIManager = UIManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHVpXFxVSU1hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLGlEQUFtRDtBQUNuRCwrQ0FBZ0Q7QUFDaEQscUNBQTZDO0FBQzdDLG1DQUE2RDtBQUM3RCxnREFBK0M7QUFDL0Msc0RBQXFEO0FBUXJELHdCQUF3QjtBQUN4QjtJQUFBO0lBbVRBLENBQUM7SUFuU0csS0FBSztJQUNTLGNBQUksR0FBbEIsVUFBbUIsSUFBYTtRQUM1QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQTtJQUNyQixDQUFDO0lBRUQsTUFBTTtJQUNjLGdCQUFNLEdBQTFCLFVBQTJCLE9BQTBCO3VDQUFHLE9BQU87OztnQkFDM0Qsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBTyxPQUFPOzs7OzRCQUN6QixVQUFVLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQyxVQUFVLENBQUE7NEJBQ3pDLElBQUksMEJBQWEsQ0FBQyxVQUFVLENBQUMsRUFBRTtnQ0FDM0IsY0FBSSxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFBO2dDQUMxQyxzQkFBTyxJQUFJLEVBQUM7NkJBQ2Y7NEJBR0csTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsSUFBSSxDQUFDLFVBQVUsSUFBSSxVQUFVLEVBQTdCLENBQTZCLENBQUMsQ0FBQTs0QkFDdEUsSUFBSSxNQUFNLElBQUksSUFBSSxFQUFFO2dDQUNoQixJQUFJLENBQUMsaUJBQWlCLENBQUMscUNBQXFDLEdBQUcsVUFBVSxDQUFDLENBQUE7Z0NBQzFFLHVCQUFXLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxNQUFNLENBQUMsQ0FBQSxDQUFFLElBQUk7Z0NBRXhDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0s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LElBQUksS0FBSyxFQUFVLENBQUM7SUFDN0QsZ0JBQWdCO0lBQ0QscUJBQVcsR0FBa0IsSUFBSSxLQUFLLEVBQVUsQ0FBQztJQXFTcEUsZ0JBQUM7Q0FuVEQsQUFtVEMsSUFBQTtBQW5UYSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJQmFzZSB9IGZyb20gXCIuL1VJQmFzZVwiO1xuaW1wb3J0IHsgSXNOdWxsT3JFbXB0eSB9IGZyb20gXCIuLi91dGlsL1N0cmluZ1V0aWxcIjtcbmltcG9ydCB7IEFycmF5UmVtb3ZlIH0gZnJvbSBcIi4uL3V0aWwvQXJyYXlVdGlsXCI7XG5pbXBvcnQgQ2xvZywgeyBDbG9nS2V5IH0gZnJvbSBcIi4uL2Nsb2cvQ2xvZ1wiO1xuaW1wb3J0IHsgRW51bVVJQ2xvc2VUd2VlbiwgRW51bVVJT3BlblR3ZWVuIH0gZnJvbSBcIi4vVUlFbnVtXCI7XG5pbXBvcnQgeyBSZXNNYW5hZ2VyIH0gZnJvbSBcIi4uL3Jlcy9SZXNNYW5hZ2VyXCI7XG5pbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi4vYXVkaW8vQXVkaW9NYW5hZ2VyXCI7XG5cblxuXG5cblxuXG5cbi8vYnkgbWluZy5sZWkgMjAxOC4wOS4wM1xuZXhwb3J0ICBjbGFzcyBVSU1hbmFnZXIgIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgX3Jvb3Q6IGNjLk5vZGU7XG4gICAgLy/mlL7lpKfliqjnlLvml7bplb9cbiAgICBwcml2YXRlIHN0YXRpYyBzY2FsZVR3ZWVuVGltZSA9IDAuMjtcbiAgICAvL+a4kOmakOa4kOWHuuWKqOeUu+aXtumVv1xuICAgIHByaXZhdGUgc3RhdGljIGZlYWRUd2VlblRpbWUgPSAwLjU7XG4gICAgLy/kuIrmi4nliqjnlLvml7bplb9cbiAgICBwcml2YXRlIHN0YXRpYyBwdWxsVHdlZW5UaW1lID0gMC4yO1xuICAgIC8v6YGu572p55qE6YCP5piO5bqm77yIYWxwaGHlgLzvvIlcbiAgICBwcml2YXRlIHN0YXRpYyBtYXNrQ29sb3JBID0gMTgwO1xuICAgIC8v5bey5omT5byA55qEVUnnmoTlr7nosaFMaXN0ICAg5rOo77ya55SoYXJyYXnkuI3nlKhtYXDnmoTljp/lm6DvvIzkuLvopoHljp/lm6DmmK9tYXDmmK/ml6Dluo/nmoTpm4blkIjvvIzliKvlho3luK7miJHmlLnmiJBtYXDkuoblkITkvY3lpKfniLdcbiAgICBwcml2YXRlIHN0YXRpYyBPcGVuZWRVSTogQXJyYXk8VUlCYXNlPiA9IG5ldyBBcnJheTxVSUJhc2U+KCk7XG4gICAgLy/mraPlnKjmiZPlvIDnmoRVSeeahOWQjeensExpc3RcbiAgICBwcml2YXRlIHN0YXRpYyBPbk9wZW5VSVRhZzogQXJyYXk8c3RyaW5nPiA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG5cbiAgICAvL+WIneWni+WMllxuICAgIHB1YmxpYyBzdGF0aWMgSW5pdChyb290OiBjYy5Ob2RlKSB7XG4gICAgICAgIHRoaXMuX3Jvb3QgPSByb290XG4gICAgfVxuXG4gICAgLy/miZPlvIBVSVxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgT3BlblVJKFVJQ2xhc3M6IHsgbmV3KCk6IFVJQmFzZSB9KTogUHJvbWlzZTxVSUJhc2U+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0TmFtZSA9IG5ldyBVSUNsYXNzKCkuUHJlZmFiTmFtZVxuICAgICAgICAgICAgaWYgKElzTnVsbE9yRW1wdHkodGFyZ2V0TmFtZSkpIHtcbiAgICAgICAgICAgICAgICBDbG9nLkVycm9yKCdPcGVuIFVJIC0+IFVJIE5hbWUgaXMgbnVsbCEgJylcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy/lt7LmiZPlvIDnmoTmg4XlhrXkuItcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLk9wZW5lZFVJLmZpbmQoaXRlbSA9PiBpdGVtLlByZWZhYk5hbWUgPT0gdGFyZ2V0TmFtZSlcbiAgICAgICAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuUHJpbnRPcGVuZWRVSUxpc3QoJ09wZW4gVUkgLT4gVUkgTmFtZSBpcyBvcGVuZWQhIG5hbWU6JyArIHRhcmdldE5hbWUpXG4gICAgICAgICAgICAgICAgQXJyYXlSZW1vdmUodGhpcy5PcGVuZWRVSSwgdGFyZ2V0KSAgLy/np7vpmaRcblxuICAgICAgICAgICAgICAgIHRoaXMuT3BlbmVkVUkucHVzaCh0YXJnZXQpICAgICAgICAgIC8v5pS+6Zif5bC+XG4gICAgICAgICAgICAgICAgdGhpcy5Tb3J0T3JkZXIoKTsgICAgICAgICAgICAgICAgICAgLy/mmL7npLrlnKjmnIDkuIrlsYJcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8v5q2j5Zyo5omT5byA55qE5oOF5Ya15LiLXG4gICAgICAgICAgICBsZXQgaXNPbk9wZW4gPSB0aGlzLk9uT3BlblVJVGFnLmZpbmQoaXRlbSA9PiBpdGVtID09IHRhcmdldE5hbWUpXG4gICAgICAgICAgICBpZiAoaXNPbk9wZW4pIHtcbiAgICAgICAgICAgICAgICBDbG9nLldhcm4oQ2xvZ0tleS5VSSwgJ09wZW4gVUkgLT4gYnV0IFVJIGlzIE9uT3BlbiwgbmFtZTonICsgdGFyZ2V0TmFtZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8v5pyq5omT5byA55qE5oOF5Ya1XG4gICAgICAgICAgICB0aGlzLk9uT3BlblVJVGFnLnB1c2godGFyZ2V0TmFtZSlcbiAgICAgICAgICAgIHRoaXMuUHJpbnRPbk9wZW5VSUxpc3QoJ09wZW4gVUkgLT4gYmVmb3JlIE9wZW4gVUkgd2l0aCBuYW1lOicgKyB0YXJnZXROYW1lKVxuXG4gICAgICAgICAgICAvL+S7juato+WcqOaJk+W8gOeahFVJIExpc3TkuK3np7vpmaRcbiAgICAgICAgICAgIGxldCBSZW1vdmVGcm9tT25PcGVuID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBpc09uT3BlbiA9IHRoaXMuT25PcGVuVUlUYWcuZmluZChpdGVtID0+IGl0ZW0gPT0gdGFyZ2V0TmFtZSlcbiAgICAgICAgICAgICAgICBpZiAoaXNPbk9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgQ2xvZy5UcmFjZShDbG9nS2V5LlVJLCBcInJlbW92ZSB0YXJnZXQgTmFtZSBmcm9tIE9uT3BlbiBMaXN0IVwiKVxuICAgICAgICAgICAgICAgICAgICBBcnJheVJlbW92ZSh0aGlzLk9uT3BlblVJVGFnLCB0YXJnZXROYW1lKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgQ2xvZy5FcnJvcihcImNhbiBub3QgZmluZCBvbk9wZW4gVUkgbmFtZSwgdGFyZ2V0TmFtZTpcIiArIHRhcmdldE5hbWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuUHJpbnRPbk9wZW5VSUxpc3QoJ09wZW4gVUkgLT4gQWZ0ZXIgT3BlbiBVSSB3aXRoIG5hbWU6JyArIHRhcmdldE5hbWUpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8v5Yqg6L29VUlcbiAgICAgICAgICAgIFJlc01hbmFnZXIuTG9hZFJlcyh0YXJnZXROYW1lLCBjYy5QcmVmYWIsIChlcnJvcjogRXJyb3IsIHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIFJlbW92ZUZyb21Pbk9wZW4oKVxuICAgICAgICAgICAgICAgICAgICBDbG9nLkVycm9yKCdVSU1hbmFnZXIgPj4gR2V0SW5zdGFuY2UgPj4gbm9kZSBpcyBudWxsISwgbmFtZTonICsgdGFyZ2V0TmFtZSArIFwiLGVyclwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0VUkgPSBub2RlLmFkZENvbXBvbmVudChVSUNsYXNzKVxuICAgICAgICAgICAgICAgIHRhcmdldFVJLlByZWZhYk5hbWUgPSB0YXJnZXROYW1lO1xuICAgICAgICAgICAgICAgIHRoaXMuX3Jvb3QuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbigwLCAwKVxuICAgICAgICAgICAgICAgIC8v5LuOb25PcGVuIFVJIExpc3Qg5Lit56e76Zmk6K+l5bey5omT5byA55qEVUlcbiAgICAgICAgICAgICAgICBSZW1vdmVGcm9tT25PcGVuKClcblxuICAgICAgICAgICAgICAgIC8v5Zyo5bey5omT5byA55qEVUkgTGlzdCDkuK3mt7vliqDor6VVSVxuICAgICAgICAgICAgICAgIHRoaXMuT3BlbmVkVUkucHVzaCh0YXJnZXRVSSlcbiAgICAgICAgICAgICAgICAvL+iwg+aVtFVJ5bGC57qnXG4gICAgICAgICAgICAgICAgdGhpcy5Tb3J0T3JkZXIoKTtcbiAgICAgICAgICAgICAgICAvL+aJk+WNsOWxgue6p1xuICAgICAgICAgICAgICAgIHRoaXMuUHJpbnRPcGVuZWRVSUxpc3QoJ0FmdGVyIE9wZW4gVUkgPj4nICsgdGFyZ2V0TmFtZSlcblxuICAgICAgICAgICAgICAgIC8vVUnmiZPlvIDliqjnlLtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHRhcmdldFVJLk9wZW5Ud2Vlbikge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEVudW1VSU9wZW5Ud2Vlbi5Ob25lOlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRVSS5NYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVJLk1hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VUkuTWFzay5ydW5BY3Rpb24oY2MuZmFkZVRvKDAuMiwgdGhpcy5tYXNrQ29sb3JBKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0YXJnZXRVSSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIEVudW1VSU9wZW5Ud2Vlbi5TY2FsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WKqOeUu+mfs+aViFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5QbGF5U291bmQoJ1NfT3BlblVJJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WKqOeUu1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBPcGVuQ29uc3RTY2FsZSA9IG5vZGUuc2NhbGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aW9uMSA9IGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/pga7nvankuI3lj4LkuI7liqjnlLtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFVJLk1hc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVJLk1hc2suYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zY2FsZSA9IDAuMlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb24yID0gY2Muc2NhbGVUbyh0aGlzLnNjYWxlVHdlZW5UaW1lLCBPcGVuQ29uc3RTY2FsZSwgT3BlbkNvbnN0U2NhbGUpLmVhc2luZyhjYy5lYXNlQmV6aWVyQWN0aW9uKE9wZW5Db25zdFNjYWxlIC0gMC4xLCBPcGVuQ29uc3RTY2FsZSArIDAuMiwgT3BlbkNvbnN0U2NhbGUgKyAwLjEsIE9wZW5Db25zdFNjYWxlKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGlvbjMgPSBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRVSS5NYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRVSS5NYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRVSS5NYXNrLnJ1bkFjdGlvbihjYy5mYWRlVG8oMC4yLCB0aGlzLm1hc2tDb2xvckEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRhcmdldFVJKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3Rpb24xLCBhY3Rpb24yLCBhY3Rpb24zKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBFbnVtVUlPcGVuVHdlZW4uRmFkZUluOlxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yqo55S76Z+z5pWIXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlBsYXlTb3VuZCgnU19PcGVuVUknKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yqo55S7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6YGu572p5LiN5Y+C5LiO5Yqo55S7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRVSS5NYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRVSS5NYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGlvbjIgPSBjYy5mYWRlSW4odGhpcy5mZWFkVHdlZW5UaW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFVJLk1hc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVJLk1hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVJLk1hc2sucnVuQWN0aW9uKGNjLmZhZGVUbygwLjIsIHRoaXMubWFza0NvbG9yQSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGFyZ2V0VUkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoYWN0aW9uMSwgYWN0aW9uMiwgYWN0aW9uMykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgRW51bVVJT3BlblR3ZWVuLlB1bGxVcDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WKqOeUu+mfs+aViFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEF1ZGlvTWFuYWdlci5QbGF5U291bmQoJ1NfT3BlblVJJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WKqOeUu1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24obm9kZS54LCAtbm9kZS5wYXJlbnQuYW5jaG9yWSAqIG5vZGUucGFyZW50LmhlaWdodCAtICgxIC0gbm9kZS5hbmNob3JZKSAqIG5vZGUuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aW9uMSA9IGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/pga7nvankuI3lj4LkuI7liqjnlLtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldFVJLk1hc2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVJLk1hc2suYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLm1vdmVUbyh0aGlzLnB1bGxUd2VlblRpbWUsIG5vZGUueCwgLShub2RlLnBhcmVudC5hbmNob3JZIC0gMC41KSAqIG5vZGUucGFyZW50LmhlaWdodCArIChub2RlLmFuY2hvclkgLSAwLjUpICogbm9kZS5oZWlnaHQpLmVhc2luZyhjYy5lYXNlT3V0KDMpKTsgLy8g56e75Yqo5Yiw5bGP5bmV5Lit5b+DXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFjdGlvbjMgPSBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRVSS5NYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRVSS5NYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0YXJnZXRVSSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bu26L+f5L+u5pS577yM6Ziy5q2icHJlZmFi5LiK5qC56IqC54K55oyC55qEd2lkZ2V05Yay56qBXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VUkuc2NoZWR1bGVPbmNlKCgpID0+IG5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGFjdGlvbjEsIGFjdGlvbjIsIGFjdGlvbjMpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH1cblxuXG4gICAgLy/lhbPpl63ljZXkuKpVSVxuICAgIHB1YmxpYyBzdGF0aWMgIENsb3NlVUkoVUlDbGFzczogeyBuZXcoKTogVUlCYXNlIH0pOiBQcm9taXNlPHZvaWQ+IHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0TmFtZSA9IG5ldyBVSUNsYXNzKCkuUHJlZmFiTmFtZVxuXG4gICAgICAgICAgICBDbG9nLk9yYW5nZShDbG9nS2V5LlVJLCAnQ2xvc2UgVUkgIC0+IFVJTmFtZT0nICsgdGFyZ2V0TmFtZSlcbiAgICAgICAgICAgIGxldCB0YXJnZXRVSTogVUlCYXNlID0gdGhpcy5PcGVuZWRVSS5maW5kKGl0ZW0gPT4gaXRlbS5QcmVmYWJOYW1lID09IHRhcmdldE5hbWUpXG4gICAgICAgICAgICBpZiAodGFyZ2V0VUkgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIENsb2cuV2FybihDbG9nS2V5LlVJLCAnQ2xvc2VVSSAtPiB0YXJnZXQgVUkgaXMgbnVsbCxuYW1lOicgKyB0YXJnZXROYW1lKVxuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzd2l0Y2ggKHRhcmdldFVJLkNsb3NlVHdlZW4pIHtcbiAgICAgICAgICAgICAgICBjYXNlIEVudW1VSUNsb3NlVHdlZW4uTm9uZTpcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VUkubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBBcnJheVJlbW92ZSh0aGlzLk9wZW5lZFVJLCB0YXJnZXRVSSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUHJpbnRPcGVuZWRVSUxpc3QoJ0FmdGVyIENsb3NlIFVJIDonICsgdGFyZ2V0TmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIEVudW1VSUNsb3NlVHdlZW4uU2NhbGU6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRVSS5NYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VUkuTWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBDbG9zZUNvbnN0U2NhbGUgPSB0YXJnZXRVSS5ub2RlLnNjYWxlXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXRVSS5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7IHRhcmdldFVJLm5vZGUuc2NhbGUgPSBDbG9zZUNvbnN0U2NhbGUgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muc2NhbGVUbygwLjEsIDAuMSwgMC4xKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVJLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheVJlbW92ZSh0aGlzLk9wZW5lZFVJLCB0YXJnZXRVSSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QcmludE9wZW5lZFVJTGlzdCgnQWZ0ZXIgQ2xvc2UgVUkgOicgKyB0YXJnZXROYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICAgICAgY2FzZSBFbnVtVUlDbG9zZVR3ZWVuLkZhZGVPdXQ6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRVSS5NYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VUkuTWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VUkubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZmFkZU91dCh0aGlzLmZlYWRUd2VlblRpbWUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VUkubm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFycmF5UmVtb3ZlKHRoaXMuT3BlbmVkVUksIHRhcmdldFVJKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlByaW50T3BlbmVkVUlMaXN0KCdBZnRlciBDbG9zZSBVSSA6JyArIHRhcmdldE5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICBjYXNlIEVudW1VSUNsb3NlVHdlZW4uUHVsbERvd246XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXRVSS5NYXNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VUkuTWFzay5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0VUkubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MubW92ZVRvKHRoaXMucHVsbFR3ZWVuVGltZSwgdGFyZ2V0VUkubm9kZS54LCAtdGFyZ2V0VUkubm9kZS5wYXJlbnQuYW5jaG9yWSAqIHRhcmdldFVJLm5vZGUucGFyZW50LmhlaWdodCAtICgxIC0gdGFyZ2V0VUkubm9kZS5hbmNob3JZKSAqIHRhcmdldFVJLm5vZGUuaGVpZ2h0KS5lYXNpbmcoY2MuZWFzZUluKDMpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldFVJLm5vZGUuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcnJheVJlbW92ZSh0aGlzLk9wZW5lZFVJLCB0YXJnZXRVSSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5QcmludE9wZW5lZFVJTGlzdCgnQWZ0ZXIgQ2xvc2UgVUkgOicgKyB0YXJnZXROYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cblxuXG4gICAgLy/kuIDmrKHlhbPpl63miYDmnIlVSVxuICAgIHB1YmxpYyBzdGF0aWMgIENsb3NlQWxsKCkge1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5PcGVuZWRVSS5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHVpID0gdGhpcy5PcGVuZWRVSVtpbmRleF07XG4gICAgICAgICAgICB1aS5ub2RlLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuT3BlbmVkVUkgPSBuZXcgQXJyYXk8VUlCYXNlPigpO1xuICAgICAgICB0aGlzLlByaW50T3BlbmVkVUlMaXN0KCdBZnRlciBDbG9zZSBBbGwgVUknKTtcbiAgICB9XG5cbiAgICAvL+iwg+aVtFVJ5bGC57qnXG4gICAgcHJpdmF0ZSBzdGF0aWMgIFNvcnRPcmRlcigpIHtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuT3BlbmVkVUkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0VUk6IFVJQmFzZSA9IHRoaXMuT3BlbmVkVUlbaW5kZXhdXG4gICAgICAgICAgICB0YXJnZXRVSS5ub2RlLnpJbmRleCA9IHRhcmdldFVJLkhpZXJhcmNoeVR5cGUgKyBpbmRleCAqIDI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+aJk+WNsOW3suaJk+W8gOeahFVJ6Zif5YiXXG4gICAgcHJpdmF0ZSBzdGF0aWMgIFByaW50T3BlbmVkVUlMaXN0KGRlc2M6IHN0cmluZyA9IG51bGwpIHtcbiAgICAgICAgaWYgKHRoaXMuT3BlbmVkVUkubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIENsb2cuT3JhbmdlKENsb2dLZXkuVUksIGRlc2MgKyAnPj4+IE5vdyBPcGVuZWQgVUkgTGlzdCBpcyBFbXB0eScpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgc3RyID0gJydcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuT3BlbmVkVUkubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB1aSA9IHRoaXMuT3BlbmVkVUlbaW5kZXhdO1xuICAgICAgICAgICAgc3RyID0gc3RyICsgJ1xcblsgbmFtZTogJyArIHVpLlByZWZhYk5hbWUgKyAnLCB6SW5kZXg6ICcgKyB1aS5ub2RlLnpJbmRleCArICcgXSdcbiAgICAgICAgfVxuICAgICAgICBDbG9nLk9yYW5nZShDbG9nS2V5LlVJLCBkZXNjICsgJz4+PiBOb3cgIE9wZW5lZCBVSSBMaXN0IDonICsgc3RyKVxuICAgIH1cblxuICAgIC8v5omT5Y2w5q2j5Zyo5omT5byA55qEVUnpmJ/liJdcbiAgICBwcml2YXRlIHN0YXRpYyAgUHJpbnRPbk9wZW5VSUxpc3QoZGVzYzogc3RyaW5nID0gbnVsbCkge1xuICAgICAgICBpZiAodGhpcy5Pbk9wZW5VSVRhZy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgICAgQ2xvZy5PcmFuZ2UoQ2xvZ0tleS5VSSwgZGVzYyArICc+Pj4gTm93IE9uT3BlbiBVSSBMaXN0IGlzIEVtcHR5JylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBzdHIgPSAnJ1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5Pbk9wZW5VSVRhZy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSB0aGlzLk9uT3BlblVJVGFnW2luZGV4XTtcbiAgICAgICAgICAgIHN0ciA9IHN0ciArICdcXG5bIG5hbWU6ICcgKyBuYW1lICsgJyBdJ1xuICAgICAgICB9XG4gICAgICAgIENsb2cuT3JhbmdlKENsb2dLZXkuVUksIGRlc2MgKyAnPj4+IE5vdyBPbk9wZW4gVUkgTGlzdCA6JyArIHN0cilcbiAgICB9XG59XG5cbiJdfQ==