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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUwLmpzIl0sIm5hbWVzIjpbIk1lbnUwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsIm1vaW50b3JMaXN0IiwiaWQiLCJjb21wYW55Iiwic3VyZmFjZSIsIngiLCJ5IiwiaCIsImRlZXAiLCJudW0xIiwibnVtMiIsIm51bTMiLCJudW00IiwicmFpbmZhbGwiLCJodW1pdHVyZSIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibWFya2VycyIsIm1ldGhvZHMiLCJ0b1JlcG9ydCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRvU3VyZmFjZSIsInRvSHVtaXR1cmUiLCJ0b1JhaW5mYWxsIiwidG9EZWVwIiwidG9WaWRlbyIsImUiLCJjb25zb2xlIiwibG9nIiwibWFya2VySWQiLCJjb250cm9sSWQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsWUFEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksK0JBREc7QUFFZix1QkFBZTtBQUZBO0FBRlYsSyxRQVFUQyxJLEdBQU87QUFDTEMsdUJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHRDO0FBRUxJLG1CQUFhLENBQUM7QUFDVkMsWUFBSSxDQURNO0FBRVZDLGlCQUFTLFdBRkM7QUFHVkMsaUJBQVM7QUFDUEMsYUFBRyxDQURJO0FBRVBDLGFBQUcsQ0FGSTtBQUdQQyxhQUFHO0FBSEksU0FIQztBQVFWQyxjQUFNO0FBQ0pDLGdCQUFNLENBREY7QUFFSkMsZ0JBQU0sQ0FGRjtBQUdKQyxnQkFBTSxDQUhGO0FBSUpDLGdCQUFNO0FBSkYsU0FSSTtBQWNWQyxrQkFBVTtBQUNSSixnQkFBTSxDQURFO0FBRVJDLGdCQUFNO0FBRkUsU0FkQTtBQWtCVkksa0JBQVU7QUFDUkwsZ0JBQU0sQ0FERTtBQUVSQyxnQkFBTSxDQUZFO0FBR1JDLGdCQUFNLENBSEU7QUFJUkMsZ0JBQU07QUFKRTtBQWxCQSxPQUFELEVBeUJYO0FBQ0VWLFlBQUksQ0FETjtBQUVFQyxpQkFBUyxXQUZYO0FBR0VDLGlCQUFTO0FBQ1BDLGFBQUcsQ0FESTtBQUVQQyxhQUFHLENBRkk7QUFHUEMsYUFBRztBQUhJLFNBSFg7QUFRRU0sa0JBQVU7QUFDUkosZ0JBQU0sQ0FERTtBQUVSQyxnQkFBTSxDQUZFO0FBR1JDLGdCQUFNLENBSEU7QUFJUkMsZ0JBQU07QUFKRTtBQVJaLE9BekJXLENBRlI7QUEyQ0xHLGdCQUFVLFFBM0NMO0FBNENMQyxpQkFBVyxVQTVDTjtBQTZDTEMsZUFBUyxDQUFDO0FBQ1JmLFlBQUksQ0FESTtBQUVSYSxrQkFBVSxRQUZGO0FBR1JDLG1CQUFXO0FBSEgsT0FBRCxFQUlOO0FBQ0RkLFlBQUksQ0FESDtBQUVEYSxrQkFBVSxTQUZUO0FBR0RDLG1CQUFXO0FBSFYsT0FKTTtBQTdDSixLLFFBd0RQRSxPLEdBQVU7QUFDUkMsY0FEUSxzQkFDRztBQUNUQyxXQUFHQyxVQUFILENBQWM7QUFDVkMsZUFBSztBQURLLFNBQWQ7QUFHRCxPQUxPO0FBTVJDLGVBTlEsdUJBTUk7QUFDVkgsV0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLGVBQUs7QUFESyxTQUFkO0FBR0QsT0FWTztBQVdSRSxnQkFYUSx3QkFXSztBQUNYSixXQUFHQyxVQUFILENBQWM7QUFDVkMsZUFBSztBQURLLFNBQWQ7QUFHRCxPQWZPO0FBZ0JSRyxnQkFoQlEsd0JBZ0JLO0FBQ1hMLFdBQUdDLFVBQUgsQ0FBYztBQUNWQyxlQUFLO0FBREssU0FBZDtBQUdELE9BcEJPO0FBcUJSSSxZQXJCUSxvQkFxQkM7QUFDUE4sV0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLGVBQUs7QUFESyxTQUFkO0FBR0QsT0F6Qk87QUEwQlJLLGFBMUJRLHFCQTBCRTtBQUNSUCxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRDtBQTlCTyxLOzs7Ozs4QkFpQ0FNLEMsRUFBRztBQUNYQyxjQUFRQyxHQUFSLENBQVlGLEVBQUVHLFFBQWQ7QUFDRDs7OytCQUNVSCxDLEVBQUc7QUFDWkMsY0FBUUMsR0FBUixDQUFZRixFQUFFSSxTQUFkO0FBQ0Q7Ozs7RUF2R2dDbEMsZUFBS21DLEk7O2tCQUFuQnpDLEsiLCJmaWxlIjoibWVudTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudTAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpvpnoiq/ljJfmlpflnLDngb7nm5Hmjqfns7vnu58nLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgIFwidmFuLWljb25cIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvaWNvbi9pbmRleFwiLFxuICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxuICAgICAgbW9pbnRvckxpc3Q6IFt7XG4gICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgY29tcGFueTogJ+awuOWumuWMuuaKmuW4gua6quiBlOWNl+advycsXG4gICAgICAgICAgc3VyZmFjZToge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBoOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWVwOiB7XG4gICAgICAgICAgICBudW0xOiAwLFxuICAgICAgICAgICAgbnVtMjogMSxcbiAgICAgICAgICAgIG51bTM6IDIsXG4gICAgICAgICAgICBudW00OiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICByYWluZmFsbDoge1xuICAgICAgICAgICAgbnVtMTogMCxcbiAgICAgICAgICAgIG51bTI6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBodW1pdHVyZToge1xuICAgICAgICAgICAgbnVtMTogMCxcbiAgICAgICAgICAgIG51bTI6IDEsXG4gICAgICAgICAgICBudW0zOiAyLFxuICAgICAgICAgICAgbnVtNDogM1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIGNvbXBhbnk6ICfmsLjlrprljLrmiprluILmuqrogZTljZfmnb8nLFxuICAgICAgICAgIHN1cmZhY2U6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgaDogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmFpbmZhbGw6IHtcbiAgICAgICAgICAgIG51bTE6IDAsXG4gICAgICAgICAgICBudW0yOiAxLFxuICAgICAgICAgICAgbnVtMzogMixcbiAgICAgICAgICAgIG51bTQ6IDNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBsYXRpdHVkZTogMjIuMTU3OTIsXG4gICAgICBsb25naXR1ZGU6IDExMy41NjQzNDQsXG4gICAgICBtYXJrZXJzOiBbe1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbGF0aXR1ZGU6IDIyLjE1NzkyLFxuICAgICAgICBsb25naXR1ZGU6IDExMy41NjQzNDRcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGxhdGl0dWRlOiAyMi4xNjQ4NjYsXG4gICAgICAgIGxvbmdpdHVkZTogMTEzLjU3MDAzOVxuICAgICAgfV0sXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRvUmVwb3J0KCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9yZXBvcnRJbmZvJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRvU3VyZmFjZSgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvc3VyZmFjZSdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0b0h1bWl0dXJlKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9odW1pdHVyZSdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0b1JhaW5mYWxsKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9yYWluZmFsbCdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0b0RlZXAoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2RlZXAnXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdG9WaWRlbygpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3ZpZGVvTW9uaXRvcidcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtYXJrZXJ0YXAoZSkge1xuICAgICAgY29uc29sZS5sb2coZS5tYXJrZXJJZClcbiAgICB9XG4gICAgY29udHJvbHRhcChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLmNvbnRyb2xJZClcbiAgICB9XG4gIH1cblxuIl19