'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getOperlog = exports.getParentDeptUser = exports.userChangeStatus = exports.getUserByDept = exports.deviceOptions = exports.warnOptions = exports.warnList = exports.getWarningInfo = exports.updateWarning = exports.addWarning = exports.bindDept = exports.updateUser = exports.userLogout = exports.getUserInfo = exports.wechatByPhone = exports.decryptPhone = exports.wechatLogin = exports.getOpenid = exports.smsLogin = exports.getCode = undefined;

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
                        environment = _wepy2.default.$instance.globalData.env;

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
var deviceOptions = exports.deviceOptions = function deviceOptions(params) {
    return wxRequest(params, 'device/optionselect', 'GET');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93TG9kaW5nIiwidGlwIiwibG9hZGluZyIsImhlYWRlciIsInN0b3JlIiwiZ2xvYmFsRGF0YSIsImdldFN0YXRlIiwidXNlciIsInRva2VuIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImVudmlyb25tZW50Iiwid2VweSIsIiRpbnN0YW5jZSIsImVudiIsImRhdGEiLCJxcyIsInN0cmluZ2lmeSIsInJlcXVlc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJsb2FkZWQiLCJyZXN1bHQiLCJjb2RlIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJzZXRUaW1lb3V0IiwibmF2aWdhdGVUbyIsIm1zZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiZ2V0Q29kZSIsInNtc0xvZ2luIiwiZ2V0T3BlbmlkIiwid2VjaGF0TG9naW4iLCJkZWNyeXB0UGhvbmUiLCJ3ZWNoYXRCeVBob25lIiwiZ2V0VXNlckluZm8iLCJ1c2VyTG9nb3V0IiwidXBkYXRlVXNlciIsImJpbmREZXB0IiwiYWRkV2FybmluZyIsInVwZGF0ZVdhcm5pbmciLCJnZXRXYXJuaW5nSW5mbyIsInl1SmluZ0lkIiwid2Fybkxpc3QiLCJ3YXJuT3B0aW9ucyIsImRldmljZU9wdGlvbnMiLCJnZXRVc2VyQnlEZXB0IiwidXNlckNoYW5nZVN0YXR1cyIsImdldFBhcmVudERlcHRVc2VyIiwiZ2V0T3BlcmxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNQTtBQUFBLHVFQUFZO0FBQUEsWUFBTUMsTUFBTix1RUFBZSxFQUFmO0FBQUEsWUFBbUJDLEdBQW5CO0FBQUEsWUFBd0JDLE1BQXhCLHVFQUFpQyxNQUFqQztBQUFBLFlBQXlDQyxVQUF6Qyx1RUFBc0QsSUFBdEQ7O0FBQUE7O0FBQUE7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J1xyXG5pbXBvcnQge1xyXG4gICAgZ2V0U3RvcmVcclxufSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcclxuXHJcbmltcG9ydCBxcyBmcm9tICdxcyc7XHJcblxyXG5jb25zdCB3eFJlcXVlc3QgPSBhc3luYyhwYXJhbXMgPSB7fSwgdXJsLCBtZXRob2QgPSAnUE9TVCcsIHNob3dMb2RpbmcgPSB0cnVlKSA9PiB7XHJcbiAgICBzaG93TG9kaW5nICYmIHRpcC5sb2FkaW5nKCk7XHJcblxyXG4gICAgbGV0IGhlYWRlciA9IHt9O1xyXG5cclxuICAgIGlmIChtZXRob2QgPT0gJ1BVVCcpIHtcclxuICAgICAgICBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGhlYWRlclsnY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHN0b3JlID0gZ2V0U3RvcmUoKTtcclxuICAgIGxldCBnbG9iYWxEYXRhID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyLmdsb2JhbERhdGE7XHJcblxyXG4gICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcblxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgaGVhZGVyWydBdXRob3JpemF0aW9uJ10gPSB0b2tlbjtcclxuICAgIH1cclxuICAgIGxldCBlbnZpcm9ubWVudCA9IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuZW52O1xyXG4gICAgaWYgKGVudmlyb25tZW50ID09ICdwcm9kJykge1xyXG4gICAgICAgIHVybCA9ICdodHRwczovL3RjYi1hcGkudGVuY2VudGNsb3VkYXBpLmNvbScgKyB1cmw7XHJcbiAgICB9IGVsc2UgaWYgKGVudmlyb25tZW50ID09ICd0ZXN0Jykge1xyXG4gICAgICAgIHVybCA9ICdodHRwczovL2JlaWRvdS5zaWduYWxmaXJlLm5ldC5jbi8nICsgdXJsO1xyXG4gICAgICAgIC8vIHVybCA9ICdodHRwczovL21vY2suYXBpLnNpZ25hbGZpcmUubmV0LmNuL21vY2svNWU2ZTMzZTMyOTVhMjc0MzYzNzk3NDMzL2V4YW1wbGUvJyArIHVybDtcclxuICAgIH1cclxuICAgIGxldCBkYXRhID0gbWV0aG9kID09ICdQT1NUJyA/IHFzLnN0cmluZ2lmeShwYXJhbXMpIDogcGFyYW1zO1xyXG5cclxuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIGhlYWRlcixcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnd2VweSByZXF1ZXJzdCBlcnI6JyArIGVycik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzaG93TG9kaW5nICYmIHRpcC5sb2FkZWQoKTtcclxuXHJcbiAgICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgIC8vIOacquaOiOadg1xyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDEpIHtcclxuICAgICAgICAgICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dpbidcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNTAwICYmIHJlc3VsdC5tc2cpIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXN1bHQubXNnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyDojrflj5bpqozor4HnoIFcclxuZXhwb3J0IGNvbnN0IGdldENvZGUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc21zY29kZScsICdHRVQnKVxyXG4gICAgLy8g55+t5L+h6aqM6K+B56CB55m75b2VXHJcbmV4cG9ydCBjb25zdCBzbXNMb2dpbiA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzbXNsb2dpbicpXHJcbiAgICAvLyDojrflj5blvq7kv6FvcGVuSWRcclxuZXhwb3J0IGNvbnN0IGdldE9wZW5pZCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdnZXRPcGVuaWQnKVxyXG4gICAgLy8g5b6u5L+h5o6I5p2D55m75b2VXHJcbmV4cG9ydCBjb25zdCB3ZWNoYXRMb2dpbiA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd3ZWNoYXRsb2dpbicpXHJcbiAgICAvLyDop6Plr4blvq7kv6HmiYvmnLrlj7dcclxuZXhwb3J0IGNvbnN0IGRlY3J5cHRQaG9uZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdkZWNyeXB0V2VDaGF0UGhvbmVOdW1iZXInKTtcclxuLy8g5b6u5L+h5o6I5p2D55m75b2VIC0g5omL5Yqo5b2V5YWl5omL5py65Y+3XHJcbmV4cG9ydCBjb25zdCB3ZWNoYXRCeVBob25lID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3dldENoYXRMb2dpbkJ5UGhvbmVOdW1iZXInKVxyXG4gICAgLy8g6I635Y+W55So5oi35L+h5oGvXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ2dldEluZm8nLCAnR0VUJylcclxuICAgIC8vIOmAgOWHuueZu+W9lVxyXG5leHBvcnQgY29uc3QgdXNlckxvZ291dCA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ2xvZ291dCcpXHJcbiAgICAvLyDkv67mlLnnlKjmiLfkv6Hmga9cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc3lzdGVtL3VzZXIvcHJvZmlsZScsICdQVVQnKVxyXG4gICAgLy8g57uR5a6a5Y2V5L2NXHJcbmV4cG9ydCBjb25zdCBiaW5kRGVwdCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzeXN0ZW0vdXNlci9wcm9maWxlL2JpbmREZXB0JywgJ1BVVCcpXHJcbiAgICAvLyDmlrDlop7pooToraZcclxuZXhwb3J0IGNvbnN0IGFkZFdhcm5pbmcgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAneXVqaW5nL2FkZCcsICdQVVQnKVxyXG4gICAgLy8g5L+u5pS56aKE6K2mXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVXYXJuaW5nID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3l1amluZy9lZGl0JywgJ1BVVCcpXHJcbiAgICAvLyDmoLnmja7pooToraZJZOiOt+WPluivpue7huS/oeaBr1xyXG5leHBvcnQgY29uc3QgZ2V0V2FybmluZ0luZm8gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3Qoe30sICd5dWppbmcvJyArIHBhcmFtcy55dUppbmdJZCwgJ0dFVCcpXHJcbiAgICAvLyDojrflj5bpooTorabliJfooahcclxuZXhwb3J0IGNvbnN0IHdhcm5MaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3l1amluZy9saXN0MicsICdHRVQnKVxyXG4gICAgLy8g6I635Y+W6aKE6K2m562J57qn6YCJ5oup5qGG5YiX6KGoXHJcbmV4cG9ydCBjb25zdCB3YXJuT3B0aW9ucyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd5dWppbmcvb3B0aW9uc2VsZWN0JywgJ0dFVCcpXHJcbiAgICAvLyDojrflj5borr7lpIfliJfooahcclxuZXhwb3J0IGNvbnN0IGRldmljZU9wdGlvbnMgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnZGV2aWNlL29wdGlvbnNlbGVjdCcsICdHRVQnKVxyXG4gICAgLy8g5Y+q5pyJ5Y2V5L2N566h55CG5ZGY5Y+v5Lul6I635Y+W5Y2V5L2N5LiL55qE55So5oi35YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyQnlEZXB0ID0gKCkgPT4gd3hSZXF1ZXN0KHt9LCAnc3lzdGVtL3VzZXIvZ2V0TXknLCAnR0VUJylcclxuICAgIC8vIOeUqOaIt+iuvuWkh+eKtuaAgeS/ruaUuVxyXG5leHBvcnQgY29uc3QgdXNlckNoYW5nZVN0YXR1cyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzeXN0ZW0vdXNlci91c2VyRGV2aWNlQ2hhbmdlU3RhdHVzJywgJ1BVVCcpXHJcbi8vIOiOt+WPluS4iue6p+WNleS9jeeahOeUqOaIt+WIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0UGFyZW50RGVwdFVzZXIgPSAoKSA9PiB3eFJlcXVlc3Qoe30sICdzeXN0ZW0vdXNlci9nZXRwUGFyZW50RGVwdFVzZXJsaXN0JywgJ0dFVCcpXHJcbi8vIOaTjeS9nOiusOW9lVxyXG5leHBvcnQgY29uc3QgZ2V0T3BlcmxvZyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdtb25pdG9yL29wZXJsb2cvbGlzdCcsICdHRVQnKVxyXG4iXX0=