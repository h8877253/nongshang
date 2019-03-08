const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    matterlist: [{
      title: '如何分享二维码？',
      text:"点击图片长按二维码即可",
      isShow: true
    }, {
      title: '蜀量生态还能提供什么服务？',
      text: "还能提供相关农业的技术培训教导工作",
      isShow: true
    },
      {
        title: '商品购买后，几天能发货？',
        text: "商品从购买起1-3日内发货",
        isShow: true
      },
      {
        title: '商品购买后，用什么快递发货？',
        text: "商品默认是顺风发货，如需修改，请电话联系客服人员",
        isShow: true
      },
    ]
  },
  searchIcon(e) {
    let key = e.detail.value;
    console.log(key);
    let list = this.data.matterlist;
    // for (let i = 0; i < list.length; i++) {
    //   let a = key;
    //   let b = list[i].title;
    //   if (b.search(a) != -1) {
    //     list[i].isShow = true
    //   } else {
    //     list[i].isShow = false
    //   }
    // }
    this.setData({
      matterlist: list
    })
  }
})