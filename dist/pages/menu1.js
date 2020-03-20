'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu1 = function (_wepy$page) {
    _inherits(Menu1, _wepy$page);

    function Menu1() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Menu1);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu1.__proto__ || Object.getPrototypeOf(Menu1)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '监测预警',
            usingComponents: {
                "van-icon": "../components/vant/icon/index",
                "van-nav-bar": "../components/vant/nav-bar/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            timeScreen: false,
            timeOptions: [{
                id: 1,
                label: '预警时间从近到远'
            }, {
                id: 2,
                label: '预警时间从远到近'
            }, {
                id: 3,
                label: '预警时间从近到远'
            }, {
                id: 4,
                label: '预警时间从远到近'
            }],
            listData: [{
                id: 1,
                picture: '', // 图片
                desc: '永定男板溪联村预警说明文字永定男板溪联村预警说明文字永定男板溪联村预警说明文',
                time: '2019年11月20日 17:23:12',
                user: '张三',
                state: 0 // 0: 未处理 1： 处理
            }, {
                id: 2,
                picture: '',
                desc: '永定男板溪联村预警说明文字永定男板溪联村预警说明文字永定男板溪联村预警说明文',
                time: '2019年11月20日 17:23:12',
                user: '李四',
                state: 1 // 0: 未处理 1： 处理
            }, {
                id: 3,
                picture: '',
                desc: '永定男板溪联村预警说明文字永定男板溪联村预警说明文字永定男板溪联村预警说明文',
                time: '2019年11月20日 17:23:12',
                user: '王五',
                state: 1 // 0: 未处理 1： 处理
            }],
            page: {
                count: 0,
                total: 0
            }
        }, _this.methods = {
            showScreenTime: function showScreenTime() {
                this.timeScreen = !this.timeScreen;
            },
            toReport: function toReport() {
                wx.navigateTo({
                    url: '/pages/reportInfo'
                });
            },
            toDetails: function toDetails() {
                wx.navigateTo({
                    url: '/pages/warningDetails'
                });
            },
            selectTime: function selectTime(e) {
                console.log(e);
                this.timeScreen = false;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Menu1;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu1 , 'pages/menu1'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUxLmpzIl0sIm5hbWVzIjpbIk1lbnUxIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInRpbWVTY3JlZW4iLCJ0aW1lT3B0aW9ucyIsImlkIiwibGFiZWwiLCJsaXN0RGF0YSIsInBpY3R1cmUiLCJkZXNjIiwidGltZSIsInVzZXIiLCJzdGF0ZSIsInBhZ2UiLCJjb3VudCIsInRvdGFsIiwibWV0aG9kcyIsInNob3dTY3JlZW5UaW1lIiwidG9SZXBvcnQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b0RldGFpbHMiLCJzZWxlY3RUaW1lIiwiZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsNEJBQVksK0JBREM7QUFFYiwrQkFBZTtBQUZGO0FBRlosUyxRQU9UQyxJLEdBQU87QUFDSEMsNkJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHhDO0FBRUhJLHdCQUFZLEtBRlQ7QUFHSEMseUJBQWMsQ0FDVjtBQUNJQyxvQkFBSSxDQURSO0FBRUlDLHVCQUFPO0FBRlgsYUFEVSxFQUlQO0FBQ0NELG9CQUFJLENBREw7QUFFQ0MsdUJBQU87QUFGUixhQUpPLEVBT1A7QUFDQ0Qsb0JBQUksQ0FETDtBQUVDQyx1QkFBTztBQUZSLGFBUE8sRUFVUDtBQUNDRCxvQkFBSSxDQURMO0FBRUNDLHVCQUFPO0FBRlIsYUFWTyxDQUhYO0FBa0JIQyxzQkFBVSxDQUFDO0FBQ1BGLG9CQUFJLENBREc7QUFFUEcseUJBQVMsRUFGRixFQUVPO0FBQ2RDLHNCQUFNLHdDQUhDO0FBSVBDLHNCQUFNLHNCQUpDO0FBS1BDLHNCQUFNLElBTEM7QUFNUEMsdUJBQU8sQ0FOQSxDQU1FO0FBTkYsYUFBRCxFQU9QO0FBQ0NQLG9CQUFJLENBREw7QUFFQ0cseUJBQVMsRUFGVjtBQUdDQyxzQkFBTSx3Q0FIUDtBQUlDQyxzQkFBTSxzQkFKUDtBQUtDQyxzQkFBTSxJQUxQO0FBTUNDLHVCQUFPLENBTlIsQ0FNVTtBQU5WLGFBUE8sRUFjUDtBQUNDUCxvQkFBSSxDQURMO0FBRUNHLHlCQUFTLEVBRlY7QUFHQ0Msc0JBQU0sd0NBSFA7QUFJQ0Msc0JBQU0sc0JBSlA7QUFLQ0Msc0JBQU0sSUFMUDtBQU1DQyx1QkFBTyxDQU5SLENBTVU7QUFOVixhQWRPLENBbEJQO0FBd0NIQyxrQkFBTTtBQUNGQyx1QkFBTyxDQURMO0FBRUZDLHVCQUFPO0FBRkw7QUF4Q0gsUyxRQThDUEMsTyxHQUFVO0FBQ05DLDBCQURNLDRCQUNXO0FBQ2IscUJBQUtkLFVBQUwsR0FBa0IsQ0FBQyxLQUFLQSxVQUF4QjtBQUNILGFBSEs7QUFJTmUsb0JBSk0sc0JBSUs7QUFDUEMsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSztBQURLLGlCQUFkO0FBR0gsYUFSSztBQVNOQyxxQkFUTSx1QkFTTTtBQUNSSCxtQkFBR0MsVUFBSCxDQUFjO0FBQ1ZDLHlCQUFLO0FBREssaUJBQWQ7QUFHSCxhQWJLO0FBY05FLHNCQWRNLHNCQWNLQyxDQWRMLEVBY1E7QUFDVkMsd0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNBLHFCQUFLckIsVUFBTCxHQUFrQixLQUFsQjtBQUNIO0FBakJLLFM7Ozs7RUF0RHFCSCxlQUFLYSxJOztrQkFBbkJuQixLIiwiZmlsZSI6Im1lbnUxLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51MSBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgICAgIGNvbmZpZyA9IHtcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnm5HmtYvpooToraYnLFxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAgICAgICAgICAgXCJ2YW4taWNvblwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9pY29uL2luZGV4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcbiAgICAgICAgICAgIHRpbWVTY3JlZW46IGZhbHNlLFxuICAgICAgICAgICAgdGltZU9wdGlvbnMgOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICfpooTorabml7bpl7Tku47ov5HliLDov5wnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICfpooTorabml7bpl7Tku47ov5zliLDov5EnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICfpooTorabml7bpl7Tku47ov5HliLDov5wnXG4gICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICBpZDogNCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICfpooTorabml7bpl7Tku47ov5zliLDov5EnXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGxpc3REYXRhOiBbe1xuICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6ICcnLCAgLy8g5Zu+54mHXG4gICAgICAgICAgICAgICAgZGVzYzogJ+awuOWumueUt+adv+a6quiBlOadkemihOitpuivtOaYjuaWh+Wtl+awuOWumueUt+adv+a6quiBlOadkemihOitpuivtOaYjuaWh+Wtl+awuOWumueUt+adv+a6quiBlOadkemihOitpuivtOaYjuaWhycsXG4gICAgICAgICAgICAgICAgdGltZTogJzIwMTnlubQxMeaciDIw5pelIDE3OjIzOjEyJyxcbiAgICAgICAgICAgICAgICB1c2VyOiAn5byg5LiJJywgXG4gICAgICAgICAgICAgICAgc3RhdGU6IDAgLy8gMDog5pyq5aSE55CGIDHvvJog5aSE55CGXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgcGljdHVyZTogJycsXG4gICAgICAgICAgICAgICAgZGVzYzogJ+awuOWumueUt+adv+a6quiBlOadkemihOitpuivtOaYjuaWh+Wtl+awuOWumueUt+adv+a6quiBlOadkemihOitpuivtOaYjuaWh+Wtl+awuOWumueUt+adv+a6quiBlOadkemihOitpuivtOaYjuaWhycsXG4gICAgICAgICAgICAgICAgdGltZTogJzIwMTnlubQxMeaciDIw5pelIDE3OjIzOjEyJyxcbiAgICAgICAgICAgICAgICB1c2VyOiAn5p2O5ZubJyxcbiAgICAgICAgICAgICAgICBzdGF0ZTogMSAvLyAwOiDmnKrlpITnkIYgMe+8miDlpITnkIZcbiAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBpZDogMyxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiAnJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAn5rC45a6a55S35p2/5rqq6IGU5p2R6aKE6K2m6K+05piO5paH5a2X5rC45a6a55S35p2/5rqq6IGU5p2R6aKE6K2m6K+05piO5paH5a2X5rC45a6a55S35p2/5rqq6IGU5p2R6aKE6K2m6K+05piO5paHJyxcbiAgICAgICAgICAgICAgICB0aW1lOiAnMjAxOeW5tDEx5pyIMjDml6UgMTc6MjM6MTInLFxuICAgICAgICAgICAgICAgIHVzZXI6ICfnjovkupQnLFxuICAgICAgICAgICAgICAgIHN0YXRlOiAxIC8vIDA6IOacquWkhOeQhiAx77yaIOWkhOeQhlxuICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICBwYWdlOiB7XG4gICAgICAgICAgICAgICAgY291bnQ6IDAsXG4gICAgICAgICAgICAgICAgdG90YWw6IDBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICBzaG93U2NyZWVuVGltZSgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVTY3JlZW4gPSAhdGhpcy50aW1lU2NyZWVuO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvUmVwb3J0KCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvcmVwb3J0SW5mbydcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRvRGV0YWlscygpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3dhcm5pbmdEZXRhaWxzJ1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0VGltZShlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lU2NyZWVuID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4iXX0=