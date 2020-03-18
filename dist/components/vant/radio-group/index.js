"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    relation: {
        name: 'radio',
        type: 'descendant',
        current: 'radio-group',
        linked: function linked(target) {
            this.updateChild(target);
        }
    },
    props: {
        value: {
            type: null,
            observer: 'updateChildren'
        },
        disabled: {
            type: Boolean,
            observer: 'updateChildren'
        }
    },
    methods: {
        updateChildren: function updateChildren() {
            var _this = this;
            (this.children || []).forEach(function (child) {
                return _this.updateChild(child);
            });
        },
        updateChild: function updateChild(child) {
            var _a = this.data,
                value = _a.value,
                disabled = _a.disabled;
            child.setData({
                value: value,
                disabled: disabled || child.data.disabled
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImN1cnJlbnQiLCJsaW5rZWQiLCJ0YXJnZXQiLCJ1cGRhdGVDaGlsZCIsInByb3BzIiwib2JzZXJ2ZXIiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJtZXRob2RzIiwidXBkYXRlQ2hpbGRyZW4iLCJfdGhpcyIsImNoaWxkcmVuIiwiZm9yRWFjaCIsImNoaWxkIiwiX2EiLCJkYXRhIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsV0FBTyxJQURlO0FBRXRCQyxjQUFVO0FBQ05DLGNBQU0sT0FEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsaUJBQVMsYUFISDtBQUlOQyxnQkFBUSxnQkFBVUMsTUFBVixFQUFrQjtBQUN0QixpQkFBS0MsV0FBTCxDQUFpQkQsTUFBakI7QUFDSDtBQU5LLEtBRlk7QUFVdEJFLFdBQU87QUFDSFosZUFBTztBQUNITyxrQkFBTSxJQURIO0FBRUhNLHNCQUFVO0FBRlAsU0FESjtBQUtIQyxrQkFBVTtBQUNOUCxrQkFBTVEsT0FEQTtBQUVORixzQkFBVTtBQUZKO0FBTFAsS0FWZTtBQW9CdEJHLGFBQVM7QUFDTEMsd0JBQWdCLDBCQUFZO0FBQ3hCLGdCQUFJQyxRQUFRLElBQVo7QUFDQSxhQUFDLEtBQUtDLFFBQUwsSUFBaUIsRUFBbEIsRUFBc0JDLE9BQXRCLENBQThCLFVBQVVDLEtBQVYsRUFBaUI7QUFDM0MsdUJBQU9ILE1BQU1QLFdBQU4sQ0FBa0JVLEtBQWxCLENBQVA7QUFDSCxhQUZEO0FBR0gsU0FOSTtBQU9MVixxQkFBYSxxQkFBVVUsS0FBVixFQUFpQjtBQUMxQixnQkFBSUMsS0FBSyxLQUFLQyxJQUFkO0FBQUEsZ0JBQW9CdkIsUUFBUXNCLEdBQUd0QixLQUEvQjtBQUFBLGdCQUFzQ2MsV0FBV1EsR0FBR1IsUUFBcEQ7QUFDQU8sa0JBQU1HLE9BQU4sQ0FBYztBQUNWeEIsdUJBQU9BLEtBREc7QUFFVmMsMEJBQVVBLFlBQVlPLE1BQU1FLElBQU4sQ0FBV1Q7QUFGdkIsYUFBZDtBQUlIO0FBYkk7QUFwQmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3JhZGlvJyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBjdXJyZW50OiAncmFkaW8tZ3JvdXAnLFxuICAgICAgICBsaW5rZWQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGQodGFyZ2V0KTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbidcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUNoaWxkcmVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgKHRoaXMuY2hpbGRyZW4gfHwgW10pLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnVwZGF0ZUNoaWxkKGNoaWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVDaGlsZDogZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIHZhbHVlID0gX2EudmFsdWUsIGRpc2FibGVkID0gX2EuZGlzYWJsZWQ7XG4gICAgICAgICAgICBjaGlsZC5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGRpc2FibGVkIHx8IGNoaWxkLmRhdGEuZGlzYWJsZWRcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=