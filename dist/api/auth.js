'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _wepyRedux = require('./../npm/wepy-redux/lib/index.js');

var _store = require('./../store/index.js');

var _store2 = _interopRequireDefault(_store);

var _api = require('./api.js');

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var store = (0, _store2.default)();
(0, _wepyRedux.setStore)(store);

exports.default = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(callback) {
        var params;
        return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        params = {};
                        _context.next = 3;
                        return new Promise(function (resolve) {
                            wx.login({
                                success: function success(res) {
                                    if (res.code) {
                                        params.code = res.code;
                                        resolve();
                                    } else {
                                        console.log('登录失败！' + res.errMsg);
                                    }
                                },
                                fail: function fail(res) {
                                    console.log(res, 'fail');
                                }
                            });
                        });

                    case 3:
                    case 'end':
                        return _context.stop();
                }
            }
        }, _callee, this);
    }));

    return function (_x) {
        return _ref.apply(this, arguments);
    };
}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImF1dGguanMiXSwibmFtZXMiOlsiYXBpIiwic3RvcmUiLCJjYWxsYmFjayIsInBhcmFtcyIsIlByb21pc2UiLCJyZXNvbHZlIiwid3giLCJsb2dpbiIsInN1Y2Nlc3MiLCJyZXMiLCJjb2RlIiwiY29uc29sZSIsImxvZyIsImVyck1zZyIsImZhaWwiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOzs7O0FBQ0E7O0FBSUE7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7QUFFWixJQUFNQyxRQUFRLHNCQUFkO0FBQ0EseUJBQVNBLEtBQVQ7Ozt1RUFFZSxpQkFBZUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDUEMsOEJBRE8sR0FDRSxFQURGO0FBQUE7QUFBQSwrQkFHTCxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFhO0FBQzNCQywrQkFBR0MsS0FBSCxDQUFTO0FBQ0xDLHlDQUFTLGlCQUFDQyxHQUFELEVBQVM7QUFDZCx3Q0FBSUEsSUFBSUMsSUFBUixFQUFjO0FBQ1ZQLCtDQUFPTyxJQUFQLEdBQWNELElBQUlDLElBQWxCO0FBQ0FMO0FBQ0gscUNBSEQsTUFHTztBQUNITSxnREFBUUMsR0FBUixDQUFZLFVBQVVILElBQUlJLE1BQTFCO0FBQ0g7QUFDSixpQ0FSSTtBQVNMQyxzQ0FBTSxjQUFVTCxHQUFWLEVBQWU7QUFDakJFLDRDQUFRQyxHQUFSLENBQVlILEdBQVosRUFBaUIsTUFBakI7QUFDSDtBQVhJLDZCQUFUO0FBYUgseUJBZEssQ0FISzs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLIiwiZmlsZSI6ImF1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgIHtcclxuICAgIHNldFN0b3JlLFxyXG4gICAgZ2V0U3RvcmVcclxufSBmcm9tICd3ZXB5LXJlZHV4J1xyXG5pbXBvcnQgY29uZmlnU3RvcmUgZnJvbSAnLi4vc3RvcmUnXHJcbmltcG9ydCAqIGFzIGFwaSBmcm9tICcuL2FwaSdcclxuXHJcbmNvbnN0IHN0b3JlID0gY29uZmlnU3RvcmUoKTtcclxuc2V0U3RvcmUoc3RvcmUpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgIGxldCBwYXJhbXMgPSB7fTtcclxuXHJcbiAgICBhd2FpdCBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIHd4LmxvZ2luKHtcclxuICAgICAgICAgICAgc3VjY2VzczogKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5jb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zLmNvZGUgPSByZXMuY29kZTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfnmbvlvZXlpLHotKXvvIEnICsgcmVzLmVyck1zZylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZmFpbDogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLCAnZmFpbCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KVxyXG5cclxuICAgIC8vIOivt+axguasoeaVsFxyXG4gICAgLy8gbGV0IHBsZWFzZVRpbWUgPSAwO1xyXG4gICAgLy8gYXN5bmMgZnVuY3Rpb24gZ2V0U2Vzc2lvbkZ1bihwYXJhbXMpIHtcclxuICAgIC8vICAgICBjb25zdCBzZXNzaW9uUmVzID0gYXdhaXQgYXBpLmdldFNlc3Npb25Db2RlKHBhcmFtcyk7XHJcbiAgICAvLyAgICAgcGxlYXNlVGltZSsrO1xyXG5cclxuICAgIC8vIH1cclxuXHJcbiAgICBcclxufSJdfQ==