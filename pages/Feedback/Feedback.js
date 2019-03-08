const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    images: [],
    FeedbackList: [{
        id: 1,
        title: '功能异常',
        titledes: '不能正确使用现有功能'
      },
      {
        id: 2,
        title: '使用建议',
        titledes: '用的不满意的地方都提过来吧'
      },
      {
        id: 3,
        title: '功能需求',
        titledes: '现有功能不能满足'
      },
      {
        id: 4,
        title: '系统闪退',
        titledes: '意外退出，闪退'
      },
      {
        id: 5,
        title: '其他',
        titledes: '其他'
      }
    ]
  },
  onLoad: function(options) {

  },
  radioChange(e) {
    console.log(e.detail.value);
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