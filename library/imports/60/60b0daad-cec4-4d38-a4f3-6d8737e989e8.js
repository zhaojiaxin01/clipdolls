"use strict";
cc._RF.push(module, '60b0dqtzsRNOKTzbYc36Yno', 'protoManager');
// Script/protobuf/protoManager.js

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PackageReader = require("packageReader");
var PackageWriter = require("packageWriter");
var HeaderInfo = require("headerInfo");
var HEADER_SIZE = 9;

var ProtoManager = function () {
    function ProtoManager() {
        _classCallCheck(this, ProtoManager);
    }

    _createClass(ProtoManager, null, [{
        key: "readHeaderInfo",

        /**
         * @private
         * @param {*} arrbuffer 
         */
        // 解码数据头
        value: function readHeaderInfo(data) {
            if (data.length < HEADER_SIZE) {
                return null;
            }
            var pkgReader = new PackageReader(data);
            var headerInfo = new HeaderInfo();
            headerInfo.ctype = pkgReader.readInt32();
            headerInfo.utag = pkgReader.readUInt32();
            headerInfo.dataType = pkgReader.readInt8();
            return headerInfo;
        }
    }, {
        key: "getKey",
        value: function getKey(stype, ctype) {
            var key = stype * 65536 + ctype;
            return key;
        }
    }, {
        key: "encodeMsg",
        value: function encodeMsg(headerInfo, body) {
            var buf = void 0;
            switch (headerInfo.dataType) {
                case 0:
                    buf = ProtoManager.encodeJsonMsg(headerInfo, arrbuffer);
                    break;
                case 1:
                    buf = ProtoManager.encodeJsonMsg(headerInfo, arrbuffer);
                    break;
            }
            return buf;
        }
    }, {
        key: "decodeMsg",
        value: function decodeMsg(headerInfo, buf) {
            var msgObg = void 0;
            switch (headerInfo.dataType) {
                case 0:
                    msgObg = ProtoManager.decodeJsonMsg(headerInfo, buf);
                    break;
                case 1:
                    msgObg = ProtoManager.encodeBuffMsg(headerInfo, buf);
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

    }, {
        key: "encodeJsonMsg",
        value: function encodeJsonMsg(headerInfo, body) {
            var jsonStr = JSON.stringify(body);
            var totalLen = HEADER_SIZE + 2 + jsonStr.utf8StrLength();
            var arrbuffer = new ArrayBuffer(totalLen);
            var pkgWriter = new PackageWriter(arrbuffer);
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

    }, {
        key: "decodeJsonMsg",
        value: function decodeJsonMsg(headerInfo, buf) {
            var body = void 0;
            var pkgReader = new PackageReader(buf);
            pkgReader.position = HEADER_SIZE;
            var jsonStr = pkgReader.readUTF8Str();
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

    }, {
        key: "encodeBuffMsg",
        value: function encodeBuffMsg(headerInfo, body) {
            var buf = null;
            var key = ProtoManager.getKey(headerInfo.stype, headerInfo.ctype);
            var encoder = ProtoManager.encoders[key];
            if (!encoder) {
                return null;
            }
            buf = encoder(headerInfo, body);
            return buf;
        }

        // buf解码

    }, {
        key: "decodeBuffMsg",
        value: function decodeBuffMsg(headerInfo, arrbuffer) {
            var dataview = new DataView(arrbuffer);
            var key = ProtoManager.getKey(headerInfo.stype, headerInfo.ctype);

            var decoder = ProtoManager.decoders[key];
            if (!decoder) {
                return null;
            }
            console.log("我在解码buffer");
            return decoder(dataview);
        }
    }, {
        key: "regEncoder",
        value: function regEncoder(stype, ctype, encode_func) {
            var key = ProtoManager.getKey(stype, ctype);
            if (ProtoManager.encoders[key]) {
                log.warn("stype: " + stype + " ctype: " + ctype + "the encoder is reged!");
            }
            ProtoManager.encoders[key] = encode_func;
        }
    }, {
        key: "regDecoder",
        value: function regDecoder(stype, ctype, decode_func) {
            var key = ProtoManager.getKey(stype, ctype);
            if (ProtoManager.decoders[key]) {
                log.warn("stype: " + stype + " ctype: " + ctype + "the decoder is reged!");
            }
            ProtoManager.decoders[key] = decode_func;
        }
    }, {
        key: "writeUtag",
        value: function writeUtag(dataBuf, utag) {
            return PackageWriter.writeUtag(dataBuf, utag);
        }
    }, {
        key: "removeUtag",
        value: function removeUtag(dataBuf) {
            return PackageWriter.removeUtag(dataBuf);
        }
    }]);

    return ProtoManager;
}();
// /**
//  *
//  * @type {{function(Buffer)}}
//  * @private
//  */


ProtoManager.encoders = {};
ProtoManager.decoders = {};
module.exports = ProtoManager;

cc._RF.pop();