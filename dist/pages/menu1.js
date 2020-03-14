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
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Menu1;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu1 , 'pages/menu1'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUxLmpzIl0sIm5hbWVzIjpbIk1lbnUxIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImxpc3REYXRhIiwiaWQiLCJwaWN0dXJlIiwiZGVzYyIsInRpbWUiLCJ1c2VyIiwic3RhdGUiLCJwYWdlIiwiY291bnQiLCJ0b3RhbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiw0QkFBWSwrQkFEQztBQUViLCtCQUFlO0FBRkY7QUFGWixTLFFBT1RDLEksR0FBTztBQUNIQyw2QkFBaUJDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkgsZUFEeEM7QUFFSEksc0JBQVUsQ0FBQztBQUNQQyxvQkFBSSxDQURHO0FBRVBDLHlCQUFTLEVBRkY7QUFHUEMsc0JBQU0sd0NBSEM7QUFJUEMsc0JBQU0sc0JBSkM7QUFLUEMsc0JBQU0sSUFMQztBQU1QQyx1QkFBTyxDQU5BLENBTUU7QUFORixhQUFELEVBT1A7QUFDQ0wsb0JBQUksQ0FETDtBQUVDQyx5QkFBUyxFQUZWO0FBR0NDLHNCQUFNLHdDQUhQO0FBSUNDLHNCQUFNLHNCQUpQO0FBS0NDLHNCQUFNLElBTFA7QUFNQ0MsdUJBQU8sQ0FOUixDQU1VO0FBTlYsYUFQTyxFQWNQO0FBQ0NMLG9CQUFJLENBREw7QUFFQ0MseUJBQVMsRUFGVjtBQUdDQyxzQkFBTSx3Q0FIUDtBQUlDQyxzQkFBTSxzQkFKUDtBQUtDQyxzQkFBTSxJQUxQO0FBTUNDLHVCQUFPLENBTlIsQ0FNVTtBQU5WLGFBZE8sQ0FGUDtBQXdCSEMsa0JBQU07QUFDRkMsdUJBQU8sQ0FETDtBQUVGQyx1QkFBTztBQUZMO0FBeEJILFM7Ozs7RUFSd0JaLGVBQUtVLEk7O2tCQUFuQmhCLEsiLCJmaWxlIjoibWVudTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51MSBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55uR5rWL6aKE6K2mJyxcclxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbi1pY29uXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2ljb24vaW5kZXhcIixcclxuICAgICAgICAgICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcclxuICAgICAgICAgICAgbGlzdERhdGE6IFt7XHJcbiAgICAgICAgICAgICAgICBpZDogMSxcclxuICAgICAgICAgICAgICAgIHBpY3R1cmU6ICcnLFxyXG4gICAgICAgICAgICAgICAgZGVzYzogJ+awuOWumueUt+adv+a6quiBlOadkemihOitpuivtOaYjuaWh+Wtl+awuOWumueUt+adv+a6quiBlOadkemihOitpuivtOaYjuaWh+Wtl+awuOWumueUt+adv+a6quiBlOadkemihOitpuivtOaYjuaWhycsXHJcbiAgICAgICAgICAgICAgICB0aW1lOiAnMjAxOeW5tDEx5pyIMjDml6UgMTc6MjM6MTInLFxyXG4gICAgICAgICAgICAgICAgdXNlcjogJ+W8oOS4iScsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogMCAvLyAwOiDmnKrlpITnkIYgMe+8miDlpITnkIZcclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgICAgICAgICBwaWN0dXJlOiAnJyxcclxuICAgICAgICAgICAgICAgIGRlc2M6ICfmsLjlrprnlLfmnb/muqrogZTmnZHpooTorabor7TmmI7mloflrZfmsLjlrprnlLfmnb/muqrogZTmnZHpooTorabor7TmmI7mloflrZfmsLjlrprnlLfmnb/muqrogZTmnZHpooTorabor7TmmI7mlocnLFxyXG4gICAgICAgICAgICAgICAgdGltZTogJzIwMTnlubQxMeaciDIw5pelIDE3OjIzOjEyJyxcclxuICAgICAgICAgICAgICAgIHVzZXI6ICfmnY7lm5snLFxyXG4gICAgICAgICAgICAgICAgc3RhdGU6IDEgLy8gMDog5pyq5aSE55CGIDHvvJog5aSE55CGXHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGlkOiAzLFxyXG4gICAgICAgICAgICAgICAgcGljdHVyZTogJycsXHJcbiAgICAgICAgICAgICAgICBkZXNjOiAn5rC45a6a55S35p2/5rqq6IGU5p2R6aKE6K2m6K+05piO5paH5a2X5rC45a6a55S35p2/5rqq6IGU5p2R6aKE6K2m6K+05piO5paH5a2X5rC45a6a55S35p2/5rqq6IGU5p2R6aKE6K2m6K+05piO5paHJyxcclxuICAgICAgICAgICAgICAgIHRpbWU6ICcyMDE55bm0MTHmnIgyMOaXpSAxNzoyMzoxMicsXHJcbiAgICAgICAgICAgICAgICB1c2VyOiAn546L5LqUJyxcclxuICAgICAgICAgICAgICAgIHN0YXRlOiAxIC8vIDA6IOacquWkhOeQhiAx77yaIOWkhOeQhlxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgcGFnZToge1xyXG4gICAgICAgICAgICAgICAgY291bnQ6IDAsXHJcbiAgICAgICAgICAgICAgICB0b3RhbDogMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=