"use strict";
cc._RF.push(module, '2c63c9T1J9JR7t73KhkgXQC', 'getMsg');
// Script/chooseScense/getMsg.js

"use strict";

var globel = require("globel");
cc.Class({
    extends: cc.Component,

    properties: {
        avatarImg: {
            type: cc.Sprite,
            default: null
        },
        nickName: cc.Label

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.getMessage();
    },

    getMessage: function getMessage() {
        cc.loader.load({ url: globel.avatarUrl, type: "png" }, function (err, texture) {
            if (texture) {
                this.avatarImg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                this.nickName.string = globel.userInfo.nickName;
            } else {
                return;
            }
        }.bind(this));
    },

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();