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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUwLmpzIl0sIm5hbWVzIjpbIk1lbnUwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsIm1vaW50b3JMaXN0IiwiaWQiLCJjb21wYW55Iiwic3VyZmFjZSIsIngiLCJ5IiwiaCIsImRlZXAiLCJudW0xIiwibnVtMiIsIm51bTMiLCJudW00IiwicmFpbmZhbGwiLCJodW1pdHVyZSIsIm1hcmtlcnMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIndpZHRoIiwiaGVpZ2h0IiwibWV0aG9kcyIsInRvUmVwb3J0Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJ0eXBlIiwibWFya2VySWQiLCJjb250cm9sSWQiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsWUFEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksK0JBREc7QUFFZix1QkFBZTtBQUZBO0FBRlYsSyxRQU9UQyxJLEdBQU87QUFDTEMsdUJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHRDO0FBRUxJLG1CQUFhLENBQUM7QUFDVkMsWUFBSSxDQURNO0FBRVZDLGlCQUFTLFdBRkM7QUFHVkMsaUJBQVM7QUFDUEMsYUFBRyxDQURJO0FBRVBDLGFBQUcsQ0FGSTtBQUdQQyxhQUFHO0FBSEksU0FIQztBQVFWQyxjQUFNO0FBQ0pDLGdCQUFNLENBREY7QUFFSkMsZ0JBQU0sQ0FGRjtBQUdKQyxnQkFBTSxDQUhGO0FBSUpDLGdCQUFNO0FBSkYsU0FSSTtBQWNWQyxrQkFBVTtBQUNSSixnQkFBTSxDQURFO0FBRVJDLGdCQUFNO0FBRkUsU0FkQTtBQWtCVkksa0JBQVU7QUFDUkwsZ0JBQU0sQ0FERTtBQUVSQyxnQkFBTSxDQUZFO0FBR1JDLGdCQUFNLENBSEU7QUFJUkMsZ0JBQU07QUFKRTtBQWxCQSxPQUFELEVBeUJYO0FBQ0VWLFlBQUksQ0FETjtBQUVFQyxpQkFBUyxXQUZYO0FBR0VDLGlCQUFTO0FBQ1BDLGFBQUcsQ0FESTtBQUVQQyxhQUFHLENBRkk7QUFHUEMsYUFBRztBQUhJLFNBSFg7QUFRRU0sa0JBQVU7QUFDUkosZ0JBQU0sQ0FERTtBQUVSQyxnQkFBTSxDQUZFO0FBR1JDLGdCQUFNLENBSEU7QUFJUkMsZ0JBQU07QUFKRTtBQVJaLE9BekJXLENBRlI7QUEyQ0xHLGVBQVMsQ0FBQztBQUNSYixZQUFJLENBREk7QUFFUmMsa0JBQVUsU0FGRjtBQUdSQyxtQkFBVyxVQUhIO0FBSVJDLGVBQU8sRUFKQztBQUtSQyxnQkFBUTtBQUxBLE9BQUQsRUFNTjtBQUNEakIsWUFBSSxDQURIO0FBRURjLGtCQUFVLFFBRlQ7QUFHREMsbUJBQVcsV0FIVjtBQUlEQyxlQUFPLEVBSk47QUFLREMsZ0JBQVE7QUFMUCxPQU5NO0FBM0NKLEssUUEwRFBDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1RDLFdBQUdDLFVBQUgsQ0FBYztBQUNWQyxlQUFLO0FBREssU0FBZDtBQUdEO0FBTE8sSzs7Ozs7aUNBUUdDLEMsRUFBRztBQUNkQyxjQUFRQyxHQUFSLENBQVlGLEVBQUVHLElBQWQ7QUFDRDs7OzhCQUNTSCxDLEVBQUc7QUFDWEMsY0FBUUMsR0FBUixDQUFZRixFQUFFSSxRQUFkO0FBQ0Q7OzsrQkFDVUosQyxFQUFHO0FBQ1pDLGNBQVFDLEdBQVIsQ0FBWUYsRUFBRUssU0FBZDtBQUNEOzs7O0VBbEZnQ2hDLGVBQUtpQyxJOztrQkFBbkJ2QyxLIiwiZmlsZSI6Im1lbnUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUwIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6b6Z6Iqv5YyX5paX5Zyw54G+55uR5o6n57O757ufJyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICBcInZhbi1pY29uXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2ljb24vaW5kZXhcIixcbiAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCJcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXG4gICAgICBtb2ludG9yTGlzdDogW3tcbiAgICAgICAgICBpZDogMCxcbiAgICAgICAgICBjb21wYW55OiAn5rC45a6a5Yy65oqa5biC5rqq6IGU5Y2X5p2/JyxcbiAgICAgICAgICBzdXJmYWNlOiB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMSxcbiAgICAgICAgICAgIGg6IDJcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZXA6IHtcbiAgICAgICAgICAgIG51bTE6IDAsXG4gICAgICAgICAgICBudW0yOiAxLFxuICAgICAgICAgICAgbnVtMzogMixcbiAgICAgICAgICAgIG51bTQ6IDNcbiAgICAgICAgICB9LFxuICAgICAgICAgIHJhaW5mYWxsOiB7XG4gICAgICAgICAgICBudW0xOiAwLFxuICAgICAgICAgICAgbnVtMjogMSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGh1bWl0dXJlOiB7XG4gICAgICAgICAgICBudW0xOiAwLFxuICAgICAgICAgICAgbnVtMjogMSxcbiAgICAgICAgICAgIG51bTM6IDIsXG4gICAgICAgICAgICBudW00OiAzXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgY29tcGFueTogJ+awuOWumuWMuuaKmuW4gua6quiBlOWNl+advycsXG4gICAgICAgICAgc3VyZmFjZToge1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICBoOiAyXG4gICAgICAgICAgfSxcbiAgICAgICAgICByYWluZmFsbDoge1xuICAgICAgICAgICAgbnVtMTogMCxcbiAgICAgICAgICAgIG51bTI6IDEsXG4gICAgICAgICAgICBudW0zOiAyLFxuICAgICAgICAgICAgbnVtNDogM1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIG1hcmtlcnM6IFt7XG4gICAgICAgIGlkOiAwLFxuICAgICAgICBsYXRpdHVkZTogMjMuMDk5OTk0LFxuICAgICAgICBsb25naXR1ZGU6IDExMy4zMjQ1MjAsXG4gICAgICAgIHdpZHRoOiA1MCxcbiAgICAgICAgaGVpZ2h0OiA1MFxuICAgICAgfSwge1xuICAgICAgICBpZDogMSxcbiAgICAgICAgbGF0aXR1ZGU6IDIzLjAwMjI5LFxuICAgICAgICBsb25naXR1ZGU6IDExMy4zMzQ1MjExLFxuICAgICAgICB3aWR0aDogNTAsXG4gICAgICAgIGhlaWdodDogNTBcbiAgICAgIH1dLFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0b1JlcG9ydCgpIHtcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvcmVwb3J0SW5mbydcbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZWdpb25jaGFuZ2UoZSkge1xuICAgICAgY29uc29sZS5sb2coZS50eXBlKVxuICAgIH1cbiAgICBtYXJrZXJ0YXAoZSkge1xuICAgICAgY29uc29sZS5sb2coZS5tYXJrZXJJZClcbiAgICB9XG4gICAgY29udHJvbHRhcChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlLmNvbnRyb2xJZClcbiAgICB9XG4gIH1cblxuIl19