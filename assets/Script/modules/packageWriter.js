class PackageWriter {
    get unreadCount() {
        return this._unreadCount;
    }
    get position() {
        // console.log("位置：",this._position);
        return this._position;
    }
    set position(value) {
        // console.log("\x1B[31m%s\x1b[39m", "PackageReader.position:", value);
        this._position = value;
        this._unreadCount = this._buf.length - this.position;
    }

    constructor(buf) {
        this._buf = new DataView(buf);
        // this._buf = buf;
        this._position = 0;
    }

    writeInt8(num) {
        this._buf.setInt8(this.position, num);
        this.position++;
    }

    writeInt16(num) {
        this._buf.setInt16(this.position, num);
        this.position += 2;
    }

    writeInt32(num) {
        this._buf.setInt32(this.position, num);
        this.position += 4;
    }

    writeUInt32(num) {
        this._buf.setUint32(this.position, num);
        this.position += 4;
    }

    writeUTF8Str(str) {
        let bufLen = str.utf8StrLength();
        this.writeInt16(bufLen);
        this._buf.writeUTF8Str(this.position, str);
        this.position += bufLen;
    }

    writeHeaderInfo(headerInfo) {
        // this.writeInt16(headerInfo.stype);
        this.writeInt32(headerInfo.ctype);
        this.writeUInt32(headerInfo.utag);
        this.writeInt8(headerInfo.dataType);
    }
    static writeUtag(dataBuf, utag) {
        return dataBuf.writeUInt32(utag);
    }

    static removeUtag(dataBuf) {
        return dataBuf.writeUInt32(0);
    }
    
}
PackageWriter.headerSize = 9;
module.exports = PackageWriter;