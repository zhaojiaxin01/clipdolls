"use strict";
cc._RF.push(module, '6eccdBzTthF0biW8iM69hwJ', 'addAddress');
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