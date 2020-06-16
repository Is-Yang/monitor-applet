"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var utils_1 = require('./../common/utils.js');
component_1.VantComponent({
    field: true,
    classes: ['input-class', 'right-icon-class'],
    props: {
        size: String,
        icon: String,
        label: String,
        error: Boolean,
        fixed: Boolean,
        focus: Boolean,
        center: Boolean,
        isLink: Boolean,
        leftIcon: String,
        rightIcon: String,
        disabled: Boolean,
        autosize: Boolean,
        readonly: Boolean,
        required: Boolean,
        password: Boolean,
        iconClass: String,
        clearable: Boolean,
        clickable: Boolean,
        inputAlign: String,
        placeholder: String,
        customStyle: String,
        confirmType: String,
        confirmHold: Boolean,
        holdKeyboard: Boolean,
        errorMessage: String,
        arrowDirection: String,
        placeholderStyle: String,
        errorMessageAlign: String,
        selectionEnd: {
            type: Number,
            value: -1
        },
        selectionStart: {
            type: Number,
            value: -1
        },
        showConfirmBar: {
            type: Boolean,
            value: true
        },
        adjustPosition: {
            type: Boolean,
            value: true
        },
        cursorSpacing: {
            type: Number,
            value: 50
        },
        maxlength: {
            type: Number,
            value: -1
        },
        type: {
            type: String,
            value: 'text'
        },
        border: {
            type: Boolean,
            value: true
        },
        titleWidth: {
            type: String,
            value: '90px'
        }
    },
    data: {
        focused: false,
        system: utils_1.getSystemInfoSync().system.split(' ').shift().toLowerCase()
    },
    methods: {
        onInput: function onInput(event) {
            var _this = this;
            var _a = (event.detail || {}).value,
                value = _a === void 0 ? '' : _a;
            this.setData({ value: value });
            wx.nextTick(function () {
                _this.emitChange(value);
            });
        },
        onFocus: function onFocus(event) {
            this.setData({ focused: true });
            this.$emit('focus', event.detail);
        },
        onBlur: function onBlur(event) {
            this.setData({ focused: false });
            this.$emit('blur', event.detail);
        },
        onClickIcon: function onClickIcon() {
            this.$emit('click-icon');
        },
        onClear: function onClear() {
            var _this = this;
            this.setData({ value: '' });
            wx.nextTick(function () {
                _this.emitChange('');
                _this.$emit('clear', '');
            });
        },
        onConfirm: function onConfirm() {
            this.$emit('confirm', this.data.value);
        },
        emitChange: function emitChange(value) {
            this.$emit('input', value);
            this.$emit('change', value);
        },
        noop: function noop() {}
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsIlZhbnRDb21wb25lbnQiLCJmaWVsZCIsImNsYXNzZXMiLCJwcm9wcyIsInNpemUiLCJTdHJpbmciLCJpY29uIiwibGFiZWwiLCJlcnJvciIsIkJvb2xlYW4iLCJmaXhlZCIsImZvY3VzIiwiY2VudGVyIiwiaXNMaW5rIiwibGVmdEljb24iLCJyaWdodEljb24iLCJkaXNhYmxlZCIsImF1dG9zaXplIiwicmVhZG9ubHkiLCJyZXF1aXJlZCIsInBhc3N3b3JkIiwiaWNvbkNsYXNzIiwiY2xlYXJhYmxlIiwiY2xpY2thYmxlIiwiaW5wdXRBbGlnbiIsInBsYWNlaG9sZGVyIiwiY3VzdG9tU3R5bGUiLCJjb25maXJtVHlwZSIsImNvbmZpcm1Ib2xkIiwiaG9sZEtleWJvYXJkIiwiZXJyb3JNZXNzYWdlIiwiYXJyb3dEaXJlY3Rpb24iLCJwbGFjZWhvbGRlclN0eWxlIiwiZXJyb3JNZXNzYWdlQWxpZ24iLCJzZWxlY3Rpb25FbmQiLCJ0eXBlIiwiTnVtYmVyIiwic2VsZWN0aW9uU3RhcnQiLCJzaG93Q29uZmlybUJhciIsImFkanVzdFBvc2l0aW9uIiwiY3Vyc29yU3BhY2luZyIsIm1heGxlbmd0aCIsImJvcmRlciIsInRpdGxlV2lkdGgiLCJkYXRhIiwiZm9jdXNlZCIsInN5c3RlbSIsImdldFN5c3RlbUluZm9TeW5jIiwic3BsaXQiLCJzaGlmdCIsInRvTG93ZXJDYXNlIiwibWV0aG9kcyIsIm9uSW5wdXQiLCJldmVudCIsIl90aGlzIiwiX2EiLCJkZXRhaWwiLCJzZXREYXRhIiwid3giLCJuZXh0VGljayIsImVtaXRDaGFuZ2UiLCJvbkZvY3VzIiwiJGVtaXQiLCJvbkJsdXIiLCJvbkNsaWNrSWNvbiIsIm9uQ2xlYXIiLCJvbkNvbmZpcm0iLCJub29wIl0sIm1hcHBpbmdzIjoiQUFB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TCxDQUFhLEVBQUVaLFNBQVMsSUFBWCxFQUFiO0FBQ0EsaUJBQUtpQixLQUFMLENBQVcsT0FBWCxFQUFvQlQsTUFBTUcsTUFBMUI7QUFDSCxTQVpJO0FBYUxPLGdCQUFRLGdCQUFVVixLQUFWLEVBQWlCO0FBQ3JCLGlCQUFLSSxPQUFMLENBQWEsRUFBRVosU0FBUyxLQUFYLEVBQWI7QUFDQSxpQkFBS2lCLEtBQUwsQ0FBVyxNQUFYLEVBQW1CVCxNQUFNRyxNQUF6QjtBQUNILFNBaEJJO0FBaUJMUSxxQkFBYSx1QkFBWTtBQUNyQixpQkFBS0YsS0FBTCxDQUFXLFlBQVg7QUFDSCxTQW5CSTtBQW9CTEcsaUJBQVMsbUJBQVk7QUFDakIsZ0JBQUlYLFFBQVEsSUFBWjtBQUNBLGlCQUFLRyxPQUFMLENBQWEsRUFBRTdELE9BQU8sRUFBVCxFQUFiO0FBQ0E4RCxlQUFHQyxRQUFILENBQVksWUFBWTtBQUNwQkwsc0JBQU1NLFVBQU4sQ0FBaUIsRUFBakI7QUFDQU4sc0JBQU1RLEtBQU4sQ0FBWSxPQUFaLEVBQXFCLEVBQXJCO0FBQ0gsYUFIRDtBQUlILFNBM0JJO0FBNEJMSSxtQkFBVyxxQkFBWTtBQUNuQixpQkFBS0osS0FBTCxDQUFXLFNBQVgsRUFBc0IsS0FBS2xCLElBQUwsQ0FBVWhELEtBQWhDO0FBQ0gsU0E5Qkk7QUErQkxnRSxvQkFBWSxvQkFBVWhFLEtBQVYsRUFBaUI7QUFDekIsaUJBQUtrRSxLQUFMLENBQVcsT0FBWCxFQUFvQmxFLEtBQXBCO0FBQ0EsaUJBQUtrRSxLQUFMLENBQVcsUUFBWCxFQUFxQmxFLEtBQXJCO0FBQ0gsU0FsQ0k7QUFtQ0x1RSxjQUFNLGdCQUFZLENBQUc7QUFuQ2hCO0FBekVhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciB1dGlsc18xID0gcmVxdWlyZShcIi4uL2NvbW1vbi91dGlsc1wiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIGZpZWxkOiB0cnVlLFxuICAgIGNsYXNzZXM6IFsnaW5wdXQtY2xhc3MnLCAncmlnaHQtaWNvbi1jbGFzcyddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHNpemU6IFN0cmluZyxcbiAgICAgICAgaWNvbjogU3RyaW5nLFxuICAgICAgICBsYWJlbDogU3RyaW5nLFxuICAgICAgICBlcnJvcjogQm9vbGVhbixcbiAgICAgICAgZml4ZWQ6IEJvb2xlYW4sXG4gICAgICAgIGZvY3VzOiBCb29sZWFuLFxuICAgICAgICBjZW50ZXI6IEJvb2xlYW4sXG4gICAgICAgIGlzTGluazogQm9vbGVhbixcbiAgICAgICAgbGVmdEljb246IFN0cmluZyxcbiAgICAgICAgcmlnaHRJY29uOiBTdHJpbmcsXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBhdXRvc2l6ZTogQm9vbGVhbixcbiAgICAgICAgcmVhZG9ubHk6IEJvb2xlYW4sXG4gICAgICAgIHJlcXVpcmVkOiBCb29sZWFuLFxuICAgICAgICBwYXNzd29yZDogQm9vbGVhbixcbiAgICAgICAgaWNvbkNsYXNzOiBTdHJpbmcsXG4gICAgICAgIGNsZWFyYWJsZTogQm9vbGVhbixcbiAgICAgICAgY2xpY2thYmxlOiBCb29sZWFuLFxuICAgICAgICBpbnB1dEFsaWduOiBTdHJpbmcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG4gICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgICAgIGNvbmZpcm1UeXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbmZpcm1Ib2xkOiBCb29sZWFuLFxuICAgICAgICBob2xkS2V5Ym9hcmQ6IEJvb2xlYW4sXG4gICAgICAgIGVycm9yTWVzc2FnZTogU3RyaW5nLFxuICAgICAgICBhcnJvd0RpcmVjdGlvbjogU3RyaW5nLFxuICAgICAgICBwbGFjZWhvbGRlclN0eWxlOiBTdHJpbmcsXG4gICAgICAgIGVycm9yTWVzc2FnZUFsaWduOiBTdHJpbmcsXG4gICAgICAgIHNlbGVjdGlvbkVuZDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IC0xXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdGlvblN0YXJ0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogLTFcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd0NvbmZpcm1CYXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBhZGp1c3RQb3NpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGN1cnNvclNwYWNpbmc6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiA1MFxuICAgICAgICB9LFxuICAgICAgICBtYXhsZW5ndGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAtMVxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3RleHQnXG4gICAgICAgIH0sXG4gICAgICAgIGJvcmRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlV2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnOTBweCdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBmb2N1c2VkOiBmYWxzZSxcbiAgICAgICAgc3lzdGVtOiB1dGlsc18xLmdldFN5c3RlbUluZm9TeW5jKCkuc3lzdGVtLnNwbGl0KCcgJykuc2hpZnQoKS50b0xvd2VyQ2FzZSgpXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uSW5wdXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYSA9IChldmVudC5kZXRhaWwgfHwge30pLnZhbHVlLCB2YWx1ZSA9IF9hID09PSB2b2lkIDAgPyAnJyA6IF9hO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgdmFsdWU6IHZhbHVlIH0pO1xuICAgICAgICAgICAgd3gubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLmVtaXRDaGFuZ2UodmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRm9jdXM6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgZm9jdXNlZDogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2ZvY3VzJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25CbHVyOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGZvY3VzZWQ6IGZhbHNlIH0pO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnYmx1cicsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tJY29uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljay1pY29uJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyB2YWx1ZTogJycgfSk7XG4gICAgICAgICAgICB3eC5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuZW1pdENoYW5nZSgnJyk7XG4gICAgICAgICAgICAgICAgX3RoaXMuJGVtaXQoJ2NsZWFyJywgJycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY29uZmlybScsIHRoaXMuZGF0YS52YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXRDaGFuZ2U6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIG5vb3A6IGZ1bmN0aW9uICgpIHsgfVxuICAgIH1cbn0pO1xuIl19