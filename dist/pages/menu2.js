"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _wepy=require("./../npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy),Menu2=function(e){function t(){var e,n,o,r;_classCallCheck(this,t);for(var a=arguments.length,s=Array(a),i=0;i<a;i++)s[i]=arguments[i];return n=o=_possibleConstructorReturn(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(s))),o.config={navigationBarTitleText:"我的",usingComponents:{"van-nav-bar":"../components/vant/nav-bar/index"}},o.data={userPhoto:""},o.methods={toUserInfo:function(){wx.navigateTo({url:"/pages/userInfo"})},toUserUnit:function(){wx.navigateTo({url:"/pages/userUnit"})},uploadPhoto:function(){var e=this;wx.chooseImage({count:1,sizeType:["original","compressed"],sourceType:["album","camera"],success:function(t){var n=t.tempFilePaths;e.userPhoto=n[0]}})}},r=n,_possibleConstructorReturn(o,r)}return _inherits(t,e),t}(_wepy2.default.page);Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Menu2,"pages/menu2"));