(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/modules/http.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'bf0c5KfrIRBy6XO61WLdIr0', 'http', __filename);
// Script/modules/http.js

"use strict";

var http = {
    get: function get(url, callback) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                var respone = xhr.responseText;
                callback(respone);
            }
        };
        xhr.open("GET", url, true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }
        xhr.timeout = 5000; // 5 seconds for timeout  

        xhr.send();
    },

    post: function post(url, params, callback) {
        var xhr = cc.loader.getXMLHttpRequest();
        xhr.onreadystatechange = function () {
            cc.log('xhr.readyState=' + xhr.readyState + '  xhr.status=' + xhr.status);
            if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
                var respone = xhr.responseText;
                callback(respone);
            } else {
                callback(-1);
            }
        };
        xhr.open("POST", url, true);
        if (cc.sys.isNative) {
            xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
        }

        // note: In Internet Explorer, the timeout property may be set only after calling the open()  
        // method and before calling the send() method.  
        xhr.timeout = 5000; // 5 seconds for timeout  

        xhr.send(params);
    }
};
module.exports = http;

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
        //# sourceMappingURL=http.js.map
        