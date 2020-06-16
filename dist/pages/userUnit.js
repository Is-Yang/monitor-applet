'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var api = _interopRequireWildcard(_api);

var _util = require('./../utils/util.js');

var _util2 = _interopRequireDefault(_util);

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
                "van-collapse-item": "../components/vant/collapse-item/index",
                "van-popup": "../components/vant/popup/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            activeNames: [],
            userList: [],
            monitorList: [], // 监测区域
            isOper: false, // 是否可操作关闭
            roleRange: [],
            userPage: {
                pageNum: 1,
                pageSize: 5,
                total: 0
            },
            monitorPage: {
                pageNum: 1,
                pageSize: 10,
                total: 0
            },
            userInfo: {
                userId: '', // 用户Id， 用于查询设备列表
                userName: '', // 用户名
                nickName: '', // 用户昵称
                deptQrCode: '', // 单位二维码
                deptLeader: '', // 负责人
                dept: '', // 部门
                deptContact: '', // 联系方式
                firstRoleName: '', // 角色
                firstDept: '' // 上级单位
            },
            role: '',
            previewQrcode: false // 预览二维码
        }, _this.methods = {
            // 退出单位
            outUnit: function outUnit() {
                this.uniteDept();
            },
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
            showQrCode: function showQrCode() {
                this.previewQrcode = true;
            },
            onClosePopup: function onClosePopup() {
                this.previewQrcode = false;
            },
            onChangeColl: function onChangeColl(e) {
                this.activeNames = e.detail;
            },
            onClickLeft: function onClickLeft() {
                wx.navigateBack({
                    delta: 1
                });
            },
            toRole: function toRole(e) {
                this.role = e.currentTarget.dataset.roles;
                var id = e.currentTarget.dataset.id;
                wx.navigateTo({
                    url: '/pages/package/roleList?id=' + id
                });
            },
            toMonitorSite: function toMonitorSite(e) {
                var title = e.currentTarget.dataset.title;
                wx.navigateTo({
                    url: '/pages/package/monitorSite?title=' + title
                });
            },
            getMoreUserList: function getMoreUserList() {
                if (this.userPage.total == this.userList.length) {
                    return;
                }
                this.userPage.pageNum++;
                this.getUserList();
            },
            onChangeRole: function onChangeRole(e) {
                this.roleIndex = e.detail.value;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(UserUnit, [{
        key: 'onShow',
        value: function onShow() {
            this.getMyInfo();
            this.getMoitorList('init');
            this.getUserList('init');
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            _wepy2.default.$instance.shareImage();
        }

        // 上拉加载

    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            if (this.monitorPage.total == this.monitorList.length) {
                return;
            }
            this.monitorPage.pageNum++;
            this.getMoitorList();
        }
    }, {
        key: 'uniteDept',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return api.uniteDept();

                            case 2:
                                res = _context.sent;

                                if (res.code == 200) {
                                    // 设置缓存未绑定部门
                                    wx.setStorageSync('isBindDept', false);

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

            function uniteDept() {
                return _ref2.apply(this, arguments);
            }

            return uniteDept;
        }()
    }, {
        key: 'userChangeStatus',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
                var _this2 = this;

                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return api.userChangeStatus(params);

                            case 2:
                                res = _context2.sent;

                                if (res.code == 200) {
                                    wx.showToast({
                                        title: res.msg,
                                        icon: 'success',
                                        duration: 1500
                                    });
                                } else {
                                    wx.showToast({
                                        title: res.msg,
                                        icon: 'none',
                                        duration: 1500
                                    });
                                    setTimeout(function () {
                                        _this2.getUserList('init');
                                        _this2.$apply();
                                    }, 1500);
                                }

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function userChangeStatus(_x) {
                return _ref3.apply(this, arguments);
            }

            return userChangeStatus;
        }()

        // 获取我的信息

    }, {
        key: 'getMyInfo',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
                var res, base64Image, imgData;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return api.getMyInfo();

                            case 2:
                                res = _context3.sent;

                                if (res.code == 200) {
                                    this.userInfo = res.userInfo;
                                    if (res.userInfo.nickName) {
                                        this.userInfo.nickName = (0, _util2.default)(res.userInfo.nickName);
                                    }
                                    base64Image = res.userInfo.deptQrCode;

                                    if (base64Image) {
                                        imgData = base64Image.replace(/[\r\n]/g, '');

                                        this.userInfo.deptQrCode = 'data:image/png;base64,' + imgData;
                                    }
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function getMyInfo() {
                return _ref4.apply(this, arguments);
            }

            return getMyInfo;
        }()

        // 获取监测列表

    }, {
        key: 'getMoitorList',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(reset) {
                var _monitorPage, pageNum, pageSize, params, res, _res$monitorAreaList, rows, total;

                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                if (reset == 'init') {
                                    this.monitorPage.total = 0;
                                    this.monitorPage.pageNum = 1;
                                    this.monitorList = [];
                                }
                                _monitorPage = this.monitorPage, pageNum = _monitorPage.pageNum, pageSize = _monitorPage.pageSize;
                                params = { pageNum: pageNum, pageSize: pageSize };
                                _context4.next = 5;
                                return api.getMoitorList(params);

                            case 5:
                                res = _context4.sent;

                                if (res.code == 200 && res.monitorAreaList) {
                                    _res$monitorAreaList = res.monitorAreaList, rows = _res$monitorAreaList.rows, total = _res$monitorAreaList.total;

                                    if (rows && rows.length > 0) {
                                        this.monitorList = [].concat(_toConsumableArray(this.monitorList), _toConsumableArray(rows));
                                    }
                                    this.monitorList.forEach(function (item) {
                                        if (item.person) {
                                            item.person = (0, _util2.default)(item.person);
                                        }
                                    });
                                    this.monitorPage.total = total;
                                    this.$apply();
                                }

                            case 7:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getMoitorList(_x2) {
                return _ref5.apply(this, arguments);
            }

            return getMoitorList;
        }()
        // 获取用户列表

    }, {
        key: 'getUserList',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(reset) {
                var _userPage, pageNum, pageSize, params, res, _res$userList, rows, total;

                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _userPage = this.userPage, pageNum = _userPage.pageNum, pageSize = _userPage.pageSize;

                                if (reset == 'init') {
                                    this.userPage.total = 0;
                                    pageNum = 1;
                                    this.userList = [];
                                }
                                params = { pageNum: pageNum, pageSize: pageSize };
                                _context5.next = 5;
                                return api.getDeptUserList(params);

                            case 5:
                                res = _context5.sent;

                                if (res.code == 200) {
                                    _res$userList = res.userList, rows = _res$userList.rows, total = _res$userList.total;

                                    if (rows.length > 0) {
                                        this.userList = [].concat(_toConsumableArray(this.userList), _toConsumableArray(rows));
                                    }
                                    this.userList.forEach(function (item) {
                                        if (item.nickname) {
                                            item.nickname = (0, _util2.default)(item.nickname);
                                        }
                                    });
                                    this.userPage.total = total;
                                    this.isOper = res.isOper;
                                    this.$apply();
                                }

                            case 7:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getUserList(_x3) {
                return _ref6.apply(this, arguments);
            }

            return getUserList;
        }()
    }]);

    return UserUnit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(UserUnit , 'pages/userUnit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJVbml0LmpzIl0sIm5hbWVzIjpbImFwaSIsIlVzZXJVbml0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImFjdGl2ZU5hbWVzIiwidXNlckxpc3QiLCJtb25pdG9yTGlzdCIsImlzT3BlciIsInJvbGVSYW5nZSIsInVzZXJQYWdlIiwicGFnZU51bSIsInBhZ2VTaXplIiwidG90YWwiLCJtb25pdG9yUGFnZSIsInVzZXJJbmZvIiwidXNlcklkIiwidXNlck5hbWUiLCJuaWNrTmFtZSIsImRlcHRRckNvZGUiLCJkZXB0TGVhZGVyIiwiZGVwdCIsImRlcHRDb250YWN0IiwiZmlyc3RSb2xlTmFtZSIsImZpcnN0RGVwdCIsInJvbGUiLCJwcmV2aWV3UXJjb2RlIiwibWV0aG9kcyIsIm91dFVuaXQiLCJ1bml0ZURlcHQiLCJvbkNoYW5nZVNpdGUiLCJlIiwiY2hlY2siLCJkZXRhaWwiLCJ2YWx1ZSIsInRhcmdldCIsImRhdGFzZXQiLCJzaXRlIiwicGFyYW1zIiwiaWQiLCJuYW1lIiwidXNlckNoYW5nZVN0YXR1cyIsIkpTT04iLCJzdHJpbmdpZnkiLCJzaG93UXJDb2RlIiwib25DbG9zZVBvcHVwIiwib25DaGFuZ2VDb2xsIiwib25DbGlja0xlZnQiLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwidG9Sb2xlIiwiY3VycmVudFRhcmdldCIsInJvbGVzIiwibmF2aWdhdGVUbyIsInVybCIsInRvTW9uaXRvclNpdGUiLCJ0aXRsZSIsImdldE1vcmVVc2VyTGlzdCIsImxlbmd0aCIsImdldFVzZXJMaXN0Iiwib25DaGFuZ2VSb2xlIiwicm9sZUluZGV4IiwiZ2V0TXlJbmZvIiwiZ2V0TW9pdG9yTGlzdCIsInNoYXJlSW1hZ2UiLCJyZXMiLCJjb2RlIiwic2V0U3RvcmFnZVN5bmMiLCJzaG93VG9hc3QiLCJtc2ciLCJpY29uIiwiZHVyYXRpb24iLCJzZXRUaW1lb3V0IiwiJGFwcGx5IiwiYmFzZTY0SW1hZ2UiLCJpbWdEYXRhIiwicmVwbGFjZSIsInJlc2V0IiwibW9uaXRvckFyZWFMaXN0Iiwicm93cyIsImZvckVhY2giLCJpdGVtIiwicGVyc29uIiwiZ2V0RGVwdFVzZXJMaXN0Iiwibmlja25hbWUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztJQUFZQSxHOztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJDLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiw0QkFBWSwrQkFEQztBQUViLCtCQUFlLGtDQUZGO0FBR2IsZ0NBQWdCLG1DQUhIO0FBSWIscUNBQXFCLHdDQUpSO0FBS2IsNkJBQWE7QUFMQTtBQUZaLFMsUUFVVEMsSSxHQUFPO0FBQ0hDLDZCQUFpQkMsZUFBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCSCxlQUR4QztBQUVISSx5QkFBYSxFQUZWO0FBR0hDLHNCQUFVLEVBSFA7QUFJSEMseUJBQWEsRUFKVixFQUljO0FBQ2pCQyxvQkFBUSxLQUxMLEVBS2E7QUFDaEJDLHVCQUFXLEVBTlI7QUFPSEMsc0JBQVU7QUFDTkMseUJBQVMsQ0FESDtBQUVOQywwQkFBVSxDQUZKO0FBR05DLHVCQUFPO0FBSEQsYUFQUDtBQVlIQyx5QkFBYTtBQUNUSCx5QkFBUyxDQURBO0FBRVRDLDBCQUFVLEVBRkQ7QUFHVEMsdUJBQU87QUFIRSxhQVpWO0FBaUJIRSxzQkFBVTtBQUNOQyx3QkFBUSxFQURGLEVBQ087QUFDYkMsMEJBQVUsRUFGSixFQUVRO0FBQ2RDLDBCQUFVLEVBSEosRUFHUztBQUNmQyw0QkFBWSxFQUpOLEVBSVc7QUFDakJDLDRCQUFZLEVBTE4sRUFLVTtBQUNoQkMsc0JBQU0sRUFOQSxFQU1JO0FBQ1ZDLDZCQUFhLEVBUFAsRUFPVztBQUNqQkMsK0JBQWUsRUFSVCxFQVFjO0FBQ3BCQywy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cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknXHJcbiAgICBpbXBvcnQgZGVjb2RlIGZyb20gJy4uL3V0aWxzL3V0aWwuanMnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclVuaXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOWNleS9jScsXHJcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YW4taWNvblwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9pY29uL2luZGV4XCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIixcclxuICAgICAgICAgICAgICAgIFwidmFuLWNvbGxhcHNlXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2NvbGxhcHNlL2luZGV4XCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbi1jb2xsYXBzZS1pdGVtXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2NvbGxhcHNlLWl0ZW0vaW5kZXhcIixcclxuICAgICAgICAgICAgICAgIFwidmFuLXBvcHVwXCI6IFwiLi4vY29tcG9uZW50cy92YW50L3BvcHVwL2luZGV4XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxyXG4gICAgICAgICAgICBhY3RpdmVOYW1lczogW10sXHJcbiAgICAgICAgICAgIHVzZXJMaXN0OiBbXSxcclxuICAgICAgICAgICAgbW9uaXRvckxpc3Q6IFtdLCAvLyDnm5HmtYvljLrln59cclxuICAgICAgICAgICAgaXNPcGVyOiBmYWxzZSwgIC8vIOaYr+WQpuWPr+aTjeS9nOWFs+mXrVxyXG4gICAgICAgICAgICByb2xlUmFuZ2U6IFtdLFxyXG4gICAgICAgICAgICB1c2VyUGFnZToge1xyXG4gICAgICAgICAgICAgICAgcGFnZU51bTogMSxcclxuICAgICAgICAgICAgICAgIHBhZ2VTaXplOiA1LFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vbml0b3JQYWdlOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdlTnVtOiAxLFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IDAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVzZXJJbmZvOiB7XHJcbiAgICAgICAgICAgICAgICB1c2VySWQ6ICcnLCAgLy8g55So5oi3SWTvvIwg55So5LqO5p+l6K+i6K6+5aSH5YiX6KGoXHJcbiAgICAgICAgICAgICAgICB1c2VyTmFtZTogJycsIC8vIOeUqOaIt+WQjVxyXG4gICAgICAgICAgICAgICAgbmlja05hbWU6ICcnLCAgLy8g55So5oi35pi156ewXHJcbiAgICAgICAgICAgICAgICBkZXB0UXJDb2RlOiAnJywgIC8vIOWNleS9jeS6jOe7tOeggVxyXG4gICAgICAgICAgICAgICAgZGVwdExlYWRlcjogJycsIC8vIOi0n+i0o+S6ulxyXG4gICAgICAgICAgICAgICAgZGVwdDogJycsIC8vIOmDqOmXqFxyXG4gICAgICAgICAgICAgICAgZGVwdENvbnRhY3Q6ICcnLCAvLyDogZTns7vmlrnlvI9cclxuICAgICAgICAgICAgICAgIGZpcnN0Um9sZU5hbWU6ICcnLCAgLy8g6KeS6ImyXHJcbiAgICAgICAgICAgICAgICBmaXJzdERlcHQ6ICcnLCAgLy8g5LiK57qn5Y2V5L2NXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJvbGU6ICcnLFxyXG4gICAgICAgICAgICBwcmV2aWV3UXJjb2RlOiBmYWxzZSwgIC8vIOmihOiniOS6jOe7tOeggVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25TaG93KCkge1xyXG4gICAgICAgICAgICB0aGlzLmdldE15SW5mbygpO1xyXG4gICAgICAgICAgICB0aGlzLmdldE1vaXRvckxpc3QoJ2luaXQnKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRVc2VyTGlzdCgnaW5pdCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgICAgICB3ZXB5LiRpbnN0YW5jZS5zaGFyZUltYWdlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOS4iuaLieWKoOi9vVxyXG4gICAgICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1vbml0b3JQYWdlLnRvdGFsID09IHRoaXMubW9uaXRvckxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tb25pdG9yUGFnZS5wYWdlTnVtKys7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9pdG9yTGlzdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgLy8g6YCA5Ye65Y2V5L2NXHJcbiAgICAgICAgICAgIG91dFVuaXQoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVuaXRlRGVwdCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNoYW5nZVNpdGUoZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoZWNrID0gZS5kZXRhaWwudmFsdWUgPyAxIDogMDtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gZS50YXJnZXQuZGF0YXNldC5zaXRlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVjazogY2hlY2ssXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogZGF0YS51c2VySWRcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckNoYW5nZVN0YXR1cyhKU09OLnN0cmluZ2lmeShwYXJhbXMpKVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93UXJDb2RlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3UXJjb2RlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DbG9zZVBvcHVwKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3UXJjb2RlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlQ29sbChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU5hbWVzID0gZS5kZXRhaWw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2xpY2tMZWZ0KCkge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvUm9sZShlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5yb2xlcztcclxuICAgICAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3BhY2thZ2Uvcm9sZUxpc3Q/aWQ9JyArIGlkXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9Nb25pdG9yU2l0ZShlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC50aXRsZTtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wYWNrYWdlL21vbml0b3JTaXRlP3RpdGxlPScgKyB0aXRsZVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldE1vcmVVc2VyTGlzdCgpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJQYWdlLnRvdGFsID09IHRoaXMudXNlckxpc3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUGFnZS5wYWdlTnVtKys7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFVzZXJMaXN0KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlUm9sZShlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvbGVJbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyB1bml0ZURlcHQoKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkudW5pdGVEZXB0KCk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgLy8g6K6+572u57yT5a2Y5pyq57uR5a6a6YOo6ZeoXHJcbiAgICAgICAgICAgICAgICB3eC5zZXRTdG9yYWdlU3luYygnaXNCaW5kRGVwdCcsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzLm1zZyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyB1c2VyQ2hhbmdlU3RhdHVzKHBhcmFtcykge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnVzZXJDaGFuZ2VTdGF0dXMocGFyYW1zKTtcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXMubXNnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdzdWNjZXNzJyxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiByZXMubXNnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFVzZXJMaXN0KCdpbml0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgICAgIH0sIDE1MDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDojrflj5bmiJHnmoTkv6Hmga9cclxuICAgICAgICBhc3luYyBnZXRNeUluZm8oKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0TXlJbmZvKCk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHJlcy51c2VySW5mbztcclxuICAgICAgICAgICAgICAgIGlmKHJlcy51c2VySW5mby5uaWNrTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckluZm8ubmlja05hbWUgPSBkZWNvZGUocmVzLnVzZXJJbmZvLm5pY2tOYW1lKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IGJhc2U2NEltYWdlID0gcmVzLnVzZXJJbmZvLmRlcHRRckNvZGU7XHJcbiAgICAgICAgICAgICAgICBpZiAoYmFzZTY0SW1hZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nRGF0YSA9IGJhc2U2NEltYWdlLnJlcGxhY2UoL1tcXHJcXG5dL2csICcnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmRlcHRRckNvZGUgPSAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LCcgKyBpbWdEYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g6I635Y+W55uR5rWL5YiX6KGoXHJcbiAgICAgICAgYXN5bmMgZ2V0TW9pdG9yTGlzdChyZXNldCkge1xyXG4gICAgICAgICAgICBpZiAocmVzZXQgPT0gJ2luaXQnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbml0b3JQYWdlLnRvdGFsID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvclBhZ2UucGFnZU51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbml0b3JMaXN0ID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHsgcGFnZU51bSwgcGFnZVNpemUgfSA9IHRoaXMubW9uaXRvclBhZ2U7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0ge3BhZ2VOdW0sIHBhZ2VTaXplfVxyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmdldE1vaXRvckxpc3QocGFyYW1zKTtcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwICYmIHJlcy5tb25pdG9yQXJlYUxpc3QpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcm93cywgdG90YWwgfSA9IHJlcy5tb25pdG9yQXJlYUxpc3Q7XHJcbiAgICAgICAgICAgICAgICBpZiAocm93cyAmJiByb3dzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbml0b3JMaXN0ID0gWy4uLnRoaXMubW9uaXRvckxpc3QsIC4uLnJvd3NdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbml0b3JMaXN0LmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0ucGVyc29uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucGVyc29uID0gZGVjb2RlKGl0ZW0ucGVyc29uKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvclBhZ2UudG90YWwgPSB0b3RhbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g6I635Y+W55So5oi35YiX6KGoXHJcbiAgICAgICAgYXN5bmMgZ2V0VXNlckxpc3QocmVzZXQpIHtcclxuICAgICAgICAgICAgbGV0IHsgcGFnZU51bSwgcGFnZVNpemUgfSA9IHRoaXMudXNlclBhZ2U7XHJcbiAgICAgICAgICAgIGlmIChyZXNldCA9PSAnaW5pdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlclBhZ2UudG90YWwgPSAwO1xyXG4gICAgICAgICAgICAgICAgcGFnZU51bSA9IDE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVzZXJMaXN0ID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtwYWdlTnVtLCBwYWdlU2l6ZX1cclxuXHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0RGVwdFVzZXJMaXN0KHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByb3dzLCB0b3RhbCB9ID0gcmVzLnVzZXJMaXN0O1xyXG4gICAgICAgICAgICAgICAgaWYgKHJvd3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXNlckxpc3QgPSBbLi4udGhpcy51c2VyTGlzdCwgLi4ucm93c11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckxpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5uaWNrbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm5pY2tuYW1lID0gZGVjb2RlKGl0ZW0ubmlja25hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51c2VyUGFnZS50b3RhbCA9IHRvdGFsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc09wZXIgPSByZXMuaXNPcGVyO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19