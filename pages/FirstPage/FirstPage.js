Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: "this is content",
    text2: "this is content2",
    btntext: "确认",
<<<<<<< HEAD
    show: true
=======
    show:true,
    news:['aaa','bbb','ccc']
>>>>>>> 95ec388b83fb26f30c77fa3dec996a650376d282

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  },
  btnClick: function() {
    console.log("click this button")
<<<<<<< HEAD
    var isShow = this.data.show;
    console.log(isShow);

    this.setData({
      text: "i am clicked"
    })
=======
    this.setData({text:"i am clicked"})

    var datalist=this.data.news;
    datalist.shift();
    this.setData({text:"this is a new content...",show:!this.data.show,news:datalist})
>>>>>>> 95ec388b83fb26f30c77fa3dec996a650376d282
  }
})