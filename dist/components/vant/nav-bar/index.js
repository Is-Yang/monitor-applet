"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    classes: ['title-class'],
    props: {
        title: String,
        fixed: Boolean,
        leftText: String,
        rightText: String,
        leftArrow: Boolean,
        border: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 9
        },
        safeAreaInsetTop: {
            type: Boolean,
            value: true
        }
    },
    data: {
        statusBarHeight: 0
    },
    created: function created() {
        var statusBarHeight = wx.getSystemInfoSync().statusBarHeight;
        this.setData({ statusBarHeight: statusBarHeight });
    },
    methods: {
        onClickLeft: function onClickLeft() {
            this.$emit('click-left');
        },
        onClickRight: function onClickRight() {
            this.$emit('click-right');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwiZml4ZWQiLCJCb29sZWFuIiwibGVmdFRleHQiLCJyaWdodFRleHQiLCJsZWZ0QXJyb3ciLCJib3JkZXIiLCJ0eXBlIiwiekluZGV4IiwiTnVtYmVyIiwic2FmZUFyZWFJbnNldFRvcCIsImRhdGEiLCJzdGF0dXNCYXJIZWlnaHQiLCJjcmVhdGVkIiwid3giLCJnZXRTeXN0ZW1JbmZvU3luYyIsInNldERhdGEiLCJtZXRob2RzIiwib25DbGlja0xlZnQiLCIkZW1pdCIsIm9uQ2xpY2tSaWdodCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQUQsWUFBWUUsYUFBWixDQUEwQjtBQUN0QkMsYUFBUyxDQUFDLGFBQUQsQ0FEYTtBQUV0QkMsV0FBTztBQUNIQyxlQUFPQyxNQURKO0FBRUhDLGVBQU9DLE9BRko7QUFHSEMsa0JBQVVILE1BSFA7QUFJSEksbUJBQVdKLE1BSlI7QUFLSEssbUJBQVdILE9BTFI7QUFNSEksZ0JBQVE7QUFDSkMsa0JBQU1MLE9BREY7QUFFSlQsbUJBQU87QUFGSCxTQU5MO0FBVUhlLGdCQUFRO0FBQ0pELGtCQUFNRSxNQURGO0FBRUpoQixtQkFBTztBQUZILFNBVkw7QUFjSGlCLDBCQUFrQjtBQUNkSCxrQkFBTUwsT0FEUTtBQUVkVCxtQkFBTztBQUZPO0FBZGYsS0FGZTtBQXFCdEJrQixVQUFNO0FBQ0ZDLHlCQUFpQjtBQURmLEtBckJnQjtBQXdCdEJDLGFBQVMsbUJBQVk7QUFDakIsWUFBSUQsa0JBQWtCRSxHQUFHQyxpQkFBSCxHQUF1QkgsZUFBN0M7QUFDQSxhQUFLSSxPQUFMLENBQWEsRUFBRUosaUJBQWlCQSxlQUFuQixFQUFiO0FBQ0gsS0EzQnFCO0FBNEJ0QkssYUFBUztBQUNMQyxxQkFBYSx1QkFBWTtBQUNyQixpQkFBS0MsS0FBTCxDQUFXLFlBQVg7QUFDSCxTQUhJO0FBSUxDLHNCQUFjLHdCQUFZO0FBQ3RCLGlCQUFLRCxLQUFMLENBQVcsYUFBWDtBQUNIO0FBTkk7QUE1QmEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgY2xhc3NlczogWyd0aXRsZS1jbGFzcyddLFxuICAgIHByb3BzOiB7XG4gICAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICAgIGZpeGVkOiBCb29sZWFuLFxuICAgICAgICBsZWZ0VGV4dDogU3RyaW5nLFxuICAgICAgICByaWdodFRleHQ6IFN0cmluZyxcbiAgICAgICAgbGVmdEFycm93OiBCb29sZWFuLFxuICAgICAgICBib3JkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9LFxuICAgICAgICB6SW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiA5XG4gICAgICAgIH0sXG4gICAgICAgIHNhZmVBcmVhSW5zZXRUb3A6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIHN0YXR1c0JhckhlaWdodDogMFxuICAgIH0sXG4gICAgY3JlYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc3RhdHVzQmFySGVpZ2h0ID0gd3guZ2V0U3lzdGVtSW5mb1N5bmMoKS5zdGF0dXNCYXJIZWlnaHQ7XG4gICAgICAgIHRoaXMuc2V0RGF0YSh7IHN0YXR1c0JhckhlaWdodDogc3RhdHVzQmFySGVpZ2h0IH0pO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvbkNsaWNrTGVmdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2stbGVmdCcpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNsaWNrUmlnaHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLXJpZ2h0Jyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==