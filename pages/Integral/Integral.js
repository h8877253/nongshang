const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    integrallist: [{
        title: '个人收益',
        text: "2018-11-13 12:12",
        num:5
      }, {
        title: '团队收益',
        text: "2018-11-13 12:12",
        num: 5
      },
      {
        title: '积分支付',
        text: "2018-11-13 12:12",
        num: -100
      },
      {
        title: '推荐',
        text: "2018-11-13 12:12",
        num: 5
      },
      {
        title: '添加收货地址',
        text: "2018-11-13 12:12",
        num: -200
      },
    ]
  }
})