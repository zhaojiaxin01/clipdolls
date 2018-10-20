var http = require("http");
// var url = 'http://vue.sexgz.com/jsonTest/';
var globel = require("globel");
var tool = cc.Class({ // 道具
    name: 'tool',
    properties: {
        id: 0,
        itemName: '',
        iconSF: cc.SpriteFrame
    }
});
cc.Class({
    extends: cc.Component,

    properties: {
        playerlist:{
            type:cc.Node,
            default:null
        },
        isCollider:false,
        ToolsSpriteFrame:{
           type:tool,
           default:[]
        },
        pigPrefab:{
            type:cc.Prefab,
            default:null
        },
        pandaPrefab:{
            type:cc.Prefab,
            default:null
        },
        bearPrefab:{
            type:cc.Prefab,
            default:null
        },
        direction:""
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function() {
        cc.director.getCollisionManager().enabled = true;
        if(this.direction =="right"){
            this.typeCount = 12;
        }
        if(this.direction =="left"){
            this.typeCount = 17;
        }
    },
    onCollisionEnter:function (other, self) {
        this.isCollider = true; // 碰撞为true
        this.other = other;
        this.typeCount++;
        if(this.typeCount <= globel.typeArr.length){
            let prizeType = globel.typeArr[this.typeCount-1]; // 获取娃娃的数据
            let oldDolls = this.other.node.children[0]; // 原娃娃节点
            if(oldDolls != null){
                oldDolls.removeFromParent();  
            }
            switch(globel.siteNum){ // 根据不同场复制不同预制体
                case 1: var player = cc.instantiate(this.pigPrefab);break;  // 复制预制体
                case 2: var player = cc.instantiate(this.pandaPrefab);break;  // 复制预制体
                case 3: var player = cc.instantiate(this.bearPrefab);break;  // 复制预制体
            }
            this.other.node.addChild(player); // 把预制体加入playerRoot 
            let dolls = this.other.node.children[0] // 娃娃节点
            let brand = dolls.getChildByName("brand");       // 礼品节点，放置奖品图          
            let wallet = dolls.getChildByName("wallet");     // 钱包节点，放置金币等
            let gold = dolls.getChildByName("gold");       // 话费节点，放置话费
            switch(prizeType[0]){
                case "gift": wallet.destroy(); // 销毁钱包节点
                    gold.destroy(); // 销毁话费节点
                    // for (var g in this.ToolsSpriteFrame){
                        // if(this.typeArr[this.typeCount-1][1].id == this.ToolsSpriteFrame[g].id){
                            // brand.children[0].getComponent(cc.Sprite).spriteFrame = this.ToolsSpriteFrame[g].iconSF;
                            brand.children[0].getComponent(cc.Sprite).spriteFrame = this.ToolsSpriteFrame[0].iconSF;
                            brand.children[1].getComponent(cc.Label).string = globel.typeArr[this.typeCount-1][1].name ;
                            // console.log(this.typeCount,this.typeArr[this.typeCount-1][1].name);
                        // }
                    // }
                    break;
            case "gold": brand.destroy();  // 销毁礼品节点
                    gold.destroy(); // 销毁话费节点
                    // wallet.children[0].getComponent(cc.Label).string = this.listdata[0].children[this.typeCount-1].name;
                    break; 
            case "zhuanshi": brand.destroy();  // 销毁礼品节点
                    wallet.destroy(); // 销毁钱包节点 
                    // gold.children[0].getComponent(cc.Label).string = this.listdata[0].children[this.typeCount-1].name;        
                    break;
            }
         
            if(this.typeCount == globel.typeArr.length){ // 等于最后一个的时候重置为0,重新循环
                this.typeCount = 0;
            }
        }
        
              
    },
    start () {

    },

    update:function (dt){
      if(this.isCollider){
          if(this.direction =="right"){
            let width = cc.winSize.width;
            if(width <= 1281){
               this.other.node.x = -810;
            }
            else{
                this.other.node.x = -680;
            }
          }
          if(this.direction =="left"){
            let width = cc.winSize.width;
            if(width <= 1281){
               this.other.node.x = -450;
            }
            else{
                this.other.node.x = -670;
            }
          }
      }
    },
});
