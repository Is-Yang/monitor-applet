"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    props: {
        show: Boolean,
        customStyle: String,
        duration: {
            type: null,
            value: 300
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    methods: {
        onClick: function onClick() {
            this.$emit('click');
        },
        // for prevent touchmove
        noop: function noop() {}
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsImR1cmF0aW9uIiwidHlwZSIsInpJbmRleCIsIk51bWJlciIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiJGVtaXQiLCJub29wIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPO0FBQ0hDLGNBQU1DLE9BREg7QUFFSEMscUJBQWFDLE1BRlY7QUFHSEMsa0JBQVU7QUFDTkMsa0JBQU0sSUFEQTtBQUVOVixtQkFBTztBQUZELFNBSFA7QUFPSFcsZ0JBQVE7QUFDSkQsa0JBQU1FLE1BREY7QUFFSlosbUJBQU87QUFGSDtBQVBMLEtBRGU7QUFhdEJhLGFBQVM7QUFDTEMsaUJBQVMsbUJBQVk7QUFDakIsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FISTtBQUlMO0FBQ0FDLGNBQU0sZ0JBQVksQ0FBRztBQUxoQjtBQWJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIHNob3c6IEJvb2xlYW4sXG4gICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgdmFsdWU6IDMwMFxuICAgICAgICB9LFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZm9yIHByZXZlbnQgdG91Y2htb3ZlXG4gICAgICAgIG5vb3A6IGZ1bmN0aW9uICgpIHsgfVxuICAgIH1cbn0pO1xuIl19