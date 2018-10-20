cc.Class({
    extends: cc.Component,

    properties: {
        dialog_root:{
            type:cc.Node,
            default:null
        },
        mask:{
            type:cc.Node,
            default:null
        },
        tip_dialog:{
            type:cc.Node,
            default:null
        },
        tipLabel: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.dialog_show();
       
    },
    tipLabelChange:function(err){
        this.tipLabel.string = err;
    },
    dialog_show:function(){
        // mask遮罩透明度从0到1
        var f1 = cc.fadeTo(0.3,128);
        this.mask.runAction(f1);
        this.dialog_root.active = true;
        
        // 框从小到大
        this.tip_dialog.scale = 0;
        var m1 = cc.scaleTo(0.3,1).easing(cc.easeBackOut()); // 0.3秒内放大到1,且缓冲效果
        this.tip_dialog.runAction(m1);
    },
    dialog_hide:function(){
        var self = this;
        var f1 = cc.fadeOut(0.3);
        this.mask.runAction(f1);
        // 框从大到小
        var m1 = cc.scaleTo(0.3,0).easing(cc.easeBackIn());
        var end_func = cc.callFunc(function(){
            self.dialog_root.active = false;
        });
        var seq = cc.sequence(m1,end_func);
        this.tip_dialog.runAction(seq);
    },

    start () {

    },

    // update (dt) {},
});
