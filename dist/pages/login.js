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
                "van-field": "../components/vant/field/index",
                "van-icon": "../components/vant/icon/index",
                "van-popup": "../components/vant/popup/index"
            }
        }, _this.data = {
            phone: '',
            code: '',
            uuid: '',
            timer: 0,
            getPhone: '',
            sendInterval: null,
            showGetPhone: false,
            statusBarHeight: wx.getSystemInfoSync().statusBarHeight
        }, _this.methods = {
            tapLogin: function tapLogin() {
                if (this.verifyPhone()) {
                    this.smsLogin();
                }
            },

            // 获取手机号
            getPhoneNumber: function getPhoneNumber(event) {
                var _this2 = this;

                if (event.detail.encryptedData) {
                    // 获取用户登录code
                    wx.login({
                        success: function success(res) {
                            if (res.code) {
                                // 获取用户信息
                                wx.getUserInfo({
                                    success: function success(data) {
                                        var userInfo = data.userInfo;
                                        var params = {
                                            code: res.code,
                                            avatar: userInfo.avatarUrl,
                                            nickName: userInfo.nickName,
                                            sex: userInfo.gender,
                                            phoneNumber: event.detail.encryptedData,
                                            iv: event.detail.iv
                                        };
                                        _this2.wechatLogin(params);
                                    }
                                });
                            }
                        }
                    });
                }
            },

            // 发送验证码
            getSendCode: function getSendCode() {
                if (this.verifyPhone()) {
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
                }
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
        key: 'smsLogin',

        // 手机验证码登录
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return api.smsLogin({
                                    phone: this.phone,
                                    code: this.code,
                                    uuid: this.uuid
                                });

                            case 2:
                                res = _context.sent;

                                // if(res.code == 200) {
                                wx.switchTab({
                                    url: '/pages/menu0'
                                });
                                // }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function smsLogin(_x) {
                return _ref2.apply(this, arguments);
            }

            return smsLogin;
        }()
    }, {
        key: 'getCode',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return api.getCode({
                                    phone: this.phone
                                });

                            case 2:
                                res = _context2.sent;

                                this.code = res.verifyCode;
                                this.uuid = res.uuid;
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getCode() {
                return _ref3.apply(this, arguments);
            }

            return getCode;
        }()
    }, {
        key: 'wechatLogin',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return api.wechatLogin(params);

                            case 2:
                                res = _context3.sent;

                                console.log(res);

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function wechatLogin(_x2) {
                return _ref4.apply(this, arguments);
            }

            return wechatLogin;
        }()
    }, {
        key: 'verifyPhone',
        value: function verifyPhone() {
            if (this.phone == '') {
                _tip2.default.showToast('请输入手机号获取验证码');
                return false;
            }
            if (typeof this.phone !== 'number' && isNaN(this.phone)) {
                _tip2.default.showToast('您输入的手机号格式有误');
                return false;
            }
            if (this.phone) {
                if (!/^1[3456789]\d{9}$/.test(this.phone)) {
                    _tip2.default.showToast("手机号码有误，请重填");
                    return flase;
                }
            }
            return true;
        }
    }, {
        key: 'timeChange',
        value: function timeChange() {
            var _this3 = this;

            var count = 60;
            this.timer = count;
            if (!this.sendInterval) {
                this.sendInterval = setInterval(function () {
                    if (_this3.timer > 0) {
                        _this3.timer--;
                        _this3.$apply();
                    } else {
                        _this3.sendInterval && clearInterval(_this3.sendInterval);
                        _this3.sendInterval = null;
                    }
                }, 1000);
            }
        }
    }]);

    return Login;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImFwaSIsIkxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJwaG9uZSIsImNvZGUiLCJ1dWlkIiwidGltZXIiLCJnZXRQaG9uZSIsInNlbmRJbnRlcnZhbCIsInNob3dHZXRQaG9uZSIsInN0YXR1c0JhckhlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJtZXRob2RzIiwidGFwTG9naW4iLCJ2ZXJpZnlQaG9uZSIsInNtc0xvZ2luIiwiZ2V0UGhvbmVOdW1iZXIiLCJldmVudCIsImRldGFpbCIsImVuY3J5cHRlZERhdGEiLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJnZXRVc2VySW5mbyIsInVzZXJJbmZvIiwicGFyYW1zIiwiYXZhdGFyIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJzZXgiLCJnZW5kZXIiLCJwaG9uZU51bWJlciIsIml2Iiwid2VjaGF0TG9naW4iLCJnZXRTZW5kQ29kZSIsInRoYXQiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtIiwiZ2V0Q29kZSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInRpbWVDaGFuZ2UiLCJvblBob25lSW5wdXQiLCJlIiwib25Db2RlSW5wdXQiLCJzd2l0Y2hUYWIiLCJ1cmwiLCIkYXBwbHkiLCJ2ZXJpZnlDb2RlIiwiY29uc29sZSIsImxvZyIsInRpcCIsImlzTmFOIiwidGVzdCIsImZsYXNlIiwiY291bnQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7Ozs7Ozs7OztJQUNTQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsSUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsNEJBQVksK0JBREM7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RCxlQUFLQyxJOztrQkFBbkJqRSxLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0IHRpcCBmcm9tIFwiLi4vdXRpbHMvdGlwXCJcclxuICAgIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eZu+W9lScsXHJcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YW4tY2VsbFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9jZWxsL2luZGV4XCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbi1maWVsZFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9maWVsZC9pbmRleFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YW4taWNvblwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9pY29uL2luZGV4XCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbi1wb3B1cFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9wb3B1cC9pbmRleFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgICAgICBjb2RlOiAnJyxcclxuICAgICAgICAgICAgdXVpZDogJycsXHJcbiAgICAgICAgICAgIHRpbWVyOiAwLFxyXG4gICAgICAgICAgICBnZXRQaG9uZTogJycsXHJcbiAgICAgICAgICAgIHNlbmRJbnRlcnZhbDogbnVsbCxcclxuICAgICAgICAgICAgc2hvd0dldFBob25lOiBmYWxzZSxcclxuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodFxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICB0YXBMb2dpbigpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlcmlmeVBob25lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNtc0xvZ2luKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIOiOt+WPluaJi+acuuWPt1xyXG4gICAgICAgICAgICBnZXRQaG9uZU51bWJlcihldmVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYoZXZlbnQuZGV0YWlsLmVuY3J5cHRlZERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bnlKjmiLfnmbvlvZVjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gZGF0YS51c2VySW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogcmVzLmNvZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyOiB1c2VySW5mby5hdmF0YXJVcmwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHVzZXJJbmZvLm5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNleDogdXNlckluZm8uZ2VuZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiBldmVudC5kZXRhaWwuZW5jcnlwdGVkRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdjogZXZlbnQuZGV0YWlsLml2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndlY2hhdExvZ2luKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g5Y+R6YCB6aqM6K+B56CBXHJcbiAgICAgICAgICAgIGdldFNlbmRDb2RlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmVyaWZ5UGhvbmUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn56Gu6K6k5omL5py65Y+356CBJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYOaIkeS7rOWwhuWPkemAgemqjOivgeeggeefreS/oeWIsOi/meS4quWPt+egge+8miArODYgJHt0aGlzLnBob25lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldENvZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WPkemAgeaIkOWKnycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25QaG9uZUlucHV0KGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25Db2RlSW5wdXQoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2RlID0gZS5kZXRhaWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5omL5py66aqM6K+B56CB55m75b2VXHJcbiAgICAgICAgYXN5bmMgc21zTG9naW4ocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuc21zTG9naW4oe1xyXG4gICAgICAgICAgICAgICAgcGhvbmU6IHRoaXMucGhvbmUsXHJcbiAgICAgICAgICAgICAgICBjb2RlOiB0aGlzLmNvZGUsXHJcbiAgICAgICAgICAgICAgICB1dWlkOiB0aGlzLnV1aWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIGlmKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWVudTAnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGdldENvZGUoKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0Q29kZSh7XHJcbiAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmNvZGUgPSByZXMudmVyaWZ5Q29kZTtcclxuICAgICAgICAgICAgdGhpcy51dWlkID0gcmVzLnV1aWQ7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIHdlY2hhdExvZ2luKHBhcmFtcykge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLndlY2hhdExvZ2luKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZlcmlmeVBob25lKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5waG9uZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn6K+36L6T5YWl5omL5py65Y+36I635Y+W6aqM6K+B56CBJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBob25lICE9PSAnbnVtYmVyJyAmJiBpc05hTih0aGlzLnBob25lKSkge1xyXG4gICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn5oKo6L6T5YWl55qE5omL5py65Y+35qC85byP5pyJ6K+vJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucGhvbmUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKC9eMVszNDU2Nzg5XVxcZHs5fSQvLnRlc3QodGhpcy5waG9uZSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdChcIuaJi+acuuWPt+eggeacieivr++8jOivt+mHjeWhq1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmxhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbWVDaGFuZ2UoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gNjA7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBjb3VudDtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbmRJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXItLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMuc2VuZEludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=