import { AudioManager } from "../audio/AudioManager";

import Clog, { ClogKey } from "../clog/Clog";
import { IsNullOrEmpty } from "../util/StringUtil";

export class LocalStorage {

    //声音音量
    private static _soundVolume: number = null;
    public static get SoundVolume(): number {
        if (this._soundVolume == null)
            this._soundVolume = LocalStorageUtil.GetNumber('SoundVolume', 1)
        return this._soundVolume;
    }
    public static set SoundVolume(value: number) {
        this._soundVolume = value
        LocalStorageUtil.SetNumber('SoundVolume', this._soundVolume)
        AudioManager.SetSoundVolume(value);
    }

    //音乐音量
    private static musicVolume: number = null;
    public static get MusicVolume(): number {
        if (this.musicVolume == null)
            this.musicVolume = LocalStorageUtil.GetNumber('MusicVolume', 1)
        return this.musicVolume;
    }
    public static set MusicVolume(value: number) {
        this.musicVolume = value
        LocalStorageUtil.SetNumber('MusicVolume', this.musicVolume)
        AudioManager.SetMusicVolume(value);
    }

}


class LocalStorageUtil {

    public static SetString(key: string, stringValue: string) {
        cc.sys.localStorage.setItem(key, stringValue)
    }

    public static GetString(key: string, defaultValue?: string) {
        var str = cc.sys.localStorage.getItem(key)
        if (str != null) {
            return str;
        }
        if (str == null && defaultValue != null) {
            return defaultValue;
        }
        return null;
    }

    public static SetBool(key: string, boolValue: boolean) {
        if (boolValue) {
            cc.sys.localStorage.setItem(key, 'true')
        }
        else {
            cc.sys.localStorage.setItem(key, 'false')
        }
    }

    public static GetBool(key: string, defaultValue?: boolean): boolean {
        var str = cc.sys.localStorage.getItem(key)
        if (str == 'true') {
            return true;
        }
        if (str == 'false') {
            return false;
        }
        if (IsNullOrEmpty(str) && defaultValue != null) {
            return defaultValue;
        }
        if (IsNullOrEmpty(str) && defaultValue == null) {
            return false;
        }
    }

    public static SetNumber(key: string, numValue: number) {
        if (numValue != null) {
            cc.sys.localStorage.setItem(key, numValue)
        }
    }

    public static GetNumber(key: string, defaultValue?: number): number {
        var value = cc.sys.localStorage.getItem(key)
        if (value == null && defaultValue != null) {
            Clog.Orange(ClogKey.LocalStorage, 'LocalStorage get Number is null or empty ,return defult false!')
            return defaultValue;
        }
        if (value == null && defaultValue == null) {
            Clog.Orange(ClogKey.LocalStorage, 'LocalStorage get Number is null ,defult is null, return -1!')
            return -1;
        }
        let v = Number(value);
        return isNaN(v) ? defaultValue : v;
    }
}