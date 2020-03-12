"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.openType = Behavior({
    properties: {
        openType: String
    },
    methods: {
        bindGetUserInfo: function bindGetUserInfo(event) {
            this.$emit('getuserinfo', event.detail);
        },
        bindContact: function bindContact(event) {
            this.$emit('contact', event.detail);
        },
        bindGetPhoneNumber: function bindGetPhoneNumber(event) {
            this.$emit('getphonenumber', event.detail);
        },
        bindError: function bindError(event) {
            this.$emit('error', event.detail);
        },
        bindLaunchApp: function bindLaunchApp(event) {
            this.$emit('launchapp', event.detail);
        },
        bindOpenSetting: function bindOpenSetting(event) {
            this.$emit('opensetting', event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW4tdHlwZS5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsIm9wZW5UeXBlIiwiQmVoYXZpb3IiLCJwcm9wZXJ0aWVzIiwiU3RyaW5nIiwibWV0aG9kcyIsImJpbmRHZXRVc2VySW5mbyIsImV2ZW50IiwiJGVtaXQiLCJkZXRhaWwiLCJiaW5kQ29udGFjdCIsImJpbmRHZXRQaG9uZU51bWJlciIsImJpbmRFcnJvciIsImJpbmRMYXVuY2hBcHAiLCJiaW5kT3BlblNldHRpbmciXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQUQsUUFBUUUsUUFBUixHQUFtQkMsU0FBUztBQUN4QkMsZ0JBQVk7QUFDUkYsa0JBQVVHO0FBREYsS0FEWTtBQUl4QkMsYUFBUztBQUNMQyx5QkFBaUIseUJBQVVDLEtBQVYsRUFBaUI7QUFDOUIsaUJBQUtDLEtBQUwsQ0FBVyxhQUFYLEVBQTBCRCxNQUFNRSxNQUFoQztBQUNILFNBSEk7QUFJTEMscUJBQWEscUJBQVVILEtBQVYsRUFBaUI7QUFDMUIsaUJBQUtDLEtBQUwsQ0FBVyxTQUFYLEVBQXNCRCxNQUFNRSxNQUE1QjtBQUNILFNBTkk7QUFPTEUsNEJBQW9CLDRCQUFVSixLQUFWLEVBQWlCO0FBQ2pDLGlCQUFLQyxLQUFMLENBQVcsZ0JBQVgsRUFBNkJELE1BQU1FLE1BQW5DO0FBQ0gsU0FUSTtBQVVMRyxtQkFBVyxtQkFBVUwsS0FBVixFQUFpQjtBQUN4QixpQkFBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JELE1BQU1FLE1BQTFCO0FBQ0gsU0FaSTtBQWFMSSx1QkFBZSx1QkFBVU4sS0FBVixFQUFpQjtBQUM1QixpQkFBS0MsS0FBTCxDQUFXLFdBQVgsRUFBd0JELE1BQU1FLE1BQTlCO0FBQ0gsU0FmSTtBQWdCTEsseUJBQWlCLHlCQUFVUCxLQUFWLEVBQWlCO0FBQzlCLGlCQUFLQyxLQUFMLENBQVcsYUFBWCxFQUEwQkQsTUFBTUUsTUFBaEM7QUFDSDtBQWxCSTtBQUplLENBQVQsQ0FBbkIiLCJmaWxlIjoib3Blbi10eXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLm9wZW5UeXBlID0gQmVoYXZpb3Ioe1xuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgb3BlblR5cGU6IFN0cmluZ1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBiaW5kR2V0VXNlckluZm86IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZ2V0dXNlcmluZm8nLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBiaW5kQ29udGFjdDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjb250YWN0JywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmluZEdldFBob25lTnVtYmVyOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2dldHBob25lbnVtYmVyJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmluZEVycm9yOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2Vycm9yJywgZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgfSxcbiAgICAgICAgYmluZExhdW5jaEFwcDogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdsYXVuY2hhcHAnLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBiaW5kT3BlblNldHRpbmc6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnb3BlbnNldHRpbmcnLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgIH1cbn0pO1xuIl19