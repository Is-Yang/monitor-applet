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
            company: '龙岩地区中心',
            role: '管理员'
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbIk1lbnUyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInVzZXJQaG90byIsImNvbXBhbnkiLCJyb2xlIiwibWV0aG9kcyIsInRvVXNlckluZm8iLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b1VzZXJVbml0IiwidXBsb2FkUGhvdG8iLCJ0aGF0IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUNJOzs7Ozs7Ozs7Ozs7SUFDcUJBLEs7Ozs7Ozs7Ozs7Ozs7O3dMQUNqQkMsTSxHQUFTO0FBQ0xDLG9DQUF3QixJQURuQjtBQUVMQyw2QkFBaUI7QUFDYiwrQkFBZTtBQURGO0FBRlosUyxRQU1UQyxJLEdBQU87QUFDSEMsNkJBQWlCQyxlQUFLQyxTQUFMLENBQWVDLFVBQWYsQ0FBMEJILGVBRHhDO0FBRUhJLHVCQUFXLEVBRlI7QUFHSEMscUJBQVMsUUFITjtBQUlIQyxrQkFBTTtBQUpILFMsUUFNUEMsTyxHQUFVO0FBQ05DLHNCQURNLHdCQUNPO0FBQ1RDLG1CQUFHQyxVQUFILENBQWM7QUFDVkMseUJBQUs7QUFESyxpQkFBZDtBQUdILGFBTEs7QUFNTkMsc0JBTk0sd0JBTU87QUFDVEgsbUJBQUdDLFVBQUgsQ0FBYztBQUNWQyx5QkFBSztBQURLLGlCQUFkO0FBR0gsYUFWSzs7QUFXTjtBQUNBRSx1QkFaTSx5QkFZUTtBQUNWLG9CQUFJQyxPQUFPLElBQVg7QUFDQUwsbUJBQUdNLFdBQUgsQ0FBZTtBQUNYQywyQkFBTyxDQURJLEVBQ0Q7QUFDVkMsOEJBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZDLEVBRTJCO0FBQ3RDQyxnQ0FBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEQsRUFHc0I7QUFDakNDLDZCQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDbkIsNEJBQUlDLGdCQUFnQkQsSUFBSUMsYUFBeEI7QUFDQVAsNkJBQUtWLFNBQUwsR0FBaUJpQixjQUFjLENBQWQsQ0FBakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNIO0FBcEJVLGlCQUFmO0FBc0JIO0FBcENLLFM7Ozs7RUFicUJwQixlQUFLcUIsSTs7a0JBQW5CM0IsSyIsImZpbGUiOiJtZW51Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICAgIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudTIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xuICAgICAgICBjb25maWcgPSB7XG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJyxcbiAgICAgICAgICAgIHVzaW5nQ29tcG9uZW50czoge1xuICAgICAgICAgICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZGF0YSA9IHtcbiAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXG4gICAgICAgICAgICB1c2VyUGhvdG86ICcnLFxuICAgICAgICAgICAgY29tcGFueTogJ+m+meWyqeWcsOWMuuS4reW/gycsXG4gICAgICAgICAgICByb2xlOiAn566h55CG5ZGYJ1xuICAgICAgICB9XG4gICAgICAgIG1ldGhvZHMgPSB7XG4gICAgICAgICAgICB0b1VzZXJJbmZvKCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvdXNlckluZm8nXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB0b1VzZXJVbml0KCkge1xuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvdXNlclVuaXQnXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyDkuIrkvKDlpLTlg49cbiAgICAgICAgICAgIHVwbG9hZFBob3RvKCkge1xuICAgICAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcbiAgICAgICAgICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAxLCAvLyDpu5jorqQx5bygXG4gICAgICAgICAgICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0ZW1wRmlsZVBhdGhzID0gcmVzLnRlbXBGaWxlUGF0aHNcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQudXNlclBob3RvID0gdGVtcEZpbGVQYXRoc1swXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHd4LnVwbG9hZEZpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICB1cmw6ICdodHRwOi8vbG9jYWxob3N0OjgwODAvdXBsb2FkL2ZpbGVVcGxvYWQnLCAvL+S7heS4uuekuuS+i++8jOmdnuecn+WunueahOaOpeWPo+WcsOWdgFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICBmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgbmFtZTogXCJmaWxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGhlYWRlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIGZvcm1EYXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHJlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiJdfQ==