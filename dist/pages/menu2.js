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

var Menu2 = function (_wepy$page) {
    _inherits(Menu2, _wepy$page);

    function Menu2() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Menu2);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu2.__proto__ || Object.getPrototypeOf(Menu2)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '我的',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index"
            }
        }, _this.data = {
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            userPhoto: '',
            company: '',
            role: ''
        }, _this.methods = {
            toUserInfo: function toUserInfo() {
                wx.navigateTo({
                    url: '/pages/userInfo'
                });
            },
            toUserUnit: function toUserUnit() {
                wx.navigateTo({
                    url: '/pages/userUnit'
                });
            },

            // 上传头像
            uploadPhoto: function uploadPhoto() {
                var that = this;
                wx.chooseImage({
                    count: 1, // 默认1张
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function success(res) {
                        var tempFilePaths = res.tempFilePaths;
                        that.userPhoto = tempFilePaths[0];
                        // wx.uploadFile({
                        //   url: 'http://localhost:8080/upload/fileUpload', //仅为示例，非真实的接口地址
                        //   filePath: tempFilePaths[0],
                        //   name: "file",
                        //   header: {
                        //     "Content-Type": "multipart/form-data"
                        //   },
                        //   formData: {
                        //   },
                        //   success: function(res) {
                        //     console.log(res);
                        //   }
                        // });
                    }
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Menu2;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu2 , 'pages/menu2'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbIk1lbnUyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInVzZXJQaG90byIsImNvbXBhbnkiLCJyb2xlIiwibWV0aG9kcyIsInRvVXNlckluZm8iLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b1VzZXJVbml0IiwidXBsb2FkUGhvdG8iLCJ0aGF0IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixJQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwrQkFBZTtBQURGO0FBRlosUyxRQU1UQyxJLEdBQU87QUFDSEMsNkJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHhDO0FBRUhJLHVCQUFXLEVBRlI7QUFHSEMscUJBQVMsRUFITjtBQUlIQyxrQkFBTTtBQUpILFMsUUFNUEMsTyxHQUFVO0FBQ05DLHNCQURNLHdCQUNPO0FBQ1RDLG1CQUFHQyxVQUFILENBQWM7QUFDVkMseUJBQUs7QUFESyxpQkFBZDtBQUdILGFBTEs7QUFNTkMsc0JBTk0sd0JBTU87QUFDVEgsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSztBQURLLGlCQUFkO0FBR0gsYUFWSzs7QUFXTjtBQUNBRSx1QkFaTSx5QkFZUTtBQUNWLG9CQUFJQyxPQUFPLElBQVg7QUFDQUwsbUJBQUdNLFdBQUgsQ0FBZTtBQUNYQywyQkFBTyxDQURJLEVBQ0Q7QUFDVkMsOEJBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZDLEVBRTJCO0FBQ3RDQyxnQ0FBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEQsRUFHc0I7QUFDakNDLDZCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDbkIsNEJBQUlDLGdCQUFnQkQsSUFBSUMsYUFBeEI7QUFDQVAsNkJBQUtWLFNBQUwsR0FBaUJpQixjQUFjLENBQWQsQ0FBakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBcEJVLGlCQUFmO0FBc0JIO0FBcENLLFM7Ozs7RUFicUJwQixlQUFLcUIsSTs7a0JBQW5CM0IsSyIsImZpbGUiOiJtZW51Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUyIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgICAgICBjb25maWcgPSB7XHJcbiAgICAgICAgICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICfmiJHnmoQnLFxyXG4gICAgICAgICAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgICAgICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzQmFySGVpZ2h0OiB3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLnN0YXR1c0JhckhlaWdodCxcclxuICAgICAgICAgICAgdXNlclBob3RvOiAnJyxcclxuICAgICAgICAgICAgY29tcGFueTogJycsXHJcbiAgICAgICAgICAgIHJvbGU6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1ldGhvZHMgPSB7XHJcbiAgICAgICAgICAgIHRvVXNlckluZm8oKSB7XHJcbiAgICAgICAgICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvdXNlckluZm8nXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB0b1VzZXJVbml0KCkge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3VzZXJVbml0J1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g5LiK5Lyg5aS05YOPXHJcbiAgICAgICAgICAgIHVwbG9hZFBob3RvKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLCAvLyDpu5jorqQx5bygXHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZVR5cGU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddLCAvLyDlj6/ku6XmjIflrprmmK/ljp/lm77ov5jmmK/ljovnvKnlm77vvIzpu5jorqTkuozogIXpg73mnIlcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRoc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVzZXJQaG90byA9IHRlbXBGaWxlUGF0aHNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHd4LnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91cGxvYWQvZmlsZVVwbG9hZCcsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgZmlsZVBhdGg6IHRlbXBGaWxlUGF0aHNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbmFtZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgZm9ybURhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiJdfQ==