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

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

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
                "van-icon": "../components/vant/icon/index",
                "van-nav-bar": "../components/vant/nav-bar/index",
                "van-collapse": "../components/vant/collapse/index",
                "van-collapse-item": "../components/vant/collapse-item/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            activeNames: [],
            userList: [],
            deviceList: [], // 监测点
            isOper: false, // 是否可操作关闭
            userPage: {
                pageNum: 1,
                pageSize: 5,
                total: 0
            },
            deviePage: {
                pageNum: 1,
                pageSize: 10,
                total: 0
            },
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
            },
            getMoreUserList: function getMoreUserList() {
                if (this.userPage.total == this.userList.length) {
                    return;
                }
                this.userPage.pageNum++;
                this.getUserList();
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(UserUnit, [{
        key: 'onLoad',
        value: function onLoad() {
            this.getMyInfo();
            this.getDevieList();
            this.getUserList();
        }

        // 上拉加载

    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            if (this.deviePage.total == this.deviceList.length) {
                return;
            }
            this.deviePage.pageNum++;
            this.getDevieList();
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

        // 获取我的信息

    }, {
        key: 'getMyInfo',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return api.getMyInfo();

                            case 2:
                                res = _context2.sent;

                                if (res.code == 200) {
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

            function getMyInfo() {
                return _ref3.apply(this, arguments);
            }

            return getMyInfo;
        }()

        // 获取监测列表

    }, {
        key: 'getDevieList',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var _deviePage, pageNum, pageSize, params, res, _res$deviceList, rows, total;

                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _deviePage = this.deviePage, pageNum = _deviePage.pageNum, pageSize = _deviePage.pageSize;
                                params = { pageNum: pageNum, pageSize: pageSize };
                                _context3.next = 4;
                                return api.getDevieList(params);

                            case 4:
                                res = _context3.sent;

                                if (res.code == 200) {
                                    _res$deviceList = res.deviceList, rows = _res$deviceList.rows, total = _res$deviceList.total;

                                    if (rows.length > 0) {
                                        this.deviceList = [].concat(_toConsumableArray(this.deviceList), _toConsumableArray(rows));
                                    }
                                    this.deviePage.total = total;
                                    this.$apply();
                                }

                            case 6:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getDevieList() {
                return _ref4.apply(this, arguments);
            }

            return getDevieList;
        }()
        // 获取用户列表

    }, {
        key: 'getUserList',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var _userPage, pageNum, pageSize, params, res, _res$userList, rows, total, isOper;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _userPage = this.userPage, pageNum = _userPage.pageNum, pageSize = _userPage.pageSize;
                                params = { pageNum: pageNum, pageSize: pageSize };
                                _context4.next = 4;
                                return api.getDeptUserList(params);

                            case 4:
                                res = _context4.sent;

                                if (res.code == 200) {
                                    _res$userList = res.userList, rows = _res$userList.rows, total = _res$userList.total, isOper = _res$userList.isOper;

                                    if (rows.length > 0) {
                                        this.userList = [].concat(_toConsumableArray(this.userList), _toConsumableArray(rows));
                                    }
                                    this.userPage.total = total;
                                    this.isOper = isOper;
                                    this.$apply();
                                }

                            case 6:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getUserList() {
                return _ref5.apply(this, arguments);
            }

            return getUserList;
        }()
    }]);

    return UserUnit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(UserUnit , 'pages/userUnit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJVbml0LmpzIl0sIm5hbWVzIjpbImFwaSIsIlVzZXJVbml0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImFjdGl2ZU5hbWVzIiwidXNlckxpc3QiLCJkZXZpY2VMaXN0IiwiaXNPcGVyIiwidXNlclBhZ2UiLCJwYWdlTnVtIiwicGFnZVNpemUiLCJ0b3RhbCIsImRldmllUGFnZSIsInVzZXJJbmZvIiwidXNlcklkIiwiYXZhdGFyIiwiZGVwdCIsImZpcnN0Um9sZU5hbWUiLCJmaXJzdERlcHQiLCJtZXRob2RzIiwib25DaGFuZ2VTaXRlIiwiZSIsImNoZWNrIiwiZGV0YWlsIiwidmFsdWUiLCJ0YXJnZXQiLCJkYXRhc2V0Iiwic2l0ZSIsInBhcmFtcyIsImlkIiwibmFtZSIsInVzZXJDaGFuZ2VTdGF0dXMiLCJKU09OIiwic3RyaW5naWZ5Iiwib25DaGFuZ2VDb2xsIiwib25DbGlja0xlZnQiLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZ2V0TW9yZVVzZXJMaXN0IiwibGVuZ3RoIiwiZ2V0VXNlckxpc3QiLCJnZXRNeUluZm8iLCJnZXREZXZpZUxpc3QiLCJyZXMiLCJjb2RlIiwic2hvd1RvYXN0IiwidGl0bGUiLCJtc2ciLCJpY29uIiwiZHVyYXRpb24iLCIkYXBwbHkiLCJyb3dzIiwiZ2V0RGVwdFVzZXJMaXN0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7OztJQUNTQyxROzs7Ozs7Ozs7Ozs7Ozs4TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsNEJBQVksK0JBREM7QUFFYiwrQkFBZSxrQ0FGRjtBQUdiLGdDQUFnQixtQ0FISDtBQUliLHFDQUFxQjtBQUpSO0FBRlos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OlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyVW5pdCBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTljZXkvY0nLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgXCJ2YW4taWNvblwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9pY29uL2luZGV4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YW4tY29sbGFwc2VcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvY29sbGFwc2UvaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbi1jb2xsYXBzZS1pdGVtXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2NvbGxhcHNlLWl0ZW0vaW5kZXhcIixcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcbiAgICAgICAgICAgIGFjdGl2ZU5hbWVzOiBbXSxcbiAgICAgICAgICAgIHVzZXJMaXN0OiBbXSxcbiAgICAgICAgICAgIGRldmljZUxpc3Q6IFtdLCAvLyDnm5HmtYvngrlcbiAgICAgICAgICAgIGlzT3BlcjogZmFsc2UsICAvLyDmmK/lkKblj6/mk43kvZzlhbPpl61cbiAgICAgICAgICAgIHVzZXJQYWdlOiB7XG4gICAgICAgICAgICAgICAgcGFnZU51bTogMSxcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogNSxcbiAgICAgICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZXZpZVBhZ2U6IHtcbiAgICAgICAgICAgICAgICBwYWdlTnVtOiAxLFxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiAxMCxcbiAgICAgICAgICAgICAgICB0b3RhbDogMCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1c2VySW5mbzoge1xuICAgICAgICAgICAgICAgIHVzZXJJZDogJycsICAvLyDnlKjmiLdJZO+8jCDnlKjkuo7mn6Xor6Lorr7lpIfliJfooahcbiAgICAgICAgICAgICAgICBhdmF0YXI6ICcnLCAgLy8g5aS05YOPXG4gICAgICAgICAgICAgICAgZGVwdDogJycsIC8vIOmDqOmXqFxuICAgICAgICAgICAgICAgIGZpcnN0Um9sZU5hbWU6ICcnLCAgLy8g6KeS6ImyXG4gICAgICAgICAgICAgICAgZmlyc3REZXB0OiAnJywgIC8vIOS4iue6p+WNleS9jVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRNeUluZm8oKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0RGV2aWVMaXN0KCk7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJMaXN0KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyDkuIrmi4nliqDovb1cbiAgICAgICAgb25SZWFjaEJvdHRvbSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmRldmllUGFnZS50b3RhbCA9PSB0aGlzLmRldmljZUxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kZXZpZVBhZ2UucGFnZU51bSsrO1xuICAgICAgICAgICAgdGhpcy5nZXREZXZpZUxpc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBvbkNoYW5nZVNpdGUoZSkge1xuICAgICAgICAgICAgICAgIGxldCBjaGVjayA9IGUuZGV0YWlsLnZhbHVlID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBlLnRhcmdldC5kYXRhc2V0LnNpdGU7XG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2hlY2s6IGNoZWNrLFxuICAgICAgICAgICAgICAgICAgICBpZDogZGF0YS5pZCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB1c2VySWQ6IGRhdGEudXNlcklkXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXNlckNoYW5nZVN0YXR1cyhKU09OLnN0cmluZ2lmeShwYXJhbXMpKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2hhbmdlQ29sbChlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVOYW1lcyA9IGUuZGV0YWlsO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uQ2xpY2tMZWZ0KCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XG4gICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZ2V0TW9yZVVzZXJMaXN0KCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJQYWdlLnRvdGFsID09IHRoaXMudXNlckxpc3QubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUGFnZS5wYWdlTnVtKys7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRVc2VyTGlzdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgdXNlckNoYW5nZVN0YXR1cyhwYXJhbXMpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkudXNlckNoYW5nZVN0YXR1cyhwYXJhbXMpO1xuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5tc2csXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIOiOt+WPluaIkeeahOS/oeaBr1xuICAgICAgICBhc3luYyBnZXRNeUluZm8oKSB7XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmdldE15SW5mbygpO1xuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHJlcy51c2VySW5mbztcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8g6I635Y+W55uR5rWL5YiX6KGoXG4gICAgICAgIGFzeW5jIGdldERldmllTGlzdCgpIHtcbiAgICAgICAgICAgIGxldCB7IHBhZ2VOdW0sIHBhZ2VTaXplIH0gPSB0aGlzLmRldmllUGFnZTtcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7cGFnZU51bSwgcGFnZVNpemV9XG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmdldERldmllTGlzdChwYXJhbXMpO1xuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByb3dzLCB0b3RhbCB9ID0gcmVzLmRldmljZUxpc3Q7XG4gICAgICAgICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldmljZUxpc3QgPSBbLi4udGhpcy5kZXZpY2VMaXN0LCAuLi5yb3dzXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmRldmllUGFnZS50b3RhbCA9IHRvdGFsO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6I635Y+W55So5oi35YiX6KGoXG4gICAgICAgIGFzeW5jIGdldFVzZXJMaXN0KCkge1xuICAgICAgICAgICAgbGV0IHsgcGFnZU51bSwgcGFnZVNpemUgfSA9IHRoaXMudXNlclBhZ2U7XG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge3BhZ2VOdW0sIHBhZ2VTaXplfVxuXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmdldERlcHRVc2VyTGlzdChwYXJhbXMpO1xuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByb3dzLCB0b3RhbCwgaXNPcGVyIH0gPSByZXMudXNlckxpc3Q7XG4gICAgICAgICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJMaXN0ID0gWy4uLnRoaXMudXNlckxpc3QsIC4uLnJvd3NdXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMudXNlclBhZ2UudG90YWwgPSB0b3RhbDtcbiAgICAgICAgICAgICAgICB0aGlzLmlzT3BlciA9IGlzT3BlcjtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19