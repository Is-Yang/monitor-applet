"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var FONT_COLOR = '#ed6a0c';
var BG_COLOR = '#fffbe8';
component_1.VantComponent({
    props: {
        text: {
            type: String,
            value: '',
            observer: function observer() {
                var _this = this;
                wx.nextTick(function () {
                    _this.init();
                });
            }
        },
        mode: {
            type: String,
            value: ''
        },
        url: {
            type: String,
            value: ''
        },
        openType: {
            type: String,
            value: 'navigate'
        },
        delay: {
            type: Number,
            value: 1
        },
        speed: {
            type: Number,
            value: 50,
            observer: function observer() {
                var _this = this;
                wx.nextTick(function () {
                    _this.init();
                });
            }
        },
        scrollable: {
            type: Boolean,
            value: true
        },
        leftIcon: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: FONT_COLOR
        },
        backgroundColor: {
            type: String,
            value: BG_COLOR
        },
        wrapable: Boolean
    },
    data: {
        show: true
    },
    created: function created() {
        this.resetAnimation = wx.createAnimation({
            duration: 0,
            timingFunction: 'linear'
        });
    },
    destroyed: function destroyed() {
        this.timer && clearTimeout(this.timer);
    },
    methods: {
        init: function init() {
            var _this = this;
            Promise.all([this.getRect('.van-notice-bar__content'), this.getRect('.van-notice-bar__wrap')]).then(function (rects) {
                var contentRect = rects[0],
                    wrapRect = rects[1];
                if (contentRect == null || wrapRect == null || !contentRect.width || !wrapRect.width) {
                    return;
                }
                var _a = _this.data,
                    speed = _a.speed,
                    scrollable = _a.scrollable,
                    delay = _a.delay;
                if (scrollable && wrapRect.width < contentRect.width) {
                    var duration = contentRect.width / speed * 1000;
                    _this.wrapWidth = wrapRect.width;
                    _this.contentWidth = contentRect.width;
                    _this.duration = duration;
                    _this.animation = wx.createAnimation({
                        duration: duration,
                        timingFunction: 'linear',
                        delay: delay
                    });
                    _this.scroll();
                }
            });
        },
        scroll: function scroll() {
            var _this = this;
            this.timer && clearTimeout(this.timer);
            this.timer = null;
            this.setData({
                animationData: this.resetAnimation.translateX(this.wrapWidth).step().export()
            });
            setTimeout(function () {
                _this.setData({
                    animationData: _this.animation.translateX(-_this.contentWidth).step().export()
                });
            }, 20);
            this.timer = setTimeout(function () {
                _this.scroll();
            }, this.duration);
        },
        onClickIcon: function onClickIcon() {
            this.timer && clearTimeout(this.timer);
            this.timer = null;
            this.setData({ show: false });
        },
        onClick: function onClick(event) {
            this.$emit('click', event);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiRk9OVF9DT0xPUiIsIkJHX0NPTE9SIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJvYnNlcnZlciIsIl90aGlzIiwid3giLCJuZXh0VGljayIsImluaXQiLCJtb2RlIiwidXJsIiwib3BlblR5cGUiLCJkZWxheSIsIk51bWJlciIsInNwZWVkIiwic2Nyb2xsYWJsZSIsIkJvb2xlYW4iLCJsZWZ0SWNvbiIsImNvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwid3JhcGFibGUiLCJkYXRhIiwic2hvdyIsImNyZWF0ZWQiLCJyZXNldEFuaW1hdGlvbiIsImNyZWF0ZUFuaW1hdGlvbiIsImR1cmF0aW9uIiwidGltaW5nRnVuY3Rpb24iLCJkZXN0cm95ZWQiLCJ0aW1lciIsImNsZWFyVGltZW91dCIsIm1ldGhvZHMiLCJQcm9taXNlIiwiYWxsIiwiZ2V0UmVjdCIsInRoZW4iLCJyZWN0cyIsImNvbnRlbnRSZWN0Iiwid3JhcFJlY3QiLCJ3aWR0aCIsIl9hIiwid3JhcFdpZHRoIiwiY29udGVudFdpZHRoIiwiYW5pbWF0aW9uIiwic2Nyb2xsIiwic2V0RGF0YSIsImFuaW1hdGlvbkRhdGEiLCJ0cmFuc2xhdGVYIiwic3RlcCIsImV4cG9ydCIsInNldFRpbWVvdXQiLCJvbkNsaWNrSWNvbiIsIm9uQ2xpY2siLCJldmVudCIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLElBQUlDLGFBQWEsU0FBakI7QUFDQSxJQUFJQyxXQUFXLFNBQWY7QUFDQUgsWUFBWUksYUFBWixDQUEw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ZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIEZPTlRfQ09MT1IgPSAnI2VkNmEwYyc7XG52YXIgQkdfQ09MT1IgPSAnI2ZmZmJlOCc7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICB0ZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgd3gubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pbml0KCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBtb2RlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgb3BlblR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbmF2aWdhdGUnXG4gICAgICAgIH0sXG4gICAgICAgIGRlbGF5OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMVxuICAgICAgICB9LFxuICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDUwLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHd4Lm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaW5pdCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxhYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgbGVmdEljb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBjb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IEZPTlRfQ09MT1JcbiAgICAgICAgfSxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogQkdfQ09MT1JcbiAgICAgICAgfSxcbiAgICAgICAgd3JhcGFibGU6IEJvb2xlYW5cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgc2hvdzogdHJ1ZVxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnJlc2V0QW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxuICAgICAgICAgICAgdGltaW5nRnVuY3Rpb246ICdsaW5lYXInXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgZGVzdHJveWVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UmVjdCgnLnZhbi1ub3RpY2UtYmFyX19jb250ZW50JyksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLW5vdGljZS1iYXJfX3dyYXAnKVxuICAgICAgICAgICAgXSkudGhlbihmdW5jdGlvbiAocmVjdHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudFJlY3QgPSByZWN0c1swXSwgd3JhcFJlY3QgPSByZWN0c1sxXTtcbiAgICAgICAgICAgICAgICBpZiAoY29udGVudFJlY3QgPT0gbnVsbCB8fFxuICAgICAgICAgICAgICAgICAgICB3cmFwUmVjdCA9PSBudWxsIHx8XG4gICAgICAgICAgICAgICAgICAgICFjb250ZW50UmVjdC53aWR0aCB8fFxuICAgICAgICAgICAgICAgICAgICAhd3JhcFJlY3Qud2lkdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgX2EgPSBfdGhpcy5kYXRhLCBzcGVlZCA9IF9hLnNwZWVkLCBzY3JvbGxhYmxlID0gX2Euc2Nyb2xsYWJsZSwgZGVsYXkgPSBfYS5kZWxheTtcbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsYWJsZSAmJiB3cmFwUmVjdC53aWR0aCA8IGNvbnRlbnRSZWN0LndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkdXJhdGlvbiA9IChjb250ZW50UmVjdC53aWR0aCAvIHNwZWVkKSAqIDEwMDA7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLndyYXBXaWR0aCA9IHdyYXBSZWN0LndpZHRoO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jb250ZW50V2lkdGggPSBjb250ZW50UmVjdC53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZHVyYXRpb24gPSBkdXJhdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWluZ0Z1bmN0aW9uOiAnbGluZWFyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGF5OiBkZWxheVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNjcm9sbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMudGltZXIgJiYgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IHRoaXMucmVzZXRBbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgLnRyYW5zbGF0ZVgodGhpcy53cmFwV2lkdGgpXG4gICAgICAgICAgICAgICAgICAgIC5zdGVwKClcbiAgICAgICAgICAgICAgICAgICAgLmV4cG9ydCgpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25EYXRhOiBfdGhpcy5hbmltYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgIC50cmFuc2xhdGVYKC1fdGhpcy5jb250ZW50V2lkdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3RlcCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhwb3J0KClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sIDIwKTtcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy5zY3JvbGwoKTtcbiAgICAgICAgICAgIH0sIHRoaXMuZHVyYXRpb24pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrSWNvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy50aW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gbnVsbDtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IHNob3c6IGZhbHNlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=