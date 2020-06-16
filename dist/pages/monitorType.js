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

var monitorType = function (_wepy$page) {
    _inherits(monitorType, _wepy$page);

    function monitorType() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, monitorType);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = monitorType.__proto__ || Object.getPrototypeOf(monitorType)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '监测类型',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            title: '',
            areaId: '',
            type: '',
            monitorData: {}
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
            },
            handleMoreData: function handleMoreData(e) {
                var deviceId = e.currentTarget.dataset.deviceId;

                wx.navigateTo({
                    url: '/pages/package/monitorDetails?areaId=' + this.areaId + '&type=' + this.type + '&deviceId=' + deviceId
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(monitorType, [{
        key: 'onLoad',
        value: function onLoad(options) {
            _wepy2.default.$instance.shareImage();

            switch (options.type) {
                case '1':
                    this.title = "表面位移";
                    break;
                case '2':
                    this.title = "深部位移";
                    break;
                case '3':
                    this.title = "温湿度";
                    break;
                case '4':
                    this.title = "降雨量";
                    break;

                default:
                    break;
            }
            this.type = options.type;
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
                var params, res, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                params = {
                                    areaId: this.areaId,
                                    type: this.type
                                };
                                _context.next = 3;
                                return (0, _api.getDeviceListByAreaIdAndType)(params);

                            case 3:
                                res = _context.sent;

                                if (res.code == 200) {
                                    data = res.data;

                                    if (data) {
                                        this.monitorData = data;
                                        this.$apply();
                                    }
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

    return monitorType;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(monitorType , 'pages/monitorType'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3JUeXBlLmpzIl0sIm5hbWVzIjpbIm1vbml0b3JUeXBlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInRpdGxlIiwiYXJlYUlkIiwidHlwZSIsIm1vbml0b3JEYXRhIiwibWV0aG9kcyIsIm9uQ2xpY2tMZWZ0IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJsZW5ndGgiLCJ3eCIsInN3aXRjaFRhYiIsInVybCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiaGFuZGxlTW9yZURhdGEiLCJlIiwiZGV2aWNlSWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIm5hdmlnYXRlVG8iLCJvcHRpb25zIiwic2hhcmVJbWFnZSIsIiRhcHBseSIsImluaXREYXRhIiwicGFyYW1zIiwicmVzIiwiY29kZSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlO0FBREY7QUFGWixTLFFBT1RDLEksR0FBTztBQUNIQyw2QkFBaUJDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkgsZUFEeEM7QUFFSEksbUJBQU8sRUFGSjtBQUdIQyxvQkFBUSxFQUhMO0FBSUhDLGtCQUFNLEVBSkg7QUFLSEMseUJBQWE7QUFMVixTLFFBcUNQQyxPLEdBQVU7QUFDTkMsdUJBRE0seUJBQ1E7QUFDVixvQkFBSUMsUUFBUUMsaUJBQVo7QUFDQSxvQkFBSUQsTUFBTUUsTUFBTixJQUFnQixDQUFwQixFQUF1QjtBQUNuQkMsdUJBQUdDLFNBQUgsQ0FBYTtBQUNUQyw2QkFBSztBQURJLHFCQUFiO0FBR0gsaUJBSkQsTUFJTztBQUNIRix1QkFBR0csWUFBSCxDQUFnQjtBQUNaQywrQkFBTztBQURLLHFCQUFoQjtBQUdIO0FBQ0osYUFaSztBQWFOQywwQkFiTSwwQkFhU0MsQ0FiVCxFQWFZO0FBQUEsb0JBQ05DLFFBRE0sR0FDT0QsRUFBRUUsYUFBRixDQUFnQkMsT0FEdkIsQ0FDTkYsUUFETTs7QUFFZFAsbUJBQUdVLFVBQUgsQ0FBYztBQUNWUixtRUFBNkMsS0FBS1YsTUFBbEQsY0FBaUUsS0FBS0MsSUFBdEUsa0JBQXVGYztBQUQ3RSxpQkFBZDtBQUdIO0FBbEJLLFM7Ozs7OytCQTdCSEksTyxFQUFTO0FBQ1p2QiwyQkFBS0MsU0FBTCxDQUFldUIsVUFBZjs7QUFFQSxvQkFBUUQsUUFBUWxCLElBQWhCO0FBQ0kscUJBQUssR0FBTDtBQUNJLHlCQUFLRixLQUFMLEdBQVcsTUFBWDtBQUNBO0FBQ0oscUJBQUssR0FBTDtBQUNJLHlCQUFLQSxLQUFMLEdBQVcsTUFBWDtBQUNBO0FBQ0oscUJBQUssR0FBTDtBQUNJLHlCQUFLQSxLQUFMLEdBQVcsS0FBWDtBQUNBO0FBQ0oscUJBQUssR0FBTDtBQUNJLHlCQUFLQSxLQUFMLEdBQVcsS0FBWDtBQUNBOztBQUVKO0FBQ0k7QUFmUjtBQWlCQSxpQkFBS0UsSUFBTCxHQUFZa0IsUUFBUWxCLElBQXBCO0FBQ0EsaUJBQUtELE1BQUwsR0FBY21CLFFBQVFuQixNQUF0QjtBQUNBLGlCQUFLcUIsTUFBTDtBQUNIOzs7aUNBRU87QUFDSixpQkFBS0MsUUFBTDtBQUNIOzs7Ozs7Ozs7O0FBd0JPQyxzQyxHQUFTO0FBQ1R2Qiw0Q0FBUSxLQUFLQSxNQURKO0FBRVRDLDBDQUFNLEtBQUtBO0FBRkYsaUM7O3VDQUlHLHVDQUE2QnNCLE1BQTdCLEM7OztBQUFaQyxtQzs7QUFDSixvQ0FBSUEsSUFBSUMsSUFBSixJQUFZLEdBQWhCLEVBQXFCO0FBQ2IvQix3Q0FEYSxHQUNOOEIsSUFBSTlCLElBREU7O0FBRWpCLHdDQUFJQSxJQUFKLEVBQVU7QUFDTiw2Q0FBS1EsV0FBTCxHQUFtQlIsSUFBbkI7QUFDQSw2Q0FBSzJCLE1BQUw7QUFDSDtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBOUVnQ3pCLGVBQUs4QixJOztrQkFBekJwQyxXIiwiZmlsZSI6Im1vbml0b3JUeXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGdldERldmljZUxpc3RCeUFyZWFJZEFuZFR5cGUgfSBmcm9tICcuLi9hcGkvYXBpJ1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBtb25pdG9yVHlwZSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICBjb25maWcgPSB7XHJcbiAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+ebkea1i+exu+WeiycsXHJcbiAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcclxuICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgYXJlYUlkOiAnJyxcclxuICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICBtb25pdG9yRGF0YToge31cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgIHdlcHkuJGluc3RhbmNlLnNoYXJlSW1hZ2UoKVxyXG5cclxuICAgICAgICBzd2l0Y2ggKG9wdGlvbnMudHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICcxJzpcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGU9XCLooajpnaLkvY3np7tcIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJzInOlxyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZT1cIua3semDqOS9jeenu1wiXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnMyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpdGxlPVwi5rip5rm/5bqmXCJcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICc0JzpcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGU9XCLpmY3pm6jph49cIlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50eXBlID0gb3B0aW9ucy50eXBlO1xyXG4gICAgICAgIHRoaXMuYXJlYUlkID0gb3B0aW9ucy5hcmVhSWQ7XHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNob3coKXtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBvbkNsaWNrTGVmdCgpIHtcclxuICAgICAgICAgICAgbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgIGlmIChwYWdlcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWVudTAnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZU1vcmVEYXRhKGUpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBkZXZpY2VJZCB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3BhY2thZ2UvbW9uaXRvckRldGFpbHM/YXJlYUlkPSR7dGhpcy5hcmVhSWR9JnR5cGU9JHt0aGlzLnR5cGV9JmRldmljZUlkPSR7ZGV2aWNlSWR9YFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaW5pdERhdGEoKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgYXJlYUlkOiB0aGlzLmFyZWFJZCxcclxuICAgICAgICAgICAgdHlwZTogdGhpcy50eXBlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBnZXREZXZpY2VMaXN0QnlBcmVhSWRBbmRUeXBlKHBhcmFtcyk7XHJcbiAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tb25pdG9yRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==