(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/game/backpack/exchangeMsg.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '5e19239fz5L6ot3UXz+uhC4', 'exchangeMsg', __filename);
// Script/game/backpack/exchangeMsg.js

"use strict";

var personMsg = require("personMsg");
cc.Class({
    extends: cc.Component,

    properties: {
        pername: cc.Label,
        phone: cc.Label,
        address: cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        this.pername.string = personMsg.name;
        this.phone.string = personMsg.phone;
        this.address.string = personMsg.address;
    },

    start: function start() {}
}

// update (dt) {},
);

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
        //# sourceMappingURL=exchangeMsg.js.map
        