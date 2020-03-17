"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 提示与加载工具类
 */
var Tips = function () {
  function Tips() {
    _classCallCheck(this, Tips);

    this.isLoading = false;
  }

  /**
   * 弹出加载提示
   */


  _createClass(Tips, null, [{
    key: "loading",
    value: function loading() {
      var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "加载中";

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

  }, {
    key: "loaded",
    value: function loaded() {
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

  }, {
    key: "showToast",
    value: function showToast(msg) {
      var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
      var time = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1500;

      wx.showToast({
        title: msg,
        icon: icon,
        duration: time
      });
    }
  }]);

  return Tips;
}();

exports.default = Tips;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpcC5qcyJdLCJuYW1lcyI6WyJUaXBzIiwiaXNMb2FkaW5nIiwidGl0bGUiLCJ3eCIsInNob3dMb2FkaW5nIiwibWFzayIsImhpZGVMb2FkaW5nIiwibXNnIiwiaWNvbiIsInRpbWUiLCJzaG93VG9hc3QiLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBOzs7SUFHcUJBLEk7QUFDbkIsa0JBQWM7QUFBQTs7QUFDWixTQUFLQyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0Q7O0FBRUQ7Ozs7Ozs7OEJBRzhCO0FBQUEsVUFBZkMsS0FBZSx1RUFBUCxLQUFPOztBQUM1QixVQUFJRixLQUFLQyxTQUFULEVBQW9CO0FBQ2xCO0FBQ0Q7QUFDREQsV0FBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNBRSxTQUFHQyxXQUFILENBQWU7QUFDYkYsZUFBT0EsS0FETTtBQUViRyxjQUFNLElBRk8sQ0FFRjtBQUZFLE9BQWY7QUFJRDs7QUFFRDs7Ozs7OzZCQUdnQjtBQUNkLFVBQUlMLEtBQUtDLFNBQVQsRUFBb0I7QUFDbEJELGFBQUtDLFNBQUwsR0FBaUIsS0FBakI7QUFDQUUsV0FBR0csV0FBSDtBQUNEO0FBQ0Y7O0FBRUQ7Ozs7Ozs7Ozs4QkFNaUJDLEcsRUFBaUM7QUFBQSxVQUE1QkMsSUFBNEIsdUVBQXJCLE1BQXFCO0FBQUEsVUFBYkMsSUFBYSx1RUFBTixJQUFNOztBQUNoRE4sU0FBR08sU0FBSCxDQUFhO0FBQ1hSLGVBQU9LLEdBREk7QUFFWEMsa0JBRlc7QUFHWEcsa0JBQVVGO0FBSEMsT0FBYjtBQUtEOzs7Ozs7a0JBekNrQlQsSSIsImZpbGUiOiJ0aXAuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIOaPkOekuuS4juWKoOi9veW3peWFt+exu1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaXBzIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5pc0xvYWRpbmcgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiDlvLnlh7rliqDovb3mj5DnpLpcbiAgICovXG4gIHN0YXRpYyBsb2FkaW5nKHRpdGxlID0gXCLliqDovb3kuK1cIikge1xuICAgIGlmIChUaXBzLmlzTG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBUaXBzLmlzTG9hZGluZyA9IHRydWU7XG4gICAgd3guc2hvd0xvYWRpbmcoe1xuICAgICAgdGl0bGU6IHRpdGxlLFxuICAgICAgbWFzazogdHJ1ZSAvL+aYr+WQpuaYvuekuumAj+aYjuiSmeWxgu+8jOmYsuatouinpuaRuOepv+mAj1xuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIOWKoOi9veWujOavlVxuICAgKi9cbiAgc3RhdGljIGxvYWRlZCgpIHtcbiAgICBpZiAoVGlwcy5pc0xvYWRpbmcpIHtcbiAgICAgIFRpcHMuaXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICB3eC5oaWRlTG9hZGluZygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDmtojmga/mj5DnpLrmoYZcbiAgICogQHBhcmFtIHsqfSBtc2cgXG4gICAqIEBwYXJhbSB7Kn0gaWNvbiBcbiAgICogQHBhcmFtIHsqfSB0aW1lIFxuICAgKi9cbiAgc3RhdGljIHNob3dUb2FzdChtc2csIGljb24gPSAnbm9uZScsIHRpbWUgPSAxNTAwKSB7XG4gICAgd3guc2hvd1RvYXN0KHtcbiAgICAgIHRpdGxlOiBtc2csXG4gICAgICBpY29uLFxuICAgICAgZHVyYXRpb246IHRpbWVcbiAgICB9KVxuICB9XG5cbn1cbiJdfQ==