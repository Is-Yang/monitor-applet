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
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }],
      controls: [{
        id: 1,
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50
        },
        clickable: true
      }]
    }, _this.methods = {
      toReport: function toReport() {
        wx.navigateTo({
          url: '/pages/reportInfo'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUwLmpzIl0sIm5hbWVzIjpbIk1lbnUwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsIm1vaW50b3JMaXN0IiwiaWQiLCJjb21wYW55Iiwic3VyZmFjZSIsIngiLCJ5IiwiaCIsImRlZXAiLCJudW0xIiwibnVtMiIsIm51bTMiLCJudW00IiwicmFpbmZhbGwiLCJodW1pdHVyZSIsIm1hcmtlcnMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIndpZHRoIiwiaGVpZ2h0IiwicG9seWxpbmUiLCJwb2ludHMiLCJjb2xvciIsImRvdHRlZExpbmUiLCJjb250cm9scyIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImNsaWNrYWJsZSIsIm1ldGhvZHMiLCJ0b1JlcG9ydCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsImUiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIm1hcmtlcklkIiwiY29udHJvbElkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFlBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLCtCQURHO0FBRWYsdUJBQWU7QUFGQTtBQUZWLEssUUFPVEMsSSxHQUFPO0FBQ0xDLHVCQUFpQkMsZUFBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCSCxlQUR0QztBQUVMSSxtQkFBYSxDQUFDO0FBQ1ZDLFlBQUksQ0FETTtBQUVWQyxpQkFBUyxXQUZDO0FBR1ZDLGlCQUFTO0FBQ1BDLGFBQUcsQ0FESTtBQUVQQyxhQUFHLENBRkk7QUFHUEMsYUFBRztBQUhJLFNBSEM7QUFRVkMsY0FBTTtBQUNKQyxnQkFBTSxDQURGO0FBRUpDLGdCQUFNLENBRkY7QUFHSkMsZ0JBQU0sQ0FIRjtBQUlKQyxnQkFBTTtBQUpGLFNBUkk7QUFjVkMsa0JBQVU7QUFDUkosZ0JBQU0sQ0FERTtBQUVSQyxnQkFBTTtBQUZFLFNBZEE7QUFrQlZJLGtCQUFVO0FBQ1JMLGdCQUFNLENBREU7QUFFUkMsZ0JBQU0sQ0FGRTtBQUdSQyxnQkFBTSxDQUhFO0FBSVJDLGdCQUFNO0FBSkU7QUFsQkEsT0FBRCxFQXlCWDtBQUNFVixZQUFJLENBRE47QUFFRUMsaUJBQVMsV0FGWDtBQUdFQyxpQkFBUztBQUNQQyxhQUFHLENBREk7QUFFUEMsYUFBRyxDQUZJO0FBR1BDLGFBQUc7QUFISSxTQUhYO0FBUUVNLGtCQUFVO0FBQ1JKLGdCQUFNLENBREU7QUFFUkMsZ0JBQU0sQ0FGRTtBQUdSQyxnQkFBTSxDQUhFO0FBSVJDLGdCQUFNO0FBSkU7QUFSWixPQXpCVyxDQUZSO0FBMkNMRyxlQUFTLENBQUM7QUFDUmIsWUFBSSxDQURJO0FBRVJjLGtCQUFVLFNBRkY7QUFHUkMsbUJBQVcsVUFISDtBQUlSQyxlQUFPLEVBSkM7QUFLUkMsZ0JBQVE7QUFMQSxPQUFELENBM0NKO0FBa0RMQyxnQkFBVSxDQUFDO0FBQ1RDLGdCQUFRLENBQUM7QUFDUEoscUJBQVcsV0FESjtBQUVQRCxvQkFBVTtBQUZILFNBQUQsRUFHTDtBQUNEQyxxQkFBVyxVQURWO0FBRURELG9CQUFVO0FBRlQsU0FISyxDQURDO0FBUVRNLGVBQU8sV0FSRTtBQVNUSixlQUFPLENBVEU7QUFVVEssb0JBQVk7QUFWSCxPQUFELENBbERMO0FBOERMQyxnQkFBVSxDQUFDO0FBQ1R0QixZQUFJLENBREs7QUFFVHVCLGtCQUFVO0FBQ1JDLGdCQUFNLENBREU7QUFFUkMsZUFBSyxNQUFNLEVBRkg7QUFHUlQsaUJBQU8sRUFIQztBQUlSQyxrQkFBUTtBQUpBLFNBRkQ7QUFRVFMsbUJBQVc7QUFSRixPQUFEO0FBOURMLEssUUEwRVBDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1RDLFdBQUdDLFVBQUgsQ0FBYztBQUNWQyxlQUFLO0FBREssU0FBZDtBQUdEO0FBTE8sSzs7Ozs7aUNBUUdDLEMsRUFBRztBQUNkQyxjQUFRQyxHQUFSLENBQVlGLEVBQUVHLElBQWQ7QUFDRDs7OzhCQUNTSCxDLEVBQUc7QUFDWEMsY0FBUUMsR0FBUixDQUFZRixFQUFFSSxRQUFkO0FBQ0Q7OzsrQkFDVUosQyxFQUFHO0FBQ1pDLGNBQVFDLEdBQVIsQ0FBWUYsRUFBRUssU0FBZDtBQUNEOzs7O0VBbEdnQ3pDLGVBQUswQyxJOztrQkFBbkJoRCxLIiwiZmlsZSI6Im1lbnUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51MCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfpvpnoiq/ljJfmlpflnLDngb7nm5Hmjqfns7vnu58nLFxyXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICBcInZhbi1pY29uXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2ljb24vaW5kZXhcIixcclxuICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkYXRhID0ge1xyXG4gICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxyXG4gICAgICBtb2ludG9yTGlzdDogW3tcclxuICAgICAgICAgIGlkOiAwLFxyXG4gICAgICAgICAgY29tcGFueTogJ+awuOWumuWMuuaKmuW4gua6quiBlOWNl+advycsXHJcbiAgICAgICAgICBzdXJmYWNlOiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDEsXHJcbiAgICAgICAgICAgIGg6IDJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBkZWVwOiB7XHJcbiAgICAgICAgICAgIG51bTE6IDAsXHJcbiAgICAgICAgICAgIG51bTI6IDEsXHJcbiAgICAgICAgICAgIG51bTM6IDIsXHJcbiAgICAgICAgICAgIG51bTQ6IDNcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByYWluZmFsbDoge1xyXG4gICAgICAgICAgICBudW0xOiAwLFxyXG4gICAgICAgICAgICBudW0yOiAxLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGh1bWl0dXJlOiB7XHJcbiAgICAgICAgICAgIG51bTE6IDAsXHJcbiAgICAgICAgICAgIG51bTI6IDEsXHJcbiAgICAgICAgICAgIG51bTM6IDIsXHJcbiAgICAgICAgICAgIG51bTQ6IDNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgY29tcGFueTogJ+awuOWumuWMuuaKmuW4gua6quiBlOWNl+advycsXHJcbiAgICAgICAgICBzdXJmYWNlOiB7XHJcbiAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgIHk6IDEsXHJcbiAgICAgICAgICAgIGg6IDJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByYWluZmFsbDoge1xyXG4gICAgICAgICAgICBudW0xOiAwLFxyXG4gICAgICAgICAgICBudW0yOiAxLFxyXG4gICAgICAgICAgICBudW0zOiAyLFxyXG4gICAgICAgICAgICBudW00OiAzXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBdLFxyXG4gICAgICBtYXJrZXJzOiBbe1xyXG4gICAgICAgIGlkOiAwLFxyXG4gICAgICAgIGxhdGl0dWRlOiAyMy4wOTk5OTQsXHJcbiAgICAgICAgbG9uZ2l0dWRlOiAxMTMuMzI0NTIwLFxyXG4gICAgICAgIHdpZHRoOiA1MCxcclxuICAgICAgICBoZWlnaHQ6IDUwXHJcbiAgICAgIH1dLFxyXG4gICAgICBwb2x5bGluZTogW3tcclxuICAgICAgICBwb2ludHM6IFt7XHJcbiAgICAgICAgICBsb25naXR1ZGU6IDExMy4zMjQ1MjExLFxyXG4gICAgICAgICAgbGF0aXR1ZGU6IDIzLjEwMjI5XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgbG9uZ2l0dWRlOiAxMTMuMzI0NTIwLFxyXG4gICAgICAgICAgbGF0aXR1ZGU6IDIzLjIxMjI5XHJcbiAgICAgICAgfV0sXHJcbiAgICAgICAgY29sb3I6IFwiI0ZGMDAwMEREXCIsXHJcbiAgICAgICAgd2lkdGg6IDIsXHJcbiAgICAgICAgZG90dGVkTGluZTogdHJ1ZVxyXG4gICAgICB9XSxcclxuICAgICAgY29udHJvbHM6IFt7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgcG9zaXRpb246IHtcclxuICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICB0b3A6IDMwMCAtIDUwLFxyXG4gICAgICAgICAgd2lkdGg6IDUwLFxyXG4gICAgICAgICAgaGVpZ2h0OiA1MFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2xpY2thYmxlOiB0cnVlXHJcbiAgICAgIH1dXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgdG9SZXBvcnQoKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9yZXBvcnRJbmZvJ1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpb25jaGFuZ2UoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLnR5cGUpXHJcbiAgICB9XHJcbiAgICBtYXJrZXJ0YXAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLm1hcmtlcklkKVxyXG4gICAgfVxyXG4gICAgY29udHJvbHRhcChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUuY29udHJvbElkKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiJdfQ==