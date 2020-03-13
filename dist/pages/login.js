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
      bindGetUserInfo: function bindGetUserInfo(event) {
        console.log(event);

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImFwaSIsIkxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJwaG9uZSIsImNvZGUiLCJ0aW1lciIsInNlbmRJbnRlcnZhbCIsIm1ldGhvZHMiLCJ0YXBMb2dpbiIsInd4Iiwic3dpdGNoVGFiIiwidXJsIiwiYmluZEdldFVzZXJJbmZvIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwibG9naW4iLCJzdWNjZXNzIiwicmVzIiwiZ2V0U2VuZENvZGUiLCJ0aXAiLCJzaG93VG9hc3QiLCJpc05hTiIsInRlc3QiLCJ0aGF0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwiY29uZmlybSIsImdldENvZGUiLCJpY29uIiwiZHVyYXRpb24iLCJ0aW1lQ2hhbmdlIiwib25QaG9uZUlucHV0IiwiZSIsImRldGFpbCIsIm9uQ29kZUlucHV0IiwiY291bnQiLCJzZXRJbnRlcnZhbCIsIiRhcHBseSIsImNsZWFySW50ZXJ2YWwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7Ozs7Ozs7OztJQUNTQyxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsSUFEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksK0JBREc7QUFFZixxQkFBYTtBQUZFO0FBRlYsSyxRQVFUQyxJLEdBQU87QUFDTEMsYUFBTyxFQURGO0FBRUxDLFlBQU0sRUFGRDtBQUdMQyxhQUFPLENBSEY7QUFJTEMsb0JBQWM7QUFKVCxLLFFBT1BDLE8sR0FBVTtBQUNSQyxjQURRLHNCQUNHO0FBQ1RDLFdBQUdDLFNBQUgsQ0FBYTtBQUNUQyxlQUFLO0FBREksU0FBYjtBQUdELE9BTE87O0FBTVI7QUFDQUMscUJBUFEsMkJBT1FDLEtBUFIsRUFPZTtBQUNyQkMsZ0JBQVFDLEdBQVIsQ0FBWUYsS0FBWjs7QUFFQUosV0FBR08sS0FBSCxDQUFTO0FBQ1BDLG1CQUFVLGlCQUFDQyxHQUFELEVBQVM7QUFDakJKLG9CQUFRQyxHQUFSLENBQVlHLEdBQVo7QUFDRDtBQUhNLFNBQVQ7QUFLRCxPQWZPOztBQWdCUjtBQUNBQyxpQkFqQlEseUJBaUJNO0FBQ1osWUFBSSxLQUFLaEIsS0FBTCxJQUFjLEVBQWxCLEVBQXNCO0FBQ2xCaUIsd0JBQUlDLFNBQUosQ0FBYyxhQUFkO0FBQ0E7QUFDSDtBQUNELFlBQUksT0FBTyxLQUFLbEIsS0FBWixLQUFzQixRQUF0QixJQUFrQ21CLE1BQU0sS0FBS25CLEtBQVgsQ0FBdEMsRUFBeUQ7QUFDckRpQix3QkFBSUMsU0FBSixDQUFjLGFBQWQ7QUFDQTtBQUNIO0FBQ0QsWUFBSSxLQUFLbEIsS0FBVCxFQUFnQjtBQUNkLGNBQUksQ0FBRSxvQkFBb0JvQixJQUFwQixDQUF5QixLQUFLcEIsS0FBOUIsQ0FBTixFQUE2QztBQUMzQ2lCLDBCQUFJQyxTQUFKLENBQWMsWUFBZDtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxZQUFNRyxPQUFPLElBQWI7QUFDQWYsV0FBR2dCLFNBQUgsQ0FBYTtBQUNYQyxpQkFBTyxRQURJO0FBRVhDLDZIQUFpQyxLQUFLeEIsS0FGM0I7QUFHWGMsaUJBSFcsbUJBR0hDLEdBSEcsRUFHRTtBQUNYLGdCQUFJQSxJQUFJVSxPQUFSLEVBQWlCO0FBQ2ZKLG1CQUFLSyxPQUFMO0FBQ0FwQixpQkFBR1ksU0FBSCxDQUFhO0FBQ1hLLHVCQUFPLE1BREk7QUFFWEksc0JBQU0sU0FGSztBQUdYQywwQkFBVTtBQUhDLGVBQWI7QUFLQVAsbUJBQUtRLFVBQUw7QUFDRDtBQUNGO0FBYlUsU0FBYjtBQWdCRCxPQWxETztBQW1EUkMsa0JBbkRRLHdCQW1ES0MsQ0FuREwsRUFtRFE7QUFDZCxhQUFLL0IsS0FBTCxHQUFhK0IsRUFBRUMsTUFBZjtBQUNELE9BckRPO0FBc0RSQyxpQkF0RFEsdUJBc0RJRixDQXRESixFQXNETztBQUNiLGFBQUs5QixJQUFMLEdBQVk4QixFQUFFQyxNQUFkO0FBQ0Q7QUF4RE8sSzs7Ozs7Ozs7Ozs7Ozt1QkE0RFF0QyxJQUFJZ0MsT0FBSixDQUNkO0FBQ0UxQix5QkFBTyxLQUFLQTtBQURkLGlCQURjLEM7OztBQUFaZSxtQjs7QUFLSkosd0JBQVFDLEdBQVIsQ0FBWUcsR0FBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O2lDQUdXO0FBQUE7O0FBQ1gsVUFBTW1CLFFBQVEsRUFBZDtBQUNFLFdBQUtoQyxLQUFMLEdBQWFnQyxLQUFiO0FBQ0EsVUFBSSxDQUFDLEtBQUsvQixZQUFWLEVBQXdCO0FBQ3BCLGFBQUtBLFlBQUwsR0FBb0JnQyxZQUFZLFlBQU07QUFDbEMsY0FBRyxPQUFLakMsS0FBTCxHQUFhLENBQWhCLEVBQW1CO0FBQ2YsbUJBQUtBLEtBQUw7QUFDQSxtQkFBS2tDLE1BQUw7QUFDSCxXQUhELE1BR007QUFDRixtQkFBS2pDLFlBQUwsSUFBcUJrQyxjQUFjLE9BQUtsQyxZQUFuQixDQUFyQjtBQUNBLG1CQUFLQSxZQUFMLEdBQW9CLElBQXBCO0FBQ0g7QUFDSixTQVJtQixFQVFqQixJQVJpQixDQUFwQjtBQVNIO0FBQ0o7Ozs7RUFsR2dDbUMsZUFBS0MsSTs7a0JBQW5CNUMsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBpbXBvcnQgdGlwIGZyb20gXCIuLi91dGlscy90aXBcIlxuICBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgIGNvbmZpZyA9IHtcbiAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnmbvlvZUnLFxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgIFwidmFuLWNlbGxcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvY2VsbC9pbmRleFwiLFxuICAgICAgICBcInZhbi1maWVsZFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9maWVsZC9pbmRleFwiXG4gICAgICB9XG4gICAgfVxuXG4gICAgZGF0YSA9IHtcbiAgICAgIHBob25lOiAnJyxcbiAgICAgIGNvZGU6ICcnLFxuICAgICAgdGltZXI6IDAsXG4gICAgICBzZW5kSW50ZXJ2YWw6IG51bGwsXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRhcExvZ2luKCkge1xuICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL21lbnUwJ1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIC8vIOW+ruS/oeaOiOadg+eZu+W9lVxuICAgICAgYmluZEdldFVzZXJJbmZvKGV2ZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxuXG4gICAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgICBzdWNjZXNzOiAoKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIC8vIOWPkemAgemqjOivgeeggVxuICAgICAgZ2V0U2VuZENvZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLnBob25lID09ICcnKSB7XG4gICAgICAgICAgICB0aXAuc2hvd1RvYXN0KCfor7fovpPlhaXmiYvmnLrlj7fojrflj5bpqozor4HnoIEnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIHRoaXMucGhvbmUgIT09ICdudW1iZXInICYmIGlzTmFOKHRoaXMucGhvbmUpKSB7XG4gICAgICAgICAgICB0aXAuc2hvd1RvYXN0KCfmgqjovpPlhaXnmoTmiYvmnLrlj7fmoLzlvI/mnInor68nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5waG9uZSkge1xuICAgICAgICAgIGlmICghKC9eMVszNDU2Nzg5XVxcZHs5fSQvLnRlc3QodGhpcy5waG9uZSkpKSB7XG4gICAgICAgICAgICB0aXAuc2hvd1RvYXN0KFwi5omL5py65Y+356CB5pyJ6K+v77yM6K+36YeN5aGrXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgdGl0bGU6ICfnoa7orqTmiYvmnLrlj7fnoIEnLFxuICAgICAgICAgIGNvbnRlbnQ6IGDmiJHku6zlsIblj5HpgIHpqozor4HnoIHnn63kv6HliLDov5nkuKrlj7fnoIHvvJogKzg2ICR7dGhpcy5waG9uZX1gLFxuICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgdGhhdC5nZXRDb2RlKCk7XG4gICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip8nLFxuICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB0aGF0LnRpbWVDaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIFxuICAgICAgfSxcbiAgICAgIG9uUGhvbmVJbnB1dChlKSB7XG4gICAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbDtcbiAgICAgIH0sXG4gICAgICBvbkNvZGVJbnB1dChlKSB7XG4gICAgICAgIHRoaXMuY29kZSA9IGUuZGV0YWlsO1xuICAgICAgfSBcbiAgICB9XG5cbiAgICBhc3luYyBnZXRDb2RlKCkge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5nZXRDb2RlKFxuICAgICAgICB7XG4gICAgICAgICAgcGhvbmU6IHRoaXMucGhvbmVcbiAgICAgICAgfVxuICAgICAgKVxuICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICB9XG5cbiAgICB0aW1lQ2hhbmdlKCkge1xuICAgICAgY29uc3QgY291bnQgPSA2MDtcbiAgICAgICAgdGhpcy50aW1lciA9IGNvdW50O1xuICAgICAgICBpZiAoIXRoaXMuc2VuZEludGVydmFsKSB7XG4gICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnRpbWVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyLS07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgfWVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMuc2VuZEludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICB9IFxuICAgIH1cbiAgfVxuIl19