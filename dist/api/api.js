'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.bindDept = exports.updateUser = exports.userLogout = exports.getUserInfo = exports.wechatByPhone = exports.decryptPhone = exports.wechatLogin = exports.getOpenid = exports.smsLogin = exports.getCode = undefined;

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

        var header, store, globalData, token, environment, data, res, result, _token;

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
                            _token = wx.getStorageSync('token');

                            if (_token) {
                                wx.removeStorageSync('token');
                            }
                            setTimeout(function () {
                                wx.navigateTo({
                                    url: '/pages/login'
                                });
                            }, 1000);
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
// 获取微信openId
var getOpenid = exports.getOpenid = function getOpenid(params) {
    return wxRequest(params, 'getOpenid');
};
// 微信授权登录
var wechatLogin = exports.wechatLogin = function wechatLogin(params) {
    return wxRequest(params, 'wechatlogin');
};
// 解密微信手机号
var decryptPhone = exports.decryptPhone = function decryptPhone(params) {
    return wxRequest(params, 'decryptWeChatPhoneNumber');
};
// 微信授权登录 - 手动录入手机号
var wechatByPhone = exports.wechatByPhone = function wechatByPhone(params) {
    return wxRequest(params, 'wetChatLoginByPhoneNumber');
};
// 获取用户信息
var getUserInfo = exports.getUserInfo = function getUserInfo() {
    return wxRequest({}, 'getInfo', 'GET');
};
// 退出登录
var userLogout = exports.userLogout = function userLogout() {
    return wxRequest({}, 'logout');
};
// 修改用户信息
var updateUser = exports.updateUser = function updateUser(params) {
    return wxRequest(params, 'system/user/profile', 'PUT');
};
// 绑定单位
var bindDept = exports.bindDept = function bindDept(params) {
    return wxRequest(params, 'system/user/profile/bindDept', 'PUT');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93TG9kaW5nIiwidGlwIiwibG9hZGluZyIsImhlYWRlciIsInN0b3JlIiwiZ2xvYmFsRGF0YSIsImdldFN0YXRlIiwidXNlciIsInRva2VuIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImVudmlyb25tZW50IiwiZGF0YSIsInFzIiwic3RyaW5naWZ5Iiwid2VweSIsInJlcXVlc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJsb2FkZWQiLCJyZXN1bHQiLCJjb2RlIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJzZXRUaW1lb3V0IiwibmF2aWdhdGVUbyIsIm1zZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiZ2V0Q29kZSIsInNtc0xvZ2luIiwiZ2V0T3BlbmlkIiwid2VjaGF0TG9naW4iLCJkZWNyeXB0UGhvbmUiLCJ3ZWNoYXRCeVBob25lIiwiZ2V0VXNlckluZm8iLCJ1c2VyTG9nb3V0IiwidXBkYXRlVXNlciIsImJpbmREZXB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUVBOzs7Ozs7OztBQUVBLElBQU1BO0FBQUEsdUVBQVk7QUFBQSxZQUFNQyxNQUFOLHVFQUFlLEVBQWY7QUFBQSxZQUFtQkMsR0FBbkI7QUFBQSxZQUF3QkMsTUFBeEIsdUVBQWlDLE1BQWpDO0FBQUEsWUFBeUNDLFVBQXpDLHVFQUFzRCxJQUF0RDs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQSxzQ0FBY0MsY0FBSUMsT0FBSixFQUFkOztBQUVJQyw4QkFIVSxHQUdELEVBSEM7OztBQUtkLDRCQUFJSixVQUFVLEtBQWQsRUFBcUI7QUFDakJJLG1DQUFPLGNBQVAsSUFBeUIsa0JBQXpCO0FBQ0gseUJBRkQsTUFFTztBQUNIQSxtQ0FBTyxjQUFQLElBQXlCLG1DQUF6QjtBQUNIOztBQUVL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RCxVQUFVQyxNQUFWLEVBQWtCLDJCQUFsQixDQUFaO0FBQUEsQ0FBdEI7QUFDSDtBQUNHLElBQU0wQyxvQ0FBYyxTQUFkQSxXQUFjO0FBQUEsV0FBTTNDLFVBQVUsRUFBVixFQUFjLFNBQWQsRUFBeUIsS0FBekIsQ0FBTjtBQUFBLENBQXBCO0FBQ0g7QUFDRyxJQUFNNEMsa0NBQWEsU0FBYkEsVUFBYTtBQUFBLFdBQU01QyxVQUFVLEVBQVYsRUFBYyxRQUFkLENBQU47QUFBQSxDQUFuQjtBQUNIO0FBQ0csSUFBTTZDLGtDQUFhLFNBQWJBLFVBQWEsQ0FBQzVDLE1BQUQ7QUFBQSxXQUFZRCxVQUFVQyxNQUFWLEVBQWtCLHFCQUFsQixFQUF5QyxLQUF6QyxDQUFaO0FBQUEsQ0FBbkI7QUFDSDtBQUNHLElBQU02Qyw4QkFBVyxTQUFYQSxRQUFXLENBQUM3QyxNQUFEO0FBQUEsV0FBWUQsVUFBVUMsTUFBVixFQUFrQiw4QkFBbEIsRUFBa0QsS0FBbEQsQ0FBWjtBQUFBLENBQWpCIiwiZmlsZSI6ImFwaS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQge1xuICAgIGdldFN0b3JlXG59IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcblxuaW1wb3J0IHFzIGZyb20gJ3FzJztcblxuY29uc3Qgd3hSZXF1ZXN0ID0gYXN5bmMocGFyYW1zID0ge30sIHVybCwgbWV0aG9kID0gJ1BPU1QnLCBzaG93TG9kaW5nID0gdHJ1ZSkgPT4ge1xuICAgIHNob3dMb2RpbmcgJiYgdGlwLmxvYWRpbmcoKTtcblxuICAgIGxldCBoZWFkZXIgPSB7fTtcblxuICAgIGlmIChtZXRob2QgPT0gJ1BVVCcpIHtcbiAgICAgICAgaGVhZGVyWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlclsnY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgIH1cblxuICAgIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKTtcbiAgICBsZXQgZ2xvYmFsRGF0YSA9IHN0b3JlLmdldFN0YXRlKCkudXNlci5nbG9iYWxEYXRhO1xuXG4gICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgaGVhZGVyWydBdXRob3JpemF0aW9uJ10gPSB0b2tlbjtcbiAgICB9XG4gICAgbGV0IGVudmlyb25tZW50ID0gJ3Rlc3QnO1xuICAgIGlmIChlbnZpcm9ubWVudCA9PSAncHJvZCcpIHtcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vdGNiLWFwaS50ZW5jZW50Y2xvdWRhcGkuY29tJyArIHVybDtcbiAgICB9IGVsc2UgaWYgKGVudmlyb25tZW50ID09ICd0ZXN0Jykge1xuICAgICAgICB1cmwgPSAnaHR0cHM6Ly9iZWlkb3Uuc2lnbmFsZmlyZS5uZXQuY24vJyArIHVybDtcbiAgICAgICAgLy8gdXJsID0gJ2h0dHBzOi8vbW9jay5hcGkuc2lnbmFsZmlyZS5uZXQuY24vbW9jay81ZTZlMzNlMzI5NWEyNzQzNjM3OTc0MzMvZXhhbXBsZS8nICsgdXJsO1xuICAgIH1cbiAgICBsZXQgZGF0YSA9IG1ldGhvZCA9PSAnUE9TVCcgPyBxcy5zdHJpbmdpZnkocGFyYW1zKSA6IHBhcmFtcztcblxuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xuICAgICAgICBoZWFkZXIsXG4gICAgICAgIHVybCxcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXG4gICAgICAgIGRhdGE6IGRhdGEsXG4gICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnd2VweSByZXF1ZXJzdCBlcnI6JyArIGVycik7XG4gICAgfSk7XG5cbiAgICBzaG93TG9kaW5nICYmIHRpcC5sb2FkZWQoKTtcblxuICAgIGlmIChyZXMgJiYgcmVzLmRhdGEpIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlcy5kYXRhO1xuICAgICAgICAvLyDmnKrmjojmnYNcbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDQwMSkge1xuICAgICAgICAgICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XG4gICAgICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICB3eC5yZW1vdmVTdG9yYWdlU3luYygndG9rZW4nKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dpbidcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSwgMTAwMClcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA1MDAgJiYgcmVzdWx0Lm1zZykge1xuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgICAgICAgICB0aXRsZTogcmVzdWx0Lm1zZyxcbiAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xuICAgIH1cbn1cblxuLy8g6I635Y+W6aqM6K+B56CBXG5leHBvcnQgY29uc3QgZ2V0Q29kZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzbXNjb2RlJywgJ0dFVCcpXG4gICAgLy8g55+t5L+h6aqM6K+B56CB55m75b2VXG5leHBvcnQgY29uc3Qgc21zTG9naW4gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc21zbG9naW4nKVxuICAgIC8vIOiOt+WPluW+ruS/oW9wZW5JZFxuZXhwb3J0IGNvbnN0IGdldE9wZW5pZCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdnZXRPcGVuaWQnKVxuICAgIC8vIOW+ruS/oeaOiOadg+eZu+W9lVxuZXhwb3J0IGNvbnN0IHdlY2hhdExvZ2luID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3dlY2hhdGxvZ2luJylcbiAgICAvLyDop6Plr4blvq7kv6HmiYvmnLrlj7dcbmV4cG9ydCBjb25zdCBkZWNyeXB0UGhvbmUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnZGVjcnlwdFdlQ2hhdFBob25lTnVtYmVyJyk7XG4vLyDlvq7kv6HmjojmnYPnmbvlvZUgLSDmiYvliqjlvZXlhaXmiYvmnLrlj7dcbmV4cG9ydCBjb25zdCB3ZWNoYXRCeVBob25lID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3dldENoYXRMb2dpbkJ5UGhvbmVOdW1iZXInKVxuICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gKCkgPT4gd3hSZXF1ZXN0KHt9LCAnZ2V0SW5mbycsICdHRVQnKVxuICAgIC8vIOmAgOWHuueZu+W9lVxuZXhwb3J0IGNvbnN0IHVzZXJMb2dvdXQgPSAoKSA9PiB3eFJlcXVlc3Qoe30sICdsb2dvdXQnKVxuICAgIC8vIOS/ruaUueeUqOaIt+S/oeaBr1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc3lzdGVtL3VzZXIvcHJvZmlsZScsICdQVVQnKVxuICAgIC8vIOe7keWumuWNleS9jVxuZXhwb3J0IGNvbnN0IGJpbmREZXB0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3N5c3RlbS91c2VyL3Byb2ZpbGUvYmluZERlcHQnLCAnUFVUJykiXX0=