"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    classes: ['active-class', 'disabled-class'],
    relation: {
        type: 'ancestor',
        name: 'sidebar',
        current: 'sidebar-item'
    },
    props: {
        dot: Boolean,
        info: null,
        title: String,
        disabled: Boolean
    },
    methods: {
        onClick: function onClick() {
            var _this = this;
            var parent = this.parent;
            if (!parent || this.data.disabled) {
                return;
            }
            var index = parent.children.indexOf(this);
            parent.setActive(index).then(function () {
                _this.$emit('click', index);
                parent.$emit('change', index);
            });
        },
        setActive: function setActive(selected) {
            return this.setData({ selected: selected });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJyZWxhdGlvbiIsInR5cGUiLCJuYW1lIiwiY3VycmVudCIsInByb3BzIiwiZG90IiwiQm9vbGVhbiIsImluZm8iLCJ0aXRsZSIsIlN0cmluZyIsImRpc2FibGVkIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJfdGhpcyIsInBhcmVudCIsImRhdGEiLCJpbmRleCIsImNoaWxkcmVuIiwiaW5kZXhPZiIsInNldEFjdGl2ZSIsInRoZW4iLCIkZW1pdCIsInNlbGVjdGVkIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsYUFBUyxDQUNMLGNBREssRUFFTCxnQkFGSyxDQURhO0FBS3RCQyxjQUFVO0FBQ05DLGNBQU0sVUFEQTtBQUVOQyxjQUFNLFNBRkE7QUFHTkMsaUJBQVM7QUFISCxLQUxZO0FBVXRCQyxXQUFPO0FBQ0hDLGFBQUtDLE9BREY7QUFFSEMsY0FBTSxJQUZIO0FBR0hDLGVBQU9DLE1BSEo7QUFJSEMsa0JBQVVKO0FBSlAsS0FWZTtBQWdCdEJLLGFBQVM7QUFDTEMsaUJBQVMsbUJBQVk7QUFDakIsZ0JBQUlDLFFBQVEsSUFBWjtBQUNBLGdCQUFJQyxTQUFTLEtBQUtBLE1BQWxCO0FBQ0EsZ0JBQUksQ0FBQ0EsTUFBRCxJQUFXLEtBQUtDLElBQUwsQ0FBVUwsUUFBekIsRUFBbUM7QUFDL0I7QUFDSDtBQUNELGdCQUFJTSxRQUFRRixPQUFPRyxRQUFQLENBQWdCQyxPQUFoQixDQUF3QixJQUF4QixDQUFaO0FBQ0FKLG1CQUFPSyxTQUFQLENBQWlCSCxLQUFqQixFQUF3QkksSUFBeEIsQ0FBNkIsWUFBWTtBQUNyQ1Asc0JBQU1RLEtBQU4sQ0FBWSxPQUFaLEVBQXFCTCxLQUFyQjtBQUNBRix1QkFBT08sS0FBUCxDQUFhLFFBQWIsRUFBdUJMLEtBQXZCO0FBQ0gsYUFIRDtBQUlILFNBWkk7QUFhTEcsbUJBQVcsbUJBQVVHLFFBQVYsRUFBb0I7QUFDM0IsbUJBQU8sS0FBS0MsT0FBTCxDQUFhLEVBQUVELFVBQVVBLFFBQVosRUFBYixDQUFQO0FBQ0g7QUFmSTtBQWhCYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBjbGFzc2VzOiBbXG4gICAgICAgICdhY3RpdmUtY2xhc3MnLFxuICAgICAgICAnZGlzYWJsZWQtY2xhc3MnLFxuICAgIF0sXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJyxcbiAgICAgICAgbmFtZTogJ3NpZGViYXInLFxuICAgICAgICBjdXJyZW50OiAnc2lkZWJhci1pdGVtJyxcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGRvdDogQm9vbGVhbixcbiAgICAgICAgaW5mbzogbnVsbCxcbiAgICAgICAgdGl0bGU6IFN0cmluZyxcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW5cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSB0aGlzLnBhcmVudDtcbiAgICAgICAgICAgIGlmICghcGFyZW50IHx8IHRoaXMuZGF0YS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgcGFyZW50LnNldEFjdGl2ZShpbmRleCkudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuJGVtaXQoJ2NsaWNrJywgaW5kZXgpO1xuICAgICAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnY2hhbmdlJywgaW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldEFjdGl2ZTogZnVuY3Rpb24gKHNlbGVjdGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXREYXRhKHsgc2VsZWN0ZWQ6IHNlbGVjdGVkIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=