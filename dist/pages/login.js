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
                                    phoneNumber: this.phone,
                                    code: this.code,
                                    uuid: this.uuid
                                });

                            case 2:
                                res = _context.sent;

                                if (res.code == 200) {
                                    store.dispatch({
                                        type: 'UPDATE_GLOBAL_DATA',
                                        globalData: {
                                            token: res.token
                                        }
                                    });
                                    wx.switchTab({
                                        url: '/pages/menu0'
                                    });
                                }
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImFwaSIsInN0b3JlIiwiTG9naW4iLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInBob25lIiwiY29kZSIsInV1aWQiLCJ0aW1lciIsImdldFBob25lIiwic2VuZEludGVydmFsIiwic2hvd0dldFBob25lIiwic3RhdHVzQmFySGVpZ2h0Iiwid3giLCJnZXRTeXN0ZW1JbmZvU3luYyIsIm1ldGhvZHMiLCJ0YXBMb2dpbiIsInZlcmlmeVBob25lIiwic21zTG9naW4iLCJnZXRQaG9uZU51bWJlciIsImV2ZW50IiwiZGV0YWlsIiwiZW5jcnlwdGVkRGF0YSIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsImdldFVzZXJJbmZvIiwidXNlckluZm8iLCJwYXJhbXMiLCJhdmF0YXIiLCJhdmF0YXJVcmwiLCJuaWNrTmFtZSIsInNleCIsImdlbmRlciIsInBob25lTnVtYmVyIiwiaXYiLCJ3ZWNoYXRMb2dpbiIsImdldFNlbmRDb2RlIiwidGhhdCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNvbmZpcm0iLCJnZXRDb2RlIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwidGltZUNoYW5nZSIsIm9uUGhvbmVJbnB1dCIsImUiLCJvbkNvZGVJbnB1dCIsImRpc3BhdGNoIiwidHlwZSIsImdsb2JhbERhdGEiLCJ0b2tlbiIsInN3aXRjaFRhYiIsInVybCIsIiRhcHBseSIsInZlcmlmeUNvZGUiLCJjb25zb2xlIiwibG9nIiwidGlwIiwiaXNOYU4iLCJ0ZXN0IiwiZmxhc2UiLCJjb3VudCIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztBQUlBOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7QUFFWixJQUFNQyxRQUFRLHNCQUFkO0FB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QVksWUFBTTtBQUNsQyx3QkFBSSxPQUFLMUQsS0FBTCxHQUFhLENBQWpCLEVBQW9CO0FBQ2hCLCtCQUFLQSxLQUFMO0FBQ0EsK0JBQUtpRCxNQUFMO0FBQ0gscUJBSEQsTUFHTztBQUNILCtCQUFLL0MsWUFBTCxJQUFxQnlELGNBQWMsT0FBS3pELFlBQW5CLENBQXJCO0FBQ0EsK0JBQUtBLFlBQUwsR0FBb0IsSUFBcEI7QUFDSDtBQUNKLGlCQVJtQixFQVFqQixJQVJpQixDQUFwQjtBQVNIO0FBQ0o7Ozs7RUFoSjhCMEQsZUFBS0MsSTs7a0JBQW5CckUsSyIsImZpbGUiOiJsb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0IHtcbiAgICAgICAgc2V0U3RvcmUsXG4gICAgICAgIGdldFN0b3JlXG4gICAgfSBmcm9tICd3ZXB5LXJlZHV4J1xuICAgIGltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuLi9zdG9yZSdcbiAgICBpbXBvcnQgdGlwIGZyb20gXCIuLi91dGlscy90aXBcIlxuICAgIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xuXG4gICAgY29uc3Qgc3RvcmUgPSBjb25maWdTdG9yZSgpXG4gICAgc2V0U3RvcmUoc3RvcmUpXG5cbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dpbiBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnmbvlvZUnLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgXCJ2YW4tY2VsbFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9jZWxsL2luZGV4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YW4tZmllbGRcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvZmllbGQvaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbi1pY29uXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2ljb24vaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbi1wb3B1cFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9wb3B1cC9pbmRleFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHBob25lOiAnJyxcbiAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgdXVpZDogJycsXG4gICAgICAgICAgICB0aW1lcjogMCxcbiAgICAgICAgICAgIGdldFBob25lOiAnJyxcbiAgICAgICAgICAgIHNlbmRJbnRlcnZhbDogbnVsbCxcbiAgICAgICAgICAgIHNob3dHZXRQaG9uZTogZmFsc2UsXG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHd4LmdldFN5c3RlbUluZm9TeW5jKCkuc3RhdHVzQmFySGVpZ2h0XG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIHRhcExvZ2luKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZlcmlmeVBob25lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zbXNMb2dpbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDojrflj5bmiYvmnLrlj7dcbiAgICAgICAgICAgIGdldFBob25lTnVtYmVyKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgaWYoZXZlbnQuZGV0YWlsLmVuY3J5cHRlZERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W55So5oi355m75b2VY29kZVxuICAgICAgICAgICAgICAgICAgICB3eC5sb2dpbih7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHJlcy5jb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5nZXRVc2VySW5mbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXNlckluZm8gPSBkYXRhLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IHJlcy5jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI6IHVzZXJJbmZvLmF2YXRhclVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHVzZXJJbmZvLm5pY2tOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXg6IHVzZXJJbmZvLmdlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGhvbmVOdW1iZXI6IGV2ZW50LmRldGFpbC5lbmNyeXB0ZWREYXRhLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdjogZXZlbnQuZGV0YWlsLml2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2VjaGF0TG9naW4ocGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOWPkemAgemqjOivgeeggVxuICAgICAgICAgICAgZ2V0U2VuZENvZGUoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmVyaWZ5UGhvbmUoKSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn56Gu6K6k5omL5py65Y+356CBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGDmiJHku6zlsIblj5HpgIHpqozor4HnoIHnn63kv6HliLDov5nkuKrlj7fnoIHvvJogKzg2ICR7dGhpcy5waG9uZX1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNvbmZpcm0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5nZXRDb2RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+WPkemAgeaIkOWKnycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnRpbWVDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uUGhvbmVJbnB1dChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5waG9uZSA9IGUuZGV0YWlsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ29kZUlucHV0KGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvZGUgPSBlLmRldGFpbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmiYvmnLrpqozor4HnoIHnmbvlvZVcbiAgICAgICAgYXN5bmMgc21zTG9naW4ocGFyYW1zKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnNtc0xvZ2luKHtcbiAgICAgICAgICAgICAgICBwaG9uZU51bWJlcjogdGhpcy5waG9uZSxcbiAgICAgICAgICAgICAgICBjb2RlOiB0aGlzLmNvZGUsXG4gICAgICAgICAgICAgICAgdXVpZDogdGhpcy51dWlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1VQREFURV9HTE9CQUxfREFUQScsXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRva2VuOiByZXMudG9rZW5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9tZW51MCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgICAgICBhc3luYyBnZXRDb2RlKCkge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5nZXRDb2RlKHtcbiAgICAgICAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IHJlcy52ZXJpZnlDb2RlO1xuICAgICAgICAgICAgdGhpcy51dWlkID0gcmVzLnV1aWQ7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHdlY2hhdExvZ2luKHBhcmFtcykge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS53ZWNoYXRMb2dpbihwYXJhbXMpO1xuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgfVxuICAgICAgICB2ZXJpZnlQaG9uZSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBob25lID09ICcnKSB7XG4gICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn6K+36L6T5YWl5omL5py65Y+36I635Y+W6aqM6K+B56CBJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBob25lICE9PSAnbnVtYmVyJyAmJiBpc05hTih0aGlzLnBob25lKSkge1xuICAgICAgICAgICAgICAgIHRpcC5zaG93VG9hc3QoJ+aCqOi+k+WFpeeahOaJi+acuuWPt+agvOW8j+acieivrycpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnBob25lKSB7XG4gICAgICAgICAgICAgICAgaWYgKCEoL14xWzM0NTY3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdChcIuaJi+acuuWPt+eggeacieivr++8jOivt+mHjeWhq1wiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZsYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHRpbWVDaGFuZ2UoKSB7XG4gICAgICAgICAgICBjb25zdCBjb3VudCA9IDYwO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IGNvdW50O1xuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbmRJbnRlcnZhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50aW1lciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXItLTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMuc2VuZEludGVydmFsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19