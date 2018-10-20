
let globel = require("globel"); 

cc.Class({
    extends: cc.Component,
    properties: {
        loaderBar:cc.ProgressBar,
        percentText:{
            type:cc.Label,
            default:null
       },
    },

    // 加载资源
    loadFunc:function(){
        var self = this;
        cc.loader.onProgress = function(completedCound,totalCount,item){
            var perFloor = completedCound/totalCount;
            var per = Math.floor(completedCound*100/totalCount);
            self.loaderBar.progress = perFloor;     // 复制给组件里得progress
            self.percentText.string = per+"%" ; // 转成百分比
           
        };

        cc.director.preloadScene('chooseSite',function(){   // 预加载场景
            cc.loader.onProgress= null;     // 清除上一次的进度
            cc.director.loadScene('chooseSite');    // 跳转场景
        });
        
    },
    onLoad () {
        cc.game.setFrameRate(30); // 设fbs为30
        this.userLogin();   // 调用登陆授权方法
    },
    // 登录授权
    userLogin:function(){
        var self = this;
        wx.login({
            success: function () {
            wx.getUserInfo({
                success:res =>{
                    globel.userInfo = res.userInfo; // 将用户信息等复制给全局变量
                    globel.avatarUrl = res.userInfo.avatarUrl;
                    self.loadFunc();
                }
            })

            }
        });
   
    },



    start:function() {
    },

    // update (dt) {},
});
