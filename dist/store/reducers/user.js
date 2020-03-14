'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _handleActions;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _reduxActions = require('./../../npm/redux-actions/lib/index.js');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.default = (0, _reduxActions.handleActions)((_handleActions = {}, _defineProperty(_handleActions, 'UPDATE_USER_INFO', function UPDATE_USER_INFO(state, action) {
    return _extends({}, state, {
        userInfo: _extends({}, state.userInfo, action.userInfo)
    });
}), _defineProperty(_handleActions, 'UPDATE_GLOBAL_DATA', function UPDATE_GLOBAL_DATA(state, action) {
    return _extends({}, state, {
        globalData: _extends({}, state.globalData, action.globalData)
    });
}), _handleActions), {
    // 用户信息
    userInfo: {},
    // 全局信息
    globalData: {}
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsic3RhdGUiLCJhY3Rpb24iLCJ1c2VySW5mbyIsImdsb2JhbERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztrQkFFZSx1RkFFTixrQkFGTSw0QkFFY0EsS0FGZCxFQUVxQkMsTUFGckIsRUFFNkI7QUFDaEMsd0JBQ09ELEtBRFA7QUFFSUUsK0JBQWNGLE1BQU1FLFFBQXBCLEVBQWlDRCxPQUFPQyxRQUF4QztBQUZKO0FBSUgsQ0FQTSxtQ0FRTixvQkFSTSw4QkFRZ0JGLEtBUmhCLEVBUXVCQyxNQVJ2QixFQVErQjtBQUNsQyx3QkFDT0QsS0FEUDtBQUVJRyxpQ0FBZ0JILE1BQU1HLFVBQXRCLEVBQXFDRixPQUFPRSxVQUE1QztBQUZKO0FBSUgsQ0FiTSxvQkFjUjtBQUNDO0FBQ0FELGNBQVUsRUFGWDtBQUtDO0FBQ0FDLGdCQUFZO0FBTmIsQ0FkUSxDIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZUFjdGlvbnMoXHJcbiAgICB7XHJcbiAgICAgICAgWydVUERBVEVfVVNFUl9JTkZPJ10oc3RhdGUsIGFjdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICB1c2VySW5mbzogey4uLnN0YXRlLnVzZXJJbmZvLCAuLi5hY3Rpb24udXNlckluZm8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBbJ1VQREFURV9HTE9CQUxfREFUQSddKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsRGF0YTogey4uLnN0YXRlLmdsb2JhbERhdGEsIC4uLmFjdGlvbi5nbG9iYWxEYXRhIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICB9LCB7XHJcbiAgICAgICAgLy8g55So5oi35L+h5oGvXHJcbiAgICAgICAgdXNlckluZm86IHtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyDlhajlsYDkv6Hmga9cclxuICAgICAgICBnbG9iYWxEYXRhOiB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuKSJdfQ==