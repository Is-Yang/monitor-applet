'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

var _util = require('./../../utils/util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var reportLogs = function (_wepy$page) {
    _inherits(reportLogs, _wepy$page);

    function reportLogs() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, reportLogs);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = reportLogs.__proto__ || Object.getPrototypeOf(reportLogs)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '预警信息-操作日志',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index"
            }
            // enablePullDownRefresh: true
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            listData: [],
            yujingId: '',
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
                        url: '/pages/menu0'
                    });
                } else {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(reportLogs, [{
        key: 'onLoad',
        value: function onLoad(options) {
            _wepy2.default.$instance.shareImage();

            this.yujingId = options.yujingId;
            this.getOperlog('init');
        }

        //下拉刷新
        // onPullDownRefresh() {
        //     this.getOperlog('init');
        //     wx.stopPullDownRefresh();
        // }

        // 上拉加载
        // onReachBottom() {
        //   if (this.page.total == this.listData.length) {
        //     return;
        //   }
        //   this.page.pageNum++;
        //   this.getOperlog();
        // }

    }, {
        key: 'getOperlog',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(reset) {
                var _page, pageNum, pageSize, params, res;

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
                                params = {
                                    yujingId: this.yujingId
                                    // pageNum, 
                                    // pageSize
                                };
                                _context.next = 5;
                                return (0, _api.reportOperLogs)(params);

                            case 5:
                                res = _context.sent;

                                if (res.code == 200) {
                                    if (res.data.length > 0) {
                                        this.listData = [].concat(_toConsumableArray(this.listData), _toConsumableArray(res.data));
                                    }
                                    this.listData.forEach(function (item) {
                                        if (item.operName) {
                                            item.operName = (0, _util2.default)(item.operName);
                                        }
                                    });
                                    this.page.total = res.total;
                                    this.$apply();
                                }

                            case 7:
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

    return reportLogs;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(reportLogs , 'pages/package/reportLogs'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydExvZ3MuanMiXSwibmFtZXMiOlsicmVwb3J0TG9ncyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwic3RhdHVzQmFySGVpZ2h0Iiwid2VweSIsIiRpbnN0YW5jZSIsImdsb2JhbERhdGEiLCJsaXN0RGF0YSIsInl1amluZ0lkIiwicGFnZSIsInBhZ2VOdW0iLCJwYWdlU2l6ZSIsInRvdGFsIiwibWV0aG9kcyIsIm9uQ2xpY2tMZWZ0IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJsZW5ndGgiLCJ3eCIsInN3aXRjaFRhYiIsInVybCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwib3B0aW9ucyIsInNoYXJlSW1hZ2UiLCJnZXRPcGVybG9nIiwicmVzZXQiLCJwYXJhbXMiLCJyZXMiLCJjb2RlIiwiZm9yRWFjaCIsIml0ZW0iLCJvcGVyTmFtZSIsIiRhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztJQUNxQkEsVTs7Ozs7Ozs7Ozs7Ozs7a01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLFdBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlO0FBREY7QUFHakI7QUFMSyxTLFFBUVRDLEksR0FBTztBQUNIQyw2QkFBaUJDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkgsZUFEeEM7QUFFSEksc0JBQVUsRUFGUDtBQUdIQyxzQkFBVSxFQUhQO0FBSUhDLGtCQUFNO0FBQ0ZDLHlCQUFTLENBRFA7QUFFRkMsMEJBQVUsRUFGUjtBQUdGQyx1QkFBTztBQUhMO0FBSkgsUyxRQWlDUEMsTyxHQUFVO0FBQ05DLHVCQURNLHlCQUNRO0FBQ1Ysb0JBQUlDLFFBQVFDLGlCQUFaO0FBQ0Esb0JBQUlELE1BQU1FLE1BQU4sSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJDLHVCQUFHQyxTQUFILENBQWE7QUFDVEMsNkJBQUs7QUFESSxxQkFBYjtBQUdILGlCQUpELE1BSU87QUFDSEYsdUJBQUdHLFlBQUgsQ0FBZ0I7QUFDWkMsK0JBQU87QUFESyxxQkFBaEI7QUFHSDtBQUNKO0FBWkssUzs7Ozs7K0JBdEJIQyxPLEVBQVM7QUFDWm5CLDJCQUFLQyxTQUFMLENBQWVtQixVQUFmOztBQUVBLGlCQUFLaEIsUUFBTCxHQUFnQmUsUUFBUWYsUUFBeEI7QUFDQSxpQkFBS2lCLFVBQUwsQ0FBZ0IsTUFBaEI7QUFDSDs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O2lHQWlCaUJDLEs7Ozs7Ozs7QUFDYixvQ0FBSUEsU0FBUyxNQUFiLEVBQXFCO0FBQ2pCLHlDQUFLakIsSUFBTCxDQUFVRyxLQUFWLEdBQWtCLENBQWxCO0FBQ0EseUNBQUtILElBQUwsQ0FBVUMsT0FBVixHQUFvQixDQUFwQjtBQUNBLHlDQUFLSCxRQUFMLEdBQWdCLEVBQWhCO0FBQ0g7d0NBQzJCLEtBQUtFLEksRUFBM0JDLE8sU0FBQUEsTyxFQUFTQyxRLFNBQUFBLFE7QUFFWGdCLHNDLEdBQVM7QUFDVG5CLDhDQUFVLEtBQUtBO0FBQ2Y7QUFDQTtBQUhTLGlDOzt1Q0FLRyx5QkFBZW1CLE1BQWYsQzs7O0FBQVpDLG1DOztBQUNKLG9DQUFHQSxJQUFJQyxJQUFKLElBQVksR0FBZixFQUFvQjtBQUNoQix3Q0FBSUQsSUFBSTFCLElBQUosQ0FBU2UsTUFBVCxHQUFrQixDQUF0QixFQUF5QjtBQUNyQiw2Q0FBS1YsUUFBTCxnQ0FBb0IsS0FBS0EsUUFBekIsc0JBQXNDcUIsSUFBSTFCLElBQTFDO0FBQ0g7QUFDRCx5Q0FBS0ssUUFBTCxDQUFjdUIsT0FBZCxDQUFzQixnQkFBUTtBQUMxQiw0Q0FBSUMsS0FBS0MsUUFBVCxFQUFtQjtBQUNmRCxpREFBS0MsUUFBTCxHQUFnQixvQkFBT0QsS0FBS0MsUUFBWixDQUFoQjtBQUNIO0FBQ0oscUNBSkQ7QUFLQSx5Q0FBS3ZCLElBQUwsQ0FBVUcsS0FBVixHQUFrQmdCLElBQUloQixLQUF0QjtBQUNBLHlDQUFLcUIsTUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBbEYrQjdCLGVBQUtLLEk7O2tCQUF4QlgsVSIsImZpbGUiOiJyZXBvcnRMb2dzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IHJlcG9ydE9wZXJMb2dzIH0gZnJvbSAnLi4vLi4vYXBpL2FwaSdcclxuaW1wb3J0IGRlY29kZSBmcm9tICcuLi8uLi91dGlscy91dGlsLmpzJztcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgcmVwb3J0TG9ncyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+mihOitpuS/oeaBry3mk43kvZzml6Xlv5cnLFxyXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxyXG4gICAgICAgIGxpc3REYXRhOiBbXSxcclxuICAgICAgICB5dWppbmdJZDogJycsXHJcbiAgICAgICAgcGFnZToge1xyXG4gICAgICAgICAgICBwYWdlTnVtOiAxLFxyXG4gICAgICAgICAgICBwYWdlU2l6ZTogMjAsXHJcbiAgICAgICAgICAgIHRvdGFsOiAwLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgIHdlcHkuJGluc3RhbmNlLnNoYXJlSW1hZ2UoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMueXVqaW5nSWQgPSBvcHRpb25zLnl1amluZ0lkO1xyXG4gICAgICAgIHRoaXMuZ2V0T3BlcmxvZygnaW5pdCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5LiL5ouJ5Yi35pawXHJcbiAgICAvLyBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgIC8vICAgICB0aGlzLmdldE9wZXJsb2coJ2luaXQnKTtcclxuICAgIC8vICAgICB3eC5zdG9wUHVsbERvd25SZWZyZXNoKCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8g5LiK5ouJ5Yqg6L29XHJcbiAgICAvLyBvblJlYWNoQm90dG9tKCkge1xyXG4gICAgLy8gICBpZiAodGhpcy5wYWdlLnRvdGFsID09IHRoaXMubGlzdERhdGEubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIHRoaXMucGFnZS5wYWdlTnVtKys7XHJcbiAgICAvLyAgIHRoaXMuZ2V0T3BlcmxvZygpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgb25DbGlja0xlZnQoKSB7XHJcbiAgICAgICAgICAgIGxldCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICAgICAgICBpZiAocGFnZXMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL21lbnUwJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldE9wZXJsb2cocmVzZXQpIHtcclxuICAgICAgICBpZiAocmVzZXQgPT0gJ2luaXQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS50b3RhbCA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZS5wYWdlTnVtID0gMTtcclxuICAgICAgICAgICAgdGhpcy5saXN0RGF0YSA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgeyBwYWdlTnVtLCBwYWdlU2l6ZSB9ID0gdGhpcy5wYWdlO1xyXG5cclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICB5dWppbmdJZDogdGhpcy55dWppbmdJZCxcclxuICAgICAgICAgICAgLy8gcGFnZU51bSwgXHJcbiAgICAgICAgICAgIC8vIHBhZ2VTaXplXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCByZXBvcnRPcGVyTG9ncyhwYXJhbXMpO1xyXG4gICAgICAgIGlmKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0RGF0YSA9IFsuLi50aGlzLmxpc3REYXRhLCAuLi5yZXMuZGF0YV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxpc3REYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5vcGVyTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ub3Blck5hbWUgPSBkZWNvZGUoaXRlbS5vcGVyTmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2UudG90YWwgPSByZXMudG90YWw7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==