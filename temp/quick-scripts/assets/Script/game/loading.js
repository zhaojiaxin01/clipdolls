(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/game/loading.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '8466buy4fJKW7F51AEMfw7n', 'loading', __filename);
// Script/game/loading.js

"use strict";

var globel = require("globel");

cc.Class({
    extends: cc.Component,
    properties: {
        loaderBar: cc.ProgressBar,
        percentText: {
            type: cc.Label,
            default: null
        }
    },

    // 加载资源
    loadFunc: function loadFunc() {
        var self = this;
        cc.loader.onProgress = function (completedCound, totalCount, item) {
            var perFloor = completedCound / totalCount;
            var per = Math.floor(completedCound * 100 / totalCount);
            self.loaderBar.progress = perFloor; // 复制给组件里得progress
            self.percentText.string = per + "%"; // 转成百分比
        };

        cc.director.preloadScene('chooseSite', function () {
            // 预加载场景
            cc.loader.onProgress = null; // 清除上一次的进度
            cc.director.loadScene('chooseSite'); // 跳转场景
        });
    },
    onLoad: function onLoad() {
        cc.game.setFrameRate(30); // 设fbs为30
        this.userLogin(); // 调用登陆授权方法
    },

    // 登录授权
    userLogin: function userLogin() {
        var self = this;
        wx.login({
            success: function success() {
                wx.getUserInfo({
                    success: function success(res) {
                        globel.userInfo = res.userInfo; // 将用户信息等复制给全局变量
                        globel.avatarUrl = res.userInfo.avatarUrl;
                        self.loadFunc();
                    }
                });
            }
        });
    },

    start: function start() {}

    // update (dt) {},
});

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
        //# sourceMappingURL=loading.js.map
        