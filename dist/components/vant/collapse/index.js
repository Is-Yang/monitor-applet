"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'collapse-item',
        type: 'descendant',
        current: 'collapse'
    },
    props: {
        value: {
            type: null,
            observer: 'updateExpanded'
        },
        accordion: {
            type: Boolean,
            observer: 'updateExpanded'
        },
        border: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        updateExpanded: function updateExpanded() {
            this.children.forEach(function (child) {
                child.updateExpanded();
            });
        },
        switch: function _switch(name, expanded) {
            var _a = this.data,
                accordion = _a.accordion,
                value = _a.value;
            if (!accordion) {
                name = expanded ? (value || []).concat(name) : (value || []).filter(function (activeName) {
                    return activeName !== name;
                });
            } else {
                name = expanded ? name : '';
            }
            this.$emit('change', name);
            this.$emit('input', name);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJjdXJyZW50IiwicHJvcHMiLCJvYnNlcnZlciIsImFjY29yZGlvbiIsIkJvb2xlYW4iLCJib3JkZXIiLCJtZXRob2RzIiwidXBkYXRlRXhwYW5kZWQiLCJjaGlsZHJlbiIsImZvckVhY2giLCJjaGlsZCIsInN3aXRjaCIsImV4cGFuZGVkIiwiX2EiLCJkYXRhIiwiY29uY2F0IiwiZmlsdGVyIiwiYWN0aXZlTmFtZSIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxjQUFVO0FBQ05DLGNBQU0sZUFEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsaUJBQVM7QUFISCxLQURZO0FBTXRCQyxXQUFPO0FBQ0hSLGVBQU87QUFDSE0sa0JBQU0sSUFESDtBQUVIRyxzQkFBVTtBQUZQLFNBREo7QUFLSEMsbUJBQVc7QUFDUEosa0JBQU1LLE9BREM7QUFFUEYsc0JBQVU7QUFGSCxTQUxSO0FBU0hHLGdCQUFRO0FBQ0pOLGtCQUFNSyxPQURGO0FBRUpYLG1CQUFPO0FBRkg7QUFUTCxLQU5lO0FBb0J0QmEsYUFBUztBQUNMQyx3QkFBZ0IsMEJBQVk7QUFDeEIsaUJBQUtDLFFBQUwsQ0FBY0MsT0FBZCxDQUFzQixVQUFVQyxLQUFWLEVBQWlCO0FBQ25DQSxzQkFBTUgsY0FBTjtBQUNILGFBRkQ7QUFHSCxTQUxJO0FBTUxJLGdCQUFRLGlCQUFVYixJQUFWLEVBQWdCYyxRQUFoQixFQUEwQjtBQUM5QixnQkFBSUMsS0FBSyxLQUFLQyxJQUFkO0FBQUEsZ0JBQW9CWCxZQUFZVSxHQUFHVixTQUFuQztBQUFBLGdCQUE4Q1YsUUFBUW9CLEdBQUdwQixLQUF6RDtBQUNBLGdCQUFJLENBQUNVLFNBQUwsRUFBZ0I7QUFDWkwsdUJBQU9jLFdBQ0QsQ0FBQ25CLFNBQVMsRUFBVixFQUFjc0IsTUFBZCxDQUFxQmpCLElBQXJCLENBREMsR0FFRCxDQUFDTCxTQUFTLEVBQVYsRUFBY3VCLE1BQWQsQ0FBcUIsVUFBVUMsVUFBVixFQUFzQjtBQUFFLDJCQUFPQSxlQUFlbkIsSUFBdEI7QUFBNkIsaUJBQTFFLENBRk47QUFHSCxhQUpELE1BS0s7QUFDREEsdUJBQU9jLFdBQVdkLElBQVgsR0FBa0IsRUFBekI7QUFDSDtBQUNELGlCQUFLb0IsS0FBTCxDQUFXLFFBQVgsRUFBcUJwQixJQUFyQjtBQUNBLGlCQUFLb0IsS0FBTCxDQUFXLE9BQVgsRUFBb0JwQixJQUFwQjtBQUNIO0FBbEJJO0FBcEJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdjb2xsYXBzZS1pdGVtJyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBjdXJyZW50OiAnY29sbGFwc2UnLFxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUV4cGFuZGVkJ1xuICAgICAgICB9LFxuICAgICAgICBhY2NvcmRpb246IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUV4cGFuZGVkJ1xuICAgICAgICB9LFxuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUV4cGFuZGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlRXhwYW5kZWQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzd2l0Y2g6IGZ1bmN0aW9uIChuYW1lLCBleHBhbmRlZCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBhY2NvcmRpb24gPSBfYS5hY2NvcmRpb24sIHZhbHVlID0gX2EudmFsdWU7XG4gICAgICAgICAgICBpZiAoIWFjY29yZGlvbikge1xuICAgICAgICAgICAgICAgIG5hbWUgPSBleHBhbmRlZFxuICAgICAgICAgICAgICAgICAgICA/ICh2YWx1ZSB8fCBbXSkuY29uY2F0KG5hbWUpXG4gICAgICAgICAgICAgICAgICAgIDogKHZhbHVlIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24gKGFjdGl2ZU5hbWUpIHsgcmV0dXJuIGFjdGl2ZU5hbWUgIT09IG5hbWU7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbmFtZSA9IGV4cGFuZGVkID8gbmFtZSA6ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgbmFtZSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIG5hbWUpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=