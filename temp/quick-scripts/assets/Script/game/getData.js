(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/game/getData.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '77c25AUCkdAP7TGHseJLY0l', 'getData', __filename);
// Script/game/getData.js

"use strict";

var globel = require("globel");
var http = require("http");

var url = globel.url;
cc.Class({
    extends: cc.Component,

    properties: {},

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.getData();
        this.musicPlay();
    },
    // 获取数据
    getData: function getData() {
        var self = this;
        http.get(url + 'jsonTest/gifts.json', function (res, err) {
            if (err) {
                console.log(err);
                return;
            } else {
                globel.is_httpConect = true; // 数据请求链接成功
                this.listdata = JSON.parse(res);
                for (var i in this.listdata) {
                    for (var j in this.listdata[i]) {
                        var type = "gift";
                        if (type == 'gift') {
                            globel.typeArr.push(["gift", this.listdata[i][j]]);
                        }
                    }
                }
            }
        }.bind(this));
    },

    // 获取音乐
    musicPlay: function musicPlay() {
        var self = this;
        cc.loader.load(url + "bgMusic.mp3", function (err, ret) {
            if (err) {
                console.log(error);
            } else {
                globel.music = ret;
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
        //# sourceMappingURL=getData.js.map
        