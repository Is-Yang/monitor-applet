'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getDevieList = exports.getDeptUserList = exports.getOperlog = exports.getParentDeptUser = exports.userChangeStatus = exports.getMyInfo = exports.getUserByDept = exports.deviceOptions = exports.warnOptions = exports.warnList = exports.getWarningInfo = exports.updateWarning = exports.addWarning = exports.bindDept = exports.updateUser = exports.userLogout = exports.getUserInfo = exports.wechatByPhone = exports.decryptPhone = exports.wechatLogin = exports.getOpenid = exports.smsLogin = exports.getCode = undefined;

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
// 我的信息
var getMyInfo = exports.getMyInfo = function getMyInfo() {
    return wxRequest({}, 'system/user/getMyInfo', 'GET');
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
// 我的单位用户列表【分页】
var getDeptUserList = exports.getDeptUserList = function getDeptUserList(params) {
    return wxRequest(params, 'system/user/getMyDeptUserList', 'GET');
};
// 我的监测列表 【分页】
var getDevieList = exports.getDevieList = function getDevieList(params) {
    return wxRequest(params, 'system/user/getMyDeviceList', 'GET');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93TG9kaW5nIiwidGlwIiwibG9hZGluZyIsImhlYWRlciIsInN0b3JlIiwiZ2xvYmFsRGF0YSIsImdldFN0YXRlIiwidXNlciIsInRva2VuIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImVudmlyb25tZW50Iiwid2VweSIsIiRpbnN0YW5jZSIsImVudiIsImRhdGEiLCJxcyIsInN0cmluZ2lmeSIsInJlcXVlc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJsb2FkZWQiLCJyZXN1bHQiLCJjb2RlIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJzZXRUaW1lb3V0IiwibmF2aWdhdGVUbyIsIm1zZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiZ2V0Q29kZSIsInNtc0xvZ2luIiwiZ2V0T3BlbmlkIiwid2VjaGF0TG9naW4iLCJkZWNyeXB0UGhvbmUiLCJ3ZWNoYXRCeVBob25lIiwiZ2V0VXNlckluZm8iLCJ1c2VyTG9nb3V0IiwidXBkYXRlVXNlciIsImJpbmREZXB0IiwiYWRkV2FybmluZyIsInVwZGF0ZVdhcm5pbmciLCJnZXRXYXJuaW5nSW5mbyIsInl1SmluZ0lkIiwid2Fybkxpc3QiLCJ3YXJuT3B0aW9ucyIsImRldmljZU9wdGlvbnMiLCJnZXRVc2VyQnlEZXB0IiwiZ2V0TXlJbmZvIiwidXNlckNoYW5nZVN0YXR1cyIsImdldFBhcmVudERlcHRVc2VyIiwiZ2V0T3BlcmxvZyIsImdldERlcHRVc2VyTGlzdCIsImdldERldmllTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNQTtBQUFBLHVFQUFZO0FBQUEsWUFBTUMsTUFBTix1RUFBZSxFQUFmO0FBQUEsWUFBbUJDLEdBQW5CO0FBQUEsWUFBd0JDLE1BQXhCLHVFQUFpQyxNQUFq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QSxVQUFhLENBQUMzRCxNQUFEO0FBQUEsV0FBWUQsVUFBVUMsTUFBVixFQUFrQixzQkFBbEIsRUFBMEMsS0FBMUMsQ0FBWjtBQUFBLENBQW5CO0FBQ0g7QUFDRyxJQUFNNEQsNENBQWtCLFNBQWxCQSxlQUFrQixDQUFDNUQsTUFBRDtBQUFBLFdBQVlELFVBQVVDLE1BQVYsRUFBa0IsK0JBQWxCLEVBQW1ELEtBQW5ELENBQVo7QUFBQSxDQUF4QjtBQUNIO0FBQ0csSUFBTTZELHNDQUFlLFNBQWZBLFlBQWUsQ0FBQzdELE1BQUQ7QUFBQSxXQUFZRCxVQUFVQyxNQUFWLEVBQWtCLDZCQUFsQixFQUFpRCxLQUFqRCxDQUFaO0FBQUEsQ0FBckIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7XG4gICAgZ2V0U3RvcmVcbn0gZnJvbSAnd2VweS1yZWR1eCdcbmltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJ1xuXG5pbXBvcnQgcXMgZnJvbSAncXMnO1xuXG5jb25zdCB3eFJlcXVlc3QgPSBhc3luYyhwYXJhbXMgPSB7fSwgdXJsLCBtZXRob2QgPSAnUE9TVCcsIHNob3dMb2RpbmcgPSB0cnVlKSA9PiB7XG4gICAgc2hvd0xvZGluZyAmJiB0aXAubG9hZGluZygpO1xuXG4gICAgbGV0IGhlYWRlciA9IHt9O1xuXG4gICAgaWYgKG1ldGhvZCA9PSAnUFVUJykge1xuICAgICAgICBoZWFkZXJbJ2NvbnRlbnQtdHlwZSddID0gJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgfSBlbHNlIHtcbiAgICAgICAgaGVhZGVyWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXG4gICAgfVxuXG4gICAgY29uc3Qgc3RvcmUgPSBnZXRTdG9yZSgpO1xuICAgIGxldCBnbG9iYWxEYXRhID0gc3RvcmUuZ2V0U3RhdGUoKS51c2VyLmdsb2JhbERhdGE7XG5cbiAgICBsZXQgdG9rZW4gPSB3eC5nZXRTdG9yYWdlU3luYygndG9rZW4nKTtcblxuICAgIGlmICh0b2tlbikge1xuICAgICAgICBoZWFkZXJbJ0F1dGhvcml6YXRpb24nXSA9IHRva2VuO1xuICAgIH1cbiAgICBsZXQgZW52aXJvbm1lbnQgPSB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLmVudjtcbiAgICBpZiAoZW52aXJvbm1lbnQgPT0gJ3Byb2QnKSB7XG4gICAgICAgIHVybCA9ICdodHRwczovL3RjYi1hcGkudGVuY2VudGNsb3VkYXBpLmNvbScgKyB1cmw7XG4gICAgfSBlbHNlIGlmIChlbnZpcm9ubWVudCA9PSAndGVzdCcpIHtcbiAgICAgICAgdXJsID0gJ2h0dHBzOi8vYmVpZG91LnNpZ25hbGZpcmUubmV0LmNuLycgKyB1cmw7XG4gICAgICAgIC8vIHVybCA9ICdodHRwczovL21vY2suYXBpLnNpZ25hbGZpcmUubmV0LmNuL21vY2svNWU2ZTMzZTMyOTVhMjc0MzYzNzk3NDMzL2V4YW1wbGUvJyArIHVybDtcbiAgICB9XG4gICAgbGV0IGRhdGEgPSBtZXRob2QgPT0gJ1BPU1QnID8gcXMuc3RyaW5naWZ5KHBhcmFtcykgOiBwYXJhbXM7XG5cbiAgICBsZXQgcmVzID0gYXdhaXQgd2VweS5yZXF1ZXN0KHtcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICB1cmwsXG4gICAgICAgIG1ldGhvZDogbWV0aG9kLFxuICAgICAgICBkYXRhOiBkYXRhLFxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coJ3dlcHkgcmVxdWVyc3QgZXJyOicgKyBlcnIpO1xuICAgIH0pO1xuXG4gICAgc2hvd0xvZGluZyAmJiB0aXAubG9hZGVkKCk7XG5cbiAgICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XG4gICAgICAgIGxldCByZXN1bHQgPSByZXMuZGF0YTtcbiAgICAgICAgLy8g5pyq5o6I5p2DXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDEpIHtcbiAgICAgICAgICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xuICAgICAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ3Rva2VuJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sIDEwMDApXG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzdWx0LmNvZGUgPT0gNTAwICYmIHJlc3VsdC5tc2cpIHtcbiAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlc3VsdC5tc2csXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuZGF0YTtcbiAgICB9XG59XG5cbi8vIOiOt+WPlumqjOivgeeggVxuZXhwb3J0IGNvbnN0IGdldENvZGUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc21zY29kZScsICdHRVQnKVxuICAgIC8vIOefreS/oemqjOivgeeggeeZu+W9lVxuZXhwb3J0IGNvbnN0IHNtc0xvZ2luID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3Ntc2xvZ2luJylcbiAgICAvLyDojrflj5blvq7kv6FvcGVuSWRcbmV4cG9ydCBjb25zdCBnZXRPcGVuaWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnZ2V0T3BlbmlkJylcbiAgICAvLyDlvq7kv6HmjojmnYPnmbvlvZVcbmV4cG9ydCBjb25zdCB3ZWNoYXRMb2dpbiA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd3ZWNoYXRsb2dpbicpXG4gICAgLy8g6Kej5a+G5b6u5L+h5omL5py65Y+3XG5leHBvcnQgY29uc3QgZGVjcnlwdFBob25lID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ2RlY3J5cHRXZUNoYXRQaG9uZU51bWJlcicpO1xuLy8g5b6u5L+h5o6I5p2D55m75b2VIC0g5omL5Yqo5b2V5YWl5omL5py65Y+3XG5leHBvcnQgY29uc3Qgd2VjaGF0QnlQaG9uZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd3ZXRDaGF0TG9naW5CeVBob25lTnVtYmVyJylcbiAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ2dldEluZm8nLCAnR0VUJylcbiAgICAvLyDpgIDlh7rnmbvlvZVcbmV4cG9ydCBjb25zdCB1c2VyTG9nb3V0ID0gKCkgPT4gd3hSZXF1ZXN0KHt9LCAnbG9nb3V0JylcbiAgICAvLyDkv67mlLnnlKjmiLfkv6Hmga9cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3N5c3RlbS91c2VyL3Byb2ZpbGUnLCAnUFVUJylcbiAgICAvLyDnu5HlrprljZXkvY1cbmV4cG9ydCBjb25zdCBiaW5kRGVwdCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzeXN0ZW0vdXNlci9wcm9maWxlL2JpbmREZXB0JywgJ1BVVCcpXG4gICAgLy8g5paw5aKe6aKE6K2mXG5leHBvcnQgY29uc3QgYWRkV2FybmluZyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd5dWppbmcvYWRkJywgJ1BVVCcpXG4gICAgLy8g5L+u5pS56aKE6K2mXG5leHBvcnQgY29uc3QgdXBkYXRlV2FybmluZyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd5dWppbmcvZWRpdCcsICdQVVQnKVxuICAgIC8vIOagueaNrumihOitpklk6I635Y+W6K+m57uG5L+h5oGvXG5leHBvcnQgY29uc3QgZ2V0V2FybmluZ0luZm8gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3Qoe30sICd5dWppbmcvJyArIHBhcmFtcy55dUppbmdJZCwgJ0dFVCcpXG4gICAgLy8g6I635Y+W6aKE6K2m5YiX6KGoXG5leHBvcnQgY29uc3Qgd2Fybkxpc3QgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAneXVqaW5nL2xpc3QyJywgJ0dFVCcpXG4gICAgLy8g6I635Y+W6aKE6K2m562J57qn6YCJ5oup5qGG5YiX6KGoXG5leHBvcnQgY29uc3Qgd2Fybk9wdGlvbnMgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAneXVqaW5nL29wdGlvbnNlbGVjdCcsICdHRVQnKVxuICAgIC8vIOiOt+WPluiuvuWkh+WIl+ihqFxuZXhwb3J0IGNvbnN0IGRldmljZU9wdGlvbnMgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnZGV2aWNlL29wdGlvbnNlbGVjdCcsICdHRVQnKVxuICAgIC8vIOWPquacieWNleS9jeeuoeeQhuWRmOWPr+S7peiOt+WPluWNleS9jeS4i+eahOeUqOaIt+WIl+ihqFxuZXhwb3J0IGNvbnN0IGdldFVzZXJCeURlcHQgPSAoKSA9PiB3eFJlcXVlc3Qoe30sICdzeXN0ZW0vdXNlci9nZXRNeScsICdHRVQnKVxuICAgIC8vIOaIkeeahOS/oeaBr1xuZXhwb3J0IGNvbnN0IGdldE15SW5mbyA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ3N5c3RlbS91c2VyL2dldE15SW5mbycsICdHRVQnKVxuICAgIC8vIOeUqOaIt+iuvuWkh+eKtuaAgeS/ruaUuVxuZXhwb3J0IGNvbnN0IHVzZXJDaGFuZ2VTdGF0dXMgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc3lzdGVtL3VzZXIvdXNlckRldmljZUNoYW5nZVN0YXR1cycsICdQVVQnKVxuICAgIC8vIOiOt+WPluS4iue6p+WNleS9jeeahOeUqOaIt+WIl+ihqFxuZXhwb3J0IGNvbnN0IGdldFBhcmVudERlcHRVc2VyID0gKCkgPT4gd3hSZXF1ZXN0KHt9LCAnc3lzdGVtL3VzZXIvZ2V0cFBhcmVudERlcHRVc2VybGlzdCcsICdHRVQnKVxuICAgIC8vIOaTjeS9nOiusOW9lVxuZXhwb3J0IGNvbnN0IGdldE9wZXJsb2cgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnbW9uaXRvci9vcGVybG9nL2xpc3QnLCAnR0VUJylcbiAgICAvLyDmiJHnmoTljZXkvY3nlKjmiLfliJfooajjgJDliIbpobXjgJFcbmV4cG9ydCBjb25zdCBnZXREZXB0VXNlckxpc3QgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc3lzdGVtL3VzZXIvZ2V0TXlEZXB0VXNlckxpc3QnLCAnR0VUJylcbiAgICAvLyDmiJHnmoTnm5HmtYvliJfooagg44CQ5YiG6aG144CRXG5leHBvcnQgY29uc3QgZ2V0RGV2aWVMaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3N5c3RlbS91c2VyL2dldE15RGV2aWNlTGlzdCcsICdHRVQnKSJdfQ==