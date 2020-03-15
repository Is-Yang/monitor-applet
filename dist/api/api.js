'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getCode = undefined;

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
        var header, store, globalData, environment, data, res;
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
                        environment = 'test';

                        if (environment == 'prod') {
                            url = 'https://tcb-api.tencentcloudapi.com' + url;
                        } else if (environment == 'test') {
                            url = 'https://beidou.signalfire.net.cn/' + url;
                            // url = 'https://mock.api.signalfire.net.cn/mock/5e6e33e3295a274363797433/example/' + url;
                        }
                        data = method == 'POST' ? _qs2.default.stringify(params) : params;
                        _context.next = 9;
                        return _wepy2.default.request({
                            header: header,
                            url: url,
                            method: method,
                            data: data
                        }).catch(function (err) {
                            console.log('wepy requerst err:' + err);
                        });

                    case 9:
                        res = _context.sent;


                        showLoding && _tip2.default.loaded();

                        if (!res) {
                            _context.next = 13;
                            break;
                        }

                        return _context.abrupt('return', res.data);

                    case 13:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93TG9kaW5nIiwidGlwIiwibG9hZGluZyIsImhlYWRlciIsInN0b3JlIiwiZ2xvYmFsRGF0YSIsImdldFN0YXRlIiwidXNlciIsImVudmlyb25tZW50IiwiZGF0YSIsInFzIiwic3RyaW5naWZ5Iiwid2VweSIsInJlcXVlc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJsb2FkZWQiLCJnZXRDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUVBOzs7Ozs7OztBQUVBLElBQU1BO0FBQUEsdUVBQVk7QUFBQSxZQUFNQyxNQUFOLHVFQUFlLEVBQWY7QUFBQSxZQUFtQkMsR0FBbkI7QUFBQSxZQUF3QkMsTUFBeEIsdUVBQWlDLE1BQWpDO0FBQUEsWUFBeUNDLFVBQXpDLHVFQUFzRCxJQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEEsc0NBQWNDLGNBQUlDLE9BQUosRUFBZDs7QUFFSUMsOEJBSFUsR0FHRDtBQUNULDRDQUFnQjtBQURQLHlCQUhDO0FBT1JDLDZCQVBRLEdBT0EsMEJBUEE7QUFRVkMsa0NBUlUsR0FRR0QsTUFBTUUsUUFBTixHQUFpQkMsSUFBakIsQ0FBc0JGLFVBUnpCO0FBU1ZHLG1DQVRVLEdBU0ksTUFUSjs7QUFVZCw0QkFBSUEsZUFBZSxNQUFuQixFQUEyQjtBQUN2QlYsa0NBQU0sd0NBQXdDQSxHQUE5QztBQUNILHlCQUZELE1BRU8sSUFBSVUsZUFBZSxNQUFuQixFQUEyQjtBQUM5QlYsa0NBQU0sc0NBQXNDQSxHQUE1QztBQUNBO0FBQ0g7QUFDR1csNEJBaEJVLEdBZ0JIVixVQUFVLE1BQVYsR0FBbUJXLGFBQUdDLFNBQUgsQ0FBYWQsTUFBYixDQUFuQixHQUEwQ0EsTUFoQnZDO0FBQUE7QUFBQSwrQkFpQkVlLGVBQUtDLE9BQUwsQ0FBYTtBQUN6QlYsMENBRHlCO0FBRXpCTCxvQ0FGeUI7QUFHekJDLG9DQUFRQSxNQUhpQjtBQUl6QlUsa0NBQU1BO0FBSm1CLHlCQUFiLEVBS2JLLEtBTGEsQ0FLUCxVQUFDQyxHQUFELEVBQVM7QUFDZEMsb0NBQVFDLEdBQVIsQ0FBWSx1QkFBdUJGLEdBQW5DO0FBQ0gseUJBUGUsQ0FqQkY7O0FBQUE7QUFpQlZHLDJCQWpCVTs7O0FBMEJkbEIsc0NBQWNDLGNBQUlrQixNQUFKLEVBQWQ7O0FBMUJjLDZCQTRCVkQsR0E1QlU7QUFBQTtBQUFBO0FBQUE7O0FBQUEseURBNkJIQSxJQUFJVCxJQTdCRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBaUNBO0FBQ08sSUFBTVcsNEJBQVUsU0FBVkEsT0FBVSxDQUFDdkIsTUFBRDtBQUFBLFdBQVlELFVBQVVDLE1BQVYsRUFBa0IsU0FBbEIsRUFBNkIsS0FBN0IsQ0FBWjtBQUFBLENBQWhCIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQge1xuICAgIGdldFN0b3JlXG59IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcblxuaW1wb3J0IHFzIGZyb20gJ3FzJztcblxuY29uc3Qgd3hSZXF1ZXN0ID0gYXN5bmMocGFyYW1zID0ge30sIHVybCwgbWV0aG9kID0gJ1BPU1QnLCBzaG93TG9kaW5nID0gdHJ1ZSkgPT4ge1xuICAgIHNob3dMb2RpbmcgJiYgdGlwLmxvYWRpbmcoKTtcblxuICAgIGxldCBoZWFkZXIgPSB7XG4gICAgICAgICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgIH07XG5cbiAgICBjb25zdCBzdG9yZSA9IGdldFN0b3JlKCk7XG4gICAgbGV0IGdsb2JhbERhdGEgPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXIuZ2xvYmFsRGF0YTtcbiAgICBsZXQgZW52aXJvbm1lbnQgPSAndGVzdCc7XG4gICAgaWYgKGVudmlyb25tZW50ID09ICdwcm9kJykge1xuICAgICAgICB1cmwgPSAnaHR0cHM6Ly90Y2ItYXBpLnRlbmNlbnRjbG91ZGFwaS5jb20nICsgdXJsO1xuICAgIH0gZWxzZSBpZiAoZW52aXJvbm1lbnQgPT0gJ3Rlc3QnKSB7XG4gICAgICAgIHVybCA9ICdodHRwczovL2JlaWRvdS5zaWduYWxmaXJlLm5ldC5jbi8nICsgdXJsO1xuICAgICAgICAvLyB1cmwgPSAnaHR0cHM6Ly9tb2NrLmFwaS5zaWduYWxmaXJlLm5ldC5jbi9tb2NrLzVlNmUzM2UzMjk1YTI3NDM2Mzc5NzQzMy9leGFtcGxlLycgKyB1cmw7XG4gICAgfVxuICAgIGxldCBkYXRhID0gbWV0aG9kID09ICdQT1NUJyA/IHFzLnN0cmluZ2lmeShwYXJhbXMpIDogcGFyYW1zO1xuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICBoZWFkZXIsXG4gICAgICAgIHVybCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnd2VweSByZXF1ZXJzdCBlcnI6JyArIGVycik7XG4gICAgfSk7XG5cbiAgICBzaG93TG9kaW5nICYmIHRpcC5sb2FkZWQoKTtcblxuICAgIGlmIChyZXMpIHtcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xuICAgIH1cbn1cblxuLy8g6I635Y+W6aqM6K+B56CBXG5leHBvcnQgY29uc3QgZ2V0Q29kZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzbXNjb2RlJywgJ0dFVCcpOyJdfQ==