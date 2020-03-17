'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.updateUser = exports.getOpenid = exports.userLogout = exports.getUserInfo = exports.wechatLogin = exports.smsLogin = exports.getCode = undefined;

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
        var header, store, globalData, token, environment, data, res, result;
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
                        token = wx.getStorageSync('token');


                        if (token) {
                            header['Authorization'] = token;
                        }
                        environment = 'test';

                        if (environment == 'prod') {
                            url = 'https://tcb-api.tencentcloudapi.com' + url;
                        } else if (environment == 'test') {
                            url = 'https://beidou.signalfire.net.cn/' + url;
                            // url = 'https://mock.api.signalfire.net.cn/mock/5e6e33e3295a274363797433/example/' + url;
                        }
                        data = method == 'GET' ? params : _qs2.default.stringify(params);
                        _context.next = 11;
                        return _wepy2.default.request({
                            header: header,
                            url: url,
                            method: method,
                            data: data
                        }).catch(function (err) {
                            console.log('wepy requerst err:' + err);
                        });

                    case 11:
                        res = _context.sent;


                        showLoding && _tip2.default.loaded();

                        if (!(res && res.data)) {
                            _context.next = 17;
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

                    case 17:
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
// 退出登录
var userLogout = exports.userLogout = function userLogout() {
    return wxRequest({}, 'logout');
};
// 获取微信openId
var getOpenid = exports.getOpenid = function getOpenid(params) {
    return wxRequest(params, 'getOpenid');
};
// 修改用户信息
var updateUser = exports.updateUser = function updateUser(params) {
    return wxRequest(params, 'system/user/profile', 'PUT');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93TG9kaW5nIiwidGlwIiwibG9hZGluZyIsImhlYWRlciIsInN0b3JlIiwiZ2xvYmFsRGF0YSIsImdldFN0YXRlIiwidXNlciIsInRva2VuIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImVudmlyb25tZW50IiwiZGF0YSIsInFzIiwic3RyaW5naWZ5Iiwid2VweSIsInJlcXVlc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJsb2FkZWQiLCJyZXN1bHQiLCJjb2RlIiwibmF2aWdhdGVUbyIsImdldENvZGUiLCJzbXNMb2dpbiIsIndlY2hhdExvZ2luIiwiZ2V0VXNlckluZm8iLCJ1c2VyTG9nb3V0IiwiZ2V0T3BlbmlkIiwidXBkYXRlVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNQTtBQUFBLHVFQUFZO0FBQUEsWUFBTUMsTUFBTix1RUFBZSxFQUFmO0FBQUEsWUFBbUJDLEdBQW5CO0FBQUEsWUFBd0JDLE1BQXhCLHVFQUFpQyxNQUFqQztBQUFBLFlBQXlDQyxVQUF6Qyx1RUFBc0QsSUFBdEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2RBLHNDQUFjQyxjQUFJQyxPQUFKLEVBQWQ7O0FBRUlDLDhCQUhVLEdBR0Q7QUFDVCw0Q0FBZ0I7QUFEUCx5QkFIQztBQU9SQyw2QkFQUSxHQU9BLDBCQVBBO0FBUVZDLGtDQVJVLEdBUUdELE1BQU1FLFFBQU4sR0FBaUJDLElBQWpCLENBQXNCRixVQVJ6QjtBQVVWRyw2QkFWVSxHQVVGQyxHQUFHQyxjQUFILENBQWtCLE9BQWxCLENBVkU7OztBQVlkLDRCQUFJRixLQUFKLEVBQVc7QUFDUEwsbUNBQU8sZUFBUCxJQUEwQkssS0FBMUI7QUFDSDtBQUNHRyxtQ0FmVSxHQWVJLE1BZko7O0FBZ0JkLDRCQUFJQSxlQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCYixrQ0FBTSx3Q0FBd0NBLEdBQTlDO0FBQ0gseUJBRkQsTUFFTyxJQUFJYSxlQUFlLE1BQW5CLEVBQTJCO0FBQzlCYixrQ0FBTSxzQ0FBc0NBLEdBQTVDO0FBQ0E7QUFDSDtBQUNHYyw0QkF0QlUsR0FzQkhiLFVBQVUsS0FBVixHQUFrQkYsTUFBbEIsR0FBMkJnQixhQUFHQyxTQUFILENBQWFqQixNQUFiLENBdEJ4QjtBQUFBO0FBQUEsK0JBd0JFa0IsZUFBS0MsT0FBTCxDQUFhO0FBQ3pCYiwwQ0FEeUI7QUFFekJMLG9DQUZ5QjtBQUd6QkMsb0NBQVFBLE1BSGlCO0FBSXpCYSxrQ0FBTUE7QUFKbUIseUJBQWIsRUFLYkssS0FMYSxDQUtQLFVBQUNDLEdBQUQsRUFBUztBQUNkQyxvQ0FBUUMsR0FBUixDQUFZLHVCQUF1QkYsR0FBbkM7QUFDSCx5QkFQZSxDQXhCRjs7QUFBQTtBQXdCVkcsMkJBeEJVOzs7QUFpQ2RyQixzQ0FBY0MsY0FBSXFCLE1BQUosRUFBZDs7QUFqQ2MsOEJBbUNWRCxPQUFPQSxJQUFJVCxJQW5DRDtBQUFBO0FBQUE7QUFBQTs7QUFvQ05XLDhCQXBDTSxHQW9DR0YsSUFBSVQsSUFwQ1A7QUFxQ1Y7O0FBQ0EsNEJBQUlXLE9BQU9DLElBQVAsSUFBZSxHQUFuQixFQUF3QjtBQUNwQmYsK0JBQUdnQixVQUFILENBQWM7QUFDVjNCLHFDQUFLO0FBREssNkJBQWQ7QUFHSDtBQTFDUyx5REEyQ0h1QixJQUFJVCxJQTNDRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBK0NBO0FBQ08sSUFBTWMsNEJBQVUsU0FBVkEsT0FBVSxDQUFDN0IsTUFBRDtBQUFBLFdBQVlELFVBQVVDLE1BQVYsRUFBa0IsU0FBbEIsRUFBNkIsS0FBN0IsQ0FBWjtBQUFBLENBQWhCO0FBQ1A7QUFDTyxJQUFNOEIsOEJBQVcsU0FBWEEsUUFBVyxDQUFDOUIsTUFBRDtBQUFBLFdBQVlELFVBQVVDLE1BQVYsRUFBa0IsVUFBbEIsQ0FBWjtBQUFBLENBQWpCO0FBQ1A7QUFDTyxJQUFNK0Isb0NBQWMsU0FBZEEsV0FBYyxDQUFDL0IsTUFBRDtBQUFBLFdBQVlELFVBQVVDLE1BQVYsRUFBa0IsYUFBbEIsQ0FBWjtBQUFBLENBQXBCO0FBQ1A7QUFDTyxJQUFNZ0Msb0NBQWMsU0FBZEEsV0FBYztBQUFBLFdBQU1qQyxVQUFVLEVBQVYsRUFBYyxTQUFkLEVBQXlCLEtBQXpCLENBQU47QUFBQSxDQUFwQjtBQUNQO0FBQ08sSUFBTWtDLGtDQUFhLFNBQWJBLFVBQWE7QUFBQSxXQUFNbEMsVUFBVSxFQUFWLEVBQWMsUUFBZCxDQUFOO0FBQUEsQ0FBbkI7QUFDUDtBQUNPLElBQU1tQyxnQ0FBWSxTQUFaQSxTQUFZLENBQUNsQyxNQUFEO0FBQUEsV0FBWUQsVUFBVUMsTUFBVixFQUFrQixXQUFsQixDQUFaO0FBQUEsQ0FBbEI7QUFDUDtBQUNPLElBQU1tQyxrQ0FBYSxTQUFiQSxVQUFhLENBQUNuQyxNQUFEO0FBQUEsV0FBWUQsVUFBVUMsTUFBVixFQUFrQixxQkFBbEIsRUFBeUMsS0FBekMsQ0FBWjtBQUFBLENBQW5CIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7XHJcbiAgICBnZXRTdG9yZVxyXG59IGZyb20gJ3dlcHktcmVkdXgnXHJcbmltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJ1xyXG5cclxuaW1wb3J0IHFzIGZyb20gJ3FzJztcclxuXHJcbmNvbnN0IHd4UmVxdWVzdCA9IGFzeW5jKHBhcmFtcyA9IHt9LCB1cmwsIG1ldGhvZCA9ICdQT1NUJywgc2hvd0xvZGluZyA9IHRydWUpID0+IHtcclxuICAgIHNob3dMb2RpbmcgJiYgdGlwLmxvYWRpbmcoKTtcclxuXHJcbiAgICBsZXQgaGVhZGVyID0ge1xyXG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBzdG9yZSA9IGdldFN0b3JlKCk7XHJcbiAgICBsZXQgZ2xvYmFsRGF0YSA9IHN0b3JlLmdldFN0YXRlKCkudXNlci5nbG9iYWxEYXRhO1xyXG5cclxuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xyXG5cclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgIGhlYWRlclsnQXV0aG9yaXphdGlvbiddID0gdG9rZW47XHJcbiAgICB9XHJcbiAgICBsZXQgZW52aXJvbm1lbnQgPSAndGVzdCc7XHJcbiAgICBpZiAoZW52aXJvbm1lbnQgPT0gJ3Byb2QnKSB7XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vdGNiLWFwaS50ZW5jZW50Y2xvdWRhcGkuY29tJyArIHVybDtcclxuICAgIH0gZWxzZSBpZiAoZW52aXJvbm1lbnQgPT0gJ3Rlc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vYmVpZG91LnNpZ25hbGZpcmUubmV0LmNuLycgKyB1cmw7XHJcbiAgICAgICAgLy8gdXJsID0gJ2h0dHBzOi8vbW9jay5hcGkuc2lnbmFsZmlyZS5uZXQuY24vbW9jay81ZTZlMzNlMzI5NWEyNzQzNjM3OTc0MzMvZXhhbXBsZS8nICsgdXJsO1xyXG4gICAgfVxyXG4gICAgbGV0IGRhdGEgPSBtZXRob2QgPT0gJ0dFVCcgPyBwYXJhbXMgOiBxcy5zdHJpbmdpZnkocGFyYW1zKTtcclxuXHJcbiAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dlcHkgcmVxdWVyc3QgZXJyOicgKyBlcnIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2hvd0xvZGluZyAmJiB0aXAubG9hZGVkKCk7XHJcblxyXG4gICAgaWYgKHJlcyAmJiByZXMuZGF0YSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSByZXMuZGF0YTtcclxuICAgICAgICAvLyDmnKrmjojmnYNcclxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzLmRhdGE7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIOiOt+WPlumqjOivgeeggVxyXG5leHBvcnQgY29uc3QgZ2V0Q29kZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzbXNjb2RlJywgJ0dFVCcpXHJcbi8vIOefreS/oemqjOivgeeggeeZu+W9lVxyXG5leHBvcnQgY29uc3Qgc21zTG9naW4gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc21zbG9naW4nKVxyXG4vLyDlvq7kv6HmjojmnYPnmbvlvZVcclxuZXhwb3J0IGNvbnN0IHdlY2hhdExvZ2luID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3dlY2hhdGxvZ2luJylcclxuLy8g6I635Y+W55So5oi35L+h5oGvXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ2dldEluZm8nLCAnR0VUJylcclxuLy8g6YCA5Ye655m75b2VXHJcbmV4cG9ydCBjb25zdCB1c2VyTG9nb3V0ID0gKCkgPT4gd3hSZXF1ZXN0KHt9LCAnbG9nb3V0JylcclxuLy8g6I635Y+W5b6u5L+hb3BlbklkXHJcbmV4cG9ydCBjb25zdCBnZXRPcGVuaWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnZ2V0T3BlbmlkJylcclxuLy8g5L+u5pS555So5oi35L+h5oGvXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3N5c3RlbS91c2VyL3Byb2ZpbGUnLCAnUFVUJykiXX0=