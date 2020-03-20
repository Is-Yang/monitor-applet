'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var api = _interopRequireWildcard(_api);

var _fun = require('./../utils/fun.js');

var _fun2 = _interopRequireDefault(_fun);

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
                wx.chooseImage({
                    count: 1, // 默认1张
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function success(res) {
                        var tempFilePaths = res.tempFilePaths;
                        that.userInfo.avatar = tempFilePaths[0];
                        // wx.uploadFile({
                        //   url: 'http://localhost:8080/upload/fileUpload', //仅为示例，非真实的接口地址
                        //   filePath: tempFilePaths[0],
                        //   name: "file",
                        //   header: {
                        //     "Content-Type": "multipart/form-data"
                        //   },
                        //   formData: {
                        //   },
                        //   success: function(res) {
                        //     console.log(res);
                        //   }
                        // });
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbImFwaSIsIk1lbnUyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyIiwiY29tcGFueSIsImZpcnN0Um9sZU5hbWUiLCJ0ZWwiLCJuaWNrbmFtZSIsIm1ldGhvZHMiLCJzY2FuSm9pbiIsInd4Iiwic2NhbkNvZGUiLCJzdWNjZXNzIiwicmVzIiwicmVzdWx0IiwicXJDb2RlIiwic3BsaXQiLCJiaW5kRGVwdCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwidG9Vc2VySW5mbyIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJuaWNrTmFtZSIsInVzZXJJZCIsInRvVXNlclVuaXQiLCJ0b1NldHRpbmciLCJ0b0xvZ3MiLCJ1cGxvYWRQaG90byIsInRoYXQiLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic2l6ZVR5cGUiLCJzb3VyY2VUeXBlIiwidGVtcEZpbGVQYXRocyIsImxvZ291dEhhbmRsZSIsInVzZXJMb2dvdXQiLCJnZXRVc2VySW5mbyIsInBhcmFtcyIsImNvZGUiLCJtc2ciLCJyZW1vdmVTdG9yYWdlU3luYyIsInNldFRpbWVvdXQiLCJ1c2VyIiwicGhvbmVudW1iZXIiLCJzZXgiLCJ1c2VyTmFtZSIsImRlcHQiLCJwaG9uZSIsInJlcGxhY2UiLCJzdWJzdHJpbmciLCJkZXB0TmFtZSIsIiRhcHBseSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJDLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixJQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwrQkFBZTtBQURGO0FBRlosUyxRQU1UQyxJLEdBQU87QUFD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cm9tICd3ZXB5J1xuICAgIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xuICAgIGltcG9ydCBmdW4gZnJvbSAnLi4vdXRpbHMvZnVuJ1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCcsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxuICAgICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICcnLFxuICAgICAgICAgICAgICAgIGNvbXBhbnk6ICcnLFxuICAgICAgICAgICAgICAgIGZpcnN0Um9sZU5hbWU6ICcnLFxuICAgICAgICAgICAgICAgIHRlbDogJycsXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLy8g5omr56CB5Yqg5YWlXG4gICAgICAgICAgICBzY2FuSm9pbigpIHtcbiAgICAgICAgICAgICAgICB3eC5zY2FuQ29kZSh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXMucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHFyQ29kZSA9IHJlcy5yZXN1bHQuc3BsaXQoJz9xcmNvZGU9JylbMV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihxckNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJpbmREZXB0KHFyQ29kZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAn6K+35omr56CB5pyJ5pWI55qE5LqM57u056CBJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9Vc2VySW5mbygpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3VzZXJJbmZvP25pY2tuYW1lPSR7dGhpcy51c2VySW5mby5uaWNrTmFtZX0mdGVsPSR7dGhpcy51c2VySW5mby50ZWx9JnVzZXJJZD0ke3RoaXMudXNlckluZm8udXNlcklkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvVXNlclVuaXQoKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy91c2VyVW5pdCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvU2V0dGluZygpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3NldHRpbmcnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b0xvZ3MoKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dzJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5LiK5Lyg5aS05YOPXG4gICAgICAgICAgICB1cGxvYWRQaG90bygpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kMeW8oFxuICAgICAgICAgICAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVzZXJJbmZvLmF2YXRhciA9IHRlbXBGaWxlUGF0aHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3eC51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VwbG9hZC9maWxlVXBsb2FkJywgLy/ku4XkuLrnpLrkvovvvIzpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG5hbWU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBmb3JtRGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g6YCA5Ye655m75b2VXG4gICAgICAgICAgICBsb2dvdXRIYW5kbGUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyTG9nb3V0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBiaW5kRGVwdChwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuYmluZERlcHQocGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5tc2csXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgdXNlckxvZ291dCgpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkudXNlckxvZ291dCgpO1xuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKCd0b2tlbicpXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5tc2csXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCk9PiB7XG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luJ1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBnZXRVc2VySW5mbygpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYXZhdGFyLCBuaWNrTmFtZSwgcGhvbmVudW1iZXIsIHNleCwgZmlyc3RSb2xlTmFtZSwgdXNlck5hbWUsIGRlcHQsIHVzZXJJZCB9ID0gcmVzLnVzZXI7XG4gICAgICAgICAgICAgICAgbGV0IHBob25lID0gcGhvbmVudW1iZXIucmVwbGFjZShwaG9uZW51bWJlci5zdWJzdHJpbmcoMyw3KSwgXCIqKioqXCIpXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyLCAvLyDlpLTlg49cbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWUsICAvLyDmmLXnp7BcbiAgICAgICAgICAgICAgICAgICAgc2V4LCAgLy8g5oCn5YirXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lLCAgLy8g55So5oi35ZCNXG4gICAgICAgICAgICAgICAgICAgIGZpcnN0Um9sZU5hbWUsICBcbiAgICAgICAgICAgICAgICAgICAgcGhvbmUsICAvLyDmiYvmnLrlj7dcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkLFxuICAgICAgICAgICAgICAgICAgICBjb21wYW55OiBkZXB0ICYmIGRlcHQuZGVwdE5hbWUsICAgLy8g5omr56CB5Yqg5YWl5ZCO55qE5YWs5Y+45ZCN56ewXG4gICAgICAgICAgICAgICAgICAgIHRlbDogcGhvbmVudW1iZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==