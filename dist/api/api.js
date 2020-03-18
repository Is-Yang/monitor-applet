'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.getOpenid = exports.userLogout = exports.getUserInfo = exports.wechatLogin = exports.smsLogin = exports.getCode = undefined;

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
// 微信授权登录
var wechatLogin = exports.wechatLogin = function wechatLogin(params) {
  return wxRequest(params, 'wechatlogin');
};
// 获取用户信息
var getUserInfo = exports.getUserInfo = function getUserInfo() {
  return wxRequest({}, 'getInfo', 'GET');
};
// 退出登录
var userLogout = exports.userLogout = function userLogout() {
  return wxRequest({}, 'logout');
};
// 获取微信openId
var getOpenid = exports.getOpenid = function getOpenid(params) {
  return wxRequest(params, 'getOpenid');
};
// 修改用户信息
var updateUser = exports.updateUser = function updateUser(params) {
  return wxRequest(params, 'system/user/profile', 'PUT');
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwaS5qcyJdLCJuYW1lcyI6WyJ3eFJlcXVlc3QiLCJwYXJhbXMiLCJ1cmwiLCJtZXRob2QiLCJzaG93TG9kaW5nIiwidGlwIiwibG9hZGluZyIsImhlYWRlciIsInN0b3JlIiwiZ2xvYmFsRGF0YSIsImdldFN0YXRlIiwidXNlciIsInRva2VuIiwid3giLCJnZXRTdG9yYWdlU3luYyIsImVudmlyb25tZW50IiwiZGF0YSIsInFzIiwic3RyaW5naWZ5Iiwid2VweSIsInJlcXVlc3QiLCJjYXRjaCIsImVyciIsImNvbnNvbGUiLCJsb2ciLCJyZXMiLCJsb2FkZWQiLCJyZXN1bHQiLCJjb2RlIiwibmF2aWdhdGVUbyIsIm1zZyIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiIsImR1cmF0aW9uIiwiZ2V0Q29kZSIsInNtc0xvZ2luIiwid2VjaGF0TG9naW4iLCJnZXRVc2VySW5mbyIsInVzZXJMb2dvdXQiLCJnZXRPcGVuaWQiLCJ1cGRhdGVVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7Ozs7QUFDQTs7QUFHQTs7OztBQUVBOzs7Ozs7OztBQUVBLElBQU1BO0FBQUEscUVBQVk7QUFBQSxRQUFPQyxNQUFQLHVFQUFnQixFQUFoQjtBQUFBLFFBQW9CQyxHQUFwQjtBQUFBLFFBQXlCQyxNQUF6Qix1RUFBa0MsTUFBbEM7QUFBQSxRQUEwQ0MsVUFBMUMsdUVBQXVELElBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNoQkEsMEJBQWNDLGNBQUlDLE9BQUosRUFBZDs7QUFFSUMsa0JBSFksR0FHSCxFQUhHOzs7QUFLaEIsZ0JBQUlKLFVBQVUsS0FBZCxFQUFxQjtBQUNuQkkscUJBQU8sY0FBUCxJQUF5QixrQkFBekI7QUFDRCxhQUZELE1BRU87QUFDTEEscUJBQU8sY0FBUCxJQUF5QixtQ0FBekI7QUFDRDs7QUFFS0MsaUJBWFUsR0FXRiwwQkFYRTtBQVlaQyxzQkFaWSxHQVlDRCxNQUFNRSxRQUFOLEdBQWlCQyxJQUFqQixDQUFzQkYsVUFadkI7QUFjWkcsaUJBZFksR0FjSkMsR0FBR0MsY0FBSCxDQUFrQixPQUFsQixDQWRJOzs7QUFnQmhCLGdCQUFJRixLQUFKLEVBQVc7QUFDVEwscUJBQU8sZUFBUCxJQUEwQkssS0FBMUI7QUFDRDtBQUNHRyx1QkFuQlksR0FtQkUsTUFuQkY7O0FBb0JoQixnQkFBSUEsZUFBZSxNQUFuQixFQUEyQjtBQUN6QmIsb0JBQU0sd0NBQXdDQSxHQUE5QztBQUNELGFBRkQsTUFFTyxJQUFJYSxlQUFlLE1BQW5CLEVBQTJCO0FBQ2hDYixvQkFBTSxzQ0FBc0NBLEdBQTVDO0FBQ0E7QUFDRDtBQUNHYyxnQkExQlksR0EwQkxiLFVBQVUsTUFBVixHQUFtQmMsYUFBR0MsU0FBSCxDQUFhakIsTUFBYixDQUFuQixHQUEwQ0EsTUExQnJDO0FBQUE7QUFBQSxtQkE0QkFrQixlQUFLQyxPQUFMLENBQWE7QUFDM0JiLDRCQUQyQjtBQUUzQkwsc0JBRjJCO0FBRzNCQyxzQkFBUUEsTUFIbUI7QUFJM0JhLG9CQUFNQTtBQUpxQixhQUFiLEVBS2JLLEtBTGEsQ0FLUCxVQUFDQyxHQUFELEVBQVM7QUFDaEJDLHNCQUFRQyxHQUFSLENBQVksdUJBQXVCRixHQUFuQztBQUNELGFBUGUsQ0E1QkE7O0FBQUE7QUE0QlpHLGVBNUJZOzs7QUFxQ2hCckIsMEJBQWNDLGNBQUlxQixNQUFKLEVBQWQ7O0FBckNnQixrQkF1Q1pELE9BQU9BLElBQUlULElBdkNDO0FBQUE7QUFBQTtBQUFBOztBQXdDVlcsa0JBeENVLEdBd0NERixJQUFJVCxJQXhDSDtBQXlDZDs7QUFDQSxnQkFBSVcsT0FBT0MsSUFBUCxJQUFlLEdBQW5CLEVBQXdCO0FBQ3RCZixpQkFBR2dCLFVBQUgsQ0FBYztBQUNaM0IscUJBQUs7QUFETyxlQUFkO0FBR0Q7O0FBRUQsZ0JBQUl5QixPQUFPQyxJQUFQLElBQWUsR0FBZixJQUFzQkQsT0FBT0csR0FBakMsRUFBc0M7QUFDcENqQixpQkFBR2tCLFNBQUgsQ0FBYTtBQUNYQyx1QkFBT0wsT0FBT0csR0FESDtBQUVYRyxzQkFBTSxNQUZLO0FBR1hDLDBCQUFVO0FBSEMsZUFBYjtBQUtEO0FBdERhLDZDQXVEUFQsSUFBSVQsSUF2REc7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FBWjs7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFOOztBQTJEQTtBQUNPLElBQU1tQiw0QkFBVSxTQUFWQSxPQUFVLENBQUNsQyxNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQixTQUFsQixFQUE2QixLQUE3QixDQUFaO0FBQUEsQ0FBaEI7QUFDUDtBQUNPLElBQU1tQyw4QkFBVyxTQUFYQSxRQUFXLENBQUNuQyxNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQixVQUFsQixDQUFaO0FBQUEsQ0FBakI7QUFDUDtBQUNPLElBQU1vQyxvQ0FBYyxTQUFkQSxXQUFjLENBQUNwQyxNQUFEO0FBQUEsU0FBWUQsVUFBVUMsTUFBVixFQUFrQixhQUFsQixDQUFaO0FBQUEsQ0FBcEI7QUFDUDtBQUNPLElBQU1xQyxvQ0FBYyxTQUFkQSxXQUFjO0FBQUEsU0FBTXRDLFVBQVUsRUFBVixFQUFjLFNBQWQsRUFBeUIsS0FBekIsQ0FBTjtBQUFBLENBQXBCO0FBQ1A7QUFDTyxJQUFNdUMsa0NBQWEsU0FBYkEsVUFBYTtBQUFBLFNBQU12QyxVQUFVLEVBQVYsRUFBYyxRQUFkLENBQU47QUFBQSxDQUFuQjtBQUNQO0FBQ08sSUFBTXdDLGdDQUFZLFNBQVpBLFNBQVksQ0FBQ3ZDLE1BQUQ7QUFBQSxTQUFZRCxVQUFVQyxNQUFWLEVBQWtCLFdBQWxCLENBQVo7QUFBQSxDQUFsQjtBQUNQO0FBQ08sSUFBTXdDLGtDQUFhLFNBQWJBLFVBQWEsQ0FBQ3hDLE1BQUQ7QUFBQSxTQUFZRCxVQUFVQyxNQUFWLEVBQWtCLHFCQUFsQixFQUF5QyxLQUF6QyxDQUFaO0FBQUEsQ0FBbkIiLCJmaWxlIjoiYXBpLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuaW1wb3J0IHtcclxuICBnZXRTdG9yZVxyXG59IGZyb20gJ3dlcHktcmVkdXgnXHJcbmltcG9ydCB0aXAgZnJvbSAnLi4vdXRpbHMvdGlwJ1xyXG5cclxuaW1wb3J0IHFzIGZyb20gJ3FzJztcclxuXHJcbmNvbnN0IHd4UmVxdWVzdCA9IGFzeW5jIChwYXJhbXMgPSB7fSwgdXJsLCBtZXRob2QgPSAnUE9TVCcsIHNob3dMb2RpbmcgPSB0cnVlKSA9PiB7XHJcbiAgc2hvd0xvZGluZyAmJiB0aXAubG9hZGluZygpO1xyXG5cclxuICBsZXQgaGVhZGVyID0ge307XHJcblxyXG4gIGlmIChtZXRob2QgPT0gJ1BVVCcpIHtcclxuICAgIGhlYWRlclsnY29udGVudC10eXBlJ10gPSAnYXBwbGljYXRpb24vanNvbidcclxuICB9IGVsc2Uge1xyXG4gICAgaGVhZGVyWydjb250ZW50LXR5cGUnXSA9ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnXHJcbiAgfVxyXG5cclxuICBjb25zdCBzdG9yZSA9IGdldFN0b3JlKCk7XHJcbiAgbGV0IGdsb2JhbERhdGEgPSBzdG9yZS5nZXRTdGF0ZSgpLnVzZXIuZ2xvYmFsRGF0YTtcclxuXHJcbiAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcblxyXG4gIGlmICh0b2tlbikge1xyXG4gICAgaGVhZGVyWydBdXRob3JpemF0aW9uJ10gPSB0b2tlbjtcclxuICB9XHJcbiAgbGV0IGVudmlyb25tZW50ID0gJ3Rlc3QnO1xyXG4gIGlmIChlbnZpcm9ubWVudCA9PSAncHJvZCcpIHtcclxuICAgIHVybCA9ICdodHRwczovL3RjYi1hcGkudGVuY2VudGNsb3VkYXBpLmNvbScgKyB1cmw7XHJcbiAgfSBlbHNlIGlmIChlbnZpcm9ubWVudCA9PSAndGVzdCcpIHtcclxuICAgIHVybCA9ICdodHRwczovL2JlaWRvdS5zaWduYWxmaXJlLm5ldC5jbi8nICsgdXJsO1xyXG4gICAgLy8gdXJsID0gJ2h0dHBzOi8vbW9jay5hcGkuc2lnbmFsZmlyZS5uZXQuY24vbW9jay81ZTZlMzNlMzI5NWEyNzQzNjM3OTc0MzMvZXhhbXBsZS8nICsgdXJsO1xyXG4gIH1cclxuICBsZXQgZGF0YSA9IG1ldGhvZCA9PSAnUE9TVCcgPyBxcy5zdHJpbmdpZnkocGFyYW1zKSA6IHBhcmFtcztcclxuXHJcbiAgbGV0IHJlcyA9IGF3YWl0IHdlcHkucmVxdWVzdCh7XHJcbiAgICBoZWFkZXIsXHJcbiAgICB1cmwsXHJcbiAgICBtZXRob2Q6IG1ldGhvZCxcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSkuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ3dlcHkgcmVxdWVyc3QgZXJyOicgKyBlcnIpO1xyXG4gIH0pO1xyXG5cclxuICBzaG93TG9kaW5nICYmIHRpcC5sb2FkZWQoKTtcclxuXHJcbiAgaWYgKHJlcyAmJiByZXMuZGF0YSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IHJlcy5kYXRhO1xyXG4gICAgLy8g5pyq5o6I5p2DXHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gNDAxKSB7XHJcbiAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgIHVybDogJy9wYWdlcy9sb2dpbidcclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVzdWx0LmNvZGUgPT0gNTAwICYmIHJlc3VsdC5tc2cpIHtcclxuICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICB0aXRsZTogcmVzdWx0Lm1zZyxcclxuICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgZHVyYXRpb246IDE1MDBcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIHJldHVybiByZXMuZGF0YTtcclxuICB9XHJcbn1cclxuXHJcbi8vIOiOt+WPlumqjOivgeeggVxyXG5leHBvcnQgY29uc3QgZ2V0Q29kZSA9IChwYXJhbXMpID0+IHd4UmVxdWVzdChwYXJhbXMsICdzbXNjb2RlJywgJ0dFVCcpXHJcbi8vIOefreS/oemqjOivgeeggeeZu+W9lVxyXG5leHBvcnQgY29uc3Qgc21zTG9naW4gPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnc21zbG9naW4nKVxyXG4vLyDlvq7kv6HmjojmnYPnmbvlvZVcclxuZXhwb3J0IGNvbnN0IHdlY2hhdExvZ2luID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3dlY2hhdGxvZ2luJylcclxuLy8g6I635Y+W55So5oi35L+h5oGvXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9ICgpID0+IHd4UmVxdWVzdCh7fSwgJ2dldEluZm8nLCAnR0VUJylcclxuLy8g6YCA5Ye655m75b2VXHJcbmV4cG9ydCBjb25zdCB1c2VyTG9nb3V0ID0gKCkgPT4gd3hSZXF1ZXN0KHt9LCAnbG9nb3V0JylcclxuLy8g6I635Y+W5b6u5L+hb3BlbklkXHJcbmV4cG9ydCBjb25zdCBnZXRPcGVuaWQgPSAocGFyYW1zKSA9PiB3eFJlcXVlc3QocGFyYW1zLCAnZ2V0T3BlbmlkJylcclxuLy8g5L+u5pS555So5oi35L+h5oGvXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gKHBhcmFtcykgPT4gd3hSZXF1ZXN0KHBhcmFtcywgJ3N5c3RlbS91c2VyL3Byb2ZpbGUnLCAnUFVUJylcclxuIl19