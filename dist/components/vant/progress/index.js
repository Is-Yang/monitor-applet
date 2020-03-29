"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var color_1 = require('./../common/color.js');
component_1.VantComponent({
    props: {
        inactive: Boolean,
        percentage: Number,
        pivotText: String,
        pivotColor: String,
        trackColor: String,
        showPivot: {
            type: Boolean,
            value: true
        },
        color: {
            type: String,
            value: color_1.BLUE
        },
        textColor: {
            type: String,
            value: '#fff'
        },
        strokeWidth: {
            type: null,
            value: 4
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiY29sb3JfMSIsIlZhbnRDb21wb25lbnQiLCJwcm9wcyIsImluYWN0aXZlIiwiQm9vbGVhbiIsInBlcmNlbnRhZ2UiLCJOdW1iZXIiLCJwaXZvdFRleHQiLCJTdHJpbmciLCJwaXZvdENvbG9yIiwidHJhY2tDb2xvciIsInNob3dQaXZvdCIsInR5cGUiLCJjb2xvciIsIkJMVUUiLCJ0ZXh0Q29sb3IiLCJzdHJva2VXaWR0aCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLGlCQUFSLENBQWQ7QUFDQUQsWUFBWUcsYUFBWixDQUEwQjtBQUN0QkMsV0FBTztBQUNIQyxrQkFBVUMsT0FEUDtBQUVIQyxvQkFBWUMsTUFGVDtBQUdIQyxtQkFBV0MsTUFIUjtBQUlIQyxvQkFBWUQsTUFKVDtBQUtIRSxvQkFBWUYsTUFMVDtBQU1IRyxtQkFBVztBQUNQQyxrQkFBTVIsT0FEQztBQUVQUCxtQkFBTztBQUZBLFNBTlI7QUFVSGdCLGVBQU87QUFDSEQsa0JBQU1KLE1BREg7QUFFSFgsbUJBQU9HLFFBQVFjO0FBRlosU0FWSjtBQWNIQyxtQkFBVztBQUNQSCxrQkFBTUosTUFEQztBQUVQWCxtQkFBTztBQUZBLFNBZFI7QUFrQkhtQixxQkFBYTtBQUNUSixrQkFBTSxJQURHO0FBRVRmLG1CQUFPO0FBRkU7QUFsQlY7QUFEZSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgY29sb3JfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29sb3JcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBwcm9wczoge1xuICAgICAgICBpbmFjdGl2ZTogQm9vbGVhbixcbiAgICAgICAgcGVyY2VudGFnZTogTnVtYmVyLFxuICAgICAgICBwaXZvdFRleHQ6IFN0cmluZyxcbiAgICAgICAgcGl2b3RDb2xvcjogU3RyaW5nLFxuICAgICAgICB0cmFja0NvbG9yOiBTdHJpbmcsXG4gICAgICAgIHNob3dQaXZvdDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogY29sb3JfMS5CTFVFXG4gICAgICAgIH0sXG4gICAgICAgIHRleHRDb2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICcjZmZmJ1xuICAgICAgICB9LFxuICAgICAgICBzdHJva2VXaWR0aDoge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiA0XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==