"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    relation: {
        name: 'checkbox',
        type: 'descendant',
        current: 'checkbox-group',
        linked: function linked(target) {
            this.updateChild(target);
        }
    },
    props: {
        max: Number,
        value: {
            type: Array,
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
                value: value.indexOf(child.data.name) !== -1,
                parentDisabled: disabled
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImN1cnJlbnQiLCJsaW5rZWQiLCJ0YXJnZXQiLCJ1cGRhdGVDaGlsZCIsInByb3BzIiwibWF4IiwiTnVtYmVyIiwiQXJyYXkiLCJvYnNlcnZlciIsImRpc2FibGVkIiwiQm9vbGVhbiIsIm1ldGhvZHMiLCJ1cGRhdGVDaGlsZHJlbiIsIl90aGlzIiwiY2hpbGRyZW4iLCJmb3JFYWNoIiwiY2hpbGQiLCJfYSIsImRhdGEiLCJzZXREYXRhIiwiaW5kZXhPZiIsInBhcmVudERpc2FibGVkIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPLElBRGU7QUFFdEJDLGNBQVU7QUFDTkMsY0FBTSxVQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxpQkFBUyxnQkFISDtBQUlOQyxnQkFBUSxnQkFBVUMsTUFBVixFQUFrQjtBQUN0QixpQkFBS0MsV0FBTCxDQUFpQkQsTUFBakI7QUFDSDtBQU5LLEtBRlk7QUFVdEJFLFdBQU87QUFDSEMsYUFBS0MsTUFERjtBQUVIZCxlQUFPO0FBQ0hPLGtCQUFNUSxLQURIO0FBRUhDLHNCQUFVO0FBRlAsU0FGSjtBQU1IQyxrQkFBVTtBQUNOVixrQkFBTVcsT0FEQTtBQUVORixzQkFBVTtBQUZKO0FBTlAsS0FWZTtBQXFCdEJHLGFBQVM7QUFDTEMsd0JBQWdCLDBCQUFZO0FBQ3hCLGdCQUFJQyxRQUFRLElBQVo7QUFDQSxhQUFDLEtBQUtDLFFBQUwsSUFBaUIsRUFBbEIsRUFBc0JDLE9BQXRCLENBQThCLFVBQVVDLEtBQVYsRUFBaUI7QUFDM0MsdUJBQU9ILE1BQU1WLFdBQU4sQ0FBa0JhLEtBQWxCLENBQVA7QUFDSCxhQUZEO0FBR0gsU0FOSTtBQU9MYixxQkFBYSxxQkFBVWEsS0FBVixFQUFpQjtBQUMxQixnQkFBSUMsS0FBSyxLQUFLQyxJQUFkO0FBQUEsZ0JBQW9CMUIsUUFBUXlCLEdBQUd6QixLQUEvQjtBQUFBLGdCQUFzQ2lCLFdBQVdRLEdBQUdSLFFBQXBEO0FBQ0FPLGtCQUFNRyxPQUFOLENBQWM7QUFDVjNCLHVCQUFPQSxNQUFNNEIsT0FBTixDQUFjSixNQUFNRSxJQUFOLENBQVdwQixJQUF6QixNQUFtQyxDQUFDLENBRGpDO0FBRVZ1QixnQ0FBZ0JaO0FBRk4sYUFBZDtBQUlIO0FBYkk7QUFyQmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2NoZWNrYm94JyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBjdXJyZW50OiAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgICBsaW5rZWQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2hpbGQodGFyZ2V0KTtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIG1heDogTnVtYmVyLFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuJ1xuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW4nXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlQ2hpbGRyZW46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAodGhpcy5jaGlsZHJlbiB8fCBbXSkuZm9yRWFjaChmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3RoaXMudXBkYXRlQ2hpbGQoY2hpbGQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUNoaWxkOiBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgdmFsdWUgPSBfYS52YWx1ZSwgZGlzYWJsZWQgPSBfYS5kaXNhYmxlZDtcbiAgICAgICAgICAgIGNoaWxkLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZS5pbmRleE9mKGNoaWxkLmRhdGEubmFtZSkgIT09IC0xLFxuICAgICAgICAgICAgICAgIHBhcmVudERpc2FibGVkOiBkaXNhYmxlZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==