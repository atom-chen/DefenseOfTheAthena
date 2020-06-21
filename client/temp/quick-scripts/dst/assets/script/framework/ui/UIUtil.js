
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