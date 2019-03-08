const utils = require('../../utils/util');
const url = require('../../utils/url.js');
const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    page:1,
    BannerSrc: ['/images/other/x4.jpg', '/images/other/x6.jpg', '/images/other/x8.jpg', '/images/other/x9.jpg'],
    MsgList: [{
        url: "url",
        title: "蜀粮科技组织架构调整"
      },
      {
        url: "url",
        title: "蜀粮科技组织架构调整"
      },
      {
        url: "url",
        title: "蜀粮科技组织架构调整蜀粮科技组织架构调整蜀粮科技组织架构调整"
      }
    ],
    NewShopList: [{
        id: '1',
      title: '牛油果牛油果牛油果牛油果牛油果牛油果牛油果牛油果牛油果牛油果',
        newshopsrc: '/images/other/x4.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      },
      {
        id: '2',
        title: '猕猴桃',
        newshopsrc: '/images/other/x5.jpg',
        newprice: "8.00",
        oldprice: "6.00"

      },
      {
        id: '3',
        title: '草莓',
        newshopsrc: '/images/other/x6.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      },
      {
        id: '4',
        title: '百香果',
        newshopsrc: '/images/other/x1.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      },
      {
        id: '5',
        title: '桃子',
        newshopsrc: '/images/other/x2.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      },
      {
        id: '6',
        title: '苹果',
        newshopsrc: '/images/other/x3.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      }
    ],
    RecomShopList: [{
        id: '1',
      title: '白菜',
        recomshopsrc: '/images/other/x7.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      },
      {
        id: '2',
        title: '柑子',
        recomshopsrc: '/images/other/x8.jpg',
        newprice: "8.00",
        oldprice: "6.00"

      },
      {
        id: '3',
        title: '胡萝卜',
        recomshopsrc: '/images/other/x12.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      },
      {
        id: '4',
        title: '豌豆',
        recomshopsrc: '/images/other/x10.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      },
      {
        id: '5',
        title: '青苹果',
        recomshopsrc: '/images/other/x11.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      },
      {
        id: '6',
        title: '葡萄',
        recomshopsrc: '/images/other/x9.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      }
    ],
    ReserShopList: [{
        id: '1',
        title: '啫喱',
      resershopsrc: '/images/other/y11.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      },
      {
        id: '2',
        title: '南瓜',
        resershopsrc: '/images/other/y2.jpg',
        newprice: "8.00",
        oldprice: "6.00"

      },
      {
        id: '3',
        title: '大白菜',
        resershopsrc: '/images/other/x7.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      },
      {
        id: '4',
        title: '柑橘',
        resershopsrc: '/images/other/x8.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      },
      {
        id: '5',
        title: '黄瓜',
        resershopsrc: '/images/other/x4.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      },
      {
        id: '6',
        title: '菠萝',
        resershopsrc: '/images/other/y10.jpg',
        newprice: "8.00",
        oldprice: "6.00"
      }
    ]
  },
  onLoad: function() {

  },


  onReachBottom: function() {
    var that = this;
    utils.http(url.webhttp + url.setFav, 'GET', { page: ++this.data.page })
      .then(function (response) {
      }, function (error) {
        console.log(error);
      })

    this.setData({
      showLoading: true
    })
    setTimeout(function() {
      that.setData({
        showLoading: false
      })
    }, 4000)
    // var that = this;
    // const openId = app.globalData.userOpenId;
    // util.http(url.ApiUrl + "DouWen/discoveryListLt/" + (++this.data.page) + "/" + openId, 'GET', {}, function (res) {
    //   var note = that.data.note;
    //   if (res.length == 0) {
    //     wx.showToast({
    //       title: '亲，木有数据了哦~！',
    //       icon: "none",
    //     });
    //   } else {
    //     wx.showLoading({
    //       title: '玩命加载中'
    //     })
    //     for (var i = 0; i < res.length; i++) {
    //       if (res[i].contentImgUrl.indexOf("http") < 0) {
    //         res[i].contentImgUrl = url.Host + util.urlCheck(res[i].contentImgUrl);
    //       }
    //       note.push(res[i]);
    //     }
    //     setTimeout(function () {
    //       that.setData({
    //         note: note,
    //       })
    //       wx.hideLoading();
    //     }, 2000)
    //   }
    // })
  },
  ToShopDetail(e) {
    wx.navigateTo({
      url: "../ShopDetail/ShopDetail",
    });
  },
  showModal: function(e) {
    var showName = e.currentTarget.dataset.modal;
    this.setData({
      modalName: showName
    })
  },
  closeModal: function(e) {
    this.setData({
      modalName: null
    })
  }
})