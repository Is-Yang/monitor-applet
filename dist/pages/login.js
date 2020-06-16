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
            showMessage: false,
            flag: {
                to: 'index', // 标识跳转到哪个页面
                isMsg: false // 是否有消息弹出
            },
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
                    wx.checkSession({
                        success: function success() {
                            console.log('===未失效====');
                            _this2.userInfo = wx.getStorageSync('userInfo');
                            console.log(_this2.userInfo);
                            if (_this2.userInfo) {
                                _this2.judgeBindWechat();
                            } else {
                                console.log('====userInfo缓存过期，重新登录获取=====');
                                _this2.handleWxLogin(event);
                            }
                        },
                        fail: function fail() {
                            console.log('====已失效，重新登录获取=====');
                            _this2.handleWxLogin(event);
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
            onAuthMesg: function onAuthMesg() {
                var _this3 = this;

                var tmplId = _wepy2.default.$instance.globalData.tmplId;
                wx.requestSubscribeMessage({
                    tmplIds: [tmplId],
                    success: function success(res) {
                        console.log('suc:', res);
                        if (res[tmplId] == 'accept') {
                            _this3.showMessage = false;
                            _this3.toPage();
                        } else if (res[tmplId] == 'reject') {
                            // 用户拒绝授权
                            _this3.showTips();
                        }
                        _this3.showMessage = false;
                        _this3.toPage();
                    },
                    fail: function fail(err) {
                        if (err.errCode == '20004') {
                            _this3.showTips();
                        } else if (err.errCode == '20001') {
                            wx.showToast({
                                title: '订阅号模板id信息错误，请监测配置',
                                icon: 'none',
                                duration: 1500
                            });
                        }
                        console.log('err:', err);
                    }
                });
            },

            // 取消授权手机号
            onClosePhonePopup: function onClosePhonePopup() {
                this.showGetPhone = false;
            },
            onCloseMessagePopup: function onCloseMessagePopup() {
                this.showMessage = false;
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
        key: 'handleWxLogin',
        value: function handleWxLogin(event) {
            var _this4 = this;

            // 获取用户登录code
            wx.login({
                success: function success(res) {
                    if (res.code) {
                        var _event$detail = event.detail,
                            userInfo = _event$detail.userInfo,
                            iv = _event$detail.iv,
                            encryptedData = _event$detail.encryptedData;

                        _this4.userInfo = userInfo;
                        _this4.userInfo.iv = iv;
                        _this4.userInfo.encryptedData = encryptedData;
                        _this4.userInfo.code = res.code;
                        _this4.getOpenid({ code: res.code });
                    }
                }
            });
        }
    }, {
        key: 'showTips',
        value: function showTips() {
            var _this5 = this;

            wx.showModal({
                title: '温馨提示',
                content: "您的消息订阅主开关已关闭，如需要消息推送服务，请点击确定跳转设置页面打开授权后再次尝试。",
                success: function success(modal) {
                    if (modal.confirm) {
                        // 点击确定
                        wx.openSetting({
                            withSubscriptions: true,
                            success: function success(res) {
                                if (res.errMsg == 'openSetting:ok') {
                                    _this5.showMessage = false;
                                    _this5.toPage();
                                }
                            }
                        });
                    }
                }
            });
        }
        // 获取是否绑定微信

    }, {
        key: 'judgeBindWechat',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log(this.userInfo.unionId);
                                _context.next = 3;
                                return api.bindWeChatState({ unionId: this.userInfo.unionId });

                            case 3:
                                res = _context.sent;

                                console.log(res);
                                if (res.code == 200) {
                                    this.userInfo.isBindWechat = res.data;
                                    console.log('绑定状态：', res.data);
                                    // 已授权绑定
                                    if (res.data) {
                                        this.wechatLogin();
                                    } else {
                                        // 弹出获取手机号
                                        this.showGetPhone = true;
                                    }
                                    this.$apply();
                                }

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function judgeBindWechat() {
                return _ref2.apply(this, arguments);
            }

            return judgeBindWechat;
        }()
        // 获取unionId

    }, {
        key: 'decryptUnionId',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var _userInfo, iv, encryptedData, sessionKey, params, res;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _userInfo = this.userInfo, iv = _userInfo.iv, encryptedData = _userInfo.encryptedData, sessionKey = _userInfo.sessionKey;
                                params = {
                                    iv: iv,
                                    sessionKey: sessionKey,
                                    encryptedData: encryptedData
                                };
                                _context2.next = 4;
                                return api.decryptUnionId(params);

                            case 4:
                                res = _context2.sent;

                                if (res.code == 200) {
                                    this.userInfo.unionId = res.unionId;
                                    wx.setStorageSync('userInfo', this.userInfo);
                                    store.dispatch({
                                        type: 'UPDATE_USER_INFO',
                                        userInfo: this.userInfo
                                    });
                                    this.judgeBindWechat();
                                } else if (res.code == 500 && res.msg == '加密字符串解密失败') {
                                    // 当用户缓存过期，但sessionKey未过期时，需要重新去wx.login，这时候就会报错，需要用户重新点击去获取才行
                                    wx.showToast({
                                        title: '信息获取失败，请重新获取',
                                        icon: 'none',
                                        duration: 1500
                                    });
                                } else {
                                    wx.showToast({
                                        title: result.msg || '服务器异常',
                                        icon: 'none',
                                        duration: 1500
                                    });
                                }

                            case 6:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function decryptUnionId() {
                return _ref3.apply(this, arguments);
            }

            return decryptUnionId;
        }()

        // 微信授权登录 - 录入手机号

    }, {
        key: 'wechatByPhone',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _userInfo2, avatarUrl, openId, nickName, phone, gender, unionId, params, res;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _userInfo2 = this.userInfo, avatarUrl = _userInfo2.avatarUrl, openId = _userInfo2.openId, nickName = _userInfo2.nickName, phone = _userInfo2.phone, gender = _userInfo2.gender, unionId = _userInfo2.unionId;
                                params = {
                                    avatar: avatarUrl,
                                    code: this.code, // 手机验证码登录
                                    uuid: this.uuid, // 唯一标识
                                    openId: openId,
                                    nickName: nickName,
                                    sex: gender,
                                    unionId: unionId,
                                    phoneNumber: this.phone
                                };
                                _context3.next = 4;
                                return api.wechatByPhone(params);

                            case 4:
                                res = _context3.sent;

                                if (res.code == 200) {
                                    this.loginSuccess(res);
                                }

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function wechatByPhone() {
                return _ref4.apply(this, arguments);
            }

            return wechatByPhone;
        }()
        // 获取解密手机号

    }, {
        key: 'decryptPhone',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _userInfo3, code, iv, encryptedData, sessionKey, params, res;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _userInfo3 = this.userInfo, code = _userInfo3.code, iv = _userInfo3.iv, encryptedData = _userInfo3.encryptedData, sessionKey = _userInfo3.sessionKey;
                                params = {
                                    code: code,
                                    iv: iv,
                                    sessionKey: sessionKey,
                                    phoneNumber: encryptedData
                                };
                                _context4.next = 4;
                                return api.decryptPhone(params);

                            case 4:
                                res = _context4.sent;

                                if (res.code == 200 && res.phoneNumber) {
                                    wx.navigateTo({
                                        url: '/pages/bindPhone?tel=' + res.phoneNumber
                                    });
                                    this.showGetPhone = false;
                                    this.$apply();
                                }

                            case 6:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function decryptPhone() {
                return _ref5.apply(this, arguments);
            }

            return decryptPhone;
        }()
        // 通过code获取openid

    }, {
        key: 'getOpenid',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return api.getOpenid(params);

                            case 2:
                                res = _context5.sent;

                                if (res.code == 200) {
                                    this.userInfo.openId = res.open_id;
                                    this.userInfo.sessionKey = res.session_key;
                                    this.decryptUnionId();
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getOpenid(_x) {
                return _ref6.apply(this, arguments);
            }

            return getOpenid;
        }()

        // 手机验证码登录

    }, {
        key: 'smsLogin',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var params, res;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                params = {
                                    phoneNumber: this.phone,
                                    code: this.code,
                                    uuid: this.uuid,
                                    qrCode: this.userInfo.qrCode
                                };
                                _context6.next = 3;
                                return api.smsLogin(params);

                            case 3:
                                res = _context6.sent;

                                if (res.code == 200) {
                                    this.loginSuccess(res);
                                }
                                this.$apply();

                            case 6:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function smsLogin() {
                return _ref7.apply(this, arguments);
            }

            return smsLogin;
        }()
    }, {
        key: 'getCode',
        value: function () {
            var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                            case 0:
                                _context7.next = 2;
                                return api.getCode(params);

                            case 2:
                                res = _context7.sent;

                                if (res.code == 200) {
                                    this.code = res.verifyCode;
                                    this.uuid = res.uuid;
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));

            function getCode(_x2) {
                return _ref8.apply(this, arguments);
            }

            return getCode;
        }()
        // 微信用户code登录

    }, {
        key: 'wechatLogin',
        value: function () {
            var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                var _userInfo4, unionId, qrCode, params, res;

                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                            case 0:
                                _userInfo4 = this.userInfo, unionId = _userInfo4.unionId, qrCode = _userInfo4.qrCode;
                                params = {
                                    unionId: unionId,
                                    qrCode: qrCode
                                };
                                _context8.next = 4;
                                return api.wechatLogin(params);

                            case 4:
                                res = _context8.sent;

                                if (res.code == 200) {
                                    this.loginSuccess(res);
                                }

                            case 6:
                            case 'end':
                                return _context8.stop();
                        }
                    }
                }, _callee8, this);
            }));

            function wechatLogin() {
                return _ref9.apply(this, arguments);
            }

            return wechatLogin;
        }()
        // 登录成功

    }, {
        key: 'loginSuccess',
        value: function loginSuccess(data) {
            var _this6 = this;

            wx.setStorageSync('token', data.token);
            wx.setStorageSync('isBindDept', data.isBindDept);
            this.flag = {
                to: data.page,
                isMsg: data.waring_msg || false
            };
            if (data.isBindDept) {
                // 判断用户是否开启订阅消息
                wx.getSetting({
                    withSubscriptions: true,
                    success: function success(res) {
                        var subscriptionsSetting = res.subscriptionsSetting;

                        console.log('setting', res);
                        var tempId = _wepy2.default.$instance.globalData.tmplId;
                        if (subscriptionsSetting && subscriptionsSetting.itemSettings && subscriptionsSetting.itemSettings[tempId] == 'accept') {
                            _this6.toPage();
                        } else {
                            _this6.showMessage = true;
                            _this6.$apply();
                        }
                    }
                });
            } else {
                this.toPage();
            }
        }
        // 跳转页面

    }, {
        key: 'toPage',
        value: function toPage() {
            // 本单位用户，跳转至我的单位页面
            if (this.flag.to == 'dept') {
                wx.navigateTo({
                    url: 'pages/userUnit'
                });
            } else {
                if (this.flag.isMsg) {
                    _tip2.default.showToast('您无权限查看该单位信息');
                }
                wx.redirectTo({
                    url: '/pages/index'
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
                    return false;
                }
            }
            return true;
        }
        // 时间改变

    }, {
        key: 'timeChange',
        value: function timeChange() {
            var _this7 = this;

            var count = 60;
            this.timer = count;
            if (!this.sendInterval) {
                this.sendInterval = setInterval(function () {
                    if (_this7.timer > 0) {
                        _this7.timer--;
                        _this7.$apply();
                    } else {
                        _this7.sendInterval && clearInterval(_this7.sendInterval);
                        _this7.sendInterval = null;
                    }
                }, 1000);
            }
        }
    }]);

    return Login;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImFwaSIsInN0b3JlIiwiTG9naW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInBob25lIiwiY29kZSIsInV1aWQiLCJ0aW1lciIsImdldFBob25lIiwic2VuZEludGVydmFsIiwic2hvd0dldFBob25lIiwic2hvd01lc3NhZ2UiLCJmbGFnIiwidG8iLCJpc01zZyIsInVzZXJJbmZvIiwic3RhdHVzQmFySGVpZ2h0Iiwid3giLCJnZXRTeXN0ZW1JbmZvU3luYyIsIm1ldGhvZHMiLCJ0YXBMb2dpbiIsIm9wZW5JZCIsIndlY2hhdEJ5UGhvbmUiLCJ2ZXJpZnlQaG9uZSIsInNtc0xvZ2luIiwiZ2V0VXNlckluZm8iLCJldmVudCIsImRldGFpbCIsImVyck1zZyIsImNoZWNrU2Vzc2lvbiIsInN1Y2Nlc3MiLCJjb25zb2xlIiwibG9nIiwiZ2V0U3RvcmFnZVN5bmMiLCJqdWRnZUJpbmRXZWNoYXQiLCJoYW5kbGVXeExvZ2luIiwiZmFpbCIsImdldFBob25lTnVtYmVyIiwiZW5jcnlwdGVkRGF0YSIsIml2IiwiZGVjcnlwdFBob25lIiwiZ2V0U2VuZENvZGUiLCJ0aGF0Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwicmVzIiwiY29uZmlybSIsImdldENvZGUiLCJzaG93VG9hc3QiLCJpY29uIiwiZHVyYXRpb24iLCJ0aW1lQ2hhbmdlIiwib25BdXRoTWVzZyIsInRtcGxJZCIsIndlcHkiLCIkaW5zdGFuY2UiLCJnbG9iYWxEYXRhIiwicmVxdWVzdFN1YnNjcmliZU1lc3NhZ2UiLCJ0bXBsSWRzIiwidG9QYWdlIiwic2hvd1RpcHMiLCJlcnIiLCJlcnJDb2RlIiwib25DbG9zZVBob25lUG9wdXAiLCJvbkNsb3NlTWVzc2FnZVBvcHVwIiwib25QaG9uZUlucHV0IiwiZSIsIm9uQ29kZUlucHV0Iiwib3B0aW9ucyIsInEiLCJ1cmwiLCJkZWNvZGVVUklDb21wb25lbnQiLCJxckNvZGUiLCJzcGxpdCIsImxvZ2luIiwiZ2V0T3BlbmlkIiwibW9kYWwiLCJvcGVuU2V0dGluZyIsIndpdGhTdWJzY3JpcHRpb25zIiwidW5pb25JZCIsImJpbmRXZUNoYXRTdGF0ZSIsImlzQmluZFdlY2hhdCIsIndlY2hhdExvZ2luIiwiJGFwcGx5Iiwic2Vzc2lvbktleSIsInBhcmFtcyIsImRlY3J5cHRVbmlvbklkIiwic2V0U3RvcmFnZVN5bmMiLCJkaXNwYXRjaCIsInR5cGUiLCJtc2ciLCJyZXN1bHQiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsImdlbmRlciIsImF2YXRhciIsInNleCIsInBob25lTnVtYmVyIiwibG9naW5TdWNjZXNzIiwibmF2aWdhdGVUbyIsIm9wZW5faWQiLCJzZXNzaW9uX2tleSIsInZlcmlmeUNvZGUiLCJ0b2tlbiIsImlzQmluZERlcHQiLCJwYWdlIiwid2FyaW5nX21zZyIsImdldFNldHRpbmciLCJzdWJzY3JpcHRpb25zU2V0dGluZyIsInRlbXBJZCIsIml0ZW1TZXR0aW5ncyIsInRpcCIsInJlZGlyZWN0VG8iLCJpc05hTiIsInRlc3QiLCJjb3VudCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7QUFJQTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7Ozs7Ozs7Ozs7Ozs7O0FBRVosSUFBTUMsUUFBUSxzQkFBZDtBQUNBLHlCQUFTQSxLQUFUOztJQUVxQkMsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLElBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDRCQUFZLCtCQURDO0FBRWIsNkJBQWEsZ0NBRkE7QUFHYiw0QkFBWSwrQkFIQztBQUliLDZCQUFhO0FBSkE7QUFGWixTLFFBU1RDLEksR0FBTztBQUNIQyxtQkFBTyxFQURKO0FBRUhDLGtCQUFNLEVBRkgsRUFFUTtBQUNYQyxrQkFBTSxFQUhIO0FBSUhDLG1CQUFPLENBSko7QUFLSEMsc0JB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O0FBQ0g7QUFDRDs7OztxQ0FDYTtBQUFBOztBQUNULGdCQUFNbUUsUUFBUSxFQUFkO0FBQ0EsaUJBQUs3RyxLQUFMLEdBQWE2RyxLQUFiO0FBQ0EsZ0JBQUksQ0FBQyxLQUFLM0csWUFBVixFQUF3QjtBQUNwQixxQkFBS0EsWUFBTCxHQUFvQjRHLFlBQVksWUFBTTtBQUNsQyx3QkFBSSxPQUFLOUcsS0FBTCxHQUFhLENBQWpCLEVBQW9CO0FBQ2hCLCtCQUFLQSxLQUFMO0FBQ0EsK0JBQUs2RSxNQUFMO0FBQ0gscUJBSEQsTUFHTztBQUNILCtCQUFLM0UsWUFBTCxJQUFxQjZHLGNBQWMsT0FBSzdHLFlBQW5CLENBQXJCO0FBQ0EsK0JBQUtBLFlBQUwsR0FBb0IsSUFBcEI7QUFDSDtBQUNKLGlCQVJtQixFQVFqQixJQVJpQixDQUFwQjtBQVNIO0FBQ0o7Ozs7RUF0WThCOEMsZUFBS21ELEk7O2tCQUFuQjNHLEsiLCJmaWxlIjoibG9naW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIHNldFN0b3JlLFxyXG4gICAgICAgIGdldFN0b3JlXHJcbiAgICB9IGZyb20gJ3dlcHktcmVkdXgnXHJcbiAgICBpbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi4vc3RvcmUnXHJcbiAgICBpbXBvcnQgdGlwIGZyb20gXCIuLi91dGlscy90aXBcIlxyXG4gICAgaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknXHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpXHJcbiAgICBzZXRTdG9yZShzdG9yZSlcclxuXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55m75b2VJyxcclxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbi1jZWxsXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2NlbGwvaW5kZXhcIixcclxuICAgICAgICAgICAgICAgIFwidmFuLWZpZWxkXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2ZpZWxkL2luZGV4XCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbi1pY29uXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2ljb24vaW5kZXhcIixcclxuICAgICAgICAgICAgICAgIFwidmFuLXBvcHVwXCI6IFwiLi4vY29tcG9uZW50cy92YW50L3BvcHVwL2luZGV4XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgIGNvZGU6ICcnLCAgLy8g6aqM6K+B56CBXHJcbiAgICAgICAgICAgIHV1aWQ6ICcnLFxyXG4gICAgICAgICAgICB0aW1lcjogMCxcclxuICAgICAgICAgICAgZ2V0UGhvbmU6ICcnLFxyXG4gICAgICAgICAgICBzZW5kSW50ZXJ2YWw6IG51bGwsXHJcbiAgICAgICAgICAgIHNob3dHZXRQaG9uZTogZmFsc2UsXHJcbiAgICAgICAgICAgIHNob3dNZXNzYWdlOiBmYWxzZSxcclxuICAgICAgICAgICAgZmxhZzoge1xyXG4gICAgICAgICAgICAgICAgdG86ICdpbmRleCcsIC8vIOagh+ivhui3s+i9rOWIsOWTquS4qumhtemdolxyXG4gICAgICAgICAgICAgICAgaXNNc2c6IGZhbHNlLCAgLy8g5piv5ZCm5pyJ5raI5oGv5by55Ye6XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiB7fSwgIC8vIOeUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHd4LmdldFN5c3RlbUluZm9TeW5jKCkuc3RhdHVzQmFySGVpZ2h0XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5xKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gZGVjb2RlVVJJQ29tcG9uZW50KG9wdGlvbnMucSk7XHJcbiAgICAgICAgICAgICAgICBsZXQgcXJDb2RlID0gdXJsLnNwbGl0KCc/cXJjb2RlPScpWzFdO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKHFyQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8ucXJDb2RlID0gcXJDb2RlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICAvLyDmiYvmnLrlj7flj5HpgIHpqozor4HnoIHnmbvlvZVcclxuICAgICAgICAgICAgdGFwTG9naW4oKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlvq7kv6HmjojmnYPnmbvlvZVcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJJbmZvLm9wZW5JZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2VjaGF0QnlQaG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgICAvLyDnn63kv6Hpqozor4HnoIHnmbvlvZVcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52ZXJpZnlQaG9uZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc21zTG9naW4oKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIOW+ruS/oeaOiOadg+eZu+W9lS3ojrflj5bnlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgZ2V0VXNlckluZm8oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5kZXRhaWwuZXJyTXNnID09ICdnZXRVc2VySW5mbzpvaycpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5jaGVja1Nlc3Npb24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT095pyq5aSx5pWIPT09PScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3VzZXJJbmZvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMudXNlckluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmp1ZGdlQmluZFdlY2hhdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnPT09PXVzZXJJbmZv57yT5a2Y6L+H5pyf77yM6YeN5paw55m75b2V6I635Y+WPT09PT0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlV3hMb2dpbihldmVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCc9PT095bey5aSx5pWI77yM6YeN5paw55m75b2V6I635Y+WPT09PT0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVXeExvZ2luKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g6I635Y+W5omL5py65Y+3XHJcbiAgICAgICAgICAgIGdldFBob25lTnVtYmVyKGV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZihldmVudC5kZXRhaWwuZXJyTXNnID09ICdnZXRQaG9uZU51bWJlcjpvaycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmVuY3J5cHRlZERhdGEgPSBldmVudC5kZXRhaWwuZW5jcnlwdGVkRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLml2ID0gZXZlbnQuZGV0YWlsLml2O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGVjcnlwdFBob25lKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIOWPkemAgemqjOivgeeggVxyXG4gICAgICAgICAgICBnZXRTZW5kQ29kZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlcmlmeVBob25lKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93TW9kYWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ehruiupOaJi+acuuWPt+eggScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDmiJHku6zlsIblj5HpgIHpqozor4HnoIHnn63kv6HliLDov5nkuKrlj7fnoIHvvJogKzg2ICR7dGhpcy5waG9uZX1gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRDb2RlKHtwaG9uZTogdGhhdC5waG9uZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn5Y+R6YCB5oiQ5YqfJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkF1dGhNZXNnKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRtcGxJZCA9IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEudG1wbElkO1xyXG4gICAgICAgICAgICAgICAgd3gucmVxdWVzdFN1YnNjcmliZU1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRtcGxJZHM6IFt0bXBsSWRdLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjOicsIHJlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc1t0bXBsSWRdID09ICdhY2NlcHQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlc1t0bXBsSWRdID09ICdyZWplY3QnKSB7IC8vIOeUqOaIt+aLkue7neaOiOadg1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93VGlwcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50b1BhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgICAgICBmYWlsOiAoZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVyci5lcnJDb2RlID09ICcyMDAwNCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpcHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnIuZXJyQ29kZSA9PSAnMjAwMDEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K6i6ZiF5Y+35qih5p2/aWTkv6Hmga/plJnor6/vvIzor7fnm5HmtYvphY3nva4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyOicsIGVycilcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIOWPlua2iOaOiOadg+aJi+acuuWPt1xyXG4gICAgICAgICAgICBvbkNsb3NlUGhvbmVQb3B1cCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0dldFBob25lID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2xvc2VNZXNzYWdlUG9wdXAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uUGhvbmVJbnB1dChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBob25lID0gZS5kZXRhaWw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ29kZUlucHV0KGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29kZSA9IGUuZGV0YWlsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhhbmRsZVd4TG9naW4oZXZlbnQpIHtcclxuICAgICAgICAgICAgLy8g6I635Y+W55So5oi355m75b2VY29kZVxyXG4gICAgICAgICAgICB3eC5sb2dpbih7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXNlckluZm8sIGl2LCBlbmNyeXB0ZWREYXRhIH0gPSBldmVudC5kZXRhaWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSB1c2VySW5mbztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5pdiA9IGl2O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmVuY3J5cHRlZERhdGEgPSBlbmNyeXB0ZWREYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmNvZGUgPSByZXMuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRPcGVuaWQoe2NvZGU6IHJlcy5jb2RlfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBzaG93VGlwcygpIHtcclxuICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAn5rip6aao5o+Q56S6JyxcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi5oKo55qE5raI5oGv6K6i6ZiF5Li75byA5YWz5bey5YWz6Zet77yM5aaC6ZyA6KaB5raI5oGv5o6o6YCB5pyN5Yqh77yM6K+354K55Ye756Gu5a6a6Lez6L2s6K6+572u6aG16Z2i5omT5byA5o6I5p2D5ZCO5YaN5qyh5bCd6K+V44CCXCIsXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAobW9kYWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobW9kYWwuY29uZmlybSkgeyAvLyDngrnlh7vnoa7lrppcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3gub3BlblNldHRpbmcoeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpdGhTdWJzY3JpcHRpb25zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5lcnJNc2cgPT0gJ29wZW5TZXR0aW5nOm9rJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9QYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6I635Y+W5piv5ZCm57uR5a6a5b6u5L+hXHJcbiAgICAgICAgYXN5bmMganVkZ2VCaW5kV2VjaGF0KCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnVzZXJJbmZvLnVuaW9uSWQpXHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuYmluZFdlQ2hhdFN0YXRlKHt1bmlvbklkOiB0aGlzLnVzZXJJbmZvLnVuaW9uSWR9KTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKVxyXG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8uaXNCaW5kV2VjaGF0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn57uR5a6a54q25oCB77yaJywgcmVzLmRhdGEpXHJcbiAgICAgICAgICAgICAgICAvLyDlt7LmjojmnYPnu5HlrppcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5kYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZWNoYXRMb2dpbigpOyAgXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIOW8ueWHuuiOt+WPluaJi+acuuWPt1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0dldFBob25lID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6I635Y+WdW5pb25JZFxyXG4gICAgICAgIGFzeW5jIGRlY3J5cHRVbmlvbklkKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGl2LCBlbmNyeXB0ZWREYXRhLCBzZXNzaW9uS2V5IH0gPSB0aGlzLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgaXYsXHJcbiAgICAgICAgICAgICAgICBzZXNzaW9uS2V5LFxyXG4gICAgICAgICAgICAgICAgZW5jcnlwdGVkRGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZGVjcnlwdFVuaW9uSWQocGFyYW1zKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby51bmlvbklkID0gcmVzLnVuaW9uSWQ7XHJcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndXNlckluZm8nLCB0aGlzLnVzZXJJbmZvKTtcclxuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVVBEQVRFX1VTRVJfSU5GTycsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlckluZm86IHRoaXMudXNlckluZm9cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmp1ZGdlQmluZFdlY2hhdCgpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5jb2RlID09IDUwMCAmJiByZXMubXNnID09ICfliqDlr4blrZfnrKbkuLLop6Plr4blpLHotKUnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDlvZPnlKjmiLfnvJPlrZjov4fmnJ/vvIzkvYZzZXNzaW9uS2V55pyq6L+H5pyf5pe277yM6ZyA6KaB6YeN5paw5Y67d3gubG9naW7vvIzov5nml7blgJnlsLHkvJrmiqXplJnvvIzpnIDopoHnlKjmiLfph43mlrDngrnlh7vljrvojrflj5bmiY3ooYxcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfkv6Hmga/ojrflj5blpLHotKXvvIzor7fph43mlrDojrflj5YnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlc3VsdC5tc2cgfHwgJ+acjeWKoeWZqOW8guW4uCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDlvq7kv6HmjojmnYPnmbvlvZUgLSDlvZXlhaXmiYvmnLrlj7dcclxuICAgICAgICBhc3luYyB3ZWNoYXRCeVBob25lKCkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGF2YXRhclVybCwgb3BlbklkLCBuaWNrTmFtZSwgcGhvbmUsIGdlbmRlciwgdW5pb25JZCB9ID0gdGhpcy51c2VySW5mbztcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIGF2YXRhcjogYXZhdGFyVXJsLFxyXG4gICAgICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlLCAgLy8g5omL5py66aqM6K+B56CB55m75b2VXHJcbiAgICAgICAgICAgICAgICB1dWlkOiB0aGlzLnV1aWQsIC8vIOWUr+S4gOagh+ivhlxyXG4gICAgICAgICAgICAgICAgb3BlbklkOiBvcGVuSWQsXHJcbiAgICAgICAgICAgICAgICBuaWNrTmFtZTogbmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICBzZXg6IGdlbmRlcixcclxuICAgICAgICAgICAgICAgIHVuaW9uSWQ6IHVuaW9uSWQsXHJcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogdGhpcy5waG9uZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkud2VjaGF0QnlQaG9uZShwYXJhbXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOiOt+WPluino+WvhuaJi+acuuWPt1xyXG4gICAgICAgIGFzeW5jIGRlY3J5cHRQaG9uZSgpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBjb2RlLCBpdiwgZW5jcnlwdGVkRGF0YSwgc2Vzc2lvbktleSB9ID0gdGhpcy51c2VySW5mbztcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIGNvZGUsXHJcbiAgICAgICAgICAgICAgICBpdixcclxuICAgICAgICAgICAgICAgIHNlc3Npb25LZXksXHJcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogZW5jcnlwdGVkRGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZGVjcnlwdFBob25lKHBhcmFtcylcclxuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCAmJiByZXMucGhvbmVOdW1iZXIpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy9iaW5kUGhvbmU/dGVsPSR7cmVzLnBob25lTnVtYmVyfWBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93R2V0UGhvbmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOmAmui/h2NvZGXojrflj5ZvcGVuaWRcclxuICAgICAgICBhc3luYyBnZXRPcGVuaWQocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0T3BlbmlkKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8ub3BlbklkID0gcmVzLm9wZW5faWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLnNlc3Npb25LZXkgPSByZXMuc2Vzc2lvbl9rZXk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlY3J5cHRVbmlvbklkKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmiYvmnLrpqozor4HnoIHnmbvlvZVcclxuICAgICAgICBhc3luYyBzbXNMb2dpbigpIHtcclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHBob25lTnVtYmVyOiB0aGlzLnBob25lLFxyXG4gICAgICAgICAgICAgICAgY29kZTogdGhpcy5jb2RlLFxyXG4gICAgICAgICAgICAgICAgdXVpZDogdGhpcy51dWlkLFxyXG4gICAgICAgICAgICAgICAgcXJDb2RlOiB0aGlzLnVzZXJJbmZvLnFyQ29kZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuc21zTG9naW4ocGFyYW1zKTtcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGdldENvZGUocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0Q29kZShwYXJhbXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvZGUgPSByZXMudmVyaWZ5Q29kZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXVpZCA9IHJlcy51dWlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDlvq7kv6HnlKjmiLdjb2Rl55m75b2VXHJcbiAgICAgICAgYXN5bmMgd2VjaGF0TG9naW4oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgdW5pb25JZCwgcXJDb2RlIH0gPSB0aGlzLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgdW5pb25JZCxcclxuICAgICAgICAgICAgICAgIHFyQ29kZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkud2VjaGF0TG9naW4ocGFyYW1zKTtcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvZ2luU3VjY2VzcyhyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnmbvlvZXmiJDlip9cclxuICAgICAgICBsb2dpblN1Y2Nlc3MoZGF0YSkge1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndG9rZW4nLCBkYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgd3guc2V0U3RvcmFnZVN5bmMoJ2lzQmluZERlcHQnLCBkYXRhLmlzQmluZERlcHQpO1xyXG4gICAgICAgICAgICB0aGlzLmZsYWcgPSB7XHJcbiAgICAgICAgICAgICAgICB0bzogZGF0YS5wYWdlLFxyXG4gICAgICAgICAgICAgICAgaXNNc2c6IGRhdGEud2FyaW5nX21zZyB8fCBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGEuaXNCaW5kRGVwdCkge1xyXG4gICAgICAgICAgICAgICAgLy8g5Yik5pat55So5oi35piv5ZCm5byA5ZCv6K6i6ZiF5raI5oGvXHJcbiAgICAgICAgICAgICAgICB3eC5nZXRTZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgICAgICB3aXRoU3Vic2NyaXB0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHN1YnNjcmlwdGlvbnNTZXR0aW5nIH0gPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXR0aW5nJywgcmVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcElkID0gd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS50bXBsSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWJzY3JpcHRpb25zU2V0dGluZyAmJiBzdWJzY3JpcHRpb25zU2V0dGluZy5pdGVtU2V0dGluZ3MgJiYgc3Vic2NyaXB0aW9uc1NldHRpbmcuaXRlbVNldHRpbmdzW3RlbXBJZF0gPT0gJ2FjY2VwdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9QYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNZXNzYWdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9QYWdlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOi3s+i9rOmhtemdolxyXG4gICAgICAgIHRvUGFnZSgpIHtcclxuICAgICAgICAgICAgLy8g5pys5Y2V5L2N55So5oi377yM6Lez6L2s6Iez5oiR55qE5Y2V5L2N6aG16Z2iXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZmxhZy50byA9PSAnZGVwdCcpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJ3BhZ2VzL3VzZXJVbml0J1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZsYWcuaXNNc2cpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXAuc2hvd1RvYXN0KCfmgqjml6DmnYPpmZDmn6XnnIvor6XljZXkvY3kv6Hmga8nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9pbmRleCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6aqM6K+B5omL5py65Y+35piv5ZCm5q2j56GuXHJcbiAgICAgICAgdmVyaWZ5UGhvbmUoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBob25lID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aXAuc2hvd1RvYXN0KCfor7fovpPlhaXmiYvmnLrlj7fojrflj5bpqozor4HnoIEnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucGhvbmUgIT09ICdudW1iZXInICYmIGlzTmFOKHRoaXMucGhvbmUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aXAuc2hvd1RvYXN0KCfmgqjovpPlhaXnmoTmiYvmnLrlj7fmoLzlvI/mnInor68nKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5waG9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCEoL14xWzM0NTY3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aXAuc2hvd1RvYXN0KFwi5omL5py65Y+356CB5pyJ6K+v77yM6K+36YeN5aGrXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5pe26Ze05pS55Y+YXHJcbiAgICAgICAgdGltZUNoYW5nZSgpIHtcclxuICAgICAgICAgICAgY29uc3QgY291bnQgPSA2MDtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IGNvdW50O1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VuZEludGVydmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lciA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lci0tO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsICYmIGNsZWFySW50ZXJ2YWwodGhpcy5zZW5kSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==