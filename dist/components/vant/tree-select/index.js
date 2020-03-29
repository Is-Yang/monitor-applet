"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
component_1.VantComponent({
    classes: ['main-item-class', 'content-item-class', 'main-active-class', 'content-active-class', 'main-disabled-class', 'content-disabled-class'],
    props: {
        items: {
            type: Array,
            observer: 'updateSubItems'
        },
        activeId: null,
        mainActiveIndex: {
            type: Number,
            value: 0,
            observer: 'updateSubItems'
        },
        height: {
            type: [Number, String],
            value: 300
        },
        max: {
            type: Number,
            value: Infinity
        }
    },
    data: {
        subItems: []
    },
    methods: {
        // 当一个子项被选择时
        onSelectItem: function onSelectItem(event) {
            var item = event.currentTarget.dataset.item;
            var isArray = Array.isArray(this.data.activeId);
            // 判断有没有超出右侧选择的最大数
            var isOverMax = isArray && this.data.activeId.length >= this.data.max;
            // 判断该项有没有被选中, 如果有被选中，则忽视是否超出的条件
            var isSelected = isArray ? this.data.activeId.indexOf(item.id) > -1 : this.data.activeId === item.id;
            if (!item.disabled && (!isOverMax || isSelected)) {
                this.$emit('click-item', item);
            }
        },
        // 当一个导航被点击时
        onClickNav: function onClickNav(event) {
            var index = event.detail;
            var item = this.data.items[index];
            if (!item.disabled) {
                this.$emit('click-nav', { index: index });
            }
        },
        // 更新子项列表
        updateSubItems: function updateSubItems() {
            var _a = this.data,
                items = _a.items,
                mainActiveIndex = _a.mainActiveIndex;
            var _b = (items[mainActiveIndex] || {}).children,
                children = _b === void 0 ? [] : _b;
            return this.set({ subItems: children });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJwcm9wcyIsIml0ZW1zIiwidHlwZSIsIkFycmF5Iiwib2JzZXJ2ZXIiLCJhY3RpdmVJZCIsIm1haW5BY3RpdmVJbmRleCIsIk51bWJlciIsImhlaWdodCIsIlN0cmluZyIsIm1heCIsIkluZmluaXR5IiwiZGF0YSIsInN1Ykl0ZW1zIiwibWV0aG9kcyIsIm9uU2VsZWN0SXRlbSIsImV2ZW50IiwiaXRlbSIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiaXNBcnJheSIsImlzT3Zlck1heCIsImxlbmd0aCIsImlzU2VsZWN0ZWQiLCJpbmRleE9mIiwiaWQiLCJkaXNhYmxlZCIsIiRlbWl0Iiwib25DbGlja05hdiIsImluZGV4IiwiZGV0YWlsIiwidXBkYXRlU3ViSXRlbXMiLCJfYSIsIl9iIiwiY2hpbGRyZW4iLCJzZXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0FELFlBQVlFLGFBQVosQ0FBMEI7QUFDdEJDLGFBQVMsQ0FDTCxpQkFESyxFQUVMLG9CQUZLLEVBR0wsbUJBSEssRUFJTCxzQkFKSyxFQUtMLHFCQUxLLEVBTUwsd0JBTkssQ0FEYTtBQVN0QkMsV0FBTztBQUNIQyxlQUFPO0FBQ0hDLGtCQUFNQyxLQURIO0FBRUhDLHNCQUFVO0FBRlAsU0FESjtBQUtIQyxrQkFBVSxJQUxQO0FBTUhDLHlCQUFpQjtBQUNiSixrQkFBTUssTUFETztBQUViWixtQkFBTyxDQUZNO0FBR2JTLHNCQUFVO0FBSEcsU0FOZDtBQVdISSxnQkFBUTtBQUNKTixrQkFBTSxDQUFDSyxNQUFELEVBQVNFLE1BQVQsQ0FERjtBQUVKZCxtQkFBTztBQUZILFNBWEw7QUFlSGUsYUFBSztBQUNEUixrQkFBTUssTUFETDtBQUVEWixtQkFBT2dCO0FBRk47QUFmRixLQVRlO0FBNkJ0QkMsVUFBTTtBQUNGQyxrQkFBVTtBQURSLEtBN0JnQjtBQWdDdEJDLGFBQVM7QUFDTDtBQUNBQyxzQkFBYyxzQkFBVUMsS0FBVixFQUFpQjtBQUMzQixnQkFBSUMsT0FBT0QsTUFBTUUsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJGLElBQXZDO0FBQ0EsZ0JBQUlHLFVBQVVqQixNQUFNaUIsT0FBTixDQUFjLEtBQUtSLElBQUwsQ0FBVVAsUUFBeEIsQ0FBZDtBQUNBO0FBQ0EsZ0JBQUlnQixZQUFZRCxXQUFXLEtBQUtSLElBQUwsQ0FBVVAsUUFBVixDQUFtQmlCLE1BQW5CLElBQTZCLEtBQUtWLElBQUwsQ0FBVUYsR0FBbEU7QUFDQTtBQUNBLGdCQUFJYSxhQUFhSCxVQUNYLEtBQUtSLElBQUwsQ0FBVVAsUUFBVixDQUFtQm1CLE9BQW5CLENBQTJCUCxLQUFLUSxFQUFoQyxJQUFzQyxDQUFDLENBRDVCLEdBRVgsS0FBS2IsSUFBTCxDQUFVUCxRQUFWLEtBQXVCWSxLQUFLUSxFQUZsQztBQUdBLGdCQUFJLENBQUNSLEtBQUtTLFFBQU4sS0FBbUIsQ0FBQ0wsU0FBRCxJQUFjRSxVQUFqQyxDQUFKLEVBQWtEO0FBQzlDLHFCQUFLSSxLQUFMLENBQVcsWUFBWCxFQUF5QlYsSUFBekI7QUFDSDtBQUNKLFNBZEk7QUFlTDtBQUNBVyxvQkFBWSxvQkFBVVosS0FBVixFQUFpQjtBQUN6QixnQkFBSWEsUUFBUWIsTUFBTWMsTUFBbEI7QUFDQSxnQkFBSWIsT0FBTyxLQUFLTCxJQUFMLENBQVVYLEtBQVYsQ0FBZ0I0QixLQUFoQixDQUFYO0FBQ0EsZ0JBQUksQ0FBQ1osS0FBS1MsUUFBVixFQUFvQjtBQUNoQixxQkFBS0MsS0FBTCxDQUFXLFdBQVgsRUFBd0IsRUFBRUUsT0FBT0EsS0FBVCxFQUF4QjtBQUNIO0FBQ0osU0F0Qkk7QUF1Qkw7QUFDQUUsd0JBQWdCLDBCQUFZO0FBQ3hCLGdCQUFJQyxLQUFLLEtBQUtwQixJQUFkO0FBQUEsZ0JBQW9CWCxRQUFRK0IsR0FBRy9CLEtBQS9CO0FBQUEsZ0JBQXNDSyxrQkFBa0IwQixHQUFHMUIsZUFBM0Q7QUFDQSxnQkFBSTJCLEtBQUssQ0FBQ2hDLE1BQU1LLGVBQU4sS0FBMEIsRUFBM0IsRUFBK0I0QixRQUF4QztBQUFBLGdCQUFrREEsV0FBV0QsT0FBTyxLQUFLLENBQVosR0FBZ0IsRUFBaEIsR0FBcUJBLEVBQWxGO0FBQ0EsbUJBQU8sS0FBS0UsR0FBTCxDQUFTLEVBQUV0QixVQUFVcUIsUUFBWixFQUFULENBQVA7QUFDSDtBQTVCSTtBQWhDYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBjbGFzc2VzOiBbXG4gICAgICAgICdtYWluLWl0ZW0tY2xhc3MnLFxuICAgICAgICAnY29udGVudC1pdGVtLWNsYXNzJyxcbiAgICAgICAgJ21haW4tYWN0aXZlLWNsYXNzJyxcbiAgICAgICAgJ2NvbnRlbnQtYWN0aXZlLWNsYXNzJyxcbiAgICAgICAgJ21haW4tZGlzYWJsZWQtY2xhc3MnLFxuICAgICAgICAnY29udGVudC1kaXNhYmxlZC1jbGFzcydcbiAgICBdLFxuICAgIHByb3BzOiB7XG4gICAgICAgIGl0ZW1zOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIG9ic2VydmVyOiAndXBkYXRlU3ViSXRlbXMnXG4gICAgICAgIH0sXG4gICAgICAgIGFjdGl2ZUlkOiBudWxsLFxuICAgICAgICBtYWluQWN0aXZlSW5kZXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAwLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICd1cGRhdGVTdWJJdGVtcydcbiAgICAgICAgfSxcbiAgICAgICAgaGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICAgICAgdmFsdWU6IDMwMFxuICAgICAgICB9LFxuICAgICAgICBtYXg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiBJbmZpbml0eVxuICAgICAgICB9XG4gICAgfSxcbiAgICBkYXRhOiB7XG4gICAgICAgIHN1Ykl0ZW1zOiBbXVxuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICAvLyDlvZPkuIDkuKrlrZDpobnooqvpgInmi6nml7ZcbiAgICAgICAgb25TZWxlY3RJdGVtOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0Lml0ZW07XG4gICAgICAgICAgICB2YXIgaXNBcnJheSA9IEFycmF5LmlzQXJyYXkodGhpcy5kYXRhLmFjdGl2ZUlkKTtcbiAgICAgICAgICAgIC8vIOWIpOaWreacieayoeaciei2heWHuuWPs+S+p+mAieaLqeeahOacgOWkp+aVsFxuICAgICAgICAgICAgdmFyIGlzT3Zlck1heCA9IGlzQXJyYXkgJiYgdGhpcy5kYXRhLmFjdGl2ZUlkLmxlbmd0aCA+PSB0aGlzLmRhdGEubWF4O1xuICAgICAgICAgICAgLy8g5Yik5pat6K+l6aG55pyJ5rKh5pyJ6KKr6YCJ5LitLCDlpoLmnpzmnInooqvpgInkuK3vvIzliJnlv73op4bmmK/lkKbotoXlh7rnmoTmnaHku7ZcbiAgICAgICAgICAgIHZhciBpc1NlbGVjdGVkID0gaXNBcnJheVxuICAgICAgICAgICAgICAgID8gdGhpcy5kYXRhLmFjdGl2ZUlkLmluZGV4T2YoaXRlbS5pZCkgPiAtMVxuICAgICAgICAgICAgICAgIDogdGhpcy5kYXRhLmFjdGl2ZUlkID09PSBpdGVtLmlkO1xuICAgICAgICAgICAgaWYgKCFpdGVtLmRpc2FibGVkICYmICghaXNPdmVyTWF4IHx8IGlzU2VsZWN0ZWQpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2staXRlbScsIGl0ZW0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyDlvZPkuIDkuKrlr7zoiKrooqvngrnlh7vml7ZcbiAgICAgICAgb25DbGlja05hdjogZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgaW5kZXggPSBldmVudC5kZXRhaWw7XG4gICAgICAgICAgICB2YXIgaXRlbSA9IHRoaXMuZGF0YS5pdGVtc1tpbmRleF07XG4gICAgICAgICAgICBpZiAoIWl0ZW0uZGlzYWJsZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdjbGljay1uYXYnLCB7IGluZGV4OiBpbmRleCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgLy8g5pu05paw5a2Q6aG55YiX6KGoXG4gICAgICAgIHVwZGF0ZVN1Ykl0ZW1zOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgX2EgPSB0aGlzLmRhdGEsIGl0ZW1zID0gX2EuaXRlbXMsIG1haW5BY3RpdmVJbmRleCA9IF9hLm1haW5BY3RpdmVJbmRleDtcbiAgICAgICAgICAgIHZhciBfYiA9IChpdGVtc1ttYWluQWN0aXZlSW5kZXhdIHx8IHt9KS5jaGlsZHJlbiwgY2hpbGRyZW4gPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYjtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldCh7IHN1Ykl0ZW1zOiBjaGlsZHJlbiB9KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19