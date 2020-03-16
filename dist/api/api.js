'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserInfo = exports.wechatLogin = exports.smsLogin = exports.getCode = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _tip = require('./../utils/tip.js');

var _tip2 = _interopRequireDefault(_tip);

var _qs = require('./../npm/qs/lib/index.js');

var _qs2 = _interopRequireDefault(_qs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var wxRequest = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var url = arguments[1];
        var method = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'POST';
        var showLoding = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        var header, store, globalData, environment, data, res, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        showLoding && _tip2.default.loading();

                        header = {
                            'content-type': 'application/x-www-form-urlencoded'
                        };
                        store = (0, _wepyRedux.getStore)();
                        globalData = store.getState().user.globalData;

                        if (globalData.token) {
                            header['Authorization'] = globalData.token;
                        }
                        environment = 'test';

                        if (environment == 'prod') {
                            url = 'https://tcb-api.tencentcloudapi.com' + url;
                        } else if (environment == 'test') {
                            url = 'https://beidou.signalfire.net.cn/' + url;
                            // url = 'https://mock.api.signalfire.net.cn/mock/5e6e33e3295a274363797433/example/' + url;
                        }
                        data = method == 'POST' ? _qs2.default.stringify(params) : params;
                        _context.next = 10;
                        return _wepy2.default.request({
                            header: header,
                            url: url,
                            method: method,
                            data: data
                        }).catch(function (err) {
                            console.log('wepy requerst err:' + err);
                        });

                    case 10:
                        res = _context.sent;


                        showLoding && _tip2.default.loaded();

                        if (!(res && res.data)) {
                            _context.next = 16;
                            break;
                        }

                        result = res.data;
                        // 未授权

                        if (result.code == 401) {
                            wx.navigateTo({
                                url: '/pages/login'
                            });
                        }
                        return _context.abrupt('return', res.data);

                    case 16:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, undefined);
    }));

    return function wxRequest() {
        return _ref.apply(this, arguments);
    };
}();

// 获取验证码
var getCode = exports.getCode = function getCode(params) {
    return wxRequest(params, 'smscode', 'GET');
};
// 短信验证码登录
var smsLogin = exports.smsLogin = function smsLogin(params) {
    return wxRequest(params, 'smslogin');
};
// 微信授权登录
var wechatLogin = exports.wechatLogin = function wechatLogin(params) {
    return wxRequest(params, 'wechatlogin');
};
// 获取用户信息
var getUserInfo = exports.getUserInfo = function getUserInfo() {
    return wxRequest({}, 'getInfo', 'GET');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93TG9kaW5nIiwidGlwIiwibG9hZGluZyIsImhlYWRlciIsInN0b3JlIiwiZ2xvYmFsRGF0YSIsImdldFN0YXRlIiwidXNlciIsInRva2VuIiwiZW52aXJvbm1lbnQiLCJkYXRhIiwicXMiLCJzdHJpbmdpZnkiLCJ3ZXB5IiwicmVxdWVzdCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlcyIsImxvYWRlZCIsInJlc3VsdCIsImNvZGUiLCJ3eCIsIm5hdmlnYXRlVG8iLCJnZXRDb2RlIiwic21zTG9naW4iLCJ3ZWNoYXRMb2dpbiIsImdldFVzZXJJbmZvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUVBOzs7Ozs7OztBQUVBLElBQU1BO0FBQUEsdUVBQVk7QUFBQSxZQUFNQyxNQUFOLHVFQUFlLEVBQWY7QUFBQSxZQUFtQkMsR0FBbkI7QUFBQSxZQUF3QkMsTUFBeEIsdUVBQWlDLE1BQWpDO0FBQUEsWUFBeUNDLFVBQXpDLHVFQUFzRCxJQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEEsc0NBQWNDLGNBQUlDLE9BQUosRUFBZDs7QUFFSUMsOEJBSFUsR0FHRDtBQUNULDRDQUFnQjtBQURQLHlCQUhDO0FBT1JDLDZCQVBRLEdBT0EsMEJBUEE7QUFRVkMsa0NBUlUsR0FRR0QsTUFBTUUsUUFBTixHQUFpQkMsSUFBakIsQ0FBc0JGLFVBUnpCOztBQVNkLDRCQUFJQSxXQUFXRyxLQUFmLEVBQXNCO0FBQ2xCTCxtQ0FBTyxlQUFQLElBQTBCRSxXQUFXRyxLQUFyQztBQUNIO0FBQ0dDLG1DQVpVLEdBWUksTUFaSjs7QUFhZCw0QkFBSUEsZUFBZSxNQUFuQixFQUEyQjtBQUN2Qlgsa0NBQU0sd0NBQXdDQSxHQUE5QztBQUNILHlCQUZELE1BRU8sSUFBSVcsZUFBZSxNQUFuQixFQUEyQjtBQUM5Qlgsa0NBQU0sc0NBQXNDQSxHQUE1QztBQUNBO0FBQ0g7QUFDR1ksNEJBbkJVLEdBbUJIWCxVQUFVLE1BQVYsR0FBbUJZLGFBQUdDLFNBQUgsQ0FBYWYsTUFBYixDQUFuQixHQUEwQ0EsTUFuQnZDO0FBQUE7QUFBQSwrQkFxQkVnQixlQUFLQyxPQUFMLENBQWE7QUFDekJYLDBDQUR5QjtBQUV6Qkwsb0NBRnlCO0FBR3pCQyxvQ0FBUUEsTUFIaUI7QUFJekJXLGtDQUFNQTtBQUptQix5QkFBYixFQUtiSyxLQUxhLENBS1AsVUFBQ0MsR0FBRCxFQUFTO0FBQ2RDLG9DQUFRQyxHQUFSLENBQVksdUJBQXVCRixHQUFuQztBQUNILHlCQVBlLENBckJGOztBQUFBO0FBcUJWRywyQkFyQlU7OztBQThCZG5CLHNDQUFjQyxjQUFJbUIsTUFBSixFQUFkOztBQTlCYyw4QkFnQ1ZELE9BQU9BLElBQUlULElBaENEO0FBQUE7QUFBQTtBQUFBOztBQWlDTlcsOEJBakNNLEdBaUNHRixJQUFJVCxJQWpDUDtBQWtDVjs7QUFDQSw0QkFBSVcsT0FBT0MsSUFBUCxJQUFlLEdBQW5CLEVBQXdCO0FBQ3BCQywrQkFBR0MsVUFBSCxDQUFjO0FBQ1YxQixxQ0FBSztBQURLLDZCQUFkO0FBR0g7QUF2Q1MseURBd0NIcUIsSUFBSVQsSUF4Q0Q7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQTRDQTtBQUNPLElBQU1lLDRCQUFVLFNBQVZBLE9BQVUsQ0FBQzVCLE1BQUQ7QUFBQSxXQUFZRCxVQUFVQyxNQUFWLEVBQWtCLFNBQWxCLEVBQTZCLEtBQTdCLENBQVo7QUFBQSxDQUFoQjtBQUNQO0FBQ08sSUFBTTZCLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQzdCLE1BQUQ7QUFBQSxXQUFZRCxVQUFVQyxNQUFWLEVBQWtCLFVBQWxCLENBQVo7QUFBQSxDQUFqQjtBQUNQO0FBQ08sSUFBTThCLG9DQUFjLFNBQWRBLFdBQWMsQ0FBQzlCLE1BQUQ7QUFBQSxXQUFZRCxVQUFVQyxNQUFWLEVBQWtCLGFBQWxCLENBQVo7QUFBQSxDQUFwQjtBQUNQO0FBQ08sSUFBTStCLG9DQUFjLFNBQWRBLFdBQWM7QUFBQSxXQUFNaEMsVUFBVSxFQUFWLEVBQWMsU0FBZCxFQUF5QixLQUF6QixDQUFOO0FBQUEsQ0FBcEIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7XG4gICAgZ2V0U3RvcmVcbn0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJ1xuXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuXG5jb25zdCB3eFJlcXVlc3QgPSBhc3luYyhwYXJhbXMgPSB7fSwgdXJsLCBtZXRob2QgPSAnUE9TVCcsIHNob3dMb2RpbmcgPSB0cnVlKSA9PiB7XG4gICAgc2hvd0xvZGluZyAmJiB0aXAubG9hZGluZygpO1xuXG4gICAgbGV0IGhlYWRlciA9IHtcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgfTtcblxuICAgIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKTtcbiAgICBsZXQgZ2xvYmFsRGF0YSA9IHN0b3JlLmdldFN0YXRlKCkudXNlci5nbG9iYWxEYXRhO1xuICAgIGlmIChnbG9iYWxEYXRhLnRva2VuKSB7XG4gICAgICAgIGhlYWRlclsnQXV0aG9yaXphdGlvbiddID0gZ2xvYmFsRGF0YS50b2tlblxuICAgIH1cbiAgICBsZXQgZW52aXJvbm1lbnQgPSAndGVzdCc7XG4gICAgaWYgKGVudmlyb25tZW50ID09ICdwcm9kJykge1xuICAgICAgICB1cmwgPSAnaHR0cHM6Ly90Y2ItYXBpLnRlbmNlbnRjbG91ZGFwaS5jb20nICsgdXJsO1xuICAgIH0gZWxzZSBpZiAoZW52aXJvbm1lbnQgPT0gJ3Rlc3QnKSB7XG4gICAgICAgIHVybCA9ICdodHRwczovL2JlaWRvdS5zaWduYWxmaXJlLm5ldC5jbi8nICsgdXJsO1xuICAgICAgICAvLyB1cmwgPSAnaHR0cHM6Ly9tb2NrLmFwaS5zaWduYWxmaXJlLm5ldC5jbi9tb2NrLzVlNmUzM2UzMjk1YTI3NDM2Mzc5NzQzMy9leGFtcGxlLycgKyB1cmw7XG4gICAgfVxuICAgIGxldCBkYXRhID0gbWV0aG9kID09ICdQT1NUJyA/IHFzLnN0cmluZ2lmeShwYXJhbXMpIDogcGFyYW1zO1xuXG4gICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgdXJsLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3ZXB5IHJlcXVlcnN0IGVycjonICsgZXJyKTtcbiAgICB9KTtcblxuICAgIHNob3dMb2RpbmcgJiYgdGlwLmxvYWRlZCgpO1xuXG4gICAgaWYgKHJlcyAmJiByZXMuZGF0YSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gcmVzLmRhdGE7XG4gICAgICAgIC8vIOacquaOiOadg1xuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAxKSB7XG4gICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4nXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICB9XG59XG5cbi8vIOiOt+WPlumqjOivgeeggVxuZXhwb3J0IGNvbnN0IGdldENvZGUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc21zY29kZScsICdHRVQnKTtcbi8vIOefreS/oemqjOivgeeggeeZu+W9lVxuZXhwb3J0IGNvbnN0IHNtc0xvZ2luID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3Ntc2xvZ2luJyk7XG4vLyDlvq7kv6HmjojmnYPnmbvlvZVcbmV4cG9ydCBjb25zdCB3ZWNoYXRMb2dpbiA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd3ZWNoYXRsb2dpbicpO1xuLy8g6I635Y+W55So5oi35L+h5oGvXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSAoKSA9PiB3eFJlcXVlc3Qoe30sICdnZXRJbmZvJywgJ0dFVCcpIl19