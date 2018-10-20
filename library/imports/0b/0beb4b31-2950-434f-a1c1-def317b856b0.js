"use strict";
cc._RF.push(module, '0beb4sxKVBDT6HB3vMXuFaw', 'soundEffect');
// Script/game/sound/soundEffect.js

"use strict";

cc.Class({
    extends: cc.Component,

    properties: {
        ButtonNode: {
            type: cc.Node,
            default: []
        },
        Effect: {
            url: cc.AudioClip,
            default: null
        }
    },

    onLoad: function onLoad() {
        this.playClickSound();
    },


    // 播放音效
    playClickSound: function playClickSound() {
        for (i = 0; i < this.ButtonNode.length; i++) {
            this.ButtonNode[i].on("touchstart", function () {
                // 监听按钮是否被点击
                cc.audioEngine.playEffect(this.Effect, false, 1); // 开始播放
            }, this);
        }
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();