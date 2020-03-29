"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    props: {
        size: String,
        mark: Boolean,
        color: String,
        plain: Boolean,
        round: Boolean,
        textColor: String,
        type: {
            type: String,
            value: 'default'
        },
        closeable: Boolean
    },
    methods: {
        onClose: function onClose() {
            this.$emit('close');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwic2l6ZSIsIlN0cmluZyIsIm1hcmsiLCJCb29sZWFuIiwiY29sb3IiLCJwbGFpbiIsInJvdW5kIiwidGV4dENvbG9yIiwidHlwZSIsImNsb3NlYWJsZSIsIm1ldGhvZHMiLCJvbkNsb3NlIiwiJGVtaXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxjQUFNQyxPQUZIO0FBR0hDLGVBQU9ILE1BSEo7QUFJSEksZUFBT0YsT0FKSjtBQUtIRyxlQUFPSCxPQUxKO0FBTUhJLG1CQUFXTixNQU5SO0FBT0hPLGNBQU07QUFDRkEsa0JBQU1QLE1BREo7QUFFRk4sbUJBQU87QUFGTCxTQVBIO0FBV0hjLG1CQUFXTjtBQVhSLEtBRGU7QUFjdEJPLGFBQVM7QUFDTEMsaUJBQVMsbUJBQVk7QUFDakIsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYO0FBQ0g7QUFISTtBQWRhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIHNpemU6IFN0cmluZyxcbiAgICAgICAgbWFyazogQm9vbGVhbixcbiAgICAgICAgY29sb3I6IFN0cmluZyxcbiAgICAgICAgcGxhaW46IEJvb2xlYW4sXG4gICAgICAgIHJvdW5kOiBCb29sZWFuLFxuICAgICAgICB0ZXh0Q29sb3I6IFN0cmluZyxcbiAgICAgICAgdHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdkZWZhdWx0J1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZWFibGU6IEJvb2xlYW5cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19