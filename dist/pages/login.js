'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
                "van-field": "../components/vant/field/index"
            }
        }, _this.data = {
            phone: '',
            code: '',
            timer: 0,
            sendInterval: null,
            statusBarHeight: wx.getSystemInfoSync().statusBarHeight
        }, _this.methods = {
            tapLogin: function tapLogin() {
                if (this.verifyPhone()) {
                    wx.switchTab({
                        url: '/pages/menu0'
                    });
                }
            },

            // 微信授权登录
            bindGetUserInfo: function bindGetUserInfo(event) {
                console.log(event);
                wx.login({
                    success: function success(res) {
                        console.log(res);
                    }
                });
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
        key: 'getCode',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return api.getCode({
                                    phone: this.phone
                                });

                            case 2:
                                res = _context.sent;

                                this.code = res.verifyCode;
                                this.$apply();
                                console.log(res);

                            case 6:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getCode() {
                return _ref2.apply(this, arguments);
            }

            return getCode;
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
            var _this2 = this;

            var count = 60;
            this.timer = count;
            if (!this.sendInterval) {
                this.sendInterval = setInterval(function () {
                    if (_this2.timer > 0) {
                        _this2.timer--;
                        _this2.$apply();
                    } else {
                        _this2.sendInterval && clearInterval(_this2.sendInterval);
                        _this2.sendInterval = null;
                    }
                }, 1000);
            }
        }
    }]);

    return Login;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Login , 'pages/login'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImFwaSIsIkxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJwaG9uZSIsImNvZGUiLCJ0aW1lciIsInNlbmRJbnRlcnZhbCIsInN0YXR1c0JhckhlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJtZXRob2RzIiwidGFwTG9naW4iLCJ2ZXJpZnlQaG9uZSIsInN3aXRjaFRhYiIsInVybCIsImJpbmRHZXRVc2VySW5mbyIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImxvZ2luIiwic3VjY2VzcyIsInJlcyIsImdldFNlbmRDb2RlIiwidGhhdCIsInNob3dNb2RhbCIsInRpdGxlIiwiY29udGVudCIsImNvbmZpcm0iLCJnZXRDb2RlIiwic2hvd1RvYXN0IiwiaWNvbiIsImR1cmF0aW9uIiwidGltZUNoYW5nZSIsIm9uUGhvbmVJbnB1dCIsImUiLCJkZXRhaWwiLCJvbkNvZGVJbnB1dCIsInZlcmlmeUNvZGUiLCIkYXBwbHkiLCJ0aXAiLCJpc05hTiIsInRlc3QiLCJmbGFzZSIsImNvdW50Iiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7SUFDU0MsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLElBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLDRCQUFZLCtCQURDO0FBRWIsNkJBQWE7QUFGQTtBQUZaLFMsUUFPVEMsSSxHQUFPO0FBQ0hDLG1CQUFPLEVBREo7QUFFSEMsa0JBQU0sRUFGSDtBQUdIQyxtQkFBTyxDQUhKO0FBSUhDLDBCQUFjLElBSlg7QUFLSEMsNkJBQWlCQyxHQUFHQyxpQkFBSCxHQUF1QkY7QUFMckMsUyxRQVFQRyxPLEdBQVU7QUFDTkMsb0JBRE0sc0JB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WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCB0aXAgZnJvbSBcIi4uL3V0aWxzL3RpcFwiXG4gICAgaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55m75b2VJyxcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgIFwidmFuLWNlbGxcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvY2VsbC9pbmRleFwiLFxuICAgICAgICAgICAgICAgIFwidmFuLWZpZWxkXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2ZpZWxkL2luZGV4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgcGhvbmU6ICcnLFxuICAgICAgICAgICAgY29kZTogJycsXG4gICAgICAgICAgICB0aW1lcjogMCxcbiAgICAgICAgICAgIHNlbmRJbnRlcnZhbDogbnVsbCxcbiAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHRcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0YXBMb2dpbigpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnZlcmlmeVBob25lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9tZW51MCdcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5b6u5L+h5o6I5p2D55m75b2VXG4gICAgICAgICAgICBiaW5kR2V0VXNlckluZm8oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhldmVudClcbiAgICAgICAgICAgICAgICB3eC5sb2dpbih7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5Y+R6YCB6aqM6K+B56CBXG4gICAgICAgICAgICBnZXRTZW5kQ29kZSgpIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLnZlcmlmeVBob25lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dNb2RhbCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ehruiupOaJi+acuuWPt+eggScsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBg5oiR5Lus5bCG5Y+R6YCB6aqM6K+B56CB55+t5L+h5Yiw6L+Z5Liq5Y+356CB77yaICs4NiAke3RoaXMucGhvbmV9YCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuZ2V0Q29kZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC50aW1lQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblBob25lSW5wdXQoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNvZGVJbnB1dChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb2RlID0gZS5kZXRhaWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXN5bmMgZ2V0Q29kZSgpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0Q29kZSh7XG4gICAgICAgICAgICAgICAgcGhvbmU6IHRoaXMucGhvbmVcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB0aGlzLmNvZGUgPSByZXMudmVyaWZ5Q29kZTtcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICB9XG4gICAgICAgIHZlcmlmeVBob25lKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGhvbmUgPT0gJycpIHtcbiAgICAgICAgICAgICAgICB0aXAuc2hvd1RvYXN0KCfor7fovpPlhaXmiYvmnLrlj7fojrflj5bpqozor4HnoIEnKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRoaXMucGhvbmUgIT09ICdudW1iZXInICYmIGlzTmFOKHRoaXMucGhvbmUpKSB7XG4gICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn5oKo6L6T5YWl55qE5omL5py65Y+35qC85byP5pyJ6K+vJyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucGhvbmUpIHtcbiAgICAgICAgICAgICAgICBpZiAoISgvXjFbMzQ1Njc4OV1cXGR7OX0kLy50ZXN0KHRoaXMucGhvbmUpKSkge1xuICAgICAgICAgICAgICAgICAgICB0aXAuc2hvd1RvYXN0KFwi5omL5py65Y+356CB5pyJ6K+v77yM6K+36YeN5aGrXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmxhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdGltZUNoYW5nZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gNjA7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gY291bnQ7XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VuZEludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnRpbWVyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lci0tO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZEludGVydmFsICYmIGNsZWFySW50ZXJ2YWwodGhpcy5zZW5kSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=