"use strict";
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