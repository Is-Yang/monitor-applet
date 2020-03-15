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
    let environment = 'test';
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

    if (res) {
        return res.data;
    }
}

// 获取验证码
export const getCode = (params) => wxRequest(params, 'smscode', 'GET');