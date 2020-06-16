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

var VideoMonitor = function (_wepy$page) {
    _inherits(VideoMonitor, _wepy$page);

    function VideoMonitor() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, VideoMonitor);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = VideoMonitor.__proto__ || Object.getPrototypeOf(VideoMonitor)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '视频监控',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            link: 'http://hls01open.ys7.com/openlive/2cd540c03b0144ab81ced1ad836362ed.m3u8'
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

    _createClass(VideoMonitor, [{
        key: 'onShow',
        value: function onShow() {}
    }, {
        key: 'onLoad',
        value: function onLoad(options) {
            _wepy2.default.$instance.shareImage();

            var pages = getCurrentPages();
            var prevPage = pages[pages.length - 2];
            this.link = prevPage.data.link;
            console.log(this.link);
            this.$apply();
        }
    }]);

    return VideoMonitor;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(VideoMonitor , 'pages/videoMonitor'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZpZGVvTW9uaXRvci5qcyJdLCJuYW1lcyI6WyJWaWRlb01vbml0b3IiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiZGF0YSIsInN0YXR1c0JhckhlaWdodCIsIndlcHkiLCIkaW5zdGFuY2UiLCJnbG9iYWxEYXRhIiwibGluayIsIm1ldGhvZHMiLCJvbkNsaWNrTGVmdCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwibGVuZ3RoIiwid3giLCJzd2l0Y2hUYWIiLCJ1cmwiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm9wdGlvbnMiLCJzaGFyZUltYWdlIiwicHJldlBhZ2UiLCJjb25zb2xlIiwibG9nIiwiJGFwcGx5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7OztJQUNxQkEsWTs7Ozs7Ozs7Ozs7Ozs7c01BQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlO0FBREY7QUFGWixTLFFBTVRDLEksR0FBTztBQUNIQyw2QkFBaUJDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkgsZUFEeEM7QUFFSEksa0JBQU07QUFGSCxTLFFBbUJQQyxPLEdBQVU7QUFDTkMsdUJBRE0seUJBQ1E7QUFDVixvQkFBSUMsUUFBUUMsaUJBQVo7QUFDQSxvQkFBSUQsTUFBTUUsTUFBTixJQUFnQixDQUFwQixFQUF1QjtBQUNuQkMsdUJBQUdDLFNBQUgsQ0FBYTtBQUNUQyw2QkFBSztBQURJLHFCQUFiO0FBR0gsaUJBSkQsTUFJTztBQUNIRix1QkFBR0csWUFBSCxDQUFnQjtBQUNaQywrQkFBTztBQURLLHFCQUFoQjtBQUdIO0FBQ0o7QUFaSyxTOzs7OztpQ0FkRCxDQUVSOzs7K0JBRU1DLE8sRUFBUztBQUNYZCwyQkFBS0MsU0FBTCxDQUFlYyxVQUFmOztBQUVELGdCQUFNVCxRQUFRQyxpQkFBZDtBQUNBLGdCQUFNUyxXQUFXVixNQUFNQSxNQUFNRSxNQUFOLEdBQWUsQ0FBckIsQ0FBakI7QUFDQSxpQkFBS0wsSUFBTCxHQUFZYSxTQUFTbEIsSUFBVCxDQUFjSyxJQUExQjtBQUNBYyxvQkFBUUMsR0FBUixDQUFZLEtBQUtmLElBQWpCO0FBQ0EsaUJBQUtnQixNQUFMO0FBQ0g7Ozs7RUF4QnFDbkIsZUFBS29CLEk7O2tCQUExQjFCLFkiLCJmaWxlIjoidmlkZW9Nb25pdG9yLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb01vbml0b3IgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfop4bpopHnm5HmjqcnLFxyXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcclxuICAgICAgICBsaW5rOiAnaHR0cDovL2hsczAxb3Blbi55czcuY29tL29wZW5saXZlLzJjZDU0MGMwM2IwMTQ0YWI4MWNlZDFhZDgzNjM2MmVkLm0zdTgnXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgIHdlcHkuJGluc3RhbmNlLnNoYXJlSW1hZ2UoKVxyXG5cclxuICAgICAgICBjb25zdCBwYWdlcyA9IGdldEN1cnJlbnRQYWdlcygpXHJcbiAgICAgICAgY29uc3QgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXVxyXG4gICAgICAgIHRoaXMubGluayA9IHByZXZQYWdlLmRhdGEubGluaztcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpbmspXHJcbiAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIG9uQ2xpY2tMZWZ0KCkge1xyXG4gICAgICAgICAgICBsZXQgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICAgICAgICAgICAgaWYgKHBhZ2VzLmxlbmd0aCA9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9tZW51MCdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICBcclxuICAgIH1cclxufVxyXG4iXX0=