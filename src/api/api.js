import wepy from 'wepy'
import {
    getStore
} from 'wepy-redux'
import tip from '../utils/tip'

import qs from 'qs';

const wxRequest = async(params = {}, url, showLoding = true) => {
    showLoding && tip.loading();

    let header = {
        'content-type': 'application/x-www-form-urlencoded'
    };

    const store = getStore();
    let globalData = store.getState().user.globalData;
    let environment = 'test';
    if (environment == 'prod') {
        url = 'https://tcb-api.tencentcloudapi.com' + url;
    } else if (environment == 'test') {
        url = 'https://beidou.signalfire.net.cn' + url;
    }

    let res = await wepy.request({
        url,
        method: 'POST',
        data: qs.stringify(params),
        header
    }).catch((err) => {
        console.log('wepy requerst err:' + err);
    });

    showLoding && tip.loaded();

    if (res) {
        return res.data;
    }
}

// 获取验证码
export const getCode = (params) => wxRequest(params, '');