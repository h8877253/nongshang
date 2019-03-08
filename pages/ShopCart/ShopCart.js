var app = getApp()
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    minusStatus: 'disabled',
    carts: [],
    hasList: true,
    totalPrice: 0,
    isDelete: false,
    selectAllStatus: false,
    ShopCartList: app.globalData.ShopCartList
  },
  onLoad: function() {
    this.getTotalPrice();
    //  this.selectAll();
    if (!this.data.ShopCartList.length) {
      this.setData({
        hasList: false
      });
    } else {
      this.getTotalPrice();
    }
  },
  radioChange(e) {
    this.data.ShopCartList.forEach(item => {
      if (item.shopId == e.detail.value) {
        item.checked = true
      } else {
        item.checked = false
      }
    })
    this.setData({
      ShopCartList: this.data.ShopCartList
    });
    this.getTotalPrice();
  },
  bindMinus: function(e) {
    console.log(e);
    var num = this.data.num;
    if (num > 1) {
      num--;
    }
    var minusStatus = num <= 1 ? 'disabled' : 'normal';
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  bindPlus: function() {
    var num = this.data.num;
    num++;
    var minusStatus = num < 1 ? 'disabled' : 'normal';
    this.setData({
      num: num,
      minusStatus: minusStatus
    });
  },
  getTotalPrice() {
    let ShopCartList = this.data.ShopCartList;
    let total = 0;
    for (let i = 0; i < ShopCartList.length; i++) {
      if (ShopCartList[i].checked) {
        total += ShopCartList[i].shopNum * ShopCartList[i].shopPrice;
      }
    }
    this.setData({
      ShopCartList: ShopCartList,
      totalPrice: total.toFixed(2)
    });
  },
  selectAll(e) {
    let selectAllStatus = this.data.selectAllStatus;
    selectAllStatus = !selectAllStatus;
    let ShopCartList = this.data.ShopCartList;
    for (let i = 0; i < ShopCartList.length; i++) {
      ShopCartList[i].checked = selectAllStatus;
    }
    this.setData({
      selectAllStatus: selectAllStatus,
      ShopCartList: ShopCartList
    });
    this.getTotalPrice();
  },
  // 增加数量
  addCount(e) {
    const index = e.currentTarget.dataset.index;
    let ShopCartList = this.data.ShopCartList;
    let shopNum = ShopCartList[index].shopNum;
    shopNum++;
    ShopCartList[index].shopNum = shopNum;
    this.setData({
      ShopCartList: ShopCartList
    });
    this.getTotalPrice();
  },
  // 减少数量
  minusCount(e) {
    const index = e.currentTarget.dataset.index;
    let ShopCartList = this.data.ShopCartList;
    let shopNum = ShopCartList[index].shopNum;
    if (shopNum <= 1) {
      return false;
    }
    shopNum = shopNum - 1;
    ShopCartList[index].shopNum = shopNum;
    this.setData({
      ShopCartList: ShopCartList
    });
    this.getTotalPrice();
  },
  showModal(e) {
    this.setData({
      modalName: e.currentTarget.dataset.modal,
      curshopId: e.target.id
    })
  },
  closeModal(e) {
    this.setData({
      modalName: null
    })
  },
  deleteShop(e) {
    let ShopCartList = this.data.ShopCartList.filter(item => item.shopId != e.currentTarget.dataset.curshopid);
    this.setData({
      ShopCartList: ShopCartList,
      modalName: null
    });
    !ShopCartList.length ? this.setData({
      hasList: false
    }) : this.getTotalPrice();
  },
  isDelete() {
    this.setData({
      isDelete: !this.data.isDelete
    })
  }
})