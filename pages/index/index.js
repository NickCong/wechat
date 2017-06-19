//index.js
//获取应用实例

Page({
  data: {
    toView: 'red',
    scrollTop: 100,
    motto: '景新造型',
    address:'大连市西岗区香一街42号',
    phonenumber:"159 4110 5449",
    opentime:"9:00AM-9:00PM 周一至周日",
    parking:"免费停车",
    wifi:"覆盖WIFI",
    hotProductTitle:"最受欢迎的服务",
    imgUrls: [
      '../../images/001.jpg',
      '../../images/002.jpg',
      '../../images/003.jpg'     
    ],
    hotProduct: [
       {
        shopImg: '../../images/p1.jpg',
         shopName: 'XXX 399￥'
        },
       {
         shopImg: '../../images/p2.jpg',
         shopName: 'XXX 399￥'
       },
       {
         shopImg: '../../images/p3.jpg',
         shopName: 'XXX 399￥'
       },
       {
         shopImg: '../../images/p4.jpg',
         shopName: 'XXX 399￥'
       },
       {
         shopImg: '../../images/p5.jpg',
         shopName: 'XXX 399￥'
       },
       {
         shopImg: '../../images/p6.jpg',
         shopName: 'XXX 399￥'
       },
       {
         shopImg: '../../images/p7.jpg',
         shopName: 'XXX 488￥'
       },
       {
         shopImg: '../../images/p8.jpg',
         shopName: 'XXX 488￥'
       },
       {
         shopImg: '../../images/p9.jpg',
         shopName: 'XXX 488￥'
       }
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  }
})
