'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOperlog = exports.getParentDeptUser = exports.userChangeStatus = exports.getUserByDept = exports.deviceList = exports.warnOptions = exports.warnList = exports.getWarningInfo = exports.updateWarning = exports.addWarning = exports.bindDept = exports.updateUser = exports.userLogout = exports.getUserInfo = exports.wechatByPhone = exports.decryptPhone = exports.wechatLogin = exports.getOpenid = exports.smsLogin = exports.getCode = undefined;

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

                        console.log();

                        store = (0, _wepyRedux.getStore)();
                        globalData = store.getState().user.globalData;
                        token = wx.getStorageSync('token');


                        if (token) {
                            header['Authorization'] = token;
                        }
                        environment = _wepy2.default.$instance.globalData.env;

                        if (environment == 'prod') {
                            url = 'https://tcb-api.tencentcloudapi.com' + url;
                        } else if (environment == 'test') {
                            url = 'https://beidou.signalfire.net.cn/' + url;
                            // url = 'https://mock.api.signalfire.net.cn/mock/5e6e33e3295a274363797433/example/' + url;
                        }
                        data = method == 'POST' ? _qs2.default.stringify(params) : params;
                        _context.next = 13;
                        return _wepy2.default.request({
                            header: header,
                            url: url,
                            method: method,
                            data: data
                        }).catch(function (err) {
                            console.log('wepy requerst err:' + err);
                        });

                    case 13:
                        res = _context.sent;


                        showLoding && _tip2.default.loaded();

                        if (!(res && res.data)) {
                            _context.next = 20;
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

                    case 20:
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
    return wxRequest(params, 'yujing/add', 'PUT');
};
// 修改预警
var updateWarning = exports.updateWarning = function updateWarning(params) {
    return wxRequest(params, 'yujing/edit', 'PUT');
};
// 根据预警Id获取详细信息
var getWarningInfo = exports.getWarningInfo = function getWarningInfo(params) {
    return wxRequest({}, 'yujing/' + params.yuJingId, 'GET');
};
// 获取预警列表
var warnList = exports.warnList = function warnList(params) {
    return wxRequest(params, 'yujing/list2', 'GET');
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
    return wxRequest({}, 'system/user/getMy', 'GET');
};
// 用户设备状态修改
var userChangeStatus = exports.userChangeStatus = function userChangeStatus(params) {
    return wxRequest(params, 'system/user/userDeviceChangeStatus', 'PUT');
};
// 获取上级单位的用户列表
var getParentDeptUser = exports.getParentDeptUser = function getParentDeptUser() {
    return wxRequest({}, 'system/user/getpParentDeptUserlist', 'GET');
};
// 操作记录
var getOperlog = exports.getOperlog = function getOperlog(params) {
    return wxRequest(params, 'monitor/operlog/list', 'GET');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93TG9kaW5nIiwidGlwIiwibG9hZGluZyIsImhlYWRlciIsImNvbnNvbGUiLCJsb2ciLCJzdG9yZSIsImdsb2JhbERhdGEiLCJnZXRTdGF0ZSIsInVzZXIiLCJ0b2tlbiIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJlbnZpcm9ubWVudCIsIndlcHkiLCIkaW5zdGFuY2UiLCJlbnYiLCJkYXRhIiwicXMiLCJzdHJpbmdpZnkiLCJyZXF1ZXN0IiwiY2F0Y2giLCJlcnIiLCJyZXMiLCJsb2FkZWQiLCJyZXN1bHQiLCJjb2RlIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJzZXRUaW1lb3V0IiwibmF2aWdhdGVUbyIsIm1zZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiZ2V0Q29kZSIsInNtc0xvZ2luIiwiZ2V0T3BlbmlkIiwid2VjaGF0TG9naW4iLCJkZWNyeXB0UGhvbmUiLCJ3ZWNoYXRCeVBob25lIiwiZ2V0VXNlckluZm8iLCJ1c2VyTG9nb3V0IiwidXBkYXRlVXNlciIsImJpbmREZXB0IiwiYWRkV2FybmluZyIsInVwZGF0ZVdhcm5pbmciLCJnZXRXYXJuaW5nSW5mbyIsInl1SmluZ0lkIiwid2Fybkxpc3QiLCJ3YXJuT3B0aW9ucyIsImRldmljZUxpc3QiLCJnZXRVc2VyQnlEZXB0IiwidXNlckNoYW5nZVN0YXR1cyIsImdldFBhcmVudERlcHRVc2VyIiwiZ2V0T3BlcmxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNQTtBQUFBLHVFQUFZO0FBQUEsWUFBTUMsTUFBTix1RUFBZSxFQUFmO0FBQUEsWUFBbUJDLEdBQW5CO0FBQUEsWUFBd0JDLE1BQXhCLHVFQUFpQyxNQUFqQztBQUFBLFlBQXlDQyxVQUF6Qyx1RUFBc0QsSUFBdEQ7O0FBQUE7O0FBQUE7QUFB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cG9ydCB3ZXB5IGZyb20gJ3dlcHknXG5pbXBvcnQge1xuICAgIGdldFN0b3JlXG59IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcblxuaW1wb3J0IHFzIGZyb20gJ3FzJztcblxuY29uc3Qgd3hSZXF1ZXN0ID0gYXN5bmMocGFyYW1zID0ge30sIHVybCwgbWV0aG9kID0gJ1BPU1QnLCBzaG93TG9kaW5nID0gdHJ1ZSkgPT4ge1xuICAgIHNob3dMb2RpbmcgJiYgdGlwLmxvYWRpbmcoKTtcblxuICAgIGxldCBoZWFkZXIgPSB7fTtcblxuICAgIGlmIChtZXRob2QgPT0gJ1BVVCcpIHtcbiAgICAgICAgaGVhZGVyWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGhlYWRlclsnY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKClcblxuICAgIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKTtcbiAgICBsZXQgZ2xvYmFsRGF0YSA9IHN0b3JlLmdldFN0YXRlKCkudXNlci5nbG9iYWxEYXRhO1xuXG4gICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XG5cbiAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgaGVhZGVyWydBdXRob3JpemF0aW9uJ10gPSB0b2tlbjtcbiAgICB9XG4gICAgbGV0IGVudmlyb25tZW50ID0gd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5lbnY7XG4gICAgaWYgKGVudmlyb25tZW50ID09ICdwcm9kJykge1xuICAgICAgICB1cmwgPSAnaHR0cHM6Ly90Y2ItYXBpLnRlbmNlbnRjbG91ZGFwaS5jb20nICsgdXJsO1xuICAgIH0gZWxzZSBpZiAoZW52aXJvbm1lbnQgPT0gJ3Rlc3QnKSB7XG4gICAgICAgIHVybCA9ICdodHRwczovL2JlaWRvdS5zaWduYWxmaXJlLm5ldC5jbi8nICsgdXJsO1xuICAgICAgICAvLyB1cmwgPSAnaHR0cHM6Ly9tb2NrLmFwaS5zaWduYWxmaXJlLm5ldC5jbi9tb2NrLzVlNmUzM2UzMjk1YTI3NDM2Mzc5NzQzMy9leGFtcGxlLycgKyB1cmw7XG4gICAgfVxuICAgIGxldCBkYXRhID0gbWV0aG9kID09ICdQT1NUJyA/IHFzLnN0cmluZ2lmeShwYXJhbXMpIDogcGFyYW1zO1xuXG4gICAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgICAgIGhlYWRlcixcbiAgICAgICAgdXJsLFxuICAgICAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd3ZXB5IHJlcXVlcnN0IGVycjonICsgZXJyKTtcbiAgICB9KTtcblxuICAgIHNob3dMb2RpbmcgJiYgdGlwLmxvYWRlZCgpO1xuXG4gICAgaWYgKHJlcyAmJiByZXMuZGF0YSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gcmVzLmRhdGE7XG4gICAgICAgIC8vIOacquaOiOadg1xuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAxKSB7XG4gICAgICAgICAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xuICAgICAgICAgICAgICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKCd0b2tlbicpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL2xvZ2luJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LCAxMDAwKVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDUwMCAmJiByZXN1bHQubXNnKSB7XG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICAgICAgICAgIHRpdGxlOiByZXN1bHQubXNnLFxuICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzLmRhdGE7XG4gICAgfVxufVxuXG4vLyDojrflj5bpqozor4HnoIFcbmV4cG9ydCBjb25zdCBnZXRDb2RlID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3Ntc2NvZGUnLCAnR0VUJylcbiAgICAvLyDnn63kv6Hpqozor4HnoIHnmbvlvZVcbmV4cG9ydCBjb25zdCBzbXNMb2dpbiA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzbXNsb2dpbicpXG4gICAgLy8g6I635Y+W5b6u5L+hb3BlbklkXG5leHBvcnQgY29uc3QgZ2V0T3BlbmlkID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ2dldE9wZW5pZCcpXG4gICAgLy8g5b6u5L+h5o6I5p2D55m75b2VXG5leHBvcnQgY29uc3Qgd2VjaGF0TG9naW4gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnd2VjaGF0bG9naW4nKVxuICAgIC8vIOino+WvhuW+ruS/oeaJi+acuuWPt1xuZXhwb3J0IGNvbnN0IGRlY3J5cHRQaG9uZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdkZWNyeXB0V2VDaGF0UGhvbmVOdW1iZXInKTtcbi8vIOW+ruS/oeaOiOadg+eZu+W9lSAtIOaJi+WKqOW9leWFpeaJi+acuuWPt1xuZXhwb3J0IGNvbnN0IHdlY2hhdEJ5UGhvbmUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnd2V0Q2hhdExvZ2luQnlQaG9uZU51bWJlcicpXG4gICAgLy8g6I635Y+W55So5oi35L+h5oGvXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSAoKSA9PiB3eFJlcXVlc3Qoe30sICdnZXRJbmZvJywgJ0dFVCcpXG4gICAgLy8g6YCA5Ye655m75b2VXG5leHBvcnQgY29uc3QgdXNlckxvZ291dCA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ2xvZ291dCcpXG4gICAgLy8g5L+u5pS555So5oi35L+h5oGvXG5leHBvcnQgY29uc3QgdXBkYXRlVXNlciA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzeXN0ZW0vdXNlci9wcm9maWxlJywgJ1BVVCcpXG4gICAgLy8g57uR5a6a5Y2V5L2NXG5leHBvcnQgY29uc3QgYmluZERlcHQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc3lzdGVtL3VzZXIvcHJvZmlsZS9iaW5kRGVwdCcsICdQVVQnKVxuICAgIC8vIOaWsOWinumihOitplxuZXhwb3J0IGNvbnN0IGFkZFdhcm5pbmcgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAneXVqaW5nL2FkZCcsICdQVVQnKVxuICAgIC8vIOS/ruaUuemihOitplxuZXhwb3J0IGNvbnN0IHVwZGF0ZVdhcm5pbmcgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAneXVqaW5nL2VkaXQnLCAnUFVUJylcbiAgICAvLyDmoLnmja7pooToraZJZOiOt+WPluivpue7huS/oeaBr1xuZXhwb3J0IGNvbnN0IGdldFdhcm5pbmdJbmZvID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHt9LCAneXVqaW5nLycgKyBwYXJhbXMueXVKaW5nSWQsICdHRVQnKVxuICAgIC8vIOiOt+WPlumihOitpuWIl+ihqFxuZXhwb3J0IGNvbnN0IHdhcm5MaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3l1amluZy9saXN0MicsICdHRVQnKVxuICAgIC8vIOiOt+WPlumihOitpuetiee6p+mAieaLqeahhuWIl+ihqFxuZXhwb3J0IGNvbnN0IHdhcm5PcHRpb25zID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3l1amluZy9vcHRpb25zZWxlY3QnLCAnR0VUJylcbiAgICAvLyDojrflj5borr7lpIfliJfooahcbmV4cG9ydCBjb25zdCBkZXZpY2VMaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ2RldmljZS9saXN0JywgJ0dFVCcpXG4gICAgLy8g5Y+q5pyJ5Y2V5L2N566h55CG5ZGY5Y+v5Lul6I635Y+W5Y2V5L2N5LiL55qE55So5oi35YiX6KGoXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ5RGVwdCA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ3N5c3RlbS91c2VyL2dldE15JywgJ0dFVCcpXG4gICAgLy8g55So5oi36K6+5aSH54q25oCB5L+u5pS5XG5leHBvcnQgY29uc3QgdXNlckNoYW5nZVN0YXR1cyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzeXN0ZW0vdXNlci91c2VyRGV2aWNlQ2hhbmdlU3RhdHVzJywgJ1BVVCcpXG4vLyDojrflj5bkuIrnuqfljZXkvY3nmoTnlKjmiLfliJfooahcbmV4cG9ydCBjb25zdCBnZXRQYXJlbnREZXB0VXNlciA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ3N5c3RlbS91c2VyL2dldHBQYXJlbnREZXB0VXNlcmxpc3QnLCAnR0VUJylcbi8vIOaTjeS9nOiusOW9lVxuZXhwb3J0IGNvbnN0IGdldE9wZXJsb2cgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnbW9uaXRvci9vcGVybG9nL2xpc3QnLCAnR0VUJylcbiJdfQ==