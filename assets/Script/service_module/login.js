const ws = require("websocket");
const HeaderInfo = require("headerInfo");
const Ctype = require("Ctype");

const ProtoManager = require("protoManager");
var Login = {
    login:function(username,pwd){
        let headerinfo = new HeaderInfo({
            ctype:Ctype.auth.LOGIN_REQ,
            dataType:0
        });
        let gamePlayer = {
            user:username,
            pwd:pwd
        };
        let GamePlayer = ProtoManager.encodeJsonMsg(headerinfo,gamePlayer);
        window.setTimeout(function(){
            ws.send_msg(GamePlayer);
        },0.1);
    },
    login_res:function(res){
        switch(res){
            case 0: console.log("用户名或密码错误！");break;

        }
    }
};
module.exports = Login;