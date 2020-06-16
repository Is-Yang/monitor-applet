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

var monitorArea = function (_wepy$page) {
    _inherits(monitorArea, _wepy$page);

    function monitorArea() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, monitorArea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = monitorArea.__proto__ || Object.getPrototypeOf(monitorArea)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '监测区域',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            title: '',
            areaId: '',
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
                var _e$currentTarget$data = e.currentTarget.dataset,
                    deviceId = _e$currentTarget$data.deviceId,
                    type = _e$currentTarget$data.type;

                wx.navigateTo({
                    url: '/pages/package/monitorDetails?areaId=' + this.areaId + '&type=' + type + '&deviceId=' + deviceId
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(monitorArea, [{
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
                var params, res, data;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                params = {
                                    areaId: this.areaId
                                };
                                _context.next = 3;
                                return (0, _api.getDeviceListByAreaId)(params);

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

    return monitorArea;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(monitorArea , 'pages/monitorArea'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3JBcmVhLmpzIl0sIm5hbWVzIjpbIm1vbml0b3JBcmVhIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInRpdGxlIiwiYXJlYUlkIiwibW9uaXRvckRhdGEiLCJtZXRob2RzIiwib25DbGlja0xlZnQiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsImxlbmd0aCIsInd4Iiwic3dpdGNoVGFiIiwidXJsIiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJoYW5kbGVNb3JlRGF0YSIsImUiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImRldmljZUlkIiwidHlwZSIsIm5hdmlnYXRlVG8iLCJvcHRpb25zIiwic2hhcmVJbWFnZSIsIiRhcHBseSIsImluaXREYXRhIiwicGFyYW1zIiwicmVzIiwiY29kZSIsImFyZWFJbmZvIiwibW9uaXRvckFyZWFOYW1lIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxXOzs7Ozs7Ozs7Ozs7OztvTUFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsK0JBQWU7QUFERjtBQUZaLFMsUUFPVEMsSSxHQUFPO0FBQ0hDLDZCQUFpQkMsZUFBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCSCxlQUR4QztBQUVISSxtQkFBTyxFQUZKO0FBR0hDLG9CQUFRLEVBSEw7QUFJSEMseUJBQWE7QUFKVixTLFFBa0JQQyxPLEdBQVU7QUFDTkMsdUJBRE0seUJBQ1E7QUFDVixvQkFBSUMsUUFBUUMsaUJBQVo7QUFDQSxvQkFBSUQsTUFBTUUsTUFBTixJQUFnQixDQUFwQixFQUF1QjtBQUNuQkMsdUJBQUdDLFNBQUgsQ0FBYTtBQUNUQyw2QkFBSztBQURJLHFCQUFiO0FBR0gsaUJBSkQsTUFJTztBQUNIRix1QkFBR0csWUFBSCxDQUFnQjtBQUNaQywrQkFBTztBQURLLHFCQUFoQjtBQUdIO0FBQ0osYUFaSztBQWFOQywwQkFiTSwwQkFhU0MsQ0FiVCxFQWFZO0FBQUEsNENBQ2FBLEVBQUVDLGFBQUYsQ0FBZ0JDLE9BRDdCO0FBQUEsb0JBQ05DLFFBRE0seUJBQ05BLFFBRE07QUFBQSxvQkFDSUMsSUFESix5QkFDSUEsSUFESjs7QUFFZFYsbUJBQUdXLFVBQUgsQ0FBYztBQUNWVCxtRUFBNkMsS0FBS1QsTUFBbEQsY0FBaUVpQixJQUFqRSxrQkFBa0ZEO0FBRHhFLGlCQUFkO0FBR0g7QUFsQkssUzs7Ozs7K0JBWEhHLE8sRUFBUztBQUNadkIsMkJBQUtDLFNBQUwsQ0FBZXVCLFVBQWY7O0FBRUEsaUJBQUtwQixNQUFMLEdBQWNtQixRQUFRbkIsTUFBdEI7QUFDQSxpQkFBS3FCLE1BQUw7QUFDSDs7O2lDQUVRO0FBQ0wsaUJBQUtDLFFBQUw7QUFDSDs7Ozs7Ozs7OztBQXdCT0Msc0MsR0FBUztBQUNUdkIsNENBQVEsS0FBS0E7QUFESixpQzs7dUNBR0csZ0NBQXNCdUIsTUFBdEIsQzs7O0FBQVpDLG1DOztBQUNKLG9DQUFJQSxJQUFJQyxJQUFKLElBQVksR0FBaEIsRUFBcUI7QUFDYi9CLHdDQURhLEdBQ044QixJQUFJOUIsSUFERTs7QUFFakIsd0NBQUlBLElBQUosRUFBVTtBQUNOLDZDQUFLTyxXQUFMLEdBQW1CUCxJQUFuQjtBQUNBLDZDQUFLSyxLQUFMLEdBQWFMLEtBQUtnQyxRQUFMLElBQWlCaEMsS0FBS2dDLFFBQUwsQ0FBY0MsZUFBNUM7QUFDQSw2Q0FBS04sTUFBTDtBQUNIO0FBRUo7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUE1RGdDekIsZUFBS2dDLEk7O2tCQUF6QnRDLFciLCJmaWxlIjoibW9uaXRvckFyZWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHsgZ2V0RGV2aWNlTGlzdEJ5QXJlYUlkIH0gZnJvbSAnLi4vYXBpL2FwaSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbW9uaXRvckFyZWEgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnm5HmtYvljLrln58nLFxyXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXHJcbiAgICAgICAgdGl0bGU6ICcnLFxyXG4gICAgICAgIGFyZWFJZDogJycsXHJcbiAgICAgICAgbW9uaXRvckRhdGE6IHt9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkKG9wdGlvbnMpIHtcclxuICAgICAgICB3ZXB5LiRpbnN0YW5jZS5zaGFyZUltYWdlKClcclxuXHJcbiAgICAgICAgdGhpcy5hcmVhSWQgPSBvcHRpb25zLmFyZWFJZDtcclxuICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2hvdygpIHtcclxuICAgICAgICB0aGlzLmluaXREYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBvbkNsaWNrTGVmdCgpIHtcclxuICAgICAgICAgICAgbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgIGlmIChwYWdlcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWVudTAnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZU1vcmVEYXRhKGUpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBkZXZpY2VJZCwgdHlwZSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiBgL3BhZ2VzL3BhY2thZ2UvbW9uaXRvckRldGFpbHM/YXJlYUlkPSR7dGhpcy5hcmVhSWR9JnR5cGU9JHt0eXBlfSZkZXZpY2VJZD0ke2RldmljZUlkfWBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGluaXREYXRhKCkge1xyXG4gICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGFyZWFJZDogdGhpcy5hcmVhSWRcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGdldERldmljZUxpc3RCeUFyZWFJZChwYXJhbXMpO1xyXG4gICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9uaXRvckRhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IGRhdGEuYXJlYUluZm8gJiYgZGF0YS5hcmVhSW5mby5tb25pdG9yQXJlYU5hbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=