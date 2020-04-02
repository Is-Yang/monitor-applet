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
                "van-nav-bar": "../components/vant/nav-bar/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            timeScreen: false,
            isBindDept: false,
            timeOptions: [{
                id: 1,
                label: '预警时间从近到远'
            }, {
                id: 2,
                label: '预警时间从远到近'
            }, {
                id: 3,
                label: '预警时间从近到远'
            }, {
                id: 4,
                label: '预警时间从远到近'
            }],
            listData: [],
            page: {
                count: 0, // 本月条
                total: 0 // 总共条
            }
        }, _this.methods = {
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
                console.log(e);
                this.timeScreen = false;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Menu1, [{
        key: 'onShow',
        value: function onShow() {
            this.getList();
        }
    }, {
        key: 'onLoad',
        value: function onLoad() {
            if (wx.getStorageSync('isBindDept')) {
                this.isBindDept = wx.getStorageSync('isBindDept');
                this.$apply();
            }
        }
    }, {
        key: 'getList',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return api.warnList();

                            case 2:
                                res = _context.sent;

                                if (res.code == 200) {
                                    this.listData = res.yujings;
                                    this.page = res.page;
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getList() {
                return _ref2.apply(this, arguments);
            }

            return getList;
        }()
    }]);

    return Menu1;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu1 , 'pages/menu1'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUxLmpzIl0sIm5hbWVzIjpbImFwaSIsIk1lbnUxIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInRpbWVTY3JlZW4iLCJpc0JpbmREZXB0IiwidGltZU9wdGlvbnMiLCJpZCIsImxhYmVsIiwibGlzdERhdGEiLCJwYWdlIiwiY291bnQiLCJ0b3RhbCIsIm1ldGhvZHMiLCJzaG93U2NyZWVuVGltZSIsInRvUmVwb3J0Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9EZXRhaWxzIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwic2VsZWN0VGltZSIsImNvbnNvbGUiLCJsb2ciLCJnZXRMaXN0IiwiZ2V0U3RvcmFnZVN5bmMiLCIkYXBwbHkiLCJ3YXJuTGlzdCIsInJlcyIsImNvZGUiLCJ5dWppbmdzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDSTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7Ozs7Ozs7OztJQUNTQyxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsNEJBQVksK0JBREM7QUFFYiwrQkFBZTtBQUZGO0FBRlosUyxRQU9UQyxJLEdBQU87QUFDSEMsNkJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHhDO0FBRUhJLHdCQUFZLEtBRlQ7QUFHSEMsd0JBQVksS0FIVDtBQUlIQyx5QkFBYyxDQUNWO0FBQ0lDLG9CQUFJLENBRFI7QUFFSUMsdUJBQU87QUFGWCxhQURVLEVBSVA7QUFDQ0Qsb0JBQUksQ0FETDtBQUVDQyx1QkFBTztBQUZSLGFBSk8sRUFPUDtBQUNDRCxvQkFBSSxDQURMO0FBRUNDLHVCQUFPO0FBRlIsYUFQTyxFQVVQO0FBQ0NELG9CQUFJLENBREw7QUFFQ0MsdUJBQU87QUFGUixhQVZPLENBSlg7QUFtQkhDLHNCQUFVLEVBbkJQO0FBb0JIQyxrQkFBTTtBQUNGQyx1QkFBTyxDQURMLEVBQ1E7QUFDVkMsdUJBQU8sQ0FGTCxDQUVRO0FBRlI7QUFwQkgsUyxRQXFDUEMsTyxHQUFVO0FBQ05DLDBCQURNLDRCQUNXO0FBQ2IscUJBQUtWLFVBQUwsR0FBa0IsQ0FBQyxLQUFLQSxVQUF4QjtBQUNILGFBSEs7QUFJTlcsb0JBSk0sc0JBSUs7QUFDUEMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSztBQURLLGlCQUFkO0FBR0gsYUFSSztBQVNOQyxxQkFUTSxxQkFTSUMsQ0FUSixFQVNPO0FBQ1Qsb0JBQUliLEtBQUthLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCZixFQUFqQztBQUNBUyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLLDBCQUEwQlg7QUFEckIsaUJBQWQ7QUFHSCxhQWRLO0FBZU5nQixzQkFmTSxzQkFlS0gsQ0FmTCxFQWVRO0FBQ1ZJLHdCQUFRQyxHQUFSLENBQVlMLENBQVo7QUFDQSxxQkFBS2hCLFVBQUwsR0FBa0IsS0FBbEI7QUFDSDtBQWxCSyxTOzs7OztpQ0FYRDtBQUNMLGlCQUFLc0IsT0FBTDtBQUNIOzs7aUNBRVE7QUFDTCxnQkFBSVYsR0FBR1csY0FBSCxDQUFrQixZQUFsQixDQUFKLEVBQXFDO0FBQ2pDLHFCQUFLdEIsVUFBTCxHQUFrQlcsR0FBR1csY0FBSCxDQUFrQixZQUFsQixDQUFsQjtBQUNBLHFCQUFLQyxNQUFMO0FBQ0g7QUFDSjs7Ozs7Ozs7Ozs7dUNBd0JtQmxDLElBQUltQyxRQUFKLEU7OztBQUFaQyxtQzs7QUFDSixvQ0FBSUEsSUFBSUMsSUFBSixJQUFZLEdBQWhCLEVBQXFCO0FBQ2pCLHlDQUFLdEIsUUFBTCxHQUFnQnFCLElBQUlFLE9BQXBCO0FBQ0EseUNBQUt0QixJQUFMLEdBQVlvQixJQUFJcEIsSUFBaEI7QUFDQSx5Q0FBS2tCLE1BQUw7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXhFMEIzQixlQUFLUyxJOztrQkFBbkJmLEsiLCJmaWxlIjoibWVudTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGltcG9ydCAqIGFzIGFwaSAgZnJvbSAnLi4vYXBpL2FwaSdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51MSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnm5HmtYvpooToraYnLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgXCJ2YW4taWNvblwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9pY29uL2luZGV4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcbiAgICAgICAgICAgIHRpbWVTY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgaXNCaW5kRGVwdDogZmFsc2UsXG4gICAgICAgICAgICB0aW1lT3B0aW9ucyA6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+mihOitpuaXtumXtOS7jui/keWIsOi/nCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+mihOitpuaXtumXtOS7jui/nOWIsOi/kSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+mihOitpuaXtumXtOS7jui/keWIsOi/nCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+mihOitpuaXtumXtOS7jui/nOWIsOi/kSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbGlzdERhdGE6IFtdLFxuICAgICAgICAgICAgcGFnZToge1xuICAgICAgICAgICAgICAgIGNvdW50OiAwLCAvLyDmnKzmnIjmnaFcbiAgICAgICAgICAgICAgICB0b3RhbDogMCAgLy8g5oC75YWx5p2hXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICB0aGlzLmdldExpc3QoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgaWYgKHd4LmdldFN0b3JhZ2VTeW5jKCdpc0JpbmREZXB0JykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmlzQmluZERlcHQgPSB3eC5nZXRTdG9yYWdlU3luYygnaXNCaW5kRGVwdCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc2hvd1NjcmVlblRpbWUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lU2NyZWVuID0gIXRoaXMudGltZVNjcmVlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b1JlcG9ydCgpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3JlcG9ydEluZm8nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b0RldGFpbHMoZSkge1xuICAgICAgICAgICAgICAgIGxldCBpZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmlkO1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvcmVwb3J0SW5mbz9pZD0nICsgaWRcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlbGVjdFRpbWUoZSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGUpO1xuICAgICAgICAgICAgICAgIHRoaXMudGltZVNjcmVlbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgZ2V0TGlzdCgpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkud2Fybkxpc3QoKTtcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3REYXRhID0gcmVzLnl1amluZ3M7XG4gICAgICAgICAgICAgICAgdGhpcy5wYWdlID0gcmVzLnBhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0gXG4iXX0=