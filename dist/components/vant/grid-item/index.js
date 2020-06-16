"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require('./../mixins/link.js');
var component_1 = require('./../common/component.js');
var utils_1 = require('./../common/utils.js');
component_1.VantComponent({
    relation: {
        name: 'grid',
        type: 'ancestor',
        current: 'grid-item'
    },
    mixins: [link_1.link],
    props: {
        icon: String,
        dot: Boolean,
        info: null,
        text: String,
        useSlot: Boolean
    },
    data: {
        viewStyle: ''
    },
    mounted: function mounted() {
        this.updateStyle();
    },
    methods: {
        updateStyle: function updateStyle() {
            if (!this.parent) {
                return;
            }
            var _a = this.parent,
                data = _a.data,
                children = _a.children;
            var columnNum = data.columnNum,
                border = data.border,
                square = data.square,
                gutter = data.gutter,
                clickable = data.clickable,
                center = data.center;
            var width = 100 / columnNum + "%";
            var styleWrapper = [];
            styleWrapper.push("width: " + width);
            if (square) {
                styleWrapper.push("padding-top: " + width);
            }
            if (gutter) {
                var gutterValue = utils_1.addUnit(gutter);
                styleWrapper.push("padding-right: " + gutterValue);
                var index = children.indexOf(this);
                if (index >= columnNum) {
                    styleWrapper.push("margin-top: " + gutterValue);
                }
            }
            var contentStyle = '';
            if (square && gutter) {
                var gutterValue = utils_1.addUnit(gutter);
                contentStyle = "\n          right: " + gutterValue + ";\n          bottom: " + gutterValue + ";\n          height: auto;\n        ";
            }
            this.setData({
                viewStyle: styleWrapper.join('; '),
                contentStyle: contentStyle,
                center: center,
                border: border,
                square: square,
                gutter: gutter,
                clickable: clickable
            });
        },
        onClick: function onClick() {
            this.$emit('click');
            this.jumpLink();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibGlua18xIiwicmVxdWlyZSIsImNvbXBvbmVudF8xIiwidXRpbHNfMSIsIlZhbnRDb21wb25lbnQiLCJyZWxhdGlvbiIsIm5hbWUiLCJ0eXBlIiwiY3VycmVudCIsIm1peGlucyIsImxpbmsiLCJwcm9wcyIsImljb24iLCJTdHJpbmciLCJkb3QiLCJCb29sZWFuIiwiaW5mbyIsInRleHQiLCJ1c2VTbG90IiwiZGF0YSIsInZpZXdTdHlsZSIsIm1vdW50ZWQiLCJ1cGRhdGVTdHlsZSIsIm1ldGhvZHMiLCJwYXJlbnQiLCJfYSIsImNoaWxkcmVuIiwiY29sdW1uTnVtIiwiYm9yZGVyIiwic3F1YXJlIiwiZ3V0dGVyIiwiY2xpY2thYmxlIiwiY2VudGVyIiwid2lkdGgiLCJzdHlsZVdyYXBwZXIiLCJwdXNoIiwiZ3V0dGVyVmFsdWUiLCJhZGRVbml0IiwiaW5kZXgiLCJpbmRleE9mIiwiY29udGVudFN0eWxlIiwic2V0RGF0YSIsImpvaW4iLCJvbkNsaWNrIiwiJGVtaXQiLCJqdW1wTGluayJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLFNBQVNDLFFBQVEsZ0JBQVIsQ0FBYjtBQUNBLElBQUlDLGNBQWNELFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJRSxVQUFVRixRQUFRLGlCQUFSLENBQWQ7QUFDQUMsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsY0FBVTtBQUNOQyxjQUFNLE1BREE7QUFFTkMsY0FBTSxVQUZBO0FBR05DLGlCQUFTO0FBSEgsS0FEWTtBQU10QkMsWUFBUSxDQUFDVCxPQUFPVSxJQUFSLENBTmM7QUFPdEJDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxhQUFLQyxPQUZGO0FBR0hDLGNBQU0sSUFISDtBQUlIQyxjQUFNSixNQUpIO0FBS0hLLGlCQUFTSDtBQUxOLEtBUGU7QUFjdEJJLFVBQU07QUFDRkMsbUJBQVc7QUFEVCxLQWRnQjtBQWlCdEJDLGFBQVMsbUJBQVk7QUFDakIsYUFBS0MsV0FBTDtBQUNILEtBbkJxQjtBQW9CdEJDLGFBQVM7QUFDTEQscUJBQWEsdUJBQVk7QUFDckIsZ0JBQUksQ0FBQyxLQUFLRSxNQUFWLEVBQWtCO0FBQ2Q7QUFDSDtBQUNELGdCQUFJQyxLQUFLLEtBQUtELE1BQWQ7QUFBQSxnQkFBc0JMLE9BQU9NLEdBQUdOLElBQWhDO0FBQUEsZ0JBQXNDTyxXQUFXRCxHQUFHQyxRQUFwRDtBQUNBLGdCQUFJQyxZQUFZUixLQUFLUSxTQUFyQjtBQUFBLGdCQUFnQ0MsU0FBU1QsS0FBS1MsTUFBOUM7QUFBQSxnQkFBc0RDLFNBQVNWLEtBQUtVLE1BQXBFO0FBQUEsZ0JBQTRFQyxTQUFTWCxLQUFLVyxNQUExRjtBQUFBLGdCQUFrR0MsWUFBWVosS0FBS1ksU0FBbkg7QUFBQSxnQkFBOEhDLFNBQVNiLEtBQUthLE1BQTVJO0FBQ0EsZ0JBQUlDLFFBQVEsTUFBTU4sU0FBTixHQUFrQixHQUE5QjtBQUNBLGdCQUFJTyxlQUFlLEVBQW5CO0FBQ0FBLHlCQUFhQyxJQUFiLENBQWtCLFlBQVlGLEtBQTlCO0FBQ0EsZ0JBQUlKLE1BQUosRUFBWTtBQUNSSyw2QkFBYUMsSUFBYixDQUFrQixrQkFBa0JGLEtBQXBDO0FBQ0g7QUFDRCxnQkFBSUgsTUFBSixFQUFZO0FBQ1Isb0JBQUlNLGNBQWNqQyxRQUFRa0MsT0FBUixDQUFnQlAsTUFBaEIsQ0FBbEI7QUFDQUksNkJBQWFDLElBQWIsQ0FBa0Isb0JBQW9CQyxXQUF0QztBQUNBLG9CQUFJRSxRQUFRWixTQUFTYSxPQUFULENBQWlCLElBQWpCLENBQVo7QUFDQSxvQkFBSUQsU0FBU1gsU0FBYixFQUF3QjtBQUNwQk8saUNBQWFDLElBQWIsQ0FBa0IsaUJBQWlCQyxXQUFuQztBQUNIO0FBQ0o7QUFDRCxnQkFBSUksZUFBZSxFQUFuQjtBQUNBLGdCQUFJWCxVQUFVQyxNQUFkLEVBQXNCO0FBQ2xCLG9CQUFJTSxjQUFjakMsUUFBUWtDLE9BQVIsQ0FBZ0JQLE1BQWhCLENBQWxCO0FBQ0FVLCtCQUFlLHdCQUF3QkosV0FBeEIsR0FBc0MsdUJBQXRDLEdBQWdFQSxXQUFoRSxHQUE4RSxzQ0FBN0Y7QUFDSDtBQUNELGlCQUFLSyxPQUFMLENBQWE7QUFDVHJCLDJCQUFXYyxhQUFhUSxJQUFiLENBQWtCLElBQWxCLENBREY7QUFFVEYsOEJBQWNBLFlBRkw7QUFHVFIsd0JBQVFBLE1BSEM7QUFJVEosd0JBQVFBLE1BSkM7QUFLVEMsd0JBQVFBLE1BTEM7QUFNVEMsd0JBQVFBLE1BTkM7QUFPVEMsMkJBQVdBO0FBUEYsYUFBYjtBQVNILFNBbkNJO0FBb0NMWSxpQkFBUyxtQkFBWTtBQUNqQixpQkFBS0MsS0FBTCxDQUFXLE9BQVg7QUFDQSxpQkFBS0MsUUFBTDtBQUNIO0FBdkNJO0FBcEJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbGlua18xID0gcmVxdWlyZShcIi4uL21peGlucy9saW5rXCIpO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHNcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAnZ3JpZCcsXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcicsXG4gICAgICAgIGN1cnJlbnQ6ICdncmlkLWl0ZW0nLFxuICAgIH0sXG4gICAgbWl4aW5zOiBbbGlua18xLmxpbmtdLFxuICAgIHByb3BzOiB7XG4gICAgICAgIGljb246IFN0cmluZyxcbiAgICAgICAgZG90OiBCb29sZWFuLFxuICAgICAgICBpbmZvOiBudWxsLFxuICAgICAgICB0ZXh0OiBTdHJpbmcsXG4gICAgICAgIHVzZVNsb3Q6IEJvb2xlYW5cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgdmlld1N0eWxlOiAnJyxcbiAgICB9LFxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZSgpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGVTdHlsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMucGFyZW50LCBkYXRhID0gX2EuZGF0YSwgY2hpbGRyZW4gPSBfYS5jaGlsZHJlbjtcbiAgICAgICAgICAgIHZhciBjb2x1bW5OdW0gPSBkYXRhLmNvbHVtbk51bSwgYm9yZGVyID0gZGF0YS5ib3JkZXIsIHNxdWFyZSA9IGRhdGEuc3F1YXJlLCBndXR0ZXIgPSBkYXRhLmd1dHRlciwgY2xpY2thYmxlID0gZGF0YS5jbGlja2FibGUsIGNlbnRlciA9IGRhdGEuY2VudGVyO1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gMTAwIC8gY29sdW1uTnVtICsgXCIlXCI7XG4gICAgICAgICAgICB2YXIgc3R5bGVXcmFwcGVyID0gW107XG4gICAgICAgICAgICBzdHlsZVdyYXBwZXIucHVzaChcIndpZHRoOiBcIiArIHdpZHRoKTtcbiAgICAgICAgICAgIGlmIChzcXVhcmUpIHtcbiAgICAgICAgICAgICAgICBzdHlsZVdyYXBwZXIucHVzaChcInBhZGRpbmctdG9wOiBcIiArIHdpZHRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChndXR0ZXIpIHtcbiAgICAgICAgICAgICAgICB2YXIgZ3V0dGVyVmFsdWUgPSB1dGlsc18xLmFkZFVuaXQoZ3V0dGVyKTtcbiAgICAgICAgICAgICAgICBzdHlsZVdyYXBwZXIucHVzaChcInBhZGRpbmctcmlnaHQ6IFwiICsgZ3V0dGVyVmFsdWUpO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IGNoaWxkcmVuLmluZGV4T2YodGhpcyk7XG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID49IGNvbHVtbk51bSkge1xuICAgICAgICAgICAgICAgICAgICBzdHlsZVdyYXBwZXIucHVzaChcIm1hcmdpbi10b3A6IFwiICsgZ3V0dGVyVmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjb250ZW50U3R5bGUgPSAnJztcbiAgICAgICAgICAgIGlmIChzcXVhcmUgJiYgZ3V0dGVyKSB7XG4gICAgICAgICAgICAgICAgdmFyIGd1dHRlclZhbHVlID0gdXRpbHNfMS5hZGRVbml0KGd1dHRlcik7XG4gICAgICAgICAgICAgICAgY29udGVudFN0eWxlID0gXCJcXG4gICAgICAgICAgcmlnaHQ6IFwiICsgZ3V0dGVyVmFsdWUgKyBcIjtcXG4gICAgICAgICAgYm90dG9tOiBcIiArIGd1dHRlclZhbHVlICsgXCI7XFxuICAgICAgICAgIGhlaWdodDogYXV0bztcXG4gICAgICAgIFwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICB2aWV3U3R5bGU6IHN0eWxlV3JhcHBlci5qb2luKCc7ICcpLFxuICAgICAgICAgICAgICAgIGNvbnRlbnRTdHlsZTogY29udGVudFN0eWxlLFxuICAgICAgICAgICAgICAgIGNlbnRlcjogY2VudGVyLFxuICAgICAgICAgICAgICAgIGJvcmRlcjogYm9yZGVyLFxuICAgICAgICAgICAgICAgIHNxdWFyZTogc3F1YXJlLFxuICAgICAgICAgICAgICAgIGd1dHRlcjogZ3V0dGVyLFxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogY2xpY2thYmxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcbiAgICAgICAgICAgIHRoaXMuanVtcExpbmsoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19