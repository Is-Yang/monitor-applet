"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var color_1 = require('./../common/color.js');
component_1.VantComponent({
    props: {
        message: String,
        background: String,
        type: {
            type: String,
            value: 'danger'
        },
        color: {
            type: String,
            value: color_1.WHITE
        },
        duration: {
            type: Number,
            value: 3000
        },
        zIndex: {
            type: Number,
            value: 110
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: false
        }
    },
    data: {
        show: false
    },
    created: function created() {
        var statusBarHeight = wx.getSystemInfoSync().statusBarHeight;
        this.setData({ statusBarHeight: statusBarHeight });
    },
    methods: {
        show: function show() {
            var _this = this;
            var _a = this.data,
                duration = _a.duration,
                onOpened = _a.onOpened;
            clearTimeout(this.timer);
            this.setData({ show: true });
            wx.nextTick(onOpened);
            if (duration > 0 && duration !== Infinity) {
                this.timer = setTimeout(function () {
                    _this.hide();
                }, duration);
            }
        },
        hide: function hide() {
            var onClose = this.data.onClose;
            clearTimeout(this.timer);
            this.setData({ show: false });
            wx.nextTick(onClose);
        },
        onTap: function onTap(event) {
            var onClick = this.data.onClick;
            if (onClick) {
                onClick(event.detail);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiY29sb3JfMSIsIlZhbnRDb21wb25lbnQiLCJwcm9wcyIsIm1lc3NhZ2UiLCJTdHJpbmciLCJiYWNrZ3JvdW5kIiwidHlwZSIsImNvbG9yIiwiV0hJVEUiLCJkdXJhdGlvbiIsIk51bWJlciIsInpJbmRleCIsInNhZmVBcmVhSW5zZXRUb3AiLCJCb29sZWFuIiwiZGF0YSIsInNob3ciLCJjcmVhdGVkIiwic3RhdHVzQmFySGVpZ2h0Iiwid3giLCJnZXRTeXN0ZW1JbmZvU3luYyIsInNldERhdGEiLCJtZXRob2RzIiwiX3RoaXMiLCJfYSIsIm9uT3BlbmVkIiwiY2xlYXJUaW1lb3V0IiwidGltZXIiLCJuZXh0VGljayIsIkluZmluaXR5Iiwic2V0VGltZW91dCIsImhpZGUiLCJvbkNsb3NlIiwib25UYXAiLCJldmVudCIsIm9uQ2xpY2siLCJkZXRhaWwiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxpQkFBUixDQUFkO0FBQ0FELFlBQVlHLGFBQVosQ0FBMEI7QUFDdEJDLFdBQU87QUFDSEMsaUJBQVNDLE1BRE47QUFFSEMsb0JBQVlELE1BRlQ7QUFHSEUsY0FBTTtBQUNGQSxrQkFBTUYsTUFESjtBQUVGUCxtQkFBTztBQUZMLFNBSEg7QUFPSFUsZUFBTztBQUNIRCxrQkFBTUYsTUFESDtBQUVIUCxtQkFBT0csUUFBUVE7QUFGWixTQVBKO0FBV0hDLGtCQUFVO0FBQ05ILGtCQUFNSSxNQURBO0FBRU5iLG1CQUFPO0FBRkQsU0FYUDtBQWVIYyxnQkFBUTtBQUNKTCxrQkFBTUksTUFERjtBQUVKYixtQkFBTztBQUZILFNBZkw7QUFtQkhlLDBCQUFrQjtBQUNkTixrQkFBTU8sT0FEUTtBQUVkaEIsbUJBQU87QUFGTztBQW5CZixLQURlO0FBeUJ0QmlCLFVBQU07QUFDRkMsY0FBTTtBQURKLEtBekJnQjtBQTRCdEJDLGFBQVMsbUJBQVk7QUFDakIsWUFBSUMsa0JBQWtCQyxHQUFHQyxpQkFBSCxHQUF1QkYsZUFBN0M7QUFDQSxhQUFLRyxPQUFMLENBQWEsRUFBRUgsaUJBQWlCQSxlQUFuQixFQUFiO0FBQ0gsS0EvQnFCO0FBZ0N0QkksYUFBUztBQUNMTixjQUFNLGdCQUFZO0FBQ2QsZ0JBQUlPLFFBQVEsSUFBWjtBQUNBLGdCQUFJQyxLQUFLLEtBQUtULElBQWQ7QUFBQSxnQkFBb0JMLFdBQVdjLEdBQUdkLFFBQWxDO0FBQUEsZ0JBQTRDZSxXQUFXRCxHQUFHQyxRQUExRDtBQUNBQyx5QkFBYSxLQUFLQyxLQUFsQjtBQUNBLGlCQUFLTixPQUFMLENBQWEsRUFBRUwsTUFBTSxJQUFSLEVBQWI7QUFDQUcsZUFBR1MsUUFBSCxDQUFZSCxRQUFaO0FBQ0EsZ0JBQUlmLFdBQVcsQ0FBWCxJQUFnQkEsYUFBYW1CLFFBQWpDLEVBQTJDO0FBQ3ZDLHFCQUFLRixLQUFMLEdBQWFHLFdBQVcsWUFBWTtBQUNoQ1AsMEJBQU1RLElBQU47QUFDSCxpQkFGWSxFQUVWckIsUUFGVSxDQUFiO0FBR0g7QUFDSixTQVpJO0FBYUxxQixjQUFNLGdCQUFZO0FBQ2QsZ0JBQUlDLFVBQVUsS0FBS2pCLElBQUwsQ0FBVWlCLE9BQXhCO0FBQ0FOLHlCQUFhLEtBQUtDLEtBQWxCO0FBQ0EsaUJBQUtOLE9BQUwsQ0FBYSxFQUFFTCxNQUFNLEtBQVIsRUFBYjtBQUNBRyxlQUFHUyxRQUFILENBQVlJLE9BQVo7QUFDSCxTQWxCSTtBQW1CTEMsZUFBTyxlQUFVQyxLQUFWLEVBQWlCO0FBQ3BCLGdCQUFJQyxVQUFVLEtBQUtwQixJQUFMLENBQVVvQixPQUF4QjtBQUNBLGdCQUFJQSxPQUFKLEVBQWE7QUFDVEEsd0JBQVFELE1BQU1FLE1BQWQ7QUFDSDtBQUNKO0FBeEJJO0FBaENhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciBjb2xvcl8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb2xvclwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIG1lc3NhZ2U6IFN0cmluZyxcbiAgICAgICAgYmFja2dyb3VuZDogU3RyaW5nLFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2RhbmdlcidcbiAgICAgICAgfSxcbiAgICAgICAgY29sb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiBjb2xvcl8xLldISVRFXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMzAwMFxuICAgICAgICB9LFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxMTBcbiAgICAgICAgfSxcbiAgICAgICAgc2FmZUFyZWFJbnNldFRvcDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIHNob3c6IGZhbHNlLFxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdHVzQmFySGVpZ2h0ID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IHN0YXR1c0JhckhlaWdodDogc3RhdHVzQmFySGVpZ2h0IH0pO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzaG93OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBkdXJhdGlvbiA9IF9hLmR1cmF0aW9uLCBvbk9wZW5lZCA9IF9hLm9uT3BlbmVkO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgc2hvdzogdHJ1ZSB9KTtcbiAgICAgICAgICAgIHd4Lm5leHRUaWNrKG9uT3BlbmVkKTtcbiAgICAgICAgICAgIGlmIChkdXJhdGlvbiA+IDAgJiYgZHVyYXRpb24gIT09IEluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5oaWRlKCk7XG4gICAgICAgICAgICAgICAgfSwgZHVyYXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb25DbG9zZSA9IHRoaXMuZGF0YS5vbkNsb3NlO1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgc2hvdzogZmFsc2UgfSk7XG4gICAgICAgICAgICB3eC5uZXh0VGljayhvbkNsb3NlKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25UYXA6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIG9uQ2xpY2sgPSB0aGlzLmRhdGEub25DbGljaztcbiAgICAgICAgICAgIGlmIChvbkNsaWNrKSB7XG4gICAgICAgICAgICAgICAgb25DbGljayhldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=