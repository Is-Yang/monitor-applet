'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu2 = function (_wepy$page) {
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
                    url: '/pages/userInfo?nickname=' + this.userInfo.nickName + '&tel=' + this.userInfo.tel + '&userId=' + this.userInfo.userId
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
                var res, _res$user, avatar, nickName, phonenumber, sex, firstRoleName, userName, dept, userId, phone;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return api.getUserInfo();

                            case 2:
                                res = _context3.sent;

                                if (res.code == 200) {
                                    _res$user = res.user, avatar = _res$user.avatar, nickName = _res$user.nickName, phonenumber = _res$user.phonenumber, sex = _res$user.sex, firstRoleName = _res$user.firstRoleName, userName = _res$user.userName, dept = _res$user.dept, userId = _res$user.userId;
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
                                }

                            case 4:
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
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu2 , 'pages/menu2'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbImFwaSIsIk1lbnUyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImlzQmluZERlcHQiLCJ1c2VySW5mbyIsImF2YXRhciIsImNvbXBhbnkiLCJmaXJzdFJvbGVOYW1lIiwidGVsIiwibmlja25hbWUiLCJtZXRob2RzIiwic2NhbkpvaW4iLCJ3eCIsInNjYW5Db2RlIiwic3VjY2VzcyIsInJlcyIsInJlc3VsdCIsInFyQ29kZSIsInNwbGl0IiwiYmluZERlcHQiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInRvVXNlckluZm8iLCJuYXZpZ2F0ZVRvIiwidXJsIiwibmlja05hbWUiLCJ1c2VySWQiLCJ0b1VzZXJVbml0IiwidG9TZXR0aW5nIiwidG9Mb2dzIiwidXBsb2FkUGhvdG8iLCJ0aGF0IiwidG9rZW4iLCJnZXRTdG9yYWdlU3luYyIsImxpbmsiLCJlbnYiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwidGVtcEZpbGVQYXRocyIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsIm5hbWUiLCJoZWFkZXIiLCJmb3JtRGF0YSIsIiRhcHBseSIsImxvZ291dEhhbmRsZSIsInVzZXJMb2dvdXQiLCJnZXRVc2VySW5mbyIsInBhcmFtcyIsImNvZGUiLCJtc2ciLCJyZW1vdmVTdG9yYWdlU3luYyIsInNldFRpbWVvdXQiLCJ1c2VyIiwicGhvbmVudW1iZXIiLCJzZXgiLCJ1c2VyTmFtZSIsImRlcHQiLCJwaG9uZSIsInJlcGxhY2UiLCJzdWJzdHJpbmciLCJkZXB0TmFtZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0lBQVlBLEc7Ozs7Ozs7Ozs7Ozs7O0lBQ1NDLEs7Ozs7Ozs7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Qzs7QUFDSixvQ0FBSUEsSUFBSXNDLElBQUosSUFBWSxHQUFoQixFQUFxQjtBQUFBLGdEQVVidEMsSUFBSTBDLElBVlMsRUFFYnBELE1BRmEsYUFFYkEsTUFGYSxFQUdic0IsUUFIYSxhQUdiQSxRQUhhLEVBSWIrQixXQUphLGFBSWJBLFdBSmEsRUFLYkMsR0FMYSxhQUtiQSxHQUxhLEVBTWJwRCxhQU5hLGFBTWJBLGFBTmEsRUFPYnFELFFBUGEsYUFPYkEsUUFQYSxFQVFiQyxJQVJhLGFBUWJBLElBUmEsRUFTYmpDLE1BVGEsYUFTYkEsTUFUYTtBQVdia0MseUNBWGEsR0FXTEosWUFBWUssT0FBWixDQUFvQkwsWUFBWU0sU0FBWixDQUFzQixDQUF0QixFQUF5QixDQUF6QixDQUFwQixFQUFpRCxNQUFqRCxDQVhLOztBQVlqQix5Q0FBSzVELFFBQUwsR0FBZ0I7QUFDWkMsc0RBRFksRUFDSjtBQUNSc0IsMERBRlksRUFFRjtBQUNWZ0MsZ0RBSFksRUFHUDtBQUNMQywwREFKWSxFQUlGO0FBQ1ZyRCxvRUFMWTtBQU1adUQsb0RBTlksRUFNTDtBQUNQbEMsc0RBUFk7QUFRWnRCLGlEQUFTdUQsUUFBUUEsS0FBS0ksUUFSVixFQVFvQjtBQUNoQ3pELDZDQUFLa0Q7QUFUTyxxQ0FBaEI7QUFXQSx5Q0FBS1YsTUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakswQmhELGVBQUtrRSxJOztrQkFBbkJ4RSxLIiwiZmlsZSI6Im1lbnUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51MiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJyxcclxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXHJcbiAgICAgICAgICAgIGlzQmluZERlcHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICB1c2VySW5mbzoge1xyXG4gICAgICAgICAgICAgICAgYXZhdGFyOiAnJyxcclxuICAgICAgICAgICAgICAgIGNvbXBhbnk6ICcnLFxyXG4gICAgICAgICAgICAgICAgZmlyc3RSb2xlTmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICB0ZWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgb25TaG93KCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAgICAgaWYgKHd4LmdldFN0b3JhZ2VTeW5jKCdpc0JpbmREZXB0JykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNCaW5kRGVwdCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdpc0JpbmREZXB0Jyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIC8vIOaJq+eggeWKoOWFpVxyXG4gICAgICAgICAgICBzY2FuSm9pbigpIHtcclxuICAgICAgICAgICAgICAgIHd4LnNjYW5Db2RlKHtcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXMucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcXJDb2RlID0gcmVzLnJlc3VsdC5zcGxpdCgnP3FyY29kZT0nKVsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHFyQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iaW5kRGVwdChxckNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+aJq+eggeacieaViOeahOS6jOe7tOeggScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9Vc2VySW5mbygpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogYC9wYWdlcy91c2VySW5mbz9uaWNrbmFtZT0ke3RoaXMudXNlckluZm8ubmlja05hbWV9JnRlbD0ke3RoaXMudXNlckluZm8udGVsfSZ1c2VySWQ9JHt0aGlzLnVzZXJJbmZvLnVzZXJJZH1gXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b1VzZXJVbml0KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXJJbmZvLmNvbXBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvdXNlclVuaXQnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b1NldHRpbmcoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvc2V0dGluZydcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvTG9ncygpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dzJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g5LiK5Lyg5aS05YOPXHJcbiAgICAgICAgICAgIHVwbG9hZFBob3RvKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGluayA9ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuZW52ID09ICdwcm9kJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmsgPSAnaHR0cHM6Ly90Y2ItYXBpLnRlbmNlbnRjbG91ZGFwaS5jb20nO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rID0gJ2h0dHBzOi8vYmVpZG91LnNpZ25hbGZpcmUubmV0LmNuJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kMeW8oFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3gudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGxpbmsgKyAnL3N5c3RlbS91c2VyL3Byb2ZpbGUvYXZhdGFyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhdmF0YXJmaWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogdG9rZW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YToge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVzZXJJbmZvLmF2YXRhciA9IHRlbXBGaWxlUGF0aHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g6YCA5Ye655m75b2VXHJcbiAgICAgICAgICAgIGxvZ291dEhhbmRsZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckxvZ291dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGJpbmREZXB0KHBhcmFtcykge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmJpbmREZXB0KHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5tc2csXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIHVzZXJMb2dvdXQoKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkudXNlckxvZ291dCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5yZW1vdmVTdG9yYWdlU3luYygndG9rZW4nKVxyXG4gICAgICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ2lzQmluZERlcHQnKTtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5tc2csXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dpbidcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBhc3luYyBnZXRVc2VySW5mbygpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lbnVtYmVyLFxyXG4gICAgICAgICAgICAgICAgICAgIHNleCxcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdFJvbGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHQsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICAgICAgICB9ID0gcmVzLnVzZXI7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGhvbmUgPSBwaG9uZW51bWJlci5yZXBsYWNlKHBob25lbnVtYmVyLnN1YnN0cmluZygzLCA3KSwgXCIqKioqXCIpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGF2YXRhciwgLy8g5aS05YOPXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWUsIC8vIOaYteensFxyXG4gICAgICAgICAgICAgICAgICAgIHNleCwgLy8g5oCn5YirXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWUsIC8vIOeUqOaIt+WQjVxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Um9sZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmUsIC8vIOaJi+acuuWPt1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBjb21wYW55OiBkZXB0ICYmIGRlcHQuZGVwdE5hbWUsIC8vIOaJq+eggeWKoOWFpeWQjueahOWFrOWPuOWQjeensFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbDogcGhvbmVudW1iZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==