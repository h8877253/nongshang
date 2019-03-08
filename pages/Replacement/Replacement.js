const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    images: []
  },
  onLoad: function(options) {

  },
  setScores: function(e) {
    var id = e.currentTarget.dataset.id;
    var index = e.currentTarget.dataset.index;
    this.data.rating.scores = index;
    console.log(this.data.rating);
    this.setData({
      rating: this.data.rating
    })
  },
  chooseImage(e) {
    wx.chooseImage({
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        wx.showToast({
          title: "上传中",
          icon: "loading",
          duration: 2000,
          mask: true
        })
        const images = [...this.data.images, res.tempFilePaths[0]]
        this.setData({
          images: images
        });
      }
    })
  },
  removeImage(e) {
    let iindex = e.target.dataset.index;
    this.setData({
      images: this.data.images.filter((item, index) => index != iindex)
    })
    wx.showToast({
      title: "图片已删除"
    })
  },
})