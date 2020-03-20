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
      pages: ['pages/menu0', 'pages/login', 'pages/bindPhone', 'pages/menu2', 'pages/menu1', 'pages/reportInfo', 'pages/userUnit', 'pages/userInfo', 'pages/logs', 'pages/setting', 'pages/surface', 'pages/deep', 'pages/rainfall', 'pages/humiture', 'pages/warningDetails'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25TdHlsZSIsInRhYkJhciIsIlNUQVRJQ0RBVEEiLCJkZWZhdWx0SW1nIiwiZ2xvYmFsRGF0YSIsInN0YXR1c0JhckhlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ1c2UiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOzs7OztBQXVERSxzQkFBYztBQUFBOztBQUVaO0FBRlk7O0FBQUEsVUFwRGRDLE1Bb0RjLEdBcERMO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsYUFGSyxFQUdMLGlCQUhLLEVBSUwsYUFKSyxFQUtMLGFBTEssRUFNTCxrQkFOSyxFQU9MLGdCQVBLLEVBUUwsZ0JBUkssRUFTTCxZQVRLLEVBVUwsZUFWSyxFQVdMLGVBWEssRUFZTCxZQVpLLEVBYUwsZ0JBYkssRUFjTCxnQkFkSyxFQWVMLHNCQWZLLENBREE7QUFrQlBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixZQUhsQjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMseUJBQWlCO0FBTFgsT0FsQkQ7QUF5QlBDLGNBQVE7QUFDTixpQkFBUyxNQURIO0FBRU4seUJBQWlCLFNBRlg7QUFHTix1QkFBZSxPQUhUO0FBSU4sMkJBQW1CLFNBSmI7QUFLTixnQkFBUSxDQUFDO0FBQ0wsc0JBQVksYUFEUDtBQUVMLGtCQUFRLElBRkg7QUFHTCxzQkFBWSxtQ0FIUDtBQUlMLDhCQUFvQjtBQUpmLFNBQUQsRUFNTjtBQUNFLHNCQUFZLGFBRGQ7QUFFRSxrQkFBUSxJQUZWO0FBR0Usc0JBQVksaUNBSGQ7QUFJRSw4QkFBb0I7QUFKdEIsU0FOTSxFQVlOO0FBQ0Usc0JBQVksYUFEZDtBQUVFLGtCQUFRLElBRlY7QUFHRSxzQkFBWSw0QkFIZDtBQUlFLDhCQUFvQjtBQUp0QixTQVpNO0FBTEY7QUF6QkQsS0FvREs7QUFBQSxVQVNkQyxVQVRjLEdBU0Q7QUFDWEMsa0JBQVksRUFERCxDQUNLO0FBREwsS0FUQztBQUFBLFVBWWRDLFVBWmMsR0FZRDtBQUNYQyx1QkFBaUJDLEdBQUdDLGlCQUFILEdBQXVCRjtBQUQ3QixLQVpDO0FBR1osVUFBS0csR0FBTCxDQUFTLFdBQVQ7QUFDQTtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxZQUFUO0FBTFk7QUFNYjs7QUFFRDs7OztFQTdEMkJDLGVBQUtDLEciLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGltcG9ydCAnd2VweS1hc3luYy1mdW5jdGlvbidcbiAgaW1wb3J0IHtcbiAgICBzZXRTdG9yZVxuICB9IGZyb20gJ3dlcHktcmVkdXgnXG4gIGltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuL3N0b3JlJ1xuICBcbiAgY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpXG4gIHNldFN0b3JlKHN0b3JlKVxuXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIHBhZ2VzOiBbXG4gICAgICAgICdwYWdlcy9tZW51MCcsXG4gICAgICAgICdwYWdlcy9sb2dpbicsXG4gICAgICAgICdwYWdlcy9iaW5kUGhvbmUnLFxuICAgICAgICAncGFnZXMvbWVudTInLFxuICAgICAgICAncGFnZXMvbWVudTEnLFxuICAgICAgICAncGFnZXMvcmVwb3J0SW5mbycsXG4gICAgICAgICdwYWdlcy91c2VyVW5pdCcsXG4gICAgICAgICdwYWdlcy91c2VySW5mbycsXG4gICAgICAgICdwYWdlcy9sb2dzJyxcbiAgICAgICAgJ3BhZ2VzL3NldHRpbmcnLFxuICAgICAgICAncGFnZXMvc3VyZmFjZScsXG4gICAgICAgICdwYWdlcy9kZWVwJyxcbiAgICAgICAgJ3BhZ2VzL3JhaW5mYWxsJyxcbiAgICAgICAgJ3BhZ2VzL2h1bWl0dXJlJyxcbiAgICAgICAgJ3BhZ2VzL3dhcm5pbmdEZXRhaWxzJ1xuICAgICAgXSxcbiAgICAgIHdpbmRvdzoge1xuICAgICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzQxYzI5NycsXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpvpnoiq/ljJfmlpflnLDngb7nm5Hmjqfns7vnu58nLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnd2hpdGUnLFxuICAgICAgICBuYXZpZ2F0aW9uU3R5bGU6IFwiY3VzdG9tXCJcbiAgICAgIH0sXG4gICAgICB0YWJCYXI6IHtcbiAgICAgICAgXCJjb2xvclwiOiBcIiMzMzNcIixcbiAgICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiIzQxYzI5N1wiLFxuICAgICAgICBcImJvcmRlclN0eWxlXCI6IFwiYmxhY2tcIixcbiAgICAgICAgXCJiYWNrZ3JvdW5kQ29sb3JcIjogXCIjZmZmZmZmXCIsXG4gICAgICAgIFwibGlzdFwiOiBbe1xuICAgICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL21lbnUwXCIsXG4gICAgICAgICAgICBcInRleHRcIjogJ+ebkea1iycsXG4gICAgICAgICAgICBcImljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL2RldGVjdGlvbi5wbmcnLFxuICAgICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL2RldGVjdGlvbl9jdXIucG5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL21lbnUxXCIsXG4gICAgICAgICAgICBcInRleHRcIjogJ+mihOitpicsXG4gICAgICAgICAgICBcImljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL3dhcm5pbmcucG5nJyxcbiAgICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiAnL2Fzc2V0cy9pbWFnZXMvaWNvbi93YXJuaW5nX2N1ci5wbmcnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvbWVudTJcIixcbiAgICAgICAgICAgIFwidGV4dFwiOiAn5oiR55qEJyxcbiAgICAgICAgICAgIFwiaWNvblBhdGhcIjogJy9hc3NldHMvaW1hZ2VzL2ljb24vbXkucG5nJyxcbiAgICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiAnL2Fzc2V0cy9pbWFnZXMvaWNvbi9teV9jdXIucG5nJ1xuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfSxcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgIHN1cGVyKClcbiAgICAgIC8vIOW8gOWQr3Byb21pc2UgYXdhaXQgYXN5bmPnrYnlip/og73nmoTlv4XpnIDku6PnoIFcbiAgICAgIHRoaXMudXNlKCdwcm9taXNpZnknKTtcbiAgICAgIC8vIOino+WGs+WQjOaXtuWPkei1t+WkmuS4qnJlcXVlc3Tml7blgJnnmoTlvILluLjkv67lpI1cbiAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XG4gICAgfVxuXG4gICAgLy8g6Z2Z5oCB6LWE5rqQIOiwg+eUqHdlcHkuJGluc3RhbmNlLlNUQVRJQ0RBVEEuXG4gICAgU1RBVElDREFUQSA9IHtcbiAgICAgIGRlZmF1bHRJbWc6ICcnLCAvLyDpu5jorqTlm75cbiAgICB9XG4gICAgZ2xvYmFsRGF0YSA9IHtcbiAgICAgIHN0YXR1c0JhckhlaWdodDogd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHRcbiAgICB9XG4gIH1cblxuIl19