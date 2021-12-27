// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    list: []
  },
  onLoad() {
    wx.cloud.database().collection('sales')
    // .where({region: '华东'})
    .doc('bf4a0bf261c82cf4009c46236befcac3')
    .update({
      data: {
        city: '江西'
      }
    })
    .then(res => {
      console.log('res =>', res)
    })
    .catch(err => {
      console.log('err =>', err)
    })
    // 获取一个集合
    // get查询sales集合
    // where 条件查询
    // doc 查询单条数据
    wx.cloud.database().collection('sales')
      // .where({region: '华东'})
      // .doc('bf4a0bf261c82cf4009c46236befcac3')
      .get()
      .then(res => {
        console.log('res =>', res)
        // this.setData({
        //   list: res.data
        // })
      })
      .catch(err => {
        console.log('err =>', err)
      })


  },
})