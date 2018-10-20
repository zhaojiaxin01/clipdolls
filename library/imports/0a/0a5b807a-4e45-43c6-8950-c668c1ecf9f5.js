"use strict";
cc._RF.push(module, '0a5b8B6TkVDxolQxmjB7Pn1', 'service');
// Script/service_module/service.js

"use strict";

var websocket = require("websocket");
var service = {
    // 夹中的礼品
    clipGifts: function clipGifts(name) {
        var gitfName = {
            giftname: name
        };
        window.setTimeout(function () {
            websocket.send_msg(gitfName);
        }, 0.1);
    }
};
module.exports = service;

cc._RF.pop();