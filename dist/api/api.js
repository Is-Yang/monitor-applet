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

                        header = {};


                        if (method == 'PUT') {
                            header['content-type'] = 'application/json';
                        } else {
                            header['content-type'] = 'application/x-www-form-urlencoded';
                        }

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
                        data = method == 'POST' ? _qs2.default.stringify(params) : params;
                        _context.next = 12;
                        return _wepy2.default.request({
                            header: header,
                            url: url,
                            method: method,
                            data: data
                        }).catch(function (err) {
                            console.log('wepy requerst err:' + err);
                        });

                    case 12:
                        res = _context.sent;


                        showLoding && _tip2.default.loaded();

                        if (!(res && res.data)) {
                            _context.next = 19;
                            break;
                        }

                        result = res.data;
                        // 未授权

                        if (result.code == 401) {
                            wx.navigateTo({
                                url: '/pages/login'
                            });
                        }

                        if (result.code == 500 && result.msg) {
                            wx.showToast({
                                title: result.msg,
                                icon: 'none',
                                duration: 1500
                            });
                        }
                        return _context.abrupt('return', res.data);

                    case 19:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93TG9kaW5nIiwidGlwIiwibG9hZGluZyIsImhlYWRlciIsInN0b3JlIiwiZ2xvYmFsRGF0YSIsImdldFN0YXRlIiwidXNlciIsInRva2VuIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImVudmlyb25tZW50IiwiZGF0YSIsInFzIiwic3RyaW5naWZ5Iiwid2VweSIsInJlcXVlc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJsb2FkZWQiLCJyZXN1bHQiLCJjb2RlIiwibmF2aWdhdGVUbyIsIm1zZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiZ2V0Q29kZSIsInNtc0xvZ2luIiwid2VjaGF0TG9naW4iLCJnZXRVc2VySW5mbyIsInVzZXJMb2dvdXQiLCJnZXRPcGVuaWQiLCJ1cGRhdGVVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUVBOzs7Ozs7OztBQUVBLElBQU1BO0FBQUEsdUVBQVk7QUFBQSxZQUFNQyxNQUFOLHVFQUFlLEVBQWY7QUFBQSxZQUFtQkMsR0FBbkI7QUFBQSxZQUF3QkMsTUFBeEIsdUVBQWlDLE1BQWpDO0FBQUEsWUFBeUNDLFVBQXpDLHVFQUFzRCxJQUF0RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEEsc0NBQWNDLGNBQUlDLE9BQUosRUFBZDs7QUFFSUMsOEJBSFUsR0FHRCxFQUhDOzs7QUFLZCw0QkFBSUosVUFBVSxLQUFkLEVBQXFCO0FBQ2pCSSxtQ0FBTyxjQUFQLElBQXlCLGtCQUF6QjtBQUNILHlCQUZELE1BRU87QUFDSEEsbUNBQU8sY0FBUCxJQUF5QixtQ0FBekI7QUFDSDs7QUFFS0MsNkJBWFEsR0FXQSwwQkFYQTtBQVlWQyxrQ0FaVSxHQVlHRCxNQUFNRSxRQUFOLEdBQWlCQyxJQUFqQixDQUFzQkYsVUFaekI7QUFjVkcsNkJBZFUsR0FjRkMsR0FBR0MsY0FBSCxDQUFrQixPQUFsQixDQWRFOzs7QUFnQmQsNEJBQUlGLEtBQUosRUFBVztBQUNQTCxtQ0FBTyxlQUFQLElBQTBCSyxLQUExQjtBQUNIO0FBQ0dHLG1DQW5CVSxHQW1CSSxNQW5CSjs7QUFvQmQsNEJBQUlBLGVBQWUsTUFBbkIsRUFBMkI7QUFDdkJiLGtDQUFNLHdDQUF3Q0EsR0FBOUM7QUFDSCx5QkFGRCxNQUVPLElBQUlhLGVBQWUsTUFBbkIsRUFBMkI7QUFDOUJiLGtDQUFNLHNDQUFzQ0EsR0FBNUM7QUFDQTtBQUNIO0FBQ0djLDRCQTFCVSxHQTBCSGIsVUFBVSxNQUFWLEdBQW1CYyxhQUFHQyxTQUFILENBQWFqQixNQUFiLENBQW5CLEdBQTBDQSxNQTFCdkM7QUFBQTtBQUFBLCtCQTRCRWtCLGVBQUtDLE9BQUwsQ0FBYTtBQUN6QmIsMENBRHlCO0FBRXpCTCxvQ0FGeUI7QUFHekJDLG9DQUFRQSxNQUhpQjtBQUl6QmEsa0NBQU1BO0FBSm1CLHlCQUFiLEVBS2JLLEtBTGEsQ0FLUCxVQUFDQyxHQUFELEVBQVM7QUFDZEMsb0NBQVFDLEdBQVIsQ0FBWSx1QkFBdUJGLEdBQW5DO0FBQ0gseUJBUGUsQ0E1QkY7O0FBQUE7QUE0QlZHLDJCQTVCVTs7O0FBcUNkckIsc0NBQWNDLGNBQUlxQixNQUFKLEVBQWQ7O0FBckNjLDhCQXVDVkQsT0FBT0EsSUFBSVQsSUF2Q0Q7QUFBQTtBQUFBO0FBQUE7O0FBd0NOVyw4QkF4Q00sR0F3Q0dGLElBQUlULElBeENQO0FBeUNWOztBQUNBLDRCQUFJVyxPQUFPQyxJQUFQLElBQWUsR0FBbkIsRUFBd0I7QUFDcEJmLCtCQUFHZ0IsVUFBSCxDQUFjO0FBQ1YzQixxQ0FBSztBQURLLDZCQUFkO0FBR0g7O0FBRUQsNEJBQUl5QixPQUFPQyxJQUFQLElBQWUsR0FBZixJQUFzQkQsT0FBT0csR0FBakMsRUFBc0M7QUFDbENqQiwrQkFBR2tCLFNBQUgsQ0FBYTtBQUNUQyx1Q0FBT0wsT0FBT0csR0FETDtBQUVURyxzQ0FBTSxNQUZHO0FBR1RDLDBDQUFVO0FBSEQsNkJBQWI7QUFLSDtBQXREUyx5REF1REhULElBQUlULElBdkREOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVo7O0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBTjs7QUEyREE7QUFDTyxJQUFNbUIsNEJBQVUsU0FBVkEsT0FBVSxDQUFDbEMsTUFBRDtBQUFBLFdBQVlELFVBQVVDLE1BQVYsRUFBa0IsU0FBbEIsRUFBNkIsS0FBN0IsQ0FBWjtBQUFBLENBQWhCO0FBQ0g7QUFDRyxJQUFNbUMsOEJBQVcsU0FBWEEsUUFBVyxDQUFDbkMsTUFBRDtBQUFBLFdBQVlELFVBQVVDLE1BQVYsRUFBa0IsVUFBbEIsQ0FBWjtBQUFBLENBQWpCO0FBQ0g7QUFDRyxJQUFNb0Msb0NBQWMsU0FBZEEsV0FBYyxDQUFDcEMsTUFBRDtBQUFBLFdBQVlELFVBQVVDLE1BQVYsRUFBa0IsYUFBbEIsQ0FBWjtBQUFBLENBQXBCO0FBQ0g7QUFDRyxJQUFNcUMsb0NBQWMsU0FBZEEsV0FBYztBQUFBLFdBQU10QyxVQUFVLEVBQVYsRUFBYyxTQUFkLEVBQXlCLEtBQXpCLENBQU47QUFBQSxDQUFwQjtBQUNIO0FBQ0csSUFBTXVDLGtDQUFhLFNBQWJBLFVBQWE7QUFBQSxXQUFNdkMsVUFBVSxFQUFWLEVBQWMsUUFBZCxDQUFOO0FBQUEsQ0FBbkI7QUFDSDtBQUNHLElBQU13QyxnQ0FBWSxTQUFaQSxTQUFZLENBQUN2QyxNQUFEO0FBQUEsV0FBWUQsVUFBVUMsTUFBVixFQUFrQixXQUFsQixDQUFaO0FBQUEsQ0FBbEI7QUFDSDtBQUNHLElBQU13QyxrQ0FBYSxTQUFiQSxVQUFhLENBQUN4QyxNQUFEO0FBQUEsV0FBWUQsVUFBVUMsTUFBVixFQUFrQixxQkFBbEIsRUFBeUMsS0FBekMsQ0FBWjtBQUFBLENBQW5CIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQge1xuICAgIGdldFN0b3JlXG59IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcblxuaW1wb3J0IHFzIGZyb20gJ3FzJztcblxuY29uc3Qgd3hSZXF1ZXN0ID0gYXN5bmMocGFyYW1zID0ge30sIHVybCwgbWV0aG9kID0gJ1BPU1QnLCBzaG93TG9kaW5nID0gdHJ1ZSkgPT4ge1xuICAgIHNob3dMb2RpbmcgJiYgdGlwLmxvYWRpbmcoKTtcblxuICAgIGxldCBoZWFkZXIgPSB7fTtcblxuICAgIGlmIChtZXRob2QgPT0gJ1BVVCcpIHtcbiAgICAgICAgaGVhZGVyWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlclsnY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKTtcbiAgICBsZXQgZ2xvYmFsRGF0YSA9IHN0b3JlLmdldFN0YXRlKCkudXNlci5nbG9iYWxEYXRhO1xuXG4gICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgaGVhZGVyWydBdXRob3JpemF0aW9uJ10gPSB0b2tlbjtcbiAgICB9XG4gICAgbGV0IGVudmlyb25tZW50ID0gJ3Rlc3QnO1xuICAgIGlmIChlbnZpcm9ubWVudCA9PSAncHJvZCcpIHtcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vdGNiLWFwaS50ZW5jZW50Y2xvdWRhcGkuY29tJyArIHVybDtcbiAgICB9IGVsc2UgaWYgKGVudmlyb25tZW50ID09ICd0ZXN0Jykge1xuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9iZWlkb3Uuc2lnbmFsZmlyZS5uZXQuY24vJyArIHVybDtcbiAgICAgICAgLy8gdXJsID0gJ2h0dHBzOi8vbW9jay5hcGkuc2lnbmFsZmlyZS5uZXQuY24vbW9jay81ZTZlMzNlMzI5NWEyNzQzNjM3OTc0MzMvZXhhbXBsZS8nICsgdXJsO1xuICAgIH1cbiAgICBsZXQgZGF0YSA9IG1ldGhvZCA9PSAnUE9TVCcgPyBxcy5zdHJpbmdpZnkocGFyYW1zKSA6IHBhcmFtcztcblxuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICBoZWFkZXIsXG4gICAgICAgIHVybCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnd2VweSByZXF1ZXJzdCBlcnI6JyArIGVycik7XG4gICAgfSk7XG5cbiAgICBzaG93TG9kaW5nICYmIHRpcC5sb2FkZWQoKTtcblxuICAgIGlmIChyZXMgJiYgcmVzLmRhdGEpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlcy5kYXRhO1xuICAgICAgICAvLyDmnKrmjojmnYNcbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMSkge1xuICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA1MDAgJiYgcmVzdWx0Lm1zZykge1xuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzdWx0Lm1zZyxcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xuICAgIH1cbn1cblxuLy8g6I635Y+W6aqM6K+B56CBXG5leHBvcnQgY29uc3QgZ2V0Q29kZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzbXNjb2RlJywgJ0dFVCcpXG4gICAgLy8g55+t5L+h6aqM6K+B56CB55m75b2VXG5leHBvcnQgY29uc3Qgc21zTG9naW4gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc21zbG9naW4nKVxuICAgIC8vIOW+ruS/oeaOiOadg+eZu+W9lVxuZXhwb3J0IGNvbnN0IHdlY2hhdExvZ2luID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3dlY2hhdGxvZ2luJylcbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ2dldEluZm8nLCAnR0VUJylcbiAgICAvLyDpgIDlh7rnmbvlvZVcbmV4cG9ydCBjb25zdCB1c2VyTG9nb3V0ID0gKCkgPT4gd3hSZXF1ZXN0KHt9LCAnbG9nb3V0JylcbiAgICAvLyDojrflj5blvq7kv6FvcGVuSWRcbmV4cG9ydCBjb25zdCBnZXRPcGVuaWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnZ2V0T3BlbmlkJylcbiAgICAvLyDkv67mlLnnlKjmiLfkv6Hmga9cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3N5c3RlbS91c2VyL3Byb2ZpbGUnLCAnUFVUJykiXX0=