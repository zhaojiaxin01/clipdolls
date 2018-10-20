const ProtoManager = require("protoManager");
var websocket = {
    sock:null,
    is_connected:false,
    receiveDate:null,
    connect: function(url) {
        this.sock = new WebSocket(url);
        this.sock.binaryType = "arraybuffer";
        this.sock.onopen = this.on_open.bind(this);
        this.sock.onmessage = this.on_message.bind(this);
        this.sock.onerror = this.on_error.bind(this);
        this.sock.onclose = this.on_close.bind(this);
    },
    on_open:function(event){
        console.log("连接成功");
        this.is_connected = true;
       
    },
    on_message:function(event){
        console.log("我收到信息了");
        let buf = event.data
        let hinfo = ProtoManager.readHeaderInfo(buf); // 读头
        this.receiveDate =  ProtoManager.decodeMsg(hinfo,buf); // 判断头然后解析数据
        if(hinfo.ctype == 2){
            console.log("我收到的是登录结果:");
            console.log(this.receiveDate);
        }
        else{
            console.log(this.receiveDate);
        }
       
    },
    on_error:function(event){
        // console.log(event);
        this.close();
    },
    on_close: function(event) {
        if (this.sock) {
            this.close();
        }
    }, 
    close: function() {
        this.is_connected = false;
        if (this.sock !== null) {
            this.sock.close();
            this.sock = null;
        }
    },
    send_msg:function(body){
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



