(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/test/test_login.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '9521bumeipFCb6GHW96pTli', 'test_login', __filename);
// Script/test/test_login.js

"use strict";

var loginModule = require("login");
cc.Class({
    extends: cc.Component,

    properties: {
        username: cc.EditBox,
        pwd: cc.EditBox,
        tipPrefab: {
            type: cc.Prefab,
            default: null
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {},


    loginCheck: function loginCheck() {
        var username = this.username.string;
        var pwd = this.pwd.string;
        if (username == "" || pwd == "") {
            var error = "用户名或密码不能为空";
            this.show_tip(error); // 显示弹框
            return;
        } else {
            loginModule.login(username, pwd);
        }
    },
    show_tip: function show_tip(err) {
        var tip = cc.instantiate(this.tipPrefab);
        this.node.addChild(tip);
        tip.getComponent("error_tip").tipLabelChange(err); // 改变文字
    },

    start: function start() {}
}
// update (dt) {},
);

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
        //# sourceMappingURL=test_login.js.map
        