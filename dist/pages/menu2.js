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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbImFwaSIsIk1lbnUyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyIiwiY29tcGFueSIsImFkbWluIiwidGVsIiwibmlja25hbWUiLCJtZXRob2RzIiwic2NhbkpvaW4iLCJ3eCIsInNjYW5Db2RlIiwic3VjY2VzcyIsInJlcyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0b1VzZXJJbmZvIiwibmF2aWdhdGVUbyIsInVybCIsIm5pY2tOYW1lIiwidXNlcklkIiwidG9Vc2VyVW5pdCIsInRvU2V0dGluZyIsInRvTG9ncyIsInVwbG9hZFBob3RvIiwidGhhdCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwibG9nb3V0SGFuZGxlIiwidXNlckxvZ291dCIsImdldFVzZXJJbmZvIiwiY29kZSIsInJlbW92ZVN0b3JhZ2VTeW5jIiwidXNlciIsInBob25lbnVtYmVyIiwic2V4IiwidXNlck5hbWUiLCJsb2dpbklwIiwicGhvbmUiLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7SUFDU0MsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLElBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlO0FBREY7QUFGWixTLFFBTVRDLEksR0FBTztBQUNIQyw2QkFBaUJDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkgsZUFEeEM7QUFFSEksc0JBQVU7QUFDTkMsd0JBQVEsRUFERjtBQUVOQyx5QkFBUyxFQUZIO0FBR05DLHVCQUFP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WSxFQUtKO0FBQ1JxQyxvREFOWSxFQU1KO0FBQ1JyQixzREFQWTtBQVFaakIsaURBQVNxQyxPQVJHLEVBUVE7QUFDcEJuQyw2Q0FBS2dDO0FBVE8scUNBQWhCO0FBV0EseUNBQUtPLE1BQUw7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQS9HMEI5QyxlQUFLK0MsSTs7a0JBQW5CckQsSyIsImZpbGUiOiJtZW51Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudTIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJyxcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXG4gICAgICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgICAgIGF2YXRhcjogJycsXG4gICAgICAgICAgICAgICAgY29tcGFueTogJycsXG4gICAgICAgICAgICAgICAgYWRtaW46IGZhbHNlLFxuICAgICAgICAgICAgICAgIHRlbDogJycsXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICcnXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgLy8g5omr56CB5Yqg5YWlXG4gICAgICAgICAgICBzY2FuSm9pbigpIHtcbiAgICAgICAgICAgICAgICB3eC5zY2FuQ29kZSh7XG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSByZXMucmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b1VzZXJJbmZvKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGAvcGFnZXMvdXNlckluZm8/bmlja25hbWU9JHt0aGlzLnVzZXJJbmZvLm5pY2tOYW1lfSZ0ZWw9JHt0aGlzLnVzZXJJbmZvLnRlbH0mdXNlcklkPSR7dGhpcy51c2VySW5mby51c2VySWR9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9Vc2VyVW5pdCgpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3VzZXJVbml0J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9TZXR0aW5nKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvc2V0dGluZydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvTG9ncygpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ3MnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDkuIrkvKDlpLTlg49cbiAgICAgICAgICAgIHVwbG9hZFBob3RvKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLCAvLyDpu5jorqQx5bygXG4gICAgICAgICAgICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXNlckluZm8uYXZhdGFyID0gdGVtcEZpbGVQYXRoc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHd4LnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvdXBsb2FkL2ZpbGVVcGxvYWQnLCAvL+S7heS4uuekuuS+i++8jOmdnuecn+WunueahOaOpeWPo+WcsOWdgFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbmFtZTogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGZvcm1EYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDpgIDlh7rnmbvlvZVcbiAgICAgICAgICAgIGxvZ291dEhhbmRsZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJMb2dvdXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIHVzZXJMb2dvdXQoKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnVzZXJMb2dvdXQoKTtcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB3eC5yZW1vdmVTdG9yYWdlU3luYygndG9rZW4nKVxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIGdldFVzZXJJbmZvKCkge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5nZXRVc2VySW5mbygpO1xuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBhdmF0YXIsIG5pY2tOYW1lLCBwaG9uZW51bWJlciwgc2V4LCBhZG1pbiwgdXNlck5hbWUsIGxvZ2luSXAsIHVzZXJJZCB9ID0gcmVzLnVzZXI7XG4gICAgICAgICAgICAgICAgbGV0IHBob25lID0gcGhvbmVudW1iZXIucmVwbGFjZShwaG9uZW51bWJlci5zdWJzdHJpbmcoMyw3KSwgXCIqKioqXCIpXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHtcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyLCAvLyDlpLTlg49cbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWUsICAvLyDmmLXnp7BcbiAgICAgICAgICAgICAgICAgICAgc2V4LCAgLy8g5oCn5YirXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lLCAgLy8g55So5oi35ZCNXG4gICAgICAgICAgICAgICAgICAgIGFkbWluLCAgLy8g5piv5ZCm5Li6566h55CG5ZGY77yMdHVyZeS4uuaYr1xuICAgICAgICAgICAgICAgICAgICBwaG9uZSwgIC8vIOaJi+acuuWPt1xuICAgICAgICAgICAgICAgICAgICB1c2VySWQsXG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnk6IGxvZ2luSXAsICAgLy8g5omr56CB5Yqg5YWl5ZCO55qE5YWs5Y+45ZCN56ewXG4gICAgICAgICAgICAgICAgICAgIHRlbDogcGhvbmVudW1iZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==