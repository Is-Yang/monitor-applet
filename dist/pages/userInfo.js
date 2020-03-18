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
        value: function onLoad(e) {
            this.nickname = e.nickname;
            this.phone = e.tel;
            this.userId = e.userId;
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJJbmZvLmpzIl0sIm5hbWVzIjpbImFwaSIsIlVzZXJJbmZvIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsIm5pY2tuYW1lIiwicGhvbmUiLCJ1c2VySWQiLCJtZXRob2RzIiwibmlja25hbWVJbnB1dCIsImUiLCJkZXRhaWwiLCJ2YWx1ZSIsInBob25lSW5wdXQiLCJjb21wbGV0ZUVkaXQiLCJwYXJhbXMiLCJKU09OIiwic3RyaW5naWZ5IiwicGhvbmVudW1iZXIiLCJuaWNrTmFtZSIsInVwZGF0ZVVzZXIiLCJvbkNsaWNrTGVmdCIsInd4IiwibmF2aWdhdGVCYWNrIiwiZGVsdGEiLCJ0ZWwiLCIkYXBwbHkiLCJyZXMiLCJjb2RlIiwic2hvd1RvYXN0IiwidGl0bGUiLCJtc2ciLCJpY29uIiwiZHVyYXRpb24iLCJzZXRUaW1lb3V0IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0k7Ozs7QUFDQTs7SUFBWUEsRzs7Ozs7Ozs7Ozs7Ozs7SUFDU0MsUTs7Ozs7Ozs7Ozs7Ozs7OExBQ2pCQyxNLEdBQVM7QUFDTEMsb0NBQXdCLE1BRG5CO0FBRUxDLDZCQUFpQjtBQUNiLCtCQUFlO0FBREY7QUFGWixTLFFBTVRDLEksR0FBTztBQUNIQyw2QkFBaUJDLGVBQUtDLFNBQUwsQ0FBZUMsVUFBZixDQUEwQkgsZUFEeEM7QUFFSEksc0JBQVUsRUFGUDtBQUdIQyxtQkFBTyxFQUhKO0FBSUhDLG9CQUFRO0FBSkwsUyxRQWNQQyxPLEdBQVU7QUFDTkMseUJBRE0seUJBQ1FDLENBRFIsRUFDVztBQUNiLHFCQUFLTCxRQUFMLEdBQWdCSyxFQUFFQyxNQUFGLENBQVNDLEtBQXpCO0FBQ0gsYUFISztBQUlOQyxzQkFKTSxzQkFJS0gsQ0FKTCxFQUlRO0FBQ1YscUJBQUtKLEtBQUwsR0FBYUksRUFBRUMsTUFBRixDQUFTQyxLQUF0QjtBQUNILGFBTks7QUFPTkUsd0JBUE0sMEJBT1M7QUFDWCxvQkFBSUMsU0FBU0MsS0FBS0MsU0FBTCxDQUFlO0FBQ3hCViw0QkFBUSxLQUFLQSxNQURXO0FBRXhCVyxpQ0FBYSxLQUFLWixLQUZNO0FBR3hCYSw4QkFBVSxLQUFLZDtBQUhTLGlCQUFmLENBQWI7QUFLQSxxQkFBS2UsVUFBTCxDQUFnQkwsTUFBaEI7QUFDSCxhQWRLO0FBZU5NLHVCQWZNLHlCQWVRO0FBQ1ZDLG1CQUFHQyxZQUFILENBQWdCO0FBQ1pDLDJCQUFPO0FBREssaUJBQWhCO0FBR0g7QUFuQkssUzs7Ozs7K0JBUEhkLEMsRUFBRztBQUNOLGlCQUFLTCxRQUFMLEdBQWdCSyxFQUFFTCxRQUFsQjtBQUNBLGlCQUFLQyxLQUFMLEdBQWFJLEVBQUVlLEdBQWY7QUFDQSxpQkFBS2xCLE1BQUwsR0FBY0csRUFBRUgsTUFBaEI7QUFDQSxpQkFBS21CLE1BQUw7QUFDSDs7OztpR0F3QmdCWCxNOzs7Ozs7O3VDQUNHcEIsSUFBSXlCLFVBQUosQ0FBZUwsTUFBZixDOzs7QUFBWlksbUM7O0FBQ0osb0NBQUlBLElBQUlDLElBQUosSUFBWSxHQUFoQixFQUFxQjtBQUNqQk4sdUNBQUdPLFNBQUgsQ0FBYTtBQUNUQywrQ0FBT0gsSUFBSUksR0FERjtBQUVUQyw4Q0FBTSxTQUZHO0FBR1RDLGtEQUFVO0FBSEQscUNBQWI7QUFLQUMsK0NBQVcsWUFBTTtBQUNiWiwyQ0FBR0MsWUFBSCxDQUFnQjtBQUNaQyxtREFBTztBQURLLHlDQUFoQjtBQUdILHFDQUpELEVBSUcsSUFKSDtBQUtIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBeEQ2QnRCLGVBQUtpQyxJOztrQkFBdEJ2QyxRIiwiZmlsZSI6InVzZXJJbmZvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbiAgICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gICAgaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknXHJcbiAgICBleHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VySW5mbyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qE5L+h5oGvJyxcclxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXHJcbiAgICAgICAgICAgIG5pY2tuYW1lOiAnJyxcclxuICAgICAgICAgICAgcGhvbmU6ICcnLFxyXG4gICAgICAgICAgICB1c2VySWQ6ICcnXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkxvYWQoZSkge1xyXG4gICAgICAgICAgICB0aGlzLm5pY2tuYW1lID0gZS5uaWNrbmFtZTtcclxuICAgICAgICAgICAgdGhpcy5waG9uZSA9IGUudGVsO1xyXG4gICAgICAgICAgICB0aGlzLnVzZXJJZCA9IGUudXNlcklkO1xyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgbmlja25hbWVJbnB1dChlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5pY2tuYW1lID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHBob25lSW5wdXQoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waG9uZSA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb21wbGV0ZUVkaXQoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0gSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJJZDogdGhpcy51c2VySWQsXHJcbiAgICAgICAgICAgICAgICAgICAgcGhvbmVudW1iZXI6IHRoaXMucGhvbmUsXHJcbiAgICAgICAgICAgICAgICAgICAgbmlja05hbWU6IHRoaXMubmlja25hbWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVVzZXIocGFyYW1zKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DbGlja0xlZnQoKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZUJhY2soe1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYXN5bmMgdXBkYXRlVXNlcihwYXJhbXMpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS51cGRhdGVVc2VyKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHJlcy5tc2csXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAxNTAwXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlQmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbHRhOiAxXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=