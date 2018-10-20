var http = require("http");
var globel = require("globel");
var tools = cc.Class({ // 道具
    name: 'tools',
    properties: {
        id: 0,
        itemName: '',
        iconSF: cc.SpriteFrame
    }
});
cc.Class({
    extends: cc.Component,

    properties: {
        speed:0,
        dollList:{
            type:cc.Node,
            default:null
        },
        reverseList:{
            type:cc.Node,
            default:null
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
        ToolsSpriteFrame:{
            type:tools,
            default:[]
        }
    },

    // LIFE-CYCLE CALLBACKS:
   
    onLoad:function() {
        this.playerlist();
        this.replayerlist();
       
    },
    playerlist:function () { // 正方向娃娃
        var dollsList = this.dollList;
        if(globel.is_httpConect){
            this.dollsinit(dollsList); 
        }
    },
    replayerlist:function () { // 反方向娃娃
        var redollsList = this.reverseList;
        if(globel.is_httpConect){
            this.dollsinit(redollsList); 
        }
    },
    dollsinit:function(list){
        var self = this;
        for(var i = 0;i<list.children.length;i++){ //遍历数据长度
            switch(globel.siteNum){ // 根据不同场复制不同预制体
                case 1: var player = cc.instantiate(this.pigPrefab);break;  // 复制预制体
                case 2: var player = cc.instantiate(this.pandaPrefab);break;  // 复制预制体
                case 3: var player = cc.instantiate(this.bearPrefab);break;  // 复制预制体
            }
            list.children[i].addChild(player); // 把预制体加入playerRoot 
            let prizeType = globel.typeArr[i]; // 获取娃娃的数据
            let dolls = list.children[i].children[0]; // 娃娃节点
            this.dollsSkin(list,dolls,prizeType,i); // 显示不同数据
        };
      
    },
    dollsSkin:function(list,dolls,prizeType,i){
        var self = this;
        let brand = dolls.getChildByName("brand");       // 礼品节点，放置奖品图          
        let wallet = dolls.getChildByName("wallet");     // 钱包节点，放置金币等
        let gold = dolls.getChildByName("gold");       // 话费节点，放置话费
        switch(prizeType[0]){
            case "gift": wallet.destroy(); // 销毁钱包节点
                    gold.destroy(); // 销毁话费节点
                    // for (var g in self.ToolsSpriteFrame){
                        // if(this.typeArr[i][1].id == self.ToolsSpriteFrame[g].id){
                            // brand.children[0].getComponent(cc.Sprite).spriteFrame = self.ToolsSpriteFrame[g].iconSF;
                            brand.children[0].getComponent(cc.Sprite).spriteFrame = self.ToolsSpriteFrame[0].iconSF;
                            brand.children[1].getComponent(cc.Label).string = globel.typeArr[i][1].name;
                            
                        // }
                    // }
                    break;
            case "gold": brand.destroy();  // 销毁礼品节点
                    gold.destroy(); // 销毁话费节点
                        wallet.children[0].getComponent(cc.Label).string = self.listdata[0].children[i].name;
                   
                    break; 
            case "zhuanshi": brand.destroy();  // 销毁礼品节点
                    wallet.destroy(); // 销毁钱包节点 
                        gold.children[0].getComponent(cc.Label).string = self.listdata[0].children[i].name;        
                  
                    break;
        }
    },

    start () {

    },

    update:function(dt){
        this.speed = 100;
        var s = this.speed * dt;
        for(var i = 0;i<this.dollList.children.length;i++){
          this.dollList.children[i].x += s;
        };
        for(var j = 0;j<this.reverseList.children.length;j++){
            this.reverseList.children[j].x -= s;
        }
       
    },
});
