'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Setting = function (_wepy$page) {
    _inherits(Setting, _wepy$page);

    function Setting() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Setting);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Setting.__proto__ || Object.getPrototypeOf(Setting)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '设置',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index",
                "van-icon": "../components/vant/icon/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            mainSwitch: false
        }, _this.methods = {
            onClickLeft: function onClickLeft() {
                wx.navigateBack({
                    delta: 1
                });
            },
            onChangeAccept: function onChangeAccept() {}
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Setting, [{
        key: 'onShow',
        value: function onShow() {}
    }]);

    return Setting;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Setting , 'pages/setting'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNldHRpbmcuanMiXSwibmFtZXMiOlsiU2V0dGluZyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwic3RhdHVzQmFySGVpZ2h0Iiwid2VweSIsIiRpbnN0YW5jZSIsImdsb2JhbERhdGEiLCJtYWluU3dpdGNoIiwibWV0aG9kcyIsIm9uQ2xpY2tMZWZ0Iiwid3giLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm9uQ2hhbmdlQWNjZXB0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsTzs7Ozs7Ozs7Ozs7Ozs7NExBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLElBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlLGtDQURGO0FBRWIsNEJBQVk7QUFGQztBQUZaLFMsUUFRVEMsSSxHQUFPO0FBQ0hDLDZCQUFpQkMsZUFBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCSCxlQUR4QztBQUVISSx3QkFBWTtBQUZULFMsUUFTUEMsTyxHQUFVO0FBQ05DLHVCQURNLHlCQUNRO0FBQ1ZDLG1CQUFHQyxZQUFILENBQWdCO0FBQ1pDLDJCQUFPO0FBREssaUJBQWhCO0FBR0gsYUFMSztBQU1OQywwQkFOTSw0QkFNVyxDQUVoQjtBQVJLLFM7Ozs7O2lDQUpELENBRVI7Ozs7RUFoQmdDVCxlQUFLVSxJOztrQkFBckJoQixPIiwiZmlsZSI6InNldHRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTZXR0aW5nIGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICBjb25maWcgPSB7XG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICforr7nva4nLFxuICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiLFxuICAgICAgICAgICAgXCJ2YW4taWNvblwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9pY29uL2luZGV4XCIsXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkYXRhID0ge1xuICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxuICAgICAgICBtYWluU3dpdGNoOiBmYWxzZVxuICAgIH1cblxuICAgIG9uU2hvdygpIHtcbiAgICAgICAgXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgICAgb25DbGlja0xlZnQoKSB7XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgIGRlbHRhOiAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DaGFuZ2VBY2NlcHQoKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ==