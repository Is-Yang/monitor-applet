"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var ROOT_ELEMENT = '.van-sticky';
component_1.VantComponent({
    props: {
        zIndex: {
            type: Number,
            value: 99
        },
        offsetTop: {
            type: Number,
            value: 0,
            observer: 'observeContent'
        },
        disabled: {
            type: Boolean,
            observer: function observer(value) {
                if (!this.mounted) {
                    return;
                }
                value ? this.disconnectObserver() : this.initObserver();
            }
        },
        container: {
            type: null,
            observer: function observer(target) {
                if (typeof target !== 'function' || !this.data.height) {
                    return;
                }
                this.observeContainer();
                this.updateFixed();
            }
        }
    },
    data: {
        height: 0,
        fixed: false
    },
    methods: {
        getContainerRect: function getContainerRect() {
            var nodesRef = this.data.container();
            return new Promise(function (resolve) {
                return nodesRef.boundingClientRect(resolve).exec();
            });
        },
        initObserver: function initObserver() {
            var _this = this;
            this.disconnectObserver();
            this.getRect(ROOT_ELEMENT).then(function (rect) {
                _this.setData({ height: rect.height });
                wx.nextTick(function () {
                    _this.observeContent();
                    _this.observeContainer();
                });
            });
        },
        updateFixed: function updateFixed() {
            var _this = this;
            Promise.all([this.getRect(ROOT_ELEMENT), this.getContainerRect()]).then(function (_a) {
                var content = _a[0],
                    container = _a[1];
                _this.setData({ height: content.height });
                _this.containerHeight = container.height;
                wx.nextTick(function () {
                    _this.setFixed(content.top);
                });
            });
        },
        disconnectObserver: function disconnectObserver(observerName) {
            if (observerName) {
                var observer = this[observerName];
                observer && observer.disconnect();
            } else {
                this.contentObserver && this.contentObserver.disconnect();
                this.containerObserver && this.containerObserver.disconnect();
            }
        },
        observeContent: function observeContent() {
            var _this = this;
            var offsetTop = this.data.offsetTop;
            this.disconnectObserver('contentObserver');
            var contentObserver = this.createIntersectionObserver({
                thresholds: [0.9, 1]
            });
            contentObserver.relativeToViewport({ top: -offsetTop });
            contentObserver.observe(ROOT_ELEMENT, function (res) {
                if (_this.data.disabled) {
                    return;
                }
                _this.setFixed(res.boundingClientRect.top);
            });
            this.contentObserver = contentObserver;
        },
        observeContainer: function observeContainer() {
            var _this = this;
            if (typeof this.data.container !== 'function') {
                return;
            }
            var height = this.data.height;
            this.getContainerRect().then(function (rect) {
                _this.containerHeight = rect.height;
                _this.disconnectObserver('containerObserver');
                var containerObserver = _this.createIntersectionObserver({
                    thresholds: [0.9, 1]
                });
                _this.containerObserver = containerObserver;
                containerObserver.relativeToViewport({
                    top: _this.containerHeight - height
                });
                containerObserver.observe(ROOT_ELEMENT, function (res) {
                    if (_this.data.disabled) {
                        return;
                    }
                    _this.setFixed(res.boundingClientRect.top);
                });
            });
        },
        setFixed: function setFixed(top) {
            var _a = this.data,
                offsetTop = _a.offsetTop,
                height = _a.height;
            var containerHeight = this.containerHeight;
            var fixed = containerHeight && height ? top >= height - containerHeight && top < offsetTop : top < offsetTop;
            this.$emit('scroll', {
                scrollTop: top,
                isFixed: fixed
            });
            this.setData({ fixed: fixed });
        }
    },
    mounted: function mounted() {
        this.mounted = true;
        if (!this.data.disabled) {
            this.initObserver();
        }
    },
    destroyed: function destroyed() {
        this.disconnectObserver();
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiUk9PVF9FTEVNRU5UIiwiVmFudENvbXBvbmVudCIsInByb3BzIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsIm9mZnNldFRvcCIsIm9ic2VydmVyIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibW91bnRlZCIsImRpc2Nvbm5lY3RPYnNlcnZlciIsImluaXRPYnNlcnZlciIsImNvbnRhaW5lciIsInRhcmdldCIsImRhdGEiLCJoZWlnaHQiLCJvYnNlcnZlQ29udGFpbmVyIiwidXBkYXRlRml4ZWQiLCJmaXhlZCIsIm1ldGhvZHMiLCJnZXRDb250YWluZXJSZWN0Iiwibm9kZXNSZWYiLCJQcm9taXNlIiwicmVzb2x2ZSIsImJvdW5kaW5nQ2xpZW50UmVjdCIsImV4ZWMiLCJfdGhpcyIsImdldFJlY3QiLCJ0aGVuIiwicmVjdCIsInNldERhdGEiLCJ3eCIsIm5leHRUaWNrIiwib2JzZXJ2ZUNvbnRlbnQiLCJhbGwiLCJfYSIsImNvbnRlbnQiLCJjb250YWluZXJIZWlnaHQiLCJzZXRGaXhlZCIsInRvcCIsIm9ic2VydmVyTmFtZSIsImRpc2Nvbm5lY3QiLCJjb250ZW50T2JzZXJ2ZXIiLCJjb250YWluZXJPYnNlcnZlciIsImNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyIiwidGhyZXNob2xkcyIsInJlbGF0aXZlVG9WaWV3cG9ydCIsIm9ic2VydmUiLCJyZXMiLCIkZW1pdCIsInNjcm9sbFRvcCIsImlzRml4ZWQiLCJkZXN0cm95ZWQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsZUFBZSxhQUFuQjtBQUNB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QixrQ0FBa0JJLE9BQWxCLENBQTBCaEQsWUFBMUIsRUFBd0MsVUFBVWlELEdBQVYsRUFBZTtBQUNuRCx3QkFBSXRCLE1BQU1aLElBQU4sQ0FBV1AsUUFBZixFQUF5QjtBQUNyQjtBQUNIO0FBQ0RtQiwwQkFBTVksUUFBTixDQUFlVSxJQUFJeEIsa0JBQUosQ0FBdUJlLEdBQXRDO0FBQ0gsaUJBTEQ7QUFNSCxhQWhCRDtBQWlCSCxTQTlFSTtBQStFTEQsa0JBQVUsa0JBQVVDLEdBQVYsRUFBZTtBQUNyQixnQkFBSUosS0FBSyxLQUFLckIsSUFBZDtBQUFBLGdCQUFvQlQsWUFBWThCLEdBQUc5QixTQUFuQztBQUFBLGdCQUE4Q1UsU0FBU29CLEdBQUdwQixNQUExRDtBQUNBLGdCQUFJc0Isa0JBQWtCLEtBQUtBLGVBQTNCO0FBQ0EsZ0JBQUluQixRQUFRbUIsbUJBQW1CdEIsTUFBbkIsR0FDTndCLE9BQU94QixTQUFTc0IsZUFBaEIsSUFBbUNFLE1BQU1sQyxTQURuQyxHQUVOa0MsTUFBTWxDLFNBRlo7QUFHQSxpQkFBSzRDLEtBQUwsQ0FBVyxRQUFYLEVBQXFCO0FBQ2pCQywyQkFBV1gsR0FETTtBQUVqQlkseUJBQVNqQztBQUZRLGFBQXJCO0FBSUEsaUJBQUtZLE9BQUwsQ0FBYSxFQUFFWixPQUFPQSxLQUFULEVBQWI7QUFDSDtBQTFGSSxLQW5DYTtBQStIdEJULGFBQVMsbUJBQVk7QUFDakIsYUFBS0EsT0FBTCxHQUFlLElBQWY7QUFDQSxZQUFJLENBQUMsS0FBS0ssSUFBTCxDQUFVUCxRQUFmLEVBQXlCO0FBQ3JCLGlCQUFLSSxZQUFMO0FBQ0g7QUFDSixLQXBJcUI7QUFxSXRCeUMsZUFBVyxxQkFBWTtBQUNuQixhQUFLMUMsa0JBQUw7QUFDSDtBQXZJcUIsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIFJPT1RfRUxFTUVOVCA9ICcudmFuLXN0aWNreSc7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiA5OVxuICAgICAgICB9LFxuICAgICAgICBvZmZzZXRUb3A6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdvYnNlcnZlQ29udGVudCdcbiAgICAgICAgfSxcbiAgICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLm1vdW50ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YWx1ZSA/IHRoaXMuZGlzY29ubmVjdE9ic2VydmVyKCkgOiB0aGlzLmluaXRPYnNlcnZlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBjb250YWluZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ICE9PSAnZnVuY3Rpb24nIHx8ICF0aGlzLmRhdGEuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5vYnNlcnZlQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaXhlZCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGhlaWdodDogMCxcbiAgICAgICAgZml4ZWQ6IGZhbHNlXG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGdldENvbnRhaW5lclJlY3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBub2Rlc1JlZiA9IHRoaXMuZGF0YS5jb250YWluZXIoKTtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBub2Rlc1JlZi5ib3VuZGluZ0NsaWVudFJlY3QocmVzb2x2ZSkuZXhlYygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGluaXRPYnNlcnZlcjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdE9ic2VydmVyKCk7XG4gICAgICAgICAgICB0aGlzLmdldFJlY3QoUk9PVF9FTEVNRU5UKS50aGVuKGZ1bmN0aW9uIChyZWN0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7IGhlaWdodDogcmVjdC5oZWlnaHQgfSk7XG4gICAgICAgICAgICAgICAgd3gubmV4dFRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vYnNlcnZlQ29udGVudCgpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5vYnNlcnZlQ29udGFpbmVyKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlRml4ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBQcm9taXNlLmFsbChbdGhpcy5nZXRSZWN0KFJPT1RfRUxFTUVOVCksIHRoaXMuZ2V0Q29udGFpbmVyUmVjdCgpXSkudGhlbihmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29udGVudCA9IF9hWzBdLCBjb250YWluZXIgPSBfYVsxXTtcbiAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKHsgaGVpZ2h0OiBjb250ZW50LmhlaWdodCB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb250YWluZXJIZWlnaHQgPSBjb250YWluZXIuaGVpZ2h0O1xuICAgICAgICAgICAgICAgIHd4Lm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0Rml4ZWQoY29udGVudC50b3ApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGRpc2Nvbm5lY3RPYnNlcnZlcjogZnVuY3Rpb24gKG9ic2VydmVyTmFtZSkge1xuICAgICAgICAgICAgaWYgKG9ic2VydmVyTmFtZSkge1xuICAgICAgICAgICAgICAgIHZhciBvYnNlcnZlciA9IHRoaXNbb2JzZXJ2ZXJOYW1lXTtcbiAgICAgICAgICAgICAgICBvYnNlcnZlciAmJiBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRPYnNlcnZlciAmJiB0aGlzLmNvbnRlbnRPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250YWluZXJPYnNlcnZlciAmJiB0aGlzLmNvbnRhaW5lck9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgb2JzZXJ2ZUNvbnRlbnQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0VG9wID0gdGhpcy5kYXRhLm9mZnNldFRvcDtcbiAgICAgICAgICAgIHRoaXMuZGlzY29ubmVjdE9ic2VydmVyKCdjb250ZW50T2JzZXJ2ZXInKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50T2JzZXJ2ZXIgPSB0aGlzLmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKHtcbiAgICAgICAgICAgICAgICB0aHJlc2hvbGRzOiBbMC45LCAxXVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250ZW50T2JzZXJ2ZXIucmVsYXRpdmVUb1ZpZXdwb3J0KHsgdG9wOiAtb2Zmc2V0VG9wIH0pO1xuICAgICAgICAgICAgY29udGVudE9ic2VydmVyLm9ic2VydmUoUk9PVF9FTEVNRU5ULCBmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgaWYgKF90aGlzLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfdGhpcy5zZXRGaXhlZChyZXMuYm91bmRpbmdDbGllbnRSZWN0LnRvcCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudE9ic2VydmVyID0gY29udGVudE9ic2VydmVyO1xuICAgICAgICB9LFxuICAgICAgICBvYnNlcnZlQ29udGFpbmVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmRhdGEuY29udGFpbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGhlaWdodCA9IHRoaXMuZGF0YS5oZWlnaHQ7XG4gICAgICAgICAgICB0aGlzLmdldENvbnRhaW5lclJlY3QoKS50aGVuKGZ1bmN0aW9uIChyZWN0KSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuY29udGFpbmVySGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG4gICAgICAgICAgICAgICAgX3RoaXMuZGlzY29ubmVjdE9ic2VydmVyKCdjb250YWluZXJPYnNlcnZlcicpO1xuICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJPYnNlcnZlciA9IF90aGlzLmNyZWF0ZUludGVyc2VjdGlvbk9ic2VydmVyKHtcbiAgICAgICAgICAgICAgICAgICAgdGhyZXNob2xkczogWzAuOSwgMV1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBfdGhpcy5jb250YWluZXJPYnNlcnZlciA9IGNvbnRhaW5lck9ic2VydmVyO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lck9ic2VydmVyLnJlbGF0aXZlVG9WaWV3cG9ydCh7XG4gICAgICAgICAgICAgICAgICAgIHRvcDogX3RoaXMuY29udGFpbmVySGVpZ2h0IC0gaGVpZ2h0XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyT2JzZXJ2ZXIub2JzZXJ2ZShST09UX0VMRU1FTlQsIGZ1bmN0aW9uIChyZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90aGlzLmRhdGEuZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXRGaXhlZChyZXMuYm91bmRpbmdDbGllbnRSZWN0LnRvcCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0Rml4ZWQ6IGZ1bmN0aW9uICh0b3ApIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgb2Zmc2V0VG9wID0gX2Eub2Zmc2V0VG9wLCBoZWlnaHQgPSBfYS5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVySGVpZ2h0ID0gdGhpcy5jb250YWluZXJIZWlnaHQ7XG4gICAgICAgICAgICB2YXIgZml4ZWQgPSBjb250YWluZXJIZWlnaHQgJiYgaGVpZ2h0XG4gICAgICAgICAgICAgICAgPyB0b3AgPj0gaGVpZ2h0IC0gY29udGFpbmVySGVpZ2h0ICYmIHRvcCA8IG9mZnNldFRvcFxuICAgICAgICAgICAgICAgIDogdG9wIDwgb2Zmc2V0VG9wO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2Nyb2xsJywge1xuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdG9wLFxuICAgICAgICAgICAgICAgIGlzRml4ZWQ6IGZpeGVkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGZpeGVkOiBmaXhlZCB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLm1vdW50ZWQgPSB0cnVlO1xuICAgICAgICBpZiAoIXRoaXMuZGF0YS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgdGhpcy5pbml0T2JzZXJ2ZXIoKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGVzdHJveWVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMuZGlzY29ubmVjdE9ic2VydmVyKCk7XG4gICAgfVxufSk7XG4iXX0=