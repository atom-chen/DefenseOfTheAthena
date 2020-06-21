"use strict";
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