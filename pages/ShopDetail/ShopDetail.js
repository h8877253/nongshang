const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    TabCurData: [{
        name: "商品详情",
        id: 0
      },
      {
        name: "评价",
        id: 1
      }
    ],
    rating: [{
      id: 0,
      scores: 5,
    }]
  },
  onLoad: function(options) {},
  tabSelect(e) {
    console.log(e);
    this.setData({
      TabCur: e.currentTarget.dataset.id,
    })
  },

})