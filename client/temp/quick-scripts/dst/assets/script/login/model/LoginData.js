
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/script/login/model/LoginData.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b03439cPipBGbvU/9pEc8qC', 'LoginData');
// script/login/model/LoginData.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SessionData = /** @class */ (function () {
    function SessionData(data) {
        if (data == null) {
            return;
        }
        this.Address = new Address(data);
    }
    return SessionData;
}());
exports.SessionData = SessionData;
var Address = /** @class */ (function () {
    function Address(data) {
        if (data == null) {
            return;
        }
        this.Login = "http://" + data.Login;
        this.Register = "http://" + data.Register;
        this.LobbyWS = "ws://" + data.LobbyWS;
        this.GameWS = "ws://" + data.GameWS;
    }
    return Address;
}());
exports.Address = Address;
//登录模块的数据别名：session
exports.Session = new SessionData();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0XFxsb2dpblxcbW9kZWxcXExvZ2luRGF0YS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBR0kscUJBQVksSUFBVTtRQUNsQixJQUFJLElBQUksSUFBSSxJQUFJLEVBQUU7WUFDZCxPQUFNO1NBQ1Q7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFDTCxrQkFBQztBQUFELENBVEEsQUFTQyxJQUFBO0FBVFksa0NBQVc7QUFZeEI7SUFRSSxpQkFBWSxJQUFVO1FBQ2xCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNkLE9BQU07U0FDVDtRQUNELElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMxQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDeEMsQ0FBQztJQUNMLGNBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLDBCQUFPO0FBbUJwQixtQkFBbUI7QUFDUixRQUFBLE9BQU8sR0FBRyxJQUFJLFdBQVcsRUFBRSxDQUFBIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbmV4cG9ydCBjbGFzcyBTZXNzaW9uRGF0YSB7XG5cbiAgICBwdWJsaWMgQWRkcmVzczogQWRkcmVzcztcbiAgICBjb25zdHJ1Y3RvcihkYXRhPzogYW55KSB7XG4gICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuQWRkcmVzcyA9IG5ldyBBZGRyZXNzKGRhdGEpXG4gICAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBBZGRyZXNzIHtcblxuICAgIHB1YmxpYyBMb2dpbjogc3RyaW5nO1xuICAgIHB1YmxpYyBSZWdpc3Rlcjogc3RyaW5nO1xuICAgIHB1YmxpYyBMb2JieVdTOiBzdHJpbmc7XG4gICAgcHVibGljIEdhbWVXUzogc3RyaW5nO1xuXG5cbiAgICBjb25zdHJ1Y3RvcihkYXRhPzogYW55KSB7XG4gICAgICAgIGlmIChkYXRhID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIHRoaXMuTG9naW4gPSBcImh0dHA6Ly9cIiArIGRhdGEuTG9naW47XG4gICAgICAgIHRoaXMuUmVnaXN0ZXIgPSBcImh0dHA6Ly9cIiArIGRhdGEuUmVnaXN0ZXI7XG4gICAgICAgIHRoaXMuTG9iYnlXUyA9IFwid3M6Ly9cIiArIGRhdGEuTG9iYnlXUztcbiAgICAgICAgdGhpcy5HYW1lV1MgPSBcIndzOi8vXCIgKyBkYXRhLkdhbWVXUztcbiAgICB9XG59XG5cbi8v55m75b2V5qih5Z2X55qE5pWw5o2u5Yir5ZCN77yac2Vzc2lvblxuZXhwb3J0IGxldCBTZXNzaW9uID0gbmV3IFNlc3Npb25EYXRhKClcbiJdfQ==