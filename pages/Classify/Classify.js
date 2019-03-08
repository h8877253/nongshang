var app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    curNav: 1,
    curIndex: 0,
    type_detail: 1,
    list: [],
    page: 1,
    leftHeight: '',
    rightHeight: '',
    windowHeight: '',
    hidden: true,
    alldata: [],
    ClassifyList: [
      {
        "FirstType": {
          "id": 1,
          "name": "所有分类",
        },
        "SecondType": [{
            "id": 2,
            "name": "五香果",
            'classifysrc': "/images/other/x1.jpg"
          },
          {
            "id": 3,
            "name": "桃子",
            'classifysrc': "/images/other/x2.jpg"
          },
          {
            "id": 4,
            "name": "苹果",
            'classifysrc': "/images/other/x3.jpg"
          },
          {
            "id": 5,
            "name": "牛油果",
            'classifysrc': "/images/other/x4.jpg"
          },
          {
            "id": 6,
            "name": "猕猴桃",
            'classifysrc': "/images/other/x5.jpg"
          },
          {
            "id": 7,
            "name": "草莓",
            'classifysrc': "/images/other/x6.jpg"
          },
          {
            "id": 8,
            "name": "大白菜",
            'classifysrc': "/images/other/x7.jpg"
          },
          {
            "id": 9,
            "name": "柑橘",
            'classifysrc': "/images/other/x8.jpg"
          },
          {
            "id": 10,
            "name": "葡萄",
            'classifysrc': "/images/other/x9.jpg"
          },
          {
            "id": 11,
            "name": "豌豆",
            'classifysrc': "/images/other/x10.jpg"
          },
          {
            "id": 12,
            "name": "青苹果",
            'classifysrc': "/images/other/x11.jpg"
          },
          {
            "id": 13,
            "name": "胡萝卜",
            'classifysrc': "/images/other/x12.jpg"
          }
        ]
      },
      {
        "FirstType": {
          "id": 13,
          "name": "蔬菜"
        },
        "SecondType": [{
            "id": 7,
            "name": "草莓",
            'classifysrc': "/images/other/x6.jpg"
          },
          {
            "id": 8,
            "name": "大白菜",
            'classifysrc': "/images/other/x7.jpg"
          },
          {
            "id": 9,
            "name": "柑橘",
            'classifysrc': "/images/other/x8.jpg"
          },
          {
            "id": 10,
            "name": "葡萄",
            'classifysrc': "/images/other/x9.jpg"
          },
          {
            "id": 11,
            "name": "豌豆",
            'classifysrc': "/images/other/x10.jpg"
          },
          {
            "id": 12,
            "name": "青苹果",
            'classifysrc': "/images/other/x11.jpg"
          },
          {
            "id": 13,
            "name": "胡萝卜",
            'classifysrc': "/images/other/x12.jpg"
          }
        ]
      },
      {
        "FirstType": {
          "id": 21,
          "name": "粮油",
        },
        "SecondType": []
      },
      {
        "FirstType": {
          "id": 22,
          "name": "土特产",
        },
        "SecondType": []
      },
      {
        "FirstType": {
          "id": 23,
          "name": "生鲜食品",
        },
        "SecondType": []
      },
      {
        "FirstType": {
          "id": 24,
          "name": "休闲食品",
        },
        "SecondType": []
      }
    ]
  },
  onLoad() {
    var _windowHeight = wx.getSystemInfoSync().windowHeight;
    var _leftHeight = this.data.ClassifyList.length * 50;
    this.setData({
      leftHeight: _leftHeight <= _windowHeight - 40 ? _windowHeight - 40 : _leftHeight,
      windowHeight: _windowHeight
    })
    this.switchRightTab();
  },
  //事件处理函数  
  switchRightTab: function(e) {
    let id = e ? e.currentTarget.dataset.id : this.data.ClassifyList[0].FirstType.id,
      index = e ? parseInt(e.currentTarget.dataset.index) : 0,
      _length = this.data.ClassifyList[index].SecondType.length;
    this.setData({
      curNav: id,
      curIndex: index,
      hidden: true
    })

  },
  getTypeDetail(e) {

  },
})