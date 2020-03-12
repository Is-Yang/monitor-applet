"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var link_1 = require('./../mixins/link.js');
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    classes: ['num-class', 'desc-class', 'thumb-class', 'title-class', 'price-class', 'origin-price-class'],
    mixins: [link_1.link],
    props: {
        tag: String,
        num: String,
        desc: String,
        thumb: String,
        title: String,
        price: {
            type: String,
            observer: 'updatePrice'
        },
        centered: Boolean,
        lazyLoad: Boolean,
        thumbLink: String,
        originPrice: String,
        thumbMode: {
            type: String,
            value: 'aspectFit'
        },
        currency: {
            type: String,
            value: '¥'
        }
    },
    methods: {
        updatePrice: function updatePrice() {
            var price = this.data.price;
            var priceArr = price.toString().split('.');
            this.setData({
                integerStr: priceArr[0],
                decimalStr: priceArr[1] ? "." + priceArr[1] : ''
            });
        },
        onClickThumb: function onClickThumb() {
            this.jumpLink('thumbLink');
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwibGlua18xIiwicmVxdWlyZSIsImNvbXBvbmVudF8xIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJtaXhpbnMiLCJsaW5rIiwicHJvcHMiLCJ0YWciLCJTdHJpbmciLCJudW0iLCJkZXNjIiwidGh1bWIiLCJ0aXRsZSIsInByaWNlIiwidHlwZSIsIm9ic2VydmVyIiwiY2VudGVyZWQiLCJCb29sZWFuIiwibGF6eUxvYWQiLCJ0aHVtYkxpbmsiLCJvcmlnaW5QcmljZSIsInRodW1iTW9kZSIsImN1cnJlbmN5IiwibWV0aG9kcyIsInVwZGF0ZVByaWNlIiwiZGF0YSIsInByaWNlQXJyIiwidG9TdHJpbmciLCJzcGxpdCIsInNldERhdGEiLCJpbnRlZ2VyU3RyIiwiZGVjaW1hbFN0ciIsIm9uQ2xpY2tUaHVtYiIsImp1bXBMaW5rIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0EsSUFBSUMsU0FBU0MsUUFBUSxnQkFBUixDQUFiO0FBQ0EsSUFBSUMsY0FBY0QsUUFBUSxxQkFBUixDQUFsQjtBQUNBQyxZQUFZQyxhQUFaLENBQTBCO0FBQ3RCQyxhQUFTLENBQ0wsV0FESyxFQUVMLFlBRkssRUFHTCxhQUhLLEVBSUwsYUFKSyxFQUtMLGFBTEssRUFNTCxvQkFOSyxDQURhO0FBU3RCQyxZQUFRLENBQUNMLE9BQU9NLElBQVIsQ0FUYztBQVV0QkMsV0FBTztBQUNIQyxhQUFLQyxNQURGO0FBRUhDLGFBQUtELE1BRkY7QUFHSEUsY0FBTUYsTUFISDtBQUlIRyxlQUFPSCxNQUpKO0FBS0hJLGVBQU9KLE1BTEo7QUFNSEssZUFBTztBQUNIQyxrQkFBTU4sTUFESDtBQUVITyxzQkFBVTtBQUZQLFNBTko7QUFVSEMsa0JBQVVDLE9BVlA7QUFXSEMsa0JBQVVELE9BWFA7QUFZSEUsbUJBQVdYLE1BWlI7QUFhSFkscUJBQWFaLE1BYlY7QUFjSGEsbUJBQVc7QUFDUFAsa0JBQU1OLE1BREM7QUFFUFYsbUJBQU87QUFGQSxTQWRSO0FBa0JId0Isa0JBQVU7QUFDTlIsa0JBQU1OLE1BREE7QUFFTlYsbUJBQU87QUFGRDtBQWxCUCxLQVZlO0FBaUN0QnlCLGFBQVM7QUFDTEMscUJBQWEsdUJBQVk7QUFDckIsZ0JBQUlYLFFBQVEsS0FBS1ksSUFBTCxDQUFVWixLQUF0QjtBQUNBLGdCQUFJYSxXQUFXYixNQUFNYyxRQUFOLEdBQWlCQyxLQUFqQixDQUF1QixHQUF2QixDQUFmO0FBQ0EsaUJBQUtDLE9BQUwsQ0FBYTtBQUNUQyw0QkFBWUosU0FBUyxDQUFULENBREg7QUFFVEssNEJBQVlMLFNBQVMsQ0FBVCxJQUFjLE1BQU1BLFNBQVMsQ0FBVCxDQUFwQixHQUFrQztBQUZyQyxhQUFiO0FBSUgsU0FSSTtBQVNMTSxzQkFBYyx3QkFBWTtBQUN0QixpQkFBS0MsUUFBTCxDQUFjLFdBQWQ7QUFDSDtBQVhJO0FBakNhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgbGlua18xID0gcmVxdWlyZShcIi4uL21peGlucy9saW5rXCIpO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBjbGFzc2VzOiBbXG4gICAgICAgICdudW0tY2xhc3MnLFxuICAgICAgICAnZGVzYy1jbGFzcycsXG4gICAgICAgICd0aHVtYi1jbGFzcycsXG4gICAgICAgICd0aXRsZS1jbGFzcycsXG4gICAgICAgICdwcmljZS1jbGFzcycsXG4gICAgICAgICdvcmlnaW4tcHJpY2UtY2xhc3MnXG4gICAgXSxcbiAgICBtaXhpbnM6IFtsaW5rXzEubGlua10sXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGFnOiBTdHJpbmcsXG4gICAgICAgIG51bTogU3RyaW5nLFxuICAgICAgICBkZXNjOiBTdHJpbmcsXG4gICAgICAgIHRodW1iOiBTdHJpbmcsXG4gICAgICAgIHRpdGxlOiBTdHJpbmcsXG4gICAgICAgIHByaWNlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBvYnNlcnZlcjogJ3VwZGF0ZVByaWNlJ1xuICAgICAgICB9LFxuICAgICAgICBjZW50ZXJlZDogQm9vbGVhbixcbiAgICAgICAgbGF6eUxvYWQ6IEJvb2xlYW4sXG4gICAgICAgIHRodW1iTGluazogU3RyaW5nLFxuICAgICAgICBvcmlnaW5QcmljZTogU3RyaW5nLFxuICAgICAgICB0aHVtYk1vZGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnYXNwZWN0Rml0J1xuICAgICAgICB9LFxuICAgICAgICBjdXJyZW5jeToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICfCpSdcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGVQcmljZTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHByaWNlID0gdGhpcy5kYXRhLnByaWNlO1xuICAgICAgICAgICAgdmFyIHByaWNlQXJyID0gcHJpY2UudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgdGhpcy5zZXREYXRhKHtcbiAgICAgICAgICAgICAgICBpbnRlZ2VyU3RyOiBwcmljZUFyclswXSxcbiAgICAgICAgICAgICAgICBkZWNpbWFsU3RyOiBwcmljZUFyclsxXSA/IFwiLlwiICsgcHJpY2VBcnJbMV0gOiAnJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2xpY2tUaHVtYjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5qdW1wTGluaygndGh1bWJMaW5rJyk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==