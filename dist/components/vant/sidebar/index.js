"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    relation: {
        name: 'sidebar-item',
        type: 'descendant',
        current: 'sidebar',
        linked: function linked() {
            this.setActive(this.data.activeKey);
        },
        unlinked: function unlinked() {
            this.setActive(this.data.activeKey);
        }
    },
    props: {
        activeKey: {
            type: Number,
            value: 0,
            observer: 'setActive'
        }
    },
    beforeCreate: function beforeCreate() {
        this.currentActive = -1;
    },
    methods: {
        setActive: function setActive(activeKey) {
            var _a = this,
                children = _a.children,
                currentActive = _a.currentActive;
            if (!children.length) {
                return Promise.resolve();
            }
            this.currentActive = activeKey;
            var stack = [];
            if (currentActive !== activeKey && children[currentActive]) {
                stack.push(children[currentActive].setActive(false));
            }
            if (children[activeKey]) {
                stack.push(children[activeKey].setActive(true));
            }
            return Promise.all(stack);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJjdXJyZW50IiwibGlua2VkIiwic2V0QWN0aXZlIiwiZGF0YSIsImFjdGl2ZUtleSIsInVubGlua2VkIiwicHJvcHMiLCJOdW1iZXIiLCJvYnNlcnZlciIsImJlZm9yZUNyZWF0ZSIsImN1cnJlbnRBY3RpdmUiLCJtZXRob2RzIiwiX2EiLCJjaGlsZHJlbiIsImxlbmd0aCIsIlByb21pc2UiLCJyZXNvbHZlIiwic3RhY2siLCJwdXNoIiwiYWxsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZRSxhQUFaLENBQTBCO0FBQ3RCQyxjQUFVO0FBQ05DLGNBQU0sY0FEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsaUJBQVMsU0FISDtBQUlOQyxnQkFBUSxrQkFBWTtBQUNoQixpQkFBS0MsU0FBTCxDQUFlLEtBQUtDLElBQUwsQ0FBVUMsU0FBekI7QUFDSCxTQU5LO0FBT05DLGtCQUFVLG9CQUFZO0FBQ2xCLGlCQUFLSCxTQUFMLENBQWUsS0FBS0MsSUFBTCxDQUFVQyxTQUF6QjtBQUNIO0FBVEssS0FEWTtBQVl0QkUsV0FBTztBQUNIRixtQkFBVztBQUNQTCxrQkFBTVEsTUFEQztBQUVQZCxtQkFBTyxDQUZBO0FBR1BlLHNCQUFVO0FBSEg7QUFEUixLQVplO0FBbUJ0QkMsa0JBQWMsd0JBQVk7QUFDdEIsYUFBS0MsYUFBTCxHQUFxQixDQUFDLENBQXRCO0FBQ0gsS0FyQnFCO0FBc0J0QkMsYUFBUztBQUNMVCxtQkFBVyxtQkFBVUUsU0FBVixFQUFxQjtBQUM1QixnQkFBSVEsS0FBSyxJQUFUO0FBQUEsZ0JBQWVDLFdBQVdELEdBQUdDLFFBQTdCO0FBQUEsZ0JBQXVDSCxnQkFBZ0JFLEdBQUdGLGFBQTFEO0FBQ0EsZ0JBQUksQ0FBQ0csU0FBU0MsTUFBZCxFQUFzQjtBQUNsQix1QkFBT0MsUUFBUUMsT0FBUixFQUFQO0FBQ0g7QUFDRCxpQkFBS04sYUFBTCxHQUFxQk4sU0FBckI7QUFDQSxnQkFBSWEsUUFBUSxFQUFaO0FBQ0EsZ0JBQUlQLGtCQUFrQk4sU0FBbEIsSUFBK0JTLFNBQVNILGFBQVQsQ0FBbkMsRUFBNEQ7QUFDeERPLHNCQUFNQyxJQUFOLENBQVdMLFNBQVNILGFBQVQsRUFBd0JSLFNBQXhCLENBQWtDLEtBQWxDLENBQVg7QUFDSDtBQUNELGdCQUFJVyxTQUFTVCxTQUFULENBQUosRUFBeUI7QUFDckJhLHNCQUFNQyxJQUFOLENBQVdMLFNBQVNULFNBQVQsRUFBb0JGLFNBQXBCLENBQThCLElBQTlCLENBQVg7QUFDSDtBQUNELG1CQUFPYSxRQUFRSSxHQUFSLENBQVlGLEtBQVosQ0FBUDtBQUNIO0FBZkk7QUF0QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3NpZGViYXItaXRlbScsXG4gICAgICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcbiAgICAgICAgY3VycmVudDogJ3NpZGViYXInLFxuICAgICAgICBsaW5rZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aXZlKHRoaXMuZGF0YS5hY3RpdmVLZXkpO1xuICAgICAgICB9LFxuICAgICAgICB1bmxpbmtlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zZXRBY3RpdmUodGhpcy5kYXRhLmFjdGl2ZUtleSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGFjdGl2ZUtleToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldEFjdGl2ZSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZSA9IC0xO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZXRBY3RpdmU6IGZ1bmN0aW9uIChhY3RpdmVLZXkpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIGNoaWxkcmVuID0gX2EuY2hpbGRyZW4sIGN1cnJlbnRBY3RpdmUgPSBfYS5jdXJyZW50QWN0aXZlO1xuICAgICAgICAgICAgaWYgKCFjaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBY3RpdmUgPSBhY3RpdmVLZXk7XG4gICAgICAgICAgICB2YXIgc3RhY2sgPSBbXTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50QWN0aXZlICE9PSBhY3RpdmVLZXkgJiYgY2hpbGRyZW5bY3VycmVudEFjdGl2ZV0pIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkcmVuW2N1cnJlbnRBY3RpdmVdLnNldEFjdGl2ZShmYWxzZSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNoaWxkcmVuW2FjdGl2ZUtleV0pIHtcbiAgICAgICAgICAgICAgICBzdGFjay5wdXNoKGNoaWxkcmVuW2FjdGl2ZUtleV0uc2V0QWN0aXZlKHRydWUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzdGFjayk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==