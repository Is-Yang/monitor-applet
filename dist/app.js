"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _wepy=require("./npm/wepy/lib/wepy.js"),_wepy2=_interopRequireDefault(_wepy);require("./npm/wepy-async-function/index.js");var _wepyRedux=require("./npm/wepy-redux/lib/index.js"),_store=require("./store/index.js"),_store2=_interopRequireDefault(_store),store=(0,_store2.default)();(0,_wepyRedux.setStore)(store);var _default=function(e){function t(){_classCallCheck(this,t);var e=_possibleConstructorReturn(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return e.config={pages:["pages/login","pages/menu0","pages/menu2","pages/menu1","pages/reportInfo","pages/userUnit","pages/userInfo","pages/logs","pages/setting"],window:{backgroundTextStyle:"light",navigationBarBackgroundColor:"#41c297",navigationBarTitleText:"龙芯北斗地灾监控系统",navigationBarTextStyle:"white",navigationStyle:"custom"},tabBar:{color:"#333",selectedColor:"#41c297",borderStyle:"black",backgroundColor:"#ffffff",list:[{pagePath:"pages/menu0",text:"监测",iconPath:"/assets/images/icon/detection.png",selectedIconPath:"/assets/images/icon/detection_cur.png"},{pagePath:"pages/menu1",text:"预警",iconPath:"/assets/images/icon/warning.png",selectedIconPath:"/assets/images/icon/warning_cur.png"},{pagePath:"pages/menu2",text:"我的",iconPath:"/assets/images/icon/my.png",selectedIconPath:"/assets/images/icon/my_cur.png"}]}},e.STATICDATA={defaultImg:""},e.globalData={statusBarHeight:wx.getSystemInfoSync().statusBarHeight},e.use("promisify"),e.use("requestfix"),e}return _inherits(t,e),t}(_wepy2.default.app);App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default,{noPromiseAPI:["createSelectorQuery"]}));