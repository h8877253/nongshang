var app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    ShopList: [{
        id: 1,
        shopTitle: '啫喱',
        shopImg: '/images/other/y1.jpg',
        shopRealprice: "2.00",
        shopBidprice: "4.00",
        shopSales: 2299,
        shopStock: 2000
      },
      {
        id: 2,
        shopTitle: '南瓜',
        shopImg: '/images/other/y2.jpg',
        shopRealprice: "6.00",
        shopBidprice: "6.00",
        shopSales: 2299,
        shopStock: 2000
      },
      {
        id: 3,
        shopTitle: '龙眼',
        shopImg: '/images/other/y3.jpg',
        shopRealprice: "6.00",
        shopBidprice: "8.00",
        shopSales: 2299,
        shopStock: 2000
      },
      {
        id: 4,
        shopTitle: '黄瓜',
        shopImg: '/images/other/y4.jpg',
        shopRealprice: "6.00",
        shopBidprice: "8.00",
        shopSales: 2299,
        shopStock: 2000
      },
      {
        id: 5,
        shopTitle: '青葡萄',
        shopImg: '/images/other/y5.jpg',
        shopRealprice: "6.00",
        shopBidprice: "8.00",
        shopSales: 2299,
        shopStock: 2000
      },
      {
        id: 6,
        shopTitle: '樱桃',
        shopImg: '/images/other/y6.jpg',
        shopRealprice: "6.00",
        shopBidprice: "8.00",
        shopSales: 2299,
        shopStock: 2000
      },
      {
        id: 7,
        shopTitle: '柠檬',
        shopImg: '/images/other/y7.jpg',
        shopRealprice: "6.00",
        shopBidprice: "8.00",
        shopSales: 2299,
        shopStock: 2000
      },
      {
        id: 8,
        shopTitle: '嫩姜',
        shopImg: '/images/other/y8.jpg',
        shopRealprice: "6.00",
        shopBidprice: "8.00",
        shopSales: 2299,
        shopStock: 2000
      },
      {
        id: 9,
        shopTitle: '黑寡妇石榴',
        shopImg: '/images/other/y9.jpg',
        shopRealprice: "6.00",
        shopBidprice: "8.00",
        shopSales: 2299,
        shopStock: 2000
      },
      {
        id: 10,
        shopTitle: '菠萝',
        shopImg: '/images/other/y10.jpg',
        shopRealprice: "6.00",
        shopBidprice: "8.00",
        shopSales: 2299,
        shopStock: 2000
      },
      {
        id: 11,
        shopTitle: '啫喱',
        shopImg: '/images/other/y11.jpg',
        shopRealprice: "6.00",
        shopBidprice: "8.00",
        shopSales: 2299,
        shopStock: 2000
      },
      {
        id: 12,
        shopTitle: '新疆葡萄',
        shopImg: '/images/other/y12.jpg',
        shopRealprice: "6.00",
        shopBidprice: "8.00",
        shopSales: 2299,
        shopStock: 2000
      },
      {
        id: 13,
        shopTitle: '玉米',
        shopImg: '/images/other/y13.jpg',
        shopRealprice: "6.00",
        shopBidprice: "8.00",
        shopSales: 2299,
        shopStock: 2000
      },
    ],
    radio: [{
        name: 'USA',
        value: '美国'
      },
      {
        name: 'CHN',
        value: '中国',
        checked: 'true'
      },
      {
        name: 'BRA',
        value: '巴西'
      },
      {
        name: 'JPN',
        value: '日本'
      },
      {
        name: 'ENG',
        value: '澳大利亚'
      },
      {
        name: 'TUR',
        value: '哈萨克斯坦'
      },
      {
        name: 'TUR',
        value: '法国'
      },
      {
        name: 'BRA',
        value: '巴西'
      },
      {
        name: 'JPN',
        value: '日本'
      },
      {
        name: 'ENG',
        value: '英国'
      },
      {
        name: 'TUR',
        value: '法国'
      }
    ],
  },
  onLoad: function(options) {

  },
  tabSelect(e) {
    this.data.TabCur == e.target.dataset.id ? '' : this.setData({
      TabCur: e.target.dataset.id
    })
  },
  showModal: function(e) {
    this.data.TabCur == e.target.dataset.id ? '' : this.setData({
      TabCur: e.target.dataset.id
    })
    var showName = e.currentTarget.dataset.modal;
    this.setData({
      modalName: showName
    })
  },
  closeModal: function(e) {
    this.setData({
      modalName: null
    })
  },



  onReachBottom: function() {
    var that = this;
    this.setData({
      showLoading: true
    })
    setTimeout(function() {
      that.setData({
        showLoading: false
      })
    }, 2000)
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
})