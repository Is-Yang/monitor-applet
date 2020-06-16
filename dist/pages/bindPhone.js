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

var BindPhone = function (_wepy$page) {
    _inherits(BindPhone, _wepy$page);

    function BindPhone() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BindPhone);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BindPhone.__proto__ || Object.getPrototypeOf(BindPhone)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '绑定手机号',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index",
                "van-field": "../components/vant/field/index",
                "van-popup": "../components/vant/popup/index"
            }
        }, _this.data = {
            statusBarHeight: wx.getSystemInfoSync().statusBarHeight,
            phone: '13143715009',
            uuid: '',
            code: '',
            timer: 0,
            sendInterval: null,
            showMessage: false,
            flag: {
                to: 'index', // 标识跳转到哪个页面
                isMsg: false // 是否有消息弹出
            },
            userInfo: {}
        }, _this.methods = {
            tapLogin: function tapLogin() {
                this.wechatByPhone();
            },

            // 发送验证码
            getSendCode: function getSendCode() {
                this.getCode();
            },
            onClickLeft: function onClickLeft() {
                var pages = getCurrentPages();
                if (pages.length == 1) {
                    wx.redirectTo({
                        url: '/pages/login'
                    });
                } else {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            },
            onAuthMesg: function onAuthMesg() {
                var _this2 = this;

                var tmplId = _wepy2.default.$instance.globalData.tmplId;
                wx.requestSubscribeMessage({
                    tmplIds: [tmplId],
                    success: function success(res) {
                        console.log('suc:', res);
                        if (res[tmplId] == 'accept') {
                            _this2.showMessage = false;
                            _this2.toPage();
                        } else if (res[tmplId] == 'reject') {
                            // 用户拒绝授权
                            _this2.showTips();
                        }
                    },
                    fail: function fail(err) {
                        if (err.errCode == '20004') {
                            _this2.showTips();
                        }
                        console.log('err:', err);
                    }
                });
            },
            onCodeInput: function onCodeInput(e) {
                this.code = e.detail;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(BindPhone, [{
        key: 'onLoad',
        value: function onLoad(options) {
            this.phone = options.tel;

            var userInfo = wx.getStorageSync('userInfo');
            if (!userInfo) {
                var _store = (0, _wepyRedux.getStore)();
                this.userInfo = _store.getState().user.userInfo;
            } else {
                this.userInfo = userInfo;
            }

            this.getCode();
            this.$apply();
        }
    }, {
        key: 'showTips',
        value: function showTips() {
            var _this3 = this;

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
                                    _this3.showMessage = false;
                                    _this3.toPage();
                                }
                            }
                        });
                    }
                }
            });
        }

        // 微信授权登录 - 录入手机号

    }, {
        key: 'wechatByPhone',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var _this4 = this;

                var _userInfo, avatarUrl, openId, nickName, gender, qrCode, unionId, params, res;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                console.log(this.userInfo);
                                _userInfo = this.userInfo, avatarUrl = _userInfo.avatarUrl, openId = _userInfo.openId, nickName = _userInfo.nickName, gender = _userInfo.gender, qrCode = _userInfo.qrCode, unionId = _userInfo.unionId;
                                params = {
                                    avatar: avatarUrl,
                                    code: this.code, // 手机验证码登录
                                    uuid: this.uuid, // 唯一标识
                                    phoneNumber: this.phone,
                                    sex: gender,
                                    openId: openId,
                                    nickName: nickName,
                                    qrCode: qrCode,
                                    unionId: unionId
                                };
                                _context.next = 5;
                                return api.wechatByPhone(params);

                            case 5:
                                res = _context.sent;

                                if (res.code == 200) {
                                    wx.setStorageSync('token', res.token);
                                    wx.setStorageSync('isBindDept', res.isBindDept);
                                    this.flag = {
                                        to: data.page,
                                        isMsg: data.waring_msg || false
                                        // 判断用户是否开启订阅消息
                                    };wx.getSetting({
                                        withSubscriptions: true,
                                        success: function success(res) {
                                            var subscriptionsSetting = res.subscriptionsSetting;

                                            console.log(res);
                                            var tempId = _wepy2.default.$instance.globalData.tmplId;
                                            if (subscriptionsSetting && subscriptionsSetting.itemSettings && subscriptionsSetting.itemSettings[tempId] == 'accept') {
                                                _this4.toPage();
                                            } else {
                                                _this4.showMessage = true;
                                                _this4.$apply();
                                            }
                                        }
                                    });
                                }

                            case 7:
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
                    tip.showToast('您无权限查看该单位信息');
                }
                wx.redirectTo({
                    url: '/pages/index'
                });
            }
        }
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

                                if (res.code == 200) {
                                    this.uuid = res.uuid;
                                    this.timeChange();
                                    this.$apply();
                                }

                            case 4:
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

        // 时间改变

    }, {
        key: 'timeChange',
        value: function timeChange() {
            var _this5 = this;

            var count = 60;
            this.timer = count;
            if (!this.sendInterval) {
                this.sendInterval = setInterval(function () {
                    if (_this5.timer > 0) {
                        _this5.timer--;
                        _this5.$apply();
                    } else {
                        _this5.sendInterval && clearInterval(_this5.sendInterval);
                        _this5.sendInterval = null;
                    }
                }, 1000);
            }
        }
    }]);

    return BindPhone;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(BindPhone , 'pages/bindPhone'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbmRQaG9uZS5qcyJdLCJuYW1lcyI6WyJhcGkiLCJzdG9yZSIsIkJpbmRQaG9uZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwic3RhdHVzQmFySGVpZ2h0Iiwid3giLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBob25lIiwidXVpZCIsImNvZGUiLCJ0aW1lciIsInNlbmRJbnRlcnZhbCIsInNob3dNZXNzYWdlIiwiZmxhZyIsInRvIiwiaXNNc2ciLCJ1c2VySW5mbyIsIm1ldGhvZHMiLCJ0YXBMb2dpbiIsIndlY2hhdEJ5UGhvbmUiLCJnZXRTZW5kQ29kZSIsImdldENvZGUiLCJvbkNsaWNrTGVmdCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwibGVuZ3RoIiwicmVkaXJlY3RUbyIsInVybCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwib25BdXRoTWVzZyIsInRtcGxJZCIsIndlcHkiLCIkaW5zdGFuY2UiLCJnbG9iYWxEYXRhIiwicmVxdWVzdFN1YnNjcmliZU1lc3NhZ2UiLCJ0bXBsSWRzIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJ0b1BhZ2UiLCJzaG93VGlwcyIsImZhaWwiLCJlcnIiLCJlcnJDb2RlIiwib25Db2RlSW5wdXQiLCJlIiwiZGV0YWlsIiwib3B0aW9ucyIsInRlbCIsImdldFN0b3JhZ2VTeW5jIiwiZ2V0U3RhdGUiLCJ1c2VyIiwiJGFwcGx5Iiwic2hvd01vZGFsIiwidGl0bGUiLCJjb250ZW50IiwibW9kYWwiLCJjb25maXJtIiwib3BlblNldHRpbmciLCJ3aXRoU3Vic2NyaXB0aW9ucyIsImVyck1zZyIsImF2YXRhclVybCIsIm9wZW5JZCIsIm5pY2tOYW1lIiwiZ2VuZGVyIiwicXJDb2RlIiwidW5pb25JZCIsInBhcmFtcyIsImF2YXRhciIsInBob25lTnVtYmVyIiwic2V4Iiwic2V0U3RvcmFnZVN5bmMiLCJ0b2tlbiIsImlzQmluZERlcHQiLCJwYWdlIiwid2FyaW5nX21zZyIsImdldFNldHRpbmciLCJzdWJzY3JpcHRpb25zU2V0dGluZyIsInRlbXBJZCIsIml0ZW1TZXR0aW5ncyIsIm5hdmlnYXRlVG8iLCJ0aXAiLCJzaG93VG9hc3QiLCJ0aW1lQ2hhbmdlIiwiY291bnQiLCJzZXRJbnRlcnZhbCIsImNsZWFySW50ZXJ2YWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0FBSUE7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7QUFFWixJQUFNQyxRQUFRLHNCQUFkO0FBQ0EseUJBQVNBLEtBQVQ7O0lBRXFCQyxTOzs7Ozs7Ozs7Ozs7OztnTUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsT0FEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsK0JBQWUsa0NBREY7QUFFYiw2QkFBYSxnQ0FGQTtBQUdiLDZCQUFhO0FBSEE7QUFGWixTLFFBU1RDLEksR0FBTztBQUNIQyw2QkFBaUJDLEdBQUdDLGlCQUFILEdBQXVCRixlQURyQztBQUVIRyxtQkFBTyxhQUZKO0FBR0hDLGtCQUFNLEVBSEg7QUFJSEMsa0JBQU0sRUFKSDtBQUtIQyxtQkFBTyxDQUxKO0FBTUhDLDBCQUFjLElBTlg7QUFPSEMseUJBQWEsS0FQVjtBQVFIQyxrQkFBTTtBQUNGQyxvQkFBSSxPQURGLEVBQ1c7QUFDYkMsdUJBQU8sS0FGTCxDQUVhO0FBRmIsYUFSSDtBQVlIQyxzQkFBVTtBQVpQLFMsUUE4QlBDLE8sR0FBVTtBQUNOQyxvQkFETSxzQkFDSztBQUNQLHFCQUFLQyxhQUFMO0FBQ0gsYUFISzs7QUFJTjtBQUNBQyx1QkFMTSx5QkFLUTtBQUNWLHFCQUFLQyxPQUFMO0FBQ0gsYUFQSztBQVFOQyx1QkFSTSx5QkFRUTtBQUNWLG9CQUFJQyxRQUFRQyxpQkFBWjtBQUNBLG9CQUFJRCxNQUFNRSxNQUFOLElBQWdCLENBQXBCLEVBQXVCO0FBQ25CcEIsdUJBQUdxQixVQUFILENBQWM7QUFDVkMsNkJBQUs7QUFESyxxQkFBZDtBQUdILGlCQUpELE1BSU87QUFDSHRC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LE9BQUosQ0FBWTtBQUN4QmQsMkNBQU8sS0FBS0E7QUFEWSxpQ0FBWixDOzs7QUFBWmlDLG1DOztBQUdKLG9DQUFJQSxJQUFJL0IsSUFBSixJQUFZLEdBQWhCLEVBQXFCO0FBQ2pCLHlDQUFLRCxJQUFMLEdBQVlnQyxJQUFJaEMsSUFBaEI7QUFDQSx5Q0FBSzZFLFVBQUw7QUFDQSx5Q0FBSy9CLE1BQUw7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHTDs7OztxQ0FDYTtBQUFBOztBQUNULGdCQUFNZ0MsUUFBUSxFQUFkO0FBQ0EsaUJBQUs1RSxLQUFMLEdBQWE0RSxLQUFiO0FBQ0EsZ0JBQUksQ0FBQyxLQUFLM0UsWUFBVixFQUF3QjtBQUNwQixxQkFBS0EsWUFBTCxHQUFvQjRFLFlBQVksWUFBTTtBQUNsQyx3QkFBSSxPQUFLN0UsS0FBTCxHQUFhLENBQWpCLEVBQW9CO0FBQ2hCLCtCQUFLQSxLQUFMO0FBQ0EsK0JBQUs0QyxNQUFMO0FBQ0gscUJBSEQsTUFHTztBQUNILCtCQUFLM0MsWUFBTCxJQUFxQjZFLGNBQWMsT0FBSzdFLFlBQW5CLENBQXJCO0FBQ0EsK0JBQUtBLFlBQUwsR0FBb0IsSUFBcEI7QUFDSDtBQUNKLGlCQVJtQixFQVFqQixJQVJpQixDQUFwQjtBQVNIO0FBQ0o7Ozs7RUE5TGtDcUIsZUFBSzRDLEk7O2tCQUF2QjdFLFMiLCJmaWxlIjoiYmluZFBob25lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7XHJcbiAgICBzZXRTdG9yZSxcclxuICAgIGdldFN0b3JlXHJcbn0gZnJvbSAnd2VweS1yZWR1eCdcclxuaW1wb3J0IGNvbmZpZ1N0b3JlIGZyb20gJy4uL3N0b3JlJ1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlnU3RvcmUoKVxyXG5zZXRTdG9yZShzdG9yZSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJpbmRQaG9uZSBleHRlbmRzIHdlcHkucGFnZXtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57uR5a6a5omL5py65Y+3JyxcclxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCIsXHJcbiAgICAgICAgICAgIFwidmFuLWZpZWxkXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2ZpZWxkL2luZGV4XCIsXHJcbiAgICAgICAgICAgIFwidmFuLXBvcHVwXCI6IFwiLi4vY29tcG9uZW50cy92YW50L3BvcHVwL2luZGV4XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHd4LmdldFN5c3RlbUluZm9TeW5jKCkuc3RhdHVzQmFySGVpZ2h0LFxyXG4gICAgICAgIHBob25lOiAnMTMxNDM3MTUwMDknLFxyXG4gICAgICAgIHV1aWQ6ICcnLFxyXG4gICAgICAgIGNvZGU6ICcnLFxyXG4gICAgICAgIHRpbWVyOiAwLFxyXG4gICAgICAgIHNlbmRJbnRlcnZhbDogbnVsbCxcclxuICAgICAgICBzaG93TWVzc2FnZTogZmFsc2UsXHJcbiAgICAgICAgZmxhZzoge1xyXG4gICAgICAgICAgICB0bzogJ2luZGV4JywgLy8g5qCH6K+G6Lez6L2s5Yiw5ZOq5Liq6aG16Z2iXHJcbiAgICAgICAgICAgIGlzTXNnOiBmYWxzZSwgIC8vIOaYr+WQpuaciea2iOaBr+W8ueWHulxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXNlckluZm86IHt9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgICB0aGlzLnBob25lID0gb3B0aW9ucy50ZWw7XHJcblxyXG4gICAgICAgIGxldCB1c2VySW5mbyA9IHd4LmdldFN0b3JhZ2VTeW5jKCd1c2VySW5mbycpO1xyXG4gICAgICAgIGlmKCF1c2VySW5mbykge1xyXG4gICAgICAgICAgICBjb25zdCBzdG9yZSA9IGdldFN0b3JlKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXIudXNlckluZm87XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHVzZXJJbmZvO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nZXRDb2RlKCk7XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIHRhcExvZ2luKCkge1xyXG4gICAgICAgICAgICB0aGlzLndlY2hhdEJ5UGhvbmUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIOWPkemAgemqjOivgeeggVxyXG4gICAgICAgIGdldFNlbmRDb2RlKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldENvZGUoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2xpY2tMZWZ0KCkge1xyXG4gICAgICAgICAgICBsZXQgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICAgICAgaWYgKHBhZ2VzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4nXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQXV0aE1lc2coKSB7XHJcbiAgICAgICAgICAgIGxldCB0bXBsSWQgPSB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnRtcGxJZDtcclxuICAgICAgICAgICAgd3gucmVxdWVzdFN1YnNjcmliZU1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgdG1wbElkczogW3RtcGxJZF0sXHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc3VjOicsIHJlcylcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzW3RtcGxJZF0gPT0gJ2FjY2VwdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzW3RtcGxJZF0gPT0gJ3JlamVjdCcpIHsgLy8g55So5oi35ouS57ud5o6I5p2DXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpcHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgICAgIGZhaWw6IChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnIuZXJyQ29kZSA9PSAnMjAwMDQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpcHMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2VycjonLCBlcnIpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ29kZUlucHV0KGUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2RlID0gZS5kZXRhaWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dUaXBzKCkge1xyXG4gICAgICAgIHd4LnNob3dNb2RhbCh7XHJcbiAgICAgICAgICAgIHRpdGxlOiAn5rip6aao5o+Q56S6JyxcclxuICAgICAgICAgICAgY29udGVudDogXCLmgqjnmoTmtojmga/orqLpmIXkuLvlvIDlhbPlt7LlhbPpl63vvIzlpoLpnIDopoHmtojmga/mjqjpgIHmnI3liqHvvIzor7fngrnlh7vnoa7lrprot7Povazorr7nva7pobXpnaLmiZPlvIDmjojmnYPlkI7lho3mrKHlsJ3or5XjgIJcIixcclxuICAgICAgICAgICAgc3VjY2VzczogKG1vZGFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kYWwuY29uZmlybSkgeyAvLyDngrnlh7vnoa7lrppcclxuICAgICAgICAgICAgICAgICAgICB3eC5vcGVuU2V0dGluZyh7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aXRoU3Vic2NyaXB0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmVyck1zZyA9PSAnb3BlblNldHRpbmc6b2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzc2FnZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudG9QYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvLyDlvq7kv6HmjojmnYPnmbvlvZUgLSDlvZXlhaXmiYvmnLrlj7dcclxuICAgIGFzeW5jIHdlY2hhdEJ5UGhvbmUoKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy51c2VySW5mbylcclxuICAgICAgICBjb25zdCB7IGF2YXRhclVybCwgb3BlbklkLCBuaWNrTmFtZSwgZ2VuZGVyLCBxckNvZGUsIHVuaW9uSWQgfSA9IHRoaXMudXNlckluZm87XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgYXZhdGFyOiBhdmF0YXJVcmwsXHJcbiAgICAgICAgICAgIGNvZGU6IHRoaXMuY29kZSwgIC8vIOaJi+acuumqjOivgeeggeeZu+W9lVxyXG4gICAgICAgICAgICB1dWlkOiB0aGlzLnV1aWQsIC8vIOWUr+S4gOagh+ivhlxyXG4gICAgICAgICAgICBwaG9uZU51bWJlcjogdGhpcy5waG9uZSxcclxuICAgICAgICAgICAgc2V4OiBnZW5kZXIsXHJcbiAgICAgICAgICAgIG9wZW5JZCxcclxuICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgIHFyQ29kZSxcclxuICAgICAgICAgICAgdW5pb25JZDogdW5pb25JZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS53ZWNoYXRCeVBob25lKHBhcmFtcyk7XHJcbiAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygndG9rZW4nLCByZXMudG9rZW4pO1xyXG4gICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaXNCaW5kRGVwdCcsIHJlcy5pc0JpbmREZXB0KTtcclxuICAgICAgICAgICAgdGhpcy5mbGFnID0ge1xyXG4gICAgICAgICAgICAgICAgdG86IGRhdGEucGFnZSxcclxuICAgICAgICAgICAgICAgIGlzTXNnOiBkYXRhLndhcmluZ19tc2cgfHwgZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDliKTmlq3nlKjmiLfmmK/lkKblvIDlkK/orqLpmIXmtojmga9cclxuICAgICAgICAgICAgd3guZ2V0U2V0dGluZyh7XHJcbiAgICAgICAgICAgICAgICB3aXRoU3Vic2NyaXB0aW9uczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzdWJzY3JpcHRpb25zU2V0dGluZyB9ID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcElkID0gd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS50bXBsSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN1YnNjcmlwdGlvbnNTZXR0aW5nICYmIHN1YnNjcmlwdGlvbnNTZXR0aW5nLml0ZW1TZXR0aW5ncyAmJiBzdWJzY3JpcHRpb25zU2V0dGluZy5pdGVtU2V0dGluZ3NbdGVtcElkXSA9PSAnYWNjZXB0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvUGFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3NhZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOi3s+i9rOmhtemdolxyXG4gICAgdG9QYWdlKCkge1xyXG4gICAgICAgIC8vIOacrOWNleS9jeeUqOaIt++8jOi3s+i9rOiHs+aIkeeahOWNleS9jemhtemdolxyXG4gICAgICAgIGlmKHRoaXMuZmxhZy50byA9PSAnZGVwdCcpIHtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICdwYWdlcy91c2VyVW5pdCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5mbGFnLmlzTXNnKSB7XHJcbiAgICAgICAgICAgICAgICB0aXAuc2hvd1RvYXN0KCfmgqjml6DmnYPpmZDmn6XnnIvor6XljZXkvY3kv6Hmga8nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB3eC5yZWRpcmVjdFRvKHtcclxuICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9pbmRleCdcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0Q29kZSgpIHtcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmdldENvZGUoe1xyXG4gICAgICAgICAgICBwaG9uZTogdGhpcy5waG9uZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICB0aGlzLnV1aWQgPSByZXMudXVpZDtcclxuICAgICAgICAgICAgdGhpcy50aW1lQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIOaXtumXtOaUueWPmFxyXG4gICAgdGltZUNoYW5nZSgpIHtcclxuICAgICAgICBjb25zdCBjb3VudCA9IDYwO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBjb3VudDtcclxuICAgICAgICBpZiAoIXRoaXMuc2VuZEludGVydmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lci0tO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsICYmIGNsZWFySW50ZXJ2YWwodGhpcy5zZW5kSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==