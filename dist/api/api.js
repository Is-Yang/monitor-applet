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
        var showLoding = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
        var header, store, globalData, environment, res;
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
                            url = 'https://beidou.signalfire.net.cn' + url;
                        }

                        _context.next = 8;
                        return _wepy2.default.request({
                            url: url,
                            method: 'POST',
                            data: _qs2.default.stringify(params),
                            header: header
                        }).catch(function (err) {
                            console.log('wepy requerst err:' + err);
                        });

                    case 8:
                        res = _context.sent;


                        showLoding && _tip2.default.loaded();

                        if (!res) {
                            _context.next = 12;
                            break;
                        }

                        return _context.abrupt('return', res.data);

                    case 12:
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
    return wxRequest(params, '');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJzaG93TG9kaW5nIiwidGlwIiwibG9hZGluZyIsImhlYWRlciIsInN0b3JlIiwiZ2xvYmFsRGF0YSIsImdldFN0YXRlIiwidXNlciIsImVudmlyb25tZW50Iiwid2VweSIsInJlcXVlc3QiLCJtZXRob2QiLCJkYXRhIiwicXMiLCJzdHJpbmdpZnkiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJsb2FkZWQiLCJnZXRDb2RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUVBOzs7Ozs7OztBQUVBLElBQU1BO0FBQUEsdUVBQVk7QUFBQSxZQUFNQyxNQUFOLHVFQUFlLEVBQWY7QUFBQSxZQUFtQkMsR0FBbkI7QUFBQSxZQUF3QkMsVUFBeEIsdUVBQXFDLElBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQSxzQ0FBY0MsY0FBSUMsT0FBSixFQUFkOztBQUVJQyw4QkFIVSxHQUdEO0FBQ1QsNENBQWdCO0FBRFAseUJBSEM7QUFPUkMsNkJBUFEsR0FPQSwwQkFQQTtBQVFWQyxrQ0FSVSxHQVFHRCxNQUFNRSxRQUFOLEdBQWlCQyxJQUFqQixDQUFzQkYsVUFSekI7QUFTVkcsbUNBVFUsR0FTSSxNQVRKOztBQVVkLDRCQUFJQSxlQUFlLE1BQW5CLEVBQTJCO0FBQ3ZCVCxrQ0FBTSx3Q0FBd0NBLEdBQTlDO0FBQ0gseUJBRkQsTUFFTyxJQUFJUyxlQUFlLE1BQW5CLEVBQTJCO0FBQzlCVCxrQ0FBTSxxQ0FBcUNBLEdBQTNDO0FBQ0g7O0FBZGE7QUFBQSwrQkFnQkVVLGVBQUtDLE9BQUwsQ0FBYTtBQUN6Qlgsb0NBRHlCO0FBRXpCWSxvQ0FBUSxNQUZpQjtBQUd6QkMsa0NBQU1DLGFBQUdDLFNBQUgsQ0FBYWhCLE1BQWIsQ0FIbUI7QUFJekJLO0FBSnlCLHlCQUFiLEVBS2JZLEtBTGEsQ0FLUCxVQUFDQyxHQUFELEVBQVM7QUFDZEMsb0NBQVFDLEdBQVIsQ0FBWSx1QkFBdUJGLEdBQW5DO0FBQ0gseUJBUGUsQ0FoQkY7O0FBQUE7QUFnQlZHLDJCQWhCVTs7O0FBeUJkbkIsc0NBQWNDLGNBQUltQixNQUFKLEVBQWQ7O0FBekJjLDZCQTJCVkQsR0EzQlU7QUFBQTtBQUFBO0FBQUE7O0FBQUEseURBNEJIQSxJQUFJUCxJQTVCRDs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUFaOztBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQU47O0FBZ0NBO0FBQ08sSUFBTVMsNEJBQVUsU0FBVkEsT0FBVSxDQUFDdkIsTUFBRDtBQUFBLFdBQVlELFVBQVVDLE1BQVYsRUFBa0IsRUFBbEIsQ0FBWjtBQUFBLENBQWhCIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbmltcG9ydCB7XHJcbiAgICBnZXRTdG9yZVxyXG59IGZyb20gJ3dlcHktcmVkdXgnXHJcbmltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJ1xyXG5cclxuaW1wb3J0IHFzIGZyb20gJ3FzJztcclxuXHJcbmNvbnN0IHd4UmVxdWVzdCA9IGFzeW5jKHBhcmFtcyA9IHt9LCB1cmwsIHNob3dMb2RpbmcgPSB0cnVlKSA9PiB7XHJcbiAgICBzaG93TG9kaW5nICYmIHRpcC5sb2FkaW5nKCk7XHJcblxyXG4gICAgbGV0IGhlYWRlciA9IHtcclxuICAgICAgICAnY29udGVudC10eXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcclxuICAgIH07XHJcblxyXG4gICAgY29uc3Qgc3RvcmUgPSBnZXRTdG9yZSgpO1xyXG4gICAgbGV0IGdsb2JhbERhdGEgPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXIuZ2xvYmFsRGF0YTtcclxuICAgIGxldCBlbnZpcm9ubWVudCA9ICd0ZXN0JztcclxuICAgIGlmIChlbnZpcm9ubWVudCA9PSAncHJvZCcpIHtcclxuICAgICAgICB1cmwgPSAnaHR0cHM6Ly90Y2ItYXBpLnRlbmNlbnRjbG91ZGFwaS5jb20nICsgdXJsO1xyXG4gICAgfSBlbHNlIGlmIChlbnZpcm9ubWVudCA9PSAndGVzdCcpIHtcclxuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9iZWlkb3Uuc2lnbmFsZmlyZS5uZXQuY24nICsgdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIHVybCxcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBkYXRhOiBxcy5zdHJpbmdpZnkocGFyYW1zKSxcclxuICAgICAgICBoZWFkZXJcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnd2VweSByZXF1ZXJzdCBlcnI6JyArIGVycik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzaG93TG9kaW5nICYmIHRpcC5sb2FkZWQoKTtcclxuXHJcbiAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyDojrflj5bpqozor4HnoIFcclxuZXhwb3J0IGNvbnN0IGdldENvZGUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnJyk7Il19