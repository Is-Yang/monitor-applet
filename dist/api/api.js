'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getUserByDept = exports.deviceList = exports.warnOptions = exports.warnList = exports.getWarningInfo = exports.updateWarning = exports.addWarning = exports.bindDept = exports.updateUser = exports.userLogout = exports.getUserInfo = exports.wechatByPhone = exports.decryptPhone = exports.wechatLogin = exports.getOpenid = exports.smsLogin = exports.getCode = undefined;

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
// 新增预警
var addWarning = exports.addWarning = function addWarning(params) {
    return wxRequest(params, 'yujing');
};
// 修改预警
var updateWarning = exports.updateWarning = function updateWarning(params) {
    return wxRequest(params, 'yujing', 'PUT');
};
// 根据预警Id获取详细信息
var getWarningInfo = exports.getWarningInfo = function getWarningInfo(params) {
    return wxRequest({}, 'yujing/' + params.yuJingId, 'GET');
};
// 获取预警列表
var warnList = exports.warnList = function warnList(params) {
    return wxRequest(params, 'yujing/list', 'GET');
};
// 获取预警等级选择框列表
var warnOptions = exports.warnOptions = function warnOptions(params) {
    return wxRequest(params, 'yujing/optionselect', 'GET');
};
// 获取设备列表
var deviceList = exports.deviceList = function deviceList(params) {
    return wxRequest(params, 'device/list', 'GET');
};
// 只有单位管理员可以获取单位下的用户列表
var getUserByDept = exports.getUserByDept = function getUserByDept() {
    return wxRequest({}, 'system/user/getUserListByDeptAdmin', 'GET');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93TG9kaW5nIiwidGlwIiwibG9hZGluZyIsImhlYWRlciIsInN0b3JlIiwiZ2xvYmFsRGF0YSIsImdldFN0YXRlIiwidXNlciIsInRva2VuIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImVudmlyb25tZW50IiwiZGF0YSIsInFzIiwic3RyaW5naWZ5Iiwid2VweSIsInJlcXVlc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJsb2FkZWQiLCJyZXN1bHQiLCJjb2RlIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJzZXRUaW1lb3V0IiwibmF2aWdhdGVUbyIsIm1zZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiZ2V0Q29kZSIsInNtc0xvZ2luIiwiZ2V0T3BlbmlkIiwid2VjaGF0TG9naW4iLCJkZWNyeXB0UGhvbmUiLCJ3ZWNoYXRCeVBob25lIiwiZ2V0VXNlckluZm8iLCJ1c2VyTG9nb3V0IiwidXBkYXRlVXNlciIsImJpbmREZXB0IiwiYWRkV2FybmluZyIsInVwZGF0ZVdhcm5pbmciLCJnZXRXYXJuaW5nSW5mbyIsInl1SmluZ0lkIiwid2Fybkxpc3QiLCJ3YXJuT3B0aW9ucyIsImRldmljZUxpc3QiLCJnZXRVc2VyQnlEZXB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUVBOzs7Ozs7OztBQUVBLElBQU1BO0FBQUEsdUVBQVk7QUFBQSxZQUFNQyxNQUFOLHVFQUFlLEVBQWY7QUFBQSxZQUFtQkMsR0FBbkI7QUFBQSxZQUF3QkMsTUFBeEIsdUVBQWlDLE1BQWpDO0FBQUEsWUFBeUNDLFVBQXpDLHVFQUFzRCxJQUF0RDs7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNkQSxzQ0FBY0MsY0FBSUMsT0FBSixFQUFkOztBQUVJQyw4QkFIVSxHQUdELEVBSEM7OztBQUtk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QVhBLFFBQVcsQ0FBQ2xELE1BQUQ7QUFBQSxXQUFZRCxVQUFVQyxNQUFWLEVBQWtCLGFBQWxCLEVBQWlDLEtBQWpDLENBQVo7QUFBQSxDQUFqQjtBQUNQO0FBQ08sSUFBTW1ELG9DQUFjLFNBQWRBLFdBQWMsQ0FBQ25ELE1BQUQ7QUFBQSxXQUFZRCxVQUFVQyxNQUFWLEVBQWtCLHFCQUFsQixFQUF5QyxLQUF6QyxDQUFaO0FBQUEsQ0FBcEI7QUFDUDtBQUNPLElBQU1vRCxrQ0FBYSxTQUFiQSxVQUFhLENBQUNwRCxNQUFEO0FBQUEsV0FBWUQsVUFBVUMsTUFBVixFQUFrQixhQUFsQixFQUFpQyxLQUFqQyxDQUFaO0FBQUEsQ0FBbkI7QUFDUDtBQUNPLElBQU1xRCx3Q0FBZ0IsU0FBaEJBLGFBQWdCO0FBQUEsV0FBTXRELFVBQVUsRUFBVixFQUFjLG9DQUFkLEVBQW9ELEtBQXBELENBQU47QUFBQSxDQUF0QiIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuaW1wb3J0IHtcbiAgICBnZXRTdG9yZVxufSBmcm9tICd3ZXB5LXJlZHV4J1xuaW1wb3J0IHRpcCBmcm9tICcuLi91dGlscy90aXAnXG5cbmltcG9ydCBxcyBmcm9tICdxcyc7XG5cbmNvbnN0IHd4UmVxdWVzdCA9IGFzeW5jKHBhcmFtcyA9IHt9LCB1cmwsIG1ldGhvZCA9ICdQT1NUJywgc2hvd0xvZGluZyA9IHRydWUpID0+IHtcbiAgICBzaG93TG9kaW5nICYmIHRpcC5sb2FkaW5nKCk7XG5cbiAgICBsZXQgaGVhZGVyID0ge307XG5cbiAgICBpZiAobWV0aG9kID09ICdQVVQnKSB7XG4gICAgICAgIGhlYWRlclsnY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbidcbiAgICB9IGVsc2Uge1xuICAgICAgICBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCdcbiAgICB9XG5cbiAgICBjb25zdCBzdG9yZSA9IGdldFN0b3JlKCk7XG4gICAgbGV0IGdsb2JhbERhdGEgPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXIuZ2xvYmFsRGF0YTtcblxuICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xuXG4gICAgaWYgKHRva2VuKSB7XG4gICAgICAgIGhlYWRlclsnQXV0aG9yaXphdGlvbiddID0gdG9rZW47XG4gICAgfVxuICAgIGxldCBlbnZpcm9ubWVudCA9ICd0ZXN0JztcbiAgICBpZiAoZW52aXJvbm1lbnQgPT0gJ3Byb2QnKSB7XG4gICAgICAgIHVybCA9ICdodHRwczovL3RjYi1hcGkudGVuY2VudGNsb3VkYXBpLmNvbScgKyB1cmw7XG4gICAgfSBlbHNlIGlmIChlbnZpcm9ubWVudCA9PSAndGVzdCcpIHtcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vYmVpZG91LnNpZ25hbGZpcmUubmV0LmNuLycgKyB1cmw7XG4gICAgICAgIC8vIHVybCA9ICdodHRwczovL21vY2suYXBpLnNpZ25hbGZpcmUubmV0LmNuL21vY2svNWU2ZTMzZTMyOTVhMjc0MzYzNzk3NDMzL2V4YW1wbGUvJyArIHVybDtcbiAgICB9XG4gICAgbGV0IGRhdGEgPSBtZXRob2QgPT0gJ1BPU1QnID8gcXMuc3RyaW5naWZ5KHBhcmFtcykgOiBwYXJhbXM7XG5cbiAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICB1cmwsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3dlcHkgcmVxdWVyc3QgZXJyOicgKyBlcnIpO1xuICAgIH0pO1xuXG4gICAgc2hvd0xvZGluZyAmJiB0aXAubG9hZGVkKCk7XG5cbiAgICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSByZXMuZGF0YTtcbiAgICAgICAgLy8g5pyq5o6I5p2DXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDEpIHtcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xuICAgICAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ3Rva2VuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNTAwICYmIHJlc3VsdC5tc2cpIHtcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3VsdC5tc2csXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICB9XG59XG5cbi8vIOiOt+WPlumqjOivgeeggVxuZXhwb3J0IGNvbnN0IGdldENvZGUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc21zY29kZScsICdHRVQnKVxuLy8g55+t5L+h6aqM6K+B56CB55m75b2VXG5leHBvcnQgY29uc3Qgc21zTG9naW4gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc21zbG9naW4nKVxuLy8g6I635Y+W5b6u5L+hb3BlbklkXG5leHBvcnQgY29uc3QgZ2V0T3BlbmlkID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ2dldE9wZW5pZCcpXG4vLyDlvq7kv6HmjojmnYPnmbvlvZVcbmV4cG9ydCBjb25zdCB3ZWNoYXRMb2dpbiA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd3ZWNoYXRsb2dpbicpXG4vLyDop6Plr4blvq7kv6HmiYvmnLrlj7dcbmV4cG9ydCBjb25zdCBkZWNyeXB0UGhvbmUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnZGVjcnlwdFdlQ2hhdFBob25lTnVtYmVyJyk7XG4vLyDlvq7kv6HmjojmnYPnmbvlvZUgLSDmiYvliqjlvZXlhaXmiYvmnLrlj7dcbmV4cG9ydCBjb25zdCB3ZWNoYXRCeVBob25lID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3dldENoYXRMb2dpbkJ5UGhvbmVOdW1iZXInKVxuLy8g6I635Y+W55So5oi35L+h5oGvXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSAoKSA9PiB3eFJlcXVlc3Qoe30sICdnZXRJbmZvJywgJ0dFVCcpXG4vLyDpgIDlh7rnmbvlvZVcbmV4cG9ydCBjb25zdCB1c2VyTG9nb3V0ID0gKCkgPT4gd3hSZXF1ZXN0KHt9LCAnbG9nb3V0Jylcbi8vIOS/ruaUueeUqOaIt+S/oeaBr1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc3lzdGVtL3VzZXIvcHJvZmlsZScsICdQVVQnKVxuLy8g57uR5a6a5Y2V5L2NXG5leHBvcnQgY29uc3QgYmluZERlcHQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc3lzdGVtL3VzZXIvcHJvZmlsZS9iaW5kRGVwdCcsICdQVVQnKVxuLy8g5paw5aKe6aKE6K2mXG5leHBvcnQgY29uc3QgYWRkV2FybmluZyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd5dWppbmcnKVxuLy8g5L+u5pS56aKE6K2mXG5leHBvcnQgY29uc3QgdXBkYXRlV2FybmluZyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd5dWppbmcnLCAnUFVUJylcbi8vIOagueaNrumihOitpklk6I635Y+W6K+m57uG5L+h5oGvXG5leHBvcnQgY29uc3QgZ2V0V2FybmluZ0luZm8gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3Qoe30sICd5dWppbmcvJyArIHBhcmFtcy55dUppbmdJZCwgJ0dFVCcpXG4vLyDojrflj5bpooTorabliJfooahcbmV4cG9ydCBjb25zdCB3YXJuTGlzdCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd5dWppbmcvbGlzdCcsICdHRVQnKVxuLy8g6I635Y+W6aKE6K2m562J57qn6YCJ5oup5qGG5YiX6KGoXG5leHBvcnQgY29uc3Qgd2Fybk9wdGlvbnMgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAneXVqaW5nL29wdGlvbnNlbGVjdCcsICdHRVQnKVxuLy8g6I635Y+W6K6+5aSH5YiX6KGoXG5leHBvcnQgY29uc3QgZGV2aWNlTGlzdCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdkZXZpY2UvbGlzdCcsICdHRVQnKSBcbi8vIOWPquacieWNleS9jeeuoeeQhuWRmOWPr+S7peiOt+WPluWNleS9jeS4i+eahOeUqOaIt+WIl+ihqFxuZXhwb3J0IGNvbnN0IGdldFVzZXJCeURlcHQgPSAoKSA9PiB3eFJlcXVlc3Qoe30sICdzeXN0ZW0vdXNlci9nZXRVc2VyTGlzdEJ5RGVwdEFkbWluJywgJ0dFVCcpIl19