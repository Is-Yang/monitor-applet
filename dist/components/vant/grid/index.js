"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var utils_1 = require('./../common/utils.js');
component_1.VantComponent({
    relation: {
        name: 'grid-item',
        type: 'descendant',
        current: 'grid'
    },
    props: {
        square: {
            type: Boolean,
            observer: 'updateChildren'
        },
        gutter: {
            type: [Number, String],
            value: 0,
            observer: 'updateChildren'
        },
        clickable: {
            type: Boolean,
            observer: 'updateChildren'
        },
        columnNum: {
            type: Number,
            value: 4,
            observer: 'updateChildren'
        },
        center: {
            type: Boolean,
            value: true,
            observer: 'updateChildren'
        },
        border: {
            type: Boolean,
            value: true,
            observer: 'updateChildren'
        }
    },
    data: {
        viewStyle: ''
    },
    created: function created() {
        var gutter = this.data.gutter;
        if (gutter) {
            this.setData({
                viewStyle: "padding-left: " + utils_1.addUnit(gutter)
            });
        }
    },
    methods: {
        updateChildren: function updateChildren() {
            this.children.forEach(function (child) {
                child.updateStyle();
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsIlZhbnRDb21wb25lbnQiLCJyZWxhdGlvbiIsIm5hbWUiLCJ0eXBlIiwiY3VycmVudCIsInByb3BzIiwic3F1YXJlIiwiQm9vbGVhbiIsIm9ic2VydmVyIiwiZ3V0dGVyIiwiTnVtYmVyIiwiU3RyaW5nIiwiY2xpY2thYmxlIiwiY29sdW1uTnVtIiwiY2VudGVyIiwiYm9yZGVyIiwiZGF0YSIsInZpZXdTdHlsZSIsImNyZWF0ZWQiLCJzZXREYXRhIiwiYWRkVW5pdCIsIm1ldGhvZHMiLCJ1cGRhdGVDaGlsZHJlbiIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwidXBkYXRlU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxpQkFBUixDQUFkO0FBQ0FELFlBQVlHLGFBQVosQ0FBMEI7QUFDdEJDLGNBQVU7QUFDTkMsY0FBTSxXQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxpQkFBUztBQUhILEtBRFk7QUFNdEJDLFdBQU87QUFDSEMsZ0JBQVE7QUFDSkgsa0JBQU1JLE9BREY7QUFFSkMsc0JBQVU7QUFGTixTQURMO0FBS0hDLGdCQUFRO0FBQ0pOLGtCQUFNLENBQUNPLE1BQUQsRUFBU0MsTUFBVCxDQURGO0FBRUpmLG1CQUFPLENBRkg7QUFHSlksc0JBQVU7QUFITixTQUxMO0FBVUhJLG1CQUFXO0FBQ1BULGtCQUFNSSxPQURDO0FBRVBDLHNCQUFVO0FBRkgsU0FWUjtBQWNISyxtQkFBVztBQUNQVixrQkFBTU8sTUFEQztBQUVQZCxtQkFBTyxDQUZBO0FBR1BZLHNCQUFVO0FBSEgsU0FkUjtBQW1CSE0sZ0JBQVE7QUFDSlgsa0JBQU1JLE9BREY7QUFFSlgsbUJBQU8sSUFGSDtBQUdKWSxzQkFBVTtBQUhOLFNBbkJMO0FBd0JITyxnQkFBUTtBQUNKWixrQkFBTUksT0FERjtBQUVKWCxtQkFBTyxJQUZIO0FBR0pZLHNCQUFVO0FBSE47QUF4QkwsS0FOZTtBQW9DdEJRLFVBQU07QUFDRkMsbUJBQVc7QUFEVCxLQXBDZ0I7QUF1Q3RCQyxhQUFTLG1CQUFZO0FBQ2pCLFlBQUlULFNBQVMsS0FBS08sSUFBTCxDQUFVUCxNQUF2QjtBQUNBLFlBQUlBLE1BQUosRUFBWTtBQUNSLGlCQUFLVSxPQUFMLENBQWE7QUFDVEYsMkJBQVcsbUJBQW1CbEIsUUFBUXFCLE9BQVIsQ0FBZ0JYLE1BQWhCO0FBRHJCLGFBQWI7QUFHSDtBQUNKLEtBOUNxQjtBQStDdEJZLGFBQVM7QUFDTEMsd0JBQWdCLDBCQUFZO0FBQ3hCLGlCQUFLQyxRQUFMLENBQWNDLE9BQWQsQ0FBc0IsVUFBVUMsS0FBVixFQUFpQjtBQUNuQ0Esc0JBQU1DLFdBQU47QUFDSCxhQUZEO0FBR0g7QUFMSTtBQS9DYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHNcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAnZ3JpZC1pdGVtJyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBjdXJyZW50OiAnZ3JpZCcsXG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBzcXVhcmU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xuICAgICAgICB9LFxuICAgICAgICBndXR0ZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGNsaWNrYWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGNvbHVtbk51bToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDQsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xuICAgICAgICB9LFxuICAgICAgICBjZW50ZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXG4gICAgICAgIH0sXG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICB2aWV3U3R5bGU6ICcnLFxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZ3V0dGVyID0gdGhpcy5kYXRhLmd1dHRlcjtcbiAgICAgICAgaWYgKGd1dHRlcikge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICB2aWV3U3R5bGU6IFwicGFkZGluZy1sZWZ0OiBcIiArIHV0aWxzXzEuYWRkVW5pdChndXR0ZXIpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGVDaGlsZHJlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZVN0eWxlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19