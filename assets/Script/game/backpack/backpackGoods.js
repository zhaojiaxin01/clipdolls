// Learn cc.Class:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] http://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
cc.Class({
    extends: cc.Component,

    properties: {
        
        goodsItem:{
            type:cc.Prefab,
            default:null
        },
        packbackScrollView:{
            type:cc.ScrollView,
            default:null
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function() {
        for(var i=0;i<6;i++){
            var item  = cc.instantiate(this.goodsItem);
            if(i==0){
              item.children[0].getComponent(cc.Toggle).isChecked = true;
            }
            this.packbackScrollView.content.addChild(item);  
        }
    },

    start () {

    },

    // update (dt) {},
});
