"use strict";
cc._RF.push(module, '49f83qRqx1LN79b+mbyg4RO', 'login');
// Script/service_module/login.js

"use strict";

var ws = require("websocket");
var HeaderInfo = require("headerInfo");
var Ctype = require("Ctype");

var ProtoManager = require("protoManager");
var Login = {
    login: function login(username, pwd) {
        var headerinfo = new HeaderInfo({
            ctype: Ctype.auth.LOGIN_REQ,
            dataType: 0
        });
        var gamePlayer = {
            user: username,
            pwd: pwd
        };
        var GamePlayer = ProtoManager.encodeJsonMsg(headerinfo, gamePlayer);
        window.setTimeout(function () {
            ws.send_msg(GamePlayer);
        }, 0.1);
    },
    login_res: function login_res(res) {
        switch (res) {
            case 0:
                console.log("用户名或密码错误！");break;

        }
    }
};
module.exports = Login;

cc._RF.pop();