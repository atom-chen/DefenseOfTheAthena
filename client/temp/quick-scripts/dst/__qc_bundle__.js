
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/script/battle/map/control/CellController');
require('./assets/script/battle/map/control/MapController');
require('./assets/script/battle/map/modle/CellData');
require('./assets/script/battle/map/modle/ConfigMap');
require('./assets/script/battle/map/modle/EnumMap');
require('./assets/script/battle/map/view/MapCell');
require('./assets/script/battle/map/view/UIMap');
require('./assets/script/commonUI/UITip');
require('./assets/script/entry/controller/EntryControler');
require('./assets/script/entry/model/GameInfo');
require('./assets/script/entry/view/UIEntry');
require('./assets/script/framework/audio/AudioManager');
require('./assets/script/framework/clog/Clog');
require('./assets/script/framework/net/Http');
require('./assets/script/framework/res/ResManager');
require('./assets/script/framework/res/ResPath');
require('./assets/script/framework/res/ResUtil');
require('./assets/script/framework/storage/LocalStorage');
require('./assets/script/framework/time/Time');
require('./assets/script/framework/ui/UIBase');
require('./assets/script/framework/ui/UIEnum');
require('./assets/script/framework/ui/UIManager');
require('./assets/script/framework/ui/UIUtil');
require('./assets/script/framework/util/ArrayUtil');
require('./assets/script/framework/util/StringUtil');
require('./assets/script/framework/util/SyncPromise');
require('./assets/script/framework/util/UIEventCenter');
require('./assets/script/login/controller/LoginController');
require('./assets/script/login/model/LoginData');
require('./assets/script/login/view/UILogin');
require('./assets/script/login/view/UILoginFast');
require('./assets/script/login/view/UILoginFastRegister');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/ui/UIUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3cf91GA1qNEQp/Pm60GN4cw', 'UIUtil');
// script/framework/ui/UIUtil.ts

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
var Clog_1 = require("../clog/Clog");
var StringUtil_1 = require("../util/StringUtil");
var ResManager_1 = require("../res/ResManager");
var UIUtil = /** @class */ (function () {
    function UIUtil() {
    }
    //设置玩家头像
    UIUtil.SetHeadIcon = function (iconId, iconSprite, playerId) {
        if (iconSprite == null) {
            Clog_1.default.Error('iconSprite is null ');
            return;
        }
        iconId = (Number(playerId) % 50).toString();
        //非网络图片为 0~19的字符
        if (StringUtil_1.IsNullOrEmpty(iconId)) {
            iconId = 'T_HeadIcon_0';
        }
        else {
            iconId = 'T_HeadIcon_' + Number(iconId);
        }
        this.ChangeSprite(iconId, iconSprite);
    };
    //加载远程图片
    UIUtil.LoadRemoteImage = function (path, sprite) {
        if (StringUtil_1.IsNullOrEmpty(path)) {
            Clog_1.default.Warn(Clog_1.ClogKey.UI, "LoadNetImg path error:" + path);
            return;
        }
        if (!StringUtil_1.CheckNetUrl(path)) {
            return;
        }
        Clog_1.default.Orange(Clog_1.ClogKey.Net, "LoadRemoteImage url:" + path);
        cc.loader.load({ url: path }, function (err, image) {
            if (err) {
                Clog_1.default.Warn(Clog_1.ClogKey.UI, 'LoadNetImg load error,error:' + err);
                return;
            }
            if (sprite.node == null) {
                Clog_1.default.Error('LoadNetImg load error>>>>>>>>obj.node==null');
                return;
            }
            var spriteFrame = new cc.SpriteFrame(image);
            sprite.spriteFrame = spriteFrame;
        });
    };
    //改变图片
    UIUtil.ChangeSprite = function (name, sprite) {
        if (sprite == null) {
            return;
        }
        if (StringUtil_1.IsNullOrEmpty(name)) {
            Clog_1.default.Error('ChangeSprite name is Empty!');
            return;
        }
        if (sprite.spriteFrame != null && sprite.spriteFrame.name == name) {
            return;
        }
        ResManager_1.ResManager.LoadRes(name, cc.SpriteFrame, function (error, res) {
            if (error) {
                Clog_1.default.Error('ChangeSprite Error!, name:' + name + ",err" + JSON.stringify(error));
                return;
            }
            var sf = res;
            if (sprite.isValid) {
                sprite.spriteFrame = sf;
            }
        });
    };
    UIUtil.CreateAnimationClip = function (name) {
        return __awaiter(this, void 0, Promise, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        if (StringUtil_1.IsNullOrEmpty(name)) {
                            Clog_1.default.Error('CreateAnimationClip name is Empty!');
                            resolve(null);
                            return;
                        }
                        cc.loader.loadResDir(name, cc.SpriteFrame, function (err, spriteFrames, urls) {
                            if (err) {
                                Clog_1.default.Error('CreateAnimationClip Error!, name:' + name + ",err" + JSON.stringify(err));
                                resolve(null);
                                return;
                            }
                            var frames = [];
                            frames.push.apply(frames, spriteFrames);
                            // @ts-ignore
                            frames.sort(function (a, b) {
                                return a.name == b.name ? 0 : a.name < b.name ? -1 : 1;
                            });
                            // hack cc.AnimationClip.createWithSpriteFrames(spriteFrames, sample)
                            // 参照creator版本2.3.3
                            var createWithSpriteFrames = function (spriteFrames, sample) {
                                var clip = new cc.AnimationClip();
                                clip.sample = sample || clip.sample;
                                var frames = [];
                                var duration = 0;
                                for (var i = 0, l = spriteFrames.length; i < l; i++) {
                                    var index = spriteFrames[i].name.lastIndexOf('-');
                                    var time = parseInt(spriteFrames[i].name.substr(index + 1));
                                    frames[i] = { frame: duration, value: spriteFrames[i] };
                                    duration += time / 1000;
                                }
                                // 复制最后一帧，让最后一帧的持续时间有意义
                                frames[spriteFrames.length] = { frame: duration, value: spriteFrames[spriteFrames.length - 1] };
                                // @ts-ignore
                                clip._duration = duration;
                                clip.curveData = {
                                    comps: {
                                        // component
                                        'cc.Sprite': {
                                            // component properties
                                            'spriteFrame': frames
                                        }
                                    }
                                };
                                return clip;
                            };
                            // resolve(cc.AnimationClip.createWithSpriteFrames(spriteFrames, 30));
                            resolve(createWithSpriteFrames(spriteFrames, 30));
                        });
                    })];
            });
        });
    };
    /**
   * 动态加载龙骨
   * @param animationDisplay  龙骨组件
   * @param name              龙骨地址
   * @param armatureName      Armature名称
   * @param animName          Animation名称
   * @param playTimes         播放次数 -1是根据龙骨文件 0五险循环 >0是播放次数
   */
    UIUtil.LoadDragonBones = function (animationDisplay, path, armatureName, animName, playTimes) {
        if (playTimes === void 0) { playTimes = 1; }
        return new Promise(function (reslove) {
            cc.loader.loadResDir(path, function (err, assets) {
                if (err || assets.length <= 0) {
                    reslove(false);
                    return;
                }
                assets.forEach(function (asset) {
                    if (asset instanceof dragonBones.DragonBonesAsset) {
                        animationDisplay.dragonAsset = asset;
                    }
                    if (asset instanceof dragonBones.DragonBonesAtlasAsset) {
                        animationDisplay.dragonAtlasAsset = asset;
                    }
                });
                animationDisplay.armatureName = armatureName;
                animationDisplay.playAnimation(animName, playTimes);
                animationDisplay.addEventListener(dragonBones.EventObject.COMPLETE, function () {
                    animationDisplay.removeEventListener(dragonBones.EventObject.COMPLETE);
                    reslove(true);
                });
            });
        });
    };
    return UIUtil;
}());
exports.UIUtil = UIUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHVpXFxVSVV0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE2QztBQUM3QyxpREFBZ0U7QUFDaEUsZ0RBQStDO0FBSS9DO0lBQUE7SUFrTEEsQ0FBQztJQS9LRyxRQUFRO0lBQ00sa0JBQVcsR0FBekIsVUFBMEIsTUFBYyxFQUFFLFVBQXFCLEVBQUUsUUFBaUI7UUFDOUUsSUFBSSxVQUFVLElBQUksSUFBSSxFQUFFO1lBQ3BCLGNBQUksQ0FBQyxLQUFLLENBQUMscUJBQXFCLENBQUMsQ0FBQztZQUNsQyxPQUFPO1NBQ1Y7UUFFRCxNQUFNLEdBQUcsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUMsZ0JBQWdCO1FBQ2hCLElBQUksMEJBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUN2QixNQUFNLEdBQUcsY0FBYyxDQUFBO1NBQzFCO2FBQ0k7WUFDRCxNQUFNLEdBQUcsYUFBYSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7SUFJRCxRQUFRO0lBQ00sc0JBQWUsR0FBN0IsVUFBOEIsSUFBWSxFQUFFLE1BQWlCO1FBQ3pELElBQUksMEJBQWEsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyQixjQUFJLENBQUMsSUFBSSxDQUFDLGNBQU8sQ0FBQyxFQUFFLEVBQUUsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDdkQsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLHdCQUFXLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDcEIsT0FBTztTQUNWO1FBQ0QsY0FBSSxDQUFDLE1BQU0sQ0FBQyxjQUFPLENBQUMs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Z0JBRUgsZ0JBQWdCLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztnQkFDN0MsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsQ0FBQztnQkFDcEQsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUU7b0JBQ2hFLGdCQUFnQixDQUFDLG1CQUFtQixDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUE7b0JBQ3RFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtnQkFDakIsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUdMLGFBQUM7QUFBRCxDQWxMQSxBQWtMQyxJQUFBO0FBbExZLHdCQUFNIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsb2csIHsgQ2xvZ0tleSB9IGZyb20gXCIuLi9jbG9nL0Nsb2dcIjtcclxuaW1wb3J0IHsgSXNOdWxsT3JFbXB0eSwgQ2hlY2tOZXRVcmwgfSBmcm9tIFwiLi4vdXRpbC9TdHJpbmdVdGlsXCI7XHJcbmltcG9ydCB7IFJlc01hbmFnZXIgfSBmcm9tIFwiLi4vcmVzL1Jlc01hbmFnZXJcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFVJVXRpbCB7XHJcblxyXG5cclxuICAgIC8v6K6+572u546p5a625aS05YOPXHJcbiAgICBwdWJsaWMgc3RhdGljIFNldEhlYWRJY29uKGljb25JZDogc3RyaW5nLCBpY29uU3ByaXRlOiBjYy5TcHJpdGUsIHBsYXllcklkPzogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKGljb25TcHJpdGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBDbG9nLkVycm9yKCdpY29uU3ByaXRlIGlzIG51bGwgJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGljb25JZCA9IChOdW1iZXIocGxheWVySWQpICUgNTApLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgLy/pnZ7nvZHnu5zlm77niYfkuLogMH4xOeeahOWtl+esplxyXG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KGljb25JZCkpIHtcclxuICAgICAgICAgICAgaWNvbklkID0gJ1RfSGVhZEljb25fMCdcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGljb25JZCA9ICdUX0hlYWRJY29uXycgKyBOdW1iZXIoaWNvbklkKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuQ2hhbmdlU3ByaXRlKGljb25JZCwgaWNvblNwcml0ZSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvL+WKoOi9vei/nOeoi+WbvueJh1xyXG4gICAgcHVibGljIHN0YXRpYyBMb2FkUmVtb3RlSW1hZ2UocGF0aDogc3RyaW5nLCBzcHJpdGU6IGNjLlNwcml0ZSkge1xyXG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KHBhdGgpKSB7XHJcbiAgICAgICAgICAgIENsb2cuV2FybihDbG9nS2V5LlVJLCBcIkxvYWROZXRJbWcgcGF0aCBlcnJvcjpcIiArIHBhdGgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIUNoZWNrTmV0VXJsKHBhdGgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgQ2xvZy5PcmFuZ2UoQ2xvZ0tleS5OZXQsIFwiTG9hZFJlbW90ZUltYWdlIHVybDpcIiArIHBhdGgpO1xyXG5cclxuICAgICAgICBjYy5sb2FkZXIubG9hZCh7IHVybDogcGF0aCB9LCAoZXJyLCBpbWFnZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBDbG9nLldhcm4oQ2xvZ0tleS5VSSwgJ0xvYWROZXRJbWcgbG9hZCBlcnJvcixlcnJvcjonICsgZXJyKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc3ByaXRlLm5vZGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgQ2xvZy5FcnJvcignTG9hZE5ldEltZyBsb2FkIGVycm9yPj4+Pj4+Pj5vYmoubm9kZT09bnVsbCcpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKGltYWdlKTtcclxuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/mlLnlj5jlm77niYdcclxuICAgIHB1YmxpYyBzdGF0aWMgQ2hhbmdlU3ByaXRlKG5hbWU6IHN0cmluZywgc3ByaXRlOiBjYy5TcHJpdGUpIHtcclxuICAgICAgICBpZiAoc3ByaXRlID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKElzTnVsbE9yRW1wdHkobmFtZSkpIHtcclxuICAgICAgICAgICAgQ2xvZy5FcnJvcignQ2hhbmdlU3ByaXRlIG5hbWUgaXMgRW1wdHkhJylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHNwcml0ZS5zcHJpdGVGcmFtZSAhPSBudWxsICYmIHNwcml0ZS5zcHJpdGVGcmFtZS5uYW1lID09IG5hbWUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgUmVzTWFuYWdlci5Mb2FkUmVzKG5hbWUsIGNjLlNwcml0ZUZyYW1lLCAoZXJyb3I6IEVycm9yLCByZXM6IGNjLlNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgQ2xvZy5FcnJvcignQ2hhbmdlU3ByaXRlIEVycm9yISwgbmFtZTonICsgbmFtZSArIFwiLGVyclwiICsgSlNPTi5zdHJpbmdpZnkoZXJyb3IpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzZiA9IHJlcztcclxuICAgICAgICAgICAgaWYgKHNwcml0ZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgQ3JlYXRlQW5pbWF0aW9uQ2xpcChuYW1lOiBzdHJpbmcpOiBQcm9taXNlPGNjLkFuaW1hdGlvbkNsaXA+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChJc051bGxPckVtcHR5KG5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBDbG9nLkVycm9yKCdDcmVhdGVBbmltYXRpb25DbGlwIG5hbWUgaXMgRW1wdHkhJylcclxuICAgICAgICAgICAgICAgIHJlc29sdmUobnVsbCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKG5hbWUsIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyOiBFcnJvciwgc3ByaXRlRnJhbWVzOiBjYy5TcHJpdGVGcmFtZVtdLCB1cmxzOiBzdHJpbmdbXSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIENsb2cuRXJyb3IoJ0NyZWF0ZUFuaW1hdGlvbkNsaXAgRXJyb3IhLCBuYW1lOicgKyBuYW1lICsgXCIsZXJyXCIgKyBKU09OLnN0cmluZ2lmeShlcnIpKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgZnJhbWVzID0gW107XHJcbiAgICAgICAgICAgICAgICBmcmFtZXMucHVzaCguLi5zcHJpdGVGcmFtZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICAgICAgICAgIGZyYW1lcy5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEubmFtZSA9PSBiLm5hbWUgPyAwIDogYS5uYW1lIDwgYi5uYW1lID8gLTEgOiAxO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gaGFjayBjYy5BbmltYXRpb25DbGlwLmNyZWF0ZVdpdGhTcHJpdGVGcmFtZXMoc3ByaXRlRnJhbWVzLCBzYW1wbGUpXHJcbiAgICAgICAgICAgICAgICAvLyDlj4LnhadjcmVhdG9y54mI5pysMi4zLjNcclxuICAgICAgICAgICAgICAgIGxldCBjcmVhdGVXaXRoU3ByaXRlRnJhbWVzID0gZnVuY3Rpb24gKHNwcml0ZUZyYW1lczogY2MuU3ByaXRlRnJhbWVbXSwgc2FtcGxlOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgY2xpcCA9IG5ldyBjYy5BbmltYXRpb25DbGlwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xpcC5zYW1wbGUgPSBzYW1wbGUgfHwgY2xpcC5zYW1wbGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmcmFtZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZHVyYXRpb24gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gc3ByaXRlRnJhbWVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBzcHJpdGVGcmFtZXNbaV0ubmFtZS5sYXN0SW5kZXhPZignLScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGltZSA9IHBhcnNlSW50KHNwcml0ZUZyYW1lc1tpXS5uYW1lLnN1YnN0cihpbmRleCArIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZnJhbWVzW2ldID0geyBmcmFtZTogZHVyYXRpb24sIHZhbHVlOiBzcHJpdGVGcmFtZXNbaV0gfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gKz0gdGltZSAvIDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyDlpI3liLbmnIDlkI7kuIDluKfvvIzorqnmnIDlkI7kuIDluKfnmoTmjIHnu63ml7bpl7TmnInmhI/kuYlcclxuICAgICAgICAgICAgICAgICAgICBmcmFtZXNbc3ByaXRlRnJhbWVzLmxlbmd0aF0gPSB7IGZyYW1lOiBkdXJhdGlvbiwgdmFsdWU6IHNwcml0ZUZyYW1lc1tzcHJpdGVGcmFtZXMubGVuZ3RoIC0gMV0gfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgICAgICAgICAgICAgICAgIGNsaXAuX2R1cmF0aW9uID0gZHVyYXRpb247XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNsaXAuY3VydmVEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29tcG9uZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY2MuU3ByaXRlJzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbXBvbmVudCBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3Nwcml0ZUZyYW1lJzogZnJhbWVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2xpcDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyByZXNvbHZlKGNjLkFuaW1hdGlvbkNsaXAuY3JlYXRlV2l0aFNwcml0ZUZyYW1lcyhzcHJpdGVGcmFtZXMsIDMwKSk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGNyZWF0ZVdpdGhTcHJpdGVGcmFtZXMoc3ByaXRlRnJhbWVzLCAzMCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgKiDliqjmgIHliqDovb3pvpnpqqhcclxuICAgKiBAcGFyYW0gYW5pbWF0aW9uRGlzcGxheSAg6b6Z6aqo57uE5Lu2XHJcbiAgICogQHBhcmFtIG5hbWUgICAgICAgICAgICAgIOm+memqqOWcsOWdgFxyXG4gICAqIEBwYXJhbSBhcm1hdHVyZU5hbWUgICAgICBBcm1hdHVyZeWQjeensFxyXG4gICAqIEBwYXJhbSBhbmltTmFtZSAgICAgICAgICBBbmltYXRpb27lkI3np7BcclxuICAgKiBAcGFyYW0gcGxheVRpbWVzICAgICAgICAg5pKt5pS+5qyh5pWwIC0x5piv5qC55o2u6b6Z6aqo5paH5Lu2IDDkupTpmanlvqrnjq8gPjDmmK/mkq3mlL7mrKHmlbBcclxuICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZERyYWdvbkJvbmVzKGFuaW1hdGlvbkRpc3BsYXk6IGRyYWdvbkJvbmVzLkFybWF0dXJlRGlzcGxheSwgcGF0aDogc3RyaW5nLCBhcm1hdHVyZU5hbWU6IHN0cmluZywgYW5pbU5hbWU6IHN0cmluZywgcGxheVRpbWVzID0gMSk6IFByb21pc2U8Ym9vbGVhbj4geyAgLy/liqjmgIHliqDovb3pvpnpqqhcclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNsb3ZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKHBhdGgsIChlcnIsIGFzc2V0cykgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcnIgfHwgYXNzZXRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzbG92ZShmYWxzZSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgYXNzZXRzLmZvckVhY2goYXNzZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3NldCBpbnN0YW5jZW9mIGRyYWdvbkJvbmVzLkRyYWdvbkJvbmVzQXNzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGlzcGxheS5kcmFnb25Bc3NldCA9IGFzc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXQgaW5zdGFuY2VvZiBkcmFnb25Cb25lcy5EcmFnb25Cb25lc0F0bGFzQXNzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uRGlzcGxheS5kcmFnb25BdGxhc0Fzc2V0ID0gYXNzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uRGlzcGxheS5hcm1hdHVyZU5hbWUgPSBhcm1hdHVyZU5hbWU7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EaXNwbGF5LnBsYXlBbmltYXRpb24oYW5pbU5hbWUsIHBsYXlUaW1lcyk7XHJcbiAgICAgICAgICAgICAgICBhbmltYXRpb25EaXNwbGF5LmFkZEV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUsICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EaXNwbGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoZHJhZ29uQm9uZXMuRXZlbnRPYmplY3QuQ09NUExFVEUpXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzbG92ZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcblxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/entry/model/GameInfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5950fljA/dG75TtQiREAvUz', 'GameInfo');
// script/entry/model/GameInfo.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameInfo = /** @class */ (function () {
    function GameInfo() {
    }
    GameInfo.MainURL = "http://127.0.0.1:3650";
    return GameInfo;
}());
exports.GameInfo = GameInfo;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbnRyeVxcbW9kZWxcXEdhbWVJbmZvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7SUFBQTtJQUVBLENBQUM7SUFEaUIsZ0JBQU8sR0FBRyx1QkFBdUIsQ0FBQTtJQUNuRCxlQUFDO0NBRkQsQUFFQyxJQUFBO0FBRlksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNsYXNzIEdhbWVJbmZvIHtcbiAgICBwdWJsaWMgc3RhdGljIE1haW5VUkwgPSBcImh0dHA6Ly8xMjcuMC4wLjE6MzY1MFwiXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/commonUI/UITip.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a14dahZdVpPgYgm16gHs3WA', 'UITip');
// script/commonUI/UITip.ts

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
var UIBase_1 = require("../framework/ui/UIBase");
var UIManager_1 = require("../framework/ui/UIManager");
var UIEnum_1 = require("../framework/ui/UIEnum");
var UITip = /** @class */ (function (_super) {
    __extends(UITip, _super);
    function UITip() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PrefabName = "P_UITip";
        _this.HierarchyType = UIEnum_1.EnumUIHierarchy.Tip;
        return _this;
    }
    /**
     * 提供打开该界面的API静态方法,方便直接调用
     * @param content 文字内容
     * @param duration 秒
     */
    UITip.Info = function (content, duration) {
        if (content === void 0) { content = ''; }
        if (duration === void 0) { duration = UITip.DURATION_SHORT; }
        return __awaiter(this, void 0, void 0, function () {
            var toast;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, UIManager_1.UIManager.OpenUI(UITip)];
                    case 1:
                        toast = _a.sent();
                        toast.OnOpen(content, duration);
                        return [2 /*return*/];
                }
            });
        });
    };
    UITip.prototype.start = function () {
        this._content = cc.find("bg/Label", this.node).getComponent(cc.Label);
    };
    UITip.prototype.OnOpen = function (content, duration) {
        this._content.string = content;
        this.scheduleOnce(function () { UIManager_1.UIManager.CloseUI(UITip); }, duration);
    };
    UITip.DURATION_SHORT = 2.5; //s
    UITip.DURATION_LONG = 5;
    return UITip;
}(UIBase_1.UIBase));
exports.UITip = UITip;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxjb21tb25VSVxcVUlUaXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBZ0Q7QUFDaEQsdURBQXNEO0FBQ3RELGlEQUF5RDtBQUt6RDtJQUEyQix5QkFBTTtJQUFqQztRQUFBLHFFQTZCQztRQWRVLGdCQUFVLEdBQVcsU0FBUyxDQUFBO1FBQzlCLG1CQUFhLEdBQW9CLHdCQUFlLENBQUMsR0FBRyxDQUFDOztJQWFoRSxDQUFDO0lBeEJHOzs7O09BSUc7SUFDaUIsVUFBSSxHQUF4QixVQUF5QixPQUFvQixFQUFFLFFBQXVDO1FBQTdELHdCQUFBLEVBQUEsWUFBb0I7UUFBRSx5QkFBQSxFQUFBLFdBQW1CLEtBQUssQ0FBQyxjQUFjOzs7Ozs0QkFDdEUscUJBQU0scUJBQVMsQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLEVBQUE7O3dCQUFyQyxLQUFLLEdBQUcsU0FBc0M7d0JBQ2xELEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLFFBQVEsQ0FBQyxDQUFDOzs7OztLQUNuQztJQU9ELHFCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFFLENBQUM7SUFFTyxzQkFBTSxHQUFkLFVBQWUsT0FBZSxFQUFFLFFBQWdCO1FBQzVDLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUMvQixJQUFJLENBQUMsWUFBWSxDQUFDLGNBQVEscUJBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDckUsQ0FBQztJQXpCYSxvQkFBYyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUc7SUFDekIsbUJBQWEsR0FBRyxDQUFDLENBQUM7SUEwQnBDLFlBQUM7Q0E3QkQsQUE2QkMsQ0E3QjBCLGVBQU0sR0E2QmhDO0FBN0JZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVUlCYXNlIH0gZnJvbSBcIi4uL2ZyYW1ld29yay91aS9VSUJhc2VcIjtcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gXCIuLi9mcmFtZXdvcmsvdWkvVUlNYW5hZ2VyXCI7XG5pbXBvcnQgeyBFbnVtVUlIaWVyYXJjaHkgfSBmcm9tIFwiLi4vZnJhbWV3b3JrL3VpL1VJRW51bVwiO1xuXG5cblxuXG5leHBvcnQgY2xhc3MgVUlUaXAgZXh0ZW5kcyBVSUJhc2Uge1xuXG4gICAgcHVibGljIHN0YXRpYyBEVVJBVElPTl9TSE9SVCA9IDIuNTsgLy9zXG4gICAgcHVibGljIHN0YXRpYyBEVVJBVElPTl9MT05HID0gNTtcblxuICAgIC8qKlxuICAgICAqIOaPkOS+m+aJk+W8gOivpeeVjOmdoueahEFQSemdmeaAgeaWueazlSzmlrnkvr/nm7TmjqXosIPnlKhcbiAgICAgKiBAcGFyYW0gY29udGVudCDmloflrZflhoXlrrlcbiAgICAgKiBAcGFyYW0gZHVyYXRpb24g56eSXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBhc3luYyBJbmZvKGNvbnRlbnQ6IHN0cmluZyA9ICcnLCBkdXJhdGlvbjogbnVtYmVyID0gVUlUaXAuRFVSQVRJT05fU0hPUlQpIHtcbiAgICAgICAgbGV0IHRvYXN0ID0gYXdhaXQgVUlNYW5hZ2VyLk9wZW5VSShVSVRpcCkgYXMgVUlUaXA7XG4gICAgICAgIHRvYXN0Lk9uT3Blbihjb250ZW50LCBkdXJhdGlvbik7XG4gICAgfVxuXG4gICAgcHVibGljIFByZWZhYk5hbWU6IHN0cmluZyA9IFwiUF9VSVRpcFwiXG4gICAgcHVibGljIEhpZXJhcmNoeVR5cGU6IEVudW1VSUhpZXJhcmNoeSA9IEVudW1VSUhpZXJhcmNoeS5UaXA7XG5cbiAgICBwcml2YXRlIF9jb250ZW50OiBjYy5MYWJlbDtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLl9jb250ZW50ID0gY2MuZmluZChcImJnL0xhYmVsXCIsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIE9uT3Blbihjb250ZW50OiBzdHJpbmcsIGR1cmF0aW9uOiBudW1iZXIpIHtcbiAgICAgICAgdGhpcy5fY29udGVudC5zdHJpbmcgPSBjb250ZW50O1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7IFVJTWFuYWdlci5DbG9zZVVJKFVJVGlwKTsgfSwgZHVyYXRpb24pO1xuICAgIH1cblxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/battle/map/modle/EnumMap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13c57oQ/tlAM4F0BXB0qEWC', 'EnumMap');
// script/battle/map/modle/EnumMap.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumMapCell;
(function (EnumMapCell) {
    EnumMapCell[EnumMapCell["None"] = 0] = "None";
    EnumMapCell[EnumMapCell["Water"] = 1] = "Water";
    EnumMapCell[EnumMapCell["Flower"] = 2] = "Flower";
})(EnumMapCell = exports.EnumMapCell || (exports.EnumMapCell = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0bGVcXG1hcFxcbW9kbGVcXEVudW1NYXAudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHQSxJQUFZLFdBSVg7QUFKRCxXQUFZLFdBQVc7SUFDbkIsNkNBQVEsQ0FBQTtJQUNSLCtDQUFTLENBQUE7SUFDVCxpREFBVSxDQUFBO0FBQ2QsQ0FBQyxFQUpXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBSXRCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cblxuZXhwb3J0IGVudW0gRW51bU1hcENlbGwge1xuICAgIE5vbmUgPSAwLFxuICAgIFdhdGVyID0gMSxcbiAgICBGbG93ZXIgPSAyLFxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login/view/UILogin.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59192SDi5lEe53anQjOHb4D', 'UILogin');
// script/login/view/UILogin.ts

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
var UIBase_1 = require("../../framework/ui/UIBase");
var Clog_1 = require("../../framework/clog/Clog");
var UIEventCenter_1 = require("../../framework/util/UIEventCenter");
var UIManager_1 = require("../../framework/ui/UIManager");
var UILoginFast_1 = require("./UILoginFast");
var UILogin = /** @class */ (function (_super) {
    __extends(UILogin, _super);
    function UILogin() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PrefabName = 'PanelLogin';
        return _this;
    }
    UILogin.prototype.start = function () {
        UILogin.Instance = this;
        Clog_1.default.Trace(Clog_1.ClogKey.Login, 'UILogin start');
        this.InitRoot();
        this.InitEvent();
        this.Refresh();
    };
    //初始化各面板节点
    UILogin.prototype.InitRoot = function () {
        this._btnFastLogin = cc.find('BtnGroup/btnFastLogin', this.node).getComponent(cc.Button);
        this._btnGuestLogin = cc.find('BtnGroup/btnGuestLogin', this.node).getComponent(cc.Button);
    };
    //初始化各事件
    UILogin.prototype.InitEvent = function () {
        var _this = this;
        UIEventCenter_1.UIEventCenter.ButtonEvent(this._btnFastLogin, function () { return _this.OnBtnFastLoginClick(); });
        UIEventCenter_1.UIEventCenter.ButtonEvent(this._btnGuestLogin, function () { return _this.OnBtnGuestLoginClick(); });
    };
    //游客登录 >> 随机账号
    UILogin.prototype.OnBtnGuestLoginClick = function () {
    };
    UILogin.prototype.OnBtnFastLoginClick = function () {
        UIManager_1.UIManager.OpenUI(UILoginFast_1.UILoginFast);
    };
    UILogin.prototype.Refresh = function () {
        this.RefreshLoginBtns();
    };
    UILogin.prototype.RefreshLoginBtns = function () {
        this._btnFastLogin.node.active = CC_DEV ? true : false;
        this._btnGuestLogin.node.active = false;
    };
    return UILogin;
}(UIBase_1.UIBase));
exports.UILogin = UILogin;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcdmlld1xcVUlMb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBbUQ7QUFDbkQsa0RBQTBEO0FBRTFELG9FQUFtRTtBQUNuRSwwREFBeUQ7QUFDekQsNkNBQTRDO0FBRzVDO0lBQTZCLDJCQUFNO0lBQW5DO1FBQUEscUVBMkNDO1FBekNVLGdCQUFVLEdBQUcsWUFBWSxDQUFBOztJQXlDcEMsQ0FBQztJQXJDRyx1QkFBSyxHQUFMO1FBQ0ksT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDeEIsY0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFPLENBQUMsS0FBSyxFQUFFLGVBQWUsQ0FBQyxDQUFBO1FBQzFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxVQUFVO0lBQ0YsMEJBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDeEYsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUF3QixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO0lBQzlGLENBQUM7SUFFRCxRQUFRO0lBQ0EsMkJBQVMsR0FBakI7UUFBQSxpQkFHQztRQUZHLDZCQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxtQkFBbUIsRUFBRSxFQUExQixDQUEwQixDQUFDLENBQUE7UUFDL0UsNkJBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLG9CQUFvQixFQUFFLEVBQTNCLENBQTJCLENBQUMsQ0FBQTtJQUNyRixDQUFDO0lBRUQsY0FBYztJQUNOLHNDQUFvQixHQUE1QjtJQUVBLENBQUM7SUFFTyxxQ0FBbUIsR0FBM0I7UUFDSSxxQkFBUyxDQUFDLE1BQU0sQ0FBQyx5QkFBVyxDQUFDLENBQUE7SUFDakMsQ0FBQztJQUVPLHlCQUFPLEdBQWY7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztJQUM1QixDQUFDO0lBRU8sa0NBQWdCLEdBQXhCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFDdkQsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUM1QyxDQUFDO0lBQ0wsY0FBQztBQUFELENBM0NBLEFBMkNDLENBM0M0QixlQUFNLEdBMkNsQztBQTNDWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVJQmFzZSB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdWkvVUlCYXNlXCI7XG5pbXBvcnQgQ2xvZywgeyBDbG9nS2V5IH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9jbG9nL0Nsb2dcIjtcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvYXVkaW8vQXVkaW9NYW5hZ2VyXCI7XG5pbXBvcnQgeyBVSUV2ZW50Q2VudGVyIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay91dGlsL1VJRXZlbnRDZW50ZXJcIjtcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdWkvVUlNYW5hZ2VyXCI7XG5pbXBvcnQgeyBVSUxvZ2luRmFzdCB9IGZyb20gXCIuL1VJTG9naW5GYXN0XCI7XG5cblxuZXhwb3J0IGNsYXNzIFVJTG9naW4gZXh0ZW5kcyBVSUJhc2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IFVJTG9naW5cbiAgICBwdWJsaWMgUHJlZmFiTmFtZSA9ICdQYW5lbExvZ2luJ1xuICAgIHByaXZhdGUgX2J0bkZhc3RMb2dpbjogY2MuQnV0dG9uO1xuICAgIHByaXZhdGUgX2J0bkd1ZXN0TG9naW46IGNjLkJ1dHRvbjtcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICBVSUxvZ2luLkluc3RhbmNlID0gdGhpcztcbiAgICAgICAgQ2xvZy5UcmFjZShDbG9nS2V5LkxvZ2luLCAnVUlMb2dpbiBzdGFydCcpXG4gICAgICAgIHRoaXMuSW5pdFJvb3QoKTtcbiAgICAgICAgdGhpcy5Jbml0RXZlbnQoKTtcbiAgICAgICAgdGhpcy5SZWZyZXNoKCk7XG4gICAgfVxuXG4gICAgLy/liJ3lp4vljJblkITpnaLmnb/oioLngrlcbiAgICBwcml2YXRlIEluaXRSb290KCkge1xuICAgICAgICB0aGlzLl9idG5GYXN0TG9naW4gPSBjYy5maW5kKCdCdG5Hcm91cC9idG5GYXN0TG9naW4nLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXG4gICAgICAgIHRoaXMuX2J0bkd1ZXN0TG9naW4gPSBjYy5maW5kKCdCdG5Hcm91cC9idG5HdWVzdExvZ2luJywgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKVxuICAgIH1cblxuICAgIC8v5Yid5aeL5YyW5ZCE5LqL5Lu2XG4gICAgcHJpdmF0ZSBJbml0RXZlbnQoKSB7XG4gICAgICAgIFVJRXZlbnRDZW50ZXIuQnV0dG9uRXZlbnQodGhpcy5fYnRuRmFzdExvZ2luLCAoKSA9PiB0aGlzLk9uQnRuRmFzdExvZ2luQ2xpY2soKSlcbiAgICAgICAgVUlFdmVudENlbnRlci5CdXR0b25FdmVudCh0aGlzLl9idG5HdWVzdExvZ2luLCAoKSA9PiB0aGlzLk9uQnRuR3Vlc3RMb2dpbkNsaWNrKCkpXG4gICAgfVxuXG4gICAgLy/muLjlrqLnmbvlvZUgPj4g6ZqP5py66LSm5Y+3XG4gICAgcHJpdmF0ZSBPbkJ0bkd1ZXN0TG9naW5DbGljaygpIHtcblxuICAgIH1cblxuICAgIHByaXZhdGUgT25CdG5GYXN0TG9naW5DbGljaygpIHtcbiAgICAgICAgVUlNYW5hZ2VyLk9wZW5VSShVSUxvZ2luRmFzdClcbiAgICB9XG5cbiAgICBwcml2YXRlIFJlZnJlc2goKSB7XG4gICAgICAgIHRoaXMuUmVmcmVzaExvZ2luQnRucygpO1xuICAgIH1cblxuICAgIHByaXZhdGUgUmVmcmVzaExvZ2luQnRucygpIHtcbiAgICAgICAgdGhpcy5fYnRuRmFzdExvZ2luLm5vZGUuYWN0aXZlID0gQ0NfREVWID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICB0aGlzLl9idG5HdWVzdExvZ2luLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/entry/controller/EntryControler.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'afa17tlvplFwYylZJFiq+Xu', 'EntryControler');
// script/entry/controller/EntryControler.ts

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
var Clog_1 = require("../../framework/clog/Clog");
var UIManager_1 = require("../../framework/ui/UIManager");
var UILogin_1 = require("../../login/view/UILogin");
var AudioManager_1 = require("../../framework/audio/AudioManager");
var LoginController_1 = require("../../login/controller/LoginController");
var EntryControler = /** @class */ (function () {
    function EntryControler() {
    }
    EntryControler.Init = function () {
        cc.game.setFrameRate(30); //初始化帧率
        cc.debug.setDisplayStats(false); //浏览器左下角是否显示FPS
        this.InitGameEvent(); //初始化切入切出事件
        AudioManager_1.AudioManager.Init();
        Clog_1.default.Init(); //初始化日志工具
        this.onLogin();
    };
    EntryControler.onLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, LoginController_1.LoginController.HttpHello()];
                    case 1:
                        _a.sent();
                        UIManager_1.UIManager.OpenUI(UILogin_1.UILogin);
                        return [2 /*return*/];
                }
            });
        });
    };
    EntryControler.InitGameEvent = function () {
        var _this = this;
        cc.game.on(cc.game.EVENT_HIDE, function () { _this.OnGameHide(); });
        cc.game.on(cc.game.EVENT_SHOW, function () { _this.GameShow(); });
    };
    //从游戏返回后台
    EntryControler.OnGameHide = function () {
    };
    //从后台返回游戏
    EntryControler.GameShow = function () {
    };
    return EntryControler;
}());
exports.EntryControler = EntryControler;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbnRyeVxcY29udHJvbGxlclxcRW50cnlDb250cm9sZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUE2QztBQUM3QywwREFBeUQ7QUFDekQsb0RBQW1EO0FBQ25ELG1FQUFrRTtBQUNsRSwwRUFBeUU7QUFJekU7SUFBQTtJQStCQSxDQUFDO0lBN0JpQixtQkFBSSxHQUFsQjtRQUNJLEVBQUUsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxDQUFBLENBQWdCLE9BQU87UUFDL0MsRUFBRSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBUSxlQUFlO1FBQ3ZELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFtQixXQUFXO1FBQ25ELDJCQUFZLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDcEIsY0FBSSxDQUFDLElBQUksRUFBRSxDQUFDLENBQTRCLFNBQVM7UUFDakQsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFHb0Isc0JBQU8sR0FBNUI7Ozs7NEJBQ0kscUJBQU0saUNBQWUsQ0FBQyxTQUFTLEVBQUUsRUFBQTs7d0JBQWpDLFNBQWlDLENBQUM7d0JBQ2xDLHFCQUFTLENBQUMsTUFBTSxDQUFDLGlCQUFPLENBQUMsQ0FBQTs7Ozs7S0FDNUI7SUFFYyw0QkFBYSxHQUE1QjtRQUFBLGlCQUdDO1FBRkcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsY0FBUSxLQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3RCxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxjQUFRLEtBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQy9ELENBQUM7SUFFRCxTQUFTO0lBQ00seUJBQVUsR0FBekI7SUFFQSxDQUFDO0lBRUQsU0FBUztJQUNNLHVCQUFRLEdBQXZCO0lBRUEsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0EvQkEsQUErQkMsSUFBQTtBQS9CWSx3Q0FBYyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbG9nIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvY2xvZy9DbG9nXCI7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL1VJTWFuYWdlclwiO1xuaW1wb3J0IHsgVUlMb2dpbiB9IGZyb20gXCIuLi8uLi9sb2dpbi92aWV3L1VJTG9naW5cIjtcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvYXVkaW8vQXVkaW9NYW5hZ2VyXCI7XG5pbXBvcnQgeyBMb2dpbkNvbnRyb2xsZXIgfSBmcm9tIFwiLi4vLi4vbG9naW4vY29udHJvbGxlci9Mb2dpbkNvbnRyb2xsZXJcIjtcblxuXG5cbmV4cG9ydCBjbGFzcyBFbnRyeUNvbnRyb2xlciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIEluaXQoKSB7XG4gICAgICAgIGNjLmdhbWUuc2V0RnJhbWVSYXRlKDMwKSAgICAgICAgICAgICAgICAvL+WIneWni+WMluW4p+eOh1xuICAgICAgICBjYy5kZWJ1Zy5zZXREaXNwbGF5U3RhdHMoZmFsc2UpOyAgICAgICAgLy/mtY/op4jlmajlt6bkuIvop5LmmK/lkKbmmL7npLpGUFNcbiAgICAgICAgdGhpcy5Jbml0R2FtZUV2ZW50KCk7ICAgICAgICAgICAgICAgICAgIC8v5Yid5aeL5YyW5YiH5YWl5YiH5Ye65LqL5Lu2XG4gICAgICAgIEF1ZGlvTWFuYWdlci5Jbml0KCk7XG4gICAgICAgIENsb2cuSW5pdCgpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WIneWni+WMluaXpeW/l+W3peWFt1xuICAgICAgICB0aGlzLm9uTG9naW4oKTtcbiAgICB9XG5cblxuICAgIHByaXZhdGUgc3RhdGljIGFzeW5jIG9uTG9naW4oKSB7XG4gICAgICAgIGF3YWl0IExvZ2luQ29udHJvbGxlci5IdHRwSGVsbG8oKTtcbiAgICAgICAgVUlNYW5hZ2VyLk9wZW5VSShVSUxvZ2luKVxuICAgIH1cblxuICAgIHByaXZhdGUgc3RhdGljIEluaXRHYW1lRXZlbnQoKSB7XG4gICAgICAgIGNjLmdhbWUub24oY2MuZ2FtZS5FVkVOVF9ISURFLCAoKSA9PiB7IHRoaXMuT25HYW1lSGlkZSgpOyB9KTtcbiAgICAgICAgY2MuZ2FtZS5vbihjYy5nYW1lLkVWRU5UX1NIT1csICgpID0+IHsgdGhpcy5HYW1lU2hvdygpOyB9KTtcbiAgICB9XG5cbiAgICAvL+S7jua4uOaIj+i/lOWbnuWQjuWPsFxuICAgIHByaXZhdGUgc3RhdGljIE9uR2FtZUhpZGUoKSB7XG5cbiAgICB9XG5cbiAgICAvL+S7juWQjuWPsOi/lOWbnua4uOaIj1xuICAgIHByaXZhdGUgc3RhdGljIEdhbWVTaG93KCkge1xuXG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/audio/AudioManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fd4a35rgHVMQq7P6FqSIpbf', 'AudioManager');
// script/framework/audio/AudioManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtil_1 = require("../util/StringUtil");
var Clog_1 = require("../clog/Clog");
var LocalStorage_1 = require("../storage/LocalStorage");
var ResManager_1 = require("../res/ResManager");
var AudioManager = /** @class */ (function () {
    function AudioManager() {
    }
    //初始化
    AudioManager.Init = function () {
        this.EffectSoundList = new Map();
        cc.audioEngine.setMusicVolume(LocalStorage_1.LocalStorage.MusicVolume);
        cc.audioEngine.setEffectsVolume(LocalStorage_1.LocalStorage.SoundVolume);
    };
    //播放音乐 
    AudioManager.PlayMusic = function (name, isLoop, callBack) {
        if (isLoop === void 0) { isLoop = true; }
        if (callBack === void 0) { callBack = null; }
        if (StringUtil_1.IsNullOrEmpty(name)) {
            return;
        }
        ResManager_1.ResManager.LoadRes(name, cc.AudioClip, function (err, clip) {
            if (err) {
                Clog_1.default.Error("Load Music error! Music name= " + name + ",err:" + JSON.stringify(err));
                return;
            }
            var MusicId = cc.audioEngine.playMusic(clip, isLoop);
            cc.audioEngine.setFinishCallback(MusicId, function () {
                if (callBack) {
                    callBack();
                }
            });
            return;
        });
    };
    //关闭音乐
    AudioManager.StopMusic = function () {
        cc.audioEngine.stopMusic();
    };
    //播放音效
    AudioManager.PlaySound = function (name) {
        if (StringUtil_1.IsNullOrEmpty(name)) {
            return;
        }
        if (LocalStorage_1.LocalStorage.SoundVolume <= 0.01) {
            return;
        }
        // 获取播放分组
        var SoundList = this.EffectSoundList.get(name);
        if (!SoundList) {
            SoundList = new Array();
            this.EffectSoundList.set(name, SoundList);
        }
        // 每个声音播放最小间隔
        var now = new Date().getTime();
        if (SoundList.length > 0) {
            if (now - SoundList[0] < 150)
                return;
        }
        // 清除播放时间大于1000毫秒的声音
        while (SoundList.length > 0) {
            if (now - SoundList[0] > 500)
                SoundList.shift();
            else
                break;
        }
        // 同时存在声音数
        if (SoundList.length > 7) {
            return;
        }
        SoundList.push(now);
        ResManager_1.ResManager.LoadRes(name, cc.AudioClip, function (err, clip) {
            if (err) {
                Clog_1.default.Error("Load Music error! Music name= " + name + ",err:" + JSON.stringify(err));
                return;
            }
            cc.audioEngine.playEffect(clip, false);
            return;
        });
    };
    //通过声音Id关闭音效
    AudioManager.StopSound = function (audioId) {
        if (audioId < 0) {
            return;
        }
        cc.audioEngine.stopEffect(audioId);
    };
    // 关闭所有循环的音频
    AudioManager.StopAllSounds = function () {
        cc.audioEngine.stopAllEffects();
    };
    //设置音效大小
    AudioManager.SetSoundVolume = function (value) {
        cc.audioEngine.setEffectsVolume(value);
    };
    //设置音乐大小
    AudioManager.SetMusicVolume = function (value) {
        cc.audioEngine.setMusicVolume(value);
    };
    return AudioManager;
}());
exports.AudioManager = AudioManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXGF1ZGlvXFxBdWRpb01hbmFnZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxpREFBbUQ7QUFDbkQscUNBQWdDO0FBQ2hDLHdEQUF1RDtBQUN2RCxnREFBK0M7QUFHL0M7SUFBQTtJQTBHQSxDQUFDO0lBdEdHLEtBQUs7SUFDUyxpQkFBSSxHQUFsQjtRQUNJLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxHQUFHLEVBQXlCLENBQUM7UUFDeEQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUMsMkJBQVksQ0FBQyxXQUFXLENBQUMsQ0FBQTtRQUN2RCxFQUFFLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLDJCQUFZLENBQUMsV0FBVyxDQUFDLENBQUE7SUFDN0QsQ0FBQztJQUVELE9BQU87SUFDTyxzQkFBUyxHQUF2QixVQUF3QixJQUFZLEVBQUUsTUFBc0IsRUFBRSxRQUF5QjtRQUFqRCx1QkFBQSxFQUFBLGFBQXNCO1FBQUUseUJBQUEsRUFBQSxlQUF5QjtRQUNuRixJQUFJLDBCQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckIsT0FBTztTQUNWO1FBRUQsdUJBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLEVBQUUsQ0FBQyxTQUFTLEVBQUUsVUFBQyxHQUFVLEVBQUUsSUFBa0I7WUFDbEUsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsY0FBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsR0FBRyxJQUFJLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDcEYsT0FBTzthQUNWO1lBQ0QsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3JELEVBQUUsQ0FBQyxXQUFXLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFO2dCQUN0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clxuaW1wb3J0IHsgSXNOdWxsT3JFbXB0eSB9IGZyb20gXCIuLi91dGlsL1N0cmluZ1V0aWxcIjtcclxuaW1wb3J0IENsb2cgZnJvbSBcIi4uL2Nsb2cvQ2xvZ1wiO1xyXG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UgfSBmcm9tIFwiLi4vc3RvcmFnZS9Mb2NhbFN0b3JhZ2VcIjtcclxuaW1wb3J0IHsgUmVzTWFuYWdlciB9IGZyb20gXCIuLi9yZXMvUmVzTWFuYWdlclwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBdWRpb01hbmFnZXIge1xyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIEVmZmVjdFNvdW5kTGlzdDogTWFwPHN0cmluZywgQXJyYXk8bnVtYmVyPj47XHJcblxyXG4gICAgLy/liJ3lp4vljJZcclxuICAgIHB1YmxpYyBzdGF0aWMgSW5pdCgpIHtcclxuICAgICAgICB0aGlzLkVmZmVjdFNvdW5kTGlzdCA9IG5ldyBNYXA8c3RyaW5nLCBBcnJheTxudW1iZXI+PigpO1xyXG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldE11c2ljVm9sdW1lKExvY2FsU3RvcmFnZS5NdXNpY1ZvbHVtZSlcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKExvY2FsU3RvcmFnZS5Tb3VuZFZvbHVtZSlcclxuICAgIH1cclxuXHJcbiAgICAvL+aSreaUvumfs+S5kCBcclxuICAgIHB1YmxpYyBzdGF0aWMgUGxheU11c2ljKG5hbWU6IHN0cmluZywgaXNMb29wOiBib29sZWFuID0gdHJ1ZSwgY2FsbEJhY2s6IEZ1bmN0aW9uID0gbnVsbCkge1xyXG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KG5hbWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFJlc01hbmFnZXIuTG9hZFJlcyhuYW1lLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgQ2xvZy5FcnJvcihcIkxvYWQgTXVzaWMgZXJyb3IhIE11c2ljIG5hbWU9IFwiICsgbmFtZSArIFwiLGVycjpcIiArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBNdXNpY0lkID0gY2MuYXVkaW9FbmdpbmUucGxheU11c2ljKGNsaXAsIGlzTG9vcCk7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldEZpbmlzaENhbGxiYWNrKE11c2ljSWQsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsQmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxCYWNrKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8v5YWz6Zet6Z+z5LmQXHJcbiAgICBwdWJsaWMgc3RhdGljIFN0b3BNdXNpYygpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wTXVzaWMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aSreaUvumfs+aViFxyXG4gICAgcHVibGljIHN0YXRpYyBQbGF5U291bmQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKElzTnVsbE9yRW1wdHkobmFtZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTG9jYWxTdG9yYWdlLlNvdW5kVm9sdW1lIDw9IDAuMDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6I635Y+W5pKt5pS+5YiG57uEXHJcbiAgICAgICAgbGV0IFNvdW5kTGlzdCA9IHRoaXMuRWZmZWN0U291bmRMaXN0LmdldChuYW1lKTtcclxuICAgICAgICBpZiAoIVNvdW5kTGlzdCkge1xyXG4gICAgICAgICAgICBTb3VuZExpc3QgPSBuZXcgQXJyYXk8bnVtYmVyPigpO1xyXG4gICAgICAgICAgICB0aGlzLkVmZmVjdFNvdW5kTGlzdC5zZXQobmFtZSwgU291bmRMaXN0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOavj+S4quWjsOmfs+aSreaUvuacgOWwj+mXtOmalFxyXG4gICAgICAgIGxldCBub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgICAgICBpZiAoU291bmRMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKG5vdyAtIFNvdW5kTGlzdFswXSA8IDE1MClcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOa4hemZpOaSreaUvuaXtumXtOWkp+S6jjEwMDDmr6vnp5LnmoTlo7Dpn7NcclxuICAgICAgICB3aGlsZSAoU291bmRMaXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgaWYgKG5vdyAtIFNvdW5kTGlzdFswXSA+IDUwMClcclxuICAgICAgICAgICAgICAgIFNvdW5kTGlzdC5zaGlmdCgpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOWQjOaXtuWtmOWcqOWjsOmfs+aVsFxyXG4gICAgICAgIGlmIChTb3VuZExpc3QubGVuZ3RoID4gNykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBTb3VuZExpc3QucHVzaChub3cpO1xyXG4gICAgICAgIFJlc01hbmFnZXIuTG9hZFJlcyhuYW1lLCBjYy5BdWRpb0NsaXAsIChlcnI6IEVycm9yLCBjbGlwOiBjYy5BdWRpb0NsaXApID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgQ2xvZy5FcnJvcihcIkxvYWQgTXVzaWMgZXJyb3IhIE11c2ljIG5hbWU9IFwiICsgbmFtZSArIFwiLGVycjpcIiArIEpTT04uc3RyaW5naWZ5KGVycikpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QoY2xpcCwgZmFsc2UpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL+mAmui/h+WjsOmfs0lk5YWz6Zet6Z+z5pWIXHJcbiAgICBwdWJsaWMgc3RhdGljIFN0b3BTb3VuZChhdWRpb0lkOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoYXVkaW9JZCA8IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wRWZmZWN0KGF1ZGlvSWQpXHJcbiAgICB9XHJcblxyXG4gICAgLy8g5YWz6Zet5omA5pyJ5b6q546v55qE6Z+z6aKRXHJcbiAgICBwdWJsaWMgc3RhdGljIFN0b3BBbGxTb3VuZHMoKSB7XHJcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcEFsbEVmZmVjdHMoKVxyXG4gICAgfVxyXG5cclxuICAgIC8v6K6+572u6Z+z5pWI5aSn5bCPXHJcbiAgICBwdWJsaWMgc3RhdGljIFNldFNvdW5kVm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRFZmZlY3RzVm9sdW1lKHZhbHVlKVxyXG4gICAgfVxyXG5cclxuICAgIC8v6K6+572u6Z+z5LmQ5aSn5bCPXHJcbiAgICBwdWJsaWMgc3RhdGljIFNldE11c2ljVm9sdW1lKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRNdXNpY1ZvbHVtZSh2YWx1ZSlcclxuICAgIH1cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/entry/view/UIEntry.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '930575s9rRA3I32O6Z5t4XG', 'UIEntry');
// script/entry/view/UIEntry.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var UIManager_1 = require("../../framework/ui/UIManager");
var EntryControler_1 = require("../controller/EntryControler");
var ccclass = cc._decorator.ccclass;
var UIEntry = /** @class */ (function (_super) {
    __extends(UIEntry, _super);
    function UIEntry() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UIEntry.prototype.onLoad = function () {
        window.CC_ENGINE_VERSION = cc.ENGINE_VERSION;
    };
    UIEntry.prototype.start = function () {
        cc.game.addPersistRootNode(this.node); //设为驻留节点
        this.InitUIManager();
        EntryControler_1.EntryControler.Init();
    };
    //初始化UIManger
    UIEntry.prototype.InitUIManager = function () {
        var uiRoot = cc.find("UIManager", this.node);
        UIManager_1.UIManager.Init(uiRoot);
    };
    UIEntry = __decorate([
        ccclass
    ], UIEntry);
    return UIEntry;
}(cc.Component));
exports.UIEntry = UIEntry;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxlbnRyeVxcdmlld1xcVUlFbnRyeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSwwREFBeUQ7QUFDekQsK0RBQThEO0FBS3RELElBQUEsK0JBQU8sQ0FBbUI7QUFFbEM7SUFBNkIsMkJBQVk7SUFBekM7O0lBdUJBLENBQUM7SUFuQkcsd0JBQU0sR0FBTjtRQUNLLE1BQWMsQ0FBQyxpQkFBaUIsR0FBRyxFQUFFLENBQUMsY0FBYyxDQUFDO0lBQzFELENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksRUFBRSxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBRSxRQUFRO1FBQ2hELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQiwrQkFBYyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxhQUFhO0lBQ0wsK0JBQWEsR0FBckI7UUFDSSxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUE7UUFDNUMscUJBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQWxCUSxPQUFPO1FBRG5CLE9BQU87T0FDSyxPQUFPLENBdUJuQjtJQUFELGNBQUM7Q0F2QkQsQUF1QkMsQ0F2QjRCLEVBQUUsQ0FBQyxTQUFTLEdBdUJ4QztBQXZCWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbG9nIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvY2xvZy9DbG9nXCI7XHJcbmltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvYXVkaW8vQXVkaW9NYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFVJTWFuYWdlciB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdWkvVUlNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IEVudHJ5Q29udHJvbGVyIH0gZnJvbSBcIi4uL2NvbnRyb2xsZXIvRW50cnlDb250cm9sZXJcIjtcclxuXHJcblxyXG5cclxuXHJcbmNvbnN0IHsgY2NjbGFzcyB9ID0gY2MuX2RlY29yYXRvcjtcclxuQGNjY2xhc3NcclxuZXhwb3J0IGNsYXNzIFVJRW50cnkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgcHVibGljIEhpZGVUaW1lOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgU2hvd1RpbWU6IG51bWJlcjtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgKHdpbmRvdyBhcyBhbnkpLkNDX0VOR0lORV9WRVJTSU9OID0gY2MuRU5HSU5FX1ZFUlNJT047XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgY2MuZ2FtZS5hZGRQZXJzaXN0Um9vdE5vZGUodGhpcy5ub2RlKTsgIC8v6K6+5Li66am755WZ6IqC54K5XHJcbiAgICAgICAgdGhpcy5Jbml0VUlNYW5hZ2VyKCk7XHJcbiAgICAgICAgRW50cnlDb250cm9sZXIuSW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5Yid5aeL5YyWVUlNYW5nZXJcclxuICAgIHByaXZhdGUgSW5pdFVJTWFuYWdlcigpIHtcclxuICAgICAgICBsZXQgdWlSb290ID0gY2MuZmluZChcIlVJTWFuYWdlclwiLCB0aGlzLm5vZGUpXHJcbiAgICAgICAgVUlNYW5hZ2VyLkluaXQodWlSb290KTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgIFxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/net/Http.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1d792aKiZJJi4WTYqLDzn2O', 'Http');
// script/framework/net/Http.ts

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
var Clog_1 = require("../clog/Clog");
var Http = /** @class */ (function () {
    function Http() {
    }
    Http.Get = function (url) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                Clog_1.default.Green(Clog_1.ClogKey.Http, "get json from " + url + " status code :" + xhr.status);
                                switch (xhr.status) {
                                    case 200:
                                        {
                                            var msg = void 0;
                                            try {
                                                msg = JSON.parse(xhr.responseText);
                                            }
                                            catch (e) {
                                                reject({ message: '返回信息错误' });
                                            }
                                            Clog_1.default.Green(Clog_1.ClogKey.Http, "[XHR GET]\t\n[url]:" + url + "\t\n[msg]:" + JSON.stringify(msg));
                                            resolve(msg);
                                        }
                                        break;
                                    default:
                                        {
                                            reject(_this.getEror(xhr.status));
                                        }
                                        break;
                                }
                            }
                        };
                        xhr.open("GET", url, true);
                        xhr.send(null);
                    })];
            });
        });
    };
    Http.Post = function (url, data) {
        return __awaiter(this, void 0, Promise, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        var xhr = new XMLHttpRequest();
                        xhr.onreadystatechange = function () {
                            if (xhr.readyState == 4) {
                                switch (xhr.status) {
                                    case 200:
                                        {
                                            var msg = void 0;
                                            try {
                                                msg = JSON.parse(xhr.responseText);
                                            }
                                            catch (e) {
                                                reject({ message: '返回信息错误' });
                                            }
                                            Clog_1.default.Green(Clog_1.ClogKey.Net, "[XHR POST]\t\n[url]:" + url + "\t\n[msg]:" + JSON.stringify(msg));
                                            resolve(msg);
                                        }
                                        break;
                                    default:
                                        {
                                            reject(_this.getEror(xhr.status));
                                        }
                                        break;
                                }
                            }
                        };
                        xhr.open("POST", url, true);
                        xhr.setRequestHeader('content-type', "application/x-www-form-urlencoded");
                        if (data) {
                            var tempArr = [];
                            for (var key in data) {
                                if (data.hasOwnProperty(key) && data[key]) {
                                    tempArr.push(encodeURIComponent(key) + '=' + encodeURIComponent(data[key]));
                                }
                            }
                            var dataToSend = tempArr.join('&');
                            xhr.send(dataToSend);
                        }
                        else {
                            xhr.send(null);
                        }
                        Clog_1.default.Green(Clog_1.ClogKey.Net, "[XHR POST]\t\n[url]:" + url + "\t\n[post data]:" + JSON.stringify(data));
                    })];
            });
        });
    };
    Http.getEror = function (code) {
        if (code >= 500) {
            return { message: '服务器返回异常，请重试' };
        }
        if (code >= 400) {
            return { message: '错误的请求，请重试' };
        }
        if (code >= 300) {
            return { message: '登录状态可能已过期，请重试' };
        }
        return { message: '服务器返回数据错误，请重试' };
    };
    return Http;
}());
exports.default = Http;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXG5ldFxcSHR0cC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEscUNBQTZDO0FBTTdDO0lBQUE7SUFnR0EsQ0FBQztJQTlGdUIsUUFBRyxHQUF2QixVQUF3QixHQUFXO3VDQUFHLE9BQU87OztnQkFDekMsc0JBQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTt3QkFDL0IsSUFBSSxHQUFHLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQzt3QkFDL0IsR0FBRyxDQUFDLGtCQUFrQixHQUFHOzRCQUNyQixJQUFJLEdBQUcsQ0FBQyxVQUFVLElBQUksQ0FBQyxFQUFFO2dDQUNyQixjQUFJLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxJQUFJLEVBQUUsZ0JBQWdCLEdBQUcsR0FBRyxHQUFHLGdCQUFnQixHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQ0FDakYsUUFBUSxHQUFHLENBQUMsTUFBTSxFQUFFO29DQUNoQixLQUFLLEdBQUc7d0NBQ0o7NENBQ0ksSUFBSSxHQUFHLFNBQU0sQ0FBQzs0Q0FDZCxJQUFJO2dEQUNBLEdBQUcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQzs2Q0FDdEM7NENBQ0QsT0FBTyxDQUFDLEVBQUU7Z0RBQ04sTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLENBQUM7NkNBQ2pDOzRDQUNELGNBQUksQ0FBQyxLQUFLLENBQUMsY0FBTyxDQUFDLElBQUksRUFBRSxxQkFBcUIsR0FBRyxHQUFHLEdBQUcsWUFBWSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs0Q0FDM0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3lDQUNoQjt3Q0FDRCxNQUFNO29DQUNWO3dD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U0FDckM7UUFDRCxJQUFJLElBQUksSUFBSSxHQUFHLEVBQUU7WUFDYixPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxDQUFDO1NBQ25DO1FBQ0QsSUFBSSxJQUFJLElBQUksR0FBRyxFQUFFO1lBQ2IsT0FBTyxFQUFFLE9BQU8sRUFBRSxlQUFlLEVBQUUsQ0FBQztTQUN2QztRQUNELE9BQU8sRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVMLFdBQUM7QUFBRCxDQWhHQSxBQWdHQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENsb2csIHsgQ2xvZ0tleSB9IGZyb20gXCIuLi9jbG9nL0Nsb2dcIjtcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIdHRwIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgR2V0KHVybDogc3RyaW5nKTogUHJvbWlzZTxKU09OPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIENsb2cuR3JlZW4oQ2xvZ0tleS5IdHRwLCBcImdldCBqc29uIGZyb20gXCIgKyB1cmwgKyBcIiBzdGF0dXMgY29kZSA6XCIgKyB4aHIuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoICh4aHIuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDIwMDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtc2c6IEpTT047XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtc2cgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoeyBtZXNzYWdlOiAn6L+U5Zue5L+h5oGv6ZSZ6K+vJyB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDbG9nLkdyZWVuKENsb2dLZXkuSHR0cCwgXCJbWEhSIEdFVF1cXHRcXG5bdXJsXTpcIiArIHVybCArIFwiXFx0XFxuW21zZ106XCIgKyBKU09OLnN0cmluZ2lmeShtc2cpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QodGhpcy5nZXRFcm9yKHhoci5zdGF0dXMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xuICAgICAgICAgICAgeGhyLnNlbmQobnVsbCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgUG9zdCh1cmw6IHN0cmluZywgZGF0YTogYW55KTogUHJvbWlzZTxKU09OPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoeGhyLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAyMDA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbXNnOiBKU09OO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXNnID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHsgbWVzc2FnZTogJ+i/lOWbnuS/oeaBr+mUmeivrycgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ2xvZy5HcmVlbihDbG9nS2V5Lk5ldCwgXCJbWEhSIFBPU1RdXFx0XFxuW3VybF06XCIgKyB1cmwgKyBcIlxcdFxcblttc2ddOlwiICsgSlNPTi5zdHJpbmdpZnkobXNnKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHRoaXMuZ2V0RXJvcih4aHIuc3RhdHVzKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCwgdHJ1ZSk7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignY29udGVudC10eXBlJywgXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIik7XG5cbiAgICAgICAgICAgIGlmIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBBcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGRhdGFba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEFyci5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChrZXkpICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGRhdGFba2V5XSkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBkYXRhVG9TZW5kID0gdGVtcEFyci5qb2luKCcmJyk7XG4gICAgICAgICAgICAgICAgeGhyLnNlbmQoZGF0YVRvU2VuZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChudWxsKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQ2xvZy5HcmVlbihDbG9nS2V5Lk5ldCwgXCJbWEhSIFBPU1RdXFx0XFxuW3VybF06XCIgKyB1cmwgKyBcIlxcdFxcbltwb3N0IGRhdGFdOlwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBnZXRFcm9yKGNvZGU6IG51bWJlcikge1xuICAgICAgICBpZiAoY29kZSA+PSA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiB7IG1lc3NhZ2U6ICfmnI3liqHlmajov5Tlm57lvILluLjvvIzor7fph43or5UnIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvZGUgPj0gNDAwKSB7XG4gICAgICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAn6ZSZ6K+v55qE6K+35rGC77yM6K+36YeN6K+VJyB9O1xuICAgICAgICB9XG4gICAgICAgIGlmIChjb2RlID49IDMwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogJ+eZu+W9leeKtuaAgeWPr+iDveW3sui/h+acn++8jOivt+mHjeivlScgfTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiAn5pyN5Yqh5Zmo6L+U5Zue5pWw5o2u6ZSZ6K+v77yM6K+36YeN6K+VJyB9O1xuICAgIH1cblxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/res/ResPath.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e30b6inyphM37na0RvFzohC', 'ResPath');
// script/framework/res/ResPath.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResPath = {
    P_UIMap: "prefab/map/P_UIMap",
    P_UITip: "prefab/common/P_UITip",
    PanelLogin: "prefab/login/PanelLogin",
    PanelLoginFast: "prefab/login/loginFast/PanelLoginFast",
    PanelLoginFastRegister: "prefab/login/loginFast/PanelLoginFastRegister",
    S_Button: "sound/S_Button",
    S_OpenUI: "sound/S_OpenUI",
    T_Com_Toast: "texture/common/T_Com_Toast",
    T_M10: "texture/map/style1/T_M10",
    T_M11: "texture/map/style1/T_M11",
    T_M1200: "texture/map/style1/T_M1200",
    T_M1201: "texture/map/style1/T_M1201",
    T_M1202: "texture/map/style1/T_M1202",
    T_M1203: "texture/map/style1/T_M1203",
    T_M1204: "texture/map/style1/T_M1204",
    T_M1205: "texture/map/style1/T_M1205",
    T_M1206: "texture/map/style1/T_M1206",
    T_M1207: "texture/map/style1/T_M1207",
    T_M1208: "texture/map/style1/T_M1208",
    T_M1209: "texture/map/style1/T_M1209",
    T_M1301: "texture/map/style1/T_M1301",
    T_M1302: "texture/map/style1/T_M1302",
    T_M1303: "texture/map/style1/T_M1303",
    T_M1401: "texture/map/style1/T_M1401",
    T_M1402: "texture/map/style1/T_M1402",
    T_M1403: "texture/map/style1/T_M1403",
    T_M1404: "texture/map/style1/T_M1404",
    T_M1801: "texture/map/style1/T_M1801",
    T_M1802: "texture/map/style1/T_M1802",
    T_M1803: "texture/map/style1/T_M1803",
    T_M1804: "texture/map/style1/T_M1804",
    T_M1901: "texture/map/style1/T_M1901",
    T_M1902: "texture/map/style1/T_M1902",
    T_M1903: "texture/map/style1/T_M1903",
    T_M1904: "texture/map/style1/T_M1904",
    T_M1906: "texture/map/style1/T_M1906",
    T_M1907: "texture/map/style1/T_M1907",
    T_M1908: "texture/map/style1/T_M1908",
    T_M1909: "texture/map/style1/T_M1909",
    border: "texture/map/style1/border",
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHJlc1xcUmVzUGF0aC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFXLFFBQUEsT0FBTyxHQUFHO0lBQ3BCLE9BQU8sRUFBRyxvQkFBb0I7SUFDOUIsT0FBTyxFQUFHLHVCQUF1QjtJQUNqQyxVQUFVLEVBQUcseUJBQXlCO0lBQ3RDLGNBQWMsRUFBRyx1Q0FBdUM7SUFDeEQsc0JBQXNCLEVBQUcsK0NBQStDO0lBQ3hFLFFBQVEsRUFBRyxnQkFBZ0I7SUFDM0IsUUFBUSxFQUFHLGdCQUFnQjtJQUMzQixXQUFXLEVBQUcsNEJBQTRCO0lBQzFDLEtBQUssRUFBRywwQkFBMEI7SUFDbEMsS0FBSyxFQUFHLDBCQUEwQjtJQUNsQyxPQUFPLEVBQUcsNEJBQTRCO0lBQ3RDLE9BQU8sRUFBRyw0QkFBNEI7SUFDdEMsT0FBTyxFQUFHLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUcsNEJBQTRCO0lBQ3RDLE9BQU8sRUFBRyw0QkFBNEI7SUFDdEMsT0FBTyxFQUFHLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUcsNEJBQTRCO0lBQ3RDLE9BQU8sRUFBRyw0QkFBNEI7SUFDdEMsT0FBTyxFQUFHLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUcsNEJBQTRCO0lBQ3RDLE9BQU8sRUFBRyw0QkFBNEI7SUFDdEMsT0FBTyxFQUFHLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUcsNEJBQTRCO0lBQ3RDLE9BQU8sRUFBRyw0QkFBNEI7SUFDdEMsT0FBTyxFQUFHLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUcsNEJBQTRCO0lBQ3RDLE9BQU8sRUFBRyw0QkFBNEI7SUFDdEMsT0FBTyxFQUFHLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUcsNEJBQTRCO0lBQ3RDLE9BQU8sRUFBRyw0QkFBNEI7SUFDdEMsT0FBTyxFQUFHLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUcsNEJBQTRCO0lBQ3RDLE9BQU8sRUFBRyw0QkFBNEI7SUFDdEMsT0FBTyxFQUFHLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUcsNEJBQTRCO0lBQ3RDLE9BQU8sRUFBRyw0QkFBNEI7SUFDdEMsT0FBTyxFQUFHLDRCQUE0QjtJQUN0QyxPQUFPLEVBQUcsNEJBQTRCO0lBQ3RDLE9BQU8sRUFBRyw0QkFBNEI7SUFDdEMsTUFBTSxFQUFHLDJCQUEyQjtDQUNwQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGxldCBSZXNQYXRoID0ge1xyXG5cdFBfVUlNYXAgOiBcInByZWZhYi9tYXAvUF9VSU1hcFwiLFxyXG5cdFBfVUlUaXAgOiBcInByZWZhYi9jb21tb24vUF9VSVRpcFwiLFxyXG5cdFBhbmVsTG9naW4gOiBcInByZWZhYi9sb2dpbi9QYW5lbExvZ2luXCIsXHJcblx0UGFuZWxMb2dpbkZhc3QgOiBcInByZWZhYi9sb2dpbi9sb2dpbkZhc3QvUGFuZWxMb2dpbkZhc3RcIixcclxuXHRQYW5lbExvZ2luRmFzdFJlZ2lzdGVyIDogXCJwcmVmYWIvbG9naW4vbG9naW5GYXN0L1BhbmVsTG9naW5GYXN0UmVnaXN0ZXJcIixcclxuXHRTX0J1dHRvbiA6IFwic291bmQvU19CdXR0b25cIixcclxuXHRTX09wZW5VSSA6IFwic291bmQvU19PcGVuVUlcIixcclxuXHRUX0NvbV9Ub2FzdCA6IFwidGV4dHVyZS9jb21tb24vVF9Db21fVG9hc3RcIixcclxuXHRUX00xMCA6IFwidGV4dHVyZS9tYXAvc3R5bGUxL1RfTTEwXCIsXHJcblx0VF9NMTEgOiBcInRleHR1cmUvbWFwL3N0eWxlMS9UX00xMVwiLFxyXG5cdFRfTTEyMDAgOiBcInRleHR1cmUvbWFwL3N0eWxlMS9UX00xMjAwXCIsXHJcblx0VF9NMTIwMSA6IFwidGV4dHVyZS9tYXAvc3R5bGUxL1RfTTEyMDFcIixcclxuXHRUX00xMjAyIDogXCJ0ZXh0dXJlL21hcC9zdHlsZTEvVF9NMTIwMlwiLFxyXG5cdFRfTTEyMDMgOiBcInRleHR1cmUvbWFwL3N0eWxlMS9UX00xMjAzXCIsXHJcblx0VF9NMTIwNCA6IFwidGV4dHVyZS9tYXAvc3R5bGUxL1RfTTEyMDRcIixcclxuXHRUX00xMjA1IDogXCJ0ZXh0dXJlL21hcC9zdHlsZTEvVF9NMTIwNVwiLFxyXG5cdFRfTTEyMDYgOiBcInRleHR1cmUvbWFwL3N0eWxlMS9UX00xMjA2XCIsXHJcblx0VF9NMTIwNyA6IFwidGV4dHVyZS9tYXAvc3R5bGUxL1RfTTEyMDdcIixcclxuXHRUX00xMjA4IDogXCJ0ZXh0dXJlL21hcC9zdHlsZTEvVF9NMTIwOFwiLFxyXG5cdFRfTTEyMDkgOiBcInRleHR1cmUvbWFwL3N0eWxlMS9UX00xMjA5XCIsXHJcblx0VF9NMTMwMSA6IFwidGV4dHVyZS9tYXAvc3R5bGUxL1RfTTEzMDFcIixcclxuXHRUX00xMzAyIDogXCJ0ZXh0dXJlL21hcC9zdHlsZTEvVF9NMTMwMlwiLFxyXG5cdFRfTTEzMDMgOiBcInRleHR1cmUvbWFwL3N0eWxlMS9UX00xMzAzXCIsXHJcblx0VF9NMTQwMSA6IFwidGV4dHVyZS9tYXAvc3R5bGUxL1RfTTE0MDFcIixcclxuXHRUX00xNDAyIDogXCJ0ZXh0dXJlL21hcC9zdHlsZTEvVF9NMTQwMlwiLFxyXG5cdFRfTTE0MDMgOiBcInRleHR1cmUvbWFwL3N0eWxlMS9UX00xNDAzXCIsXHJcblx0VF9NMTQwNCA6IFwidGV4dHVyZS9tYXAvc3R5bGUxL1RfTTE0MDRcIixcclxuXHRUX00xODAxIDogXCJ0ZXh0dXJlL21hcC9zdHlsZTEvVF9NMTgwMVwiLFxyXG5cdFRfTTE4MDIgOiBcInRleHR1cmUvbWFwL3N0eWxlMS9UX00xODAyXCIsXHJcblx0VF9NMTgwMyA6IFwidGV4dHVyZS9tYXAvc3R5bGUxL1RfTTE4MDNcIixcclxuXHRUX00xODA0IDogXCJ0ZXh0dXJlL21hcC9zdHlsZTEvVF9NMTgwNFwiLFxyXG5cdFRfTTE5MDEgOiBcInRleHR1cmUvbWFwL3N0eWxlMS9UX00xOTAxXCIsXHJcblx0VF9NMTkwMiA6IFwidGV4dHVyZS9tYXAvc3R5bGUxL1RfTTE5MDJcIixcclxuXHRUX00xOTAzIDogXCJ0ZXh0dXJlL21hcC9zdHlsZTEvVF9NMTkwM1wiLFxyXG5cdFRfTTE5MDQgOiBcInRleHR1cmUvbWFwL3N0eWxlMS9UX00xOTA0XCIsXHJcblx0VF9NMTkwNiA6IFwidGV4dHVyZS9tYXAvc3R5bGUxL1RfTTE5MDZcIixcclxuXHRUX00xOTA3IDogXCJ0ZXh0dXJlL21hcC9zdHlsZTEvVF9NMTkwN1wiLFxyXG5cdFRfTTE5MDggOiBcInRleHR1cmUvbWFwL3N0eWxlMS9UX00xOTA4XCIsXHJcblx0VF9NMTkwOSA6IFwidGV4dHVyZS9tYXAvc3R5bGUxL1RfTTE5MDlcIixcclxuXHRib3JkZXIgOiBcInRleHR1cmUvbWFwL3N0eWxlMS9ib3JkZXJcIixcclxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/util/StringUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aeeb9w2CrNGVKIuYI7PTbWB', 'StringUtil');
// script/framework/util/StringUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//校验地址是否为http
exports.CheckNetUrl = function (httpUrl) {
    var isHttp = /^http[s]*:\/\//;
    return isHttp.test(httpUrl);
};
//判断字符是否为空
exports.IsNullOrEmpty = function (str) {
    return str == null || str === "";
};
//打印map
exports.MapToString = function (map) {
    return JSON.stringify(Array.from(map.entries()).reduce(function (o, _a) {
        var key = _a[0], value = _a[1];
        o[key] = value;
        return o;
    }, {}));
};
//限制为n个字符，超过的显示...
exports.StringLimit = function (str, n) {
    var strLength = 0;
    var cutIndex = 0;
    for (var i = 0; i < str.length; i++) {
        if (strLength >= n && cutIndex == 0) {
            cutIndex = i;
        }
        if (escape(str[i]).indexOf("%u") < 0) //不是中文
         {
            strLength += 1;
        }
        else //中文
         {
            strLength += 2;
        }
    }
    //如果字符长度小于截取长度，直接返回
    if (strLength <= n) {
        return str;
    }
    var finalStr = str.slice(0, cutIndex) + '...';
    return finalStr;
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHV0aWxcXFN0cmluZ1V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxhQUFhO0FBQ0YsUUFBQSxXQUFXLEdBQUcsVUFBQyxPQUFlO0lBQ3JDLElBQUksTUFBTSxHQUFHLGdCQUFnQixDQUFDO0lBQzlCLE9BQU8sTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtBQUMvQixDQUFDLENBQUE7QUFFRCxVQUFVO0FBQ0MsUUFBQSxhQUFhLEdBQUcsVUFBQyxHQUFXO0lBQ25DLE9BQU8sR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEtBQUssRUFBRSxDQUFBO0FBQ3BDLENBQUMsQ0FBQTtBQUVELE9BQU87QUFDSSxRQUFBLFdBQVcsR0FBRyxVQUFDLEdBQWtCO0lBQ3hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxFQUFZO1lBQVgsV0FBRyxFQUFFLGFBQUs7UUFBUSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO1FBQUMsT0FBTyxDQUFDLENBQUM7SUFBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQTtBQUNuSCxDQUFDLENBQUE7QUFFRCxrQkFBa0I7QUFDUCxRQUFBLFdBQVcsR0FBRyxVQUFDLEdBQVcsRUFBRSxDQUFTO0lBQzVDLElBQUksU0FBUyxHQUFHLENBQUMsQ0FBQztJQUNsQixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDakIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7UUFDakMsSUFBSSxTQUFTLElBQUksQ0FBQyxJQUFJLFFBQVEsSUFBSSxDQUFDLEVBQUU7WUFDakMsUUFBUSxHQUFHLENBQUMsQ0FBQztTQUNoQjtRQUNELElBQUksTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsTUFBTTtTQUM1QztZQUNJLFNBQVMsSUFBSSxDQUFDLENBQUM7U0FDbEI7YUFDSSxJQUFJO1NBQ1Q7WUFDSSxTQUFTLElBQUksQ0FBQyxDQUFDO1NBQ2xCO0tBQ0o7SUFFRCxtQkFBbUI7SUFDbkIsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFO1FBQ2hCLE9BQU8sR0FBRyxDQUFBO0tBQ2I7SUFFRCxJQUFJLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxRQUFRLENBQUMsR0FBRyxLQUFLLENBQUM7SUFDOUMsT0FBTyxRQUFRLENBQUE7QUFDbkIsQ0FBQyxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8v5qCh6aqM5Zyw5Z2A5piv5ZCm5Li6aHR0cFxyXG5leHBvcnQgbGV0IENoZWNrTmV0VXJsID0gKGh0dHBVcmw6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgbGV0IGlzSHR0cCA9IC9eaHR0cFtzXSo6XFwvXFwvLztcclxuICAgIHJldHVybiBpc0h0dHAudGVzdChodHRwVXJsKVxyXG59XHJcblxyXG4vL+WIpOaWreWtl+espuaYr+WQpuS4uuepulxyXG5leHBvcnQgbGV0IElzTnVsbE9yRW1wdHkgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICAgIHJldHVybiBzdHIgPT0gbnVsbCB8fCBzdHIgPT09IFwiXCJcclxufVxyXG5cclxuLy/miZPljbBtYXBcclxuZXhwb3J0IGxldCBNYXBUb1N0cmluZyA9IChtYXA6IE1hcDxhbnksIGFueT4pOiBzdHJpbmcgPT4ge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KEFycmF5LmZyb20obWFwLmVudHJpZXMoKSkucmVkdWNlKChvLCBba2V5LCB2YWx1ZV0pID0+IHsgb1trZXldID0gdmFsdWU7IHJldHVybiBvOyB9LCB7fSkpXHJcbn1cclxuXHJcbi8v6ZmQ5Yi25Li6buS4quWtl+espu+8jOi2hei/h+eahOaYvuekui4uLlxyXG5leHBvcnQgbGV0IFN0cmluZ0xpbWl0ID0gKHN0cjogc3RyaW5nLCBuOiBudW1iZXIpOiBzdHJpbmcgPT4ge1xyXG4gICAgdmFyIHN0ckxlbmd0aCA9IDA7XHJcbiAgICB2YXIgY3V0SW5kZXggPSAwO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoc3RyTGVuZ3RoID49IG4gJiYgY3V0SW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBjdXRJbmRleCA9IGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlc2NhcGUoc3RyW2ldKS5pbmRleE9mKFwiJXVcIikgPCAwKSAvL+S4jeaYr+S4reaWh1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgc3RyTGVuZ3RoICs9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgLy/kuK3mlodcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHN0ckxlbmd0aCArPSAyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+WmguaenOWtl+espumVv+W6puWwj+S6juaIquWPlumVv+W6pu+8jOebtOaOpei/lOWbnlxyXG4gICAgaWYgKHN0ckxlbmd0aCA8PSBuKSB7XHJcbiAgICAgICAgcmV0dXJuIHN0clxyXG4gICAgfVxyXG5cclxuICAgIHZhciBmaW5hbFN0ciA9IHN0ci5zbGljZSgwLCBjdXRJbmRleCkgKyAnLi4uJztcclxuICAgIHJldHVybiBmaW5hbFN0clxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/storage/LocalStorage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '91536RvYPtIr5BEXb21Ae3j', 'LocalStorage');
// script/framework/storage/LocalStorage.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AudioManager_1 = require("../audio/AudioManager");
var Clog_1 = require("../clog/Clog");
var StringUtil_1 = require("../util/StringUtil");
var LocalStorage = /** @class */ (function () {
    function LocalStorage() {
    }
    Object.defineProperty(LocalStorage, "SoundVolume", {
        get: function () {
            if (this._soundVolume == null)
                this._soundVolume = LocalStorageUtil.GetNumber('SoundVolume', 1);
            return this._soundVolume;
        },
        set: function (value) {
            this._soundVolume = value;
            LocalStorageUtil.SetNumber('SoundVolume', this._soundVolume);
            AudioManager_1.AudioManager.SetSoundVolume(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LocalStorage, "MusicVolume", {
        get: function () {
            if (this.musicVolume == null)
                this.musicVolume = LocalStorageUtil.GetNumber('MusicVolume', 1);
            return this.musicVolume;
        },
        set: function (value) {
            this.musicVolume = value;
            LocalStorageUtil.SetNumber('MusicVolume', this.musicVolume);
            AudioManager_1.AudioManager.SetMusicVolume(value);
        },
        enumerable: true,
        configurable: true
    });
    //声音音量
    LocalStorage._soundVolume = null;
    //音乐音量
    LocalStorage.musicVolume = null;
    return LocalStorage;
}());
exports.LocalStorage = LocalStorage;
var LocalStorageUtil = /** @class */ (function () {
    function LocalStorageUtil() {
    }
    LocalStorageUtil.SetString = function (key, stringValue) {
        cc.sys.localStorage.setItem(key, stringValue);
    };
    LocalStorageUtil.GetString = function (key, defaultValue) {
        var str = cc.sys.localStorage.getItem(key);
        if (str != null) {
            return str;
        }
        if (str == null && defaultValue != null) {
            return defaultValue;
        }
        return null;
    };
    LocalStorageUtil.SetBool = function (key, boolValue) {
        if (boolValue) {
            cc.sys.localStorage.setItem(key, 'true');
        }
        else {
            cc.sys.localStorage.setItem(key, 'false');
        }
    };
    LocalStorageUtil.GetBool = function (key, defaultValue) {
        var str = cc.sys.localStorage.getItem(key);
        if (str == 'true') {
            return true;
        }
        if (str == 'false') {
            return false;
        }
        if (StringUtil_1.IsNullOrEmpty(str) && defaultValue != null) {
            return defaultValue;
        }
        if (StringUtil_1.IsNullOrEmpty(str) && defaultValue == null) {
            return false;
        }
    };
    LocalStorageUtil.SetNumber = function (key, numValue) {
        if (numValue != null) {
            cc.sys.localStorage.setItem(key, numValue);
        }
    };
    LocalStorageUtil.GetNumber = function (key, defaultValue) {
        var value = cc.sys.localStorage.getItem(key);
        if (value == null && defaultValue != null) {
            Clog_1.default.Orange(Clog_1.ClogKey.LocalStorage, 'LocalStorage get Number is null or empty ,return defult false!');
            return defaultValue;
        }
        if (value == null && defaultValue == null) {
            Clog_1.default.Orange(Clog_1.ClogKey.LocalStorage, 'LocalStorage get Number is null ,defult is null, return -1!');
            return -1;
        }
        var v = Number(value);
        return isNaN(v) ? defaultValue : v;
    };
    return LocalStorageUtil;
}());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHN0b3JhZ2VcXExvY2FsU3RvcmFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNEQUFxRDtBQUVyRCxxQ0FBNkM7QUFDN0MsaURBQW1EO0FBRW5EO0lBQUE7SUE0QkEsQ0FBQztJQXhCRyxzQkFBa0IsMkJBQVc7YUFBN0I7WUFDSSxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSTtnQkFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQyxDQUFBO1lBQ3BFLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztRQUM3QixDQUFDO2FBQ0QsVUFBOEIsS0FBYTtZQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQTtZQUN6QixnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQTtZQUM1RCwyQkFBWSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxDQUFDOzs7T0FMQTtJQVNELHNCQUFrQiwyQkFBVzthQUE3QjtZQUNJLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJO2dCQUN4QixJQUFJLENBQUMsV0FBVyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLENBQUE7WUFDbkUsT0FBTyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQzVCLENBQUM7YUFDRCxVQUE4QixLQUFhO1lBQ3ZDLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFBO1lBQ3hCLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQzNELDJCQUFZLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7OztPQUxBO0lBbkJELE1BQU07SUFDUyx5QkFB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QUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQTdEQSxBQTZEQyxJQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSBcIi4uL2F1ZGlvL0F1ZGlvTWFuYWdlclwiO1xyXG5cclxuaW1wb3J0IENsb2csIHsgQ2xvZ0tleSB9IGZyb20gXCIuLi9jbG9nL0Nsb2dcIjtcclxuaW1wb3J0IHsgSXNOdWxsT3JFbXB0eSB9IGZyb20gXCIuLi91dGlsL1N0cmluZ1V0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2Uge1xyXG5cclxuICAgIC8v5aOw6Z+z6Z+z6YePXHJcbiAgICBwcml2YXRlIHN0YXRpYyBfc291bmRWb2x1bWU6IG51bWJlciA9IG51bGw7XHJcbiAgICBwdWJsaWMgc3RhdGljIGdldCBTb3VuZFZvbHVtZSgpOiBudW1iZXIge1xyXG4gICAgICAgIGlmICh0aGlzLl9zb3VuZFZvbHVtZSA9PSBudWxsKVxyXG4gICAgICAgICAgICB0aGlzLl9zb3VuZFZvbHVtZSA9IExvY2FsU3RvcmFnZVV0aWwuR2V0TnVtYmVyKCdTb3VuZFZvbHVtZScsIDEpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NvdW5kVm9sdW1lO1xyXG4gICAgfVxyXG4gICAgcHVibGljIHN0YXRpYyBzZXQgU291bmRWb2x1bWUodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NvdW5kVm9sdW1lID0gdmFsdWVcclxuICAgICAgICBMb2NhbFN0b3JhZ2VVdGlsLlNldE51bWJlcignU291bmRWb2x1bWUnLCB0aGlzLl9zb3VuZFZvbHVtZSlcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2V0U291bmRWb2x1bWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v6Z+z5LmQ6Z+z6YePXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtdXNpY1ZvbHVtZTogbnVtYmVyID0gbnVsbDtcclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0IE11c2ljVm9sdW1lKCk6IG51bWJlciB7XHJcbiAgICAgICAgaWYgKHRoaXMubXVzaWNWb2x1bWUgPT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5tdXNpY1ZvbHVtZSA9IExvY2FsU3RvcmFnZVV0aWwuR2V0TnVtYmVyKCdNdXNpY1ZvbHVtZScsIDEpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMubXVzaWNWb2x1bWU7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc3RhdGljIHNldCBNdXNpY1ZvbHVtZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5tdXNpY1ZvbHVtZSA9IHZhbHVlXHJcbiAgICAgICAgTG9jYWxTdG9yYWdlVXRpbC5TZXROdW1iZXIoJ011c2ljVm9sdW1lJywgdGhpcy5tdXNpY1ZvbHVtZSlcclxuICAgICAgICBBdWRpb01hbmFnZXIuU2V0TXVzaWNWb2x1bWUodmFsdWUpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbmNsYXNzIExvY2FsU3RvcmFnZVV0aWwge1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgU2V0U3RyaW5nKGtleTogc3RyaW5nLCBzdHJpbmdWYWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgc3RyaW5nVmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBHZXRTdHJpbmcoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IHN0cmluZykge1xyXG4gICAgICAgIHZhciBzdHIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxyXG4gICAgICAgIGlmIChzdHIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyID09IG51bGwgJiYgZGVmYXVsdFZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBTZXRCb29sKGtleTogc3RyaW5nLCBib29sVmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoYm9vbFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksICd0cnVlJylcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksICdmYWxzZScpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgR2V0Qm9vbChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYm9vbGVhbik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHZhciBzdHIgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxyXG4gICAgICAgIGlmIChzdHIgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc3RyID09ICdmYWxzZScpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoSXNOdWxsT3JFbXB0eShzdHIpICYmIGRlZmF1bHRWYWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KHN0cikgJiYgZGVmYXVsdFZhbHVlID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFNldE51bWJlcihrZXk6IHN0cmluZywgbnVtVmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChudW1WYWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIG51bVZhbHVlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEdldE51bWJlcihrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KVxyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsICYmIGRlZmF1bHRWYWx1ZSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIENsb2cuT3JhbmdlKENsb2dLZXkuTG9jYWxTdG9yYWdlLCAnTG9jYWxTdG9yYWdlIGdldCBOdW1iZXIgaXMgbnVsbCBvciBlbXB0eSAscmV0dXJuIGRlZnVsdCBmYWxzZSEnKVxyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCAmJiBkZWZhdWx0VmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBDbG9nLk9yYW5nZShDbG9nS2V5LkxvY2FsU3RvcmFnZSwgJ0xvY2FsU3RvcmFnZSBnZXQgTnVtYmVyIGlzIG51bGwgLGRlZnVsdCBpcyBudWxsLCByZXR1cm4gLTEhJylcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdiA9IE51bWJlcih2YWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIGlzTmFOKHYpID8gZGVmYXVsdFZhbHVlIDogdjtcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login/model/LoginData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b03439cPipBGbvU/9pEc8qC', 'LoginData');
// script/login/model/LoginData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SessionData = /** @class */ (function () {
    function SessionData(data) {
        if (data == null) {
            return;
        }
        this.Address = new Address(data);
    }
    return SessionData;
}());
exports.SessionData = SessionData;
var Address = /** @class */ (function () {
    function Address(data) {
        if (data == null) {
            return;
        }
        this.Login = "http://" + data.Login;
        this.Register = "http://" + data.Register;
        this.LobbyWS = "ws://" + data.LobbyWS;
        this.GameWS = "ws://" + data.GameWS;
    }
    return Address;
}());
exports.Address = Address;
//登录模块的数据别名：session
exports.Session = new SessionData();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcbW9kZWxcXExvZ2luRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBR0kscUJBQVksSUFBVTtRQUNsQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCxPQUFNO1NBQ1Q7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFDTCxrQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksa0NBQVc7QUFZeEI7SUFRSSxpQkFBWSxJQUFVO1FBQ2xCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNkLE9BQU07U0FDVDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDeEMsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLDBCQUFPO0FBbUJwQixtQkFBbUI7QUFDUixRQUFBLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uRGF0YSB7XG5cbiAgICBwdWJsaWMgQWRkcmVzczogQWRkcmVzcztcbiAgICBjb25zdHJ1Y3RvcihkYXRhPzogYW55KSB7XG4gICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuQWRkcmVzcyA9IG5ldyBBZGRyZXNzKGRhdGEpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBZGRyZXNzIHtcblxuICAgIHB1YmxpYyBMb2dpbjogc3RyaW5nO1xuICAgIHB1YmxpYyBSZWdpc3Rlcjogc3RyaW5nO1xuICAgIHB1YmxpYyBMb2JieVdTOiBzdHJpbmc7XG4gICAgcHVibGljIEdhbWVXUzogc3RyaW5nO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPzogYW55KSB7XG4gICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuTG9naW4gPSBcImh0dHA6Ly9cIiArIGRhdGEuTG9naW47XG4gICAgICAgIHRoaXMuUmVnaXN0ZXIgPSBcImh0dHA6Ly9cIiArIGRhdGEuUmVnaXN0ZXI7XG4gICAgICAgIHRoaXMuTG9iYnlXUyA9IFwid3M6Ly9cIiArIGRhdGEuTG9iYnlXUztcbiAgICAgICAgdGhpcy5HYW1lV1MgPSBcIndzOi8vXCIgKyBkYXRhLkdhbWVXUztcbiAgICB9XG59XG5cbi8v55m75b2V5qih5Z2X55qE5pWw5o2u5Yir5ZCN77yac2Vzc2lvblxuZXhwb3J0IGxldCBTZXNzaW9uID0gbmV3IFNlc3Npb25EYXRhKClcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/time/Time.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8953a6WuN9F3YItnGXF194I', 'Time');
// script/framework/time/Time.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Time = /** @class */ (function () {
    function Time() {
    }
    //将时间转成相应格式  by ming.lei 2018.06.06
    Time.Format = function (time, format) {
        if (format === void 0) { format = 'yyyy/MM/dd hh:mm:ss'; }
        var o = {
            "M+": time.getMonth() + 1,
            "d+": time.getDate(),
            "h+": time.getHours(),
            "m+": time.getMinutes(),
            "s+": time.getSeconds(),
            "q+": Math.floor((time.getMonth() + 3) / 3),
            "S": time.getMilliseconds() //millisecond 
        };
        if (/(y+)/i.test(format)) {
            format = format.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        }
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    };
    //时间戳转时间
    Time.TimestampToTime = function (timestamp) {
        return this.Format(new Date(timestamp));
    };
    return Time;
}());
exports.Time = Time;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHRpbWVcXFRpbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO0lBZ0NBLENBQUM7SUE5QkcsbUNBQW1DO0lBQ3JCLFdBQU0sR0FBcEIsVUFBcUIsSUFBVSxFQUFFLE1BQThCO1FBQTlCLHVCQUFBLEVBQUEsOEJBQThCO1FBQzNELElBQUksQ0FBQyxHQUFHO1lBQ0osSUFBSSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDO1lBQ3pCLElBQUksRUFBRSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ3BCLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ3JCLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ3ZCLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMzQyxHQUFHLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFxQixjQUFjO1NBQ2pFLENBQUE7UUFFRCxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7WUFDdEIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztTQUM5RjtRQUVELEtBQUssSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ2IsSUFBSSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDeEMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxNQUFNLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUM7YUFDL0c7U0FDSjtRQUNELE9BQU8sTUFBTSxDQUFDO0lBQ2xCLENBQUM7SUFFRCxRQUFRO0lBQ00sb0JBQWUsR0FBN0IsVUFBOEIsU0FBaUI7UUFDM0MsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7SUFDM0MsQ0FBQztJQUdMLFdBQUM7QUFBRCxDQWhDQSxBQWdDQyxJQUFBO0FBaENZLG9CQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5leHBvcnQgY2xhc3MgVGltZSB7XHJcblxyXG4gICAgLy/lsIbml7bpl7TovazmiJDnm7jlupTmoLzlvI8gIGJ5IG1pbmcubGVpIDIwMTguMDYuMDZcclxuICAgIHB1YmxpYyBzdGF0aWMgRm9ybWF0KHRpbWU6IERhdGUsIGZvcm1hdCA9ICd5eXl5L01NL2RkIGhoOm1tOnNzJykge1xyXG4gICAgICAgIHZhciBvID0ge1xyXG4gICAgICAgICAgICBcIk0rXCI6IHRpbWUuZ2V0TW9udGgoKSArIDEsICAgICAgICAgICAgICAgICAgICAgIC8vbW9udGggXHJcbiAgICAgICAgICAgIFwiZCtcIjogdGltZS5nZXREYXRlKCksICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9kYXkgXHJcbiAgICAgICAgICAgIFwiaCtcIjogdGltZS5nZXRIb3VycygpLCAgICAgICAgICAgICAgICAgICAgICAgICAgLy9ob3VyIFxyXG4gICAgICAgICAgICBcIm0rXCI6IHRpbWUuZ2V0TWludXRlcygpLCAgICAgICAgICAgICAgICAgICAgICAgIC8vbWludXRlIFxyXG4gICAgICAgICAgICBcInMrXCI6IHRpbWUuZ2V0U2Vjb25kcygpLCAgICAgICAgICAgICAgICAgICAgICAgIC8vc2Vjb25kIFxyXG4gICAgICAgICAgICBcInErXCI6IE1hdGguZmxvb3IoKHRpbWUuZ2V0TW9udGgoKSArIDMpIC8gMyksICAgIC8vcXVhcnRlciBcclxuICAgICAgICAgICAgXCJTXCI6IHRpbWUuZ2V0TWlsbGlzZWNvbmRzKCkgICAgICAgICAgICAgICAgICAgICAvL21pbGxpc2Vjb25kIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKC8oeSspL2kudGVzdChmb3JtYXQpKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKFJlZ0V4cC4kMSwgKHRpbWUuZ2V0RnVsbFllYXIoKSArIFwiXCIpLnN1YnN0cig0IC0gUmVnRXhwLiQxLmxlbmd0aCkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZm9yICh2YXIgayBpbiBvKSB7XHJcbiAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKFwiKFwiICsgayArIFwiKVwiKS50ZXN0KGZvcm1hdCkpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKFJlZ0V4cC4kMSwgUmVnRXhwLiQxLmxlbmd0aCA9PSAxID8gb1trXSA6IChcIjAwXCIgKyBvW2tdKS5zdWJzdHIoKFwiXCIgKyBvW2tdKS5sZW5ndGgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZm9ybWF0O1xyXG4gICAgfVxyXG5cclxuICAgIC8v5pe26Ze05oiz6L2s5pe26Ze0XHJcbiAgICBwdWJsaWMgc3RhdGljIFRpbWVzdGFtcFRvVGltZSh0aW1lc3RhbXA6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLkZvcm1hdChuZXcgRGF0ZSh0aW1lc3RhbXApKVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59Il19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login/controller/LoginController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '720faM772lNH6zAly4txqkQ', 'LoginController');
// script/login/controller/LoginController.ts

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
var LoginData_1 = require("../model/LoginData");
var Http_1 = require("../../framework/net/Http");
var GameInfo_1 = require("../../entry/model/GameInfo");
var Clog_1 = require("../../framework/clog/Clog");
var UITip_1 = require("../../commonUI/UITip");
var LoginController = /** @class */ (function () {
    function LoginController() {
    }
    LoginController.HttpHello = function () {
        return __awaiter(this, void 0, void 0, function () {
            var postData, data, errorCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postData = {
                            world: "151df4d2ddbdd1ad6a64c2c18b294828",
                        };
                        Clog_1.default.Green(Clog_1.ClogKey.Login, "HttpHello >>" + JSON.stringify(postData));
                        return [4 /*yield*/, Http_1.default.Post(GameInfo_1.GameInfo.MainURL, postData)];
                    case 1:
                        data = _a.sent();
                        errorCode = data["ErrorCode"];
                        if (errorCode != 0) {
                            UITip_1.UITip.Info(errorCode);
                            return [2 /*return*/];
                        }
                        Clog_1.default.Green(Clog_1.ClogKey.Login, "HttpHello >> data:" + JSON.stringify(data));
                        LoginData_1.Session.Address = new LoginData_1.Address(data["Address"]);
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginController.HttpLogin = function (account, password) {
        return __awaiter(this, void 0, void 0, function () {
            var postData, data, errorCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postData = {
                            account: account,
                            password: password
                        };
                        Clog_1.default.Green(Clog_1.ClogKey.Login, "HttpLogin >>" + JSON.stringify(postData));
                        return [4 /*yield*/, Http_1.default.Post(LoginData_1.Session.Address.Login, postData)];
                    case 1:
                        data = _a.sent();
                        errorCode = data["ErrorCode"];
                        if (errorCode != 0) {
                            UITip_1.UITip.Info(errorCode);
                            return [2 /*return*/];
                        }
                        Clog_1.default.Green(Clog_1.ClogKey.Login, "HttpLogin >> data:" + JSON.stringify(data));
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginController.HttpRegishter = function (account, password) {
        return __awaiter(this, void 0, void 0, function () {
            var postData, data, errorCode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        postData = {
                            account: account,
                            password: password
                        };
                        Clog_1.default.Green(Clog_1.ClogKey.Login, "HttpLogin >>" + JSON.stringify(postData));
                        return [4 /*yield*/, Http_1.default.Post(LoginData_1.Session.Address.Register, postData)];
                    case 1:
                        data = _a.sent();
                        errorCode = data["ErrorCode"];
                        if (errorCode != 0) {
                            UITip_1.UITip.Info(errorCode);
                            return [2 /*return*/];
                        }
                        Clog_1.default.Green(Clog_1.ClogKey.Login, "HttpLogin >> data:" + JSON.stringify(data));
                        return [2 /*return*/];
                }
            });
        });
    };
    return LoginController;
}());
exports.LoginController = LoginController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcY29udHJvbGxlclxcTG9naW5Db250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBbUU7QUFDbkUsaURBQTRDO0FBQzVDLHVEQUFzRDtBQUN0RCxrREFBMEQ7QUFDMUQsOENBQTZDO0FBRzdDO0lBQUE7SUFzREEsQ0FBQztJQWpEdUIseUJBQVMsR0FBN0I7Ozs7Ozt3QkFDUSxRQUFRLEdBQUc7NEJBQ1gsS0FBSyxFQUFFLGtDQUFrQzt5QkFDNUMsQ0FBQTt3QkFDRCxjQUFJLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxLQUFLLEVBQUUsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDMUQscUJBQU0sY0FBSSxDQUFDLElBQUksQ0FBQyxtQkFBUSxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsRUFBQTs7d0JBQWxELElBQUksR0FBRyxTQUEyQzt3QkFDbEQsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTt3QkFDakMsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFOzRCQUNoQixhQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBOzRCQUNyQixzQkFBTzt5QkFDVjt3QkFDRCxjQUFJLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxLQUFLLEVBQUUsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dCQUN2RSxtQkFBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLG1CQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUE7Ozs7O0tBQ2pEO0lBR21CLHlCQUFTLEdBQTdCLFVBQThCLE9BQWUsRUFBRSxRQUFnQjs7Ozs7O3dCQUN2RCxRQUFRLEdBQUc7NEJBQ1gsT0FBTyxFQUFFLE9BQU87NEJBQ2hCLFFBQVEsRUFBRSxRQUFRO3lCQUNyQixDQUFBO3dCQUNELGNBQUksQ0FBQyxLQUFLLENBQUMsY0FBTyxDQUFDLEtBQUssRUFBRSxjQUFjLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMxRCxxQkFBTSxjQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLENBQUMsRUFBQTs7d0JBQXZELElBQUksR0FBRyxTQUFnRDt3QkFDdkQsU0FBUyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQTt3QkFDakMsSUFBSSxTQUFTLElBQUksQ0FBQyxFQUFFOzRCQUNoQixhQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBOzRCQUNyQixzQkFBTzt5QkFDVjt3QkFDRCxjQUFJLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxLQUFLLEVBQUUsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzs7OztLQUUxRTtJQUdtQiw2QkFBYSxHQUFqQyxVQUFrQyxPQUFlLEVBQUUsUUFBZ0I7Ozs7Ozt3QkFDM0QsUUFBUSxHQUFHOzRCQUNYLE9BQU8sRUFBRSxPQUFPOzRCQUNoQixRQUFRLEVBQUUsUUFBUTt5QkFDckIsQ0FBQTt3QkFDRCxjQUFJLENBQUMsS0FBSyxDQUFDLGNBQU8sQ0FBQyxLQUFLLEVBQUUsY0FBYyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDMUQscUJBQU0sY0FBSSxDQUFDLElBQUksQ0FBQyxtQkFBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQUE7O3dCQUExRCxJQUFJLEdBQUcsU0FBbUQ7d0JBQzFELFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUE7d0JBQ2pDLElBQUksU0FBUyxJQUFJLENBQUMsRUFBRTs0QkFDaEIsYUFBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTs0QkFDckIsc0JBQU87eUJBQ1Y7d0JBQ0QsY0FBSSxDQUFDLEtBQUssQ0FBQyxjQUFPLENBQUMsS0FBSyxFQUFFLG9CQUFvQixHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs7Ozs7S0FFMUU7SUFFTCxzQkFBQztBQUFELENBdERBLEFBc0RDLElBQUE7QUF0RFksMENBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTZXNzaW9uRGF0YSwgQWRkcmVzcywgU2Vzc2lvbiB9IGZyb20gXCIuLi9tb2RlbC9Mb2dpbkRhdGFcIjtcbmltcG9ydCBIdHRwIGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvbmV0L0h0dHBcIjtcbmltcG9ydCB7IEdhbWVJbmZvIH0gZnJvbSBcIi4uLy4uL2VudHJ5L21vZGVsL0dhbWVJbmZvXCI7XG5pbXBvcnQgQ2xvZywgeyBDbG9nS2V5IH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay9jbG9nL0Nsb2dcIjtcbmltcG9ydCB7IFVJVGlwIH0gZnJvbSBcIi4uLy4uL2NvbW1vblVJL1VJVGlwXCI7XG5cblxuZXhwb3J0IGNsYXNzIExvZ2luQ29udHJvbGxlciB7XG5cblxuICAgIHByaXZhdGUgc3RhdGljIGxvZ2luRGF0YTogU2Vzc2lvbkRhdGFcblxuICAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgSHR0cEhlbGxvKCkge1xuICAgICAgICBsZXQgcG9zdERhdGEgPSB7XG4gICAgICAgICAgICB3b3JsZDogXCIxNTFkZjRkMmRkYmRkMWFkNmE2NGMyYzE4YjI5NDgyOFwiLFxuICAgICAgICB9XG4gICAgICAgIENsb2cuR3JlZW4oQ2xvZ0tleS5Mb2dpbiwgXCJIdHRwSGVsbG8gPj5cIiArIEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSk7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgSHR0cC5Qb3N0KEdhbWVJbmZvLk1haW5VUkwsIHBvc3REYXRhKVxuICAgICAgICBsZXQgZXJyb3JDb2RlID0gZGF0YVtcIkVycm9yQ29kZVwiXVxuICAgICAgICBpZiAoZXJyb3JDb2RlICE9IDApIHtcbiAgICAgICAgICAgIFVJVGlwLkluZm8oZXJyb3JDb2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIENsb2cuR3JlZW4oQ2xvZ0tleS5Mb2dpbiwgXCJIdHRwSGVsbG8gPj4gZGF0YTpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgU2Vzc2lvbi5BZGRyZXNzID0gbmV3IEFkZHJlc3MoZGF0YVtcIkFkZHJlc3NcIl0pXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIEh0dHBMb2dpbihhY2NvdW50OiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHBvc3REYXRhID0ge1xuICAgICAgICAgICAgYWNjb3VudDogYWNjb3VudCxcbiAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICB9XG4gICAgICAgIENsb2cuR3JlZW4oQ2xvZ0tleS5Mb2dpbiwgXCJIdHRwTG9naW4gPj5cIiArIEpTT04uc3RyaW5naWZ5KHBvc3REYXRhKSk7XG4gICAgICAgIGxldCBkYXRhID0gYXdhaXQgSHR0cC5Qb3N0KFNlc3Npb24uQWRkcmVzcy5Mb2dpbiwgcG9zdERhdGEpXG4gICAgICAgIGxldCBlcnJvckNvZGUgPSBkYXRhW1wiRXJyb3JDb2RlXCJdXG4gICAgICAgIGlmIChlcnJvckNvZGUgIT0gMCkge1xuICAgICAgICAgICAgVUlUaXAuSW5mbyhlcnJvckNvZGUpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgQ2xvZy5HcmVlbihDbG9nS2V5LkxvZ2luLCBcIkh0dHBMb2dpbiA+PiBkYXRhOlwiICsgSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xuXG4gICAgfVxuXG5cbiAgICBwdWJsaWMgc3RhdGljIGFzeW5jIEh0dHBSZWdpc2h0ZXIoYWNjb3VudDogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKSB7XG4gICAgICAgIGxldCBwb3N0RGF0YSA9IHtcbiAgICAgICAgICAgIGFjY291bnQ6IGFjY291bnQsXG4gICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgfVxuICAgICAgICBDbG9nLkdyZWVuKENsb2dLZXkuTG9naW4sIFwiSHR0cExvZ2luID4+XCIgKyBKU09OLnN0cmluZ2lmeShwb3N0RGF0YSkpO1xuICAgICAgICBsZXQgZGF0YSA9IGF3YWl0IEh0dHAuUG9zdChTZXNzaW9uLkFkZHJlc3MuUmVnaXN0ZXIsIHBvc3REYXRhKVxuICAgICAgICBsZXQgZXJyb3JDb2RlID0gZGF0YVtcIkVycm9yQ29kZVwiXVxuICAgICAgICBpZiAoZXJyb3JDb2RlICE9IDApIHtcbiAgICAgICAgICAgIFVJVGlwLkluZm8oZXJyb3JDb2RlKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIENsb2cuR3JlZW4oQ2xvZ0tleS5Mb2dpbiwgXCJIdHRwTG9naW4gPj4gZGF0YTpcIiArIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcblxuICAgIH1cblxufVxuXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/battle/map/control/CellController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba7bc6W1sdMEbRACPCXnlYd', 'CellController');
// script/battle/map/control/CellController.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CellController = /** @class */ (function () {
    function CellController() {
    }
    CellController.GetCellDataById = function (id) {
    };
    return CellController;
}());
exports.CellController = CellController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0bGVcXG1hcFxcY29udHJvbFxcQ2VsbENvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTtJQUFBO0lBUUEsQ0FBQztJQUppQiw4QkFBZSxHQUE3QixVQUE4QixFQUFTO0lBRXZDLENBQUM7SUFFTCxxQkFBQztBQUFELENBUkEsQUFRQyxJQUFBO0FBUlksd0NBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuZXhwb3J0IGNsYXNzIENlbGxDb250cm9sbGVyIHtcblxuICAgIFxuICAgIFxuICAgIHB1YmxpYyBzdGF0aWMgR2V0Q2VsbERhdGFCeUlkKGlkOm51bWJlcil7XG5cbiAgICB9XG5cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/clog/Clog.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'aec44K6D4FKPrIYOWDJoq14', 'Clog');
// script/framework/clog/Clog.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Time_1 = require("../time/Time");
var debug = CC_DEBUG;
var ClogKey = /** @class */ (function () {
    function ClogKey() {
    }
    ClogKey.Res = "Res";
    ClogKey.UI = "UI";
    ClogKey.LocalStorage = "LocalStorage";
    ClogKey.Net = "Net";
    ClogKey.Entry = "Entry";
    ClogKey.Api = "Api";
    ClogKey.Login = "Login";
    ClogKey.Http = "Http";
    return ClogKey;
}());
exports.ClogKey = ClogKey;
var Clog = /** @class */ (function () {
    function Clog() {
    }
    Clog.Init = function () {
        this.OpenTag(ClogKey.Res);
        this.OpenTag(ClogKey.UI);
        this.OpenTag(ClogKey.LocalStorage);
        this.OpenTag(ClogKey.Net);
        this.OpenTag(ClogKey.Entry);
        this.OpenTag(ClogKey.Api);
        this.OpenTag(ClogKey.Login);
        this.OpenTag(ClogKey.Http);
    };
    Clog.OpenTag = function (tag) {
        if (this.Tags.indexOf(tag) < 0) {
            this.Tags.push(tag);
        }
    };
    Clog.Obj = function (tag) {
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        if (!debug) {
            return;
        }
        //标记没有打开，不打印该日志
        if (this.Tags.indexOf(tag) < 0) {
            return;
        }
        msg.unshift('【' + Time_1.Time.Format(new Date()) + '】' + '【' + tag + '】');
        cc.log("%c tag", "color:#ff1493;", [].slice.call(msg));
    };
    //无颜色
    Clog.Trace = function (tag, msg) {
        this.print(tag, this.GetString(msg), "");
    };
    //红色
    Clog.Red = function (tag, msg) {
        this.print(tag, this.GetString(msg), "color:red;");
    };
    //绿色
    Clog.Green = function (tag, msg) {
        this.print(tag, this.GetString(msg), "color:green;");
    };
    //橙色
    Clog.Orange = function (tag, msg) {
        this.print(tag, this.GetString(msg), "color:#ee7700;");
    };
    //灰色
    Clog.Gray = function (tag, msg) {
        this.print(tag, this.GetString(msg), "color:gray;");
    };
    //蓝色
    Clog.Blue = function (tag, msg) {
        this.print(tag, this.GetString(msg), "color:#3a5fcd;");
    };
    //紫色
    Clog.Purple = function (tag, msg) {
        this.print(tag, this.GetString(msg), "color:#b23aee;");
    };
    //深粉色
    Clog.DeepPink = function (tag, msg) {
        this.print(tag, this.GetString(msg), "color:#ff1493;");
    };
    Clog.GetString = function (msg) {
        return (!Array.isArray(msg) && typeof msg === 'object') ? JSON.stringify(msg) : msg;
    };
    Clog.print = function (tag, msg, color) {
        if (!debug) {
            return;
        }
        //标记没有打开，不打印该日志
        if (this.Tags.indexOf(tag) < 0) {
            return;
        }
        var backLog = console.log || cc.log;
        backLog.call(this, "%c%s:" + cc.js.formatStr.apply(cc, [msg]), color, '【' + Time_1.Time.Format(new Date()) + '】' + '【' + tag + '】');
    };
    Clog.Warn = function (tag) {
        var msg = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            msg[_i - 1] = arguments[_i];
        }
        msg.unshift('【' + Time_1.Time.Format(new Date()) + '】' + '【' + tag + '】');
        cc.warn.apply(null, [].slice.call(msg));
    };
    Clog.Error = function (msg) {
        cc.error('【' + Time_1.Time.Format(new Date()) + '】' + msg);
    };
    Clog.Tags = new Array();
    return Clog;
}());
exports.default = Clog;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXGNsb2dcXENsb2cudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBb0M7QUFFcEMsSUFBSSxLQUFLLEdBQUcsUUFBUSxDQUFDO0FBRXJCO0lBQUE7SUFTQSxDQUFDO0lBUmlCLFdBQUcsR0FBRyxLQUFLLENBQUE7SUFDWCxVQUFFLEdBQUcsSUFBSSxDQUFBO0lBQ1Qsb0JBQVksR0FBRyxjQUFjLENBQUE7SUFDN0IsV0FBRyxHQUFHLEtBQUssQ0FBQTtJQUNYLGFBQUssR0FBRyxPQUFPLENBQUE7SUFDZixXQUFHLEdBQUcsS0FBSyxDQUFBO0lBQ1gsYUFBSyxHQUFHLE9BQU8sQ0FBQTtJQUNmLFlBQUksR0FBRyxNQUFNLENBQUE7SUFDL0IsY0FBQztDQVRELEFBU0MsSUFBQTtBQVRZLDBCQUFPO0FBWXBCO0lBQUE7SUFvR0EsQ0FBQztJQWhHaUIsU0FBSSxHQUFsQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFBO1FBQ2xDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzNCLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzlCLENBQUM7SUFFYSxZQUFPLEdBQXJCLFVBQXNCLEdBQUc7UUFD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QUMsQ0FBQztJQUM1QyxDQUFDO0lBRWEsVUFBSyxHQUFuQixVQUFvQixHQUFRO1FBQ3hCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLFdBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUN4RCxDQUFDO0lBakdhLFNBQUksR0FBa0IsSUFBSSxLQUFLLEVBQVUsQ0FBQztJQW1HNUQsV0FBQztDQXBHRCxBQW9HQyxJQUFBO2tCQXBHb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWUgfSBmcm9tIFwiLi4vdGltZS9UaW1lXCI7XG5cbmxldCBkZWJ1ZyA9IENDX0RFQlVHO1xuXG5leHBvcnQgY2xhc3MgQ2xvZ0tleSB7XG4gICAgcHVibGljIHN0YXRpYyBSZXMgPSBcIlJlc1wiXG4gICAgcHVibGljIHN0YXRpYyBVSSA9IFwiVUlcIlxuICAgIHB1YmxpYyBzdGF0aWMgTG9jYWxTdG9yYWdlID0gXCJMb2NhbFN0b3JhZ2VcIlxuICAgIHB1YmxpYyBzdGF0aWMgTmV0ID0gXCJOZXRcIlxuICAgIHB1YmxpYyBzdGF0aWMgRW50cnkgPSBcIkVudHJ5XCJcbiAgICBwdWJsaWMgc3RhdGljIEFwaSA9IFwiQXBpXCJcbiAgICBwdWJsaWMgc3RhdGljIExvZ2luID0gXCJMb2dpblwiXG4gICAgcHVibGljIHN0YXRpYyBIdHRwID0gXCJIdHRwXCJcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDbG9nIHtcbiAgICBwdWJsaWMgc3RhdGljIFRhZ3M6IEFycmF5PHN0cmluZz4gPSBuZXcgQXJyYXk8c3RyaW5nPigpO1xuXG5cbiAgICBwdWJsaWMgc3RhdGljIEluaXQoKSB7XG4gICAgICAgIHRoaXMuT3BlblRhZyhDbG9nS2V5LlJlcylcbiAgICAgICAgdGhpcy5PcGVuVGFnKENsb2dLZXkuVUkpXG4gICAgICAgIHRoaXMuT3BlblRhZyhDbG9nS2V5LkxvY2FsU3RvcmFnZSlcbiAgICAgICAgdGhpcy5PcGVuVGFnKENsb2dLZXkuTmV0KVxuICAgICAgICB0aGlzLk9wZW5UYWcoQ2xvZ0tleS5FbnRyeSlcbiAgICAgICAgdGhpcy5PcGVuVGFnKENsb2dLZXkuQXBpKVxuICAgICAgICB0aGlzLk9wZW5UYWcoQ2xvZ0tleS5Mb2dpbilcbiAgICAgICAgdGhpcy5PcGVuVGFnKENsb2dLZXkuSHR0cClcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIE9wZW5UYWcodGFnKSB7XG4gICAgICAgIGlmICh0aGlzLlRhZ3MuaW5kZXhPZih0YWcpIDwgMCkge1xuICAgICAgICAgICAgdGhpcy5UYWdzLnB1c2godGFnKVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBPYmoodGFnPzogc3RyaW5nLCAuLi5tc2c6IGFueVtdKSB7XG4gICAgICAgIGlmICghZGVidWcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5qCH6K6w5rKh5pyJ5omT5byA77yM5LiN5omT5Y2w6K+l5pel5b+XXG4gICAgICAgIGlmICh0aGlzLlRhZ3MuaW5kZXhPZih0YWcpIDwgMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIG1zZy51bnNoaWZ0KCfjgJAnICsgVGltZS5Gb3JtYXQobmV3IERhdGUoKSkgKyAn44CRJyArICfjgJAnICsgdGFnICsgJ+OAkScpO1xuICAgICAgICBjYy5sb2coXCIlYyB0YWdcIiwgXCJjb2xvcjojZmYxNDkzO1wiLCBbXS5zbGljZS5jYWxsKG1zZykpO1xuICAgIH1cblxuICAgIC8v5peg6aKc6ImyXG4gICAgcHVibGljIHN0YXRpYyBUcmFjZSh0YWc6IHN0cmluZywgbXNnOiBhbnkpIHtcbiAgICAgICAgdGhpcy5wcmludCh0YWcsIHRoaXMuR2V0U3RyaW5nKG1zZyksIFwiXCIpXG4gICAgfVxuXG4gICAgLy/nuqLoibJcbiAgICBwdWJsaWMgc3RhdGljIFJlZCh0YWc6IHN0cmluZywgbXNnOiBhbnkpIHtcbiAgICAgICAgdGhpcy5wcmludCh0YWcsIHRoaXMuR2V0U3RyaW5nKG1zZyksIFwiY29sb3I6cmVkO1wiKVxuICAgIH1cblxuICAgIC8v57u/6ImyXG4gICAgcHVibGljIHN0YXRpYyBHcmVlbih0YWc6IHN0cmluZywgbXNnKSB7XG4gICAgICAgIHRoaXMucHJpbnQodGFnLCB0aGlzLkdldFN0cmluZyhtc2cpLCBcImNvbG9yOmdyZWVuO1wiKVxuICAgIH1cblxuICAgIC8v5qmZ6ImyXG4gICAgcHVibGljIHN0YXRpYyBPcmFuZ2UodGFnOiBzdHJpbmcsIG1zZykge1xuICAgICAgICB0aGlzLnByaW50KHRhZywgdGhpcy5HZXRTdHJpbmcobXNnKSwgXCJjb2xvcjojZWU3NzAwO1wiKVxuICAgIH1cblxuICAgIC8v54Gw6ImyXG4gICAgcHVibGljIHN0YXRpYyBHcmF5KHRhZzogc3RyaW5nLCBtc2cpIHtcbiAgICAgICAgdGhpcy5wcmludCh0YWcsIHRoaXMuR2V0U3RyaW5nKG1zZyksIFwiY29sb3I6Z3JheTtcIilcbiAgICB9XG5cbiAgICAvL+iTneiJslxuICAgIHB1YmxpYyBzdGF0aWMgQmx1ZSh0YWc6IHN0cmluZywgbXNnKSB7XG4gICAgICAgIHRoaXMucHJpbnQodGFnLCB0aGlzLkdldFN0cmluZyhtc2cpLCBcImNvbG9yOiMzYTVmY2Q7XCIpXG4gICAgfVxuXG4gICAgLy/ntKvoibJcbiAgICBwdWJsaWMgc3RhdGljIFB1cnBsZSh0YWc6IHN0cmluZywgbXNnKSB7XG4gICAgICAgIHRoaXMucHJpbnQodGFnLCB0aGlzLkdldFN0cmluZyhtc2cpLCBcImNvbG9yOiNiMjNhZWU7XCIpXG4gICAgfVxuXG4gICAgLy/mt7HnsonoibJcbiAgICBwdWJsaWMgc3RhdGljIERlZXBQaW5rKHRhZywgbXNnKSB7XG4gICAgICAgIHRoaXMucHJpbnQodGFnLCB0aGlzLkdldFN0cmluZyhtc2cpLCBcImNvbG9yOiNmZjE0OTM7XCIpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgR2V0U3RyaW5nKG1zZykge1xuICAgICAgICByZXR1cm4gKCFBcnJheS5pc0FycmF5KG1zZykgJiYgdHlwZW9mIG1zZyA9PT0gJ29iamVjdCcpID8gSlNPTi5zdHJpbmdpZnkobXNnKSA6IG1zZztcbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBwcmludCh0YWcsIG1zZywgY29sb3IpIHtcbiAgICAgICAgaWYgKCFkZWJ1Zykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy/moIforrDmsqHmnInmiZPlvIDvvIzkuI3miZPljbDor6Xml6Xlv5dcbiAgICAgICAgaWYgKHRoaXMuVGFncy5pbmRleE9mKHRhZykgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGJhY2tMb2cgPSBjb25zb2xlLmxvZyB8fCBjYy5sb2c7XG4gICAgICAgIGJhY2tMb2cuY2FsbCh0aGlzLCBcIiVjJXM6XCIgKyBjYy5qcy5mb3JtYXRTdHIuYXBwbHkoY2MsIFttc2ddKSwgY29sb3IsICfjgJAnICsgVGltZS5Gb3JtYXQobmV3IERhdGUoKSkgKyAn44CRJyArICfjgJAnICsgdGFnICsgJ+OAkScpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgV2Fybih0YWc/OiBzdHJpbmcsIC4uLm1zZzogYW55W10pIHtcbiAgICAgICAgbXNnLnVuc2hpZnQoJ+OAkCcgKyBUaW1lLkZvcm1hdChuZXcgRGF0ZSgpKSArICfjgJEnICsgJ+OAkCcgKyB0YWcgKyAn44CRJyk7XG4gICAgICAgIGNjLndhcm4uYXBwbHkobnVsbCwgW10uc2xpY2UuY2FsbChtc2cpKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIEVycm9yKG1zZzogYW55KSB7XG4gICAgICAgIGNjLmVycm9yKCfjgJAnICsgVGltZS5Gb3JtYXQobmV3IERhdGUoKSkgKyAn44CRJyArIG1zZyk7XG4gICAgfVxuXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/res/ResManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '226a2sBh/9CYqQw/Ph9JPz5', 'ResManager');
// script/framework/res/ResManager.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtil_1 = require("../util/StringUtil");
var ResPath_1 = require("./ResPath");
var ResManager = /** @class */ (function () {
    function ResManager() {
    }
    ResManager.getUrlByName = function (name) {
        if (!ResPath_1.ResPath.hasOwnProperty(name)) {
            return name;
        }
        return ResPath_1.ResPath[name];
    };
    /**
     *
     * @param name 资源名称
     * @param type 资源类型
     * @param completeCallback 回调 > error错误resource > 返回的资源
     */
    ResManager.LoadRes = function (name, type, completeCallback) {
        var url = this.getUrlByName(name);
        if (StringUtil_1.IsNullOrEmpty(url)) {
            return;
        }
        cc.loader.loadRes(url, type, completeCallback);
    };
    /**
     * @param name 释放的资源名
     */
    ResManager.Release = function (name) {
        var url = this.getUrlByName(name);
        if (StringUtil_1.IsNullOrEmpty(url)) {
            return;
        }
        cc.loader.releaseRes(url);
    };
    return ResManager;
}());
exports.ResManager = ResManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHJlc1xcUmVzTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlEQUFtRDtBQUNuRCxxQ0FBb0M7QUFLcEM7SUFBQTtJQWlDQSxDQUFDO0lBL0JrQix1QkFBWSxHQUEzQixVQUE0QixJQUFZO1FBQ3BDLElBQUksQ0FBQyxpQkFBTyxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUMvQixPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxpQkFBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNXLGtCQUFPLEdBQXJCLFVBQXNCLElBQVksRUFBRSxJQUFxQixFQUFFLGdCQUF1RDtRQUM5RyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pDLElBQUksMEJBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFNO1NBQ1Q7UUFDRCxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUVEOztPQUVHO0lBQ1csa0JBQU8sR0FBckIsVUFBc0IsSUFBWTtRQUM5QixJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2pDLElBQUksMEJBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNwQixPQUFNO1NBQ1Q7UUFDRCxFQUFFLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQTtJQUM3QixDQUFDO0lBQ0wsaUJBQUM7QUFBRCxDQWpDQSxBQWlDQyxJQUFBO0FBakNZLGdDQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSXNOdWxsT3JFbXB0eSB9IGZyb20gXCIuLi91dGlsL1N0cmluZ1V0aWxcIjtcbmltcG9ydCB7IFJlc1BhdGggfSBmcm9tIFwiLi9SZXNQYXRoXCI7XG5cblxuXG5cbmV4cG9ydCBjbGFzcyBSZXNNYW5hZ2VyIHtcblxuICAgIHByaXZhdGUgc3RhdGljIGdldFVybEJ5TmFtZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgaWYgKCFSZXNQYXRoLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUmVzUGF0aFtuYW1lXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbmFtZSDotYTmupDlkI3np7BcbiAgICAgKiBAcGFyYW0gdHlwZSDotYTmupDnsbvlnosgXG4gICAgICogQHBhcmFtIGNvbXBsZXRlQ2FsbGJhY2sg5Zue6LCDID4gZXJyb3LplJnor69yZXNvdXJjZSA+IOi/lOWbnueahOi1hOa6kFxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgTG9hZFJlcyhuYW1lOiBzdHJpbmcsIHR5cGU6IHR5cGVvZiBjYy5Bc3NldCwgY29tcGxldGVDYWxsYmFjazogKGVycm9yOiBFcnJvciwgcmVzb3VyY2U6IGFueSkgPT4gdm9pZCkge1xuICAgICAgICBsZXQgdXJsID0gdGhpcy5nZXRVcmxCeU5hbWUobmFtZSlcbiAgICAgICAgaWYgKElzTnVsbE9yRW1wdHkodXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCB0eXBlLCBjb21wbGV0ZUNhbGxiYWNrKVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSBuYW1lIOmHiuaUvueahOi1hOa6kOWQjVxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgUmVsZWFzZShuYW1lOiBzdHJpbmcpIHtcbiAgICAgICAgbGV0IHVybCA9IHRoaXMuZ2V0VXJsQnlOYW1lKG5hbWUpXG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KHVybCkpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGNjLmxvYWRlci5yZWxlYXNlUmVzKHVybClcbiAgICB9XG59XG5cblxuXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/ui/UIBase.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHVpXFxVSUJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUNBQThFO0FBSzlFO0lBQXFDLDBCQUFZO0lBQWpEO1FBQUEscUVBVUM7UUFSVSxtQkFBYSxHQUFHLHdCQUFlLENBQUMsTUFBTSxDQUFBO1FBQ3RDLGVBQVMsR0FBRyx3QkFBZSxDQUFDLElBQUksQ0FBQztRQUNqQyxnQkFBVSxHQUFHLHlCQUFnQixDQUFDLElBQUksQ0FBQzs7SUFNOUMsQ0FBQztJQUhHLHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0wsYUFBQztBQUFELENBVkEsQUFVQyxDQVZvQyxFQUFFLENBQUMsU0FBUyxHQVVoRDtBQVZxQix3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVudW1VSUhpZXJhcmNoeSwgRW51bVVJT3BlblR3ZWVuLCBFbnVtVUlDbG9zZVR3ZWVuIH0gZnJvbSBcIi4vVUlFbnVtXCI7XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgVUlCYXNlIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBQcmVmYWJOYW1lOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgSGllcmFyY2h5VHlwZSA9IEVudW1VSUhpZXJhcmNoeS5Ob3JtYWxcclxuICAgIHB1YmxpYyBPcGVuVHdlZW4gPSBFbnVtVUlPcGVuVHdlZW4uTm9uZTtcclxuICAgIHB1YmxpYyBDbG9zZVR3ZWVuID0gRW51bVVJQ2xvc2VUd2Vlbi5Ob25lO1xyXG4gICAgcHVibGljIE1hc2s6IGNjLk5vZGVcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5NYXNrID0gY2MuZmluZCgnVUlNYXNrJywgdGhpcy5ub2RlKTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/ui/UIEnum.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '162f6I+r1ZK/5YPHqfaTsJ8', 'UIEnum');
// script/framework/ui/UIEnum.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EnumUIHierarchy;
(function (EnumUIHierarchy) {
    EnumUIHierarchy[EnumUIHierarchy["Base"] = 0] = "Base";
    EnumUIHierarchy[EnumUIHierarchy["Normal"] = 10000] = "Normal";
    EnumUIHierarchy[EnumUIHierarchy["Fix"] = 20000] = "Fix";
    EnumUIHierarchy[EnumUIHierarchy["Marquee"] = 20100] = "Marquee";
    EnumUIHierarchy[EnumUIHierarchy["Tip"] = 20200] = "Tip";
    EnumUIHierarchy[EnumUIHierarchy["Loading"] = 20300] = "Loading";
    EnumUIHierarchy[EnumUIHierarchy["Waiting"] = 20400] = "Waiting";
    EnumUIHierarchy[EnumUIHierarchy["NetDlg"] = 20500] = "NetDlg";
    EnumUIHierarchy[EnumUIHierarchy["FrameMask"] = 20700] = "FrameMask";
})(EnumUIHierarchy = exports.EnumUIHierarchy || (exports.EnumUIHierarchy = {}));
var EnumUIOpenTween;
(function (EnumUIOpenTween) {
    EnumUIOpenTween["None"] = "None";
    EnumUIOpenTween["Scale"] = "Scale";
    EnumUIOpenTween["FadeIn"] = "FadeIn";
    EnumUIOpenTween["PullUp"] = "PullUp";
})(EnumUIOpenTween = exports.EnumUIOpenTween || (exports.EnumUIOpenTween = {}));
var EnumUICloseTween;
(function (EnumUICloseTween) {
    EnumUICloseTween["None"] = "None";
    EnumUICloseTween["Scale"] = "Scale";
    EnumUICloseTween["FadeOut"] = "FadeOut";
    EnumUICloseTween["PullDown"] = "PullDown";
})(EnumUICloseTween = exports.EnumUICloseTween || (exports.EnumUICloseTween = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHVpXFxVSUVudW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFZLGVBVVg7QUFWRCxXQUFZLGVBQWU7SUFDdkIscURBQVEsQ0FBQTtJQUNSLDZEQUFjLENBQUE7SUFDZCx1REFBVyxDQUFBO0lBQ1gsK0RBQWUsQ0FBQTtJQUNmLHVEQUFXLENBQUE7SUFDWCwrREFBZSxDQUFBO0lBQ2YsK0RBQWUsQ0FBQTtJQUNmLDZEQUFjLENBQUE7SUFDZCxtRUFBaUIsQ0FBQTtBQUNyQixDQUFDLEVBVlcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFVMUI7QUFFRCxJQUFZLGVBS1g7QUFMRCxXQUFZLGVBQWU7SUFDdkIsZ0NBQWEsQ0FBQTtJQUNiLGtDQUFlLENBQUE7SUFDZixvQ0FBaUIsQ0FBQTtJQUNqQixvQ0FBaUIsQ0FBQTtBQUNyQixDQUFDLEVBTFcsZUFBZSxHQUFmLHVCQUFlLEtBQWYsdUJBQWUsUUFLMUI7QUFFRCxJQUFZLGdCQUtYO0FBTEQsV0FBWSxnQkFBZ0I7SUFDeEIsaUNBQWEsQ0FBQTtJQUNiLG1DQUFlLENBQUE7SUFDZix1Q0FBbUIsQ0FBQTtJQUNuQix5Q0FBcUIsQ0FBQTtBQUN6QixDQUFDLEVBTFcsZ0JBQWdCLEdBQWhCLHdCQUFnQixLQUFoQix3QkFBZ0IsUUFLM0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZW51bSBFbnVtVUlIaWVyYXJjaHkge1xuICAgIEJhc2UgPSAwLCAgICAgICAgICAgICAgICAgICAvL+WfuuehgOWxgiBlZzrlu7rnrZHlkI3np7DvvIzop5LoibLlpLTpobbkuIrnmoTooYDmnaEgICBcbiAgICBOb3JtYWwgPSAxMDAwMCwgICAgICAgICAgICAgLy/nqpflj6MgXG4gICAgRml4ID0gMjAwMDAsICAgICAgICAgICAgICAgIC8v5Zu65a6aXG4gICAgTWFycXVlZSA9IDIwMTAwLCAgICAgICAgICAgIC8v6LeR6ams54GvXG4gICAgVGlwID0gMjAyMDAsICAgICAgICAgICAgICAgIC8v5o+Q56S6XG4gICAgTG9hZGluZyA9IDIwMzAwLCAgICAgICAgICAgIC8v5Zy65pmv5YiH5o2iXG4gICAgV2FpdGluZyA9IDIwNDAwLCAgICAgICAgICAgIC8v562J5b6F55WM6Z2iXG4gICAgTmV0RGxnID0gMjA1MDAsICAgICAgICAgICAgIC8v572R57uc5raI5oGv5by55qGG5bGCICAgICDns7vnu5/pu5jorqTmnIDlpKfkuI3og73otoXov4czNTY3NVxuICAgIEZyYW1lTWFzayA9IDIwNzAwLCAgICAgICAgICAvL+WkluahhumBrue9qVxufVxuXG5leHBvcnQgZW51bSBFbnVtVUlPcGVuVHdlZW4ge1xuICAgIE5vbmUgPSAnTm9uZScsXG4gICAgU2NhbGUgPSAnU2NhbGUnLFxuICAgIEZhZGVJbiA9ICdGYWRlSW4nLFxuICAgIFB1bGxVcCA9ICdQdWxsVXAnLFxufVxuXG5leHBvcnQgZW51bSBFbnVtVUlDbG9zZVR3ZWVuIHtcbiAgICBOb25lID0gJ05vbmUnLFxuICAgIFNjYWxlID0gJ1NjYWxlJyxcbiAgICBGYWRlT3V0ID0gJ0ZhZGVPdXQnLFxuICAgIFB1bGxEb3duID0gJ1B1bGxEb3duJyxcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/util/ArrayUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0d5c2RY7x5PBINfgAVlQgFU', 'ArrayUtil');
// script/framework/util/ArrayUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//数组中是否包含target
exports.IsArrayContain = function (array, target) {
    return array.indexOf(target) >= 0;
};
//从数组中移除target
exports.ArrayRemove = function (array, target) {
    var index = array.indexOf(target);
    if (index >= 0) {
        array.splice(index, 1);
    }
};
//复制数组
exports.ArrayCopy = function (array, target) {
    for (var index = 0; index < array.length; index++) {
        var element = array[index];
        target.push(element);
    }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHV0aWxcXEFycmF5VXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGVBQWU7QUFDSixRQUFBLGNBQWMsR0FBRyxVQUFLLEtBQWUsRUFBRSxNQUFRO0lBQ3RELE9BQU8sS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFBO0FBRUQsY0FBYztBQUNILFFBQUEsV0FBVyxHQUFHLFVBQUssS0FBZSxFQUFFLE1BQVM7SUFDcEQsSUFBSSxLQUFLLEdBQUcsS0FBSyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxJQUFJLEtBQUssSUFBSSxDQUFDLEVBQUU7UUFDWixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztLQUMxQjtBQUNMLENBQUMsQ0FBQTtBQUVELE1BQU07QUFDSyxRQUFBLFNBQVMsR0FBSSxVQUFJLEtBQWUsRUFBRSxNQUFnQjtJQUN6RCxLQUFLLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUUsRUFBRTtRQUMvQyxJQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDN0IsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtLQUN2QjtBQUNMLENBQUMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v5pWw57uE5Lit5piv5ZCm5YyF5ZCrdGFyZ2V0XHJcbmV4cG9ydCBsZXQgSXNBcnJheUNvbnRhaW4gPSA8VD4gKGFycmF5OiBBcnJheTxUPiwgdGFyZ2V0OlQpOiBib29sZWFuPT4ge1xyXG4gICAgcmV0dXJuIGFycmF5LmluZGV4T2YodGFyZ2V0KSA+PSAwXHJcbn1cclxuXHJcbi8v5LuO5pWw57uE5Lit56e76ZmkdGFyZ2V0XHJcbmV4cG9ydCBsZXQgQXJyYXlSZW1vdmUgPSA8VD4gKGFycmF5OiBBcnJheTxUPiwgdGFyZ2V0OiBUKSA9PntcclxuICAgIHZhciBpbmRleCA9IGFycmF5LmluZGV4T2YodGFyZ2V0KTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgYXJyYXkuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxufVxyXG5cclxuLy/lpI3liLbmlbDnu4RcclxuZXhwb3J0IGxldCBBcnJheUNvcHkgPSAgPFQ+KGFycmF5OiBBcnJheTxUPiwgdGFyZ2V0OiBBcnJheTxUPikgPT4ge1xyXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFycmF5Lmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBhcnJheVtpbmRleF07XHJcbiAgICAgICAgdGFyZ2V0LnB1c2goZWxlbWVudClcclxuICAgIH1cclxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/res/ResUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f1c9aX+PYFLdZk4pWn51KJT', 'ResUtil');
// script/framework/res/ResUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clog_1 = require("../clog/Clog");
var ResManager_1 = require("./ResManager");
var StringUtil_1 = require("../util/StringUtil");
var ResUtil = /** @class */ (function () {
    function ResUtil() {
    }
    //加载网络图片
    ResUtil.LoadNetImage = function (path, obj) {
        if (StringUtil_1.IsNullOrEmpty(path)) {
            Clog_1.default.Warn(Clog_1.ClogKey.Res, "LoadNetImg Path Error:" + path);
            return;
        }
        if (!StringUtil_1.CheckNetUrl(path)) {
            return;
        }
        var index = path.lastIndexOf('/');
        var headUrl = path.slice(0, index) + '/0';
        cc.loader.load({ url: headUrl, type: 'jpg' }, function (err, pic) {
            if (err) {
                Clog_1.default.Warn(Clog_1.ClogKey.Res, 'LoadNetImg load error,error:' + err);
                return;
            }
            if (obj.node == null) {
                Clog_1.default.Error('LoadNetImg load error>>>>>>>>obj.node==null');
                return;
            }
            var spriteFrame = new cc.SpriteFrame(pic);
            obj.spriteFrame = spriteFrame;
        });
    };
    //改变图片
    ResUtil.ChangeSprite = function (name, sprite) {
        if (sprite == null) {
            return;
        }
        if (StringUtil_1.IsNullOrEmpty(name)) {
            Clog_1.default.Error('ChangeSprite name is Empty!');
            return;
        }
        if (sprite.spriteFrame != null && sprite.spriteFrame.name == name) {
            return;
        }
        ResManager_1.ResManager.LoadRes(name, cc.SpriteFrame, function (error, res) {
            if (error) {
                Clog_1.default.Error('ChangeSprite Error!, name:' + name + ",err" + JSON.stringify(error));
                return;
            }
            if (sprite.isValid) {
                sprite.spriteFrame = res;
            }
        });
    };
    return ResUtil;
}());
exports.default = ResUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHJlc1xcUmVzVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE2QztBQUU3QywyQ0FBMEM7QUFDMUMsaURBQWdFO0FBR2hFO0lBQUE7SUFzREEsQ0FBQztJQW5ERyxRQUFRO0lBQ00sb0JBQVksR0FBMUIsVUFBMkIsSUFBWSxFQUFFLEdBQWM7UUFDbkQsSUFBSSwwQkFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JCLGNBQUksQ0FBQyxJQUFJLENBQUMsY0FBTyxDQUFDLEdBQUcsRUFBRSx3QkFBd0IsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN4RCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsd0JBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMxQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDbkQsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsY0FBSSxDQUFDLElBQUksQ0FBQyxjQUFPLENBQUMsR0FBRyxFQUFFLDhCQUE4QixHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUM3RCxPQUFPO2FBQ1Y7WUFDRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNsQixjQUFJLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUE7Z0JBQ3pELE9BQU87YUFDVjtZQUNELElBQUksV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxHQUFHLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxNQUFNO0lBQ1Esb0JBQVksR0FBMUIsVUFBMkIsSUFBWSxFQUFFLE1BQWlCO1FBQ3RELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNoQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLDBCQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckIsY0FBSSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1lBQ3pDLE9BQU87U0FDVjtRQUVELElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQy9ELE9BQU87U0FDVjtRQUVELHVCQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBWSxFQUFFLEdBQW1CO1lBQ3ZFLElBQUksS0FBSyxFQUFFO2dCQUNQLGNBQUksQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7Z0JBQ2hGLE9BQU87YUFDVjtZQUNELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7YUFDNUI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0F0REEsQUFzREMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbG9nLCB7IENsb2dLZXkgfSBmcm9tIFwiLi4vY2xvZy9DbG9nXCI7XHJcblxyXG5pbXBvcnQgeyBSZXNNYW5hZ2VyIH0gZnJvbSBcIi4vUmVzTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDaGVja05ldFVybCwgSXNOdWxsT3JFbXB0eSB9IGZyb20gXCIuLi91dGlsL1N0cmluZ1V0aWxcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNVdGlsIHtcclxuXHJcblxyXG4gICAgLy/liqDovb3nvZHnu5zlm77niYdcclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZE5ldEltYWdlKHBhdGg6IHN0cmluZywgb2JqOiBjYy5TcHJpdGUpIHtcclxuICAgICAgICBpZiAoSXNOdWxsT3JFbXB0eShwYXRoKSkge1xyXG4gICAgICAgICAgICBDbG9nLldhcm4oQ2xvZ0tleS5SZXMsIFwiTG9hZE5ldEltZyBQYXRoIEVycm9yOlwiICsgcGF0aCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghQ2hlY2tOZXRVcmwocGF0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKCcvJyk7XHJcbiAgICAgICAgbGV0IGhlYWRVcmwgPSBwYXRoLnNsaWNlKDAsIGluZGV4KSArICcvMCc7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IGhlYWRVcmwsIHR5cGU6ICdqcGcnIH0sIChlcnIsIHBpYykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBDbG9nLldhcm4oQ2xvZ0tleS5SZXMsICdMb2FkTmV0SW1nIGxvYWQgZXJyb3IsZXJyb3I6JyArIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9iai5ub2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIENsb2cuRXJyb3IoJ0xvYWROZXRJbWcgbG9hZCBlcnJvcj4+Pj4+Pj4+b2JqLm5vZGU9PW51bGwnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShwaWMpO1xyXG4gICAgICAgICAgICBvYmouc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aUueWPmOWbvueJh1xyXG4gICAgcHVibGljIHN0YXRpYyBDaGFuZ2VTcHJpdGUobmFtZTogc3RyaW5nLCBzcHJpdGU6IGNjLlNwcml0ZSkge1xyXG4gICAgICAgIGlmIChzcHJpdGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoSXNOdWxsT3JFbXB0eShuYW1lKSkge1xyXG4gICAgICAgICAgICBDbG9nLkVycm9yKCdDaGFuZ2VTcHJpdGUgbmFtZSBpcyBFbXB0eSEnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3ByaXRlLnNwcml0ZUZyYW1lICE9IG51bGwgJiYgc3ByaXRlLnNwcml0ZUZyYW1lLm5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZXNNYW5hZ2VyLkxvYWRSZXMobmFtZSwgY2MuU3ByaXRlRnJhbWUsIChlcnJvcjogRXJyb3IsIHJlczogY2MuU3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBDbG9nLkVycm9yKCdDaGFuZ2VTcHJpdGUgRXJyb3IhLCBuYW1lOicgKyBuYW1lICsgXCIsZXJyXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwcml0ZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/util/SyncPromise.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHV0aWxcXFN5bmNQcm9taXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPOztBQUVQO0lBS0k7UUFBQSxpQkFLQztRQUpHLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN2QyxLQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztZQUN2QixLQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUN6QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFDTCxrQkFBQztBQUFELENBWEEsQUFXQyxJQUFBO0FBWFksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyDnlYzpnaLlkIzmraVcblxuZXhwb3J0IGNsYXNzIFN5bmNQcm9taXNlIHtcbiAgICByZXNvbHZlOiBhbnk7XG4gICAgcmVqZWN0OiBhbnk7XG4gICAgcHJvbWlzZTogUHJvbWlzZTxhbnk+O1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICAgICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login/view/UILoginFastRegister.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '680c6tN8YZAnaeAQbWvHnT/', 'UILoginFastRegister');
// script/login/view/UILoginFastRegister.ts

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
var UIEnum_1 = require("../../framework/ui/UIEnum");
var UIBase_1 = require("../../framework/ui/UIBase");
var UIEventCenter_1 = require("../../framework/util/UIEventCenter");
var UIManager_1 = require("../../framework/ui/UIManager");
var StringUtil_1 = require("../../framework/util/StringUtil");
var UITip_1 = require("../../commonUI/UITip");
var UILoginFastRegister = /** @class */ (function (_super) {
    __extends(UILoginFastRegister, _super);
    function UILoginFastRegister() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.PrefabName = 'PanelLoginFastRegister';
        _this.OpenTween = UIEnum_1.EnumUIOpenTween.Scale;
        _this.CloseTween = UIEnum_1.EnumUICloseTween.Scale;
        return _this;
    }
    UILoginFastRegister.prototype.onLoad = function () {
        this._btnClose = cc.find('Close', this.node).getComponent(cc.Button);
        this._btnOK = cc.find('OK', this.node).getComponent(cc.Button);
        this._inputAccount = cc.find('Account/input', this.node).getComponent(cc.EditBox);
        this._inputPassword1 = cc.find('Password1/input', this.node).getComponent(cc.EditBox);
        this._inputPassword2 = cc.find('Password2/input', this.node).getComponent(cc.EditBox);
        this.initEvent();
    };
    UILoginFastRegister.prototype.initEvent = function () {
        var _this = this;
        UIEventCenter_1.UIEventCenter.ButtonEvent(this._btnClose, function () { return _this.OnBtnCloseClick(); });
        UIEventCenter_1.UIEventCenter.ButtonEvent(this._btnOK, function () { return _this.OnBtnOKClick(); });
    };
    UILoginFastRegister.prototype.OnBtnCloseClick = function () {
        UIManager_1.UIManager.CloseUI(UILoginFastRegister);
    };
    UILoginFastRegister.prototype.OnBtnOKClick = function () {
        if (StringUtil_1.IsNullOrEmpty(this._inputAccount.string)) {
            UITip_1.UITip.Info('您输入的账号为空');
            return;
        }
        if (StringUtil_1.IsNullOrEmpty(this._inputPassword1.string) || StringUtil_1.IsNullOrEmpty(this._inputPassword2.string)) {
            UITip_1.UITip.Info('您输入的密码为空');
            return;
        }
        if (this._inputPassword2.string != this._inputPassword1.string) {
            UITip_1.UITip.Info('您两次出输入的密码不一致');
            return;
        }
    };
    return UILoginFastRegister;
}(UIBase_1.UIBase));
exports.default = UILoginFastRegister;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcdmlld1xcVUlMb2dpbkZhc3RSZWdpc3Rlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBOEU7QUFDOUUsb0RBQW1EO0FBQ25ELG9FQUFtRTtBQUNuRSwwREFBeUQ7QUFDekQsOERBQWdFO0FBQ2hFLDhDQUE2QztBQUc3QztJQUFpRCx1Q0FBTTtJQUF2RDtRQUFBLHFFQWdEQztRQS9DVSxnQkFBVSxHQUFHLHdCQUF3QixDQUFBO1FBQ3JDLGVBQVMsR0FBRyx3QkFBZSxDQUFDLEtBQUssQ0FBQztRQUNsQyxnQkFBVSxHQUFHLHlCQUFnQixDQUFDLEtBQUssQ0FBQzs7SUE2Qy9DLENBQUM7SUFyQ0csb0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDcEUsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM5RCxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2pGLElBQUksQ0FBQyxlQUFlLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNyRixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDckYsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFTyx1Q0FBUyxHQUFqQjtRQUFBLGlCQUdDO1FBRkcsNkJBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLGVBQWUsRUFBRSxFQUF0QixDQUFzQixDQUFDLENBQUE7UUFDdkUsNkJBQWEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxjQUFNLE9BQUEsS0FBSSxDQUFDLFlBQVksRUFBRSxFQUFuQixDQUFtQixDQUFDLENBQUE7SUFDckUsQ0FBQztJQUdPLDZDQUFlLEdBQXZCO1FBQ0kscUJBQVMsQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtJQUMxQyxDQUFDO0lBRU8sMENBQVksR0FBcEI7UUFDSSxJQUFJLDBCQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQyxhQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3RCLE9BQU87U0FDVjtRQUVELElBQUksMEJBQWEsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxJQUFJLDBCQUFhLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxRixhQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3RCLE9BQU87U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEVBQUU7WUFDNUQsYUFBSyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQTtZQUMxQixPQUFPO1NBQ1Y7SUFHTCxDQUFDO0lBQ0wsMEJBQUM7QUFBRCxDQWhEQSxBQWdEQyxDQWhEZ0QsZUFBTSxHQWdEdEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbnVtVUlPcGVuVHdlZW4sIEVudW1VSUNsb3NlVHdlZW4gfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL1VJRW51bVwiO1xyXG5pbXBvcnQgeyBVSUJhc2UgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL1VJQmFzZVwiO1xyXG5pbXBvcnQgeyBVSUV2ZW50Q2VudGVyIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay91dGlsL1VJRXZlbnRDZW50ZXJcIjtcclxuaW1wb3J0IHsgVUlNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay91aS9VSU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgSXNOdWxsT3JFbXB0eSB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdXRpbC9TdHJpbmdVdGlsXCI7XHJcbmltcG9ydCB7IFVJVGlwIH0gZnJvbSBcIi4uLy4uL2NvbW1vblVJL1VJVGlwXCI7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVUlMb2dpbkZhc3RSZWdpc3RlciBleHRlbmRzIFVJQmFzZSB7XHJcbiAgICBwdWJsaWMgUHJlZmFiTmFtZSA9ICdQYW5lbExvZ2luRmFzdFJlZ2lzdGVyJ1xyXG4gICAgcHVibGljIE9wZW5Ud2VlbiA9IEVudW1VSU9wZW5Ud2Vlbi5TY2FsZTtcclxuICAgIHB1YmxpYyBDbG9zZVR3ZWVuID0gRW51bVVJQ2xvc2VUd2Vlbi5TY2FsZTtcclxuXHJcbiAgICBwcml2YXRlIF9idG5DbG9zZTogY2MuQnV0dG9uO1xyXG4gICAgcHJpdmF0ZSBfYnRuT0s6IGNjLkJ1dHRvbjtcclxuICAgIHByaXZhdGUgX2lucHV0QWNjb3VudDogY2MuRWRpdEJveDtcclxuICAgIHByaXZhdGUgX2lucHV0UGFzc3dvcmQxOiBjYy5FZGl0Qm94O1xyXG4gICAgcHJpdmF0ZSBfaW5wdXRQYXNzd29yZDI6IGNjLkVkaXRCb3g7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMuX2J0bkNsb3NlID0gY2MuZmluZCgnQ2xvc2UnLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXHJcbiAgICAgICAgdGhpcy5fYnRuT0sgPSBjYy5maW5kKCdPSycsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbilcclxuICAgICAgICB0aGlzLl9pbnB1dEFjY291bnQgPSBjYy5maW5kKCdBY2NvdW50L2lucHV0JywgdGhpcy5ub2RlKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveClcclxuICAgICAgICB0aGlzLl9pbnB1dFBhc3N3b3JkMSA9IGNjLmZpbmQoJ1Bhc3N3b3JkMS9pbnB1dCcsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpXHJcbiAgICAgICAgdGhpcy5faW5wdXRQYXNzd29yZDIgPSBjYy5maW5kKCdQYXNzd29yZDIvaW5wdXQnLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KVxyXG4gICAgICAgIHRoaXMuaW5pdEV2ZW50KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0RXZlbnQoKSB7XHJcbiAgICAgICAgVUlFdmVudENlbnRlci5CdXR0b25FdmVudCh0aGlzLl9idG5DbG9zZSwgKCkgPT4gdGhpcy5PbkJ0bkNsb3NlQ2xpY2soKSlcclxuICAgICAgICBVSUV2ZW50Q2VudGVyLkJ1dHRvbkV2ZW50KHRoaXMuX2J0bk9LLCAoKSA9PiB0aGlzLk9uQnRuT0tDbGljaygpKVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIE9uQnRuQ2xvc2VDbGljaygpIHtcclxuICAgICAgICBVSU1hbmFnZXIuQ2xvc2VVSShVSUxvZ2luRmFzdFJlZ2lzdGVyKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgT25CdG5PS0NsaWNrKCkge1xyXG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KHRoaXMuX2lucHV0QWNjb3VudC5zdHJpbmcpKSB7XHJcbiAgICAgICAgICAgIFVJVGlwLkluZm8oJ+aCqOi+k+WFpeeahOi0puWPt+S4uuepuicpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KHRoaXMuX2lucHV0UGFzc3dvcmQxLnN0cmluZykgfHwgSXNOdWxsT3JFbXB0eSh0aGlzLl9pbnB1dFBhc3N3b3JkMi5zdHJpbmcpKSB7XHJcbiAgICAgICAgICAgIFVJVGlwLkluZm8oJ+aCqOi+k+WFpeeahOWvhueggeS4uuepuicpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9pbnB1dFBhc3N3b3JkMi5zdHJpbmcgIT0gdGhpcy5faW5wdXRQYXNzd29yZDEuc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIFVJVGlwLkluZm8oJ+aCqOS4pOasoeWHuui+k+WFpeeahOWvhueggeS4jeS4gOiHtCcpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/util/UIEventCenter.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0eed05Mn0ZKKYmAUrDn/LlP', 'UIEventCenter');
// script/framework/util/UIEventCenter.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StringUtil_1 = require("./StringUtil");
var AudioManager_1 = require("../audio/AudioManager");
var UIEventCenter = /** @class */ (function () {
    function UIEventCenter() {
    }
    //按钮点击方法封装
    UIEventCenter.ButtonEvent = function (btn, callback, clickSoundName, disableTime) {
        if (clickSoundName === void 0) { clickSoundName = "S_Button"; }
        if (disableTime === void 0) { disableTime = 0.4; }
        btn.node.on("click", function () {
            if (!btn.interactable) {
                return;
            }
            if (!StringUtil_1.IsNullOrEmpty(clickSoundName)) {
                AudioManager_1.AudioManager.PlaySound(clickSoundName);
            }
            //如果屏蔽时间大于0，点击之后屏蔽
            if (disableTime > 0) {
                btn.interactable = false; //禁用按钮 一定时间后再启用，防连击
                window.setTimeout(function () { if (btn) {
                    btn.interactable = true;
                } }, disableTime * 1000);
            }
            callback();
        });
    };
    //在节点上移动方法封装
    UIEventCenter.TouchNodeStart = function (node, callback) {
        node.on(cc.Node.EventType.TOUCH_START, function (e) { callback(e); });
    };
    UIEventCenter.TouchNodeEnd = function (node, callback) {
        node.on(cc.Node.EventType.TOUCH_END, function (e) { callback(e); });
    };
    UIEventCenter.TouchNodeCancel = function (node, callback) {
        node.on(cc.Node.EventType.TOUCH_CANCEL, function (e) { callback(e); });
    };
    UIEventCenter.TouchNodeMove = function (node, callback) {
        node.on(cc.Node.EventType.TOUCH_MOVE, function (e) { callback(e); });
    };
    UIEventCenter.ScrollSelect = function () {
    };
    return UIEventCenter;
}());
exports.UIEventCenter = UIEventCenter;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHV0aWxcXFVJRXZlbnRDZW50ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSwyQ0FBNkM7QUFDN0Msc0RBQXFEO0FBR3JEO0lBQUE7SUF3Q0EsQ0FBQztJQXRDRyxVQUFVO0lBQ0kseUJBQVcsR0FBekIsVUFBMEIsR0FBYyxFQUFFLFFBQWtCLEVBQUUsY0FBbUMsRUFBRSxXQUF5QjtRQUE5RCwrQkFBQSxFQUFBLDJCQUFtQztRQUFFLDRCQUFBLEVBQUEsaUJBQXlCO1FBQ3hILEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRTtZQUNqQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRTtnQkFDbkIsT0FBTzthQUNWO1lBQ0QsSUFBSSxDQUFDLDBCQUFhLENBQUMsY0FBYyxDQUFDLEVBQUU7Z0JBQ2hDLDJCQUFZLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQzFDO1lBQ0Qsa0JBQWtCO1lBQ2xCLElBQUksV0FBVyxHQUFHLENBQUMsRUFBRTtnQkFDakIsR0FBRyxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUMsQ0FBTSxtQkFBbUI7Z0JBQ2xELE1BQU0sQ0FBQyxVQUFVLENBQUMsY0FBUSxJQUFJLEdBQUcsRUFBRTtvQkFBRSxHQUFHLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQTtpQkFBRSxDQUFDLENBQUMsRUFBRSxXQUFXLEdBQUMsSUFBSSxDQUFDLENBQUE7YUFDdEY7WUFDRCxRQUFRLEVBQUUsQ0FBQTtRQUNkLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELFlBQVk7SUFDRSw0QkFBYyxHQUE1QixVQUE2QixJQUFhLEVBQUUsUUFBMEM7UUFDbEYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsVUFBQyxDQUFzQixJQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hGLENBQUM7SUFFYSwwQkFBWSxHQUExQixVQUEyQixJQUFhLEVBQUUsUUFBMEM7UUFDaEYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsVUFBQyxDQUFzQixJQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RGLENBQUM7SUFFYSw2QkFBZSxHQUE3QixVQUE4QixJQUFhLEVBQUUsUUFBMEM7UUFDbkYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsVUFBQyxDQUFzQixJQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pGLENBQUM7SUFFYSwyQkFBYSxHQUEzQixVQUE0QixJQUFhLEVBQUUsUUFBMEM7UUFDakYsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsVUFBQyxDQUFzQixJQUFPLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3ZGLENBQUM7SUFFYSwwQkFBWSxHQUExQjtJQUVBLENBQUM7SUFDTCxvQkFBQztBQUFELENBeENBLEFBd0NDLElBQUE7QUF4Q1ksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IElzTnVsbE9yRW1wdHkgfSBmcm9tIFwiLi9TdHJpbmdVdGlsXCI7XG5pbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tIFwiLi4vYXVkaW8vQXVkaW9NYW5hZ2VyXCI7XG5cblxuZXhwb3J0IGNsYXNzIFVJRXZlbnRDZW50ZXIge1xuXG4gICAgLy/mjInpkq7ngrnlh7vmlrnms5XlsIHoo4VcbiAgICBwdWJsaWMgc3RhdGljIEJ1dHRvbkV2ZW50KGJ0bjogY2MuQnV0dG9uLCBjYWxsYmFjazogRnVuY3Rpb24sIGNsaWNrU291bmROYW1lOiBzdHJpbmcgPSBcIlNfQnV0dG9uXCIsIGRpc2FibGVUaW1lOiBudW1iZXIgPSAwLjQpIHtcbiAgICAgICAgYnRuLm5vZGUub24oXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoIWJ0bi5pbnRlcmFjdGFibGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIUlzTnVsbE9yRW1wdHkoY2xpY2tTb3VuZE5hbWUpKSB7XG4gICAgICAgICAgICAgICAgQXVkaW9NYW5hZ2VyLlBsYXlTb3VuZChjbGlja1NvdW5kTmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+WmguaenOWxj+iUveaXtumXtOWkp+S6jjDvvIzngrnlh7vkuYvlkI7lsY/olL1cbiAgICAgICAgICAgIGlmIChkaXNhYmxlVGltZSA+IDApIHtcbiAgICAgICAgICAgICAgICBidG4uaW50ZXJhY3RhYmxlID0gZmFsc2U7ICAgICAgLy/npoHnlKjmjInpkq4g5LiA5a6a5pe26Ze05ZCO5YaN5ZCv55So77yM6Ziy6L+e5Ye7XG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4geyBpZiAoYnRuKSB7IGJ0bi5pbnRlcmFjdGFibGUgPSB0cnVlIH0gfSwgZGlzYWJsZVRpbWUqMTAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhbGxiYWNrKClcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICAvL+WcqOiKgueCueS4iuenu+WKqOaWueazleWwgeijhVxuICAgIHB1YmxpYyBzdGF0aWMgVG91Y2hOb2RlU3RhcnQobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s6IChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB2b2lkKSB7XG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB7IGNhbGxiYWNrKGUpIH0pO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgVG91Y2hOb2RlRW5kKG5vZGU6IGNjLk5vZGUsIGNhbGxiYWNrOiAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4gdm9pZCkge1xuICAgICAgICBub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHsgY2FsbGJhY2soZSkgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBUb3VjaE5vZGVDYW5jZWwobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s6IChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB2b2lkKSB7XG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCAoZTogY2MuRXZlbnQuRXZlbnRUb3VjaCkgPT4geyBjYWxsYmFjayhlKSB9KTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc3RhdGljIFRvdWNoTm9kZU1vdmUobm9kZTogY2MuTm9kZSwgY2FsbGJhY2s6IChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSA9PiB2b2lkKSB7XG4gICAgICAgIG5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgKGU6IGNjLkV2ZW50LkV2ZW50VG91Y2gpID0+IHsgY2FsbGJhY2soZSkgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBTY3JvbGxTZWxlY3QoKXtcblxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login/view/UILoginFast.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '18dde6cVHVFwLGr0ZjcMLSg', 'UILoginFast');
// script/login/view/UILoginFast.ts

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
var UIBase_1 = require("../../framework/ui/UIBase");
var UIEnum_1 = require("../../framework/ui/UIEnum");
var UIEventCenter_1 = require("../../framework/util/UIEventCenter");
var StringUtil_1 = require("../../framework/util/StringUtil");
var UIManager_1 = require("../../framework/ui/UIManager");
var UILoginFastRegister_1 = require("./UILoginFastRegister");
var UITip_1 = require("../../commonUI/UITip");
var LoginController_1 = require("../controller/LoginController");
var UILoginFast = /** @class */ (function (_super) {
    __extends(UILoginFast, _super);
    function UILoginFast() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.OpenTween = UIEnum_1.EnumUIOpenTween.Scale;
        _this.CloseTween = UIEnum_1.EnumUICloseTween.Scale;
        _this.PrefabName = 'PanelLoginFast';
        return _this;
    }
    UILoginFast.prototype.start = function () {
        UILoginFast.Instance = this;
        this.InitRoot();
        this.InitEvent();
        this.Refresh();
    };
    //初始化各面板节点
    UILoginFast.prototype.InitRoot = function () {
        this._inputAccount = cc.find('Account/input', this.node).getComponent(cc.EditBox);
        this._inputPassword = cc.find('Password/input', this.node).getComponent(cc.EditBox);
        this._btnOK = cc.find('BtnOK', this.node).getComponent(cc.Button);
        this._btnClose = cc.find('BtnClose', this.node).getComponent(cc.Button);
        this._btnRegister = cc.find('BtnRegister', this.node).getComponent(cc.Button);
        this._fastRegister = cc.find('FastRegister', this.node);
    };
    UILoginFast.prototype.InitEvent = function () {
        var _this = this;
        UIEventCenter_1.UIEventCenter.ButtonEvent(this._btnOK, function () { return _this.OnBtnOKClick(); });
        UIEventCenter_1.UIEventCenter.ButtonEvent(this._btnClose, function () { return _this.OnBtnCloseClick(); });
        UIEventCenter_1.UIEventCenter.ButtonEvent(this._btnRegister, function () { return _this.OnBtnRegisterClick(); });
    };
    UILoginFast.prototype.Refresh = function () {
    };
    UILoginFast.prototype.OnBtnOKClick = function () {
        if (StringUtil_1.IsNullOrEmpty(this._inputAccount.string)) {
            UITip_1.UITip.Info('您输入的账号为空');
            return;
        }
        if (StringUtil_1.IsNullOrEmpty(this._inputPassword.string)) {
            UITip_1.UITip.Info('您输入的为空');
            return;
        }
        LoginController_1.LoginController.HttpLogin(this._inputAccount.string, this._inputPassword.string);
    };
    UILoginFast.prototype.OnBtnCloseClick = function () {
        UIManager_1.UIManager.CloseUI(UILoginFast);
    };
    UILoginFast.prototype.OnBtnRegisterClick = function () {
        UIManager_1.UIManager.OpenUI(UILoginFastRegister_1.default);
    };
    return UILoginFast;
}(UIBase_1.UIBase));
exports.UILoginFast = UILoginFast;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcdmlld1xcVUlMb2dpbkZhc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0RBQW1EO0FBQ25ELG9EQUE4RTtBQUM5RSxvRUFBbUU7QUFDbkUsOERBQWdFO0FBQ2hFLDBEQUF5RDtBQUN6RCw2REFBd0Q7QUFDeEQsOENBQTZDO0FBQzdDLGlFQUFnRTtBQUloRTtJQUFpQywrQkFBTTtJQUF2QztRQUFBLHFFQStEQztRQTVEVSxlQUFTLEdBQUcsd0JBQWUsQ0FBQyxLQUFLLENBQUM7UUFDbEMsZ0JBQVUsR0FBRyx5QkFBZ0IsQ0FBQyxLQUFLLENBQUM7UUFDcEMsZ0JBQVUsR0FBRyxnQkFBZ0IsQ0FBQTs7SUEwRHhDLENBQUM7SUFqREcsMkJBQUssR0FBTDtRQUNJLFdBQVcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQzVCLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFRCxVQUFVO0lBQ0YsOEJBQVEsR0FBaEI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ2pGLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUNuRixJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ2pFLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUE7UUFDdkUsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQTtRQUM3RSxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUMzRCxDQUFDO0lBRU8sK0JBQVMsR0FBakI7UUFBQSxpQkFLQztRQUhHLDZCQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxZQUFZLEVBQUUsRUFBbkIsQ0FBbUIsQ0FBQyxDQUFBO1FBQ2pFLDZCQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxlQUFlLEVBQUUsRUFBdEIsQ0FBc0IsQ0FBQyxDQUFBO1FBQ3ZFLDZCQUFhLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsY0FBTSxPQUFBLEtBQUksQ0FBQyxrQkFBa0IsRUFBRSxFQUF6QixDQUF5QixDQUFDLENBQUE7SUFDakYsQ0FBQztJQUVNLDZCQUFPLEdBQWQ7SUFFQSxDQUFDO0lBRU8sa0NBQVksR0FBcEI7UUFDSSxJQUFJLDBCQUFhLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtZQUMxQyxhQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFBO1lBQ3RCLE9BQU87U0FDVjtRQUNELElBQUksMEJBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxFQUFFO1lBQzNDLGFBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7WUFDcEIsT0FBTztTQUNWO1FBRUQsaUNBQWUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUNwRixDQUFDO0lBRU8scUNBQWUsR0FBdkI7UUFDSSxxQkFBUyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0lBRU8sd0NBQWtCLEdBQTFCO1FBQ0kscUJBQVMsQ0FBQyxNQUFNLENBQUMsNkJBQW1CLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUwsa0JBQUM7QUFBRCxDQS9EQSxBQStEQyxDQS9EZ0MsZUFBTSxHQStEdEM7QUEvRFksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBVSUJhc2UgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL1VJQmFzZVwiO1xuaW1wb3J0IHsgRW51bVVJT3BlblR3ZWVuLCBFbnVtVUlDbG9zZVR3ZWVuIH0gZnJvbSBcIi4uLy4uL2ZyYW1ld29yay91aS9VSUVudW1cIjtcbmltcG9ydCB7IFVJRXZlbnRDZW50ZXIgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3V0aWwvVUlFdmVudENlbnRlclwiO1xuaW1wb3J0IHsgSXNOdWxsT3JFbXB0eSB9IGZyb20gXCIuLi8uLi9mcmFtZXdvcmsvdXRpbC9TdHJpbmdVdGlsXCI7XG5pbXBvcnQgeyBVSU1hbmFnZXIgfSBmcm9tIFwiLi4vLi4vZnJhbWV3b3JrL3VpL1VJTWFuYWdlclwiO1xuaW1wb3J0IFVJTG9naW5GYXN0UmVnaXN0ZXIgZnJvbSBcIi4vVUlMb2dpbkZhc3RSZWdpc3RlclwiO1xuaW1wb3J0IHsgVUlUaXAgfSBmcm9tIFwiLi4vLi4vY29tbW9uVUkvVUlUaXBcIjtcbmltcG9ydCB7IExvZ2luQ29udHJvbGxlciB9IGZyb20gXCIuLi9jb250cm9sbGVyL0xvZ2luQ29udHJvbGxlclwiO1xuXG5cblxuZXhwb3J0IGNsYXNzIFVJTG9naW5GYXN0IGV4dGVuZHMgVUlCYXNlIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IFVJTG9naW5GYXN0XG4gICAgcHVibGljIE9wZW5Ud2VlbiA9IEVudW1VSU9wZW5Ud2Vlbi5TY2FsZTtcbiAgICBwdWJsaWMgQ2xvc2VUd2VlbiA9IEVudW1VSUNsb3NlVHdlZW4uU2NhbGU7XG4gICAgcHVibGljIFByZWZhYk5hbWUgPSAnUGFuZWxMb2dpbkZhc3QnXG4gICAgcHJpdmF0ZSBfaW5wdXRBY2NvdW50OiBjYy5FZGl0Qm94O1xuICAgIHByaXZhdGUgX2lucHV0UGFzc3dvcmQ6IGNjLkVkaXRCb3g7XG4gICAgcHJpdmF0ZSBfYnRuT0s6IGNjLkJ1dHRvbjtcbiAgICBwcml2YXRlIF9idG5DbG9zZTogY2MuQnV0dG9uO1xuICAgIHByaXZhdGUgX2J0blJlZ2lzdGVyOiBjYy5CdXR0b247XG4gICAgcHJpdmF0ZSBfZmFzdFJlZ2lzdGVyOiBjYy5Ob2RlO1xuXG5cbiAgICBzdGFydCgpIHtcbiAgICAgICAgVUlMb2dpbkZhc3QuSW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB0aGlzLkluaXRSb290KCk7XG4gICAgICAgIHRoaXMuSW5pdEV2ZW50KCk7XG4gICAgICAgIHRoaXMuUmVmcmVzaCgpO1xuICAgIH1cblxuICAgIC8v5Yid5aeL5YyW5ZCE6Z2i5p2/6IqC54K5XG4gICAgcHJpdmF0ZSBJbml0Um9vdCgpIHtcbiAgICAgICAgdGhpcy5faW5wdXRBY2NvdW50ID0gY2MuZmluZCgnQWNjb3VudC9pbnB1dCcsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpXG4gICAgICAgIHRoaXMuX2lucHV0UGFzc3dvcmQgPSBjYy5maW5kKCdQYXNzd29yZC9pbnB1dCcsIHRoaXMubm9kZSkuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpXG4gICAgICAgIHRoaXMuX2J0bk9LID0gY2MuZmluZCgnQnRuT0snLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXG4gICAgICAgIHRoaXMuX2J0bkNsb3NlID0gY2MuZmluZCgnQnRuQ2xvc2UnLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXG4gICAgICAgIHRoaXMuX2J0blJlZ2lzdGVyID0gY2MuZmluZCgnQnRuUmVnaXN0ZXInLCB0aGlzLm5vZGUpLmdldENvbXBvbmVudChjYy5CdXR0b24pXG4gICAgICAgIHRoaXMuX2Zhc3RSZWdpc3RlciA9IGNjLmZpbmQoJ0Zhc3RSZWdpc3RlcicsIHRoaXMubm9kZSlcbiAgICB9XG5cbiAgICBwcml2YXRlIEluaXRFdmVudCgpIHtcblxuICAgICAgICBVSUV2ZW50Q2VudGVyLkJ1dHRvbkV2ZW50KHRoaXMuX2J0bk9LLCAoKSA9PiB0aGlzLk9uQnRuT0tDbGljaygpKVxuICAgICAgICBVSUV2ZW50Q2VudGVyLkJ1dHRvbkV2ZW50KHRoaXMuX2J0bkNsb3NlLCAoKSA9PiB0aGlzLk9uQnRuQ2xvc2VDbGljaygpKVxuICAgICAgICBVSUV2ZW50Q2VudGVyLkJ1dHRvbkV2ZW50KHRoaXMuX2J0blJlZ2lzdGVyLCAoKSA9PiB0aGlzLk9uQnRuUmVnaXN0ZXJDbGljaygpKVxuICAgIH1cblxuICAgIHB1YmxpYyBSZWZyZXNoKCkge1xuXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBPbkJ0bk9LQ2xpY2soKSB7XG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KHRoaXMuX2lucHV0QWNjb3VudC5zdHJpbmcpKSB7XG4gICAgICAgICAgICBVSVRpcC5JbmZvKCfmgqjovpPlhaXnmoTotKblj7fkuLrnqbonKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChJc051bGxPckVtcHR5KHRoaXMuX2lucHV0UGFzc3dvcmQuc3RyaW5nKSkge1xuICAgICAgICAgICAgVUlUaXAuSW5mbygn5oKo6L6T5YWl55qE5Li656m6JylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIExvZ2luQ29udHJvbGxlci5IdHRwTG9naW4odGhpcy5faW5wdXRBY2NvdW50LnN0cmluZywgdGhpcy5faW5wdXRQYXNzd29yZC5zdHJpbmcpXG4gICAgfVxuXG4gICAgcHJpdmF0ZSBPbkJ0bkNsb3NlQ2xpY2soKSB7XG4gICAgICAgIFVJTWFuYWdlci5DbG9zZVVJKFVJTG9naW5GYXN0KVxuICAgIH1cblxuICAgIHByaXZhdGUgT25CdG5SZWdpc3RlckNsaWNrKCkge1xuICAgICAgICBVSU1hbmFnZXIuT3BlblVJKFVJTG9naW5GYXN0UmVnaXN0ZXIpXG4gICAgfVxuXG59XG5cblxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/battle/map/modle/ConfigMap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6cb2e/rrGNDOoJExF3fqsbV', 'ConfigMap');
// script/battle/map/modle/ConfigMap.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ConfigMap = /** @class */ (function () {
    function ConfigMap() {
    }
    ConfigMap.Map = [
        [301, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 803, 0, 0, 0, 0, 801, 0, 0, 0, 804, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 301, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 802, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 302, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 303, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 801, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 301, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 302, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 303, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 802, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 201, 202, 203, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 204, 205, 206, 0, 0, 0, 0, 0, 803, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 207, 208, 209, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 804, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,],
    ];
    return ConfigMap;
}());
exports.ConfigMap = ConfigMap;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0bGVcXG1hcFxcbW9kbGVcXENvbmZpZ01hcC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0lBQUE7SUFrQ0EsQ0FBQztJQS9CaUIsYUFBRyxHQUFjO1FBQzNCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN6SixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDdkosQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZKLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN2SixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDN0osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZKLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUMzSixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDekosQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzNKLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN6SixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDekosQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3pKLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN2SixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDdkosQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3pKLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUM3SixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDL0osQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzdKLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN6SixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDdkosQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZKLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN2SixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDdkosQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQ3ZKLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUN2SixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7S0FDMUosQ0FBQTtJQUlMLGdCQUFDO0NBbENELEFBa0NDLElBQUE7QUFsQ1ksOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ29uZmlnTWFwIHtcblxuXG4gICAgcHVibGljIHN0YXRpYyBNYXA6IG51bWJlcltdW109IFtcbiAgICAgICAgWzMwMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgODAzLCAwLCAwLCAwLCAwLCA4MDEsIDAsIDAsIDAsIDgwNCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMzAxLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA4MDIsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDMwMiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMzAzLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA4MDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDMwMSwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMzAyLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAzMDMsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDgwMiwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMjAxLCAyMDIsIDIwMywgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxdLFxuICAgICAgICBbMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMjA0LCAyMDUsIDIwNiwgMCwgMCwgMCwgMCwgMCwgODAzLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAyMDcsIDIwOCwgMjA5LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLF0sXG4gICAgICAgIFswLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCA4MDQsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXSxcbiAgICAgICAgWzAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXSxcbiAgICBdXG5cbiAgICBcblxufSJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/battle/map/control/MapController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '45c12elLtlOaqk+2I7DbDZn', 'MapController');
// script/battle/map/control/MapController.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapController = /** @class */ (function () {
    function MapController() {
    }
    MapController.CurMapId = 1;
    return MapController;
}());
exports.MapController = MapController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxiYXR0bGVcXG1hcFxcY29udHJvbFxcTWFwQ29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0lBQUE7SUFJQSxDQUFDO0lBRmlCLHNCQUFRLEdBQVEsQ0FBQyxDQUFDO0lBRXBDLG9CQUFDO0NBSkQsQUFJQyxJQUFBO0FBSlksc0NBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcblxuXG5leHBvcnQgY2xhc3MgTWFwQ29udHJvbGxlciB7XG5cbiAgICBwdWJsaWMgc3RhdGljIEN1ck1hcElkOm51bWJlcj0xO1xuXG59Il19
//------QC-SOURCE-SPLIT------
