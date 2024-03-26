// pages/Attractions_list/Attractions_list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    attractList:[],
    type: '',
    name: {'tianhe': '天河区', 'huangpu': '黄浦区', 'yuexiu': '越秀区', 'panyu': '番禺区', 
          'haizhu': '海珠区', 'baiyun': '白云区', 'nansha': '南沙区',
          'huadu': '花都区', 'zencheng': '增城区', 'liwan': '荔湾区', 'conghua': '从化区'}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const type = options.type; 
    const attract = getApp().attract_detail; 
    const selectedList = attract[type];

    if (selectedList) {
      this.setData({
        type: type,
        attractList: selectedList,
      });
    } else {
      console.error("Invalid store type:", type);
    }
  },

  goToDetail: function(event) {
    const type = this.data.type;
    const id = event.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/Attractions_ex/Attractions_ex?type=' + type + '&id=' + id,
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
