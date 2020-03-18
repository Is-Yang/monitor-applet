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
        value: function onLoad() {
            if (wx.getStorageSync('token')) {
                wx.switchTab({
                    url: '/pages/menu0'
                });
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
                                    phoneNumber: phone || this.phone
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
                                    this.phone = res.phoneNumber;
                                    this.userInfo.phone = res.phoneNumber;
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
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return api.smsLogin({
                                    phoneNumber: this.phone,
                                    code: this.code,
                                    uuid: this.uuid
                                });

                            case 2:
                                res = _context4.sent;

                                if (res.code == 200) {
                                    this.loginSuccess(res.token);
                                }
                                this.$apply();

                            case 5:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function smsLogin(_x2) {
                return _ref5.apply(this, arguments);
            }

            return smsLogin;
        }()
    }, {
        key: 'getCode',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var res;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return api.getCode({
                                    phone: this.phone
                                });

                            case 2:
                                res = _context5.sent;

                                this.code = res.verifyCode;
                                this.uuid = res.uuid;
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getCode() {
                return _ref6.apply(this, arguments);
            }

            return getCode;
        }()
        // 微信用户code登录

    }, {
        key: 'wechatLogin',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var res;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                _context6.next = 2;
                                return api.wechatLogin({ openId: this.userInfo.openId });

                            case 2:
                                res = _context6.sent;

                                if (res.code == 200) {
                                    this.loginSuccess(res.token);
                                }

                            case 4:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImFwaSIsInN0b3JlIiwiTG9naW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInBob25lIiwiY29kZSIsInV1aWQiLCJ0aW1lciIsImdldFBob25lIiwic2VuZEludGVydmFsIiwic2hvd0dldFBob25lIiwidXNlckluZm8iLCJzdGF0dXNCYXJIZWlnaHQiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwibWV0aG9kcyIsInRhcExvZ2luIiwib3BlbklkIiwid2VjaGF0QnlQaG9uZSIsInZlcmlmeVBob25lIiwic21zTG9naW4iLCJnZXRVc2VySW5mbyIsImV2ZW50IiwiZGV0YWlsIiwiZXJyTXNnIiwibG9naW4iLCJzdWNjZXNzIiwicmVzIiwiZ2V0T3BlbmlkIiwiZ2V0UGhvbmVOdW1iZXIiLCJlbmNyeXB0ZWREYXRhIiwiaXYiLCJkZWNyeXB0UGhvbmUiLCJnZXRTZW5kQ29kZSIsInRoYXQiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtIiwiZ2V0Q29kZSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInRpbWVDaGFuZ2UiLCJvbkNsb3NlUG9wdXAiLCJvblBob25lSW5wdXQiLCJlIiwib25Db2RlSW5wdXQiLCJnZXRTdG9yYWdlU3luYyIsInN3aXRjaFRhYiIsInVybCIsImF2YXRhclVybCIsIm5pY2tOYW1lIiwiZ2VuZGVyIiwicGFyYW1zIiwiYXZhdGFyIiwic2V4IiwicGhvbmVOdW1iZXIiLCJsb2dpblN1Y2Nlc3MiLCJ0b2tlbiIsInNlc3Npb25LZXkiLCIkYXBwbHkiLCJvcGVuX2lkIiwic2Vzc2lvbl9rZXkiLCJpc0JpbmRXZWNoYXQiLCJpc19iaW5kX3dlY2hhdCIsInNldFN0b3JhZ2VTeW5jIiwiZGlzcGF0Y2giLCJ0eXBlIiwid2VjaGF0TG9naW4iLCJ2ZXJpZnlDb2RlIiwidGlwIiwiaXNOYU4iLCJ0ZXN0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TUFBTSxLQUFLcEUsS0FBWCxDQUF0QyxFQUF5RDtBQUNyRG1FLDhCQUFJL0IsU0FBSixDQUFjLGFBQWQ7QUFDQSx1QkFBTyxLQUFQO0FBQ0g7QUFDRCxnQkFBSSxLQUFLcEMsS0FBVCxFQUFnQjtBQUNaLG9CQUFJLENBQUUsb0JBQW9CcUUsSUFBcEIsQ0FBeUIsS0FBS3JFLEtBQTlCLENBQU4sRUFBNkM7QUFDekNtRSxrQ0FBSS9CLFNBQUosQ0FBYyxZQUFkO0FBQ0EsMkJBQU9rQyxLQUFQO0FBQ0g7QUFDSjtBQUNELG1CQUFPLElBQVA7QUFDSDtBQUNEOzs7O3FDQUNhO0FBQUE7O0FBQ1QsZ0JBQU1DLFFBQVEsRUFBZDtBQUNBLGlCQUFLcEUsS0FBTCxHQUFhb0UsS0FBYjtBQUNBLGdCQUFJLENBQUMsS0FBS2xFLFlBQVYsRUFBd0I7QUFDcEIscUJBQUtBLFlBQUwsR0FBb0JtRSxZQUFZLFlBQU07QUFDbEMsd0JBQUksT0FBS3JFLEtBQUwsR0FBYSxDQUFqQixFQUFvQjtBQUNoQiwrQkFBS0EsS0FBTDtBQUNBLCtCQUFLc0QsTUFBTDtBQUNILHFCQUhELE1BR087QUFDSCwrQkFBS3BELFlBQUwsSUFBcUJvRSxjQUFjLE9BQUtwRSxZQUFuQixDQUFyQjtBQUNBLCtCQUFLQSxZQUFMLEdBQW9CLElBQXBCO0FBQ0g7QUFDSixpQkFSbUIsRUFRakIsSUFSaUIsQ0FBcEI7QUFTSDtBQUNKOzs7O0VBcFA4QnFFLGVBQUtDLEk7O2tCQUFuQmhGLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB7XG4gICAgICAgIHNldFN0b3JlLFxuICAgICAgICBnZXRTdG9yZVxuICAgIH0gZnJvbSAnd2VweS1yZWR1eCdcbiAgICBpbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi4vc3RvcmUnXG4gICAgaW1wb3J0IHRpcCBmcm9tIFwiLi4vdXRpbHMvdGlwXCJcbiAgICBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcblxuICAgIGNvbnN0IHN0b3JlID0gY29uZmlnU3RvcmUoKVxuICAgIHNldFN0b3JlKHN0b3JlKVxuXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55m75b2VJyxcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgIFwidmFuLWNlbGxcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvY2VsbC9pbmRleFwiLFxuICAgICAgICAgICAgICAgIFwidmFuLWZpZWxkXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2ZpZWxkL2luZGV4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YW4taWNvblwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9pY29uL2luZGV4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YW4tcG9wdXBcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvcG9wdXAvaW5kZXhcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBwaG9uZTogJycsXG4gICAgICAgICAgICBjb2RlOiAnJywgIC8vIOmqjOivgeeggVxuICAgICAgICAgICAgdXVpZDogJycsXG4gICAgICAgICAgICB0aW1lcjogMCxcbiAgICAgICAgICAgIGdldFBob25lOiAnJyxcbiAgICAgICAgICAgIHNlbmRJbnRlcnZhbDogbnVsbCxcbiAgICAgICAgICAgIHNob3dHZXRQaG9uZTogZmFsc2UsXG4gICAgICAgICAgICB1c2VySW5mbzoge30sICAvLyDnlKjmiLfkv6Hmga9cbiAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIGlmKHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpKSB7XG4gICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL21lbnUwJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLy8g5omL5py65Y+35Y+R6YCB6aqM6K+B56CB55m75b2VXG4gICAgICAgICAgICB0YXBMb2dpbigpIHtcbiAgICAgICAgICAgICAgICAvLyDlvq7kv6HmjojmnYPnmbvlvZVcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VySW5mby5vcGVuSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWNoYXRCeVBob25lKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgICAvLyDnn63kv6Hpqozor4HnoIHnmbvlvZVcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmVyaWZ5UGhvbmUoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbXNMb2dpbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOW+ruS/oeaOiOadg+eZu+W9lS3ojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgICAgICAgIGdldFVzZXJJbmZvKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmRldGFpbC5lcnJNc2cgPT0gJ2dldFVzZXJJbmZvOm9rJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gZXZlbnQuZGV0YWlsLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgICAgICAvLyDmo4DmtYtzZXNzaW9u5piv5ZCm6L+H5pyfXG4gICAgICAgICAgICAgICAgICAgIC8vIHd4LmNoZWNrU2Vzc2lvbih7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBzdWNjZXNzOiAoKT0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBsZXQgdXNlckluZm8gPSB3eC5nZXRTdG9yYWdlU3luYygndXNlckluZm8nKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBpZighdXNlckluZm8pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgY29uc3Qgc3RvcmUgPSBnZXRTdG9yZSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSB1c2VySW5mbztcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgLy8g5bey5o6I5p2D57uR5a6aXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWYodGhpcy51c2VySW5mby5pc0JpbmRXZWNoYXQgJiYgdGhpcy51c2VySW5mby5vcGVuSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy53ZWNoYXRMb2dpbigpOyAgXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8g5by55Ye66I635Y+W5omL5py65Y+3XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuc2hvd0dldFBob25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBmYWlsOiAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W55So5oi355m75b2VY29kZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LmxvZ2luKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5jb2RlID0gcmVzLmNvZGU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRPcGVuaWQoe2NvZGU6IHJlcy5jb2RlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g6I635Y+W5omL5py65Y+3XG4gICAgICAgICAgICBnZXRQaG9uZU51bWJlcihldmVudCkge1xuICAgICAgICAgICAgICAgIGlmKGV2ZW50LmRldGFpbC5lcnJNc2cgPT0gJ2dldFBob25lTnVtYmVyOm9rJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmVuY3J5cHRlZERhdGEgPSBldmVudC5kZXRhaWwuZW5jcnlwdGVkRGF0YTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5pdiA9IGV2ZW50LmRldGFpbC5pdjtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWNyeXB0UGhvbmUoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5Y+R6YCB6aqM6K+B56CBXG4gICAgICAgICAgICBnZXRTZW5kQ29kZSgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52ZXJpZnlQaG9uZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfnoa7orqTmiYvmnLrlj7fnoIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogYOaIkeS7rOWwhuWPkemAgemqjOivgeeggeefreS/oeWIsOi/meS4quWPt+egge+8miArODYgJHt0aGlzLnBob25lfWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlybSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldENvZGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+R6YCB5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5Y+W5raI5o6I5p2D5omL5py65Y+3XG4gICAgICAgICAgICBvbkNsb3NlUG9wdXAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93R2V0UGhvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblBob25lSW5wdXQoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNvZGVJbnB1dChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2RlID0gZS5kZXRhaWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5b6u5L+h5o6I5p2D55m75b2VIC0g5b2V5YWl5omL5py65Y+3XG4gICAgICAgIGFzeW5jIHdlY2hhdEJ5UGhvbmUoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGF2YXRhclVybCwgb3BlbklkLCBuaWNrTmFtZSwgcGhvbmUsIGdlbmRlciB9ID0gdGhpcy51c2VySW5mbztcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlLCAgLy8g5omL5py66aqM6K+B56CB55m75b2VXG4gICAgICAgICAgICAgICAgdXVpZDogdGhpcy51dWlkLCAvLyDllK/kuIDmoIfor4ZcbiAgICAgICAgICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogbmlja05hbWUsXG4gICAgICAgICAgICAgICAgc2V4OiBnZW5kZXIsXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHBob25lIHx8IHRoaXMucGhvbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkud2VjaGF0QnlQaG9uZShwYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9naW5TdWNjZXNzKHJlcy50b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6I635Y+W6Kej5a+G5omL5py65Y+3XG4gICAgICAgIGFzeW5jIGRlY3J5cHRQaG9uZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29kZSwgaXYsIGVuY3J5cHRlZERhdGEsIHNlc3Npb25LZXkgfSA9IHRoaXMudXNlckluZm87XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICAgICAgaXYsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbktleSxcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogZW5jcnlwdGVkRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5kZWNyeXB0UGhvbmUocGFyYW1zKVxuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucGhvbmUgPSByZXMucGhvbmVOdW1iZXI7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5waG9uZSA9IHJlcy5waG9uZU51bWJlcjtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHZXRQaG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6YCa6L+HY29kZeiOt+WPlm9wZW5pZFxuICAgICAgICBhc3luYyBnZXRPcGVuaWQocGFyYW1zKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmdldE9wZW5pZChwYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8ub3BlbklkID0gcmVzLm9wZW5faWQ7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5zZXNzaW9uS2V5ID0gcmVzLnNlc3Npb25fa2V5O1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uaXNCaW5kV2VjaGF0ID0gcmVzLmlzX2JpbmRfd2VjaGF0O1xuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycsIHRoaXMudXNlckluZm8pO1xuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VQREFURV9VU0VSX0lORk8nLFxuICAgICAgICAgICAgICAgICAgICB1c2VySW5mbzogdGhpcy51c2VySW5mb1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLy8g5bey5o6I5p2D57uR5a6aXG4gICAgICAgICAgICAgICAgaWYodGhpcy51c2VySW5mby5pc0JpbmRXZWNoYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWNoYXRMb2dpbigpOyAgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5by55Ye66I635Y+W5omL5py65Y+3XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0dldFBob25lID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8g5omL5py66aqM6K+B56CB55m75b2VXG4gICAgICAgIGFzeW5jIHNtc0xvZ2luKHBhcmFtcykge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5zbXNMb2dpbih7XG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHRoaXMucGhvbmUsXG4gICAgICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMudXVpZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3VjY2VzcyhyZXMudG9rZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBnZXRDb2RlKCkge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5nZXRDb2RlKHtcbiAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IHJlcy52ZXJpZnlDb2RlO1xuICAgICAgICAgICAgdGhpcy51dWlkID0gcmVzLnV1aWQ7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOW+ruS/oeeUqOaIt2NvZGXnmbvlvZVcbiAgICAgICAgYXN5bmMgd2VjaGF0TG9naW4oKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLndlY2hhdExvZ2luKHtvcGVuSWQ6IHRoaXMudXNlckluZm8ub3BlbklkfSk7XG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgIHRoaXMubG9naW5TdWNjZXNzKHJlcy50b2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLyDnmbvlvZXmiJDlip9cbiAgICAgICAgbG9naW5TdWNjZXNzKHRva2VuKSB7XG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndG9rZW4nLCB0b2tlbik7XG4gICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9tZW51MCdcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgLy8g6aqM6K+B5omL5py65Y+35piv5ZCm5q2j56GuXG4gICAgICAgIHZlcmlmeVBob25lKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGhvbmUgPT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aXAuc2hvd1RvYXN0KCfor7fovpPlhaXmiYvmnLrlj7fojrflj5bpqozor4HnoIEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucGhvbmUgIT09ICdudW1iZXInICYmIGlzTmFOKHRoaXMucGhvbmUpKSB7XG4gICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn5oKo6L6T5YWl55qE5omL5py65Y+35qC85byP5pyJ6K+vJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGhvbmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoISgvXjFbMzQ1Njc4OV1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmUpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aXAuc2hvd1RvYXN0KFwi5omL5py65Y+356CB5pyJ6K+v77yM6K+36YeN5aGrXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmxhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5pe26Ze05pS55Y+YXG4gICAgICAgIHRpbWVDaGFuZ2UoKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IDYwO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IGNvdW50O1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbmRJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXItLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMuc2VuZEludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19