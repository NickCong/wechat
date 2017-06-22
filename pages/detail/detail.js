// pages/detail/detail.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pid:"",
    reserveBtn: '预约',
    hotProduct:[],
    tangFair:"烫发200￥起",
    ranFair: "染发100￥起",
    cutFair:"剪发：店长50起 资深发型师30起",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (option) {
    var that = this
    that.setData({
      pid: option.s_id,
    });
    //调用应用实例的方法获取全局数据
    app.getHotProduct(function (hotProduct) {
      that.setData({
        hotProduct: hotProduct
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

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})