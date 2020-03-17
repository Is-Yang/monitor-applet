import wepy from 'wepy'
import {
    getStore
} from 'wepy-redux'
import tip from '../utils/tip'

import qs from 'qs';

const wxRequest = async(params = {}, url, method = 'POST', showLoding = true) => {
    showLoding && tip.loading();

    let header = {
        'content-type': 'application/x-www-form-urlencoded'
    };

    const store = getStore();
    let globalData = store.getState().user.globalData;

    let token = wx.getStorageSync('token');

    if (token) {
        header['Authorization'] = token;
    }
    let environment = 'test';
    if (environment == 'prod') {
        url = 'https://tcb-api.tencentcloudapi.com' + url;
    } else if (environment == 'test') {
        url = 'https://beidou.signalfire.net.cn/' + url;
        // url = 'https://mock.api.signalfire.net.cn/mock/5e6e33e3295a274363797433/example/' + url;
    }
    let data = method == 'GET' ? params : qs.stringify(params);

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
            wx.navigateTo({
                url: '/pages/login'
            })
        }
        return res.data;
    }
}

// 获取验证码
export const getCode = (params) => wxRequest(params, 'smscode', 'GET')
// 短信验证码登录
export const smsLogin = (params) => wxRequest(params, 'smslogin')
// 微信授权登录
export const wechatLogin = (params) => wxRequest(params, 'wechatlogin')
// 获取用户信息
export const getUserInfo = () => wxRequest({}, 'getInfo', 'GET')
// 退出登录
export const userLogout = () => wxRequest({}, 'logout')
// 获取微信openId
export const getOpenid = (params) => wxRequest(params, 'getOpenid')
// 修改用户信息
export const updateUser = (params) => wxRequest(params, 'system/user/profile', 'PUT')