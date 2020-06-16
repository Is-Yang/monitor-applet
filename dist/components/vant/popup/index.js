"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var transition_1 = require('./../mixins/transition.js');
component_1.VantComponent({
    classes: ['enter-class', 'enter-active-class', 'enter-to-class', 'leave-class', 'leave-active-class', 'leave-to-class'],
    mixins: [transition_1.transition(false)],
    props: {
        round: Boolean,
        closeable: Boolean,
        customStyle: String,
        overlayStyle: String,
        transition: {
            type: String,
            observer: 'observeClass'
        },
        zIndex: {
            type: Number,
            value: 100
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeIcon: {
            type: String,
            value: 'cross'
        },
        closeIconPosition: {
            type: String,
            value: 'top-right'
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        position: {
            type: String,
            value: 'center',
            observer: 'observeClass'
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: false
        }
    },
    created: function created() {
        this.observeClass();
    },
    methods: {
        onClickCloseIcon: function onClickCloseIcon() {
            this.$emit('close');
        },
        onClickOverlay: function onClickOverlay() {
            this.$emit('click-overlay');
            if (this.data.closeOnClickOverlay) {
                this.$emit('close');
            }
        },
        observeClass: function observeClass() {
            var _a = this.data,
                transition = _a.transition,
                position = _a.position;
            var updateData = {
                name: transition || position
            };
            if (transition === 'none') {
                updateData.duration = 0;
            }
            this.setData(updateData);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidHJhbnNpdGlvbl8xIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJtaXhpbnMiLCJ0cmFuc2l0aW9uIiwicHJvcHMiLCJyb3VuZCIsIkJvb2xlYW4iLCJjbG9zZWFibGUiLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsIm92ZXJsYXlTdHlsZSIsInR5cGUiLCJvYnNlcnZlciIsInpJbmRleCIsIk51bWJlciIsIm92ZXJsYXkiLCJjbG9zZUljb24iLCJjbG9zZUljb25Qb3NpdGlvbiIsImNsb3NlT25DbGlja092ZXJsYXkiLCJwb3NpdGlvbiIsInNhZmVBcmVhSW5zZXRCb3R0b20iLCJzYWZlQXJlYUluc2V0VG9wIiwiY3JlYXRlZCIsIm9ic2VydmVDbGFzcyIsIm1ldGhvZHMiLCJvbkNsaWNrQ2xvc2VJY29uIiwiJGVtaXQiLCJvbkNsaWNrT3ZlcmxheSIsImRhdGEiLCJfYSIsInVwZGF0ZURhdGEiLCJuYW1lIiwiZHVyYXRpb24iLCJzZXREYXRhIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLElBQUlDLGVBQWVELFFBQVEsc0JBQVIsQ0FBbkI7QUFDQUQsWUFBWUcsYUFBWixDQUEwQjtBQUN0QkMsYUFBUyxDQUNMLGFBREssRUFFTCxvQkFGSyxFQUdMLGdCQUhLLEVBSUwsYUFKSyxFQUtMLG9CQUxLLEVBTUwsZ0JBTkssQ0FEYTtBQVN0QkMsWUFBUSxDQUFDSCxhQUFhSSxVQUFiLENBQXdCLEtBQXhCLENBQUQsQ0FUYztBQVV0QkMsV0FBTztBQUNIQyxlQUFPQyxPQURKO0FBRUhDLG1CQUFXRCxPQUZSO0FBR0hFLHFCQUFhQyxNQUhWO0FBSUhDLHNCQUFjRCxNQUpYO0FBS0hOLG9CQUFZO0FBQ1JRLGtCQUFNRixNQURFO0FBRVJHLHNCQUFVO0FBRkYsU0FMVDtBQVNIQyxnQkFBUTtBQUNKRixrQkFBTUcsTUFERjtBQUVKbEIsbUJBQU87QUFGSCxTQVRMO0FBYUhtQixpQkFBUztBQUNMSixrQkFBTUwsT0FERDtBQUVMVixtQkFBTztBQUZGLFNBYk47QUFpQkhvQixtQkFBVztBQUNQTCxrQkFBTUYsTUFEQztBQUVQYixtQkFBTztBQUZBLFNBakJSO0FBcUJIcUIsMkJBQW1CO0FBQ2ZOLGtCQUFNRixNQURTO0FBRWZiLG1CQUFPO0FBRlEsU0FyQmhCO0FBeUJIc0IsNkJBQXFCO0FBQ2pCUCxrQkFBTUwsT0FEVztBQUVqQlYsbUJBQU87QUFGVSxTQXpCbEI7QUE2Qkh1QixrQkFBVTtBQUNOUixrQkFBTUYsTUFEQTtBQUVOYixtQkFBTyxRQUZEO0FBR05nQixzQkFBVTtBQUhKLFNBN0JQO0FBa0NIUSw2QkFBcUI7QUFDakJULGtCQUFNTCxPQURXO0FBRWpCVixtQkFBTztBQUZVLFNBbENsQjtBQXNDSHlCLDBCQUFrQjtBQUNkVixrQkFBTUwsT0FEUTtBQUVkVixtQkFBTztBQUZPO0FBdENmLEtBVmU7QUFxRHRCMEIsYUFBUyxtQkFBWTtBQUNqQixhQUFLQyxZQUFMO0FBQ0gsS0F2RHFCO0FBd0R0QkMsYUFBUztBQUNMQywwQkFBa0IsNEJBQVk7QUFDMUIsaUJBQUtDLEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FISTtBQUlMQyx3QkFBZ0IsMEJBQVk7QUFDeEIsaUJBQUtELEtBQUwsQ0FBVyxlQUFYO0FBQ0EsZ0JBQUksS0FBS0UsSUFBTCxDQUFVVixtQkFBZCxFQUFtQztBQUMvQixxQkFBS1EsS0FBTCxDQUFXLE9BQVg7QUFDSDtBQUNKLFNBVEk7QUFVTEgsc0JBQWMsd0JBQVk7QUFDdEIsZ0JBQUlNLEtBQUssS0FBS0QsSUFBZDtBQUFBLGdCQUFvQnpCLGFBQWEwQixHQUFHMUIsVUFBcEM7QUFBQSxnQkFBZ0RnQixXQUFXVSxHQUFHVixRQUE5RDtBQUNBLGdCQUFJVyxhQUFhO0FBQ2JDLHNCQUFNNUIsY0FBY2dCO0FBRFAsYUFBakI7QUFHQSxnQkFBSWhCLGVBQWUsTUFBbkIsRUFBMkI7QUFDdkIyQiwyQkFBV0UsUUFBWCxHQUFzQixDQUF0QjtBQUNIO0FBQ0QsaUJBQUtDLE9BQUwsQ0FBYUgsVUFBYjtBQUNIO0FBbkJJO0FBeERhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciB0cmFuc2l0aW9uXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL3RyYW5zaXRpb25cIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBjbGFzc2VzOiBbXG4gICAgICAgICdlbnRlci1jbGFzcycsXG4gICAgICAgICdlbnRlci1hY3RpdmUtY2xhc3MnLFxuICAgICAgICAnZW50ZXItdG8tY2xhc3MnLFxuICAgICAgICAnbGVhdmUtY2xhc3MnLFxuICAgICAgICAnbGVhdmUtYWN0aXZlLWNsYXNzJyxcbiAgICAgICAgJ2xlYXZlLXRvLWNsYXNzJ1xuICAgIF0sXG4gICAgbWl4aW5zOiBbdHJhbnNpdGlvbl8xLnRyYW5zaXRpb24oZmFsc2UpXSxcbiAgICBwcm9wczoge1xuICAgICAgICByb3VuZDogQm9vbGVhbixcbiAgICAgICAgY2xvc2VhYmxlOiBCb29sZWFuLFxuICAgICAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxuICAgICAgICBvdmVybGF5U3R5bGU6IFN0cmluZyxcbiAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdvYnNlcnZlQ2xhc3MnXG4gICAgICAgIH0sXG4gICAgICAgIHpJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDEwMFxuICAgICAgICB9LFxuICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VJY29uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ2Nyb3NzJ1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZUljb25Qb3NpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd0b3AtcmlnaHQnXG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlT25DbGlja092ZXJsYXk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBwb3NpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdjZW50ZXInLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdvYnNlcnZlQ2xhc3MnXG4gICAgICAgIH0sXG4gICAgICAgIHNhZmVBcmVhSW5zZXRCb3R0b206IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBzYWZlQXJlYUluc2V0VG9wOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIGNyZWF0ZWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5vYnNlcnZlQ2xhc3MoKTtcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGlja0Nsb3NlSWNvbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja092ZXJsYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLW92ZXJsYXknKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuY2xvc2VPbkNsaWNrT3ZlcmxheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9ic2VydmVDbGFzczogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hID0gdGhpcy5kYXRhLCB0cmFuc2l0aW9uID0gX2EudHJhbnNpdGlvbiwgcG9zaXRpb24gPSBfYS5wb3NpdGlvbjtcbiAgICAgICAgICAgIHZhciB1cGRhdGVEYXRhID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRyYW5zaXRpb24gfHwgcG9zaXRpb25cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAodHJhbnNpdGlvbiA9PT0gJ25vbmUnKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlRGF0YS5kdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNldERhdGEodXBkYXRlRGF0YSk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==