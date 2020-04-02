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
                "van-nav-bar": "../components/vant/nav-bar/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            nickname: '',
            phone: '',
            userId: ''
        }, _this.methods = {
            nicknameInput: function nicknameInput(e) {
                this.nickname = e.detail.value;
            },
            phoneInput: function phoneInput(e) {
                this.phone = e.detail.value;
            },
            completeEdit: function completeEdit() {
                var params = JSON.stringify({
                    userId: this.userId,
                    phonenumber: this.phone,
                    nickName: this.nickname
                });
                this.updateUser(params);
            },
            onClickLeft: function onClickLeft() {
                wx.navigateBack({
                    delta: 1
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(UserInfo, [{
        key: 'onLoad',
        value: function onLoad() {
            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2];
            var _prevPage$data$userIn = prevPage.data.userInfo,
                nickName = _prevPage$data$userIn.nickName,
                tel = _prevPage$data$userIn.tel,
                userId = _prevPage$data$userIn.userId;

            this.nickname = nickName;
            this.phone = tel;
            this.userId = userId;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImFwaSIsIlVzZXJJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsIm5pY2tuYW1lIiwicGhvbmUiLCJ1c2VySWQiLCJtZXRob2RzIiwibmlja25hbWVJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInBob25lSW5wdXQiLCJjb21wbGV0ZUVkaXQiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicGhvbmVudW1iZXIiLCJuaWNrTmFtZSIsInVwZGF0ZVVzZXIiLCJvbkNsaWNrTGVmdCIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsInByZXZQYWdlIiwibGVuZ3RoIiwidXNlckluZm8iLCJ0ZWwiLCIkYXBwbHkiLCJyZXMiLCJjb2RlIiwic2hvd1RvYXN0IiwidGl0bGUiLCJtc2ciLCJpY29uIiwiZHVyYXRpb24iLCJzZXRUaW1lb3V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7SUFDU0MsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlO0FBREY7QUFGWixTLFFBTVRDLEksR0FBTztBQUNIQyw2QkFBaUJDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkgsZUFEeEM7QUFFSEksc0JBQVUsRUFGUDtBQUdIQyxtQkFBTyxFQUhKO0FBSUhDLG9CQUFRO0FBSkwsUyxRQWlCUEMsTyxHQUFVO0FBQ05DLHlCQURNLHlCQUNRQyxDQURSLEVBQ1c7QUFDYixxQkFBS0wsUUFBTCxHQUFnQkssRUFBRUMsTUFBRixDQUFTQyxLQUF6QjtBQUNILGFBSEs7QUFJTkMsc0JBSk0sc0JBSUtILENBSkwsRUFJUTtBQUNWLHFCQUFLSixLQUFMLEdBQWFJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDSCxhQU5LO0FBT05FLHdCQVBNLDBCQU9TO0FBQ1gsb0JBQUlDLFNBQVNDLEtBQUtDLFNBQUwsQ0FBZTtBQUN4QlYsNEJBQVEsS0FBS0EsTUFEVztBQUV4QlcsaUNBQWEsS0FBS1osS0FGTTtBQUd4QmEsOEJBQVUsS0FBS2Q7QUFIUyxpQkFBZixDQUFiO0FBS0EscUJBQUtlLFVBQUwsQ0FBZ0JMLE1BQWhCO0FBQ0gsYUFkSztBQWVOTSx1QkFmTSx5QkFlUTtBQUNWQyxtQkFBR0MsWUFBSCxDQUFnQjtBQUNaQywyQkFBTztBQURLLGlCQUFoQjtBQUdIO0FBbkJLLFM7Ozs7O2lDQVZEO0FBQ0wsZ0JBQU1DLFFBQVFDLGlCQUFkO0FBQ0EsZ0JBQU1DLFdBQVdGLE1BQU1BLE1BQU1HLE1BQU4sR0FBZSxDQUFyQixDQUFqQjtBQUZLLHdDQUcyQkQsU0FBUzNCLElBQVQsQ0FBYzZCLFFBSHpDO0FBQUEsZ0JBR0VWLFFBSEYseUJBR0VBLFFBSEY7QUFBQSxnQkFHWVcsR0FIWix5QkFHWUEsR0FIWjtBQUFBLGdCQUdpQnZCLE1BSGpCLHlCQUdpQkEsTUFIakI7O0FBSUwsaUJBQUtGLFFBQUwsR0FBZ0JjLFFBQWhCO0FBQ0EsaUJBQUtiLEtBQUwsR0FBYXdCLEdBQWI7QUFDQSxpQkFBS3ZCLE1BQUwsR0FBY0EsTUFBZDtBQUNBLGlCQUFLd0IsTUFBTDtBQUNIOzs7O2lHQXdCZ0JoQixNOzs7Ozs7O3VDQUNHcEIsSUFBSXlCLFVBQUosQ0FBZUwsTUFBZixDOzs7QUFBWmlCLG1DOztBQUNKLG9DQUFJQSxJQUFJQyxJQUFKLElBQVksR0FBaEIsRUFBcUI7QUFDakJYLHVDQUFHWSxTQUFILENBQWE7QUFDVEMsK0NBQU9ILElBQUlJLEdBREY7QUFFVEMsOENBQU0sU0FGRztBQUdUQyxrREFBVTtBQUhELHFDQUFiO0FBS0FDLCtDQUFXLFlBQU07QUFDYmpCLDJDQUFHQyxZQUFILENBQWdCO0FBQ1pDLG1EQUFPO0FBREsseUNBQWhCO0FBR0gscUNBSkQsRUFJRyxJQUpIO0FBS0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUEzRDZCdEIsZUFBS3NDLEk7O2tCQUF0QjVDLFEiLCJmaWxlIjoidXNlckluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOS/oeaBrycsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxuICAgICAgICAgICAgbmlja25hbWU6ICcnLFxuICAgICAgICAgICAgcGhvbmU6ICcnLFxuICAgICAgICAgICAgdXNlcklkOiAnJ1xuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgY29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKVxuICAgICAgICAgICAgY29uc3QgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXVxuICAgICAgICAgICAgY29uc3Qge25pY2tOYW1lLCB0ZWwsIHVzZXJJZH0gPSBwcmV2UGFnZS5kYXRhLnVzZXJJbmZvXG4gICAgICAgICAgICB0aGlzLm5pY2tuYW1lID0gbmlja05hbWU7XG4gICAgICAgICAgICB0aGlzLnBob25lID0gdGVsO1xuICAgICAgICAgICAgdGhpcy51c2VySWQgPSB1c2VySWQ7XG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIG5pY2tuYW1lSW5wdXQoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMubmlja25hbWUgPSBlLmRldGFpbC52YWx1ZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwaG9uZUlucHV0KGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBob25lID0gZS5kZXRhaWwudmFsdWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29tcGxldGVFZGl0KCkge1xuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXG4gICAgICAgICAgICAgICAgICAgIHBob25lbnVtYmVyOiB0aGlzLnBob25lLFxuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogdGhpcy5uaWNrbmFtZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVVc2VyKHBhcmFtcyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja0xlZnQoKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGFzeW5jIHVwZGF0ZVVzZXIocGFyYW1zKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnVwZGF0ZVVzZXIocGFyYW1zKTtcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzLm1zZyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==