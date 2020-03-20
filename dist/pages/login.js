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
            code: '', // 验证码
            uuid: '',
            timer: 0,
            getPhone: '',
            sendInterval: null,
            showGetPhone: false,
            userInfo: {}, // 用户信息
            statusBarHeight: wx.getSystemInfoSync().statusBarHeight
        }, _this.methods = {
            // 手机号发送验证码登录
            tapLogin: function tapLogin() {
                // 微信授权登录
                if (this.userInfo.openId) {
                    this.wechatByPhone();
                } else {
                    // 短信验证码登录
                    if (this.verifyPhone()) {
                        this.smsLogin();
                    }
                }
            },

            // 微信授权登录-获取用户信息
            getUserInfo: function getUserInfo(event) {
                var _this2 = this;

                if (event.detail.errMsg == 'getUserInfo:ok') {
                    this.userInfo = event.detail.userInfo;
                    // 检测session是否过期
                    // wx.checkSession({
                    //     success: ()=> {
                    //         let userInfo = wx.getStorageSync('userInfo');
                    //         if(!userInfo) {
                    //             const store = getStore();
                    //             this.userInfo = store.getState().user.userInfo;
                    //         } else {
                    //             this.userInfo = userInfo;
                    //         }
                    //         // 已授权绑定
                    //         if(this.userInfo.isBindWechat && this.userInfo.openId) {
                    //             this.wechatLogin();  
                    //         } else {
                    //             // 弹出获取手机号
                    //             this.showGetPhone = true;
                    //         }
                    //         this.$apply();
                    //     },
                    //     fail: () => {
                    // 获取用户登录code
                    wx.login({
                        success: function success(res) {
                            if (res.code) {
                                _this2.userInfo.code = res.code;
                                _this2.getOpenid({ code: res.code });
                            }
                        }
                    });
                    //     }
                    // });
                }
            },

            // 获取手机号
            getPhoneNumber: function getPhoneNumber(event) {
                if (event.detail.errMsg == 'getPhoneNumber:ok') {
                    this.userInfo.encryptedData = event.detail.encryptedData;
                    this.userInfo.iv = event.detail.iv;
                    this.decryptPhone();
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
                                that.getCode({ phone: that.phone });
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

            // 取消授权手机号
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
        value: function onLoad(options) {
            if (options.q) {
                var url = decodeURIComponent(options.q);
                this.userInfo.qrCode = url.split('?qrcode=')[1];
            } else {
                if (wx.getStorageSync('token')) {
                    wx.switchTab({
                        url: '/pages/menu0'
                    });
                }
            }
        }
    }, {
        key: 'wechatByPhone',

        // 微信授权登录 - 录入手机号
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _userInfo, avatarUrl, openId, nickName, phone, gender, params, res;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _userInfo = this.userInfo, avatarUrl = _userInfo.avatarUrl, openId = _userInfo.openId, nickName = _userInfo.nickName, phone = _userInfo.phone, gender = _userInfo.gender;
                                params = {
                                    avatar: avatarUrl,
                                    code: this.code, // 手机验证码登录
                                    uuid: this.uuid, // 唯一标识
                                    openId: openId,
                                    nickName: nickName,
                                    sex: gender,
                                    phoneNumber: this.phone
                                };
                                _context.next = 4;
                                return api.wechatByPhone(params);

                            case 4:
                                res = _context.sent;

                                if (res.code == 200) {
                                    this.loginSuccess(res.token);
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function wechatByPhone() {
                return _ref2.apply(this, arguments);
            }

            return wechatByPhone;
        }()
        // 获取解密手机号

    }, {
        key: 'decryptPhone',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _userInfo2, code, iv, encryptedData, sessionKey, params, res;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _userInfo2 = this.userInfo, code = _userInfo2.code, iv = _userInfo2.iv, encryptedData = _userInfo2.encryptedData, sessionKey = _userInfo2.sessionKey;
                                params = {
                                    code: code,
                                    iv: iv,
                                    sessionKey: sessionKey,
                                    phoneNumber: encryptedData
                                };
                                _context2.next = 4;
                                return api.decryptPhone(params);

                            case 4:
                                res = _context2.sent;

                                if (res.code == 200) {
                                    wx.navigateTo({
                                        url: '/pages/bindPhone?tel=' + res.phoneNumber
                                    });
                                    this.showGetPhone = false;
                                    this.$apply();
                                }

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function decryptPhone() {
                return _ref3.apply(this, arguments);
            }

            return decryptPhone;
        }()
        // 通过code获取openid

    }, {
        key: 'getOpenid',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return api.getOpenid(params);

                            case 2:
                                res = _context3.sent;

                                if (res.code == 200) {
                                    this.userInfo.openId = res.open_id;
                                    this.userInfo.sessionKey = res.session_key;
                                    this.userInfo.isBindWechat = res.is_bind_wechat;
                                    wx.setStorageSync('userInfo', this.userInfo);
                                    store.dispatch({
                                        type: 'UPDATE_USER_INFO',
                                        userInfo: this.userInfo
                                    });
                                    // 已授权绑定
                                    if (this.userInfo.isBindWechat) {
                                        this.wechatLogin();
                                    } else {
                                        // 弹出获取手机号
                                        this.showGetPhone = true;
                                    }
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getOpenid(_x) {
                return _ref4.apply(this, arguments);
            }

            return getOpenid;
        }()

        // 手机验证码登录

    }, {
        key: 'smsLogin',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var params, res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                params = {
                                    phoneNumber: this.phone,
                                    code: this.code,
                                    uuid: this.uuid,
                                    qrCode: this.userInfo.qrCode
                                };
                                _context4.next = 3;
                                return api.smsLogin(params);

                            case 3:
                                res = _context4.sent;

                                if (res.code == 200) {
                                    this.loginSuccess(res.token);
                                }
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function smsLogin() {
                return _ref5.apply(this, arguments);
            }

            return smsLogin;
        }()
    }, {
        key: 'getCode',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return api.getCode(params);

                            case 2:
                                res = _context5.sent;

                                if (res.code == 200) {
                                    this.code = res.verifyCode;
                                    this.uuid = res.uuid;
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getCode(_x2) {
                return _ref6.apply(this, arguments);
            }

            return getCode;
        }()
        // 微信用户code登录

    }, {
        key: 'wechatLogin',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var _userInfo3, openId, qrCode, params, res;

                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _userInfo3 = this.userInfo, openId = _userInfo3.openId, qrCode = _userInfo3.qrCode;
                                params = {
                                    openId: openId,
                                    qrCode: qrCode
                                };
                                _context6.next = 4;
                                return api.wechatLogin(params);

                            case 4:
                                res = _context6.sent;

                                if (res.code == 200) {
                                    this.loginSuccess(res.token);
                                }

                            case 6:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function wechatLogin() {
                return _ref7.apply(this, arguments);
            }

            return wechatLogin;
        }()
        // 登录成功

    }, {
        key: 'loginSuccess',
        value: function loginSuccess(token) {
            wx.setStorageSync('token', token);
            wx.switchTab({
                url: '/pages/menu0'
            });
        }
        // 验证手机号是否正确

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
        // 时间改变

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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImFwaSIsInN0b3JlIiwiTG9naW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInBob25lIiwiY29kZSIsInV1aWQiLCJ0aW1lciIsImdldFBob25lIiwic2VuZEludGVydmFsIiwic2hvd0dldFBob25lIiwidXNlckluZm8iLCJzdGF0dXNCYXJIZWlnaHQiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwibWV0aG9kcyIsInRhcExvZ2luIiwib3BlbklkIiwid2VjaGF0QnlQaG9uZSIsInZlcmlmeVBob25lIiwic21zTG9naW4iLCJnZXRVc2VySW5mbyIsImV2ZW50IiwiZGV0YWlsIiwiZXJyTXNnIiwibG9naW4iLCJzdWNjZXNzIiwicmVzIiwiZ2V0T3BlbmlkIiwiZ2V0UGhvbmVOdW1iZXIiLCJlbmNyeXB0ZWREYXRhIiwiaXYiLCJkZWNyeXB0UGhvbmUiLCJnZXRTZW5kQ29kZSIsInRoYXQiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtIiwiZ2V0Q29kZSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInRpbWVDaGFuZ2UiLCJvbkNsb3NlUG9wdXAiLCJvblBob25lSW5wdXQiLCJlIiwib25Db2RlSW5wdXQiLCJvcHRpb25zIiwicSIsInVybCIsImRlY29kZVVSSUNvbXBvbmVudCIsInFyQ29kZSIsInNwbGl0IiwiZ2V0U3RvcmFnZVN5bmMiLCJzd2l0Y2hUYWIiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImdlbmRlciIsInBhcmFtcyIsImF2YXRhciIsInNleCIsInBob25lTnVtYmVyIiwibG9naW5TdWNjZXNzIiwidG9rZW4iLCJzZXNzaW9uS2V5IiwibmF2aWdhdGVUbyIsIiRhcHBseSIsIm9wZW5faWQiLCJzZXNzaW9uX2tleSIsImlzQmluZFdlY2hhdCIsImlzX2JpbmRfd2VjaGF0Iiwic2V0U3RvcmFnZVN5bmMiLCJkaXNwYXRjaCIsInR5cGUiLCJ3ZWNoYXRMb2dpbiIsInZlcmlmeUNvZGUiLCJ0aXAiLCJpc05hTiIsInRlc3QiLCJmbGFzZSIsImNvdW50Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7Ozs7Ozs7OztBQUVaLElBQU1DLFFBQVEsc0JBQWQ7QUFDQSx5QkFBU0EsS0FBVDs7SUFFcUJDLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixJQURuQjtBQUVMQyw2QkFBaUI7QUFDYiw0QkFBWSwrQkFEQztBQUViLDZCQUFhLGdDQUZBO0FBR2IsNEJBQVksK0JBSEM7QUFJYiw2QkFBYTtBQUpBO0FBRlosUyxRQVNUQyxJLEdBQU87QUFDSEMsbUJBQU8sRUFESjtBQUVIQyxrQkFBTSxFQUZILEVBRVE7QUFDWEMsa0JBQU0sRUFISDtBQUlIQyxtQkFBTyxDQUpKO0FBS0hDLHNCQUFVLEVBTFA7QUFNSEMsMEJBQWMsSUFOWDtBQU9IQywwQkFBYyxLQVBYO0FBUUhDLHNCQUFVLEVBUlAsRUFRWTtBQUNmQyw2QkFBaUJDLEdBQUdDLGlCQUFILEdBQXVCRjtBQVRyQyxTLFFBeUJQRyxPLEdBQVU7QUFDTjtBQUNBQyxvQkFGTSxzQkFFSztBQUNQO0FBQ0Esb0JBQUksS0FBS0wsUUFBTCxDQUFjTSxNQUFsQixFQUEwQjtBQUN0Qix5QkFBS0MsYUFBTDtBQUNILGlCQUZELE1BRU87QUFBSTtBQUNQLHdCQUFJLEtBQUtDLFdBQUwsRUFBSixFQUF3QjtBQUNwQiw2QkFBS0MsUUFBTDtBQUNIO0FBQ0o7QUFDSixhQVhLOztBQVlOO0FBQ0FDLHVCQWJNLHVCQWFNQyxLQWJOLEVBYWE7QUFBQTs7QUFDZixvQkFBSUEsTUFBTUMsTUFBTixDQUFhQyxNQUFiLElBQXVCLGdCQUEzQixFQUE2QztBQUN6Qyx5QkFBS2IsUUFBTCxHQUFnQlcs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QW5CLENBQXJCO0FBQ0EsK0JBQUtBLFlBQUwsR0FBb0IsSUFBcEI7QUFDSDtBQUNKLGlCQVJtQixFQVFqQixJQVJpQixDQUFwQjtBQVNIO0FBQ0o7Ozs7RUFqUThCMkUsZUFBS0MsSTs7a0JBQW5CdEYsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHtcbiAgICAgICAgc2V0U3RvcmUsXG4gICAgICAgIGdldFN0b3JlXG4gICAgfSBmcm9tICd3ZXB5LXJlZHV4J1xuICAgIGltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuLi9zdG9yZSdcbiAgICBpbXBvcnQgdGlwIGZyb20gXCIuLi91dGlscy90aXBcIlxuICAgIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xuXG4gICAgY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpXG4gICAgc2V0U3RvcmUoc3RvcmUpXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnmbvlvZUnLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgXCJ2YW4tY2VsbFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9jZWxsL2luZGV4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YW4tZmllbGRcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvZmllbGQvaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbi1pY29uXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2ljb24vaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbi1wb3B1cFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9wb3B1cC9pbmRleFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLCAgLy8g6aqM6K+B56CBXG4gICAgICAgICAgICB1dWlkOiAnJyxcbiAgICAgICAgICAgIHRpbWVyOiAwLFxuICAgICAgICAgICAgZ2V0UGhvbmU6ICcnLFxuICAgICAgICAgICAgc2VuZEludGVydmFsOiBudWxsLFxuICAgICAgICAgICAgc2hvd0dldFBob25lOiBmYWxzZSxcbiAgICAgICAgICAgIHVzZXJJbmZvOiB7fSwgIC8vIOeUqOaIt+S/oeaBr1xuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodFxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnEpIHtcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gZGVjb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMucSk7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5xckNvZGUgPSB1cmwuc3BsaXQoJz9xcmNvZGU9JylbMV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmKHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWVudTAnXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8vIOaJi+acuuWPt+WPkemAgemqjOivgeeggeeZu+W9lVxuICAgICAgICAgICAgdGFwTG9naW4oKSB7XG4gICAgICAgICAgICAgICAgLy8g5b6u5L+h5o6I5p2D55m75b2VXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudXNlckluZm8ub3BlbklkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VjaGF0QnlQaG9uZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7ICAgLy8g55+t5L+h6aqM6K+B56CB55m75b2VXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlcmlmeVBob25lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc21zTG9naW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDlvq7kv6HmjojmnYPnmbvlvZUt6I635Y+W55So5oi35L+h5oGvXG4gICAgICAgICAgICBnZXRVc2VySW5mbyhldmVudCkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudC5kZXRhaWwuZXJyTXNnID09ICdnZXRVc2VySW5mbzpvaycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IGV2ZW50LmRldGFpbC51c2VySW5mbztcbiAgICAgICAgICAgICAgICAgICAgLy8g5qOA5rWLc2Vzc2lvbuaYr+WQpui/h+acn1xuICAgICAgICAgICAgICAgICAgICAvLyB3eC5jaGVja1Nlc3Npb24oe1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgc3VjY2VzczogKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbGV0IHVzZXJJbmZvID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYoIXVzZXJJbmZvKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHN0b3JlLmdldFN0YXRlKCkudXNlci51c2VySW5mbztcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gdXNlckluZm87XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIOW3suaOiOadg+e7keWumlxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlmKHRoaXMudXNlckluZm8uaXNCaW5kV2VjaGF0ICYmIHRoaXMudXNlckluZm8ub3BlbklkKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMud2VjaGF0TG9naW4oKTsgIFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIC8vIOW8ueWHuuiOt+WPluaJi+acuuWPt1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNob3dHZXRQaG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmFpbDogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPlueUqOaIt+eZu+W9lWNvZGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5sb2dpbih7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uY29kZSA9IHJlcy5jb2RlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3BlbmlkKHtjb2RlOiByZXMuY29kZX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOiOt+WPluaJi+acuuWPt1xuICAgICAgICAgICAgZ2V0UGhvbmVOdW1iZXIoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZihldmVudC5kZXRhaWwuZXJyTXNnID09ICdnZXRQaG9uZU51bWJlcjpvaycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5lbmNyeXB0ZWREYXRhID0gZXZlbnQuZGV0YWlsLmVuY3J5cHRlZERhdGE7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uaXYgPSBldmVudC5kZXRhaWwuaXY7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjcnlwdFBob25lKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOWPkemAgemqjOivgeeggVxuICAgICAgICAgICAgZ2V0U2VuZENvZGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmVyaWZ5UGhvbmUoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn56Gu6K6k5omL5py65Y+356CBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDmiJHku6zlsIblj5HpgIHpqozor4HnoIHnn63kv6HliLDov5nkuKrlj7fnoIHvvJogKzg2ICR7dGhpcy5waG9uZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRDb2RlKHtwaG9uZTogdGhhdC5waG9uZX0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDlj5bmtojmjojmnYPmiYvmnLrlj7dcbiAgICAgICAgICAgIG9uQ2xvc2VQb3B1cCgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHZXRQaG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUGhvbmVJbnB1dChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5waG9uZSA9IGUuZGV0YWlsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ29kZUlucHV0KGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvZGUgPSBlLmRldGFpbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlvq7kv6HmjojmnYPnmbvlvZUgLSDlvZXlhaXmiYvmnLrlj7dcbiAgICAgICAgYXN5bmMgd2VjaGF0QnlQaG9uZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgYXZhdGFyVXJsLCBvcGVuSWQsIG5pY2tOYW1lLCBwaG9uZSwgZ2VuZGVyIH0gPSB0aGlzLnVzZXJJbmZvO1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBhdmF0YXI6IGF2YXRhclVybCxcbiAgICAgICAgICAgICAgICBjb2RlOiB0aGlzLmNvZGUsICAvLyDmiYvmnLrpqozor4HnoIHnmbvlvZVcbiAgICAgICAgICAgICAgICB1dWlkOiB0aGlzLnV1aWQsIC8vIOWUr+S4gOagh+ivhlxuICAgICAgICAgICAgICAgIG9wZW5JZDogb3BlbklkLFxuICAgICAgICAgICAgICAgIG5pY2tOYW1lOiBuaWNrTmFtZSxcbiAgICAgICAgICAgICAgICBzZXg6IGdlbmRlcixcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogdGhpcy5waG9uZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS53ZWNoYXRCeVBob25lKHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dpblN1Y2Nlc3MocmVzLnRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDojrflj5bop6Plr4bmiYvmnLrlj7dcbiAgICAgICAgYXN5bmMgZGVjcnlwdFBob25lKCkge1xuICAgICAgICAgICAgY29uc3QgeyBjb2RlLCBpdiwgZW5jcnlwdGVkRGF0YSwgc2Vzc2lvbktleSB9ID0gdGhpcy51c2VySW5mbztcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgICAgICBpdixcbiAgICAgICAgICAgICAgICBzZXNzaW9uS2V5LFxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiBlbmNyeXB0ZWREYXRhXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmRlY3J5cHRQaG9uZShwYXJhbXMpXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy9iaW5kUGhvbmU/dGVsPSR7cmVzLnBob25lTnVtYmVyfWBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHZXRQaG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6YCa6L+HY29kZeiOt+WPlm9wZW5pZFxuICAgICAgICBhc3luYyBnZXRPcGVuaWQocGFyYW1zKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmdldE9wZW5pZChwYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8ub3BlbklkID0gcmVzLm9wZW5faWQ7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5zZXNzaW9uS2V5ID0gcmVzLnNlc3Npb25fa2V5O1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uaXNCaW5kV2VjaGF0ID0gcmVzLmlzX2JpbmRfd2VjaGF0O1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycsIHRoaXMudXNlckluZm8pO1xuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VQREFURV9VU0VSX0lORk8nLFxuICAgICAgICAgICAgICAgICAgICB1c2VySW5mbzogdGhpcy51c2VySW5mb1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8g5bey5o6I5p2D57uR5a6aXG4gICAgICAgICAgICAgICAgaWYodGhpcy51c2VySW5mby5pc0JpbmRXZWNoYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWNoYXRMb2dpbigpOyAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5by55Ye66I635Y+W5omL5py65Y+3XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0dldFBob25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g5omL5py66aqM6K+B56CB55m75b2VXG4gICAgICAgIGFzeW5jIHNtc0xvZ2luKCkge1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogdGhpcy5waG9uZSxcbiAgICAgICAgICAgICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICAgICAgICAgICAgdXVpZDogdGhpcy51dWlkLFxuICAgICAgICAgICAgICAgIHFyQ29kZTogdGhpcy51c2VySW5mby5xckNvZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuc21zTG9naW4ocGFyYW1zKTtcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9naW5TdWNjZXNzKHJlcy50b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIGdldENvZGUocGFyYW1zKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmdldENvZGUocGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvZGUgPSByZXMudmVyaWZ5Q29kZTtcbiAgICAgICAgICAgICAgICB0aGlzLnV1aWQgPSByZXMudXVpZDtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOW+ruS/oeeUqOaIt2NvZGXnmbvlvZVcbiAgICAgICAgYXN5bmMgd2VjaGF0TG9naW4oKSB7XG4gICAgICAgICAgICBjb25zdCB7IG9wZW5JZCwgcXJDb2RlIH0gPSB0aGlzLnVzZXJJbmZvO1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBvcGVuSWQsXG4gICAgICAgICAgICAgICAgcXJDb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLndlY2hhdExvZ2luKHBhcmFtcyk7XG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgIHRoaXMubG9naW5TdWNjZXNzKHJlcy50b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLyDnmbvlvZXmiJDlip9cbiAgICAgICAgbG9naW5TdWNjZXNzKHRva2VuKSB7XG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndG9rZW4nLCB0b2tlbik7XG4gICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9tZW51MCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8g6aqM6K+B5omL5py65Y+35piv5ZCm5q2j56GuXG4gICAgICAgIHZlcmlmeVBob25lKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGhvbmUgPT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aXAuc2hvd1RvYXN0KCfor7fovpPlhaXmiYvmnLrlj7fojrflj5bpqozor4HnoIEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucGhvbmUgIT09ICdudW1iZXInICYmIGlzTmFOKHRoaXMucGhvbmUpKSB7XG4gICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn5oKo6L6T5YWl55qE5omL5py65Y+35qC85byP5pyJ6K+vJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGhvbmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoISgvXjFbMzQ1Njc4OV1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmUpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aXAuc2hvd1RvYXN0KFwi5omL5py65Y+356CB5pyJ6K+v77yM6K+36YeN5aGrXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmxhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5pe26Ze05pS55Y+YXG4gICAgICAgIHRpbWVDaGFuZ2UoKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IDYwO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IGNvdW50O1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbmRJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXItLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMuc2VuZEludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19