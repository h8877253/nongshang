const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
  },
  onLoad: function(options) {
    var that = this;
    let intervarID = setInterval(function() {
      var leftTime = (new Date('2019-2-03 15:46:13'.replace(/-/g, "/")).getTime()) - (new Date()); //计算剩余的毫秒数
      var days = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);
      var hours = parseInt(leftTime / 1000 / 60 / 60 % 24, 10); 
      var minutes = parseInt(leftTime / 1000 / 60 % 60, 10);
      var seconds = parseInt(leftTime / 1000 % 60, 10);
      days = that.checkTime(days);
      hours = that.checkTime(hours);
      minutes = that.checkTime(minutes);
      seconds = that.checkTime(seconds);
      that.setData({
        clock: days + "天" + hours + "小时" + minutes + "分" + seconds + "秒"
      })
      if (days == '00' && hours == '00' && minutes == '00' && seconds == '00') {
        clearInterval(intervarID);
      }
    }, 1000)
  },
  onReady: function() {

  },
  checkTime(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  },
})