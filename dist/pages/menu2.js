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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbImFwaSIsIk1lbnUyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyIiwiY29tcGFueSIsImZpcnN0Um9sZU5hbWUiLCJ0ZWwiLCJuaWNrbmFtZSIsIm1ldGhvZHMiLCJzY2FuSm9pbiIsInd4Iiwic2NhbkNvZGUiLCJzdWNjZXNzIiwicmVzIiwicmVzdWx0IiwicXJDb2RlIiwic3BsaXQiLCJiaW5kRGVwdCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwidG9Vc2VySW5mbyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJuaWNrTmFtZSIsInVzZXJJZCIsInRvVXNlclVuaXQiLCJ0b1NldHRpbmciLCJ0b0xvZ3MiLCJ1cGxvYWRQaG90byIsInRoYXQiLCJ0b2tlbiIsImdldFN0b3JhZ2VTeW5jIiwibGluayIsImVudiIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwidXBsb2FkRmlsZSIsImZpbGVQYXRoIiwibmFtZSIsImhlYWRlciIsImZvcm1EYXRhIiwiJGFwcGx5IiwibG9nb3V0SGFuZGxlIiwidXNlckxvZ291dCIsImdldFVzZXJJbmZvIiwicGFyYW1zIiwiY29kZSIsIm1zZyIsInJlbW92ZVN0b3JhZ2VTeW5jIiwic2V0VGltZW91dCIsInVzZXIiLCJwaG9uZW51bWJlciIsInNleCIsInVzZXJOYW1lIiwiZGVwdCIsInBob25lIiwicmVwbGFjZSIsInN1YnN0cmluZyIsImRlcHROYW1lIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7SUFDU0MsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pC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UGEsRUFRYkMsSUFSYSxhQVFiQSxJQVJhLEVBU2JqQyxNQVRhLGFBU2JBLE1BVGE7QUFXYmtDLHlDQVhhLEdBV0xKLFlBQVlLLE9BQVosQ0FBb0JMLFlBQVlNLFNBQVosQ0FBc0IsQ0FBdEIsRUFBeUIsQ0FBekIsQ0FBcEIsRUFBaUQsTUFBakQsQ0FYSzs7QUFZakIseUNBQUs1RCxRQUFMLEdBQWdCO0FBQ1pDLHNEQURZLEVBQ0o7QUFDUnNCLDBEQUZZLEVBRUY7QUFDVmdDLGdEQUhZLEVBR1A7QUFDTEMsMERBSlksRUFJRjtBQUNWckQsb0VBTFk7QUFNWnVELG9EQU5ZLEVBTUw7QUFDUGxDLHNEQVBZO0FBUVp0QixpREFBU3VELFFBQVFBLEtBQUtJLFFBUlYsRUFRb0I7QUFDaEN6RCw2Q0FBS2tEO0FBVE8scUNBQWhCO0FBV0EseUNBQUtWLE1BQUw7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXpKMEIvQyxlQUFLaUUsSTs7a0JBQW5CdkUsSyIsImZpbGUiOiJtZW51Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudTIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJyxcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXG4gICAgICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgICAgIGF2YXRhcjogJycsXG4gICAgICAgICAgICAgICAgY29tcGFueTogJycsXG4gICAgICAgICAgICAgICAgZmlyc3RSb2xlTmFtZTogJycsXG4gICAgICAgICAgICAgICAgdGVsOiAnJyxcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJydcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8vIOaJq+eggeWKoOWFpVxuICAgICAgICAgICAgc2NhbkpvaW4oKSB7XG4gICAgICAgICAgICAgICAgd3guc2NhbkNvZGUoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBxckNvZGUgPSByZXMucmVzdWx0LnNwbGl0KCc/cXJjb2RlPScpWzFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHFyQ29kZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYmluZERlcHQocXJDb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fmiavnoIHmnInmlYjnmoTkuoznu7TnoIEnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9Vc2VySW5mbygpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3VzZXJJbmZvP25pY2tuYW1lPSR7dGhpcy51c2VySW5mby5uaWNrTmFtZX0mdGVsPSR7dGhpcy51c2VySW5mby50ZWx9JnVzZXJJZD0ke3RoaXMudXNlckluZm8udXNlcklkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvVXNlclVuaXQoKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnVzZXJJbmZvLmNvbXBhbnkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3VzZXJVbml0J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9TZXR0aW5nKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvc2V0dGluZydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvTG9ncygpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ3MnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDkuIrkvKDlpLTlg49cbiAgICAgICAgICAgIHVwbG9hZFBob3RvKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcbiAgICAgICAgICAgICAgICBsZXQgbGluayA9ICcnO1xuICAgICAgICAgICAgICAgIGlmICh3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLmVudiA9PSAncHJvZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluayA9ICdodHRwczovL3RjYi1hcGkudGVuY2VudGNsb3VkYXBpLmNvbSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGluayA9ICdodHRwczovL2JlaWRvdS5zaWduYWxmaXJlLm5ldC5jbic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsIC8vIOm7mOiupDHlvKBcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRoc1xuICAgICAgICAgICAgICAgICAgICAgICAgd3gudXBsb2FkRmlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBsaW5rICsgJy9zeXN0ZW0vdXNlci9wcm9maWxlL2F2YXRhcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhdmF0YXJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogdG9rZW5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhOiB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VySW5mby5hdmF0YXIgPSB0ZW1wRmlsZVBhdGhzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGF0LiRhcHBseSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDpgIDlh7rnmbvlvZVcbiAgICAgICAgICAgIGxvZ291dEhhbmRsZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJMb2dvdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBiaW5kRGVwdChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuYmluZERlcHQocGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5tc2csXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzeW5jIHVzZXJMb2dvdXQoKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnVzZXJMb2dvdXQoKTtcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB3eC5yZW1vdmVTdG9yYWdlU3luYygndG9rZW4nKVxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXMubXNnLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4nXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhc3luYyBnZXRVc2VySW5mbygpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgICAgICAgIGF2YXRhcixcbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWUsXG4gICAgICAgICAgICAgICAgICAgIHBob25lbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICBzZXgsXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Um9sZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lLFxuICAgICAgICAgICAgICAgICAgICBkZXB0LFxuICAgICAgICAgICAgICAgICAgICB1c2VySWRcbiAgICAgICAgICAgICAgICB9ID0gcmVzLnVzZXI7XG4gICAgICAgICAgICAgICAgbGV0IHBob25lID0gcGhvbmVudW1iZXIucmVwbGFjZShwaG9uZW51bWJlci5zdWJzdHJpbmcoMywgNyksIFwiKioqKlwiKVxuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSB7XG4gICAgICAgICAgICAgICAgICAgIGF2YXRhciwgLy8g5aS05YOPXG4gICAgICAgICAgICAgICAgICAgIG5pY2tOYW1lLCAvLyDmmLXnp7BcbiAgICAgICAgICAgICAgICAgICAgc2V4LCAvLyDmgKfliKtcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWUsIC8vIOeUqOaIt+WQjVxuICAgICAgICAgICAgICAgICAgICBmaXJzdFJvbGVOYW1lLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZSwgLy8g5omL5py65Y+3XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICAgICAgICAgICAgY29tcGFueTogZGVwdCAmJiBkZXB0LmRlcHROYW1lLCAvLyDmiavnoIHliqDlhaXlkI7nmoTlhazlj7jlkI3np7BcbiAgICAgICAgICAgICAgICAgICAgdGVsOiBwaG9uZW51bWJlclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19