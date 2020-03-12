"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var link_1=require("./../mixins/link.js"),component_1=require("./../common/component.js"),utils_1=require("./../common/utils.js");component_1.VantComponent({relation:{name:"grid",type:"ancestor",current:"grid-item"},mixins:[link_1.link],props:{icon:String,dot:Boolean,info:null,text:String,useSlot:Boolean},data:{viewStyle:""},mounted:function(){this.updateStyle()},methods:{updateStyle:function(){if(this.parent){var t=this.parent,e=t.data,i=t.children,n=e.columnNum,o=e.border,r=e.square,a=e.gutter,s=e.clickable,u=e.center,l=100/n+"%",c=[];if(c.push("width: "+l),r&&c.push("padding-top: "+l),a){var d=utils_1.addUnit(a);c.push("padding-right: "+d);i.indexOf(this)>=n&&c.push("margin-top: "+d)}var p="";if(r&&a){var d=utils_1.addUnit(a);p="\n          right: "+d+";\n          bottom: "+d+";\n          height: auto;\n        "}this.setData({viewStyle:c.join("; "),contentStyle:p,center:u,border:o,square:r,gutter:a,clickable:s})}},onClick:function(){this.$emit("click"),this.jumpLink()}}});