"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var color_1 = require('./../common/color.js');
var indexList = function indexList() {
    var indexList = [];
    var charCodeOfA = 'A'.charCodeAt(0);
    for (var i = 0; i < 26; i++) {
        indexList.push(String.fromCharCode(charCodeOfA + i));
    }
    return indexList;
};
component_1.VantComponent({
    relation: {
        name: 'index-anchor',
        type: 'descendant',
        current: 'index-bar',
        linked: function linked() {
            this.updateData();
        },
        linkChanged: function linkChanged() {
            this.updateData();
        },
        unlinked: function unlinked() {
            this.updateData();
        }
    },
    props: {
        sticky: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
        },
        highlightColor: {
            type: String,
            value: color_1.GREEN
        },
        scrollTop: {
            type: Number,
            value: 0,
            observer: 'onScroll'
        },
        stickyOffsetTop: {
            type: Number,
            value: 0
        },
        indexList: {
            type: Array,
            value: indexList()
        }
    },
    data: {
        activeAnchorIndex: null,
        showSidebar: false
    },
    methods: {
        updateData: function updateData() {
            var _this = this;
            this.timer && clearTimeout(this.timer);
            this.timer = setTimeout(function () {
                _this.children = _this.getRelationNodes('../index-anchor/index');
                _this.setData({
                    showSidebar: !!_this.children.length
                });
                _this.setRect().then(function () {
                    _this.onScroll();
                });
            }, 0);
        },
        setRect: function setRect() {
            return Promise.all([this.setAnchorsRect(), this.setListRect(), this.setSiderbarRect()]);
        },
        setAnchorsRect: function setAnchorsRect() {
            var _this = this;
            return Promise.all(this.children.map(function (anchor) {
                return anchor.getRect('.van-index-anchor-wrapper').then(function (rect) {
                    Object.assign(anchor, {
                        height: rect.height,
                        top: rect.top + _this.data.scrollTop
                    });
                });
            }));
        },
        setListRect: function setListRect() {
            var _this = this;
            return this.getRect('.van-index-bar').then(function (rect) {
                Object.assign(_this, {
                    height: rect.height,
                    top: rect.top + _this.data.scrollTop
                });
            });
        },
        setSiderbarRect: function setSiderbarRect() {
            var _this = this;
            return this.getRect('.van-index-bar__sidebar').then(function (res) {
                _this.sidebar = {
                    height: res.height,
                    top: res.top
                };
            });
        },
        setDiffData: function setDiffData(_a) {
            var target = _a.target,
                data = _a.data;
            var diffData = {};
            Object.keys(data).forEach(function (key) {
                if (target.data[key] !== data[key]) {
                    diffData[key] = data[key];
                }
            });
            if (Object.keys(diffData).length) {
                target.setData(diffData);
            }
        },
        getAnchorRect: function getAnchorRect(anchor) {
            return anchor.getRect('.van-index-anchor-wrapper').then(function (rect) {
                return {
                    height: rect.height,
                    top: rect.top
                };
            });
        },
        getActiveAnchorIndex: function getActiveAnchorIndex() {
            var children = this.children;
            var _a = this.data,
                sticky = _a.sticky,
                scrollTop = _a.scrollTop,
                stickyOffsetTop = _a.stickyOffsetTop;
            for (var i = this.children.length - 1; i >= 0; i--) {
                var preAnchorHeight = i > 0 ? children[i - 1].height : 0;
                var reachTop = sticky ? preAnchorHeight + stickyOffsetTop : 0;
                if (reachTop + scrollTop >= children[i].top) {
                    return i;
                }
            }
            return -1;
        },
        onScroll: function onScroll() {
            var _this = this;
            var _a = this.children,
                children = _a === void 0 ? [] : _a;
            if (!children.length) {
                return;
            }
            var _b = this.data,
                sticky = _b.sticky,
                stickyOffsetTop = _b.stickyOffsetTop,
                zIndex = _b.zIndex,
                highlightColor = _b.highlightColor,
                scrollTop = _b.scrollTop;
            var active = this.getActiveAnchorIndex();
            this.setDiffData({
                target: this,
                data: {
                    activeAnchorIndex: active
                }
            });
            if (sticky) {
                var isActiveAnchorSticky_1 = false;
                if (active !== -1) {
                    isActiveAnchorSticky_1 = children[active].top <= stickyOffsetTop + scrollTop;
                }
                children.forEach(function (item, index) {
                    if (index === active) {
                        var wrapperStyle = '';
                        var anchorStyle = "\n              color: " + highlightColor + ";\n            ";
                        if (isActiveAnchorSticky_1) {
                            wrapperStyle = "\n                height: " + children[index].height + "px;\n              ";
                            anchorStyle = "\n                position: fixed;\n                top: " + stickyOffsetTop + "px;\n                z-index: " + zIndex + ";\n                color: " + highlightColor + ";\n              ";
                        }
                        _this.setDiffData({
                            target: item,
                            data: {
                                active: true,
                                anchorStyle: anchorStyle,
                                wrapperStyle: wrapperStyle
                            }
                        });
                    } else if (index === active - 1) {
                        var currentAnchor = children[index];
                        var currentOffsetTop = currentAnchor.top;
                        var targetOffsetTop = index === children.length - 1 ? _this.top : children[index + 1].top;
                        var parentOffsetHeight = targetOffsetTop - currentOffsetTop;
                        var translateY = parentOffsetHeight - currentAnchor.height;
                        var anchorStyle = "\n              position: relative;\n              transform: translate3d(0, " + translateY + "px, 0);\n              z-index: " + zIndex + ";\n              color: " + highlightColor + ";\n            ";
                        _this.setDiffData({
                            target: item,
                            data: {
                                active: true,
                                anchorStyle: anchorStyle
                            }
                        });
                    } else {
                        _this.setDiffData({
                            target: item,
                            data: {
                                active: false,
                                anchorStyle: '',
                                wrapperStyle: ''
                            }
                        });
                    }
                });
            }
        },
        onClick: function onClick(event) {
            this.scrollToAnchor(event.target.dataset.index);
        },
        onTouchMove: function onTouchMove(event) {
            var sidebarLength = this.children.length;
            var touch = event.touches[0];
            var itemHeight = this.sidebar.height / sidebarLength;
            var index = Math.floor((touch.clientY - this.sidebar.top) / itemHeight);
            if (index < 0) {
                index = 0;
            } else if (index > sidebarLength - 1) {
                index = sidebarLength - 1;
            }
            this.scrollToAnchor(index);
        },
        onTouchStop: function onTouchStop() {
            this.scrollToAnchorIndex = null;
        },
        scrollToAnchor: function scrollToAnchor(index) {
            var _this = this;
            if (typeof index !== 'number' || this.scrollToAnchorIndex === index) {
                return;
            }
            this.scrollToAnchorIndex = index;
            var anchor = this.children.find(function (item) {
                return item.data.index === _this.data.indexList[index];
            });
            if (anchor) {
                this.$emit('select', anchor.data.index);
                wx.pageScrollTo({
                    duration: 0,
                    scrollTop: anchor.top
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiY29sb3JfMSIsImluZGV4TGlzdCIsImNoYXJDb2RlT2ZBIiwiY2hhckNvZGVBdCIsImkiLCJwdXNoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwiVmFudENvbXBvbmVudCIsInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJjdXJyZW50IiwibGlua2VkIiwidXBkYXRlRGF0YSIsImxpbmtDaGFuZ2VkIiwidW5saW5rZWQiLCJwcm9wcyIsInN0aWNreSIsIkJvb2xlYW4iLCJ6SW5kZXgiLCJOdW1iZXIiLCJoaWdobGlnaHRDb2xvciIsIkdSRUVOIiwic2Nyb2xsVG9wIiwib2JzZXJ2ZXIiLCJzdGlja3lPZmZzZXRUb3AiLCJBcnJheSIsImRhdGEiLCJhY3RpdmVBbmNob3JJbmRleCIsInNob3dTaWRlYmFyIiwibWV0aG9kcyIsIl90aGlzIiwidGltZXIiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiY2hpbGRyZW4iLCJnZXRSZWxhdGlvbk5vZGVzIiwic2V0RGF0YSIsImxlbmd0aCIsInNldFJlY3QiLCJ0aGVuIiwib25TY3JvbGwiLCJQcm9taXNlIiwiYWxsIiwic2V0QW5jaG9yc1JlY3QiLCJzZXRMaXN0UmVjdCIsInNldFNpZGVyYmFyUmVjdCIsIm1hcCIsImFuY2hvciIsImdldFJlY3QiLCJyZWN0IiwiYXNzaWduIiwiaGVpZ2h0IiwidG9wIiwicmVzIiwic2lkZWJhciIsInNldERpZmZEYXRhIiwiX2EiLCJ0YXJnZXQiLCJkaWZmRGF0YSIsImtleXMiLCJmb3JFYWNoIiwia2V5IiwiZ2V0QW5jaG9yUmVjdCIsImdldEFjdGl2ZUFuY2hvckluZGV4IiwicHJlQW5jaG9ySGVpZ2h0IiwicmVhY2hUb3AiLCJfYiIsImFjdGl2ZSIsImlzQWN0aXZlQW5jaG9yU3RpY2t5XzEiLCJpdGVtIiwiaW5kZXgiLCJ3cmFwcGVyU3R5bGUiLCJhbmNob3JTdHlsZSIsImN1cnJlbnRBbmNob3IiLCJjdXJyZW50T2Zmc2V0VG9wIiwidGFyZ2V0T2Zmc2V0VG9wIiwicGFyZW50T2Zmc2V0SGVpZ2h0IiwidHJhbnNsYXRlWSIsIm9uQ2xpY2siLCJldmVudCIsInNjcm9sbFRvQW5jaG9yIiwiZGF0YXNldCIsIm9uVG91Y2hNb3ZlIiwic2lkZWJhckxlbmd0aCIsInRvdWNoIiwidG91Y2hlcyIsIml0ZW1IZWlnaHQiLCJNYXRoIiwiZmxvb3IiLCJjbGllbnRZIiwib25Ub3VjaFN0b3AiLCJzY3JvbGxUb0FuY2hvckluZGV4IiwiZmluZCIsIiRlbWl0Iiwid3giLCJwYWdlU2Nyb2xsVG8iLCJkdXJhdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLGlCQUFSLENBQWQ7QUFDQSxJQUFJRSxZQUFZLHFCQUFZO0FBQ3hCLFFBQUlBLFlBQVksRUFBaEI7QUFDQSxRQUFJQyxjQUFjLElBQUlDLFVBQUosQ0FBZSxDQUFmLENBQWxCO0FBQ0EsU0FBSyxJQUFJQyxJQUFJLENBQWIsRUFBZ0JBLElBQUksRUFBcEIsRUFBd0JBLEdBQXhCLEVBQTZCO0FBQ3pCSCxrQkFBVUksSUFBVixDQUFlQyxPQUFPQyxZQUFQLENBQW9CTCxjQUFjRSxDQUFsQyxDQUFmO0FBQ0g7QUFDRCxXQUFPSCxTQUFQO0FBQ0gsQ0FQRDtBQVFBSCxZQUFZVSxhQUFaLENBQTBCO0FBQ3RCQyxjQUFVO0FBQ05DLGNBQU0sY0FEQTtBQUVOQyxjQUFNLFlBRkE7QUFHTkMsaUJBQVMsV0FISDtBQUlOQyxnQkFBUSxrQkFBWTtBQUNoQixpQkFBS0MsVUFBTDtBQUNILFNBTks7QUFPTkMscUJBQWEsdUJBQVk7QUFDckIsaUJBQUtELFVBQUw7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QUFWLEVBQWlCO0FBQzdCLGdCQUFJeEMsUUFBUSxJQUFaO0FBQ0EsZ0JBQUksT0FBT3dDLEtBQVAsS0FBaUIsUUFBakIsSUFBNkIsS0FBS3FCLG1CQUFMLEtBQTZCckIsS0FBOUQsRUFBcUU7QUFDakU7QUFDSDtBQUNELGlCQUFLcUIsbUJBQUwsR0FBMkJyQixLQUEzQjtBQUNBLGdCQUFJdkIsU0FBUyxLQUFLYixRQUFMLENBQWMwRCxJQUFkLENBQW1CLFVBQVV2QixJQUFWLEVBQWdCO0FBQzVDLHVCQUFPQSxLQUFLM0MsSUFBTCxDQUFVNEMsS0FBVixLQUFvQnhDLE1BQU1KLElBQU4sQ0FBVzNCLFNBQVgsQ0FBcUJ1RSxLQUFyQixDQUEzQjtBQUNILGFBRlksQ0FBYjtBQUdBLGdCQUFJdkIsTUFBSixFQUFZO0FBQ1IscUJBQUs4QyxLQUFMLENBQVcsUUFBWCxFQUFxQjlDLE9BQU9yQixJQUFQLENBQVk0QyxLQUFqQztBQUNBd0IsbUJBQUdDLFlBQUgsQ0FBZ0I7QUFDWkMsOEJBQVUsQ0FERTtBQUVaMUUsK0JBQVd5QixPQUFPSztBQUZOLGlCQUFoQjtBQUlIO0FBQ0o7QUExTEk7QUE5Q2EsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIGNvbG9yXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbG9yXCIpO1xudmFyIGluZGV4TGlzdCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaW5kZXhMaXN0ID0gW107XG4gICAgdmFyIGNoYXJDb2RlT2ZBID0gJ0EnLmNoYXJDb2RlQXQoMCk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCAyNjsgaSsrKSB7XG4gICAgICAgIGluZGV4TGlzdC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoY2hhckNvZGVPZkEgKyBpKSk7XG4gICAgfVxuICAgIHJldHVybiBpbmRleExpc3Q7XG59O1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgcmVsYXRpb246IHtcbiAgICAgICAgbmFtZTogJ2luZGV4LWFuY2hvcicsXG4gICAgICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcbiAgICAgICAgY3VycmVudDogJ2luZGV4LWJhcicsXG4gICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVEYXRhKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGxpbmtDaGFuZ2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZURhdGEoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5saW5rZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0YSgpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBwcm9wczoge1xuICAgICAgICBzdGlja3k6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxXG4gICAgICAgIH0sXG4gICAgICAgIGhpZ2hsaWdodENvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogY29sb3JfMS5HUkVFTlxuICAgICAgICB9LFxuICAgICAgICBzY3JvbGxUb3A6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdvblNjcm9sbCdcbiAgICAgICAgfSxcbiAgICAgICAgc3RpY2t5T2Zmc2V0VG9wOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMFxuICAgICAgICB9LFxuICAgICAgICBpbmRleExpc3Q6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgdmFsdWU6IGluZGV4TGlzdCgpXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgYWN0aXZlQW5jaG9ySW5kZXg6IG51bGwsXG4gICAgICAgIHNob3dTaWRlYmFyOiBmYWxzZVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGVEYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy50aW1lciAmJiBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY2hpbGRyZW4gPSBfdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9pbmRleC1hbmNob3IvaW5kZXgnKTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd1NpZGViYXI6ICEhX3RoaXMuY2hpbGRyZW4ubGVuZ3RoXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0UmVjdCgpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vblNjcm9sbCgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSwgMCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFJlY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRBbmNob3JzUmVjdCgpLFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TGlzdFJlY3QoKSxcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNpZGVyYmFyUmVjdCgpXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0QW5jaG9yc1JlY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwodGhpcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGFuY2hvcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBhbmNob3JcbiAgICAgICAgICAgICAgICAgICAgLmdldFJlY3QoJy52YW4taW5kZXgtYW5jaG9yLXdyYXBwZXInKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVjdCkge1xuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKGFuY2hvciwge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiByZWN0LmhlaWdodCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogcmVjdC50b3AgKyBfdGhpcy5kYXRhLnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0TGlzdFJlY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWN0KCcudmFuLWluZGV4LWJhcicpLnRoZW4oZnVuY3Rpb24gKHJlY3QpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKF90aGlzLCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogcmVjdC50b3AgKyBfdGhpcy5kYXRhLnNjcm9sbFRvcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFNpZGVyYmFyUmVjdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJlY3QoJy52YW4taW5kZXgtYmFyX19zaWRlYmFyJykudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2lkZWJhciA9IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiByZXMuaGVpZ2h0LFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHJlcy50b3BcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldERpZmZEYXRhOiBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSBfYS50YXJnZXQsIGRhdGEgPSBfYS5kYXRhO1xuICAgICAgICAgICAgdmFyIGRpZmZEYXRhID0ge307XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0LmRhdGFba2V5XSAhPT0gZGF0YVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGRpZmZEYXRhW2tleV0gPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoZGlmZkRhdGEpLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC5zZXREYXRhKGRpZmZEYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QW5jaG9yUmVjdDogZnVuY3Rpb24gKGFuY2hvcikge1xuICAgICAgICAgICAgcmV0dXJuIGFuY2hvclxuICAgICAgICAgICAgICAgIC5nZXRSZWN0KCcudmFuLWluZGV4LWFuY2hvci13cmFwcGVyJylcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVjdCkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHJlY3QuaGVpZ2h0LFxuICAgICAgICAgICAgICAgIHRvcDogcmVjdC50b3BcbiAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0QWN0aXZlQW5jaG9ySW5kZXg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBjaGlsZHJlbiA9IHRoaXMuY2hpbGRyZW47XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIHN0aWNreSA9IF9hLnN0aWNreSwgc2Nyb2xsVG9wID0gX2Euc2Nyb2xsVG9wLCBzdGlja3lPZmZzZXRUb3AgPSBfYS5zdGlja3lPZmZzZXRUb3A7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgICAgIHZhciBwcmVBbmNob3JIZWlnaHQgPSBpID4gMCA/IGNoaWxkcmVuW2kgLSAxXS5oZWlnaHQgOiAwO1xuICAgICAgICAgICAgICAgIHZhciByZWFjaFRvcCA9IHN0aWNreSA/IHByZUFuY2hvckhlaWdodCArIHN0aWNreU9mZnNldFRvcCA6IDA7XG4gICAgICAgICAgICAgICAgaWYgKHJlYWNoVG9wICsgc2Nyb2xsVG9wID49IGNoaWxkcmVuW2ldLnRvcCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0sXG4gICAgICAgIG9uU2Nyb2xsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5jaGlsZHJlbiwgY2hpbGRyZW4gPSBfYSA9PT0gdm9pZCAwID8gW10gOiBfYTtcbiAgICAgICAgICAgIGlmICghY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIF9iID0gdGhpcy5kYXRhLCBzdGlja3kgPSBfYi5zdGlja3ksIHN0aWNreU9mZnNldFRvcCA9IF9iLnN0aWNreU9mZnNldFRvcCwgekluZGV4ID0gX2IuekluZGV4LCBoaWdobGlnaHRDb2xvciA9IF9iLmhpZ2hsaWdodENvbG9yLCBzY3JvbGxUb3AgPSBfYi5zY3JvbGxUb3A7XG4gICAgICAgICAgICB2YXIgYWN0aXZlID0gdGhpcy5nZXRBY3RpdmVBbmNob3JJbmRleCgpO1xuICAgICAgICAgICAgdGhpcy5zZXREaWZmRGF0YSh7XG4gICAgICAgICAgICAgICAgdGFyZ2V0OiB0aGlzLFxuICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlQW5jaG9ySW5kZXg6IGFjdGl2ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHN0aWNreSkge1xuICAgICAgICAgICAgICAgIHZhciBpc0FjdGl2ZUFuY2hvclN0aWNreV8xID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGFjdGl2ZSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgaXNBY3RpdmVBbmNob3JTdGlja3lfMSA9XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlblthY3RpdmVdLnRvcCA8PSBzdGlja3lPZmZzZXRUb3AgKyBzY3JvbGxUb3A7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgd3JhcHBlclN0eWxlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYW5jaG9yU3R5bGUgPSBcIlxcbiAgICAgICAgICAgICAgY29sb3I6IFwiICsgaGlnaGxpZ2h0Q29sb3IgKyBcIjtcXG4gICAgICAgICAgICBcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0FjdGl2ZUFuY2hvclN0aWNreV8xKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3JhcHBlclN0eWxlID0gXCJcXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIiArIGNoaWxkcmVuW2luZGV4XS5oZWlnaHQgKyBcInB4O1xcbiAgICAgICAgICAgICAgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5jaG9yU3R5bGUgPSBcIlxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgICAgICAgICAgICAgIHRvcDogXCIgKyBzdGlja3lPZmZzZXRUb3AgKyBcInB4O1xcbiAgICAgICAgICAgICAgICB6LWluZGV4OiBcIiArIHpJbmRleCArIFwiO1xcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIgKyBoaWdobGlnaHRDb2xvciArIFwiO1xcbiAgICAgICAgICAgICAgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXREaWZmRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JTdHlsZTogYW5jaG9yU3R5bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJTdHlsZTogd3JhcHBlclN0eWxlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoaW5kZXggPT09IGFjdGl2ZSAtIDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyZW50QW5jaG9yID0gY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRPZmZzZXRUb3AgPSBjdXJyZW50QW5jaG9yLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXRPZmZzZXRUb3AgPSBpbmRleCA9PT0gY2hpbGRyZW4ubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3RoaXMudG9wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjaGlsZHJlbltpbmRleCArIDFdLnRvcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRPZmZzZXRIZWlnaHQgPSB0YXJnZXRPZmZzZXRUb3AgLSBjdXJyZW50T2Zmc2V0VG9wO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZVkgPSBwYXJlbnRPZmZzZXRIZWlnaHQgLSBjdXJyZW50QW5jaG9yLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbmNob3JTdHlsZSA9IFwiXFxuICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIFwiICsgdHJhbnNsYXRlWSArIFwicHgsIDApO1xcbiAgICAgICAgICAgICAgei1pbmRleDogXCIgKyB6SW5kZXggKyBcIjtcXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiArIGhpZ2hsaWdodENvbG9yICsgXCI7XFxuICAgICAgICAgICAgXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXREaWZmRGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JTdHlsZTogYW5jaG9yU3R5bGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnNldERpZmZEYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmNob3JTdHlsZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdyYXBwZXJTdHlsZTogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9BbmNob3IoZXZlbnQudGFyZ2V0LmRhdGFzZXQuaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgc2lkZWJhckxlbmd0aCA9IHRoaXMuY2hpbGRyZW4ubGVuZ3RoO1xuICAgICAgICAgICAgdmFyIHRvdWNoID0gZXZlbnQudG91Y2hlc1swXTtcbiAgICAgICAgICAgIHZhciBpdGVtSGVpZ2h0ID0gdGhpcy5zaWRlYmFyLmhlaWdodCAvIHNpZGViYXJMZW5ndGg7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBNYXRoLmZsb29yKCh0b3VjaC5jbGllbnRZIC0gdGhpcy5zaWRlYmFyLnRvcCkgLyBpdGVtSGVpZ2h0KTtcbiAgICAgICAgICAgIGlmIChpbmRleCA8IDApIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChpbmRleCA+IHNpZGViYXJMZW5ndGggLSAxKSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBzaWRlYmFyTGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9BbmNob3IoaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICBvblRvdWNoU3RvcDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0FuY2hvckluZGV4ID0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgc2Nyb2xsVG9BbmNob3I6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaW5kZXggIT09ICdudW1iZXInIHx8IHRoaXMuc2Nyb2xsVG9BbmNob3JJbmRleCA9PT0gaW5kZXgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvQW5jaG9ySW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIHZhciBhbmNob3IgPSB0aGlzLmNoaWxkcmVuLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbS5kYXRhLmluZGV4ID09PSBfdGhpcy5kYXRhLmluZGV4TGlzdFtpbmRleF07XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChhbmNob3IpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBhbmNob3IuZGF0YS5pbmRleCk7XG4gICAgICAgICAgICAgICAgd3gucGFnZVNjcm9sbFRvKHtcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDAsXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogYW5jaG9yLnRvcFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=