"use strict";
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