//app.js
App({
  // onLaunch: function() {
  //   // 登录
  //   wx.login({
  //     success: res => {
  //       // 发送 res.code 到后台换取 openId, sessionKey, unionId
  //     }
  //   })
  //   // 获取用户信息
  //   wx.getSetting({
  //     success: res => {
  //       if (res.authSetting['scope.userInfo']) {
  //         // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
  //         wx.getUserInfo({
  //           success: res => {
  //             // 可以将 res 发送给后台解码出 unionId
  //             this.globalData.userInfo = res.userInfo

  //             // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
  //             // 所以此处加入 callback 以防止这种情况
  //             if (this.userInfoReadyCallback) {
  //               this.userInfoReadyCallback(res)
  //             }
  //           }
  //         })
  //       }
  //     }
  //   })
  //   // 获取系统状态栏信息
  // },
  globalData: {
    userInfo: null,
    ShopCartList: [
      {
        shopId: 2,
        shopSrc: '/images/other/x2.jpg',
        shopTitle: '桃子',
        shopPrice: '5.00',
        shopKg: '2.66kg',
        shopNum: 1,
      },
      {
        shopId: 3,
        shopSrc: '/images/other/x3.jpg',
        shopTitle: '苹果',
        shopPrice: '5.00',
        shopKg: '2.66kg',
        shopNum: 1,
      },
      {
        shopId: 4,
        shopSrc: '/images/other/x4.jpg',
        shopTitle: '牛油果',
        shopPrice: '5.00',
        shopKg: '2.66kg',
        shopNum: 1,
      },
      {
        shopId: 5,
        shopSrc: '/images/other/x5.jpg',
        shopTitle: '猕猴桃',
        shopPrice: '5.00',
        shopKg: '2.66kg',
        shopNum: 1,
      },
      {
        shopId: 6,
        shopSrc: '/images/other/x6.jpg',
        shopTitle: '猕猴桃',
        shopPrice: '5.00',
        shopKg: '2.66kg',
        shopNum: 1,
      },
    ]
  },
  dateToObj(dateObj) {
    return JSON.parse(JSON.stringify(dateObj))
  },
  onLaunch: function () {
    var that = this;
    wx.getSystemInfo({
      success: e => {
        this.globalData.StatusBar = e.statusBarHeight;
        this.globalData.CustomBar = e.platform == 'android' ? e.statusBarHeight + 50 : e.statusBarHeight + 45;
      }
    })
    //  获取商城名称
    // wx.request({
    //   url: that.globalData.baseUrl + '/config/get-value',
    //   data: {
    //     key: 'mallName'
    //   },
    //   success: function (res) {
    //     if (res.data.code == 0) {
    //       wx.setStorageSync('mallName', res.data.data.value);
    //     }
    //   }
    // })
    // this.login();
    // this.getTlist();
  },
  // login: function () {
  //   var that = this;
  //   var token = that.globalData.token;
  //   if (token) {
  //     wx.request({
  //       url: that.globalData.baseUrl + '/user/check-token',
  //       data: {
  //         token: token
  //       },
  //       success: function (res) {
  //         if (res.data.code != 0) {
  //           that.globalData.token = null;
  //           that.login();
  //         }
  //       }
  //     })
  //     return;
  //   }
  //   wx.login({
  //     success: function (res) {
  //       wx.request({
  //         url: that.globalData.baseUrl + '/user/wxapp/login',
  //         data: {
  //           code: res.code
  //         },
  //         success: function (res) {
  //           if (res.data.code == 10000) {
  //             // 去注册
  //             that.registerUser();
  //             return;
  //           }
  //           if (res.data.code != 0) {
  //             // 登录错误
  //             wx.hideLoading();
  //             wx.showModal({
  //               title: '提示',
  //               content: '无法登录，请重试',
  //               showCancel: false
  //             })
  //             return;
  //           }
  //           that.globalData.token = res.data.data.token;
  //           that.globalData.uid = res.data.data.uid;
  //         }
  //       })
  //     }
  //   })
  // },
  // registerUser: function () {
  //   var that = this;
  //   wx.login({
  //     success: function (res) {
  //       var code = res.code; // 微信登录接口返回的 code 参数，下面注册接口需要用到
  //       wx.getUserInfo({
  //         success: function (res) {
  //           var iv = res.iv;
  //           var encryptedData = res.encryptedData;
  //           // 下面开始调用注册接口
  //           wx.request({
  //             url: that.globalData.baseUrl + '/user/wxapp/register/complex',
  //             data: { code: code, encryptedData: encryptedData, iv: iv }, // 设置请求的 参数
  //             success: (res) => {
  //               wx.hideLoading();
  //               that.login();
  //             }
  //           })
  //         }
  //       })
  //     }
  //   })
  // },
  // sendTempleMsg: function (orderId, trigger, template_id, form_id, page, postJsonString) {
  //   var that = this;
  //   wx.request({
  //     url: that.globalData.baseUrl + '/template-msg/put',
  //     method: 'POST',
  //     header: {
  //       'content-type': 'application/x-www-form-urlencoded'
  //     },
  //     data: {
  //       token: that.globalData.token,
  //       type: 0,
  //       module: 'order',
  //       business_id: orderId,
  //       trigger: trigger,
  //       template_id: template_id,
  //       form_id: form_id,
  //       url: page,
  //       postJsonString: postJsonString
  //     },
  //     success: (res) => {
  //       //console.log('*********************');
  //       //console.log(res.data);
  //       //console.log('*********************');
  //     }
  //   })
  // },
  //获取类别列表
  // getTlist() {
  //   var self = this;
  //   wx.request({
  //     url: self.globalData.baseUrl + '/shop/goods/category/all',
  //     data: {},
  //     header: {
  //       'content-type': 'application/json' // 默认值
  //     },
  //     success: function (res) {
  //       //划分分类
  //       var _data = res.data.data, _tlist = [];
  //       //选出一级分类，放入firstType
  //       for (var x in _data) {
  //         if (_data[x].pid == 0) {
  //           _tlist.push({
  //             firstType: _data[x],
  //             second: []
  //           })
  //         }
  //         //判断是否存在二级分类
  //         if (self.globalData.navigate_type == 1 && _data[x].pid != 0) {
  //           self.globalData.navigate_type = 2;
  //         }
  //       }
  //       //如果存在二级分类
  //       if (self.globalData.navigate_type == 2) {
  //         //选出二级分类，放入对应的secondList
  //         for (var x in _data) {
  //           for (var y in _tlist) {
  //             if (_data[x].pid == _tlist[y].firstType.id) {
  //               _tlist[y].second.push(_data[x]);
  //             }
  //           }
  //         }
  //         //整理二级分类
  //         for (var x in _tlist) {
  //           //两行显示
  //           if (_tlist[x].second.length >= 10) {
  //             var _slist = _tlist[x].second;
  //             _tlist[x].secondList = [];
  //             _tlist[x].thirdList = [];
  //             for (var y in _slist) {
  //               if (y % 2) {
  //                 _tlist[x].thirdList.push(_slist[y]);
  //               } else {
  //                 _tlist[x].secondList.push(_slist[y]);
  //               }
  //             }
  //           }
  //         }
  //       } else {
  //         _tlist[0].secondList = [];
  //         _tlist[0].thirdList = [];
  //         for (var x in _tlist) {
  //           //两行显示
  //           if (_tlist.length >= 10) {
  //             if (x % 2) {
  //               _tlist[0].thirdList.push(_tlist[x].firstType);
  //             } else {
  //               _tlist[0].secondList.push(_tlist[x].firstType);
  //             }
  //           } else {
  //             _tlist[0].secondList.push(_tlist[x].firstType);
  //           }
  //         }
  //       }
  //       console.log(_tlist);
  //       self.globalData.tlist = _tlist;
  //     }
  //   })
  // }
})