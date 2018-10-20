var personMsg = require("personMsg");
cc.Class({
    extends: cc.Component,

    properties: {
        PerName:cc.EditBox,
        phone:cc.EditBox,
        address:cc.EditBox
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad:function() {
      
    },
    addAressClik:function(){
        personMsg.name = this.PerName.string;
        personMsg.phone = this.phone.string;
        personMsg.address = this.address.string;
    },

    start () {

    },

    // update (dt) {},
});
