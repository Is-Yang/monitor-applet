"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
function emit(target, value) {
    target.$emit('input', value);
    target.$emit('change', value);
}
component_1.VantComponent({
    field: true,
    relation: {
        name: 'checkbox-group',
        type: 'ancestor',
        current: 'checkbox'
    },
    classes: ['icon-class', 'label-class'],
    props: {
        value: Boolean,
        disabled: Boolean,
        useIconSlot: Boolean,
        checkedColor: String,
        labelPosition: String,
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
    data: {
        parentDisabled: false
    },
    methods: {
        emitChange: function emitChange(value) {
            if (this.parent) {
                this.setParentValue(this.parent, value);
            } else {
                emit(this, value);
            }
        },
        toggle: function toggle() {
            var _a = this.data,
                parentDisabled = _a.parentDisabled,
                disabled = _a.disabled,
                value = _a.value;
            if (!disabled && !parentDisabled) {
                this.emitChange(!value);
            }
        },
        onClickLabel: function onClickLabel() {
            var _a = this.data,
                labelDisabled = _a.labelDisabled,
                parentDisabled = _a.parentDisabled,
                disabled = _a.disabled,
                value = _a.value;
            if (!disabled && !labelDisabled && !parentDisabled) {
                this.emitChange(!value);
            }
        },
        setParentValue: function setParentValue(parent, value) {
            var parentValue = parent.data.value.slice();
            var name = this.data.name;
            var max = parent.data.max;
            if (value) {
                if (max && parentValue.length >= max) {
                    return;
                }
                if (parentValue.indexOf(name) === -1) {
                    parentValue.push(name);
                    emit(parent, parentValue);
                }
            } else {
                var index = parentValue.indexOf(name);
                if (index !== -1) {
                    parentValue.splice(index, 1);
                    emit(parent, parentValue);
                }
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiZW1pdCIsInRhcmdldCIsIiRlbWl0IiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImN1cnJlbnQiLCJjbGFzc2VzIiwicHJvcHMiLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJ1c2VJY29uU2xvdCIsImNoZWNrZWRDb2xvciIsIlN0cmluZyIsImxhYmVsUG9zaXRpb24iLCJsYWJlbERpc2FibGVkIiwic2hhcGUiLCJpY29uU2l6ZSIsImRhdGEiLCJwYXJlbnREaXNhYmxlZCIsIm1ldGhvZHMiLCJlbWl0Q2hhbmdlIiwicGFyZW50Iiwic2V0UGFyZW50VmFsdWUiLCJ0b2dnbGUiLCJfYSIsIm9uQ2xpY2tMYWJlbCIsInBhcmVudFZhbHVlIiwic2xpY2UiLCJtYXgiLCJsZW5ndGgiLCJpbmRleE9mIiwicHVzaCIsImluZGV4Iiwic3BsaWNlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLFNBQVNDLElBQVQsQ0FBY0MsTUFBZCxFQUFzQkosS0FBdEIsRUFBNkI7QUFDekJJLFdBQU9DLEtBQVAsQ0FBYSxPQUFiLEVBQXNCTCxLQUF0QjtBQUNBSSxXQUFPQyxLQUFQLENBQWEsUUFBYixFQUF1QkwsS0FBdkI7QUFDSDtBQUNEQyxZQUFZSyxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPLElBRGU7QUFFdEJDLGNBQVU7QUFDTkMsY0FBTSxnQkFEQTtBQUVOQyxjQUFNLFVBRkE7QUFHTkMsaUJBQVM7QUFISCxLQUZZO0FBT3RCQyxhQUFTLENBQUMsWUFBRCxFQUFlLGFBQWYsQ0FQYTtBQVF0QkMsV0FBTztBQUNIYixlQUFPYyxPQURKO0FBRUhDLGtCQUFVRCxPQUZQO0FBR0hFLHFCQUFhRixPQUhWO0FBSUhHLHNCQUFjQyxNQUpYO0FBS0hDLHVCQUFlRCxNQUxaO0FBTUhFLHVCQUFlTixPQU5aO0FBT0hPLGVBQU87QUFDSFgsa0JBQU1RLE1BREg7QUFFSGxCLG1CQUFPO0FBRkosU0FQSjtBQVdIc0Isa0JBQVU7QUFDTlosa0JBQU0sSUFEQTtBQUVOVixtQkFBTztBQUZEO0FBWFAsS0FSZTtBQXdCdEJ1QixVQUFNO0FBQ0ZDLHdCQUFnQjtBQURkLEtBeEJnQjtBQTJCdEJDLGFBQVM7QUFDTEMsb0JBQVksb0JBQVUxQixLQUFWLEVBQWlCO0FBQ3pCLGdCQUFJLEtBQUsyQixNQUFULEVBQWlCO0FBQ2IscUJBQUtDLGNBQUwsQ0FBb0IsS0FBS0QsTUFBekIsRUFBaUMzQixLQUFqQztBQUNILGFBRkQsTUFHSztBQUNERyxxQkFBSyxJQUFMLEVBQVdILEtBQVg7QUFDSDtBQUNKLFNBUkk7QUFTTDZCLGdCQUFRLGtCQUFZO0FBQ2hCLGdCQUFJQyxLQUFLLEtBQUtQLElBQWQ7QUFBQSxnQkFBb0JDLGlCQUFpQk0sR0FBR04sY0FBeEM7QUFBQSxnQkFBd0RULFdBQVdlLEdBQUdmLFFBQXRFO0FBQUEsZ0JBQWdGZixRQUFROEIsR0FBRzlCLEtBQTNGO0FBQ0EsZ0JBQUksQ0FBQ2UsUUFBRCxJQUFhLENBQUNTLGNBQWxCLEVBQWtDO0FBQzlCLHFCQUFLRSxVQUFMLENBQWdCLENBQUMxQixLQUFqQjtBQUNIO0FBQ0osU0FkSTtBQWVMK0Isc0JBQWMsd0JBQVk7QUFDdEIsZ0JBQUlELEtBQUssS0FBS1AsSUFBZDtBQUFBLGdCQUFvQkgsZ0JBQWdCVSxHQUFHVixhQUF2QztBQUFBLGdCQUFzREksaUJBQWlCTSxHQUFHTixjQUExRTtBQUFBLGdCQUEwRlQsV0FBV2UsR0FBR2YsUUFBeEc7QUFBQSxnQkFBa0hmLFFBQVE4QixHQUFHOUIsS0FBN0g7QUFDQSxnQkFBSSxDQUFDZSxRQUFELElBQWEsQ0FBQ0ssYUFBZCxJQUErQixDQUFDSSxjQUFwQyxFQUFvRDtBQUNoRCxxQkFBS0UsVUFBTCxDQUFnQixDQUFDMUIsS0FBakI7QUFDSDtBQUNKLFNBcEJJO0FBcUJMNEIsd0JBQWdCLHdCQUFVRCxNQUFWLEVBQWtCM0IsS0FBbEIsRUFBeUI7QUFDckMsZ0JBQUlnQyxjQUFjTCxPQUFPSixJQUFQLENBQVl2QixLQUFaLENBQWtCaUMsS0FBbEIsRUFBbEI7QUFDQSxnQkFBSXhCLE9BQU8sS0FBS2MsSUFBTCxDQUFVZCxJQUFyQjtBQUNBLGdCQUFJeUIsTUFBTVAsT0FBT0osSUFBUCxDQUFZVyxHQUF0QjtBQUNBLGdCQUFJbEMsS0FBSixFQUFXO0FBQ1Asb0JBQUlrQyxPQUFPRixZQUFZRyxNQUFaLElBQXNCRCxHQUFqQyxFQUFzQztBQUNsQztBQUNIO0FBQ0Qsb0JBQUlGLFlBQVlJLE9BQVosQ0FBb0IzQixJQUFwQixNQUE4QixDQUFDLENBQW5DLEVBQXNDO0FBQ2xDdUIsZ0NBQVlLLElBQVosQ0FBaUI1QixJQUFqQjtBQUNBTix5QkFBS3dCLE1BQUwsRUFBYUssV0FBYjtBQUNIO0FBQ0osYUFSRCxNQVNLO0FBQ0Qsb0JBQUlNLFFBQVFOLFlBQVlJLE9BQVosQ0FBb0IzQixJQUFwQixDQUFaO0FBQ0Esb0JBQUk2QixVQUFVLENBQUMsQ0FBZixFQUFrQjtBQUNkTixnQ0FBWU8sTUFBWixDQUFtQkQsS0FBbkIsRUFBMEIsQ0FBMUI7QUFDQW5DLHlCQUFLd0IsTUFBTCxFQUFhSyxXQUFiO0FBQ0g7QUFDSjtBQUNKO0FBekNJO0FBM0JhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmZ1bmN0aW9uIGVtaXQodGFyZ2V0LCB2YWx1ZSkge1xuICAgIHRhcmdldC4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgdGFyZ2V0LiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSk7XG59XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAnY2hlY2tib3gtZ3JvdXAnLFxuICAgICAgICB0eXBlOiAnYW5jZXN0b3InLFxuICAgICAgICBjdXJyZW50OiAnY2hlY2tib3gnLFxuICAgIH0sXG4gICAgY2xhc3NlczogWydpY29uLWNsYXNzJywgJ2xhYmVsLWNsYXNzJ10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IEJvb2xlYW4sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICB1c2VJY29uU2xvdDogQm9vbGVhbixcbiAgICAgICAgY2hlY2tlZENvbG9yOiBTdHJpbmcsXG4gICAgICAgIGxhYmVsUG9zaXRpb246IFN0cmluZyxcbiAgICAgICAgbGFiZWxEaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgc2hhcGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAncm91bmQnXG4gICAgICAgIH0sXG4gICAgICAgIGljb25TaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IDIwXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgcGFyZW50RGlzYWJsZWQ6IGZhbHNlXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYXJlbnRWYWx1ZSh0aGlzLnBhcmVudCwgdmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZW1pdCh0aGlzLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBwYXJlbnREaXNhYmxlZCA9IF9hLnBhcmVudERpc2FibGVkLCBkaXNhYmxlZCA9IF9hLmRpc2FibGVkLCB2YWx1ZSA9IF9hLnZhbHVlO1xuICAgICAgICAgICAgaWYgKCFkaXNhYmxlZCAmJiAhcGFyZW50RGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoIXZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja0xhYmVsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIGxhYmVsRGlzYWJsZWQgPSBfYS5sYWJlbERpc2FibGVkLCBwYXJlbnREaXNhYmxlZCA9IF9hLnBhcmVudERpc2FibGVkLCBkaXNhYmxlZCA9IF9hLmRpc2FibGVkLCB2YWx1ZSA9IF9hLnZhbHVlO1xuICAgICAgICAgICAgaWYgKCFkaXNhYmxlZCAmJiAhbGFiZWxEaXNhYmxlZCAmJiAhcGFyZW50RGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoIXZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2V0UGFyZW50VmFsdWU6IGZ1bmN0aW9uIChwYXJlbnQsIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgcGFyZW50VmFsdWUgPSBwYXJlbnQuZGF0YS52YWx1ZS5zbGljZSgpO1xuICAgICAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmRhdGEubmFtZTtcbiAgICAgICAgICAgIHZhciBtYXggPSBwYXJlbnQuZGF0YS5tYXg7XG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAobWF4ICYmIHBhcmVudFZhbHVlLmxlbmd0aCA+PSBtYXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAocGFyZW50VmFsdWUuaW5kZXhPZihuYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VmFsdWUucHVzaChuYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgZW1pdChwYXJlbnQsIHBhcmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBwYXJlbnRWYWx1ZS5pbmRleE9mKG5hbWUpO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50VmFsdWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgICAgICAgICAgZW1pdChwYXJlbnQsIHBhcmVudFZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==