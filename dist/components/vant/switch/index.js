"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var color_1 = require('./../common/color.js');
component_1.VantComponent({
    field: true,
    classes: ['node-class'],
    props: {
        checked: {
            type: null,
            observer: function observer(value) {
                var loadingColor = this.getLoadingColor(value);
                this.setData({ value: value, loadingColor: loadingColor });
            }
        },
        loading: Boolean,
        disabled: Boolean,
        activeColor: String,
        inactiveColor: String,
        size: {
            type: String,
            value: '30px'
        },
        activeValue: {
            type: null,
            value: true
        },
        inactiveValue: {
            type: null,
            value: false
        }
    },
    created: function created() {
        var value = this.data.checked;
        var loadingColor = this.getLoadingColor(value);
        this.setData({ value: value, loadingColor: loadingColor });
    },
    methods: {
        getLoadingColor: function getLoadingColor(checked) {
            var _a = this.data,
                activeColor = _a.activeColor,
                inactiveColor = _a.inactiveColor;
            return checked ? activeColor || color_1.BLUE : inactiveColor || color_1.GRAY_DARK;
        },
        onClick: function onClick() {
            var _a = this.data,
                activeValue = _a.activeValue,
                inactiveValue = _a.inactiveValue;
            if (!this.data.disabled && !this.data.loading) {
                var checked = this.data.checked === activeValue;
                var value = checked ? inactiveValue : activeValue;
                this.$emit('input', value);
                this.$emit('change', value);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiY29sb3JfMSIsIlZhbnRDb21wb25lbnQiLCJmaWVsZCIsImNsYXNzZXMiLCJwcm9wcyIsImNoZWNrZWQiLCJ0eXBlIiwib2JzZXJ2ZXIiLCJsb2FkaW5nQ29sb3IiLCJnZXRMb2FkaW5nQ29sb3IiLCJzZXREYXRhIiwibG9hZGluZyIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsImFjdGl2ZUNvbG9yIiwiU3RyaW5nIiwiaW5hY3RpdmVDb2xvciIsInNpemUiLCJhY3RpdmVWYWx1ZSIsImluYWN0aXZlVmFsdWUiLCJjcmVhdGVkIiwiZGF0YSIsIm1ldGhvZHMiLCJfYSIsIkJMVUUiLCJHUkFZX0RBUksiLCJvbkNsaWNrIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxpQkFBUixDQUFkO0FBQ0FELFlBQVlHLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU8sSUFEZTtBQUV0QkMsYUFBUyxDQUFDLFlBQUQsQ0FGYTtBQUd0QkMsV0FBTztBQUNIQyxpQkFBUztBQUNMQyxrQkFBTSxJQUREO0FBRUxDLHNCQUFVLGtCQUFVVixLQUFWLEVBQWlCO0FBQ3ZCLG9CQUFJVyxlQUFlLEtBQUtDLGVBQUwsQ0FBcUJaLEtBQXJCLENBQW5CO0FBQ0EscUJBQUthLE9BQUwsQ0FBYSxFQUFFYixPQUFPQSxLQUFULEVBQWdCVyxjQUFjQSxZQUE5QixFQUFiO0FBQ0g7QUFMSSxTQUROO0FBUUhHLGlCQUFTQyxPQVJOO0FBU0hDLGtCQUFVRCxPQVRQO0FBVUhFLHFCQUFhQyxNQVZWO0FBV0hDLHVCQUFlRCxNQVhaO0FBWUhFLGNBQU07QUFDRlgsa0JBQU1TLE1BREo7QUFFRmxCLG1CQUFPO0FBRkwsU0FaSDtBQWdCSHFCLHFCQUFhO0FBQ1RaLGtCQUFNLElBREc7QUFFVFQsbUJBQU87QUFGRSxTQWhCVjtBQW9CSHNCLHVCQUFlO0FBQ1hiLGtCQUFNLElBREs7QUFFWFQsbUJBQU87QUFGSTtBQXBCWixLQUhlO0FBNEJ0QnVCLGFBQVMsbUJBQVk7QUFDakIsWUFBSXZCLFFBQVEsS0FBS3dCLElBQUwsQ0FBVWhCLE9BQXRCO0FBQ0EsWUFBSUcsZUFBZSxLQUFLQyxlQUFMLENBQXFCWixLQUFyQixDQUFuQjtBQUNBLGFBQUthLE9BQUwsQ0FBYSxFQUFFYixPQUFPQSxLQUFULEVBQWdCVyxjQUFjQSxZQUE5QixFQUFiO0FBQ0gsS0FoQ3FCO0FBaUN0QmMsYUFBUztBQUNMYix5QkFBaUIseUJBQVVKLE9BQVYsRUFBbUI7QUFDaEMsZ0JBQUlrQixLQUFLLEtBQUtGLElBQWQ7QUFBQSxnQkFBb0JQLGNBQWNTLEdBQUdULFdBQXJDO0FBQUEsZ0JBQWtERSxnQkFBZ0JPLEdBQUdQLGFBQXJFO0FBQ0EsbUJBQU9YLFVBQVVTLGVBQWVkLFFBQVF3QixJQUFqQyxHQUF3Q1IsaUJBQWlCaEIsUUFBUXlCLFNBQXhFO0FBQ0gsU0FKSTtBQUtMQyxpQkFBUyxtQkFBWTtBQUNqQixnQkFBSUgsS0FBSyxLQUFLRixJQUFkO0FBQUEsZ0JBQW9CSCxjQUFjSyxHQUFHTCxXQUFyQztBQUFBLGdCQUFrREMsZ0JBQWdCSSxHQUFHSixhQUFyRTtBQUNBLGdCQUFJLENBQUMsS0FBS0UsSUFBTCxDQUFVUixRQUFYLElBQXVCLENBQUMsS0FBS1EsSUFBTCxDQUFVVixPQUF0QyxFQUErQztBQUMzQyxvQkFBSU4sVUFBVSxLQUFLZ0IsSUFBTCxDQUFVaEIsT0FBVixLQUFzQmEsV0FBcEM7QUFDQSxvQkFBSXJCLFFBQVFRLFVBQVVjLGFBQVYsR0FBMEJELFdBQXRDO0FBQ0EscUJBQUtTLEtBQUwsQ0FBVyxPQUFYLEVBQW9COUIsS0FBcEI7QUFDQSxxQkFBSzhCLEtBQUwsQ0FBVyxRQUFYLEVBQXFCOUIsS0FBckI7QUFDSDtBQUNKO0FBYkk7QUFqQ2EsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIGNvbG9yXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbG9yXCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgY2xhc3NlczogWydub2RlLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgY2hlY2tlZDoge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB2YXIgbG9hZGluZ0NvbG9yID0gdGhpcy5nZXRMb2FkaW5nQ29sb3IodmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHZhbHVlOiB2YWx1ZSwgbG9hZGluZ0NvbG9yOiBsb2FkaW5nQ29sb3IgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBhY3RpdmVDb2xvcjogU3RyaW5nLFxuICAgICAgICBpbmFjdGl2ZUNvbG9yOiBTdHJpbmcsXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnMzBweCdcbiAgICAgICAgfSxcbiAgICAgICAgYWN0aXZlVmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBpbmFjdGl2ZVZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5kYXRhLmNoZWNrZWQ7XG4gICAgICAgIHZhciBsb2FkaW5nQ29sb3IgPSB0aGlzLmdldExvYWRpbmdDb2xvcih2YWx1ZSk7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IHZhbHVlOiB2YWx1ZSwgbG9hZGluZ0NvbG9yOiBsb2FkaW5nQ29sb3IgfSk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldExvYWRpbmdDb2xvcjogZnVuY3Rpb24gKGNoZWNrZWQpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgYWN0aXZlQ29sb3IgPSBfYS5hY3RpdmVDb2xvciwgaW5hY3RpdmVDb2xvciA9IF9hLmluYWN0aXZlQ29sb3I7XG4gICAgICAgICAgICByZXR1cm4gY2hlY2tlZCA/IGFjdGl2ZUNvbG9yIHx8IGNvbG9yXzEuQkxVRSA6IGluYWN0aXZlQ29sb3IgfHwgY29sb3JfMS5HUkFZX0RBUks7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgYWN0aXZlVmFsdWUgPSBfYS5hY3RpdmVWYWx1ZSwgaW5hY3RpdmVWYWx1ZSA9IF9hLmluYWN0aXZlVmFsdWU7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5kaXNhYmxlZCAmJiAhdGhpcy5kYXRhLmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hlY2tlZCA9IHRoaXMuZGF0YS5jaGVja2VkID09PSBhY3RpdmVWYWx1ZTtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjaGVja2VkID8gaW5hY3RpdmVWYWx1ZSA6IGFjdGl2ZVZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19