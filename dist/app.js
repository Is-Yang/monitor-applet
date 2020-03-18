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
      pages: ['pages/login', 'pages/bindPhone', 'pages/menu0', 'pages/menu2', 'pages/menu1', 'pages/reportInfo', 'pages/userUnit', 'pages/userInfo', 'pages/logs', 'pages/setting'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25TdHlsZSIsInRhYkJhciIsIlNUQVRJQ0RBVEEiLCJkZWZhdWx0SW1nIiwiZ2xvYmFsRGF0YSIsInN0YXR1c0JhckhlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ1c2UiLCJ3ZXB5IiwiYXBwIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7QUFDQTs7QUFDQTs7QUFHQTs7Ozs7Ozs7Ozs7O0FBRUEsSUFBTUEsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOzs7OztBQWtERSxzQkFBYztBQUFBOztBQUVaO0FBRlk7O0FBQUEsVUEvQ2RDLE1BK0NjLEdBL0NMO0FBQ1BDLGFBQU8sQ0FDTCxhQURLLEVBRUwsaUJBRkssRUFHTCxhQUhLLEVBSUwsYUFKSyxFQUtMLGFBTEssRUFNTCxrQkFOSyxFQU9MLGdCQVBLLEVBUUwsZ0JBUkssRUFTTCxZQVRLLEVBVUwsZUFWSyxDQURBO0FBYVBDLGNBQVE7QUFDTkMsNkJBQXFCLE9BRGY7QUFFTkMsc0NBQThCLFNBRnhCO0FBR05DLGdDQUF3QixZQUhsQjtBQUlOQyxnQ0FBd0IsT0FKbEI7QUFLTkMseUJBQWlCO0FBTFgsT0FiRDtBQW9CUEMsY0FBUTtBQUNOLGlCQUFTLE1BREg7QUFFTix5QkFBaUIsU0FGWDtBQUdOLHVCQUFlLE9BSFQ7QUFJTiwyQkFBbUIsU0FKYjtBQUtOLGdCQUFRLENBQUM7QUFDTCxzQkFBWSxhQURQO0FBRUwsa0JBQVEsSUFGSDtBQUdMLHNCQUFZLG1DQUhQO0FBSUwsOEJBQW9CO0FBSmYsU0FBRCxFQU1OO0FBQ0Usc0JBQVksYUFEZDtBQUVFLGtCQUFRLElBRlY7QUFHRSxzQkFBWSxpQ0FIZDtBQUlFLDhCQUFvQjtBQUp0QixTQU5NLEVBWU47QUFDRSxzQkFBWSxhQURkO0FBRUUsa0JBQVEsSUFGVjtBQUdFLHNCQUFZLDRCQUhkO0FBSUUsOEJBQW9CO0FBSnRCLFNBWk07QUFMRjtBQXBCRCxLQStDSztBQUFBLFVBU2RDLFVBVGMsR0FTRDtBQUNYQyxrQkFBWSxFQURELENBQ0s7QUFETCxLQVRDO0FBQUEsVUFZZEMsVUFaYyxHQVlEO0FBQ1hDLHVCQUFpQkMsR0FBR0MsaUJBQUgsR0FBdUJGO0FBRDdCLEtBWkM7QUFHWixVQUFLRyxHQUFMLENBQVMsV0FBVDtBQUNBO0FBQ0EsVUFBS0EsR0FBTCxDQUFTLFlBQVQ7QUFMWTtBQU1iOztBQUVEOzs7O0VBeEQyQkMsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xuICBpbXBvcnQge1xuICAgIHNldFN0b3JlXG4gIH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgaW1wb3J0IGNvbmZpZ1N0b3JlIGZyb20gJy4vc3RvcmUnXG4gIFxuICBjb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKClcbiAgc2V0U3RvcmUoc3RvcmUpXG5cbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XG4gICAgY29uZmlnID0ge1xuICAgICAgcGFnZXM6IFtcbiAgICAgICAgJ3BhZ2VzL2xvZ2luJyxcbiAgICAgICAgJ3BhZ2VzL2JpbmRQaG9uZScsXG4gICAgICAgICdwYWdlcy9tZW51MCcsXG4gICAgICAgICdwYWdlcy9tZW51MicsXG4gICAgICAgICdwYWdlcy9tZW51MScsXG4gICAgICAgICdwYWdlcy9yZXBvcnRJbmZvJyxcbiAgICAgICAgJ3BhZ2VzL3VzZXJVbml0JyxcbiAgICAgICAgJ3BhZ2VzL3VzZXJJbmZvJyxcbiAgICAgICAgJ3BhZ2VzL2xvZ3MnLFxuICAgICAgICAncGFnZXMvc2V0dGluZydcbiAgICAgIF0sXG4gICAgICB3aW5kb3c6IHtcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyM0MWMyOTcnLFxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6b6Z6Iqv5YyX5paX5Zyw54G+55uR5o6n57O757ufJyxcbiAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcbiAgICAgICAgbmF2aWdhdGlvblN0eWxlOiBcImN1c3RvbVwiXG4gICAgICB9LFxuICAgICAgdGFiQmFyOiB7XG4gICAgICAgIFwiY29sb3JcIjogXCIjMzMzXCIsXG4gICAgICAgIFwic2VsZWN0ZWRDb2xvclwiOiBcIiM0MWMyOTdcIixcbiAgICAgICAgXCJib3JkZXJTdHlsZVwiOiBcImJsYWNrXCIsXG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxuICAgICAgICBcImxpc3RcIjogW3tcbiAgICAgICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9tZW51MFwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6ICfnm5HmtYsnLFxuICAgICAgICAgICAgXCJpY29uUGF0aFwiOiAnL2Fzc2V0cy9pbWFnZXMvaWNvbi9kZXRlY3Rpb24ucG5nJyxcbiAgICAgICAgICAgIFwic2VsZWN0ZWRJY29uUGF0aFwiOiAnL2Fzc2V0cy9pbWFnZXMvaWNvbi9kZXRlY3Rpb25fY3VyLnBuZydcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9tZW51MVwiLFxuICAgICAgICAgICAgXCJ0ZXh0XCI6ICfpooToraYnLFxuICAgICAgICAgICAgXCJpY29uUGF0aFwiOiAnL2Fzc2V0cy9pbWFnZXMvaWNvbi93YXJuaW5nLnBuZycsXG4gICAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogJy9hc3NldHMvaW1hZ2VzL2ljb24vd2FybmluZ19jdXIucG5nJ1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJwYWdlUGF0aFwiOiBcInBhZ2VzL21lbnUyXCIsXG4gICAgICAgICAgICBcInRleHRcIjogJ+aIkeeahCcsXG4gICAgICAgICAgICBcImljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL215LnBuZycsXG4gICAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogJy9hc3NldHMvaW1hZ2VzL2ljb24vbXlfY3VyLnBuZydcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpXG4gICAgICAvLyDlvIDlkK9wcm9taXNlIGF3YWl0IGFzeW5j562J5Yqf6IO955qE5b+F6ZyA5Luj56CBXG4gICAgICB0aGlzLnVzZSgncHJvbWlzaWZ5Jyk7XG4gICAgICAvLyDop6PlhrPlkIzml7blj5HotbflpJrkuKpyZXF1ZXN05pe25YCZ55qE5byC5bi45L+u5aSNXG4gICAgICB0aGlzLnVzZSgncmVxdWVzdGZpeCcpO1xuICAgIH1cblxuICAgIC8vIOmdmeaAgei1hOa6kCDosIPnlKh3ZXB5LiRpbnN0YW5jZS5TVEFUSUNEQVRBLlxuICAgIFNUQVRJQ0RBVEEgPSB7XG4gICAgICBkZWZhdWx0SW1nOiAnJywgLy8g6buY6K6k5Zu+XG4gICAgfVxuICAgIGdsb2JhbERhdGEgPSB7XG4gICAgICBzdGF0dXNCYXJIZWlnaHQ6IHd4LmdldFN5c3RlbUluZm9TeW5jKCkuc3RhdHVzQmFySGVpZ2h0XG4gICAgfVxuICB9XG5cbiJdfQ==