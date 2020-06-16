import wepy from 'wepy'
import tip from '../utils/tip'

import qs from 'qs';

const wxRequest = async(params = {}, url, method = 'POST', showLoding = true, tips = false) => {
    showLoding && tip.loading();

    let header = {};

    if (method == 'PUT') {
        header['content-type'] = 'application/json'
    } else {
        header['content-type'] = 'application/x-www-form-urlencoded'
    }

    let token = wx.getStorageSync('token');

    if (token) {
        header['Authorization'] = token;
    }
    let environment = wepy.$instance.globalData.env;
    if (environment == 'prod') {
        url = 'https://tcb-api.tencentcloudapi.com' + url;
    } else if (environment == 'test') {
        url = 'https://beidou.signalfire.net.cn/' + url;
        // url = 'https://mock.api.signalfire.net.cn/mock/5e6e33e3295a274363797433/example/' + url;
    }
    let data = method == 'POST' ? qs.stringify(params) : params;

    let res = await wepy.request({
        header,
        url,
        method: method,
        data: data,
    }).catch((err) => {
        console.log('wepy requerst err:' + err);
    });

    showLoding && tip.loaded();

    if (res && res.data) {
        let result = res.data;
        // 未授权
        if (result.code == 401) {
            let token = wx.getStorageSync('token');
            if (token) {
                wx.removeStorageSync('token')
            }
            setTimeout(() => {
                wx.redirectTo({
                    url: '/pages/login'
                })
            }, 1000)
        }

        // tips 是否自定义提示
        if (!tips && result.code == 500) {
            wx.showToast({
                title: result.msg || '服务器异常',
                icon: 'none',
                duration: 1500
            })
        }
        return res.data;
    }
}

// 获取验证码
export const getCode = (params) => wxRequest(params, 'smscode', 'GET')
    // 短信验证码登录
export const smsLogin = (params) => wxRequest(params, 'smslogin')
    // 获取微信openId
export const getOpenid = (params) => wxRequest(params, 'getOpenid')
    // 微信授权登录
export const wechatLogin = (params) => wxRequest(params, 'wechatlogin')
    // 获取是否绑定微信
export const bindWeChatState = (params) => wxRequest(params, 'isBindWeChat')
    // 解密微信手机号
export const decryptPhone = (params) => wxRequest(params, 'decryptWeChatPhoneNumber');
// 解密微信UnionId
export const decryptUnionId = (params) => wxRequest(params, 'decryptWeChatUnionId', 'POST', true, true);
// 微信授权登录 - 手动录入手机号
export const wechatByPhone = (params) => wxRequest(params, 'wetChatLoginByPhoneNumber')
    // 获取用户信息
export const getUserInfo = () => wxRequest({}, 'getInfo', 'GET')
    // 退出登录
export const userLogout = () => wxRequest({}, 'logout')
    // 修改用户信息
export const updateUser = (params) => wxRequest(params, 'system/user/profile', 'PUT')
    // 修改角色
export const changeUserRoles = (params) => wxRequest(params, 'system/user/changeUserRoles', 'POST')
    // 绑定单位
export const bindDept = (params) => wxRequest(params, 'system/user/profile/bindDept', 'PUT')
    // 新增预警
export const addWarning = (params) => wxRequest(params, 'yujing/add', 'PUT')
    // 修改预警
export const updateWarning = (params) => wxRequest(params, 'yujing/edit', 'PUT')
    // 根据预警Id获取详细信息
export const getWarningInfo = (params) => wxRequest({}, 'yujing/getInfoByAuthorization/' + params.yuJingId, 'GET')
    // 获取预警列表
export const appletsList = (params) => wxRequest(params, 'yujing/applets/list', 'GET')
    // 获取预警等级选择框列表
export const warnOptions = (params) => wxRequest(params, 'yujing/optionselect', 'GET')
    // 获取地点下拉框
export const monitorAreaOptions = (params) => wxRequest(params, 'monitorArea/optionselect', 'GET')
    // 只有单位管理员可以获取单位下的用户列表
export const getUserByDept = () => wxRequest({}, 'system/user/getMy', 'GET')
    // 我的信息
export const getMyInfo = () => wxRequest({}, 'system/user/getMyInfo', 'GET')
    // 用户设备状态修改
export const userChangeStatus = (params) => wxRequest(params, 'system/user/userMonitorAreaChangeStatus', 'PUT')
    // 获取相关人员列表
export const getMyDeptUserOptions = () => wxRequest({}, 'system/user/myDeptUserListOptionselect', 'GET')
    // 操作记录
export const getOperlog = (params) => wxRequest(params, 'monitor/operlog/list', 'GET')
    // 我的单位用户列表【分页】
export const getDeptUserList = (params) => wxRequest(params, 'system/user/getMyDeptUserList', 'GET')
    // 我的监测列表 【分页】
export const getMoitorList = (params) => wxRequest(params, 'system/user/getMyMonitorAreaList', 'GET')
    // 我的-角色下拉列表
export const optionsRole = (params) => wxRequest(params, 'system/role/optionselectForApp', 'GET')
    // 根据用户查询监测区域的数据  userId
export const getAreaByUser = (params) => wxRequest(params, 'monitordata/getAreaByUserId', 'GET')
    // 根据部门查询监测区域的数据  deptId
export const getAreaByDept = (params) => wxRequest(params, 'monitordata/getAreaByDeptId', 'GET')
    // 根据区域Id查询监测区域的数据  monitorAreaId
export const getAreaById = (params) => wxRequest(params, 'monitordata/getAreaById', 'GET')
    // 获取所有的监测区域的数据
export const getAreaList = () => wxRequest({}, 'monitordata/getAllAreaList', 'GET')
    // 获取Gps监测区域的选择下拉框
export const monitorOptionse = () => wxRequest({}, 'monitordata/optionselect', 'GET')
    // 根据区域Id查询设备列表 - 监测区域页面
export const getDeviceListByAreaId = (params) => wxRequest(params, 'monitordata/queryDeviceListByAreaIdFromRedis', 'GET')
    // 根据区域Id和设备类型查询设备列表  - 第二个类型页面
export const getDeviceListByAreaIdAndType = (params) => wxRequest(params, 'monitordata/queryDeviceListByAreaIdAndTypeFromRedis', 'GET')
    // 根据设备Id和设备类型查询设备列表 - 第三个页面详情
export const getDeviceHistoryDataByDeviceId = (params) => wxRequest(params, 'monitordata/queryDeviceHistoryDataByDeviceIdFromRedis', 'GET')
    // 修改预警状态为已处理状态
export const changeProcessed = (params) => wxRequest(params, 'yujing/updateProcessed')
    // 预警菜单上显示红色的数值(未处理的预警数量)
export const getUnread = (params) => wxRequest(params, 'yujing/queryUnprocessedQuantity', 'GET', false)
    // 解绑单位
export const uniteDept = () => wxRequest({}, 'system/user/profile/uniteDept')
    // 预警信息操作日志 yujingId-预警主键Id
export const reportOperLogs = (params) => wxRequest(params, 'yujing/findYuJingOperLog', 'GET')
    // 视频监控列表 areaId-区域Id
export const getMonitorDeviceList = (params) => wxRequest(params, 'monitorArea/getMonitorDeviceListByAreaId', 'GET')