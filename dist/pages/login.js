'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _store2 = require('./../store/index.js');

var _store3 = _interopRequireDefault(_store2);

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

var store = (0, _store3.default)();
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
                    this.showGetPhone = false;
                    wx.checkSession({
                        success: function success() {
                            var userInfo = wx.getStorageSync('userInfo');
                            if (!userInfo) {
                                var _store = (0, _wepyRedux.getStore)();
                                var userData = _store.getState().user.userInfo;
                                console.log(userData);
                                _this2.userInfo.openId = userData.openId;
                                _this2.userInfo.sessionKey = userData.sessionKey;
                            } else {
                                _this2.userInfo.openId = userInfo.openId;
                                _this2.userInfo.sessionKey = userInfo.sessionKey;
                            }
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
        key: 'onLoad',
        value: function onLoad() {
            if (wx.getStorageSync('token')) {
                wx.switchTab({
                    url: '/pages/menu0'
                });
            }
        }
    }, {
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
                                    store.dispatch({
                                        type: 'UPDATE_USER_INFO',
                                        userInfo: this.userInfo
                                    });
                                    console.log(this.userInfo);
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
                                    this.loginSuccess(res.token);
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

                                if (res.code == 200) {
                                    this.loginSuccess(res.token);
                                }

                            case 6:
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
        key: 'loginSuccess',
        value: function loginSuccess(token) {
            wx.setStorageSync('token', token);
            wx.switchTab({
                url: '/pages/menu0'
            });
        }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImFwaSIsInN0b3JlIiwiTG9naW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInBob25lIiwiY29kZSIsInV1aWQiLCJ0aW1lciIsImdldFBob25lIiwic2VuZEludGVydmFsIiwic2hvd0dldFBob25lIiwidXNlckluZm8iLCJzdGF0dXNCYXJIZWlnaHQiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwibWV0aG9kcyIsInRhcExvZ2luIiwidmVyaWZ5UGhvbmUiLCJzbXNMb2dpbiIsImdldFVzZXJJbmZvIiwiZXZlbnQiLCJkZXRhaWwiLCIkYXBwbHkiLCJnZXRQaG9uZU51bWJlciIsImVuY3J5cHRlZERhdGEiLCJpdiIsImVyck1zZyIsImNoZWNrU2Vzc2lvbiIsInN1Y2Nlc3MiLCJnZXRTdG9yYWdlU3luYyIsInVzZXJEYXRhIiwiZ2V0U3RhdGUiLCJ1c2VyIiwiY29uc29sZSIsImxvZyIsIm9wZW5JZCIsInNlc3Npb25LZXkiLCJ3ZWNoYXRMb2dpbiIsImZhaWwiLCJsb2dpbiIsInJlcyIsImdldE9wZW5pZCIsImdldFNlbmRDb2RlIiwidGhhdCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNvbmZpcm0iLCJnZXRDb2RlIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwidGltZUNoYW5nZSIsIm9uQ2xvc2VQb3B1cCIsIm9uUGhvbmVJbnB1dCIsImUiLCJvbkNvZGVJbnB1dCIsInN3aXRjaFRhYiIsInVybCIsInBhcmFtcyIsIm9wZW5faWQiLCJzZXNzaW9uX2tleSIsInNldFN0b3JhZ2VTeW5jIiwiZGlzcGF0Y2giLCJ0eXBlIiwicGhvbmVOdW1iZXIiLCJsb2dpblN1Y2Nlc3MiLCJ0b2tlbiIsInZlcmlmeUNvZGUiLCJhdmF0YXIiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsInNleCIsImdlbmRlciIsInRpcCIsImlzTmFOIiwidGVzdCIsImZsYXNlIiwiY291bnQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7Ozs7Ozs7Ozs7Ozs7O0FBRVosSUFBTUMsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOztJQUVxQkMsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLElBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDRCQUFZLCtCQURDO0FBRWIsNkJBQWEsZ0NBRkE7QUFHYiw0QkFBWSwrQkFIQztBQUliLDZCQUFhO0FBSkE7QUFGWixTLFFBU1RDLEksR0FBTztBQUNIQyxtQkFBTyxFQURKO0FBRUhDLGtCQUFNLEVBRkg7QUFHSEMsa0JBQU0sRUFISDtBQUlIQyxtQkFBTyxDQUpKO0FBS0hDLHNCQUFVLEVBTFA7QUFNSEMsMEJBQWMsSUFOWDtBQU9IQywwQkFBYyxLQVBYO0FBUUhDLHNCQUFVLEVBUlAsRUFRWTtBQUNmQyw2QkFBaUJDLEdBQUdDLGlCQUFILEdBQXVCRjtBQVRyQyxTLFFBb0JQRyxPLEdBQVU7QUFDTkMsb0JBRE0sc0JBQ0s7QUFDUCxvQkFBSSxLQUFLQyxXQUFMLEVBQUosRUFBd0I7QUFDcEIseUJBQUtDLFFBQUw7QUFDSDtBQUNKLGFBTEs7O0FBTU47QUFDQUMsdUJBUE0sdUJBT01DLEtBUE4sRUFPYTtBQUNmLG9CQUFJQSxNQUFNQyxNQUFOLENBQWFWLFFBQWpCLEVBQTJCO0FBQ3ZCLHlCQUFLQSxRQUFMLEdBQWdCUyxNQUFNQyxNQUFOLENBQWFWLFFBQTdCO0FBQ0EseUJBQUtELFlBQUwsR0FBb0IsSUFBcEI7QUFDQSx5QkFBS1ksTUFBTDtBQUNIO0FBQ0osYUFiSzs7QUFjTjtBQUNBQywwQkFmTSwwQkFlU0gsS0FmVCxFQWVnQjtBQUFBOztBQUNsQixxQkFBS1QsUUFBTCxDQUFjYSxhQUFkLEdBQThCSixNQUFNQyxNQUFOLENBQWFH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QUwsR0FBb0IsSUFBcEI7QUFDSDtBQUNKLGlCQVJtQixFQVFqQixJQVJpQixDQUFwQjtBQVNIO0FBQ0o7Ozs7RUF0TThCd0UsZUFBS0MsSTs7a0JBQW5CbkYsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHtcbiAgICAgICAgc2V0U3RvcmUsXG4gICAgICAgIGdldFN0b3JlXG4gICAgfSBmcm9tICd3ZXB5LXJlZHV4J1xuICAgIGltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuLi9zdG9yZSdcbiAgICBpbXBvcnQgdGlwIGZyb20gXCIuLi91dGlscy90aXBcIlxuICAgIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xuXG4gICAgY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpXG4gICAgc2V0U3RvcmUoc3RvcmUpXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnmbvlvZUnLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgXCJ2YW4tY2VsbFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9jZWxsL2luZGV4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YW4tZmllbGRcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvZmllbGQvaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbi1pY29uXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2ljb24vaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbi1wb3B1cFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9wb3B1cC9pbmRleFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgdXVpZDogJycsXG4gICAgICAgICAgICB0aW1lcjogMCxcbiAgICAgICAgICAgIGdldFBob25lOiAnJyxcbiAgICAgICAgICAgIHNlbmRJbnRlcnZhbDogbnVsbCxcbiAgICAgICAgICAgIHNob3dHZXRQaG9uZTogZmFsc2UsXG4gICAgICAgICAgICB1c2VySW5mbzoge30sICAvLyDnlKjmiLfkv6Hmga9cbiAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIGlmKHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpKSB7XG4gICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL21lbnUwJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgdGFwTG9naW4oKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmVyaWZ5UGhvbmUoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNtc0xvZ2luKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICAgICAgZ2V0VXNlckluZm8oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGV0YWlsLnVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSBldmVudC5kZXRhaWwudXNlckluZm87XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0dldFBob25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g6I635Y+W5omL5py65Y+3XG4gICAgICAgICAgICBnZXRQaG9uZU51bWJlcihldmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uZW5jcnlwdGVkRGF0YSA9IGV2ZW50LmRldGFpbC5lbmNyeXB0ZWREYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uaXYgPSBldmVudC5kZXRhaWwuaXY7XG4gICAgICAgICAgICAgICAgaWYoZXZlbnQuZGV0YWlsLmVyck1zZyA9PSAnZ2V0UGhvbmVOdW1iZXI6b2snKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0dldFBob25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHd4LmNoZWNrU2Vzc2lvbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIXVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVzZXJEYXRhID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh1c2VyRGF0YSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5vcGVuSWQgPSB1c2VyRGF0YS5vcGVuSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uc2Vzc2lvbktleSA9IHVzZXJEYXRhLnNlc3Npb25LZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5vcGVuSWQgPSB1c2VySW5mby5vcGVuSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uc2Vzc2lvbktleSA9IHVzZXJJbmZvLnNlc3Npb25LZXk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2VjaGF0TG9naW4oKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBmYWlsOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W55So5oi355m75b2VY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRPcGVuaWQoe2NvZGU6IHJlcy5jb2RlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5Y+R6YCB6aqM6K+B56CBXG4gICAgICAgICAgICBnZXRTZW5kQ29kZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52ZXJpZnlQaG9uZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmiYvmnLrlj7fnoIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYOaIkeS7rOWwhuWPkemAgemqjOivgeeggeefreS/oeWIsOi/meS4quWPt+egge+8miArODYgJHt0aGlzLnBob25lfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldENvZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+R6YCB5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbG9zZVBvcHVwKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0dldFBob25lID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25QaG9uZUlucHV0KGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBob25lID0gZS5kZXRhaWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Db2RlSW5wdXQoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29kZSA9IGUuZGV0YWlsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGdldE9wZW5pZChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0T3BlbmlkKHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5vcGVuSWQgPSByZXMub3Blbl9pZDtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLnNlc3Npb25LZXkgPSByZXMuc2Vzc2lvbl9rZXk7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJywgdGhpcy51c2VySW5mbyk7XG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVVBEQVRFX1VTRVJfSU5GTycsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvOiB0aGlzLnVzZXJJbmZvXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJJbmZvKVxuICAgICAgICAgICAgICAgIHRoaXMud2VjaGF0TG9naW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g5omL5py66aqM6K+B56CB55m75b2VXG4gICAgICAgIGFzeW5jIHNtc0xvZ2luKHBhcmFtcykge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5zbXNMb2dpbih7XG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHRoaXMucGhvbmUsXG4gICAgICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMudXVpZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3VjY2VzcyhyZXMudG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBnZXRDb2RlKCkge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5nZXRDb2RlKHtcbiAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IHJlcy52ZXJpZnlDb2RlO1xuICAgICAgICAgICAgdGhpcy51dWlkID0gcmVzLnV1aWQ7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHdlY2hhdExvZ2luKCkge1xuICAgICAgICAgICAgbGV0IHVzZXJJbmZvID0gdGhpcy51c2VySW5mbztcbiAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIG9wZW5JZDogdXNlckluZm8ub3BlbklkLFxuICAgICAgICAgICAgICAgIHNlc3Npb25LZXk6IHVzZXJJbmZvLnNlc3Npb25LZXksXG4gICAgICAgICAgICAgICAgYXZhdGFyOiB1c2VySW5mby5hdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgbmlja05hbWU6IHVzZXJJbmZvLm5pY2tOYW1lLFxuICAgICAgICAgICAgICAgIHNleDogdXNlckluZm8uZ2VuZGVyLFxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiB1c2VySW5mby5lbmNyeXB0ZWREYXRhLFxuICAgICAgICAgICAgICAgIGl2OiB1c2VySW5mby5pdlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS53ZWNoYXRMb2dpbihkYXRhKTtcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgdGhpcy5sb2dpblN1Y2Nlc3MocmVzLnRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIGxvZ2luU3VjY2Vzcyh0b2tlbikge1xuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3Rva2VuJywgdG9rZW4pO1xuICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWVudTAnXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHZlcmlmeVBob25lKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGhvbmUgPT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aXAuc2hvd1RvYXN0KCfor7fovpPlhaXmiYvmnLrlj7fojrflj5bpqozor4HnoIEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucGhvbmUgIT09ICdudW1iZXInICYmIGlzTmFOKHRoaXMucGhvbmUpKSB7XG4gICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn5oKo6L6T5YWl55qE5omL5py65Y+35qC85byP5pyJ6K+vJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGhvbmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoISgvXjFbMzQ1Njc4OV1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmUpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aXAuc2hvd1RvYXN0KFwi5omL5py65Y+356CB5pyJ6K+v77yM6K+36YeN5aGrXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmxhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGltZUNoYW5nZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gNjA7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gY291bnQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VuZEludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lci0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsICYmIGNsZWFySW50ZXJ2YWwodGhpcy5zZW5kSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=