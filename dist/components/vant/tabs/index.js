"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var touch_1 = require('./../mixins/touch.js');
var utils_1 = require('./../common/utils.js');
component_1.VantComponent({
    mixins: [touch_1.touch],
    classes: ['nav-class', 'tab-class', 'tab-active-class', 'line-class'],
    relation: {
        name: 'tab',
        type: 'descendant',
        current: 'tabs',
        linked: function linked(target) {
            target.index = this.children.length - 1;
            this.updateTabs();
        },
        unlinked: function unlinked() {
            this.children = this.children.map(function (child, index) {
                child.index = index;
                return child;
            });
            this.updateTabs();
        }
    },
    props: {
        color: {
            type: String,
            observer: 'setLine'
        },
        sticky: Boolean,
        animated: {
            type: Boolean,
            observer: function observer() {
                var _this = this;
                this.children.forEach(function (child, index) {
                    return child.updateRender(index === _this.data.currentIndex, _this);
                });
            }
        },
        swipeable: Boolean,
        lineWidth: {
            type: [String, Number],
            value: -1,
            observer: 'setLine'
        },
        lineHeight: {
            type: [String, Number],
            value: -1,
            observer: 'setLine'
        },
        titleActiveColor: String,
        titleInactiveColor: String,
        active: {
            type: [String, Number],
            value: 0,
            observer: function observer(name) {
                if (name !== this.getCurrentName()) {
                    this.setCurrentIndexByName(name);
                }
            }
        },
        type: {
            type: String,
            value: 'line'
        },
        border: {
            type: Boolean,
            value: true
        },
        ellipsis: {
            type: Boolean,
            value: true
        },
        duration: {
            type: Number,
            value: 0.3
        },
        zIndex: {
            type: Number,
            value: 1
        },
        swipeThreshold: {
            type: Number,
            value: 4,
            observer: function observer(value) {
                this.setData({
                    scrollable: this.children.length > value || !this.data.ellipsis
                });
            }
        },
        offsetTop: {
            type: Number,
            value: 0
        },
        lazyRender: {
            type: Boolean,
            value: true
        }
    },
    data: {
        tabs: [],
        lineStyle: '',
        scrollLeft: 0,
        scrollable: false,
        trackStyle: '',
        currentIndex: null,
        container: null
    },
    mounted: function mounted() {
        var _this = this;
        wx.nextTick(function () {
            _this.setLine(true);
            _this.scrollIntoView();
        });
    },
    methods: {
        updateContainer: function updateContainer() {
            var _this = this;
            this.setData({
                container: function container() {
                    return _this.createSelectorQuery().select('.van-tabs');
                }
            });
        },
        updateTabs: function updateTabs() {
            var _a = this,
                _b = _a.children,
                children = _b === void 0 ? [] : _b,
                data = _a.data;
            this.setData({
                tabs: children.map(function (child) {
                    return child.data;
                }),
                scrollable: this.children.length > data.swipeThreshold || !data.ellipsis
            });
            this.setCurrentIndexByName(this.getCurrentName() || data.active);
        },
        trigger: function trigger(eventName, child) {
            var currentIndex = this.data.currentIndex;
            var currentChild = child || this.children[currentIndex];
            if (!utils_1.isDef(currentChild)) {
                return;
            }
            this.$emit(eventName, {
                index: currentChild.index,
                name: currentChild.getComputedName(),
                title: currentChild.data.title
            });
        },
        onTap: function onTap(event) {
            var _this = this;
            var index = event.currentTarget.dataset.index;
            var child = this.children[index];
            if (child.data.disabled) {
                this.trigger('disabled', child);
            } else {
                this.setCurrentIndex(index);
                wx.nextTick(function () {
                    _this.trigger('click');
                });
            }
        },
        // correct the index of active tab
        setCurrentIndexByName: function setCurrentIndexByName(name) {
            var _a = this.children,
                children = _a === void 0 ? [] : _a;
            var matched = children.filter(function (child) {
                return child.getComputedName() === name;
            });
            if (matched.length) {
                this.setCurrentIndex(matched[0].index);
            }
        },
        setCurrentIndex: function setCurrentIndex(currentIndex) {
            var _this = this;
            var _a = this,
                data = _a.data,
                _b = _a.children,
                children = _b === void 0 ? [] : _b;
            if (!utils_1.isDef(currentIndex) || currentIndex >= children.length || currentIndex < 0) {
                return;
            }
            children.forEach(function (item, index) {
                var active = index === currentIndex;
                if (active !== item.data.active || !item.inited) {
                    item.updateRender(active, _this);
                }
            });
            if (currentIndex === data.currentIndex) {
                return;
            }
            var shouldEmitChange = data.currentIndex !== null;
            this.setData({ currentIndex: currentIndex });
            wx.nextTick(function () {
                _this.setLine();
                _this.scrollIntoView();
                _this.updateContainer();
                _this.trigger('input');
                if (shouldEmitChange) {
                    _this.trigger('change');
                }
            });
        },
        getCurrentName: function getCurrentName() {
            var activeTab = this.children[this.data.currentIndex];
            if (activeTab) {
                return activeTab.getComputedName();
            }
        },
        setLine: function setLine(skipTransition) {
            var _this = this;
            if (this.data.type !== 'line') {
                return;
            }
            var _a = this.data,
                color = _a.color,
                duration = _a.duration,
                currentIndex = _a.currentIndex,
                lineWidth = _a.lineWidth,
                lineHeight = _a.lineHeight;
            this.getRect('.van-tab', true).then(function (rects) {
                if (rects === void 0) {
                    rects = [];
                }
                var rect = rects[currentIndex];
                if (rect == null) {
                    return;
                }
                var width = lineWidth !== -1 ? lineWidth : rect.width / 2;
                var height = lineHeight !== -1 ? "height: " + utils_1.addUnit(lineHeight) + "; border-radius: " + utils_1.addUnit(lineHeight) + ";" : '';
                var left = rects.slice(0, currentIndex).reduce(function (prev, curr) {
                    return prev + curr.width;
                }, 0);
                left += (rect.width - width) / 2;
                var transition = skipTransition ? '' : "transition-duration: " + duration + "s; -webkit-transition-duration: " + duration + "s;";
                _this.setData({
                    lineStyle: "\n            " + height + "\n            width: " + utils_1.addUnit(width) + ";\n            background-color: " + color + ";\n            -webkit-transform: translateX(" + left + "px);\n            transform: translateX(" + left + "px);\n            " + transition + "\n          "
                });
            });
        },
        // scroll active tab into view
        scrollIntoView: function scrollIntoView() {
            var _this = this;
            var _a = this.data,
                currentIndex = _a.currentIndex,
                scrollable = _a.scrollable;
            if (!scrollable) {
                return;
            }
            Promise.all([this.getRect('.van-tab', true), this.getRect('.van-tabs__nav')]).then(function (_a) {
                var tabRects = _a[0],
                    navRect = _a[1];
                var tabRect = tabRects[currentIndex];
                var offsetLeft = tabRects.slice(0, currentIndex).reduce(function (prev, curr) {
                    return prev + curr.width;
                }, 0);
                _this.setData({
                    scrollLeft: offsetLeft - (navRect.width - tabRect.width) / 2
                });
            });
        },
        onTouchScroll: function onTouchScroll(event) {
            this.$emit('scroll', event.detail);
        },
        onTouchStart: function onTouchStart(event) {
            if (!this.data.swipeable) return;
            this.touchStart(event);
        },
        onTouchMove: function onTouchMove(event) {
            if (!this.data.swipeable) return;
            this.touchMove(event);
        },
        // watch swipe touch end
        onTouchEnd: function onTouchEnd() {
            if (!this.data.swipeable) return;
            var _a = this.data,
                tabs = _a.tabs,
                currentIndex = _a.currentIndex;
            var _b = this,
                direction = _b.direction,
                deltaX = _b.deltaX,
                offsetX = _b.offsetX;
            var minSwipeDistance = 50;
            if (direction === 'horizontal' && offsetX >= minSwipeDistance) {
                if (deltaX > 0 && currentIndex !== 0) {
                    this.setCurrentIndex(currentIndex - 1);
                } else if (deltaX < 0 && currentIndex !== tabs.length - 1) {
                    this.setCurrentIndex(currentIndex + 1);
                }
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidG91Y2hfMSIsInV0aWxzXzEiLCJWYW50Q29tcG9uZW50IiwibWl4aW5zIiwidG91Y2giLCJjbGFzc2VzIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImN1cnJlbnQiLCJsaW5rZWQiLCJ0YXJnZXQiLCJpbmRleCIsImNoaWxkcmVuIiwibGVuZ3RoIiwidXBkYXRlVGFicyIsInVubGlua2VkIiwibWFwIiwiY2hpbGQiLCJwcm9wcyIsImNvbG9yIiwiU3RyaW5nIiwib2JzZXJ2ZXIiLCJzdGlja3kiLCJCb29sZWFuIiwiYW5pbWF0ZWQiLCJfdGhpcyIsImZvckVhY2giLCJ1cGRhdGVSZW5kZXIiLCJkYXRhIiwiY3VycmVudEluZGV4Iiwic3dpcGVhYmxlIiwibGluZVdpZHRoIiwiTnVtYmVyIiwibGluZUhlaWdodCIsInRpdGxlQWN0aXZlQ29sb3IiLCJ0aXRsZUluYWN0aXZlQ29sb3IiLCJhY3RpdmUiLCJnZXRDdXJyZW50TmFtZSIsInNldEN1cnJlbnRJbmRleEJ5TmFtZSIsImJvcmRlciIsImVsbGlwc2lzIiwiZHVyYXRpb24iLCJ6SW5kZXgiLCJzd2lwZVRocmVzaG9sZCIsInNldERhdGEiLCJzY3JvbGxhYmxlIiwib2Zmc2V0VG9wIiwibGF6eVJlbmRlciIsInRhYnMiLCJsaW5lU3R5bGUiLCJzY3JvbGxMZWZ0IiwidHJhY2tTdHlsZSIsImNvbnRhaW5lciIsIm1vdW50ZWQiLCJ3eCIsIm5leHRUaWNrIiwic2V0TGluZSIsInNjcm9sbEludG9WaWV3IiwibWV0aG9kcyIsInVwZGF0ZUNvbnRhaW5lciIsImNyZWF0ZVNlbGVjdG9yUXVlcnkiLCJzZWxlY3QiLCJfYSIsIl9iIiwidHJpZ2dlciIsImV2ZW50TmFtZSIsImN1cnJlbnRDaGlsZCIsImlzRGVmIiwiJGVtaXQiLCJnZXRDb21wdXRlZE5hbWUiLCJ0aXRsZSIsIm9uVGFwIiwiZXZlbnQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImRpc2FibGVkIiwic2V0Q3VycmVudEluZGV4IiwibWF0Y2hlZCIsImZpbHRlciIsIml0ZW0iLCJpbml0ZWQiLCJzaG91bGRFbWl0Q2hhbmdlIiwiYWN0aXZlVGFiIiwic2tpcFRyYW5zaXRpb24iLCJnZXRSZWN0IiwidGhlbiIsInJlY3RzIiwicmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiYWRkVW5pdCIsImxlZnQiLCJzbGljZSIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwidHJhbnNpdGlvbiIsIlByb21pc2UiLCJhbGwiLCJ0YWJSZWN0cyIsIm5hdlJlY3QiLCJ0YWJSZWN0Iiwib2Zmc2V0TGVmdCIsIm9uVG91Y2hTY3JvbGwiLCJkZXRhaWwiLCJvblRvdWNoU3RhcnQiLCJ0b3VjaFN0YXJ0Iiwib25Ub3VjaE1vdmUiLCJ0b3VjaE1vdmUiLCJvblRvdWNoRW5kIiwiZGlyZWN0aW9uIiwiZGVsdGFYIiwib2Zmc2V0WCIsIm1pblN3aXBlRGlzdGFuY2UiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxpQkFBUixDQUFkO0FBQ0EsSUFBSUUsVUFBVUYsUUFBUSxpQkFBUixDQUFkO0FBQ0FELFlBQVlJLGFBQVosQ0FBMEI7QUFDdEJDLFlBQVEsQ0FBQ0gsUUFBUUksS0FBVCxDQURjO0FBRXRCQyxhQUFTLENBQUMsV0FBRCxFQUFjLFdBQWQsRUFBMkIsa0JBQTNCLEVBQStDLFlBQS9DLENBRmE7QUFHdEJDLGNBQVU7QUFDTkMsY0FBTSxLQURBO0FBRU5DLGNBQU0sWUFGQTtBQUdOQyxpQkFBUyxNQUhIO0FBSU5DLGdCQUFRLGdCQUFVQyxNQUFWLEVBQWtCO0FBQ3RCQSxtQkFBT0MsS0FBUCxH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LEdBQUcrQyxTQUE5QjtBQUFBLGdCQUF5Q0MsU0FBU2hELEdBQUdnRCxNQUFyRDtBQUFBLGdCQUE2REMsVUFBVWpELEdBQUdpRCxPQUExRTtBQUNBLGdCQUFJQyxtQkFBbUIsRUFBdkI7QUFDQSxnQkFBSUgsY0FBYyxZQUFkLElBQThCRSxXQUFXQyxnQkFBN0MsRUFBK0Q7QUFDM0Qsb0JBQUlGLFNBQVMsQ0FBVCxJQUFjbEYsaUJBQWlCLENBQW5DLEVBQXNDO0FBQ2xDLHlCQUFLK0MsZUFBTCxDQUFxQi9DLGVBQWUsQ0FBcEM7QUFDSCxpQkFGRCxNQUdLLElBQUlrRixTQUFTLENBQVQsSUFBY2xGLGlCQUFpQm1CLEtBQUtuQyxNQUFMLEdBQWMsQ0FBakQsRUFBb0Q7QUFDckQseUJBQUsrRCxlQUFMLENBQXFCL0MsZUFBZSxDQUFwQztBQUNIO0FBQ0o7QUFDSjtBQWpLSTtBQS9HYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgdG91Y2hfMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvdG91Y2hcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHNcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBtaXhpbnM6IFt0b3VjaF8xLnRvdWNoXSxcbiAgICBjbGFzc2VzOiBbJ25hdi1jbGFzcycsICd0YWItY2xhc3MnLCAndGFiLWFjdGl2ZS1jbGFzcycsICdsaW5lLWNsYXNzJ10sXG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ3RhYicsXG4gICAgICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcbiAgICAgICAgY3VycmVudDogJ3RhYnMnLFxuICAgICAgICBsaW5rZWQ6IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICAgICAgICAgIHRhcmdldC5pbmRleCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGFicygpO1xuICAgICAgICB9LFxuICAgICAgICB1bmxpbmtlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICBjaGlsZC5pbmRleCA9IGluZGV4O1xuICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy51cGRhdGVUYWJzKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldExpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHN0aWNreTogQm9vbGVhbixcbiAgICAgICAgYW5pbWF0ZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNoaWxkLnVwZGF0ZVJlbmRlcihpbmRleCA9PT0gX3RoaXMuZGF0YS5jdXJyZW50SW5kZXgsIF90aGlzKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc3dpcGVhYmxlOiBCb29sZWFuLFxuICAgICAgICBsaW5lV2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldExpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmVIZWlnaHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFtTdHJpbmcsIE51bWJlcl0sXG4gICAgICAgICAgICB2YWx1ZTogLTEsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3NldExpbmUnXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlQWN0aXZlQ29sb3I6IFN0cmluZyxcbiAgICAgICAgdGl0bGVJbmFjdGl2ZUNvbG9yOiBTdHJpbmcsXG4gICAgICAgIGFjdGl2ZToge1xuICAgICAgICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgICAgICAgICAgICAgaWYgKG5hbWUgIT09IHRoaXMuZ2V0Q3VycmVudE5hbWUoKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRJbmRleEJ5TmFtZShuYW1lKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnbGluZSdcbiAgICAgICAgfSxcbiAgICAgICAgYm9yZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgZWxsaXBzaXM6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDAuM1xuICAgICAgICB9LFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH0sXG4gICAgICAgIHN3aXBlVGhyZXNob2xkOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNCxcbiAgICAgICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxhYmxlOiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IHZhbHVlIHx8ICF0aGlzLmRhdGEuZWxsaXBzaXNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb2Zmc2V0VG9wOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LFxuICAgICAgICBsYXp5UmVuZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICB0YWJzOiBbXSxcbiAgICAgICAgbGluZVN0eWxlOiAnJyxcbiAgICAgICAgc2Nyb2xsTGVmdDogMCxcbiAgICAgICAgc2Nyb2xsYWJsZTogZmFsc2UsXG4gICAgICAgIHRyYWNrU3R5bGU6ICcnLFxuICAgICAgICBjdXJyZW50SW5kZXg6IG51bGwsXG4gICAgICAgIGNvbnRhaW5lcjogbnVsbFxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB3eC5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBfdGhpcy5zZXRMaW5lKHRydWUpO1xuICAgICAgICAgICAgX3RoaXMuc2Nyb2xsSW50b1ZpZXcoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUNvbnRhaW5lcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy5jcmVhdGVTZWxlY3RvclF1ZXJ5KCkuc2VsZWN0KCcudmFuLXRhYnMnKTsgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVRhYnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMsIF9iID0gX2EuY2hpbGRyZW4sIGNoaWxkcmVuID0gX2IgPT09IHZvaWQgMCA/IFtdIDogX2IsIGRhdGEgPSBfYS5kYXRhO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICB0YWJzOiBjaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZC5kYXRhOyB9KSxcbiAgICAgICAgICAgICAgICBzY3JvbGxhYmxlOiB0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IGRhdGEuc3dpcGVUaHJlc2hvbGQgfHwgIWRhdGEuZWxsaXBzaXNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5zZXRDdXJyZW50SW5kZXhCeU5hbWUodGhpcy5nZXRDdXJyZW50TmFtZSgpIHx8IGRhdGEuYWN0aXZlKTtcbiAgICAgICAgfSxcbiAgICAgICAgdHJpZ2dlcjogZnVuY3Rpb24gKGV2ZW50TmFtZSwgY2hpbGQpIHtcbiAgICAgICAgICAgIHZhciBjdXJyZW50SW5kZXggPSB0aGlzLmRhdGEuY3VycmVudEluZGV4O1xuICAgICAgICAgICAgdmFyIGN1cnJlbnRDaGlsZCA9IGNoaWxkIHx8IHRoaXMuY2hpbGRyZW5bY3VycmVudEluZGV4XTtcbiAgICAgICAgICAgIGlmICghdXRpbHNfMS5pc0RlZihjdXJyZW50Q2hpbGQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy4kZW1pdChldmVudE5hbWUsIHtcbiAgICAgICAgICAgICAgICBpbmRleDogY3VycmVudENoaWxkLmluZGV4LFxuICAgICAgICAgICAgICAgIG5hbWU6IGN1cnJlbnRDaGlsZC5nZXRDb21wdXRlZE5hbWUoKSxcbiAgICAgICAgICAgICAgICB0aXRsZTogY3VycmVudENoaWxkLmRhdGEudGl0bGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblRhcDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgICBpZiAoY2hpbGQuZGF0YS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlcignZGlzYWJsZWQnLCBjaGlsZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRJbmRleChpbmRleCk7XG4gICAgICAgICAgICAgICAgd3gubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBjb3JyZWN0IHRoZSBpbmRleCBvZiBhY3RpdmUgdGFiXG4gICAgICAgIHNldEN1cnJlbnRJbmRleEJ5TmFtZTogZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuY2hpbGRyZW4sIGNoaWxkcmVuID0gX2EgPT09IHZvaWQgMCA/IFtdIDogX2E7XG4gICAgICAgICAgICB2YXIgbWF0Y2hlZCA9IGNoaWxkcmVuLmZpbHRlcihmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLmdldENvbXB1dGVkTmFtZSgpID09PSBuYW1lOyB9KTtcbiAgICAgICAgICAgIGlmIChtYXRjaGVkLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q3VycmVudEluZGV4KG1hdGNoZWRbMF0uaW5kZXgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzZXRDdXJyZW50SW5kZXg6IGZ1bmN0aW9uIChjdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLCBkYXRhID0gX2EuZGF0YSwgX2IgPSBfYS5jaGlsZHJlbiwgY2hpbGRyZW4gPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYjtcbiAgICAgICAgICAgIGlmICghdXRpbHNfMS5pc0RlZihjdXJyZW50SW5kZXgpIHx8XG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4ID49IGNoaWxkcmVuLmxlbmd0aCB8fFxuICAgICAgICAgICAgICAgIGN1cnJlbnRJbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBhY3RpdmUgPSBpbmRleCA9PT0gY3VycmVudEluZGV4O1xuICAgICAgICAgICAgICAgIGlmIChhY3RpdmUgIT09IGl0ZW0uZGF0YS5hY3RpdmUgfHwgIWl0ZW0uaW5pdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udXBkYXRlUmVuZGVyKGFjdGl2ZSwgX3RoaXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA9PT0gZGF0YS5jdXJyZW50SW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc2hvdWxkRW1pdENoYW5nZSA9IGRhdGEuY3VycmVudEluZGV4ICE9PSBudWxsO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgY3VycmVudEluZGV4OiBjdXJyZW50SW5kZXggfSk7XG4gICAgICAgICAgICB3eC5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0TGluZSgpO1xuICAgICAgICAgICAgICAgIF90aGlzLnNjcm9sbEludG9WaWV3KCk7XG4gICAgICAgICAgICAgICAgX3RoaXMudXBkYXRlQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgX3RoaXMudHJpZ2dlcignaW5wdXQnKTtcbiAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRW1pdENoYW5nZSkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy50cmlnZ2VyKCdjaGFuZ2UnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q3VycmVudE5hbWU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBhY3RpdmVUYWIgPSB0aGlzLmNoaWxkcmVuW3RoaXMuZGF0YS5jdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgaWYgKGFjdGl2ZVRhYikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhY3RpdmVUYWIuZ2V0Q29tcHV0ZWROYW1lKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHNldExpbmU6IGZ1bmN0aW9uIChza2lwVHJhbnNpdGlvbikge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEudHlwZSAhPT0gJ2xpbmUnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCBjb2xvciA9IF9hLmNvbG9yLCBkdXJhdGlvbiA9IF9hLmR1cmF0aW9uLCBjdXJyZW50SW5kZXggPSBfYS5jdXJyZW50SW5kZXgsIGxpbmVXaWR0aCA9IF9hLmxpbmVXaWR0aCwgbGluZUhlaWdodCA9IF9hLmxpbmVIZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tdGFiJywgdHJ1ZSkudGhlbihmdW5jdGlvbiAocmVjdHMpIHtcbiAgICAgICAgICAgICAgICBpZiAocmVjdHMgPT09IHZvaWQgMCkgeyByZWN0cyA9IFtdOyB9XG4gICAgICAgICAgICAgICAgdmFyIHJlY3QgPSByZWN0c1tjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChyZWN0ID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBsaW5lV2lkdGggIT09IC0xID8gbGluZVdpZHRoIDogcmVjdC53aWR0aCAvIDI7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IGxpbmVIZWlnaHQgIT09IC0xXG4gICAgICAgICAgICAgICAgICAgID8gXCJoZWlnaHQ6IFwiICsgdXRpbHNfMS5hZGRVbml0KGxpbmVIZWlnaHQpICsgXCI7IGJvcmRlci1yYWRpdXM6IFwiICsgdXRpbHNfMS5hZGRVbml0KGxpbmVIZWlnaHQpICsgXCI7XCJcbiAgICAgICAgICAgICAgICAgICAgOiAnJztcbiAgICAgICAgICAgICAgICB2YXIgbGVmdCA9IHJlY3RzXG4gICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCBjdXJyZW50SW5kZXgpXG4gICAgICAgICAgICAgICAgICAgIC5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHsgcmV0dXJuIHByZXYgKyBjdXJyLndpZHRoOyB9LCAwKTtcbiAgICAgICAgICAgICAgICBsZWZ0ICs9IChyZWN0LndpZHRoIC0gd2lkdGgpIC8gMjtcbiAgICAgICAgICAgICAgICB2YXIgdHJhbnNpdGlvbiA9IHNraXBUcmFuc2l0aW9uXG4gICAgICAgICAgICAgICAgICAgID8gJydcbiAgICAgICAgICAgICAgICAgICAgOiBcInRyYW5zaXRpb24tZHVyYXRpb246IFwiICsgZHVyYXRpb24gKyBcInM7IC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogXCIgKyBkdXJhdGlvbiArIFwicztcIjtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgbGluZVN0eWxlOiBcIlxcbiAgICAgICAgICAgIFwiICsgaGVpZ2h0ICsgXCJcXG4gICAgICAgICAgICB3aWR0aDogXCIgKyB1dGlsc18xLmFkZFVuaXQod2lkdGgpICsgXCI7XFxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogXCIgKyBjb2xvciArIFwiO1xcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKFwiICsgbGVmdCArIFwicHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGxlZnQgKyBcInB4KTtcXG4gICAgICAgICAgICBcIiArIHRyYW5zaXRpb24gKyBcIlxcbiAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNjcm9sbCBhY3RpdmUgdGFiIGludG8gdmlld1xuICAgICAgICBzY3JvbGxJbnRvVmlldzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgY3VycmVudEluZGV4ID0gX2EuY3VycmVudEluZGV4LCBzY3JvbGxhYmxlID0gX2Euc2Nyb2xsYWJsZTtcbiAgICAgICAgICAgIGlmICghc2Nyb2xsYWJsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFJlY3QoJy52YW4tdGFiJywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXRhYnNfX25hdicpXG4gICAgICAgICAgICBdKS50aGVuKGZ1bmN0aW9uIChfYSkge1xuICAgICAgICAgICAgICAgIHZhciB0YWJSZWN0cyA9IF9hWzBdLCBuYXZSZWN0ID0gX2FbMV07XG4gICAgICAgICAgICAgICAgdmFyIHRhYlJlY3QgPSB0YWJSZWN0c1tjdXJyZW50SW5kZXhdO1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gdGFiUmVjdHNcbiAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsIGN1cnJlbnRJbmRleClcbiAgICAgICAgICAgICAgICAgICAgLnJlZHVjZShmdW5jdGlvbiAocHJldiwgY3VycikgeyByZXR1cm4gcHJldiArIGN1cnIud2lkdGg7IH0sIDApO1xuICAgICAgICAgICAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxMZWZ0OiBvZmZzZXRMZWZ0IC0gKG5hdlJlY3Qud2lkdGggLSB0YWJSZWN0LndpZHRoKSAvIDJcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoU2Nyb2xsOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3Njcm9sbCcsIGV2ZW50LmRldGFpbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZGF0YS5zd2lwZWFibGUpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy50b3VjaFN0YXJ0KGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25Ub3VjaE1vdmU6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuc3dpcGVhYmxlKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMudG91Y2hNb3ZlKGV2ZW50KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gd2F0Y2ggc3dpcGUgdG91Y2ggZW5kXG4gICAgICAgIG9uVG91Y2hFbmQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLnN3aXBlYWJsZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIHRhYnMgPSBfYS50YWJzLCBjdXJyZW50SW5kZXggPSBfYS5jdXJyZW50SW5kZXg7XG4gICAgICAgICAgICB2YXIgX2IgPSB0aGlzLCBkaXJlY3Rpb24gPSBfYi5kaXJlY3Rpb24sIGRlbHRhWCA9IF9iLmRlbHRhWCwgb2Zmc2V0WCA9IF9iLm9mZnNldFg7XG4gICAgICAgICAgICB2YXIgbWluU3dpcGVEaXN0YW5jZSA9IDUwO1xuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2hvcml6b250YWwnICYmIG9mZnNldFggPj0gbWluU3dpcGVEaXN0YW5jZSkge1xuICAgICAgICAgICAgICAgIGlmIChkZWx0YVggPiAwICYmIGN1cnJlbnRJbmRleCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggLSAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoZGVsdGFYIDwgMCAmJiBjdXJyZW50SW5kZXggIT09IHRhYnMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJlbnRJbmRleChjdXJyZW50SW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==