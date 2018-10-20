(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/modules/headerInfo.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '4fca786PflGEor2beakoFgc', 'headerInfo', __filename);
// Script/modules/headerInfo.js

"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HeaderInfo = function () {
    _createClass(HeaderInfo, [{
        key: "ctype",
        get: function get() {
            return this._ctype;
        },
        set: function set(value) {
            this._ctype = value;
            this._stype = this._ctype >> 16;
        }
    }, {
        key: "stype",
        get: function get() {
            return this._stype;
        }

        /**
         * @param {number} args.ctype
         * @param {number} args.utag
         * @param {DataType} args.dataType
         */

    }]);

    function HeaderInfo(args) {
        _classCallCheck(this, HeaderInfo);

        args = args ? args : {
            ctype: 0,
            utag: 0,
            dataType: 0
        };

        /**
         * 服务类型
         * @type {number}
         */
        this._stype = 0;
        this._ctype = 0;

        /**
         * 命令类型
         * @type {number}
         */
        this.ctype = args.ctype ? args.ctype : 0;
        /**
         * 用户标签
         * @type {number}
         */
        this.utag = args.utag ? args.utag : 0;
        /**
         * 协议类型
         * @type
         */
        this.dataType = args.dataType ? args.dataType : 0;
    }

    return HeaderInfo;
}();

module.exports = HeaderInfo;

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
        //# sourceMappingURL=headerInfo.js.map
        