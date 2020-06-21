"use strict";
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