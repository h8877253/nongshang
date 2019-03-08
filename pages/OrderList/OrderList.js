const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    TabCur: 0,
    winWidth: 0,
    winHeight: 0,
    scrollLeft: 0,
    statusType: [{
        name: "待付款",
        Tabindex: 0,
        obligationlist: [{
            id: 0,
            orderNumber: "0000000000",
            orderImg: '/images/other/x1.jpg',
            orderTitle: '草莓1',
            orderRealprice: "1.00",
            orderBidprice: "4.00",
            orderNum: 1
          },
          {
            id: 1,
            orderNumber: "1111111111",
            orderImg: '/images/other/x2.jpg',
            orderTitle: '草莓2',
            orderRealprice: "2.00",
            orderBidprice: "3.00",
            orderNum: 2
          }
        ]
      },
      {
        name: "待发货",
        Tabindex: 1
      },
      {
        name: "待收货",
        Tabindex: 2
      },
      {
        name: "待评价",
        Tabindex: 3
      },
      {
        name: "已完成",
        Tabindex: 4
      }
    ]
  },
  onLoad: function()  {    
    let line = Math.ceil(this.data.statusType[0].obligationlist.length * 440);;
    this.setData({
      Llight: line
    });
  },
  bindChange: function(e) {
    var that = this;
    console.log()
    that.setData({
      TabCur: e.detail.current
    });
  },
   
  tabSelect(e) {
    var that = this;
    if (this.data.TabCur == e.target.dataset.id)  {      
      return  false;    
    } 
    else  {
      that.setData({        
        TabCur: e.target.dataset.id
      })    
    }
  },

})