const websocket = require("websocket");
var service = {
    // 夹中的礼品
    clipGifts:function(name){
       let gitfName = {
            giftname:name
       };
       window.setTimeout(function(){
        websocket.send_msg(gitfName);
       },0.1);
    }
};
module.exports = service;