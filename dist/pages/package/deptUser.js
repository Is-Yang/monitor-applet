'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

var api = _interopRequireWildcard(_api);

var _util = require('./../../utils/util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DeptUser = function (_wepy$page) {
    _inherits(DeptUser, _wepy$page);

    function DeptUser() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DeptUser);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DeptUser.__proto__ || Object.getPrototypeOf(DeptUser)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '相关人员列表',
            usingComponents: {
                "van-nav-bar": "../../components/vant/nav-bar/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            userList: [], // 相关人员
            selectId: [] // 所选人员id
        }, _this.methods = {
            submitSelect: function submitSelect() {
                var selectUser = [];
                var _iteratorNormalCompletion = true;
                var _didIteratorError = false;
                var _iteratorError = undefined;

                try {
                    for (var _iterator = this.selectId[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                        var select = _step.value;
                        var _iteratorNormalCompletion2 = true;
                        var _didIteratorError2 = false;
                        var _iteratorError2 = undefined;

                        try {
                            for (var _iterator2 = this.userList[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                                var item = _step2.value;

                                if (select == item.userId) {
                                    selectUser.push(item);
                                }
                            }
                        } catch (err) {
                            _didIteratorError2 = true;
                            _iteratorError2 = err;
                        } finally {
                            try {
                                if (!_iteratorNormalCompletion2 && _iterator2.return) {
                                    _iterator2.return();
                                }
                            } finally {
                                if (_didIteratorError2) {
                                    throw _iteratorError2;
                                }
                            }
                        }
                    }
                } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                } finally {
                    try {
                        if (!_iteratorNormalCompletion && _iterator.return) {
                            _iterator.return();
                        }
                    } finally {
                        if (_didIteratorError) {
                            throw _iteratorError;
                        }
                    }
                }

                var pages = getCurrentPages();
                var prevPage = pages[pages.length - 2];
                prevPage.relationUser = selectUser;
                prevPage.selectUserIds = this.selectId;
                wx.navigateBack({
                    delta: 1
                });
            },
            checkboxChange: function checkboxChange(e) {
                this.selectId = e.detail.value;
                this.$apply();
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

    _createClass(DeptUser, [{
        key: 'onLoad',
        value: function onLoad() {
            _wepy2.default.$instance.shareImage();

            this.getMyDeptUserOptions();
        }
    }, {
        key: 'getMyDeptUserOptions',


        // 获取相关人员
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res, _wx$getStorageSync, nickName, userId, pages, prevPage, _iteratorNormalCompletion3, _didIteratorError3, _iteratorError3, _iterator3, _step3, select, _iteratorNormalCompletion4, _didIteratorError4, _iteratorError4, _iterator4, _step4, item;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return api.getMyDeptUserOptions();

                            case 2:
                                res = _context.sent;

                                if (!(res.code == 200)) {
                                    _context.next = 55;
                                    break;
                                }

                                res.data.forEach(function (item) {
                                    if (item.nickName) {
                                        item.nickName = (0, _util2.default)(item.nickName);
                                    }
                                });

                                this.userList = res.data;

                                _wx$getStorageSync = wx.getStorageSync('globalData'), nickName = _wx$getStorageSync.nickName, userId = _wx$getStorageSync.userId;
                                pages = getCurrentPages();
                                prevPage = pages[pages.length - 2];

                                this.selectId = prevPage.data.selectUserIds;

                                if (!(this.selectId.length > 0)) {
                                    _context.next = 54;
                                    break;
                                }

                                _iteratorNormalCompletion3 = true;
                                _didIteratorError3 = false;
                                _iteratorError3 = undefined;
                                _context.prev = 14;
                                _iterator3 = this.selectId[Symbol.iterator]();

                            case 16:
                                if (_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done) {
                                    _context.next = 40;
                                    break;
                                }

                                select = _step3.value;
                                _iteratorNormalCompletion4 = true;
                                _didIteratorError4 = false;
                                _iteratorError4 = undefined;
                                _context.prev = 21;

                                for (_iterator4 = this.userList[Symbol.iterator](); !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
                                    item = _step4.value;

                                    if (select == item.userId) {
                                        item.checked = true;
                                    }
                                    // 如果为当前用户，则默认选中，并且禁止更改
                                    if (userId == item.userId) {
                                        item.checked = true;
                                        item.disabled = true;
                                    }
                                }
                                _context.next = 29;
                                break;

                            case 25:
                                _context.prev = 25;
                                _context.t0 = _context['catch'](21);
                                _didIteratorError4 = true;
                                _iteratorError4 = _context.t0;

                            case 29:
                                _context.prev = 29;
                                _context.prev = 30;

                                if (!_iteratorNormalCompletion4 && _iterator4.return) {
                                    _iterator4.return();
                                }

                            case 32:
                                _context.prev = 32;

                                if (!_didIteratorError4) {
                                    _context.next = 35;
                                    break;
                                }

                                throw _iteratorError4;

                            case 35:
                                return _context.finish(32);

                            case 36:
                                return _context.finish(29);

                            case 37:
                                _iteratorNormalCompletion3 = true;
                                _context.next = 16;
                                break;

                            case 40:
                                _context.next = 46;
                                break;

                            case 42:
                                _context.prev = 42;
                                _context.t1 = _context['catch'](14);
                                _didIteratorError3 = true;
                                _iteratorError3 = _context.t1;

                            case 46:
                                _context.prev = 46;
                                _context.prev = 47;

                                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                                    _iterator3.return();
                                }

                            case 49:
                                _context.prev = 49;

                                if (!_didIteratorError3) {
                                    _context.next = 52;
                                    break;
                                }

                                throw _iteratorError3;

                            case 52:
                                return _context.finish(49);

                            case 53:
                                return _context.finish(46);

                            case 54:
                                this.$apply();

                            case 55:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this, [[14, 42, 46, 54], [21, 25, 29, 37], [30,, 32, 36], [47,, 49, 53]]);
            }));

            function getMyDeptUserOptions() {
                return _ref2.apply(this, arguments);
            }

            return getMyDeptUserOptions;
        }()
    }]);

    return DeptUser;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(DeptUser , 'pages/package/deptUser'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRlcHRVc2VyLmpzIl0sIm5hbWVzIjpbImFwaSIsIkRlcHRVc2VyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInVzZXJMaXN0Iiwic2VsZWN0SWQiLCJtZXRob2RzIiwic3VibWl0U2VsZWN0Iiwic2VsZWN0VXNlciIsInNlbGVjdCIsIml0ZW0iLCJ1c2VySWQiLCJwdXNoIiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJwcmV2UGFnZSIsImxlbmd0aCIsInJlbGF0aW9uVXNlciIsInNlbGVjdFVzZXJJZHMiLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiY2hlY2tib3hDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCIkYXBwbHkiLCJvbkNsaWNrTGVmdCIsInN3aXRjaFRhYiIsInVybCIsInNoYXJlSW1hZ2UiLCJnZXRNeURlcHRVc2VyT3B0aW9ucyIsInJlcyIsImNvZGUiLCJmb3JFYWNoIiwibmlja05hbWUiLCJnZXRTdG9yYWdlU3luYyIsImNoZWNrZWQiLCJkaXNhYmxlZCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7O0lBQVlBLEc7O0FBQ1o7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJDLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixRQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwrQkFBZTtBQURGO0FBRlosUyxRQU9UQyxJLEdBQU87QUFDSEMsNkJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHhDO0FBRUhJLHNCQUFVLEVBRlAsRUFFWTtBQUNmQyxzQkFBVSxFQUhQLENBR1k7QUFIWixTLFFBWVBDLE8sR0FBVTtBQUNOQyx3QkFETSwwQkFDUztBQUNYLG9CQUFJQyxhQUFhLEVBQWpCO0FBRFc7QUFBQTtB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S1osTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXZGMEJ6QixlQUFLc0MsSTs7a0JBQXRCNUMsUSIsImZpbGUiOiJkZXB0VXNlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vLi4vYXBpL2FwaSdcclxuaW1wb3J0IGRlY29kZSBmcm9tICcuLi8uLi91dGlscy91dGlsLmpzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVwdFVzZXIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnm7jlhbPkurrlkZjliJfooagnLFxyXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXHJcbiAgICAgICAgdXNlckxpc3Q6IFtdLCAgLy8g55u45YWz5Lq65ZGYXHJcbiAgICAgICAgc2VsZWN0SWQ6IFtdICAgLy8g5omA6YCJ5Lq65ZGYaWRcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgd2VweS4kaW5zdGFuY2Uuc2hhcmVJbWFnZSgpXHJcblxyXG4gICAgICAgIHRoaXMuZ2V0TXlEZXB0VXNlck9wdGlvbnMoKTtcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIHN1Ym1pdFNlbGVjdCgpIHtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdFVzZXIgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBzZWxlY3Qgb2YgdGhpcy5zZWxlY3RJZCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMudXNlckxpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ID09IGl0ZW0udXNlcklkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdFVzZXIucHVzaChpdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKClcclxuICAgICAgICAgICAgY29uc3QgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXVxyXG4gICAgICAgICAgICBwcmV2UGFnZS5yZWxhdGlvblVzZXIgPSBzZWxlY3RVc2VyO1xyXG4gICAgICAgICAgICBwcmV2UGFnZS5zZWxlY3RVc2VySWRzID0gdGhpcy5zZWxlY3RJZDtcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tib3hDaGFuZ2UoZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdElkID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsaWNrTGVmdCgpIHtcclxuICAgICAgICAgICAgbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgIGlmIChwYWdlcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWVudTInXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W55u45YWz5Lq65ZGYXHJcbiAgICBhc3luYyBnZXRNeURlcHRVc2VyT3B0aW9ucygpIHtcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmdldE15RGVwdFVzZXJPcHRpb25zKCk7XHJcbiAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHJlcy5kYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5uaWNrTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubmlja05hbWUgPSBkZWNvZGUoaXRlbS5uaWNrTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51c2VyTGlzdCA9IHJlcy5kYXRhO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qge25pY2tOYW1lLCB1c2VySWR9ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2dsb2JhbERhdGEnKTtcclxuICAgICAgICAgICAgY29uc3QgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKVxyXG4gICAgICAgICAgICBjb25zdCBwcmV2UGFnZSA9IHBhZ2VzW3BhZ2VzLmxlbmd0aCAtIDJdXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0SWQgPSBwcmV2UGFnZS5kYXRhLnNlbGVjdFVzZXJJZHM7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuc2VsZWN0SWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzZWxlY3Qgb2YgdGhpcy5zZWxlY3RJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLnVzZXJMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxlY3QgPT0gaXRlbS51c2VySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5Li65b2T5YmN55So5oi377yM5YiZ6buY6K6k6YCJ5Lit77yM5bm25LiU56aB5q2i5pu05pS5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1c2VySWQgPT0gaXRlbS51c2VySWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=