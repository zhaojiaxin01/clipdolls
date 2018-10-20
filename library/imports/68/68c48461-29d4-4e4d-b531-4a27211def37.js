"use strict";
cc._RF.push(module, '68c48RhKdROTbUxSichHe83', 'packageReader');
// Script/Utils/packageReader.js

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PackageReader = function () {
    _createClass(PackageReader, [{
        key: "unreadCount",
        get: function get() {
            return this._unreadCount;
        }
    }, {
        key: "position",
        get: function get() {
            return this._position;
        },
        set: function set(value) {
            // console.log("\x1B[31m%s\x1b[39m", "PackageReader.position:", value);
            this._position = value;
            this._unreadCount = this._buf.length - this.position;
        }
    }]);

    function PackageReader(buf) {
        _classCallCheck(this, PackageReader);

        this._buf = new DataView(buf);
        this._position = 0;
    }

    _createClass(PackageReader, [{
        key: "readInt8",
        value: function readInt8() {
            var number = this._buf.getInt8(this.position);
            this.position++;
            return number;
        }
    }, {
        key: "readInt16",
        value: function readInt16() {
            var number = this._buf.getInt16(this.position);
            this.position += 2;
            return number;
        }
    }, {
        key: "readInt32",
        value: function readInt32() {
            var number = this._buf.getInt32(this.position);
            this.position += 4;
            return number;
        }
    }, {
        key: "readUInt32",
        value: function readUInt32() {
            var number = this._buf.getUint32(this.position);
            this.position += 4;
            return number;
        }
    }, {
        key: "readUTF8Str",
        value: function readUTF8Str() {
            var bufLen = this.readInt16();
            var str = this._buf.readUTF8Str(this.position, bufLen);
            this.position += bufLen;
            return str;
        }
    }]);

    return PackageReader;
}();

module.exports = PackageReader;

cc._RF.pop();