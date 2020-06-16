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

var Menu1 = function (_wepy$page) {
    _inherits(Menu1, _wepy$page);

    function Menu1() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Menu1);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu1.__proto__ || Object.getPrototypeOf(Menu1)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '监测预警',
            usingComponents: {
                "van-icon": "../components/vant/icon/index",
                "van-nav-bar": "../components/vant/nav-bar/index",
                "van-popup": "../components/vant/popup/index"
            }
            // enablePullDownRefresh: true
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            timeScreen: false,
            isBindDept: false,
            timeOptions: [{
                id: '0',
                label: '预警时间从近到远'
            }, {
                id: '1',
                label: '预警时间从远到近'
            }],
            createTimeSort: '1',
            beginTime: '',
            endTime: '',
            listData: [],
            monthNum: {
                count: 0,
                total: 0
            },
            page: {
                pageNum: 1,
                pageSize: 10,
                count: 0,
                total: 0
            },
            showDate: false
        }, _this.methods = {
            tapTime: function tapTime() {
                if (this.beginTime == '') {
                    wx.showToast({
                        title: '请选择开始时间', //提示的内容,
                        icon: 'none', //图标,
                        duration: 1000 //延迟时间,
                    });
                    return;
                }
                if (this.endTime == '') {
                    wx.showToast({
                        title: '请选择结束时间', //提示的内容,
                        icon: 'none', //图标,
                        duration: 1000 //延迟时间,
                    });
                    return;
                }
                this.getList('init');
                this.showDate = false;
                this.$apply();
            },
            removeTime: function removeTime() {
                this.beginTime = '';
                this.endTime = '';
                this.getList('init');
            },
            onClosePopup: function onClosePopup() {
                this.showDate = false;
                this.$apply();
            },
            showTimePoup: function showTimePoup() {
                this.showDate = true;
                this.$apply();
            },
            changeBeginTime: function changeBeginTime(e) {
                this.beginTime = e.detail.value;
            },
            changeEndTime: function changeEndTime(e) {
                this.endTime = e.detail.value;
            },
            showScreenTime: function showScreenTime() {
                this.timeScreen = !this.timeScreen;
            },
            toReport: function toReport() {
                wx.navigateTo({
                    url: '/pages/reportInfo'
                });
            },
            toDetails: function toDetails(e) {
                var id = e.currentTarget.dataset.id;
                wx.navigateTo({
                    url: '/pages/reportInfo?id=' + id
                });
            },
            selectTime: function selectTime(e) {
                this.createTimeSort = e.currentTarget.dataset.id;
                this.timeScreen = false;
                this.getList('init');
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Menu1, [{
        key: 'onShow',
        value: function onShow() {
            this.isBindDept = wx.getStorageSync('isBindDept');
            console.log(this.isBindDept);
            this.$apply();
            this.getList('init');

            if (this.isBindDept) {
                _wepy2.default.$instance.queryUnread(3000);
            }
        }
    }, {
        key: 'onHide',
        value: function onHide() {
            if (this.isBindDept) {
                _wepy2.default.$instance.clearQuery();
            }
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            _wepy2.default.$instance.shareImage();
        }

        //下拉刷新
        // onPullDownRefresh() {
        //     this.getList('init');
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
            this.getList();
        }
    }, {
        key: 'getList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(reset) {
                var _page, pageNum, pageSize, params, res, _res$tableInfo, rows, total;

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
                                    pageNum: pageNum,
                                    pageSize: pageSize,
                                    beginTime: this.beginTime,
                                    endTime: this.endTime,
                                    createTimeSort: this.createTimeSort
                                };
                                _context.next = 5;
                                return api.appletsList(params);

                            case 5:
                                res = _context.sent;

                                if (res.code == 200) {
                                    _res$tableInfo = res.tableInfo, rows = _res$tableInfo.rows, total = _res$tableInfo.total;

                                    this.page.total = total;

                                    if (rows && rows.length > 0) {
                                        this.listData = [].concat(_toConsumableArray(this.listData), _toConsumableArray(rows));
                                    }

                                    this.listData.forEach(function (item) {
                                        if (item.createBy) {
                                            item.createBy = (0, _util2.default)(item.createBy);
                                        }
                                    });
                                    this.monthNum.total = res.page.count || 0;
                                    this.monthNum.count = res.page.total || 0;
                                    this.$apply();
                                }

                            case 7:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getList(_x) {
                return _ref2.apply(this, arguments);
            }

            return getList;
        }()
    }]);

    return Menu1;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu1 , 'pages/menu1'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUxLmpzIl0sIm5hbWVzIjpbImFwaSIsIk1lbnUxIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInRpbWVTY3JlZW4iLCJpc0JpbmREZXB0IiwidGltZU9wdGlvbnMiLCJpZCIsImxhYmVsIiwiY3JlYXRlVGltZVNvcnQiLCJiZWdpblRpbWUiLCJlbmRUaW1lIiwibGlzdERhdGEiLCJtb250aE51bSIsImNvdW50IiwidG90YWwiLCJwYWdlIiwicGFnZU51bSIsInBhZ2VTaXplIiwic2hvd0RhdGUiLCJtZXRob2RzIiwidGFwVGltZSIsInd4Iiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJnZXRMaXN0IiwiJGFwcGx5IiwicmVtb3ZlVGltZSIsIm9uQ2xvc2VQb3B1cCIsInNob3dUaW1lUG91cCIsImNoYW5nZUJlZ2luVGltZSIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsImNoYW5nZUVuZFRpbWUiLCJzaG93U2NyZWVuVGltZSIsInRvUmVwb3J0IiwibmF2aWdhdGVUbyIsInVybCIsInRvRGV0YWlscyIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2VsZWN0VGltZSIsImdldFN0b3JhZ2VTeW5jIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5VW5yZWFkIiwiY2xlYXJRdWVyeSIsInNoYXJlSW1hZ2UiLCJsZW5ndGgiLCJyZXNldCIsInBhcmFtcyIsImFwcGxldHNMaXN0IiwicmVzIiwiY29kZSIsInRhYmxlSW5mbyIsInJvd3MiLCJmb3JFYWNoIiwiaXRlbSIsImNyZWF0ZUJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztJQUFZQSxHOztBQUNaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDcUJDLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9D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VEMsNkNBQVMsS0FBS0EsT0FKTDtBQUtURixvREFBZ0IsS0FBS0E7QUFMWixpQzs7dUNBUUdmLElBQUk0RCxXQUFKLENBQWdCRCxNQUFoQixDOzs7QUFBWkUsbUM7O0FBQ0osb0NBQUlBLElBQUlDLElBQUosSUFBWSxHQUFoQixFQUFxQjtBQUFBLHFEQUNNRCxJQUFJRSxTQURWLEVBQ1RDLElBRFMsa0JBQ1RBLElBRFMsRUFDSDNDLEtBREcsa0JBQ0hBLEtBREc7O0FBRWpCLHlDQUFLQyxJQUFMLENBQVVELEtBQVYsR0FBa0JBLEtBQWxCOztBQUVBLHdDQUFJMkMsUUFBUUEsS0FBS1AsTUFBTCxHQUFjLENBQTFCLEVBQTZCO0FBQ3pCLDZDQUFLdkMsUUFBTCxnQ0FBb0IsS0FBS0EsUUFBekIsc0JBQXNDOEMsSUFBdEM7QUFDSDs7QUFFRCx5Q0FBSzlDLFFBQUwsQ0FBYytDLE9BQWQsQ0FBc0IsZ0JBQVE7QUFDMUIsNENBQUlDLEtBQUtDLFFBQVQsRUFBbUI7QUFDZkQsaURBQUtDLFFBQUwsR0FBZ0Isb0JBQU9ELEtBQUtDLFFBQVosQ0FBaEI7QUFDSDtBQUNKLHFDQUpEO0FBS0EseUNBQUtoRCxRQUFMLENBQWNFLEtBQWQsR0FBc0J3QyxJQUFJdkMsSUFBSixDQUFTRixLQUFULElBQWtCLENBQXhDO0FBQ0EseUNBQUtELFFBQUwsQ0FBY0MsS0FBZCxHQUFzQnlDLElBQUl2QyxJQUFKLENBQVNELEtBQVQsSUFBa0IsQ0FBeEM7QUFDQSx5Q0FBS2EsTUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBM0swQjNCLGVBQUtlLEk7O2tCQUFuQnJCLEsiLCJmaWxlIjoibWVudTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgKiBhcyBhcGkgIGZyb20gJy4uL2FwaS9hcGknXHJcbiAgICBpbXBvcnQgZGVjb2RlIGZyb20gJy4uL3V0aWxzL3V0aWwuanMnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudTEgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgICAgIGNvbmZpZyA9IHtcclxuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ebkea1i+mihOitpicsXHJcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICAgICAgXCJ2YW4taWNvblwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9pY29uL2luZGV4XCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIixcclxuICAgICAgICAgICAgICAgIFwidmFuLXBvcHVwXCI6IFwiLi4vY29tcG9uZW50cy92YW50L3BvcHVwL2luZGV4XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gZW5hYmxlUHVsbERvd25SZWZyZXNoOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXHJcbiAgICAgICAgICAgIHRpbWVTY3JlZW46IGZhbHNlLFxyXG4gICAgICAgICAgICBpc0JpbmREZXB0OiBmYWxzZSxcclxuICAgICAgICAgICAgdGltZU9wdGlvbnMgOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6ICcwJyxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+mihOitpuaXtumXtOS7jui/keWIsOi/nCdcclxuICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJzEnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAn6aKE6K2m5pe26Ze05LuO6L+c5Yiw6L+RJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBjcmVhdGVUaW1lU29ydDogJzEnLFxyXG4gICAgICAgICAgICBiZWdpblRpbWU6ICcnLFxyXG4gICAgICAgICAgICBlbmRUaW1lOiAnJyxcclxuICAgICAgICAgICAgbGlzdERhdGE6IFtdLFxyXG4gICAgICAgICAgICBtb250aE51bToge1xyXG4gICAgICAgICAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogMFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBwYWdlOiB7XHJcbiAgICAgICAgICAgICAgICBwYWdlTnVtOiAxLFxyXG4gICAgICAgICAgICAgICAgcGFnZVNpemU6IDEwLFxyXG4gICAgICAgICAgICAgICAgY291bnQ6IDAsIFxyXG4gICAgICAgICAgICAgICAgdG90YWw6IDAgIFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93RGF0ZTogZmFsc2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uU2hvdygpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0JpbmREZXB0ID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2lzQmluZERlcHQnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5pc0JpbmREZXB0KVxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdldExpc3QoJ2luaXQnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQmluZERlcHQpIHtcclxuICAgICAgICAgICAgICAgIHdlcHkuJGluc3RhbmNlLnF1ZXJ5VW5yZWFkKDMwMDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uSGlkZSgpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5pc0JpbmREZXB0KSB7XHJcbiAgICAgICAgICAgICAgICB3ZXB5LiRpbnN0YW5jZS5jbGVhclF1ZXJ5KClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgICAgIHdlcHkuJGluc3RhbmNlLnNoYXJlSW1hZ2UoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/kuIvmi4nliLfmlrBcclxuICAgICAgICAvLyBvblB1bGxEb3duUmVmcmVzaCgpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5nZXRMaXN0KCdpbml0Jyk7XHJcbiAgICAgICAgLy8gICAgIHd4LnN0b3BQdWxsRG93blJlZnJlc2goKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIOS4iuaLieWKoOi9vVxyXG4gICAgICAgIG9uUmVhY2hCb3R0b20oKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBhZ2UudG90YWwgPT0gdGhpcy5saXN0RGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2UucGFnZU51bSsrO1xyXG4gICAgICAgICAgICB0aGlzLmdldExpc3QoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHRhcFRpbWUoKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iZWdpblRpbWUgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICfor7fpgInmi6nlvIDlp4vml7bpl7QnLCAvL+aPkOekuueahOWGheWuuSxcclxuICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJywgLy/lm77moIcsXHJcbiAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTAwMCwgLy/lu7bov5/ml7bpl7QsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZW5kVGltZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqee7k+adn+aXtumXtCcsIC8v5o+Q56S655qE5YaF5a65LFxyXG4gICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCAvL+WbvuaghyxcclxuICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxMDAwLCAvL+W7tui/n+aXtumXtCxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldExpc3QoJ2luaXQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0RhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHJlbW92ZVRpbWUoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luVGltZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbmRUaW1lID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldExpc3QoJ2luaXQnKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DbG9zZVBvcHVwKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd1RpbWVQb3VwKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGFuZ2VCZWdpblRpbWUoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZWdpblRpbWUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hhbmdlRW5kVGltZShlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZFRpbWUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd1NjcmVlblRpbWUoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVTY3JlZW4gPSAhdGhpcy50aW1lU2NyZWVuO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b1JlcG9ydCgpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9yZXBvcnRJbmZvJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9EZXRhaWxzKGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3JlcG9ydEluZm8/aWQ9JyArIGlkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZWxlY3RUaW1lKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlVGltZVNvcnQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZDtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZVNjcmVlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRMaXN0KCdpbml0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFzeW5jIGdldExpc3QocmVzZXQpIHtcclxuICAgICAgICAgICAgaWYgKHJlc2V0ID09ICdpbml0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlLnRvdGFsID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnZS5wYWdlTnVtID0gMTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGEgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgeyBwYWdlTnVtLCBwYWdlU2l6ZSB9ID0gdGhpcy5wYWdlO1xyXG5cclxuICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgIHBhZ2VOdW06IHBhZ2VOdW0sXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogcGFnZVNpemUsXHJcbiAgICAgICAgICAgICAgICBiZWdpblRpbWU6IHRoaXMuYmVnaW5UaW1lLFxyXG4gICAgICAgICAgICAgICAgZW5kVGltZTogdGhpcy5lbmRUaW1lLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlVGltZVNvcnQ6IHRoaXMuY3JlYXRlVGltZVNvcnRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5hcHBsZXRzTGlzdChwYXJhbXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJvd3MsIHRvdGFsfSA9IHJlcy50YWJsZUluZm87XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2UudG90YWwgPSB0b3RhbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocm93cyAmJiByb3dzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhID0gWy4uLnRoaXMubGlzdERhdGEsIC4uLnJvd3NdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jcmVhdGVCeSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmNyZWF0ZUJ5ID0gZGVjb2RlKGl0ZW0uY3JlYXRlQnkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb250aE51bS50b3RhbCA9IHJlcy5wYWdlLmNvdW50IHx8IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoTnVtLmNvdW50ID0gcmVzLnBhZ2UudG90YWwgfHwgMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4iXX0=