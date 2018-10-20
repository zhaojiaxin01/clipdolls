var personMsg = require("personMsg");
cc.Class({
    extends: cc.Component,

    properties: {
       pername:cc.Label,
       phone:cc.Label,
       address:cc.Label
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function() {
        this.pername.string = personMsg.name;
        this.phone.string = personMsg.phone;
        this.address.string = personMsg.address;
    },

    start () {

    },

    // update (dt) {},
});
