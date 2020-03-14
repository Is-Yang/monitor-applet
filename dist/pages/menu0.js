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
      statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbnUwLmpzIl0sIm5hbWVzIjpbIk1lbnUwIiwiY29uZmlnIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsInVzaW5nQ29tcG9uZW50cyIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsIm1vaW50b3JMaXN0IiwiaWQiLCJjb21wYW55Iiwic3VyZmFjZSIsIngiLCJ5IiwiaCIsImRlZXAiLCJudW0xIiwibnVtMiIsIm51bTMiLCJudW00IiwicmFpbmZhbGwiLCJodW1pdHVyZSIsIm1hcmtlcnMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsIndpZHRoIiwiaGVpZ2h0IiwicG9seWxpbmUiLCJwb2ludHMiLCJjb2xvciIsImRvdHRlZExpbmUiLCJjb250cm9scyIsInBvc2l0aW9uIiwibGVmdCIsInRvcCIsImNsaWNrYWJsZSIsImUiLCJjb25zb2xlIiwibG9nIiwidHlwZSIsIm1hcmtlcklkIiwiY29udHJvbElkIiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0U7Ozs7Ozs7Ozs7OztJQUNxQkEsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLFlBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLCtCQURHO0FBRWYsdUJBQWU7QUFGQTtBQUZWLEssUUFPVEMsSSxHQUFPO0FBQ0xDLHVCQUFpQkMsZUFBS0MsU0FBTCxDQUFlQyxVQUFmLENBQTBCSCxlQUR0QztBQUVMSSxtQkFBYSxDQUFDO0FBQ1ZDLFlBQUksQ0FETTtBQUVWQyxpQkFBUyxXQUZDO0FBR1ZDLGlCQUFTO0FBQ1BDLGFBQUcsQ0FESTtBQUVQQyxhQUFHLENBRkk7QUFHUEMsYUFBRztBQUhJLFNBSEM7QUFRVkMsY0FBTTtBQUNKQyxnQkFBTSxDQURGO0FBRUpDLGdCQUFNLENBRkY7QUFHSkMsZ0JBQU0sQ0FIRjtBQUlKQyxnQkFBTTtBQUpGLFNBUkk7QUFjVkMsa0JBQVU7QUFDUkosZ0JBQU0sQ0FERTtBQUVSQyxnQkFBTTtBQUZFLFNBZEE7QUFrQlZJLGtCQUFVO0FBQ1JMLGdCQUFNLENBREU7QUFFUkMsZ0JBQU0sQ0FGRTtBQUdSQyxnQkFBTSxDQUhFO0FBSVJDLGdCQUFNO0FBSkU7QUFsQkEsT0FBRCxFQXlCWDtBQUNFVixZQUFJLENBRE47QUFFRUMsaUJBQVMsV0FGWDtBQUdFQyxpQkFBUztBQUNQQyxhQUFHLENBREk7QUFFUEMsYUFBRyxDQUZJO0FBR1BDLGFBQUc7QUFISSxTQUhYO0FBUUVNLGtCQUFVO0FBQ1JKLGdCQUFNLENBREU7QUFFUkMsZ0JBQU0sQ0FGRTtBQUdSQyxnQkFBTSxDQUhFO0FBSVJDLGdCQUFNO0FBSkU7QUFSWixPQXpCVyxDQUZSO0FBMkNMRyxlQUFTLENBQUM7QUFDUmIsWUFBSSxDQURJO0FBRVJjLGtCQUFVLFNBRkY7QUFHUkMsbUJBQVcsVUFISDtBQUlSQyxlQUFPLEVBSkM7QUFLUkMsZ0JBQVE7QUFMQSxPQUFELENBM0NKO0FBa0RMQyxnQkFBVSxDQUFDO0FBQ1RDLGdCQUFRLENBQUM7QUFDUEoscUJBQVcsV0FESjtBQUVQRCxvQkFBVTtBQUZILFNBQUQsRUFHTDtBQUNEQyxxQkFBVyxVQURWO0FBRURELG9CQUFVO0FBRlQsU0FISyxDQURDO0FBUVRNLGVBQU8sV0FSRTtBQVNUSixlQUFPLENBVEU7QUFVVEssb0JBQVk7QUFWSCxPQUFELENBbERMO0FBOERMQyxnQkFBVSxDQUFDO0FBQ1R0QixZQUFJLENBREs7QUFFVHVCLGtCQUFVO0FBQ1JDLGdCQUFNLENBREU7QUFFUkMsZUFBSyxNQUFNLEVBRkg7QUFHUlQsaUJBQU8sRUFIQztBQUlSQyxrQkFBUTtBQUpBLFNBRkQ7QUFRVFMsbUJBQVc7QUFSRixPQUFEO0FBOURMLEs7Ozs7O2lDQXlFTUMsQyxFQUFHO0FBQ2RDLGNBQVFDLEdBQVIsQ0FBWUYsRUFBRUcsSUFBZDtBQUNEOzs7OEJBQ1NILEMsRUFBRztBQUNYQyxjQUFRQyxHQUFSLENBQVlGLEVBQUVJLFFBQWQ7QUFDRDs7OytCQUNVSixDLEVBQUc7QUFDWkMsY0FBUUMsR0FBUixDQUFZRixFQUFFSyxTQUFkO0FBQ0Q7Ozs7RUF6RmdDcEMsZUFBS3FDLEk7O2tCQUFuQjNDLEsiLCJmaWxlIjoibWVudTAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBpbXBvcnQgd2VweSBmcm9tICd3ZXB5J1xyXG4gIGV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lbnUwIGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICAgIGNvbmZpZyA9IHtcclxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+m+meiKr+WMl+aWl+WcsOeBvuebkeaOp+ezu+e7nycsXHJcbiAgICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAgIFwidmFuLWljb25cIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvaWNvbi9pbmRleFwiLFxyXG4gICAgICAgIFwidmFuLW5hdi1iYXJcIjogXCIuLi9jb21wb25lbnRzL3ZhbnQvbmF2LWJhci9pbmRleFwiXHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGRhdGEgPSB7XHJcbiAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXHJcbiAgICAgIG1vaW50b3JMaXN0OiBbe1xyXG4gICAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgICBjb21wYW55OiAn5rC45a6a5Yy65oqa5biC5rqq6IGU5Y2X5p2/JyxcclxuICAgICAgICAgIHN1cmZhY2U6IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMSxcclxuICAgICAgICAgICAgaDogMlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGRlZXA6IHtcclxuICAgICAgICAgICAgbnVtMTogMCxcclxuICAgICAgICAgICAgbnVtMjogMSxcclxuICAgICAgICAgICAgbnVtMzogMixcclxuICAgICAgICAgICAgbnVtNDogM1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJhaW5mYWxsOiB7XHJcbiAgICAgICAgICAgIG51bTE6IDAsXHJcbiAgICAgICAgICAgIG51bTI6IDEsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgaHVtaXR1cmU6IHtcclxuICAgICAgICAgICAgbnVtMTogMCxcclxuICAgICAgICAgICAgbnVtMjogMSxcclxuICAgICAgICAgICAgbnVtMzogMixcclxuICAgICAgICAgICAgbnVtNDogM1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgICBjb21wYW55OiAn5rC45a6a5Yy65oqa5biC5rqq6IGU5Y2X5p2/JyxcclxuICAgICAgICAgIHN1cmZhY2U6IHtcclxuICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgeTogMSxcclxuICAgICAgICAgICAgaDogMlxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJhaW5mYWxsOiB7XHJcbiAgICAgICAgICAgIG51bTE6IDAsXHJcbiAgICAgICAgICAgIG51bTI6IDEsXHJcbiAgICAgICAgICAgIG51bTM6IDIsXHJcbiAgICAgICAgICAgIG51bTQ6IDNcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIF0sXHJcbiAgICAgIG1hcmtlcnM6IFt7XHJcbiAgICAgICAgaWQ6IDAsXHJcbiAgICAgICAgbGF0aXR1ZGU6IDIzLjA5OTk5NCxcclxuICAgICAgICBsb25naXR1ZGU6IDExMy4zMjQ1MjAsXHJcbiAgICAgICAgd2lkdGg6IDUwLFxyXG4gICAgICAgIGhlaWdodDogNTBcclxuICAgICAgfV0sXHJcbiAgICAgIHBvbHlsaW5lOiBbe1xyXG4gICAgICAgIHBvaW50czogW3tcclxuICAgICAgICAgIGxvbmdpdHVkZTogMTEzLjMyNDUyMTEsXHJcbiAgICAgICAgICBsYXRpdHVkZTogMjMuMTAyMjlcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBsb25naXR1ZGU6IDExMy4zMjQ1MjAsXHJcbiAgICAgICAgICBsYXRpdHVkZTogMjMuMjEyMjlcclxuICAgICAgICB9XSxcclxuICAgICAgICBjb2xvcjogXCIjRkYwMDAwRERcIixcclxuICAgICAgICB3aWR0aDogMixcclxuICAgICAgICBkb3R0ZWRMaW5lOiB0cnVlXHJcbiAgICAgIH1dLFxyXG4gICAgICBjb250cm9sczogW3tcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICBwb3NpdGlvbjoge1xyXG4gICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgIHRvcDogMzAwIC0gNTAsXHJcbiAgICAgICAgICB3aWR0aDogNTAsXHJcbiAgICAgICAgICBoZWlnaHQ6IDUwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjbGlja2FibGU6IHRydWVcclxuICAgICAgfV1cclxuICAgIH1cclxuICAgIHJlZ2lvbmNoYW5nZShlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUudHlwZSlcclxuICAgIH1cclxuICAgIG1hcmtlcnRhcChlKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGUubWFya2VySWQpXHJcbiAgICB9XHJcbiAgICBjb250cm9sdGFwKGUpIHtcclxuICAgICAgY29uc29sZS5sb2coZS5jb250cm9sSWQpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuIl19