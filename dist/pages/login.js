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
                var qrCode = url.split('?qrcode=')[1];

                if (qrCode) {
                    this.userInfo.qrCode = qrCode;
                }
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
                                    this.loginSuccess(res);
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
                                    this.loginSuccess(res);
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
                                console.log('wx');
                                console.log(this.userInfo);
                                _userInfo3 = this.userInfo, openId = _userInfo3.openId, qrCode = _userInfo3.qrCode;
                                params = {
                                    openId: openId,
                                    qrCode: qrCode
                                };
                                _context6.next = 6;
                                return api.wechatLogin(params);

                            case 6:
                                res = _context6.sent;

                                if (res.code == 200) {
                                    this.loginSuccess(res);
                                }

                            case 8:
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
        value: function loginSuccess(data) {
            wx.setStorageSync('token', data.token);
            wx.setStorageSync('isBindDept', data.isBindDept);
            // 本单位用户，跳转至我的单位页面
            if (data.page == 'dept') {
                wx.navigateTo({
                    url: 'pages/userUnit'
                });
            } else {
                if (data.waring_msg) {
                    _tip2.default.showToast('您无权限查看该单位信息');
                }
                wx.switchTab({
                    url: '/pages/menu0'
                });
            }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImFwaSIsInN0b3JlIiwiTG9naW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInBob25lIiwiY29kZSIsInV1aWQiLCJ0aW1lciIsImdldFBob25lIiwic2VuZEludGVydmFsIiwic2hvd0dldFBob25lIiwidXNlckluZm8iLCJzdGF0dXNCYXJIZWlnaHQiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwibWV0aG9kcyIsInRhcExvZ2luIiwib3BlbklkIiwid2VjaGF0QnlQaG9uZSIsInZlcmlmeVBob25lIiwic21zTG9naW4iLCJnZXRVc2VySW5mbyIsImV2ZW50IiwiZGV0YWlsIiwiZXJyTXNnIiwibG9naW4iLCJzdWNjZXNzIiwicmVzIiwiZ2V0T3BlbmlkIiwiZ2V0UGhvbmVOdW1iZXIiLCJlbmNyeXB0ZWREYXRhIiwiaXYiLCJkZWNyeXB0UGhvbmUiLCJnZXRTZW5kQ29kZSIsInRoYXQiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtIiwiZ2V0Q29kZSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInRpbWVDaGFuZ2UiLCJvbkNsb3NlUG9wdXAiLCJvblBob25lSW5wdXQiLCJlIiwib25Db2RlSW5wdXQiLCJvcHRpb25zIiwicSIsInVybCIsImRlY29kZVVSSUNvbXBvbmVudCIsInFyQ29kZSIsInNwbGl0IiwiZ2V0U3RvcmFnZVN5bmMiLCJzd2l0Y2hUYWIiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImdlbmRlciIsInBhcmFtcyIsImF2YXRhciIsInNleCIsInBob25lTnVtYmVyIiwibG9naW5TdWNjZXNzIiwic2Vzc2lvbktleSIsIm5hdmlnYXRlVG8iLCIkYXBwbHkiLCJvcGVuX2lkIiwic2Vzc2lvbl9rZXkiLCJpc0JpbmRXZWNoYXQiLCJpc19iaW5kX3dlY2hhdCIsInNldFN0b3JhZ2VTeW5jIiwiZGlzcGF0Y2giLCJ0eXBlIiwid2VjaGF0TG9naW4iLCJ2ZXJpZnlDb2RlIiwiY29uc29sZSIsImxvZyIsInRva2VuIiwiaXNCaW5kRGVwdCIsInBhZ2UiLCJ3YXJpbmdfbXNnIiwidGlwIiwiaXNOYU4iLCJ0ZXN0IiwiZmxhc2UiLCJjb3VudCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIndlcHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0FBSUE7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7Ozs7Ozs7OztBQUVaLElBQU1DLFFBQVEsc0JBQWQ7QUFDQSx5QkFBU0EsS0FBVDs7SUFFcUJDLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixJQURuQjtBQUVMQyw2QkFBaUI7QUFDYiw0QkFBWSwrQkFEQztBQUViLDZCQUFhLGdDQUZBO0FBR2IsNEJBQVksK0JBSEM7QUFJYiw2QkFBYTtBQUpBO0FBRlosUyxRQVNUQyxJLEdBQU87QUFDSEMsbUJBQU8sRUFESjtBQUVIQyxrQkFBTSxFQUZILEVBRVE7QUFDWEMsa0JBQU0sRUFISDtBQUlIQyxtQkFBTyxDQUpKO0FBS0hDLHNCQUFVLEVBTFA7QUFNSEMsMEJBQWMsSUFOWDtBQU9IQywwQkFBYyxLQVBYO0FBUUhDLHNCQUFVLEVBUlAsRUFRWTtBQUNmQyw2QkFBaUJDLEdBQUdDLGlCQUFILEdBQXVCRjtBQVRyQyxTLFFBNkJQRyxPLEdBQVU7QUFDTjtBQUNBQyxvQkFGTSxzQkFFSztBQUNQO0FBQ0Esb0JBQUksS0FBS0wsUUFBTCxDQUFjTSxNQUFsQixFQUEwQjtBQUN0Qix5QkFBS0MsYUFBTDtBQUNILGlCQUZELE1BRU87QUFBSTtBQUNQLHdCQUFJLEtBQUtDLFdBQUwsRUFBSixFQUF3QjtBQUNwQiw2QkFBS0MsUUFBTDtBQUNIO0FBQ0o7QUFDSixhQVhLOztBQVlOO0FBQ0FDLHVCQWJNLHVCQWFNQyxLQWJOLEVBYWE7QUFBQTs7QUFDZixvQkFBSUEsTUFBTUMsTUFBTixDQUFhQyxNQUFiLElB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QUFLaEYsS0FBOUIsQ0FBTixFQUE2QztBQUN6QzhFLGtDQUFJMUMsU0FBSixDQUFjLFlBQWQ7QUFDQSwyQkFBTzZDLEtBQVA7QUFDSDtBQUNKO0FBQ0QsbUJBQU8sSUFBUDtBQUNIO0FBQ0Q7Ozs7cUNBQ2E7QUFBQTs7QUFDVCxnQkFBTUMsUUFBUSxFQUFkO0FBQ0EsaUJBQUsvRSxLQUFMLEdBQWErRSxLQUFiO0FBQ0EsZ0JBQUksQ0FBQyxLQUFLN0UsWUFBVixFQUF3QjtBQUNwQixxQkFBS0EsWUFBTCxHQUFvQjhFLFlBQVksWUFBTTtBQUNsQyx3QkFBSSxPQUFLaEYsS0FBTCxHQUFhLENBQWpCLEVBQW9CO0FBQ2hCLCtCQUFLQSxLQUFMO0FBQ0EsK0JBQUsyRCxNQUFMO0FBQ0gscUJBSEQsTUFHTztBQUNILCtCQUFLekQsWUFBTCxJQUFxQitFLGNBQWMsT0FBSy9FLFlBQW5CLENBQXJCO0FBQ0EsK0JBQUtBLFlBQUwsR0FBb0IsSUFBcEI7QUFDSDtBQUNKLGlCQVJtQixFQVFqQixJQVJpQixDQUFwQjtBQVNIO0FBQ0o7Ozs7RUFsUjhCZ0YsZUFBS1QsSTs7a0JBQW5CakYsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCB7XHJcbiAgICAgICAgc2V0U3RvcmUsXHJcbiAgICAgICAgZ2V0U3RvcmVcclxuICAgIH0gZnJvbSAnd2VweS1yZWR1eCdcclxuICAgIGltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuLi9zdG9yZSdcclxuICAgIGltcG9ydCB0aXAgZnJvbSBcIi4uL3V0aWxzL3RpcFwiXHJcbiAgICBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKClcclxuICAgIHNldFN0b3JlKHN0b3JlKVxyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnmbvlvZUnLFxyXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgICAgIFwidmFuLWNlbGxcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvY2VsbC9pbmRleFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YW4tZmllbGRcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvZmllbGQvaW5kZXhcIixcclxuICAgICAgICAgICAgICAgIFwidmFuLWljb25cIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvaWNvbi9pbmRleFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YW4tcG9wdXBcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvcG9wdXAvaW5kZXhcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHBob25lOiAnJyxcclxuICAgICAgICAgICAgY29kZTogJycsICAvLyDpqozor4HnoIFcclxuICAgICAgICAgICAgdXVpZDogJycsXHJcbiAgICAgICAgICAgIHRpbWVyOiAwLFxyXG4gICAgICAgICAgICBnZXRQaG9uZTogJycsXHJcbiAgICAgICAgICAgIHNlbmRJbnRlcnZhbDogbnVsbCxcclxuICAgICAgICAgICAgc2hvd0dldFBob25lOiBmYWxzZSxcclxuICAgICAgICAgICAgdXNlckluZm86IHt9LCAgLy8g55So5oi35L+h5oGvXHJcbiAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHRcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLnEpIHtcclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBkZWNvZGVVUklDb21wb25lbnQob3B0aW9ucy5xKTtcclxuICAgICAgICAgICAgICAgIGxldCBxckNvZGUgPSB1cmwuc3BsaXQoJz9xcmNvZGU9JylbMV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYocXJDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5xckNvZGUgPSBxckNvZGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZih3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9tZW51MCdcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICAvLyDmiYvmnLrlj7flj5HpgIHpqozor4HnoIHnmbvlvZVcclxuICAgICAgICAgICAgdGFwTG9naW4oKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlvq7kv6HmjojmnYPnmbvlvZVcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvLm9wZW5JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VjaGF0QnlQaG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgICAvLyDnn63kv6Hpqozor4HnoIHnmbvlvZVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52ZXJpZnlQaG9uZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc21zTG9naW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIOW+ruS/oeaOiOadg+eZu+W9lS3ojrflj5bnlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgZ2V0VXNlckluZm8oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5kZXRhaWwuZXJyTXNnID09ICdnZXRVc2VySW5mbzpvaycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gZXZlbnQuZGV0YWlsLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOajgOa1i3Nlc3Npb27mmK/lkKbov4fmnJ9cclxuICAgICAgICAgICAgICAgICAgICAvLyB3eC5jaGVja1Nlc3Npb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzdWNjZXNzOiAoKT0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIGxldCB1c2VySW5mbyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYoIXVzZXJJbmZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBnZXRTdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXIudXNlckluZm87XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSB1c2VySW5mbztcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIC8vIOW3suaOiOadg+e7keWumlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYodGhpcy51c2VySW5mby5pc0JpbmRXZWNoYXQgJiYgdGhpcy51c2VySW5mby5vcGVuSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLndlY2hhdExvZ2luKCk7ICBcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8g5by55Ye66I635Y+W5omL5py65Y+3XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zaG93R2V0UGhvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgZmFpbDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W55So5oi355m75b2VY29kZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmNvZGUgPSByZXMuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3BlbmlkKHtjb2RlOiByZXMuY29kZX0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyDojrflj5bmiYvmnLrlj7dcclxuICAgICAgICAgICAgZ2V0UGhvbmVOdW1iZXIoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmKGV2ZW50LmRldGFpbC5lcnJNc2cgPT0gJ2dldFBob25lTnVtYmVyOm9rJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uZW5jcnlwdGVkRGF0YSA9IGV2ZW50LmRldGFpbC5lbmNyeXB0ZWREYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uaXYgPSBldmVudC5kZXRhaWwuaXY7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNyeXB0UGhvbmUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g5Y+R6YCB6aqM6K+B56CBXHJcbiAgICAgICAgICAgIGdldFNlbmRDb2RlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmVyaWZ5UGhvbmUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn56Gu6K6k5omL5py65Y+356CBJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYOaIkeS7rOWwhuWPkemAgemqjOivgeeggeefreS/oeWIsOi/meS4quWPt+egge+8miArODYgJHt0aGlzLnBob25lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldENvZGUoe3Bob25lOiB0aGF0LnBob25lfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIOWPlua2iOaOiOadg+aJi+acuuWPt1xyXG4gICAgICAgICAgICBvbkNsb3NlUG9wdXAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHZXRQaG9uZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblBob25lSW5wdXQoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waG9uZSA9IGUuZGV0YWlsO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNvZGVJbnB1dChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvZGUgPSBlLmRldGFpbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlvq7kv6HmjojmnYPnmbvlvZUgLSDlvZXlhaXmiYvmnLrlj7dcclxuICAgICAgICBhc3luYyB3ZWNoYXRCeVBob25lKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGF2YXRhclVybCwgb3BlbklkLCBuaWNrTmFtZSwgcGhvbmUsIGdlbmRlciB9ID0gdGhpcy51c2VySW5mbztcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlLCAgLy8g5omL5py66aqM6K+B56CB55m75b2VXHJcbiAgICAgICAgICAgICAgICB1dWlkOiB0aGlzLnV1aWQsIC8vIOWUr+S4gOagh+ivhlxyXG4gICAgICAgICAgICAgICAgb3BlbklkOiBvcGVuSWQsXHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogbmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICBzZXg6IGdlbmRlcixcclxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiB0aGlzLnBob25lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS53ZWNoYXRCeVBob25lKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9naW5TdWNjZXNzKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6I635Y+W6Kej5a+G5omL5py65Y+3XHJcbiAgICAgICAgYXN5bmMgZGVjcnlwdFBob25lKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGNvZGUsIGl2LCBlbmNyeXB0ZWREYXRhLCBzZXNzaW9uS2V5IH0gPSB0aGlzLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgY29kZSxcclxuICAgICAgICAgICAgICAgIGl2LFxyXG4gICAgICAgICAgICAgICAgc2Vzc2lvbktleSxcclxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiBlbmNyeXB0ZWREYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5kZWNyeXB0UGhvbmUocGFyYW1zKVxyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IGAvcGFnZXMvYmluZFBob25lP3RlbD0ke3Jlcy5waG9uZU51bWJlcn1gXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0dldFBob25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOmAmui/h2NvZGXojrflj5ZvcGVuaWRcclxuICAgICAgICBhc3luYyBnZXRPcGVuaWQocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0T3BlbmlkKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8ub3BlbklkID0gcmVzLm9wZW5faWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLnNlc3Npb25LZXkgPSByZXMuc2Vzc2lvbl9rZXk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmlzQmluZFdlY2hhdCA9IHJlcy5pc19iaW5kX3dlY2hhdDtcclxuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycsIHRoaXMudXNlckluZm8pO1xyXG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVUERBVEVfVVNFUl9JTkZPJyxcclxuICAgICAgICAgICAgICAgICAgICB1c2VySW5mbzogdGhpcy51c2VySW5mb1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC8vIOW3suaOiOadg+e7keWumlxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy51c2VySW5mby5pc0JpbmRXZWNoYXQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndlY2hhdExvZ2luKCk7ICBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5by55Ye66I635Y+W5omL5py65Y+3XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93R2V0UGhvbmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyDmiYvmnLrpqozor4HnoIHnmbvlvZVcclxuICAgICAgICBhc3luYyBzbXNMb2dpbigpIHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiB0aGlzLnBob25lLFxyXG4gICAgICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlLFxyXG4gICAgICAgICAgICAgICAgdXVpZDogdGhpcy51dWlkLFxyXG4gICAgICAgICAgICAgICAgcXJDb2RlOiB0aGlzLnVzZXJJbmZvLnFyQ29kZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuc21zTG9naW4ocGFyYW1zKTtcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGdldENvZGUocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0Q29kZShwYXJhbXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvZGUgPSByZXMudmVyaWZ5Q29kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXVpZCA9IHJlcy51dWlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlvq7kv6HnlKjmiLdjb2Rl55m75b2VXHJcbiAgICAgICAgYXN5bmMgd2VjaGF0TG9naW4oKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3eCcpXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckluZm8pXHJcbiAgICAgICAgICAgIGNvbnN0IHsgb3BlbklkLCBxckNvZGUgfSA9IHRoaXMudXNlckluZm87XHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuSWQsXHJcbiAgICAgICAgICAgICAgICBxckNvZGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLndlY2hhdExvZ2luKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICB0aGlzLmxvZ2luU3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnmbvlvZXmiJDlip9cclxuICAgICAgICBsb2dpblN1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndG9rZW4nLCBkYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2lzQmluZERlcHQnLCBkYXRhLmlzQmluZERlcHQpO1xyXG4gICAgICAgICAgICAvLyDmnKzljZXkvY3nlKjmiLfvvIzot7Povazoh7PmiJHnmoTljZXkvY3pobXpnaJcclxuICAgICAgICAgICAgaWYoZGF0YS5wYWdlID09ICdkZXB0Jykge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAncGFnZXMvdXNlclVuaXQnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEud2FyaW5nX21zZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5zaG93VG9hc3QoJ+aCqOaXoOadg+mZkOafpeeci+ivpeWNleS9jeS/oeaBrycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWVudTAnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOmqjOivgeaJi+acuuWPt+aYr+WQpuato+ehrlxyXG4gICAgICAgIHZlcmlmeVBob25lKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5waG9uZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn6K+36L6T5YWl5omL5py65Y+36I635Y+W6aqM6K+B56CBJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBob25lICE9PSAnbnVtYmVyJyAmJiBpc05hTih0aGlzLnBob25lKSkge1xyXG4gICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn5oKo6L6T5YWl55qE5omL5py65Y+35qC85byP5pyJ6K+vJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucGhvbmUpIHtcclxuICAgICAgICAgICAgICAgIGlmICghKC9eMVszNDU2Nzg5XVxcZHs5fSQvLnRlc3QodGhpcy5waG9uZSkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdChcIuaJi+acuuWPt+eggeacieivr++8jOivt+mHjeWhq1wiKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmxhc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOaXtumXtOaUueWPmFxyXG4gICAgICAgIHRpbWVDaGFuZ2UoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gNjA7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBjb3VudDtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbmRJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXItLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMuc2VuZEludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=