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
      pages: ['pages/login', 'pages/menu2', 'pages/menu0', 'pages/menu1', 'pages/userInfo', 'pages/userUnit'],
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25TdHlsZSIsInRhYkJhciIsIlNUQVRJQ0RBVEEiLCJkZWZhdWx0SW1nIiwidXNlIiwid2VweSIsImFwcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNFOzs7O0FBQ0E7O0FBQ0E7O0FBR0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsc0JBQWQ7QUFDQSx5QkFBU0EsS0FBVDs7Ozs7QUE4Q0Usc0JBQWM7QUFBQTs7QUFFWjtBQUZZOztBQUFBLFVBM0NkQyxNQTJDYyxHQTNDTDtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGFBRkssRUFHTCxhQUhLLEVBSUwsYUFKSyxFQUtMLGdCQUxLLEVBTUwsZ0JBTkssQ0FEQTtBQVNQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixTQUZ4QjtBQUdOQyxnQ0FBd0IsWUFIbEI7QUFJTkMsZ0NBQXdCLE9BSmxCO0FBS05DLHlCQUFpQjtBQUxYLE9BVEQ7QUFnQlBDLGNBQVE7QUFDTixpQkFBUyxNQURIO0FBRU4seUJBQWlCLFNBRlg7QUFHTix1QkFBZSxPQUhUO0FBSU4sMkJBQW1CLFNBSmI7QUFLTixnQkFBUSxDQUFDO0FBQ0wsc0JBQVksYUFEUDtBQUVMLGtCQUFRLElBRkg7QUFHTCxzQkFBWSxtQ0FIUDtBQUlMLDhCQUFvQjtBQUpmLFNBQUQsRUFNTjtBQUNFLHNCQUFZLGFBRGQ7QUFFRSxrQkFBUSxJQUZWO0FBR0Usc0JBQVksaUNBSGQ7QUFJRSw4QkFBb0I7QUFKdEIsU0FOTSxFQVlOO0FBQ0Usc0JBQVksYUFEZDtBQUVFLGtCQUFRLElBRlY7QUFHRSxzQkFBWSw0QkFIZDtBQUlFLDhCQUFvQjtBQUp0QixTQVpNO0FBTEY7QUFoQkQsS0EyQ0s7QUFBQSxVQVNkQyxVQVRjLEdBU0Q7QUFDWEMsa0JBQVksRUFERCxDQUNLO0FBREwsS0FUQztBQUdaLFVBQUtDLEdBQUwsQ0FBUyxXQUFUO0FBQ0E7QUFDQSxVQUFLQSxHQUFMLENBQVMsWUFBVDtBQUxZO0FBTWI7O0FBRUQ7Ozs7RUFwRDJCQyxlQUFLQyxHIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJ1xyXG4gIGltcG9ydCB7XHJcbiAgICBzZXRTdG9yZVxyXG4gIH0gZnJvbSAnd2VweS1yZWR1eCdcclxuICBpbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi9zdG9yZSdcclxuICBcclxuICBjb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKClcclxuICBzZXRTdG9yZShzdG9yZSlcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIHBhZ2VzOiBbXHJcbiAgICAgICAgJ3BhZ2VzL2xvZ2luJyxcclxuICAgICAgICAncGFnZXMvbWVudTInLFxyXG4gICAgICAgICdwYWdlcy9tZW51MCcsXHJcbiAgICAgICAgJ3BhZ2VzL21lbnUxJyxcclxuICAgICAgICAncGFnZXMvdXNlckluZm8nLFxyXG4gICAgICAgICdwYWdlcy91c2VyVW5pdCcsXHJcbiAgICAgIF0sXHJcbiAgICAgIHdpbmRvdzoge1xyXG4gICAgICAgIGJhY2tncm91bmRUZXh0U3R5bGU6ICdsaWdodCcsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyM0MWMyOTcnLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpvpnoiq/ljJfmlpflnLDngb7nm5Hmjqfns7vnu58nLFxyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUZXh0U3R5bGU6ICd3aGl0ZScsXHJcbiAgICAgICAgbmF2aWdhdGlvblN0eWxlOiBcImN1c3RvbVwiXHJcbiAgICAgIH0sXHJcbiAgICAgIHRhYkJhcjoge1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjMzMzXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiIzQxYzI5N1wiLFxyXG4gICAgICAgIFwiYm9yZGVyU3R5bGVcIjogXCJibGFja1wiLFxyXG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIFwibGlzdFwiOiBbe1xyXG4gICAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvbWVudTBcIixcclxuICAgICAgICAgICAgXCJ0ZXh0XCI6ICfmo4DmtYsnLFxyXG4gICAgICAgICAgICBcImljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL2RldGVjdGlvbi5wbmcnLFxyXG4gICAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogJy9hc3NldHMvaW1hZ2VzL2ljb24vZGV0ZWN0aW9uX2N1ci5wbmcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvbWVudTFcIixcclxuICAgICAgICAgICAgXCJ0ZXh0XCI6ICfpooToraYnLFxyXG4gICAgICAgICAgICBcImljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL3dhcm5pbmcucG5nJyxcclxuICAgICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL3dhcm5pbmdfY3VyLnBuZydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9tZW51MlwiLFxyXG4gICAgICAgICAgICBcInRleHRcIjogJ+aIkeeahCcsXHJcbiAgICAgICAgICAgIFwiaWNvblBhdGhcIjogJy9hc3NldHMvaW1hZ2VzL2ljb24vbXkucG5nJyxcclxuICAgICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL215X2N1ci5wbmcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBzdXBlcigpXHJcbiAgICAgIC8vIOW8gOWQr3Byb21pc2UgYXdhaXQgYXN5bmPnrYnlip/og73nmoTlv4XpnIDku6PnoIFcclxuICAgICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xyXG4gICAgICAvLyDop6PlhrPlkIzml7blj5HotbflpJrkuKpyZXF1ZXN05pe25YCZ55qE5byC5bi45L+u5aSNXHJcbiAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Z2Z5oCB6LWE5rqQIOiwg+eUqHdlcHkuJGluc3RhbmNlLlNUQVRJQ0RBVEEuXHJcbiAgICBTVEFUSUNEQVRBID0ge1xyXG4gICAgICBkZWZhdWx0SW1nOiAnJywgLy8g6buY6K6k5Zu+XHJcbiAgICB9XHJcblxyXG4gIH1cclxuIl19