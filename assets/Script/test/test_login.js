const loginModule = require("login");
cc.Class({
    extends: cc.Component,

    properties: {
        username:cc.EditBox,
        pwd:cc.EditBox,
        tipPrefab:{
            type:cc.Prefab,
            default:null
        },
 
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
    },

    loginCheck:function(){
        let username = this.username.string;
        let pwd = this.pwd.string
        if((username == "")||(pwd =="")){
            let error = "用户名或密码不能为空";
            this.show_tip(error); // 显示弹框
            return;
        }
        else{
            loginModule.login(username,pwd);
        }
    },
    show_tip:function(err){
        let tip = cc.instantiate(this.tipPrefab);
        this.node.addChild(tip);
        tip.getComponent("error_tip").tipLabelChange(err); // 改变文字
    },
   
    start () {

    },
    // update (dt) {},
});
