"use strict";

var __assign = undefined && undefined.__assign || function () {
    __assign = Object.assign || function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) {
                if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var component_1 = require('./../common/component.js');
var shared_1 = require('./shared.js');
component_1.VantComponent({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: __assign(__assign({}, shared_1.pickerProps), { valueKey: {
            type: String,
            value: 'text'
        }, toolbarPosition: {
            type: String,
            value: 'top'
        }, defaultIndex: {
            type: Number,
            value: 0
        }, columns: {
            type: Array,
            value: [],
            observer: function observer(columns) {
                if (columns === void 0) {
                    columns = [];
                }
                this.simple = columns.length && !columns[0].values;
                this.children = this.selectAllComponents('.van-picker__column');
                if (Array.isArray(this.children) && this.children.length) {
                    this.setColumns().catch(function () {});
                }
            }
        } }),
    beforeCreate: function beforeCreate() {
        this.children = [];
    },
    methods: {
        noop: function noop() {},
        setColumns: function setColumns() {
            var _this = this;
            var data = this.data;
            var columns = this.simple ? [{ values: data.columns }] : data.columns;
            var stack = columns.map(function (column, index) {
                return _this.setColumnValues(index, column.values);
            });
            return Promise.all(stack);
        },
        emit: function emit(event) {
            var type = event.currentTarget.dataset.type;
            if (this.simple) {
                this.$emit(type, {
                    value: this.getColumnValue(0),
                    index: this.getColumnIndex(0)
                });
            } else {
                this.$emit(type, {
                    value: this.getValues(),
                    index: this.getIndexes()
                });
            }
        },
        onChange: function onChange(event) {
            if (this.simple) {
                this.$emit('change', {
                    picker: this,
                    value: this.getColumnValue(0),
                    index: this.getColumnIndex(0)
                });
            } else {
                this.$emit('change', {
                    picker: this,
                    value: this.getValues(),
                    index: event.currentTarget.dataset.index
                });
            }
        },
        // get column instance by index
        getColumn: function getColumn(index) {
            return this.children[index];
        },
        // get column value by index
        getColumnValue: function getColumnValue(index) {
            var column = this.getColumn(index);
            return column && column.getValue();
        },
        // set column value by index
        setColumnValue: function setColumnValue(index, value) {
            var column = this.getColumn(index);
            if (column == null) {
                return Promise.reject(new Error('setColumnValue: 对应列不存在'));
            }
            return column.setValue(value);
        },
        // get column option index by column index
        getColumnIndex: function getColumnIndex(columnIndex) {
            return (this.getColumn(columnIndex) || {}).data.currentIndex;
        },
        // set column option index by column index
        setColumnIndex: function setColumnIndex(columnIndex, optionIndex) {
            var column = this.getColumn(columnIndex);
            if (column == null) {
                return Promise.reject(new Error('setColumnIndex: 对应列不存在'));
            }
            return column.setIndex(optionIndex);
        },
        // get options of column by index
        getColumnValues: function getColumnValues(index) {
            return (this.children[index] || {}).data.options;
        },
        // set options of column by index
        setColumnValues: function setColumnValues(index, options, needReset) {
            if (needReset === void 0) {
                needReset = true;
            }
            var column = this.children[index];
            if (column == null) {
                return Promise.reject(new Error('setColumnValues: 对应列不存在'));
            }
            var isSame = JSON.stringify(column.data.options) === JSON.stringify(options);
            if (isSame) {
                return Promise.resolve();
            }
            return column.set({ options: options }).then(function () {
                if (needReset) {
                    column.setIndex(0);
                }
            });
        },
        // get values of all columns
        getValues: function getValues() {
            return this.children.map(function (child) {
                return child.getValue();
            });
        },
        // set values of all columns
        setValues: function setValues(values) {
            var _this = this;
            var stack = values.map(function (value, index) {
                return _this.setColumnValue(index, value);
            });
            return Promise.all(stack);
        },
        // get indexes of all columns
        getIndexes: function getIndexes() {
            return this.children.map(function (child) {
                return child.data.currentIndex;
            });
        },
        // set indexes of all columns
        setIndexes: function setIndexes(indexes) {
            var _this = this;
            var stack = indexes.map(function (optionIndex, columnIndex) {
                return _this.setColumnIndex(columnIndex, optionIndex);
            });
            return Promise.all(stack);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwic2hhcmVkXzEiLCJWYW50Q29tcG9uZW50IiwiY2xhc3NlcyIsInByb3BzIiwicGlja2VyUHJvcHMiLCJ2YWx1ZUtleSIsInR5cGUiLCJTdHJpbmciLCJ0b29sYmFyUG9zaXRpb24iLCJkZWZhdWx0SW5kZXgiLCJOdW1iZXIiLCJjb2x1bW5zIiwiQXJyYXkiLCJvYnNlcnZlciIsInNpbXBsZSIsInZhbHVlcyIsImNoaWxkcmVuIiwic2VsZWN0QWxsQ29tcG9uZW50cyIsImlzQXJyYXkiLCJzZXRDb2x1bW5zIiwiY2F0Y2giLCJiZWZvcmVDcmVhdGUiLCJtZXRob2RzIiwibm9vcCIsIl90aGlzIiwiZGF0YSIsInN0YWNrIiwibWFwIiwiY29sdW1uIiwiaW5kZXgiLCJzZXRDb2x1bW5WYWx1ZXMiLCJQcm9taXNlIiwiYWxsIiwiZW1pdCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCIkZW1pdCIsImdldENvbHVtblZhbHVlIiwiZ2V0Q29sdW1uSW5kZXgiLCJnZXRWYWx1ZXMiLCJnZXRJbmRleGVzIiwib25DaGFuZ2UiLCJwaWNrZXIiLCJnZXRDb2x1bW4iLCJnZXRWYWx1ZSIsInNldENvbHVtblZhbHVlIiwicmVqZWN0IiwiRXJyb3IiLCJzZXRWYWx1ZSIsImNvbHVtbkluZGV4IiwiY3VycmVudEluZGV4Iiwic2V0Q29sdW1uSW5kZXgiLCJvcHRpb25JbmRleCIsInNldEluZGV4IiwiZ2V0Q29sdW1uVmFsdWVzIiwib3B0aW9ucyIsIm5lZWRSZXNldCIsImlzU2FtZSIsIkpTT04iLCJzdHJpbmdpZnkiLCJyZXNvbHZlIiwic2V0IiwidGhlbiIsImNoaWxkIiwic2V0VmFsdWVzIiwic2V0SW5kZXhlcyIsImluZGV4ZXMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBLElBQUlBLFdBQVksYUFBUSxVQUFLQSxRQUFkLElBQTJCLFlBQVk7QUFDbERBLGVBQVdDLE9BQU9DLE1BQVAsSUFBaUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3BDLGFBQUssSUFBSUMsQ0FBSixFQUFPQyxJQUFJLENBQVgsRUFBY0MsSUFBSUMsVUFBVUMsTUFBakMsRUFBeUNILElBQUlDLENBQTdDLEVBQWdERCxHQUFoRCxFQUFxRDtBQUNqREQsZ0JBQUlHLFVBQVVGLENBQVYsQ0FBSjtBQUNBLGlCQUFLLElBQUlJLENBQVQsSUFBY0wsQ0FBZDtBQUFpQixvQkFBSUgsT0FBT1MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDUixDQUFyQyxFQUF3Q0ssQ0FBeEMsQ0FBSixFQUNiTixFQUFFTSxDQUFGLElBQU9MLEVBQUVLLENBQUYsQ0FBUDtBQURKO0FBRUg7QUFDRCxlQUFPTixDQUFQO0FBQ0gsS0FQRDtBQVFBLFdBQU9ILFNBQVNhLEtBQVQsQ0FBZSxJQUFmLEVBQXFCTixTQUFyQixDQUFQO0FBQ0gsQ0FWRDtBQVdBTixPQUFPYSxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsV0FBV0QsUUFBUSxVQUFSLENBQWY7QUFDQUQsWUFBWUcsYUFBWixDQUEwQjtBQUN0QkMsYUFBUyxDQUFDLGNBQUQsRUFBaUIsZUFBakIsRUFBa0MsY0FBbEMsQ0FEYTtBQUV0QkMsV0FBT3RCLFNBQVNBLFNBQVMsRUFBVCxFQUFhbUIsU0FBU0ksV0FBdEIsQ0FBVCxFQUE2QyxFQUFFQyxVQUFVO0FBQ3hEQyxrQkFBTUMsTUFEa0Q7QUFFeERWLG1CQUFPO0FBRmlELFNBQVosRUFHN0NXLGlCQUFpQjtBQUNoQkYsa0JBQU1DLE1BRFU7QUFFaEJWLG1CQUFPO0FBRlMsU0FINEIsRUFNN0NZLGNBQWM7QUFDYkgsa0JBQU1JLE1BRE87QUFFYmIsbUJBQU87QUFGTSxTQU4rQixFQVM3Q2MsU0FBUztBQUNSTCxrQkFBTU0sS0FERTtBQUVSZixtQkFBTyxFQUZDO0FBR1JnQixzQkFBVSxrQkFBVUYsT0FBVixFQUFtQjtBQUN6QixvQkFBSUEsWUFBWSxLQUFLLENBQXJCLEVBQXdCO0FBQUVBLDhCQUFVLEVBQVY7QUFBZTtBQUN6QyxxQkFBS0csTUFBTCxHQUFjSCxRQUFRdEIsTUFBUixJQUFrQixDQUFDc0IsUUFBUSxDQUFSLEVBQVdJLE1BQTVDO0FBQ0EscUJBQUtDLFFBQUwsR0FBZ0IsS0FBS0MsbUJBQUwsQ0FBeUIscUJBQXpCLENBQWhCO0FBQ0Esb0JBQUlMLE1BQU1NLE9BQU4sQ0FBYyxLQUFLRixRQUFuQixLQUFnQyxLQUFLQSxRQUFMLENBQWMzQixNQUFsRCxFQUEwRDtBQUN0RCx5QkFBSzhCLFVBQUwsR0FBa0JDLEtBQWxCLENBQXdCLFlBQVksQ0FBRyxDQUF2QztBQUNIO0FBQ0o7QUFWTyxTQVRvQyxFQUE3QyxDQUZlO0FBdUJ0QkMsa0JBQWMsd0JBQVk7QUFDdEIsYUFBS0wsUUFBTCxHQUFnQixFQUFoQjtBQUNILEtBekJxQjtBQTBCdEJNLGFBQVM7QUFDTEMsY0FBTSxnQkFBWSxDQUFHLENBRGhCO0FBRUxKLG9CQUFZLHNCQUFZO0FBQ3BCLGdCQUFJSyxRQUFRLElBQVo7QUFDQSxnQkFBSUMsT0FBTyxLQUFLQSxJQUFoQjtBQUNBLGdCQUFJZCxVQUFVLEtBQUtHLE1BQUwsR0FBYyxDQUFDLEVBQUVDLFFBQVFVLEtBQUtkLE9BQWYsRUFBRCxDQUFkLEdBQTJDYyxLQUFLZCxPQUE5RDtBQUNBLGdCQUFJZSxRQUFRZixRQUFRZ0IsR0FBUixDQUFZLFVBQVVDLE1BQVYsRUFBa0JDLEtBQWxCLEVBQXlCO0FBQzdDLHVCQUFPTCxNQUFNTSxlQUFOLENBQXNCRCxLQUF0QixFQUE2QkQsT0FBT2IsTUFBcEMsQ0FBUDtBQUNILGFBRlcsQ0FBWjtBQUdBLG1CQUFPZ0IsUUFBUUMsR0FBUixDQUFZTixLQUFaLENBQVA7QUFDSCxTQVZJO0FBV0xPLGNBQU0sY0FBVUMsS0FBVixFQUFpQjtBQUNuQixnQkFBSTVCLE9BQU80QixNQUFNQyxhQUFOLENBQW9CQyxPQUFwQixDQUE0QjlCLElBQXZDO0FBQ0EsZ0JBQUksS0FBS1EsTUFBVCxFQUFpQjtBQUNiLHFCQUFLdUIsS0FBTCxDQUFXL0IsSUFBWCxFQUFpQjtBQUNiVCwyQkFBTyxLQUFLeUMsY0FBTCxDQUFvQixDQUFwQixDQURNO0FBRWJULDJCQUFPLEtBQUtVLGNBQUwsQ0FBb0IsQ0FBcEI7QUFGTSxpQkFBakI7QUFJSCxhQUxELE1BTUs7QUFDRCxxQkFBS0YsS0FBTCxDQUFXL0IsSUFBWCxFQUFpQjtBQUNiVCwyQkFBTyxLQUFLMkMsU0FBTCxFQURNO0FBRWJYLDJCQUFPLEtBQUtZLFVBQUw7QUFGTSxpQkFBakI7QUFJSDtBQUNKLFNBekJJO0FBMEJMQyxrQkFBVSxrQkFBVVIsS0FBVixFQUFpQjtBQUN2QixnQkFBSSxLQUFLcEIsTUFBVCxFQUFpQjtBQUNiLHFCQUFLdUIsS0FBTCxDQUFXLFFBQVgsRUFBcUI7QUFDakJNLDRCQUFRLElBRFM7QUFFakI5QywyQkFBTyxLQUFLeUMsY0FBTCxDQUFvQixDQUFwQixDQUZVO0FBR2pCVCwyQkFBTyxLQUFLVSxjQUFMLENBQW9CLENBQXBCO0FBSFUsaUJBQXJCO0FBS0gsYUFORCxNQU9LO0FBQ0QscUJBQUtGLEtBQUwsQ0FBVyxRQUFYLEVBQXFCO0FBQ2pCTSw0QkFBUSxJQURTO0FBRWpCOUMsMkJBQU8sS0FBSzJDLFNBQUwsRUFGVTtBQUdqQlgsMkJBQU9LLE1BQU1DLGFBQU4sQ0FBb0JDLE9BQXBCLENBQTRCUDtBQUhsQixpQkFBckI7QUFLSDtBQUNKLFNBekNJO0FBMENMO0FBQ0FlLG1CQUFXLG1CQUFVZixLQUFWLEVBQWlCO0FBQ3hCLG1CQUFPLEtBQUtiLFFBQUwsQ0FBY2EsS0FBZCxDQUFQO0FBQ0gsU0E3Q0k7QUE4Q0w7QUFDQVMsd0JBQWdCLHdCQUFVVCxLQUFWLEVBQWlCO0FBQzdCLGdCQUFJRCxTQUFTLEtBQUtnQixTQUFMLENBQWVmLEtBQWYsQ0FBYjtBQUNBLG1CQUFPRCxVQUFVQSxPQUFPaUIsUUFBUCxFQUFqQjtBQUNILFNBbERJO0FBbURMO0FBQ0FDLHdCQUFnQix3QkFBVWpCLEtBQVYsRUFBaUJoQyxLQUFqQixFQUF3QjtBQUNwQyxnQkFBSStCLFNBQVMsS0FBS2dCLFNBQUwsQ0FBZWYsS0FBZixDQUFiO0FBQ0EsZ0JBQUlELFVBQVUsSUFBZCxFQUFvQjtBQUNoQix1QkFBT0csUUFBUWdCLE1BQVIsQ0FBZSxJQUFJQyxLQUFKLENBQVUsd0JBQVYsQ0FBZixDQUFQO0FBQ0g7QUFDRCxtQkFBT3BCLE9BQU9xQixRQUFQLENBQWdCcEQsS0FBaEIsQ0FBUDtBQUNILFNBMURJO0FBMkRMO0FBQ0EwQyx3QkFBZ0Isd0JBQVVXLFdBQVYsRUFBdUI7QUFDbkMsbUJBQU8sQ0FBQyxLQUFLTixTQUFMLENBQWVNLFdBQWYsS0FBK0IsRUFBaEMsRUFBb0N6QixJQUFwQyxDQUF5QzBCLFlBQWhEO0FBQ0gsU0E5REk7QUErREw7QUFDQUMsd0JBQWdCLHdCQUFVRixXQUFWLEVBQXVCRyxXQUF2QixFQUFvQztBQUNoRCxnQkFBSXpCLFNBQVMsS0FBS2dCLFNBQUwsQ0FBZU0sV0FBZixDQUFiO0FBQ0EsZ0JBQUl0QixVQUFVLElBQWQsRUFBb0I7QUFDaEIsdUJBQU9HLFFBQVFnQixNQUFSLENBQWUsSUFBSUMsS0FBSixDQUFVLHdCQUFWLENBQWYsQ0FBUDtBQUNIO0FBQ0QsbUJBQU9wQixPQUFPMEIsUUFBUCxDQUFnQkQsV0FBaEIsQ0FBUDtBQUNILFNBdEVJO0FBdUVMO0FBQ0FFLHlCQUFpQix5QkFBVTFCLEtBQVYsRUFBaUI7QUFDOUIsbUJBQU8sQ0FBQyxLQUFLYixRQUFMLENBQWNhLEtBQWQsS0FBd0IsRUFBekIsRUFBNkJKLElBQTdCLENBQWtDK0IsT0FBekM7QUFDSCxTQTFFSTtBQTJFTDtBQUNBMUIseUJBQWlCLHlCQUFVRCxLQUFWLEVBQWlCMkIsT0FBakIsRUFBMEJDLFNBQTFCLEVBQXFDO0FBQ2xELGdCQUFJQSxjQUFjLEtBQUssQ0FBdkIsRUFBMEI7QUFBRUEsNEJBQVksSUFBWjtBQUFtQjtBQUMvQyxnQkFBSTdCLFNBQVMsS0FBS1osUUFBTCxDQUFjYSxLQUFkLENBQWI7QUFDQSxnQkFBSUQsVUFBVSxJQUFkLEVBQW9CO0FBQ2hCLHVCQUFPRyxRQUFRZ0IsTUFBUixDQUFlLElBQUlDLEtBQUosQ0FBVSx5QkFBVixDQUFmLENBQVA7QUFDSDtBQUNELGdCQUFJVSxTQUFTQyxLQUFLQyxTQUFMLENBQWVoQyxPQUFPSCxJQUFQLENBQVkrQixPQUEzQixNQUF3Q0csS0FBS0MsU0FBTCxDQUFlSixPQUFmLENBQXJEO0FBQ0EsZ0JBQUlFLE1BQUosRUFBWTtBQUNSLHVCQUFPM0IsUUFBUThCLE9BQVIsRUFBUDtBQUNIO0FBQ0QsbUJBQU9qQyxPQUFPa0MsR0FBUCxDQUFXLEVBQUVOLFNBQVNBLE9BQVgsRUFBWCxFQUFpQ08sSUFBakMsQ0FBc0MsWUFBWTtBQUNyRCxvQkFBSU4sU0FBSixFQUFlO0FBQ1g3QiwyQkFBTzBCLFFBQVAsQ0FBZ0IsQ0FBaEI7QUFDSDtBQUNKLGFBSk0sQ0FBUDtBQUtILFNBM0ZJO0FBNEZMO0FBQ0FkLG1CQUFXLHFCQUFZO0FBQ25CLG1CQUFPLEtBQUt4QixRQUFMLENBQWNXLEdBQWQsQ0FBa0IsVUFBVXFDLEtBQVYsRUFBaUI7QUFBRSx1QkFBT0EsTUFBTW5CLFFBQU4sRUFBUDtBQUEwQixhQUEvRCxDQUFQO0FBQ0gsU0EvRkk7QUFnR0w7QUFDQW9CLG1CQUFXLG1CQUFVbEQsTUFBVixFQUFrQjtBQUN6QixnQkFBSVMsUUFBUSxJQUFaO0FBQ0EsZ0JBQUlFLFFBQVFYLE9BQU9ZLEdBQVAsQ0FBVyxVQUFVOUIsS0FBVixFQUFpQmdDLEtBQWpCLEVBQXdCO0FBQzNDLHVCQUFPTCxNQUFNc0IsY0FBTixDQUFxQmpCLEtBQXJCLEVBQTRCaEMsS0FBNUIsQ0FBUDtBQUNILGFBRlcsQ0FBWjtBQUdBLG1CQUFPa0MsUUFBUUMsR0FBUixDQUFZTixLQUFaLENBQVA7QUFDSCxTQXZHSTtBQXdHTDtBQUNBZSxvQkFBWSxzQkFBWTtBQUNwQixtQkFBTyxLQUFLekIsUUFBTCxDQUFjVyxHQUFkLENBQWtCLFVBQVVxQyxLQUFWLEVBQWlCO0FBQUUsdUJBQU9BLE1BQU12QyxJQUFOLENBQVcwQixZQUFsQjtBQUFpQyxhQUF0RSxDQUFQO0FBQ0gsU0EzR0k7QUE0R0w7QUFDQWUsb0JBQVksb0JBQVVDLE9BQVYsRUFBbUI7QUFDM0IsZ0JBQUkzQyxRQUFRLElBQVo7QUFDQSxnQkFBSUUsUUFBUXlDLFFBQVF4QyxHQUFSLENBQVksVUFBVTBCLFdBQVYsRUFBdUJILFdBQXZCLEVBQW9DO0FBQ3hELHVCQUFPMUIsTUFBTTRCLGNBQU4sQ0FBcUJGLFdBQXJCLEVBQWtDRyxXQUFsQyxDQUFQO0FBQ0gsYUFGVyxDQUFaO0FBR0EsbUJBQU90QixRQUFRQyxHQUFSLENBQVlOLEtBQVosQ0FBUDtBQUNIO0FBbkhJO0FBMUJhLENBQTFCIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19hc3NpZ24gPSAodGhpcyAmJiB0aGlzLl9fYXNzaWduKSB8fCBmdW5jdGlvbiAoKSB7XG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uKHQpIHtcbiAgICAgICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKVxuICAgICAgICAgICAgICAgIHRbcF0gPSBzW3BdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0O1xuICAgIH07XG4gICAgcmV0dXJuIF9fYXNzaWduLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvbXBvbmVudF8xID0gcmVxdWlyZShcIi4uL2NvbW1vbi9jb21wb25lbnRcIik7XG52YXIgc2hhcmVkXzEgPSByZXF1aXJlKFwiLi9zaGFyZWRcIik7XG5jb21wb25lbnRfMS5WYW50Q29tcG9uZW50KHtcbiAgICBjbGFzc2VzOiBbJ2FjdGl2ZS1jbGFzcycsICd0b29sYmFyLWNsYXNzJywgJ2NvbHVtbi1jbGFzcyddLFxuICAgIHByb3BzOiBfX2Fzc2lnbihfX2Fzc2lnbih7fSwgc2hhcmVkXzEucGlja2VyUHJvcHMpLCB7IHZhbHVlS2V5OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3RleHQnXG4gICAgICAgIH0sIHRvb2xiYXJQb3NpdGlvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICd0b3AnXG4gICAgICAgIH0sIGRlZmF1bHRJbmRleDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IDBcbiAgICAgICAgfSwgY29sdW1uczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICB2YWx1ZTogW10sXG4gICAgICAgICAgICBvYnNlcnZlcjogZnVuY3Rpb24gKGNvbHVtbnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY29sdW1ucyA9PT0gdm9pZCAwKSB7IGNvbHVtbnMgPSBbXTsgfVxuICAgICAgICAgICAgICAgIHRoaXMuc2ltcGxlID0gY29sdW1ucy5sZW5ndGggJiYgIWNvbHVtbnNbMF0udmFsdWVzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLnNlbGVjdEFsbENvbXBvbmVudHMoJy52YW4tcGlja2VyX19jb2x1bW4nKTtcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmNoaWxkcmVuKSAmJiB0aGlzLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvbHVtbnMoKS5jYXRjaChmdW5jdGlvbiAoKSB7IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSB9KSxcbiAgICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBub29wOiBmdW5jdGlvbiAoKSB7IH0sXG4gICAgICAgIHNldENvbHVtbnM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgZGF0YSA9IHRoaXMuZGF0YTtcbiAgICAgICAgICAgIHZhciBjb2x1bW5zID0gdGhpcy5zaW1wbGUgPyBbeyB2YWx1ZXM6IGRhdGEuY29sdW1ucyB9XSA6IGRhdGEuY29sdW1ucztcbiAgICAgICAgICAgIHZhciBzdGFjayA9IGNvbHVtbnMubWFwKGZ1bmN0aW9uIChjb2x1bW4sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLnNldENvbHVtblZhbHVlcyhpbmRleCwgY29sdW1uLnZhbHVlcyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChzdGFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQ6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIHR5cGUgPSBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQudHlwZTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbXBsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQodHlwZSwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRDb2x1bW5WYWx1ZSgwKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0Q29sdW1uSW5kZXgoMClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQodHlwZSwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRWYWx1ZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0SW5kZXhlcygpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbXBsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRDb2x1bW5WYWx1ZSgwKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHRoaXMuZ2V0Q29sdW1uSW5kZXgoMClcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHtcbiAgICAgICAgICAgICAgICAgICAgcGlja2VyOiB0aGlzLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5nZXRWYWx1ZXMoKSxcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAvLyBnZXQgY29sdW1uIGluc3RhbmNlIGJ5IGluZGV4XG4gICAgICAgIGdldENvbHVtbjogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbltpbmRleF07XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldCBjb2x1bW4gdmFsdWUgYnkgaW5kZXhcbiAgICAgICAgZ2V0Q29sdW1uVmFsdWU6IGZ1bmN0aW9uIChpbmRleCkge1xuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKGluZGV4KTtcbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4gJiYgY29sdW1uLmdldFZhbHVlKCk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNldCBjb2x1bW4gdmFsdWUgYnkgaW5kZXhcbiAgICAgICAgc2V0Q29sdW1uVmFsdWU6IGZ1bmN0aW9uIChpbmRleCwgdmFsdWUpIHtcbiAgICAgICAgICAgIHZhciBjb2x1bW4gPSB0aGlzLmdldENvbHVtbihpbmRleCk7XG4gICAgICAgICAgICBpZiAoY29sdW1uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QobmV3IEVycm9yKCdzZXRDb2x1bW5WYWx1ZTog5a+55bqU5YiX5LiN5a2Y5ZyoJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5zZXRWYWx1ZSh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIGdldCBjb2x1bW4gb3B0aW9uIGluZGV4IGJ5IGNvbHVtbiBpbmRleFxuICAgICAgICBnZXRDb2x1bW5JbmRleDogZnVuY3Rpb24gKGNvbHVtbkluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuZ2V0Q29sdW1uKGNvbHVtbkluZGV4KSB8fCB7fSkuZGF0YS5jdXJyZW50SW5kZXg7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNldCBjb2x1bW4gb3B0aW9uIGluZGV4IGJ5IGNvbHVtbiBpbmRleFxuICAgICAgICBzZXRDb2x1bW5JbmRleDogZnVuY3Rpb24gKGNvbHVtbkluZGV4LCBvcHRpb25JbmRleCkge1xuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKGNvbHVtbkluZGV4KTtcbiAgICAgICAgICAgIGlmIChjb2x1bW4gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ3NldENvbHVtbkluZGV4OiDlr7nlupTliJfkuI3lrZjlnKgnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gY29sdW1uLnNldEluZGV4KG9wdGlvbkluZGV4KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZ2V0IG9wdGlvbnMgb2YgY29sdW1uIGJ5IGluZGV4XG4gICAgICAgIGdldENvbHVtblZhbHVlczogZnVuY3Rpb24gKGluZGV4KSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuY2hpbGRyZW5baW5kZXhdIHx8IHt9KS5kYXRhLm9wdGlvbnM7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNldCBvcHRpb25zIG9mIGNvbHVtbiBieSBpbmRleFxuICAgICAgICBzZXRDb2x1bW5WYWx1ZXM6IGZ1bmN0aW9uIChpbmRleCwgb3B0aW9ucywgbmVlZFJlc2V0KSB7XG4gICAgICAgICAgICBpZiAobmVlZFJlc2V0ID09PSB2b2lkIDApIHsgbmVlZFJlc2V0ID0gdHJ1ZTsgfVxuICAgICAgICAgICAgdmFyIGNvbHVtbiA9IHRoaXMuY2hpbGRyZW5baW5kZXhdO1xuICAgICAgICAgICAgaWYgKGNvbHVtbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcignc2V0Q29sdW1uVmFsdWVzOiDlr7nlupTliJfkuI3lrZjlnKgnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgaXNTYW1lID0gSlNPTi5zdHJpbmdpZnkoY29sdW1uLmRhdGEub3B0aW9ucykgPT09IEpTT04uc3RyaW5naWZ5KG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKGlzU2FtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBjb2x1bW4uc2V0KHsgb3B0aW9uczogb3B0aW9ucyB9KS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAobmVlZFJlc2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5zZXRJbmRleCgwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gZ2V0IHZhbHVlcyBvZiBhbGwgY29sdW1uc1xuICAgICAgICBnZXRWYWx1ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkcmVuLm1hcChmdW5jdGlvbiAoY2hpbGQpIHsgcmV0dXJuIGNoaWxkLmdldFZhbHVlKCk7IH0pO1xuICAgICAgICB9LFxuICAgICAgICAvLyBzZXQgdmFsdWVzIG9mIGFsbCBjb2x1bW5zXG4gICAgICAgIHNldFZhbHVlczogZnVuY3Rpb24gKHZhbHVlcykge1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHZhciBzdGFjayA9IHZhbHVlcy5tYXAoZnVuY3Rpb24gKHZhbHVlLCBpbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRDb2x1bW5WYWx1ZShpbmRleCwgdmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc3RhY2spO1xuICAgICAgICB9LFxuICAgICAgICAvLyBnZXQgaW5kZXhlcyBvZiBhbGwgY29sdW1uc1xuICAgICAgICBnZXRJbmRleGVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZHJlbi5tYXAoZnVuY3Rpb24gKGNoaWxkKSB7IHJldHVybiBjaGlsZC5kYXRhLmN1cnJlbnRJbmRleDsgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIC8vIHNldCBpbmRleGVzIG9mIGFsbCBjb2x1bW5zXG4gICAgICAgIHNldEluZGV4ZXM6IGZ1bmN0aW9uIChpbmRleGVzKSB7XG4gICAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICAgICAgdmFyIHN0YWNrID0gaW5kZXhlcy5tYXAoZnVuY3Rpb24gKG9wdGlvbkluZGV4LCBjb2x1bW5JbmRleCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5zZXRDb2x1bW5JbmRleChjb2x1bW5JbmRleCwgb3B0aW9uSW5kZXgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc3RhY2spO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=