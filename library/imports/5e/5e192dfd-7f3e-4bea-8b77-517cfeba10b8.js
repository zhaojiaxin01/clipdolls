"use strict";
cc._RF.push(module, '5e19239fz5L6ot3UXz+uhC4', 'exchangeMsg');
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