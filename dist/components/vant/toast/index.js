"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    props: {
        show: Boolean,
        mask: Boolean,
        message: String,
        forbidClick: Boolean,
        zIndex: {
            type: Number,
            value: 1000
        },
        type: {
            type: String,
            value: 'text'
        },
        loadingType: {
            type: String,
            value: 'circular'
        },
        position: {
            type: String,
            value: 'middle'
        }
    },
    methods: {
        // for prevent touchmove
        noop: function noop() {}
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJtYXNrIiwibWVzc2FnZSIsIlN0cmluZyIsImZvcmJpZENsaWNrIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsImxvYWRpbmdUeXBlIiwicG9zaXRpb24iLCJtZXRob2RzIiwibm9vcCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsV0FBTztBQUNIQyxjQUFNQyxPQURIO0FBRUhDLGNBQU1ELE9BRkg7QUFHSEUsaUJBQVNDLE1BSE47QUFJSEMscUJBQWFKLE9BSlY7QUFLSEssZ0JBQVE7QUFDSkMsa0JBQU1DLE1BREY7QUFFSmIsbUJBQU87QUFGSCxTQUxMO0FBU0hZLGNBQU07QUFDRkEsa0JBQU1ILE1BREo7QUFFRlQsbUJBQU87QUFGTCxTQVRIO0FBYUhjLHFCQUFhO0FBQ1RGLGtCQUFNSCxNQURHO0FBRVRULG1CQUFPO0FBRkUsU0FiVjtBQWlCSGUsa0JBQVU7QUFDTkgsa0JBQU1ILE1BREE7QUFFTlQsbUJBQU87QUFGRDtBQWpCUCxLQURlO0FBdUJ0QmdCLGFBQVM7QUFDTDtBQUNBQyxjQUFNLGdCQUFZLENBQUc7QUFGaEI7QUF2QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2hvdzogQm9vbGVhbixcbiAgICAgICAgbWFzazogQm9vbGVhbixcbiAgICAgICAgbWVzc2FnZTogU3RyaW5nLFxuICAgICAgICBmb3JiaWRDbGljazogQm9vbGVhbixcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMTAwMFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3RleHQnXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRpbmdUeXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2NpcmN1bGFyJ1xuICAgICAgICB9LFxuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdtaWRkbGUnXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLy8gZm9yIHByZXZlbnQgdG91Y2htb3ZlXG4gICAgICAgIG5vb3A6IGZ1bmN0aW9uICgpIHsgfVxuICAgIH1cbn0pO1xuIl19