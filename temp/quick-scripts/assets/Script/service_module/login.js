(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/service_module/login.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '49f83qRqx1LN79b+mbyg4RO', 'login', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=login.js.map
        