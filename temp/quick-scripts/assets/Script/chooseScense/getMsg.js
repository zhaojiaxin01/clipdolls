(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/chooseScense/getMsg.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '2c63c9T1J9JR7t73KhkgXQC', 'getMsg', __filename);
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
        //# sourceMappingURL=getMsg.js.map
        