"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    props: {
        info: null,
        name: null,
        icon: String,
        dot: Boolean
    },
    relation: {
        name: 'tabbar',
        type: 'ancestor',
        current: 'tabbar-item'
    },
    data: {
        active: false
    },
    methods: {
        onClick: function onClick() {
            if (this.parent) {
                this.parent.onChange(this);
            }
            this.$emit('click');
        },
        updateFromParent: function updateFromParent() {
            var parent = this.parent;
            if (!parent) {
                return;
            }
            var index = parent.children.indexOf(this);
            var parentData = parent.data;
            var data = this.data;
            var active = (data.name || index) === parentData.active;
            var patch = {};
            if (active !== data.active) {
                patch.active = active;
            }
            if (parentData.activeColor !== data.activeColor) {
                patch.activeColor = parentData.activeColor;
            }
            if (parentData.inactiveColor !== data.inactiveColor) {
                patch.inactiveColor = parentData.inactiveColor;
            }
            return Object.keys(patch).length > 0 ? this.set(patch) : Promise.resolve();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwiaW5mbyIsIm5hbWUiLCJpY29uIiwiU3RyaW5nIiwiZG90IiwiQm9vbGVhbiIsInJlbGF0aW9uIiwidHlwZSIsImN1cnJlbnQiLCJkYXRhIiwiYWN0aXZlIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJwYXJlbnQiLCJvbkNoYW5nZSIsIiRlbWl0IiwidXBkYXRlRnJvbVBhcmVudCIsImluZGV4IiwiY2hpbGRyZW4iLCJpbmRleE9mIiwicGFyZW50RGF0YSIsInBhdGNoIiwiYWN0aXZlQ29sb3IiLCJpbmFjdGl2ZUNvbG9yIiwia2V5cyIsImxlbmd0aCIsInNldCIsIlByb21pc2UiLCJyZXNvbHZlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPO0FBQ0hDLGNBQU0sSUFESDtBQUVIQyxjQUFNLElBRkg7QUFHSEMsY0FBTUMsTUFISDtBQUlIQyxhQUFLQztBQUpGLEtBRGU7QUFPdEJDLGNBQVU7QUFDTkwsY0FBTSxRQURBO0FBRU5NLGNBQU0sVUFGQTtBQUdOQyxpQkFBUztBQUhILEtBUFk7QUFZdEJDLFVBQU07QUFDRkMsZ0JBQVE7QUFETixLQVpnQjtBQWV0QkMsYUFBUztBQUNMQyxpQkFBUyxtQkFBWTtBQUNqQixnQkFBSSxLQUFLQyxNQUFULEVBQWlCO0FBQ2IscUJBQUtBLE1BQUwsQ0FBWUMsUUFBWixDQUFxQixJQUFyQjtBQUNIO0FBQ0QsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FOSTtBQU9MQywwQkFBa0IsNEJBQVk7QUFDMUIsZ0JBQUlILFNBQVMsS0FBS0EsTUFBbEI7QUFDQSxnQkFBSSxDQUFDQSxNQUFMLEVBQWE7QUFDVDtBQUNIO0FBQ0QsZ0JBQUlJLFFBQVFKLE9BQU9LLFFBQVAsQ0FBZ0JDLE9BQWhCLENBQXdCLElBQXhCLENBQVo7QUFDQSxnQkFBSUMsYUFBYVAsT0FBT0osSUFBeEI7QUFDQSxnQkFBSUEsT0FBTyxLQUFLQSxJQUFoQjtBQUNBLGdCQUFJQyxTQUFTLENBQUNELEtBQUtSLElBQUwsSUFBYWdCLEtBQWQsTUFBeUJHLFdBQVdWLE1BQWpEO0FBQ0EsZ0JBQUlXLFFBQVEsRUFBWjtBQUNBLGdCQUFJWCxXQUFXRCxLQUFLQyxNQUFwQixFQUE0QjtBQUN4Qlcsc0JBQU1YLE1BQU4sR0FBZUEsTUFBZjtBQUNIO0FBQ0QsZ0JBQUlVLFdBQVdFLFdBQVgsS0FBMkJiLEtBQUthLFdBQXBDLEVBQWlEO0FBQzdDRCxzQkFBTUMsV0FBTixHQUFvQkYsV0FBV0UsV0FBL0I7QUFDSDtBQUNELGdCQUFJRixXQUFXRyxhQUFYLEtBQTZCZCxLQUFLYyxhQUF0QyxFQUFxRDtBQUNqREYsc0JBQU1FLGFBQU4sR0FBc0JILFdBQVdHLGFBQWpDO0FBQ0g7QUFDRCxtQkFBTy9CLE9BQU9nQyxJQUFQLENBQVlILEtBQVosRUFBbUJJLE1BQW5CLEdBQTRCLENBQTVCLEdBQ0QsS0FBS0MsR0FBTCxDQUFTTCxLQUFULENBREMsR0FFRE0sUUFBUUMsT0FBUixFQUZOO0FBR0g7QUE3Qkk7QUFmYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICBpbmZvOiBudWxsLFxuICAgICAgICBuYW1lOiBudWxsLFxuICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgIGRvdDogQm9vbGVhblxuICAgIH0sXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3RhYmJhcicsXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcicsXG4gICAgICAgIGN1cnJlbnQ6ICd0YWJiYXItaXRlbScsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2VcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQub25DaGFuZ2UodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljaycpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVGcm9tUGFyZW50OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gdGhpcy5wYXJlbnQ7XG4gICAgICAgICAgICBpZiAoIXBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgdmFyIHBhcmVudERhdGEgPSBwYXJlbnQuZGF0YTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xuICAgICAgICAgICAgdmFyIGFjdGl2ZSA9IChkYXRhLm5hbWUgfHwgaW5kZXgpID09PSBwYXJlbnREYXRhLmFjdGl2ZTtcbiAgICAgICAgICAgIHZhciBwYXRjaCA9IHt9O1xuICAgICAgICAgICAgaWYgKGFjdGl2ZSAhPT0gZGF0YS5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICBwYXRjaC5hY3RpdmUgPSBhY3RpdmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocGFyZW50RGF0YS5hY3RpdmVDb2xvciAhPT0gZGF0YS5hY3RpdmVDb2xvcikge1xuICAgICAgICAgICAgICAgIHBhdGNoLmFjdGl2ZUNvbG9yID0gcGFyZW50RGF0YS5hY3RpdmVDb2xvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXJlbnREYXRhLmluYWN0aXZlQ29sb3IgIT09IGRhdGEuaW5hY3RpdmVDb2xvcikge1xuICAgICAgICAgICAgICAgIHBhdGNoLmluYWN0aXZlQ29sb3IgPSBwYXJlbnREYXRhLmluYWN0aXZlQ29sb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMocGF0Y2gpLmxlbmd0aCA+IDBcbiAgICAgICAgICAgICAgICA/IHRoaXMuc2V0KHBhdGNoKVxuICAgICAgICAgICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==