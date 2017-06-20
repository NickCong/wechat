//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    motto: '景新造型',
    address:'大连市西岗区香一街42号',
    phonenumber:"159 4110 5449",
    opentime:"9:00AM-9:00PM",
    parking:"免费停车",
    wifi:"覆盖WIFI",
    hotProductTitle:"最近流行",
    imgUrls: [
      '../../images/001.jpg',
      '../../images/002.jpg',
      '../../images/003.jpg',
      '../../images/004.jpg'          
    ],
    hotProduct: [],  
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getHotProduct(function (hotProduct) {
      //更新数据
      that.setData({
        hotProduct: hotProduct
      })
    })
  },
  calling: function () {
    wx.makePhoneCall({
      phoneNumber: '15941105449', //此号码并非真实电话号码，仅用于测试
      success: function () {
        console.log("拨打电话成功！")
      },
      fail: function () {
        console.log("拨打电话失败！")
      }
    })
  },
  onShareAppMessage: function (res) {
    return {
      title: '你瞅啥？',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
