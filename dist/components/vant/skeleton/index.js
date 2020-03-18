"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    classes: ['avatar-class', 'title-class', 'row-class'],
    props: {
        row: {
            type: Number,
            value: 0,
            observer: function observer(value) {
                this.setData({ rowArray: Array.from({ length: value }) });
            }
        },
        title: Boolean,
        avatar: Boolean,
        loading: {
            type: Boolean,
            value: true
        },
        animate: {
            type: Boolean,
            value: true
        },
        avatarSize: {
            type: String,
            value: '32px'
        },
        avatarShape: {
            type: String,
            value: 'round'
        },
        titleWidth: {
            type: String,
            value: '40%'
        },
        rowWidth: {
            type: null,
            value: '100%',
            observer: function observer(val) {
                this.setData({ isArray: val instanceof Array });
            }
        }
    },
    data: {
        isArray: false,
        rowArray: []
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJwcm9wcyIsInJvdyIsInR5cGUiLCJOdW1iZXIiLCJvYnNlcnZlciIsInNldERhdGEiLCJyb3dBcnJheSIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsInRpdGxlIiwiQm9vbGVhbiIsImF2YXRhciIsImxvYWRpbmciLCJhbmltYXRlIiwiYXZhdGFyU2l6ZSIsIlN0cmluZyIsImF2YXRhclNoYXBlIiwidGl0bGVXaWR0aCIsInJvd1dpZHRoIiwidmFsIiwiaXNBcnJheSIsImRhdGEiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLGFBQVMsQ0FBQyxjQUFELEVBQWlCLGFBQWpCLEVBQWdDLFdBQWhDLENBRGE7QUFFdEJDLFdBQU87QUFDSEMsYUFBSztBQUNEQyxrQkFBTUMsTUFETDtBQUVEUixtQkFBTyxDQUZOO0FBR0RTLHNCQUFVLGtCQUFVVCxLQUFWLEVBQWlCO0FBQ3ZCLHFCQUFLVSxPQUFMLENBQWEsRUFBRUMsVUFBVUMsTUFBTUMsSUFBTixDQUFXLEVBQUVDLFFBQVFkLEtBQVYsRUFBWCxDQUFaLEVBQWI7QUFDSDtBQUxBLFNBREY7QUFRSGUsZUFBT0MsT0FSSjtBQVNIQyxnQkFBUUQsT0FUTDtBQVVIRSxpQkFBUztBQUNMWCxrQkFBTVMsT0FERDtBQUVMaEIsbUJBQU87QUFGRixTQVZOO0FBY0htQixpQkFBUztBQUNMWixrQkFBTVMsT0FERDtBQUVMaEIsbUJBQU87QUFGRixTQWROO0FBa0JIb0Isb0JBQVk7QUFDUmIsa0JBQU1jLE1BREU7QUFFUnJCLG1CQUFPO0FBRkMsU0FsQlQ7QUFzQkhzQixxQkFBYTtBQUNUZixrQkFBTWMsTUFERztBQUVUckIsbUJBQU87QUFGRSxTQXRCVjtBQTBCSHVCLG9CQUFZO0FBQ1JoQixrQkFBTWMsTUFERTtBQUVSckIsbUJBQU87QUFGQyxTQTFCVDtBQThCSHdCLGtCQUFVO0FBQ05qQixrQkFBTSxJQURBO0FBRU5QLG1CQUFPLE1BRkQ7QUFHTlMsc0JBQVUsa0JBQVVnQixHQUFWLEVBQWU7QUFDckIscUJBQUtmLE9BQUwsQ0FBYSxFQUFFZ0IsU0FBU0QsZUFBZWIsS0FBMUIsRUFBYjtBQUNIO0FBTEs7QUE5QlAsS0FGZTtBQXdDdEJlLFVBQU07QUFDRkQsaUJBQVMsS0FEUDtBQUVGZixrQkFBVTtBQUZSO0FBeENnQixDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBjbGFzc2VzOiBbJ2F2YXRhci1jbGFzcycsICd0aXRsZS1jbGFzcycsICdyb3ctY2xhc3MnXSxcbiAgICBwcm9wczoge1xuICAgICAgICByb3c6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHJvd0FycmF5OiBBcnJheS5mcm9tKHsgbGVuZ3RoOiB2YWx1ZSB9KSB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiBCb29sZWFuLFxuICAgICAgICBhdmF0YXI6IEJvb2xlYW4sXG4gICAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBhbmltYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgYXZhdGFyU2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICczMnB4J1xuICAgICAgICB9LFxuICAgICAgICBhdmF0YXJTaGFwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdyb3VuZCdcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGVXaWR0aDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICc0MCUnXG4gICAgICAgIH0sXG4gICAgICAgIHJvd1dpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6ICcxMDAlJyxcbiAgICAgICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgaXNBcnJheTogdmFsIGluc3RhbmNlb2YgQXJyYXkgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgaXNBcnJheTogZmFsc2UsXG4gICAgICAgIHJvd0FycmF5OiBbXSxcbiAgICB9XG59KTtcbiJdfQ==