'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var monitorDevice = function (_wepy$page) {
    _inherits(monitorDevice, _wepy$page);

    function monitorDevice() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, monitorDevice);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = monitorDevice.__proto__ || Object.getPrototypeOf(monitorDevice)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '视频监控',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            title: '视频监控',
            areaId: '',
            link: '',
            monitorDeviceList: [], // 监控设备列表
            monitorAreaInfo: {} // 监控区域信息
        }, _this.methods = {
            toVideo: function toVideo(e) {
                this.link = e.currentTarget.dataset.link;
                wx.navigateTo({
                    url: '/pages/videoMonitor'
                });
            },
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

    _createClass(monitorDevice, [{
        key: 'onLoad',
        value: function onLoad(options) {
            _wepy2.default.$instance.shareImage();

            this.areaId = options.areaId;
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            this.initData();
        }
    }, {
        key: 'initData',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var params, res, monitorDeviceList, monitorAreaInfo;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                params = {
                                    areaId: this.areaId
                                };
                                _context.next = 3;
                                return (0, _api.getMonitorDeviceList)(params);

                            case 3:
                                res = _context.sent;

                                if (res.code == 200) {
                                    monitorDeviceList = res.monitorDeviceList, monitorAreaInfo = res.monitorAreaInfo;

                                    this.monitorAreaInfo = monitorAreaInfo;
                                    if (monitorDeviceList && monitorDeviceList.length > 0) {
                                        this.monitorDeviceList = monitorDeviceList;
                                    }
                                    this.$apply();
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function initData() {
                return _ref2.apply(this, arguments);
            }

            return initData;
        }()
    }]);

    return monitorDevice;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(monitorDevice , 'pages/monitorDevice'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3JEZXZpY2UuanMiXSwibmFtZXMiOlsibW9uaXRvckRldmljZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwic3RhdHVzQmFySGVpZ2h0Iiwid2VweSIsIiRpbnN0YW5jZSIsImdsb2JhbERhdGEiLCJ0aXRsZSIsImFyZWFJZCIsImxpbmsiLCJtb25pdG9yRGV2aWNlTGlzdCIsIm1vbml0b3JBcmVhSW5mbyIsIm1ldGhvZHMiLCJ0b1ZpZGVvIiwiZSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0Iiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwib25DbGlja0xlZnQiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsImxlbmd0aCIsInN3aXRjaFRhYiIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwib3B0aW9ucyIsInNoYXJlSW1hZ2UiLCIkYXBwbHkiLCJpbml0RGF0YSIsInBhcmFtcyIsInJlcyIsImNvZGUiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7Ozs7Ozs7Ozs7SUFDcUJBLGE7Ozs7Ozs7Ozs7Ozs7O3dNQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwrQkFBZTtBQURGO0FBRlosUyxRQU9UQyxJLEdBQU87QUFDSEMsNkJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHhDO0FBRUhJLG1CQUFPLE1BRko7QUFHSEMsb0JBQVEsRUFITDtBQUlIQyxrQkFBTSxFQUpIO0FBS0hDLCtCQUFtQixFQUxoQixFQUtvQjtBQUN2QkMsNkJBQWlCLEVBTmQsQ0FNa0I7QUFObEIsUyxRQW9CUEMsTyxHQUFVO0FBQ05DLG1CQURNLG1CQUNFQyxDQURGLEVBQ0s7QUFDUCxxQkFBS0wsSUFBTCxHQUFZSyxFQUFFQyxhQUFGLENBQWdCQyxPQUFoQixDQUF3QlAsSUFBcEM7QUFDQVEsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSztBQURLLGlCQUFkO0FBR0gsYUFOSztBQU9OQyx1QkFQTSx5QkFPUTtBQUNWLG9CQUFJQyxRQUFRQyxpQkFBWjtBQUNBLG9CQUFJRCxNQUFNRSxNQUFOLElBQWdCLENBQXBCLEVBQXVCO0FBQ25CTix1QkFBR08sU0FBSCxDQUFhO0FBQ1RMLDZCQUFLO0FBREkscUJBQWI7QUFHSCxpQkFKRCxNQUlPO0FBQ0hGLHVCQUFHUSxZQUFILENBQWdCO0FBQ1pDLCtCQUFPO0FBREsscUJBQWhCO0FBR0g7QUFDSjtBQWxCSyxTOzs7OzsrQkFYSEMsTyxFQUFTO0FBQ1p2QiwyQkFBS0MsU0FBTCxDQUFldUIsVUFBZjs7QUFFQSxpQkFBS3BCLE1BQUwsR0FBY21CLFFBQVFuQixNQUF0QjtBQUNBLGlCQUFLcUIsTUFBTDtBQUNIOzs7aUNBRU87QUFDSixpQkFBS0MsUUFBTDtBQUNIOzs7Ozs7Ozs7O0FBd0JPQyxzQyxHQUFTO0FBQ1R2Qiw0Q0FBUSxLQUFLQTtBQURKLGlDOzt1Q0FHRywrQkFBcUJ1QixNQUFyQixDOzs7QUFBWkMsbUM7O0FBQ0osb0NBQUlBLElBQUlDLElBQUosSUFBWSxHQUFoQixFQUFxQjtBQUNUdkIscURBRFMsR0FDOEJzQixHQUQ5QixDQUNUdEIsaUJBRFMsRUFDVUMsZUFEVixHQUM4QnFCLEdBRDlCLENBQ1VyQixlQURWOztBQUVqQix5Q0FBS0EsZUFBTCxHQUF1QkEsZUFBdkI7QUFDQSx3Q0FBSUQscUJBQXFCQSxrQkFBa0JhLE1BQWxCLEdBQTJCLENBQXBELEVBQXVEO0FBQ25ELDZDQUFLYixpQkFBTCxHQUF5QkEsaUJBQXpCO0FBQ0g7QUFDRCx5Q0FBS21CLE1BQUw7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTdEa0N6QixlQUFLOEIsSTs7a0JBQTNCcEMsYSIsImZpbGUiOiJtb25pdG9yRGV2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGdldE1vbml0b3JEZXZpY2VMaXN0IH0gZnJvbSAnLi4vYXBpL2FwaSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbW9uaXRvckRldmljZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+inhumikeebkeaOpycsXHJcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcclxuICAgICAgICB0aXRsZTogJ+inhumikeebkeaOpycsXHJcbiAgICAgICAgYXJlYUlkOiAnJyxcclxuICAgICAgICBsaW5rOiAnJyxcclxuICAgICAgICBtb25pdG9yRGV2aWNlTGlzdDogW10sIC8vIOebkeaOp+iuvuWkh+WIl+ihqFxyXG4gICAgICAgIG1vbml0b3JBcmVhSW5mbzoge30gIC8vIOebkeaOp+WMuuWfn+S/oeaBr1xyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgd2VweS4kaW5zdGFuY2Uuc2hhcmVJbWFnZSgpXHJcblxyXG4gICAgICAgIHRoaXMuYXJlYUlkID0gb3B0aW9ucy5hcmVhSWQ7XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKXtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICB0b1ZpZGVvKGUpIHtcclxuICAgICAgICAgICAgdGhpcy5saW5rID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQubGluaztcclxuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvdmlkZW9Nb25pdG9yJ1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQ2xpY2tMZWZ0KCkge1xyXG4gICAgICAgICAgICBsZXQgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICAgICAgaWYgKHBhZ2VzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9tZW51MCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpbml0RGF0YSgpIHtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICBhcmVhSWQ6IHRoaXMuYXJlYUlkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBnZXRNb25pdG9yRGV2aWNlTGlzdChwYXJhbXMpO1xyXG4gICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgY29uc3QgeyBtb25pdG9yRGV2aWNlTGlzdCwgbW9uaXRvckFyZWFJbmZvIH0gPSByZXM7XHJcbiAgICAgICAgICAgIHRoaXMubW9uaXRvckFyZWFJbmZvID0gbW9uaXRvckFyZWFJbmZvO1xyXG4gICAgICAgICAgICBpZiAobW9uaXRvckRldmljZUxpc3QgJiYgbW9uaXRvckRldmljZUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb25pdG9yRGV2aWNlTGlzdCA9IG1vbml0b3JEZXZpY2VMaXN0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==