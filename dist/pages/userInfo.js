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

var UserInfo = function (_wepy$page) {
    _inherits(UserInfo, _wepy$page);

    function UserInfo() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, UserInfo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的信息',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index",
                "van-icon": "../components/vant/icon/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            nickname: '',
            userName: '',
            phone: '',
            userId: '',
            sex: '',
            email: '',
            createTime: '',
            loginDate: '',
            sexOptions: [{
                label: '男',
                value: 0
            }, {
                label: '女',
                value: 1
            }]
        }, _this.methods = {
            changeSex: function changeSex(e) {
                this.sex = e.detail.value;
            },
            nicknameInput: function nicknameInput(e) {
                this.nickname = e.detail.value;
            },
            phoneInput: function phoneInput(e) {
                this.phone = e.detail.value;
            },
            phoneEmail: function phoneEmail(e) {
                this.email = e.detail.value;
                this.$apply();
            },
            completeEdit: function completeEdit() {
                var pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                if (!pattern.test(this.email)) {
                    wx.showToast({
                        title: '请输入有效的邮箱地址',
                        icon: 'none',
                        duration: 1000
                    });
                    return;
                }

                var params = JSON.stringify({
                    userId: this.userId,
                    phonenumber: this.phone,
                    nickName: this.nickname,
                    sex: this.sex,
                    email: this.email
                });
                this.updateUser(params);
            },
            onClickLeft: function onClickLeft() {
                var pages = getCurrentPages();
                if (pages.length == 1) {
                    wx.switchTab({
                        url: '/pages/menu2'
                    });
                } else {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(UserInfo, [{
        key: 'onLoad',
        value: function onLoad() {
            _wepy2.default.$instance.shareImage();

            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2];
            var _prevPage$data$userIn = prevPage.data.userInfo,
                userName = _prevPage$data$userIn.userName,
                nickName = _prevPage$data$userIn.nickName,
                sex = _prevPage$data$userIn.sex,
                tel = _prevPage$data$userIn.tel,
                email = _prevPage$data$userIn.email,
                createTime = _prevPage$data$userIn.createTime,
                loginDate = _prevPage$data$userIn.loginDate,
                userId = _prevPage$data$userIn.userId;

            this.userName = userName;
            this.nickname = nickName;
            this.sex = sex;
            this.phone = tel;
            this.email = email;
            this.userId = userId;
            this.createTime = createTime;
            this.loginDate = loginDate;

            this.sexOptions.forEach(function (item) {
                if (item.value == sex) {
                    item.checked = true;
                }
            });

            this.$apply();
        }
    }, {
        key: 'updateUser',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return api.updateUser(params);

                            case 2:
                                res = _context.sent;

                                if (res.code == 200) {
                                    wx.showToast({
                                        title: res.msg,
                                        icon: 'success',
                                        duration: 1500
                                    });
                                    setTimeout(function () {
                                        wx.navigateBack({
                                            delta: 1
                                        });
                                    }, 1000);
                                }

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function updateUser(_x) {
                return _ref2.apply(this, arguments);
            }

            return updateUser;
        }()
    }]);

    return UserInfo;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(UserInfo , 'pages/userInfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImFwaSIsIlVzZXJJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsIm5pY2tuYW1lIiwidXNlck5hbWUiLCJwaG9uZSIsInVzZXJJZCIsInNleCIsImVtYWlsIiwiY3JlYXRlVGltZSIsImxvZ2luRGF0ZSIsInNleE9wdGlvbnMiLCJsYWJlbCIsInZhbHVlIiwibWV0aG9kcyIsImNoYW5nZVNleCIsImUiLCJkZXRhaWwiLCJuaWNrbmFtZUlucHV0IiwicGhvbmVJbnB1dCIsInBob25lRW1haWwiLCIkYXBwbHkiLCJjb21wbGV0ZUVkaXQiLCJwYXR0ZXJuIiwidGVzdCIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicGhvbmVudW1iZXIiLCJuaWNrTmFtZSIsInVwZGF0ZVVzZXIiLCJvbkNsaWNrTGVmdCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwibGVuZ3RoIiwic3dpdGNoVGFiIiwidXJsIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJzaGFyZUltYWdlIiwicHJldlBhZ2UiLCJ1c2VySW5mbyIsInRlbCIsImZvckVhY2giLCJpdGVtIiwiY2hlY2tlZCIsInJlcyIsImNvZGUiLCJtc2ciLCJzZXRUaW1lb3V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7SUFDU0MsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlLGtDQURGO0FBRWIsNEJBQVk7QUFGQztBQUZaLFMsUUFPVEMsSSxHQUFPO0FBQ0hDLDZCQUFpQkMsZUFB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R0FBYjtBQUNBLGlCQUFLdkMsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsaUJBQUtGLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGlCQUFLRyxVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLGlCQUFLQyxTQUFMLEdBQWlCQSxTQUFqQjs7QUFFQSxpQkFBS0MsVUFBTCxDQUFnQnFDLE9BQWhCLENBQXdCLGdCQUFRO0FBQzVCLG9CQUFJQyxLQUFLcEMsS0FBTCxJQUFjTixHQUFsQixFQUF1QjtBQUNuQjBDLHlCQUFLQyxPQUFMLEdBQWUsSUFBZjtBQUNIO0FBQ0osYUFKRDs7QUFNQSxpQkFBSzdCLE1BQUw7QUFDSDs7OztpR0FrRGdCUyxNOzs7Ozs7O3VDQUNHckMsSUFBSTBDLFVBQUosQ0FBZUwsTUFBZixDOzs7QUFBWnFCLG1DOztBQUNKLG9DQUFJQSxJQUFJQyxJQUFKLElBQVksR0FBaEIsRUFBcUI7QUFDakIzQix1Q0FBR0MsU0FBSCxDQUFhO0FBQ1RDLCtDQUFPd0IsSUFBSUUsR0FERjtBQUVUekIsOENBQU0sU0FGRztBQUdUQyxrREFBVTtBQUhELHFDQUFiO0FBS0F5QiwrQ0FBVyxZQUFNO0FBQ2I3QiwyQ0FBR2lCLFlBQUgsQ0FBZ0I7QUFDWkMsbURBQU87QUFESyx5Q0FBaEI7QUFHSCxxQ0FKRCxFQUlHLElBSkg7QUFLSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWxINkIzQyxlQUFLdUQsSTs7a0JBQXRCN0QsUSIsImZpbGUiOiJ1c2VySW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlckluZm8gZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOS/oeaBrycsXHJcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbi1pY29uXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2ljb24vaW5kZXhcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxyXG4gICAgICAgICAgICBuaWNrbmFtZTogJycsXHJcbiAgICAgICAgICAgIHVzZXJOYW1lOiAnJyxcclxuICAgICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgICAgICB1c2VySWQ6ICcnLFxyXG4gICAgICAgICAgICBzZXg6ICcnLFxyXG4gICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgIGNyZWF0ZVRpbWU6ICcnLFxyXG4gICAgICAgICAgICBsb2dpbkRhdGU6ICcnLFxyXG4gICAgICAgICAgICBzZXhPcHRpb25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICfnlLcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAwXHJcbiAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICflpbMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTG9hZCgpIHtcclxuICAgICAgICAgICAgd2VweS4kaW5zdGFuY2Uuc2hhcmVJbWFnZSgpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpXHJcbiAgICAgICAgICAgIGNvbnN0IHByZXZQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMl1cclxuICAgICAgICAgICAgY29uc3Qge3VzZXJOYW1lLCBuaWNrTmFtZSwgc2V4LCB0ZWwsIGVtYWlsLCBjcmVhdGVUaW1lLCBsb2dpbkRhdGUsIHVzZXJJZH0gPSBwcmV2UGFnZS5kYXRhLnVzZXJJbmZvO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XHJcbiAgICAgICAgICAgIHRoaXMubmlja25hbWUgPSBuaWNrTmFtZTtcclxuICAgICAgICAgICAgdGhpcy5zZXggPSBzZXg7XHJcbiAgICAgICAgICAgIHRoaXMucGhvbmUgPSB0ZWw7XHJcbiAgICAgICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcclxuICAgICAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlVGltZSA9IGNyZWF0ZVRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5EYXRlID0gbG9naW5EYXRlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXhPcHRpb25zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS52YWx1ZSA9PSBzZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBjaGFuZ2VTZXgoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXggPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbmlja25hbWVJbnB1dChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5pY2tuYW1lID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBob25lSW5wdXQoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waG9uZSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwaG9uZUVtYWlsKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1haWwgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlRWRpdCgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXR0ZXJuID0gL14oW0EtWmEtejAtOV9cXC1cXC5dKStcXEAoW0EtWmEtejAtOV9cXC1cXC5dKStcXC4oW0EtWmEtel17Miw0fSkkLztcclxuICAgICAgICAgICAgICAgIGlmKCFwYXR0ZXJuLnRlc3QodGhpcy5lbWFpbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+i+k+WFpeacieaViOeahOmCrueuseWcsOWdgCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDEwMDBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZW51bWJlcjogdGhpcy5waG9uZSxcclxuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogdGhpcy5uaWNrbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBzZXg6IHRoaXMuc2V4LFxyXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlcihwYXJhbXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNsaWNrTGVmdCgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhZ2VzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL21lbnUyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIHVwZGF0ZVVzZXIocGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkudXBkYXRlVXNlcihwYXJhbXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXMubXNnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19