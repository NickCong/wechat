//user.js
//获取应用实例
var app = getApp()
Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    welcomMessage: "欢迎光临",
    headImageUrl:"../../images/head.jpg",
    blankImage: "../../images/userBlank.jpg",
    msg: '设计师推荐',
    showGender:false,
    userInfo: {},
    reserveBtn:'预约',
    maleStyle:[
      '../../images/m1.jpg',
      '../../images/m2.jpg',
      '../../images/m3.jpg',
      '../../images/m4.jpg',
      '../../images/m5.jpg',
      '../../images/m6.jpg',
      '../../images/m7.jpg',

    ],
    femaleStyle: [
      '../../images/f1.jpg',
      '../../images/f2.jpg',
      '../../images/f3.jpg',
      '../../images/f4.jpg',
      '../../images/f5.jpg',
      '../../images/f6.jpg',
      '../../images/f7.jpg',
    ]  
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo,
        showGender:true
      })
    })
  },
  reserve: function () {
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
      path: '/pages/user/user',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
