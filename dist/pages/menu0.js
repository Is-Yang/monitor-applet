'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Menu0 = function (_wepy$page) {
  _inherits(Menu0, _wepy$page);

  function Menu0() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Menu0);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Menu0.__proto__ || Object.getPrototypeOf(Menu0)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
      navigationBarTitleText: '龙芯北斗地灾监控系统',
      usingComponents: {
        "van-icon": "../components/vant/icon/index",
        "van-nav-bar": "../components/vant/nav-bar/index"
      }
    }, _this.data = {
      mointorList: [{
        id: 0,
        company: '永定区抚市溪联南板',
        surface: {
          x: 0,
          y: 1,
          h: 2
        },
        deep: {
          num1: 0,
          num2: 1,
          num3: 2,
          num4: 3
        },
        rainfall: {
          num1: 0,
          num2: 1
        },
        humiture: {
          num1: 0,
          num2: 1,
          num3: 2,
          num4: 3
        }
      }, {
        id: 1,
        company: '永定区抚市溪联南板',
        surface: {
          x: 0,
          y: 1,
          h: 2
        },
        rainfall: {
          num1: 0,
          num2: 1,
          num3: 2,
          num4: 3
        }
      }],
      markers: [{
        id: 0,
        latitude: 23.099994,
        longitude: 113.324520,
        width: 50,
        height: 50
      }],
      polyline: [{
        points: [{
          longitude: 113.3245211,
          latitude: 23.10229
        }, {
          longitude: 113.324520,
          latitude: 23.21229
        }],
        color: "#FF0000DD",
        width: 2,
        dottedLine: true
      }],
      controls: [{
        id: 1,
        position: {
          left: 0,
          top: 300 - 50,
          width: 50,
          height: 50
        },
        clickable: true
      }]
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Menu0, [{
    key: 'regionchange',
    value: function regionchange(e) {
      console.log(e.type);
    }
  }, {
    key: 'markertap',
    value: function markertap(e) {
      console.log(e.markerId);
    }
  }, {
    key: 'controltap',
    value: function controltap(e) {
      console.log(e.controlId);
    }
  }]);

  return Menu0;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(Menu0 , 'pages/menu0'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUwLmpzIl0sIm5hbWVzIjpbIk1lbnUwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJtb2ludG9yTGlzdCIsImlkIiwiY29tcGFueSIsInN1cmZhY2UiLCJ4IiwieSIsImgiLCJkZWVwIiwibnVtMSIsIm51bTIiLCJudW0zIiwibnVtNCIsInJhaW5mYWxsIiwiaHVtaXR1cmUiLCJtYXJrZXJzIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ3aWR0aCIsImhlaWdodCIsInBvbHlsaW5lIiwicG9pbnRzIiwiY29sb3IiLCJkb3R0ZWRMaW5lIiwiY29udHJvbHMiLCJwb3NpdGlvbiIsImxlZnQiLCJ0b3AiLCJjbGlja2FibGUiLCJlIiwiY29uc29sZSIsImxvZyIsInR5cGUiLCJtYXJrZXJJZCIsImNvbnRyb2xJZCIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDRTs7Ozs7Ozs7Ozs7O0lBQ3FCQSxLOzs7Ozs7Ozs7Ozs7OztvTEFDbkJDLE0sR0FBUztBQUNQQyw4QkFBd0IsWUFEakI7QUFFUEMsdUJBQWlCO0FBQ2Ysb0JBQVksK0JBREc7QUFFZix1QkFBZTtBQUZBO0FBRlYsSyxRQVFUQyxJLEdBQU07QUFDSkMsbUJBQWEsQ0FDWDtBQUNFQyxZQUFJLENBRE47QUFFRUMsaUJBQVMsV0FGWDtBQUdFQyxpQkFBUztBQUNQQyxhQUFHLENBREk7QUFFUEMsYUFBRyxDQUZJO0FBR1BDLGFBQUc7QUFISSxTQUhYO0FBUUVDLGNBQU07QUFDSkMsZ0JBQU0sQ0FERjtBQUVKQyxnQkFBTSxDQUZGO0FBR0pDLGdCQUFNLENBSEY7QUFJSkMsZ0JBQU07QUFKRixTQVJSO0FBY0VDLGtCQUFVO0FBQ1JKLGdCQUFNLENBREU7QUFFUkMsZ0JBQU07QUFGRSxTQWRaO0FBa0JFSSxrQkFBVTtBQUNSTCxnQkFBTSxDQURFO0FBRVJDLGdCQUFNLENBRkU7QUFHUkMsZ0JBQU0sQ0FIRTtBQUlSQyxnQkFBTTtBQUpFO0FBbEJaLE9BRFcsRUEwQlg7QUFDRVYsWUFBSSxDQUROO0FBRUVDLGlCQUFTLFdBRlg7QUFHRUMsaUJBQVM7QUFDUEMsYUFBRyxDQURJO0FBRVBDLGFBQUcsQ0FGSTtBQUdQQyxhQUFHO0FBSEksU0FIWDtBQVFFTSxrQkFBVTtBQUNSSixnQkFBTSxDQURFO0FBRVJDLGdCQUFNLENBRkU7QUFHUkMsZ0JBQU0sQ0FIRTtBQUlSQyxnQkFBTTtBQUpFO0FBUlosT0ExQlcsQ0FEVDtBQTJDSkcsZUFBUyxDQUFDO0FBQ1JiLFlBQUksQ0FESTtBQUVSYyxrQkFBVSxTQUZGO0FBR1JDLG1CQUFXLFVBSEg7QUFJUkMsZUFBTyxFQUpDO0FBS1JDLGdCQUFRO0FBTEEsT0FBRCxDQTNDTDtBQWtESkMsZ0JBQVUsQ0FBQztBQUNUQyxnQkFBUSxDQUFDO0FBQ1BKLHFCQUFXLFdBREo7QUFFUEQsb0JBQVU7QUFGSCxTQUFELEVBR0w7QUFDREMscUJBQVcsVUFEVjtBQUVERCxvQkFBVTtBQUZULFNBSEssQ0FEQztBQVFUTSxlQUFPLFdBUkU7QUFTVEosZUFBTyxDQVRFO0FBVVRLLG9CQUFZO0FBVkgsT0FBRCxDQWxETjtBQThESkMsZ0JBQVUsQ0FBQztBQUNUdEIsWUFBSSxDQURLO0FBRVR1QixrQkFBVTtBQUNSQyxnQkFBTSxDQURFO0FBRVJDLGVBQUssTUFBTSxFQUZIO0FBR1JULGlCQUFPLEVBSEM7QUFJUkMsa0JBQVE7QUFKQSxTQUZEO0FBUVRTLG1CQUFXO0FBUkYsT0FBRDtBQTlETixLOzs7OztpQ0EwRU9DLEMsRUFBRztBQUNkQyxjQUFRQyxHQUFSLENBQVlGLEVBQUVHLElBQWQ7QUFDRDs7OzhCQUNTSCxDLEVBQUc7QUFDWEMsY0FBUUMsR0FBUixDQUFZRixFQUFFSSxRQUFkO0FBQ0Q7OzsrQkFDVUosQyxFQUFHO0FBQ1pDLGNBQVFDLEdBQVIsQ0FBWUYsRUFBRUssU0FBZDtBQUNEOzs7O0VBM0ZnQ0MsZUFBS0MsSTs7a0JBQW5CeEMsSyIsImZpbGUiOiJtZW51MC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIGltcG9ydCB3ZXB5IGZyb20gJ3dlcHknXHJcbiAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudTAgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6b6Z6Iqv5YyX5paX5Zyw54G+55uR5o6n57O757ufJyxcclxuICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgXCJ2YW4taWNvblwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9pY29uL2luZGV4XCIsXHJcbiAgICAgICAgXCJ2YW4tbmF2LWJhclwiOiBcIi4uL2NvbXBvbmVudHMvdmFudC9uYXYtYmFyL2luZGV4XCJcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRhdGEgPXtcclxuICAgICAgbW9pbnRvckxpc3Q6IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBpZDogMCxcclxuICAgICAgICAgIGNvbXBhbnk6ICfmsLjlrprljLrmiprluILmuqrogZTljZfmnb8nLFxyXG4gICAgICAgICAgc3VyZmFjZToge1xyXG4gICAgICAgICAgICB4OiAwLFxyXG4gICAgICAgICAgICB5OiAxLFxyXG4gICAgICAgICAgICBoOiAyXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgZGVlcDoge1xyXG4gICAgICAgICAgICBudW0xOiAwLFxyXG4gICAgICAgICAgICBudW0yOiAxLFxyXG4gICAgICAgICAgICBudW0zOiAyLFxyXG4gICAgICAgICAgICBudW00OiAzXHJcbiAgICAgICAgICB9LCBcclxuICAgICAgICAgIHJhaW5mYWxsOiB7XHJcbiAgICAgICAgICAgIG51bTE6IDAsXHJcbiAgICAgICAgICAgIG51bTI6IDEsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaHVtaXR1cmU6IHtcclxuICAgICAgICAgICAgbnVtMTogMCxcclxuICAgICAgICAgICAgbnVtMjogMSxcclxuICAgICAgICAgICAgbnVtMzogMixcclxuICAgICAgICAgICAgbnVtNDogM1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBjb21wYW55OiAn5rC45a6a5Yy65oqa5biC5rqq6IGU5Y2X5p2/JyxcclxuICAgICAgICAgIHN1cmZhY2U6IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMSxcclxuICAgICAgICAgICAgaDogMlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJhaW5mYWxsOiB7XHJcbiAgICAgICAgICAgIG51bTE6IDAsXHJcbiAgICAgICAgICAgIG51bTI6IDEsXHJcbiAgICAgICAgICAgIG51bTM6IDIsXHJcbiAgICAgICAgICAgIG51bTQ6IDNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIG1hcmtlcnM6IFt7XHJcbiAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgbGF0aXR1ZGU6IDIzLjA5OTk5NCxcclxuICAgICAgICBsb25naXR1ZGU6IDExMy4zMjQ1MjAsXHJcbiAgICAgICAgd2lkdGg6IDUwLFxyXG4gICAgICAgIGhlaWdodDogNTBcclxuICAgICAgfV0sXHJcbiAgICAgIHBvbHlsaW5lOiBbe1xyXG4gICAgICAgIHBvaW50czogW3tcclxuICAgICAgICAgIGxvbmdpdHVkZTogMTEzLjMyNDUyMTEsXHJcbiAgICAgICAgICBsYXRpdHVkZTogMjMuMTAyMjlcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBsb25naXR1ZGU6IDExMy4zMjQ1MjAsXHJcbiAgICAgICAgICBsYXRpdHVkZTogMjMuMjEyMjlcclxuICAgICAgICB9XSxcclxuICAgICAgICBjb2xvcjogXCIjRkYwMDAwRERcIixcclxuICAgICAgICB3aWR0aDogMixcclxuICAgICAgICBkb3R0ZWRMaW5lOiB0cnVlXHJcbiAgICAgIH1dLFxyXG4gICAgICBjb250cm9sczogW3tcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgIHRvcDogMzAwIC0gNTAsXHJcbiAgICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgICBoZWlnaHQ6IDUwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGlja2FibGU6IHRydWVcclxuICAgICAgfV1cclxuICAgIH1cclxuXHJcbiAgICByZWdpb25jaGFuZ2UoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLnR5cGUpXHJcbiAgICB9XHJcbiAgICBtYXJrZXJ0YXAoZSkge1xyXG4gICAgICBjb25zb2xlLmxvZyhlLm1hcmtlcklkKVxyXG4gICAgfVxyXG4gICAgY29udHJvbHRhcChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUuY29udHJvbElkKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiJdfQ==