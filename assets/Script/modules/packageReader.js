class PackageReader {
    get unreadCount() {
        return this._unreadCount;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        // console.log("\x1B[31m%s\x1b[39m", "PackageReader.position:", value);
        this._position = value;
        this._unreadCount = this._buf.length - this.position;
    }
    constructor(buf) {
        this._buf = new DataView(buf);
        this._position = 0;
    }

    readInt8() {
        let number = this._buf.getInt8(this.position);
        this.position++;
        return number;
    }

    readInt16() {
        let number = this._buf.getInt16(this.position);
        this.position += 2;
        return number;
    }

    readInt32() {
        let number = this._buf.getInt32(this.position);
        this.position += 4;
        return number;
    }

    readUInt32() {
        let number = this._buf.getUint32(this.position);
        this.position += 4;
        return number;
    }

    readUTF8Str() {
        let bufLen = this.readInt16();
        let str = this._buf.readUTF8Str(this.position, bufLen);
        this.position += bufLen;
        return str
    }

   
}

module.exports = PackageReader;