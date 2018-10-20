const PackageReader = require("packageReader");
const PackageWriter = require("packageWriter");
const HeaderInfo = require("headerInfo");
const HEADER_SIZE = 9;


class ProtoManager {
    /**
     * @private
     * @param {*} arrbuffer 
     */
    // 解码数据头
    static readHeaderInfo(data) {
        if (data.length < HEADER_SIZE) {
            return null
        }
        let pkgReader = new PackageReader(data);
        let headerInfo = new HeaderInfo();
        headerInfo.ctype = pkgReader.readInt32();
        headerInfo.utag = pkgReader.readUInt32();
        headerInfo.dataType = pkgReader.readInt8();
        return headerInfo;
    }
    
    static getKey(stype,ctype){
        let key =  stype * 65536 +ctype;
        return key;
    }

    static encodeMsg(headerInfo,body){
        let buf;
        switch(headerInfo.dataType){
            case 0:
            buf = ProtoManager.encodeJsonMsg(headerInfo,arrbuffer);
            break;
            case 1:
            buf = ProtoManager.encodeJsonMsg(headerInfo,arrbuffer);
            break;
        }
        return buf;
    }
 
    static decodeMsg(headerInfo,buf){
        let msgObg;
        switch(headerInfo.dataType){
            case 0:
            msgObg = ProtoManager.decodeJsonMsg(headerInfo,buf);
            break;
            case 1:
            msgObg = ProtoManager.encodeBuffMsg(headerInfo,buf);
            break;
        }
        return msgObg;
    }
    // json编码
      /**
     *
     * @param headerInfo
     * @param body
     * @return {Buffer}
     * @private
     */
    static encodeJsonMsg(headerInfo, body) {
        let jsonStr = JSON.stringify(body);
        let totalLen = HEADER_SIZE + 2 + jsonStr.utf8StrLength();
        let arrbuffer = new ArrayBuffer(totalLen);
        let pkgWriter = new PackageWriter(arrbuffer);
        pkgWriter.writeHeaderInfo(headerInfo);
        pkgWriter.writeUTF8Str(jsonStr);
        return arrbuffer;
    }

    // json解码
     /**
     *
     * @param headerInfo
     * @param buf
     * @return {*}
     * @private
     */
    static decodeJsonMsg(headerInfo, buf) {
        let body;
        let pkgReader = new PackageReader(buf);
        pkgReader.position = HEADER_SIZE;
        let jsonStr = pkgReader.readUTF8Str();
        try {
            //todo:看情况决定是否取消数组模式
            body = JSON.parse(jsonStr);
        } catch (e) {
            console.error("JSON消息解码错误:", e);
        }
        return body;
    }
// 
    // buf编码
    static encodeBuffMsg(headerInfo, body) {
        var buf = null;
       let key = ProtoManager.getKey(headerInfo.stype,headerInfo.ctype);
       let encoder = ProtoManager.encoders[key];
       if(!encoder){
           return null;
       }
       buf = encoder(headerInfo, body);
       return buf;
    }

    // buf解码
    static decodeBuffMsg(headerInfo,arrbuffer){
        var dataview = new DataView(arrbuffer);
        let key = ProtoManager.getKey(headerInfo.stype, headerInfo.ctype);
        
        let decoder = ProtoManager.decoders[key];
        if (!decoder) {
            return null;
        }
        console.log("我在解码buffer")
        return decoder(dataview);
    }

    static regEncoder(stype, ctype, encode_func) {
        let key = ProtoManager.getKey(stype, ctype);
        if (ProtoManager.encoders[key]) {
            log.warn("stype: " + stype + " ctype: " + ctype + "the encoder is reged!");
        }
        ProtoManager.encoders[key] = encode_func;
    }
 
    static regDecoder(stype,ctype,decode_func){
        let key = ProtoManager.getKey(stype, ctype);
        if (ProtoManager.decoders[key]) {
            log.warn("stype: " + stype + " ctype: " + ctype + "the decoder is reged!");
        }
        ProtoManager.decoders[key] = decode_func;
    }

    static writeUtag(dataBuf, utag) {
        return PackageWriter.writeUtag(dataBuf, utag);
    }

    static removeUtag(dataBuf) {
        return PackageWriter.removeUtag(dataBuf);
    }
   
   

}
// /**
//  *
//  * @type {{function(Buffer)}}
//  * @private
//  */
ProtoManager.encoders = {};
ProtoManager.decoders = {};
module.exports = ProtoManager;