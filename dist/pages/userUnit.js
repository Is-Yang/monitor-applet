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
                id: 1,
                nickname: '张三',
                phone: 13143715009,
                total: 2, // 监测总数量
                num: 1, // 已监测数量
                role: '普通用户',
                site: [{
                    name: '永定区抚市溪联南板',
                    check: 1 // 已监测
                }, {
                    name: '漳平市南洋利田',
                    check: 0 // 未监测
                }]
            }, {
                id: 2,
                nickname: '李四',
                phone: 15896585654,
                total: 2,
                num: 2,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJVbml0LmpzIl0sIm5hbWVzIjpbIlVzZXJVbml0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImFjdGl2ZU5hbWVzIiwidXNlckxpc3QiLCJpZCIsIm5pY2tuYW1lIiwicGhvbmUiLCJ0b3RhbCIsIm51bSIsInJvbGUiLCJzaXRlIiwibmFtZSIsImNoZWNrIiwibWV0aG9kcyIsIm9uQ2hhbmdlU2l0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2VDb2xsIiwiZGV0YWlsIiwib25DbGlja0xlZnQiLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwrQkFBZSxrQ0FERjtBQUViLGdDQUFnQixtQ0FGSDtBQUdiLHFDQUFxQjtBQUhSO0FBRlosUyxRQVFUQyxJLEdBQU87QUFDSEMsNkJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHhDO0FBRUhJLHlCQUFhLENBQUMsR0FBRCxDQUZWO0FBR0hDLHNCQUFVLENBQUM7QUFDSEMsb0JBQUksQ0FERDtBQUVIQywwQkFBVSxJQUZQO0FBR0hDLHVCQUFPLFdBSEo7QUFJSEMsdUJBQU8sQ0FKSixFQUlRO0FBQ1hDLHFCQUFLLENBTEYsRUFLTTtBQUNUQyxzQkFBTSxNQU5IO0FBT0hDLHNCQUFNLENBQUM7QUFDSEMsMEJBQU0sV0FESDtBQUVIQywyQkFBTyxDQUZKLENBRU87QUFGUCxpQkFBRCxFQUdIO0FBQ0NELDBCQUFNLFNBRFA7QUFFQ0MsMkJBQU8sQ0FGUixDQUVVO0FBRlYsaUJBSEc7QUFQSCxhQUFELEVBZU47QUFDSVIsb0JBQUksQ0FEUjtBQUVJQywwQkFBVSxJQUZkO0FBR0lDLHVCQUFPLFdBSFg7QUFJSUMsdUJBQU8sQ0FKWDtBQUtJQyxxQkFBSyxDQUxUO0FBTUlDLHNCQUFNLE1BTlY7QUFPSUMsc0JBQU0sQ0FBQztBQUNIQywwQkFBTSxXQURIO0FBRUhDLDJCQUFPO0FBRkosaUJBQUQ7QUFQVixhQWZNO0FBSFAsUyxRQWdDUEMsTyxHQUFVO0FBQ05DLHdCQURNLHdCQUNPQyxDQURQLEVBQ1U7QUFDWkMsd0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNILGFBSEs7QUFJTkcsd0JBSk0sd0JBSU9ILENBSlAsRUFJVTtBQUNaLHFCQUFLYixXQUFMLEdBQW1CYSxFQUFFSSxNQUFyQjtBQUNILGFBTks7QUFPTkMsdUJBUE0seUJBT1E7QUFDVkMsbUJBQUdDLFlBQUgsQ0FBZ0I7QUFDWkMsMkJBQU87QUFESyxpQkFBaEI7QUFHSDtBQVhLLFM7Ozs7RUF6Q3dCeEIsZUFBS3lCLEk7O2tCQUF0Qi9CLFEiLCJmaWxlIjoidXNlclVuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyVW5pdCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5Y2V5L2NJyxcclxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIixcclxuICAgICAgICAgICAgICAgIFwidmFuLWNvbGxhcHNlXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2NvbGxhcHNlL2luZGV4XCIsXHJcbiAgICAgICAgICAgICAgICBcInZhbi1jb2xsYXBzZS1pdGVtXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2NvbGxhcHNlLWl0ZW0vaW5kZXhcIixcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxyXG4gICAgICAgICAgICBhY3RpdmVOYW1lczogWycxJ10sXHJcbiAgICAgICAgICAgIHVzZXJMaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAn5byg5LiJJyxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogMTMxNDM3MTUwMDksXHJcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IDIsICAvLyDnm5HmtYvmgLvmlbDph49cclxuICAgICAgICAgICAgICAgICAgICBudW06IDEsICAvLyDlt7Lnm5HmtYvmlbDph49cclxuICAgICAgICAgICAgICAgICAgICByb2xlOiAn5pmu6YCa55So5oi3JywgXHJcbiAgICAgICAgICAgICAgICAgICAgc2l0ZTogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+awuOWumuWMuuaKmuW4gua6quiBlOWNl+advycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrOiAxICAvLyDlt7Lnm5HmtYtcclxuICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmvLPlubPluILljZfmtIvliKnnlLAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVjazogMCAvLyDmnKrnm5HmtYtcclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogMixcclxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ+adjuWbmycsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6IDE1ODk2NTg1NjU0LFxyXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIG51bTogMixcclxuICAgICAgICAgICAgICAgICAgICByb2xlOiAn5pmu6YCa55So5oi3JyxcclxuICAgICAgICAgICAgICAgICAgICBzaXRlOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5rC45a6a5Yy65oqa5biC5rqq6IGU5Y2X5p2/JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2s6IDFcclxuICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlU2l0ZShlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DaGFuZ2VDb2xsKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTmFtZXMgPSBlLmRldGFpbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DbGlja0xlZnQoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuIl19