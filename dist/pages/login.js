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
                    // 获取用户登录code
                    wx.login({
                        success: function success(res) {
                            if (res.code) {
                                _this2.userInfo.code = res.code;
                                _this2.getOpenid({ code: res.code });
                            }
                        }
                    });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImFwaSIsInN0b3JlIiwiTG9naW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInBob25lIiwiY29kZSIsInV1aWQiLCJ0aW1lciIsImdldFBob25lIiwic2VuZEludGVydmFsIiwic2hvd0dldFBob25lIiwidXNlckluZm8iLCJzdGF0dXNCYXJIZWlnaHQiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwibWV0aG9kcyIsInRhcExvZ2luIiwib3BlbklkIiwid2VjaGF0QnlQaG9uZSIsInZlcmlmeVBob25lIiwic21zTG9naW4iLCJnZXRVc2VySW5mbyIsImV2ZW50IiwiZGV0YWlsIiwiZXJyTXNnIiwibG9naW4iLCJzdWNjZXNzIiwicmVzIiwiZ2V0T3BlbmlkIiwiZ2V0UGhvbmVOdW1iZXIiLCJlbmNyeXB0ZWREYXRhIiwiaXYiLCJkZWNyeXB0UGhvbmUiLCJnZXRTZW5kQ29kZSIsInRoYXQiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtIiwiZ2V0Q29kZSIsInNob3dUb2FzdCIsImljb24iLCJkdXJhdGlvbiIsInRpbWVDaGFuZ2UiLCJvbkNsb3NlUG9wdXAiLCJvblBob25lSW5wdXQiLCJlIiwib25Db2RlSW5wdXQiLCJvcHRpb25zIiwicSIsInVybCIsImRlY29kZVVSSUNvbXBvbmVudCIsInFyQ29kZSIsInNwbGl0IiwiYXZhdGFyVXJsIiwibmlja05hbWUiLCJnZW5kZXIiLCJwYXJhbXMiLCJhdmF0YXIiLCJzZXgiLCJwaG9uZU51bWJlciIsImxvZ2luU3VjY2VzcyIsInNlc3Npb25LZXkiLCJuYXZpZ2F0ZVRvIiwiJGFwcGx5Iiwib3Blbl9pZCIsInNlc3Npb25fa2V5IiwiaXNCaW5kV2VjaGF0IiwiaXNfYmluZF93ZWNoYXQiLCJzZXRTdG9yYWdlU3luYyIsImRpc3BhdGNoIiwidHlwZSIsIndlY2hhdExvZ2luIiwidmVyaWZ5Q29kZSIsImNvbnNvbGUiLCJsb2ciLCJ0b2tlbiIsImlzQmluZERlcHQiLCJwYWdlIiwid2FyaW5nX21zZyIsInRpcCIsInN3aXRjaFRhYiIsImlzTmFOIiwidGVzdCIsImZsYXNlIiwiY291bnQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiLCJ3ZXB5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7QUFFWixJQUFNQyxRQUFRLHNCQUFkO0FBQ0EseUJBQVNBLEtBQVQ7O0lBRXFCQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsSUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsNEJBQVksK0JBREM7QUFFYiw2QkFBYSxnQ0FGQTtBQUdiLDRCQUFZLCtCQUhDO0FBSWIsNkJBQWE7QUFKQTtBQUZaLFMsUUFTVEMsSSxHQUFPO0FBQ0hDLG1CQUFPLEVBREo7QUFFSEMsa0JBQU0sRUFGSCxFQUVRO0FBQ1hDLGtCQUFNLEVBSEg7QUFJSEMsbUJBQU8sQ0FKSjtBQUtIQyxzQkFBVSxFQUxQO0FBTUhDLDBCQUFjLElBTlg7QUFPSEMsMEJBQWMsS0FQWDtBQVFIQyxzQkFBVSxFQVJQLEVBUVk7QUFDZkMsNkJBQWlCQyxHQUFHQyxpQkFBSCxHQUF1QkY7QUFUckMsUyxRQXVCUEcsTyxHQUFVO0FBQ047QUFDQUMsb0JBRk0sc0JBRUs7QUFDUDtBQUNBLG9CQUFJLEtBQUtMLFFBQUwsQ0FBY00sTUFBbEIsRUFBMEI7QUFDdEIseUJBQUtDLGFBQUw7QUFDSCxpQkFGRCxNQUVPO0FBQUk7QUFDUCx3QkFBSSxLQUFLQyxXQUFMLEVBQUosRUFBd0I7QUFDcEIsNkJBQUtDLFFBQUw7QUFDSDtBQUNKO0FBQ0osYUFYSzs7QUFZTjtBQUNBQyx1QkFiTSx1QkFhTUMsS0FiTixFQWFhO0FBQUE7O0FBQ2Ysb0JBQUlBLE1BQU1DLE1BQU4sQ0FBYUMsTUFBYixJQUF1QixnQkFBM0IsRUFBNkM7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O0FBQ2xDLHdCQUFJLE9BQUsvRSxLQUFMLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEIsK0JBQUtBLEtBQUw7QUFDQSwrQkFBS3lELE1BQUw7QUFDSCxxQkFIRCxNQUdPO0FBQ0gsK0JBQUt2RCxZQUFMLElBQXFCOEUsY0FBYyxPQUFLOUUsWUFBbkIsQ0FBckI7QUFDQSwrQkFBS0EsWUFBTCxHQUFvQixJQUFwQjtBQUNIO0FBQ0osaUJBUm1CLEVBUWpCLElBUmlCLENBQXBCO0FBU0g7QUFDSjs7OztFQXRQOEIrRSxlQUFLVixJOztrQkFBbkIvRSxLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQge1xuICAgICAgICBzZXRTdG9yZSxcbiAgICAgICAgZ2V0U3RvcmVcbiAgICB9IGZyb20gJ3dlcHktcmVkdXgnXG4gICAgaW1wb3J0IGNvbmZpZ1N0b3JlIGZyb20gJy4uL3N0b3JlJ1xuICAgIGltcG9ydCB0aXAgZnJvbSBcIi4uL3V0aWxzL3RpcFwiXG4gICAgaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknXG5cbiAgICBjb25zdCBzdG9yZSA9IGNvbmZpZ1N0b3JlKClcbiAgICBzZXRTdG9yZShzdG9yZSlcblxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eZu+W9lScsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICBcInZhbi1jZWxsXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2NlbGwvaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbi1maWVsZFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9maWVsZC9pbmRleFwiLFxuICAgICAgICAgICAgICAgIFwidmFuLWljb25cIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvaWNvbi9pbmRleFwiLFxuICAgICAgICAgICAgICAgIFwidmFuLXBvcHVwXCI6IFwiLi4vY29tcG9uZW50cy92YW50L3BvcHVwL2luZGV4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgcGhvbmU6ICcnLFxuICAgICAgICAgICAgY29kZTogJycsICAvLyDpqozor4HnoIFcbiAgICAgICAgICAgIHV1aWQ6ICcnLFxuICAgICAgICAgICAgdGltZXI6IDAsXG4gICAgICAgICAgICBnZXRQaG9uZTogJycsXG4gICAgICAgICAgICBzZW5kSW50ZXJ2YWw6IG51bGwsXG4gICAgICAgICAgICBzaG93R2V0UGhvbmU6IGZhbHNlLFxuICAgICAgICAgICAgdXNlckluZm86IHt9LCAgLy8g55So5oi35L+h5oGvXG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHd4LmdldFN5c3RlbUluZm9TeW5jKCkuc3RhdHVzQmFySGVpZ2h0XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMucSkge1xuICAgICAgICAgICAgICAgIGxldCB1cmwgPSBkZWNvZGVVUklDb21wb25lbnQob3B0aW9ucy5xKTtcbiAgICAgICAgICAgICAgICBsZXQgcXJDb2RlID0gdXJsLnNwbGl0KCc/cXJjb2RlPScpWzFdO1xuXG4gICAgICAgICAgICAgICAgaWYocXJDb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8ucXJDb2RlID0gcXJDb2RlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvLyDmiYvmnLrlj7flj5HpgIHpqozor4HnoIHnmbvlvZVcbiAgICAgICAgICAgIHRhcExvZ2luKCkge1xuICAgICAgICAgICAgICAgIC8vIOW+ruS/oeaOiOadg+eZu+W9lVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvLm9wZW5JZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLndlY2hhdEJ5UGhvbmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAgIC8vIOefreS/oemqjOivgeeggeeZu+W9lVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52ZXJpZnlQaG9uZSgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNtc0xvZ2luKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5b6u5L+h5o6I5p2D55m75b2VLeiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICAgICAgZ2V0VXNlckluZm8oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZGV0YWlsLmVyck1zZyA9PSAnZ2V0VXNlckluZm86b2snKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSBldmVudC5kZXRhaWwudXNlckluZm87XG4gICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPlueUqOaIt+eZu+W9lWNvZGVcbiAgICAgICAgICAgICAgICAgICAgd3gubG9naW4oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihyZXMuY29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmNvZGUgPSByZXMuY29kZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRPcGVuaWQoe2NvZGU6IHJlcy5jb2RlfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDojrflj5bmiYvmnLrlj7dcbiAgICAgICAgICAgIGdldFBob25lTnVtYmVyKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYoZXZlbnQuZGV0YWlsLmVyck1zZyA9PSAnZ2V0UGhvbmVOdW1iZXI6b2snKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uZW5jcnlwdGVkRGF0YSA9IGV2ZW50LmRldGFpbC5lbmNyeXB0ZWREYXRhO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLml2ID0gZXZlbnQuZGV0YWlsLml2O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlY3J5cHRQaG9uZSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDlj5HpgIHpqozor4HnoIFcbiAgICAgICAgICAgIGdldFNlbmRDb2RlKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlcmlmeVBob25lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ehruiupOaJi+acuuWPt+eggScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBg5oiR5Lus5bCG5Y+R6YCB6aqM6K+B56CB55+t5L+h5Yiw6L+Z5Liq5Y+356CB77yaICs4NiAke3RoaXMucGhvbmV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0Q29kZSh7cGhvbmU6IHRoYXQucGhvbmV9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+R6YCB5oiQ5YqfJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNoYW5nZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5Y+W5raI5o6I5p2D5omL5py65Y+3XG4gICAgICAgICAgICBvbkNsb3NlUG9wdXAoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93R2V0UGhvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblBob25lSW5wdXQoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNvZGVJbnB1dChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2RlID0gZS5kZXRhaWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g5b6u5L+h5o6I5p2D55m75b2VIC0g5b2V5YWl5omL5py65Y+3XG4gICAgICAgIGFzeW5jIHdlY2hhdEJ5UGhvbmUoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGF2YXRhclVybCwgb3BlbklkLCBuaWNrTmFtZSwgcGhvbmUsIGdlbmRlciB9ID0gdGhpcy51c2VySW5mbztcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXJVcmwsXG4gICAgICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlLCAgLy8g5omL5py66aqM6K+B56CB55m75b2VXG4gICAgICAgICAgICAgICAgdXVpZDogdGhpcy51dWlkLCAvLyDllK/kuIDmoIfor4ZcbiAgICAgICAgICAgICAgICBvcGVuSWQ6IG9wZW5JZCxcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogbmlja05hbWUsXG4gICAgICAgICAgICAgICAgc2V4OiBnZW5kZXIsXG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHRoaXMucGhvbmVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkud2VjaGF0QnlQaG9uZShwYXJhbXMpO1xuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubG9naW5TdWNjZXNzKHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6I635Y+W6Kej5a+G5omL5py65Y+3XG4gICAgICAgIGFzeW5jIGRlY3J5cHRQaG9uZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgY29kZSwgaXYsIGVuY3J5cHRlZERhdGEsIHNlc3Npb25LZXkgfSA9IHRoaXMudXNlckluZm87XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIGNvZGUsXG4gICAgICAgICAgICAgICAgaXYsXG4gICAgICAgICAgICAgICAgc2Vzc2lvbktleSxcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogZW5jcnlwdGVkRGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5kZWNyeXB0UGhvbmUocGFyYW1zKVxuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAvcGFnZXMvYmluZFBob25lP3RlbD0ke3Jlcy5waG9uZU51bWJlcn1gXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93R2V0UGhvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOmAmui/h2NvZGXojrflj5ZvcGVuaWRcbiAgICAgICAgYXN5bmMgZ2V0T3BlbmlkKHBhcmFtcykge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5nZXRPcGVuaWQocGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLm9wZW5JZCA9IHJlcy5vcGVuX2lkO1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uc2Vzc2lvbktleSA9IHJlcy5zZXNzaW9uX2tleTtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmlzQmluZFdlY2hhdCA9IHJlcy5pc19iaW5kX3dlY2hhdDtcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCB0aGlzLnVzZXJJbmZvKTtcbiAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdVUERBVEVfVVNFUl9JTkZPJyxcbiAgICAgICAgICAgICAgICAgICAgdXNlckluZm86IHRoaXMudXNlckluZm9cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC8vIOW3suaOiOadg+e7keWumlxuICAgICAgICAgICAgICAgIGlmKHRoaXMudXNlckluZm8uaXNCaW5kV2VjaGF0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VjaGF0TG9naW4oKTsgIFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOW8ueWHuuiOt+WPluaJi+acuuWPt1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dHZXRQaG9uZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIOaJi+acuumqjOivgeeggeeZu+W9lVxuICAgICAgICBhc3luYyBzbXNMb2dpbigpIHtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IHRoaXMucGhvbmUsXG4gICAgICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlLFxuICAgICAgICAgICAgICAgIHV1aWQ6IHRoaXMudXVpZCxcbiAgICAgICAgICAgICAgICBxckNvZGU6IHRoaXMudXNlckluZm8ucXJDb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnNtc0xvZ2luKHBhcmFtcyk7XG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3VjY2VzcyhyZXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBnZXRDb2RlKHBhcmFtcykge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5nZXRDb2RlKHBhcmFtcyk7XG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2RlID0gcmVzLnZlcmlmeUNvZGU7XG4gICAgICAgICAgICAgICAgdGhpcy51dWlkID0gcmVzLnV1aWQ7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlvq7kv6HnlKjmiLdjb2Rl55m75b2VXG4gICAgICAgIGFzeW5jIHdlY2hhdExvZ2luKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3d4JylcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMudXNlckluZm8pXG4gICAgICAgICAgICBjb25zdCB7IG9wZW5JZCwgcXJDb2RlIH0gPSB0aGlzLnVzZXJJbmZvO1xuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBvcGVuSWQsXG4gICAgICAgICAgICAgICAgcXJDb2RlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLndlY2hhdExvZ2luKHBhcmFtcyk7XG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgIHRoaXMubG9naW5TdWNjZXNzKHJlcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAvLyDnmbvlvZXmiJDlip9cbiAgICAgICAgbG9naW5TdWNjZXNzKGRhdGEpIHtcbiAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCd0b2tlbicsIGRhdGEudG9rZW4pO1xuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2lzQmluZERlcHQnLCBkYXRhLmlzQmluZERlcHQpO1xuICAgICAgICAgICAgLy8g5pys5Y2V5L2N55So5oi377yM6Lez6L2s6Iez5oiR55qE5Y2V5L2N6aG16Z2iXG4gICAgICAgICAgICBpZihkYXRhLnBhZ2UgPT0gJ2RlcHQnKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJ3BhZ2VzL3VzZXJVbml0J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLndhcmluZ19tc2cpIHtcbiAgICAgICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn5oKo5peg5p2D6ZmQ5p+l55yL6K+l5Y2V5L2N5L+h5oGvJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9tZW51MCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOmqjOivgeaJi+acuuWPt+aYr+WQpuato+ehrlxuICAgICAgICB2ZXJpZnlQaG9uZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBob25lID09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn6K+36L6T5YWl5omL5py65Y+36I635Y+W6aqM6K+B56CBJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBob25lICE9PSAnbnVtYmVyJyAmJiBpc05hTih0aGlzLnBob25lKSkge1xuICAgICAgICAgICAgICAgIHRpcC5zaG93VG9hc3QoJ+aCqOi+k+WFpeeahOaJi+acuuWPt+agvOW8j+acieivrycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBob25lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoL14xWzM0NTY3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdChcIuaJi+acuuWPt+eggeacieivr++8jOivt+mHjeWhq1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZsYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIOaXtumXtOaUueWPmFxuICAgICAgICB0aW1lQ2hhbmdlKCkge1xuICAgICAgICAgICAgY29uc3QgY291bnQgPSA2MDtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBjb3VudDtcbiAgICAgICAgICAgIGlmICghdGhpcy5zZW5kSW50ZXJ2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyLS07XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgJiYgY2xlYXJJbnRlcnZhbCh0aGlzLnNlbmRJbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==