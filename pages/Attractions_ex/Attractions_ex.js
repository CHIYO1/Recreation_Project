// pages/Attractions_ex/Attractions_ex.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attractDetail: {}, // 存放店铺详情数据
    comments: [] ,// 存放评论数据
    current: 0,
  },


//监听轮播图的下标
monitorCurrent: function (e) {
  // console.log(e.detail.current)
  let current = e.detail.current;
  this.setData({
    current: current
  })
},

  goback() {
    wx.navigateBack()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    console.log("传递的参数:", options);

    const type = options.type;
    const id = options.id;
    const attract = app.attract_detail;

    // 根据传入的类别和ID获取对应的店铺详情数据
    const selectedStore = attract[type].find(item => item.id == id);
    if (selectedStore) {
      this.setData({
        attractDetail: selectedStore
      });
    } else {
      console.error("Invalid store type or ID");
    }

    this.setData({
      comments: app.attract_Comments
    });
  },


  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})
