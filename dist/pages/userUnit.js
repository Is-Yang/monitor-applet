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

var UserUnit = function (_wepy$page) {
    _inherits(UserUnit, _wepy$page);

    function UserUnit() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, UserUnit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserUnit.__proto__ || Object.getPrototypeOf(UserUnit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的单位',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index",
                "van-collapse": "../components/vant/collapse/index",
                "van-collapse-item": "../components/vant/collapse-item/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            activeNames: [],
            userList: [],
            deviceList: [], // 监测点
            userInfo: {
                userId: '', // 用户Id， 用于查询设备列表
                avatar: '', // 头像
                dept: '', // 部门
                firstRoleName: '', // 角色
                firstDept: '' // 上级单位
            }
        }, _this.methods = {
            onChangeSite: function onChangeSite(e) {
                var check = e.detail.value ? 1 : 0;
                var data = e.target.dataset.site;
                var params = {
                    check: check,
                    id: data.id,
                    name: data.name,
                    userId: data.userId
                };
                this.userChangeStatus(JSON.stringify(params));
            },
            onChangeColl: function onChangeColl(e) {
                this.activeNames = e.detail;
            },
            onClickLeft: function onClickLeft() {
                wx.navigateBack({
                    delta: 1
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(UserUnit, [{
        key: 'onLoad',
        value: function onLoad() {
            this.getUserByDept();
        }
    }, {
        key: 'userChangeStatus',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return api.userChangeStatus(params);

                            case 2:
                                res = _context.sent;

                                if (res.code == 200) {
                                    wx.showToast({
                                        title: res.msg,
                                        icon: 'success',
                                        duration: 1500
                                    });
                                }

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function userChangeStatus(_x) {
                return _ref2.apply(this, arguments);
            }

            return userChangeStatus;
        }()
    }, {
        key: 'getUserByDept',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return api.getUserByDept();

                            case 2:
                                res = _context2.sent;

                                if (res.code == 200) {
                                    this.userList = res.userList;
                                    this.deviceList = res.deviceList;
                                    this.userInfo = res.userInfo;
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function getUserByDept() {
                return _ref3.apply(this, arguments);
            }

            return getUserByDept;
        }()
    }]);

    return UserUnit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(UserUnit , 'pages/userUnit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJVbml0LmpzIl0sIm5hbWVzIjpbImFwaSIsIlVzZXJVbml0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImFjdGl2ZU5hbWVzIiwidXNlckxpc3QiLCJkZXZpY2VMaXN0IiwidXNlckluZm8iLCJ1c2VySWQiLCJhdmF0YXIiLCJkZXB0IiwiZmlyc3RSb2xlTmFtZSIsImZpcnN0RGVwdCIsIm1ldGhvZHMiLCJvbkNoYW5nZVNpdGUiLCJlIiwiY2hlY2siLCJkZXRhaWwiLCJ2YWx1ZSIsInRhcmdldCIsImRhdGFzZXQiLCJzaXRlIiwicGFyYW1zIiwiaWQiLCJuYW1lIiwidXNlckNoYW5nZVN0YXR1cyIsIkpTT04iLCJzdHJpbmdpZnkiLCJvbkNoYW5nZUNvbGwiLCJvbkNsaWNrTGVmdCIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJnZXRVc2VyQnlEZXB0IiwicmVzIiwiY29kZSIsInNob3dUb2FzdCIsInRpdGxlIiwibXNnIiwiaWNvbiIsImR1cmF0aW9uIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7SUFDU0MsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlLGtDQURGO0FBRWIsZ0NBQWdCLG1DQUZIO0FBR2IscUNBQXFCO0FBSFI7QUFGWixTLFFBUVRDLEksR0FBTztBQUNIQyw2QkFBaUJDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkgsZUFEeEM7QUFFSEkseUJBQWEsRUFGVjtBQUdIQyxzQkFBVSxFQUhQO0FBSUhDLHdCQUFZLEVBSlQsRUFJYTtBQUNoQkMsc0JBQVU7QUFDTkMsd0JBQVEsRUFERixFQUNPO0FBQ2JDLHdCQUFRLEVBRkYsRUFFTztBQUNiQyxzQkFBTSxFQUhBLEVBR0k7QUFDVkMsK0JBQWUsRUFKVCxFQUljO0FBQ3BCQywyQkFBVyxFQUxMLENBS1U7QUFMVjtBQUxQLFMsUUFrQlBDLE8sR0FBVTtBQUNOQyx3QkFETSx3QkFDT0MsQ0FEUCxFQUNVO0FBQ1osb0JBQUlDLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0MsS0FBVCxHQUFpQixDQUFqQixHQUFxQixDQUFqQztBQUNBLG9CQUFJbkIsT0FBT2dCLEVBQUVJLE1BQUYsQ0FBU0MsT0FBVCxDQUFpQkMsSUFBNUI7QUFDQSxvQkFBSUMsU0FBUztBQUNUTiwyQkFBT0EsS0FERTtBQUVUTyx3QkFBSXhCLEtBQUt3QixFQUZBO0FBR1RDLDBCQUFNekIsS0FBS3lCLElBSEY7QUFJVGhCLDRCQUFRVCxLQUFLUztBQUpKLGlCQUFiO0FBTUEscUJBQUtpQixnQkFBTCxDQUFzQkMsS0FBS0MsU0FBTCxDQUFlTCxNQUFmLENBQXRCO0FBQ0gsYUFYSztBQVlOTSx3QkFaTSx3QkFZT2IsQ0FaUCxFQVlVO0FBQ1oscUJBQUtYLFdBQUwsR0FBbUJXLEVBQUVFLE1BQXJCO0FBQ0gsYUFkSztBQWVOWSx1QkFmTSx5QkFlUTtBQUNWQyxtQkFBR0MsWUFBSCxDQUFnQjtBQUNaQywyQkFBTztBQURLLGlCQUFoQjtBQUdIO0FBbkJLLFM7Ozs7O2lDQUpEO0FBQ0wsaUJBQUtDLGFBQUw7QUFDSDs7OztpR0F3QnNCWCxNOzs7Ozs7O3VDQUNINUIsSUFBSStCLGdCQUFKLENBQXFCSCxNQUFyQixDOzs7QUFBWlksbUM7O0FBQ0osb0NBQUdBLElBQUlDLElBQUosSUFBWSxHQUFmLEVBQW9CO0FBQ2hCTCx1Q0FBR00sU0FBSCxDQUFhO0FBQ1RDLCtDQUFPSCxJQUFJSSxHQURGO0FBRVRDLDhDQUFNLFNBRkc7QUFHVEMsa0RBQVU7QUFIRCxxQ0FBYjtBQUtIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1Q0FJZTlDLElBQUl1QyxhQUFKLEU7OztBQUFaQyxtQzs7QUFDSixvQ0FBR0EsSUFBSUMsSUFBSixJQUFZLEdBQWYsRUFBb0I7QUFDaEIseUNBQUs5QixRQUFMLEdBQWdCNkIsSUFBSTdCLFFBQXBCO0FBQ0EseUNBQUtDLFVBQUwsR0FBa0I0QixJQUFJNUIsVUFBdEI7QUFDQSx5Q0FBS0MsUUFBTCxHQUFnQjJCLElBQUkzQixRQUFwQjtBQUNBLHlDQUFLa0MsTUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbkU2QnhDLGVBQUt5QyxJOztrQkFBdEIvQyxRIiwiZmlsZSI6InVzZXJVbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyVW5pdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTljZXkvY0nLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YW4tY29sbGFwc2VcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvY29sbGFwc2UvaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbi1jb2xsYXBzZS1pdGVtXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2NvbGxhcHNlLWl0ZW0vaW5kZXhcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcbiAgICAgICAgICAgIGFjdGl2ZU5hbWVzOiBbXSxcbiAgICAgICAgICAgIHVzZXJMaXN0OiBbXSxcbiAgICAgICAgICAgIGRldmljZUxpc3Q6IFtdLCAvLyDnm5HmtYvngrlcbiAgICAgICAgICAgIHVzZXJJbmZvOiB7XG4gICAgICAgICAgICAgICAgdXNlcklkOiAnJywgIC8vIOeUqOaIt0lk77yMIOeUqOS6juafpeivouiuvuWkh+WIl+ihqFxuICAgICAgICAgICAgICAgIGF2YXRhcjogJycsICAvLyDlpLTlg49cbiAgICAgICAgICAgICAgICBkZXB0OiAnJywgLy8g6YOo6ZeoXG4gICAgICAgICAgICAgICAgZmlyc3RSb2xlTmFtZTogJycsICAvLyDop5LoibJcbiAgICAgICAgICAgICAgICBmaXJzdERlcHQ6ICcnLCAgLy8g5LiK57qn5Y2V5L2NXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvbkxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJCeURlcHQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBvbkNoYW5nZVNpdGUoZSkge1xuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IGUuZGV0YWlsLnZhbHVlID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBlLnRhcmdldC5kYXRhc2V0LnNpdGU7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2s6IGNoZWNrLFxuICAgICAgICAgICAgICAgICAgICBpZDogZGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXNlckNoYW5nZVN0YXR1cyhKU09OLnN0cmluZ2lmeShwYXJhbXMpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2hhbmdlQ29sbChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVOYW1lcyA9IGUuZGV0YWlsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tMZWZ0KCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyB1c2VyQ2hhbmdlU3RhdHVzKHBhcmFtcykge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS51c2VyQ2hhbmdlU3RhdHVzKHBhcmFtcyk7XG4gICAgICAgICAgICBpZihyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzLm1zZyxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgZ2V0VXNlckJ5RGVwdCgpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0VXNlckJ5RGVwdCgpO1xuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyTGlzdCA9IHJlcy51c2VyTGlzdDtcbiAgICAgICAgICAgICAgICB0aGlzLmRldmljZUxpc3QgPSByZXMuZGV2aWNlTGlzdDtcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVzLnVzZXJJbmZvO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=