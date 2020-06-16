"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var link_1 = require('./../mixins/link.js');
var button_1 = require('./../mixins/button.js');
var open_type_1 = require('./../mixins/open-type.js');
component_1.VantComponent({
    mixins: [link_1.link, button_1.button, open_type_1.openType],
    relation: {
        type: 'ancestor',
        name: 'goods-action',
        current: 'goods-action-button'
    },
    props: {
        text: String,
        color: String,
        loading: Boolean,
        disabled: Boolean,
        plain: Boolean,
        type: {
            type: String,
            value: 'danger'
        }
    },
    mounted: function mounted() {
        this.updateStyle();
    },
    methods: {
        onClick: function onClick(event) {
            this.$emit('click', event.detail);
            this.jumpLink();
        },
        updateStyle: function updateStyle() {
            var _a = this.parent.children,
                children = _a === void 0 ? [] : _a;
            var length = children.length;
            var index = children.indexOf(this);
            this.setData({
                isFirst: index === 0,
                isLast: index === length - 1
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwibGlua18xIiwiYnV0dG9uXzEiLCJvcGVuX3R5cGVfMSIsIlZhbnRDb21wb25lbnQiLCJtaXhpbnMiLCJsaW5rIiwiYnV0dG9uIiwib3BlblR5cGUiLCJyZWxhdGlvbiIsInR5cGUiLCJuYW1lIiwiY3VycmVudCIsInByb3BzIiwidGV4dCIsIlN0cmluZyIsImNvbG9yIiwibG9hZGluZyIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsInBsYWluIiwibW91bnRlZCIsInVwZGF0ZVN0eWxlIiwibWV0aG9kcyIsIm9uQ2xpY2siLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIiwianVtcExpbmsiLCJfYSIsInBhcmVudCIsImNoaWxkcmVuIiwibGVuZ3RoIiwiaW5kZXgiLCJpbmRleE9mIiwic2V0RGF0YSIsImlzRmlyc3QiLCJpc0xhc3QiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsU0FBU0QsUUFBUSxnQkFBUixDQUFiO0FBQ0EsSUFBSUUsV0FBV0YsUUFBUSxrQkFBUixDQUFmO0FBQ0EsSUFBSUcsY0FBY0gsUUFBUSxxQkFBUixDQUFsQjtBQUNBRCxZQUFZSyxhQUFaLENBQTBCO0FBQ3RCQyxZQUFRLENBQUNKLE9BQU9LLElBQVIsRUFBY0osU0FBU0ssTUFBdkIsRUFBK0JKLFlBQVlLLFFBQTNDLENBRGM7QUFFdEJDLGNBQVU7QUFDTkMsY0FBTSxVQURBO0FBRU5DLGNBQU0sY0FGQTtBQUdOQyxpQkFBUztBQUhILEtBRlk7QUFPdEJDLFdBQU87QUFDSEMsY0FBTUMsTUFESDtBQUVIQyxlQUFPRCxNQUZKO0FBR0hFLGlCQUFTQyxPQUhOO0FBSUhDLGtCQUFVRCxPQUpQO0FBS0hFLGVBQU9GLE9BTEo7QUFNSFIsY0FBTTtBQUNGQSxrQkFBTUssTUFESjtBQUVGakIsbUJBQU87QUFGTDtBQU5ILEtBUGU7QUFrQnRCdUIsYUFBUyxtQkFBWTtBQUNqQixhQUFLQyxXQUFMO0FBQ0gsS0FwQnFCO0FBcUJ0QkMsYUFBUztBQUNMQyxpQkFBUyxpQkFBVUMsS0FBVixFQUFpQjtBQUN0QixpQkFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JELE1BQU1FLE1BQTFCO0FBQ0EsaUJBQUtDLFFBQUw7QUFDSCxTQUpJO0FBS0xOLHFCQUFhLHVCQUFZO0FBQ3JCLGdCQUFJTyxLQUFLLEtBQUtDLE1BQUwsQ0FBWUMsUUFBckI7QUFBQSxnQkFBK0JBLFdBQVdGLE9BQU8sS0FBSyxDQUFaLEdBQWdCLEVBQWhCLEdBQXFCQSxFQUEvRDtBQUNBLGdCQUFJRyxTQUFTRCxTQUFTQyxNQUF0QjtBQUNBLGdCQUFJQyxRQUFRRixTQUFTRyxPQUFULENBQWlCLElBQWpCLENBQVo7QUFDQSxpQkFBS0MsT0FBTCxDQUFhO0FBQ1RDLHlCQUFTSCxVQUFVLENBRFY7QUFFVEksd0JBQVFKLFVBQVVELFNBQVM7QUFGbEIsYUFBYjtBQUlIO0FBYkk7QUFyQmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIGxpbmtfMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvbGlua1wiKTtcbnZhciBidXR0b25fMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvYnV0dG9uXCIpO1xudmFyIG9wZW5fdHlwZV8xID0gcmVxdWlyZShcIi4uL21peGlucy9vcGVuLXR5cGVcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBtaXhpbnM6IFtsaW5rXzEubGluaywgYnV0dG9uXzEuYnV0dG9uLCBvcGVuX3R5cGVfMS5vcGVuVHlwZV0sXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgdHlwZTogJ2FuY2VzdG9yJyxcbiAgICAgICAgbmFtZTogJ2dvb2RzLWFjdGlvbicsXG4gICAgICAgIGN1cnJlbnQ6ICdnb29kcy1hY3Rpb24tYnV0dG9uJyxcbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIHRleHQ6IFN0cmluZyxcbiAgICAgICAgY29sb3I6IFN0cmluZyxcbiAgICAgICAgbG9hZGluZzogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIHBsYWluOiBCb29sZWFuLFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2RhbmdlcidcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlKCk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgdGhpcy5qdW1wTGluaygpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVTdHlsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5wYXJlbnQuY2hpbGRyZW4sIGNoaWxkcmVuID0gX2EgPT09IHZvaWQgMCA/IFtdIDogX2E7XG4gICAgICAgICAgICB2YXIgbGVuZ3RoID0gY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gY2hpbGRyZW4uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgaXNGaXJzdDogaW5kZXggPT09IDAsXG4gICAgICAgICAgICAgICAgaXNMYXN0OiBpbmRleCA9PT0gbGVuZ3RoIC0gMVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==