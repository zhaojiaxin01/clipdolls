"use strict";
cc._RF.push(module, '22646Nk7OxCpZMG6zhazUW8', 'dialog');
// Script/dialog/dialog.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        dialogRoot: {
            type: cc.Node,
            default: null
        },
        mask: {
            type: cc.Node,
            default: null
        },
        dialogUi: {
            type: cc.Node,
            default: null
        },
        scrollviewBox: {
            type: cc.Node,
            default: null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {},

    dialog_show: function dialog_show() {
        // mask遮罩透明度从0到1
        var f1 = cc.fadeTo(0.3, 160);
        this.mask.runAction(f1);
        this.dialogRoot.active = true;

        // 框从小到大
        this.dialogUi.scale = 0;
        var m1 = cc.scaleTo(0.3, 1).easing(cc.easeBackOut()); // 0.3秒内放大到1,且缓冲效果
        this.dialogUi.runAction(m1);
        // 滚动列表框
        if (this.scrollviewBox != null) {
            this.scrollviewBox.scale = 0;
            var m2 = cc.scaleTo(0.3, 1).easing(cc.easeBackOut()); // 0.3秒内放大到1,且缓冲效果
            this.scrollviewBox.runAction(m2);
        }
    },
    dialog_hide: function dialog_hide() {
        var self = this;
        var f1 = cc.fadeOut(0.3);
        this.mask.runAction(f1);
        // 框从大到小
        var m1 = cc.scaleTo(0.3, 0).easing(cc.easeBackIn());
        var end_func = cc.callFunc(function () {
            self.dialogRoot.active = false;
        });
        var seq = cc.sequence(m1, end_func);
        this.dialogUi.runAction(seq);
        // 滚动列表框
        if (this.scrollviewBox != null) {
            var m2 = cc.scaleTo(0.3, 0).easing(cc.easeBackIn());
            var end_func = cc.callFunc(function () {
                self.dialogRoot.active = false;
            });
            var seq2 = cc.sequence(m2, end_func);
            this.scrollviewBox.runAction(seq2);
        }
    },

    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();