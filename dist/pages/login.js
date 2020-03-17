'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _store = require('./../store/index.js');

var _store2 = _interopRequireDefault(_store);

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

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

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
            userInfo: {}, // 用户信息
            statusBarHeight: wx.getSystemInfoSync().statusBarHeight
        }, _this.methods = {
            tapLogin: function tapLogin() {
                if (this.verifyPhone()) {
                    this.smsLogin();
                }
            },

            // 获取用户信息
            getUserInfo: function getUserInfo(event) {
                if (event.detail.userInfo) {
                    this.userInfo = event.detail.userInfo;
                    this.showGetPhone = true;
                    this.$apply();
                }
            },

            // 获取手机号
            getPhoneNumber: function getPhoneNumber(event) {
                var _this2 = this;

                this.userInfo.encryptedData = event.detail.encryptedData;
                this.userInfo.iv = event.detail.iv;
                if (event.detail.errMsg == 'getPhoneNumber:ok') {
                    wx.checkSession({
                        success: function success() {
                            var userInfo = wx.getStorageSync('userInfo');
                            _this2.userInfo.openId = userInfo.open_id;
                            _this2.userInfo.sessionKey = userInfo.session_key;
                            _this2.wechatLogin();
                        },
                        fail: function fail() {
                            // 获取用户登录code
                            wx.login({
                                success: function success(res) {
                                    if (res.code) {
                                        _this2.getOpenid({ code: res.code });
                                    }
                                }
                            });
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
            onClosePopup: function onClosePopup() {
                this.showGetPhone = false;
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
        key: 'getOpenid',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return api.getOpenid(params);

                            case 2:
                                res = _context.sent;

                                if (res.code == 200) {
                                    this.userInfo.openId = res.open_id;
                                    this.userInfo.sessionKey = res.session_key;
                                    wx.setStorageSync('userInfo', this.userInfo);
                                    this.wechatLogin();
                                }

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getOpenid(_x) {
                return _ref2.apply(this, arguments);
            }

            return getOpenid;
        }()

        // 手机验证码登录

    }, {
        key: 'smsLogin',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return api.smsLogin({
                                    phoneNumber: this.phone,
                                    code: this.code,
                                    uuid: this.uuid
                                });

                            case 2:
                                res = _context2.sent;

                                if (res.code == 200) {
                                    store.dispatch({
                                        type: 'UPDATE_GLOBAL_DATA',
                                        globalData: {
                                            token: res.token
                                        }
                                    });
                                    wx.setStorageSync('token', res.token);
                                    wx.switchTab({
                                        url: '/pages/menu0'
                                    });
                                }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function smsLogin(_x2) {
                return _ref3.apply(this, arguments);
            }

            return smsLogin;
        }()
    }, {
        key: 'getCode',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return api.getCode({
                                    phone: this.phone
                                });

                            case 2:
                                res = _context3.sent;

                                this.code = res.verifyCode;
                                this.uuid = res.uuid;
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getCode() {
                return _ref4.apply(this, arguments);
            }

            return getCode;
        }()
    }, {
        key: 'wechatLogin',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var userInfo, data, res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                userInfo = this.userInfo;
                                data = {
                                    openId: userInfo.openId,
                                    sessionKey: userInfo.sessionKey,
                                    avatar: userInfo.avatarUrl,
                                    nickName: userInfo.nickName,
                                    sex: userInfo.gender,
                                    phoneNumber: userInfo.encryptedData,
                                    iv: userInfo.iv
                                };
                                _context4.next = 4;
                                return api.wechatLogin(data);

                            case 4:
                                res = _context4.sent;

                            case 5:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function wechatLogin() {
                return _ref5.apply(this, arguments);
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImFwaSIsInN0b3JlIiwiTG9naW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInBob25lIiwiY29kZSIsInV1aWQiLCJ0aW1lciIsImdldFBob25lIiwic2VuZEludGVydmFsIiwic2hvd0dldFBob25lIiwidXNlckluZm8iLCJzdGF0dXNCYXJIZWlnaHQiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwibWV0aG9kcyIsInRhcExvZ2luIiwidmVyaWZ5UGhvbmUiLCJzbXNMb2dpbiIsImdldFVzZXJJbmZvIiwiZXZlbnQiLCJkZXRhaWwiLCIkYXBwbHkiLCJnZXRQaG9uZU51bWJlciIsImVuY3J5cHRlZERhdGEiLCJpdiIsImVyck1zZyIsImNoZWNrU2Vzc2lvbiIsInN1Y2Nlc3MiLCJnZXRTdG9yYWdlU3luYyIsIm9wZW5JZCIsIm9wZW5faWQiLCJzZXNzaW9uS2V5Iiwic2Vzc2lvbl9rZXkiLCJ3ZWNoYXRMb2dpbiIsImZhaWwiLCJsb2dpbiIsInJlcyIsImdldE9wZW5pZCIsImdldFNlbmRDb2RlIiwidGhhdCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNvbmZpcm0iLCJnZXRDb2RlIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwidGltZUNoYW5nZSIsIm9uQ2xvc2VQb3B1cCIsIm9uUGhvbmVJbnB1dCIsImUiLCJvbkNvZGVJbnB1dCIsInBhcmFtcyIsInNldFN0b3JhZ2VTeW5jIiwicGhvbmVOdW1iZXIiLCJkaXNwYXRjaCIsInR5cGUiLCJnbG9iYWxEYXRhIiwidG9rZW4iLCJzd2l0Y2hUYWIiLCJ1cmwiLCJ2ZXJpZnlDb2RlIiwiYXZhdGFyIiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJzZXgiLCJnZW5kZXIiLCJ0aXAiLCJpc05hTiIsInRlc3QiLCJmbGFzZSIsImNvdW50Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVy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Q0g7OztxQ0FDWTtBQUFBOztBQUNULGdCQUFNQyxRQUFRLEVBQWQ7QUFDQSxpQkFBS2xFLEtBQUwsR0FBYWtFLEtBQWI7QUFDQSxnQkFBSSxDQUFDLEtBQUtoRSxZQUFWLEVBQXdCO0FBQ3BCLHFCQUFLQSxZQUFMLEdBQW9CaUUsWUFBWSxZQUFNO0FBQ2xDLHdCQUFJLE9BQUtuRSxLQUFMLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEIsK0JBQUtBLEtBQUw7QUFDQSwrQkFBS2UsTUFBTDtBQUNILHFCQUhELE1BR087QUFDSCwrQkFBS2IsWUFBTCxJQUFxQmtFLGNBQWMsT0FBS2xFLFlBQW5CLENBQXJCO0FBQ0EsK0JBQUtBLFlBQUwsR0FBb0IsSUFBcEI7QUFDSDtBQUNKLGlCQVJtQixFQVFqQixJQVJpQixDQUFwQjtBQVNIO0FBQ0o7Ozs7RUEvSzhCbUUsZUFBS0MsSTs7a0JBQW5COUUsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCB7XHJcbiAgICAgICAgc2V0U3RvcmUsXHJcbiAgICAgICAgZ2V0U3RvcmVcclxuICAgIH0gZnJvbSAnd2VweS1yZWR1eCdcclxuICAgIGltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuLi9zdG9yZSdcclxuICAgIGltcG9ydCB0aXAgZnJvbSBcIi4uL3V0aWxzL3RpcFwiXHJcbiAgICBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKClcclxuICAgIHNldFN0b3JlKHN0b3JlKVxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnmbvlvZUnLFxyXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgICAgIFwidmFuLWNlbGxcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvY2VsbC9pbmRleFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YW4tZmllbGRcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvZmllbGQvaW5kZXhcIixcclxuICAgICAgICAgICAgICAgIFwidmFuLWljb25cIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvaWNvbi9pbmRleFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YW4tcG9wdXBcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvcG9wdXAvaW5kZXhcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgY29kZTogJycsXHJcbiAgICAgICAgICAgIHV1aWQ6ICcnLFxyXG4gICAgICAgICAgICB0aW1lcjogMCxcclxuICAgICAgICAgICAgZ2V0UGhvbmU6ICcnLFxyXG4gICAgICAgICAgICBzZW5kSW50ZXJ2YWw6IG51bGwsXHJcbiAgICAgICAgICAgIHNob3dHZXRQaG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiB7fSwgIC8vIOeUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHd4LmdldFN5c3RlbUluZm9TeW5jKCkuc3RhdHVzQmFySGVpZ2h0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHRhcExvZ2luKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmVyaWZ5UGhvbmUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc21zTG9naW4oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g6I635Y+W55So5oi35L+h5oGvXHJcbiAgICAgICAgICAgIGdldFVzZXJJbmZvKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGV0YWlsLnVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IGV2ZW50LmRldGFpbC51c2VySW5mbztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dHZXRQaG9uZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g6I635Y+W5omL5py65Y+3XHJcbiAgICAgICAgICAgIGdldFBob25lTnVtYmVyKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmVuY3J5cHRlZERhdGEgPSBldmVudC5kZXRhaWwuZW5jcnlwdGVkRGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uaXYgPSBldmVudC5kZXRhaWwuaXY7XHJcbiAgICAgICAgICAgICAgICBpZihldmVudC5kZXRhaWwuZXJyTXNnID09ICdnZXRQaG9uZU51bWJlcjpvaycpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5jaGVja1Nlc3Npb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlckluZm8gPSB3eC5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8ub3BlbklkID0gdXNlckluZm8ub3Blbl9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uc2Vzc2lvbktleSA9IHVzZXJJbmZvLnNlc3Npb25fa2V5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWNoYXRMb2dpbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bnlKjmiLfnmbvlvZVjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3BlbmlkKHtjb2RlOiByZXMuY29kZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyDlj5HpgIHpqozor4HnoIFcclxuICAgICAgICAgICAgZ2V0U2VuZENvZGUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52ZXJpZnlQaG9uZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmiYvmnLrlj7fnoIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBg5oiR5Lus5bCG5Y+R6YCB6aqM6K+B56CB55+t5L+h5Yiw6L+Z5Liq5Y+356CB77yaICs4NiAke3RoaXMucGhvbmV9YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0Q29kZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+R6YCB5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNsb3NlUG9wdXAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHZXRQaG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblBob25lSW5wdXQoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waG9uZSA9IGUuZGV0YWlsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNvZGVJbnB1dChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvZGUgPSBlLmRldGFpbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBnZXRPcGVuaWQocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0T3BlbmlkKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8ub3BlbklkID0gcmVzLm9wZW5faWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLnNlc3Npb25LZXkgPSByZXMuc2Vzc2lvbl9rZXk7XHJcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCB0aGlzLnVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgIHRoaXMud2VjaGF0TG9naW4oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyDmiYvmnLrpqozor4HnoIHnmbvlvZVcclxuICAgICAgICBhc3luYyBzbXNMb2dpbihwYXJhbXMpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5zbXNMb2dpbih7XHJcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogdGhpcy5waG9uZSxcclxuICAgICAgICAgICAgICAgIGNvZGU6IHRoaXMuY29kZSxcclxuICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMudXVpZFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VQREFURV9HTE9CQUxfREFUQScsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbjogcmVzLnRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndG9rZW4nLCByZXMudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWVudTAnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGdldENvZGUoKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0Q29kZSh7XHJcbiAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLmNvZGUgPSByZXMudmVyaWZ5Q29kZTtcclxuICAgICAgICAgICAgdGhpcy51dWlkID0gcmVzLnV1aWQ7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIHdlY2hhdExvZ2luKCkge1xyXG4gICAgICAgICAgICBsZXQgdXNlckluZm8gPSB0aGlzLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIG9wZW5JZDogdXNlckluZm8ub3BlbklkLFxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbktleTogdXNlckluZm8uc2Vzc2lvbktleSxcclxuICAgICAgICAgICAgICAgIGF2YXRhcjogdXNlckluZm8uYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgbmlja05hbWU6IHVzZXJJbmZvLm5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgc2V4OiB1c2VySW5mby5nZW5kZXIsXHJcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogdXNlckluZm8uZW5jcnlwdGVkRGF0YSxcclxuICAgICAgICAgICAgICAgIGl2OiB1c2VySW5mby5pdlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkud2VjaGF0TG9naW4oZGF0YSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICB2ZXJpZnlQaG9uZSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucGhvbmUgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIHRpcC5zaG93VG9hc3QoJ+ivt+i+k+WFpeaJi+acuuWPt+iOt+WPlumqjOivgeeggScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5waG9uZSAhPT0gJ251bWJlcicgJiYgaXNOYU4odGhpcy5waG9uZSkpIHtcclxuICAgICAgICAgICAgICAgIHRpcC5zaG93VG9hc3QoJ+aCqOi+k+WFpeeahOaJi+acuuWPt+agvOW8j+acieivrycpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBob25lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoISgvXjFbMzQ1Njc4OV1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5zaG93VG9hc3QoXCLmiYvmnLrlj7fnoIHmnInor6/vvIzor7fph43loatcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZsYXNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aW1lQ2hhbmdlKCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IDYwO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gY291bnQ7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zZW5kSW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyLS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLnNlbmRJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19