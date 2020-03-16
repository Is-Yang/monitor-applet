'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.wechatLogin = exports.smsLogin = exports.getCode = undefined;

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

                        if (!(res && res.data)) {
                            _context.next = 15;
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

                    case 15:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93TG9kaW5nIiwidGlwIiwibG9hZGluZyIsImhlYWRlciIsInN0b3JlIiwiZ2xvYmFsRGF0YSIsImdldFN0YXRlIiwidXNlciIsImVudmlyb25tZW50IiwiZGF0YSIsInFzIiwic3RyaW5naWZ5Iiwid2VweSIsInJlcXVlc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJsb2FkZWQiLCJyZXN1bHQiLCJjb2RlIiwid3giLCJuYXZpZ2F0ZVRvIiwiZ2V0Q29kZSIsInNtc0xvZ2luIiwid2VjaGF0TG9naW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7OztBQUNBOztBQUdBOzs7O0FBRUE7Ozs7Ozs7O0FBRUEsSUFBTUE7QUFBQSx1RUFBWTtBQUFBLFlBQU1DLE1BQU4sdUVBQWUsRUFBZjtBQUFBLFlBQW1CQyxHQUFuQjtBQUFBLFlBQXdCQyxNQUF4Qix1RUFBaUMsTUFBakM7QUFBQSxZQUF5Q0MsVUFBekMsdUVBQXNELElBQXREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQSxzQ0FBY0MsY0FBSUMsT0FBSixFQUFkOztBQUVJQyw4QkFIVSxHQUdEO0FBQ1QsNENBQWdCO0FBRFAseUJBSEM7QUFPUkMsNkJBUFEsR0FPQSwwQkFQQTtBQVFWQyxrQ0FSVSxHQVFHRCxNQUFNRSxRQUFOLEdBQWlCQyxJQUFqQixDQUFzQkYsVUFSekI7QUFTVkcsbUNBVFUsR0FTSSxNQVRKOztBQVVkLDRCQUFJQSxlQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCVixrQ0FBTSx3Q0FBd0NBLEdBQTlDO0FBQ0gseUJBRkQsTUFFTyxJQUFJVSxlQUFlLE1BQW5CLEVBQTJCO0FBQzlCVixrQ0FBTSxzQ0FBc0NBLEdBQTVDO0FBQ0E7QUFDSDtBQUNHVyw0QkFoQlUsR0FnQkhWLFVBQVUsTUFBVixHQUFtQlcsYUFBR0MsU0FBSCxDQUFhZCxNQUFiLENBQW5CLEdBQTBDQSxNQWhCdkM7QUFBQTtBQUFBLCtCQWlCRWUsZUFBS0MsT0FBTCxDQUFhO0FBQ3pCViwwQ0FEeUI7QUFFekJMLG9DQUZ5QjtBQUd6QkMsb0NBQVFBLE1BSGlCO0FBSXpCVSxrQ0FBTUE7QUFKbUIseUJBQWIsRUFLYkssS0FMYSxDQUtQLFVBQUNDLEdBQUQsRUFBUztBQUNkQyxvQ0FBUUMsR0FBUixDQUFZLHVCQUF1QkYsR0FBbkM7QUFDSCx5QkFQZSxDQWpCRjs7QUFBQTtBQWlCVkcsMkJBakJVOzs7QUEwQmRsQixzQ0FBY0MsY0FBSWtCLE1BQUosRUFBZDs7QUExQmMsOEJBNEJWRCxPQUFPQSxJQUFJVCxJQTVCRDtBQUFBO0FBQUE7QUFBQTs7QUE2Qk5XLDhCQTdCTSxHQTZCR0YsSUFBSVQsSUE3QlA7QUE4QlY7O0FBQ0EsNEJBQUlXLE9BQU9DLElBQVAsSUFBZSxHQUFuQixFQUF3QjtBQUNwQkMsK0JBQUdDLFVBQUgsQ0FBYztBQUNWekIscUNBQUs7QUFESyw2QkFBZDtBQUdIO0FBbkNTLHlEQW9DSG9CLElBQUlULElBcENEOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUF3Q0E7QUFDTyxJQUFNZSw0QkFBVSxTQUFWQSxPQUFVLENBQUMzQixNQUFEO0FBQUEsV0FBWUQsVUFBVUMsTUFBVixFQUFrQixTQUFsQixFQUE2QixLQUE3QixDQUFaO0FBQUEsQ0FBaEI7QUFDUDtBQUNPLElBQU00Qiw4QkFBVyxTQUFYQSxRQUFXLENBQUM1QixNQUFEO0FBQUEsV0FBWUQsVUFBVUMsTUFBVixFQUFrQixVQUFsQixDQUFaO0FBQUEsQ0FBakI7QUFDUDtBQUNPLElBQU02QixvQ0FBYyxTQUFkQSxXQUFjLENBQUM3QixNQUFEO0FBQUEsV0FBWUQsVUFBVUMsTUFBVixFQUFrQixhQUFsQixDQUFaO0FBQUEsQ0FBcEIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHtcclxuICAgIGdldFN0b3JlXHJcbn0gZnJvbSAnd2VweS1yZWR1eCdcclxuaW1wb3J0IHRpcCBmcm9tICcuLi91dGlscy90aXAnXHJcblxyXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xyXG5cclxuY29uc3Qgd3hSZXF1ZXN0ID0gYXN5bmMocGFyYW1zID0ge30sIHVybCwgbWV0aG9kID0gJ1BPU1QnLCBzaG93TG9kaW5nID0gdHJ1ZSkgPT4ge1xyXG4gICAgc2hvd0xvZGluZyAmJiB0aXAubG9hZGluZygpO1xyXG5cclxuICAgIGxldCBoZWFkZXIgPSB7XHJcbiAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKTtcclxuICAgIGxldCBnbG9iYWxEYXRhID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyLmdsb2JhbERhdGE7XHJcbiAgICBsZXQgZW52aXJvbm1lbnQgPSAndGVzdCc7XHJcbiAgICBpZiAoZW52aXJvbm1lbnQgPT0gJ3Byb2QnKSB7XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vdGNiLWFwaS50ZW5jZW50Y2xvdWRhcGkuY29tJyArIHVybDtcclxuICAgIH0gZWxzZSBpZiAoZW52aXJvbm1lbnQgPT0gJ3Rlc3QnKSB7XHJcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vYmVpZG91LnNpZ25hbGZpcmUubmV0LmNuLycgKyB1cmw7XHJcbiAgICAgICAgLy8gdXJsID0gJ2h0dHBzOi8vbW9jay5hcGkuc2lnbmFsZmlyZS5uZXQuY24vbW9jay81ZTZlMzNlMzI5NWEyNzQzNjM3OTc0MzMvZXhhbXBsZS8nICsgdXJsO1xyXG4gICAgfVxyXG4gICAgbGV0IGRhdGEgPSBtZXRob2QgPT0gJ1BPU1QnID8gcXMuc3RyaW5naWZ5KHBhcmFtcykgOiBwYXJhbXM7XHJcbiAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcclxuICAgICAgICBoZWFkZXIsXHJcbiAgICAgICAgdXJsLFxyXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxyXG4gICAgICAgIGRhdGE6IGRhdGEsXHJcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ3dlcHkgcmVxdWVyc3QgZXJyOicgKyBlcnIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgc2hvd0xvZGluZyAmJiB0aXAubG9hZGVkKCk7XHJcblxyXG4gICAgaWYgKHJlcyAmJiByZXMuZGF0YSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSByZXMuZGF0YTtcclxuICAgICAgICAvLyDmnKrmjojmnYNcclxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAxKSB7XHJcbiAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luJ1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyDojrflj5bpqozor4HnoIFcclxuZXhwb3J0IGNvbnN0IGdldENvZGUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc21zY29kZScsICdHRVQnKTtcclxuLy8g55+t5L+h6aqM6K+B56CB55m75b2VXHJcbmV4cG9ydCBjb25zdCBzbXNMb2dpbiA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzbXNsb2dpbicpO1xyXG4vLyDlvq7kv6HmjojmnYPnmbvlvZVcclxuZXhwb3J0IGNvbnN0IHdlY2hhdExvZ2luID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3dlY2hhdGxvZ2luJyk7Il19