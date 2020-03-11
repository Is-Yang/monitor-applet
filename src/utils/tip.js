/**
 * 提示与加载工具类
 */
export default class Tips {
  constructor() {
    this.isLoading = false;
  }

  /**
   * 弹出加载提示
   */
  static loading(title = "加载中") {
    if (Tips.isLoading) {
      return;
    }
    Tips.isLoading = true;
    wx.showLoading({
      title: title,
      mask: true //是否显示透明蒙层，防止触摸穿透
    });
  }

  /**
   * 加载完毕
   */
  static loaded() {
    if (Tips.isLoading) {
      Tips.isLoading = false;
      wx.hideLoading();
    }
  }

  /**
   * 消息提示框
   * @param {*} msg 
   * @param {*} icon 
   * @param {*} time 
   */
  static showToast(msg, icon = 'none', time = 1500) {
    wx.showToast({
      title: msg,
      icon,
      duration: time
    })
  }

}
