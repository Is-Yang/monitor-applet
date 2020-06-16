'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _api = require('./../../api/api.js');

var api = _interopRequireWildcard(_api);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RoleList = function (_wepy$page) {
    _inherits(RoleList, _wepy$page);

    function RoleList() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, RoleList);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = RoleList.__proto__ || Object.getPrototypeOf(RoleList)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '相关角色列表',
            usingComponents: {
                "van-nav-bar": "../../components/vant/nav-bar/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            userId: '',
            roleList: [], // 相关人员
            selectId: '', // 所选ID
            selectRole: '' // 角色名称
        }, _this.methods = {
            submitSelect: function submitSelect() {
                this.changeUserRole();
            },
            checkboxChange: function checkboxChange(e) {
                this.selectId = e.detail.value;
                this.$apply();
            },
            onClickLeft: function onClickLeft() {
                var pages = getCurrentPages();
                if (pages.length == 1) {
                    wx.switchTab({
                        url: '/pages/menu0'
                    });
                } else {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(RoleList, [{
        key: 'onLoad',
        value: function onLoad(options) {
            _wepy2.default.$instance.shareImage();

            this.userId = options.id;
            this.optionsRole();
        }
    }, {
        key: 'changeUserRole',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var params, res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                params = {
                                    userId: this.userId,
                                    roleId: this.selectId
                                };
                                _context.next = 3;
                                return api.changeUserRoles(params);

                            case 3:
                                res = _context.sent;

                                if (res.code == 200) {
                                    wx.showToast({
                                        title: res.msg,
                                        icon: 'success',
                                        duration: 1500
                                    });
                                    setTimeout(function () {
                                        wx.navigateBack({
                                            delta: 1
                                        });
                                    }, 1000);
                                }

                            case 5:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function changeUserRole() {
                return _ref2.apply(this, arguments);
            }

            return changeUserRole;
        }()

        // 获取相关角色

    }, {
        key: 'optionsRole',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var res, pages, prevPage, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, item;

                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return api.optionsRole();

                            case 2:
                                res = _context2.sent;

                                if (!(res.code == 200)) {
                                    _context2.next = 28;
                                    break;
                                }

                                this.roleList = res.data;

                                pages = getCurrentPages();
                                prevPage = pages[pages.length - 2];

                                this.selectRole = prevPage.data.role;
                                _iteratorNormalCompletion = true;
                                _didIteratorError = false;
                                _iteratorError = undefined;
                                _context2.prev = 11;
                                for (_iterator = this.roleList[Symbol.iterator](); !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                                    item = _step.value;

                                    if (this.selectRole == item.roleName) {
                                        item.checked = true;
                                        this.selectId = item.roleId;
                                    }
                                }

                                _context2.next = 19;
                                break;

                            case 15:
                                _context2.prev = 15;
                                _context2.t0 = _context2['catch'](11);
                                _didIteratorError = true;
                                _iteratorError = _context2.t0;

                            case 19:
                                _context2.prev = 19;
                                _context2.prev = 20;

                                if (!_iteratorNormalCompletion && _iterator.return) {
                                    _iterator.return();
                                }

                            case 22:
                                _context2.prev = 22;

                                if (!_didIteratorError) {
                                    _context2.next = 25;
                                    break;
                                }

                                throw _iteratorError;

                            case 25:
                                return _context2.finish(22);

                            case 26:
                                return _context2.finish(19);

                            case 27:
                                this.$apply();

                            case 28:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this, [[11, 15, 19, 27], [20,, 22, 26]]);
            }));

            function optionsRole() {
                return _ref3.apply(this, arguments);
            }

            return optionsRole;
        }()
    }]);

    return RoleList;
}(_wepy2.default.page);


Page(require('./../../npm/wepy/lib/wepy.js').default.$createPage(RoleList , 'pages/package/roleList'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJvbGVMaXN0LmpzIl0sIm5hbWVzIjpbImFwaSIsIlJvbGVMaXN0IiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInVzZXJJZCIsInJvbGVMaXN0Iiwic2VsZWN0SWQiLCJzZWxlY3RSb2xlIiwibWV0aG9kcyIsInN1Ym1pdFNlbGVjdCIsImNoYW5nZVVzZXJSb2xlIiwiY2hlY2tib3hDaGFuZ2UiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCIkYXBwbHkiLCJvbkNsaWNrTGVmdCIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwibGVuZ3RoIiwid3giLCJzd2l0Y2hUYWIiLCJ1cmwiLCJuYXZpZ2F0ZUJhY2siLCJkZWx0YSIsIm9wdGlvbnMiLCJzaGFyZUltYWdlIiwiaWQiLCJvcHRpb25zUm9sZSIsInBhcmFtcyIsInJvbGVJZCIsImNoYW5nZVVzZXJSb2xlcyIsInJlcyIsImNvZGUiLCJzaG93VG9hc3QiLCJ0aXRsZSIsIm1zZyIsImljb24iLCJkdXJhdGlvbiIsInNldFRpbWVvdXQiLCJwcmV2UGFnZSIsInJvbGUiLCJpdGVtIiwicm9sZU5hbWUiLCJjaGVja2VkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7SUFDU0MsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLFFBRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlO0FBREY7QUFGWixTLFFBT1RDLEksR0FBTztBQUNIQyw2QkFBaUJDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkgsZUFEeEM7QUFFSEksb0JBQVEsRUFGTDtBQUdIQyxzQkFBVSxFQUhQLEVBR1k7QUFDZkMsc0JBQVUsRUFKUCxFQUlXO0FBQ2RDLHdCQUFZLEVBTFQsQ0FLYTtBQUxiLFMsUUFlUEMsTyxHQUFVO0FBQ05DLHdCQURNLDBCQUNTO0FBQ1gscUJBQUtDLGNBQUw7QUFDSCxhQUhLO0FBSU5DLDBCQUpNLDBCQUlTQyxDQUpULEVBSVk7QUFDZCxxQkFBS04sUUFBTCxHQUFnQk0sRUFBRUMsTUFBRixDQUFTQyxLQUF6QjtBQUNBLHFCQUFLQyxNQUFMO0FBQ0gsYUFQSztBQVFOQyx1QkFSTSx5QkFRUTtBQUNWLG9CQUFJQyxRQUFRQyxpQkFBWjtBQUNBLG9CQUFJRCxNQUFNRSxNQUFOLElBQWdCLENBQXBCLEVBQXVCO0FBQ25CQyx1QkFBR0MsU0FBSCxDQUFhO0FBQ1RDLDZCQUFLO0FBREkscUJBQWI7QUFHSCxpQkFKRCxNQUlPO0FBQ0hGLHVCQUFHRyxZQUFILENBQWdCO0FBQ1pDLCtCQUFPO0FBREsscUJBQWhCO0FBR0g7QUFDSjtBQW5CSyxTOzs7OzsrQkFQSEMsTyxFQUFTO0FBQ1p4QiwyQkFBS0MsU0FBTCxDQUFld0IsVUFBZjs7QUFFQSxpQkFBS3RCLE1BQUwsR0FBY3FCLFFBQVFFLEVBQXRCO0FBQ0EsaUJBQUtDLFdBQUw7QUFDSDs7Ozs7Ozs7OztBQXlCT0Msc0MsR0FBUztBQUNUekIsNENBQVEsS0FBS0EsTUFESjtBQUVUMEIsNENBQVEsS0FBS3hCO0FBRkosaUM7O3VDQUlHWixJQUFJcUMsZUFBSixDQUFvQkYsTUFBcEIsQzs7O0FBQVpHLG1DOztBQUNKLG9DQUFJQSxJQUFJQyxJQUFKLElBQVksR0FBaEIsRUFBcUI7QUFDakJiLHVDQUFHYyxTQUFILENBQWE7QUFDVEMsK0NBQU9ILElBQUlJLEdBREY7QUFFVEMsOENBQU0sU0FGRztBQUdUQyxrREFBVTtBQUhELHFDQUFiO0FBS0FDLCtDQUFXLFlBQU07QUFDYm5CLDJDQUFHRyxZQUFILENBQWdCO0FBQ1pDLG1EQUFPO0FBREsseUNBQWhCO0FBR0gscUNBSkQsRUFJRyxJQUpIO0FBS0g7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0w7Ozs7Ozs7Ozs7Ozs7dUNBRW9COUIsSUFBSWtDLFdBQUosRTs7O0FBQVpJLG1DOztzQ0FDREEsSUFBSUMsSUFBSixJQUFZLEc7Ozs7O0FBQ1gscUNBQUs1QixRQUFMLEdBQWdCMkIsSUFBSWpDLElBQXBCOztBQUVNa0IscUMsR0FBUUMsaUI7QUFDUnNCLHdDLEdBQVd2QixNQUFNQSxNQUFNRSxNQUFOLEdBQWUsQ0FBckIsQzs7QUFDakIscUNBQUtaLFVBQUwsR0FBa0JpQyxTQUFTekMsSUFBVCxDQUFjMEMsSUFBaEM7Ozs7O0FBQ0EsaURBQW1CLEtBQUtwQyxRQUF4Qix1SEFBa0M7QUFBdkJxQyx3Q0FBdUI7O0FBQzlCLHdDQUFJLEtBQUtuQyxVQUFMLElBQW1CbUMsS0FBS0MsUUFBNUIsRUFBc0M7QUFDbENELDZDQUFLRSxPQUFMLEdBQWUsSUFBZjtBQUNBLDZDQUFLdEMsUUFBTCxHQUFnQm9DLEtBQUtaLE1BQXJCO0FBQ0g7QUFDSjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUQscUNBQUtmLE1BQUw7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFqRjBCZCxlQUFLNEMsSTs7a0JBQXRCbEQsUSIsImZpbGUiOiJyb2xlTGlzdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG5pbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vLi4vYXBpL2FwaSdcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm9sZUxpc3QgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfnm7jlhbPop5LoibLliJfooagnLFxyXG4gICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkYXRhID0ge1xyXG4gICAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXHJcbiAgICAgICAgdXNlcklkOiAnJyxcclxuICAgICAgICByb2xlTGlzdDogW10sICAvLyDnm7jlhbPkurrlkZhcclxuICAgICAgICBzZWxlY3RJZDogJycsIC8vIOaJgOmAiUlEXHJcbiAgICAgICAgc2VsZWN0Um9sZTogJycgIC8vIOinkuiJsuWQjeensFxyXG4gICAgfVxyXG5cclxuICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgd2VweS4kaW5zdGFuY2Uuc2hhcmVJbWFnZSgpXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy51c2VySWQgPSBvcHRpb25zLmlkO1xyXG4gICAgICAgIHRoaXMub3B0aW9uc1JvbGUoKTtcclxuICAgIH1cclxuXHJcbiAgICBtZXRob2RzID0ge1xyXG4gICAgICAgIHN1Ym1pdFNlbGVjdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VVc2VyUm9sZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY2hlY2tib3hDaGFuZ2UoZSkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdElkID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkNsaWNrTGVmdCgpIHtcclxuICAgICAgICAgICAgbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgIGlmIChwYWdlcy5sZW5ndGggPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgd3guc3dpdGNoVGFiKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWVudTAnXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICBkZWx0YTogMVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY2hhbmdlVXNlclJvbGUoKSB7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcclxuICAgICAgICAgICAgcm9sZUlkOiB0aGlzLnNlbGVjdElkXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuY2hhbmdlVXNlclJvbGVzKHBhcmFtcyk7XHJcbiAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5tc2csXHJcbiAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMTAwMClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g6I635Y+W55u45YWz6KeS6ImyXHJcbiAgICBhc3luYyBvcHRpb25zUm9sZSgpIHtcclxuICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLm9wdGlvbnNSb2xlKCk7XHJcbiAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9sZUxpc3QgPSByZXMuZGF0YTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKClcclxuICAgICAgICAgICAgY29uc3QgcHJldlBhZ2UgPSBwYWdlc1twYWdlcy5sZW5ndGggLSAyXVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdFJvbGUgPSBwcmV2UGFnZS5kYXRhLnJvbGU7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgaXRlbSBvZiB0aGlzLnJvbGVMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RSb2xlID09IGl0ZW0ucm9sZU5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0SWQgPSBpdGVtLnJvbGVJZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy4kYXBwbHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19