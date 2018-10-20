(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/chooseScense/share.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '87987hoQ79Huq8ZIXF1i55j', 'share', __filename);
// Script/chooseScense/share.js

'use strict';

cc.Class({
    extends: cc.Component,

    properties: {},

    onLoad: function onLoad() {
        this.share();
    },
    // 转发
    share: function share() {
        // 显示当前页面的转发按钮APi
        wx.showShareMenu({
            withShareTicket: true // 是否使用带 shareTicket 的转发
        });
        wx.onShareAppMessage(function () {
            return {
                title: '转发标题',
                imageUrl: canvas.toTempFilePathSync({
                    destWidth: 500,
                    destHeight: 400
                })
            };
        });
    },
    // 主动拉起转发
    wxShare: function wxShare() {
        wx.shareAppMessage(function () {
            return {
                title: '转发标题',
                imageUrl: canvas.toTempFilePathSync({
                    destWidth: 500,
                    destHeight: 400
                })
            };
        });
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
        //# sourceMappingURL=share.js.map
        