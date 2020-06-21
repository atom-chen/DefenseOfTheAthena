"use strict";
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