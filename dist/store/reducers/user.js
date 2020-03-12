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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXIuanMiXSwibmFtZXMiOlsic3RhdGUiLCJhY3Rpb24iLCJ1c2VySW5mbyIsImdsb2JhbERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztrQkFFZSx1RkFFTixrQkFGTSw0QkFFY0EsS0FGZCxFQUVxQkMsTUFGckIsRUFFNkI7QUFDaEMsd0JBQ09ELEtBRFA7QUFFSUUsK0JBQWNGLE1BQU1FLFFBQXBCLEVBQWlDRCxPQUFPQyxRQUF4QztBQUZKO0FBSUgsQ0FQTSxtQ0FRTixvQkFSTSw4QkFRZ0JGLEtBUmhCLEVBUXVCQyxNQVJ2QixFQVErQjtBQUNsQyx3QkFDT0QsS0FEUDtBQUVJRyxpQ0FBZ0JILE1BQU1HLFVBQXRCLEVBQXFDRixPQUFPRSxVQUE1QztBQUZKO0FBSUgsQ0FiTSxvQkFjUjtBQUNDO0FBQ0FELGNBQVUsRUFGWDtBQUtDO0FBQ0FDLGdCQUFZO0FBTmIsQ0FkUSxDIiwiZmlsZSI6InVzZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVBY3Rpb25zIH0gZnJvbSAncmVkdXgtYWN0aW9ucydcblxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlQWN0aW9ucyhcbiAgICB7XG4gICAgICAgIFsnVVBEQVRFX1VTRVJfSU5GTyddKHN0YXRlLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgICAgICAgICAgdXNlckluZm86IHsuLi5zdGF0ZS51c2VySW5mbywgLi4uYWN0aW9uLnVzZXJJbmZvIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgWydVUERBVEVfR0xPQkFMX0RBVEEnXShzdGF0ZSwgYWN0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgICAgIGdsb2JhbERhdGE6IHsuLi5zdGF0ZS5nbG9iYWxEYXRhLCAuLi5hY3Rpb24uZ2xvYmFsRGF0YSB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSwge1xuICAgICAgICAvLyDnlKjmiLfkv6Hmga9cbiAgICAgICAgdXNlckluZm86IHtcblxuICAgICAgICB9LFxuICAgICAgICAvLyDlhajlsYDkv6Hmga9cbiAgICAgICAgZ2xvYmFsRGF0YToge1xuXG4gICAgICAgIH1cbiAgICB9XG4pIl19