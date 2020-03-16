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
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Menu2, [{
        key: 'onShow',
        value: function onShow() {
            this.getUserInfo();
        }
    }, {
        key: 'getUserInfo',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res, _res$user, avatar, nickName, phonenumber, sex, admin, userName, loginIp, phone;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return api.getUserInfo();

                            case 2:
                                res = _context.sent;

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
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getUserInfo() {
                return _ref2.apply(this, arguments);
            }

            return getUserInfo;
        }()
    }]);

    return Menu2;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu2 , 'pages/menu2'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbImFwaSIsIk1lbnUyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInVzZXJJbmZvIiwiYXZhdGFyIiwiY29tcGFueSIsImFkbWluIiwidGVsIiwibmlja25hbWUiLCJtZXRob2RzIiwic2NhbkpvaW4iLCJ3eCIsInNjYW5Db2RlIiwic3VjY2VzcyIsInJlcyIsInJlc3VsdCIsImNvbnNvbGUiLCJsb2ciLCJ0b1VzZXJJbmZvIiwibmF2aWdhdGVUbyIsInVybCIsIm5pY2tOYW1lIiwidG9Vc2VyVW5pdCIsInVwbG9hZFBob3RvIiwidGhhdCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJ0ZW1wRmlsZVBhdGhzIiwiZ2V0VXNlckluZm8iLCJjb2RlIiwidXNlciIsInBob25lbnVtYmVyIiwic2V4IiwidXNlck5hbWUiLCJsb2dpbklwIiwicGhvbmUiLCJyZXBsYWNlIiwic3Vic3RyaW5nIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7SUFDU0MsSzs7Ozs7Ozs7Ozs7Ozs7d0xBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLElBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlO0FBREY7QUFGWixTLFFBTVRDLEksR0FBTztBQUNIQyw2QkFBaUJDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkgsZUFEeEM7QUFFSEksc0JBQVU7QUFDTkMsd0JBQVEsRUFERjtBQUVOQyx5QkFBUyxFQUZIO0FBR05DLHVCQUFPLEtBSEQ7QUFJTkMscUJBQUssRUFKQztBQUtOQywwQkFBVTtBQUxKO0FBRlAsUyxRQWVQQyxPLEdBQVU7QUFDTjtBQUNBQyxvQkFGTSxzQkFFSztBQUNQQyxtQkFBR0MsUUFBSCxDQUFZO0FBQ1JDLDZCQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDZCw0QkFBSUMsU0FBU0QsSUFBSUMsTUFBakI7QUFDQUMsZ0NBQVFDLEdBQVIsQ0FBWUYsTUFBWjtBQUNIO0FBSk8saUJBQVo7QUFNSCxhQVRLO0FBVU5HLHNCQVZNLHdCQVVPO0FBQ1RQLG1CQUFHUSxVQUFILENBQWM7QUFDVkMsdURBQWlDLEtBQUtqQixRQUFMLENBQWNrQixRQUEvQyxhQUErRCxLQUFLbEIsUUFBTCxDQUFjSTtBQURuRSxpQkFBZDtBQUdILGFBZEs7QUFlTmUsc0JBZk0sd0JBZU87QUFDVFgsbUJBQUdRLFVBQUgsQ0FBYztBQUNWQyx5QkFBSztBQURLLGlCQUFkO0FBR0gsYUFuQks7O0FBb0JOO0FBQ0FHLHVCQXJCTSx5QkFxQlE7QUFDVixvQkFBSUMsT0FBTyxJQUFYO0FBQ0FiLG1CQUFHYyxXQUFILENBQWU7QUFDWEMsMkJBQU8sQ0FESSxFQUNEO0FBQ1ZDLDhCQUFVLENBQUMsVUFBRCxFQUFhLFlBQWIsQ0FGQyxFQUUyQjtBQUN0Q0MsZ0NBQVksQ0FBQyxPQUFELEVBQVUsUUFBVixDQUhELEVBR3NCO0FBQ2pDZiw2QkFBUyxpQkFBU0MsR0FBVCxFQUFjO0FBQ25CLDRCQUFJZSxnQkFBZ0JmLElBQUllLGFBQXhCO0FBQ0FMLDZCQUFLckIsUUFBTCxDQUFjQyxNQUFkLEdBQXVCeUIsY0FBYyxDQUFkLENBQXZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQXBCVSxpQkFBZjtBQXNCSDtBQTdDSyxTOzs7OztpQ0FKRDtBQUNMLGlCQUFLQyxXQUFMO0FBQ0g7Ozs7Ozs7Ozs7Ozt1Q0FtRG1CckMsSUFBSXFDLFdBQUosRTs7O0FBQVpoQixtQzs7QUFDSixvQ0FBR0EsSUFBSWlCLElBQUosSUFBWSxHQUFmLEVBQW9CO0FBQUEsZ0RBQ3lEakIsSUFBSWtCLElBRDdELEVBQ1I1QixNQURRLGFBQ1JBLE1BRFEsRUFDQWlCLFFBREEsYUFDQUEsUUFEQSxFQUNVWSxXQURWLGFBQ1VBLFdBRFYsRUFDdUJDLEdBRHZCLGFBQ3VCQSxHQUR2QixFQUM0QjVCLEtBRDVCLGFBQzRCQSxLQUQ1QixFQUNtQzZCLFFBRG5DLGFBQ21DQSxRQURuQyxFQUM2Q0MsT0FEN0MsYUFDNkNBLE9BRDdDO0FBRVpDLHlDQUZZLEdBRUpKLFlBQVlLLE9BQVosQ0FBb0JMLFlBQVlNLFNBQVosQ0FBc0IsQ0FBdEIsRUFBd0IsQ0FBeEIsQ0FBcEIsRUFBZ0QsTUFBaEQsQ0FGSTs7QUFHaEIseUNBQUtwQyxRQUFMLEdBQWdCO0FBQ1pDLHNEQURZLEVBQ0o7QUFDUmlCLDBEQUZZLEVBRUQ7QUFDWGEsZ0RBSFksRUFHTjtBQUNOQywwREFKWSxFQUlEO0FBQ1g3QixvREFMWSxFQUtKO0FBQ1IrQixvREFOWSxFQU1KO0FBQ1JoQyxpREFBUytCLE9BUEcsRUFPUTtBQUNwQjdCLDZDQUFLMEI7QUFSTyxxQ0FBaEI7QUFVQSx5Q0FBS08sTUFBTDtBQUNIO0FBQ0R4Qix3Q0FBUUMsR0FBUixDQUFZSCxHQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdkYyQmQsZUFBS3lDLEk7O2tCQUFuQi9DLEsiLCJmaWxlIjoibWVudTIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUyIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCcsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxuICAgICAgICAgICAgdXNlckluZm86IHtcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICcnLFxuICAgICAgICAgICAgICAgIGNvbXBhbnk6ICcnLFxuICAgICAgICAgICAgICAgIGFkbWluOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB0ZWw6ICcnLFxuICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAnJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25TaG93KCkge1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIC8vIOaJq+eggeWKoOWFpVxuICAgICAgICAgICAgc2NhbkpvaW4oKSB7XG4gICAgICAgICAgICAgICAgd3guc2NhbkNvZGUoe1xuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiAocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gcmVzLnJlc3VsdDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9Vc2VySW5mbygpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3VzZXJJbmZvP25pY2tuYW1lPSR7dGhpcy51c2VySW5mby5uaWNrTmFtZX0mdGVsPSR7dGhpcy51c2VySW5mby50ZWx9YFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdG9Vc2VyVW5pdCgpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3VzZXJVbml0J1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8g5LiK5Lyg5aS05YOPXG4gICAgICAgICAgICB1cGxvYWRQaG90bygpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xuICAgICAgICAgICAgICAgICAgICBjb3VudDogMSwgLy8g6buY6K6kMeW8oFxuICAgICAgICAgICAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVzZXJJbmZvLmF2YXRhciA9IHRlbXBGaWxlUGF0aHNbMF07XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB3eC51cGxvYWRGaWxlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VwbG9hZC9maWxlVXBsb2FkJywgLy/ku4XkuLrnpLrkvovvvIzpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIG5hbWU6IFwiZmlsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBoZWFkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBmb3JtRGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBnZXRVc2VySW5mbygpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgYXZhdGFyLCBuaWNrTmFtZSwgcGhvbmVudW1iZXIsIHNleCwgYWRtaW4sIHVzZXJOYW1lLCBsb2dpbklwIH0gPSByZXMudXNlcjtcbiAgICAgICAgICAgICAgICBsZXQgcGhvbmUgPSBwaG9uZW51bWJlci5yZXBsYWNlKHBob25lbnVtYmVyLnN1YnN0cmluZygzLDcpLCBcIioqKipcIilcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0ge1xuICAgICAgICAgICAgICAgICAgICBhdmF0YXIsIC8vIOWktOWDj1xuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZSwgIC8vIOaYteensFxuICAgICAgICAgICAgICAgICAgICBzZXgsICAvLyDmgKfliKtcbiAgICAgICAgICAgICAgICAgICAgdXNlck5hbWUsICAvLyDnlKjmiLflkI1cbiAgICAgICAgICAgICAgICAgICAgYWRtaW4sICAvLyDmmK/lkKbkuLrnrqHnkIblkZjvvIx0dXJl5Li65pivXG4gICAgICAgICAgICAgICAgICAgIHBob25lLCAgLy8g5omL5py65Y+3XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhbnk6IGxvZ2luSXAsICAgLy8g5omr56CB5Yqg5YWl5ZCO55qE5YWs5Y+45ZCN56ewXG4gICAgICAgICAgICAgICAgICAgIHRlbDogcGhvbmVudW1iZXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgIH1cbiAgICB9XG4iXX0=