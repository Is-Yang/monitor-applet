"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var color_1 = require('./../common/color.js');
component_1.VantComponent({
    classes: ['desc-class'],
    props: {
        icon: String,
        steps: Array,
        active: Number,
        direction: {
            type: String,
            value: 'horizontal'
        },
        activeColor: {
            type: String,
            value: color_1.GREEN
        },
        inactiveColor: {
            type: String,
            value: color_1.GRAY_DARK
        },
        activeIcon: {
            type: String,
            value: 'checked'
        },
        inactiveIcon: String
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiY29sb3JfMSIsIlZhbnRDb21wb25lbnQiLCJjbGFzc2VzIiwicHJvcHMiLCJpY29uIiwiU3RyaW5nIiwic3RlcHMiLCJBcnJheSIsImFjdGl2ZSIsIk51bWJlciIsImRpcmVjdGlvbiIsInR5cGUiLCJhY3RpdmVDb2xvciIsIkdSRUVOIiwiaW5hY3RpdmVDb2xvciIsIkdSQVlfREFSSyIsImFjdGl2ZUljb24iLCJpbmFjdGl2ZUljb24iXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxpQkFBUixDQUFkO0FBQ0FELFlBQVlHLGFBQVosQ0FBMEI7QUFDdEJDLGFBQVMsQ0FBQyxZQUFELENBRGE7QUFFdEJDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxlQUFPQyxLQUZKO0FBR0hDLGdCQUFRQyxNQUhMO0FBSUhDLG1CQUFXO0FBQ1BDLGtCQUFNTixNQURDO0FBRVBSLG1CQUFPO0FBRkEsU0FKUjtBQVFIZSxxQkFBYTtBQUNURCxrQkFBTU4sTUFERztBQUVUUixtQkFBT0csUUFBUWE7QUFGTixTQVJWO0FBWUhDLHVCQUFlO0FBQ1hILGtCQUFNTixNQURLO0FBRVhSLG1CQUFPRyxRQUFRZTtBQUZKLFNBWlo7QUFnQkhDLG9CQUFZO0FBQ1JMLGtCQUFNTixNQURFO0FBRVJSLG1CQUFPO0FBRkMsU0FoQlQ7QUFvQkhvQixzQkFBY1o7QUFwQlg7QUFGZSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgY29sb3JfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29sb3JcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBjbGFzc2VzOiBbJ2Rlc2MtY2xhc3MnXSxcbiAgICBwcm9wczoge1xuICAgICAgICBpY29uOiBTdHJpbmcsXG4gICAgICAgIHN0ZXBzOiBBcnJheSxcbiAgICAgICAgYWN0aXZlOiBOdW1iZXIsXG4gICAgICAgIGRpcmVjdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdob3Jpem9udGFsJ1xuICAgICAgICB9LFxuICAgICAgICBhY3RpdmVDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IGNvbG9yXzEuR1JFRU5cbiAgICAgICAgfSxcbiAgICAgICAgaW5hY3RpdmVDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IGNvbG9yXzEuR1JBWV9EQVJLXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZUljb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnY2hlY2tlZCdcbiAgICAgICAgfSxcbiAgICAgICAgaW5hY3RpdmVJY29uOiBTdHJpbmdcbiAgICB9XG59KTtcbiJdfQ==