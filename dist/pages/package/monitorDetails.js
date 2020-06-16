'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

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
            navigationBarTitleText: '监测详情',
            usingComponents: {
                "van-nav-bar": "../../components/vant/nav-bar/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            title: '',
            areaId: '',
            type: '',
            deviceId: '',
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
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(monitorType, [{
        key: 'onLoad',
        value: function onLoad(options) {
            _wepy2.default.$instance.shareImage();

            var type = options.type,
                areaId = options.areaId,
                deviceId = options.deviceId;

            this.type = type;
            this.areaId = areaId;
            this.deviceId = deviceId;
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
                                    type: this.type,
                                    deviceId: this.deviceId
                                };
                                _context.next = 3;
                                return (0, _api.getDeviceHistoryDataByDeviceId)(params);

                            case 3:
                                res = _context.sent;

                                if (res.code == 200) {
                                    data = res.data;

                                    if (data) {
                                        this.monitorData = data;
                                        this.title = data.areaInfo && data.areaInfo.monitorAreaName;
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


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(monitorType , 'pages/package/monitorDetails'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3JEZXRhaWxzLmpzIl0sIm5hbWVzIjpbIm1vbml0b3JUeXBlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInRpdGxlIiwiYXJlYUlkIiwidHlwZSIsImRldmljZUlkIiwibW9uaXRvckRhdGEiLCJtZXRob2RzIiwib25DbGlja0xlZnQiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsImxlbmd0aCIsInd4Iiwic3dpdGNoVGFiIiwidXJsIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJvcHRpb25zIiwic2hhcmVJbWFnZSIsIiRhcHBseSIsImluaXREYXRhIiwicGFyYW1zIiwicmVzIiwiY29kZSIsImFyZWFJbmZvIiwibW9uaXRvckFyZWFOYW1lIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztvTUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsK0JBQWU7QUFERjtBQUZaLFMsUUFPVEMsSSxHQUFPO0FBQ0hDLDZCQUFpQkMsZUFBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCSCxlQUR4QztBQUVISSxtQkFBTyxFQUZKO0FBR0hDLG9CQUFRLEVBSEw7QUFJSEMsa0JBQU0sRUFKSDtBQUtIQyxzQkFBVSxFQUxQO0FBTUhDLHlCQUFhO0FBTlYsUyxRQXVCUEMsTyxHQUFVO0FBQ05DLHVCQURNLHlCQUNRO0FBQ1Ysb0JBQUlDLFFBQVFDLGlCQUFaO0FBQ0Esb0JBQUlELE1BQU1FLE1BQU4sSUFBZ0IsQ0FBcEIsRUFBdUI7QUFDbkJDLHVCQUFHQyxTQUFILENBQWE7QUFDVEMsNkJBQUs7QUFESSxxQkFBYjtBQUdILGlCQUpELE1BSU87QUFDSEYsdUJBQUdHLFlBQUgsQ0FBZ0I7QUFDWkMsK0JBQU87QUFESyxxQkFBaEI7QUFHSDtBQUNKO0FBWkssUzs7Ozs7K0JBZEhDLE8sRUFBUztBQUNabEIsMkJBQUtDLFNBQUwsQ0FBZWtCLFVBQWY7O0FBRFksZ0JBR0pkLElBSEksR0FHc0JhLE9BSHRCLENBR0piLElBSEk7QUFBQSxnQkFHRUQsTUFIRixHQUdzQmMsT0FIdEIsQ0FHRWQsTUFIRjtBQUFBLGdCQUdVRSxRQUhWLEdBR3NCWSxPQUh0QixDQUdVWixRQUhWOztBQUlaLGlCQUFLRCxJQUFMLEdBQVlBLElBQVo7QUFDQSxpQkFBS0QsTUFBTCxHQUFjQSxNQUFkO0FBQ0EsaUJBQUtFLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsaUJBQUtjLE1BQUw7QUFDSDs7O2lDQUVPO0FBQ0osaUJBQUtDLFFBQUw7QUFDSDs7Ozs7Ozs7OztBQWtCT0Msc0MsR0FBUztBQUNUbEIsNENBQVEsS0FBS0EsTUFESjtBQUVUQywwQ0FBTSxLQUFLQSxJQUZGO0FBR1RDLDhDQUFVLEtBQUtBO0FBSE4saUM7O3VDQUtHLHlDQUErQmdCLE1BQS9CLEM7OztBQUFaQyxtQzs7QUFDSixvQ0FBSUEsSUFBSUMsSUFBSixJQUFZLEdBQWhCLEVBQXFCO0FBQ2IxQix3Q0FEYSxHQUNOeUIsSUFBSXpCLElBREU7O0FBRWpCLHdDQUFJQSxJQUFKLEVBQVU7QUFDTiw2Q0FBS1MsV0FBTCxHQUFtQlQsSUFBbkI7QUFDQSw2Q0FBS0ssS0FBTCxHQUFhTCxLQUFLMkIsUUFBTCxJQUFpQjNCLEtBQUsyQixRQUFMLENBQWNDLGVBQTVDO0FBQ0EsNkNBQUtOLE1BQUw7QUFDSDtBQUNKOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBNURnQ3BCLGVBQUsyQixJOztrQkFBekJqQyxXIiwiZmlsZSI6Im1vbml0b3JEZXRhaWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7IGdldERldmljZUhpc3RvcnlEYXRhQnlEZXZpY2VJZCB9IGZyb20gJy4uLy4uL2FwaS9hcGknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1vbml0b3JUeXBlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55uR5rWL6K+m5oOFJyxcclxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uLy4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgICAgICBhcmVhSWQ6ICcnLFxyXG4gICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgIGRldmljZUlkOiAnJyxcclxuICAgICAgICBtb25pdG9yRGF0YToge31cclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgIHdlcHkuJGluc3RhbmNlLnNoYXJlSW1hZ2UoKVxyXG5cclxuICAgICAgICBjb25zdCB7IHR5cGUsIGFyZWFJZCwgZGV2aWNlSWR9ID0gb3B0aW9uc1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5hcmVhSWQgPSBhcmVhSWQ7XHJcbiAgICAgICAgdGhpcy5kZXZpY2VJZCA9IGRldmljZUlkO1xyXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCl7XHJcbiAgICAgICAgdGhpcy5pbml0RGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgb25DbGlja0xlZnQoKSB7XHJcbiAgICAgICAgICAgIGxldCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpO1xyXG4gICAgICAgICAgICBpZiAocGFnZXMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICAgIHd4LnN3aXRjaFRhYih7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL21lbnUwJ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXREYXRhKCkge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGFyZWFJZDogdGhpcy5hcmVhSWQsXHJcbiAgICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICAgICAgZGV2aWNlSWQ6IHRoaXMuZGV2aWNlSWRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGdldERldmljZUhpc3RvcnlEYXRhQnlEZXZpY2VJZChwYXJhbXMpO1xyXG4gICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvckRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IGRhdGEuYXJlYUluZm8gJiYgZGF0YS5hcmVhSW5mby5tb25pdG9yQXJlYU5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==