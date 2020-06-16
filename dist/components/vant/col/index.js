"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'row',
        type: 'ancestor',
        current: 'col'
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
        viewStyle: ''
    },
    methods: {
        setGutter: function setGutter(gutter) {
            var padding = gutter / 2 + "px";
            var viewStyle = gutter ? "padding-left: " + padding + "; padding-right: " + padding + ";" : '';
            if (viewStyle !== this.data.viewStyle) {
                this.setData({ viewStyle: viewStyle });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJjdXJyZW50IiwicHJvcHMiLCJzcGFuIiwiTnVtYmVyIiwib2Zmc2V0IiwiZGF0YSIsInZpZXdTdHlsZSIsIm1ldGhvZHMiLCJzZXRHdXR0ZXIiLCJndXR0ZXIiLCJwYWRkaW5nIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsY0FBVTtBQUNOQyxjQUFNLEtBREE7QUFFTkMsY0FBTSxVQUZBO0FBR05DLGlCQUFTO0FBSEgsS0FEWTtBQU10QkMsV0FBTztBQUNIQyxjQUFNQyxNQURIO0FBRUhDLGdCQUFRRDtBQUZMLEtBTmU7QUFVdEJFLFVBQU07QUFDRkMsbUJBQVc7QUFEVCxLQVZnQjtBQWF0QkMsYUFBUztBQUNMQyxtQkFBVyxtQkFBVUMsTUFBVixFQUFrQjtBQUN6QixnQkFBSUMsVUFBVUQsU0FBUyxDQUFULEdBQWEsSUFBM0I7QUFDQSxnQkFBSUgsWUFBWUcsU0FBUyxtQkFBbUJDLE9BQW5CLEdBQTZCLG1CQUE3QixHQUFtREEsT0FBbkQsR0FBNkQsR0FBdEUsR0FBNEUsRUFBNUY7QUFDQSxnQkFBSUosY0FBYyxLQUFLRCxJQUFMLENBQVVDLFNBQTVCLEVBQXVDO0FBQ25DLHFCQUFLSyxPQUFMLENBQWEsRUFBRUwsV0FBV0EsU0FBYixFQUFiO0FBQ0g7QUFDSjtBQVBJO0FBYmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3JvdycsXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcicsXG4gICAgICAgIGN1cnJlbnQ6ICdjb2wnLFxuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc3BhbjogTnVtYmVyLFxuICAgICAgICBvZmZzZXQ6IE51bWJlclxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICB2aWV3U3R5bGU6ICcnXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldEd1dHRlcjogZnVuY3Rpb24gKGd1dHRlcikge1xuICAgICAgICAgICAgdmFyIHBhZGRpbmcgPSBndXR0ZXIgLyAyICsgXCJweFwiO1xuICAgICAgICAgICAgdmFyIHZpZXdTdHlsZSA9IGd1dHRlciA/IFwicGFkZGluZy1sZWZ0OiBcIiArIHBhZGRpbmcgKyBcIjsgcGFkZGluZy1yaWdodDogXCIgKyBwYWRkaW5nICsgXCI7XCIgOiAnJztcbiAgICAgICAgICAgIGlmICh2aWV3U3R5bGUgIT09IHRoaXMuZGF0YS52aWV3U3R5bGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyB2aWV3U3R5bGU6IHZpZXdTdHlsZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19