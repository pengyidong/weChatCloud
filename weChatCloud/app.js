// app.js
App({
  onLaunch() {
    // 调用获取默认环境的数据库的引用
    wx.cloud.init({
      env: 'cloud1-2gg6cn1pcef0de6b'
    })
  },
  globalData: {

  }
})