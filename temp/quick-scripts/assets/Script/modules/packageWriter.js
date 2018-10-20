(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/modules/packageWriter.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'c5d62OHnGxAKqXlH/w9Uw7a', 'packageWriter', __filename);
// Script/modules/packageWriter.js

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PackageWriter = function () {
    _createClass(PackageWriter, [{
        key: "unreadCount",
        get: function get() {
            return this._unreadCount;
        }
    }, {
        key: "position",
        get: function get() {
            // console.log("位置：",this._position);
            return this._position;
        },
        set: function set(value) {
            // console.log("\x1B[31m%s\x1b[39m", "PackageReader.position:", value);
            this._position = value;
            this._unreadCount = this._buf.length - this.position;
        }
    }]);

    function PackageWriter(buf) {
        _classCallCheck(this, PackageWriter);

        this._buf = new DataView(buf);
        // this._buf = buf;
        this._position = 0;
    }

    _createClass(PackageWriter, [{
        key: "writeInt8",
        value: function writeInt8(num) {
            this._buf.setInt8(this.position, num);
            this.position++;
        }
    }, {
        key: "writeInt16",
        value: function writeInt16(num) {
            this._buf.setInt16(this.position, num);
            this.position += 2;
        }
    }, {
        key: "writeInt32",
        value: function writeInt32(num) {
            this._buf.setInt32(this.position, num);
            this.position += 4;
        }
    }, {
        key: "writeUInt32",
        value: function writeUInt32(num) {
            this._buf.setUint32(this.position, num);
            this.position += 4;
        }
    }, {
        key: "writeUTF8Str",
        value: function writeUTF8Str(str) {
            var bufLen = str.utf8StrLength();
            this.writeInt16(bufLen);
            this._buf.writeUTF8Str(this.position, str);
            this.position += bufLen;
        }
    }, {
        key: "writeHeaderInfo",
        value: function writeHeaderInfo(headerInfo) {
            // this.writeInt16(headerInfo.stype);
            this.writeInt32(headerInfo.ctype);
            this.writeUInt32(headerInfo.utag);
            this.writeInt8(headerInfo.dataType);
        }
    }], [{
        key: "writeUtag",
        value: function writeUtag(dataBuf, utag) {
            return dataBuf.writeUInt32(utag);
        }
    }, {
        key: "removeUtag",
        value: function removeUtag(dataBuf) {
            return dataBuf.writeUInt32(0);
        }
    }]);

    return PackageWriter;
}();

PackageWriter.headerSize = 9;
module.exports = PackageWriter;

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
        //# sourceMappingURL=packageWriter.js.map
        