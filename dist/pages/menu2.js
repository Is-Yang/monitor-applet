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
                admin: false,
                tel: '',
                nickname: ''
            }
        }, _this.methods = {
            // 扫码加入
            scanJoin: function scanJoin() {
                wx.scanCode({
                    success: function success(res) {
                        var result = res.result;
                        console.log(result);
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
        key: 'userLogout',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return api.userLogout();

                            case 2:
                                res = _context.sent;

                                if (res.code == 200) {
                                    wx.removeStorage('token');
                                    wx.navigateTo({
                                        url: '/pages/login'
                                    });
                                }

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function userLogout() {
                return _ref2.apply(this, arguments);
            }

            return userLogout;
        }()
    }, {
        key: 'getUserInfo',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var res, _res$user, avatar, nickName, phonenumber, sex, admin, userName, loginIp, userId, phone;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return api.getUserInfo();

                            case 2:
                                res = _context2.sent;

                                if (res.code == 200) {
                                    _res$user = res.user, avatar = _res$user.avatar, nickName = _res$user.nickName, phonenumber = _res$user.phonenumber, sex = _res$user.sex, admin = _res$user.admin, userName = _res$user.userName, loginIp = _res$user.loginIp, userId = _res$user.userId;
                                    phone = phonenumber.replace(phonenumber.substring(3, 7), "****");

                                    this.userInfo = {
                                        avatar: avatar, // 头像
                                        nickName: nickName, // 昵称
                                        sex: sex, // 性别
                                        userName: userName, // 用户名
                                        admin: admin, // 是否为管理员，ture为是
                                        phone: phone, // 手机号
                                        userId: userId,
                                        company: loginIp, // 扫码加入后的公司名称
                                        tel: phonenumber
                                    };
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getUserInfo() {
                return _ref3.apply(this, arguments);
            }

            return getUserInfo;
        }()
    }]);

    return Menu2;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu2 , 'pages/menu2'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbImFwaSIsIk1lbnUyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyIiwiY29tcGFueSIsImFkbWluIiwidGVsIiwibmlja25hbWUiLCJtZXRob2RzIiwic2NhbkpvaW4iLCJ3eCIsInNjYW5Db2RlIiwic3VjY2VzcyIsInJlcyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0b1VzZXJJbmZvIiwibmF2aWdhdGVUbyIsInVybCIsIm5pY2tOYW1lIiwidXNlcklkIiwidG9Vc2VyVW5pdCIsInRvU2V0dGluZyIsInRvTG9ncyIsInVwbG9hZFBob3RvIiwidGhhdCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwibG9nb3V0SGFuZGxlIiwidXNlckxvZ291dCIsImdldFVzZXJJbmZvIiwiY29kZSIsInJlbW92ZVN0b3JhZ2UiLCJ1c2VyIiwicGhvbmVudW1iZXIiLCJzZXgiLCJ1c2VyTmFtZSIsImxvZ2luSXAiLCJwaG9uZSIsInJlcGxhY2UiLCJzdWJzdHJpbmciLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7Ozs7Ozs7OztJQUNTQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsSUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsK0JBQWU7QUFERjtBQUZaLFMsUUFNVEMsSSxHQUFPO0FBQ0hDLDZCQUFpQkMsZUFBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCSCxlQUR4QztBQUVISSxzQkFBVTtBQUNOQyx3QkFBUSxFQURGO0FBRU5DLHlCQUFTLEVBRkg7QUFHTkMsdUJBQU8sS0FI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SjtBQUNScUMsb0RBTlksRUFNSjtBQUNSckIsc0RBUFk7QUFRWmpCLGlEQUFTcUMsT0FSRyxFQVFRO0FBQ3BCbkMsNkNBQUtnQztBQVRPLHFDQUFoQjtBQVdBLHlDQUFLTyxNQUFMO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEvRzBCOUMsZUFBSytDLEk7O2tCQUFuQnJELEsiLCJmaWxlIjoibWVudTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnLFxyXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcclxuICAgICAgICAgICAgdXNlckluZm86IHtcclxuICAgICAgICAgICAgICAgIGF2YXRhcjogJycsXHJcbiAgICAgICAgICAgICAgICBjb21wYW55OiAnJyxcclxuICAgICAgICAgICAgICAgIGFkbWluOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHRlbDogJycsXHJcbiAgICAgICAgICAgICAgICBuaWNrbmFtZTogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25TaG93KCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICAvLyDmiavnoIHliqDlhaVcclxuICAgICAgICAgICAgc2NhbkpvaW4oKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zY2FuQ29kZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzLnJlc3VsdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvVXNlckluZm8oKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IGAvcGFnZXMvdXNlckluZm8/bmlja25hbWU9JHt0aGlzLnVzZXJJbmZvLm5pY2tOYW1lfSZ0ZWw9JHt0aGlzLnVzZXJJbmZvLnRlbH0mdXNlcklkPSR7dGhpcy51c2VySW5mby51c2VySWR9YFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9Vc2VyVW5pdCgpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy91c2VyVW5pdCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvU2V0dGluZygpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9zZXR0aW5nJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9Mb2dzKCkge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ3MnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyDkuIrkvKDlpLTlg49cclxuICAgICAgICAgICAgdXBsb2FkUGhvdG8oKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsIC8vIOm7mOiupDHlvKBcclxuICAgICAgICAgICAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXNlckluZm8uYXZhdGFyID0gdGVtcEZpbGVQYXRoc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd3gudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VwbG9hZC9maWxlVXBsb2FkJywgLy/ku4XkuLrnpLrkvovvvIzpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBuYW1lOiBcImZpbGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBmb3JtRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g6YCA5Ye655m75b2VXHJcbiAgICAgICAgICAgIGxvZ291dEhhbmRsZSgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckxvZ291dCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyB1c2VyTG9nb3V0KCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnVzZXJMb2dvdXQoKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZSgndG9rZW4nKTtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dpbidcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmdldFVzZXJJbmZvKCk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBhdmF0YXIsIG5pY2tOYW1lLCBwaG9uZW51bWJlciwgc2V4LCBhZG1pbiwgdXNlck5hbWUsIGxvZ2luSXAsIHVzZXJJZCB9ID0gcmVzLnVzZXI7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGhvbmUgPSBwaG9uZW51bWJlci5yZXBsYWNlKHBob25lbnVtYmVyLnN1YnN0cmluZygzLDcpLCBcIioqKipcIilcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyLCAvLyDlpLTlg49cclxuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZSwgIC8vIOaYteensFxyXG4gICAgICAgICAgICAgICAgICAgIHNleCwgIC8vIOaAp+WIq1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lLCAgLy8g55So5oi35ZCNXHJcbiAgICAgICAgICAgICAgICAgICAgYWRtaW4sICAvLyDmmK/lkKbkuLrnrqHnkIblkZjvvIx0dXJl5Li65pivXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmUsICAvLyDmiYvmnLrlj7dcclxuICAgICAgICAgICAgICAgICAgICB1c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcGFueTogbG9naW5JcCwgICAvLyDmiavnoIHliqDlhaXlkI7nmoTlhazlj7jlkI3np7BcclxuICAgICAgICAgICAgICAgICAgICB0ZWw6IHBob25lbnVtYmVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=