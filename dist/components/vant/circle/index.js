"use strict";function format(e){return Math.min(Math.max(e,0),100)}Object.defineProperty(exports,"__esModule",{value:!0});var component_1=require("./../common/component.js"),utils_1=require("./../common/utils.js"),color_1=require("./../common/color.js"),PERIMETER=2*Math.PI,BEGIN_ANGLE=-Math.PI/2,STEP=1;component_1.VantComponent({props:{text:String,lineCap:{type:String,value:"round"},value:{type:Number,value:0,observer:"reRender"},speed:{type:Number,value:50},size:{type:Number,value:100},fill:String,layerColor:{type:String,value:color_1.WHITE},color:{type:[String,Object],value:color_1.BLUE,observer:"setHoverColor"},strokeWidth:{type:Number,value:4},clockwise:{type:Boolean,value:!0}},data:{hoverColor:color_1.BLUE},methods:{getContext:function(){return this.ctx||(this.ctx=wx.createCanvasContext("van-circle",this)),this.ctx},setHoverColor:function(){var e=this.getContext(),t=this.data,r=t.color,a=t.size,n=r;if(utils_1.isObj(r)){var i=e.createLinearGradient(a,0,0,0);Object.keys(r).sort(function(e,t){return parseFloat(e)-parseFloat(t)}).map(function(e){return i.addColorStop(parseFloat(e)/100,r[e])}),n=i}this.setData({hoverColor:n})},presetCanvas:function(e,t,r,a,n){var i=this.data,o=i.strokeWidth,l=i.lineCap,s=i.clockwise,c=i.size,u=c/2,v=u-o/2;e.setStrokeStyle(t),e.setLineWidth(o),e.setLineCap(l),e.beginPath(),e.arc(u,u,v,r,a,!s),e.stroke(),n&&(e.setFillStyle(n),e.fill())},renderLayerCircle:function(e){var t=this.data,r=t.layerColor,a=t.fill;this.presetCanvas(e,r,0,PERIMETER,a)},renderHoverCircle:function(e,t){var r=this.data,a=r.clockwise,n=r.hoverColor,i=PERIMETER*(t/100),o=a?BEGIN_ANGLE+i:3*Math.PI-(BEGIN_ANGLE+i);this.presetCanvas(e,n,BEGIN_ANGLE,o)},drawCircle:function(e){var t=this.getContext(),r=this.data.size;t.clearRect(0,0,r,r),this.renderLayerCircle(t);var a=format(e);0!==a&&this.renderHoverCircle(t,a),t.draw()},reRender:function(){var e=this,t=this.data,r=t.value,a=t.speed;if(a<=0||a>1e3)return void this.drawCircle(r);this.clearInterval(),this.currentValue=this.currentValue||0,this.interval=setInterval(function(){e.currentValue!==r?(e.currentValue<r?e.currentValue+=STEP:e.currentValue-=STEP,e.drawCircle(e.currentValue)):e.clearInterval()},1e3/a)},clearInterval:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){this.interval&&(clearInterval(this.interval),this.interval=null)})},created:function(){var e=this.data.value;this.currentValue=e,this.drawCircle(e)},destroyed:function(){this.ctx=null,this.clearInterval()}});