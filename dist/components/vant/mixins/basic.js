"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.basic = Behavior({
    methods: {
        $emit: function $emit() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this.triggerEvent.apply(this, args);
        },
        set: function set(data, callback) {
            this.setData(data, callback);
            return new Promise(function (resolve) {
                return wx.nextTick(resolve);
            });
        },
        getRect: function getRect(selector, all) {
            var _this = this;
            return new Promise(function (resolve) {
                wx.createSelectorQuery().in(_this)[all ? 'selectAll' : 'select'](selector).boundingClientRect(function (rect) {
                    if (all && Array.isArray(rect) && rect.length) {
                        resolve(rect);
                    }
                    if (!all && rect) {
                        resolve(rect);
                    }
                }).exec();
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiYmFzaWMiLCJCZWhhdmlvciIsIm1ldGhvZHMiLCIkZW1pdCIsImFyZ3MiLCJfaSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInRyaWdnZXJFdmVudCIsImFwcGx5Iiwic2V0IiwiZGF0YSIsImNhbGxiYWNrIiwic2V0RGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwid3giLCJuZXh0VGljayIsImdldFJlY3QiLCJzZWxlY3RvciIsImFsbCIsIl90aGlzIiwiY3JlYXRlU2VsZWN0b3JRdWVyeSIsImluIiwiYm91bmRpbmdDbGllbnRSZWN0IiwicmVjdCIsIkFycmF5IiwiaXNBcnJheSIsImV4ZWMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQUQsUUFBUUUsS0FBUixHQUFnQkMsU0FBUztBQUNyQkMsYUFBUztBQUNMQyxlQUFPLGlCQUFZO0FBQ2YsZ0JBQUlDLE9BQU8sRUFBWDtBQUNBLGlCQUFLLElBQUlDLEtBQUssQ0FBZCxFQUFpQkEsS0FBS0MsVUFBVUMsTUFBaEMsRUFBd0NGLElBQXhDLEVBQThDO0FBQzFDRCxxQkFBS0MsRUFBTCxJQUFXQyxVQUFVRCxFQUFWLENBQVg7QUFDSDtBQUNELGlCQUFLRyxZQUFMLENBQWtCQyxLQUFsQixDQUF3QixJQUF4QixFQUE4QkwsSUFBOUI7QUFDSCxTQVBJO0FBUUxNLGFBQUssYUFBVUMsSUFBVixFQUFnQkMsUUFBaEIsRUFBMEI7QUFDM0IsaUJBQUtDLE9BQUwsQ0FBYUYsSUFBYixFQUFtQkMsUUFBbkI7QUFDQSxtQkFBTyxJQUFJRSxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQjtBQUFFLHVCQUFPQyxHQUFHQyxRQUFILENBQVlGLE9BQVosQ0FBUDtBQUE4QixhQUEvRCxDQUFQO0FBQ0gsU0FYSTtBQVlMRyxpQkFBUyxpQkFBVUMsUUFBVixFQUFvQkMsR0FBcEIsRUFBeUI7QUFDOUIsZ0JBQUlDLFFBQVEsSUFBWjtBQUNBLG1CQUFPLElBQUlQLE9BQUosQ0FBWSxVQUFVQyxPQUFWLEVBQW1CO0FBQ2xDQyxtQkFBR00sbUJBQUgsR0FDS0MsRUFETCxDQUNRRixLQURSLEVBQ2VELE1BQU0sV0FBTixHQUFvQixRQURuQyxFQUM2Q0QsUUFEN0MsRUFFS0ssa0JBRkwsQ0FFd0IsVUFBVUMsSUFBVixFQUFnQjtBQUNwQyx3QkFBSUwsT0FBT00sTUFBTUMsT0FBTixDQUFjRixJQUFkLENBQVAsSUFBOEJBLEtBQUtsQixNQUF2QyxFQUErQztBQUMzQ1EsZ0NBQVFVLElBQVI7QUFDSDtBQUNELHdCQUFJLENBQUNMLEdBQUQsSUFBUUssSUFBWixFQUFrQjtBQUNkVixnQ0FBUVUsSUFBUjtBQUNIO0FBQ0osaUJBVEQsRUFVS0csSUFWTDtBQVdILGFBWk0sQ0FBUDtBQWFIO0FBM0JJO0FBRFksQ0FBVCxDQUFoQiIsImZpbGUiOiJiYXNpYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5iYXNpYyA9IEJlaGF2aW9yKHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgICRlbWl0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgYXJncyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGFyZ3VtZW50cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICBhcmdzW19pXSA9IGFyZ3VtZW50c1tfaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnRyaWdnZXJFdmVudC5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGF0YSwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShkYXRhLCBjYWxsYmFjayk7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmV0dXJuIHd4Lm5leHRUaWNrKHJlc29sdmUpOyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UmVjdDogZnVuY3Rpb24gKHNlbGVjdG9yLCBhbGwpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICAgICAgICB3eC5jcmVhdGVTZWxlY3RvclF1ZXJ5KClcbiAgICAgICAgICAgICAgICAgICAgLmluKF90aGlzKVthbGwgPyAnc2VsZWN0QWxsJyA6ICdzZWxlY3QnXShzZWxlY3RvcilcbiAgICAgICAgICAgICAgICAgICAgLmJvdW5kaW5nQ2xpZW50UmVjdChmdW5jdGlvbiAocmVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWxsICYmIEFycmF5LmlzQXJyYXkocmVjdCkgJiYgcmVjdC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUocmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhbGwgJiYgcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShyZWN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5leGVjKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19