Page({
  submmitUser (e) {
    console.log(e)
    wx.showToast({
      title:  e.detail.value.username + "输入成功"
    })
  }
})