const app = getApp();
Page({
  data: {
    StatusBar: app.globalData.StatusBar,
    CustomBar: app.globalData.CustomBar,
    ConfirmOrderList: [{
      id: 1,
      imgsrc: '/images/other/x10.jpg',
      title: '豌豆',
      kg: '2.66',
      price: "2.00"
    }, ],
    HasBingAddress: true,
    isDelete: false,
    isEdit: false,
    area: ['北京市', '北京市', '东城区'],
    AddressList: [{
        id: '1',
        name: '黄建杰1',
        phone: "15928474996",
        area: ["四川省", "攀枝花市", "东区"],
        address: "双林北支路360附近1"
      },
      {
        id: '2',
        name: '黄建杰2',
        phone: "15928474996",
        area: ["四川省", "成都市", "高新区"],
        address: "双林北支路360附近2",
        checked: true
      }
    ]
  },
  onLoad: function(options) {
    let DefaultAddress = this.data.AddressList.filter(item => item.checked == true)
    this.setData({
      defaultaddress: DefaultAddress[0].address,
      defaultname: DefaultAddress[0].name,
      defaultphone: DefaultAddress[0].phone,
      defaultarea: DefaultAddress[0].area.join(''),
    })
  },
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
        defaultaddress: DefaultAddress.address,
        defaultname: DefaultAddress.name,
        defaultphone: DefaultAddress.phone,
        defaultarea: DefaultAddress.area.join(''),
        AddressListModal: null,
        isDelete: false,
      })
      wx.showToast({
        title: "地址：" + DefaultAddress.area.join('') + DefaultAddress.address + "已经设置为默认地址",
        icon: "none"
      })
    }

  },
  showModal: function(e) {
    var showName = e.currentTarget.dataset.modal;
    this.setData({
      modalName: showName
    })
  },
  closeModal: function(e) {
    this.setData({
      modalName: null
    })
  },
  closeAddressModal() {
    this.setData({
      addAddressModal: null,
      address: '',
      name: '',
      phone: '',
      area: ["北京市", "北京市", "东城区"]
    })
  },
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
      })
    } else {
      wx.showToast({
        title: '请填写完整',
        icon: "none"
      })
    }

  },
  newAddAddress() {
    this.setData({
      isEdit: false,
      addAddressModal: "addAddressModal"

    })
  },
  closeAddressListModal() {
    this.setData({
      AddressListModal: null,
      isDelete: false
    })
  },

  bindRegionChange: function(e) {
    this.setData({
      area: e.detail.value
    })
  },
  showAddressModal(e) {
    this.data.AddressList == 0 ? this.setData({
      isEdit: false,
      addAddressModal: "addAddressModal"
    }) : this.setData({
      isEdit: true,
      AddressListModal: "AddressListModal"
    })
  },
  showDeleteAddress() {
    let AddressList = this.data.AddressList
    this.setData({
      isDelete: !this.data.isDelete,
      AddressList
    })
  },
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

  watchName(e) {
    this.setData({
      name: e.detail.value
    })
  },
  watchAddress(e) {
    this.setData({
      address: e.detail.value
    })
  },
  watchPhone(e) {
    this.setData({
      phone: e.detail.value
    })
  },
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
})