'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_wepy$page) {
  _inherits(Login, _wepy$page);

  function Login() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Login.__proto__ || Object.getPrototypeOf(Login)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '登录',
      usingComponents: {
        "van-cell": "../components/vant/cell/index",
        "van-field": "../components/vant/field/index"
      }
    }, _this.data = {
      phone: '',
      code: '',
      timer: 0,
      sendInterval: null
    }, _this.methods = {
      tapLogin: function tapLogin() {
        wx.switchTab({
          url: '/pages/menu0'
        });
      },

      // 微信授权登录
      wechatLogin: function wechatLogin() {
        wx.login({
          success: function success(res) {
            console.log(res);
          }
        });
      },

      // 发送验证码
      getSendCode: function getSendCode() {
        var _this2 = this;

        var count = 60;
        this.timer = count;
        if (!this.sendInterval) {
          this.sendInterval = setInterval(function () {
            if (_this2.timer > 0) {
              _this2.timer--;
              _this2.$apply();
            } else {
              _this2.sendInterval && clearInterval(_this2.sendInterval);
              _this2.sendInterval = null;
            }
          }, 1000);
        }
      },
      onPhoneChange: function onPhoneChange(e) {
        this.phone = e.detail;
      },
      onCodeChange: function onCodeChange(e) {
        this.code = e.detail;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Login;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIkxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJwaG9uZSIsImNvZGUiLCJ0aW1lciIsInNlbmRJbnRlcnZhbCIsIm1ldGhvZHMiLCJ0YXBMb2dpbiIsInd4Iiwic3dpdGNoVGFiIiwidXJsIiwid2VjaGF0TG9naW4iLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0U2VuZENvZGUiLCJjb3VudCIsInNldEludGVydmFsIiwiJGFwcGx5IiwiY2xlYXJJbnRlcnZhbCIsIm9uUGhvbmVDaGFuZ2UiLCJlIiwiZGV0YWlsIiwib25Db2RlQ2hhbmdlIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsSUFEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksK0JBREc7QUFFZixxQkFBYTtBQUZFO0FBRlYsSyxRQVFUQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxhQUFPLENBSEY7QUFJTEMsb0JBQWM7QUFKVCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1RDLFdBQUdDLFNBQUgsQ0FBYTtBQUNUQyxlQUFLO0FBREksU0FBYjtBQUdELE9BTE87O0FBTVI7QUFDQUMsaUJBUFEseUJBT007QUFDWkgsV0FBR0ksS0FBSCxDQUFTO0FBQ1BDLG1CQUFVLGlCQUFDQyxHQUFELEVBQVM7QUFDakJDLG9CQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQUhNLFNBQVQ7QUFLRCxPQWJPOztBQWNSO0FBQ0FHLGlCQWZRLHlCQWVNO0FBQUE7O0FBQ1osWUFBTUMsUUFBUSxFQUFkO0FBQ0EsYUFBS2QsS0FBTCxHQUFhYyxLQUFiO0FBQ0EsWUFBSSxDQUFDLEtBQUtiLFlBQVYsRUFBd0I7QUFDcEIsZUFBS0EsWUFBTCxHQUFvQmMsWUFBWSxZQUFNO0FBQ2xDLGdCQUFHLE9BQUtmLEtBQUwsR0FBYSxDQUFoQixFQUFtQjtBQUNmLHFCQUFLQSxLQUFMO0FBQ0EscUJBQUtnQixNQUFMO0FBQ0gsYUFIRCxNQUdNO0FBQ0YscUJBQUtmLFlBQUwsSUFBcUJnQixjQUFjLE9BQUtoQixZQUFuQixDQUFyQjtBQUNBLHFCQUFLQSxZQUFMLEdBQW9CLElBQXBCO0FBQ0g7QUFDSixXQVJtQixFQVFqQixJQVJpQixDQUFwQjtBQVNIO0FBQ0YsT0E3Qk87QUE4QlJpQixtQkE5QlEseUJBOEJNQyxDQTlCTixFQThCUztBQUNmLGFBQUtyQixLQUFMLEdBQWFxQixFQUFFQyxNQUFmO0FBQ0QsT0FoQ087QUFpQ1JDLGtCQWpDUSx3QkFpQ0tGLENBakNMLEVBaUNRO0FBQ2QsYUFBS3BCLElBQUwsR0FBWW9CLEVBQUVDLE1BQWQ7QUFDRDtBQW5DTyxLOzs7O0VBaEJ1QkUsZUFBS0MsSTs7a0JBQW5COUIsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55m75b2VJyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgXCJ2YW4tY2VsbFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9jZWxsL2luZGV4XCIsXHJcbiAgICAgICAgXCJ2YW4tZmllbGRcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvZmllbGQvaW5kZXhcIlxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICBjb2RlOiAnJyxcclxuICAgICAgdGltZXI6IDAsXHJcbiAgICAgIHNlbmRJbnRlcnZhbDogbnVsbCxcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICB0YXBMb2dpbigpIHtcclxuICAgICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWVudTAnXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy8g5b6u5L+h5o6I5p2D55m75b2VXHJcbiAgICAgIHdlY2hhdExvZ2luKCkge1xyXG4gICAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICAgIHN1Y2Nlc3M6ICgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOWPkemAgemqjOivgeeggVxyXG4gICAgICBnZXRTZW5kQ29kZSgpIHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IDYwO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBjb3VudDtcclxuICAgICAgICBpZiAoIXRoaXMuc2VuZEludGVydmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy50aW1lciA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH1lbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMuc2VuZEludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgIH0gXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uUGhvbmVDaGFuZ2UoZSkge1xyXG4gICAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbDtcclxuICAgICAgfSxcclxuICAgICAgb25Db2RlQ2hhbmdlKGUpIHtcclxuICAgICAgICB0aGlzLmNvZGUgPSBlLmRldGFpbDtcclxuICAgICAgfSBcclxuICAgIH1cclxuICB9XHJcbiJdfQ==