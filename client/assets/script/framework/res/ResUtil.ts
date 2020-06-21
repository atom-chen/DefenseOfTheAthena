import Clog, { ClogKey } from "../clog/Clog";

import { ResManager } from "./ResManager";
import { CheckNetUrl, IsNullOrEmpty } from "../util/StringUtil";


export default class ResUtil {


    //加载网络图片
    public static LoadNetImage(path: string, obj: cc.Sprite) {
        if (IsNullOrEmpty(path)) {
            Clog.Warn(ClogKey.Res, "LoadNetImg Path Error:" + path);
            return;
        }

        if (!CheckNetUrl(path)) {
            return;
        }
        let index = path.lastIndexOf('/');
        let headUrl = path.slice(0, index) + '/0';
        cc.loader.load({ url: headUrl, type: 'jpg' }, (err, pic) => {
            if (err) {
                Clog.Warn(ClogKey.Res, 'LoadNetImg load error,error:' + err);
                return;
            }
            if (obj.node == null) {
                Clog.Error('LoadNetImg load error>>>>>>>>obj.node==null')
                return;
            }
            let spriteFrame = new cc.SpriteFrame(pic);
            obj.spriteFrame = spriteFrame;
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
            if (sprite.isValid) {
                sprite.spriteFrame = res;
            }
        });
    }
}

