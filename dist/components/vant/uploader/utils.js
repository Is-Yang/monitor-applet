"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var IMAGE_EXT = ['jpeg', 'jpg', 'gif', 'png', 'svg'];
function isImageUrl(url) {
    return IMAGE_EXT.some(function (ext) {
        return url.indexOf("." + ext) !== -1;
    });
}
exports.isImageUrl = isImageUrl;
function isImageFile(item) {
    if (item.type) {
        return item.type.indexOf('image') === 0;
    }
    if (item.path) {
        return isImageUrl(item.path);
    }
    if (item.url) {
        return isImageUrl(item.url);
    }
    return false;
}
exports.isImageFile = isImageFile;
function isVideo(res, accept) {
    return accept === 'video';
}
exports.isVideo = isVideo;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiSU1BR0VfRVhUIiwiaXNJbWFnZVVybCIsInVybCIsInNvbWUiLCJleHQiLCJpbmRleE9mIiwiaXNJbWFnZUZpbGUiLCJpdGVtIiwidHlwZSIsInBhdGgiLCJpc1ZpZGVvIiwicmVzIiwiYWNjZXB0Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsWUFBWSxDQUFDLE1BQUQsRUFBUyxLQUFULEVBQWdCLEtBQWhCLEVBQXVCLEtBQXZCLEVBQThCLEtBQTlCLENBQWhCO0FBQ0EsU0FBU0MsVUFBVCxDQUFvQkMsR0FBcEIsRUFBeUI7QUFDckIsV0FBT0YsVUFBVUcsSUFBVixDQUFlLFVBQVVDLEdBQVYsRUFBZTtBQUFFLGVBQU9GLElBQUlHLE9BQUosQ0FBWSxNQUFNRCxHQUFsQixNQUEyQixDQUFDLENBQW5DO0FBQXVDLEtBQXZFLENBQVA7QUFDSDtBQUNETixRQUFRRyxVQUFSLEdBQXFCQSxVQUFyQjtBQUNBLFNBQVNLLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCO0FBQ3ZCLFFBQUlBLEtBQUtDLElBQVQsRUFBZTtBQUNYLGVBQU9ELEtBQUtDLElBQUwsQ0FBVUgsT0FBVixDQUFrQixPQUFsQixNQUErQixDQUF0QztBQUNIO0FBQ0QsUUFBSUUsS0FBS0UsSUFBVCxFQUFlO0FBQ1gsZUFBT1IsV0FBV00sS0FBS0UsSUFBaEIsQ0FBUDtBQUNIO0FBQ0QsUUFBSUYsS0FBS0wsR0FBVCxFQUFjO0FBQ1YsZUFBT0QsV0FBV00sS0FBS0wsR0FBaEIsQ0FBUDtBQUNIO0FBQ0QsV0FBTyxLQUFQO0FBQ0g7QUFDREosUUFBUVEsV0FBUixHQUFzQkEsV0FBdEI7QUFDQSxTQUFTSSxPQUFULENBQWlCQyxHQUFqQixFQUFzQkMsTUFBdEIsRUFBOEI7QUFDMUIsV0FBT0EsV0FBVyxPQUFsQjtBQUNIO0FBQ0RkLFFBQVFZLE9BQVIsR0FBa0JBLE9BQWxCIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgSU1BR0VfRVhUID0gWydqcGVnJywgJ2pwZycsICdnaWYnLCAncG5nJywgJ3N2ZyddO1xuZnVuY3Rpb24gaXNJbWFnZVVybCh1cmwpIHtcbiAgICByZXR1cm4gSU1BR0VfRVhULnNvbWUoZnVuY3Rpb24gKGV4dCkgeyByZXR1cm4gdXJsLmluZGV4T2YoXCIuXCIgKyBleHQpICE9PSAtMTsgfSk7XG59XG5leHBvcnRzLmlzSW1hZ2VVcmwgPSBpc0ltYWdlVXJsO1xuZnVuY3Rpb24gaXNJbWFnZUZpbGUoaXRlbSkge1xuICAgIGlmIChpdGVtLnR5cGUpIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0udHlwZS5pbmRleE9mKCdpbWFnZScpID09PSAwO1xuICAgIH1cbiAgICBpZiAoaXRlbS5wYXRoKSB7XG4gICAgICAgIHJldHVybiBpc0ltYWdlVXJsKGl0ZW0ucGF0aCk7XG4gICAgfVxuICAgIGlmIChpdGVtLnVybCkge1xuICAgICAgICByZXR1cm4gaXNJbWFnZVVybChpdGVtLnVybCk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbn1cbmV4cG9ydHMuaXNJbWFnZUZpbGUgPSBpc0ltYWdlRmlsZTtcbmZ1bmN0aW9uIGlzVmlkZW8ocmVzLCBhY2NlcHQpIHtcbiAgICByZXR1cm4gYWNjZXB0ID09PSAndmlkZW8nO1xufVxuZXhwb3J0cy5pc1ZpZGVvID0gaXNWaWRlbztcbiJdfQ==