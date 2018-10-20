"use strict";
cc._RF.push(module, '9521bumeipFCb6GHW96pTli', 'test_login');
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