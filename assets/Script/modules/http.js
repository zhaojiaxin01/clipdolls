var http = {
	get: function (url, callback) {  
        var xhr = cc.loader.getXMLHttpRequest();  
        xhr.onreadystatechange = function () {  
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {  
                var respone = xhr.responseText;  
                callback(respone);  
            }  
        };  
        xhr.open("GET", url, true);  
        if (cc.sys.isNative) {  
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");  
        }  
        xhr.timeout = 5000;// 5 seconds for timeout  
  
        xhr.send();  
    },  
  
    post: function (url, params, callback) {  
        var xhr = cc.loader.getXMLHttpRequest();  
        xhr.onreadystatechange = function () {  
            cc.log('xhr.readyState='+xhr.readyState+'  xhr.status='+xhr.status);  
            if (xhr.readyState === 4 && (xhr.status >= 200 && xhr.status < 300)) {  
                var respone = xhr.responseText;  
                callback(respone);  
            }else{  
                  callback(-1);  
            }  
        };  
        xhr.open("POST", url, true);  
        if (cc.sys.isNative) {  
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");  
        }  
  
        // note: In Internet Explorer, the timeout property may be set only after calling the open()  
        // method and before calling the send() method.  
        xhr.timeout = 5000;// 5 seconds for timeout  
  
        xhr.send(params);  
    }  
};
module.exports = http;