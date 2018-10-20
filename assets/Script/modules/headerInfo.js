class HeaderInfo {
    get ctype() {
        return this._ctype;
    }

    set ctype(value) {
        this._ctype = value;
        this._stype = this._ctype >> 16;
    }

    get stype() {
        return this._stype;
    }

    /**
     * @param {number} args.ctype
     * @param {number} args.utag
     * @param {DataType} args.dataType
     */
    constructor(args) {
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
}

module.exports = HeaderInfo;