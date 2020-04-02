import wepy from 'wepy'
import {
    getStore
} from 'wepy-redux'
import tip from '../utils/tip'

import qs from 'qs';

const wxRequest = async(params = {}, url, method = 'POST', showLoding = true) => {
    showLoding && tip.loading();

    let header = {};

    if (method == 'PUT') {
        header['content-type'] = 'application/json'
    } else {
        header['content-type'] = 'application/x-www-form-urlencoded'
    }

    const store = getStore();
    let globalData = store.getState().user.globalData;

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
                wx.navigateTo({
                    url: '/pages/login'
                })
            }, 1000)
        }

        if (result.code == 500 && result.msg) {
            wx.showToast({
                title: result.msg,
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
    // 解密微信手机号
export const decryptPhone = (params) => wxRequest(params, 'decryptWeChatPhoneNumber');
// 微信授权登录 - 手动录入手机号
export const wechatByPhone = (params) => wxRequest(params, 'wetChatLoginByPhoneNumber')
    // 获取用户信息
export const getUserInfo = () => wxRequest({}, 'getInfo', 'GET')
    // 退出登录
export const userLogout = () => wxRequest({}, 'logout')
    // 修改用户信息
export const updateUser = (params) => wxRequest(params, 'system/user/profile', 'PUT')
    // 绑定单位
export const bindDept = (params) => wxRequest(params, 'system/user/profile/bindDept', 'PUT')
    // 新增预警
export const addWarning = (params) => wxRequest(params, 'yujing/add', 'PUT')
    // 修改预警
export const updateWarning = (params) => wxRequest(params, 'yujing/edit', 'PUT')
    // 根据预警Id获取详细信息
export const getWarningInfo = (params) => wxRequest({}, 'yujing/' + params.yuJingId, 'GET')
    // 获取预警列表
export const warnList = (params) => wxRequest(params, 'yujing/list2', 'GET')
    // 获取预警等级选择框列表
export const warnOptions = (params) => wxRequest(params, 'yujing/optionselect', 'GET')
    // 获取设备列表
export const deviceOptions = (params) => wxRequest(params, 'device/optionselect', 'GET')
    // 只有单位管理员可以获取单位下的用户列表
export const getUserByDept = () => wxRequest({}, 'system/user/getMy', 'GET')
    // 我的信息
export const getMyInfo = () => wxRequest({}, 'system/user/getMyInfo', 'GET')
    // 用户设备状态修改
export const userChangeStatus = (params) => wxRequest(params, 'system/user/userDeviceChangeStatus', 'PUT')
    // 获取上级单位的用户列表
export const getParentDeptUser = () => wxRequest({}, 'system/user/getpParentDeptUserlist', 'GET')
    // 操作记录
export const getOperlog = (params) => wxRequest(params, 'monitor/operlog/list', 'GET')
    // 我的单位用户列表【分页】
export const getDeptUserList = (params) => wxRequest(params, 'system/user/getMyDeptUserList', 'GET')
    // 我的监测列表 【分页】
export const getDevieList = (params) => wxRequest(params, 'system/user/getMyDeviceList', 'GET')