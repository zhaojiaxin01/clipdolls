"use strict";
cc._RF.push(module, '9e1ad9hFjNC7LCBOl3ecerH', 'clipCollider');
// Script/game/clipCollider.js

'use strict';

var globel = require("globel");

var prop = cc.Class({ // 道具
    name: 'prop',
    properties: {
        id: 0,
        itemName: '',
        iconSF: cc.SpriteFrame
    }
});
cc.Class({
    extends: cc.Component,

    properties: {
        pigPrefab: {
            type: cc.Prefab,
            default: null
        },
        pandaPrefab: {
            type: cc.Prefab,
            default: null
        },
        bearPrefab: {
            type: cc.Prefab,
            default: null
        },
        clipdollsRoot: {
            type: cc.Node,
            default: null
        },
        bg_bottom0: {
            type: cc.Node,
            default: null
        },
        bg_bottom1: {
            type: cc.Node,
            default: null
        },
        ToolsSpriteFrame: {
            type: prop,
            default: []
            // clipCount:0
        } },

    onLoad: function onLoad() {
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;
        // cc.director.getCollisionManager().enabledDrawBoundingBox = true;
        this.collider = false;
    },

    onCollisionEnter: function onCollisionEnter(other, self) {
        this.collider = true;
        var _this = this;
        var dolls = other.node.children;
        this.Clipdolls = dolls[0];
        this.bg_bottom1.active = false; // 轨道上下层级关系切换
        this.bg_bottom0.active = true;
        this.Clipdolls.parent = this.clipdollsRoot; // 夹到的娃娃放到夹子下面
        // 复制多一个节点加入原父级
        var childName = this.Clipdolls.children[0].name; // 查看是礼品还是钱包还是金币;
        var clipdollsChild = this.Clipdolls.children[0]; // 被夹中娃娃的礼品存放节点
        // 查看是什么礼品
        switch (childName) {
            case "brand":
                this.prizeName = clipdollsChild.getChildByName("prizeName").getComponent(cc.Label).string;break;
            case "gold":
                this.prizeName = clipdollsChild.getChildByName("goldNum").getComponent(cc.Label).string;break;
            case "wallet":
                this.prizeName = clipdollsChild.getChildByName("bean").getComponent(cc.Label).string;break;
        }
        globel.prizeName = this.prizeName; // 把奖品赋值给全局变量;
        this.scheduleOnce(function () {
            if (globel.siteNum == 1) {
                var new_dolls = cc.instantiate(this.pigPrefab);
            } else if (globel.siteNum == 2) {
                var new_dolls = cc.instantiate(this.pandaPrefab);
            } else if (globel.siteNum == 3) {
                var new_dolls = cc.instantiate(this.bearPrefab);
            }
            other.node.addChild(new_dolls);
            var newDolls = other.node.children[0];
            var brand = newDolls.getChildByName("brand"); // 礼品节点，放置奖品图          
            var wallet = newDolls.getChildByName("wallet"); // 钱包节点，放置金币等
            var gold = newDolls.getChildByName("gold"); // 话费节点，放置话费
            switch (childName) {
                case 'brand':
                    wallet.destroy();gold.destroy();
                    for (var g in _this.ToolsSpriteFrame) {
                        // if(_this.prizeName  == _this.ToolsSpriteFrame[g].itemName){
                        brand.children[0].getComponent(cc.Sprite).spriteFrame = _this.ToolsSpriteFrame[g].iconSF;
                        // brand.children[1].getComponent(cc.Label).string = _this.ToolsSpriteFrame[g].itemName;
                        brand.children[1].getComponent(cc.Label).string = globel.prizeName;
                        // }
                    }
                    break;
                case 'gold':
                    wallet.destroy();brand.destroy();
                    gold.children[0].getComponent(cc.Label).string = _this.prizeName;break;
                case 'wallet':
                    brand.destroy();gold.destroy();
                    wallet.children[0].getComponent(cc.Label).string = _this.prizeName;break;
            }
            other.node.active = false;
        }, 0.1); //以上目的为复制一个跟被夹走的娃娃一模一样的节点
        var width = cc.winSize.width;
        if (width < 1281) {
            var time = 6.7;
        } else {
            var time = 8;
        }
        this.scheduleOnce(function () {
            other.node.active = true;
        }, time);
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();