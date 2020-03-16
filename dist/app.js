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
      pages: ['pages/login', 'pages/reportInfo', 'pages/menu1', 'pages/userUnit', 'pages/userInfo', 'pages/menu2', 'pages/menu0'],
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
          "text": '检测',
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25TdHlsZSIsInRhYkJhciIsIlNUQVRJQ0RBVEEiLCJkZWZhdWx0SW1nIiwiZ2xvYmFsRGF0YSIsInN0YXR1c0JhckhlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ1c2UiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOzs7OztBQStDRSxzQkFBYztBQUFBOztBQUVaO0FBRlk7O0FBQUEsVUE1Q2RDLE1BNENjLEdBNUNMO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsa0JBRkssRUFHTCxhQUhLLEVBSUwsZ0JBSkssRUFLTCxnQkFMSyxFQU1MLGFBTkssRUFPTCxhQVBLLENBREE7QUFVUEMsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLFlBSGxCO0FBSU5DLGdDQUF3QixPQUpsQjtBQUtOQyx5QkFBaUI7QUFMWCxPQVZEO0FBaUJQQyxjQUFRO0FBQ04saUJBQVMsTUFESDtBQUVOLHlCQUFpQixTQUZYO0FBR04sdUJBQWUsT0FIVDtBQUlOLDJCQUFtQixTQUpiO0FBS04sZ0JBQVEsQ0FBQztBQUNMLHNCQUFZLGFBRFA7QUFFTCxrQkFBUSxJQUZIO0FBR0wsc0JBQVksbUNBSFA7QUFJTCw4QkFBb0I7QUFKZixTQUFELEVBTU47QUFDRSxzQkFBWSxhQURkO0FBRUUsa0JBQVEsSUFGVjtBQUdFLHNCQUFZLGlDQUhkO0FBSUUsOEJBQW9CO0FBSnRCLFNBTk0sRUFZTjtBQUNFLHNCQUFZLGFBRGQ7QUFFRSxrQkFBUSxJQUZWO0FBR0Usc0JBQVksNEJBSGQ7QUFJRSw4QkFBb0I7QUFKdEIsU0FaTTtBQUxGO0FBakJELEtBNENLO0FBQUEsVUFTZEMsVUFUYyxHQVNEO0FBQ1hDLGtCQUFZLEVBREQsQ0FDSztBQURMLEtBVEM7QUFBQSxVQVlkQyxVQVpjLEdBWUQ7QUFDWEMsdUJBQWlCQyxHQUFHQyxpQkFBSCxHQUF1QkY7QUFEN0IsS0FaQztBQUdaLFVBQUtHLEdBQUwsQ0FBUyxXQUFUO0FBQ0E7QUFDQSxVQUFLQSxHQUFMLENBQVMsWUFBVDtBQUxZO0FBTWI7O0FBRUQ7Ozs7RUFyRDJCQyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG4gIGltcG9ydCB7XHJcbiAgICBzZXRTdG9yZVxyXG4gIH0gZnJvbSAnd2VweS1yZWR1eCdcclxuICBpbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuICBcclxuICBjb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKClcclxuICBzZXRTdG9yZShzdG9yZSlcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIHBhZ2VzOiBbXHJcbiAgICAgICAgJ3BhZ2VzL2xvZ2luJyxcclxuICAgICAgICAncGFnZXMvcmVwb3J0SW5mbycsXHJcbiAgICAgICAgJ3BhZ2VzL21lbnUxJyxcclxuICAgICAgICAncGFnZXMvdXNlclVuaXQnLFxyXG4gICAgICAgICdwYWdlcy91c2VySW5mbycsXHJcbiAgICAgICAgJ3BhZ2VzL21lbnUyJyxcclxuICAgICAgICAncGFnZXMvbWVudTAnLFxyXG4gICAgICBdLFxyXG4gICAgICB3aW5kb3c6IHtcclxuICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3I6ICcjNDFjMjk3JyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6b6Z6Iqv5YyX5paX5Zyw54G+55uR5o6n57O757ufJyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxyXG4gICAgICAgIG5hdmlnYXRpb25TdHlsZTogXCJjdXN0b21cIlxyXG4gICAgICB9LFxyXG4gICAgICB0YWJCYXI6IHtcclxuICAgICAgICBcImNvbG9yXCI6IFwiIzMzM1wiLFxyXG4gICAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiM0MWMyOTdcIixcclxuICAgICAgICBcImJvcmRlclN0eWxlXCI6IFwiYmxhY2tcIixcclxuICAgICAgICBcImJhY2tncm91bmRDb2xvclwiOiBcIiNmZmZmZmZcIixcclxuICAgICAgICBcImxpc3RcIjogW3tcclxuICAgICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL21lbnUwXCIsXHJcbiAgICAgICAgICAgIFwidGV4dFwiOiAn5qOA5rWLJyxcclxuICAgICAgICAgICAgXCJpY29uUGF0aFwiOiAnL2Fzc2V0cy9pbWFnZXMvaWNvbi9kZXRlY3Rpb24ucG5nJyxcclxuICAgICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL2RldGVjdGlvbl9jdXIucG5nJ1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL21lbnUxXCIsXHJcbiAgICAgICAgICAgIFwidGV4dFwiOiAn6aKE6K2mJyxcclxuICAgICAgICAgICAgXCJpY29uUGF0aFwiOiAnL2Fzc2V0cy9pbWFnZXMvaWNvbi93YXJuaW5nLnBuZycsXHJcbiAgICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiAnL2Fzc2V0cy9pbWFnZXMvaWNvbi93YXJuaW5nX2N1ci5wbmcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvbWVudTJcIixcclxuICAgICAgICAgICAgXCJ0ZXh0XCI6ICfmiJHnmoQnLFxyXG4gICAgICAgICAgICBcImljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL215LnBuZycsXHJcbiAgICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiAnL2Fzc2V0cy9pbWFnZXMvaWNvbi9teV9jdXIucG5nJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIF1cclxuICAgICAgfSxcclxuICAgIH1cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgc3VwZXIoKVxyXG4gICAgICAvLyDlvIDlkK9wcm9taXNlIGF3YWl0IGFzeW5j562J5Yqf6IO955qE5b+F6ZyA5Luj56CBXHJcbiAgICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcclxuICAgICAgLy8g6Kej5Yaz5ZCM5pe25Y+R6LW35aSa5LiqcmVxdWVzdOaXtuWAmeeahOW8guW4uOS/ruWkjVxyXG4gICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOmdmeaAgei1hOa6kCDosIPnlKh3ZXB5LiRpbnN0YW5jZS5TVEFUSUNEQVRBLlxyXG4gICAgU1RBVElDREFUQSA9IHtcclxuICAgICAgZGVmYXVsdEltZzogJycsIC8vIOm7mOiupOWbvlxyXG4gICAgfVxyXG4gICAgZ2xvYmFsRGF0YSA9IHtcclxuICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiJdfQ==