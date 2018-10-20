(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/shop/shopBtnStatus.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6c94fC9NsxHVpIVOnNRFZVF', 'shopBtnStatus', __filename);
// Script/shop/shopBtnStatus.js

'use strict';

// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        gold_normal: cc.SpriteFrame,
        gold_selected: cc.SpriteFrame,
        diamonds_normal: cc.SpriteFrame,
        diamonds_selected: cc.SpriteFrame,
        prop_normal: cc.SpriteFrame,
        prop_selected: cc.SpriteFrame,
        gift_normal: cc.SpriteFrame,
        gift_selected: cc.SpriteFrame
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.goldBtn = this.node.getChildByName('gold');
        this.diamondsBtn = this.node.getChildByName('diamonds');
        this.propBtn = this.node.getChildByName('prop');
        console.log(this.propBtn);
        this.giftBtn = this.node.getChildByName('gift');
    },

    goldToggle: function goldToggle() {
        this.goldBtn.getComponent(cc.Sprite).spriteFrame = this.gold_selected;
        this.diamondsBtn.getComponent(cc.Sprite).spriteFrame = this.diamonds_normal;
        this.propBtn.getComponent(cc.Sprite).spriteFrame = this.prop_normal;
        this.giftBtn.getComponent(cc.Sprite).spriteFrame = this.gift_normal;
    },
    diamondsToggle: function diamondsToggle() {
        this.goldBtn.getComponent(cc.Sprite).spriteFrame = this.gold_normal;
        this.diamondsBtn.getComponent(cc.Sprite).spriteFrame = this.diamonds_selected;
        this.propBtn.getComponent(cc.Sprite).spriteFrame = this.prop_normal;
        this.giftBtn.getComponent(cc.Sprite).spriteFrame = this.gift_normal;
    },
    propToggle: function propToggle() {
        this.goldBtn.getComponent(cc.Sprite).spriteFrame = this.gold_normal;
        this.diamondsBtn.getComponent(cc.Sprite).spriteFrame = this.diamonds_normal;
        this.propBtn.getComponent(cc.Sprite).spriteFrame = this.prop_selected;
        this.giftBtn.getComponent(cc.Sprite).spriteFrame = this.gift_normal;
    },
    giftToggle: function giftToggle() {
        this.goldBtn.getComponent(cc.Sprite).spriteFrame = this.gold_normal;
        this.diamondsBtn.getComponent(cc.Sprite).spriteFrame = this.diamonds_normal;
        this.propBtn.getComponent(cc.Sprite).spriteFrame = this.prop_normal;
        this.giftBtn.getComponent(cc.Sprite).spriteFrame = this.gift_selected;
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
        //# sourceMappingURL=shopBtnStatus.js.map
        