(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/service_module/service.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '0a5b8B6TkVDxolQxmjB7Pn1', 'service', __filename);
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
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=service.js.map
        