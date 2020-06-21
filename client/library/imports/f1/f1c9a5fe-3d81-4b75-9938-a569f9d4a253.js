"use strict";
cc._RF.push(module, 'f1c9aX+PYFLdZk4pWn51KJT', 'ResUtil');
// script/framework/res/ResUtil.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Clog_1 = require("../clog/Clog");
var ResManager_1 = require("./ResManager");
var StringUtil_1 = require("../util/StringUtil");
var ResUtil = /** @class */ (function () {
    function ResUtil() {
    }
    //加载网络图片
    ResUtil.LoadNetImage = function (path, obj) {
        if (StringUtil_1.IsNullOrEmpty(path)) {
            Clog_1.default.Warn(Clog_1.ClogKey.Res, "LoadNetImg Path Error:" + path);
            return;
        }
        if (!StringUtil_1.CheckNetUrl(path)) {
            return;
        }
        var index = path.lastIndexOf('/');
        var headUrl = path.slice(0, index) + '/0';
        cc.loader.load({ url: headUrl, type: 'jpg' }, function (err, pic) {
            if (err) {
                Clog_1.default.Warn(Clog_1.ClogKey.Res, 'LoadNetImg load error,error:' + err);
                return;
            }
            if (obj.node == null) {
                Clog_1.default.Error('LoadNetImg load error>>>>>>>>obj.node==null');
                return;
            }
            var spriteFrame = new cc.SpriteFrame(pic);
            obj.spriteFrame = spriteFrame;
        });
    };
    //改变图片
    ResUtil.ChangeSprite = function (name, sprite) {
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
            if (sprite.isValid) {
                sprite.spriteFrame = res;
            }
        });
    };
    return ResUtil;
}());
exports.default = ResUtil;

cc._RF.pop();