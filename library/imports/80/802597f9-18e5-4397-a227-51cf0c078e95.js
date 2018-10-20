"use strict";
cc._RF.push(module, '80259f5GOVDl6InUc8MB46V', 'chooseSite');
// Script/chooseScense/chooseSite.js

"use strict";

var globel = require("globel");
cc.Class({
    extends: cc.Component,

    properties: {
        yuleSite: {
            type: cc.Node,
            default: null
        },
        fiveHairSite: {
            type: cc.Node,
            default: null
        },
        OneYuanSite: {
            type: cc.Node,
            default: null
        },
        chooseNumber: 0,
        tipPrefab: {
            type: cc.Prefab,
            default: null
        },
        headPic: {
            type: cc.Node,
            default: null
        },
        nickName: {
            type: cc.Node,
            default: null
        },
        backDialogRoot: {
            type: cc.Node,
            default: null
        },
        exchangeDialog: {
            type: cc.Node,
            default: null
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        var self = this;
        cc.director.preloadScene("gameScene");

        // 根据选择的场景跳转
        this.yuleSite.on("touchstart", function () {
            globel.siteNum = 1;
            cc.director.loadScene("gameScene");
        });
        this.fiveHairSite.on("touchstart", function () {
            cc.director.loadScene("gameScene");
            globel.siteNum = 2;
        });
        this.OneYuanSite.on("touchstart", function () {
            cc.director.loadScene("gameScene");
            globel.siteNum = 3;
        });
        this.userMsg();
        // 音乐播放
    },

    // 错误提示框
    error: function error() {
        var tip = cc.instantiate(this.tipPrefab);
        this.node.addChild(tip);
        var err = "暂未开放，敬请期待！";
        tip.getComponent("error_tip").tipLabelChange(err); // 改变文字
    },
    // 获取用户头像昵称
    userMsg: function userMsg() {
        var self = this;
        cc.loader.load({ url: globel.avatarUrl, type: "png" }, function (err, texture) {
            if (texture) {
                self.headPic.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture); // 替换头像
                self.nickName.getComponent(cc.Label).string = globel.userInfo.nickName; // 替换昵称
            }
        });
    },

    start: function start() {}

    // update (dt) {},
});

cc._RF.pop();