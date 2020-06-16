'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _store = require('./../store/index.js');

var _store2 = _interopRequireDefault(_store);

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

var Index = function (_wepy$page) {
    _inherits(Index, _wepy$page);

    function Index() {
        _classCallCheck(this, Index);

        return _possibleConstructorReturn(this, (Index.__proto__ || Object.getPrototypeOf(Index)).apply(this, arguments));
    }

    _createClass(Index, [{
        key: 'onLoad',
        value: function onLoad() {
            this.getUserInfo();
        }
    }, {
        key: 'getUserInfo',
        value: function getUserInfo() {
            var header = {
                'content-type': 'application/x-www-form-urlencoded'
            };

            var token = wx.getStorageSync('token');
            if (token) {
                header['Authorization'] = token;
            }

            var environment = _wepy2.default.$instance.globalData.env;
            var url = 'getInfo';
            if (environment == 'prod') {
                url = 'https://tcb-api.tencentcloudapi.com' + url;
            } else if (environment == 'test') {
                url = 'https://beidou.signalfire.net.cn/' + url;
            }

            _wepy2.default.request({
                header: header,
                url: url,
                method: 'GET'
            }).then(function (res) {
                var data = res.data;
                if (data) {
                    if (data.code == 401) {
                        setTimeout(function () {
                            wx.redirectTo({
                                url: '/pages/login'
                            });
                        }, 1000);
                    } else if (data.code == 200) {
                        wx.setStorageSync('globalData', data.user);
                        setTimeout(function () {
                            wx.switchTab({
                                url: '/pages/menu0'
                            });
                        }, 1000);
                    }
                }
            }).catch(function (err) {
                console.log('wepy requerst err:' + err);
            });
        }
    }]);

    return Index;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Index , 'pages/index'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInN0b3JlIiwiSW5kZXgiLCJnZXRVc2VySW5mbyIsImhlYWRlciIsInRva2VuIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImVudmlyb25tZW50Iiwid2VweSIsIiRpbnN0YW5jZSIsImdsb2JhbERhdGEiLCJlbnYiLCJ1cmwiLCJyZXF1ZXN0IiwibWV0aG9kIiwidGhlbiIsInJlcyIsImRhdGEiLCJjb2RlIiwic2V0VGltZW91dCIsInJlZGlyZWN0VG8iLCJzZXRTdG9yYWdlU3luYyIsInVzZXIiLCJzd2l0Y2hUYWIiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUlBOzs7O0FBQ0E7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFFBQVEsc0JBQWQ7QUFDQSx5QkFBU0EsS0FBVDs7SUFFcUJDLEs7Ozs7Ozs7Ozs7O2lDQUVSO0FBQ0wsaUJBQUtDLFdBQUw7QUFDSDs7O3NDQUVhO0FBQ1YsZ0JBQUlDLFNBQVM7QUFDVCxnQ0FBZ0I7QUFEUCxhQUFiOztBQUlBLGdCQUFJQyxRQUFRQyxHQUFHQyxjQUFILENBQWtCLE9BQWxCLENBQVo7QUFDQSxnQkFBSUYsS0FBSixFQUFXO0FBQ1BELHVCQUFPLGVBQVAsSUFBMEJDLEtBQTFCO0FBQ0g7O0FBRUQsZ0JBQUlHLGNBQWNDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkMsR0FBNUM7QUFDQSxnQkFBSUMsTUFBTSxTQUFWO0FBQ0EsZ0JBQUlMLGVBQWUsTUFBbkIsRUFBMkI7QUFDdkJLLHNCQUFNLHdDQUF3Q0EsR0FBOUM7QUFDSCxhQUZELE1BRU8sSUFBSUwsZUFBZSxNQUFuQixFQUEyQjtBQUM5Qkssc0JBQU0sc0NBQXNDQSxHQUE1QztBQUNIOztBQUVESiwyQkFBS0ssT0FBTCxDQUFhO0FBQ1RWLDhCQURTO0FBRVRTLHdCQUZTO0FBR1RFLHdCQUFRO0FBSEMsYUFBYixFQUlHQyxJQUpILENBSVEsVUFBQ0MsR0FBRCxFQUFTO0FBQ2Isb0JBQUlDLE9BQU9ELElBQUlDLElBQWY7QUFDQSxvQkFBSUEsSUFBSixFQUFVO0FBQ04sd0JBQUlBLEtBQUtDLElBQUwsSUFBYSxHQUFqQixFQUFzQjtBQUNsQkMsbUNBQVcsWUFBTTtBQUNiZCwrQkFBR2UsVUFBSCxDQUFjO0FBQ1ZSLHFDQUFLO0FBREssNkJBQWQ7QUFHSCx5QkFKRCxFQUlHLElBSkg7QUFLSCxxQkFORCxNQU1PLElBQUlLLEtBQUtDLElBQUwsSUFBYSxHQUFqQixFQUFzQjtBQUN6QmIsMkJBQUdnQixjQUFILENBQWtCLFlBQWxCLEVBQWdDSixLQUFLSyxJQUFyQztBQUNBSCxtQ0FBVyxZQUFNO0FBQ2JkLCtCQUFHa0IsU0FBSCxDQUFhO0FBQ1RYLHFDQUFLO0FBREksNkJBQWI7QUFHSCx5QkFKRCxFQUlHLElBSkg7QUFLSDtBQUNKO0FBRUosYUF2QkQsRUF1QkdZLEtBdkJILENBdUJTLFVBQUNDLEdBQUQsRUFBUztBQUNkQyx3QkFBUUMsR0FBUixDQUFZLHVCQUF1QkYsR0FBbkM7QUFDSCxhQXpCRDtBQTBCSDs7OztFQWxEOEJqQixlQUFLb0IsSTs7a0JBQW5CM0IsSyIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQge1xyXG4gICAgc2V0U3RvcmUsXHJcbiAgICBnZXRTdG9yZVxyXG59IGZyb20gJ3dlcHktcmVkdXgnXHJcbmltcG9ydCBjb25maWdTdG9yZSBmcm9tICcuLi9zdG9yZSdcclxuaW1wb3J0IHRpcCBmcm9tIFwiLi4vdXRpbHMvdGlwXCJcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlnU3RvcmUoKVxyXG5zZXRTdG9yZShzdG9yZSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVzZXJJbmZvKCkge1xyXG4gICAgICAgIGxldCBoZWFkZXIgPSB7XHJcbiAgICAgICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICBoZWFkZXJbJ0F1dGhvcml6YXRpb24nXSA9IHRva2VuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGVudmlyb25tZW50ID0gd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5lbnY7XHJcbiAgICAgICAgbGV0IHVybCA9ICdnZXRJbmZvJztcclxuICAgICAgICBpZiAoZW52aXJvbm1lbnQgPT0gJ3Byb2QnKSB7XHJcbiAgICAgICAgICAgIHVybCA9ICdodHRwczovL3RjYi1hcGkudGVuY2VudGNsb3VkYXBpLmNvbScgKyB1cmw7XHJcbiAgICAgICAgfSBlbHNlIGlmIChlbnZpcm9ubWVudCA9PSAndGVzdCcpIHtcclxuICAgICAgICAgICAgdXJsID0gJ2h0dHBzOi8vYmVpZG91LnNpZ25hbGZpcmUubmV0LmNuLycgKyB1cmw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuY29kZSA9PSA0MDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3gucmVkaXJlY3RUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZGF0YS5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4LnNldFN0b3JhZ2VTeW5jKCdnbG9iYWxEYXRhJywgZGF0YS51c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9tZW51MCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCd3ZXB5IHJlcXVlcnN0IGVycjonICsgZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19