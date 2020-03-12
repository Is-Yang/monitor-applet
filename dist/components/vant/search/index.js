"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    classes: ['field-class', 'input-class', 'cancel-class'],
    props: {
        label: String,
        focus: Boolean,
        error: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        inputAlign: String,
        showAction: Boolean,
        useActionSlot: Boolean,
        useLeftIconSlot: Boolean,
        useRightIconSlot: Boolean,
        leftIcon: {
            type: String,
            value: 'search'
        },
        rightIcon: String,
        placeholder: String,
        placeholderStyle: String,
        actionText: {
            type: String,
            value: '取消'
        },
        background: {
            type: String,
            value: '#ffffff'
        },
        maxlength: {
            type: Number,
            value: -1
        },
        shape: {
            type: String,
            value: 'square'
        },
        clearable: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onChange: function onChange(event) {
            this.setData({ value: event.detail });
            this.$emit('change', event.detail);
        },
        onCancel: function onCancel() {
            var _this = this;
            /**
             * 修复修改输入框值时，输入框失焦和赋值同时触发，赋值失效
             * https://github.com/youzan/@vant/weapp/issues/1768
             */
            setTimeout(function () {
                _this.setData({ value: '' });
                _this.$emit('cancel');
                _this.$emit('change', '');
            }, 200);
        },
        onSearch: function onSearch() {
            this.$emit('search', this.data.value);
        },
        onFocus: function onFocus() {
            this.$emit('focus');
        },
        onBlur: function onBlur() {
            this.$emit('blur');
        },
        onClear: function onClear() {
            this.$emit('clear');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwibGFiZWwiLCJTdHJpbmciLCJmb2N1cyIsIkJvb2xlYW4iLCJlcnJvciIsImRpc2FibGVkIiwicmVhZG9ubHkiLCJpbnB1dEFsaWduIiwic2hvd0FjdGlvbiIsInVzZUFjdGlvblNsb3QiLCJ1c2VMZWZ0SWNvblNsb3QiLCJ1c2VSaWdodEljb25TbG90IiwibGVmdEljb24iLCJ0eXBlIiwicmlnaHRJY29uIiwicGxhY2Vob2xkZXIiLCJwbGFjZWhvbGRlclN0eWxlIiwiYWN0aW9uVGV4dCIsImJhY2tncm91bmQiLCJtYXhsZW5ndGgiLCJOdW1iZXIiLCJzaGFwZSIsImNsZWFyYWJsZSIsIm1ldGhvZHMiLCJvbkNoYW5nZSIsImV2ZW50Iiwic2V0RGF0YSIsImRldGFpbCIsIiRlbWl0Iiwib25DYW5jZWwiLCJfdGhpcyIsInNldFRpbWVvdXQiLCJvblNlYXJjaCIsImRhdGEiLCJvbkZvY3VzIiwib25CbHVyIiwib25DbGVhciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsV0FBTyxJQURlO0FBRXRCQyxhQUFTLENBQUMsYUFBRCxFQUFnQixhQUFoQixFQUErQixjQUEvQixDQUZhO0FBR3RCQyxXQUFPO0FBQ0hDLGVBQU9DLE1BREo7QUFFSEMsZUFBT0MsT0FGSjtBQUdIQyxlQUFPRCxPQUhKO0FBSUhFLGtCQUFVRixPQUpQO0FBS0hHLGtCQUFVSCxPQUxQO0FBTUhJLG9CQUFZTixNQU5UO0FBT0hPLG9CQUFZTCxPQVBUO0FBUUhNLHVCQUFlTixPQVJaO0FBU0hPLHlCQUFpQlAsT0FUZDtBQVVIUSwwQkFBa0JSLE9BVmY7QUFXSFMsa0JBQVU7QUFDTkMsa0JBQU1aLE1BREE7QUFFTlIsbUJBQU87QUFGRCxTQVhQO0FBZUhxQixtQkFBV2IsTUFmUjtBQWdCSGMscUJBQWFkLE1BaEJWO0FBaUJIZSwwQkFBa0JmLE1BakJmO0FBa0JIZ0Isb0JBQVk7QUFDUkosa0JBQU1aLE1BREU7QUFFUlIsbUJBQU87QUFGQyxTQWxCVDtBQXNCSHlCLG9CQUFZO0FBQ1JMLGtCQUFNWixNQURFO0FBRVJSLG1CQUFPO0FBRkMsU0F0QlQ7QUEwQkgwQixtQkFBVztBQUNQTixrQkFBTU8sTUFEQztBQUVQM0IsbUJBQU8sQ0FBQztBQUZELFNBMUJSO0FBOEJINEIsZUFBTztBQUNIUixrQkFBTVosTUFESDtBQUVIUixtQkFBTztBQUZKLFNBOUJKO0FBa0NINkIsbUJBQVc7QUFDUFQsa0JBQU1WLE9BREM7QUFFUFYsbUJBQU87QUFGQTtBQWxDUixLQUhlO0FBMEN0QjhCLGFBQVM7QUFDTEMsa0JBQVUsa0JBQVVDLEtBQVYsRUFBaUI7QUFDdkIsaUJBQUtDLE9BQUwsQ0FBYSxFQUFFakMsT0FBT2dDLE1BQU1FLE1BQWYsRUFBYjtBQUNBLGlCQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFxQkgsTUFBTUUsTUFBM0I7QUFDSCxTQUpJO0FBS0xFLGtCQUFVLG9CQUFZO0FBQ2xCLGdCQUFJQyxRQUFRLElBQVo7QUFDQTs7OztBQUlBQyx1QkFBVyxZQUFZO0FBQ25CRCxzQkFBTUosT0FBTixDQUFjLEVBQUVqQyxPQUFPLEVBQVQsRUFBZDtBQUNBcUMsc0JBQU1GLEtBQU4sQ0FBWSxRQUFaO0FBQ0FFLHNCQUFNRixLQUFOLENBQVksUUFBWixFQUFzQixFQUF0QjtBQUNILGFBSkQsRUFJRyxHQUpIO0FBS0gsU0FoQkk7QUFpQkxJLGtCQUFVLG9CQUFZO0FBQ2xCLGlCQUFLSixLQUFMLENBQVcsUUFBWCxFQUFxQixLQUFLSyxJQUFMLENBQVV4QyxLQUEvQjtBQUNILFNBbkJJO0FBb0JMeUMsaUJBQVMsbUJBQVk7QUFDakIsaUJBQUtOLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0F0Qkk7QUF1QkxPLGdCQUFRLGtCQUFZO0FBQ2hCLGlCQUFLUCxLQUFMLENBQVcsTUFBWDtBQUNILFNBekJJO0FBMEJMUSxpQkFBUyxtQkFBWTtBQUNqQixpQkFBS1IsS0FBTCxDQUFXLE9BQVg7QUFDSDtBQTVCSTtBQTFDYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICBjbGFzc2VzOiBbJ2ZpZWxkLWNsYXNzJywgJ2lucHV0LWNsYXNzJywgJ2NhbmNlbC1jbGFzcyddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIGxhYmVsOiBTdHJpbmcsXG4gICAgICAgIGZvY3VzOiBCb29sZWFuLFxuICAgICAgICBlcnJvcjogQm9vbGVhbixcbiAgICAgICAgZGlzYWJsZWQ6IEJvb2xlYW4sXG4gICAgICAgIHJlYWRvbmx5OiBCb29sZWFuLFxuICAgICAgICBpbnB1dEFsaWduOiBTdHJpbmcsXG4gICAgICAgIHNob3dBY3Rpb246IEJvb2xlYW4sXG4gICAgICAgIHVzZUFjdGlvblNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIHVzZUxlZnRJY29uU2xvdDogQm9vbGVhbixcbiAgICAgICAgdXNlUmlnaHRJY29uU2xvdDogQm9vbGVhbixcbiAgICAgICAgbGVmdEljb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnc2VhcmNoJ1xuICAgICAgICB9LFxuICAgICAgICByaWdodEljb246IFN0cmluZyxcbiAgICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcbiAgICAgICAgcGxhY2Vob2xkZXJTdHlsZTogU3RyaW5nLFxuICAgICAgICBhY3Rpb25UZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ+WPlua2iCdcbiAgICAgICAgfSxcbiAgICAgICAgYmFja2dyb3VuZDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcjZmZmZmZmJ1xuICAgICAgICB9LFxuICAgICAgICBtYXhsZW5ndGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAtMVxuICAgICAgICB9LFxuICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdzcXVhcmUnXG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyYWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgdmFsdWU6IGV2ZW50LmRldGFpbCB9KTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2FuY2VsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiDkv67lpI3kv67mlLnovpPlhaXmoYblgLzml7bvvIzovpPlhaXmoYblpLHnhKblkozotYvlgLzlkIzml7bop6blj5HvvIzotYvlgLzlpLHmlYhcbiAgICAgICAgICAgICAqIGh0dHBzOi8vZ2l0aHViLmNvbS95b3V6YW4vQHZhbnQvd2VhcHAvaXNzdWVzLzE3NjhcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7IHZhbHVlOiAnJyB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnY2FuY2VsJyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuJGVtaXQoJ2NoYW5nZScsICcnKTtcbiAgICAgICAgICAgIH0sIDIwMCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2VhcmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWFyY2gnLCB0aGlzLmRhdGEudmFsdWUpO1xuICAgICAgICB9LFxuICAgICAgICBvbkZvY3VzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdmb2N1cycpO1xuICAgICAgICB9LFxuICAgICAgICBvbkJsdXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2JsdXInKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGVhcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xlYXInKTtcbiAgICAgICAgfSxcbiAgICB9XG59KTtcbiJdfQ==