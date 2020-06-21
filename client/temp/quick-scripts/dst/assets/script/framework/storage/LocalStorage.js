
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