"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'tabbar-item',
        type: 'descendant',
        current: 'tabbar',
        linked: function linked(target) {
            target.parent = this;
            target.updateFromParent();
        },
        unlinked: function unlinked() {
            this.updateChildren();
        }
    },
    props: {
        active: {
            type: null,
            observer: 'updateChildren'
        },
        activeColor: {
            type: String,
            observer: 'updateChildren'
        },
        inactiveColor: {
            type: String,
            observer: 'updateChildren'
        },
        fixed: {
            type: Boolean,
            value: true
        },
        border: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        updateChildren: function updateChildren() {
            var children = this.children;
            if (!Array.isArray(children) || !children.length) {
                return Promise.resolve();
            }
            return Promise.all(children.map(function (child) {
                return child.updateFromParent();
            }));
        },
        onChange: function onChange(child) {
            var index = this.children.indexOf(child);
            var active = child.data.name || index;
            if (active !== this.data.active) {
                this.$emit('change', active);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJjdXJyZW50IiwibGlua2VkIiwidGFyZ2V0IiwicGFyZW50IiwidXBkYXRlRnJvbVBhcmVudCIsInVubGlua2VkIiwidXBkYXRlQ2hpbGRyZW4iLCJwcm9wcyIsImFjdGl2ZSIsIm9ic2VydmVyIiwiYWN0aXZlQ29sb3IiLCJTdHJpbmciLCJpbmFjdGl2ZUNvbG9yIiwiZml4ZWQiLCJCb29sZWFuIiwiYm9yZGVyIiwiekluZGV4IiwiTnVtYmVyIiwic2FmZUFyZWFJbnNldEJvdHRvbSIsIm1ldGhvZHMiLCJjaGlsZHJlbiIsIkFycmF5IiwiaXNBcnJheSIsImxlbmd0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwiYWxsIiwibWFwIiwiY2hpbGQiLCJvbkNoYW5nZSIsImluZGV4IiwiaW5kZXhPZiIsImRhdGEiLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsY0FBVTtBQUNOQyxjQUFNLGFBREE7QUFFTkMsY0FBTSxZQUZBO0FBR05DLGlCQUFTLFFBSEg7QUFJTkMsZ0JBQVEsZ0JBQVVDLE1BQVYsRUFBa0I7QUFDdEJBLG1CQUFPQyxNQUFQLEdBQWdCLElBQWhCO0FBQ0FELG1CQUFPRSxnQkFBUDtBQUNILFNBUEs7QUFRTkMsa0JBQVUsb0JBQVk7QUFDbEIsaUJBQUtDLGNBQUw7QUFDSDtBQVZLLEtBRFk7QUFhdEJDLFdBQU87QUFDSEMsZ0JBQVE7QUFDSlQsa0JBQU0sSUFERjtBQUVKVSxzQkFBVTtBQUZOLFNBREw7QUFLSEMscUJBQWE7QUFDVFgsa0JBQU1ZLE1BREc7QUFFVEYsc0JBQVU7QUFGRCxTQUxWO0FBU0hHLHVCQUFlO0FBQ1hiLGtCQUFNWSxNQURLO0FBRVhGLHNCQUFVO0FBRkMsU0FUWjtBQWFISSxlQUFPO0FBQ0hkLGtCQUFNZSxPQURIO0FBRUhyQixtQkFBTztBQUZKLFNBYko7QUFpQkhzQixnQkFBUTtBQUNKaEIsa0JBQU1lLE9BREY7QUFFSnJCLG1CQUFPO0FBRkgsU0FqQkw7QUFxQkh1QixnQkFBUTtBQUNKakIsa0JBQU1rQixNQURGO0FBRUp4QixtQkFBTztBQUZILFNBckJMO0FBeUJIeUIsNkJBQXFCO0FBQ2pCbkIsa0JBQU1lLE9BRFc7QUFFakJyQixtQkFBTztBQUZVO0FBekJsQixLQWJlO0FBMkN0QjBCLGFBQVM7QUFDTGIsd0JBQWdCLDBCQUFZO0FBQ3hCLGdCQUFJYyxXQUFXLEtBQUtBLFFBQXBCO0FBQ0EsZ0JBQUksQ0FBQ0MsTUFBTUMsT0FBTixDQUFjRixRQUFkLENBQUQsSUFBNEIsQ0FBQ0EsU0FBU0csTUFBMUMsRUFBa0Q7QUFDOUMsdUJBQU9DLFFBQVFDLE9BQVIsRUFBUDtBQUNIO0FBQ0QsbUJBQU9ELFFBQVFFLEdBQVIsQ0FBWU4sU0FBU08sR0FBVCxDQUFhLFVBQVVDLEtBQVYsRUFBaUI7QUFBRSx1QkFBT0EsTUFBTXhCLGdCQUFOLEVBQVA7QUFBa0MsYUFBbEUsQ0FBWixDQUFQO0FBQ0gsU0FQSTtBQVFMeUIsa0JBQVUsa0JBQVVELEtBQVYsRUFBaUI7QUFDdkIsZ0JBQUlFLFFBQVEsS0FBS1YsUUFBTCxDQUFjVyxPQUFkLENBQXNCSCxLQUF0QixDQUFaO0FBQ0EsZ0JBQUlwQixTQUFTb0IsTUFBTUksSUFBTixDQUFXbEMsSUFBWCxJQUFtQmdDLEtBQWhDO0FBQ0EsZ0JBQUl0QixXQUFXLEtBQUt3QixJQUFMLENBQVV4QixNQUF6QixFQUFpQztBQUM3QixxQkFBS3lCLEtBQUwsQ0FBVyxRQUFYLEVBQXFCekIsTUFBckI7QUFDSDtBQUNKO0FBZEk7QUEzQ2EsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3RhYmJhci1pdGVtJyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBjdXJyZW50OiAndGFiYmFyJyxcbiAgICAgICAgbGlua2VkOiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICB0YXJnZXQucGFyZW50ID0gdGhpcztcbiAgICAgICAgICAgIHRhcmdldC51cGRhdGVGcm9tUGFyZW50KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVubGlua2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZUNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xuICAgICAgICB9LFxuICAgICAgICBpbmFjdGl2ZUNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xuICAgICAgICB9LFxuICAgICAgICBmaXhlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDFcbiAgICAgICAgfSxcbiAgICAgICAgc2FmZUFyZWFJbnNldEJvdHRvbToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlQ2hpbGRyZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoY2hpbGRyZW4pIHx8ICFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoY2hpbGRyZW4ubWFwKGZ1bmN0aW9uIChjaGlsZCkgeyByZXR1cm4gY2hpbGQudXBkYXRlRnJvbVBhcmVudCgpOyB9KSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjaGlsZCk7XG4gICAgICAgICAgICB2YXIgYWN0aXZlID0gY2hpbGQuZGF0YS5uYW1lIHx8IGluZGV4O1xuICAgICAgICAgICAgaWYgKGFjdGl2ZSAhPT0gdGhpcy5kYXRhLmFjdGl2ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGFjdGl2ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==