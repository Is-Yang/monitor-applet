"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var utils_1 = require('./utils.js');
function simpleTick(fn) {
    return setTimeout(fn, 30);
}
component_1.VantComponent({
    props: {
        useSlot: Boolean,
        millisecond: Boolean,
        time: {
            type: Number,
            observer: 'reset'
        },
        format: {
            type: String,
            value: 'HH:mm:ss'
        },
        autoStart: {
            type: Boolean,
            value: true
        }
    },
    data: {
        timeData: utils_1.parseTimeData(0),
        formattedTime: '0'
    },
    destroyed: function destroyed() {
        clearTimeout(this.tid);
        this.tid = null;
    },
    methods: {
        // 开始
        start: function start() {
            if (this.counting) {
                return;
            }
            this.counting = true;
            this.endTime = Date.now() + this.remain;
            this.tick();
        },
        // 暂停
        pause: function pause() {
            this.counting = false;
            clearTimeout(this.tid);
        },
        // 重置
        reset: function reset() {
            this.pause();
            this.remain = this.data.time;
            this.setRemain(this.remain);
            if (this.data.autoStart) {
                this.start();
            }
        },
        tick: function tick() {
            if (this.data.millisecond) {
                this.microTick();
            } else {
                this.macroTick();
            }
        },
        microTick: function microTick() {
            var _this = this;
            this.tid = simpleTick(function () {
                _this.setRemain(_this.getRemain());
                if (_this.remain !== 0) {
                    _this.microTick();
                }
            });
        },
        macroTick: function macroTick() {
            var _this = this;
            this.tid = simpleTick(function () {
                var remain = _this.getRemain();
                if (!utils_1.isSameSecond(remain, _this.remain) || remain === 0) {
                    _this.setRemain(remain);
                }
                if (_this.remain !== 0) {
                    _this.macroTick();
                }
            });
        },
        getRemain: function getRemain() {
            return Math.max(this.endTime - Date.now(), 0);
        },
        setRemain: function setRemain(remain) {
            this.remain = remain;
            var timeData = utils_1.parseTimeData(remain);
            if (this.data.useSlot) {
                this.$emit('change', timeData);
            }
            this.setData({
                formattedTime: utils_1.parseFormat(this.data.format, timeData)
            });
            if (remain === 0) {
                this.pause();
                this.$emit('finish');
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsInNpbXBsZVRpY2siLCJmbiIsInNldFRpbWVvdXQiLCJWYW50Q29tcG9uZW50IiwicHJvcHMiLCJ1c2VTbG90IiwiQm9vbGVhbiIsIm1pbGxpc2Vjb25kIiwidGltZSIsInR5cGUiLCJOdW1iZXIiLCJvYnNlcnZlciIsImZvcm1hdCIsIlN0cmluZyIsImF1dG9TdGFydCIsImRhdGEiLCJ0aW1lRGF0YSIsInBhcnNlVGltZURhdGEiLCJmb3JtYXR0ZWRUaW1lIiwiZGVzdHJveWVkIiwiY2xlYXJUaW1lb3V0IiwidGlkIiwibWV0aG9kcyIsInN0YXJ0IiwiY291bnRpbmciLCJlbmRUaW1lIiwiRGF0ZSIsIm5vdyIsInJlbWFpbiIsInRpY2siLCJwYXVzZSIsInJlc2V0Iiwic2V0UmVtYWluIiwibWljcm9UaWNrIiwibWFjcm9UaWNrIiwiX3RoaXMiLCJnZXRSZW1haW4iLCJpc1NhbWVTZWNvbmQiLCJNYXRoIiwibWF4IiwiJGVtaXQiLCJzZXREYXRhIiwicGFyc2VGb3JtYXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsVUFBVUQsUUFBUSxTQUFSLENBQWQ7QUFDQSxTQUFTRSxVQUFULENBQW9CQyxFQUFwQixFQUF3QjtBQUNwQixXQUFPQyxXQUFXRCxFQUFYLEVBQWUsRUFBZixDQUFQO0FBQ0g7QUFDREosWUFBWU0sYUFBWixDQUEwQjtBQUN0QkMsV0FBTztBQUNIQyxpQkFBU0MsT0FETjtBQUVIQyxxQkFBYUQsT0FGVjtBQUdIRSxjQUFNO0FBQ0ZDLGtCQUFNQyxNQURKO0FBRUZDLHNC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c0NJLFFBQXRDO0FBRE4sYUFBYjtBQUdBLGdCQUFJWSxXQUFXLENBQWYsRUFBa0I7QUFDZCxxQkFBS0UsS0FBTDtBQUNBLHFCQUFLVSxLQUFMLENBQVcsUUFBWDtBQUNIO0FBQ0o7QUFyRUk7QUF6QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmZ1bmN0aW9uIHNpbXBsZVRpY2soZm4pIHtcbiAgICByZXR1cm4gc2V0VGltZW91dChmbiwgMzApO1xufVxuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgdXNlU2xvdDogQm9vbGVhbixcbiAgICAgICAgbWlsbGlzZWNvbmQ6IEJvb2xlYW4sXG4gICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIG9ic2VydmVyOiAncmVzZXQnXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdISDptbTpzcydcbiAgICAgICAgfSxcbiAgICAgICAgYXV0b1N0YXJ0OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICB0aW1lRGF0YTogdXRpbHNfMS5wYXJzZVRpbWVEYXRhKDApLFxuICAgICAgICBmb3JtYXR0ZWRUaW1lOiAnMCdcbiAgICB9LFxuICAgIGRlc3Ryb3llZDogZnVuY3Rpb24gKCkge1xuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aWQpO1xuICAgICAgICB0aGlzLnRpZCA9IG51bGw7XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIC8vIOW8gOWni1xuICAgICAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY291bnRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNvdW50aW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZW5kVGltZSA9IERhdGUubm93KCkgKyB0aGlzLnJlbWFpbjtcbiAgICAgICAgICAgIHRoaXMudGljaygpO1xuICAgICAgICB9LFxuICAgICAgICAvLyDmmoLlgZxcbiAgICAgICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuY291bnRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpZCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIOmHjee9rlxuICAgICAgICByZXNldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5wYXVzZSgpO1xuICAgICAgICAgICAgdGhpcy5yZW1haW4gPSB0aGlzLmRhdGEudGltZTtcbiAgICAgICAgICAgIHRoaXMuc2V0UmVtYWluKHRoaXMucmVtYWluKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuYXV0b1N0YXJ0KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0aWNrOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLm1pbGxpc2Vjb25kKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5taWNyb1RpY2soKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMubWFjcm9UaWNrKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG1pY3JvVGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMudGlkID0gc2ltcGxlVGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgX3RoaXMuc2V0UmVtYWluKF90aGlzLmdldFJlbWFpbigpKTtcbiAgICAgICAgICAgICAgICBpZiAoX3RoaXMucmVtYWluICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm1pY3JvVGljaygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBtYWNyb1RpY2s6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLnRpZCA9IHNpbXBsZVRpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciByZW1haW4gPSBfdGhpcy5nZXRSZW1haW4oKTtcbiAgICAgICAgICAgICAgICBpZiAoIXV0aWxzXzEuaXNTYW1lU2Vjb25kKHJlbWFpbiwgX3RoaXMucmVtYWluKSB8fCByZW1haW4gPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0UmVtYWluKHJlbWFpbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfdGhpcy5yZW1haW4gIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMubWFjcm9UaWNrKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFJlbWFpbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KHRoaXMuZW5kVGltZSAtIERhdGUubm93KCksIDApO1xuICAgICAgICB9LFxuICAgICAgICBzZXRSZW1haW46IGZ1bmN0aW9uIChyZW1haW4pIHtcbiAgICAgICAgICAgIHRoaXMucmVtYWluID0gcmVtYWluO1xuICAgICAgICAgICAgdmFyIHRpbWVEYXRhID0gdXRpbHNfMS5wYXJzZVRpbWVEYXRhKHJlbWFpbik7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLnVzZVNsb3QpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB0aW1lRGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFRpbWU6IHV0aWxzXzEucGFyc2VGb3JtYXQodGhpcy5kYXRhLmZvcm1hdCwgdGltZURhdGEpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyZW1haW4gPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhdXNlKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZmluaXNoJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==