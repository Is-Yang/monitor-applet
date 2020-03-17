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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJVbml0LmpzIl0sIm5hbWVzIjpbIlVzZXJVbml0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImFjdGl2ZU5hbWVzIiwidXNlckxpc3QiLCJpZCIsIm5pY2tuYW1lIiwicGhvbmUiLCJ0b3RhbCIsIm51bSIsInJvbGUiLCJzaXRlIiwibmFtZSIsImNoZWNrIiwibWV0aG9kcyIsIm9uQ2hhbmdlU2l0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2VDb2xsIiwiZGV0YWlsIiwib25DbGlja0xlZnQiLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwrQkFBZSxrQ0FERjtBQUViLGdDQUFnQixtQ0FGSDtBQUdiLHFDQUFxQjtBQUhSO0FBRlosUyxRQVFUQyxJLEdBQU87QUFDSEMsNkJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHhDO0FBRUhJLHlCQUFhLENBQUMsR0FBRCxDQUZWO0FBR0hDLHNCQUFVLENBQUM7QUFDSEMsb0JBQUksQ0FERDtBQUVIQywwQkFBVSxJQUZQO0FBR0hDLHVCQUFPLFdBSEo7QUFJSEMsdUJBQU8sQ0FKSixFQUlRO0FBQ1hDLHFCQUFLLENBTEYsRUFLTTtBQUNUQyxzQkFBTSxNQU5IO0FBT0hDLHNCQUFNLENBQUM7QUFDSEMsMEJBQU0sV0FESDtBQUVIQywyQkFBTyxDQUZKLENBRU87QUFGUCxpQkFBRCxFQUdIO0FBQ0NELDBCQUFNLFNBRFA7QUFFQ0MsMkJBQU8sQ0FGUixDQUVVO0FBRlYsaUJBSEc7QUFQSCxhQUFELEVBZU47QUFDSVIsb0JBQUksQ0FEUjtBQUVJQywwQkFBVSxJQUZkO0FBR0lDLHVCQUFPLFdBSFg7QUFJSUMsdUJBQU8sQ0FKWDtBQUtJQyxxQkFBSyxDQUxUO0FBTUlDLHNCQUFNLE1BTlY7QUFPSUMsc0JBQU0sQ0FBQztBQUNIQywwQkFBTSxXQURIO0FBRUhDLDJCQUFPO0FBRkosaUJBQUQ7QUFQVixhQWZNO0FBSFAsUyxRQWdDUEMsTyxHQUFVO0FBQ05DLHdCQURNLHdCQUNPQyxDQURQLEVBQ1U7QUFDWkMsd0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNILGFBSEs7QUFJTkcsd0JBSk0sd0JBSU9ILENBSlAsRUFJVTtBQUNaLHFCQUFLYixXQUFMLEdBQW1CYSxFQUFFSSxNQUFyQjtBQUNILGFBTks7QUFPTkMsdUJBUE0seUJBT1E7QUFDVkMsbUJBQUdDLFlBQUgsQ0FBZ0I7QUFDWkMsMkJBQU87QUFESyxpQkFBaEI7QUFHSDtBQVhLLFM7Ozs7RUF6Q3dCeEIsZUFBS3lCLEk7O2tCQUF0Qi9CLFEiLCJmaWxlIjoidXNlclVuaXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJVbml0IGV4dGVuZHMgd2VweS5wYWdlIHtcbiAgICAgICAgY29uZmlnID0ge1xuICAgICAgICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahOWNleS9jScsXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIixcbiAgICAgICAgICAgICAgICBcInZhbi1jb2xsYXBzZVwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9jb2xsYXBzZS9pbmRleFwiLFxuICAgICAgICAgICAgICAgIFwidmFuLWNvbGxhcHNlLWl0ZW1cIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvY29sbGFwc2UtaXRlbS9pbmRleFwiLFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgICBzdGF0dXNCYXJIZWlnaHQ6IHdlcHkuJGluc3RhbmNlLmdsb2JhbERhdGEuc3RhdHVzQmFySGVpZ2h0LFxuICAgICAgICAgICAgYWN0aXZlTmFtZXM6IFsnMSddLFxuICAgICAgICAgICAgdXNlckxpc3Q6IFt7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ+W8oOS4iScsXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiAxMzE0MzcxNTAwOSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IDIsICAvLyDnm5HmtYvmgLvmlbDph49cbiAgICAgICAgICAgICAgICAgICAgbnVtOiAxLCAgLy8g5bey55uR5rWL5pWw6YePXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6ICfmma7pgJrnlKjmiLcnLCBcbiAgICAgICAgICAgICAgICAgICAgc2l0ZTogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmsLjlrprljLrmiprluILmuqrogZTljZfmnb8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2s6IDEgIC8vIOW3suebkea1i1xuICAgICAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5ryz5bmz5biC5Y2X5rSL5Yip55SwJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrOiAwIC8vIOacquebkea1i1xuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZDogMixcbiAgICAgICAgICAgICAgICAgICAgbmlja25hbWU6ICfmnY7lm5snLFxuICAgICAgICAgICAgICAgICAgICBwaG9uZTogMTU4OTY1ODU2NTQsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiAyLFxuICAgICAgICAgICAgICAgICAgICBudW06IDIsXG4gICAgICAgICAgICAgICAgICAgIHJvbGU6ICfmma7pgJrnlKjmiLcnLFxuICAgICAgICAgICAgICAgICAgICBzaXRlOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+awuOWumuWMuuaKmuW4gua6quiBlOWNl+advycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVjazogMVxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgb25DaGFuZ2VTaXRlKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNoYW5nZUNvbGwoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTmFtZXMgPSBlLmRldGFpbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrTGVmdCgpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuIl19