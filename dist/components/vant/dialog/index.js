"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var button_1 = require('./../mixins/button.js');
var open_type_1 = require('./../mixins/open-type.js');
var color_1 = require('./../common/color.js');
component_1.VantComponent({
    mixins: [button_1.button, open_type_1.openType],
    props: {
        show: {
            type: Boolean,
            observer: function observer(show) {
                !show && this.stopLoading();
            }
        },
        title: String,
        message: String,
        useSlot: Boolean,
        className: String,
        customStyle: String,
        asyncClose: Boolean,
        messageAlign: String,
        overlayStyle: String,
        useTitleSlot: Boolean,
        showCancelButton: Boolean,
        closeOnClickOverlay: Boolean,
        confirmButtonOpenType: String,
        width: null,
        zIndex: {
            type: Number,
            value: 2000
        },
        confirmButtonText: {
            type: String,
            value: '确认'
        },
        cancelButtonText: {
            type: String,
            value: '取消'
        },
        confirmButtonColor: {
            type: String,
            value: color_1.BLUE
        },
        cancelButtonColor: {
            type: String,
            value: color_1.GRAY
        },
        showConfirmButton: {
            type: Boolean,
            value: true
        },
        overlay: {
            type: Boolean,
            value: true
        },
        transition: {
            type: String,
            value: 'scale'
        }
    },
    data: {
        loading: {
            confirm: false,
            cancel: false
        }
    },
    methods: {
        onConfirm: function onConfirm() {
            this.handleAction('confirm');
        },
        onCancel: function onCancel() {
            this.handleAction('cancel');
        },
        onClickOverlay: function onClickOverlay() {
            this.onClose('overlay');
        },
        handleAction: function handleAction(action) {
            var _a;
            if (this.data.asyncClose) {
                this.setData((_a = {}, _a["loading." + action] = true, _a));
            }
            this.onClose(action);
        },
        close: function close() {
            this.setData({
                show: false
            });
        },
        stopLoading: function stopLoading() {
            this.setData({
                loading: {
                    confirm: false,
                    cancel: false
                }
            });
        },
        onClose: function onClose(action) {
            if (!this.data.asyncClose) {
                this.close();
            }
            this.$emit('close', action);
            // 把 dialog 实例传递出去，可以通过 stopLoading() 在外部关闭按钮的 loading
            this.$emit(action, { dialog: this });
            var callback = this.data[action === 'confirm' ? 'onConfirm' : 'onCancel'];
            if (callback) {
                callback(this);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiYnV0dG9uXzEiLCJvcGVuX3R5cGVfMSIsImNvbG9yXzEiLCJWYW50Q29tcG9uZW50IiwibWl4aW5zIiwiYnV0dG9uIiwib3BlblR5cGUiLCJwcm9wcyIsInNob3ciLCJ0eXBlIiwiQm9vbGVhbiIsIm9ic2VydmVyIiwic3RvcExvYWRpbmciLCJ0aXRsZSIsIlN0cmluZyIsIm1lc3NhZ2UiLCJ1c2VTbG90IiwiY2xhc3NOYW1lIiwiY3VzdG9tU3R5bGUiLCJhc3luY0Nsb3NlIiwibWVzc2FnZUFsaWduIiwib3ZlcmxheVN0eWxlIiwidXNlVGl0bGVTbG90Iiwic2hvd0NhbmNlbEJ1dHRvbiIsImNsb3NlT25DbGlja092ZXJsYXkiLCJjb25maXJtQnV0dG9uT3BlblR5cGUiLCJ3aWR0aCIsInpJbmRleCIsIk51bWJlciIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsImNvbmZpcm1CdXR0b25Db2xvciIsIkJMVUUiLCJjYW5jZWxCdXR0b25Db2xvciIsIkdSQVkiLCJzaG93Q29uZmlybUJ1dHRvbiIsIm92ZXJsYXkiLCJ0cmFuc2l0aW9uIiwiZGF0YSIsImxvYWRpbmciLCJjb25maXJtIiwiY2FuY2VsIiwibWV0aG9kcyIsIm9uQ29uZmlybSIsImhhbmRsZUFjdGlvbiIsIm9uQ2FuY2VsIiwib25DbGlja092ZXJsYXkiLCJvbkNsb3NlIiwiYWN0aW9uIiwiX2EiLCJzZXREYXRhIiwiY2xvc2UiLCIkZW1pdCIsImRpYWxvZyIsImNhbGxiYWNrIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsY0FBY0MsUUFBUSxxQkFBUixDQUFsQjtBQUNBLElB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T0FBWCxFQUFvQkosTUFBcEI7QUFDQTtBQUNBLGlCQUFLSSxLQUFMLENBQVdKLE1BQVgsRUFBbUIsRUFBRUssUUFBUSxJQUFWLEVBQW5CO0FBQ0EsZ0JBQUlDLFdBQVcsS0FBS2hCLElBQUwsQ0FBVVUsV0FBVyxTQUFYLEdBQXVCLFdBQXZCLEdBQXFDLFVBQS9DLENBQWY7QUFDQSxnQkFBSU0sUUFBSixFQUFjO0FBQ1ZBLHlCQUFTLElBQVQ7QUFDSDtBQUNKO0FBM0NJO0FBN0RhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi4vY29tbW9uL2NvbXBvbmVudFwiKTtcbnZhciBidXR0b25fMSA9IHJlcXVpcmUoXCIuLi9taXhpbnMvYnV0dG9uXCIpO1xudmFyIG9wZW5fdHlwZV8xID0gcmVxdWlyZShcIi4uL21peGlucy9vcGVuLXR5cGVcIik7XG52YXIgY29sb3JfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29sb3JcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBtaXhpbnM6IFtidXR0b25fMS5idXR0b24sIG9wZW5fdHlwZV8xLm9wZW5UeXBlXSxcbiAgICBwcm9wczoge1xuICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uIChzaG93KSB7XG4gICAgICAgICAgICAgICAgIXNob3cgJiYgdGhpcy5zdG9wTG9hZGluZygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICB0aXRsZTogU3RyaW5nLFxuICAgICAgICBtZXNzYWdlOiBTdHJpbmcsXG4gICAgICAgIHVzZVNsb3Q6IEJvb2xlYW4sXG4gICAgICAgIGNsYXNzTmFtZTogU3RyaW5nLFxuICAgICAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxuICAgICAgICBhc3luY0Nsb3NlOiBCb29sZWFuLFxuICAgICAgICBtZXNzYWdlQWxpZ246IFN0cmluZyxcbiAgICAgICAgb3ZlcmxheVN0eWxlOiBTdHJpbmcsXG4gICAgICAgIHVzZVRpdGxlU2xvdDogQm9vbGVhbixcbiAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogQm9vbGVhbixcbiAgICAgICAgY2xvc2VPbkNsaWNrT3ZlcmxheTogQm9vbGVhbixcbiAgICAgICAgY29uZmlybUJ1dHRvbk9wZW5UeXBlOiBTdHJpbmcsXG4gICAgICAgIHdpZHRoOiBudWxsLFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAyMDAwXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm1CdXR0b25UZXh0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ+ehruiupCdcbiAgICAgICAgfSxcbiAgICAgICAgY2FuY2VsQnV0dG9uVGV4dDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICflj5bmtognXG4gICAgICAgIH0sXG4gICAgICAgIGNvbmZpcm1CdXR0b25Db2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IGNvbG9yXzEuQkxVRVxuICAgICAgICB9LFxuICAgICAgICBjYW5jZWxCdXR0b25Db2xvcjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6IGNvbG9yXzEuR1JBWVxuICAgICAgICB9LFxuICAgICAgICBzaG93Q29uZmlybUJ1dHRvbjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG92ZXJsYXk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3NjYWxlJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgICAgIGNvbmZpcm06IGZhbHNlLFxuICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9uQ29uZmlybTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVBY3Rpb24oJ2NvbmZpcm0nKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DYW5jZWw6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlQWN0aW9uKCdjYW5jZWwnKTtcbiAgICAgICAgfSxcbiAgICAgICAgb25DbGlja092ZXJsYXk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMub25DbG9zZSgnb3ZlcmxheScpO1xuICAgICAgICB9LFxuICAgICAgICBoYW5kbGVBY3Rpb246IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGEuYXN5bmNDbG9zZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0YSgoX2EgPSB7fSxcbiAgICAgICAgICAgICAgICAgICAgX2FbXCJsb2FkaW5nLlwiICsgYWN0aW9uXSA9IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIF9hKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm9uQ2xvc2UoYWN0aW9uKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzdG9wTG9hZGluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbmZpcm06IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGZhbHNlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xvc2U6IGZ1bmN0aW9uIChhY3Rpb24pIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5kYXRhLmFzeW5jQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjbG9zZScsIGFjdGlvbik7XG4gICAgICAgICAgICAvLyDmioogZGlhbG9nIOWunuS+i+S8oOmAkuWHuuWOu++8jOWPr+S7pemAmui/hyBzdG9wTG9hZGluZygpIOWcqOWklumDqOWFs+mXreaMiemSrueahCBsb2FkaW5nXG4gICAgICAgICAgICB0aGlzLiRlbWl0KGFjdGlvbiwgeyBkaWFsb2c6IHRoaXMgfSk7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmRhdGFbYWN0aW9uID09PSAnY29uZmlybScgPyAnb25Db25maXJtJyA6ICdvbkNhbmNlbCddO1xuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==