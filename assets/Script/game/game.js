var globel = require("globel");
var service = require("service");
cc.Class({
    extends: cc.Component,

    properties: {
        back:{
            type:cc.Node,
            default:null
        },
        StartBtn:{ //开始按钮
            type:cc.Node,
            default:null
        },
        siteName:cc.Node,
        clip:{ // 夹子
            type:cc.Node,
            default:[]
        },
        clipSkin:{ // 夹子皮肤
            type: cc.SpriteFrame,
            default:[]
        },
        rope:{ // 绳子
            type:cc.Node,
            default:null
        },
        ropeSkin:{ // 绳子皮肤
            type: cc.SpriteFrame,
            default:[]
        },
        tableExit:{ // 娃娃机洞口
            type:cc.Node,
            default:null
        },
        pigSkin:{
            type: cc.SpriteFrame,
            default:[]
        },
        pandaSkin:{
            type: cc.SpriteFrame,
            default:[]
        },
        bearSkin:{
            type: cc.SpriteFrame,
            default:[]
        },
        bg_bottom0:{ // 底层
            type:cc.Node,
            default:null
        },
        bg_bottom1:{ // 底层
            type:cc.Node,
            default:null
        },
        winAlert:{ 
            type:cc.Node,
            default:null
        },
        backPage:{ // 背包
            type:cc.Node,
            default:null
        },
        branch:{ // 豆分
            type:cc.Node,
            default:null
        },
        branchLabel:{ // 夹中的豆分
            type:cc.Label,
            default:null
        },
        goldLabel:{ // 金豆框里的豆分
            type:cc.Label,
            default:null
        },
        energyBar:{
            type:cc.Node,
            default:null
        },
        clipdollsRoot:{
            type:cc.Node,
            default:null
        },
        winSound:{
            url:cc.AudioClip,
            default:null
        },
        errorSound:{
            url:cc.AudioClip,
            default:null
        },
        win:1,
        clipTrueDialog:{
            type:cc.Node,
            default:null
        },
        clipPlayer:{
            type:cc.Node,
            default:null
        }

    },
    // 中奖信息弹框
    winAlertShow(){
        if(this.win){
            let w1 = cc.moveTo(0.5,cc.p(-490,100));
            this.winAlert.runAction(w1);
        }
    },
    
    onLoad:function () {
        let siteNum = globel.siteNum; // 选的是什么场;
        cc.game.setFrameRate(30); // 设fbs为30
        this.winAlertShow(); //调用函数
        this.init(siteNum);
        let self = this;
        cc.director.preloadScene("chooseSite");
        this.back.on("touchstart",function(){
            cc.director.loadScene("chooseSite");
        });
        
        this.StartBtn.on("touchstart",function(){
            console.log(self.is_throwing );
            self.progressLoad = self.energyBar.getComponent(cc.ProgressBar); // 能量条
            self.progressLoad.progress -=0.35; // 每夹一次减0.35
            if(self.is_throwing){
                return;
            }
            else{
                /***绳子***/
                self.is_throwing = true;
                let ropeAction1 = cc.moveTo(0.7,cc.p(0,200)); // 绳子落下
                let randomY = Math.round(Math.random()*100+320);
                console.log(randomY);
                let ropeAction1_1 = cc.moveTo(0.5,cc.p(0,randomY)); // 绳子返回到半空

                let ropeAction1_3 = cc.callFunc(function(){
                    let c1 = cc.rotateTo(0.1,15);
                    let c2 = cc.rotateTo(0.2,-13);
                    let c3 = cc.rotateTo(0.2,10);
                    let c4 = cc.rotateTo(0.2,-10);
                    let c5 = cc.rotateTo(0.2,13);
                    let c6 = cc.rotateTo(0.2,-15);
                    let c7 = cc.rotateTo(0.2,0);
                    let cseq = cc.sequence(c1,c2,c3,c4,c5,c6,c7);
                    self.clip.runAction(cseq);
                });

                /****夹子****/
               
                var clipPlayAnimate1 = cc.callFunc(function(){
                    var clipAnimate = self.clip.getComponent(cc.Animation);
                    if(siteNum == 1){
                        clipAnimate.play("woodClip");
                    }
                    else if(siteNum == 2){
                        clipAnimate.play("silveryClip");
                    }
                    else{
                        clipAnimate.play("goldClip");
                    }
                });

                var clipPlayAnimate2 = cc.callFunc(function(){
                    var clipAnimate = self.clip.getComponent(cc.Animation); // 收缩夹子
                    if(siteNum == 1){
                        clipAnimate.play("reverseWoodClip");
                    }
                    else if(siteNum == 2){
                        clipAnimate.play("reverseSilveryClip");
                    }
                    else{

                        clipAnimate.play("reverseGoldClip");
                    }
                    
                });
                self.clipTrue = Math.round(Math.random()); // 临时变量 决定抓不抓得中

                /***抓取娃娃*****/
                var mid_func = cc.callFunc(function(){ 
                    /******如果有碰撞******/
                        console.log("我调试："+self.clip.getComponent('clipCollider').collider);
                        var collider  = self.clip.getComponent('clipCollider').collider
                        service.clipGifts(globel.prizeName);
                        // 根据场次换皮肤
                        var skin = null;
                        switch(siteNum){
                            case 1:skin = self.pigSkin[1];break;
                            case 2:skin = self.pandaSkin[1];break;
                            case 3:skin = self.bearSkin[1];break;
                        }
                    
                        if(collider){
                            var Clipdolls = self.clip.getComponent('clipCollider').Clipdolls;
                            Clipdolls.getComponent(cc.Sprite).spriteFrame = skin;
                                /********中*************/
                            if(self.clipTrue){ // this.clipTrue临时抓中变量
                                    self.branch.active = true; // 显示
                                    // var gift = self.clip.getComponent('clipCollider').gift; // 加的分数
                                    // self.branchLabel.getComponent(cc.Label).string = gift; // 加的分数
                                    var gift = 588; // 假设抓取到的分数
                                    self.branch.string = gift;
                                    var goldLabel = self.goldLabel.getComponent(cc.Label).string; // 总豆分
                                    var count = gift+Number(goldLabel); // 相加
                                    self.goldLabel.getComponent(cc.Label).string = count;
                                    
                                    /******** 豆分动作开始*******/
                                    var branch_fadeIn = cc.fadeIn(0.1,1);      // 显示
                                    var branch_move1 = cc.moveBy(0.5,cc.p(0,50)); // 分数移动50像素
                                    var branch_fadeOut = cc.fadeOut(0.1,0);  // 隐藏
                                    var branch_move2 = cc.moveTo(0.5,cc.p(360,285)); // 分数回到原位
                                    var branch_hide = cc.callFunc(function(){
                                        self.branch.active = false;  // 隐藏
                                    });
                                    self.branch.runAction(cc.sequence(branch_fadeIn,branch_move1,branch_fadeOut,branch_move2,branch_hide));
                                    /******** 豆分动作结束*******/

                                    /********  娃娃变小添加进背包动作开始*******/
                                    var doll_delay = cc.delayTime(0.7);
                                    var skin2 = null;
                                    var doll_skin = cc.callFunc(function(){
                                          // 根据场景换皮肤
                                        switch(siteNum){
                                            case 1:skin2 = self.pigSkin[0];break;
                                            case 2:skin2 = self.pandaSkin[0];break;
                                            case 3:skin2 = self.bearSkin[0];break;
                                        }
                                        Clipdolls.getComponent(cc.Sprite).spriteFrame = skin2;
                                        console.log(skin2);
                                    });
                                    var doll_scale = cc.scaleTo(0.5,0.3);
                                    var doll_playSound = cc.callFunc(function(){
                                        self.playWinSound();
                                    });
                                     var doll_dialog = cc.callFunc(function(){
                                        self.clipPlayer.getComponent(cc.Sprite).spriteFrame = skin2;
                                        self.clipTrueDialog.getComponent("dialog").dialog_show();
                                    });
                                  
                                    var backPagePositon = self.backPage.getPosition();
                                    var doll_move = cc.moveTo(0.7,backPagePositon);
                                    var easeMoveTo = doll_move.easing(cc.easeCircleActionInOut());
                                    var doll_destory = cc.callFunc(function(){
                                        Clipdolls.destroy();
                                    });
                                    var dollSeq = cc.sequence(doll_delay,doll_skin,doll_scale,doll_dialog,doll_playSound,easeMoveTo,doll_destory);
                                    Clipdolls.runAction(dollSeq);
                                   /********  娃娃变小添加进背包动作结束*******/

                                   /********  背包跳动动作开始 *******/
                                    var back_delay = cc.delayTime(1.5);
                                    var back_dump = cc.jumpBy(0.5,cc.p(0,0),20,2);
                                    var backSeq = cc.sequence(back_delay,back_dump);
                                    self.backPage.runAction(backSeq);
                                     /********  背包跳动动作结束 *******/
                                }
                                /********不中*************/
                                else{
                                    self.tableExit.active = true;
                                    var c1 = cc.callFunc(function(){ // 轨道上下层级关系切换
                                        self.bg_bottom1.active = true; 
                                        self.bg_bottom0.active = false; 
                                    });
                                    var c2 = cc.callFunc(function(){
                                        self.playErrorSound();
                                    });
                                    var c3 =  cc.moveTo(1,cc.p(0,-475));
                                    var c4 = cc.callFunc(function(){
                                        Clipdolls.removeFromParent(); // 下落完后移除
                                        Clipdolls.destroy(); // 销毁节点
                                    });
                                    var seq = cc.sequence(c1,c2,c3,c4);
                                   
                                    self.scheduleOnce(function(){
                                        Clipdolls.runAction(seq);
                                    },1)
                                    
                                    self.scheduleOnce(function(){
                                        self.tableExit.active = false;
                                    },2)
                                }
                         
                            }
                        else{
                            return;
                        }
                }.bind(this));
                
                var end_func = cc.callFunc(function() {
                    self.scheduleOnce(function(){
                        let ropeAction2 = cc.moveTo(0.4,cc.p(0,480)); // 绳子回到原位
                        self.rope.runAction(ropeAction2);
                    },2);
                    self.scheduleOnce(function(){
                        self.is_throwing = false; // 抓取按钮可再次点击
                    },2.5);
                }.bind(this)); 
                let ropeSeq = cc.sequence(ropeAction1,ropeAction1_1,ropeAction1_3,mid_func,end_func);
                self.rope.runAction(ropeSeq);
                var ClipSeq = cc.sequence(clipPlayAnimate1,clipPlayAnimate2);
                self.clip.runAction(ClipSeq);
                

            }
            
        })
    },
    init:function(siteNum){
        var self = this;
        this.rope.getComponent(cc.Sprite).spriteFrame = this.ropeSkin[siteNum-1];
        this.clip.getComponent(cc.Sprite).spriteFrame = this.clipSkin[siteNum-1];
        switch(siteNum){
            case 1:self.siteName.getComponent(cc.RichText).string = '<outline color=#6b2a11 width=2><b>娱 乐 场</b></outline>';break;
            case 2:self.siteName.getComponent(cc.RichText).string = '<outline color=#6b2a11 width=2><b>五 毛 场</b></outline>';break;
            case 3:self.siteName.getComponent(cc.RichText).string = '<outline color=#6b2a11 width=2><b>一 元 场</b></outline>';break;
        }
    },
    start () {

    },
    playWinSound:function(){
        cc.audioEngine.playEffect(this.winSound,false,1); // 开始播放
    },
    playErrorSound:function(){
        cc.audioEngine.playEffect(this.errorSound,false,1); // 开始播放
    },

    update (dt) {
    
    },
});
