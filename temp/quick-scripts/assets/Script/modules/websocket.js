(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/modules/websocket.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '895820SAzdAJqavoclCRHFk', 'websocket', __filename);
// Script/modules/websocket.js

"use strict";

var ProtoManager = require("protoManager");
var websocket = {
    sock: null,
    is_connected: false,
    receiveDate: null,
    connect: function connect(url) {
        this.sock = new WebSocket(url);
        this.sock.binaryType = "arraybuffer";
        this.sock.onopen = this.on_open.bind(this);
        this.sock.onmessage = this.on_message.bind(this);
        this.sock.onerror = this.on_error.bind(this);
        this.sock.onclose = this.on_close.bind(this);
    },
    on_open: function on_open(event) {
        console.log("连接成功");
        this.is_connected = true;
    },
    on_message: function on_message(event) {
        console.log("我收到信息了");
        var buf = event.data;
        var hinfo = ProtoManager.readHeaderInfo(buf); // 读头
        this.receiveDate = ProtoManager.decodeMsg(hinfo, buf); // 判断头然后解析数据
        if (hinfo.ctype == 2) {
            console.log("我收到的是登录结果:");
            console.log(this.receiveDate);
        } else {
            console.log(this.receiveDate);
        }
    },
    on_error: function on_error(event) {
        // console.log(event);
        this.close();
    },
    on_close: function on_close(event) {
        if (this.sock) {
            this.close();
        }
    },
    close: function close() {
        this.is_connected = false;
        if (this.sock !== null) {
            this.sock.close();
            this.sock = null;
        }
    },
    send_msg: function send_msg(body) {
        if (!this.sock || !this.is_connected) {
            console.log("信息发送失败");
            return;
        }
        this.sock.send(body);
        console.log("信息发送成功");
    }

};
// websocket.connect("ws://192.168.0.50:7081");
module.exports = websocket;

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
        //# sourceMappingURL=websocket.js.map
        