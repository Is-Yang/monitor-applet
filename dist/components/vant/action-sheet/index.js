"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var button_1 = require('./../mixins/button.js');
var open_type_1 = require('./../mixins/open-type.js');
component_1.VantComponent({
    mixins: [button_1.button, open_type_1.openType],
    props: {
        show: Boolean,
        title: String,
        cancelText: String,
        description: String,
        round: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 100
        },
        actions: {
            type: Array,
            value: []
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        closeOnClickAction: {
            type: Boolean,
            value: true
        },
        safeAreaInsetBottom: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onSelect: function onSelect(event) {
            var index = event.currentTarget.dataset.index;
            var item = this.data.actions[index];
            if (item && !item.disabled && !item.loading) {
                this.$emit('select', item);
                if (this.data.closeOnClickAction) {
                    this.onClose();
                }
            }
        },
        onCancel: function onCancel() {
            this.$emit('cancel');
        },
        onClose: function onClose() {
            this.$emit('close');
        },
        onClickOverlay: function onClickOverlay() {
            this.$emit('click-overlay');
            this.onClose();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiYnV0dG9uXzEiLCJvcGVuX3R5cGVfMSIsIlZhbnRDb21wb25lbnQiLCJtaXhpbnMiLCJidXR0b24iLCJvcGVuVHlwZSIsInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJ0aXRsZSIsIlN0cmluZyIsImNhbmNlbFRleHQiLCJkZXNjcmlwdGlvbiIsInJvdW5kIiwidHlwZSIsInpJbmRleCIsIk51bWJlciIsImFjdGlvbnMiLCJBcnJheSIsIm92ZXJsYXkiLCJjbG9zZU9uQ2xpY2tPdmVybGF5IiwiY2xvc2VPbkNsaWNrQWN0aW9uIiwic2FmZUFyZWFJbnNldEJvdHRvbSIsIm1ldGhvZHMiLCJvblNlbGVjdCIsImV2ZW50IiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIml0ZW0iLCJkYXRhIiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwiJGVtaXQiLCJvbkNsb3NlIiwib25DYW5jZWwiLCJvbkNsaWNrT3ZlcmxheSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxXQUFXRCxRQUFRLGtCQUFSLENBQWY7QUFDQSxJQUFJRSxjQUFjRixRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlJLGFBQVosQ0FBMEI7QUFDdEJDLFlBQVEsQ0FBQ0gsU0FBU0ksTUFBVixFQUFrQkgsWUFBWUksUUFBOUIsQ0FEYztBQUV0QkMsV0FBTztBQUNIQyxjQUFNQyxPQURIO0FBRUhDLGVBQU9DLE1BRko7QUFHSEMsb0JBQVlELE1BSFQ7QUFJSEUscUJBQWFGLE1BSlY7QUFLSEcsZUFBTztBQUNIQyxrQkFBTU4sT0FESDtBQUVIWCxtQkFBTztBQUZKLFNBTEo7QUFTSGtCLGdCQUFRO0FBQ0pELGtCQUFNRSxNQURGO0FBRUpuQixtQkFBTztBQUZILFNBVEw7QUFhSG9CLGlCQUFTO0FBQ0xILGtCQUFNSSxLQUREO0FBRUxyQixtQkFBTztBQUZGLFNBYk47QUFpQkhzQixpQkFBUztBQUNMTCxrQkFBTU4sT0FERDtBQUVMWCxtQkFBTztBQUZGLFNBakJOO0FBcUJIdUIsNkJBQXFCO0FBQ2pCTixrQkFBTU4sT0FEVztBQUVqQlgsbUJBQU87QUFGVSxTQXJCbEI7QUF5Qkh3Qiw0QkFBb0I7QUFDaEJQLGtCQUFNTixPQURVO0FBRWhCWCxtQkFBTztBQUZTLFNBekJqQjtBQTZCSHlCLDZCQUFxQjtBQUNqQlIsa0JBQU1OLE9BRFc7QUFFakJYLG1CQUFPO0FBRlU7QUE3QmxCLEtBRmU7QUFvQ3RCMEIsYUFBUztBQUNMQyxrQkFBVSxrQkFBVUMsS0FBVixFQUFpQjtBQUN2QixnQkFBSUMsUUFBUUQsTUFBTUUsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJGLEtBQXhDO0FBQ0EsZ0JBQUlHLE9BQU8sS0FBS0MsSUFBTCxDQUFVYixPQUFWLENBQWtCUyxLQUFsQixDQUFYO0FBQ0EsZ0JBQUlHLFFBQVEsQ0FBQ0EsS0FBS0UsUUFBZCxJQUEwQixDQUFDRixLQUFLRyxPQUFwQyxFQUE2QztBQUN6QyxxQkFBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJKLElBQXJCO0FBQ0Esb0JBQUksS0FBS0MsSUFBTCxDQUFVVCxrQkFBZCxFQUFrQztBQUM5Qix5QkFBS2EsT0FBTDtBQUNIO0FBQ0o7QUFDSixTQVZJO0FBV0xDLGtCQUFVLG9CQUFZO0FBQ2xCLGlCQUFLRixLQUFMLENBQVcsUUFBWDtBQUNILFNBYkk7QUFjTEMsaUJBQVMsbUJBQVk7QUFDakIsaUJBQUtELEtBQUwsQ0FBVyxPQUFYO0FBQ0gsU0FoQkk7QUFpQkxHLHdCQUFnQiwwQkFBWTtBQUN4QixpQkFBS0gsS0FBTCxDQUFXLGVBQVg7QUFDQSxpQkFBS0MsT0FBTDtBQUNIO0FBcEJJO0FBcENhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciBidXR0b25fMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvYnV0dG9uXCIpO1xudmFyIG9wZW5fdHlwZV8xID0gcmVxdWlyZShcIi4uL21peGlucy9vcGVuLXR5cGVcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBtaXhpbnM6IFtidXR0b25fMS5idXR0b24sIG9wZW5fdHlwZV8xLm9wZW5UeXBlXSxcbiAgICBwcm9wczoge1xuICAgICAgICBzaG93OiBCb29sZWFuLFxuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBjYW5jZWxUZXh0OiBTdHJpbmcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBTdHJpbmcsXG4gICAgICAgIHJvdW5kOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgekluZGV4OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogMTAwXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGlvbnM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgdmFsdWU6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICBjbG9zZU9uQ2xpY2tPdmVybGF5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2VPbkNsaWNrQWN0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgc2FmZUFyZWFJbnNldEJvdHRvbToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25TZWxlY3Q6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xuICAgICAgICAgICAgdmFyIGl0ZW0gPSB0aGlzLmRhdGEuYWN0aW9uc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoaXRlbSAmJiAhaXRlbS5kaXNhYmxlZCAmJiAhaXRlbS5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2VsZWN0JywgaXRlbSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YS5jbG9zZU9uQ2xpY2tBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNsb3NlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBvbkNhbmNlbDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tPdmVybGF5OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljay1vdmVybGF5Jyk7XG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19