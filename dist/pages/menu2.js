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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUyLmpzIl0sIm5hbWVzIjpbIk1lbnUyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJ1c2VyUGhvdG8iLCJjb21wYW55Iiwicm9sZSIsIm1ldGhvZHMiLCJ0b1VzZXJJbmZvIiwid3giLCJuYXZpZ2F0ZVRvIiwidXJsIiwidG9Vc2VyVW5pdCIsInVwbG9hZFBob3RvIiwidGhhdCIsImNob29zZUltYWdlIiwiY291bnQiLCJzaXplVHlwZSIsInNvdXJjZVR5cGUiLCJzdWNjZXNzIiwicmVzIiwidGVtcEZpbGVQYXRocyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLHVCQUFlO0FBREE7QUFGVixLLFFBTVRDLEksR0FBTztBQUNMQyxpQkFBVyxFQUROO0FBRUxDLGVBQVMsRUFGSjtBQUdMQyxZQUFNO0FBSEQsSyxRQU1QQyxPLEdBQVU7QUFDUkMsZ0JBRFEsd0JBQ0s7QUFDWEMsV0FBR0MsVUFBSCxDQUFjO0FBQ1pDLGVBQUs7QUFETyxTQUFkO0FBR0QsT0FMTztBQU1SQyxnQkFOUSx3QkFNSztBQUNYSCxXQUFHQyxVQUFILENBQWM7QUFDWkMsZUFBSztBQURPLFNBQWQ7QUFHRCxPQVZPOztBQVdSO0FBQ0FFLGlCQVpRLHlCQVlNO0FBQ1osWUFBSUMsT0FBTyxJQUFYO0FBQ0FMLFdBQUdNLFdBQUgsQ0FBZTtBQUNiQyxpQkFBTyxDQURNLEVBQ0g7QUFDVkMsb0JBQVUsQ0FBQyxVQUFELEVBQWEsWUFBYixDQUZHLEVBRXlCO0FBQ3RDQyxzQkFBWSxDQUFDLE9BQUQsRUFBVSxRQUFWLENBSEMsRUFHb0I7QUFDakNDLG1CQUFTLGlCQUFTQyxHQUFULEVBQWM7QUFDckIsZ0JBQUlDLGdCQUFnQkQsSUFBSUMsYUFBeEI7QUFDQVAsaUJBQUtWLFNBQUwsR0FBaUJpQixjQUFjLENBQWQsQ0FBakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEO0FBcEJZLFNBQWY7QUFzQkQ7QUFwQ08sSzs7OztFQWJ1QkMsZUFBS0MsSTs7a0JBQW5CeEIsSyIsImZpbGUiOiJtZW51Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xuICBleHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51MiBleHRlbmRzIHdlcHkucGFnZSB7XG4gICAgY29uZmlnID0ge1xuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+aIkeeahCcsXG4gICAgICB1c2luZ0NvbXBvbmVudHM6IHtcbiAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCJcbiAgICAgIH1cbiAgICB9XG4gICAgZGF0YSA9IHtcbiAgICAgIHVzZXJQaG90bzogJycsXG4gICAgICBjb21wYW55OiAnJyxcbiAgICAgIHJvbGU6ICcnXG4gICAgfVxuXG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHRvVXNlckluZm8oKSB7XG4gICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xuICAgICAgICAgIHVybDogJy9wYWdlcy91c2VySW5mbydcbiAgICAgICAgfSlcbiAgICAgIH0sXG4gICAgICB0b1VzZXJVbml0KCkge1xuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcbiAgICAgICAgICB1cmw6ICcvcGFnZXMvdXNlclVuaXQnXG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgLy8g5LiK5Lyg5aS05YOPXG4gICAgICB1cGxvYWRQaG90bygpIHtcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xuICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgY291bnQ6IDEsIC8vIOm7mOiupDHlvKBcbiAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxuICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgbGV0IHRlbXBGaWxlUGF0aHMgPSByZXMudGVtcEZpbGVQYXRoc1xuICAgICAgICAgICAgdGhhdC51c2VyUGhvdG8gPSB0ZW1wRmlsZVBhdGhzWzBdO1xuICAgICAgICAgICAgLy8gd3gudXBsb2FkRmlsZSh7XG4gICAgICAgICAgICAvLyAgIHVybDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MC91cGxvYWQvZmlsZVVwbG9hZCcsIC8v5LuF5Li656S65L6L77yM6Z2e55yf5a6e55qE5o6l5Y+j5Zyw5Z2AXG4gICAgICAgICAgICAvLyAgIGZpbGVQYXRoOiB0ZW1wRmlsZVBhdGhzWzBdLFxuICAgICAgICAgICAgLy8gICBuYW1lOiBcImZpbGVcIixcbiAgICAgICAgICAgIC8vICAgaGVhZGVyOiB7XG4gICAgICAgICAgICAvLyAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vICAgZm9ybURhdGE6IHtcbiAgICAgICAgICAgIC8vICAgfSxcbiAgICAgICAgICAgIC8vICAgc3VjY2VzczogZnVuY3Rpb24ocmVzKSB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2cocmVzKTtcbiAgICAgICAgICAgIC8vICAgfVxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuIl19