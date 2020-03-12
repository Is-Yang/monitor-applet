"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require('./../mixins/link.js');
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    classes: ['title-class', 'label-class', 'value-class', 'right-icon-class', 'hover-class'],
    mixins: [link_1.link],
    props: {
        title: null,
        value: null,
        icon: String,
        size: String,
        label: String,
        center: Boolean,
        isLink: Boolean,
        required: Boolean,
        clickable: Boolean,
        titleWidth: String,
        customStyle: String,
        arrowDirection: String,
        useLabelSlot: Boolean,
        border: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibGlua18xIiwicmVxdWlyZSIsImNvbXBvbmVudF8xIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJtaXhpbnMiLCJsaW5rIiwicHJvcHMiLCJ0aXRsZSIsImljb24iLCJTdHJpbmciLCJzaXplIiwibGFiZWwiLCJjZW50ZXIiLCJCb29sZWFuIiwiaXNMaW5rIiwicmVxdWlyZWQiLCJjbGlja2FibGUiLCJ0aXRsZVdpZHRoIiwiY3VzdG9tU3R5bGUiLCJhcnJvd0RpcmVjdGlvbiIsInVzZUxhYmVsU2xvdCIsImJvcmRlciIsInR5cGUiLCJtZXRob2RzIiwib25DbGljayIsImV2ZW50IiwiJGVtaXQiLCJkZXRhaWwiLCJqdW1wTGluayJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLFNBQVNDLFFBQVEsZ0JBQVIsQ0FBYjtBQUNBLElBQUlDLGNBQWNELFFBQVEscUJBQVIsQ0FBbEI7QUFDQUMsWUFBWUMsYUFBWixDQUEwQjtBQUN0QkMsYUFBUyxDQUNMLGFBREssRUFFTCxhQUZLLEVBR0wsYUFISyxFQUlMLGtCQUpLLEVBS0wsYUFMSyxDQURhO0FBUXRCQyxZQUFRLENBQUNMLE9BQU9NLElBQVIsQ0FSYztBQVN0QkMsV0FBTztBQUNIQyxlQUFPLElBREo7QUFFSFQsZUFBTyxJQUZKO0FBR0hVLGNBQU1DLE1BSEg7QUFJSEMsY0FBTUQsTUFKSDtBQUtIRSxlQUFPRixNQUxKO0FBTUhHLGdCQUFRQyxPQU5MO0FBT0hDLGdCQUFRRCxPQVBMO0FBUUhFLGtCQUFVRixPQVJQO0FBU0hHLG1CQUFXSCxPQVRSO0FBVUhJLG9CQUFZUixNQVZUO0FBV0hTLHFCQUFhVCxNQVhWO0FBWUhVLHdCQUFnQlYsTUFaYjtBQWFIVyxzQkFBY1AsT0FiWDtBQWNIUSxnQkFBUTtBQUNKQyxrQkFBTVQsT0FERjtBQUVKZixtQkFBTztBQUZIO0FBZEwsS0FUZTtBQTRCdEJ5QixhQUFTO0FBQ0xDLGlCQUFTLGlCQUFVQyxLQUFWLEVBQWlCO0FBQ3RCLGlCQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkQsTUFBTUUsTUFBMUI7QUFDQSxpQkFBS0MsUUFBTDtBQUNIO0FBSkk7QUE1QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBsaW5rXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL2xpbmtcIik7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIGNsYXNzZXM6IFtcbiAgICAgICAgJ3RpdGxlLWNsYXNzJyxcbiAgICAgICAgJ2xhYmVsLWNsYXNzJyxcbiAgICAgICAgJ3ZhbHVlLWNsYXNzJyxcbiAgICAgICAgJ3JpZ2h0LWljb24tY2xhc3MnLFxuICAgICAgICAnaG92ZXItY2xhc3MnXG4gICAgXSxcbiAgICBtaXhpbnM6IFtsaW5rXzEubGlua10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGl0bGU6IG51bGwsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgIHNpemU6IFN0cmluZyxcbiAgICAgICAgbGFiZWw6IFN0cmluZyxcbiAgICAgICAgY2VudGVyOiBCb29sZWFuLFxuICAgICAgICBpc0xpbms6IEJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkOiBCb29sZWFuLFxuICAgICAgICBjbGlja2FibGU6IEJvb2xlYW4sXG4gICAgICAgIHRpdGxlV2lkdGg6IFN0cmluZyxcbiAgICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcbiAgICAgICAgYXJyb3dEaXJlY3Rpb246IFN0cmluZyxcbiAgICAgICAgdXNlTGFiZWxTbG90OiBCb29sZWFuLFxuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgdGhpcy5qdW1wTGluaygpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=