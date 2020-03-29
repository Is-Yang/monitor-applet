"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    field: true,
    relation: {
        name: 'dropdown-menu',
        type: 'ancestor',
        current: 'dropdown-item',
        linked: function linked() {
            this.updateDataFromParent();
        }
    },
    props: {
        value: {
            type: null,
            observer: 'rerender'
        },
        title: {
            type: String,
            observer: 'rerender'
        },
        disabled: Boolean,
        titleClass: {
            type: String,
            observer: 'rerender'
        },
        options: {
            type: Array,
            value: [],
            observer: 'rerender'
        },
        popupStyle: String
    },
    data: {
        transition: true,
        showPopup: false,
        showWrapper: false,
        displayTitle: ''
    },
    methods: {
        rerender: function rerender() {
            var _this = this;
            wx.nextTick(function () {
                _this.parent && _this.parent.updateItemListData();
            });
        },
        updateDataFromParent: function updateDataFromParent() {
            if (this.parent) {
                var _a = this.parent.data,
                    overlay = _a.overlay,
                    duration = _a.duration,
                    activeColor = _a.activeColor,
                    closeOnClickOverlay = _a.closeOnClickOverlay,
                    direction = _a.direction;
                this.setData({
                    overlay: overlay,
                    duration: duration,
                    activeColor: activeColor,
                    closeOnClickOverlay: closeOnClickOverlay,
                    direction: direction
                });
            }
        },
        onOpen: function onOpen() {
            this.$emit('open');
        },
        onOpened: function onOpened() {
            this.$emit('opened');
        },
        onClose: function onClose() {
            this.$emit('close');
        },
        onClosed: function onClosed() {
            this.$emit('closed');
            this.setData({ showWrapper: false });
        },
        onOptionTap: function onOptionTap(event) {
            var option = event.currentTarget.dataset.option;
            var value = option.value;
            var shouldEmitChange = this.data.value !== value;
            this.setData({ showPopup: false, value: value });
            this.$emit('close');
            this.rerender();
            if (shouldEmitChange) {
                this.$emit('change', value);
            }
        },
        toggle: function toggle(show, options) {
            var _this = this;
            if (options === void 0) {
                options = {};
            }
            var showPopup = this.data.showPopup;
            if (typeof show !== 'boolean') {
                show = !showPopup;
            }
            if (show === showPopup) {
                return;
            }
            this.setData({
                transition: !options.immediate,
                showPopup: show
            });
            if (show) {
                this.parent.getChildWrapperStyle().then(function (wrapperStyle) {
                    _this.setData({ wrapperStyle: wrapperStyle, showWrapper: true });
                    _this.rerender();
                });
            } else {
                this.rerender();
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImN1cnJlbnQiLCJsaW5rZWQiLCJ1cGRhdGVEYXRhRnJvbVBhcmVudCIsInByb3BzIiwib2JzZXJ2ZXIiLCJ0aXRsZSIsIlN0cmluZyIsImRpc2FibGVkIiwiQm9vbGVhbiIsInRpdGxlQ2xhc3MiLCJvcHRpb25zIiwiQXJyYXkiLCJwb3B1cFN0eWxlIiwiZGF0YSIsInRyYW5zaXRpb24iLCJzaG93UG9wdXAiLCJzaG93V3JhcHBlciIsImRpc3BsYXlUaXRsZSIsIm1ldGhvZHMiLCJyZXJlbmRlciIsIl90aGlzIiwid3giLCJuZXh0VGljayIsInBhcmVudCIsInVwZGF0ZUl0ZW1MaXN0RGF0YSIsIl9hIiwib3ZlcmxheSIsImR1cmF0aW9uIiwiYWN0aXZlQ29sb3IiLCJjbG9zZU9uQ2xpY2tPdmVybGF5IiwiZGlyZWN0aW9uIiwic2V0RGF0YSIsIm9uT3BlbiIsIiRlbWl0Iiwib25PcGVuZWQiLCJvbkNsb3NlIiwib25DbG9zZWQiLCJvbk9wdGlvblRhcCIsImV2ZW50Iiwib3B0aW9uIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJzaG91bGRFbWl0Q2hhbmdlIiwidG9nZ2xlIiwic2hvdyIsImltbWVkaWF0ZSIsImdldENoaWxkV3JhcHBlclN0eWxlIiwidGhlbiIsIndyYXBwZXJTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsV0FBTyxJQURlO0FBRXRCQyxjQUFVO0FB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SUFBTCxDQUFVRSxTQUExQjtBQUNBLGdCQUFJLE9BQU82QixJQUFQLEtBQWdCLFNBQXBCLEVBQStCO0FBQzNCQSx1QkFBTyxDQUFDN0IsU0FBUjtBQUNIO0FBQ0QsZ0JBQUk2QixTQUFTN0IsU0FBYixFQUF3QjtBQUNwQjtBQUNIO0FBQ0QsaUJBQUtnQixPQUFMLENBQWE7QUFDVGpCLDRCQUFZLENBQUNKLFFBQVFtQyxTQURaO0FBRVQ5QiwyQkFBVzZCO0FBRkYsYUFBYjtBQUlBLGdCQUFJQSxJQUFKLEVBQVU7QUFDTixxQkFBS3JCLE1BQUwsQ0FBWXVCLG9CQUFaLEdBQW1DQyxJQUFuQyxDQUF3QyxVQUFVQyxZQUFWLEVBQXdCO0FBQzVENUIsMEJBQU1XLE9BQU4sQ0FBYyxFQUFFaUIsY0FBY0EsWUFBaEIsRUFBOEJoQyxhQUFhLElBQTNDLEVBQWQ7QUFDQUksMEJBQU1ELFFBQU47QUFDSCxpQkFIRDtBQUlILGFBTEQsTUFNSztBQUNELHFCQUFLQSxRQUFMO0FBQ0g7QUFDSjtBQWxFSTtBQXJDYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBmaWVsZDogdHJ1ZSxcbiAgICByZWxhdGlvbjoge1xuICAgICAgICBuYW1lOiAnZHJvcGRvd24tbWVudScsXG4gICAgICAgIHR5cGU6ICdhbmNlc3RvcicsXG4gICAgICAgIGN1cnJlbnQ6ICdkcm9wZG93bi1pdGVtJyxcbiAgICAgICAgbGlua2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGFGcm9tUGFyZW50KCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBudWxsLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdyZXJlbmRlcidcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAncmVyZW5kZXInXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICB0aXRsZUNsYXNzOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3JlcmVuZGVyJ1xuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIHZhbHVlOiBbXSxcbiAgICAgICAgICAgIG9ic2VydmVyOiAncmVyZW5kZXInXG4gICAgICAgIH0sXG4gICAgICAgIHBvcHVwU3R5bGU6IFN0cmluZ1xuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cnVlLFxuICAgICAgICBzaG93UG9wdXA6IGZhbHNlLFxuICAgICAgICBzaG93V3JhcHBlcjogZmFsc2UsXG4gICAgICAgIGRpc3BsYXlUaXRsZTogJydcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgcmVyZW5kZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB3eC5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMucGFyZW50ICYmIF90aGlzLnBhcmVudC51cGRhdGVJdGVtTGlzdERhdGEoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVEYXRhRnJvbVBhcmVudDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5wYXJlbnQuZGF0YSwgb3ZlcmxheSA9IF9hLm92ZXJsYXksIGR1cmF0aW9uID0gX2EuZHVyYXRpb24sIGFjdGl2ZUNvbG9yID0gX2EuYWN0aXZlQ29sb3IsIGNsb3NlT25DbGlja092ZXJsYXkgPSBfYS5jbG9zZU9uQ2xpY2tPdmVybGF5LCBkaXJlY3Rpb24gPSBfYS5kaXJlY3Rpb247XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmxheTogb3ZlcmxheSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IGR1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBhY3RpdmVDb2xvcjogYWN0aXZlQ29sb3IsXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlT25DbGlja092ZXJsYXk6IGNsb3NlT25DbGlja092ZXJsYXksXG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGlvbjogZGlyZWN0aW9uXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uT3BlbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnb3BlbicpO1xuICAgICAgICB9LFxuICAgICAgICBvbk9wZW5lZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnb3BlbmVkJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xvc2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZWQnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHNob3dXcmFwcGVyOiBmYWxzZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25PcHRpb25UYXA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIG9wdGlvbiA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5vcHRpb247XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBvcHRpb24udmFsdWU7XG4gICAgICAgICAgICB2YXIgc2hvdWxkRW1pdENoYW5nZSA9IHRoaXMuZGF0YS52YWx1ZSAhPT0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBzaG93UG9wdXA6IGZhbHNlLCB2YWx1ZTogdmFsdWUgfSk7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScpO1xuICAgICAgICAgICAgdGhpcy5yZXJlbmRlcigpO1xuICAgICAgICAgICAgaWYgKHNob3VsZEVtaXRDaGFuZ2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZTogZnVuY3Rpb24gKHNob3csIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgICAgICAgICAgdmFyIHNob3dQb3B1cCA9IHRoaXMuZGF0YS5zaG93UG9wdXA7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHNob3cgIT09ICdib29sZWFuJykge1xuICAgICAgICAgICAgICAgIHNob3cgPSAhc2hvd1BvcHVwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHNob3cgPT09IHNob3dQb3B1cCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogIW9wdGlvbnMuaW1tZWRpYXRlLFxuICAgICAgICAgICAgICAgIHNob3dQb3B1cDogc2hvdyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHNob3cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhcmVudC5nZXRDaGlsZFdyYXBwZXJTdHlsZSgpLnRoZW4oZnVuY3Rpb24gKHdyYXBwZXJTdHlsZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKHsgd3JhcHBlclN0eWxlOiB3cmFwcGVyU3R5bGUsIHNob3dXcmFwcGVyOiB0cnVlIH0pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5yZXJlbmRlcigpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXJlbmRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=