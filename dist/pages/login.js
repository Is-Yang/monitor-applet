'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _api = require('./../api/api.js');

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

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
        if (this.phone == '') {
          _tip2.default.showToast('请输入手机号获取验证码');
          return;
        }
        if (typeof this.phone !== 'number' && isNaN(this.phone)) {
          _tip2.default.showToast('您输入的手机号格式有误');
          return;
        }
        if (this.phone) {
          if (!/^1[3456789]\d{9}$/.test(this.phone)) {
            _tip2.default.showToast("手机号码有误，请重填");
            return;
          }
        }

        var that = this;
        wx.showModal({
          title: '确认手机号码',
          content: '\u6211\u4EEC\u5C06\u53D1\u9001\u9A8C\u8BC1\u7801\u77ED\u4FE1\u5230\u8FD9\u4E2A\u53F7\u7801\uFF1A +86 ' + this.phone,
          success: function success(res) {
            if (res.confirm) {
              that.getCode();
              wx.showToast({
                title: '发送成功',
                icon: 'success',
                duration: 2000
              });
              that.timeChange();
            }
          }
        });
      },
      onPhoneInput: function onPhoneInput(e) {
        this.phone = e.detail;
      },
      onCodeInput: function onCodeInput(e) {
        this.code = e.detail;
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Login, [{
    key: 'getCode',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return api.getCode({
                  phone: this.phone
                });

              case 2:
                res = _context.sent;

                console.log(res);

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getCode() {
        return _ref2.apply(this, arguments);
      }

      return getCode;
    }()
  }, {
    key: 'timeChange',
    value: function timeChange() {
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
    }
  }]);

  return Login;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImFwaSIsIkxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJwaG9uZSIsImNvZGUiLCJ0aW1lciIsInNlbmRJbnRlcnZhbCIsIm1ldGhvZHMiLCJ0YXBMb2dpbiIsInd4Iiwic3dpdGNoVGFiIiwidXJsIiwid2VjaGF0TG9naW4iLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiZ2V0U2VuZENvZGUiLCJ0aXAiLCJzaG93VG9hc3QiLCJpc05hTiIsInRlc3QiLCJ0aGF0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiY29uZmlybSIsImdldENvZGUiLCJpY29uIiwiZHVyYXRpb24iLCJ0aW1lQ2hhbmdlIiwib25QaG9uZUlucHV0IiwiZSIsImRldGFpbCIsIm9uQ29kZUlucHV0IiwiY291bnQiLCJzZXRJbnRlcnZhbCIsIiRhcHBseSIsImNsZWFySW50ZXJ2YWwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7Ozs7Ozs7OztJQUNTQyxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsSUFEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksK0JBREc7QUFFZixxQkFBYTtBQUZFO0FBRlYsSyxRQVFUQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxhQUFPLENBSEY7QUFJTEMsb0JBQWM7QUFKVCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1RDLFdBQUdDLFNBQUgsQ0FBYTtBQUNUQyxlQUFLO0FBREksU0FBYjtBQUdELE9BTE87O0FBTVI7QUFDQUMsaUJBUFEseUJBT007QUFDWkgsV0FBR0ksS0FBSCxDQUFTO0FBQ1BDLG1CQUFVLGlCQUFDQyxHQUFELEVBQVM7QUFDakJDLG9CQUFRQyxHQUFSLENBQVlGLEdBQVo7QUFDRDtBQUhNLFNBQVQ7QUFLRCxPQWJPOztBQWNSO0FBQ0FHLGlCQWZRLHlCQWVNO0FBQ1osWUFBSSxLQUFLZixLQUFMLElBQWMsRUFBbEIsRUFBc0I7QUFDbEJnQix3QkFBSUMsU0FBSixDQUFjLGFBQWQ7QUFDQTtBQUNIO0FBQ0QsWUFBSSxPQUFPLEtBQUtqQixLQUFaLEtBQXNCLFFBQXRCLElBQWtDa0IsTUFBTSxLQUFLbEIsS0FBWCxDQUF0QyxFQUF5RDtBQUNyRGdCLHdCQUFJQyxTQUFKLENBQWMsYUFBZDtBQUNBO0FBQ0g7QUFDRCxZQUFJLEtBQUtqQixLQUFULEVBQWdCO0FBQ2QsY0FBSSxDQUFFLG9CQUFvQm1CLElBQXBCLENBQXlCLEtBQUtuQixLQUE5QixDQUFOLEVBQTZDO0FBQzNDZ0IsMEJBQUlDLFNBQUosQ0FBYyxZQUFkO0FBQ0E7QUFDRDtBQUNGOztBQUVELFlBQU1HLE9BQU8sSUFBYjtBQUNBZCxXQUFHZSxTQUFILENBQWE7QUFDWEMsaUJBQU8sUUFESTtBQUVYQyw2SEFBaUMsS0FBS3ZCLEtBRjNCO0FBR1hXLGlCQUhXLG1CQUdIQyxHQUhHLEVBR0U7QUFDWCxnQkFBSUEsSUFBSVksT0FBUixFQUFpQjtBQUNmSixtQkFBS0ssT0FBTDtBQUNBbkIsaUJBQUdXLFNBQUgsQ0FBYTtBQUNYSyx1QkFBTyxNQURJO0FBRVhJLHNCQUFNLFNBRks7QUFHWEMsMEJBQVU7QUFIQyxlQUFiO0FBS0FQLG1CQUFLUSxVQUFMO0FBQ0Q7QUFDRjtBQWJVLFNBQWI7QUFnQkQsT0FoRE87QUFpRFJDLGtCQWpEUSx3QkFpREtDLENBakRMLEVBaURRO0FBQ2QsYUFBSzlCLEtBQUwsR0FBYThCLEVBQUVDLE1BQWY7QUFDRCxPQW5ETztBQW9EUkMsaUJBcERRLHVCQW9ESUYsQ0FwREosRUFvRE87QUFDYixhQUFLN0IsSUFBTCxHQUFZNkIsRUFBRUMsTUFBZDtBQUNEO0FBdERPLEs7Ozs7Ozs7Ozs7Ozs7dUJBMERRckMsSUFBSStCLE9BQUosQ0FDZDtBQUNFekIseUJBQU8sS0FBS0E7QUFEZCxpQkFEYyxDOzs7QUFBWlksbUI7O0FBS0pDLHdCQUFRQyxHQUFSLENBQVlGLEdBQVo7Ozs7Ozs7Ozs7Ozs7Ozs7OztpQ0FHVztBQUFBOztBQUNYLFVBQU1xQixRQUFRLEVBQWQ7QUFDRSxXQUFLL0IsS0FBTCxHQUFhK0IsS0FBYjtBQUNBLFVBQUksQ0FBQyxLQUFLOUIsWUFBVixFQUF3QjtBQUNwQixhQUFLQSxZQUFMLEdBQW9CK0IsWUFBWSxZQUFNO0FBQ2xDLGNBQUcsT0FBS2hDLEtBQUwsR0FBYSxDQUFoQixFQUFtQjtBQUNmLG1CQUFLQSxLQUFMO0FBQ0EsbUJBQUtpQyxNQUFMO0FBQ0gsV0FIRCxNQUdNO0FBQ0YsbUJBQUtoQyxZQUFMLElBQXFCaUMsY0FBYyxPQUFLakMsWUFBbkIsQ0FBckI7QUFDQSxtQkFBS0EsWUFBTCxHQUFvQixJQUFwQjtBQUNIO0FBQ0osU0FSbUIsRUFRakIsSUFSaUIsQ0FBcEI7QUFTSDtBQUNKOzs7O0VBaEdnQ2tDLGVBQUtDLEk7O2tCQUFuQjNDLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgaW1wb3J0IHRpcCBmcm9tIFwiLi4vdXRpbHMvdGlwXCJcbiAgaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55m75b2VJyxcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICBcInZhbi1jZWxsXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2NlbGwvaW5kZXhcIixcbiAgICAgICAgXCJ2YW4tZmllbGRcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvZmllbGQvaW5kZXhcIlxuICAgICAgfVxuICAgIH1cblxuICAgIGRhdGEgPSB7XG4gICAgICBwaG9uZTogJycsXG4gICAgICBjb2RlOiAnJyxcbiAgICAgIHRpbWVyOiAwLFxuICAgICAgc2VuZEludGVydmFsOiBudWxsLFxuICAgIH1cblxuICAgIG1ldGhvZHMgPSB7XG4gICAgICB0YXBMb2dpbigpIHtcbiAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9tZW51MCdcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDlvq7kv6HmjojmnYPnmbvlvZVcbiAgICAgIHdlY2hhdExvZ2luKCkge1xuICAgICAgICB3eC5sb2dpbih7XG4gICAgICAgICAgc3VjY2VzczogKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICAvLyDlj5HpgIHpqozor4HnoIFcbiAgICAgIGdldFNlbmRDb2RlKCkge1xuICAgICAgICBpZiAodGhpcy5waG9uZSA9PSAnJykge1xuICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn6K+36L6T5YWl5omL5py65Y+36I635Y+W6aqM6K+B56CBJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBob25lICE9PSAnbnVtYmVyJyAmJiBpc05hTih0aGlzLnBob25lKSkge1xuICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn5oKo6L6T5YWl55qE5omL5py65Y+35qC85byP5pyJ6K+vJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMucGhvbmUpIHtcbiAgICAgICAgICBpZiAoISgvXjFbMzQ1Njc4OV1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmUpKSkge1xuICAgICAgICAgICAgdGlwLnNob3dUb2FzdChcIuaJi+acuuWPt+eggeacieivr++8jOivt+mHjeWhq1wiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgIHRpdGxlOiAn56Gu6K6k5omL5py65Y+356CBJyxcbiAgICAgICAgICBjb250ZW50OiBg5oiR5Lus5bCG5Y+R6YCB6aqM6K+B56CB55+t5L+h5Yiw6L+Z5Liq5Y+356CB77yaICs4NiAke3RoaXMucGhvbmV9YCxcbiAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgIHRoYXQuZ2V0Q29kZSgpO1xuICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+R6YCB5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgdGhhdC50aW1lQ2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgICBcbiAgICAgIH0sXG4gICAgICBvblBob25lSW5wdXQoZSkge1xuICAgICAgICB0aGlzLnBob25lID0gZS5kZXRhaWw7XG4gICAgICB9LFxuICAgICAgb25Db2RlSW5wdXQoZSkge1xuICAgICAgICB0aGlzLmNvZGUgPSBlLmRldGFpbDtcbiAgICAgIH0gXG4gICAgfVxuXG4gICAgYXN5bmMgZ2V0Q29kZSgpIHtcbiAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0Q29kZShcbiAgICAgICAge1xuICAgICAgICAgIHBob25lOiB0aGlzLnBob25lXG4gICAgICAgIH1cbiAgICAgIClcbiAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgfVxuXG4gICAgdGltZUNoYW5nZSgpIHtcbiAgICAgIGNvbnN0IGNvdW50ID0gNjA7XG4gICAgICAgIHRoaXMudGltZXIgPSBjb3VudDtcbiAgICAgICAgaWYgKCF0aGlzLnNlbmRJbnRlcnZhbCkge1xuICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy50aW1lciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lci0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgIH1lbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLnNlbmRJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgfSBcbiAgICB9XG4gIH1cbiJdfQ==