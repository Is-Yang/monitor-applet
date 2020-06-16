'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var api = _interopRequireWildcard(_api);

var _store = require('./../store/index.js');

var _store2 = _interopRequireDefault(_store);

var _util = require('./../utils/util.js');

var _util2 = _interopRequireDefault(_util);

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
                "van-nav-bar": "../components/vant/nav-bar/index",
                "van-icon": "../components/vant/icon/index"
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
                // 判断用户是否开启订阅消息
                var tempId = _wepy2.default.$instance.globalData.tmplId;
                wx.getSetting({
                    withSubscriptions: true,
                    success: function success(res) {
                        var subscriptionsSetting = res.subscriptionsSetting;

                        if (!subscriptionsSetting) {
                            wx.requestSubscribeMessage({
                                tmplIds: tempId,
                                success: function success(res) {
                                    console.log(res);
                                },
                                fail: function fail(err) {
                                    console.log(err);
                                }
                            });
                        } else {
                            wx.openSetting({
                                success: function success(res) {
                                    console.log(res);
                                }
                            });
                        }
                    }
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
                _wepy2.default.$instance.clearQuery();
                this.userLogout();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Menu2, [{
        key: 'onShow',
        value: function onShow() {
            this.isBindDept = wx.getStorageSync('isBindDept');
            this.$apply();
            this.getUserInfo();

            if (this.isBindDept) {
                _wepy2.default.$instance.queryUnread(3000);
            } else {
                //清楚轮询
                _wepy2.default.$instance.clearQuery();
                // 移除底部未读信息
                _wepy2.default.removeTabBarBadge({
                    index: 1 //tabBar的哪一项，从左边算起,
                });
            }
        }
    }, {
        key: 'onHide',
        value: function onHide() {
            if (this.isBindDept) {
                _wepy2.default.$instance.clearQuery();
            }
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            _wepy2.default.$instance.shareImage();
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
                                    this.isBindDept = true;
                                    wx.setStorageSync('isBindDept', true);
                                    this.getUserInfo(true);
                                    wx.showToast({
                                        title: res.msg,
                                        icon: 'success',
                                        duration: 1000
                                    });
                                    _wepy2.default.$instance.queryUnread(3000);
                                    this.$apply();
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
                                    wx.removeStorageSync('globalData');
                                    // wx.clearStorageSync();
                                    wx.showToast({
                                        title: res.msg,
                                        icon: 'success',
                                        duration: 1000
                                    });
                                    setTimeout(function () {
                                        wx.redirectTo({
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
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(init) {
                var res, _res$user, avatar, nickName, phonenumber, sex, firstRoleName, userName, dept, userId, email, createTime, loginDate, phone;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return api.getUserInfo();

                            case 2:
                                res = _context3.sent;

                                if (res.code == 200) {
                                    _res$user = res.user, avatar = _res$user.avatar, nickName = _res$user.nickName, phonenumber = _res$user.phonenumber, sex = _res$user.sex, firstRoleName = _res$user.firstRoleName, userName = _res$user.userName, dept = _res$user.dept, userId = _res$user.userId, email = _res$user.email, createTime = _res$user.createTime, loginDate = _res$user.loginDate;
                                    phone = phonenumber ? phonenumber.replace(phonenumber.substring(3, 7), "****") : '';

                                    this.userInfo = {
                                        avatar: avatar, // 头像
                                        sex: sex, // 性别
                                        userName: userName, // 用户名
                                        firstRoleName: firstRoleName,
                                        phone: phone, // 手机号
                                        userId: userId,
                                        email: email,
                                        createTime: createTime,
                                        loginDate: loginDate,
                                        company: dept && dept.deptName, // 扫码加入后的公司名称
                                        tel: phonenumber
                                        // 昵称
                                    };this.userInfo.nickName = (0, _util2.default)(nickName);
                                    wx.setStorageSync('globalData', res.user);
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getUserInfo(_x2) {
                return _ref4.apply(this, arguments);
            }

            return getUserInfo;
        }()
    }]);

    return Menu2;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu2 , 'pages/menu2'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbImFwaSIsIk1lbnUyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImlzQmluZERlcHQiLCJ1c2VySW5mbyIsImF2YXRhciIsImNvbXBhbnkiLCJmaXJzdFJvbGVOYW1lIiwidGVsIiwibmlja25hbWUiLCJtZXRob2RzIiwic2NhbkpvaW4iLCJ3eCIsInNjYW5Db2RlIiwic3VjY2VzcyIsInJlcyIsInJlc3VsdCIsInFyQ29kZSIsInNwbGl0IiwiYmluZERlcHQiLCJzaG93VG9hc3QiLCJ0aXRsZSIsImljb24iLCJkdXJhdGlvbiIsInRvVXNlckluZm8iLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9Vc2VyVW5pdCIsInRvU2V0dGluZyIsInRlbXBJZCIsInRtcGxJZCIsImdldFNldHRpbmciLCJ3aXRoU3Vic2NyaXB0aW9ucyIsInN1YnNjcmlwdGlvbnNTZXR0aW5nIiwicmVxdWVzdFN1YnNjcmliZU1lc3NhZ2UiLCJ0bXBsSWRzIiwiY29uc29sZSIsImxvZyIsImZhaWwiLCJlcnIiLCJvcGVuU2V0dGluZyIsInRvTG9ncyIsInVwbG9hZFBob3RvIiwidGhhdCIsInRva2VuIiwiZ2V0U3RvcmFnZVN5bmMiLCJsaW5rIiwiZW52IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInRlbXBGaWxlUGF0aHMiLCJ1cGxvYWRGaWxlIiwiZmlsZVBhdGgiLCJuYW1lIiwiaGVhZGVyIiwiZm9ybURhdGEiLCIkYXBwbHkiLCJsb2dvdXRIYW5kbGUiLCJjbGVhclF1ZXJ5IiwidXNlckxvZ291dCIsImdldFVzZXJJbmZvIiwicXVlcnlVbnJlYWQiLCJyZW1vdmVUYWJCYXJCYWRnZSIsImluZGV4Iiwic2hhcmVJbWFnZSIsInBhcmFtcyIsImNvZGUiLCJzZXRTdG9yYWdlU3luYyIsIm1zZyIsInJlbW92ZVN0b3JhZ2VTeW5jIiwic2V0VGltZW91dCIsInJlZGlyZWN0VG8iLCJpbml0IiwidXNlciIsIm5pY2tOYW1lIiwicGhvbmVudW1iZXIiLCJzZXgiLCJ1c2VyTmFtZSIsImRlcHQiLCJ1c2VySWQiLCJlbWFpbCIsImNyZWF0ZVRpbWUiLCJsb2dpbkRhdGUiLCJwaG9uZSIsInJlcGxhY2UiLCJzdWJzdHJpbmciLCJkZXB0TmFtZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUVxQkMsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLElBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlLGtDQURGO0FBRWIsNEJBQVk7QUFGQztBQUZaLFMsUUFPVEMsSSxHQUFPO0FBQ0hDLDZCQUFpQkMsZUFBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCSCxlQUR4QztBQUVISSx3QkFBWSxLQUZUO0FBR0hDLHNCQUFVO0FBQ05DLHdCQUFRLEVBREY7QUFFTkMseUJBQVMsRUFGSDtBQUdOQywrQkFBZSxFQUhUO0FBSU5DLHFCQUFLLEVBSkM7QUFLTkMsMEJBQVU7QUFMSjtBQUhQLFMsUUFxQ1BDLE8sR0FBVTtBQUNOO0FBQ0FDLG9CQUZNLHNCQUVLO0FBQUE7O0FBQ1BDLG1CQUFHQyxRQUFILENBQVk7QUFDUkMsNkJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNkLDRCQUFJQyxTQUFTRCxJQUFJQyxNQUFqQjtBQUNBLDRCQUFJQyxTQUFTRixJQUFJQyxNQUFKLENBQVdFLEtBQVgsQ0FBaUIsVUFBakIsRUFBNkIsQ0FBN0IsQ0FBYjtBQUNBLDRCQUFJRCxNQUFKLEVBQVk7QUFDUixtQ0FBS0UsUUFBTCxDQUFjRixNQUFkO0FBQ0gseUJBRkQsTUFFTztBQUNITCwrQkFBR1EsU0FBSCxDQUFhO0FBQ1RDLHVDQUFPLFdBREU7QUFFVEMsc0NBQU0sTUFG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LDREQVRZO0FBVVo5RSxpREFBUzBFLFFBQVFBLEtBQUtRLFFBVlYsRUFVb0I7QUFDaENoRiw2Q0FBS3FFO0FBRVQ7QUFiZ0IscUNBQWhCLENBY0EsS0FBS3pFLFFBQUwsQ0FBY3dFLFFBQWQsR0FBeUIsb0JBQU9BLFFBQVAsQ0FBekI7QUFDQWhFLHVDQUFHeUQsY0FBSCxDQUFrQixZQUFsQixFQUFnQ3RELElBQUk0RCxJQUFwQztBQUNBLHlDQUFLakIsTUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBMU4wQjFELGVBQUt5RixJOztrQkFBbkIvRixLIiwiZmlsZSI6Im1lbnUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknXHJcbiAgICBpbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi4vc3RvcmUnXHJcbiAgICBpbXBvcnQgZGVjb2RlIGZyb20gJy4uL3V0aWxzL3V0aWwuanMnO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnLFxyXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiLFxyXG4gICAgICAgICAgICAgICAgXCJ2YW4taWNvblwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9pY29uL2luZGV4XCIsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcclxuICAgICAgICAgICAgaXNCaW5kRGVwdDogZmFsc2UsXHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiB7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29tcGFueTogJycsXHJcbiAgICAgICAgICAgICAgICBmaXJzdFJvbGVOYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIHRlbDogJycsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBvblNob3coKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNCaW5kRGVwdCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdpc0JpbmREZXB0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQmluZERlcHQpIHtcclxuICAgICAgICAgICAgICAgIHdlcHkuJGluc3RhbmNlLnF1ZXJ5VW5yZWFkKDMwMDApXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+a4healmui9ruivolxyXG4gICAgICAgICAgICAgICAgd2VweS4kaW5zdGFuY2UuY2xlYXJRdWVyeSgpXHJcbiAgICAgICAgICAgICAgICAvLyDnp7vpmaTlupXpg6jmnKror7vkv6Hmga9cclxuICAgICAgICAgICAgICAgIHdlcHkucmVtb3ZlVGFiQmFyQmFkZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICBpbmRleDogMSAvL3RhYkJhcueahOWTquS4gOmhue+8jOS7juW3pui+ueeul+i1tyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkhpZGUoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQmluZERlcHQpIHtcclxuICAgICAgICAgICAgICAgIHdlcHkuJGluc3RhbmNlLmNsZWFyUXVlcnkoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgICAgIHdlcHkuJGluc3RhbmNlLnNoYXJlSW1hZ2UoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICAvLyDmiavnoIHliqDlhaVcclxuICAgICAgICAgICAgc2NhbkpvaW4oKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zY2FuQ29kZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHFyQ29kZSA9IHJlcy5yZXN1bHQuc3BsaXQoJz9xcmNvZGU9JylbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxckNvZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmluZERlcHQocXJDb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fmiavnoIHmnInmlYjnmoTkuoznu7TnoIEnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvVXNlckluZm8oKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IGAvcGFnZXMvdXNlckluZm9gXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b1VzZXJVbml0KCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXJJbmZvLmNvbXBhbnkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvdXNlclVuaXQnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b1NldHRpbmcoKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDliKTmlq3nlKjmiLfmmK/lkKblvIDlkK/orqLpmIXmtojmga9cclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wSWQgPSB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnRtcGxJZDtcclxuICAgICAgICAgICAgICAgIHd4LmdldFNldHRpbmcoe1xyXG4gICAgICAgICAgICAgICAgICAgIHdpdGhTdWJzY3JpcHRpb25zOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6ICgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgc3Vic2NyaXB0aW9uc1NldHRpbmcgfSA9IHJlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFzdWJzY3JpcHRpb25zU2V0dGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVxdWVzdFN1YnNjcmliZU1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRtcGxJZHM6IHRlbXBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzIChyZXMpIHsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZhaWwgKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4Lm9wZW5TZXR0aW5nKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b0xvZ3MoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9ncydcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIOS4iuS8oOWktOWDj1xyXG4gICAgICAgICAgICB1cGxvYWRQaG90bygpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmsgPSAnJztcclxuICAgICAgICAgICAgICAgIGlmICh3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLmVudiA9PSAncHJvZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5rID0gJ2h0dHBzOi8vdGNiLWFwaS50ZW5jZW50Y2xvdWRhcGkuY29tJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGluayA9ICdodHRwczovL2JlaWRvdS5zaWduYWxmaXJlLm5ldC5jbic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsIC8vIOm7mOiupDHlvKBcclxuICAgICAgICAgICAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHd4LnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBsaW5rICsgJy9zeXN0ZW0vdXNlci9wcm9maWxlL2F2YXRhcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXZhdGFyZmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBdXRob3JpemF0aW9uXCI6IHRva2VuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGE6IHt9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VySW5mby5hdmF0YXIgPSB0ZW1wRmlsZVBhdGhzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIOmAgOWHuueZu+W9lVxyXG4gICAgICAgICAgICBsb2dvdXRIYW5kbGUoKSB7XHJcbiAgICAgICAgICAgICAgICB3ZXB5LiRpbnN0YW5jZS5jbGVhclF1ZXJ5KClcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckxvZ291dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFzeW5jIGJpbmREZXB0KHBhcmFtcykge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmJpbmREZXB0KHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNCaW5kRGVwdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaXNCaW5kRGVwdCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbyh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5tc2csXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgd2VweS4kaW5zdGFuY2UucXVlcnlVbnJlYWQoMzAwMClcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXN5bmMgdXNlckxvZ291dCgpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS51c2VyTG9nb3V0KCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKCd0b2tlbicpXHJcbiAgICAgICAgICAgICAgICB3eC5yZW1vdmVTdG9yYWdlU3luYygnaXNCaW5kRGVwdCcpO1xyXG4gICAgICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ2dsb2JhbERhdGEnKTtcclxuICAgICAgICAgICAgICAgIC8vIHd4LmNsZWFyU3RvcmFnZVN5bmMoKTtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5tc2csXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dpbidcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgZ2V0VXNlckluZm8oaW5pdCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXIsXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVudW1iZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgc2V4LFxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Um9sZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdCxcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZW1haWwsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGltZSxcclxuICAgICAgICAgICAgICAgICAgICBsb2dpbkRhdGVcclxuICAgICAgICAgICAgICAgIH0gPSByZXMudXNlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcGhvbmUgPSBwaG9uZW51bWJlciA/IHBob25lbnVtYmVyLnJlcGxhY2UocGhvbmVudW1iZXIuc3Vic3RyaW5nKDMsIDcpLCBcIioqKipcIikgOiAnJ1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhdmF0YXIsIC8vIOWktOWDj1xyXG4gICAgICAgICAgICAgICAgICAgIHNleCwgLy8g5oCn5YirXHJcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWUsIC8vIOeUqOaIt+WQjVxyXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Um9sZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmUsIC8vIOaJi+acuuWPt1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBlbWFpbCxcclxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVUaW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvZ2luRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb21wYW55OiBkZXB0ICYmIGRlcHQuZGVwdE5hbWUsIC8vIOaJq+eggeWKoOWFpeWQjueahOWFrOWPuOWQjeensFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbDogcGhvbmVudW1iZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIOaYteensFxyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mby5uaWNrTmFtZSA9IGRlY29kZShuaWNrTmFtZSlcclxuICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdnbG9iYWxEYXRhJywgcmVzLnVzZXIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19