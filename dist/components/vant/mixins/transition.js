"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require('./../common/utils.js');
var getClassNames = function getClassNames(name) {
    return {
        enter: "van-" + name + "-enter van-" + name + "-enter-active enter-class enter-active-class",
        'enter-to': "van-" + name + "-enter-to van-" + name + "-enter-active enter-to-class enter-active-class",
        leave: "van-" + name + "-leave van-" + name + "-leave-active leave-class leave-active-class",
        'leave-to': "van-" + name + "-leave-to van-" + name + "-leave-active leave-to-class leave-active-class"
    };
};
var nextTick = function nextTick() {
    return new Promise(function (resolve) {
        return setTimeout(resolve, 1000 / 30);
    });
};
exports.transition = function (showDefaultValue) {
    return Behavior({
        properties: {
            customStyle: String,
            // @ts-ignore
            show: {
                type: Boolean,
                value: showDefaultValue,
                observer: 'observeShow'
            },
            // @ts-ignore
            duration: {
                type: null,
                value: 300,
                observer: 'observeDuration'
            },
            name: {
                type: String,
                value: 'fade'
            }
        },
        data: {
            type: '',
            inited: false,
            display: false
        },
        methods: {
            observeShow: function observeShow(value, old) {
                if (value === old) {
                    return;
                }
                value ? this.enter() : this.leave();
            },
            enter: function enter() {
                var _this = this;
                var _a = this.data,
                    duration = _a.duration,
                    name = _a.name;
                var classNames = getClassNames(name);
                var currentDuration = utils_1.isObj(duration) ? duration.enter : duration;
                this.status = 'enter';
                this.$emit('before-enter');
                Promise.resolve().then(nextTick).then(function () {
                    _this.checkStatus('enter');
                    _this.$emit('enter');
                    _this.setData({
                        inited: true,
                        display: true,
                        classes: classNames.enter,
                        currentDuration: currentDuration
                    });
                }).then(nextTick).then(function () {
                    _this.checkStatus('enter');
                    _this.transitionEnded = false;
                    _this.setData({
                        classes: classNames['enter-to']
                    });
                }).catch(function () {});
            },
            leave: function leave() {
                var _this = this;
                if (!this.data.display) {
                    return;
                }
                var _a = this.data,
                    duration = _a.duration,
                    name = _a.name;
                var classNames = getClassNames(name);
                var currentDuration = utils_1.isObj(duration) ? duration.leave : duration;
                this.status = 'leave';
                this.$emit('before-leave');
                Promise.resolve().then(nextTick).then(function () {
                    _this.checkStatus('leave');
                    _this.$emit('leave');
                    _this.setData({
                        classes: classNames.leave,
                        currentDuration: currentDuration
                    });
                }).then(nextTick).then(function () {
                    _this.checkStatus('leave');
                    _this.transitionEnded = false;
                    setTimeout(function () {
                        return _this.onTransitionEnd();
                    }, currentDuration);
                    _this.setData({
                        classes: classNames['leave-to']
                    });
                }).catch(function () {});
            },
            checkStatus: function checkStatus(status) {
                if (status !== this.status) {
                    throw new Error("incongruent status: " + status);
                }
            },
            onTransitionEnd: function onTransitionEnd() {
                if (this.transitionEnded) {
                    return;
                }
                this.transitionEnded = true;
                this.$emit("after-" + this.status);
                var _a = this.data,
                    show = _a.show,
                    display = _a.display;
                if (!show && display) {
                    this.setData({ display: false });
                }
            }
        }
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zaXRpb24uanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJ1dGlsc18xIiwicmVxdWlyZSIsImdldENsYXNzTmFtZXMiLCJuYW1lIiwiZW50ZXIiLCJsZWF2ZSIsIm5leHRUaWNrIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwidHJhbnNpdGlvbiIsInNob3dEZWZhdWx0VmFsdWUiLCJCZWhhdmlvciIsInByb3BlcnRpZXMiLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsInNob3ciLCJ0eXBlIiwiQm9vbGVhbiIsIm9ic2VydmVyIiwiZHVyYXRpb24iLCJkYXRhIiwiaW5pdGVkIiwiZGlzcGxheSIsIm1ldGhvZHMiLCJvYnNlcnZlU2hvdyIsIm9sZCIsIl90aGlzIiwiX2EiLCJjbGFzc05hbWVzIiwiY3VycmVudER1cmF0aW9uIiwiaXNPYmoiLCJzdGF0dXMiLCIkZW1pdCIsInRoZW4iLCJjaGVja1N0YXR1cyIsInNldERhdGEiLCJjbGFzc2VzIiwidHJhbnNpdGlvbkVuZGVkIiwiY2F0Y2giLCJvblRyYW5zaXRpb25FbmQiLCJFcnJvciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLFVBQVVDLFFBQVEsaUJBQVIsQ0FBZDtBQUNBLElBQUlDLGdCQUFnQixTQUFoQkEsYUFBZ0IsQ0FBVUMsSUFBVixFQUFnQjtBQUFFLFdBQVE7QUFDMUNDLGVBQU8sU0FBU0QsSUFBVCxHQUFnQixhQUFoQixHQUFnQ0EsSUFBaEMsR0FBdUMsOENBREo7QUFFMUMsb0JBQVksU0FBU0EsSUFBVCxHQUFnQixnQkFBaEIsR0FBbUNBLElBQW5DLEdBQTBDLGlEQUZaO0FBRzFDRSxlQUFPLFNBQVNGLElBQVQsR0FBZ0IsYUFBaEIsR0FBZ0NBLElBQWhDLEdBQXVDLDhDQUhK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LElBQTlCO0FBQUEsb0JBQW9DTyxVQUFVSyxHQUFHTCxPQUFqRDtBQUNBLG9CQUFJLENBQUNQLElBQUQsSUFBU08sT0FBYixFQUFzQjtBQUNsQix5QkFBS2EsT0FBTCxDQUFhLEVBQUViLFNBQVMsS0FBWCxFQUFiO0FBQ0g7QUFDSjtBQWxGSTtBQXpCRyxLQUFULENBQVA7QUE4R0gsQ0EvR0QiLCJmaWxlIjoidHJhbnNpdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL3V0aWxzXCIpO1xudmFyIGdldENsYXNzTmFtZXMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gKHtcbiAgICBlbnRlcjogXCJ2YW4tXCIgKyBuYW1lICsgXCItZW50ZXIgdmFuLVwiICsgbmFtZSArIFwiLWVudGVyLWFjdGl2ZSBlbnRlci1jbGFzcyBlbnRlci1hY3RpdmUtY2xhc3NcIixcbiAgICAnZW50ZXItdG8nOiBcInZhbi1cIiArIG5hbWUgKyBcIi1lbnRlci10byB2YW4tXCIgKyBuYW1lICsgXCItZW50ZXItYWN0aXZlIGVudGVyLXRvLWNsYXNzIGVudGVyLWFjdGl2ZS1jbGFzc1wiLFxuICAgIGxlYXZlOiBcInZhbi1cIiArIG5hbWUgKyBcIi1sZWF2ZSB2YW4tXCIgKyBuYW1lICsgXCItbGVhdmUtYWN0aXZlIGxlYXZlLWNsYXNzIGxlYXZlLWFjdGl2ZS1jbGFzc1wiLFxuICAgICdsZWF2ZS10byc6IFwidmFuLVwiICsgbmFtZSArIFwiLWxlYXZlLXRvIHZhbi1cIiArIG5hbWUgKyBcIi1sZWF2ZS1hY3RpdmUgbGVhdmUtdG8tY2xhc3MgbGVhdmUtYWN0aXZlLWNsYXNzXCJcbn0pOyB9O1xudmFyIG5leHRUaWNrID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHNldFRpbWVvdXQocmVzb2x2ZSwgMTAwMCAvIDMwKTsgfSk7IH07XG5leHBvcnRzLnRyYW5zaXRpb24gPSBmdW5jdGlvbiAoc2hvd0RlZmF1bHRWYWx1ZSkge1xuICAgIHJldHVybiBCZWhhdmlvcih7XG4gICAgICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgICAgICB2YWx1ZTogc2hvd0RlZmF1bHRWYWx1ZSxcbiAgICAgICAgICAgICAgICBvYnNlcnZlcjogJ29ic2VydmVTaG93J1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGR1cmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgICAgICB2YWx1ZTogMzAwLFxuICAgICAgICAgICAgICAgIG9ic2VydmVyOiAnb2JzZXJ2ZUR1cmF0aW9uJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICAgICAgdmFsdWU6ICdmYWRlJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICB0eXBlOiAnJyxcbiAgICAgICAgICAgIGluaXRlZDogZmFsc2UsXG4gICAgICAgICAgICBkaXNwbGF5OiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICBtZXRob2RzOiB7XG4gICAgICAgICAgICBvYnNlcnZlU2hvdzogZnVuY3Rpb24gKHZhbHVlLCBvbGQpIHtcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgPT09IG9sZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhbHVlID8gdGhpcy5lbnRlcigpIDogdGhpcy5sZWF2ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVudGVyOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIGR1cmF0aW9uID0gX2EuZHVyYXRpb24sIG5hbWUgPSBfYS5uYW1lO1xuICAgICAgICAgICAgICAgIHZhciBjbGFzc05hbWVzID0gZ2V0Q2xhc3NOYW1lcyhuYW1lKTtcbiAgICAgICAgICAgICAgICB2YXIgY3VycmVudER1cmF0aW9uID0gdXRpbHNfMS5pc09iaihkdXJhdGlvbikgPyBkdXJhdGlvbi5lbnRlciA6IGR1cmF0aW9uO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gJ2VudGVyJztcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdiZWZvcmUtZW50ZXInKTtcbiAgICAgICAgICAgICAgICBQcm9taXNlLnJlc29sdmUoKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihuZXh0VGljaylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGVja1N0YXR1cygnZW50ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVtaXQoJ2VudGVyJyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5pdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzTmFtZXMuZW50ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RHVyYXRpb246IGN1cnJlbnREdXJhdGlvblxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAudGhlbihuZXh0VGljaylcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5jaGVja1N0YXR1cygnZW50ZXInKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMudHJhbnNpdGlvbkVuZGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogY2xhc3NOYW1lc1snZW50ZXItdG8nXVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsZWF2ZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzcGxheSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgZHVyYXRpb24gPSBfYS5kdXJhdGlvbiwgbmFtZSA9IF9hLm5hbWU7XG4gICAgICAgICAgICAgICAgdmFyIGNsYXNzTmFtZXMgPSBnZXRDbGFzc05hbWVzKG5hbWUpO1xuICAgICAgICAgICAgICAgIHZhciBjdXJyZW50RHVyYXRpb24gPSB1dGlsc18xLmlzT2JqKGR1cmF0aW9uKSA/IGR1cmF0aW9uLmxlYXZlIDogZHVyYXRpb247XG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0dXMgPSAnbGVhdmUnO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2JlZm9yZS1sZWF2ZScpO1xuICAgICAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG5leHRUaWNrKVxuICAgICAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNoZWNrU3RhdHVzKCdsZWF2ZScpO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnbGVhdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc2VzOiBjbGFzc05hbWVzLmxlYXZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudER1cmF0aW9uOiBjdXJyZW50RHVyYXRpb25cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obmV4dFRpY2spXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuY2hlY2tTdGF0dXMoJ2xlYXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLnRyYW5zaXRpb25FbmRlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLm9uVHJhbnNpdGlvbkVuZCgpOyB9LCBjdXJyZW50RHVyYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzZXM6IGNsYXNzTmFtZXNbJ2xlYXZlLXRvJ11cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hlY2tTdGF0dXM6IGZ1bmN0aW9uIChzdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzICE9PSB0aGlzLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbmNvbmdydWVudCBzdGF0dXM6IFwiICsgc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25UcmFuc2l0aW9uRW5kOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudHJhbnNpdGlvbkVuZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy50cmFuc2l0aW9uRW5kZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoXCJhZnRlci1cIiArIHRoaXMuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIHNob3cgPSBfYS5zaG93LCBkaXNwbGF5ID0gX2EuZGlzcGxheTtcbiAgICAgICAgICAgICAgICBpZiAoIXNob3cgJiYgZGlzcGxheSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoeyBkaXNwbGF5OiBmYWxzZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG4iXX0=