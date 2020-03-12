"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var button_1 = require('./../mixins/button.js');
var open_type_1 = require('./../mixins/open-type.js');
component_1.VantComponent({
    mixins: [button_1.button, open_type_1.openType],
    classes: ['hover-class', 'loading-class'],
    data: {
        baseStyle: ''
    },
    props: {
        icon: String,
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        hairline: Boolean,
        disabled: Boolean,
        loadingText: String,
        customStyle: String,
        loadingType: {
            type: String,
            value: 'circular'
        },
        type: {
            type: String,
            value: 'default'
        },
        size: {
            type: String,
            value: 'normal'
        },
        loadingSize: {
            type: String,
            value: '20px'
        },
        color: {
            type: String,
            observer: function observer(color) {
                var style = '';
                if (color) {
                    style += "color: " + (this.data.plain ? color : 'white') + ";";
                    if (!this.data.plain) {
                        // Use background instead of backgroundColor to make linear-gradient work
                        style += "background: " + color + ";";
                    }
                    // hide border when color is linear-gradient
                    if (color.indexOf('gradient') !== -1) {
                        style += 'border: 0;';
                    } else {
                        style += "border-color: " + color + ";";
                    }
                }
                if (style !== this.data.baseStyle) {
                    this.setData({ baseStyle: style });
                }
            }
        }
    },
    methods: {
        onClick: function onClick() {
            if (!this.data.disabled && !this.data.loading) {
                this.$emit('click');
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiYnV0dG9uXzEiLCJvcGVuX3R5cGVfMSIsIlZhbnRDb21wb25lbnQiLCJtaXhpbnMiLCJidXR0b24iLCJvcGVuVHlwZSIsImNsYXNzZXMiLCJkYXRhIiwiYmFzZVN0eWxlIiwicHJvcHMiLCJpY29uIiwiU3RyaW5nIiwicGxhaW4iLCJCb29sZWFuIiwiYmxvY2siLCJyb3VuZCIsInNxdWFyZSIsImxvYWRpbmciLCJoYWlybGluZSIsImRpc2FibGVkIiwibG9hZGluZ1RleHQiLCJjdXN0b21TdHlsZSIsImxvYWRpbmdUeXBlIiwidHlwZSIsInNpemUiLCJsb2FkaW5nU2l6ZSIsImNvbG9yIiwib2JzZXJ2ZXIiLCJzdHlsZSIsImluZGV4T2YiLCJzZXREYXRhIiwibWV0aG9kcyIsIm9uQ2xpY2siLCIkZW1pdCJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLE9BQU9DLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxXQUFXRCxRQUFRLGtCQUFSLENBQWY7QUFDQSxJQUFJRSxjQUFjRixRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlJLGFBQVosQ0FBMEI7QUFDdEJDLFlBQVEsQ0FBQ0gsU0FBU0ksTUFBVixFQUFrQkgsWUFBWUksUUFBOUIsQ0FEYztBQUV0QkMsYUFBUyxDQUFDLGFBQUQsRUFBZ0IsZUFBaEIsQ0FGYTtBQUd0QkMsVUFBTTtBQUNGQyxtQkFBVztBQURULEtBSGdCO0FBTXRCQyxXQUFPO0FBQ0hDLGNBQU1DLE1BREg7QUFFSEMsZUFBT0MsT0FGSjtBQUdIQyxlQUFPRCxPQUhKO0FBSUhFLGVBQU9GLE9BSko7QUFLSEcsZ0JBQVFILE9BTEw7QUFNSEksaUJBQVNKLE9BTk47QUFPSEssa0JBQVVMLE9BUFA7QUFRSE0sa0JBQVVOLE9BUlA7QUFTSE8scUJBQWFULE1BVFY7QUFVSFUscUJBQWFWLE1BVlY7QUFXSFcscUJBQWE7QUFDVEMsa0JBQU1aLE1BREc7QUFFVGQsbUJBQU87QUFGRSxTQVhWO0FBZUgwQixjQUFNO0FBQ0ZBLGtCQUFNWixNQURKO0FBRUZkLG1CQUFPO0FBRkwsU0FmSDtBQW1CSDJCLGNBQU07QUFDRkQsa0JBQU1aLE1BREo7QUFFRmQsbUJBQU87QUFGTCxTQW5CSDtBQXVCSDRCLHFCQUFhO0FBQ1RGLGtCQUFNWixNQURHO0FBRVRkLG1CQUFPO0FBRkUsU0F2QlY7QUEyQkg2QixlQUFPO0FBQ0hILGtCQUFNWixNQURIO0FBRUhnQixzQkFBVSxrQkFBVUQsS0FBVixFQUFpQjtBQUN2QixvQkFBSUUsUUFBUSxFQUFaO0FBQ0Esb0JBQUlGLEtBQUosRUFBVztBQUNQRSw2QkFBUyxhQUFhLEtBQUtyQixJQUFMLENBQVVLLEtBQVYsR0FBa0JjLEtBQWxCLEdBQTBCLE9BQXZDLElBQWtELEdBQTNEO0FBQ0Esd0JBQUksQ0FBQyxLQUFLbkIsSUFBTCxDQUFVSyxLQUFmLEVBQXNCO0FBQ2xCO0FBQ0FnQixpQ0FBUyxpQkFBaUJGLEtBQWpCLEdBQXlCLEdBQWxDO0FBQ0g7QUFDRDtBQUNBLHdCQUFJQSxNQUFNRyxPQUFOLENBQWMsVUFBZCxNQUE4QixDQUFDLENBQW5DLEVBQXNDO0FBQ2xDRCxpQ0FBUyxZQUFUO0FBQ0gscUJBRkQsTUFHSztBQUNEQSxpQ0FBUyxtQkFBbUJGLEtBQW5CLEdBQTJCLEdBQXBDO0FBQ0g7QUFDSjtBQUNELG9CQUFJRSxVQUFVLEtBQUtyQixJQUFMLENBQVVDLFNBQXhCLEVBQW1DO0FBQy9CLHlCQUFLc0IsT0FBTCxDQUFhLEVBQUV0QixXQUFXb0IsS0FBYixFQUFiO0FBQ0g7QUFDSjtBQXJCRTtBQTNCSixLQU5lO0FBeUR0QkcsYUFBUztBQUNMQyxpQkFBUyxtQkFBWTtBQUNqQixnQkFBSSxDQUFDLEtBQUt6QixJQUFMLENBQVVZLFFBQVgsSUFBdUIsQ0FBQyxLQUFLWixJQUFMLENBQVVVLE9BQXRDLEVBQStDO0FBQzNDLHFCQUFLZ0IsS0FBTCxDQUFXLE9BQVg7QUFDSDtBQUNKO0FBTEk7QUF6RGEsQ0FBMUIiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIGJ1dHRvbl8xID0gcmVxdWlyZShcIi4uL21peGlucy9idXR0b25cIik7XG52YXIgb3Blbl90eXBlXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL29wZW4tdHlwZVwiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIG1peGluczogW2J1dHRvbl8xLmJ1dHRvbiwgb3Blbl90eXBlXzEub3BlblR5cGVdLFxuICAgIGNsYXNzZXM6IFsnaG92ZXItY2xhc3MnLCAnbG9hZGluZy1jbGFzcyddLFxuICAgIGRhdGE6IHtcbiAgICAgICAgYmFzZVN0eWxlOiAnJ1xuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgaWNvbjogU3RyaW5nLFxuICAgICAgICBwbGFpbjogQm9vbGVhbixcbiAgICAgICAgYmxvY2s6IEJvb2xlYW4sXG4gICAgICAgIHJvdW5kOiBCb29sZWFuLFxuICAgICAgICBzcXVhcmU6IEJvb2xlYW4sXG4gICAgICAgIGxvYWRpbmc6IEJvb2xlYW4sXG4gICAgICAgIGhhaXJsaW5lOiBCb29sZWFuLFxuICAgICAgICBkaXNhYmxlZDogQm9vbGVhbixcbiAgICAgICAgbG9hZGluZ1RleHQ6IFN0cmluZyxcbiAgICAgICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcbiAgICAgICAgbG9hZGluZ1R5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnY2lyY3VsYXInXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnZGVmYXVsdCdcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdub3JtYWwnXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRpbmdTaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJzIwcHgnXG4gICAgICAgIH0sXG4gICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gJyc7XG4gICAgICAgICAgICAgICAgaWYgKGNvbG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlICs9IFwiY29sb3I6IFwiICsgKHRoaXMuZGF0YS5wbGFpbiA/IGNvbG9yIDogJ3doaXRlJykgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEucGxhaW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSBiYWNrZ3JvdW5kIGluc3RlYWQgb2YgYmFja2dyb3VuZENvbG9yIHRvIG1ha2UgbGluZWFyLWdyYWRpZW50IHdvcmtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlICs9IFwiYmFja2dyb3VuZDogXCIgKyBjb2xvciArIFwiO1wiO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vIGhpZGUgYm9yZGVyIHdoZW4gY29sb3IgaXMgbGluZWFyLWdyYWRpZW50XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xvci5pbmRleE9mKCdncmFkaWVudCcpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgKz0gJ2JvcmRlcjogMDsnO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUgKz0gXCJib3JkZXItY29sb3I6IFwiICsgY29sb3IgKyBcIjtcIjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoc3R5bGUgIT09IHRoaXMuZGF0YS5iYXNlU3R5bGUpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHsgYmFzZVN0eWxlOiBzdHlsZSB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb25DbGljazogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQgJiYgIXRoaXMuZGF0YS5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19