(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/modules/Ctype.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'cf26bf/kz1CDrnMVgi5+OUc', 'Ctype', __filename);
// Script/protobuf/Ctype.js

"use strict";

var Ctype = {
    auth: {
        LOGIN_REQ: 0x00010001, // 登录请求
        LOGIN_RES: 0x00010002, // 登录结果
        EDIT_PROFILE: 0x00010003, // 修改用户资料
        UNAME_LOGIN: 0x00010006 // 账号密码登录
    }
};
module.exports = Ctype;

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
        //# sourceMappingURL=Ctype.js.map
        