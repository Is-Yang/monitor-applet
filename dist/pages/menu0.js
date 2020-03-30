'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu0 = function (_wepy$page) {
  _inherits(Menu0, _wepy$page);

  function Menu0() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu0);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu0.__proto__ || Object.getPrototypeOf(Menu0)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '龙芯北斗地灾监控系统',
      usingComponents: {
        "van-icon": "../components/vant/icon/index",
        "van-nav-bar": "../components/vant/nav-bar/index"
      }
    }, _this.data = {
      statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
      isBindDept: false,
      mointorList: [{
        id: 0,
        company: '永定区抚市溪联南板',
        surface: {
          x: 0,
          y: 1,
          h: 2
        },
        deep: {
          num1: 0,
          num2: 1,
          num3: 2,
          num4: 3
        },
        rainfall: {
          num1: 0,
          num2: 1
        },
        humiture: {
          num1: 0,
          num2: 1,
          num3: 2,
          num4: 3
        }
      }, {
        id: 1,
        company: '永定区抚市溪联南板',
        surface: {
          x: 0,
          y: 1,
          h: 2
        },
        rainfall: {
          num1: 0,
          num2: 1,
          num3: 2,
          num4: 3
        }
      }],
      latitude: 22.15792,
      longitude: 113.564344,
      markers: [{
        id: 0,
        latitude: 22.15792,
        longitude: 113.564344
      }, {
        id: 1,
        latitude: 22.164866,
        longitude: 113.570039
      }]
    }, _this.methods = {
      toReport: function toReport() {
        wx.navigateTo({
          url: '/pages/reportInfo'
        });
      },
      toSurface: function toSurface() {
        wx.navigateTo({
          url: '/pages/surface'
        });
      },
      toHumiture: function toHumiture() {
        wx.navigateTo({
          url: '/pages/humiture'
        });
      },
      toRainfall: function toRainfall() {
        wx.navigateTo({
          url: '/pages/rainfall'
        });
      },
      toDeep: function toDeep() {
        wx.navigateTo({
          url: '/pages/deep'
        });
      },
      toVideo: function toVideo() {
        wx.navigateTo({
          url: '/pages/videoMonitor'
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu0, [{
    key: 'onLoad',
    value: function onLoad() {
      if (wx.getStorageSync('isBindDept')) {
        this.isBindDept = wx.getStorageSync('isBindDept');
        this.$apply();
      }
    }
  }, {
    key: 'markertap',
    value: function markertap(e) {
      console.log(e.markerId);
    }
  }, {
    key: 'controltap',
    value: function controltap(e) {
      console.log(e.controlId);
    }
  }]);

  return Menu0;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu0 , 'pages/menu0'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUwLmpzIl0sIm5hbWVzIjpbIk1lbnUwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImlzQmluZERlcHQiLCJtb2ludG9yTGlzdCIsImlkIiwiY29tcGFueSIsInN1cmZhY2UiLCJ4IiwieSIsImgiLCJkZWVwIiwibnVtMSIsIm51bTIiLCJudW0zIiwibnVtNCIsInJhaW5mYWxsIiwiaHVtaXR1cmUiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIm1hcmtlcnMiLCJtZXRob2RzIiwidG9SZXBvcnQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b1N1cmZhY2UiLCJ0b0h1bWl0dXJlIiwidG9SYWluZmFsbCIsInRvRGVlcCIsInRvVmlkZW8iLCJnZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsImUiLCJjb25zb2xlIiwibG9nIiwibWFya2VySWQiLCJjb250cm9sSWQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsWUFEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksK0JBREc7QUFFZix1QkFBZTtBQUZBO0FBRlYsSyxRQVFUQyxJLEdBQU87QUFDTEMsdUJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHRDO0FBRUxJLGtCQUFZLEtBRlA7QUFHTEMsbUJBQWEsQ0FBQztBQUNWQyxZQUFJLENBRE07QUFFVkMsaUJBQVMsV0FGQztBQUdWQyxpQkFBUztBQUNQQyxhQUFHLENBREk7QUFFUEMsYUFBRyxDQUZJO0FBR1BDLGFBQUc7QUFISSxTQUhDO0FBUVZDLGNBQU07QUFDSkMsZ0JBQU0sQ0FERjtBQUVKQyxnQkFBTSxDQUZGO0FBR0pDLGdCQUFNLENBSEY7QUFJSkMsZ0JBQU07QUFKRixTQVJJO0FBY1ZDLGtCQUFVO0FBQ1JKLGdCQUFNLENBREU7QUFFUkMsZ0JBQU07QUFGRSxTQWRBO0FBa0JWSSxrQkFBVTtBQUNSTCxnQkFBTSxDQURFO0FBRVJDLGdCQUFNLENBRkU7QUFHUkMsZ0JBQU0sQ0FIRTtBQUlSQyxnQkFBTTtBQUpFO0FBbEJBLE9BQUQsRUF5Qlg7QUFDRVYsWUFBSSxDQUROO0FBRUVDLGlCQUFTLFdBRlg7QUFHRUMsaUJBQVM7QUFDUEMsYUFBRyxDQURJO0FBRVBDLGFBQUcsQ0FGSTtBQUdQQyxhQUFHO0FBSEksU0FIWDtBQVFFTSxrQkFBVTtBQUNSSixnQkFBTSxDQURFO0FBRVJDLGdCQUFNLENBRkU7QUFHUkMsZ0JBQU0sQ0FIRTtBQUlSQyxnQkFBTTtBQUpFO0FBUlosT0F6QlcsQ0FIUjtBQTRDTEcsZ0JBQVUsUUE1Q0w7QUE2Q0xDLGlCQUFXLFVBN0NOO0FBOENMQyxlQUFTLENBQUM7QUFDUmYsWUFBSSxDQURJO0FBRVJhLGtCQUFVLFFBRkY7QUFHUkMsbUJBQVc7QUFISCxPQUFELEVBSU47QUFDRGQsWUFBSSxDQURIO0FBRURhLGtCQUFVLFNBRlQ7QUFHREMsbUJBQVc7QUFIVixPQUpNO0FBOUNKLEssUUFnRVBFLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1RDLFdBQUdDLFVBQUgsQ0FBYztBQUNWQyxlQUFLO0FBREssU0FBZDtBQUdELE9BTE87QUFNUkMsZUFOUSx1QkFNSTtBQUNWSCxXQUFHQyxVQUFILENBQWM7QUFDVkMsZUFBSztBQURLLFNBQWQ7QUFHRCxPQVZPO0FBV1JFLGdCQVhRLHdCQVdLO0FBQ1hKLFdBQUdDLFVBQUgsQ0FBYztBQUNWQyxlQUFLO0FBREssU0FBZDtBQUdELE9BZk87QUFnQlJHLGdCQWhCUSx3QkFnQks7QUFDWEwsV0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLGVBQUs7QUFESyxTQUFkO0FBR0QsT0FwQk87QUFxQlJJLFlBckJRLG9CQXFCQztBQUNQTixXQUFHQyxVQUFILENBQWM7QUFDVkMsZUFBSztBQURLLFNBQWQ7QUFHRCxPQXpCTztBQTBCUkssYUExQlEscUJBMEJFO0FBQ1JQLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdEO0FBOUJPLEs7Ozs7OzZCQVBEO0FBQ1AsVUFBSUYsR0FBR1EsY0FBSCxDQUFrQixZQUFsQixDQUFKLEVBQXFDO0FBQ25DLGFBQUs1QixVQUFMLEdBQWtCb0IsR0FBR1EsY0FBSCxDQUFrQixZQUFsQixDQUFsQjtBQUNBLGFBQUtDLE1BQUw7QUFDRDtBQUNGOzs7OEJBbUNTQyxDLEVBQUc7QUFDWEMsY0FBUUMsR0FBUixDQUFZRixFQUFFRyxRQUFkO0FBQ0Q7OzsrQkFDVUgsQyxFQUFHO0FBQ1pDLGNBQVFDLEdBQVIsQ0FBWUYsRUFBRUksU0FBZDtBQUNEOzs7O0VBL0dnQ3JDLGVBQUtzQyxJOztrQkFBbkI1QyxLIiwiZmlsZSI6Im1lbnUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51MCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpvpnoiq/ljJfmlpflnLDngb7nm5Hmjqfns7vnu58nLFxyXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICBcInZhbi1pY29uXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2ljb24vaW5kZXhcIixcclxuICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcclxuICAgICAgaXNCaW5kRGVwdDogZmFsc2UsXHJcbiAgICAgIG1vaW50b3JMaXN0OiBbe1xyXG4gICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICBjb21wYW55OiAn5rC45a6a5Yy65oqa5biC5rqq6IGU5Y2X5p2/JyxcclxuICAgICAgICAgIHN1cmZhY2U6IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMSxcclxuICAgICAgICAgICAgaDogMlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRlZXA6IHtcclxuICAgICAgICAgICAgbnVtMTogMCxcclxuICAgICAgICAgICAgbnVtMjogMSxcclxuICAgICAgICAgICAgbnVtMzogMixcclxuICAgICAgICAgICAgbnVtNDogM1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJhaW5mYWxsOiB7XHJcbiAgICAgICAgICAgIG51bTE6IDAsXHJcbiAgICAgICAgICAgIG51bTI6IDEsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaHVtaXR1cmU6IHtcclxuICAgICAgICAgICAgbnVtMTogMCxcclxuICAgICAgICAgICAgbnVtMjogMSxcclxuICAgICAgICAgICAgbnVtMzogMixcclxuICAgICAgICAgICAgbnVtNDogM1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBjb21wYW55OiAn5rC45a6a5Yy65oqa5biC5rqq6IGU5Y2X5p2/JyxcclxuICAgICAgICAgIHN1cmZhY2U6IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMSxcclxuICAgICAgICAgICAgaDogMlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJhaW5mYWxsOiB7XHJcbiAgICAgICAgICAgIG51bTE6IDAsXHJcbiAgICAgICAgICAgIG51bTI6IDEsXHJcbiAgICAgICAgICAgIG51bTM6IDIsXHJcbiAgICAgICAgICAgIG51bTQ6IDNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIGxhdGl0dWRlOiAyMi4xNTc5MixcclxuICAgICAgbG9uZ2l0dWRlOiAxMTMuNTY0MzQ0LFxyXG4gICAgICBtYXJrZXJzOiBbe1xyXG4gICAgICAgIGlkOiAwLFxyXG4gICAgICAgIGxhdGl0dWRlOiAyMi4xNTc5MixcclxuICAgICAgICBsb25naXR1ZGU6IDExMy41NjQzNDRcclxuICAgICAgfSwge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIGxhdGl0dWRlOiAyMi4xNjQ4NjYsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiAxMTMuNTcwMDM5XHJcbiAgICAgIH1dLFxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgaWYgKHd4LmdldFN0b3JhZ2VTeW5jKCdpc0JpbmREZXB0JykpIHtcclxuICAgICAgICB0aGlzLmlzQmluZERlcHQgPSB3eC5nZXRTdG9yYWdlU3luYygnaXNCaW5kRGVwdCcpO1xyXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICB0b1JlcG9ydCgpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3JlcG9ydEluZm8nXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdG9TdXJmYWNlKCkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvc3VyZmFjZSdcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB0b0h1bWl0dXJlKCkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvaHVtaXR1cmUnXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdG9SYWluZmFsbCgpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3JhaW5mYWxsJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvRGVlcCgpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2RlZXAnXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdG9WaWRlbygpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy9wYWdlcy92aWRlb01vbml0b3InXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG1hcmtlcnRhcChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUubWFya2VySWQpXHJcbiAgICB9XHJcbiAgICBjb250cm9sdGFwKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZS5jb250cm9sSWQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19