"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),UserInfo=function(e){function t(){var e,n,r,o;_classCallCheck(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return n=r=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i))),r.config={navigationBarTitleText:"我的信息",usingComponents:{"van-nav-bar":"../components/vant/nav-bar/index"}},r.data={nickname:"isyang",phone:"13143715009"},r.methods={onClickLeft:function(){wx.navigateBack({delta:1})}},o=n,_possibleConstructorReturn(r,o)}return _inherits(t,e),t}(_wepy2.default.page);Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(UserInfo,"pages/userInfo"));