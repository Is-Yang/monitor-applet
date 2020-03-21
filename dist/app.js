'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var _default = function (_wepy$app) {
  _inherits(_default, _wepy$app);

  function _default() {
    _classCallCheck(this, _default);

    // 开启promise await async等功能的必需代码
    var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));

    _this.config = {
      pages: ['pages/menu0', 'pages/login', 'pages/bindPhone', 'pages/videoMonitor', 'pages/menu2', 'pages/menu1', 'pages/reportInfo', 'pages/userUnit', 'pages/userInfo', 'pages/logs', 'pages/setting', 'pages/surface', 'pages/deep', 'pages/rainfall', 'pages/humiture', 'pages/warningDetails'],
      window: {
        backgroundTextStyle: 'light',
        navigationBarBackgroundColor: '#41c297',
        navigationBarTitleText: '龙芯北斗地灾监控系统',
        navigationBarTextStyle: 'white',
        navigationStyle: "custom"
      },
      tabBar: {
        "color": "#333",
        "selectedColor": "#41c297",
        "borderStyle": "black",
        "backgroundColor": "#ffffff",
        "list": [{
          "pagePath": "pages/menu0",
          "text": '监测',
          "iconPath": '/assets/images/icon/detection.png',
          "selectedIconPath": '/assets/images/icon/detection_cur.png'
        }, {
          "pagePath": "pages/menu1",
          "text": '预警',
          "iconPath": '/assets/images/icon/warning.png',
          "selectedIconPath": '/assets/images/icon/warning_cur.png'
        }, {
          "pagePath": "pages/menu2",
          "text": '我的',
          "iconPath": '/assets/images/icon/my.png',
          "selectedIconPath": '/assets/images/icon/my_cur.png'
        }]
      }
    };
    _this.STATICDATA = {
      defaultImg: '' // 默认图
    };
    _this.globalData = {
      statusBarHeight: wx.getSystemInfoSync().statusBarHeight
    };
    _this.use('promisify');
    // 解决同时发起多个request时候的异常修复
    _this.use('requestfix');
    return _this;
  }

  // 静态资源 调用wepy.$instance.STATICDATA.


  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25TdHlsZSIsInRhYkJhciIsIlNUQVRJQ0RBVEEiLCJkZWZhdWx0SW1nIiwiZ2xvYmFsRGF0YSIsInN0YXR1c0JhckhlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ1c2UiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOzs7OztBQXdERSxzQkFBYztBQUFBOztBQUVaO0FBRlk7O0FBQUEsVUFyRGRDLE1BcURjLEdBckRMO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsYUFGSyxFQUdMLGlCQUhLLEVBSUwsb0JBSkssRUFLTCxhQUxLLEVBTUwsYUFOSyxFQU9MLGtCQVBLLEVBUUwsZ0JBUkssRUFTTCxnQkFUSyxFQVVMLFlBVkssRUFXTCxlQVhLLEVBWUwsZUFaSyxFQWFMLFlBYkssRUFjTCxnQkFkSyxFQWVMLGdCQWZLLEVBZ0JMLHNCQWhCSyxDQURBO0FBbUJQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixTQUZ4QjtBQUdOQyxnQ0FBd0IsWUFIbEI7QUFJTkMsZ0NBQXdCLE9BSmxCO0FBS05DLHlCQUFpQjtBQUxYLE9BbkJEO0FBMEJQQyxjQUFRO0FBQ04saUJBQVMsTUFESDtBQUVOLHlCQUFpQixTQUZYO0FBR04sdUJBQWUsT0FIVDtBQUlOLDJCQUFtQixTQUpiO0FBS04sZ0JBQVEsQ0FBQztBQUNMLHNCQUFZLGFBRFA7QUFFTCxrQkFBUSxJQUZIO0FBR0wsc0JBQVksbUNBSFA7QUFJTCw4QkFBb0I7QUFKZixTQUFELEVBTU47QUFDRSxzQkFBWSxhQURkO0FBRUUsa0JBQVEsSUFGVjtBQUdFLHNCQUFZLGlDQUhkO0FBSUUsOEJBQW9CO0FBSnRCLFNBTk0sRUFZTjtBQUNFLHNCQUFZLGFBRGQ7QUFFRSxrQkFBUSxJQUZWO0FBR0Usc0JBQVksNEJBSGQ7QUFJRSw4QkFBb0I7QUFKdEIsU0FaTTtBQUxGO0FBMUJELEtBcURLO0FBQUEsVUFTZEMsVUFUYyxHQVNEO0FBQ1hDLGtCQUFZLEVBREQsQ0FDSztBQURMLEtBVEM7QUFBQSxVQVlkQyxVQVpjLEdBWUQ7QUFDWEMsdUJBQWlCQyxHQUFHQyxpQkFBSCxHQUF1QkY7QUFEN0IsS0FaQztBQUdaLFVBQUtHLEdBQUwsQ0FBUyxXQUFUO0FBQ0E7QUFDQSxVQUFLQSxHQUFMLENBQVMsWUFBVDtBQUxZO0FBTWI7O0FBRUQ7Ozs7RUE5RDJCQyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXG4gIGltcG9ydCB7XG4gICAgc2V0U3RvcmVcbiAgfSBmcm9tICd3ZXB5LXJlZHV4J1xuICBpbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi9zdG9yZSdcbiAgXG4gIGNvbnN0IHN0b3JlID0gY29uZmlnU3RvcmUoKVxuICBzZXRTdG9yZShzdG9yZSlcblxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBleHRlbmRzIHdlcHkuYXBwIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBwYWdlczogW1xuICAgICAgICAncGFnZXMvbWVudTAnLFxuICAgICAgICAncGFnZXMvbG9naW4nLFxuICAgICAgICAncGFnZXMvYmluZFBob25lJyxcbiAgICAgICAgJ3BhZ2VzL3ZpZGVvTW9uaXRvcicsXG4gICAgICAgICdwYWdlcy9tZW51MicsXG4gICAgICAgICdwYWdlcy9tZW51MScsXG4gICAgICAgICdwYWdlcy9yZXBvcnRJbmZvJyxcbiAgICAgICAgJ3BhZ2VzL3VzZXJVbml0JyxcbiAgICAgICAgJ3BhZ2VzL3VzZXJJbmZvJyxcbiAgICAgICAgJ3BhZ2VzL2xvZ3MnLFxuICAgICAgICAncGFnZXMvc2V0dGluZycsXG4gICAgICAgICdwYWdlcy9zdXJmYWNlJyxcbiAgICAgICAgJ3BhZ2VzL2RlZXAnLFxuICAgICAgICAncGFnZXMvcmFpbmZhbGwnLFxuICAgICAgICAncGFnZXMvaHVtaXR1cmUnLFxuICAgICAgICAncGFnZXMvd2FybmluZ0RldGFpbHMnXG4gICAgICBdLFxuICAgICAgd2luZG93OiB7XG4gICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXG4gICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjNDFjMjk3JyxcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+m+meiKr+WMl+aWl+WcsOeBvuebkeaOp+ezu+e7nycsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXG4gICAgICAgIG5hdmlnYXRpb25TdHlsZTogXCJjdXN0b21cIlxuICAgICAgfSxcbiAgICAgIHRhYkJhcjoge1xuICAgICAgICBcImNvbG9yXCI6IFwiIzMzM1wiLFxuICAgICAgICBcInNlbGVjdGVkQ29sb3JcIjogXCIjNDFjMjk3XCIsXG4gICAgICAgIFwiYm9yZGVyU3R5bGVcIjogXCJibGFja1wiLFxuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcbiAgICAgICAgXCJsaXN0XCI6IFt7XG4gICAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvbWVudTBcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiAn55uR5rWLJyxcbiAgICAgICAgICAgIFwiaWNvblBhdGhcIjogJy9hc3NldHMvaW1hZ2VzL2ljb24vZGV0ZWN0aW9uLnBuZycsXG4gICAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogJy9hc3NldHMvaW1hZ2VzL2ljb24vZGV0ZWN0aW9uX2N1ci5wbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvbWVudTFcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiAn6aKE6K2mJyxcbiAgICAgICAgICAgIFwiaWNvblBhdGhcIjogJy9hc3NldHMvaW1hZ2VzL2ljb24vd2FybmluZy5wbmcnLFxuICAgICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL3dhcm5pbmdfY3VyLnBuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9tZW51MlwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6ICfmiJHnmoQnLFxuICAgICAgICAgICAgXCJpY29uUGF0aFwiOiAnL2Fzc2V0cy9pbWFnZXMvaWNvbi9teS5wbmcnLFxuICAgICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL215X2N1ci5wbmcnXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9LFxuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgc3VwZXIoKVxuICAgICAgLy8g5byA5ZCvcHJvbWlzZSBhd2FpdCBhc3luY+etieWKn+iDveeahOW/hemcgOS7o+eggVxuICAgICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xuICAgICAgLy8g6Kej5Yaz5ZCM5pe25Y+R6LW35aSa5LiqcmVxdWVzdOaXtuWAmeeahOW8guW4uOS/ruWkjVxuICAgICAgdGhpcy51c2UoJ3JlcXVlc3RmaXgnKTtcbiAgICB9XG5cbiAgICAvLyDpnZnmgIHotYTmupAg6LCD55Sod2VweS4kaW5zdGFuY2UuU1RBVElDREFUQS5cbiAgICBTVEFUSUNEQVRBID0ge1xuICAgICAgZGVmYXVsdEltZzogJycsIC8vIOm7mOiupOWbvlxuICAgIH1cbiAgICBnbG9iYWxEYXRhID0ge1xuICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodFxuICAgIH1cbiAgfVxuXG4iXX0=