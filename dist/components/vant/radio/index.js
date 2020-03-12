"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    relation: {
        name: 'radio-group',
        type: 'ancestor',
        current: 'radio'
    },
    classes: ['icon-class', 'label-class'],
    props: {
        name: null,
        value: null,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: {
            type: String,
            value: 'right'
        },
        labelDisabled: Boolean,
        shape: {
            type: String,
            value: 'round'
        },
        iconSize: {
            type: null,
            value: 20
        }
    },
    methods: {
        emitChange: function emitChange(value) {
            var instance = this.parent || this;
            instance.$emit('input', value);
            instance.$emit('change', value);
        },
        onChange: function onChange() {
            if (!this.data.disabled) {
                this.emitChange(this.data.name);
            }
        },
        onClickLabel: function onClickLabel() {
            var _a = this.data,
                disabled = _a.disabled,
                labelDisabled = _a.labelDisabled,
                name = _a.name;
            if (!disabled && !labelDisabled) {
                this.emitChange(name);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImN1cnJlbnQiLCJjbGFzc2VzIiwicHJvcHMiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJ1c2VJY29uU2xvdCIsImNoZWNrZWRDb2xvciIsIlN0cmluZyIsImxhYmVsUG9zaXRpb24iLCJsYWJlbERpc2FibGVkIiwic2hhcGUiLCJpY29uU2l6ZSIsIm1ldGhvZHMiLCJlbWl0Q2hhbmdlIiwiaW5zdGFuY2UiLCJwYXJlbnQiLCIkZW1pdCIsIm9uQ2hhbmdlIiwiZGF0YSIsIm9uQ2xpY2tMYWJlbCIsIl9hIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPLElBRGU7QUFFdEJDLGNBQVU7QUFDTkMsY0FBTSxhQURBO0FBRU5DLGNBQU0sVUFGQTtBQUdOQyxpQkFBUztBQUhILEtBRlk7QUFPdEJDLGFBQVMsQ0FBQyxZQUFELEVBQWUsYUFBZixDQVBhO0FBUXRCQyxXQUFPO0FBQ0hKLGNBQU0sSUFESDtBQUVITixlQUFPLElBRko7QUFHSFcsa0JBQVVDLE9BSFA7QUFJSEMscUJBQWFELE9BSlY7QUFLSEUsc0JBQWNDLE1BTFg7QUFNSEMsdUJBQWU7QUFDWFQsa0JBQU1RLE1BREs7QUFFWGYsbUJBQU87QUFGSSxTQU5aO0FBVUhpQix1QkFBZUwsT0FWWjtBQVdITSxlQUFPO0FBQ0hYLGtCQUFNUSxNQURIO0FBRUhmLG1CQUFPO0FBRkosU0FYSjtBQWVIbUIsa0JBQVU7QUFDTlosa0JBQU0sSUFEQTtBQUVOUCxtQkFBTztBQUZEO0FBZlAsS0FSZTtBQTRCdEJvQixhQUFTO0FBQ0xDLG9CQUFZLG9CQUFVckIsS0FBVixFQUFpQjtBQUN6QixnQkFBSXNCLFdBQVcsS0FBS0MsTUFBTCxJQUFlLElBQTlCO0FBQ0FELHFCQUFTRSxLQUFULENBQWUsT0FBZixFQUF3QnhCLEtBQXhCO0FBQ0FzQixxQkFBU0UsS0FBVCxDQUFlLFFBQWYsRUFBeUJ4QixLQUF6QjtBQUNILFNBTEk7QUFNTHlCLGtCQUFVLG9CQUFZO0FBQ2xCLGdCQUFJLENBQUMsS0FBS0MsSUFBTCxDQUFVZixRQUFmLEVBQXlCO0FBQ3JCLHFCQUFLVSxVQUFMLENBQWdCLEtBQUtLLElBQUwsQ0FBVXBCLElBQTFCO0FBQ0g7QUFDSixTQVZJO0FBV0xxQixzQkFBYyx3QkFBWTtBQUN0QixnQkFBSUMsS0FBSyxLQUFLRixJQUFkO0FBQUEsZ0JBQW9CZixXQUFXaUIsR0FBR2pCLFFBQWxDO0FBQUEsZ0JBQTRDTSxnQkFBZ0JXLEdBQUdYLGFBQS9EO0FBQUEsZ0JBQThFWCxPQUFPc0IsR0FBR3RCLElBQXhGO0FBQ0EsZ0JBQUksQ0FBQ0ssUUFBRCxJQUFhLENBQUNNLGFBQWxCLEVBQWlDO0FBQzdCLHFCQUFLSSxVQUFMLENBQWdCZixJQUFoQjtBQUNIO0FBQ0o7QUFoQkk7QUE1QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgZmllbGQ6IHRydWUsXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3JhZGlvLWdyb3VwJyxcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJyxcbiAgICAgICAgY3VycmVudDogJ3JhZGlvJyxcbiAgICB9LFxuICAgIGNsYXNzZXM6IFsnaWNvbi1jbGFzcycsICdsYWJlbC1jbGFzcyddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIG5hbWU6IG51bGwsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgdXNlSWNvblNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIGNoZWNrZWRDb2xvcjogU3RyaW5nLFxuICAgICAgICBsYWJlbFBvc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3JpZ2h0J1xuICAgICAgICB9LFxuICAgICAgICBsYWJlbERpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdyb3VuZCdcbiAgICAgICAgfSxcbiAgICAgICAgaWNvblNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogMjBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMucGFyZW50IHx8IHRoaXM7XG4gICAgICAgICAgICBpbnN0YW5jZS4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgICAgICAgICBpbnN0YW5jZS4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2UodGhpcy5kYXRhLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrTGFiZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgZGlzYWJsZWQgPSBfYS5kaXNhYmxlZCwgbGFiZWxEaXNhYmxlZCA9IF9hLmxhYmVsRGlzYWJsZWQsIG5hbWUgPSBfYS5uYW1lO1xuICAgICAgICAgICAgaWYgKCFkaXNhYmxlZCAmJiAhbGFiZWxEaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdENoYW5nZShuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19