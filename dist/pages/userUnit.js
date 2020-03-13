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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJVbml0LmpzIl0sIm5hbWVzIjpbIlVzZXJVbml0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJhY3RpdmVOYW1lcyIsInVzZXJMaXN0Iiwibmlja25hbWUiLCJwaG9uZSIsIm51bSIsInJvbGUiLCJzaXRlIiwibmFtZSIsImNoZWNrIiwibWV0aG9kcyIsIm9uQ2hhbmdlU2l0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2VDb2xsIiwiZGV0YWlsIiwib25DbGlja0xlZnQiLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDSTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxROzs7Ozs7Ozs7Ozs7Ozs4TEFDakJDLE0sR0FBUztBQUNMQyxvQ0FBd0IsTUFEbkI7QUFFTEMsNkJBQWlCO0FBQ2IsK0JBQWUsa0NBREY7QUFFYixnQ0FBZ0IsbUNBRkg7QUFHYixxQ0FBcUI7QUFIUjtBQUZaLFMsUUFRVEMsSSxHQUFPO0FBQ0hDLHlCQUFhLENBQUMsR0FBRCxDQURWO0FBRUhDLHNCQUFVLENBQUM7QUFDSEMsMEJBQVUsSUFEUDtBQUVIQyx1QkFBTyxXQUZKO0FBR0hDLHFCQUFLLENBSEY7QUFJSEMsc0JBQU0sTUFKSDtBQUtIQyxzQkFBTSxDQUFDO0FBQ0hDLDBCQUFNLFdBREg7QUFFSEMsMkJBQU87QUFGSixpQkFBRCxFQUdIO0FBQ0NELDBCQUFNLFNBRFA7QUFFQ0MsMkJBQU87QUFGUixpQkFIRztBQUxILGFBQUQsRUFhTjtBQUNJTiwwQkFBVSxJQURkO0FBRUlDLHVCQUFPLFdBRlg7QUFHSUMscUJBQUssQ0FIVDtBQUlJQyxzQkFBTSxNQUpWO0FBS0lDLHNCQUFNLENBQUM7QUFDSEMsMEJBQU0sV0FESDtBQUVIQywyQkFBTztBQUZKLGlCQUFEO0FBTFYsYUFiTTtBQUZQLFMsUUEyQlBDLE8sR0FBVTtBQUNOQyx3QkFETSx3QkFDT0MsQ0FEUCxFQUNVO0FBQ1pDLHdCQUFRQyxHQUFSLENBQVlGLENBQVo7QUFDSCxhQUhLO0FBSU5HLHdCQUpNLHdCQUlPSCxDQUpQLEVBSVU7QUFDWixxQkFBS1gsV0FBTCxHQUFtQlcsRUFBRUksTUFBckI7QUFDSCxhQU5LO0FBT05DLHVCQVBNLHlCQU9RO0FBQ1ZDLG1CQUFHQyxZQUFILENBQWdCO0FBQ1pDLDJCQUFPO0FBREssaUJBQWhCO0FBR0g7QUFYSyxTOzs7O0VBcEN3QkMsZUFBS0MsSTs7a0JBQXRCMUIsUSIsImZpbGUiOiJ1c2VyVW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclVuaXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5Y2V5L2NJyxcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiLFxuICAgICAgICAgICAgICAgIFwidmFuLWNvbGxhcHNlXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2NvbGxhcHNlL2luZGV4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YW4tY29sbGFwc2UtaXRlbVwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9jb2xsYXBzZS1pdGVtL2luZGV4XCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGl2ZU5hbWVzOiBbJzEnXSxcbiAgICAgICAgICAgIHVzZXJMaXN0OiBbe1xuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ+W8oOS4iScsXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiAxMzE0MzcxNTAwOSxcbiAgICAgICAgICAgICAgICAgICAgbnVtOiAxLFxuICAgICAgICAgICAgICAgICAgICByb2xlOiAn5pmu6YCa55So5oi3JyxcbiAgICAgICAgICAgICAgICAgICAgc2l0ZTogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmsLjlrprljLrmiprluILmuqrogZTljZfmnb8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2s6IDFcbiAgICAgICAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+a8s+W5s+W4guWNl+a0i+WIqeeUsCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVjazogMFxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ+adjuWbmycsXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiAxNTg5NjU4NTY1NCxcbiAgICAgICAgICAgICAgICAgICAgbnVtOiAxLFxuICAgICAgICAgICAgICAgICAgICByb2xlOiAn5pmu6YCa55So5oi3JyxcbiAgICAgICAgICAgICAgICAgICAgc2l0ZTogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmsLjlrprljLrmiprluILmuqrogZTljZfmnb8nLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2s6IDFcbiAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgICAgbWV0aG9kcyA9IHtcbiAgICAgICAgICAgIG9uQ2hhbmdlU2l0ZShlKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DaGFuZ2VDb2xsKGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZU5hbWVzID0gZS5kZXRhaWw7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25DbGlja0xlZnQoKSB7XG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcbiAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==