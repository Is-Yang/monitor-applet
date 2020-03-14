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

var UserUnit = function (_wepy$page) {
    _inherits(UserUnit, _wepy$page);

    function UserUnit() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, UserUnit);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserUnit.__proto__ || Object.getPrototypeOf(UserUnit)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的单位',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index",
                "van-collapse": "../components/vant/collapse/index",
                "van-collapse-item": "../components/vant/collapse-item/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            activeNames: ['1'],
            userList: [{
                nickname: '张三',
                phone: 13143715009,
                num: 1,
                role: '普通用户',
                site: [{
                    name: '永定区抚市溪联南板',
                    check: 1
                }, {
                    name: '漳平市南洋利田',
                    check: 0
                }]
            }, {
                nickname: '李四',
                phone: 15896585654,
                num: 1,
                role: '普通用户',
                site: [{
                    name: '永定区抚市溪联南板',
                    check: 1
                }]
            }]
        }, _this.methods = {
            onChangeSite: function onChangeSite(e) {
                console.log(e);
            },
            onChangeColl: function onChangeColl(e) {
                this.activeNames = e.detail;
            },
            onClickLeft: function onClickLeft() {
                wx.navigateBack({
                    delta: 1
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return UserUnit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(UserUnit , 'pages/userUnit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJVbml0LmpzIl0sIm5hbWVzIjpbIlVzZXJVbml0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImFjdGl2ZU5hbWVzIiwidXNlckxpc3QiLCJuaWNrbmFtZSIsInBob25lIiwibnVtIiwicm9sZSIsInNpdGUiLCJuYW1lIiwiY2hlY2siLCJtZXRob2RzIiwib25DaGFuZ2VTaXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJvbkNoYW5nZUNvbGwiLCJkZXRhaWwiLCJvbkNsaWNrTGVmdCIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0k7Ozs7Ozs7Ozs7OztJQUNxQkEsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlLGtDQURGO0FBRWIsZ0NBQWdCLG1DQUZIO0FBR2IscUNBQXFCO0FBSFI7QUFGWixTLFFBUVRDLEksR0FBTztBQUNIQyw2QkFBaUJDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkgsZUFEeEM7QUFFSEkseUJBQWEsQ0FBQyxHQUFELENBRlY7QUFHSEMsc0JBQVUsQ0FBQztBQUNIQywwQkFBVSxJQURQO0FBRUhDLHVCQUFPLFdBRko7QUFHSEMscUJBQUssQ0FIRjtBQUlIQyxzQkFBTSxNQUpIO0FBS0hDLHNCQUFNLENBQUM7QUFDSEMsMEJBQU0sV0FESDtBQUVIQywyQkFBTztBQUZKLGlCQUFELEVBR0g7QUFDQ0QsMEJBQU0sU0FEUDtBQUVDQywyQkFBTztBQUZSLGlCQUhHO0FBTEgsYUFBRCxFQWFOO0FBQ0lOLDBCQUFVLElBRGQ7QUFFSUMsdUJBQU8sV0FGWDtBQUdJQyxxQkFBSyxDQUhUO0FBSUlDLHNCQUFNLE1BSlY7QUFLSUMsc0JBQU0sQ0FBQztBQUNIQywwQkFBTSxXQURIO0FBRUhDLDJCQUFPO0FBRkosaUJBQUQ7QUFMVixhQWJNO0FBSFAsUyxRQTRCUEMsTyxHQUFVO0FBQ05DLHdCQURNLHdCQUNPQyxDQURQLEVBQ1U7QUFDWkMsd0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNILGFBSEs7QUFJTkcsd0JBSk0sd0JBSU9ILENBSlAsRUFJVTtBQUNaLHFCQUFLWCxXQUFMLEdBQW1CVyxFQUFFSSxNQUFyQjtBQUNILGFBTks7QUFPTkMsdUJBUE0seUJBT1E7QUFDVkMsbUJBQUdDLFlBQUgsQ0FBZ0I7QUFDWkMsMkJBQU87QUFESyxpQkFBaEI7QUFHSDtBQVhLLFM7Ozs7RUFyQ3dCdEIsZUFBS3VCLEk7O2tCQUF0QjdCLFEiLCJmaWxlIjoidXNlclVuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyVW5pdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5Y2V5L2NJyxcclxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIixcclxuICAgICAgICAgICAgICAgIFwidmFuLWNvbGxhcHNlXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2NvbGxhcHNlL2luZGV4XCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbi1jb2xsYXBzZS1pdGVtXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2NvbGxhcHNlLWl0ZW0vaW5kZXhcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxyXG4gICAgICAgICAgICBhY3RpdmVOYW1lczogWycxJ10sXHJcbiAgICAgICAgICAgIHVzZXJMaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAn5byg5LiJJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogMTMxNDM3MTUwMDksXHJcbiAgICAgICAgICAgICAgICAgICAgbnVtOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6ICfmma7pgJrnlKjmiLcnLFxyXG4gICAgICAgICAgICAgICAgICAgIHNpdGU6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmsLjlrprljLrmiprluILmuqrogZTljZfmnb8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVjazogMVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+a8s+W5s+W4guWNl+a0i+WIqeeUsCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrOiAwXHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6ICfmnY7lm5snLFxyXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiAxNTg5NjU4NTY1NCxcclxuICAgICAgICAgICAgICAgICAgICBudW06IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogJ+aZrumAmueUqOaItycsXHJcbiAgICAgICAgICAgICAgICAgICAgc2l0ZTogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+awuOWumuWMuuaKmuW4gua6quiBlOWNl+advycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBvbkNoYW5nZVNpdGUoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlQ29sbChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU5hbWVzID0gZS5kZXRhaWw7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2xpY2tMZWZ0KCkge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==