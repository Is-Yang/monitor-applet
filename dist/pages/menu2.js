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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbIk1lbnUyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJ1c2VyUGhvdG8iLCJjb21wYW55Iiwicm9sZSIsIm1ldGhvZHMiLCJ0b1VzZXJJbmZvIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9Vc2VyVW5pdCIsInVwbG9hZFBob3RvIiwidGhhdCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwidGVtcEZpbGVQYXRocyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHVCQUFlO0FBREE7QUFGVixLLFFBTVRDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FBRUxDLGVBQVMsRUFGSjtBQUdMQyxZQUFNO0FBSEQsSyxRQU1QQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0s7QUFDWEMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUs7QUFETyxTQUFkO0FBR0QsT0FMTztBQU1SQyxnQkFOUSx3QkFNSztBQUNYSCxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRCxPQVZPOztBQVdSO0FBQ0FFLGlCQVpRLHlCQVlNO0FBQ1osWUFBSUMsT0FBTyxJQUFYO0FBQ0FMLFdBQUdNLFdBQUgsQ0FBZTtBQUNiQyxpQkFBTyxDQURNLEVBQ0g7QUFDVkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZHLEVBRXlCO0FBQ3RDQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEMsRUFHb0I7QUFDakNDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsZ0JBQUlDLGdCQUFnQkQsSUFBSUMsYUFBeEI7QUFDQVAsaUJBQUtWLFNBQUwsR0FBaUJpQixjQUFjLENBQWQsQ0FBakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBcEJZLFNBQWY7QUFzQkQ7QUFwQ08sSzs7OztFQWJ1QkMsZUFBS0MsSTs7a0JBQW5CeEIsSyIsImZpbGUiOiJtZW51Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudTIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn5oiR55qEJyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCJcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZGF0YSA9IHtcclxuICAgICAgdXNlclBob3RvOiAnJyxcclxuICAgICAgY29tcGFueTogJycsXHJcbiAgICAgIHJvbGU6ICcnXHJcbiAgICB9XHJcblxyXG4gICAgbWV0aG9kcyA9IHtcclxuICAgICAgdG9Vc2VySW5mbygpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgIHVybDogJy9wYWdlcy91c2VySW5mbydcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB0b1VzZXJVbml0KCkge1xyXG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgdXJsOiAnL3BhZ2VzL3VzZXJVbml0J1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8vIOS4iuS8oOWktOWDj1xyXG4gICAgICB1cGxvYWRQaG90bygpIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgICAgY291bnQ6IDEsIC8vIOm7mOiupDHlvKBcclxuICAgICAgICAgIHNpemVUeXBlOiBbJ29yaWdpbmFsJywgJ2NvbXByZXNzZWQnXSwgLy8g5Y+v5Lul5oyH5a6a5piv5Y6f5Zu+6L+Y5piv5Y6L57yp5Zu+77yM6buY6K6k5LqM6ICF6YO95pyJXHJcbiAgICAgICAgICBzb3VyY2VUeXBlOiBbJ2FsYnVtJywgJ2NhbWVyYSddLCAvLyDlj6/ku6XmjIflrprmnaXmupDmmK/nm7jlhozov5jmmK/nm7jmnLrvvIzpu5jorqTkuozogIXpg73mnIlcclxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBsZXQgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzXHJcbiAgICAgICAgICAgIHRoYXQudXNlclBob3RvID0gdGVtcEZpbGVQYXRoc1swXTtcclxuICAgICAgICAgICAgLy8gd3gudXBsb2FkRmlsZSh7XHJcbiAgICAgICAgICAgIC8vICAgdXJsOiAnaHR0cDovL2xvY2FsaG9zdDo4MDgwL3VwbG9hZC9maWxlVXBsb2FkJywgLy/ku4XkuLrnpLrkvovvvIzpnZ7nnJ/lrp7nmoTmjqXlj6PlnLDlnYBcclxuICAgICAgICAgICAgLy8gICBmaWxlUGF0aDogdGVtcEZpbGVQYXRoc1swXSxcclxuICAgICAgICAgICAgLy8gICBuYW1lOiBcImZpbGVcIixcclxuICAgICAgICAgICAgLy8gICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgLy8gICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiXHJcbiAgICAgICAgICAgIC8vICAgfSxcclxuICAgICAgICAgICAgLy8gICBmb3JtRGF0YToge1xyXG4gICAgICAgICAgICAvLyAgIH0sXHJcbiAgICAgICAgICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAvLyAgIH1cclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19