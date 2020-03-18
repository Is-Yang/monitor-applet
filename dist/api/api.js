'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.userLogout = exports.getUserInfo = exports.wechatByPhone = exports.decryptPhone = exports.wechatLogin = exports.getOpenid = exports.smsLogin = exports.getCode = undefined;

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
    var header, store, globalData, token, environment, data, res, result;
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
            environment = 'test';

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
              wx.navigateTo({
                url: '/pages/login'
              });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93TG9kaW5nIiwidGlwIiwibG9hZGluZyIsImhlYWRlciIsInN0b3JlIiwiZ2xvYmFsRGF0YSIsImdldFN0YXRlIiwidXNlciIsInRva2VuIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImVudmlyb25tZW50IiwiZGF0YSIsInFzIiwic3RyaW5naWZ5Iiwid2VweSIsInJlcXVlc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJsb2FkZWQiLCJyZXN1bHQiLCJjb2RlIiwibmF2aWdhdGVUbyIsIm1zZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiZ2V0Q29kZSIsInNtc0xvZ2luIiwiZ2V0T3BlbmlkIiwid2VjaGF0TG9naW4iLCJkZWNyeXB0UGhvbmUiLCJ3ZWNoYXRCeVBob25lIiwiZ2V0VXNlckluZm8iLCJ1c2VyTG9nb3V0IiwidXBkYXRlVXNlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBR0E7Ozs7QUFFQTs7Ozs7Ozs7QUFFQSxJQUFNQTtBQUFBLHFFQUFZO0FBQUEsUUFBT0MsTUFBUCx1RUFBZ0IsRUFBaEI7QUFBQSxRQUFvQkMsR0FBcEI7QUFBQSxRQUF5QkMsTUFBekIsdUVBQWtDLE1BQWxDO0FBQUEsUUFBMENDLFVBQTFDLHVFQUF1RCxJQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDaEJBLDBCQUFjQyxjQUFJQyxPQUFKLEVBQWQ7O0FBRUlDLGtCQUhZLEdBR0gsRUFIRzs7O0FBS2hCLGdCQUFJSixVQUFVLEtBQWQsRUFBcUI7QUFDbkJJLHFCQUFPLGNBQVAsSUFBeUIsa0JBQXpCO0FBQ0QsYUFGRCxNQUVPO0FBQ0xBLHFCQUFPLGNBQVAsSUFBeUIsbUNBQXpCO0FBQ0Q7O0FBRUtDLGlCQVhVLEdBV0YsMEJBWEU7QUFZWkMsc0JBWlksR0FZQ0QsTUFBTUUs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RUFBYyxRQUFkLENBQU47QUFBQSxDQUFuQjtBQUNQO0FBQ08sSUFBTTJDLGtDQUFhLFNBQWJBLFVBQWEsQ0FBQzFDLE1BQUQ7QUFBQSxTQUFZRCxVQUFVQyxNQUFWLEVBQWtCLHFCQUFsQixFQUF5QyxLQUF6QyxDQUFaO0FBQUEsQ0FBbkIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7XG4gIGdldFN0b3JlXG59IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcblxuaW1wb3J0IHFzIGZyb20gJ3FzJztcblxuY29uc3Qgd3hSZXF1ZXN0ID0gYXN5bmMgKHBhcmFtcyA9IHt9LCB1cmwsIG1ldGhvZCA9ICdQT1NUJywgc2hvd0xvZGluZyA9IHRydWUpID0+IHtcbiAgc2hvd0xvZGluZyAmJiB0aXAubG9hZGluZygpO1xuXG4gIGxldCBoZWFkZXIgPSB7fTtcblxuICBpZiAobWV0aG9kID09ICdQVVQnKSB7XG4gICAgaGVhZGVyWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9IGVsc2Uge1xuICAgIGhlYWRlclsnY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICB9XG5cbiAgY29uc3Qgc3RvcmUgPSBnZXRTdG9yZSgpO1xuICBsZXQgZ2xvYmFsRGF0YSA9IHN0b3JlLmdldFN0YXRlKCkudXNlci5nbG9iYWxEYXRhO1xuXG4gIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xuXG4gIGlmICh0b2tlbikge1xuICAgIGhlYWRlclsnQXV0aG9yaXphdGlvbiddID0gdG9rZW47XG4gIH1cbiAgbGV0IGVudmlyb25tZW50ID0gJ3Rlc3QnO1xuICBpZiAoZW52aXJvbm1lbnQgPT0gJ3Byb2QnKSB7XG4gICAgdXJsID0gJ2h0dHBzOi8vdGNiLWFwaS50ZW5jZW50Y2xvdWRhcGkuY29tJyArIHVybDtcbiAgfSBlbHNlIGlmIChlbnZpcm9ubWVudCA9PSAndGVzdCcpIHtcbiAgICB1cmwgPSAnaHR0cHM6Ly9iZWlkb3Uuc2lnbmFsZmlyZS5uZXQuY24vJyArIHVybDtcbiAgICAvLyB1cmwgPSAnaHR0cHM6Ly9tb2NrLmFwaS5zaWduYWxmaXJlLm5ldC5jbi9tb2NrLzVlNmUzM2UzMjk1YTI3NDM2Mzc5NzQzMy9leGFtcGxlLycgKyB1cmw7XG4gIH1cbiAgbGV0IGRhdGEgPSBtZXRob2QgPT0gJ1BPU1QnID8gcXMuc3RyaW5naWZ5KHBhcmFtcykgOiBwYXJhbXM7XG5cbiAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgaGVhZGVyLFxuICAgIHVybCxcbiAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICBkYXRhOiBkYXRhLFxuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3dlcHkgcmVxdWVyc3QgZXJyOicgKyBlcnIpO1xuICB9KTtcblxuICBzaG93TG9kaW5nICYmIHRpcC5sb2FkZWQoKTtcblxuICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XG4gICAgbGV0IHJlc3VsdCA9IHJlcy5kYXRhO1xuICAgIC8vIOacquaOiOadg1xuICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDEpIHtcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4nXG4gICAgICB9KVxuICAgIH1cblxuICAgIGlmIChyZXN1bHQuY29kZSA9PSA1MDAgJiYgcmVzdWx0Lm1zZykge1xuICAgICAgd3guc2hvd1RvYXN0KHtcbiAgICAgICAgdGl0bGU6IHJlc3VsdC5tc2csXG4gICAgICAgIGljb246ICdub25lJyxcbiAgICAgICAgZHVyYXRpb246IDE1MDBcbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiByZXMuZGF0YTtcbiAgfVxufVxuXG4vLyDojrflj5bpqozor4HnoIFcbmV4cG9ydCBjb25zdCBnZXRDb2RlID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3Ntc2NvZGUnLCAnR0VUJylcbi8vIOefreS/oemqjOivgeeggeeZu+W9lVxuZXhwb3J0IGNvbnN0IHNtc0xvZ2luID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3Ntc2xvZ2luJylcbi8vIOiOt+WPluW+ruS/oW9wZW5JZFxuZXhwb3J0IGNvbnN0IGdldE9wZW5pZCA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdnZXRPcGVuaWQnKVxuLy8g5b6u5L+h5o6I5p2D55m75b2VXG5leHBvcnQgY29uc3Qgd2VjaGF0TG9naW4gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnd2VjaGF0bG9naW4nKVxuLy8g6Kej5a+G5b6u5L+h5omL5py65Y+3XG5leHBvcnQgY29uc3QgZGVjcnlwdFBob25lID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ2RlY3J5cHRXZUNoYXRQaG9uZU51bWJlcicpO1xuLy8g5b6u5L+h5o6I5p2D55m75b2VIC0g5omL5Yqo5b2V5YWl5omL5py65Y+3XG5leHBvcnQgY29uc3Qgd2VjaGF0QnlQaG9uZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd3ZXRDaGF0TG9naW5CeVBob25lTnVtYmVyJylcbi8vIOiOt+WPlueUqOaIt+S/oeaBr1xuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gKCkgPT4gd3hSZXF1ZXN0KHt9LCAnZ2V0SW5mbycsICdHRVQnKVxuLy8g6YCA5Ye655m75b2VXG5leHBvcnQgY29uc3QgdXNlckxvZ291dCA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ2xvZ291dCcpXG4vLyDkv67mlLnnlKjmiLfkv6Hmga9cbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3N5c3RlbS91c2VyL3Byb2ZpbGUnLCAnUFVUJylcbiJdfQ==