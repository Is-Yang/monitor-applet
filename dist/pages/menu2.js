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
                                    wx.removeStorageSync('token');
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbImFwaSIsIk1lbnUyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyIiwiY29tcGFueSIsImFkbWluIiwidGVsIiwibmlja25hbWUiLCJtZXRob2RzIiwic2NhbkpvaW4iLCJ3eCIsInNjYW5Db2RlIiwic3VjY2VzcyIsInJlcyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0b1VzZXJJbmZvIiwibmF2aWdhdGVUbyIsInVybCIsIm5pY2tOYW1lIiwidXNlcklkIiwidG9Vc2VyVW5pdCIsInVwbG9hZFBob3RvIiwidGhhdCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwibG9nb3V0SGFuZGxlIiwidXNlckxvZ291dCIsImdldFVzZXJJbmZvIiwiY29kZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwidXNlciIsInBob25lbnVtYmVyIiwic2V4IiwidXNlck5hbWUiLCJsb2dpbklwIiwicGhvbmUiLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7SUFDU0MsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLElBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlO0FBREY7QUFGWixTLFFBTVRDLEksR0FBTztBQUNIQyw2QkFBaUJDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkgsZUFEeEM7QUFFSEksc0JBQVU7QUFDTkMsd0JBQVEsRUFERjtBQUVOQyx5QkFBUyxFQUZIO0FBR05DLHVCQUFPLEtBSEQ7QUFJTkMscUJBQUssRUFK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LCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCcsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxuICAgICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICcnLFxuICAgICAgICAgICAgICAgIGNvbXBhbnk6ICcnLFxuICAgICAgICAgICAgICAgIGFkbWluOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0ZWw6ICcnLFxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93KCkge1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8vIOaJq+eggeWKoOWFpVxuICAgICAgICAgICAgc2NhbkpvaW4oKSB7XG4gICAgICAgICAgICAgICAgd3guc2NhbkNvZGUoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9Vc2VySW5mbygpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3VzZXJJbmZvP25pY2tuYW1lPSR7dGhpcy51c2VySW5mby5uaWNrTmFtZX0mdGVsPSR7dGhpcy51c2VySW5mby50ZWx9JnVzZXJJZD0ke3RoaXMudXNlckluZm8udXNlcklkfWBcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvVXNlclVuaXQoKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy91c2VyVW5pdCdcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOS4iuS8oOWktOWDj1xuICAgICAgICAgICAgdXBsb2FkUGhvdG8oKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IDEsIC8vIOm7mOiupDHlvKBcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRoc1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VySW5mby5hdmF0YXIgPSB0ZW1wRmlsZVBhdGhzWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd3gudXBsb2FkRmlsZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91cGxvYWQvZmlsZVVwbG9hZCcsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBuYW1lOiBcImZpbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgZm9ybURhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIOmAgOWHuueZu+W9lVxuICAgICAgICAgICAgbG9nb3V0SGFuZGxlKCkge1xuICAgICAgICAgICAgICAgIHRoaXMudXNlckxvZ291dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgdXNlckxvZ291dCgpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkudXNlckxvZ291dCgpO1xuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKCd0b2tlbicpO1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIGdldFVzZXJJbmZvKCkge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5nZXRVc2VySW5mbygpO1xuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBhdmF0YXIsIG5pY2tOYW1lLCBwaG9uZW51bWJlciwgc2V4LCBhZG1pbiwgdXNlck5hbWUsIGxvZ2luSXAsIHVzZXJJZCB9ID0gcmVzLnVzZXI7XG4gICAgICAgICAgICAgICAgbGV0IHBob25lID0gcGhvbmVudW1iZXIucmVwbGFjZShwaG9uZW51bWJlci5zdWJzdHJpbmcoMyw3KSwgXCIqKioqXCIpXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyLCAvLyDlpLTlg49cbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWUsICAvLyDmmLXnp7BcbiAgICAgICAgICAgICAgICAgICAgc2V4LCAgLy8g5oCn5YirXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lLCAgLy8g55So5oi35ZCNXG4gICAgICAgICAgICAgICAgICAgIGFkbWluLCAgLy8g5piv5ZCm5Li6566h55CG5ZGY77yMdHVyZeS4uuaYr1xuICAgICAgICAgICAgICAgICAgICBwaG9uZSwgIC8vIOaJi+acuuWPt1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnk6IGxvZ2luSXAsICAgLy8g5omr56CB5Yqg5YWl5ZCO55qE5YWs5Y+45ZCN56ewXG4gICAgICAgICAgICAgICAgICAgIHRlbDogcGhvbmVudW1iZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==