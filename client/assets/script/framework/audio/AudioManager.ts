
import { IsNullOrEmpty } from "../util/StringUtil";
import Clog from "../clog/Clog";
import { LocalStorage } from "../storage/LocalStorage";
import { ResManager } from "../res/ResManager";


export class AudioManager {

    private static EffectSoundList: Map<string, Array<number>>;

    //初始化
    public static Init() {
        this.EffectSoundList = new Map<string, Array<number>>();
        cc.audioEngine.setMusicVolume(LocalStorage.MusicVolume)
        cc.audioEngine.setEffectsVolume(LocalStorage.SoundVolume)
    }

    //播放音乐 
    public static PlayMusic(name: string, isLoop: boolean = true, callBack: Function = null) {
        if (IsNullOrEmpty(name)) {
            return;
        }

        ResManager.LoadRes(name, cc.AudioClip, (err: Error, clip: cc.AudioClip) => {
            if (err) {
                Clog.Error("Load Music error! Music name= " + name + ",err:" + JSON.stringify(err));
                return;
            }
            let MusicId = cc.audioEngine.playMusic(clip, isLoop);
            cc.audioEngine.setFinishCallback(MusicId, () => {
                if (callBack) {
                    callBack();
                }
            })
            return;
        })
    }

    //关闭音乐
    public static StopMusic() {
        cc.audioEngine.stopMusic();
    }

    //播放音效
    public static PlaySound(name: string) {
        if (IsNullOrEmpty(name)) {
            return;
        }
        if (LocalStorage.SoundVolume <= 0.01) {
            return;
        }

        // 获取播放分组
        let SoundList = this.EffectSoundList.get(name);
        if (!SoundList) {
            SoundList = new Array<number>();
            this.EffectSoundList.set(name, SoundList);
        }

        // 每个声音播放最小间隔
        let now = new Date().getTime();
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
        ResManager.LoadRes(name, cc.AudioClip, (err: Error, clip: cc.AudioClip) => {
            if (err) {
                Clog.Error("Load Music error! Music name= " + name + ",err:" + JSON.stringify(err));
                return;
            }
            cc.audioEngine.playEffect(clip, false);
            return;
        })
    }

    //通过声音Id关闭音效
    public static StopSound(audioId: number) {
        if (audioId < 0) {
            return;
        }
        cc.audioEngine.stopEffect(audioId)
    }

    // 关闭所有循环的音频
    public static StopAllSounds() {
        cc.audioEngine.stopAllEffects()
    }

    //设置音效大小
    public static SetSoundVolume(value: number) {
        cc.audioEngine.setEffectsVolume(value)
    }

    //设置音乐大小
    public static SetMusicVolume(value: number) {
        cc.audioEngine.setMusicVolume(value)
    }
}

