'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../api/api.js');

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu0 = function (_wepy$page) {
  _inherits(Menu0, _wepy$page);

  function Menu0() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu0);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu0.__proto__ || Object.getPrototypeOf(Menu0)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '龙芯北斗地灾监控系统',
      usingComponents: {
        "van-icon": "../components/vant/icon/index",
        "van-nav-bar": "../components/vant/nav-bar/index"
      }
    }, _this.data = {
      statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
      isBindDept: false,
      mointorList: [],
      latitude: 25,
      longitude: 117,
      markers: []
    }, _this.methods = {
      toReport: function toReport(e) {
        var areaId = e.currentTarget.dataset.areaId;
        wx.navigateTo({
          url: '/pages/reportInfo?areaId=' + areaId
        });
      },
      toMonitorType: function toMonitorType(e) {
        var _e$currentTarget$data = e.currentTarget.dataset,
            areaId = _e$currentTarget$data.areaId,
            type = _e$currentTarget$data.type;

        wx.navigateTo({
          url: '/pages/monitorType?type=' + type + '&areaId=' + areaId
        });
      },
      toMonitorArea: function toMonitorArea(e) {
        var data = e.currentTarget.dataset.item;
        this.linkArea(data.monitorAreaId);
      },
      toMonitorDevice: function toMonitorDevice(e) {
        var areaId = e.currentTarget.dataset.areaId;
        wx.navigateTo({
          url: '/pages/monitorDevice?areaId=' + areaId
        });
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu0, [{
    key: 'onLoad',
    value: function onLoad() {
      _wepy2.default.$instance.shareImage();
    }
  }, {
    key: 'onShow',
    value: function onShow() {
      this.isBindDept = wx.getStorageSync('isBindDept');
      this.markers = [];
      if (this.isBindDept) {
        this.getMointorData();
        _wepy2.default.$instance.queryUnread(3000);
        this.$apply();
      } else {
        // 移除底部未读信息
        _wepy2.default.removeTabBarBadge({
          index: 1 //tabBar的哪一项，从左边算起,
        });
      }
    }
  }, {
    key: 'onHide',
    value: function onHide() {
      if (this.isBindDept) {
        _wepy2.default.$instance.clearQuery();
      }
    }
  }, {
    key: 'linkArea',
    value: function linkArea(monitorAreaId) {
      wx.navigateTo({
        url: '/pages/monitorArea?areaId=' + monitorAreaId
      });
    }
  }, {
    key: 'getMointorData',
    value: function () {
      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var globalData, userId, params, res;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                globalData = wx.getStorageSync('globalData');
                userId = globalData.userId;
                // 根据用户查询监测区域的数据

                params = {
                  userId: userId
                };
                _context.next = 5;
                return api.getAreaByUser(params);

              case 5:
                res = _context.sent;

                if (res.code == 200) {
                  this.mointorList = res.data;
                  this.markers = [];
                  if (res.data && res.data.length > 0) {
                    this.longitude = res.data[0].lng;
                    this.latitude = res.data[0].lat;
                    res.data.forEach(function (item) {
                      _this2.markers.push({
                        id: item.monitorAreaId,
                        longitude: item.lng,
                        latitude: item.lat,
                        callout: {
                          content: (item.monitorAreaName || '') + '\n(\u5317\u7EAC ' + item.lat + ', \u4E1C\u7ECF ' + item.lng + ')',
                          color: '#fff',
                          fontSize: 14,
                          borderRadius: 4,
                          borderWidth: 2,
                          borderColor: '#fff',
                          bgColor: '#52cc7a',
                          textAlign: "center",
                          padding: 5,
                          anchorY: -25,
                          display: "ALWAYS"
                        }
                      });
                    });
                  }
                  this.$apply();
                }

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getMointorData() {
        return _ref2.apply(this, arguments);
      }

      return getMointorData;
    }()
  }, {
    key: 'callouttap',
    value: function callouttap(e) {
      var index = e.markerId - 1;
      var monitorAreaId = this.mointorList[index].monitorAreaId;
      this.linkArea(monitorAreaId);
    }
  }]);

  return Menu0;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu0 , 'pages/menu0'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUwLmpzIl0sIm5hbWVzIjpbImFwaSIsIk1lbnUwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImlzQmluZERlcHQiLCJtb2ludG9yTGlzdCIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwibWFya2VycyIsIm1ldGhvZHMiLCJ0b1JlcG9ydCIsImUiLCJhcmVhSWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsInd4IiwibmF2aWdhdGVUbyIsInVybCIsInRvTW9uaXRvclR5cGUiLCJ0eXBlIiwidG9Nb25pdG9yQXJlYSIsIml0ZW0iLCJsaW5rQXJlYSIsIm1vbml0b3JBcmVhSWQiLCJ0b01vbml0b3JEZXZpY2UiLCJzaGFyZUltYWdlIiwiZ2V0U3RvcmFnZVN5bmMiLCJnZXRNb2ludG9yRGF0YSIsInF1ZXJ5VW5yZWFkIiwiJGFwcGx5IiwicmVtb3ZlVGFiQmFyQmFkZ2UiLCJpbmRleCIsImNsZWFyUXVlcnkiLCJ1c2VySWQiLCJwYXJhbXMiLCJnZXRBcmVhQnlVc2VyIiwicmVzIiwiY29kZSIsImxlbmd0aCIsImxuZyIsImxhdCIsImZvckVhY2giLCJwdXNoIiwiaWQiLCJjYWxsb3V0IiwiY29udGVudCIsIm1vbml0b3JBcmVhTmFtZSIsImNvbG9yIiwiZm9udFNpemUiLCJib3JkZXJSYWRpdXMiLCJib3JkZXJXaWR0aCIsImJvcmRlckNvbG9yIiwiYmdDb2xvciIsInRleHRBbGlnbiIsInBhZGRpbmciLCJhbmNob3JZIiwiZGlzcGxheSIsIm1hcmtlcklkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7SUFFU0MsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFlBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLCtCQURHO0FBRWYsdUJBQWU7QUFGQTtBQUZWLEssUUFRVEMsSSxHQUFPO0FBQ0xDLHVCQUFpQkMsZUFBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCSCxlQUR0QztBQUVMSSxrQkFBWSxLQUZQO0FBR0xDLG1CQUFhLEVBSFI7QUFJTEMsZ0JBQVUsRUFKTDtBQUtMQyxpQkFBVyxHQUxOO0FBTUxDLGVBQVM7QUFOSixLLFFBa0NQQyxPLEdBQVU7QUFDUkMsY0FEUSxvQkFDQ0MsQ0FERCxFQUNJO0FBQ1YsWUFBSUMsU0FBU0QsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLE1BQXJDO0FBQ0FHLFdBQUdDLFVBQUgsQ0FBYztBQUNWQyxlQUFLLDhCQUE4Qkw7QUFEekIsU0FBZDtBQUdELE9BTk87QUFPUk0sbUJBUFEseUJBT01QLENBUE4sRUFPUztBQUFBLG9DQUNVQSxFQUFFRSxhQUFGLENBQWdCQyxPQUQxQjtBQUFBLFlBQ1BGLE1BRE8seUJBQ1BBLE1BRE87QUFBQSxZQUNDTyxJQURELHlCQUNDQSxJQUREOztBQUVmSixXQUFHQyxVQUFILENBQWM7QUFDVkMsNENBQWdDRSxJQUFoQyxnQkFBK0NQO0FBRHJDLFNBQWQ7QUFHRCxPQVpPO0FBYVJRLG1CQWJRLHlCQWFNVCxDQWJOLEVBYVM7QUFDZixZQUFJWixPQUFPWSxFQUFFRSxhQUFGLENBQWdCQyxPQUFoQixDQUF3Qk8sSUFBbkM7QUFDQSxhQUFLQyxRQUFMLENBQWN2QixLQUFLd0IsYUFBbkI7QUFDRCxPQWhCTztBQWlCUkMscUJBakJRLDJCQWlCUWIsQ0FqQlIsRUFpQlc7QUFDakIsWUFBSUMsU0FBU0QsRUFBRUUsYUFBRixDQUFnQkMsT0FBaEIsQ0FBd0JGLE1BQXJDO0FBQ0FHLFdBQUdDLFVBQUgsQ0FBYztBQUNaQyxlQUFLLGlDQUFpQ0w7QUFEMUIsU0FBZDtBQUdEO0FBdEJPLEs7Ozs7OzZCQXpCRDtBQUNQWCxxQkFBS0MsU0FBTCxDQUFldUIsVUFBZjtBQUNEOzs7NkJBRVE7QUFDTCxXQUFLckIsVUFBTCxHQUFrQlcsR0FBR1csY0FBSCxDQUFrQixZQUFsQixDQUFsQjtBQUNBLFdBQUtsQixPQUFMLEdBQWUsRUFBZjtBQUNBLFVBQUcsS0FBS0osVUFBUixFQUFvQjtBQUNsQixhQUFLdUIsY0FBTDtBQUNBMUIsdUJBQUtDLFNBQUwsQ0FBZTBCLFdBQWYsQ0FBMkIsSUFBM0I7QUFDQSxhQUFLQyxNQUFMO0FBQ0QsT0FKRCxNQUlPO0FBQ0w7QUFDQTVCLHVCQUFLNkIsaUJBQUwsQ0FBdUI7QUFDckJDLGlCQUFPLENBRGMsQ0FDWjtBQURZLFNBQXZCO0FBR0Q7QUFDSjs7OzZCQUVRO0FBQ1AsVUFBSSxLQUFLM0IsVUFBVCxFQUFxQjtBQUNuQkgsdUJBQUtDLFNBQUwsQ0FBZThCLFVBQWY7QUFDRDtBQUNGOzs7NkJBMkJRVCxhLEVBQWU7QUFDcEJSLFNBQUdDLFVBQUgsQ0FBYztBQUNWQyxhQUFLLCtCQUErQk07QUFEMUIsT0FBZDtBQUdIOzs7Ozs7Ozs7Ozs7QUFHT3BCLDBCLEdBQWFZLEdBQUdXLGNBQUgsQ0FBa0IsWUFBbEIsQztBQUVmTyxzQixHQUNFOUIsVSxDQURGOEIsTTtBQUVGOztBQUNJQyxzQixHQUFTO0FBQ1hEO0FBRFcsaUI7O3VCQUdHdkMsSUFBSXlDLGFBQUosQ0FBa0JELE1BQWxCLEM7OztBQUFaRSxtQjs7QUFDSixvQkFBSUEsSUFBSUMsSUFBSixJQUFZLEdBQWhCLEVBQXFCO0FBQ2pCLHVCQUFLaEMsV0FBTCxHQUFtQitCLElBQUlyQyxJQUF2QjtBQUNBLHVCQUFLUyxPQUFMLEdBQWUsRUFBZjtBQUNBLHNCQUFJNEIsSUFBSXJDLElBQUosSUFBWXFDLElBQUlyQyxJQUFKLENBQVN1QyxNQUFULEdBQWtCLENBQWxDLEVBQXFDO0FBQ25DLHlCQUFLL0IsU0FBTCxHQUFpQjZCLElBQUlyQyxJQUFKLENBQVMsQ0FBVCxFQUFZd0MsR0FBN0I7QUFDQSx5QkFBS2pDLFFBQUwsR0FBZ0I4QixJQUFJckMsSUFBSixDQUFTLENBQVQsRUFBWXlDLEdBQTVCO0FBQ0FKLHdCQUFJckMsSUFBSixDQUFTMEMsT0FBVCxDQUFpQixnQkFBUTtBQUN2Qiw2QkFBS2pDLE9BQUwsQ0FBYWtDLElBQWIsQ0FBa0I7QUFDaEJDLDRCQUFJdEIsS0FBS0UsYUFETztBQUVoQmhCLG1DQUFXYyxLQUFLa0IsR0FGQTtBQUdoQmpDLGtDQUFVZSxLQUFLbUIsR0FIQztBQUloQkksaUNBQVM7QUFDUEMsb0NBQVl4QixLQUFLeUIsZUFBTCxJQUF3QixFQUFwQyx5QkFBK0N6QixLQUFLbUIsR0FBcEQsdUJBQStEbkIsS0FBS2tCLEdBQXBFLE1BRE87QUFFUFEsaUNBQU8sTUFGQTtBQUdQQyxvQ0FBVSxFQUhIO0FBSVBDLHdDQUFjLENBSlA7QUFLUEMsdUNBQWEsQ0FMTjtBQU1QQyx1Q0FBYSxNQU5OO0FBT1BDLG1DQUFTLFNBUEY7QUFRUEMscUNBQVcsUUFSSjtBQVNQQyxtQ0FBUyxDQVRGO0FBVVBDLG1DQUFTLENBQUMsRUFWSDtBQVdQQyxtQ0FBUztBQVhGO0FBSk8sdUJBQWxCO0FBa0JELHFCQW5CRDtBQW9CRDtBQUNELHVCQUFLM0IsTUFBTDtBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7K0JBR01sQixDLEVBQUc7QUFDWixVQUFJb0IsUUFBUXBCLEVBQUU4QyxRQUFGLEdBQWEsQ0FBekI7QUFDQSxVQUFJbEMsZ0JBQWdCLEtBQUtsQixXQUFMLENBQWlCMEIsS0FBakIsRUFBd0JSLGFBQTVDO0FBQ0EsV0FBS0QsUUFBTCxDQUFjQyxhQUFkO0FBQ0Q7Ozs7RUF2SGdDdEIsZUFBS3lELEk7O2tCQUFuQi9ELEsiLCJmaWxlIjoibWVudTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGltcG9ydCAqIGFzIGFwaSAgZnJvbSAnLi4vYXBpL2FwaSdcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudTAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6b6Z6Iqv5YyX5paX5Zyw54G+55uR5o6n57O757ufJyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgXCJ2YW4taWNvblwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9pY29uL2luZGV4XCIsXHJcbiAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCJcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXHJcbiAgICAgIGlzQmluZERlcHQ6IGZhbHNlLFxyXG4gICAgICBtb2ludG9yTGlzdDogW10sXHJcbiAgICAgIGxhdGl0dWRlOiAyNSxcclxuICAgICAgbG9uZ2l0dWRlOiAxMTcsXHJcbiAgICAgIG1hcmtlcnM6IFtdLFxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgd2VweS4kaW5zdGFuY2Uuc2hhcmVJbWFnZSgpXHJcbiAgICB9XHJcblxyXG4gICAgb25TaG93KCkge1xyXG4gICAgICAgIHRoaXMuaXNCaW5kRGVwdCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdpc0JpbmREZXB0Jyk7XHJcbiAgICAgICAgdGhpcy5tYXJrZXJzID0gW107XHJcbiAgICAgICAgaWYodGhpcy5pc0JpbmREZXB0KSB7XHJcbiAgICAgICAgICB0aGlzLmdldE1vaW50b3JEYXRhKCk7XHJcbiAgICAgICAgICB3ZXB5LiRpbnN0YW5jZS5xdWVyeVVucmVhZCgzMDAwKVxyXG4gICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgLy8g56e76Zmk5bqV6YOo5pyq6K+75L+h5oGvXHJcbiAgICAgICAgICB3ZXB5LnJlbW92ZVRhYkJhckJhZGdlKHtcclxuICAgICAgICAgICAgaW5kZXg6IDEgLy90YWJCYXLnmoTlk6rkuIDpobnvvIzku47lt6bovrnnrpfotbcsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25IaWRlKCkge1xyXG4gICAgICBpZiAodGhpcy5pc0JpbmREZXB0KSB7XHJcbiAgICAgICAgd2VweS4kaW5zdGFuY2UuY2xlYXJRdWVyeSgpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICB0b1JlcG9ydChlKSB7XHJcbiAgICAgICAgbGV0IGFyZWFJZCA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmFyZWFJZDtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3JlcG9ydEluZm8/YXJlYUlkPScgKyBhcmVhSWRcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB0b01vbml0b3JUeXBlKGUpIHtcclxuICAgICAgICBjb25zdCB7IGFyZWFJZCwgdHlwZSB9ID0gZS5jdXJyZW50VGFyZ2V0LmRhdGFzZXQ7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogYC9wYWdlcy9tb25pdG9yVHlwZT90eXBlPSR7dHlwZX0mYXJlYUlkPSR7YXJlYUlkfWBcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB0b01vbml0b3JBcmVhKGUpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW07XHJcbiAgICAgICAgdGhpcy5saW5rQXJlYShkYXRhLm1vbml0b3JBcmVhSWQpO1xyXG4gICAgICB9LFxyXG4gICAgICB0b01vbml0b3JEZXZpY2UoZSkge1xyXG4gICAgICAgIGxldCBhcmVhSWQgPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5hcmVhSWQ7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvbW9uaXRvckRldmljZT9hcmVhSWQ9JyArIGFyZWFJZFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsaW5rQXJlYShtb25pdG9yQXJlYUlkKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgIHVybDogJy9wYWdlcy9tb25pdG9yQXJlYT9hcmVhSWQ9JyArIG1vbml0b3JBcmVhSWRcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldE1vaW50b3JEYXRhKCkge1xyXG4gICAgICAgIGxldCBnbG9iYWxEYXRhID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2dsb2JhbERhdGEnKTtcclxuICAgICAgICBsZXQge1xyXG4gICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgfSA9IGdsb2JhbERhdGE7XHJcbiAgICAgICAgLy8g5qC55o2u55So5oi35p+l6K+i55uR5rWL5Yy65Z+f55qE5pWw5o2uXHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgIHVzZXJJZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5nZXRBcmVhQnlVc2VyKHBhcmFtcyk7XHJcbiAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICB0aGlzLm1vaW50b3JMaXN0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMubWFya2VycyA9IFtdO1xyXG4gICAgICAgICAgICBpZiAocmVzLmRhdGEgJiYgcmVzLmRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgIHRoaXMubG9uZ2l0dWRlID0gcmVzLmRhdGFbMF0ubG5nO1xyXG4gICAgICAgICAgICAgIHRoaXMubGF0aXR1ZGUgPSByZXMuZGF0YVswXS5sYXQ7XHJcbiAgICAgICAgICAgICAgcmVzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFya2Vycy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgaWQ6IGl0ZW0ubW9uaXRvckFyZWFJZCxcclxuICAgICAgICAgICAgICAgICAgbG9uZ2l0dWRlOiBpdGVtLmxuZyxcclxuICAgICAgICAgICAgICAgICAgbGF0aXR1ZGU6IGl0ZW0ubGF0LFxyXG4gICAgICAgICAgICAgICAgICBjYWxsb3V0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogYCR7aXRlbS5tb25pdG9yQXJlYU5hbWUgfHwgJyd9XFxuKOWMl+e6rCAke2l0ZW0ubGF0fSwg5Lic57uPICR7aXRlbS5sbmd9KWAsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjZmZmJyxcclxuICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnI2ZmZicsXHJcbiAgICAgICAgICAgICAgICAgICAgYmdDb2xvcjogJyM1MmNjN2EnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA1LFxyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvclk6IC0yNSxcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcIkFMV0FZU1wiLFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxvdXR0YXAoZSkge1xyXG4gICAgICBsZXQgaW5kZXggPSBlLm1hcmtlcklkIC0gMTtcclxuICAgICAgbGV0IG1vbml0b3JBcmVhSWQgPSB0aGlzLm1vaW50b3JMaXN0W2luZGV4XS5tb25pdG9yQXJlYUlkO1xyXG4gICAgICB0aGlzLmxpbmtBcmVhKG1vbml0b3JBcmVhSWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiJdfQ==