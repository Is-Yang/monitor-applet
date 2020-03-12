import { handleActions } from 'redux-actions'

export default handleActions(
    {
        ['UPDATE_USER_INFO'](state, action) {
            return {
                ...state,
                userInfo: {...state.userInfo, ...action.userInfo }
            }
        },
        ['UPDATE_GLOBAL_DATA'](state, action) {
            return {
                ...state,
                globalData: {...state.globalData, ...action.globalData }
            }
        },
    }, {
        // 用户信息
        userInfo: {

        },
        // 全局信息
        globalData: {

        }
    }
)