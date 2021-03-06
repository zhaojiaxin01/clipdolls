(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/chooseScense/animate.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '629c4ZRfhBNfqBAU8qTQwIN', 'animate', __filename);
// Script/chooseScense/animate.js

"use strict";

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
        sideBar: {
            type: cc.Node,
            default: null
        },
        // centerNode:{
        //     type:cc.Node,
        //     default:null
        // },
        center1: {
            type: cc.Node,
            default: null
        },
        center2: {
            type: cc.Node,
            default: null
        },
        center3: {
            type: cc.Node,
            default: null
        },
        center4: {
            type: cc.Node,
            default: null
        },
        shouchong: {
            type: cc.Node,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.removeNode();
    },

    removeNode: function removeNode() {
        // center
        var self = this;
        // var spawn = cc.spawn(cc.fadeTo(0.5,255), cc.moveTo(0.5,cc.p(-15,0)));
        // self.centerNode.runAction(spawn);
        var spawn1_1 = cc.spawn(cc.fadeTo(0.5, 255), cc.moveTo(0.1, cc.p(950, 0)));
        this.center1.runAction(spawn1_1);

        var spawn1_2 = cc.spawn(cc.fadeTo(0.5, 255), cc.moveTo(0.2, cc.p(1116, -12)));
        this.center2.runAction(spawn1_2);

        var spawn1_3 = cc.spawn(cc.fadeTo(0.5, 255), cc.moveTo(0.3, cc.p(870, 2)));
        this.center3.runAction(spawn1_3);

        var spawn1_4 = cc.spawn(cc.fadeTo(0.5, 255), cc.moveTo(0.4, cc.p(550, -15)));
        this.center4.runAction(spawn1_4);

        var spawn2 = cc.spawn(cc.fadeTo(0.5, 255), cc.moveTo(0.4, cc.p(565, 18)));
        self.sideBar.runAction(spawn2);

        // 首冲抖动
        this.scheduleOnce(function () {
            var actionJumpBy = cc.jumpBy(2, cc.p(0, 0), 20, 4);
            self.shouchong.runAction(actionJumpBy);
        }, 0.8);
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
        //# sourceMappingURL=animate.js.map
        