"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    props: {
        dot: Boolean,
        info: null,
        size: null,
        color: String,
        customStyle: String,
        classPrefix: {
            type: String,
            value: 'van-icon'
        },
        name: {
            type: String,
            observer: function observer(val) {
                this.setData({
                    isImageName: val.indexOf('/') !== -1
                });
            }
        }
    },
    methods: {
        onClick: function onClick() {
            this.$emit('click');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwiZG90IiwiQm9vbGVhbiIsImluZm8iLCJzaXplIiwiY29sb3IiLCJTdHJpbmciLCJjdXN0b21TdHlsZSIsImNsYXNzUHJlZml4IiwidHlwZSIsIm5hbWUiLCJvYnNlcnZlciIsInZhbCIsInNldERhdGEiLCJpc0ltYWdlTmFtZSIsImluZGV4T2YiLCJtZXRob2RzIiwib25DbGljayIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPO0FBQ0hDLGFBQUtDLE9BREY7QUFFSEMsY0FBTSxJQUZIO0FBR0hDLGNBQU0sSUFISDtBQUlIQyxlQUFPQyxNQUpKO0FBS0hDLHFCQUFhRCxNQUxWO0FBTUhFLHFCQUFhO0FBQ1RDLGtCQUFNSCxNQURHO0FBRVRWLG1CQUFPO0FBRkUsU0FOVjtBQVVIYyxjQUFNO0FBQ0ZELGtCQUFNSCxNQURKO0FBRUZLLHNCQUFVLGtCQUFVQyxHQUFWLEVBQWU7QUFDckIscUJBQUtDLE9BQUwsQ0FBYTtBQUNUQyxpQ0FBYUYsSUFBSUcsT0FBSixDQUFZLEdBQVosTUFBcUIsQ0FBQztBQUQxQixpQkFBYjtBQUdIO0FBTkM7QUFWSCxLQURlO0FBb0J0QkMsYUFBUztBQUNMQyxpQkFBUyxtQkFBWTtBQUNqQixpQkFBS0MsS0FBTCxDQUFXLE9BQVg7QUFDSDtBQUhJO0FBcEJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIGRvdDogQm9vbGVhbixcbiAgICAgICAgaW5mbzogbnVsbCxcbiAgICAgICAgc2l6ZTogbnVsbCxcbiAgICAgICAgY29sb3I6IFN0cmluZyxcbiAgICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcbiAgICAgICAgY2xhc3NQcmVmaXg6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAndmFuLWljb24nXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgaXNJbWFnZU5hbWU6IHZhbC5pbmRleE9mKCcvJykgIT09IC0xXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19