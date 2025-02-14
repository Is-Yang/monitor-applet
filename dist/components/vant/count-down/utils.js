"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function padZero(num, targetLength) {
    if (targetLength === void 0) {
        targetLength = 2;
    }
    var str = num + '';
    while (str.length < targetLength) {
        str = '0' + str;
    }
    return str;
}
var SECOND = 1000;
var MINUTE = 60 * SECOND;
var HOUR = 60 * MINUTE;
var DAY = 24 * HOUR;
function parseTimeData(time) {
    var days = Math.floor(time / DAY);
    var hours = Math.floor(time % DAY / HOUR);
    var minutes = Math.floor(time % HOUR / MINUTE);
    var seconds = Math.floor(time % MINUTE / SECOND);
    var milliseconds = Math.floor(time % SECOND);
    return {
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds
    };
}
exports.parseTimeData = parseTimeData;
function parseFormat(format, timeData) {
    var days = timeData.days;
    var hours = timeData.hours,
        minutes = timeData.minutes,
        seconds = timeData.seconds,
        milliseconds = timeData.milliseconds;
    if (format.indexOf('DD') === -1) {
        hours += days * 24;
    } else {
        format = format.replace('DD', padZero(days));
    }
    if (format.indexOf('HH') === -1) {
        minutes += hours * 60;
    } else {
        format = format.replace('HH', padZero(hours));
    }
    if (format.indexOf('mm') === -1) {
        seconds += minutes * 60;
    } else {
        format = format.replace('mm', padZero(minutes));
    }
    if (format.indexOf('ss') === -1) {
        milliseconds += seconds * 1000;
    } else {
        format = format.replace('ss', padZero(seconds));
    }
    return format.replace('SSS', padZero(milliseconds, 3));
}
exports.parseFormat = parseFormat;
function isSameSecond(time1, time2) {
    return Math.floor(time1 / 1000) === Math.floor(time2 / 1000);
}
exports.isSameSecond = isSameSecond;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwicGFkWmVybyIsIm51bSIsInRhcmdldExlbmd0aCIsInN0ciIsImxlbmd0aCIsIlNFQ09ORCIsIk1JTlVURSIsIkhPVVIiLCJEQVkiLCJwYXJzZVRpbWVEYXRhIiwidGltZSIsImRheXMiLCJNYXRoIiwiZmxvb3IiLCJob3VycyIsIm1pbnV0ZXMiLCJzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwicGFyc2VGb3JtYXQiLCJmb3JtYXQiLCJ0aW1lRGF0YSIsImluZGV4T2YiLCJyZXBsYWNlIiwiaXNTYW1lU2Vjb25kIiwidGltZTEiLCJ0aW1lMiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLFNBQVNDLE9BQVQsQ0FBaUJDLEdBQWpCLEVBQXNCQyxZQUF0QixFQUFvQztBQUNoQyxRQUFJQSxpQkFBaUIsS0FBSyxDQUExQixFQUE2QjtBQUFFQSx1QkFBZSxDQUFmO0FBQW1CO0FBQ2xELFFBQUlDLE1BQU1GLE1BQU0sRUFBaEI7QUFDQSxXQUFPRSxJQUFJQyxNQUFKLEdBQWFGLFlBQXBCLEVBQWtDO0FBQzlCQyxjQUFNLE1BQU1BLEdBQVo7QUFDSDtBQUNELFdBQU9BLEdBQVA7QUFDSDtBQUNELElBQUlFLFNBQVMsSUFBYjtBQUNBLElBQUlDLFNBQVMsS0FBS0QsTUFBbEI7QUFDQSxJQUFJRSxPQUFPLEtBQUtELE1BQWhCO0FBQ0EsSUFBSUUsTUFBTSxLQUFLRCxJQUFmO0FBQ0EsU0FBU0UsYUFBVCxDQUF1QkMsSUFBdkIsRUFBNkI7QUFDekIsUUFBSUMsT0FBT0MsS0FBS0MsS0FBTCxDQUFXSCxPQUFPRixHQUFsQixDQUFYO0FBQ0EsUUFBSU0sUUFBUUYsS0FBS0MsS0FBTCxDQUFZSCxPQUFPRixHQUFSLEdBQWVELElBQTFCLENBQVo7QUFDQSxRQUFJUSxVQUFVSCxLQUFLQyxLQUFMLENBQVlILE9BQU9ILElBQVIsR0FBZ0JELE1BQTNCLENBQWQ7QUFDQSxRQUFJVSxVQUFVSixLQUFLQyxLQUFMLENBQVlILE9BQU9KLE1BQVIsR0FBa0JELE1BQTdCLENBQWQ7QUFDQSxRQUFJWSxlQUFlTCxLQUFLQyxLQUFMLENBQVdILE9BQU9MLE1BQWxCLENBQW5CO0FBQ0EsV0FBTztBQUNITSxjQUFNQSxJQURIO0FBRUhHLGVBQU9BLEtBRko7QUFHSEMsaUJBQVNBLE9BSE47QUFJSEMsaUJBQVNBLE9BSk47QUFLSEMsc0JBQWNBO0FBTFgsS0FBUDtBQU9IO0FBQ0RuQixRQUFRVyxhQUFSLEdBQXdCQSxhQUF4QjtBQUNBLFNBQVNTLFdBQVQsQ0FBcUJDLE1BQXJCLEVBQTZCQyxRQUE3QixFQUF1QztBQUNuQyxRQUFJVCxPQUFPUyxTQUFTVCxJQUFwQjtBQUNBLFFBQUlHLFFBQVFNLFNBQVNOLEtBQXJCO0FBQUEsUUFBNEJDLFVBQVVLLFNBQVNMLE9BQS9DO0FBQUEsUUFBd0RDLFVBQVVJLFNBQVNKLE9BQTNFO0FBQUEsUUFBb0ZDLGVBQWVHLFNBQVNILFlBQTVHO0FBQ0EsUUFBSUUsT0FBT0UsT0FBUCxDQUFlLElBQWYsTUFBeUIsQ0FBQyxDQUE5QixFQUFpQztBQUM3QlAsaUJBQVNILE9BQU8sRUFBaEI7QUFDSCxLQUZELE1BR0s7QUFDRFEsaUJBQVNBLE9BQU9HLE9BQVAsQ0FBZSxJQUFmLEVBQXFCdEIsUUFBUVcsSUFBUixDQUFyQixDQUFUO0FBQ0g7QUFDRCxRQUFJUSxPQUFPRSxPQUFQLENBQWUsSUFBZixNQUF5QixDQUFDLENBQTlCLEVBQWlDO0FBQzdCTixtQkFBV0QsUUFBUSxFQUFuQjtBQUNILEtBRkQsTUFHSztBQUNESyxpQkFBU0EsT0FBT0csT0FBUCxDQUFlLElBQWYsRUFBcUJ0QixRQUFRYyxLQUFSLENBQXJCLENBQVQ7QUFDSDtBQUNELFFBQUlLLE9BQU9FLE9BQVAsQ0FBZSxJQUFmLE1BQXlCLENBQUMsQ0FBOUIsRUFBaUM7QUFDN0JMLG1CQUFXRCxVQUFVLEVBQXJCO0FBQ0gsS0FGRCxNQUdLO0FBQ0RJLGlCQUFTQSxPQUFPRyxPQUFQLENBQWUsSUFBZixFQUFxQnRCLFFBQVFlLE9BQVIsQ0FBckIsQ0FBVDtBQUNIO0FBQ0QsUUFBSUksT0FBT0UsT0FBUCxDQUFlLElBQWYsTUFBeUIsQ0FBQyxDQUE5QixFQUFpQztBQUM3Qkosd0JBQWdCRCxVQUFVLElBQTFCO0FBQ0gsS0FGRCxNQUdLO0FBQ0RHLGlCQUFTQSxPQUFPRyxPQUFQLENBQWUsSUFBZixFQUFxQnRCLFFBQVFnQixPQUFSLENBQXJCLENBQVQ7QUFDSDtBQUNELFdBQU9HLE9BQU9HLE9BQVAsQ0FBZSxLQUFmLEVBQXNCdEIsUUFBUWlCLFlBQVIsRUFBc0IsQ0FBdEIsQ0FBdEIsQ0FBUDtBQUNIO0FBQ0RuQixRQUFRb0IsV0FBUixHQUFzQkEsV0FBdEI7QUFDQSxTQUFTSyxZQUFULENBQXNCQyxLQUF0QixFQUE2QkMsS0FBN0IsRUFBb0M7QUFDaEMsV0FBT2IsS0FBS0MsS0FBTCxDQUFXVyxRQUFRLElBQW5CLE1BQTZCWixLQUFLQyxLQUFMLENBQVdZLFFBQVEsSUFBbkIsQ0FBcEM7QUFDSDtBQUNEM0IsUUFBUXlCLFlBQVIsR0FBdUJBLFlBQXZCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5mdW5jdGlvbiBwYWRaZXJvKG51bSwgdGFyZ2V0TGVuZ3RoKSB7XG4gICAgaWYgKHRhcmdldExlbmd0aCA9PT0gdm9pZCAwKSB7IHRhcmdldExlbmd0aCA9IDI7IH1cbiAgICB2YXIgc3RyID0gbnVtICsgJyc7XG4gICAgd2hpbGUgKHN0ci5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICAgICAgc3RyID0gJzAnICsgc3RyO1xuICAgIH1cbiAgICByZXR1cm4gc3RyO1xufVxudmFyIFNFQ09ORCA9IDEwMDA7XG52YXIgTUlOVVRFID0gNjAgKiBTRUNPTkQ7XG52YXIgSE9VUiA9IDYwICogTUlOVVRFO1xudmFyIERBWSA9IDI0ICogSE9VUjtcbmZ1bmN0aW9uIHBhcnNlVGltZURhdGEodGltZSkge1xuICAgIHZhciBkYXlzID0gTWF0aC5mbG9vcih0aW1lIC8gREFZKTtcbiAgICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKCh0aW1lICUgREFZKSAvIEhPVVIpO1xuICAgIHZhciBtaW51dGVzID0gTWF0aC5mbG9vcigodGltZSAlIEhPVVIpIC8gTUlOVVRFKTtcbiAgICB2YXIgc2Vjb25kcyA9IE1hdGguZmxvb3IoKHRpbWUgJSBNSU5VVEUpIC8gU0VDT05EKTtcbiAgICB2YXIgbWlsbGlzZWNvbmRzID0gTWF0aC5mbG9vcih0aW1lICUgU0VDT05EKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBkYXlzOiBkYXlzLFxuICAgICAgICBob3VyczogaG91cnMsXG4gICAgICAgIG1pbnV0ZXM6IG1pbnV0ZXMsXG4gICAgICAgIHNlY29uZHM6IHNlY29uZHMsXG4gICAgICAgIG1pbGxpc2Vjb25kczogbWlsbGlzZWNvbmRzXG4gICAgfTtcbn1cbmV4cG9ydHMucGFyc2VUaW1lRGF0YSA9IHBhcnNlVGltZURhdGE7XG5mdW5jdGlvbiBwYXJzZUZvcm1hdChmb3JtYXQsIHRpbWVEYXRhKSB7XG4gICAgdmFyIGRheXMgPSB0aW1lRGF0YS5kYXlzO1xuICAgIHZhciBob3VycyA9IHRpbWVEYXRhLmhvdXJzLCBtaW51dGVzID0gdGltZURhdGEubWludXRlcywgc2Vjb25kcyA9IHRpbWVEYXRhLnNlY29uZHMsIG1pbGxpc2Vjb25kcyA9IHRpbWVEYXRhLm1pbGxpc2Vjb25kcztcbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0REJykgPT09IC0xKSB7XG4gICAgICAgIGhvdXJzICs9IGRheXMgKiAyNDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKCdERCcsIHBhZFplcm8oZGF5cykpO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ0hIJykgPT09IC0xKSB7XG4gICAgICAgIG1pbnV0ZXMgKz0gaG91cnMgKiA2MDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKCdISCcsIHBhZFplcm8oaG91cnMpKTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdC5pbmRleE9mKCdtbScpID09PSAtMSkge1xuICAgICAgICBzZWNvbmRzICs9IG1pbnV0ZXMgKiA2MDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKCdtbScsIHBhZFplcm8obWludXRlcykpO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0LmluZGV4T2YoJ3NzJykgPT09IC0xKSB7XG4gICAgICAgIG1pbGxpc2Vjb25kcyArPSBzZWNvbmRzICogMTAwMDtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGZvcm1hdCA9IGZvcm1hdC5yZXBsYWNlKCdzcycsIHBhZFplcm8oc2Vjb25kcykpO1xuICAgIH1cbiAgICByZXR1cm4gZm9ybWF0LnJlcGxhY2UoJ1NTUycsIHBhZFplcm8obWlsbGlzZWNvbmRzLCAzKSk7XG59XG5leHBvcnRzLnBhcnNlRm9ybWF0ID0gcGFyc2VGb3JtYXQ7XG5mdW5jdGlvbiBpc1NhbWVTZWNvbmQodGltZTEsIHRpbWUyKSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IodGltZTEgLyAxMDAwKSA9PT0gTWF0aC5mbG9vcih0aW1lMiAvIDEwMDApO1xufVxuZXhwb3J0cy5pc1NhbWVTZWNvbmQgPSBpc1NhbWVTZWNvbmQ7XG4iXX0=