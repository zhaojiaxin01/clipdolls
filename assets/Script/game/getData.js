var globel = require("globel");
var http = require("http");

const url = globel.url;
cc.Class({
    extends: cc.Component,

    properties: {
     
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function() {
        this.getData();
        this.musicPlay();
    },
    // 获取数据
    getData(){
        let self = this;
        http.get(url+'jsonTest/gifts.json',function(res,err){
            if(err){
                console.log(err);
                return;
            } 
            else{
                globel.is_httpConect = true; // 数据请求链接成功
                this.listdata = JSON.parse(res);
                for(let i in this.listdata){
                    for(let j in this.listdata[i]){
                        let type = "gift";
                        if(type == 'gift'){
                            globel.typeArr.push(["gift",this.listdata[i][j]]);
                        }
                    }
                }
            }
        }.bind(this));  
    }, 
    // 获取音乐
    musicPlay:function(){
        var self = this;
        cc.loader.load(url+"bgMusic.mp3",function(err,ret){
            if(err){
                console.log(error)
            }
            else{ 
                globel.music = ret;
            }
        }.bind(this))
    },
       

    start () {

    },

    // update (dt) {},
});
