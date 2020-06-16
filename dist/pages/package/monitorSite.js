'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var monitorSite = function (_wepy$page) {
    _inherits(monitorSite, _wepy$page);

    function monitorSite() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, monitorSite);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = monitorSite.__proto__ || Object.getPrototypeOf(monitorSite)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '监测区域列表',
            usingComponents: {
                "van-nav-bar": "../../components/vant/nav-bar/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            title: ''
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

    _createClass(monitorSite, [{
        key: 'onLoad',
        value: function onLoad(options) {
            _wepy2.default.$instance.shareImage();

            var title = options.title;

            this.title = title;
            this.$apply();
        }
    }, {
        key: 'onShow',
        value: function onShow() {}
    }]);

    return monitorSite;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(monitorSite , 'pages/package/monitorSite'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vbml0b3JTaXRlLmpzIl0sIm5hbWVzIjpbImFwaSIsIm1vbml0b3JTaXRlIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInRpdGxlIiwibWV0aG9kcyIsIm9uQ2xpY2tMZWZ0IiwicGFnZXMiLCJnZXRDdXJyZW50UGFnZXMiLCJsZW5ndGgiLCJ3eCIsInN3aXRjaFRhYiIsInVybCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwib3B0aW9ucyIsInNoYXJlSW1hZ2UiLCIkYXBwbHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztJQUFZQSxHOzs7Ozs7Ozs7Ozs7SUFDU0MsVzs7Ozs7Ozs7Ozs7Ozs7b01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLFFBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlO0FBREY7QUFGWixTLFFBT1RDLEksR0FBTztBQUNIQyw2QkFBaUJDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkgsZUFEeEM7QUFFSEksbUJBQU87QUFGSixTLFFBZ0JQQyxPLEdBQVU7QUFDTkMsdUJBRE0seUJBQ1E7QUFDVixvQkFBSUMsUUFBUUMsaUJBQVo7QUFDQSxvQkFBSUQsTUFBTUUsTUFBTixJQUFnQixDQUFwQixFQUF1QjtBQUNuQkMsdUJBQUdDLFNBQUgsQ0FBYTtBQUNUQyw2QkFBSztBQURJLHFCQUFiO0FBR0gsaUJBSkQsTUFJTztBQUNIRix1QkFBR0csWUFBSCxDQUFnQjtBQUNaQywrQkFBTztBQURLLHFCQUFoQjtBQUdIO0FBQ0o7QUFaSyxTOzs7OzsrQkFYSEMsTyxFQUFTO0FBQ1pkLDJCQUFLQyxTQUFMLENBQWVjLFVBQWY7O0FBRFksZ0JBR0paLEtBSEksR0FHT1csT0FIUCxDQUdKWCxLQUhJOztBQUlaLGlCQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxpQkFBS2EsTUFBTDtBQUNIOzs7aUNBRU8sQ0FDUDs7OztFQXRCb0NoQixlQUFLaUIsSTs7a0JBQXpCdkIsVyIsImZpbGUiOiJtb25pdG9yU2l0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgKiBhcyBhcGkgIGZyb20gJy4uLy4uL2FwaS9hcGknXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIG1vbml0b3JTaXRlIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55uR5rWL5Yy65Z+f5YiX6KGoJyxcclxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uLy4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCJcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxyXG4gICAgICAgIHRpdGxlOiAnJyxcclxuICAgIH1cclxuXHJcbiAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgIHdlcHkuJGluc3RhbmNlLnNoYXJlSW1hZ2UoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IHsgdGl0bGUsIH0gPSBvcHRpb25zXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCl7XHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgICBvbkNsaWNrTGVmdCgpIHtcclxuICAgICAgICAgICAgbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgIGlmIChwYWdlcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWVudTAnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19