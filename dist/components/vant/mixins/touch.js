"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var MIN_DISTANCE = 10;
function getDirection(x, y) {
    if (x > y && x > MIN_DISTANCE) {
        return 'horizontal';
    }
    if (y > x && y > MIN_DISTANCE) {
        return 'vertical';
    }
    return '';
}
exports.touch = Behavior({
    methods: {
        resetTouchStatus: function resetTouchStatus() {
            this.direction = '';
            this.deltaX = 0;
            this.deltaY = 0;
            this.offsetX = 0;
            this.offsetY = 0;
        },
        touchStart: function touchStart(event) {
            this.resetTouchStatus();
            var touch = event.touches[0];
            this.startX = touch.clientX;
            this.startY = touch.clientY;
        },
        touchMove: function touchMove(event) {
            var touch = event.touches[0];
            this.deltaX = touch.clientX - this.startX;
            this.deltaY = touch.clientY - this.startY;
            this.offsetX = Math.abs(this.deltaX);
            this.offsetY = Math.abs(this.deltaY);
            this.direction = this.direction || getDirection(this.offsetX, this.offsetY);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdWNoLmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiTUlOX0RJU1RBTkNFIiwiZ2V0RGlyZWN0aW9uIiwieCIsInkiLCJ0b3VjaCIsIkJlaGF2aW9yIiwibWV0aG9kcyIsInJlc2V0VG91Y2hTdGF0dXMiLCJkaXJlY3Rpb24iLCJkZWx0YVgiLCJkZWx0YVkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRvdWNoU3RhcnQiLCJldmVudCIsInRvdWNoZXMiLCJzdGFydFgiLCJjbGllbnRYIiwic3RhcnRZIiwiY2xpZW50WSIsInRvdWNoTW92ZSIsIk1hdGgiLCJhYnMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxlQUFlLEVBQW5CO0FBQ0EsU0FBU0MsWUFBVCxDQUFzQkMsQ0FBdEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQ3hCLFFBQUlELElBQUlDLENBQUosSUFBU0QsSUFBSUYsWUFBakIsRUFBK0I7QUFDM0IsZUFBTyxZQUFQO0FBQ0g7QUFDRCxRQUFJRyxJQUFJRCxDQUFKLElBQVNDLElBQUlILFlBQWpCLEVBQStCO0FBQzNCLGVBQU8sVUFBUDtBQUNIO0FBQ0QsV0FBTyxFQUFQO0FBQ0g7QUFDREYsUUFBUU0sS0FBUixHQUFnQkMsU0FBUztBQUNyQkMsYUFBUztBQUNMQywwQkFBa0IsNEJBQVk7QUFDMUIsaUJBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxpQkFBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxpQkFBS0MsTUFBTCxHQUFjLENBQWQ7QUFDQSxpQkFBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxpQkFBS0MsT0FBTCxHQUFlLENBQWY7QUFDSCxTQVBJO0FBUUxDLG9CQUFZLG9CQUFVQyxLQUFWLEVBQWlCO0FBQ3pCLGlCQUFLUCxnQkFBTDtBQUNBLGdCQUFJSCxRQUFRVSxNQUFNQyxPQUFOLENBQWMsQ0FBZCxDQUFaO0FBQ0EsaUJBQUtDLE1BQUwsR0FBY1osTUFBTWEsT0FBcEI7QUFDQSxpQkFBS0MsTUFBTCxHQUFjZCxNQUFNZSxPQUFwQjtBQUNILFNBYkk7QUFjTEMsbUJBQVcsbUJBQVVOLEtBQVYsRUFBaUI7QUFDeEIsZ0JBQUlWLFFBQVFVLE1BQU1DLE9BQU4sQ0FBYyxDQUFkLENBQVo7QUFDQSxpQkFBS04sTUFBTCxHQUFjTCxNQUFNYSxPQUFOLEdBQWdCLEtBQUtELE1BQW5DO0FBQ0EsaUJBQUtOLE1BQUwsR0FBY04sTUFBTWUsT0FBTixHQUFnQixLQUFLRCxNQUFuQztBQUNBLGlCQUFLUCxPQUFMLEdBQWVVLEtBQUtDLEdBQUwsQ0FBUyxLQUFLYixNQUFkLENBQWY7QUFDQSxpQkFBS0csT0FBTCxHQUFlUyxLQUFLQyxHQUFMLENBQVMsS0FBS1osTUFBZCxDQUFmO0FBQ0EsaUJBQUtGLFNBQUwsR0FBaUIsS0FBS0EsU0FBTCxJQUFrQlAsYUFBYSxLQUFLVSxPQUFsQixFQUEyQixLQUFLQyxPQUFoQyxDQUFuQztBQUNIO0FBckJJO0FBRFksQ0FBVCxDQUFoQiIsImZpbGUiOiJ0b3VjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIE1JTl9ESVNUQU5DRSA9IDEwO1xuZnVuY3Rpb24gZ2V0RGlyZWN0aW9uKHgsIHkpIHtcbiAgICBpZiAoeCA+IHkgJiYgeCA+IE1JTl9ESVNUQU5DRSkge1xuICAgICAgICByZXR1cm4gJ2hvcml6b250YWwnO1xuICAgIH1cbiAgICBpZiAoeSA+IHggJiYgeSA+IE1JTl9ESVNUQU5DRSkge1xuICAgICAgICByZXR1cm4gJ3ZlcnRpY2FsJztcbiAgICB9XG4gICAgcmV0dXJuICcnO1xufVxuZXhwb3J0cy50b3VjaCA9IEJlaGF2aW9yKHtcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHJlc2V0VG91Y2hTdGF0dXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gJyc7XG4gICAgICAgICAgICB0aGlzLmRlbHRhWCA9IDA7XG4gICAgICAgICAgICB0aGlzLmRlbHRhWSA9IDA7XG4gICAgICAgICAgICB0aGlzLm9mZnNldFggPSAwO1xuICAgICAgICAgICAgdGhpcy5vZmZzZXRZID0gMDtcbiAgICAgICAgfSxcbiAgICAgICAgdG91Y2hTdGFydDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0VG91Y2hTdGF0dXMoKTtcbiAgICAgICAgICAgIHZhciB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XG4gICAgICAgICAgICB0aGlzLnN0YXJ0WCA9IHRvdWNoLmNsaWVudFg7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0WSA9IHRvdWNoLmNsaWVudFk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvdWNoTW92ZTogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgdG91Y2ggPSBldmVudC50b3VjaGVzWzBdO1xuICAgICAgICAgICAgdGhpcy5kZWx0YVggPSB0b3VjaC5jbGllbnRYIC0gdGhpcy5zdGFydFg7XG4gICAgICAgICAgICB0aGlzLmRlbHRhWSA9IHRvdWNoLmNsaWVudFkgLSB0aGlzLnN0YXJ0WTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WCA9IE1hdGguYWJzKHRoaXMuZGVsdGFYKTtcbiAgICAgICAgICAgIHRoaXMub2Zmc2V0WSA9IE1hdGguYWJzKHRoaXMuZGVsdGFZKTtcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5kaXJlY3Rpb24gfHwgZ2V0RGlyZWN0aW9uKHRoaXMub2Zmc2V0WCwgdGhpcy5vZmZzZXRZKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19