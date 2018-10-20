"use strict";
cc._RF.push(module, '18ab2iQbmRFPK1DlIl057JX', 'shop');
// Script/shop/shop.js

"use strict";

var global = require("globel");
var http = require("http");
var url = global.url;
var goldItemImg = cc.Class({
    name: "goldItemImg",
    properties: {
        name: '',
        itemSprite: cc.SpriteFrame
    }
});
var diamondsItemImg = cc.Class({
    name: "diamondsItemImg",
    properties: {
        name: '',
        itemSprite: cc.SpriteFrame
    }
});
var propItemImg = cc.Class({
    name: "propItemImg",
    properties: {
        name: '',
        itemSprite: cc.SpriteFrame
    }
});
var giftItemImg = cc.Class({
    name: "giftItemImg",
    properties: {
        name: '',
        itemSprite: cc.SpriteFrame
    }
});

cc.Class({
    extends: cc.Component,

    properties: {
        goldPrefab: cc.Prefab,
        diamondsPrefab: cc.Prefab,
        propPrefab: cc.Prefab,
        giftPrefab: cc.Prefab,

        shopScrollView: {
            type: cc.ScrollView,
            default: null
        },
        glodType: {
            type: goldItemImg,
            default: []
        },
        diamondsType: {
            type: diamondsItemImg,
            default: []
        },
        propType: {
            type: propItemImg,
            default: []
        },
        giftType: {
            type: giftItemImg,
            default: []
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function onLoad() {
        //    this._gen_goldItem();
        this.getShopData();
    },

    // mock数据
    getShopData: function getShopData() {
        http.get(url + 'jsonTest/shop_test.json', function (res) {
            if (res) {
                var data = JSON.parse(res);
                this.goldData = data.gold;
                this.diamondsData = data.diamonds;
                this.propData = data.prop;
                this.giftData = data.gift;
                this._gen_Item(this.goldData, this.goldPrefab, this.glodType);
            } else {
                console.log(err);
                return;
            }
        }.bind(this));
    },
    goldsPanel: function goldsPanel() {
        this.shopScrollView.content.removeAllChildren();
        this._gen_Item(this.goldData, this.goldPrefab, this.glodType);
    },
    diamondsPanel: function diamondsPanel() {
        this.shopScrollView.content.removeAllChildren();
        this._gen_Item(this.diamondsData, this.diamondsPrefab, this.diamondsType);
    },

    propPanel: function propPanel() {
        this.shopScrollView.content.removeAllChildren();
        this._gen_Item(this.propData, this.propPrefab, this.propType);
    },
    giftPanel: function giftPanel() {
        this.shopScrollView.content.removeAllChildren();
        this._gen_Item(this.giftData, this.giftPrefab, this.giftType);
    },
    // 通用
    _gen_Item: function _gen_Item(data, prefab, imgType) {
        for (var i = 0; i < data.length; i++) {
            var shopItem = cc.instantiate(prefab); // 复制金币预制体
            this.shopScrollView.content.addChild(shopItem); // 添加到节点上 

            if (data != this.giftData) {
                var num = shopItem.getChildByName('name').getChildByName('num');
                num.getComponent(cc.Label).string = data[i].num;
            }
            var price = shopItem.getChildByName('priceBg').getChildByName('price');
            price.getComponent(cc.Label).string = data[i].price;

            for (var j = 0; j < imgType.length; j++) {
                if (imgType[j].name == data[i].imgName) {
                    var shopItemImg = shopItem.getChildByName('img'); // 获取图片节点
                    shopItemImg.getComponent(cc.Sprite).spriteFrame = imgType[j].itemSprite;
                }
            }
        }
    },
    start: function start() {}
}

// update (dt) {},
);

cc._RF.pop();