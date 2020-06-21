import Clog, { ClogKey } from "../clog/Clog";
import { IsNullOrEmpty, CheckNetUrl } from "../util/StringUtil";
import { ResManager } from "../res/ResManager";



export class UIUtil {


    //设置玩家头像
    public static SetHeadIcon(iconId: string, iconSprite: cc.Sprite, playerId?: string) {
        if (iconSprite == null) {
            Clog.Error('iconSprite is null ');
            return;
        }

        iconId = (Number(playerId) % 50).toString();
        //非网络图片为 0~19的字符
        if (IsNullOrEmpty(iconId)) {
            iconId = 'T_HeadIcon_0'
        }
        else {
            iconId = 'T_HeadIcon_' + Number(iconId);
        }

        this.ChangeSprite(iconId, iconSprite);
    }



    //加载远程图片
    public static LoadRemoteImage(path: string, sprite: cc.Sprite) {
        if (IsNullOrEmpty(path)) {
            Clog.Warn(ClogKey.UI, "LoadNetImg path error:" + path);
            return;
        }

        if (!CheckNetUrl(path)) {
            return;
        }
        Clog.Orange(ClogKey.Net, "LoadRemoteImage url:" + path);

        cc.loader.load({ url: path }, (err, image) => {
            if (err) {
                Clog.Warn(ClogKey.UI, 'LoadNetImg load error,error:' + err);
                return;
            }
            if (sprite.node == null) {
                Clog.Error('LoadNetImg load error>>>>>>>>obj.node==null')
                return;
            }
            let spriteFrame = new cc.SpriteFrame(image);
            sprite.spriteFrame = spriteFrame;
        });
    }

    //改变图片
    public static ChangeSprite(name: string, sprite: cc.Sprite) {
        if (sprite == null) {
            return;
        }

        if (IsNullOrEmpty(name)) {
            Clog.Error('ChangeSprite name is Empty!')
            return;
        }

        if (sprite.spriteFrame != null && sprite.spriteFrame.name == name) {
            return;
        }

        ResManager.LoadRes(name, cc.SpriteFrame, (error: Error, res: cc.SpriteFrame) => {
            if (error) {
                Clog.Error('ChangeSprite Error!, name:' + name + ",err" + JSON.stringify(error))
                return;
            }
            let sf = res;
            if (sprite.isValid) {
                sprite.spriteFrame = sf;
            }
        });
    }

    public static async CreateAnimationClip(name: string): Promise<cc.AnimationClip> {
        return new Promise(resolve => {
            if (IsNullOrEmpty(name)) {
                Clog.Error('CreateAnimationClip name is Empty!')
                resolve(null);
                return;
            }

            cc.loader.loadResDir(name, cc.SpriteFrame, function (err: Error, spriteFrames: cc.SpriteFrame[], urls: string[]) {
                if (err) {
                    Clog.Error('CreateAnimationClip Error!, name:' + name + ",err" + JSON.stringify(err));
                    resolve(null);
                    return;
                }

                let frames = [];
                frames.push(...spriteFrames);

                // @ts-ignore
                frames.sort((a, b) => {
                    return a.name == b.name ? 0 : a.name < b.name ? -1 : 1;
                });

                // hack cc.AnimationClip.createWithSpriteFrames(spriteFrames, sample)
                // 参照creator版本2.3.3
                let createWithSpriteFrames = function (spriteFrames: cc.SpriteFrame[], sample: number) {
                    var clip = new cc.AnimationClip();
                    clip.sample = sample || clip.sample;

                    let frames = [];
                    let duration = 0;
                    for (let i = 0, l = spriteFrames.length; i < l; i++) {
                        let index = spriteFrames[i].name.lastIndexOf('-');
                        let time = parseInt(spriteFrames[i].name.substr(index + 1));
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
                }

                // resolve(cc.AnimationClip.createWithSpriteFrames(spriteFrames, 30));
                resolve(createWithSpriteFrames(spriteFrames, 30));
            });
        });
    }

    /**
   * 动态加载龙骨
   * @param animationDisplay  龙骨组件
   * @param name              龙骨地址
   * @param armatureName      Armature名称
   * @param animName          Animation名称
   * @param playTimes         播放次数 -1是根据龙骨文件 0五险循环 >0是播放次数
   */
    public static LoadDragonBones(animationDisplay: dragonBones.ArmatureDisplay, path: string, armatureName: string, animName: string, playTimes = 1): Promise<boolean> {  //动态加载龙骨

        return new Promise((reslove) => {
            cc.loader.loadResDir(path, (err, assets) => {

                if (err || assets.length <= 0) {
                    reslove(false)
                    return;
                }

                assets.forEach(asset => {
                    if (asset instanceof dragonBones.DragonBonesAsset) {
                        animationDisplay.dragonAsset = asset;
                    }
                    if (asset instanceof dragonBones.DragonBonesAtlasAsset) {
                        animationDisplay.dragonAtlasAsset = asset;
                    }
                });

                animationDisplay.armatureName = armatureName;
                animationDisplay.playAnimation(animName, playTimes);
                animationDisplay.addEventListener(dragonBones.EventObject.COMPLETE, () => {
                    animationDisplay.removeEventListener(dragonBones.EventObject.COMPLETE)
                    reslove(true)
                });
            })
        })
    }


}