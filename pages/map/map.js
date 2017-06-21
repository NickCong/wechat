// pages/map/map.js
Page({
  data: {
  btntitle:'快到碗里来',
  markers: [{
      id: 0,
      latitude: 38.927720,
      longitude: 121.595457,
      width: 50,
      height: 50
    }]   
  },
  onLoad: function () {
    wx.openLocation({
      latitude: 38.927720,
      longitude: 121.595457,
      scale: 16
    })     
  }, 
})