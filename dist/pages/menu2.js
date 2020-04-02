'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var api = _interopRequireWildcard(_api);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _store = require('./../store/index.js');

var _store2 = _interopRequireDefault(_store);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var Menu2 = (_dec = (0, _wepyRedux.connect)({
    //取数据
    globalData: function globalData(state) {
        return state.user.globalData;
    }
}), _dec(_class = function (_wepy$page) {
    _inherits(Menu2, _wepy$page);

    function Menu2() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Menu2);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu2.__proto__ || Object.getPrototypeOf(Menu2)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            isBindDept: false,
            userInfo: {
                avatar: '',
                company: '',
                firstRoleName: '',
                tel: '',
                nickname: ''
            }
        }, _this.methods = {
            // 扫码加入
            scanJoin: function scanJoin() {
                var _this2 = this;

                wx.scanCode({
                    success: function success(res) {
                        var result = res.result;
                        var qrCode = res.result.split('?qrcode=')[1];
                        if (qrCode) {
                            _this2.bindDept(qrCode);
                        } else {
                            wx.showToast({
                                title: '请扫码有效的二维码',
                                icon: 'none',
                                duration: 1500
                            });
                        }
                    }
                });
            },
            toUserInfo: function toUserInfo() {
                wx.navigateTo({
                    url: '/pages/userInfo'
                });
            },
            toUserUnit: function toUserUnit() {
                if (!this.userInfo.company) {
                    return;
                }
                wx.navigateTo({
                    url: '/pages/userUnit'
                });
            },
            toSetting: function toSetting() {
                wx.navigateTo({
                    url: '/pages/setting'
                });
            },
            toLogs: function toLogs() {
                wx.navigateTo({
                    url: '/pages/logs'
                });
            },

            // 上传头像
            uploadPhoto: function uploadPhoto() {
                var that = this;
                var token = wx.getStorageSync('token');
                var link = '';
                if (_wepy2.default.$instance.globalData.env == 'prod') {
                    link = 'https://tcb-api.tencentcloudapi.com';
                } else {
                    link = 'https://beidou.signalfire.net.cn';
                }
                wx.chooseImage({
                    count: 1, // 默认1张
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function success(res) {
                        var tempFilePaths = res.tempFilePaths;
                        wx.uploadFile({
                            url: link + '/system/user/profile/avatar',
                            filePath: tempFilePaths[0],
                            name: "avatarfile",
                            header: {
                                "Content-Type": "multipart/form-data",
                                "Authorization": token
                            },
                            formData: {},
                            success: function success(res) {
                                that.userInfo.avatar = tempFilePaths[0];
                                that.$apply();
                            }
                        });
                    }
                });
            },

            // 退出登录
            logoutHandle: function logoutHandle() {
                this.userLogout();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Menu2, [{
        key: 'onShow',
        value: function onShow() {
            this.getUserInfo();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            if (wx.getStorageSync('isBindDept')) {
                this.isBindDept = wx.getStorageSync('isBindDept');
                this.$apply();
            }
        }
    }, {
        key: 'bindDept',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return api.bindDept(params);

                            case 2:
                                res = _context.sent;

                                if (res.code == 200) {
                                    this.getUserInfo();
                                    wx.showToast({
                                        title: res.msg,
                                        icon: 'success',
                                        duration: 1000
                                    });
                                }

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function bindDept(_x) {
                return _ref2.apply(this, arguments);
            }

            return bindDept;
        }()
    }, {
        key: 'userLogout',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return api.userLogout();

                            case 2:
                                res = _context2.sent;

                                if (res.code == 200) {
                                    wx.removeStorageSync('token');
                                    wx.removeStorageSync('isBindDept');
                                    wx.showToast({
                                        title: res.msg,
                                        icon: 'success',
                                        duration: 1000
                                    });
                                    setTimeout(function () {
                                        wx.navigateTo({
                                            url: '/pages/login'
                                        });
                                    }, 1000);
                                }

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function userLogout() {
                return _ref3.apply(this, arguments);
            }

            return userLogout;
        }()
    }, {
        key: 'getUserInfo',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var res, _globalData, avatar, nickName, phonenumber, sex, firstRoleName, userName, dept, userId, phone;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                if (this.globalData.userId) {
                                    _context3.next = 5;
                                    break;
                                }

                                _context3.next = 3;
                                return api.getUserInfo();

                            case 3:
                                res = _context3.sent;

                                if (res.code == 200) {
                                    this.globalData = res.user;
                                    store.dispatch({
                                        type: 'UPDATE_GLOBAL_DATA',
                                        globalData: res.user
                                    });
                                }

                            case 5:
                                _globalData = this.globalData, avatar = _globalData.avatar, nickName = _globalData.nickName, phonenumber = _globalData.phonenumber, sex = _globalData.sex, firstRoleName = _globalData.firstRoleName, userName = _globalData.userName, dept = _globalData.dept, userId = _globalData.userId;
                                phone = phonenumber.replace(phonenumber.substring(3, 7), "****");

                                this.userInfo = {
                                    avatar: avatar, // 头像
                                    nickName: nickName, // 昵称
                                    sex: sex, // 性别
                                    userName: userName, // 用户名
                                    firstRoleName: firstRoleName,
                                    phone: phone, // 手机号
                                    userId: userId,
                                    company: dept && dept.deptName, // 扫码加入后的公司名称
                                    tel: phonenumber
                                };

                                this.$apply();

                            case 9:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getUserInfo() {
                return _ref4.apply(this, arguments);
            }

            return getUserInfo;
        }()
    }]);

    return Menu2;
}(_wepy2.default.page)) || _class);

Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu2 , 'pages/menu2'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbImFwaSIsInN0b3JlIiwiTWVudTIiLCJnbG9iYWxEYXRhIiwic3RhdGUiLCJ1c2VyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiaXNCaW5kRGVwdCIsInVzZXJJbmZvIiwiYXZhdGFyIiwiY29tcGFueSIsImZpcnN0Um9sZU5hbWUiLCJ0ZWwiLCJuaWNrbmFtZSIsIm1ldGhvZHMiLCJzY2FuSm9pbiIsInd4Iiwic2NhbkNvZGUiLCJzdWNjZXNzIiwicmVzIiwicmVzdWx0IiwicXJDb2RlIiwic3BsaXQiLCJiaW5kRGVwdCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwidG9Vc2VySW5mbyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b1VzZXJVbml0IiwidG9TZXR0aW5nIiwidG9Mb2dzIiwidXBsb2FkUGhvdG8iLCJ0aGF0IiwidG9rZW4iLCJnZXRTdG9yYWdlU3luYyIsImxpbmsiLCJlbnYiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwidGVtcEZpbGVQYXRocyIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsIm5hbWUiLCJoZWFkZXIiLCJmb3JtRGF0YSIsIiRhcHBseSIsImxvZ291dEhhbmRsZSIsInVzZXJMb2dvdXQiLCJnZXRVc2VySW5mbyIsInBhcmFtcyIsImNvZGUiLCJtc2ciLCJyZW1vdmVTdG9yYWdlU3luYyIsInNldFRpbWVvdXQiLCJ1c2VySWQiLCJkaXNwYXRjaCIsInR5cGUiLCJuaWNrTmFtZSIsInBob25lbnVtYmVyIiwic2V4IiwidXNlck5hbWUiLCJkZXB0IiwicGhvbmUiLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwiZGVwdE5hbWUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7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SztBQURLLHlDQUFkO0FBR0gscUNBSkQsRUFJRyxJQUpIO0FBS0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29DQUtJLEtBQUtqQyxVQUFMLENBQWdCOEQsTTs7Ozs7O3VDQUNEakUsSUFBSTJELFdBQUosRTs7O0FBQVpsQyxtQzs7QUFDSixvQ0FBSUEsSUFBSW9DLElBQUosSUFBWSxHQUFoQixFQUFxQjtBQUNqQix5Q0FBSzFELFVBQUwsR0FBa0JzQixJQUFJcEIsSUFBdEI7QUFDQUosMENBQU1pRSxRQUFOLENBQWU7QUFDWEMsOENBQU0sb0JBREs7QUFFWGhFLG9EQUFZc0IsSUFBSXBCO0FBRkwscUNBQWY7QUFJSDs7OzhDQVlELEtBQUtGLFUsRUFSTFksTSxlQUFBQSxNLEVBQ0FxRCxRLGVBQUFBLFEsRUFDQUMsVyxlQUFBQSxXLEVBQ0FDLEcsZUFBQUEsRyxFQUNBckQsYSxlQUFBQSxhLEVBQ0FzRCxRLGVBQUFBLFEsRUFDQUMsSSxlQUFBQSxJLEVBQ0FQLE0sZUFBQUEsTTtBQUdBUSxxQyxHQUFRSixZQUFZSyxPQUFaLENBQW9CTCxZQUFZTSxTQUFaLENBQXNCLENBQXRCLEVBQXlCLENBQXpCLENBQXBCLEVBQWlELE1BQWpELEM7O0FBQ1oscUNBQUs3RCxRQUFMLEdBQWdCO0FBQ1pDLGtEQURZLEVBQ0o7QUFDUnFELHNEQUZZLEVBRUY7QUFDVkUsNENBSFksRUFHUDtBQUNMQyxzREFKWSxFQUlGO0FBQ1Z0RCxnRUFMWTtBQU1ad0QsZ0RBTlksRUFNTDtBQUNQUixrREFQWTtBQVFaakQsNkNBQVN3RCxRQUFRQSxLQUFLSSxRQVJWLEVBUW9CO0FBQ2hDMUQseUNBQUttRDtBQVRPLGlDQUFoQjs7QUFZQSxxQ0FBS2IsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTdLMkI3QyxlQUFLa0UsSTtrQkFBbkIzRSxLIiwiZmlsZSI6Im1lbnUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcbiAgICBpbXBvcnQge1xuICAgICAgICBzZXRTdG9yZSxcbiAgICAgICAgZ2V0U3RvcmUsXG4gICAgICAgIGNvbm5lY3RcbiAgICB9IGZyb20gJ3dlcHktcmVkdXgnO1xuICAgIGltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuLi9zdG9yZSdcblxuICAgIGNvbnN0IHN0b3JlID0gY29uZmlnU3RvcmUoKVxuICAgIHNldFN0b3JlKHN0b3JlKVxuXG4gICAgQGNvbm5lY3Qoe1xuICAgICAgICAvL+WPluaVsOaNrlxuICAgICAgICBnbG9iYWxEYXRhKHN0YXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUudXNlci5nbG9iYWxEYXRhO1xuICAgICAgICB9XG4gICAgfSlcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51MiBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcbiAgICAgICAgICAgIGlzQmluZERlcHQ6IGZhbHNlLFxuICAgICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICcnLFxuICAgICAgICAgICAgICAgIGNvbXBhbnk6ICcnLFxuICAgICAgICAgICAgICAgIGZpcnN0Um9sZU5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIHRlbDogJycsXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgb25TaG93KCkge1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICB9XG4gICAgICAgIG9uTG9hZCgpIHtcbiAgICAgICAgICAgIGlmICh3eC5nZXRTdG9yYWdlU3luYygnaXNCaW5kRGVwdCcpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pc0JpbmREZXB0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2lzQmluZERlcHQnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICAvLyDmiavnoIHliqDlhaVcbiAgICAgICAgICAgIHNjYW5Kb2luKCkge1xuICAgICAgICAgICAgICAgIHd4LnNjYW5Db2RlKHtcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlcy5yZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcXJDb2RlID0gcmVzLnJlc3VsdC5zcGxpdCgnP3FyY29kZT0nKVsxXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxckNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbmREZXB0KHFyQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35omr56CB5pyJ5pWI55qE5LqM57u056CBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvVXNlckluZm8oKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy91c2VySW5mb2BcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvVXNlclVuaXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXJJbmZvLmNvbXBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3VzZXJVbml0J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9TZXR0aW5nKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvc2V0dGluZydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvTG9ncygpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ3MnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDkuIrkvKDlpLTlg49cbiAgICAgICAgICAgIHVwbG9hZFBob3RvKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcbiAgICAgICAgICAgICAgICBsZXQgbGluayA9ICcnO1xuICAgICAgICAgICAgICAgIGlmICh3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLmVudiA9PSAncHJvZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluayA9ICdodHRwczovL3RjYi1hcGkudGVuY2VudGNsb3VkYXBpLmNvbSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGluayA9ICdodHRwczovL2JlaWRvdS5zaWduYWxmaXJlLm5ldC5jbic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsIC8vIOm7mOiupDHlvKBcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRoc1xuICAgICAgICAgICAgICAgICAgICAgICAgd3gudXBsb2FkRmlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBsaW5rICsgJy9zeXN0ZW0vdXNlci9wcm9maWxlL2F2YXRhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhdmF0YXJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VySW5mby5hdmF0YXIgPSB0ZW1wRmlsZVBhdGhzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDpgIDlh7rnmbvlvZVcbiAgICAgICAgICAgIGxvZ291dEhhbmRsZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJMb2dvdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBiaW5kRGVwdChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuYmluZERlcHQocGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5tc2csXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHVzZXJMb2dvdXQoKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnVzZXJMb2dvdXQoKTtcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB3eC5yZW1vdmVTdG9yYWdlU3luYygndG9rZW4nKVxuICAgICAgICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKCdpc0JpbmREZXB0Jyk7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5tc2csXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dpbidcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzmsqHmnInmlbDmja7vvIzph43mlrDor7fmsYLmjqXlj6NcbiAgICAgICAgICAgIGlmICghdGhpcy5nbG9iYWxEYXRhLnVzZXJJZCkge1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2xvYmFsRGF0YSA9IHJlcy51c2VyO1xuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnVVBEQVRFX0dMT0JBTF9EQVRBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsb2JhbERhdGE6IHJlcy51c2VyXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgICAgIGF2YXRhcixcbiAgICAgICAgICAgICAgICBuaWNrTmFtZSxcbiAgICAgICAgICAgICAgICBwaG9uZW51bWJlcixcbiAgICAgICAgICAgICAgICBzZXgsXG4gICAgICAgICAgICAgICAgZmlyc3RSb2xlTmFtZSxcbiAgICAgICAgICAgICAgICB1c2VyTmFtZSxcbiAgICAgICAgICAgICAgICBkZXB0LFxuICAgICAgICAgICAgICAgIHVzZXJJZFxuICAgICAgICAgICAgfSA9IHRoaXMuZ2xvYmFsRGF0YTtcblxuICAgICAgICAgICAgbGV0IHBob25lID0gcGhvbmVudW1iZXIucmVwbGFjZShwaG9uZW51bWJlci5zdWJzdHJpbmcoMywgNyksIFwiKioqKlwiKVxuICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHtcbiAgICAgICAgICAgICAgICBhdmF0YXIsIC8vIOWktOWDj1xuICAgICAgICAgICAgICAgIG5pY2tOYW1lLCAvLyDmmLXnp7BcbiAgICAgICAgICAgICAgICBzZXgsIC8vIOaAp+WIq1xuICAgICAgICAgICAgICAgIHVzZXJOYW1lLCAvLyDnlKjmiLflkI1cbiAgICAgICAgICAgICAgICBmaXJzdFJvbGVOYW1lLFxuICAgICAgICAgICAgICAgIHBob25lLCAvLyDmiYvmnLrlj7dcbiAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgY29tcGFueTogZGVwdCAmJiBkZXB0LmRlcHROYW1lLCAvLyDmiavnoIHliqDlhaXlkI7nmoTlhazlj7jlkI3np7BcbiAgICAgICAgICAgICAgICB0ZWw6IHBob25lbnVtYmVyXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=