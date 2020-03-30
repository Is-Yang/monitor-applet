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

var UserInfo = function (_wepy$page) {
    _inherits(UserInfo, _wepy$page);

    function UserInfo() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, UserInfo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = UserInfo.__proto__ || Object.getPrototypeOf(UserInfo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的信息',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            nickname: '',
            phone: '',
            userId: ''
        }, _this.methods = {
            nicknameInput: function nicknameInput(e) {
                this.nickname = e.detail.value;
            },
            phoneInput: function phoneInput(e) {
                this.phone = e.detail.value;
            },
            completeEdit: function completeEdit() {
                var params = JSON.stringify({
                    userId: this.userId,
                    phonenumber: this.phone,
                    nickName: this.nickname
                });
                this.updateUser(params);
            },
            onClickLeft: function onClickLeft() {
                wx.navigateBack({
                    delta: 1
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(UserInfo, [{
        key: 'onLoad',
        value: function onLoad(options) {
            this.nickname = options.nickname;
            this.phone = options.tel;
            this.userId = options.userId;
            this.$apply();
        }
    }, {
        key: 'updateUser',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return api.updateUser(params);

                            case 2:
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

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function updateUser(_x) {
                return _ref2.apply(this, arguments);
            }

            return updateUser;
        }()
    }]);

    return UserInfo;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(UserInfo , 'pages/userInfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImFwaSIsIlVzZXJJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsIm5pY2tuYW1lIiwicGhvbmUiLCJ1c2VySWQiLCJtZXRob2RzIiwibmlja25hbWVJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInBob25lSW5wdXQiLCJjb21wbGV0ZUVkaXQiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicGhvbmVudW1iZXIiLCJuaWNrTmFtZSIsInVwZGF0ZVVzZXIiLCJvbkNsaWNrTGVmdCIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJvcHRpb25zIiwidGVsIiwiJGFwcGx5IiwicmVzIiwiY29kZSIsInNob3dUb2FzdCIsInRpdGxlIiwibXNnIiwiaWNvbiIsImR1cmF0aW9uIiwic2V0VGltZW91dCIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNJOzs7O0FBQ0E7O0lBQVlBLEc7Ozs7Ozs7Ozs7Ozs7O0lBQ1NDLFE7Ozs7Ozs7Ozs7Ozs7OzhMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixNQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwrQkFBZTtBQURGO0FBRlosUyxRQU1UQyxJLEdBQU87QUFDSEMsNkJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHhDO0FBRUhJLHNCQUFVLEVBRlA7QUFHSEMsbUJBQU8sRUFISjtBQUlIQyxvQkFBUTtBQUpMLFMsUUFjUEMsTyxHQUFVO0FBQ05DLHlCQURNLHlCQUNRQyxDQURSLEVBQ1c7QUFDYixxQkFBS0wsUUFBTCxHQUFnQkssRUFBRUMsTUFBRixDQUFTQyxLQUF6QjtBQUNILGFBSEs7QUFJTkMsc0JBSk0sc0JBSUtILENBSkwsRUFJUTtBQUNWLHFCQUFLSixLQUFMLEdBQWFJLEVBQUVDLE1BQUYsQ0FBU0MsS0FBdEI7QUFDSCxhQU5LO0FBT05FLHdCQVBNLDBCQU9TO0FBQ1gsb0JBQUlDLFNBQVNDLEtBQUtDLFNBQUwsQ0FBZTtBQUN4QlYsNEJBQVEsS0FBS0EsTUFEVztBQUV4QlcsaUNBQWEsS0FBS1osS0FGTTtBQUd4QmEsOEJBQVUsS0FBS2Q7QUFIUyxpQkFBZixDQUFiO0FBS0EscUJBQUtlLFVBQUwsQ0FBZ0JMLE1BQWhCO0FBQ0gsYUFkSztBQWVOTSx1QkFmTSx5QkFlUTtBQUNWQyxtQkFBR0MsWUFBSCxDQUFnQjtBQUNaQywyQkFBTztBQURLLGlCQUFoQjtBQUdIO0FBbkJLLFM7Ozs7OytCQVBIQyxPLEVBQVM7QUFDWixpQkFBS3BCLFFBQUwsR0FBZ0JvQixRQUFRcEIsUUFBeEI7QUFDQSxpQkFBS0MsS0FBTCxHQUFhbUIsUUFBUUMsR0FBckI7QUFDQSxpQkFBS25CLE1BQUwsR0FBY2tCLFFBQVFsQixNQUF0QjtBQUNBLGlCQUFLb0IsTUFBTDtBQUNIOzs7O2lHQXdCZ0JaLE07Ozs7Ozs7dUNBQ0dwQixJQUFJeUIsVUFBSixDQUFlTCxNQUFmLEM7OztBQUFaYSxtQzs7QUFDSixvQ0FBSUEsSUFBSUMsSUFBSixJQUFZLEdBQWhCLEVBQXFCO0FBQ2pCUCx1Q0FBR1EsU0FBSCxDQUFhO0FBQ1RDLCtDQUFPSCxJQUFJSSxHQURGO0FBRVRDLDhDQUFNLFNBRkc7QUFHVEMsa0RBQVU7QUFIRCxxQ0FBYjtBQUtBQywrQ0FBVyxZQUFNO0FBQ2JiLDJDQUFHQyxZQUFILENBQWdCO0FBQ1pDLG1EQUFPO0FBREsseUNBQWhCO0FBR0gscUNBSkQsRUFJRyxJQUpIO0FBS0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7RUF4RDZCdEIsZUFBS2tDLEk7O2tCQUF0QnhDLFEiLCJmaWxlIjoidXNlckluZm8uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgICBpbXBvcnQgKiBhcyBhcGkgZnJvbSAnLi4vYXBpL2FwaSdcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIFVzZXJJbmZvIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoTkv6Hmga8nLFxyXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcclxuICAgICAgICAgICAgbmlja25hbWU6ICcnLFxyXG4gICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgIHVzZXJJZDogJydcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uTG9hZChvcHRpb25zKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmlja25hbWUgPSBvcHRpb25zLm5pY2tuYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnBob25lID0gb3B0aW9ucy50ZWw7XHJcbiAgICAgICAgICAgIHRoaXMudXNlcklkID0gb3B0aW9ucy51c2VySWQ7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtZXRob2RzID0ge1xyXG4gICAgICAgICAgICBuaWNrbmFtZUlucHV0KGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubmlja25hbWUgPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcGhvbmVJbnB1dChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBob25lID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbXBsZXRlRWRpdCgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcklkOiB0aGlzLnVzZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICBwaG9uZW51bWJlcjogdGhpcy5waG9uZSxcclxuICAgICAgICAgICAgICAgICAgICBuaWNrTmFtZTogdGhpcy5uaWNrbmFtZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlVXNlcihwYXJhbXMpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNsaWNrTGVmdCgpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyB1cGRhdGVVc2VyKHBhcmFtcykge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnVwZGF0ZVVzZXIocGFyYW1zKTtcclxuICAgICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzLm1zZyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==