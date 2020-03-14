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
                wx.switchTab({
                    url: '/pages/menu0'
                });
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
                if (this.phone == '') {
                    _tip2.default.showToast('请输入手机号获取验证码');
                    return;
                }
                if (typeof this.phone !== 'number' && isNaN(this.phone)) {
                    _tip2.default.showToast('您输入的手机号格式有误');
                    return;
                }
                if (this.phone) {
                    if (!/^1[3456789]\d{9}$/.test(this.phone)) {
                        _tip2.default.showToast("手机号码有误，请重填");
                        return;
                    }
                }
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

                                console.log(res);

                            case 4:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbImFwaSIsIkxvZ2luIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJwaG9uZSIsImNvZGUiLCJ0aW1lciIsInNlbmRJbnRlcnZhbCIsInN0YXR1c0JhckhlaWdodCIsInd4IiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJtZXRob2RzIiwidGFwTG9naW4iLCJzd2l0Y2hUYWIiLCJ1cmwiLCJiaW5kR2V0VXNlckluZm8iLCJldmVudCIsImNvbnNvbGUiLCJsb2ciLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJnZXRTZW5kQ29kZSIsInRpcCIsInNob3dUb2FzdCIsImlzTmFOIiwidGVzdCIsInRoYXQiLCJzaG93TW9kYWwiLCJ0aXRsZSIsImNvbnRlbnQiLCJjb25maXJtIiwiZ2V0Q29kZSIsImljb24iLCJkdXJhdGlvbiIsInRpbWVDaGFuZ2UiLCJvblBob25lSW5wdXQiLCJlIiwiZGV0YWlsIiwib25Db2RlSW5wdXQiLCJjb3VudCIsInNldEludGVydmFsIiwiJGFwcGx5IiwiY2xlYXJJbnRlcnZhbCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7Ozs7Ozs7Ozs7Ozs7O0lBQ1NDLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixJQURuQjtBQUVMQyw2QkFBaUI7QUFDYiw0QkFBWSwrQkFEQztBQUViLDZCQUFhO0FBRkE7QUFGWixTLFFBT1RDLEksR0FBTztBQUNIQyxtQkFBTyxFQURKO0FBRUhDLGtCQUFNLEVBRkg7QUFHSEMsbUJBQU8sQ0FISjtBQUlIQywwQkFBYyxJQUpYO0FBS0hDLDZCQUFpQkMsR0FBR0MsaUJBQUgsR0FBdUJGO0FBTHJDLFMsUUFRUEcsTyxHQUFVO0FBQ05DLG9CQURNLHNCQUNLO0FBQ1BILG1CQUFHSSxTQUFILENBQWE7QUFDVEMseUJBQUs7QUFESSxpQkFBYjtBQUdILGFBTEs7O0FBTU47QUFDQUMsMkJBUE0sMkJBT1VDLEtBUFYsRUFPaUI7QUFDbkJDLHdCQUFRQyxHQUFSLENBQVlGLEtBQVo7QUFDQVAsbUJBQUdVLEtBQUgsQ0FBUztBQUNMQyw2QkFBVSxpQkFBQ0MsR0FBRCxFQUFTO0FBQ2ZKLGdDQUFRQyxHQUFSLENBQVlHLEdBQVo7QUFDSDtBQUhJLGlCQUFUO0FBS0gsYUFkSzs7QUFlTjtBQUNBQyx1QkFoQk0seUJBZ0JRO0FBQ1Ysb0JBQUksS0FBS2xCLEtBQUwsSUFBYyxFQUFsQixFQUFzQjtBQUNsQm1CLGtDQUFJQyxTQUFKLENBQWMsYUFBZDtBQUNBO0FBQ0g7QUFDRCxvQkFBSSxPQUFPLEtBQUtwQixLQUFaLEtBQXNCLFFBQXRCLElBQWtDcUIsTUFBTSxLQUFLckIsS0FBWCxDQUF0QyxFQUF5RDtBQUNyRG1CLGtDQUFJQyxTQUFKLENBQWMsYUFBZDtBQUNBO0FBQ0g7QUFDRCxvQkFBSSxLQUFLcEIsS0FBVCxFQUFnQjtBQUNaLHdCQUFJLENBQUUsb0JBQW9Cc0IsSUFBcEIsQ0FBeUIsS0FBS3RCLEtBQTlCLENBQU4sRUFBNkM7QUFDekNtQixzQ0FBSUMsU0FBSixDQUFjLFlBQWQ7QUFDQTtBQUNIO0FBQ0o7QUFDRCxvQkFBTUcsT0FBTyxJQUFiO0FBQ0FsQixtQkFBR21CLFNBQUgsQ0FBYTtBQUNUQywyQkFBTyxRQURFO0FBRVRDLHVJQUFpQyxLQUFLMUIsS0FGN0I7QUFHVGdCLDJCQUhTLG1CQUdEQyxHQUhDLEVBR0k7QUFDVCw0QkFBSUEsSUFBSVUsT0FBUixFQUFpQjtBQUNiSixpQ0FBS0ssT0FBTDtBQUNBdkIsK0JBQUdlLFNBQUgsQ0FBYTtBQUNUSyx1Q0FBTyxNQURFO0FBRVRJLHNDQUFNLFNBRkc7QUFHVEMsMENBQVU7QUFIRCw2QkFBYjtBQUtBUCxpQ0FBS1EsVUFBTDtBQUNIO0FBQ0o7QUFiUSxpQkFBYjtBQWVILGFBL0NLO0FBZ0ROQyx3QkFoRE0sd0JBZ0RPQyxDQWhEUCxFQWdEVTtBQUNaLHFCQUFLakMsS0FBTCxHQUFhaUMsRUFBRUMsTUFBZjtBQUNILGFBbERLO0FBbUROQyx1QkFuRE0sdUJBbURNRixDQW5ETixFQW1EUztBQUNYLHFCQUFLaEMsSUFBTCxHQUFZZ0MsRUFBRUMsTUFBZDtBQUNIO0FBckRLLFM7Ozs7Ozs7Ozs7Ozs7dUNBd0RVeEMsSUFBSWtDLE9BQUosQ0FBWTtBQUN4QjVCLDJDQUFPLEtBQUtBO0FBRFksaUNBQVosQzs7O0FBQVppQixtQzs7QUFHSkosd0NBQVFDLEdBQVIsQ0FBWUcsR0FBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FDQUVTO0FBQUE7O0FBQ1QsZ0JBQU1tQixRQUFRLEVBQWQ7QUFDQSxpQkFBS2xDLEtBQUwsR0FBYWtDLEtBQWI7QUFDQSxnQkFBSSxDQUFDLEtBQUtqQyxZQUFWLEVBQXdCO0FBQ3BCLHFCQUFLQSxZQUFMLEdBQW9Ca0MsWUFBWSxZQUFNO0FBQ2xDLHdCQUFJLE9BQUtuQyxLQUFMLEdBQWEsQ0FBakIsRUFBb0I7QUFDaEIsK0JBQUtBLEtBQUw7QUFDQSwrQkFBS29DLE1BQUw7QUFDSCxxQkFIRCxNQUdPO0FBQ0gsK0JBQUtuQyxZQUFMLElBQXFCb0MsY0FBYyxPQUFLcEMsWUFBbkIsQ0FBckI7QUFDQSwrQkFBS0EsWUFBTCxHQUFvQixJQUFwQjtBQUNIO0FBQ0osaUJBUm1CLEVBUWpCLElBUmlCLENBQXBCO0FBU0g7QUFDSjs7OztFQTNGOEJxQyxlQUFLQyxJOztrQkFBbkI5QyxLIiwiZmlsZSI6ImxvZ2luLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0IHRpcCBmcm9tIFwiLi4vdXRpbHMvdGlwXCJcclxuICAgIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9naW4gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+eZu+W9lScsXHJcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YW4tY2VsbFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9jZWxsL2luZGV4XCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbi1maWVsZFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9maWVsZC9pbmRleFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgICAgICBjb2RlOiAnJyxcclxuICAgICAgICAgICAgdGltZXI6IDAsXHJcbiAgICAgICAgICAgIHNlbmRJbnRlcnZhbDogbnVsbCxcclxuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLnN0YXR1c0JhckhlaWdodFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgdGFwTG9naW4oKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9tZW51MCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIOW+ruS/oeaOiOadg+eZu+W9lVxyXG4gICAgICAgICAgICBiaW5kR2V0VXNlckluZm8oZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGV2ZW50KVxyXG4gICAgICAgICAgICAgICAgd3gubG9naW4oe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIOWPkemAgemqjOivgeeggVxyXG4gICAgICAgICAgICBnZXRTZW5kQ29kZSgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBob25lID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdCgn6K+36L6T5YWl5omL5py65Y+36I635Y+W6aqM6K+B56CBJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnBob25lICE9PSAnbnVtYmVyJyAmJiBpc05hTih0aGlzLnBob25lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRpcC5zaG93VG9hc3QoJ+aCqOi+k+WFpeeahOaJi+acuuWPt+agvOW8j+acieivrycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBob25lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoL14xWzM0NTY3ODldXFxkezl9JC8udGVzdCh0aGlzLnBob25lKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlwLnNob3dUb2FzdChcIuaJi+acuuWPt+eggeacieivr++8jOivt+mHjeWhq1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd01vZGFsKHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ehruiupOaJi+acuuWPt+eggScsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogYOaIkeS7rOWwhuWPkemAgemqjOivgeeggeefreS/oeWIsOi/meS4quWPt+egge+8miArODYgJHt0aGlzLnBob25lfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyhyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5jb25maXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmdldENvZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICflj5HpgIHmiJDlip8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudGltZUNoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25QaG9uZUlucHV0KGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGhvbmUgPSBlLmRldGFpbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25Db2RlSW5wdXQoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2RlID0gZS5kZXRhaWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgZ2V0Q29kZSgpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5nZXRDb2RlKHtcclxuICAgICAgICAgICAgICAgIHBob25lOiB0aGlzLnBob25lXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbWVDaGFuZ2UoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvdW50ID0gNjA7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBjb3VudDtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbmRJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudGltZXIgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGltZXItLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRJbnRlcnZhbCAmJiBjbGVhckludGVydmFsKHRoaXMuc2VuZEludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kSW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=