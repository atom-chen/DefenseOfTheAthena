
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