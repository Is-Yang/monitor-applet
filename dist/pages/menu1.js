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
                count: 0,
                total: 0
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
                                    this.listData = res.data;
                                    this.$apply();
                                }
                                console.log(res);

                            case 5:
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUxLmpzIl0sIm5hbWVzIjpbImFwaSIsIk1lbnUxIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInRpbWVTY3JlZW4iLCJ0aW1lT3B0aW9ucyIsImlkIiwibGFiZWwiLCJsaXN0RGF0YSIsInBhZ2UiLCJjb3VudCIsInRvdGFsIiwibWV0aG9kcyIsInNob3dTY3JlZW5UaW1lIiwidG9SZXBvcnQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b0RldGFpbHMiLCJlIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzZWxlY3RUaW1lIiwiY29uc29sZSIsImxvZyIsImdldExpc3QiLCJ3YXJuTGlzdCIsInJlcyIsImNvZGUiLCIkYXBwbHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0lBQVlBLEc7Ozs7Ozs7Ozs7Ozs7O0lBQ1NDLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiw0QkFBWSwrQkFEQztBQUViLCtCQUFlO0FBRkY7QUFGWixTLFFBT1RDLEksR0FBTztBQUNIQyw2QkFBaUJDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkgsZUFEeEM7QUFFSEksd0JBQVksS0FGVDtBQUdIQyx5QkFBYyxDQUNWO0FBQ0lDLG9CQUFJLENBRFI7QUFFSUMsdUJBQU87QUFGWCxhQURVLEVBSVA7QUFDQ0Qsb0JBQUksQ0FETDtBQUVDQyx1QkFBTztBQUZSLGFBSk8sRUFPUDtBQUNDRCxvQkFBSSxDQURMO0FBRUNDLHVCQUFPO0FBRlIsYUFQTyxFQVVQO0FBQ0NELG9CQUFJLENBREw7QUFFQ0MsdUJBQU87QUFGUixhQVZPLENBSFg7QUFrQkhDLHNCQUFVLEVBbEJQO0FBbUJIQyxrQkFBTTtBQUNGQyx1QkFBTyxDQURMO0FBRUZDLHVCQUFPO0FBRkw7QUFuQkgsUyxRQTZCUEMsTyxHQUFVO0FBQ05DLDBCQURNLDRCQUNXO0FBQ2IscUJBQUtULFVBQUwsR0FBa0IsQ0FBQyxLQUFLQSxVQUF4QjtBQUNILGFBSEs7QUFJTlUsb0JBSk0sc0JBSUs7QUFDUEMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSztBQURLLGlCQUFkO0FBR0gsYUFSSztBQVNOQyxxQkFUTSxxQkFTSUMsQ0FUSixFQVNPO0FBQ1Qsb0JBQUliLEtBQUthLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BQWhCLENBQXdCZixFQUFqQztBQUNBUyxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLLDBCQUEwQlg7QUFEckIsaUJBQWQ7QUFHSCxhQWRLO0FBZU5nQixzQkFmTSxzQkFlS0gsQ0FmTCxFQWVRO0FBQ1ZJLHdCQUFRQyxHQUFSLENBQVlMLENBQVo7QUFDQSxxQkFBS2YsVUFBTCxHQUFrQixLQUFsQjtBQUNIO0FBbEJLLFM7Ozs7O2lDQUpEO0FBQ0wsaUJBQUtxQixPQUFMO0FBQ0g7Ozs7Ozs7Ozs7O3VDQXdCbUIvQixJQUFJZ0MsUUFBSixFOzs7QUFBWkMsbUM7O0FBQ0osb0NBQUlBLElBQUlDLElBQUosSUFBWSxHQUFoQixFQUFxQjtBQUNqQix5Q0FBS3BCLFFBQUwsR0FBZ0JtQixJQUFJNUIsSUFBcEI7QUFDQSx5Q0FBSzhCLE1BQUw7QUFDSDtBQUNETix3Q0FBUUMsR0FBUixDQUFZRyxHQUFaOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBaEUyQjFCLGVBQUtRLEk7O2tCQUFuQmQsSyIsImZpbGUiOiJtZW51MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0ICogYXMgYXBpICBmcm9tICcuLi9hcGkvYXBpJ1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUxIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ebkea1i+mihOitpicsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICBcInZhbi1pY29uXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2ljb24vaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxuICAgICAgICAgICAgdGltZVNjcmVlbjogZmFsc2UsXG4gICAgICAgICAgICB0aW1lT3B0aW9ucyA6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+mihOitpuaXtumXtOS7jui/keWIsOi/nCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+mihOitpuaXtumXtOS7jui/nOWIsOi/kSdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAzLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+mihOitpuaXtumXtOS7jui/keWIsOi/nCdcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiA0LFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ+mihOitpuaXtumXtOS7jui/nOWIsOi/kSdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgbGlzdERhdGE6IFtdLFxuICAgICAgICAgICAgcGFnZToge1xuICAgICAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgICAgIHRvdGFsOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBvblNob3coKSB7XG4gICAgICAgICAgICB0aGlzLmdldExpc3QoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzaG93U2NyZWVuVGltZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVTY3JlZW4gPSAhdGhpcy50aW1lU2NyZWVuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvUmVwb3J0KCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvcmVwb3J0SW5mbydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvRGV0YWlscyhlKSB7XG4gICAgICAgICAgICAgICAgbGV0IGlkID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWQ7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9yZXBvcnRJbmZvP2lkPScgKyBpZFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0VGltZShlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lU2NyZWVuID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBhc3luYyBnZXRMaXN0KCkge1xuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS53YXJuTGlzdCgpO1xuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMubGlzdERhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgfVxuICAgIH0gXG4iXX0=