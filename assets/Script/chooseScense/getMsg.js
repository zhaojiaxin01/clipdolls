const globel = require("globel");
cc.Class({
    extends: cc.Component,

    properties: {
        avatarImg:{
            type:cc.Sprite,
            default:null
        },
        nickName:cc.Label

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.getMessage();
    },
    getMessage:function(){
        cc.loader.load({url:globel.avatarUrl,type:"png"},function(err,texture){
            if(texture){
                this.avatarImg.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                this.nickName.string = globel.userInfo.nickName;
            }
            else{
                return;
            }
        }.bind(this))
    },

    start () {

    },

    // update (dt) {},
});
