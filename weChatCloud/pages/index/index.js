// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    list: []
  },
  onLoad() {
    const db = wx.cloud.database()
    db.collection('indexList')
      .get()
      .then(res => {
        console.log('res.data', res.data);
        this.setData({
          list: res.data
        })
      })
  }
})