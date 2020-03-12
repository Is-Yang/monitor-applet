"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var component_1=require("./../common/component.js"),utils_1=require("./../common/utils.js"),ARRAY=[];component_1.VantComponent({field:!0,relation:{name:"dropdown-item",type:"descendant",current:"dropdown-menu",linked:function(){this.updateItemListData()},unlinked:function(){this.updateItemListData()}},props:{activeColor:{type:String,observer:"updateChildrenData"},overlay:{type:Boolean,value:!0,observer:"updateChildrenData"},zIndex:{type:Number,value:10},duration:{type:Number,value:200,observer:"updateChildrenData"},direction:{type:String,value:"down",observer:"updateChildrenData"},closeOnClickOverlay:{type:Boolean,value:!0,observer:"updateChildrenData"},closeOnClickOutside:{type:Boolean,value:!0}},data:{itemListData:[]},beforeCreate:function(){var t=wx.getSystemInfoSync().windowHeight;this.windowHeight=t,ARRAY.push(this)},destroyed:function(){var t=this;ARRAY=ARRAY.filter(function(e){return e!==t})},methods:{updateItemListData:function(){this.setData({itemListData:this.children.map(function(t){return t.data})})},updateChildrenData:function(){this.children.forEach(function(t){t.updateDataFromParent()})},toggleItem:function(t){this.children.forEach(function(e,n){var i=e.data.showPopup;n===t?e.toggle():i&&e.toggle(!1,{immediate:!0})})},close:function(){this.children.forEach(function(t){t.toggle(!1,{immediate:!0})})},getChildWrapperStyle:function(){var t=this,e=this.data,n=e.zIndex,i=e.direction;return this.getRect(".van-dropdown-menu").then(function(e){var o=e.top,a=void 0===o?0:o,r=e.bottom,d=void 0===r?0:r,u="down"===i?d:t.windowHeight-a,s="z-index: "+n+";";return s+="down"===i?"top: "+utils_1.addUnit(u)+";":"bottom: "+utils_1.addUnit(u)+";"})},onTitleTap:function(t){var e=this,n=t.currentTarget.dataset.index;this.children[n].data.disabled||(ARRAY.forEach(function(t){t&&t.data.closeOnClickOutside&&t!==e&&t.close()}),this.toggleItem(n))}}});