"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'col',
        type: 'descendant',
        current: 'row',
        linked: function linked(target) {
            if (this.data.gutter) {
                target.setGutter(this.data.gutter);
            }
        }
    },
    props: {
        gutter: {
            type: Number,
            observer: 'setGutter'
        }
    },
    data: {
        viewStyle: ''
    },
    mounted: function mounted() {
        if (this.data.gutter) {
            this.setGutter();
        }
    },
    methods: {
        setGutter: function setGutter() {
            var _this = this;
            var gutter = this.data.gutter;
            var margin = "-" + Number(gutter) / 2 + "px";
            var viewStyle = gutter ? "margin-right: " + margin + "; margin-left: " + margin + ";" : '';
            this.setData({ viewStyle: viewStyle });
            this.getRelationNodes('../col/index').forEach(function (col) {
                col.setGutter(_this.data.gutter);
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJjdXJyZW50IiwibGlua2VkIiwidGFyZ2V0IiwiZGF0YSIsImd1dHRlciIsInNldEd1dHRlciIsInByb3BzIiwiTnVtYmVyIiwib2JzZXJ2ZXIiLCJ2aWV3U3R5bGUiLCJtb3VudGVkIiwibWV0aG9kcyIsIl90aGlzIiwibWFyZ2luIiwic2V0RGF0YSIsImdldFJlbGF0aW9uTm9kZXMiLCJmb3JFYWNoIiwiY29sIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxjQUFVO0FBQ05DLGNBQU0sS0FEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsaUJBQVMsS0FISDtBQUlOQyxnQkFBUSxnQkFBVUMsTUFBVixFQUFrQjtBQUN0QixnQkFBSSxLQUFLQyxJQUFMLENBQVVDLE1BQWQsRUFBc0I7QUFDbEJGLHVCQUFPRyxTQUFQLENBQWlCLEtBQUtGLElBQUwsQ0FBVUMsTUFBM0I7QUFDSDtBQUNKO0FBUkssS0FEWTtBQVd0QkUsV0FBTztBQUNIRixnQkFBUTtBQUNKTCxrQkFBTVEsTUFERjtBQUVKQyxzQkFBVTtBQUZOO0FBREwsS0FYZTtBQWlCdEJMLFVBQU07QUFDRk0sbUJBQVc7QUFEVCxLQWpCZ0I7QUFvQnRCQyxhQUFTLG1CQUFZO0FBQ2pCLFlBQUksS0FBS1AsSUFBTCxDQUFVQyxNQUFkLEVBQXNCO0FBQ2xCLGlCQUFLQyxTQUFMO0FBQ0g7QUFDSixLQXhCcUI7QUF5QnRCTSxhQUFTO0FBQ0xOLG1CQUFXLHFCQUFZO0FBQ25CLGdCQUFJTyxRQUFRLElBQVo7QUFDQSxnQkFBSVIsU0FBUyxLQUFLRCxJQUFMLENBQVVDLE1BQXZCO0FBQ0EsZ0JBQUlTLFNBQVMsTUFBTU4sT0FBT0gsTUFBUCxJQUFpQixDQUF2QixHQUEyQixJQUF4QztBQUNBLGdCQUFJSyxZQUFZTCxTQUNWLG1CQUFtQlMsTUFBbkIsR0FBNEIsaUJBQTVCLEdBQWdEQSxNQUFoRCxHQUF5RCxHQUQvQyxHQUVWLEVBRk47QUFHQSxpQkFBS0MsT0FBTCxDQUFhLEVBQUVMLFdBQVdBLFNBQWIsRUFBYjtBQUNBLGlCQUFLTSxnQkFBTCxDQUFzQixjQUF0QixFQUFzQ0MsT0FBdEMsQ0FBOEMsVUFBVUMsR0FBVixFQUFlO0FBQ3pEQSxvQkFBSVosU0FBSixDQUFjTyxNQUFNVCxJQUFOLENBQVdDLE1BQXpCO0FBQ0gsYUFGRDtBQUdIO0FBWkk7QUF6QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2NvbCcsXG4gICAgICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcbiAgICAgICAgY3VycmVudDogJ3JvdycsXG4gICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5ndXR0ZXIpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQuc2V0R3V0dGVyKHRoaXMuZGF0YS5ndXR0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBndXR0ZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIG9ic2VydmVyOiAnc2V0R3V0dGVyJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIHZpZXdTdHlsZTogJycsXG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLmRhdGEuZ3V0dGVyKSB7XG4gICAgICAgICAgICB0aGlzLnNldEd1dHRlcigpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldEd1dHRlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBndXR0ZXIgPSB0aGlzLmRhdGEuZ3V0dGVyO1xuICAgICAgICAgICAgdmFyIG1hcmdpbiA9IFwiLVwiICsgTnVtYmVyKGd1dHRlcikgLyAyICsgXCJweFwiO1xuICAgICAgICAgICAgdmFyIHZpZXdTdHlsZSA9IGd1dHRlclxuICAgICAgICAgICAgICAgID8gXCJtYXJnaW4tcmlnaHQ6IFwiICsgbWFyZ2luICsgXCI7IG1hcmdpbi1sZWZ0OiBcIiArIG1hcmdpbiArIFwiO1wiXG4gICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHZpZXdTdHlsZTogdmlld1N0eWxlIH0pO1xuICAgICAgICAgICAgdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jb2wvaW5kZXgnKS5mb3JFYWNoKGZ1bmN0aW9uIChjb2wpIHtcbiAgICAgICAgICAgICAgICBjb2wuc2V0R3V0dGVyKF90aGlzLmRhdGEuZ3V0dGVyKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=