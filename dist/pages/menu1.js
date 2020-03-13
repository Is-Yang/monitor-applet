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
      navigationBarTitleText: '登录',
      usingComponents: {
        "van-cell": "../components/vant/cell/index",
        "van-field": "../components/vant/field/index"
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  return Menu2;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu2 , 'pages/menu1'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUxLmpzIl0sIm5hbWVzIjpbIk1lbnUyIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLElBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLCtCQURHO0FBRWYscUJBQWE7QUFGRTtBQUZWLEs7Ozs7RUFEd0JDLGVBQUtDLEk7O2tCQUFuQkwsSyIsImZpbGUiOiJtZW51MS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudTIgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn55m75b2VJyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgXCJ2YW4tY2VsbFwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9jZWxsL2luZGV4XCIsXHJcbiAgICAgICAgXCJ2YW4tZmllbGRcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvZmllbGQvaW5kZXhcIixcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuIl19