(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/game/sound/soundEffect.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0beb4sxKVBDT6HB3vMXuFaw', 'soundEffect', __filename);
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
        //# sourceMappingURL=soundEffect.js.map
        