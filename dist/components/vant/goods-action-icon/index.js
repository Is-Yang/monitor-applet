"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var link_1 = require('./../mixins/link.js');
var button_1 = require('./../mixins/button.js');
var open_type_1 = require('./../mixins/open-type.js');
component_1.VantComponent({
    classes: ['icon-class', 'text-class'],
    mixins: [link_1.link, button_1.button, open_type_1.openType],
    props: {
        text: String,
        dot: Boolean,
        info: String,
        icon: String,
        disabled: Boolean,
        loading: Boolean
    },
    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwibGlua18xIiwiYnV0dG9uXzEiLCJvcGVuX3R5cGVfMSIsIlZhbnRDb21wb25lbnQiLCJjbGFzc2VzIiwibWl4aW5zIiwibGluayIsImJ1dHRvbiIsIm9wZW5UeXBlIiwicHJvcHMiLCJ0ZXh0IiwiU3RyaW5nIiwiZG90IiwiQm9vbGVhbiIsImluZm8iLCJpY29uIiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIiwianVtcExpbmsiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsU0FBU0QsUUFBUSxnQkFBUixDQUFiO0FBQ0EsSUFBSUUsV0FBV0YsUUFBUSxrQkFBUixDQUFmO0FBQ0EsSUFBSUcsY0FBY0gsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZSyxhQUFaLENBQTBCO0FBQ3RCQyxhQUFTLENBQUMsWUFBRCxFQUFlLFlBQWYsQ0FEYTtBQUV0QkMsWUFBUSxDQUFDTCxPQUFPTSxJQUFSLEVBQWNMLFNBQVNNLE1BQXZCLEVBQStCTCxZQUFZTSxRQUEzQyxDQUZjO0FBR3RCQyxXQUFPO0FBQ0hDLGNBQU1DLE1BREg7QUFFSEMsYUFBS0MsT0FGRjtBQUdIQyxjQUFNSCxNQUhIO0FBSUhJLGNBQU1KLE1BSkg7QUFLSEssa0JBQVVILE9BTFA7QUFNSEksaUJBQVNKO0FBTk4sS0FIZTtBQVd0QkssYUFBUztBQUNMQyxpQkFBUyxpQkFBVUMsS0FBVixFQUFpQjtBQUN0QixpQkFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JELE1BQU1FLE1BQTFCO0FBQ0EsaUJBQUtDLFFBQUw7QUFDSDtBQUpJO0FBWGEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIGxpbmtfMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvbGlua1wiKTtcbnZhciBidXR0b25fMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvYnV0dG9uXCIpO1xudmFyIG9wZW5fdHlwZV8xID0gcmVxdWlyZShcIi4uL21peGlucy9vcGVuLXR5cGVcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBjbGFzc2VzOiBbJ2ljb24tY2xhc3MnLCAndGV4dC1jbGFzcyddLFxuICAgIG1peGluczogW2xpbmtfMS5saW5rLCBidXR0b25fMS5idXR0b24sIG9wZW5fdHlwZV8xLm9wZW5UeXBlXSxcbiAgICBwcm9wczoge1xuICAgICAgICB0ZXh0OiBTdHJpbmcsXG4gICAgICAgIGRvdDogQm9vbGVhbixcbiAgICAgICAgaW5mbzogU3RyaW5nLFxuICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBsb2FkaW5nOiBCb29sZWFuXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgdGhpcy5qdW1wTGluaygpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=