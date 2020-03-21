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
      markers: [{
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }, {
        id: 1,
        latitude: 23.00229,
        longitude: 113.3345211,
        width: 50,
        height: 50
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
    key: 'regionchange',
    value: function regionchange(e) {
      console.log(e.type);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUwLmpzIl0sIm5hbWVzIjpbIk1lbnUwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsIm1vaW50b3JMaXN0IiwiaWQiLCJjb21wYW55Iiwic3VyZmFjZSIsIngiLCJ5IiwiaCIsImRlZXAiLCJudW0xIiwibnVtMiIsIm51bTMiLCJudW00IiwicmFpbmZhbGwiLCJodW1pdHVyZSIsIm1hcmtlcnMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIndpZHRoIiwiaGVpZ2h0IiwibWV0aG9kcyIsInRvUmVwb3J0Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9TdXJmYWNlIiwidG9IdW1pdHVyZSIsInRvUmFpbmZhbGwiLCJ0b0RlZXAiLCJ0b1ZpZGVvIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwibWFya2VySWQiLCJjb250cm9sSWQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsWUFEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksK0JBREc7QUFFZix1QkFBZTtBQUZBO0FBRlYsSyxRQVFUQyxJLEdBQU87QUFDTEMsdUJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHRDO0FBRUxJLG1CQUFhLENBQUM7QUFDVkMsWUFBSSxDQURNO0FBRVZDLGlCQUFTLFdBRkM7QUFHVkMsaUJBQVM7QUFDUEMsYUFBRyxDQURJO0FBRVBDLGFBQUcsQ0FGSTtBQUdQQyxhQUFHO0FBSEksU0FIQztBQVFWQyxjQUFNO0FBQ0pDLGdCQUFNLENBREY7QUFFSkMsZ0JBQU0sQ0FGRjtBQUdKQyxnQkFBTSxDQUhGO0FBSUpDLGdCQUFNO0FBSkYsU0FSSTtBQWNWQyxrQkFBVTtBQUNSSixnQkFBTSxDQURFO0FBRVJDLGdCQUFNO0FBRkUsU0FkQTtBQWtCVkksa0JBQVU7QUFDUkwsZ0JBQU0sQ0FERTtBQUVSQyxnQkFBTSxDQUZFO0FBR1JDLGdCQUFNLENBSEU7QUFJUkMsZ0JBQU07QUFKRTtBQWxCQSxPQUFELEVBeUJYO0FBQ0VWLFlBQUksQ0FETjtBQUVFQyxpQkFBUyxXQUZYO0FBR0VDLGlCQUFTO0FBQ1BDLGFBQUcsQ0FESTtBQUVQQyxhQUFHLENBRkk7QUFHUEMsYUFBRztBQUhJLFNBSFg7QUFRRU0sa0JBQVU7QUFDUkosZ0JBQU0sQ0FERTtBQUVSQyxnQkFBTSxDQUZFO0FBR1JDLGdCQUFNLENBSEU7QUFJUkMsZ0JBQU07QUFKRTtBQVJaLE9BekJXLENBRlI7QUEyQ0xHLGVBQVMsQ0FBQztBQUNSYixZQUFJLENBREk7QUFFUmMsa0JBQVUsU0FGRjtBQUdSQyxtQkFBVyxVQUhIO0FBSVJDLGVBQU8sRUFKQztBQUtSQyxnQkFBUTtBQUxBLE9BQUQsRUFNTjtBQUNEakIsWUFBSSxDQURIO0FBRURjLGtCQUFVLFFBRlQ7QUFHREMsbUJBQVcsV0FIVjtBQUlEQyxlQUFPLEVBSk47QUFLREMsZ0JBQVE7QUFMUCxPQU5NO0FBM0NKLEssUUEwRFBDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1RDLFdBQUdDLFVBQUgsQ0FBYztBQUNWQyxlQUFLO0FBREssU0FBZDtBQUdELE9BTE87QUFNUkMsZUFOUSx1QkFNSTtBQUNWSCxXQUFHQyxVQUFILENBQWM7QUFDVkMsZUFBSztBQURLLFNBQWQ7QUFHRCxPQVZPO0FBV1JFLGdCQVhRLHdCQVdLO0FBQ1hKLFdBQUdDLFVBQUgsQ0FBYztBQUNWQyxlQUFLO0FBREssU0FBZDtBQUdELE9BZk87QUFnQlJHLGdCQWhCUSx3QkFnQks7QUFDWEwsV0FBR0MsVUFBSCxDQUFjO0FBQ1ZDLGVBQUs7QUFESyxTQUFkO0FBR0QsT0FwQk87QUFxQlJJLFlBckJRLG9CQXFCQztBQUNQTixXQUFHQyxVQUFILENBQWM7QUFDVkMsZUFBSztBQURLLFNBQWQ7QUFHRCxPQXpCTztBQTBCUkssYUExQlEscUJBMEJFO0FBQ1JQLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLO0FBRE8sU0FBZDtBQUdEO0FBOUJPLEs7Ozs7O2lDQWlDR00sQyxFQUFHO0FBQ2RDLGNBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsSUFBZDtBQUNEOzs7OEJBQ1NILEMsRUFBRztBQUNYQyxjQUFRQyxHQUFSLENBQVlGLEVBQUVJLFFBQWQ7QUFDRDs7OytCQUNVSixDLEVBQUc7QUFDWkMsY0FBUUMsR0FBUixDQUFZRixFQUFFSyxTQUFkO0FBQ0Q7Ozs7RUE1R2dDckMsZUFBS3NDLEk7O2tCQUFuQjVDLEsiLCJmaWxlIjoibWVudTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudTAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpvpnoiq/ljJfmlpflnLDngb7nm5Hmjqfns7vnu58nLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgIFwidmFuLWljb25cIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvaWNvbi9pbmRleFwiLFxuICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxuICAgICAgbW9pbnRvckxpc3Q6IFt7XG4gICAgICAgICAgaWQ6IDAsXG4gICAgICAgICAgY29tcGFueTogJ+awuOWumuWMuuaKmuW4gua6quiBlOWNl+advycsXG4gICAgICAgICAgc3VyZmFjZToge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBoOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkZWVwOiB7XG4gICAgICAgICAgICBudW0xOiAwLFxuICAgICAgICAgICAgbnVtMjogMSxcbiAgICAgICAgICAgIG51bTM6IDIsXG4gICAgICAgICAgICBudW00OiAzXG4gICAgICAgICAgfSxcbiAgICAgICAgICByYWluZmFsbDoge1xuICAgICAgICAgICAgbnVtMTogMCxcbiAgICAgICAgICAgIG51bTI6IDEsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBodW1pdHVyZToge1xuICAgICAgICAgICAgbnVtMTogMCxcbiAgICAgICAgICAgIG51bTI6IDEsXG4gICAgICAgICAgICBudW0zOiAyLFxuICAgICAgICAgICAgbnVtNDogM1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgIGNvbXBhbnk6ICfmsLjlrprljLrmiprluILmuqrogZTljZfmnb8nLFxuICAgICAgICAgIHN1cmZhY2U6IHtcbiAgICAgICAgICAgIHg6IDAsXG4gICAgICAgICAgICB5OiAxLFxuICAgICAgICAgICAgaDogMlxuICAgICAgICAgIH0sXG4gICAgICAgICAgcmFpbmZhbGw6IHtcbiAgICAgICAgICAgIG51bTE6IDAsXG4gICAgICAgICAgICBudW0yOiAxLFxuICAgICAgICAgICAgbnVtMzogMixcbiAgICAgICAgICAgIG51bTQ6IDNcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBtYXJrZXJzOiBbe1xuICAgICAgICBpZDogMCxcbiAgICAgICAgbGF0aXR1ZGU6IDIzLjA5OTk5NCxcbiAgICAgICAgbG9uZ2l0dWRlOiAxMTMuMzI0NTIwLFxuICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgIGhlaWdodDogNTBcbiAgICAgIH0sIHtcbiAgICAgICAgaWQ6IDEsXG4gICAgICAgIGxhdGl0dWRlOiAyMy4wMDIyOSxcbiAgICAgICAgbG9uZ2l0dWRlOiAxMTMuMzM0NTIxMSxcbiAgICAgICAgd2lkdGg6IDUwLFxuICAgICAgICBoZWlnaHQ6IDUwXG4gICAgICB9XSxcbiAgICB9XG5cbiAgICBtZXRob2RzID0ge1xuICAgICAgdG9SZXBvcnQoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3JlcG9ydEluZm8nXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgdG9TdXJmYWNlKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9zdXJmYWNlJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRvSHVtaXR1cmUoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2h1bWl0dXJlJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRvUmFpbmZhbGwoKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3JhaW5mYWxsJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIHRvRGVlcCgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvZGVlcCdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0b1ZpZGVvKCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvdmlkZW9Nb25pdG9yJ1xuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lvbmNoYW5nZShlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLnR5cGUpXG4gICAgfVxuICAgIG1hcmtlcnRhcChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLm1hcmtlcklkKVxuICAgIH1cbiAgICBjb250cm9sdGFwKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUuY29udHJvbElkKVxuICAgIH1cbiAgfVxuXG4iXX0=