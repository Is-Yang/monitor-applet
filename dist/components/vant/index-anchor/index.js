"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'index-bar',
        type: 'ancestor',
        current: 'index-anchor'
    },
    props: {
        useSlot: Boolean,
        index: null
    },
    data: {
        active: false,
        wrapperStyle: '',
        anchorStyle: ''
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJjdXJyZW50IiwicHJvcHMiLCJ1c2VTbG90IiwiQm9vbGVhbiIsImluZGV4IiwiZGF0YSIsImFjdGl2ZSIsIndyYXBwZXJTdHlsZSIsImFuY2hvclN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxjQUFVO0FBQ05DLGNBQU0sV0FEQTtBQUVOQyxjQUFNLFVBRkE7QUFHTkMsaUJBQVM7QUFISCxLQURZO0FBTXRCQyxXQUFPO0FBQ0hDLGlCQUFTQyxPQUROO0FBRUhDLGVBQU87QUFGSixLQU5lO0FBVXRCQyxVQUFNO0FBQ0ZDLGdCQUFRLEtBRE47QUFFRkMsc0JBQWMsRUFGWjtBQUdGQyxxQkFBYTtBQUhYO0FBVmdCLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdpbmRleC1iYXInLFxuICAgICAgICB0eXBlOiAnYW5jZXN0b3InLFxuICAgICAgICBjdXJyZW50OiAnaW5kZXgtYW5jaG9yJyxcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIHVzZVNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIGluZGV4OiBudWxsXG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICAgIHdyYXBwZXJTdHlsZTogJycsXG4gICAgICAgIGFuY2hvclN0eWxlOiAnJ1xuICAgIH1cbn0pO1xuIl19