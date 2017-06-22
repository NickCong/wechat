//app.js
App({
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  },
  getHotProduct: function (cb) {
    var that = this
    if (this.globalData.hotProduct) {
      typeof cb == "function" && cb(this.globalData.hotProduct)
    } 
  },
  globalData:{
    userInfo:null,
    hotProduct: [
      {
        id: '0',
        shopImg: '../../images/p1.jpg',
        shopName: '点击详情'
      },
      {
        id: '1',
        shopImg: '../../images/p2.jpg',
        shopName: '点击详情'
      },
      {
        id: '2',
        shopImg: '../../images/p3.jpg',
        shopName: '点击详情'
      },
      {
        id: '3',
        shopImg: '../../images/p4.jpg',
        shopName: '点击详情'
      },
      {
        id: '4',
        shopImg: '../../images/p5.jpg',
        shopName: '点击详情'
      },
      {
        id: '5',
        shopImg: '../../images/p6.jpg',
        shopName: '点击详情'
      },
      {
        id: '6',
        shopImg: '../../images/p7.jpg',
        shopName: '点击详情'
      },
      {
        id: '7',
        shopImg: '../../images/p8.jpg',
        shopName: '点击详情'
      },
      {
        id: '8',
        shopImg: '../../images/p9.jpg',
        shopName: '点击详情'
      }
    ]
  }
})