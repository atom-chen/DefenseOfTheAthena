
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/framework/res/ResUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxmcmFtZXdvcmtcXHJlc1xcUmVzVXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUE2QztBQUU3QywyQ0FBMEM7QUFDMUMsaURBQWdFO0FBR2hFO0lBQUE7SUFzREEsQ0FBQztJQW5ERyxRQUFRO0lBQ00sb0JBQVksR0FBMUIsVUFBMkIsSUFBWSxFQUFFLEdBQWM7UUFDbkQsSUFBSSwwQkFBYSxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQ3JCLGNBQUksQ0FBQyxJQUFJLENBQUMsY0FBTyxDQUFDLEdBQUcsRUFBRSx3QkFBd0IsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUN4RCxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsd0JBQVcsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNwQixPQUFPO1NBQ1Y7UUFDRCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2xDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQztRQUMxQyxFQUFFLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFLFVBQUMsR0FBRyxFQUFFLEdBQUc7WUFDbkQsSUFBSSxHQUFHLEVBQUU7Z0JBQ0wsY0FBSSxDQUFDLElBQUksQ0FBQyxjQUFPLENBQUMsR0FBRyxFQUFFLDhCQUE4QixHQUFHLEdBQUcsQ0FBQyxDQUFDO2dCQUM3RCxPQUFPO2FBQ1Y7WUFDRCxJQUFJLEdBQUcsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO2dCQUNsQixjQUFJLENBQUMsS0FBSyxDQUFDLDZDQUE2QyxDQUFDLENBQUE7Z0JBQ3pELE9BQU87YUFDVjtZQUNELElBQUksV0FBVyxHQUFHLElBQUksRUFBRSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQyxHQUFHLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNsQyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxNQUFNO0lBQ1Esb0JBQVksR0FBMUIsVUFBMkIsSUFBWSxFQUFFLE1BQWlCO1FBQ3RELElBQUksTUFBTSxJQUFJLElBQUksRUFBRTtZQUNoQixPQUFPO1NBQ1Y7UUFFRCxJQUFJLDBCQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDckIsY0FBSSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFBO1lBQ3pDLE9BQU87U0FDVjtRQUVELElBQUksTUFBTSxDQUFDLFdBQVcsSUFBSSxJQUFJLElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFO1lBQy9ELE9BQU87U0FDVjtRQUVELHVCQUFVLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBWSxFQUFFLEdBQW1CO1lBQ3ZFLElBQUksS0FBSyxFQUFFO2dCQUNQLGNBQUksQ0FBQyxLQUFLLENBQUMsNEJBQTRCLEdBQUcsSUFBSSxHQUFHLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUE7Z0JBQ2hGLE9BQU87YUFDVjtZQUNELElBQUksTUFBTSxDQUFDLE9BQU8sRUFBRTtnQkFDaEIsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7YUFDNUI7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0F0REEsQUFzREMsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDbG9nLCB7IENsb2dLZXkgfSBmcm9tIFwiLi4vY2xvZy9DbG9nXCI7XHJcblxyXG5pbXBvcnQgeyBSZXNNYW5hZ2VyIH0gZnJvbSBcIi4vUmVzTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBDaGVja05ldFVybCwgSXNOdWxsT3JFbXB0eSB9IGZyb20gXCIuLi91dGlsL1N0cmluZ1V0aWxcIjtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNVdGlsIHtcclxuXHJcblxyXG4gICAgLy/liqDovb3nvZHnu5zlm77niYdcclxuICAgIHB1YmxpYyBzdGF0aWMgTG9hZE5ldEltYWdlKHBhdGg6IHN0cmluZywgb2JqOiBjYy5TcHJpdGUpIHtcclxuICAgICAgICBpZiAoSXNOdWxsT3JFbXB0eShwYXRoKSkge1xyXG4gICAgICAgICAgICBDbG9nLldhcm4oQ2xvZ0tleS5SZXMsIFwiTG9hZE5ldEltZyBQYXRoIEVycm9yOlwiICsgcGF0aCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghQ2hlY2tOZXRVcmwocGF0aCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaW5kZXggPSBwYXRoLmxhc3RJbmRleE9mKCcvJyk7XHJcbiAgICAgICAgbGV0IGhlYWRVcmwgPSBwYXRoLnNsaWNlKDAsIGluZGV4KSArICcvMCc7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IGhlYWRVcmwsIHR5cGU6ICdqcGcnIH0sIChlcnIsIHBpYykgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICBDbG9nLldhcm4oQ2xvZ0tleS5SZXMsICdMb2FkTmV0SW1nIGxvYWQgZXJyb3IsZXJyb3I6JyArIGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG9iai5ub2RlID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIENsb2cuRXJyb3IoJ0xvYWROZXRJbWcgbG9hZCBlcnJvcj4+Pj4+Pj4+b2JqLm5vZGU9PW51bGwnKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBzcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShwaWMpO1xyXG4gICAgICAgICAgICBvYmouc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvL+aUueWPmOWbvueJh1xyXG4gICAgcHVibGljIHN0YXRpYyBDaGFuZ2VTcHJpdGUobmFtZTogc3RyaW5nLCBzcHJpdGU6IGNjLlNwcml0ZSkge1xyXG4gICAgICAgIGlmIChzcHJpdGUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoSXNOdWxsT3JFbXB0eShuYW1lKSkge1xyXG4gICAgICAgICAgICBDbG9nLkVycm9yKCdDaGFuZ2VTcHJpdGUgbmFtZSBpcyBFbXB0eSEnKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc3ByaXRlLnNwcml0ZUZyYW1lICE9IG51bGwgJiYgc3ByaXRlLnNwcml0ZUZyYW1lLm5hbWUgPT0gbmFtZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBSZXNNYW5hZ2VyLkxvYWRSZXMobmFtZSwgY2MuU3ByaXRlRnJhbWUsIChlcnJvcjogRXJyb3IsIHJlczogY2MuU3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBDbG9nLkVycm9yKCdDaGFuZ2VTcHJpdGUgRXJyb3IhLCBuYW1lOicgKyBuYW1lICsgXCIsZXJyXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcikpXHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNwcml0ZS5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSByZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuIl19