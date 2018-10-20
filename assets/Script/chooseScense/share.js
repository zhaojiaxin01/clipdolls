cc.Class({
    extends: cc.Component,

    properties: {
     
    },

    onLoad:function() {
        this.share();

    },
    // 转发
    share:function(){
        // 显示当前页面的转发按钮APi
        wx.showShareMenu({
            withShareTicket: true, // 是否使用带 shareTicket 的转发
        });
        wx.onShareAppMessage(function () {
            return {
            title: '转发标题',
            imageUrl: canvas.toTempFilePathSync({
                destWidth: 500,
                destHeight: 400
            })
            }
        })   
    },
    // 主动拉起转发
    wxShare:function(){
        wx.shareAppMessage(function () {
            return {
            title: '转发标题',
            imageUrl: canvas.toTempFilePathSync({
                destWidth: 500,
                destHeight: 400
            })
            }
        })   
    },

    start () {

    },

    // update (dt) {},
});
