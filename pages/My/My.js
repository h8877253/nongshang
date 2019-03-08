const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    HasBingPhone: true,
    HasBingAddress: true,
    isDelete: false,
    isEdit: false,
    disabled: false,
    code: '获取验证码',
    area: ['北京市', '北京市', '东城区'],
    AddressList: [{
      id: '1',
      name: '黄建杰',
      phone: "15928474996",
      area: ["北京市", "北京市", "东城区"],
      address: "双林北支路360附近",
      checked: true
    }]
  },
  onLoad: function(options) {},
  setDefaultAddress() {
    let DefaultAddress = this.data.AddressList.find(item => item.checked == true);
    if (typeof DefaultAddress == 'undefined') {
      wx.showToast({
        title: "您还没有选择默认的地址",
        icon: "none"
      })
      return
    } else {
      this.setData({
        AddressListModal: null,
        isDelete: false,
      })
      wx.showToast({
        title: "地址：" + DefaultAddress.area.join('') + DefaultAddress.address + "已经设置为默认地址",
        icon: "none"
      })
    }
  },
  // Show绑定手机model
  showPhoneModal: function(e) {
    var modalName = e.currentTarget.dataset.modal;
    this.setData({
      modalName
    })
  },
  // Close绑定手机model
  closePhoneModal: function(e) {
    this.setData({
      modalName: null,
      bingphone: ''
    })
  },
  // Show二维码model
  showQrCode(e) {
    var modalName = e.currentTarget.dataset.modal;
    console.log()
    this.setData({
      modalName
    })
  },
  // 关闭添加地址model,并初始化值
  closeAddressModal() {
    this.setData({
      addAddressModal: null,
      address: '',
      name: '',
      phone: '',
      area: ["北京市", "北京市", "东城区"]
    })
  },
  // 添加地址
  AddAddress() {
    if (this.data.name && this.data.phone && this.data.address) {
      let area = this.data.area;
      let address = this.data.address;
      let name = this.data.name;
      let phone = this.data.phone;
      let AddressList = [...this.data.AddressList, {
        id: 12,
        name,
        address,
        phone,
        area
      }]
      this.setData({
        AddressList,
        addAddressModal: null,
        AddressListModal: "AddressListModal",
        address: '',
        name: '',
        phone: '',
        region: ["北京市", "北京市", "东城区"]
      });
      wx.showToast({
        title: "地址添加成功",
        icon: "none"
      })
    } else {
      wx.showToast({
        title: '请填写完整',
        icon: "none"
      })
    }

  },
  // 新建地址-------跟添加地址一样
  newAddAddress() {
    this.setData({
      isEdit: false,
      addAddressModal: "addAddressModal"
    })
  },
  // 关闭地址列表model
  closeAddressListModal() {
    this.setData({
      AddressListModal: null,
      isDelete: false
    })
  },
  // 三级地理位置连锁
  bindRegionChange: function(e) {
    this.setData({
      area: e.detail.value
    })
  },
  // Show添加地址model
  showAddressModal(e) {
    console.log(this.data.AddressList == 0);
    this.data.AddressList == 0 ? this.setData({
      isEdit: false,
      addAddressModal: "addAddressModal"
    }) : this.setData({
      isEdit: true,
      AddressListModal: "AddressListModal"

    })
  },
  // Show删除地址
  showDeleteAddress() {
    let AddressList = this.data.AddressList
    this.setData({
      isDelete: !this.data.isDelete,
      AddressList
    })
  },
  // 删除地址按钮
  deleteAddress(e) {
    let AddressList = this.data.AddressList.filter(item => item.id != e.target.id)
    this.setData({
      AddressList,
    })
    wx.showToast({
      title: '已经删除该条地址',
      icon: "none"
    })
    if (this.data.AddressList.length == 0) {
      this.setData({
        isDelete: false,
      })
    }

  },
  // 手机号
  watchName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  // 地址
  watchAddress(e) {
    this.setData({
      address: e.detail.value
    })
  },
  // 手机号
  watchPhone(e) {
    this.setData({
      phone: e.detail.value
    })
  },
  // 选择默认地址，请求设置后台参数list中的一项为true
  radioChange(e) {
    console.log(e.detail.value);
    this.data.AddressList.forEach(item => {
      if (item.id == e.detail.value) {
        item.checked = true
      } else {
        item.checked = false
      }
    })
  },
  // 编辑地址，实际跟 添加地址用的同一个模态框
  editAddressModel(e) {
    let AddressList = this.data.AddressList.find(item => item.id == e.target.id)
    console.log(AddressList);
    this.setData({
      editaddressid: AddressList.id,
      name: AddressList.name,
      phone: AddressList.phone,
      area: AddressList.area,
      address: AddressList.address,
      addAddressModal: "addAddressModal",
      isEdit: true
    })
  },
  // 确认修改原地址
  editAddress(e) {
    let AddressList = this.data.AddressList.filter((item, index, arr) => {
      if (item.id == this.data.editaddressid) {
        item.name = this.data.name
        item.phone = this.data.phone
        item.area = this.data.area
        item.address = this.data.address
      }
      return arr
    });
    console.log(AddressList);
    this.setData({
      AddressList: AddressList,
      addAddressModal: null,
      address: '',
      name: '',
      phone: '',
      region: ["北京市", "北京市", "东城区"]
    })
  },
  // 下载二维码 
  downLoadImage() {
    var that = this;
    wx.downloadFile({
      url: 'https://iconfont.alicdn.com/t/1528091107175.jpg@100h_100w.jpg',
      type: 'image',
      success: function(res) {
        wx.saveImageToPhotosAlbum({
          filePath: res.tempFilePath,
          success: function() {
            wx.showToast({
              title: '保存成功'
            })
          },
          fail: function(res) {
            wx.showToast({
              title: '保存失败',
              icon: 'none'
            })
          }
        })
      },
      fail: function(err) {
        console.log(err)
      },
      complete: function(e) {
        console.log(e)
      }
    })
  },
  // 绑定手机确认------绑定手机请求发送绑定手机号
  bindingPhone() {
    // let bingphone = that.data.bingphone;
    this.setData({
      modalName: null
    })
  },
  // input监听手机号
  bingPhone(e) {
    this.setData({
      bingphone: e.detail.value
    })
  },
  // 获取手机发送验证码
  getPhoneCode: function() {
    let that = this;
    let bingphone = that.data.bingphone;
    let isPass = /^[1][3,4,5,7,8][0-9]{9}$/.test(bingphone)
    if (!isPass) {
      wx.showToast({
        title: '手机号有误，请检查后确认',
        icon: 'none'
      })
      return
    }
    let time = 60;
    wx.showToast({
      title: '短信验证码已发出，请稍等',
      icon: 'none'
    })
    that.setData({
      code: '60秒后重发',
      disabled: true
    })
    var Interval = setInterval(function() {
      time--;
      if (time > 0) {
        that.setData({
          code: time + '秒后可重发'
        })
      } else {
        clearInterval(Interval);
        that.setData({
          code: '获取验证码',
          disabled: false
        })
      }
    }, 1000)
  }

})