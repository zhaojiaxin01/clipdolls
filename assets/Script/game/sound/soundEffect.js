
cc.Class({
    extends: cc.Component,

    properties: {
        ButtonNode:{
            type:cc.Node,
            default:[]
        },
        Effect:{
            url:cc.AudioClip,
            default:null
        }
    },

    onLoad () {
        this.playClickSound();
    },

    // 播放音效
    playClickSound:function(){
        for(i= 0 ;i<this.ButtonNode.length;i++){
            this.ButtonNode[i].on("touchstart",function(){ // 监听按钮是否被点击
                cc.audioEngine.playEffect(this.Effect,false,1); // 开始播放
            },this); 
        }
    
    },
    start () {

    },

    // update (dt) {},
});
