'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getMonitorDeviceList = exports.reportOperLogs = exports.uniteDept = exports.getUnread = exports.changeProcessed = exports.getDeviceHistoryDataByDeviceId = exports.getDeviceListByAreaIdAndType = exports.getDeviceListByAreaId = exports.monitorOptionse = exports.getAreaList = exports.getAreaById = exports.getAreaByDept = exports.getAreaByUser = exports.optionsRole = exports.getMoitorList = exports.getDeptUserList = exports.getOperlog = exports.getMyDeptUserOptions = exports.userChangeStatus = exports.getMyInfo = exports.getUserByDept = exports.monitorAreaOptions = exports.warnOptions = exports.appletsList = exports.getWarningInfo = exports.updateWarning = exports.addWarning = exports.bindDept = exports.changeUserRoles = exports.updateUser = exports.userLogout = exports.getUserInfo = exports.wechatByPhone = exports.decryptUnionId = exports.decryptPhone = exports.bindWeChatState = exports.wechatLogin = exports.getOpenid = exports.smsLogin = exports.getCode = undefined;

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

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
        var tips = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;

        var header, token, environment, data, res, result, _token;

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
                        _context.next = 10;
                        return _wepy2.default.request({
                            header: header,
                            url: url,
                            method: method,
                            data: data
                        }).catch(function (err) {
                            console.log('wepy requerst err:' + err);
                        });

                    case 10:
                        res = _context.sent;


                        showLoding && _tip2.default.loaded();

                        if (!(res && res.data)) {
                            _context.next = 17;
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
                                wx.redirectTo({
                                    url: '/pages/login'
                                });
                            }, 1000);
                        }

                        // tips 是否自定义提示
                        if (!tips && result.code == 500) {
                            wx.showToast({
                                title: result.msg || '服务器异常',
                                icon: 'none',
                                duration: 1500
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
// 获取微信openId
var getOpenid = exports.getOpenid = function getOpenid(params) {
    return wxRequest(params, 'getOpenid');
};
// 微信授权登录
var wechatLogin = exports.wechatLogin = function wechatLogin(params) {
    return wxRequest(params, 'wechatlogin');
};
// 获取是否绑定微信
var bindWeChatState = exports.bindWeChatState = function bindWeChatState(params) {
    return wxRequest(params, 'isBindWeChat');
};
// 解密微信手机号
var decryptPhone = exports.decryptPhone = function decryptPhone(params) {
    return wxRequest(params, 'decryptWeChatPhoneNumber');
};
// 解密微信UnionId
var decryptUnionId = exports.decryptUnionId = function decryptUnionId(params) {
    return wxRequest(params, 'decryptWeChatUnionId', 'POST', true, true);
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
// 修改角色
var changeUserRoles = exports.changeUserRoles = function changeUserRoles(params) {
    return wxRequest(params, 'system/user/changeUserRoles', 'POST');
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
    return wxRequest({}, 'yujing/getInfoByAuthorization/' + params.yuJingId, 'GET');
};
// 获取预警列表
var appletsList = exports.appletsList = function appletsList(params) {
    return wxRequest(params, 'yujing/applets/list', 'GET');
};
// 获取预警等级选择框列表
var warnOptions = exports.warnOptions = function warnOptions(params) {
    return wxRequest(params, 'yujing/optionselect', 'GET');
};
// 获取地点下拉框
var monitorAreaOptions = exports.monitorAreaOptions = function monitorAreaOptions(params) {
    return wxRequest(params, 'monitorArea/optionselect', 'GET');
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
    return wxRequest(params, 'system/user/userMonitorAreaChangeStatus', 'PUT');
};
// 获取相关人员列表
var getMyDeptUserOptions = exports.getMyDeptUserOptions = function getMyDeptUserOptions() {
    return wxRequest({}, 'system/user/myDeptUserListOptionselect', 'GET');
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
var getMoitorList = exports.getMoitorList = function getMoitorList(params) {
    return wxRequest(params, 'system/user/getMyMonitorAreaList', 'GET');
};
// 我的-角色下拉列表
var optionsRole = exports.optionsRole = function optionsRole(params) {
    return wxRequest(params, 'system/role/optionselectForApp', 'GET');
};
// 根据用户查询监测区域的数据  userId
var getAreaByUser = exports.getAreaByUser = function getAreaByUser(params) {
    return wxRequest(params, 'monitordata/getAreaByUserId', 'GET');
};
// 根据部门查询监测区域的数据  deptId
var getAreaByDept = exports.getAreaByDept = function getAreaByDept(params) {
    return wxRequest(params, 'monitordata/getAreaByDeptId', 'GET');
};
// 根据区域Id查询监测区域的数据  monitorAreaId
var getAreaById = exports.getAreaById = function getAreaById(params) {
    return wxRequest(params, 'monitordata/getAreaById', 'GET');
};
// 获取所有的监测区域的数据
var getAreaList = exports.getAreaList = function getAreaList() {
    return wxRequest({}, 'monitordata/getAllAreaList', 'GET');
};
// 获取Gps监测区域的选择下拉框
var monitorOptionse = exports.monitorOptionse = function monitorOptionse() {
    return wxRequest({}, 'monitordata/optionselect', 'GET');
};
// 根据区域Id查询设备列表 - 监测区域页面
var getDeviceListByAreaId = exports.getDeviceListByAreaId = function getDeviceListByAreaId(params) {
    return wxRequest(params, 'monitordata/queryDeviceListByAreaIdFromRedis', 'GET');
};
// 根据区域Id和设备类型查询设备列表  - 第二个类型页面
var getDeviceListByAreaIdAndType = exports.getDeviceListByAreaIdAndType = function getDeviceListByAreaIdAndType(params) {
    return wxRequest(params, 'monitordata/queryDeviceListByAreaIdAndTypeFromRedis', 'GET');
};
// 根据设备Id和设备类型查询设备列表 - 第三个页面详情
var getDeviceHistoryDataByDeviceId = exports.getDeviceHistoryDataByDeviceId = function getDeviceHistoryDataByDeviceId(params) {
    return wxRequest(params, 'monitordata/queryDeviceHistoryDataByDeviceIdFromRedis', 'GET');
};
// 修改预警状态为已处理状态
var changeProcessed = exports.changeProcessed = function changeProcessed(params) {
    return wxRequest(params, 'yujing/updateProcessed');
};
// 预警菜单上显示红色的数值(未处理的预警数量)
var getUnread = exports.getUnread = function getUnread(params) {
    return wxRequest(params, 'yujing/queryUnprocessedQuantity', 'GET', false);
};
// 解绑单位
var uniteDept = exports.uniteDept = function uniteDept() {
    return wxRequest({}, 'system/user/profile/uniteDept');
};
// 预警信息操作日志 yujingId-预警主键Id
var reportOperLogs = exports.reportOperLogs = function reportOperLogs(params) {
    return wxRequest(params, 'yujing/findYuJingOperLog', 'GET');
};
// 视频监控列表 areaId-区域Id
var getMonitorDeviceList = exports.getMonitorDeviceList = function getMonitorDeviceList(params) {
    return wxRequest(params, 'monitorArea/getMonitorDeviceListByAreaId', 'GET');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93TG9kaW5nIiwidGlwcyIsInRpcCIsImxvYWRpbmciLCJoZWFkZXIiLCJ0b2tlbiIsInd4IiwiZ2V0U3RvcmFnZVN5bmMiLCJlbnZpcm9ubWVudCIsIndlcHkiLCIkaW5zdGFuY2UiLCJnbG9iYWxEYXRhIiwiZW52IiwiZGF0YSIsInFzIiwic3RyaW5naWZ5IiwicmVxdWVzdCIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInJlcyIsImxvYWRlZCIsInJlc3VsdCIsImNvZGUiLCJyZW1vdmVTdG9yYWdlU3luYyIsInNldFRpbWVvdXQiLCJyZWRpcmVjdFRvIiwic2hvd1RvYXN0IiwidGl0bGUiLCJtc2ciLCJpY29uIiwiZHVyYXRpb24iLCJnZXRDb2RlIiwic21zTG9naW4iLCJnZXRPcGVuaWQiLCJ3ZWNoYXRMb2dpbiIsImJpbmRXZUNoYXRTdGF0ZSIsImRlY3J5cHRQaG9uZSIsImRlY3J5cHRVbmlvbklkIiwid2VjaGF0QnlQaG9uZSIsImdldFVzZXJJbmZvIiwidXNlckxvZ291dCIsInVwZGF0ZVVzZXIiLCJjaGFuZ2VVc2VyUm9sZXMiLCJiaW5kRGVwdCIsImFkZFdhcm5pbmciLCJ1cGRhdGVXYXJuaW5nIiwiZ2V0V2FybmluZ0luZm8iLCJ5dUppbmdJZCIsImFwcGxldHNMaXN0Iiwid2Fybk9wdGlvbnMiLCJtb25pdG9yQXJlYU9wdGlvbnMiLCJnZXRVc2VyQnlEZXB0IiwiZ2V0TXlJbmZvIiwidXNlckNoYW5nZVN0YXR1cyIsImdldE15RGVwdFVzZXJPcHRpb25zIiwiZ2V0T3BlcmxvZyIsImdldERlcHRVc2VyTGlzdCIsImdldE1vaXRvckxpc3QiLCJvcHRpb25zUm9sZSIsImdldEFyZWFCeVVzZXIiLCJnZXRBcmVhQnlEZXB0IiwiZ2V0QXJlYUJ5SWQiLCJnZXRBcmVhTGlzdCIsIm1vbml0b3JPcHRpb25zZSIsImdldERldmljZUxpc3RCeUFyZWFJZCIsImdldERldmljZUxpc3RCeUFyZWFJZEFuZFR5cGUiLCJnZXREZXZpY2VIaXN0b3J5RGF0YUJ5RGV2aWNlSWQiLCJjaGFuZ2VQcm9jZXNzZWQiLCJnZXRVbnJlYWQiLCJ1bml0ZURlcHQiLCJyZXBvcnRPcGVyTG9ncyIsImdldE1vbml0b3JEZXZpY2VMaXN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUVBOzs7Ozs7OztBQUVBLElBQU1BO0FBQUEsdUVBQVk7QUFBQSxZQUFNQyxNQUFOLHVFQUFlLEVBQWY7QUFBQSxZQUFtQkMsR0FBbkI7QUFBQSxZQUF3QkMsTUFBeEIsdUVBQWlDLE1BQWpDO0FBQUEsWUFBeUNDLFVBQXpDLHVFQUFzRCxJQUF0RDtBQUFBLFlBQTREQyxJQUE1RCx1RUFBbUUsS0FBbkU7O0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDZEQsc0NBQWNFLGNBQUlDLE9BQUosRUFBZDs7QUFFSUMsOEJBSFUsR0FHRCxFQUhDOzs7QUFLZCw0QkFBSUwsVUFBVSxLQUFkLEVBQXFCO0FBQ2pCSyxtQ0FBTyxjQUFQLElBQXlCLGtCQUF6QjtBQUNILHlCQUZELE1BRU87QUFDSEEsbUNBQU8sY0FBUCxJQUF5QixtQ0FBekI7QUFDSDs7QUFFR0MsNkJBWFUsR0FXRkMsR0FBR0MsY0FBSCxDQUFrQixPQUFsQixDQVhFOzs7QUFhZCw0QkFBSUYsS0FBSixFQUFXO0FBQ1BELG1DQUFPLGVBQVAsSUFBMEJDLEtBQTFCO0FBQ0g7QUFDR0csbUNBaEJVLEdBZ0JJQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJDLEdBaEI5Qjs7QUFpQmQsNEJBQUlKLGVBQWUsTUFBbkIsRUFBMkI7QUFDdkJWLGtDQUFNLHdDQUF3Q0EsR0FBOUM7QUFDSCx5QkFGRCxNQUVPLElBQUlVLGVBQWUsTUFBbkIsRUFBMkI7QUFDOUJWLGtDQUFNLHNDQUFzQ0EsR0FBNUM7QUFDQTtBQUNIO0FBQ0dlLDRCQXZCVSxHQXVCSGQsVUFBVSxNQUFWLEdBQW1CZSxhQUFHQyxTQUFI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QUFpQyxTQUFqQ0EsOEJBQWlDLENBQUN2RSxNQUFEO0FBQUEsV0FBWUQsVUFBVUMsTUFBVixFQUFrQix1REFBbEIsRUFBMkUsS0FBM0UsQ0FBWjtBQUFBLENBQXZDO0FBQ0g7QUFDRyxJQUFNd0UsNENBQWtCLFNBQWxCQSxlQUFrQixDQUFDeEUsTUFBRDtBQUFBLFdBQVlELFVBQVVDLE1BQVYsRUFBa0Isd0JBQWxCLENBQVo7QUFBQSxDQUF4QjtBQUNIO0FBQ0csSUFBTXlFLGdDQUFZLFNBQVpBLFNBQVksQ0FBQ3pFLE1BQUQ7QUFBQSxXQUFZRCxVQUFVQyxNQUFWLEVBQWtCLGlDQUFsQixFQUFxRCxLQUFyRCxFQUE0RCxLQUE1RCxDQUFaO0FBQUEsQ0FBbEI7QUFDSDtBQUNHLElBQU0wRSxnQ0FBWSxTQUFaQSxTQUFZO0FBQUEsV0FBTTNFLFVBQVUsRUFBVixFQUFjLCtCQUFkLENBQU47QUFBQSxDQUFsQjtBQUNIO0FBQ0csSUFBTTRFLDBDQUFpQixTQUFqQkEsY0FBaUIsQ0FBQzNFLE1BQUQ7QUFBQSxXQUFZRCxVQUFVQyxNQUFWLEVBQWtCLDBCQUFsQixFQUE4QyxLQUE5QyxDQUFaO0FBQUEsQ0FBdkI7QUFDSDtBQUNHLElBQU00RSxzREFBdUIsU0FBdkJBLG9CQUF1QixDQUFDNUUsTUFBRDtBQUFBLFdBQVlELFVBQVVDLE1BQVYsRUFBa0IsMENBQWxCLEVBQThELEtBQTlELENBQVo7QUFBQSxDQUE3QiIsImZpbGUiOiJhcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcclxuXHJcbmltcG9ydCBxcyBmcm9tICdxcyc7XHJcblxyXG5jb25zdCB3eFJlcXVlc3QgPSBhc3luYyhwYXJhbXMgPSB7fSwgdXJsLCBtZXRob2QgPSAnUE9TVCcsIHNob3dMb2RpbmcgPSB0cnVlLCB0aXBzID0gZmFsc2UpID0+IHtcclxuICAgIHNob3dMb2RpbmcgJiYgdGlwLmxvYWRpbmcoKTtcclxuXHJcbiAgICBsZXQgaGVhZGVyID0ge307XHJcblxyXG4gICAgaWYgKG1ldGhvZCA9PSAnUFVUJykge1xyXG4gICAgICAgIGhlYWRlclsnY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbidcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaGVhZGVyWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcblxyXG4gICAgaWYgKHRva2VuKSB7XHJcbiAgICAgICAgaGVhZGVyWydBdXRob3JpemF0aW9uJ10gPSB0b2tlbjtcclxuICAgIH1cclxuICAgIGxldCBlbnZpcm9ubWVudCA9IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuZW52O1xyXG4gICAgaWYgKGVudmlyb25tZW50ID09ICdwcm9kJykge1xyXG4gICAgICAgIHVybCA9ICdodHRwczovL3RjYi1hcGkudGVuY2VudGNsb3VkYXBpLmNvbScgKyB1cmw7XHJcbiAgICB9IGVsc2UgaWYgKGVudmlyb25tZW50ID09ICd0ZXN0Jykge1xyXG4gICAgICAgIHVybCA9ICdodHRwczovL2JlaWRvdS5zaWduYWxmaXJlLm5ldC5jbi8nICsgdXJsO1xyXG4gICAgICAgIC8vIHVybCA9ICdodHRwczovL21vY2suYXBpLnNpZ25hbGZpcmUubmV0LmNuL21vY2svNWU2ZTMzZTMyOTVhMjc0MzYzNzk3NDMzL2V4YW1wbGUvJyArIHVybDtcclxuICAgIH1cclxuICAgIGxldCBkYXRhID0gbWV0aG9kID09ICdQT1NUJyA/IHFzLnN0cmluZ2lmeShwYXJhbXMpIDogcGFyYW1zO1xyXG5cclxuICAgIGxldCByZXMgPSBhd2FpdCB3ZXB5LnJlcXVlc3Qoe1xyXG4gICAgICAgIGhlYWRlcixcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgbWV0aG9kOiBtZXRob2QsXHJcbiAgICAgICAgZGF0YTogZGF0YSxcclxuICAgIH0pLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnd2VweSByZXF1ZXJzdCBlcnI6JyArIGVycik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBzaG93TG9kaW5nICYmIHRpcC5sb2FkZWQoKTtcclxuXHJcbiAgICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgIC8vIOacquaOiOadg1xyXG4gICAgICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDEpIHtcclxuICAgICAgICAgICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICAgICAgd3gucmVtb3ZlU3RvcmFnZVN5bmMoJ3Rva2VuJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHd4LnJlZGlyZWN0VG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9sb2dpbidcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB0aXBzIOaYr+WQpuiHquWumuS5ieaPkOekulxyXG4gICAgICAgIGlmICghdGlwcyAmJiByZXN1bHQuY29kZSA9PSA1MDApIHtcclxuICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiByZXN1bHQubXNnIHx8ICfmnI3liqHlmajlvILluLgnLFxyXG4gICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyDojrflj5bpqozor4HnoIFcclxuZXhwb3J0IGNvbnN0IGdldENvZGUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc21zY29kZScsICdHRVQnKVxyXG4gICAgLy8g55+t5L+h6aqM6K+B56CB55m75b2VXHJcbmV4cG9ydCBjb25zdCBzbXNMb2dpbiA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzbXNsb2dpbicpXHJcbiAgICAvLyDojrflj5blvq7kv6FvcGVuSWRcclxuZXhwb3J0IGNvbnN0IGdldE9wZW5pZCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdnZXRPcGVuaWQnKVxyXG4gICAgLy8g5b6u5L+h5o6I5p2D55m75b2VXHJcbmV4cG9ydCBjb25zdCB3ZWNoYXRMb2dpbiA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd3ZWNoYXRsb2dpbicpXHJcbiAgICAvLyDojrflj5bmmK/lkKbnu5Hlrprlvq7kv6FcclxuZXhwb3J0IGNvbnN0IGJpbmRXZUNoYXRTdGF0ZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdpc0JpbmRXZUNoYXQnKVxyXG4gICAgLy8g6Kej5a+G5b6u5L+h5omL5py65Y+3XHJcbmV4cG9ydCBjb25zdCBkZWNyeXB0UGhvbmUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnZGVjcnlwdFdlQ2hhdFBob25lTnVtYmVyJyk7XHJcbi8vIOino+WvhuW+ruS/oVVuaW9uSWRcclxuZXhwb3J0IGNvbnN0IGRlY3J5cHRVbmlvbklkID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ2RlY3J5cHRXZUNoYXRVbmlvbklkJywgJ1BPU1QnLCB0cnVlLCB0cnVlKTtcclxuLy8g5b6u5L+h5o6I5p2D55m75b2VIC0g5omL5Yqo5b2V5YWl5omL5py65Y+3XHJcbmV4cG9ydCBjb25zdCB3ZWNoYXRCeVBob25lID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3dldENoYXRMb2dpbkJ5UGhvbmVOdW1iZXInKVxyXG4gICAgLy8g6I635Y+W55So5oi35L+h5oGvXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ2dldEluZm8nLCAnR0VUJylcclxuICAgIC8vIOmAgOWHuueZu+W9lVxyXG5leHBvcnQgY29uc3QgdXNlckxvZ291dCA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ2xvZ291dCcpXHJcbiAgICAvLyDkv67mlLnnlKjmiLfkv6Hmga9cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc3lzdGVtL3VzZXIvcHJvZmlsZScsICdQVVQnKVxyXG4gICAgLy8g5L+u5pS56KeS6ImyXHJcbmV4cG9ydCBjb25zdCBjaGFuZ2VVc2VyUm9sZXMgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc3lzdGVtL3VzZXIvY2hhbmdlVXNlclJvbGVzJywgJ1BPU1QnKVxyXG4gICAgLy8g57uR5a6a5Y2V5L2NXHJcbmV4cG9ydCBjb25zdCBiaW5kRGVwdCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzeXN0ZW0vdXNlci9wcm9maWxlL2JpbmREZXB0JywgJ1BVVCcpXHJcbiAgICAvLyDmlrDlop7pooToraZcclxuZXhwb3J0IGNvbnN0IGFkZFdhcm5pbmcgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAneXVqaW5nL2FkZCcsICdQVVQnKVxyXG4gICAgLy8g5L+u5pS56aKE6K2mXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVXYXJuaW5nID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3l1amluZy9lZGl0JywgJ1BVVCcpXHJcbiAgICAvLyDmoLnmja7pooToraZJZOiOt+WPluivpue7huS/oeaBr1xyXG5leHBvcnQgY29uc3QgZ2V0V2FybmluZ0luZm8gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3Qoe30sICd5dWppbmcvZ2V0SW5mb0J5QXV0aG9yaXphdGlvbi8nICsgcGFyYW1zLnl1SmluZ0lkLCAnR0VUJylcclxuICAgIC8vIOiOt+WPlumihOitpuWIl+ihqFxyXG5leHBvcnQgY29uc3QgYXBwbGV0c0xpc3QgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAneXVqaW5nL2FwcGxldHMvbGlzdCcsICdHRVQnKVxyXG4gICAgLy8g6I635Y+W6aKE6K2m562J57qn6YCJ5oup5qGG5YiX6KGoXHJcbmV4cG9ydCBjb25zdCB3YXJuT3B0aW9ucyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd5dWppbmcvb3B0aW9uc2VsZWN0JywgJ0dFVCcpXHJcbiAgICAvLyDojrflj5blnLDngrnkuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IG1vbml0b3JBcmVhT3B0aW9ucyA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdtb25pdG9yQXJlYS9vcHRpb25zZWxlY3QnLCAnR0VUJylcclxuICAgIC8vIOWPquacieWNleS9jeeuoeeQhuWRmOWPr+S7peiOt+WPluWNleS9jeS4i+eahOeUqOaIt+WIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0VXNlckJ5RGVwdCA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ3N5c3RlbS91c2VyL2dldE15JywgJ0dFVCcpXHJcbiAgICAvLyDmiJHnmoTkv6Hmga9cclxuZXhwb3J0IGNvbnN0IGdldE15SW5mbyA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ3N5c3RlbS91c2VyL2dldE15SW5mbycsICdHRVQnKVxyXG4gICAgLy8g55So5oi36K6+5aSH54q25oCB5L+u5pS5XHJcbmV4cG9ydCBjb25zdCB1c2VyQ2hhbmdlU3RhdHVzID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3N5c3RlbS91c2VyL3VzZXJNb25pdG9yQXJlYUNoYW5nZVN0YXR1cycsICdQVVQnKVxyXG4gICAgLy8g6I635Y+W55u45YWz5Lq65ZGY5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRNeURlcHRVc2VyT3B0aW9ucyA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ3N5c3RlbS91c2VyL215RGVwdFVzZXJMaXN0T3B0aW9uc2VsZWN0JywgJ0dFVCcpXHJcbiAgICAvLyDmk43kvZzorrDlvZVcclxuZXhwb3J0IGNvbnN0IGdldE9wZXJsb2cgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnbW9uaXRvci9vcGVybG9nL2xpc3QnLCAnR0VUJylcclxuICAgIC8vIOaIkeeahOWNleS9jeeUqOaIt+WIl+ihqOOAkOWIhumhteOAkVxyXG5leHBvcnQgY29uc3QgZ2V0RGVwdFVzZXJMaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3N5c3RlbS91c2VyL2dldE15RGVwdFVzZXJMaXN0JywgJ0dFVCcpXHJcbiAgICAvLyDmiJHnmoTnm5HmtYvliJfooagg44CQ5YiG6aG144CRXHJcbmV4cG9ydCBjb25zdCBnZXRNb2l0b3JMaXN0ID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3N5c3RlbS91c2VyL2dldE15TW9uaXRvckFyZWFMaXN0JywgJ0dFVCcpXHJcbiAgICAvLyDmiJHnmoQt6KeS6Imy5LiL5ouJ5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBvcHRpb25zUm9sZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzeXN0ZW0vcm9sZS9vcHRpb25zZWxlY3RGb3JBcHAnLCAnR0VUJylcclxuICAgIC8vIOagueaNrueUqOaIt+afpeivouebkea1i+WMuuWfn+eahOaVsOaNriAgdXNlcklkXHJcbmV4cG9ydCBjb25zdCBnZXRBcmVhQnlVc2VyID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ21vbml0b3JkYXRhL2dldEFyZWFCeVVzZXJJZCcsICdHRVQnKVxyXG4gICAgLy8g5qC55o2u6YOo6Zeo5p+l6K+i55uR5rWL5Yy65Z+f55qE5pWw5o2uICBkZXB0SWRcclxuZXhwb3J0IGNvbnN0IGdldEFyZWFCeURlcHQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnbW9uaXRvcmRhdGEvZ2V0QXJlYUJ5RGVwdElkJywgJ0dFVCcpXHJcbiAgICAvLyDmoLnmja7ljLrln59JZOafpeivouebkea1i+WMuuWfn+eahOaVsOaNriAgbW9uaXRvckFyZWFJZFxyXG5leHBvcnQgY29uc3QgZ2V0QXJlYUJ5SWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnbW9uaXRvcmRhdGEvZ2V0QXJlYUJ5SWQnLCAnR0VUJylcclxuICAgIC8vIOiOt+WPluaJgOacieeahOebkea1i+WMuuWfn+eahOaVsOaNrlxyXG5leHBvcnQgY29uc3QgZ2V0QXJlYUxpc3QgPSAoKSA9PiB3eFJlcXVlc3Qoe30sICdtb25pdG9yZGF0YS9nZXRBbGxBcmVhTGlzdCcsICdHRVQnKVxyXG4gICAgLy8g6I635Y+WR3Bz55uR5rWL5Yy65Z+f55qE6YCJ5oup5LiL5ouJ5qGGXHJcbmV4cG9ydCBjb25zdCBtb25pdG9yT3B0aW9uc2UgPSAoKSA9PiB3eFJlcXVlc3Qoe30sICdtb25pdG9yZGF0YS9vcHRpb25zZWxlY3QnLCAnR0VUJylcclxuICAgIC8vIOagueaNruWMuuWfn0lk5p+l6K+i6K6+5aSH5YiX6KGoIC0g55uR5rWL5Yy65Z+f6aG16Z2iXHJcbmV4cG9ydCBjb25zdCBnZXREZXZpY2VMaXN0QnlBcmVhSWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnbW9uaXRvcmRhdGEvcXVlcnlEZXZpY2VMaXN0QnlBcmVhSWRGcm9tUmVkaXMnLCAnR0VUJylcclxuICAgIC8vIOagueaNruWMuuWfn0lk5ZKM6K6+5aSH57G75Z6L5p+l6K+i6K6+5aSH5YiX6KGoICAtIOesrOS6jOS4quexu+Wei+mhtemdolxyXG5leHBvcnQgY29uc3QgZ2V0RGV2aWNlTGlzdEJ5QXJlYUlkQW5kVHlwZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdtb25pdG9yZGF0YS9xdWVyeURldmljZUxpc3RCeUFyZWFJZEFuZFR5cGVGcm9tUmVkaXMnLCAnR0VUJylcclxuICAgIC8vIOagueaNruiuvuWkh0lk5ZKM6K6+5aSH57G75Z6L5p+l6K+i6K6+5aSH5YiX6KGoIC0g56ys5LiJ5Liq6aG16Z2i6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBnZXREZXZpY2VIaXN0b3J5RGF0YUJ5RGV2aWNlSWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnbW9uaXRvcmRhdGEvcXVlcnlEZXZpY2VIaXN0b3J5RGF0YUJ5RGV2aWNlSWRGcm9tUmVkaXMnLCAnR0VUJylcclxuICAgIC8vIOS/ruaUuemihOitpueKtuaAgeS4uuW3suWkhOeQhueKtuaAgVxyXG5leHBvcnQgY29uc3QgY2hhbmdlUHJvY2Vzc2VkID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3l1amluZy91cGRhdGVQcm9jZXNzZWQnKVxyXG4gICAgLy8g6aKE6K2m6I+c5Y2V5LiK5pi+56S657qi6Imy55qE5pWw5YC8KOacquWkhOeQhueahOmihOitpuaVsOmHjylcclxuZXhwb3J0IGNvbnN0IGdldFVucmVhZCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd5dWppbmcvcXVlcnlVbnByb2Nlc3NlZFF1YW50aXR5JywgJ0dFVCcsIGZhbHNlKVxyXG4gICAgLy8g6Kej57uR5Y2V5L2NXHJcbmV4cG9ydCBjb25zdCB1bml0ZURlcHQgPSAoKSA9PiB3eFJlcXVlc3Qoe30sICdzeXN0ZW0vdXNlci9wcm9maWxlL3VuaXRlRGVwdCcpXHJcbiAgICAvLyDpooTorabkv6Hmga/mk43kvZzml6Xlv5cgeXVqaW5nSWQt6aKE6K2m5Li76ZSuSWRcclxuZXhwb3J0IGNvbnN0IHJlcG9ydE9wZXJMb2dzID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3l1amluZy9maW5kWXVKaW5nT3BlckxvZycsICdHRVQnKVxyXG4gICAgLy8g6KeG6aKR55uR5o6n5YiX6KGoIGFyZWFJZC3ljLrln59JZFxyXG5leHBvcnQgY29uc3QgZ2V0TW9uaXRvckRldmljZUxpc3QgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnbW9uaXRvckFyZWEvZ2V0TW9uaXRvckRldmljZUxpc3RCeUFyZWFJZCcsICdHRVQnKSJdfQ==