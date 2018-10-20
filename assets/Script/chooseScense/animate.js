// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        sideBar:{
            type:cc.Node,
            default:null
        },
        // centerNode:{
        //     type:cc.Node,
        //     default:null
        // },
        center1:{
            type:cc.Node,
            default:null
        },
        center2:{
            type:cc.Node,
            default:null
        },
        center3:{
            type:cc.Node,
            default:null
        },
        center4:{
            type:cc.Node,
            default:null
        },
        shouchong:{
            type:cc.Node,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        this.removeNode();
        
    },
    removeNode:function(){
        // center
        var self = this;
        // var spawn = cc.spawn(cc.fadeTo(0.5,255), cc.moveTo(0.5,cc.p(-15,0)));
        // self.centerNode.runAction(spawn);
        var spawn1_1 = cc.spawn(cc.fadeTo(0.5,255), cc.moveTo(0.1,cc.p(950,0)));
        this.center1.runAction(spawn1_1);

        var spawn1_2 = cc.spawn(cc.fadeTo(0.5,255), cc.moveTo(0.2,cc.p(1116,-12)));
        this.center2.runAction(spawn1_2);

        var spawn1_3 = cc.spawn(cc.fadeTo(0.5,255), cc.moveTo(0.3,cc.p(870,2)));
        this.center3.runAction(spawn1_3);

        var spawn1_4 = cc.spawn(cc.fadeTo(0.5,255), cc.moveTo(0.4,cc.p(550,-15)));
        this.center4.runAction(spawn1_4);

        var spawn2 = cc.spawn(cc.fadeTo(0.5,255), cc.moveTo(0.4,cc.p(565,18)));
        self.sideBar.runAction(spawn2);

        // 首冲抖动
        this.scheduleOnce(function(){
            var actionJumpBy = cc.jumpBy(2, cc.p(0,0), 20, 4);
            self.shouchong.runAction(actionJumpBy);
        },0.8)
        
    },

    start () {

    },

    // update (dt) {},
});
