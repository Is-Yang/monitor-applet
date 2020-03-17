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
                    url: '/pages/userInfo?nickname=' + this.userInfo.nickName + '&tel=' + this.userInfo.tel
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
                var res, _res$user, avatar, nickName, phonenumber, sex, admin, userName, loginIp, phone;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return api.getUserInfo();

                            case 2:
                                res = _context2.sent;

                                if (res.code == 200) {
                                    _res$user = res.user, avatar = _res$user.avatar, nickName = _res$user.nickName, phonenumber = _res$user.phonenumber, sex = _res$user.sex, admin = _res$user.admin, userName = _res$user.userName, loginIp = _res$user.loginIp;
                                    phone = phonenumber.replace(phonenumber.substring(3, 7), "****");

                                    this.userInfo = {
                                        avatar: avatar, // 头像
                                        nickName: nickName, // 昵称
                                        sex: sex, // 性别
                                        userName: userName, // 用户名
                                        admin: admin, // 是否为管理员，ture为是
                                        phone: phone, // 手机号
                                        company: loginIp, // 扫码加入后的公司名称
                                        tel: phonenumber
                                    };
                                    this.$apply();
                                }
                                console.log(res);

                            case 5:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbImFwaSIsIk1lbnUyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyIiwiY29tcGFueSIsImFkbWluIiwidGVsIiwibmlja25hbWUiLCJtZXRob2RzIiwic2NhbkpvaW4iLCJ3eCIsInNjYW5Db2RlIiwic3VjY2VzcyIsInJlcyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0b1VzZXJJbmZvIiwibmF2aWdhdGVUbyIsInVybCIsIm5pY2tOYW1lIiwidG9Vc2VyVW5pdCIsInVwbG9hZFBob3RvIiwidGhhdCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwibG9nb3V0SGFuZGxlIiwidXNlckxvZ291dCIsImdldFVzZXJJbmZvIiwiY29kZSIsInJlbW92ZVN0b3JhZ2UiLCJ1c2VyIiwicGhvbmVudW1iZXIiLCJzZXgiLCJ1c2VyTmFtZSIsImxvZ2luSXAiLCJwaG9uZSIsInJlcGxhY2UiLCJzdWJzdHJpbmciLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7Ozs7Ozs7OztJQUNTQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsSUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsK0JBQWU7QUFERjtBQUZaLFMsUUFNVEMsSSxHQUFPO0FBQ0hDLDZCQUFpQkMsZUFBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCSCxlQUR4QztBQUVISSxzQkFBVTtBQUNOQyx3QkFBUSxFQURGO0FBRU5DLHlCQUFTLEVBRkg7QUFHTkMsdUJBQU8sS0FIRDtBQUlOQyxxQkFBSyxFQUpDO0FBS05DLDBCQUFVO0FBTEo7QUFGUCxTLFFBZVBDLE8sR0FBVTtBQUNOO0FBQ0FDLG9CQUZNLHNCQUVLO0FBQ1BDLG1CQUFHQyxRQUFILENBQVk7QUFDUkMsNkJBQVMsaUJBQUNDLEdBQUQsRUFBUztBQUNkLDRCQUFJQyxTQUFTRCxJQUFJQyxNQUFqQjtBQUNBQyxnQ0FBUUMsR0FBUixDQUFZRixNQUFaO0FBQ0g7QUFKTyxpQkFBWjtBQU1ILGFBVEs7QUFVTkcsc0JBVk0sd0JBVU87QUFDVFAsbUJBQUdRLFVBQUgsQ0FBYztBQUNWQyx1REFBaUMsS0FBS2pCLFFBQUwsQ0FBY2tCLFFBQS9DLGFBQStELEtBQUtsQixRQUFMLENBQWNJO0FBRG5FLGlCQUFkO0FBR0gsYUFkSztBQWVOZSxzQkFmTSx3QkFlTztBQUNUWCxtQkFBR1EsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLO0FBREssaUJBQWQ7QUFHSCxhQW5CSzs7QUFvQk47QUFDQUcsdUJBckJNLHlCQXFCUTtBQUNWLG9CQUFJQyxPQUFPLElBQVg7QUFDQWIsbUJBQUdjLFdBQUgsQ0FBZTtBQUNYQywyQkFBTyxDQURJLEVBQ0Q7QUFDVkMsOEJBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZDLEVBRTJCO0FBQ3RDQyxnQ0FBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEQsRUFHc0I7QUFDakNmLDZCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDbkIsNEJBQUllLGdCQUFnQmYsSUFBSWUsYUFBeEI7QUFDQUwsNkJBQUtyQixRQUFMLENBQWNDLE1BQWQsR0FBdUJ5QixjQUFjLENBQWQsQ0FBdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBcEJVLGlCQUFmO0FBc0JILGFBN0NLOztBQThDTjtBQUNBQyx3QkEvQ00sMEJBK0NTO0FBQ1gscUJBQUtDLFVBQUw7QUFDSDtBQWpESyxTOzs7OztpQ0FKRDtBQUNMLGlCQUFLQyxXQUFMO0FBQ0g7Ozs7Ozs7Ozs7O3VDQXVEbUJ2QyxJQUFJc0MsVUFBSixFOzs7QUFBWmpCLG1DOztBQUNKLG9DQUFJQSxJQUFJbUIsSUFBSixJQUFZLEdBQWhCLEVBQXFCO0FBQ2pCdEIsdUNBQUd1QixhQUFILENBQWlCLE9BQWpCO0FBQ0F2Qix1Q0FBR1EsVUFBSCxDQUFjO0FBQ1ZDLDZDQUFLO0FBREsscUNBQWQ7QUFHSDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O3VDQUllM0IsSUFBSXVDLFdBQUosRTs7O0FBQVpsQixtQzs7QUFDSixvQ0FBR0EsSUFBSW1CLElBQUosSUFBWSxHQUFmLEVBQW9CO0FBQUEsZ0RBQ3lEbkIsSUFBSXFCLElBRDdELEVBQ1IvQixNQURRLGFBQ1JBLE1BRFEsRUFDQWlCLFFBREEsYUFDQUEsUUFEQSxFQUNVZSxXQURWLGFBQ1VBLFdBRFYsRUFDdUJDLEdBRHZCLGFBQ3VCQSxHQUR2QixFQUM0Qi9CLEtBRDVCLGFBQzRCQSxLQUQ1QixFQUNtQ2dDLFFBRG5DLGFBQ21DQSxRQURuQyxFQUM2Q0MsT0FEN0MsYUFDNkNBLE9BRDdDO0FBRVpDLHlDQUZZLEdBRUpKLFlBQVlLLE9BQVosQ0FBb0JMLFlBQVlNLFNBQVosQ0FBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsQ0FBcEIsRUFBZ0QsTUFBaEQsQ0FGSTs7QUFHaEIseUNBQUt2QyxRQUFMLEdBQWdCO0FBQ1pDLHNEQURZLEVBQ0o7QUFDUmlCLDBEQUZZLEVBRUQ7QUFDWGdCLGdEQUhZLEVBR047QUFDTkMsMERBSlksRUFJRDtBQUNYaEMsb0RBTFksRUFLSjtBQUNSa0Msb0RBTlksRUFNSjtBQUNSbkMsaURBQVNrQyxPQVBHLEVBT1E7QUFDcEJoQyw2Q0FBSzZCO0FBUk8scUNBQWhCO0FBVUEseUNBQUtPLE1BQUw7QUFDSDtBQUNEM0Isd0NBQVFDLEdBQVIsQ0FBWUgsR0FBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJHMkJkLGVBQUs0QyxJOztrQkFBbkJsRCxLIiwiZmlsZSI6Im1lbnUyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51MiBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJyxcclxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiB7XHJcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICcnLFxyXG4gICAgICAgICAgICAgICAgY29tcGFueTogJycsXHJcbiAgICAgICAgICAgICAgICBhZG1pbjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0ZWw6ICcnLFxyXG4gICAgICAgICAgICAgICAgbmlja25hbWU6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uU2hvdygpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgLy8g5omr56CB5Yqg5YWlXHJcbiAgICAgICAgICAgIHNjYW5Kb2luKCkge1xyXG4gICAgICAgICAgICAgICAgd3guc2NhbkNvZGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdCA9IHJlcy5yZXN1bHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b1VzZXJJbmZvKCkge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3VzZXJJbmZvP25pY2tuYW1lPSR7dGhpcy51c2VySW5mby5uaWNrTmFtZX0mdGVsPSR7dGhpcy51c2VySW5mby50ZWx9YFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9Vc2VyVW5pdCgpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy91c2VyVW5pdCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIOS4iuS8oOWktOWDj1xyXG4gICAgICAgICAgICB1cGxvYWRQaG90bygpIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHd4LmNob29zZUltYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kMeW8oFxyXG4gICAgICAgICAgICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgICAgICAgICAgICAgICAgc291cmNlVHlwZTogWydhbGJ1bScsICdjYW1lcmEnXSwgLy8g5Y+v5Lul5oyH5a6a5p2l5rqQ5piv55u45YaM6L+Y5piv55u45py677yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC51c2VySW5mby5hdmF0YXIgPSB0ZW1wRmlsZVBhdGhzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3eC51cGxvYWRGaWxlKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvdXBsb2FkL2ZpbGVVcGxvYWQnLCAvL+S7heS4uuekuuS+i++8jOmdnuecn+WunueahOaOpeWPo+WcsOWdgFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG5hbWU6IFwiZmlsZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGZvcm1EYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyDpgIDlh7rnmbvlvZVcclxuICAgICAgICAgICAgbG9nb3V0SGFuZGxlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyTG9nb3V0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIHVzZXJMb2dvdXQoKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkudXNlckxvZ291dCgpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5yZW1vdmVTdG9yYWdlKCd0b2tlbicpO1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgZ2V0VXNlckluZm8oKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0VXNlckluZm8oKTtcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGF2YXRhciwgbmlja05hbWUsIHBob25lbnVtYmVyLCBzZXgsIGFkbWluLCB1c2VyTmFtZSwgbG9naW5JcCB9ID0gcmVzLnVzZXI7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGhvbmUgPSBwaG9uZW51bWJlci5yZXBsYWNlKHBob25lbnVtYmVyLnN1YnN0cmluZygzLDcpLCBcIioqKipcIilcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXZhdGFyLCAvLyDlpLTlg49cclxuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZSwgIC8vIOaYteensFxyXG4gICAgICAgICAgICAgICAgICAgIHNleCwgIC8vIOaAp+WIq1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJOYW1lLCAgLy8g55So5oi35ZCNXHJcbiAgICAgICAgICAgICAgICAgICAgYWRtaW4sICAvLyDmmK/lkKbkuLrnrqHnkIblkZjvvIx0dXJl5Li65pivXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmUsICAvLyDmiYvmnLrlj7dcclxuICAgICAgICAgICAgICAgICAgICBjb21wYW55OiBsb2dpbklwLCAgIC8vIOaJq+eggeWKoOWFpeWQjueahOWFrOWPuOWQjeensFxyXG4gICAgICAgICAgICAgICAgICAgIHRlbDogcGhvbmVudW1iZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==