const app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    date: '2018-02-03',
  },
  onLoad: function(options) {

  },
  bindDateChange: function(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  showModal: function(e) {
    var modalName = e.currentTarget.dataset.modal;
    this.setData({
      modalName
    })
  },
  closeModal: function(e) {
    this.setData({
      modalName: null
    })
  },
})