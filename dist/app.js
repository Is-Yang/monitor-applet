'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

require('./npm/wepy-async-function/index.js');

var _wepyRedux = require('./npm/wepy-redux/lib/index.js');

var _store = require('./store/index.js');

var _store2 = _interopRequireDefault(_store);

var _api = require('./api/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
      pages: ['pages/index', 'pages/menu2', 'pages/menu1', 'pages/userUnit', 'pages/menu0', 'pages/logs', 'pages/reportInfo', 'pages/login', 'pages/bindPhone', 'pages/videoMonitor', 'pages/monitorType', 'pages/monitorArea', 'pages/monitorDevice', // 监控设备列表
      'pages/userInfo'],
      subPackages: [{
        root: 'pages/package/',
        pages: ['roleList', // 相关角色
        'deptUser', // 相关人员
        'monitorDetails', // 监测详情
        'monitorSite', // 我的单位-监测区域
        'reportLogs' // 预警信息-操作日志
        ]
      }],
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
      env: 'test', // prod 正式， test 测试
      statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
      tmplId: 'k1e6MuaHszZoPGpLd2G0br9Hfv2KgpjpjGsskx_ahhk' // 订阅消息模板id
    };
    _this.data = {
      interval: null,
      canvasImg: '' // 合成单位文字加默认图分享图片
    };
    _this.use('promisify');
    // 解决同时发起多个request时候的异常修复
    _this.use('requestfix');
    return _this;
  }

  // 静态资源 调用wepy.$instance.STATICDATA.


  _createClass(_default, [{
    key: 'getUnreadMsg',
    value: function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _api.getUnread)();

              case 2:
                res = _context.sent;

                if (res.code == 200 && res.data != 0) {
                  wx.setTabBarBadge({
                    index: 1,
                    text: String(res.data)
                  });
                }

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getUnreadMsg() {
        return _ref.apply(this, arguments);
      }

      return getUnreadMsg;
    }()

    // 轮询获取未读消息

  }, {
    key: 'queryUnread',
    value: function queryUnread(time) {
      var _this2 = this;

      this.interval = setInterval(function () {
        _this2.getUnreadMsg();
      }, time);
      this.getUnreadMsg();
    }

    // 清除获取轮询

  }, {
    key: 'clearQuery',
    value: function clearQuery() {
      clearInterval(this.interval);
    }
  }, {
    key: 'shareImage',
    value: function shareImage() {
      var _this3 = this;

      var dept = wx.getStorageSync('globalData').dept;
      if (dept && dept.deptName) {
        var canvas = wx.createCanvasContext('canvas');
        canvas.drawImage('/assets/images/logoShare.png', 0, -50, 500, 375);
        canvas.setTextAlign('center');
        canvas.setFontSize(40);
        canvas.fillText(dept.deptName, 250, 300);

        canvas.draw(false, function () {
          wx.canvasToTempFilePath({ //获取生成的临时图片
            canvasId: 'canvas',
            success: function success(res) {
              _this3.canvasImg = res.tempFilePath;
            }
          });
        });
      }
    }
  }, {
    key: 'sharePage',
    value: function sharePage() {
      // 是否加入单位, 有单位信息
      var dept = wx.getStorageSync('globalData').dept;
      var title = '龙芯北斗地灾监测系统';
      var imageUrl = '/assets/images/logoShare.png';

      if (dept && dept.deptName) {
        title = '[\u9F99\u82AF\u5317\u6597] ' + dept.deptName;
        imageUrl = this.canvasImg;
      }

      var shareInfo = {
        title: title,
        imageUrl: imageUrl
      };
      return shareInfo;
    }
  }]);

  return _default;
}(_wepy2.default.app);


App(require('./npm/wepy/lib/wepy.js').default.$createApp(_default, {"noPromiseAPI":["createSelectorQuery"]}));
require('./_wepylogs.js')



!function () {
  var PageTmp = Page;
  Page = function Page(pageConfig) {
    // 获取当前页面路由
    var routerUrl = '';
    wx.onAppRoute(function (res) {
      var pages = getCurrentPages();
      var view = pages[pages.length - 1];
      routerUrl = view.route;
    });

    // 全局开启分享配置
    pageConfig = Object.assign({
      onShareAppMessage: function onShareAppMessage() {
        return _wepy2.default.$instance.sharePage();
      }
    }, pageConfig);
    PageTmp(pageConfig);
  };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJzdG9yZSIsImNvbmZpZyIsInBhZ2VzIiwic3ViUGFja2FnZXMiLCJyb290Iiwid2luZG93IiwiYmFja2dyb3VuZFRleHRTdHlsZSIsIm5hdmlnYXRpb25CYXJCYWNrZ3JvdW5kQ29sb3IiLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwibmF2aWdhdGlvbkJhclRleHRTdHlsZSIsIm5hdmlnYXRpb25TdHlsZSIsInRhYkJhciIsIlNUQVRJQ0RBVEEiLCJkZWZhdWx0SW1nIiwiZ2xvYmFsRGF0YSIsImVudiIsInN0YXR1c0JhckhlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ0bXBsSWQiLCJkYXRhIiwiaW50ZXJ2YWwiLCJjYW52YXNJbWciLCJ1c2UiLCJyZXMiLCJjb2RlIiwic2V0VGFiQmFyQmFkZ2UiLCJpbmRleCIsInRleHQiLCJTdHJpbmciLCJ0aW1lIiwic2V0SW50ZXJ2YWwiLCJnZXRVbnJlYWRNc2ciLCJjbGVhckludGVydmFsIiwiZGVwdCIsImdldFN0b3JhZ2VTeW5jIiwiZGVwdE5hbWUiLCJjYW52YXMiLCJjcmVhdGVDYW52YXNDb250ZXh0IiwiZHJhd0ltYWdlIiwic2V0VGV4dEFsaWduIiwic2V0Rm9udFNpemUiLCJmaWxsVGV4dCIsImRyYXciLCJjYW52YXNUb1RlbXBGaWxlUGF0aCIsImNhbnZhc0lkIiwic3VjY2VzcyIsInRlbXBGaWxlUGF0aCIsInRpdGxlIiwiaW1hZ2VVcmwiLCJzaGFyZUluZm8iLCJ3ZXB5IiwiYXBwIiwiUGFnZVRtcCIsIlBhZ2UiLCJwYWdlQ29uZmlnIiwicm91dGVyVXJsIiwib25BcHBSb3V0ZSIsImdldEN1cnJlbnRQYWdlcyIsInZpZXciLCJsZW5ndGgiLCJyb3V0ZSIsIk9iamVjdCIsImFzc2lnbiIsIm9uU2hhcmVBcHBNZXNzYWdlIiwiJGluc3RhbmNlIiwic2hhcmVQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7OztBQUNBOztBQUNBOztBQUdBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsc0JBQWQ7QUFDQSx5QkFBU0EsS0FBVDs7Ozs7QUFrRUUsc0JBQWM7QUFBQTs7QUFFWjtBQUZZOztBQUFBLFVBL0RkQyxNQStEYyxHQS9ETDtBQUNQQyxhQUFPLENBQ0wsYUFESyxFQUVMLGFBRkssRUFHTCxhQUhLLEVBSUwsZ0JBSkssRUFLTCxhQUxLLEVBTUwsWUFOSyxFQU9MLGtCQVBLLEVBUUwsYUFSSyxFQVNMLGlCQVRLLEVBVUwsb0JBVkssRUFXTCxtQkFYSyxFQVlMLG1CQVpLLEVBYUwscUJBYkssRUFhbUI7QUFDeEIsc0JBZEssQ0FEQTtBQWlCUEMsbUJBQWEsQ0FDWDtBQUNFQyxjQUFNLGdCQURSO0FBRUVGLGVBQU8sQ0FDTCxVQURLLEVBQ1E7QUFDYixrQkFGSyxFQUVRO0FBQ2Isd0JBSEssRUFHYztBQUNuQixxQkFKSyxFQUlVO0FBQ2Ysb0JBTEssQ0FLUTtBQUxSO0FBRlQsT0FEVyxDQWpCTjtBQTZCUEcsY0FBUTtBQUNOQyw2QkFBcUIsT0FEZjtBQUVOQyxzQ0FBOEIsU0FGeEI7QUFHTkMsZ0NBQXdCLFlBSGxCO0FBSU5DLGdDQUF3QixPQUpsQjtBQUtOQyx5QkFBaUI7QUFMWCxPQTdCRDtBQW9DUEMsY0FBUTtBQUNOLGlCQUFTLE1BREg7QUFFTix5QkFBaUIsU0FGWDtBQUdOLHVCQUFlLE9BSFQ7QUFJTiwyQkFBbUIsU0FKYjtBQUtOLGdCQUFRLENBQUM7QUFDTCxzQkFBWSxhQURQO0FBRUwsa0JBQVEsSUFGSDtBQUdMLHNCQUFZLG1DQUhQO0FBSUwsOEJBQW9CO0FBSmYsU0FBRCxFQU1OO0FBQ0Usc0JBQVksYUFEZDtBQUVFLGtCQUFRLElBRlY7QUFHRSxzQkFBWSxpQ0FIZDtBQUlFLDhCQUFvQjtBQUp0QixTQU5NLEVBWU47QUFDRSxzQkFBWSxhQURkO0FBRUUsa0JBQVEsSUFGVjtBQUdFLHNCQUFZLDRCQUhkO0FBSUUsOEJBQW9CO0FBSnRCLFNBWk07QUFMRjtBQXBDRCxLQStESztBQUFBLFVBU2RDLFVBVGMsR0FTRDtBQUNYQyxrQkFBWSxFQURELENBQ0s7QUFETCxLQVRDO0FBQUEsVUFZZEMsVUFaYyxHQVlEO0FBQ1hDLFdBQUssTUFETSxFQUNHO0FBQ2RDLHVCQUFpQkMsR0FBR0MsaUJBQUgsR0FBdUJGLGVBRjdCO0FBR1hHLGNBQVEsNkNBSEcsQ0FHNEM7QUFINUMsS0FaQztBQUFBLFVBa0JkQyxJQWxCYyxHQWtCUDtBQUNMQyxnQkFBVSxJQURMO0FBRUxDLGlCQUFXLEVBRk4sQ0FFVztBQUZYLEtBbEJPO0FBR1osVUFBS0MsR0FBTCxDQUFTLFdBQVQ7QUFDQTtBQUNBLFVBQUtBLEdBQUwsQ0FBUyxZQUFUO0FBTFk7QUFNYjs7QUFFRDs7Ozs7Ozs7Ozs7Ozt1QkFnQmtCLHFCOzs7QUFBWkMsbUI7O0FBQ0osb0JBQUlBLElBQUlDLElBQUosSUFBWSxHQUFaLElBQW1CRCxJQUFJSixJQUFKLElBQVksQ0FBbkMsRUFBc0M7QUFDbENILHFCQUFHUyxjQUFILENBQWtCO0FBQ2hCQywyQkFBTyxDQURTO0FBRWhCQywwQkFBTUMsT0FBT0wsSUFBSUosSUFBWDtBQUZVLG1CQUFsQjtBQUlIOzs7Ozs7Ozs7Ozs7Ozs7OztBQUdIOzs7O2dDQUNZVSxJLEVBQU07QUFBQTs7QUFDaEIsV0FBS1QsUUFBTCxHQUFnQlUsWUFBWSxZQUFNO0FBQzlCLGVBQUtDLFlBQUw7QUFDSCxPQUZlLEVBRWJGLElBRmEsQ0FBaEI7QUFHQSxXQUFLRSxZQUFMO0FBQ0Q7O0FBRUQ7Ozs7aUNBQ2E7QUFDWEMsb0JBQWMsS0FBS1osUUFBbkI7QUFDRDs7O2lDQUVZO0FBQUE7O0FBQ1QsVUFBTWEsT0FBT2pCLEdBQUdrQixjQUFILENBQWtCLFlBQWxCLEVBQWdDRCxJQUE3QztBQUNBLFVBQUlBLFFBQVFBLEtBQUtFLFFBQWpCLEVBQTJCO0FBQ3pCLFlBQUlDLFNBQVNwQixHQUFHcUIsbUJBQUgsQ0FBdUIsUUFBdkIsQ0FBYjtBQUNBRCxlQUFPRSxTQUFQLENBQWlCLDhCQUFqQixFQUFpRCxDQUFqRCxFQUFvRCxDQUFDLEVBQXJELEVBQXlELEdBQXpELEVBQThELEdBQTlEO0FBQ0FGLGVBQU9HLFlBQVAsQ0FBb0IsUUFBcEI7QUFDQUgsZUFBT0ksV0FBUCxDQUFtQixFQUFuQjtBQUNBSixlQUFPSyxRQUFQLENBQWdCUixLQUFLRSxRQUFyQixFQUErQixHQUEvQixFQUFvQyxHQUFwQzs7QUFFQUMsZUFBT00sSUFBUCxDQUFZLEtBQVosRUFBa0IsWUFBTTtBQUNwQjFCLGFBQUcyQixvQkFBSCxDQUF3QixFQUFFO0FBQ3RCQyxzQkFBVSxRQURVO0FBRXBCQyxxQkFBUyxpQkFBQ3RCLEdBQUQsRUFBUztBQUNoQixxQkFBS0YsU0FBTCxHQUFpQkUsSUFBSXVCLFlBQXJCO0FBQ0Q7QUFKbUIsV0FBeEI7QUFNSCxTQVBEO0FBUUQ7QUFDSjs7O2dDQUVXO0FBQ1Y7QUFDQSxVQUFNYixPQUFPakIsR0FBR2tCLGNBQUgsQ0FBa0IsWUFBbEIsRUFBZ0NELElBQTdDO0FBQ0EsVUFBSWMsUUFBUSxZQUFaO0FBQ0EsVUFBSUMsV0FBVyw4QkFBZjs7QUFFQSxVQUFJZixRQUFRQSxLQUFLRSxRQUFqQixFQUEyQjtBQUN2QlksZ0RBQWtCZCxLQUFLRSxRQUF2QjtBQUNBYSxtQkFBVyxLQUFLM0IsU0FBaEI7QUFDSDs7QUFFRCxVQUFJNEIsWUFBWTtBQUNkRixlQUFPQSxLQURPO0FBRWRDLGtCQUFVQTtBQUZJLE9BQWhCO0FBSUEsYUFBT0MsU0FBUDtBQUNEOzs7O0VBbEowQkMsZUFBS0MsRzs7Ozs7QUFxSnBDLENBQUMsWUFBVztBQUNWLE1BQUlDLFVBQVVDLElBQWQ7QUFDQUEsU0FBTyxjQUFTQyxVQUFULEVBQXFCO0FBQzFCO0FBQ0EsUUFBSUMsWUFBWSxFQUFoQjtBQUNBdkMsT0FBR3dDLFVBQUgsQ0FBYyxVQUFDakMsR0FBRCxFQUFTO0FBQ3JCLFVBQUl0QixRQUFRd0QsaUJBQVo7QUFDQSxVQUFJQyxPQUFPekQsTUFBTUEsTUFBTTBELE1BQU4sR0FBZSxDQUFyQixDQUFYO0FBQ0FKLGtCQUFZRyxLQUFLRSxLQUFqQjtBQUNELEtBSkQ7O0FBTUE7QUFDQU4saUJBQWFPLE9BQU9DLE1BQVAsQ0FBYztBQUN6QkMsdUJBRHlCLCtCQUNMO0FBQ2xCLGVBQU9iLGVBQUtjLFNBQUwsQ0FBZUMsU0FBZixFQUFQO0FBQ0Q7QUFId0IsS0FBZCxFQUlWWCxVQUpVLENBQWI7QUFLQUYsWUFBUUUsVUFBUjtBQUNELEdBaEJEO0FBaUJELENBbkJBLEVBQUQiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBpbXBvcnQgJ3dlcHktYXN5bmMtZnVuY3Rpb24nXHJcbiAgaW1wb3J0IHtcclxuICAgIHNldFN0b3JlXHJcbiAgfSBmcm9tICd3ZXB5LXJlZHV4J1xyXG4gIGltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuL3N0b3JlJ1xyXG4gIGltcG9ydCB7IGdldFVucmVhZCB9IGZyb20gJy4vYXBpL2FwaSdcclxuICBcclxuICBjb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKClcclxuICBzZXRTdG9yZShzdG9yZSlcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgZXh0ZW5kcyB3ZXB5LmFwcCB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIHBhZ2VzOiBbXHJcbiAgICAgICAgJ3BhZ2VzL2luZGV4JyxcclxuICAgICAgICAncGFnZXMvbWVudTInLFxyXG4gICAgICAgICdwYWdlcy9tZW51MScsXHJcbiAgICAgICAgJ3BhZ2VzL3VzZXJVbml0JyxcclxuICAgICAgICAncGFnZXMvbWVudTAnLFxyXG4gICAgICAgICdwYWdlcy9sb2dzJyxcclxuICAgICAgICAncGFnZXMvcmVwb3J0SW5mbycsXHJcbiAgICAgICAgJ3BhZ2VzL2xvZ2luJyxcclxuICAgICAgICAncGFnZXMvYmluZFBob25lJyxcclxuICAgICAgICAncGFnZXMvdmlkZW9Nb25pdG9yJyxcclxuICAgICAgICAncGFnZXMvbW9uaXRvclR5cGUnLFxyXG4gICAgICAgICdwYWdlcy9tb25pdG9yQXJlYScsXHJcbiAgICAgICAgJ3BhZ2VzL21vbml0b3JEZXZpY2UnLCAgLy8g55uR5o6n6K6+5aSH5YiX6KGoXHJcbiAgICAgICAgJ3BhZ2VzL3VzZXJJbmZvJyxcclxuICAgICAgXSxcclxuICAgICAgc3ViUGFja2FnZXM6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICByb290OiAncGFnZXMvcGFja2FnZS8nLFxyXG4gICAgICAgICAgcGFnZXM6IFtcclxuICAgICAgICAgICAgJ3JvbGVMaXN0JywgIC8vIOebuOWFs+inkuiJslxyXG4gICAgICAgICAgICAnZGVwdFVzZXInLCAgLy8g55u45YWz5Lq65ZGYXHJcbiAgICAgICAgICAgICdtb25pdG9yRGV0YWlscycsICAvLyDnm5HmtYvor6bmg4VcclxuICAgICAgICAgICAgJ21vbml0b3JTaXRlJywgLy8g5oiR55qE5Y2V5L2NLeebkea1i+WMuuWfn1xyXG4gICAgICAgICAgICAncmVwb3J0TG9ncycgLy8g6aKE6K2m5L+h5oGvLeaTjeS9nOaXpeW/l1xyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgXSxcclxuICAgICAgd2luZG93OiB7XHJcbiAgICAgICAgYmFja2dyb3VuZFRleHRTdHlsZTogJ2xpZ2h0JyxcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yOiAnIzQxYzI5NycsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+m+meiKr+WMl+aWl+WcsOeBvuebkeaOp+ezu+e7nycsXHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRleHRTdHlsZTogJ3doaXRlJyxcclxuICAgICAgICBuYXZpZ2F0aW9uU3R5bGU6IFwiY3VzdG9tXCIsXHJcbiAgICAgIH0sXHJcbiAgICAgIHRhYkJhcjoge1xyXG4gICAgICAgIFwiY29sb3JcIjogXCIjMzMzXCIsXHJcbiAgICAgICAgXCJzZWxlY3RlZENvbG9yXCI6IFwiIzQxYzI5N1wiLFxyXG4gICAgICAgIFwiYm9yZGVyU3R5bGVcIjogXCJibGFja1wiLFxyXG4gICAgICAgIFwiYmFja2dyb3VuZENvbG9yXCI6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICAgIFwibGlzdFwiOiBbe1xyXG4gICAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvbWVudTBcIixcclxuICAgICAgICAgICAgXCJ0ZXh0XCI6ICfnm5HmtYsnLFxyXG4gICAgICAgICAgICBcImljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL2RldGVjdGlvbi5wbmcnLFxyXG4gICAgICAgICAgICBcInNlbGVjdGVkSWNvblBhdGhcIjogJy9hc3NldHMvaW1hZ2VzL2ljb24vZGV0ZWN0aW9uX2N1ci5wbmcnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBcInBhZ2VQYXRoXCI6IFwicGFnZXMvbWVudTFcIixcclxuICAgICAgICAgICAgXCJ0ZXh0XCI6ICfpooToraYnLFxyXG4gICAgICAgICAgICBcImljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL3dhcm5pbmcucG5nJyxcclxuICAgICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL3dhcm5pbmdfY3VyLnBuZydcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIFwicGFnZVBhdGhcIjogXCJwYWdlcy9tZW51MlwiLFxyXG4gICAgICAgICAgICBcInRleHRcIjogJ+aIkeeahCcsXHJcbiAgICAgICAgICAgIFwiaWNvblBhdGhcIjogJy9hc3NldHMvaW1hZ2VzL2ljb24vbXkucG5nJyxcclxuICAgICAgICAgICAgXCJzZWxlY3RlZEljb25QYXRoXCI6ICcvYXNzZXRzL2ltYWdlcy9pY29uL215X2N1ci5wbmcnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICBzdXBlcigpXHJcbiAgICAgIC8vIOW8gOWQr3Byb21pc2UgYXdhaXQgYXN5bmPnrYnlip/og73nmoTlv4XpnIDku6PnoIFcclxuICAgICAgdGhpcy51c2UoJ3Byb21pc2lmeScpO1xyXG4gICAgICAvLyDop6PlhrPlkIzml7blj5HotbflpJrkuKpyZXF1ZXN05pe25YCZ55qE5byC5bi45L+u5aSNXHJcbiAgICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6Z2Z5oCB6LWE5rqQIOiwg+eUqHdlcHkuJGluc3RhbmNlLlNUQVRJQ0RBVEEuXHJcbiAgICBTVEFUSUNEQVRBID0ge1xyXG4gICAgICBkZWZhdWx0SW1nOiAnJywgLy8g6buY6K6k5Zu+XHJcbiAgICB9XHJcbiAgICBnbG9iYWxEYXRhID0ge1xyXG4gICAgICBlbnY6ICd0ZXN0JywgIC8vIHByb2Qg5q2j5byP77yMIHRlc3Qg5rWL6K+VXHJcbiAgICAgIHN0YXR1c0JhckhlaWdodDogd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQsXHJcbiAgICAgIHRtcGxJZDogJ2sxZTZNdWFIc3pab1BHcExkMkcwYnI5SGZ2MktncGpwakdzc2t4X2FoaGsnICAvLyDorqLpmIXmtojmga/mqKHmnb9pZFxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIGludGVydmFsOiBudWxsLFxyXG4gICAgICBjYW52YXNJbWc6ICcnLCAgLy8g5ZCI5oiQ5Y2V5L2N5paH5a2X5Yqg6buY6K6k5Zu+5YiG5Lqr5Zu+54mHXHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0VW5yZWFkTXNnKCkge1xyXG4gICAgICBsZXQgcmVzID0gYXdhaXQgZ2V0VW5yZWFkKCk7XHJcbiAgICAgIGlmIChyZXMuY29kZSA9PSAyMDAgJiYgcmVzLmRhdGEgIT0gMCkge1xyXG4gICAgICAgICAgd3guc2V0VGFiQmFyQmFkZ2UoeyBcclxuICAgICAgICAgICAgaW5kZXg6IDEsXHRcdFx0XHRcdFx0XHJcbiAgICAgICAgICAgIHRleHQ6IFN0cmluZyhyZXMuZGF0YSksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6L2u6K+i6I635Y+W5pyq6K+75raI5oGvXHJcbiAgICBxdWVyeVVucmVhZCh0aW1lKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmdldFVucmVhZE1zZygpXHJcbiAgICAgIH0sIHRpbWUpO1xyXG4gICAgICB0aGlzLmdldFVucmVhZE1zZygpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIOa4hemZpOiOt+WPlui9ruivolxyXG4gICAgY2xlYXJRdWVyeSgpIHtcclxuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBzaGFyZUltYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IGRlcHQgPSB3eC5nZXRTdG9yYWdlU3luYygnZ2xvYmFsRGF0YScpLmRlcHQ7XHJcbiAgICAgICAgaWYgKGRlcHQgJiYgZGVwdC5kZXB0TmFtZSkge1xyXG4gICAgICAgICAgdmFyIGNhbnZhcyA9IHd4LmNyZWF0ZUNhbnZhc0NvbnRleHQoJ2NhbnZhcycpOyBcclxuICAgICAgICAgIGNhbnZhcy5kcmF3SW1hZ2UoJy9hc3NldHMvaW1hZ2VzL2xvZ29TaGFyZS5wbmcnLCAwLCAtNTAsIDUwMCwgMzc1KVxyXG4gICAgICAgICAgY2FudmFzLnNldFRleHRBbGlnbignY2VudGVyJykgIFxyXG4gICAgICAgICAgY2FudmFzLnNldEZvbnRTaXplKDQwKSAgXHJcbiAgICAgICAgICBjYW52YXMuZmlsbFRleHQoZGVwdC5kZXB0TmFtZSwgMjUwLCAzMDApO1xyXG5cclxuICAgICAgICAgIGNhbnZhcy5kcmF3KGZhbHNlLCgpID0+IHtcclxuICAgICAgICAgICAgICB3eC5jYW52YXNUb1RlbXBGaWxlUGF0aCh7IC8v6I635Y+W55Sf5oiQ55qE5Li05pe25Zu+54mHXHJcbiAgICAgICAgICAgICAgICAgIGNhbnZhc0lkOiAnY2FudmFzJyxcclxuICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FudmFzSW1nID0gcmVzLnRlbXBGaWxlUGF0aDtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaGFyZVBhZ2UoKSB7XHJcbiAgICAgIC8vIOaYr+WQpuWKoOWFpeWNleS9jSwg5pyJ5Y2V5L2N5L+h5oGvXHJcbiAgICAgIGNvbnN0IGRlcHQgPSB3eC5nZXRTdG9yYWdlU3luYygnZ2xvYmFsRGF0YScpLmRlcHQ7XHJcbiAgICAgIGxldCB0aXRsZSA9ICfpvpnoiq/ljJfmlpflnLDngb7nm5HmtYvns7vnu58nO1xyXG4gICAgICBsZXQgaW1hZ2VVcmwgPSAnL2Fzc2V0cy9pbWFnZXMvbG9nb1NoYXJlLnBuZyc7XHJcbiAgICAgIFxyXG4gICAgICBpZiAoZGVwdCAmJiBkZXB0LmRlcHROYW1lKSB7XHJcbiAgICAgICAgICB0aXRsZSA9IGBb6b6Z6Iqv5YyX5paXXSAke2RlcHQuZGVwdE5hbWV9YDtcclxuICAgICAgICAgIGltYWdlVXJsID0gdGhpcy5jYW52YXNJbWc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBzaGFyZUluZm8gPSB7XHJcbiAgICAgICAgdGl0bGU6IHRpdGxlLFxyXG4gICAgICAgIGltYWdlVXJsOiBpbWFnZVVybFxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gc2hhcmVJbmZvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiFmdW5jdGlvbigpIHtcclxuICB2YXIgUGFnZVRtcCA9IFBhZ2U7XHJcbiAgUGFnZSA9IGZ1bmN0aW9uKHBhZ2VDb25maWcpIHtcclxuICAgIC8vIOiOt+WPluW9k+WJjemhtemdoui3r+eUsVxyXG4gICAgbGV0IHJvdXRlclVybCA9ICcnXHJcbiAgICB3eC5vbkFwcFJvdXRlKChyZXMpID0+IHtcclxuICAgICAgbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgIGxldCB2aWV3ID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgICAgIHJvdXRlclVybCA9IHZpZXcucm91dGU7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIOWFqOWxgOW8gOWQr+WIhuS6q+mFjee9rlxyXG4gICAgcGFnZUNvbmZpZyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuICAgICAgICByZXR1cm4gd2VweS4kaW5zdGFuY2Uuc2hhcmVQYWdlKCk7XHJcbiAgICAgIH1cclxuICAgIH0sIHBhZ2VDb25maWcpXHJcbiAgICBQYWdlVG1wKHBhZ2VDb25maWcpO1xyXG4gIH1cclxufSgpO1xyXG4iXX0=