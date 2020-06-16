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

var Logs = function (_wepy$page) {
    _inherits(Logs, _wepy$page);

    function Logs() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Logs);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Logs.__proto__ || Object.getPrototypeOf(Logs)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '操作记录',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index"
            }
            // enablePullDownRefresh: true
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            listData: [],
            page: {
                pageNum: 1,
                pageSize: 20,
                total: 0
            }
        }, _this.methods = {
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

    _createClass(Logs, [{
        key: 'onLoad',
        value: function onLoad() {
            _wepy2.default.$instance.shareImage();

            this.getOperlog('init');
        }

        //下拉刷新
        // onPullDownRefresh() {
        //     this.getOperlog('init');
        //     wx.stopPullDownRefresh();
        // }

        // 上拉加载

    }, {
        key: 'onReachBottom',
        value: function onReachBottom() {
            if (this.page.total == this.listData.length) {
                return;
            }
            this.page.pageNum++;
            this.getOperlog();
        }
    }, {
        key: 'getOperlog',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(reset) {
                var _page, pageNum, pageSize, _wx$getStorageSync, deptId, params, res;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (reset == 'init') {
                                    this.page.total = 0;
                                    this.page.pageNum = 1;
                                    this.listData = [];
                                }
                                _page = this.page, pageNum = _page.pageNum, pageSize = _page.pageSize;
                                _wx$getStorageSync = wx.getStorageSync('globalData'), deptId = _wx$getStorageSync.deptId;
                                params = {
                                    deptId: deptId,
                                    pageNum: pageNum,
                                    pageSize: pageSize
                                };
                                _context.next = 6;
                                return api.getOperlog(params);

                            case 6:
                                res = _context.sent;

                                if (res.code == 200) {
                                    if (res.rows.length > 0) {
                                        this.listData = [].concat(_toConsumableArray(this.listData), _toConsumableArray(res.rows));
                                    }
                                    this.listData.forEach(function (item) {
                                        if (item.operName) {
                                            item.operName = (0, _util2.default)(item.operName);
                                        }
                                    });
                                    this.page.total = res.total;
                                    this.$apply();
                                }

                            case 8:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getOperlog(_x) {
                return _ref2.apply(this, arguments);
            }

            return getOperlog;
        }()
    }]);

    return Logs;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Logs , 'pages/logs'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ3MuanMiXSwibmFtZXMiOlsiYXBpIiwiTG9ncyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwic3RhdHVzQmFySGVpZ2h0Iiwid2VweSIsIiRpbnN0YW5jZSIsImdsb2JhbERhdGEiLCJsaXN0RGF0YSIsInBhZ2UiLCJwYWdlTnVtIiwicGFnZVNpemUiLCJ0b3RhbCIsIm1ldGhvZHMiLCJvbkNsaWNrTGVmdCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwibGVuZ3RoIiwid3giLCJzd2l0Y2hUYWIiLCJ1cmwiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsInNoYXJlSW1hZ2UiLCJnZXRPcGVybG9nIiwicmVzZXQiLCJnZXRTdG9yYWdlU3luYyIsImRlcHRJZCIsInBhcmFtcyIsInJlcyIsImNvZGUiLCJyb3dzIiwiZm9yRWFjaCIsIml0ZW0iLCJvcGVyTmFtZSIsIiRhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7QUFDWjs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQ3FCQyxJOzs7Ozs7Ozs7Ozs7OztzTEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsK0JBQWU7QUFERjtBQUdqQjtBQUxLLFMsUUFRVEMsSSxHQUFPO0FBQ0hDLDZCQUFpQkMsZUFBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCSCxlQUR4QztBQUVISSxzQkFBVSxFQUZQO0FBR0hDLGtCQUFNO0FBQ0ZDLHlCQUFTLENBRFA7QUFFRkMsMEJBQVUsRUFGUjtBQUdGQyx1QkFBTztBQUhMO0FBSEgsUyxRQStCUEMsTyxHQUFVO0FBQ05DLHVCQURNLHlCQUNRO0FBQ1Ysb0JBQUlDLFFBQVFDLGlCQUFaO0FBQ0Esb0JBQUlELE1BQU1FLE1BQU4sSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJDLHVCQUFHQyxTQUFILENBQWE7QUFDVEMsNkJBQUs7QUFESSxxQkFBYjtBQUdILGlCQUpELE1BSU87QUFDSEYsdUJBQUdHLFlBQUgsQ0FBZ0I7QUFDWkMsK0JBQU87QUFESyxxQkFBaEI7QUFHSDtBQUNKO0FBWkssUzs7Ozs7aUNBckJEO0FBQ0xqQiwyQkFBS0MsU0FBTCxDQUFlaUIsVUFBZjs7QUFFQSxpQkFBS0MsVUFBTCxDQUFnQixNQUFoQjtBQUNIOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7d0NBQ2dCO0FBQ2QsZ0JBQUksS0FBS2YsSUFBTCxDQUFVRyxLQUFWLElBQW1CLEtBQUtKLFFBQUwsQ0FBY1MsTUFBckMsRUFBNkM7QUFDM0M7QUFDRDtBQUNELGlCQUFLUixJQUFMLENBQVVDLE9BQVY7QUFDQSxpQkFBS2MsVUFBTDtBQUNEOzs7O2lHQWlCZ0JDLEs7Ozs7Ozs7QUFDYixvQ0FBSUEsU0FBUyxNQUFiLEVBQXFCO0FBQ2pCLHlDQUFLaEIsSUFBTCxDQUFVRyxLQUFWLEdBQWtCLENBQWxCO0FBQ0EseUNBQUtILElBQUwsQ0FBVUMsT0FBVixHQUFvQixDQUFwQjtBQUNBLHlDQUFLRixRQUFMLEdBQWdCLEVBQWhCO0FBQ0g7d0NBQzJCLEtBQUtDLEksRUFBM0JDLE8sU0FBQUEsTyxFQUFTQyxRLFNBQUFBLFE7cURBRUlPLEdBQUdRLGNBQUgsQ0FBa0IsWUFBbEIsQyxFQUFYQyxNLHNCQUFBQSxNO0FBQ0pDLHNDLEdBQVM7QUFDVEQsa0RBRFM7QUFFVGpCLG9EQUZTO0FBR1RDO0FBSFMsaUM7O3VDQUtHYixJQUFJMEIsVUFBSixDQUFlSSxNQUFmLEM7OztBQUFaQyxtQzs7QUFDSixvQ0FBR0EsSUFBSUMsSUFBSixJQUFZLEdBQWYsRUFBb0I7QUFDaEIsd0NBQUlELElBQUlFLElBQUosQ0FBU2QsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUNyQiw2Q0FBS1QsUUFBTCxnQ0FBb0IsS0FBS0EsUUFBekIsc0JBQXNDcUIsSUFBSUUsSUFBMUM7QUFDSDtBQUNELHlDQUFLdkIsUUFBTCxDQUFjd0IsT0FBZCxDQUFzQixnQkFBUTtBQUMxQiw0Q0FBSUMsS0FBS0MsUUFBVCxFQUFtQjtBQUNmRCxpREFBS0MsUUFBTCxHQUFnQixvQkFBT0QsS0FBS0MsUUFBWixDQUFoQjtBQUNIO0FBQ0oscUNBSkQ7QUFLQSx5Q0FBS3pCLElBQUwsQ0FBVUcsS0FBVixHQUFrQmlCLElBQUlqQixLQUF0QjtBQUNBLHlDQUFLdUIsTUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBakZ5QjlCLGVBQUtJLEk7O2tCQUFsQlYsSSIsImZpbGUiOiJsb2dzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuLi9hcGkvYXBpJ1xyXG5pbXBvcnQgZGVjb2RlIGZyb20gJy4uL3V0aWxzL3V0aWwuanMnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2dzIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5pON5L2c6K6w5b2VJyxcclxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIGVuYWJsZVB1bGxEb3duUmVmcmVzaDogdHJ1ZVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcclxuICAgICAgICBsaXN0RGF0YTogW10sXHJcbiAgICAgICAgcGFnZToge1xyXG4gICAgICAgICAgICBwYWdlTnVtOiAxLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogMjAsXHJcbiAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgd2VweS4kaW5zdGFuY2Uuc2hhcmVJbWFnZSgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5nZXRPcGVybG9nKCdpbml0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/kuIvmi4nliLfmlrBcclxuICAgIC8vIG9uUHVsbERvd25SZWZyZXNoKCkge1xyXG4gICAgLy8gICAgIHRoaXMuZ2V0T3BlcmxvZygnaW5pdCcpO1xyXG4gICAgLy8gICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyDkuIrmi4nliqDovb1cclxuICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgIGlmICh0aGlzLnBhZ2UudG90YWwgPT0gdGhpcy5saXN0RGF0YS5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5wYWdlLnBhZ2VOdW0rKztcclxuICAgICAgdGhpcy5nZXRPcGVybG9nKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBvbkNsaWNrTGVmdCgpIHtcclxuICAgICAgICAgICAgbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgIGlmIChwYWdlcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWVudTInXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgZ2V0T3BlcmxvZyhyZXNldCkge1xyXG4gICAgICAgIGlmIChyZXNldCA9PSAnaW5pdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLnRvdGFsID0gMDtcclxuICAgICAgICAgICAgdGhpcy5wYWdlLnBhZ2VOdW0gPSAxO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3REYXRhID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCB7IHBhZ2VOdW0sIHBhZ2VTaXplIH0gPSB0aGlzLnBhZ2U7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgZGVwdElkIH0gPSB3eC5nZXRTdG9yYWdlU3luYygnZ2xvYmFsRGF0YScpO1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGRlcHRJZCxcclxuICAgICAgICAgICAgcGFnZU51bSwgXHJcbiAgICAgICAgICAgIHBhZ2VTaXplXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0T3BlcmxvZyhwYXJhbXMpO1xyXG4gICAgICAgIGlmKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICBpZiAocmVzLnJvd3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YSA9IFsuLi50aGlzLmxpc3REYXRhLCAuLi5yZXMucm93c11cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxpc3REYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5vcGVyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ub3Blck5hbWUgPSBkZWNvZGUoaXRlbS5vcGVyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UudG90YWwgPSByZXMudG90YWw7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==