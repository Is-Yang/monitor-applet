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
                picture: '',
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
            selectTime: function selectTime(e) {
                console.log(e);
                this.timeScreen = false;
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Menu1;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu1 , 'pages/menu1'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUxLmpzIl0sIm5hbWVzIjpbIk1lbnUxIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInRpbWVTY3JlZW4iLCJ0aW1lT3B0aW9ucyIsImlkIiwibGFiZWwiLCJsaXN0RGF0YSIsInBpY3R1cmUiLCJkZXNjIiwidGltZSIsInVzZXIiLCJzdGF0ZSIsInBhZ2UiLCJjb3VudCIsInRvdGFsIiwibWV0aG9kcyIsInNob3dTY3JlZW5UaW1lIiwidG9SZXBvcnQiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJzZWxlY3RUaW1lIiwiZSIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7Ozt3TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsNEJBQVksK0JBREM7QUFFYiwrQkFBZTtBQUZGO0FBRlosUyxRQU9UQyxJLEdBQU87QUFDSEMsNkJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHhDO0FBRUhJLHdCQUFZLEtBRlQ7QUFHSEMseUJBQWMsQ0FDVjtBQUNJQyxvQkFBSSxDQURSO0FBRUlDLHVCQUFPO0FBRlgsYUFEVSxFQUlQO0FBQ0NELG9CQUFJLENBREw7QUFFQ0MsdUJBQU87QUFGUixhQUpPLEVBT1A7QUFDQ0Qsb0JBQUksQ0FETDtBQUVDQyx1QkFBTztBQUZSLGFBUE8sRUFVUDtBQUNDRCxvQkFBSSxDQURMO0FBRUNDLHVCQUFPO0FBRlIsYUFWTyxDQUhYO0FBa0JIQyxzQkFBVSxDQUFDO0FBQ1BGLG9CQUFJLENBREc7QUFFUEcseUJBQVMsRUFGRjtBQUdQQyxzQkFBTSx3Q0FIQztBQUlQQyxzQkFBTSxzQkFKQztBQUtQQyxzQkFBTSxJQUxDO0FBTVBDLHVCQUFPLENBTkEsQ0FNRTtBQU5GLGFBQUQsRUFPUDtBQUNDUCxvQkFBSSxDQURMO0FBRUNHLHlCQUFTLEVBRlY7QUFHQ0Msc0JBQU0sd0NBSFA7QUFJQ0Msc0JBQU0sc0JBSlA7QUFLQ0Msc0JBQU0sSUFMUDtBQU1DQyx1QkFBTyxDQU5SLENBTVU7QUFOVixhQVBPLEVBY1A7QUFDQ1Asb0JBQUksQ0FETDtBQUVDRyx5QkFBUyxFQUZWO0FBR0NDLHNCQUFNLHdDQUhQO0FBSUNDLHNCQUFNLHNCQUpQO0FBS0NDLHNCQUFNLElBTFA7QUFNQ0MsdUJBQU8sQ0FOUixDQU1VO0FBTlYsYUFkTyxDQWxCUDtBQXdDSEMsa0JBQU07QUFDRkMsdUJBQU8sQ0FETDtBQUVGQyx1QkFBTztBQUZMO0FBeENILFMsUUE4Q1BDLE8sR0FBVTtBQUNOQywwQkFETSw0QkFDVztBQUNiLHFCQUFLZCxVQUFMLEdBQWtCLENBQUMsS0FBS0EsVUFBeEI7QUFDSCxhQUhLO0FBSU5lLG9CQUpNLHNCQUlLO0FBQ1BDLG1CQUFHQyxVQUFILENBQWM7QUFDVkMseUJBQUs7QUFESyxpQkFBZDtBQUdILGFBUks7QUFTTkMsc0JBVE0sc0JBU0tDLENBVEwsRUFTUTtBQUNWQyx3QkFBUUMsR0FBUixDQUFZRixDQUFaO0FBQ0EscUJBQUtwQixVQUFMLEdBQWtCLEtBQWxCO0FBQ0g7QUFaSyxTOzs7O0VBdERxQkgsZUFBS2EsSTs7a0JBQW5CbkIsSyIsImZpbGUiOiJtZW51MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudTEgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55uR5rWL6aKE6K2mJyxcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgIFwidmFuLWljb25cIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvaWNvbi9pbmRleFwiLFxuICAgICAgICAgICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXG4gICAgICAgICAgICB0aW1lU2NyZWVuOiBmYWxzZSxcbiAgICAgICAgICAgIHRpbWVPcHRpb25zIDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAn6aKE6K2m5pe26Ze05LuO6L+R5Yiw6L+cJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDIsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAn6aKE6K2m5pe26Ze05LuO6L+c5Yiw6L+RJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAn6aKE6K2m5pe26Ze05LuO6L+R5Yiw6L+cJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDQsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAn6aKE6K2m5pe26Ze05LuO6L+c5Yiw6L+RJ1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBsaXN0RGF0YTogW3tcbiAgICAgICAgICAgICAgICBpZDogMSxcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiAnJyxcbiAgICAgICAgICAgICAgICBkZXNjOiAn5rC45a6a55S35p2/5rqq6IGU5p2R6aKE6K2m6K+05piO5paH5a2X5rC45a6a55S35p2/5rqq6IGU5p2R6aKE6K2m6K+05piO5paH5a2X5rC45a6a55S35p2/5rqq6IGU5p2R6aKE6K2m6K+05piO5paHJyxcbiAgICAgICAgICAgICAgICB0aW1lOiAnMjAxOeW5tDEx5pyIMjDml6UgMTc6MjM6MTInLFxuICAgICAgICAgICAgICAgIHVzZXI6ICflvKDkuIknLFxuICAgICAgICAgICAgICAgIHN0YXRlOiAwIC8vIDA6IOacquWkhOeQhiAx77yaIOWkhOeQhlxuICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxuICAgICAgICAgICAgICAgIGRlc2M6ICfmsLjlrprnlLfmnb/muqrogZTmnZHpooTorabor7TmmI7mloflrZfmsLjlrprnlLfmnb/muqrogZTmnZHpooTorabor7TmmI7mloflrZfmsLjlrprnlLfmnb/muqrogZTmnZHpooTorabor7TmmI7mlocnLFxuICAgICAgICAgICAgICAgIHRpbWU6ICcyMDE55bm0MTHmnIgyMOaXpSAxNzoyMzoxMicsXG4gICAgICAgICAgICAgICAgdXNlcjogJ+adjuWbmycsXG4gICAgICAgICAgICAgICAgc3RhdGU6IDEgLy8gMDog5pyq5aSE55CGIDHvvJog5aSE55CGXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgaWQ6IDMsXG4gICAgICAgICAgICAgICAgcGljdHVyZTogJycsXG4gICAgICAgICAgICAgICAgZGVzYzogJ+awuOWumueUt+adv+a6quiBlOadkemihOitpuivtOaYjuaWh+Wtl+awuOWumueUt+adv+a6quiBlOadkemihOitpuivtOaYjuaWh+Wtl+awuOWumueUt+adv+a6quiBlOadkemihOitpuivtOaYjuaWhycsXG4gICAgICAgICAgICAgICAgdGltZTogJzIwMTnlubQxMeaciDIw5pelIDE3OjIzOjEyJyxcbiAgICAgICAgICAgICAgICB1c2VyOiAn546L5LqUJyxcbiAgICAgICAgICAgICAgICBzdGF0ZTogMSAvLyAwOiDmnKrlpITnkIYgMe+8miDlpITnkIZcbiAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgcGFnZToge1xuICAgICAgICAgICAgICAgIGNvdW50OiAwLFxuICAgICAgICAgICAgICAgIHRvdGFsOiAwXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgc2hvd1NjcmVlblRpbWUoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lU2NyZWVuID0gIXRoaXMudGltZVNjcmVlbjtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b1JlcG9ydCgpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3JlcG9ydEluZm8nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZWxlY3RUaW1lKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVTY3JlZW4gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==