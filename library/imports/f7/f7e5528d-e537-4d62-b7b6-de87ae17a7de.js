"use strict";
cc._RF.push(module, 'f7e55KN5TdNYre23oeuF6fe', 'setting');
// Script/game/setting.js

"use strict";

var globel = require("globel");
cc.Class({
    extends: cc.Component,

    properties: {
        music: {
            type: cc.AudioSource,
            default: null
        },
        effSwitchBtn: {
            type: cc.Node,
            default: null
        },
        musicSwitchBtn: {
            type: cc.Node,
            default: null
        },
        keepScreenBtn: {
            type: cc.Node,
            default: null
        }

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        // 初始化开关
        this.musicSwitch = true; // 音乐开关
        this.effSwitch = true; // 音效开关 
        this.screenSwitch = false; // 屏幕常亮开关    
    },

    musicPlay: function musicPlay() {
        if (globel.music != '') {
            this.music.loop = true;
            this.music.clip = globel.music;
            console.log(this.music.isPlaying);
            if (!this.music.isPlaying) {
                this.music.clip = globel.music;
                this.music.play();
                console.log("开始播放");
            }
        } else {
            return;
        }
    },
    // 音乐
    MusicClick: function MusicClick() {
        if (!this.musicSwitch) {
            // 如果音乐是关的状态,则设为开
            this.musicSwitchBtn.x = 58;
        } else {
            // 如果音乐是开的状态，则设为关 
            this.musicSwitchBtn.x = -57;
        }
        this.musicSwitch = !this.musicSwitch;
    },
    // 音效
    effClick: function effClick() {
        if (!this.effSwitch) {
            // 如果音效是关的状态
            this.effSwitchBtn.x = 58;
        } else {
            this.effSwitchBtn.x = -58;
        }
        this.effSwitch = !this.effSwitch;
    },
    // 屏幕常亮
    keepScreenClick: function keepScreenClick() {
        if (!this.screenSwitch) {
            // 如果音效是关的状态
            this.keepScreenBtn.x = 58;
        } else {
            this.keepScreenBtn.x = -57;
        }
        this.screenSwitch = !this.screenSwitch;
    },
    // 开启屏幕常亮
    setScreenOn: function setScreenOn() {
        wx.setKeepScreenOn({
            keepScreenOn: true // 开
        });
    },
    // 关闭屏幕常亮
    setScreenOff: function setScreenOff() {
        wx.setKeepScreenOn({
            keepScreenOn: false //关
        });
    },
    okBtn: function okBtn() {
        // 判断音乐
        if (this.musicSwitch) {
            // 音效打开，音乐打开
            this.music.play(); // 打开音乐
        } else {
            this.music.stop(); // 关闭音乐
        }
        // 判断音效
        // 判断屏幕状态
        if (this.screenSwitch) {
            // 如果屏幕常亮状态为开
            this.setScreenOn();
        } else {
            this.setScreenOff();
        }
    },

    start: function start() {
        this.musicPlay(); // 下载音乐
    }
}

// update (dt) {},
);

cc._RF.pop();