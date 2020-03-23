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

    _createClass(UserUnit, [{
        key: 'onLoad',
        value: function onLoad() {
            this.getUserByDept();
        }
    }, {
        key: 'getUserByDept',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return api.getUserByDept();

                            case 2:
                                res = _context.sent;

                                console.log(res);

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getUserByDept() {
                return _ref2.apply(this, arguments);
            }

            return getUserByDept;
        }()
    }]);

    return UserUnit;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(UserUnit , 'pages/userUnit'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJVbml0LmpzIl0sIm5hbWVzIjpbImFwaSIsIlVzZXJVbml0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsImFjdGl2ZU5hbWVzIiwidXNlckxpc3QiLCJpZCIsIm5pY2tuYW1lIiwicGhvbmUiLCJ0b3RhbCIsIm51bSIsInJvbGUiLCJzaXRlIiwibmFtZSIsImNoZWNrIiwibWV0aG9kcyIsIm9uQ2hhbmdlU2l0ZSIsImUiLCJjb25zb2xlIiwibG9nIiwib25DaGFuZ2VDb2xsIiwiZGV0YWlsIiwib25DbGlja0xlZnQiLCJ3eCIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwiZ2V0VXNlckJ5RGVwdCIsInJlcyIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0lBQVlBLEc7Ozs7Ozs7Ozs7Ozs7O0lBQ1NDLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwrQkFBZSxrQ0FERjtBQUViLGdDQUFnQixtQ0FGSDtBQUdiLHFDQUFxQjtBQUhSO0FBRlosUyxRQVFUQyxJLEdBQU87QUFDSEMsNkJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHhDO0FBRUhJLHlCQUFhLENBQUMsR0FBRCxDQUZWO0FBR0hDLHNCQUFVLENBQUM7QUFDSEMsb0JBQUksQ0FERDtBQUVIQywwQkFBVSxJQUZQO0FBR0hDLHVCQUFPLFdBSEo7QUFJSEMsdUJBQU8sQ0FKSixFQUlRO0FBQ1hDLHFCQUFLLENBTEYsRUFLTTtBQUNUQyxzQkFBTSxNQU5IO0FBT0hDLHNCQUFNLENBQUM7QUFDSEMsMEJBQU0sV0FESDtBQUVIQywyQkFBTyxDQUZKLENBRU87QUFGUCxpQkFBRCxFQUdIO0FBQ0NELDBCQUFNLFNBRFA7QUFFQ0MsMkJBQU8sQ0FGUixDQUVVO0FBRlYsaUJBSEc7QUFQSCxhQUFELEVBZU47QUFDSVIsb0JBQUksQ0FEUjtBQUVJQywwQkFBVSxJQUZkO0FBR0lDLHVCQUFPLFdBSFg7QUFJSUMsdUJBQU8sQ0FKWDtBQUtJQyxxQkFBSyxDQUxUO0FBTUlDLHNCQUFNLE1BTlY7QUFPSUMsc0JBQU0sQ0FBQztBQUNIQywwQkFBTSxXQURIO0FBRUhDLDJCQUFPO0FBRkosaUJBQUQ7QUFQVixhQWZNO0FBSFAsUyxRQXFDUEMsTyxHQUFVO0FBQ05DLHdCQURNLHdCQUNPQyxDQURQLEVBQ1U7QUFDWkMsd0JBQVFDLEdBQVIsQ0FBWUYsQ0FBWjtBQUNILGFBSEs7QUFJTkcsd0JBSk0sd0JBSU9ILENBSlAsRUFJVTtBQUNaLHFCQUFLYixXQUFMLEdBQW1CYSxFQUFFSSxNQUFyQjtBQUNILGFBTks7QUFPTkMsdUJBUE0seUJBT1E7QUFDVkMsbUJBQUdDLFlBQUgsQ0FBZ0I7QUFDWkMsMkJBQU87QUFESyxpQkFBaEI7QUFHSDtBQVhLLFM7Ozs7O2lDQUpEO0FBQ0wsaUJBQUtDLGFBQUw7QUFDSDs7Ozs7Ozs7Ozs7dUNBaUJtQmhDLElBQUlnQyxhQUFKLEU7OztBQUFaQyxtQzs7QUFDSlQsd0NBQVFDLEdBQVIsQ0FBWVEsR0FBWjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQTlEOEIxQixlQUFLMkIsSTs7a0JBQXRCakMsUSIsImZpbGUiOiJ1c2VyVW5pdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgVXNlclVuaXQgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5Y2V5L2NJyxcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiLFxuICAgICAgICAgICAgICAgIFwidmFuLWNvbGxhcHNlXCI6IFwiLi4vY29tcG9uZW50cy92YW50L2NvbGxhcHNlL2luZGV4XCIsXG4gICAgICAgICAgICAgICAgXCJ2YW4tY29sbGFwc2UtaXRlbVwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9jb2xsYXBzZS1pdGVtL2luZGV4XCIsXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXG4gICAgICAgICAgICBhY3RpdmVOYW1lczogWycxJ10sXG4gICAgICAgICAgICB1c2VyTGlzdDogW3tcbiAgICAgICAgICAgICAgICAgICAgaWQ6IDEsXG4gICAgICAgICAgICAgICAgICAgIG5pY2tuYW1lOiAn5byg5LiJJyxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6IDEzMTQzNzE1MDA5LFxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogMiwgIC8vIOebkea1i+aAu+aVsOmHj1xuICAgICAgICAgICAgICAgICAgICBudW06IDEsICAvLyDlt7Lnm5HmtYvmlbDph49cbiAgICAgICAgICAgICAgICAgICAgcm9sZTogJ+aZrumAmueUqOaItycsIFxuICAgICAgICAgICAgICAgICAgICBzaXRlOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ+awuOWumuWMuuaKmuW4gua6quiBlOWNl+advycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVjazogMSAgLy8g5bey55uR5rWLXG4gICAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICfmvLPlubPluILljZfmtIvliKnnlLAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2s6IDAgLy8g5pyq55uR5rWLXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiAyLFxuICAgICAgICAgICAgICAgICAgICBuaWNrbmFtZTogJ+adjuWbmycsXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiAxNTg5NjU4NTY1NCxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IDIsXG4gICAgICAgICAgICAgICAgICAgIG51bTogMixcbiAgICAgICAgICAgICAgICAgICAgcm9sZTogJ+aZrumAmueUqOaItycsXG4gICAgICAgICAgICAgICAgICAgIHNpdGU6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAn5rC45a6a5Yy65oqa5biC5rqq6IGU5Y2X5p2/JyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrOiAxXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXVxuICAgICAgICB9XG5cbiAgICAgICAgb25Mb2FkKCkge1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VyQnlEZXB0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBtZXRob2RzID0ge1xuICAgICAgICAgICAgb25DaGFuZ2VTaXRlKGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNoYW5nZUNvbGwoZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlTmFtZXMgPSBlLmRldGFpbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbkNsaWNrTGVmdCgpIHtcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYXN5bmMgZ2V0VXNlckJ5RGVwdCgpIHtcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0VXNlckJ5RGVwdCgpXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpXG4gICAgICAgIH1cbiAgICB9XG4iXX0=