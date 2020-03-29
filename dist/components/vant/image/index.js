"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require('./../common/utils.js');
var component_1 = require('./../common/component.js');
var button_1 = require('./../mixins/button.js');
var open_type_1 = require('./../mixins/open-type.js');
var FIT_MODE_MAP = {
    none: 'center',
    fill: 'scaleToFill',
    cover: 'aspectFill',
    contain: 'aspectFit'
};
component_1.VantComponent({
    mixins: [button_1.button, open_type_1.openType],
    classes: ['custom-class', 'loading-class', 'error-class', 'image-class'],
    props: {
        src: {
            type: String,
            observer: function observer() {
                this.setData({
                    error: false,
                    loading: true
                });
            }
        },
        round: Boolean,
        width: {
            type: null,
            observer: 'setStyle'
        },
        height: {
            type: null,
            observer: 'setStyle'
        },
        radius: null,
        lazyLoad: Boolean,
        useErrorSlot: Boolean,
        useLoadingSlot: Boolean,
        showMenuByLongpress: Boolean,
        fit: {
            type: String,
            value: 'fill',
            observer: 'setMode'
        },
        showError: {
            type: Boolean,
            value: true
        },
        showLoading: {
            type: Boolean,
            value: true
        }
    },
    data: {
        error: false,
        loading: true,
        viewStyle: ''
    },
    mounted: function mounted() {
        this.setMode();
        this.setStyle();
    },
    methods: {
        setMode: function setMode() {
            this.setData({
                mode: FIT_MODE_MAP[this.data.fit]
            });
        },
        setStyle: function setStyle() {
            var _a = this.data,
                width = _a.width,
                height = _a.height,
                radius = _a.radius;
            var style = '';
            if (utils_1.isDef(width)) {
                style += "width: " + utils_1.addUnit(width) + ";";
            }
            if (utils_1.isDef(height)) {
                style += "height: " + utils_1.addUnit(height) + ";";
            }
            if (utils_1.isDef(radius)) {
                style += 'overflow: hidden;';
                style += "border-radius: " + utils_1.addUnit(radius) + ";";
            }
            this.setData({ viewStyle: style });
        },
        onLoad: function onLoad(event) {
            this.setData({
                loading: false
            });
            this.$emit('load', event.detail);
        },
        onError: function onError(event) {
            this.setData({
                loading: false,
                error: true
            });
            this.$emit('error', event.detail);
        },
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwidXRpbHNfMSIsInJlcXVpcmUiLCJjb21wb25lbnRfMSIsImJ1dHRvbl8xIiwib3Blbl90eXBlXzEiLCJGSVRfTU9ERV9NQVAiLCJub25lIiwiZmlsbCIsImNvdmVyIiwiY29udGFpbiIsIlZhbnRDb21wb25lbnQiLCJtaXhpbnMiLCJidXR0b24iLCJvcGVuVHlwZSIsImNsYXNzZXMiLCJwcm9wcyIsInNyYyIsInR5cGUiLCJTdHJpbmciLCJvYnNlcnZlciIsInNldERhdGEiLCJlcnJvciIsImxvYWRpbmciLCJyb3VuZCIsIkJvb2xlYW4iLCJ3aWR0aCIsImhlaWdodCIsInJhZGl1cyIsImxhenlMb2FkIiwidXNlRXJyb3JTbG90IiwidXNlTG9hZGluZ1Nsb3QiLCJzaG93TWVudUJ5TG9uZ3ByZXNzIiwiZml0Iiwic2hvd0Vycm9yIiwic2hvd0xvYWRpbmciLCJkYXRhIiwidmlld1N0eWxlIiwibW91bnRlZCIsInNldE1vZGUiLCJzZXRTdHlsZSIsIm1ldGhvZHMiLCJtb2RlIiwiX2EiLCJzdHlsZSIsImlzRGVmIiwiYWRkVW5pdCIsIm9uTG9hZCIsImV2ZW50IiwiJGVtaXQiLCJkZXRhaWwiLCJvbkVycm9yIiwib25DbGljayJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLFVBQVVDLFFBQVEsaUJBQVIsQ0FBZDtBQUNBLElBQUlDLGNBQWNELFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJRSxXQUFXRixRQUFRLGtCQUFSLENBQWY7QUFDQSxJQUFJRyxjQUFjSCxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUksZUFBZTtBQUNmQyxVQUFNLFFBRFM7QUFFZkMsVUFBTSxhQUZTO0FBR2ZDLFdBQU8sWUFIUTtB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QUwsQ0FBVyxPQUFYLEVBQW9CRCxNQUFNRSxNQUExQjtBQUNILFNBakNJO0FBa0NMRSxpQkFBUyxpQkFBVUosS0FBVixFQUFpQjtBQUN0QixpQkFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JELE1BQU1FLE1BQTFCO0FBQ0g7QUFwQ0k7QUFsRGEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL2NvbW1vbi91dGlsc1wiKTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIGJ1dHRvbl8xID0gcmVxdWlyZShcIi4uL21peGlucy9idXR0b25cIik7XG52YXIgb3Blbl90eXBlXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL29wZW4tdHlwZVwiKTtcbnZhciBGSVRfTU9ERV9NQVAgPSB7XG4gICAgbm9uZTogJ2NlbnRlcicsXG4gICAgZmlsbDogJ3NjYWxlVG9GaWxsJyxcbiAgICBjb3ZlcjogJ2FzcGVjdEZpbGwnLFxuICAgIGNvbnRhaW46ICdhc3BlY3RGaXQnXG59O1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgbWl4aW5zOiBbYnV0dG9uXzEuYnV0dG9uLCBvcGVuX3R5cGVfMS5vcGVuVHlwZV0sXG4gICAgY2xhc3NlczogWydjdXN0b20tY2xhc3MnLCAnbG9hZGluZy1jbGFzcycsICdlcnJvci1jbGFzcycsICdpbWFnZS1jbGFzcyddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNyYzoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmc6IHRydWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcm91bmQ6IEJvb2xlYW4sXG4gICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRTdHlsZSdcbiAgICAgICAgfSxcbiAgICAgICAgaGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRTdHlsZSdcbiAgICAgICAgfSxcbiAgICAgICAgcmFkaXVzOiBudWxsLFxuICAgICAgICBsYXp5TG9hZDogQm9vbGVhbixcbiAgICAgICAgdXNlRXJyb3JTbG90OiBCb29sZWFuLFxuICAgICAgICB1c2VMb2FkaW5nU2xvdDogQm9vbGVhbixcbiAgICAgICAgc2hvd01lbnVCeUxvbmdwcmVzczogQm9vbGVhbixcbiAgICAgICAgZml0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2ZpbGwnLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRNb2RlJ1xuICAgICAgICB9LFxuICAgICAgICBzaG93RXJyb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzaG93TG9hZGluZzoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgZXJyb3I6IGZhbHNlLFxuICAgICAgICBsb2FkaW5nOiB0cnVlLFxuICAgICAgICB2aWV3U3R5bGU6ICcnLFxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnNldE1vZGUoKTtcbiAgICAgICAgdGhpcy5zZXRTdHlsZSgpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZXRNb2RlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIG1vZGU6IEZJVF9NT0RFX01BUFt0aGlzLmRhdGEuZml0XSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRTdHlsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCB3aWR0aCA9IF9hLndpZHRoLCBoZWlnaHQgPSBfYS5oZWlnaHQsIHJhZGl1cyA9IF9hLnJhZGl1cztcbiAgICAgICAgICAgIHZhciBzdHlsZSA9ICcnO1xuICAgICAgICAgICAgaWYgKHV0aWxzXzEuaXNEZWYod2lkdGgpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gXCJ3aWR0aDogXCIgKyB1dGlsc18xLmFkZFVuaXQod2lkdGgpICsgXCI7XCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodXRpbHNfMS5pc0RlZihoZWlnaHQpKSB7XG4gICAgICAgICAgICAgICAgc3R5bGUgKz0gXCJoZWlnaHQ6IFwiICsgdXRpbHNfMS5hZGRVbml0KGhlaWdodCkgKyBcIjtcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh1dGlsc18xLmlzRGVmKHJhZGl1cykpIHtcbiAgICAgICAgICAgICAgICBzdHlsZSArPSAnb3ZlcmZsb3c6IGhpZGRlbjsnO1xuICAgICAgICAgICAgICAgIHN0eWxlICs9IFwiYm9yZGVyLXJhZGl1czogXCIgKyB1dGlsc18xLmFkZFVuaXQocmFkaXVzKSArIFwiO1wiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgdmlld1N0eWxlOiBzdHlsZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Mb2FkOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnbG9hZCcsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRXJyb3I6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlcnJvcjogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdlcnJvcicsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=