"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var utils_1 = require('./../common/utils.js');
var ARRAY = [];
component_1.VantComponent({
    field: true,
    relation: {
        name: 'dropdown-item',
        type: 'descendant',
        current: 'dropdown-menu',
        linked: function linked() {
            this.updateItemListData();
        },
        unlinked: function unlinked() {
            this.updateItemListData();
        }
    },
    props: {
        activeColor: {
            type: String,
            observer: 'updateChildrenData'
        },
        overlay: {
            type: Boolean,
            value: true,
            observer: 'updateChildrenData'
        },
        zIndex: {
            type: Number,
            value: 10
        },
        duration: {
            type: Number,
            value: 200,
            observer: 'updateChildrenData'
        },
        direction: {
            type: String,
            value: 'down',
            observer: 'updateChildrenData'
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true,
            observer: 'updateChildrenData'
        },
        closeOnClickOutside: {
            type: Boolean,
            value: true
        }
    },
    data: {
        itemListData: []
    },
    beforeCreate: function beforeCreate() {
        var windowHeight = wx.getSystemInfoSync().windowHeight;
        this.windowHeight = windowHeight;
        ARRAY.push(this);
    },
    destroyed: function destroyed() {
        var _this = this;
        ARRAY = ARRAY.filter(function (item) {
            return item !== _this;
        });
    },
    methods: {
        updateItemListData: function updateItemListData() {
            this.setData({
                itemListData: this.children.map(function (child) {
                    return child.data;
                })
            });
        },
        updateChildrenData: function updateChildrenData() {
            this.children.forEach(function (child) {
                child.updateDataFromParent();
            });
        },
        toggleItem: function toggleItem(active) {
            this.children.forEach(function (item, index) {
                var showPopup = item.data.showPopup;
                if (index === active) {
                    item.toggle();
                } else if (showPopup) {
                    item.toggle(false, { immediate: true });
                }
            });
        },
        close: function close() {
            this.children.forEach(function (child) {
                child.toggle(false, { immediate: true });
            });
        },
        getChildWrapperStyle: function getChildWrapperStyle() {
            var _this = this;
            var _a = this.data,
                zIndex = _a.zIndex,
                direction = _a.direction;
            return this.getRect('.van-dropdown-menu').then(function (rect) {
                var _a = rect.top,
                    top = _a === void 0 ? 0 : _a,
                    _b = rect.bottom,
                    bottom = _b === void 0 ? 0 : _b;
                var offset = direction === 'down' ? bottom : _this.windowHeight - top;
                var wrapperStyle = "z-index: " + zIndex + ";";
                if (direction === 'down') {
                    wrapperStyle += "top: " + utils_1.addUnit(offset) + ";";
                } else {
                    wrapperStyle += "bottom: " + utils_1.addUnit(offset) + ";";
                }
                return wrapperStyle;
            });
        },
        onTitleTap: function onTitleTap(event) {
            var _this = this;
            var index = event.currentTarget.dataset.index;
            var child = this.children[index];
            if (!child.data.disabled) {
                ARRAY.forEach(function (menuItem) {
                    if (menuItem && menuItem.data.closeOnClickOutside && menuItem !== _this) {
                        menuItem.close();
                    }
                });
                this.toggleItem(index);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsIkFSUkFZIiwiVmFudENvbXBvbmVudCIsImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImN1cnJlbnQiLCJsaW5rZWQiLCJ1cGRhdGVJdGVtTGlzdERhdGEiLCJ1bmxpbmtlZCIsInByb3BzIiwiYWN0aXZlQ29sb3IiLCJTdHJpbmciLCJvYnNlcnZlciIsIm92ZXJsYXkiLCJCb29sZWFuIiwiekluZGV4IiwiTnVtYmVyIiwiZHVyYXRpb24iLCJkaXJlY3Rpb24iLCJjbG9zZU9uQ2xpY2tPdmVybGF5IiwiY2xvc2VPbkNsaWNrT3V0c2lkZSIsImRhdGEiLCJpdGVtTGlzdERhdGEiLCJiZWZvcmVDcmVhdGUiLCJ3aW5kb3dIZWlnaHQiLCJ3eCIsImdldFN5c3RlbUluZm9TeW5jIiwicHVzaCIsImRlc3Ryb3llZCIsIl90aGlzIiwiZmlsdGVyIiwiaXRlbSIsIm1ldGhvZHMiLCJzZXREYXRhIiwiY2hpbGRyZW4iLCJtYXAiLCJjaGlsZCIsInVwZGF0ZUNoaWxkcmVuRGF0YSIsImZvckVhY2giLCJ1cGRhdGVEYXRhRnJvbVBhcmVudCIsInRvZ2dsZUl0ZW0iLCJhY3RpdmUiLCJpbmRleCIsInNob3dQb3B1cCIsInRvZ2dsZSIsImltbWVkaWF0ZSIsImNsb3NlIiwiZ2V0Q2hpbGRXcmFwcGVyU3R5bGUiLCJfYSIsImdldFJlY3QiLCJ0aGVuIiwicmVjdCIsInRvcCIsIl9iIiwiYm90dG9tIiwib2Zmc2V0Iiwid3JhcHBlclN0eWxlIiwiYWRkVW5pdCIsIm9uVGl0bGVUYXAiLCJldmVudCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZGlzYWJsZWQiLCJtZW51SXRlbSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlB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QUFMLENBQWNRLEtBQWQsQ0FBWjtBQUNBLGdCQUFJLENBQUNOLE1BQU1mLElBQU4sQ0FBV3lDLFFBQWhCLEVBQTBCO0FBQ3RCL0Qsc0JBQU11QyxPQUFOLENBQWMsVUFBVXlCLFFBQVYsRUFBb0I7QUFDOUIsd0JBQUlBLFlBQ0FBLFNBQVMxQyxJQUFULENBQWNELG1CQURkLElBRUEyQyxhQUFhbEMsS0FGakIsRUFFd0I7QUFDcEJrQyxpQ0FBU2pCLEtBQVQ7QUFDSDtBQUNKLGlCQU5EO0FBT0EscUJBQUtOLFVBQUwsQ0FBZ0JFLEtBQWhCO0FBQ0g7QUFDSjtBQXpESTtBQTNEYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHNcIik7XG52YXIgQVJSQVkgPSBbXTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIGZpZWxkOiB0cnVlLFxuICAgIHJlbGF0aW9uOiB7XG4gICAgICAgIG5hbWU6ICdkcm9wZG93bi1pdGVtJyxcbiAgICAgICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxuICAgICAgICBjdXJyZW50OiAnZHJvcGRvd24tbWVudScsXG4gICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVJdGVtTGlzdERhdGEoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdW5saW5rZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlSXRlbUxpc3REYXRhKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHByb3BzOiB7XG4gICAgICAgIGFjdGl2ZUNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuRGF0YSdcbiAgICAgICAgfSxcbiAgICAgICAgb3ZlcmxheToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbkRhdGEnXG4gICAgICAgIH0sXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDEwXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMjAwLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVDaGlsZHJlbkRhdGEnXG4gICAgICAgIH0sXG4gICAgICAgIGRpcmVjdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdkb3duJyxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlQ2hpbGRyZW5EYXRhJ1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZU9uQ2xpY2tPdmVybGF5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZUNoaWxkcmVuRGF0YSdcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VPbkNsaWNrT3V0c2lkZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGRhdGE6IHtcbiAgICAgICAgaXRlbUxpc3REYXRhOiBbXVxuICAgIH0sXG4gICAgYmVmb3JlQ3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3aW5kb3dIZWlnaHQgPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpLndpbmRvd0hlaWdodDtcbiAgICAgICAgdGhpcy53aW5kb3dIZWlnaHQgPSB3aW5kb3dIZWlnaHQ7XG4gICAgICAgIEFSUkFZLnB1c2godGhpcyk7XG4gICAgfSxcbiAgICBkZXN0cm95ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgQVJSQVkgPSBBUlJBWS5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0gIT09IF90aGlzOyB9KTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdXBkYXRlSXRlbUxpc3REYXRhOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGl0ZW1MaXN0RGF0YTogdGhpcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZC5kYXRhOyB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUNoaWxkcmVuRGF0YTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xuICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZURhdGFGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlSXRlbTogZnVuY3Rpb24gKGFjdGl2ZSkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHZhciBzaG93UG9wdXAgPSBpdGVtLmRhdGEuc2hvd1BvcHVwO1xuICAgICAgICAgICAgICAgIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0udG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNob3dQb3B1cCkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtLnRvZ2dsZShmYWxzZSwgeyBpbW1lZGlhdGU6IHRydWUgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQudG9nZ2xlKGZhbHNlLCB7IGltbWVkaWF0ZTogdHJ1ZSB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDaGlsZFdyYXBwZXJTdHlsZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgekluZGV4ID0gX2EuekluZGV4LCBkaXJlY3Rpb24gPSBfYS5kaXJlY3Rpb247XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRSZWN0KCcudmFuLWRyb3Bkb3duLW1lbnUnKS50aGVuKGZ1bmN0aW9uIChyZWN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIF9hID0gcmVjdC50b3AsIHRvcCA9IF9hID09PSB2b2lkIDAgPyAwIDogX2EsIF9iID0gcmVjdC5ib3R0b20sIGJvdHRvbSA9IF9iID09PSB2b2lkIDAgPyAwIDogX2I7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IGRpcmVjdGlvbiA9PT0gJ2Rvd24nID8gYm90dG9tIDogX3RoaXMud2luZG93SGVpZ2h0IC0gdG9wO1xuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyU3R5bGUgPSBcInotaW5kZXg6IFwiICsgekluZGV4ICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJ2Rvd24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHdyYXBwZXJTdHlsZSArPSBcInRvcDogXCIgKyB1dGlsc18xLmFkZFVuaXQob2Zmc2V0KSArIFwiO1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlclN0eWxlICs9IFwiYm90dG9tOiBcIiArIHV0aWxzXzEuYWRkVW5pdChvZmZzZXQpICsgXCI7XCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVyU3R5bGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgb25UaXRsZVRhcDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgdmFyIGNoaWxkID0gdGhpcy5jaGlsZHJlbltpbmRleF07XG4gICAgICAgICAgICBpZiAoIWNoaWxkLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICBBUlJBWS5mb3JFYWNoKGZ1bmN0aW9uIChtZW51SXRlbSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWVudUl0ZW0gJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lbnVJdGVtLmRhdGEuY2xvc2VPbkNsaWNrT3V0c2lkZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgbWVudUl0ZW0gIT09IF90aGlzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtZW51SXRlbS5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy50b2dnbGVJdGVtKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19