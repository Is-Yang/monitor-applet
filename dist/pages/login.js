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
                                console.log(this.userInfo);
                                params = {
                                    phoneNumber: this.phone,
                                    code: this.code,
                                    uuid: this.uuid,
                                    qrCode: this.userInfo.qrCode
                                };

                                console.log(params);
                                _context4.next = 5;
                                return api.smsLogin(params);

                            case 5:
                                res = _context4.sent;

                                if (res.code == 200) {
                                    this.loginSuccess(res);
                                }
                                this.$apply();

                            case 8:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImFwaSIsInN0b3JlIiwiTG9naW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInBob25lIiwiY29kZSIsInV1aWQiLCJ0aW1lciIsImdldFBob25lIiwic2VuZEludGVydmFsIiwic2hvd0dldFBob25lIiwidXNlckluZm8iLCJzdGF0dXNCYXJIZWlnaHQiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwibWV0aG9kcyIsInRhcExvZ2luIiwib3BlbklkIiwid2VjaGF0QnlQaG9uZSIsInZlcmlmeVBob25lIiwic21zTG9naW4iLCJnZXRVc2VySW5mbyIsImV2ZW50IiwiZGV0YWlsIiwiZXJyTXNnIiwibG9naW4iLCJzdWNjZXNzIiwicmVzIiwiZ2V0T3BlbmlkIiwiZ2V0UGhvbmVOdW1iZXIiLCJlbmNyeXB0ZWREYXRhIiwiaXYiLCJkZWNyeXB0UGhvbmUiLCJnZXRTZW5kQ29kZSIsInRoYXQiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtIiwiZ2V0Q29kZSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInRpbWVDaGFuZ2UiLCJvbkNsb3NlUG9wdXAiLCJvblBob25lSW5wdXQiLCJlIiwib25Db2RlSW5wdXQiLCJvcHRpb25zIiwicSIsInVybCIsImRlY29kZVVSSUNvbXBvbmVudCIsInFyQ29kZSIsInNwbGl0IiwiZ2V0U3RvcmFnZVN5bmMiLCJzd2l0Y2hUYWIiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImdlbmRlciIsInBhcmFtcyIsImF2YXRhciIsInNleCIsInBob25lTnVtYmVyIiwibG9naW5TdWNjZXNzIiwic2Vzc2lvbktleSIsIm5hdmlnYXRlVG8iLCIkYXBwbHkiLCJvcGVuX2lkIiwic2Vzc2lvbl9rZXkiLCJpc0JpbmRXZWNoYXQiLCJpc19iaW5kX3dlY2hhdCIsInNldFN0b3JhZ2VTeW5jIiwiZGlzcGF0Y2giLCJ0eXBlIiwid2VjaGF0TG9naW4iLCJjb25zb2xlIiwibG9nIiwidmVyaWZ5Q29kZSIsInRva2VuIiwicGFnZSIsIndhcmluZ19tc2ciLCJ0aXAiLCJpc05hTiIsInRlc3QiLCJmbGFzZSIsImNvdW50Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwid2VweSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7Ozs7Ozs7Ozs7Ozs7O0FBRVosSUFBTUMsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOztJQUVxQkMsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLElBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDRCQUFZLCtCQURDO0FBRWIsNkJBQWEsZ0NBRkE7QUFHYiw0QkFBWSwrQkFIQztBQUliLDZCQUFhO0FBSkE7QUFGWixTLFFBU1RDLEksR0FBTztBQUNIQyxtQkFBTyxFQURKO0FBRUhDLGtCQUFNLEVBRkgsRUFFUTtBQUNYQyxrQkFBTSxFQUhIO0FBSUhDLG1CQUFPLENBSko7QUFLSEMsc0JBQVUsRUFMUDtBQU1IQywwQkFBYyxJQU5YO0FBT0hDLDBCQUFjLEtBUFg7QUFRSEMsc0JBQVUsRUFSUCxFQVFZO0FBQ2ZDLDZCQUFpQkMsR0FBR0MsaUJBQUgsR0FBdUJGO0FBVHJDLFMsUUE2QlBHLE8sR0FBVTtBQUNOO0FBQ0FDLG9CQUZNLHNCQUVLO0FBQ1A7QUFDQSxvQkFBSSxLQUFLTCxRQUFMLENBQWNNLE1BQWxCLEVBQTBCO0FBQ3RCLHlCQUFLQyxhQUFMO0FBQ0gsaUJBRkQsTUFFTztBQUFJO0FBQ1Asd0JBQUksS0FBS0MsV0FBTCxFQUFKLEVBQXdCO0FBQ3BCLDZCQUFLQyxRQUFMO0FBQ0g7QUFDSjtBQUNKLGFBWEs7O0FBWU47QUFDQUMsdUJBYk0sdUJBYU1DLEtBYk4sRUFhYTtBQUFBOztBQUNmLG9CQUFJQSxNQUFNQyxNQUFOLENBQWFDLE1BQWIsSUFBdUIsZ0JBQTNCLEVB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QXlCLEtBQUsvRSxLQUE5QixDQUFOLEVBQTZDO0FBQ3pDNkUsa0NBQUl6QyxTQUFKLENBQWMsWUFBZDtBQUNBLDJCQUFPNEMsS0FBUDtBQUNIO0FBQ0o7QUFDRCxtQkFBTyxJQUFQO0FBQ0g7QUFDRDs7OztxQ0FDYTtBQUFBOztBQUNULGdCQUFNQyxRQUFRLEVBQWQ7QUFDQSxpQkFBSzlFLEtBQUwsR0FBYThFLEtBQWI7QUFDQSxnQkFBSSxDQUFDLEtBQUs1RSxZQUFWLEVBQXdCO0FBQ3BCLHFCQUFLQSxZQUFMLEdBQW9CNkUsWUFBWSxZQUFNO0FBQ2xDLHdCQUFJLE9BQUsvRSxLQUFMLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEIsK0JBQUtBLEtBQUw7QUFDQSwrQkFBSzJELE1BQUw7QUFDSCxxQkFIRCxNQUdPO0FBQ0gsK0JBQUt6RCxZQUFMLElBQXFCOEUsY0FBYyxPQUFLOUUsWUFBbkIsQ0FBckI7QUFDQSwrQkFBS0EsWUFBTCxHQUFvQixJQUFwQjtBQUNIO0FBQ0osaUJBUm1CLEVBUWpCLElBUmlCLENBQXBCO0FBU0g7QUFDSjs7OztFQW5SOEIrRSxlQUFLVCxJOztrQkFBbkJoRixLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQge1xuICAgICAgICBzZXRTdG9yZSxcbiAgICAgICAgZ2V0U3RvcmVcbiAgICB9IGZyb20gJ3dlcHktcmVkdXgnXG4gICAgaW1wb3J0IGNvbmZpZ1N0b3JlIGZyb20gJy4uL3N0b3JlJ1xuICAgIGltcG9ydCB0aXAgZnJvbSBcIi4uL3V0aWxzL3RpcFwiXG4gICAgaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknXG5cbiAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKClcbiAgICBzZXRTdG9yZShzdG9yZSlcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eZu+W9lScsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICBcInZhbi1jZWxsXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2NlbGwvaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbi1maWVsZFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9maWVsZC9pbmRleFwiLFxuICAgICAgICAgICAgICAgIFwidmFuLWljb25cIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvaWNvbi9pbmRleFwiLFxuICAgICAgICAgICAgICAgIFwidmFuLXBvcHVwXCI6IFwiLi4vY29tcG9uZW50cy92YW50L3BvcHVwL2luZGV4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgcGhvbmU6ICcnLFxuICAgICAgICAgICAgY29kZTogJycsICAvLyDpqozor4HnoIFcbiAgICAgICAgICAgIHV1aWQ6ICcnLFxuICAgICAgICAgICAgdGltZXI6IDAsXG4gICAgICAgICAgICBnZXRQaG9uZTogJycsXG4gICAgICAgICAgICBzZW5kSW50ZXJ2YWw6IG51bGwsXG4gICAgICAgICAgICBzaG93R2V0UGhvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdXNlckluZm86IHt9LCAgLy8g55So5oi35L+h5oGvXG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHd4LmdldFN5c3RlbUluZm9TeW5jKCkuc3RhdHVzQmFySGVpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucSkge1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBkZWNvZGVVUklDb21wb25lbnQob3B0aW9ucy5xKTtcbiAgICAgICAgICAgICAgICBsZXQgcXJDb2RlID0gdXJsLnNwbGl0KCc/cXJjb2RlPScpWzFdO1xuXG4gICAgICAgICAgICAgICAgaWYocXJDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8ucXJDb2RlID0gcXJDb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYod3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJykpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9tZW51MCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLy8g5omL5py65Y+35Y+R6YCB6aqM6K+B56CB55m75b2VXG4gICAgICAgICAgICB0YXBMb2dpbigpIHtcbiAgICAgICAgICAgICAgICAvLyDlvq7kv6HmjojmnYPnmbvlvZVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VySW5mby5vcGVuSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWNoYXRCeVBob25lKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgICAvLyDnn63kv6Hpqozor4HnoIHnmbvlvZVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmVyaWZ5UGhvbmUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbXNMb2dpbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOW+ruS/oeaOiOadg+eZu+W9lS3ojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgICAgICAgIGdldFVzZXJJbmZvKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRldGFpbC5lcnJNc2cgPT0gJ2dldFVzZXJJbmZvOm9rJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gZXZlbnQuZGV0YWlsLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgICAgICAvLyDmo4DmtYtzZXNzaW9u5piv5ZCm6L+H5pyfXG4gICAgICAgICAgICAgICAgICAgIC8vIHd4LmNoZWNrU2Vzc2lvbih7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzdWNjZXNzOiAoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgdXNlckluZm8gPSB3eC5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZighdXNlckluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBnZXRTdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSB1c2VySW5mbztcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8g5bey5o6I5p2D57uR5a6aXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYodGhpcy51c2VySW5mby5pc0JpbmRXZWNoYXQgJiYgdGhpcy51c2VySW5mby5vcGVuSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy53ZWNoYXRMb2dpbigpOyAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8g5by55Ye66I635Y+W5omL5py65Y+3XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2hvd0dldFBob25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBmYWlsOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W55So5oi355m75b2VY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5jb2RlID0gcmVzLmNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRPcGVuaWQoe2NvZGU6IHJlcy5jb2RlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g6I635Y+W5omL5py65Y+3XG4gICAgICAgICAgICBnZXRQaG9uZU51bWJlcihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50LmRldGFpbC5lcnJNc2cgPT0gJ2dldFBob25lTnVtYmVyOm9rJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmVuY3J5cHRlZERhdGEgPSBldmVudC5kZXRhaWwuZW5jcnlwdGVkRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5pdiA9IGV2ZW50LmRldGFpbC5pdjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNyeXB0UGhvbmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5Y+R6YCB6aqM6K+B56CBXG4gICAgICAgICAgICBnZXRTZW5kQ29kZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52ZXJpZnlQaG9uZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmiYvmnLrlj7fnoIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYOaIkeS7rOWwhuWPkemAgemqjOivgeeggeefreS/oeWIsOi/meS4quWPt+egge+8miArODYgJHt0aGlzLnBob25lfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldENvZGUoe3Bob25lOiB0aGF0LnBob25lfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WPkemAgeaIkOWKnycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOWPlua2iOaOiOadg+aJi+acuuWPt1xuICAgICAgICAgICAgb25DbG9zZVBvcHVwKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0dldFBob25lID0gZmFsc2U7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25QaG9uZUlucHV0KGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBob25lID0gZS5kZXRhaWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25Db2RlSW5wdXQoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29kZSA9IGUuZGV0YWlsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOW+ruS/oeaOiOadg+eZu+W9lSAtIOW9leWFpeaJi+acuuWPt1xuICAgICAgICBhc3luYyB3ZWNoYXRCeVBob25lKCkge1xuICAgICAgICAgICAgY29uc3QgeyBhdmF0YXJVcmwsIG9wZW5JZCwgbmlja05hbWUsIHBob25lLCBnZW5kZXIgfSA9IHRoaXMudXNlckluZm87XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyVXJsLFxuICAgICAgICAgICAgICAgIGNvZGU6IHRoaXMuY29kZSwgIC8vIOaJi+acuumqjOivgeeggeeZu+W9lVxuICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMudXVpZCwgLy8g5ZSv5LiA5qCH6K+GXG4gICAgICAgICAgICAgICAgb3BlbklkOiBvcGVuSWQsXG4gICAgICAgICAgICAgICAgbmlja05hbWU6IG5pY2tOYW1lLFxuICAgICAgICAgICAgICAgIHNleDogZ2VuZGVyLFxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiB0aGlzLnBob25lXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLndlY2hhdEJ5UGhvbmUocGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3VjY2VzcyhyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOiOt+WPluino+WvhuaJi+acuuWPt1xuICAgICAgICBhc3luYyBkZWNyeXB0UGhvbmUoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGNvZGUsIGl2LCBlbmNyeXB0ZWREYXRhLCBzZXNzaW9uS2V5IH0gPSB0aGlzLnVzZXJJbmZvO1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgICAgIGl2LFxuICAgICAgICAgICAgICAgIHNlc3Npb25LZXksXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGVuY3J5cHRlZERhdGFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZGVjcnlwdFBob25lKHBhcmFtcylcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL2JpbmRQaG9uZT90ZWw9JHtyZXMucGhvbmVOdW1iZXJ9YFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0dldFBob25lID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDpgJrov4djb2Rl6I635Y+Wb3BlbmlkXG4gICAgICAgIGFzeW5jIGdldE9wZW5pZChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0T3BlbmlkKHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5vcGVuSWQgPSByZXMub3Blbl9pZDtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLnNlc3Npb25LZXkgPSByZXMuc2Vzc2lvbl9rZXk7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5pc0JpbmRXZWNoYXQgPSByZXMuaXNfYmluZF93ZWNoYXQ7XG4gICAgICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJywgdGhpcy51c2VySW5mbyk7XG4gICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVVBEQVRFX1VTRVJfSU5GTycsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJbmZvOiB0aGlzLnVzZXJJbmZvXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAvLyDlt7LmjojmnYPnu5HlrppcbiAgICAgICAgICAgICAgICBpZih0aGlzLnVzZXJJbmZvLmlzQmluZFdlY2hhdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndlY2hhdExvZ2luKCk7ICBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDlvLnlh7rojrflj5bmiYvmnLrlj7dcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93R2V0UGhvbmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvLyDmiYvmnLrpqozor4HnoIHnmbvlvZVcbiAgICAgICAgYXN5bmMgc21zTG9naW4oKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJJbmZvKVxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogdGhpcy5waG9uZSxcbiAgICAgICAgICAgICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICAgICAgICAgICAgdXVpZDogdGhpcy51dWlkLFxuICAgICAgICAgICAgICAgIHFyQ29kZTogdGhpcy51c2VySW5mby5xckNvZGVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmFtcyk7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnNtc0xvZ2luKHBhcmFtcyk7XG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3VjY2VzcyhyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBnZXRDb2RlKHBhcmFtcykge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5nZXRDb2RlKHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2RlID0gcmVzLnZlcmlmeUNvZGU7XG4gICAgICAgICAgICAgICAgdGhpcy51dWlkID0gcmVzLnV1aWQ7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlvq7kv6HnlKjmiLdjb2Rl55m75b2VXG4gICAgICAgIGFzeW5jIHdlY2hhdExvZ2luKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3d4JylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckluZm8pXG4gICAgICAgICAgICBjb25zdCB7IG9wZW5JZCwgcXJDb2RlIH0gPSB0aGlzLnVzZXJJbmZvO1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBvcGVuSWQsXG4gICAgICAgICAgICAgICAgcXJDb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLndlY2hhdExvZ2luKHBhcmFtcyk7XG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgIHRoaXMubG9naW5TdWNjZXNzKHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLyDnmbvlvZXmiJDlip9cbiAgICAgICAgbG9naW5TdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd0b2tlbicsIGRhdGEudG9rZW4pO1xuICAgICAgICAgICAgLy8g5pys5Y2V5L2N55So5oi377yM6Lez6L2s6Iez5oiR55qE5Y2V5L2N6aG16Z2iXG4gICAgICAgICAgICBpZihkYXRhLnBhZ2UgPT0gJ2RlcHQnKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ3BhZ2VzL3VzZXJVbml0J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLndhcmluZ19tc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn5oKo5peg5p2D6ZmQ5p+l55yL6K+l5Y2V5L2N5L+h5oGvJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9tZW51MCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOmqjOivgeaJi+acuuWPt+aYr+WQpuato+ehrlxuICAgICAgICB2ZXJpZnlQaG9uZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBob25lID09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn6K+36L6T5YWl5omL5py65Y+36I635Y+W6aqM6K+B56CBJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBob25lICE9PSAnbnVtYmVyJyAmJiBpc05hTih0aGlzLnBob25lKSkge1xuICAgICAgICAgICAgICAgIHRpcC5zaG93VG9hc3QoJ+aCqOi+k+WFpeeahOaJi+acuuWPt+agvOW8j+acieivrycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBob25lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoL14xWzM0NTY3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdChcIuaJi+acuuWPt+eggeacieivr++8jOivt+mHjeWhq1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZsYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaXtumXtOaUueWPmFxuICAgICAgICB0aW1lQ2hhbmdlKCkge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSA2MDtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBjb3VudDtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZW5kSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLnNlbmRJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==