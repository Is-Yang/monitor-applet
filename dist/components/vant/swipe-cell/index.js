"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var touch_1 = require('./../mixins/touch.js');
var utils_1 = require('./../common/utils.js');
var THRESHOLD = 0.3;
var ARRAY = [];
component_1.VantComponent({
    props: {
        disabled: Boolean,
        leftWidth: {
            type: Number,
            value: 0,
            observer: function observer(leftWidth) {
                if (leftWidth === void 0) {
                    leftWidth = 0;
                }
                if (this.offset > 0) {
                    this.swipeMove(leftWidth);
                }
            }
        },
        rightWidth: {
            type: Number,
            value: 0,
            observer: function observer(rightWidth) {
                if (rightWidth === void 0) {
                    rightWidth = 0;
                }
                if (this.offset < 0) {
                    this.swipeMove(-rightWidth);
                }
            }
        },
        asyncClose: Boolean,
        name: {
            type: [Number, String],
            value: ''
        }
    },
    mixins: [touch_1.touch],
    data: {
        catchMove: false
    },
    created: function created() {
        this.offset = 0;
        ARRAY.push(this);
    },
    destroyed: function destroyed() {
        var _this = this;
        ARRAY = ARRAY.filter(function (item) {
            return item !== _this;
        });
    },
    methods: {
        open: function open(position) {
            var _a = this.data,
                leftWidth = _a.leftWidth,
                rightWidth = _a.rightWidth;
            var offset = position === 'left' ? leftWidth : -rightWidth;
            this.swipeMove(offset);
            this.$emit('open', {
                position: position,
                name: this.data.name
            });
        },
        close: function close() {
            this.swipeMove(0);
        },
        swipeMove: function swipeMove(offset) {
            if (offset === void 0) {
                offset = 0;
            }
            this.offset = utils_1.range(offset, -this.data.rightWidth, this.data.leftWidth);
            var transform = "translate3d(" + this.offset + "px, 0, 0)";
            var transition = this.dragging ? 'none' : 'transform .6s cubic-bezier(0.18, 0.89, 0.32, 1)';
            this.setData({
                wrapperStyle: "\n        -webkit-transform: " + transform + ";\n        -webkit-transition: " + transition + ";\n        transform: " + transform + ";\n        transition: " + transition + ";\n      "
            });
        },
        swipeLeaveTransition: function swipeLeaveTransition() {
            var _a = this.data,
                leftWidth = _a.leftWidth,
                rightWidth = _a.rightWidth;
            var offset = this.offset;
            if (rightWidth > 0 && -offset > rightWidth * THRESHOLD) {
                this.open('right');
            } else if (leftWidth > 0 && offset > leftWidth * THRESHOLD) {
                this.open('left');
            } else {
                this.swipeMove(0);
            }
            this.setData({ catchMove: false });
        },
        startDrag: function startDrag(event) {
            if (this.data.disabled) {
                return;
            }
            this.startOffset = this.offset;
            this.touchStart(event);
        },
        noop: function noop() {},
        onDrag: function onDrag(event) {
            var _this = this;
            if (this.data.disabled) {
                return;
            }
            this.touchMove(event);
            if (this.direction !== 'horizontal') {
                return;
            }
            this.dragging = true;
            ARRAY.filter(function (item) {
                return item !== _this;
            }).forEach(function (item) {
                return item.close();
            });
            this.setData({ catchMove: true });
            this.swipeMove(this.startOffset + this.deltaX);
        },
        endDrag: function endDrag() {
            if (this.data.disabled) {
                return;
            }
            this.dragging = false;
            this.swipeLeaveTransition();
        },
        onClick: function onClick(event) {
            var _a = event.currentTarget.dataset.key,
                position = _a === void 0 ? 'outside' : _a;
            this.$emit('click', position);
            if (!this.offset) {
                return;
            }
            if (this.data.asyncClose) {
                this.$emit('close', {
                    position: position,
                    instance: this,
                    name: this.data.name
                });
            } else {
                this.swipeMove(0);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidG91Y2hfMSIsInV0aWxzXzEiLCJUSFJFU0hPTEQiLCJBUlJBWSIsIlZhbnRDb21wb25lbnQiLCJwcm9wcyIsImRpc2FibGVkIiwiQm9vbGVhbiIsImxlZnRXaWR0aCIsInR5cGUiLCJOdW1iZXIiLCJvYnNlcnZlciIsIm9mZnNldCIsInN3aXBlTW92ZSIsInJpZ2h0V2lkdGgiLCJhc3luY0Nsb3NlIiwibmFtZSIsIlN0cmluZyIsIm1peGlucyIsInRvdWNoIiwiZGF0YSIsImNhdGNoTW92ZSIsImNyZWF0ZWQiLCJwdXNoIiwiZGVzdHJveWVkIiwiX3RoaXMiLCJmaWx0ZXIiLCJpdGVtIiwibWV0aG9kcyIsIm9wZW4iLCJwb3NpdGlvbiIsIl9hIiwiJGVtaXQiLCJjbG9zZSIsInJhbmdlIiwidHJhbnNmb3JtIiwidHJhbnNpdGlvbiIsImRyYWdnaW5nIiwic2V0RGF0YSIsIndyYXBwZXJTdHlsZSIsInN3aXBlTGVhdmVUcmFuc2l0aW9uIiwic3RhcnREcmFnIiwiZXZlbnQiLCJzdGFydE9mZnNldCIsInRvdWNoU3RhcnQiLCJub29wIiwib25EcmFnIiwidG91Y2hNb3ZlIiwiZGlyZWN0aW9uIiwiZm9yRWFjaCIsImRlbHRhWCIsImVuZERyYWciLCJvbkNsaWNrIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJrZXkiLCJpbnN0YW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLGlCQUFSLENBQWQ7QUFDQSxJQUFJRSxVQUFVRixRQUFRLGlCQUFSLENBQWQ7QUFDQSxJQUFJRyxZ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QUF5RHdCLE9BQXpELENBQWlFLFVBQVV0QixJQUFWLEVBQWdCO0FBQUUsdUJBQU9BLEtBQUtNLEtBQUwsRUFBUDtBQUFzQixhQUF6RztBQUNBLGlCQUFLSyxPQUFMLENBQWEsRUFBRWpCLFdBQVcsSUFBYixFQUFiO0FBQ0EsaUJBQUtSLFNBQUwsQ0FBZSxLQUFLOEIsV0FBTCxHQUFtQixLQUFLTyxNQUF2QztBQUNILFNBM0RJO0FBNERMQyxpQkFBUyxtQkFBWTtBQUNqQixnQkFBSSxLQUFLL0IsSUFBTCxDQUFVZCxRQUFkLEVBQXdCO0FBQ3BCO0FBQ0g7QUFDRCxpQkFBSytCLFFBQUwsR0FBZ0IsS0FBaEI7QUFDQSxpQkFBS0csb0JBQUw7QUFDSCxTQWxFSTtBQW1FTFksaUJBQVMsaUJBQVVWLEtBQVYsRUFBaUI7QUFDdEIsZ0JBQUlYLEtBQUtXLE1BQU1XLGFBQU4sQ0FBb0JDLE9BQXBCLENBQTRCQyxHQUFyQztBQUFBLGdCQUEwQ3pCLFdBQVdDLE9BQU8sS0FBSyxDQUFaLEdBQWdCLFNBQWhCLEdBQTRCQSxFQUFqRjtBQUNBLGlCQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkYsUUFBcEI7QUFDQSxnQkFBSSxDQUFDLEtBQUtsQixNQUFWLEVBQWtCO0FBQ2Q7QUFDSDtBQUNELGdCQUFJLEtBQUtRLElBQUwsQ0FBVUwsVUFBZCxFQUEwQjtBQUN0QixxQkFBS2lCLEtBQUwsQ0FBVyxPQUFYLEVBQW9CO0FBQ2hCRiw4QkFBVUEsUUFETTtBQUVoQjBCLDhCQUFVLElBRk07QUFHaEJ4QywwQkFBTSxLQUFLSSxJQUFMLENBQVVKO0FBSEEsaUJBQXBCO0FBS0gsYUFORCxNQU9LO0FBQ0QscUJBQUtILFNBQUwsQ0FBZSxDQUFmO0FBQ0g7QUFDSjtBQW5GSTtBQXpDYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgdG91Y2hfMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvdG91Y2hcIik7XG52YXIgdXRpbHNfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vdXRpbHNcIik7XG52YXIgVEhSRVNIT0xEID0gMC4zO1xudmFyIEFSUkFZID0gW107XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgbGVmdFdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAobGVmdFdpZHRoKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxlZnRXaWR0aCA9PT0gdm9pZCAwKSB7IGxlZnRXaWR0aCA9IDA7IH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vZmZzZXQgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKGxlZnRXaWR0aCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByaWdodFdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAocmlnaHRXaWR0aCkge1xuICAgICAgICAgICAgICAgIGlmIChyaWdodFdpZHRoID09PSB2b2lkIDApIHsgcmlnaHRXaWR0aCA9IDA7IH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vZmZzZXQgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3dpcGVNb3ZlKC1yaWdodFdpZHRoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jQ2xvc2U6IEJvb2xlYW4sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFtOdW1iZXIsIFN0cmluZ10sXG4gICAgICAgICAgICB2YWx1ZTogJydcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWl4aW5zOiBbdG91Y2hfMS50b3VjaF0sXG4gICAgZGF0YToge1xuICAgICAgICBjYXRjaE1vdmU6IGZhbHNlXG4gICAgfSxcbiAgICBjcmVhdGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcbiAgICAgICAgQVJSQVkucHVzaCh0aGlzKTtcbiAgICB9LFxuICAgIGRlc3Ryb3llZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICBBUlJBWSA9IEFSUkFZLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbSAhPT0gX3RoaXM7IH0pO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvcGVuOiBmdW5jdGlvbiAocG9zaXRpb24pIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgbGVmdFdpZHRoID0gX2EubGVmdFdpZHRoLCByaWdodFdpZHRoID0gX2EucmlnaHRXaWR0aDtcbiAgICAgICAgICAgIHZhciBvZmZzZXQgPSBwb3NpdGlvbiA9PT0gJ2xlZnQnID8gbGVmdFdpZHRoIDogLXJpZ2h0V2lkdGg7XG4gICAgICAgICAgICB0aGlzLnN3aXBlTW92ZShvZmZzZXQpO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnb3BlbicsIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcG9zaXRpb24sXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5kYXRhLm5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zd2lwZU1vdmUoMCk7XG4gICAgICAgIH0sXG4gICAgICAgIHN3aXBlTW92ZTogZnVuY3Rpb24gKG9mZnNldCkge1xuICAgICAgICAgICAgaWYgKG9mZnNldCA9PT0gdm9pZCAwKSB7IG9mZnNldCA9IDA7IH1cbiAgICAgICAgICAgIHRoaXMub2Zmc2V0ID0gdXRpbHNfMS5yYW5nZShvZmZzZXQsIC10aGlzLmRhdGEucmlnaHRXaWR0aCwgdGhpcy5kYXRhLmxlZnRXaWR0aCk7XG4gICAgICAgICAgICB2YXIgdHJhbnNmb3JtID0gXCJ0cmFuc2xhdGUzZChcIiArIHRoaXMub2Zmc2V0ICsgXCJweCwgMCwgMClcIjtcbiAgICAgICAgICAgIHZhciB0cmFuc2l0aW9uID0gdGhpcy5kcmFnZ2luZ1xuICAgICAgICAgICAgICAgID8gJ25vbmUnXG4gICAgICAgICAgICAgICAgOiAndHJhbnNmb3JtIC42cyBjdWJpYy1iZXppZXIoMC4xOCwgMC44OSwgMC4zMiwgMSknO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU6IFwiXFxuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogXCIgKyB0cmFuc2Zvcm0gKyBcIjtcXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogXCIgKyB0cmFuc2l0aW9uICsgXCI7XFxuICAgICAgICB0cmFuc2Zvcm06IFwiICsgdHJhbnNmb3JtICsgXCI7XFxuICAgICAgICB0cmFuc2l0aW9uOiBcIiArIHRyYW5zaXRpb24gKyBcIjtcXG4gICAgICBcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN3aXBlTGVhdmVUcmFuc2l0aW9uOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIGxlZnRXaWR0aCA9IF9hLmxlZnRXaWR0aCwgcmlnaHRXaWR0aCA9IF9hLnJpZ2h0V2lkdGg7XG4gICAgICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgICAgICAgICBpZiAocmlnaHRXaWR0aCA+IDAgJiYgLW9mZnNldCA+IHJpZ2h0V2lkdGggKiBUSFJFU0hPTEQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW4oJ3JpZ2h0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChsZWZ0V2lkdGggPiAwICYmIG9mZnNldCA+IGxlZnRXaWR0aCAqIFRIUkVTSE9MRCkge1xuICAgICAgICAgICAgICAgIHRoaXMub3BlbignbGVmdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zd2lwZU1vdmUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBjYXRjaE1vdmU6IGZhbHNlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzdGFydERyYWc6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3RhcnRPZmZzZXQgPSB0aGlzLm9mZnNldDtcbiAgICAgICAgICAgIHRoaXMudG91Y2hTdGFydChldmVudCk7XG4gICAgICAgIH0sXG4gICAgICAgIG5vb3A6IGZ1bmN0aW9uICgpIHsgfSxcbiAgICAgICAgb25EcmFnOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy50b3VjaE1vdmUoZXZlbnQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZGlyZWN0aW9uICE9PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmRyYWdnaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIEFSUkFZLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbSAhPT0gX3RoaXM7IH0pLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHsgcmV0dXJuIGl0ZW0uY2xvc2UoKTsgfSk7XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoeyBjYXRjaE1vdmU6IHRydWUgfSk7XG4gICAgICAgICAgICB0aGlzLnN3aXBlTW92ZSh0aGlzLnN0YXJ0T2Zmc2V0ICsgdGhpcy5kZWx0YVgpO1xuICAgICAgICB9LFxuICAgICAgICBlbmREcmFnOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5kcmFnZ2luZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5zd2lwZUxlYXZlVHJhbnNpdGlvbigpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5rZXksIHBvc2l0aW9uID0gX2EgPT09IHZvaWQgMCA/ICdvdXRzaWRlJyA6IF9hO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snLCBwb3NpdGlvbik7XG4gICAgICAgICAgICBpZiAoIXRoaXMub2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5hc3luY0Nsb3NlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnLCB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2U6IHRoaXMsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZGF0YS5uYW1lXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnN3aXBlTW92ZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19