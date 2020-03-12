"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

Object.defineProperty(exports, "__esModule", { value: true });
function isDef(value) {
    return value !== undefined && value !== null;
}
exports.isDef = isDef;
function isObj(x) {
    var type = typeof x === "undefined" ? "undefined" : _typeof(x);
    return x !== null && (type === 'object' || type === 'function');
}
exports.isObj = isObj;
function isNumber(value) {
    return (/^\d+(\.\d+)?$/.test(value)
    );
}
exports.isNumber = isNumber;
function range(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
exports.range = range;
function nextTick(fn) {
    setTimeout(function () {
        fn();
    }, 1000 / 30);
}
exports.nextTick = nextTick;
var systemInfo = null;
function getSystemInfoSync() {
    if (systemInfo == null) {
        systemInfo = wx.getSystemInfoSync();
    }
    return systemInfo;
}
exports.getSystemInfoSync = getSystemInfoSync;
function addUnit(value) {
    if (!isDef(value)) {
        return undefined;
    }
    value = String(value);
    return isNumber(value) ? value + "px" : value;
}
exports.addUnit = addUnit;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiaXNEZWYiLCJ1bmRlZmluZWQiLCJpc09iaiIsIngiLCJ0eXBlIiwiaXNOdW1iZXIiLCJ0ZXN0IiwicmFuZ2UiLCJudW0iLCJtaW4iLCJtYXgiLCJNYXRoIiwibmV4dFRpY2siLCJmbiIsInNldFRpbWVvdXQiLCJzeXN0ZW1JbmZvIiwiZ2V0U3lzdGVtSW5mb1N5bmMiLCJ3eCIsImFkZFVuaXQiLCJTdHJpbmciXSwibWFwcGluZ3MiOiJBQUFBOzs7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLFNBQVNDLEtBQVQsQ0FBZUQsS0FBZixFQUFzQjtBQUNsQixXQUFPQSxVQUFVRSxTQUFWLElBQXVCRixVQUFVLElBQXhDO0FBQ0g7QUFDREQsUUFBUUUsS0FBUixHQUFnQkEsS0FBaEI7QUFDQSxTQUFTRSxLQUFULENBQWVDLENBQWYsRUFBa0I7QUFDZCxRQUFJQyxjQUFjRCxDQUFkLHlDQUFjQSxDQUFkLENBQUo7QUFDQSxXQUFPQSxNQUFNLElBQU4sS0FBZUMsU0FBUyxRQUFULElBQXFCQSxTQUFTLFVBQTdDLENBQVA7QUFDSDtBQUNETixRQUFRSSxLQUFSLEdBQWdCQSxLQUFoQjtBQUNBLFNBQVNHLFFBQVQsQ0FBa0JOLEtBQWxCLEVBQXlCO0FBQ3JCLFdBQU8saUJBQWdCTyxJQUFoQixDQUFxQlAsS0FBckI7QUFBUDtBQUNIO0FBQ0RELFFBQVFPLFFBQVIsR0FBbUJBLFFBQW5CO0FBQ0EsU0FBU0UsS0FBVCxDQUFlQyxHQUFmLEVBQW9CQyxHQUFwQixFQUF5QkMsR0FBekIsRUFBOEI7QUFDMUIsV0FBT0MsS0FBS0YsR0FBTCxDQUFTRSxLQUFLRCxHQUFMLENBQVNGLEdBQVQsRUFBY0MsR0FBZCxDQUFULEVBQTZCQyxHQUE3QixDQUFQO0FBQ0g7QUFDRFosUUFBUVMsS0FBUixHQUFnQkEsS0FBaEI7QUFDQSxTQUFTSyxRQUFULENBQWtCQyxFQUFsQixFQUFzQjtBQUNsQkMsZUFBVyxZQUFZO0FBQ25CRDtBQUNILEtBRkQsRUFFRyxPQUFPLEVBRlY7QUFHSDtBQUNEZixRQUFRYyxRQUFSLEdBQW1CQSxRQUFuQjtBQUNBLElBQUlHLGFBQWEsSUFBakI7QUFDQSxTQUFTQyxpQkFBVCxHQUE2QjtBQUN6QixRQUFJRCxjQUFjLElBQWxCLEVBQXdCO0FBQ3BCQSxxQkFBYUUsR0FBR0QsaUJBQUgsRUFBYjtBQUNIO0FBQ0QsV0FBT0QsVUFBUDtBQUNIO0FBQ0RqQixRQUFRa0IsaUJBQVIsR0FBNEJBLGlCQUE1QjtBQUNBLFNBQVNFLE9BQVQsQ0FBaUJuQixLQUFqQixFQUF3QjtBQUNwQixRQUFJLENBQUNDLE1BQU1ELEtBQU4sQ0FBTCxFQUFtQjtBQUNmLGVBQU9FLFNBQVA7QUFDSDtBQUNERixZQUFRb0IsT0FBT3BCLEtBQVAsQ0FBUjtBQUNBLFdBQU9NLFNBQVNOLEtBQVQsSUFBa0JBLFFBQVEsSUFBMUIsR0FBaUNBLEtBQXhDO0FBQ0g7QUFDREQsUUFBUW9CLE9BQVIsR0FBa0JBLE9BQWxCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBpc0RlZih2YWx1ZSkge1xuICAgIHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkICYmIHZhbHVlICE9PSBudWxsO1xufVxuZXhwb3J0cy5pc0RlZiA9IGlzRGVmO1xuZnVuY3Rpb24gaXNPYmooeCkge1xuICAgIHZhciB0eXBlID0gdHlwZW9mIHg7XG4gICAgcmV0dXJuIHggIT09IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xufVxuZXhwb3J0cy5pc09iaiA9IGlzT2JqO1xuZnVuY3Rpb24gaXNOdW1iZXIodmFsdWUpIHtcbiAgICByZXR1cm4gL15cXGQrKFxcLlxcZCspPyQvLnRlc3QodmFsdWUpO1xufVxuZXhwb3J0cy5pc051bWJlciA9IGlzTnVtYmVyO1xuZnVuY3Rpb24gcmFuZ2UobnVtLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChudW0sIG1pbiksIG1heCk7XG59XG5leHBvcnRzLnJhbmdlID0gcmFuZ2U7XG5mdW5jdGlvbiBuZXh0VGljayhmbikge1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBmbigpO1xuICAgIH0sIDEwMDAgLyAzMCk7XG59XG5leHBvcnRzLm5leHRUaWNrID0gbmV4dFRpY2s7XG52YXIgc3lzdGVtSW5mbyA9IG51bGw7XG5mdW5jdGlvbiBnZXRTeXN0ZW1JbmZvU3luYygpIHtcbiAgICBpZiAoc3lzdGVtSW5mbyA9PSBudWxsKSB7XG4gICAgICAgIHN5c3RlbUluZm8gPSB3eC5nZXRTeXN0ZW1JbmZvU3luYygpO1xuICAgIH1cbiAgICByZXR1cm4gc3lzdGVtSW5mbztcbn1cbmV4cG9ydHMuZ2V0U3lzdGVtSW5mb1N5bmMgPSBnZXRTeXN0ZW1JbmZvU3luYztcbmZ1bmN0aW9uIGFkZFVuaXQodmFsdWUpIHtcbiAgICBpZiAoIWlzRGVmKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICB2YWx1ZSA9IFN0cmluZyh2YWx1ZSk7XG4gICAgcmV0dXJuIGlzTnVtYmVyKHZhbHVlKSA/IHZhbHVlICsgXCJweFwiIDogdmFsdWU7XG59XG5leHBvcnRzLmFkZFVuaXQgPSBhZGRVbml0O1xuIl19