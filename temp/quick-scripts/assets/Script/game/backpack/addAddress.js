(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/game/backpack/addAddress.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '6eccdBzTthF0biW8iM69hwJ', 'addAddress', __filename);
// Script/game/backpack/addAddress.js

"use strict";

var personMsg = require("personMsg");
cc.Class({
    extends: cc.Component,

    properties: {
        PerName: cc.EditBox,
        phone: cc.EditBox,
        address: cc.EditBox
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {},
    addAressClik: function addAressClik() {
        personMsg.name = this.PerName.string;
        personMsg.phone = this.phone.string;
        personMsg.address = this.address.string;
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
        //# sourceMappingURL=addAddress.js.map
        