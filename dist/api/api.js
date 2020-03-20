'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bindDept = exports.updateUser = exports.userLogout = exports.getUserInfo = exports.wechatByPhone = exports.decryptPhone = exports.wechatLogin = exports.getOpenid = exports.smsLogin = exports.getCode = undefined;

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

    var header, store, globalData, token, environment, data, res, result, _token;

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
              _token = wx.getStorageSync('token');

              if (_token) {
                wx.removeStorageSync('token');
              }
              setTimeout(function () {
                wx.navigateTo({
                  url: '/pages/login'
                });
              }, 1000);
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
// 绑定单位
var bindDept = exports.bindDept = function bindDept(params) {
  return wxRequest(params, 'system/user/profile/bindDept', 'PUT');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93TG9kaW5nIiwidGlwIiwibG9hZGluZyIsImhlYWRlciIsInN0b3JlIiwiZ2xvYmFsRGF0YSIsImdldFN0YXRlIiwidXNlciIsInRva2VuIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImVudmlyb25tZW50IiwiZGF0YSIsInFzIiwic3RyaW5naWZ5Iiwid2VweSIsInJlcXVlc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJsb2FkZWQiLCJyZXN1bHQiLCJjb2RlIiwicmVtb3ZlU3RvcmFnZVN5bmMiLCJzZXRUaW1lb3V0IiwibmF2aWdhdGVUbyIsIm1zZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiZ2V0Q29kZSIsInNtc0xvZ2luIiwiZ2V0T3BlbmlkIiwid2VjaGF0TG9naW4iLCJkZWNyeXB0UGhvbmUiLCJ3ZWNoYXRCeVBob25lIiwiZ2V0VXNlckluZm8iLCJ1c2VyTG9nb3V0IiwidXBkYXRlVXNlciIsImJpbmREZXB0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUVBOzs7Ozs7OztBQUVBLElBQU1BO0FBQUEscUVBQVk7QUFBQSxRQUFPQyxNQUFQLHVFQUFnQixFQUFoQjtBQUFBLFFBQW9CQyxHQUFwQjtBQUFBLFFBQXlCQyxNQUF6Qix1RUFBa0MsTUFBbEM7QUFBQSxRQUEwQ0MsVUFBMUMsdUVBQXVELElBQXZEOztBQUFBOztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ2hCQSwwQkFBY0MsY0FBSUMsT0FBSixFQUFkOztBQUVJQyxrQkFIWSxHQUdILEVBSEc7OztBQUtoQixnQkFBSUosVUFBVSxLQUFkLEVBQXFCO0FBQ25CSSxxQkFBTyxjQUFQLElBQXlCLGtCQUF6QjtBQUNELGFBRkQsTUFFTztBQUNMQSxxQkFBTyxjQUFQLElBQXlCLG1DQUF6QjtBQUNEOztBQUVLQyxpQkFYVSxHQVdGLDBCQVhFO0FBWVpDLHNCQVpZLEdBWUNELE1BQU1FLFFBQU4sR0FBaUJDLElBQWpCLENBQXNCRixVQVp2QjtBQWNaRyxpQkFkWSxHQWNKQyxHQUFHQyxjQUFILENBQWtCLE9BQWxCLENBZEk7OztBQWdCaEIsZ0JBQUlGLEtBQUosRUFBVztBQUNUTCxxQkFBTyxlQUFQLElBQTBCSyxLQUExQjtBQUNEO0FBQ0dHLHVCQW5CWSxHQW1CRSxNQW5CRjs7QUFvQmhCLGdCQUFJQSxlQUFlLE1BQW5CLEVBQTJCO0FBQ3pCYixvQkFBTSx3Q0FBd0NBLEdBQTlDO0FBQ0QsYUFGRCxNQUVPLElBQUlhLGVBQWUsTUFBbkIsRUFBMkI7QUFDaENiLG9CQUFNLHNDQUFzQ0EsR0FBNUM7QUFDQTtBQUNEO0FBQ0djLGdCQTFCWSxHQTBCTGIsVUFBVSxNQUFWLEdBQW1CYyxhQUFHQyxTQUFILENBQWFqQixNQUFiLENBQW5CLEdBQTBDQSxNQTFCckM7QUFBQTtBQUFBLG1CQTRCQWtCLGVBQUtDLE9BQUwsQ0FBYTtBQUMzQmIsNEJBRDJCO0FBRTNCTCxzQkFGMkI7QUFHM0JDLHNCQUFRQSxNQUhtQjtBQUkzQmEsb0JBQU1BO0FBSnFCLGFBQWIsRUFLYkssS0FMYSxDQUtQLFVBQUNDLEdBQUQsRUFBUztBQUNoQkMsc0JBQVFDLEdBQVIsQ0FBWSx1QkFBdUJGLEdBQW5DO0FBQ0QsYUFQZSxDQTVCQTs7QUFBQTtBQTRCWkcsZUE1Qlk7OztBQXFDaEJyQiwwQkFBY0MsY0FBSXFCLE1BQUosRUFBZDs7QUFyQ2dCLGtCQXVDWkQsT0FBT0EsSUFBSVQsSUF2Q0M7QUFBQTtBQUFBO0FBQUE7O0FBd0NWVyxrQkF4Q1UsR0F3Q0RGLElBQUlULElBeENIO0FBeUNkOztBQUNBLGdCQUFJVyxPQUFPQyxJQUFQLElBQWUsR0FBbkIsRUFBd0I7QUFDbEJoQixvQkFEa0IsR0FDVkMsR0FBR0MsY0FBSCxDQUFrQixPQUFsQixDQURVOztBQUV0QixrQkFBSUYsTUFBSixFQUFXO0FBQ1RDLG1CQUFHZ0IsaUJBQUgsQ0FBcUIsT0FBckI7QUFDRDtBQUNEQyx5QkFBVyxZQUFLO0FBQ1pqQixtQkFBR2tCLFVBQUgsQ0FBYztBQUNWN0IsdUJBQUs7QUFESyxpQkFBZDtBQUdILGVBSkQsRUFJRyxJQUpIO0FBS0Q7O0FBRUQsZ0JBQUl5QixPQUFPQyxJQUFQLElBQWUsR0FBZixJQUFzQkQsT0FBT0ssR0FBakMsRUFBc0M7QUFDcENuQixpQkFBR29CLFNBQUgsQ0FBYTtBQUNYQyx1QkFBT1AsT0FBT0ssR0FESDtBQUVYRyxzQkFBTSxNQUZLO0FBR1hDLDBCQUFVO0FBSEMsZUFBYjtBQUtEO0FBNURhLDZDQTZEUFgsSUFBSVQsSUE3REc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQWlFQTtBQUNPLElBQU1xQiw0QkFBVSxTQUFWQSxPQUFVLENBQUNwQyxNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQixTQUFsQixFQUE2QixLQUE3QixDQUFaO0FBQUEsQ0FBaEI7QUFDUDtBQUNPLElBQU1xQyw4QkFBVyxTQUFYQSxRQUFXLENBQUNyQyxNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQixVQUFsQixDQUFaO0FBQUEsQ0FBakI7QUFDUDtBQUNPLElBQU1zQyxnQ0FBWSxTQUFaQSxTQUFZLENBQUN0QyxNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQixXQUFsQixDQUFaO0FBQUEsQ0FBbEI7QUFDUDtBQUNPLElBQU11QyxvQ0FBYyxTQUFkQSxXQUFjLENBQUN2QyxNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQixhQUFsQixDQUFaO0FBQUEsQ0FBcEI7QUFDUDtBQUNPLElBQU13QyxzQ0FBZSxTQUFmQSxZQUFlLENBQUN4QyxNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQiwwQkFBbEIsQ0FBWjtBQUFBLENBQXJCO0FBQ1A7QUFDTyxJQUFNeUMsd0NBQWdCLFNBQWhCQSxhQUFnQixDQUFDekMsTUFBRDtBQUFBLFNBQVlELFVBQVVDLE1BQVYsRUFBa0IsMkJBQWxCLENBQVo7QUFBQSxDQUF0QjtBQUNQO0FBQ08sSUFBTTBDLG9DQUFjLFNBQWRBLFdBQWM7QUFBQSxTQUFNM0MsVUFBVSxFQUFWLEVBQWMsU0FBZCxFQUF5QixLQUF6QixDQUFOO0FBQUEsQ0FBcEI7QUFDUDtBQUNPLElBQU00QyxrQ0FBYSxTQUFiQSxVQUFhO0FBQUEsU0FBTTVDLFVBQVUsRUFBVixFQUFjLFFBQWQsQ0FBTjtBQUFBLENBQW5CO0FBQ1A7QUFDTyxJQUFNNkMsa0NBQWEsU0FBYkEsVUFBYSxDQUFDNUMsTUFBRDtBQUFBLFNBQVlELFVBQVVDLE1BQVYsRUFBa0IscUJBQWxCLEVBQXlDLEtBQXpDLENBQVo7QUFBQSxDQUFuQjtBQUNQO0FBQ08sSUFBTTZDLDhCQUFXLFNBQVhBLFFBQVcsQ0FBQzdDLE1BQUQ7QUFBQSxTQUFZRCxVQUFVQyxNQUFWLEVBQWtCLDhCQUFsQixFQUFrRCxLQUFsRCxDQUFaO0FBQUEsQ0FBakIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbmltcG9ydCB7XG4gIGdldFN0b3JlXG59IGZyb20gJ3dlcHktcmVkdXgnXG5pbXBvcnQgdGlwIGZyb20gJy4uL3V0aWxzL3RpcCdcblxuaW1wb3J0IHFzIGZyb20gJ3FzJztcblxuY29uc3Qgd3hSZXF1ZXN0ID0gYXN5bmMgKHBhcmFtcyA9IHt9LCB1cmwsIG1ldGhvZCA9ICdQT1NUJywgc2hvd0xvZGluZyA9IHRydWUpID0+IHtcbiAgc2hvd0xvZGluZyAmJiB0aXAubG9hZGluZygpO1xuXG4gIGxldCBoZWFkZXIgPSB7fTtcblxuICBpZiAobWV0aG9kID09ICdQVVQnKSB7XG4gICAgaGVhZGVyWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi9qc29uJ1xuICB9IGVsc2Uge1xuICAgIGhlYWRlclsnY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJ1xuICB9XG5cbiAgY29uc3Qgc3RvcmUgPSBnZXRTdG9yZSgpO1xuICBsZXQgZ2xvYmFsRGF0YSA9IHN0b3JlLmdldFN0YXRlKCkudXNlci5nbG9iYWxEYXRhO1xuXG4gIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xuXG4gIGlmICh0b2tlbikge1xuICAgIGhlYWRlclsnQXV0aG9yaXphdGlvbiddID0gdG9rZW47XG4gIH1cbiAgbGV0IGVudmlyb25tZW50ID0gJ3Rlc3QnO1xuICBpZiAoZW52aXJvbm1lbnQgPT0gJ3Byb2QnKSB7XG4gICAgdXJsID0gJ2h0dHBzOi8vdGNiLWFwaS50ZW5jZW50Y2xvdWRhcGkuY29tJyArIHVybDtcbiAgfSBlbHNlIGlmIChlbnZpcm9ubWVudCA9PSAndGVzdCcpIHtcbiAgICB1cmwgPSAnaHR0cHM6Ly9iZWlkb3Uuc2lnbmFsZmlyZS5uZXQuY24vJyArIHVybDtcbiAgICAvLyB1cmwgPSAnaHR0cHM6Ly9tb2NrLmFwaS5zaWduYWxmaXJlLm5ldC5jbi9tb2NrLzVlNmUzM2UzMjk1YTI3NDM2Mzc5NzQzMy9leGFtcGxlLycgKyB1cmw7XG4gIH1cbiAgbGV0IGRhdGEgPSBtZXRob2QgPT0gJ1BPU1QnID8gcXMuc3RyaW5naWZ5KHBhcmFtcykgOiBwYXJhbXM7XG5cbiAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XG4gICAgaGVhZGVyLFxuICAgIHVybCxcbiAgICBtZXRob2Q6IG1ldGhvZCxcbiAgICBkYXRhOiBkYXRhLFxuICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ3dlcHkgcmVxdWVyc3QgZXJyOicgKyBlcnIpO1xuICB9KTtcblxuICBzaG93TG9kaW5nICYmIHRpcC5sb2FkZWQoKTtcblxuICBpZiAocmVzICYmIHJlcy5kYXRhKSB7XG4gICAgbGV0IHJlc3VsdCA9IHJlcy5kYXRhO1xuICAgIC8vIOacquaOiOadg1xuICAgIGlmIChyZXN1bHQuY29kZSA9PSA0MDEpIHtcbiAgICAgIGxldCB0b2tlbiA9IHd4LmdldFN0b3JhZ2VTeW5jKCd0b2tlbicpO1xuICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgIHd4LnJlbW92ZVN0b3JhZ2VTeW5jKCd0b2tlbicpXG4gICAgICB9XG4gICAgICBzZXRUaW1lb3V0KCgpPT4ge1xuICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbG9naW4nXG4gICAgICAgICAgfSlcbiAgICAgIH0sIDEwMDApXG4gICAgfVxuXG4gICAgaWYgKHJlc3VsdC5jb2RlID09IDUwMCAmJiByZXN1bHQubXNnKSB7XG4gICAgICB3eC5zaG93VG9hc3Qoe1xuICAgICAgICB0aXRsZTogcmVzdWx0Lm1zZyxcbiAgICAgICAgaWNvbjogJ25vbmUnLFxuICAgICAgICBkdXJhdGlvbjogMTUwMFxuICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIHJlcy5kYXRhO1xuICB9XG59XG5cbi8vIOiOt+WPlumqjOivgeeggVxuZXhwb3J0IGNvbnN0IGdldENvZGUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc21zY29kZScsICdHRVQnKVxuLy8g55+t5L+h6aqM6K+B56CB55m75b2VXG5leHBvcnQgY29uc3Qgc21zTG9naW4gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc21zbG9naW4nKVxuLy8g6I635Y+W5b6u5L+hb3BlbklkXG5leHBvcnQgY29uc3QgZ2V0T3BlbmlkID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ2dldE9wZW5pZCcpXG4vLyDlvq7kv6HmjojmnYPnmbvlvZVcbmV4cG9ydCBjb25zdCB3ZWNoYXRMb2dpbiA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICd3ZWNoYXRsb2dpbicpXG4vLyDop6Plr4blvq7kv6HmiYvmnLrlj7dcbmV4cG9ydCBjb25zdCBkZWNyeXB0UGhvbmUgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnZGVjcnlwdFdlQ2hhdFBob25lTnVtYmVyJyk7XG4vLyDlvq7kv6HmjojmnYPnmbvlvZUgLSDmiYvliqjlvZXlhaXmiYvmnLrlj7dcbmV4cG9ydCBjb25zdCB3ZWNoYXRCeVBob25lID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3dldENoYXRMb2dpbkJ5UGhvbmVOdW1iZXInKVxuLy8g6I635Y+W55So5oi35L+h5oGvXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSAoKSA9PiB3eFJlcXVlc3Qoe30sICdnZXRJbmZvJywgJ0dFVCcpXG4vLyDpgIDlh7rnmbvlvZVcbmV4cG9ydCBjb25zdCB1c2VyTG9nb3V0ID0gKCkgPT4gd3hSZXF1ZXN0KHt9LCAnbG9nb3V0Jylcbi8vIOS/ruaUueeUqOaIt+S/oeaBr1xuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc3lzdGVtL3VzZXIvcHJvZmlsZScsICdQVVQnKVxuLy8g57uR5a6a5Y2V5L2NXG5leHBvcnQgY29uc3QgYmluZERlcHQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc3lzdGVtL3VzZXIvcHJvZmlsZS9iaW5kRGVwdCcsICdQVVQnKVxuIl19