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
var shared_1 = require('./../picker/shared.js');
var COLUMNSPLACEHOLDERCODE = '000000';
component_1.VantComponent({
    classes: ['active-class', 'toolbar-class', 'column-class'],
    props: __assign(__assign({}, shared_1.pickerProps), { value: {
            type: String,
            observer: function observer(value) {
                this.code = value;
                this.setValues();
            }
        }, areaList: {
            type: Object,
            value: {},
            observer: 'setValues'
        }, columnsNum: {
            type: null,
            value: 3,
            observer: function observer(value) {
                this.setData({
                    displayColumns: this.data.columns.slice(0, +value)
                });
            }
        }, columnsPlaceholder: {
            type: Array,
            observer: function observer(val) {
                this.setData({
                    typeToColumnsPlaceholder: {
                        province: val[0] || '',
                        city: val[1] || '',
                        county: val[2] || ''
                    }
                });
            }
        } }),
    data: {
        columns: [{ values: [] }, { values: [] }, { values: [] }],
        displayColumns: [{ values: [] }, { values: [] }, { values: [] }],
        typeToColumnsPlaceholder: {}
    },
    mounted: function mounted() {
        var _this = this;
        setTimeout(function () {
            _this.setValues();
        }, 0);
    },
    methods: {
        getPicker: function getPicker() {
            if (this.picker == null) {
                this.picker = this.selectComponent('.van-area__picker');
            }
            return this.picker;
        },
        onCancel: function onCancel(event) {
            this.emit('cancel', event.detail);
        },
        onConfirm: function onConfirm(event) {
            var index = event.detail.index;
            var value = event.detail.value;
            value = this.parseOutputValues(value);
            this.emit('confirm', { value: value, index: index });
        },
        emit: function emit(type, detail) {
            detail.values = detail.value;
            delete detail.value;
            this.$emit(type, detail);
        },
        // parse output columns data
        parseOutputValues: function parseOutputValues(values) {
            var columnsPlaceholder = this.data.columnsPlaceholder;
            return values.map(function (value, index) {
                // save undefined value
                if (!value) return value;
                value = JSON.parse(JSON.stringify(value));
                if (!value.code || value.name === columnsPlaceholder[index]) {
                    value.code = '';
                    value.name = '';
                }
                return value;
            });
        },
        onChange: function onChange(event) {
            var _this = this;
            var _a = event.detail,
                index = _a.index,
                picker = _a.picker,
                value = _a.value;
            this.code = value[index].code;
            this.setValues().then(function () {
                _this.$emit('change', {
                    picker: picker,
                    values: _this.parseOutputValues(picker.getValues()),
                    index: index
                });
            });
        },
        getConfig: function getConfig(type) {
            var areaList = this.data.areaList;
            return areaList && areaList[type + "_list"] || {};
        },
        getList: function getList(type, code) {
            var typeToColumnsPlaceholder = this.data.typeToColumnsPlaceholder;
            var result = [];
            if (type !== 'province' && !code) {
                return result;
            }
            var list = this.getConfig(type);
            result = Object.keys(list).map(function (code) {
                return {
                    code: code,
                    name: list[code]
                };
            });
            if (code) {
                // oversea code
                if (code[0] === '9' && type === 'city') {
                    code = '9';
                }
                result = result.filter(function (item) {
                    return item.code.indexOf(code) === 0;
                });
            }
            if (typeToColumnsPlaceholder[type] && result.length) {
                // set columns placeholder
                var codeFill = type === 'province' ? '' : type === 'city' ? COLUMNSPLACEHOLDERCODE.slice(2, 4) : COLUMNSPLACEHOLDERCODE.slice(4, 6);
                result.unshift({
                    code: "" + code + codeFill,
                    name: typeToColumnsPlaceholder[type]
                });
            }
            return result;
        },
        getIndex: function getIndex(type, code) {
            var compareNum = type === 'province' ? 2 : type === 'city' ? 4 : 6;
            var list = this.getList(type, code.slice(0, compareNum - 2));
            // oversea code
            if (code[0] === '9' && type === 'province') {
                compareNum = 1;
            }
            code = code.slice(0, compareNum);
            for (var i = 0; i < list.length; i++) {
                if (list[i].code.slice(0, compareNum) === code) {
                    return i;
                }
            }
            return 0;
        },
        setValues: function setValues() {
            var _this = this;
            var county = this.getConfig('county');
            var code = this.code;
            if (!code) {
                if (this.data.columnsPlaceholder.length) {
                    code = COLUMNSPLACEHOLDERCODE;
                } else if (Object.keys(county)[0]) {
                    code = Object.keys(county)[0];
                } else {
                    code = '';
                }
            }
            var province = this.getList('province');
            var city = this.getList('city', code.slice(0, 2));
            var picker = this.getPicker();
            if (!picker) {
                return;
            }
            var stack = [];
            stack.push(picker.setColumnValues(0, province, false));
            stack.push(picker.setColumnValues(1, city, false));
            if (city.length && code.slice(2, 4) === '00') {
                code = city[0].code;
            }
            stack.push(picker.setColumnValues(2, this.getList('county', code.slice(0, 4)), false));
            return Promise.all(stack).catch(function () {}).then(function () {
                return picker.setIndexes([_this.getIndex('province', code), _this.getIndex('city', code), _this.getIndex('county', code)]);
            }).catch(function () {});
        },
        getValues: function getValues() {
            var picker = this.getPicker();
            return picker ? picker.getValues().filter(function (value) {
                return !!value;
            }) : [];
        },
        getDetail: function getDetail() {
            var values = this.getValues();
            var area = {
                code: '',
                country: '',
                province: '',
                city: '',
                county: ''
            };
            if (!values.length) {
                return area;
            }
            var names = values.map(function (item) {
                return item.name;
            });
            area.code = values[values.length - 1].code;
            if (area.code[0] === '9') {
                area.country = names[1] || '';
                area.province = names[2] || '';
            } else {
                area.province = names[0] || '';
                area.city = names[1] || '';
                area.county = names[2] || '';
            }
            return area;
        },
        reset: function reset(code) {
            this.code = code || '';
            return this.setValues();
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwic2hhcmVkXzEiLCJDT0xVTU5TUExBQ0VIT0xERVJDT0RFIiwiVmFudENvbXBvbmVudCIsImNsYXNzZXMiLCJwcm9wcyIsInBpY2tlclByb3BzIiwidHlwZSIsIlN0cmluZyIsIm9ic2VydmVyIiwiY29kZSIsInNldFZhbHVlcyIsImFyZWFMaXN0IiwiY29sdW1uc051bSIsInNldERhdGEiLCJkaXNwbGF5Q29sdW1ucyIsImRhdGEiLCJjb2x1bW5zIiwic2xpY2UiLCJjb2x1bW5zUGxhY2Vob2xkZXIiLCJBcnJheSIsInZhbCIsInR5cGVUb0NvbHVtbnNQbGFjZWhvbGRlciIsInByb3ZpbmNlIiwiY2l0eSIsImNvdW50eSIsInZhbHVlcyIsIm1vdW50ZWQiLCJfdGhpcyIsInNldFRpbWVvdXQiLCJtZXRob2RzIiwiZ2V0UGlja2VyIiwicGlja2VyIiwic2VsZWN0Q29tcG9uZW50Iiwib25DYW5jZWwiLCJldmVudCIsImVtaXQiLCJkZXRhaWwiLCJvbkNvbmZpcm0iLCJpbmRleCIsInBhcnNlT3V0cHV0VmFsdWVzIiwiJGVtaXQiLCJtYXAiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJuYW1lIiwib25DaGFuZ2UiLCJfYSIsInRoZW4iLCJnZXRWYWx1ZXMiLCJnZXRDb25maWciLCJnZXRMaXN0IiwicmVzdWx0IiwibGlzdCIsImtleXMiLCJmaWx0ZXIiLCJpdGVtIiwiaW5kZXhPZiIsImNvZGVGaWxsIiwidW5zaGlmdCIsImdldEluZGV4IiwiY29tcGFyZU51bSIsInN0YWNrIiwicHVzaCIsInNldENvbHVtblZhbHVlcyIsIlByb21pc2UiLCJhbGwiLCJjYXRjaCIsInNldEluZGV4ZXMiLCJnZXREZXRhaWwiLCJhcmVhIiwiY291bnRyeSIsIm5hbWVzIiwicmVzZXQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBLElBQUlBLFdBQVksYUFBUSxVQUFLQSxRQUFkLElBQTJCLFlBQVk7QUFDbERBLGVBQVdDLE9BQU9DLE1BQVAsSUFBaUIsVUFBU0MsQ0FBVCxFQUFZO0FBQ3BDLGFBQUssSUFBSUMsQ0FBSixFQUFPQyxJQUFJLENBQVgsRUFBY0MsSUFBSUMsVUFBVUMsTUFBakMsRUFBeUNILElBQUlDLENBQTdDLEVBQWdERCxHQUFoRCxFQUFxRDtBQUNqREQsZ0JBQUlHLFVBQVVGLENBQVYsQ0FBSjtBQUNBLGlCQUFLLElBQUlJLENBQVQsSUFBY0wsQ0FBZDtBQUFpQixvQkFBSUgsT0FBT1MsU0FBUCxDQUFpQkMsY0FBakIsQ0FBZ0NDLElBQWhDLENBQXFDUixDQUFyQyxFQUF3Q0ssQ0FBeEMsQ0FBSixFQUNiTixFQUFFTSxDQUFGLElBQU9MLEVBQUVLLENBQUYsQ0FBUDtBQURKO0FBRUg7QUFDRCxlQUFPTixDQUFQO0FBQ0gsS0FQRDtBQVFBLFdBQU9ILFNBQVNhLEtBQVQsQ0FBZSxJQUFmLEVBQXFCTixTQUFyQixDQUFQO0FBQ0gsQ0FWRDtBQVdBTixPQUFPYSxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxjQUFjQyxRQUFRLHFCQUFSLENBQWxCO0FBQ0EsSUFBSUMsV0FBV0QsUUFBUSxrQkFBUixDQUFmO0FBQ0EsSUFBSUUseUJBQXlCLFFBQTdCO0FBQ0FILFlBQVlJLGFBQVosQ0FBMEI7QUFDdEJDLGFBQVMsQ0FBQyxjQUFELEVBQWlCLGVBQWpCLEVBQWtDLGNBQWxDLENBRGE7QUFFdEJDLFdBQU92QixTQUFTQSxTQUFTLEVBQVQsRUFBYW1CLFNBQVNLLFdBQXRCLENBQVQsRUFBNkMsRUFBRVIsT0FBTztBQUNyRFMsa0JBQU1DLE1B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QUFOLEtBQVksRUFBNUI7QUFDSCxhQUhELE1BSUs7QUFDREYscUJBQUtoRCxRQUFMLEdBQWdCa0QsTUFBTSxDQUFOLEtBQVksRUFBNUI7QUFDQUYscUJBQUsvQyxJQUFMLEdBQVlpRCxNQUFNLENBQU4sS0FBWSxFQUF4QjtBQUNBRixxQkFBSzlDLE1BQUwsR0FBY2dELE1BQU0sQ0FBTixLQUFZLEVBQTFCO0FBQ0g7QUFDRCxtQkFBT0YsSUFBUDtBQUNILFNBbEtJO0FBbUtMRyxlQUFPLGVBQVVoRSxJQUFWLEVBQWdCO0FBQ25CLGlCQUFLQSxJQUFMLEdBQVlBLFFBQVEsRUFBcEI7QUFDQSxtQkFBTyxLQUFLQyxTQUFMLEVBQVA7QUFDSDtBQXRLSTtBQTNDYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIHNoYXJlZF8xID0gcmVxdWlyZShcIi4uL3BpY2tlci9zaGFyZWRcIik7XG52YXIgQ09MVU1OU1BMQUNFSE9MREVSQ09ERSA9ICcwMDAwMDAnO1xuY29tcG9uZW50XzEuVmFudENvbXBvbmVudCh7XG4gICAgY2xhc3NlczogWydhY3RpdmUtY2xhc3MnLCAndG9vbGJhci1jbGFzcycsICdjb2x1bW4tY2xhc3MnXSxcbiAgICBwcm9wczogX19hc3NpZ24oX19hc3NpZ24oe30sIHNoYXJlZF8xLnBpY2tlclByb3BzKSwgeyB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29kZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LCBhcmVhTGlzdDoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgdmFsdWU6IHt9LFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdzZXRWYWx1ZXMnXG4gICAgICAgIH0sIGNvbHVtbnNOdW06IHtcbiAgICAgICAgICAgIHR5cGU6IG51bGwsXG4gICAgICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgICAgIG9ic2VydmVyOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5Q29sdW1uczogdGhpcy5kYXRhLmNvbHVtbnMuc2xpY2UoMCwgK3ZhbHVlKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBjb2x1bW5zUGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgb2JzZXJ2ZXI6IGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICAgICAgICB0eXBlVG9Db2x1bW5zUGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3ZpbmNlOiB2YWxbMF0gfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjaXR5OiB2YWxbMV0gfHwgJycsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudHk6IHZhbFsyXSB8fCAnJyxcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IH0pLFxuICAgIGRhdGE6IHtcbiAgICAgICAgY29sdW1uczogW3sgdmFsdWVzOiBbXSB9LCB7IHZhbHVlczogW10gfSwgeyB2YWx1ZXM6IFtdIH1dLFxuICAgICAgICBkaXNwbGF5Q29sdW1uczogW3sgdmFsdWVzOiBbXSB9LCB7IHZhbHVlczogW10gfSwgeyB2YWx1ZXM6IFtdIH1dLFxuICAgICAgICB0eXBlVG9Db2x1bW5zUGxhY2Vob2xkZXI6IHt9XG4gICAgfSxcbiAgICBtb3VudGVkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXMuc2V0VmFsdWVzKCk7XG4gICAgICAgIH0sIDApO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRQaWNrZXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBpY2tlciA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXIgPSB0aGlzLnNlbGVjdENvbXBvbmVudCgnLnZhbi1hcmVhX19waWNrZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBpY2tlcjtcbiAgICAgICAgfSxcbiAgICAgICAgb25DYW5jZWw6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdGhpcy5lbWl0KCdjYW5jZWwnLCBldmVudC5kZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICBvbkNvbmZpcm06IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgdmFyIGluZGV4ID0gZXZlbnQuZGV0YWlsLmluZGV4O1xuICAgICAgICAgICAgdmFyIHZhbHVlID0gZXZlbnQuZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnBhcnNlT3V0cHV0VmFsdWVzKHZhbHVlKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdCgnY29uZmlybScsIHsgdmFsdWU6IHZhbHVlLCBpbmRleDogaW5kZXggfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGVtaXQ6IGZ1bmN0aW9uICh0eXBlLCBkZXRhaWwpIHtcbiAgICAgICAgICAgIGRldGFpbC52YWx1ZXMgPSBkZXRhaWwudmFsdWU7XG4gICAgICAgICAgICBkZWxldGUgZGV0YWlsLnZhbHVlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCh0eXBlLCBkZXRhaWwpO1xuICAgICAgICB9LFxuICAgICAgICAvLyBwYXJzZSBvdXRwdXQgY29sdW1ucyBkYXRhXG4gICAgICAgIHBhcnNlT3V0cHV0VmFsdWVzOiBmdW5jdGlvbiAodmFsdWVzKSB7XG4gICAgICAgICAgICB2YXIgY29sdW1uc1BsYWNlaG9sZGVyID0gdGhpcy5kYXRhLmNvbHVtbnNQbGFjZWhvbGRlcjtcbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXMubWFwKGZ1bmN0aW9uICh2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBzYXZlIHVuZGVmaW5lZCB2YWx1ZVxuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlLmNvZGUgfHwgdmFsdWUubmFtZSA9PT0gY29sdW1uc1BsYWNlaG9sZGVyW2luZGV4XSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5jb2RlID0gJyc7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLm5hbWUgPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgX2EgPSBldmVudC5kZXRhaWwsIGluZGV4ID0gX2EuaW5kZXgsIHBpY2tlciA9IF9hLnBpY2tlciwgdmFsdWUgPSBfYS52YWx1ZTtcbiAgICAgICAgICAgIHRoaXMuY29kZSA9IHZhbHVlW2luZGV4XS5jb2RlO1xuICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXMoKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnY2hhbmdlJywge1xuICAgICAgICAgICAgICAgICAgICBwaWNrZXI6IHBpY2tlcixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBfdGhpcy5wYXJzZU91dHB1dFZhbHVlcyhwaWNrZXIuZ2V0VmFsdWVzKCkpLFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDb25maWc6IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgICAgICB2YXIgYXJlYUxpc3QgPSB0aGlzLmRhdGEuYXJlYUxpc3Q7XG4gICAgICAgICAgICByZXR1cm4gKGFyZWFMaXN0ICYmIGFyZWFMaXN0W3R5cGUgKyBcIl9saXN0XCJdKSB8fCB7fTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0TGlzdDogZnVuY3Rpb24gKHR5cGUsIGNvZGUpIHtcbiAgICAgICAgICAgIHZhciB0eXBlVG9Db2x1bW5zUGxhY2Vob2xkZXIgPSB0aGlzLmRhdGEudHlwZVRvQ29sdW1uc1BsYWNlaG9sZGVyO1xuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgICAgICAgICAgaWYgKHR5cGUgIT09ICdwcm92aW5jZScgJiYgIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGxpc3QgPSB0aGlzLmdldENvbmZpZyh0eXBlKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IE9iamVjdC5rZXlzKGxpc3QpLm1hcChmdW5jdGlvbiAoY29kZSkgeyByZXR1cm4gKHtcbiAgICAgICAgICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICAgICAgICAgIG5hbWU6IGxpc3RbY29kZV1cbiAgICAgICAgICAgIH0pOyB9KTtcbiAgICAgICAgICAgIGlmIChjb2RlKSB7XG4gICAgICAgICAgICAgICAgLy8gb3ZlcnNlYSBjb2RlXG4gICAgICAgICAgICAgICAgaWYgKGNvZGVbMF0gPT09ICc5JyAmJiB0eXBlID09PSAnY2l0eScpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9ICc5JztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LmZpbHRlcihmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5jb2RlLmluZGV4T2YoY29kZSkgPT09IDA7IH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVUb0NvbHVtbnNQbGFjZWhvbGRlclt0eXBlXSAmJiByZXN1bHQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gc2V0IGNvbHVtbnMgcGxhY2Vob2xkZXJcbiAgICAgICAgICAgICAgICB2YXIgY29kZUZpbGwgPSB0eXBlID09PSAncHJvdmluY2UnID8gJycgOiB0eXBlID09PSAnY2l0eScgPyBDT0xVTU5TUExBQ0VIT0xERVJDT0RFLnNsaWNlKDIsIDQpIDogQ09MVU1OU1BMQUNFSE9MREVSQ09ERS5zbGljZSg0LCA2KTtcbiAgICAgICAgICAgICAgICByZXN1bHQudW5zaGlmdCh7XG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IFwiXCIgKyBjb2RlICsgY29kZUZpbGwsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHR5cGVUb0NvbHVtbnNQbGFjZWhvbGRlclt0eXBlXVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SW5kZXg6IGZ1bmN0aW9uICh0eXBlLCBjb2RlKSB7XG4gICAgICAgICAgICB2YXIgY29tcGFyZU51bSA9IHR5cGUgPT09ICdwcm92aW5jZScgPyAyIDogdHlwZSA9PT0gJ2NpdHknID8gNCA6IDY7XG4gICAgICAgICAgICB2YXIgbGlzdCA9IHRoaXMuZ2V0TGlzdCh0eXBlLCBjb2RlLnNsaWNlKDAsIGNvbXBhcmVOdW0gLSAyKSk7XG4gICAgICAgICAgICAvLyBvdmVyc2VhIGNvZGVcbiAgICAgICAgICAgIGlmIChjb2RlWzBdID09PSAnOScgJiYgdHlwZSA9PT0gJ3Byb3ZpbmNlJykge1xuICAgICAgICAgICAgICAgIGNvbXBhcmVOdW0gPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29kZSA9IGNvZGUuc2xpY2UoMCwgY29tcGFyZU51bSk7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAobGlzdFtpXS5jb2RlLnNsaWNlKDAsIGNvbXBhcmVOdW0pID09PSBjb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9LFxuICAgICAgICBzZXRWYWx1ZXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICB2YXIgY291bnR5ID0gdGhpcy5nZXRDb25maWcoJ2NvdW50eScpO1xuICAgICAgICAgICAgdmFyIGNvZGUgPSB0aGlzLmNvZGU7XG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kYXRhLmNvbHVtbnNQbGFjZWhvbGRlci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9IENPTFVNTlNQTEFDRUhPTERFUkNPREU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKE9iamVjdC5rZXlzKGNvdW50eSlbMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9IE9iamVjdC5rZXlzKGNvdW50eSlbMF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb2RlID0gJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHByb3ZpbmNlID0gdGhpcy5nZXRMaXN0KCdwcm92aW5jZScpO1xuICAgICAgICAgICAgdmFyIGNpdHkgPSB0aGlzLmdldExpc3QoJ2NpdHknLCBjb2RlLnNsaWNlKDAsIDIpKTtcbiAgICAgICAgICAgIHZhciBwaWNrZXIgPSB0aGlzLmdldFBpY2tlcigpO1xuICAgICAgICAgICAgaWYgKCFwaWNrZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgc3RhY2sgPSBbXTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocGlja2VyLnNldENvbHVtblZhbHVlcygwLCBwcm92aW5jZSwgZmFsc2UpKTtcbiAgICAgICAgICAgIHN0YWNrLnB1c2gocGlja2VyLnNldENvbHVtblZhbHVlcygxLCBjaXR5LCBmYWxzZSkpO1xuICAgICAgICAgICAgaWYgKGNpdHkubGVuZ3RoICYmIGNvZGUuc2xpY2UoMiwgNCkgPT09ICcwMCcpIHtcbiAgICAgICAgICAgICAgICBjb2RlID0gY2l0eVswXS5jb2RlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhY2sucHVzaChwaWNrZXIuc2V0Q29sdW1uVmFsdWVzKDIsIHRoaXMuZ2V0TGlzdCgnY291bnR5JywgY29kZS5zbGljZSgwLCA0KSksIGZhbHNlKSk7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoc3RhY2spXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uICgpIHsgfSlcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBpY2tlci5zZXRJbmRleGVzKFtcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuZ2V0SW5kZXgoJ3Byb3ZpbmNlJywgY29kZSksXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmdldEluZGV4KCdjaXR5JywgY29kZSksXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmdldEluZGV4KCdjb3VudHknLCBjb2RlKVxuICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZnVuY3Rpb24gKCkgeyB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0VmFsdWVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgcGlja2VyID0gdGhpcy5nZXRQaWNrZXIoKTtcbiAgICAgICAgICAgIHJldHVybiBwaWNrZXIgPyBwaWNrZXIuZ2V0VmFsdWVzKCkuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkgeyByZXR1cm4gISF2YWx1ZTsgfSkgOiBbXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGV0YWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdmFsdWVzID0gdGhpcy5nZXRWYWx1ZXMoKTtcbiAgICAgICAgICAgIHZhciBhcmVhID0ge1xuICAgICAgICAgICAgICAgIGNvZGU6ICcnLFxuICAgICAgICAgICAgICAgIGNvdW50cnk6ICcnLFxuICAgICAgICAgICAgICAgIHByb3ZpbmNlOiAnJyxcbiAgICAgICAgICAgICAgICBjaXR5OiAnJyxcbiAgICAgICAgICAgICAgICBjb3VudHk6ICcnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKCF2YWx1ZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFyZWE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbmFtZXMgPSB2YWx1ZXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLm5hbWU7IH0pO1xuICAgICAgICAgICAgYXJlYS5jb2RlID0gdmFsdWVzW3ZhbHVlcy5sZW5ndGggLSAxXS5jb2RlO1xuICAgICAgICAgICAgaWYgKGFyZWEuY29kZVswXSA9PT0gJzknKSB7XG4gICAgICAgICAgICAgICAgYXJlYS5jb3VudHJ5ID0gbmFtZXNbMV0gfHwgJyc7XG4gICAgICAgICAgICAgICAgYXJlYS5wcm92aW5jZSA9IG5hbWVzWzJdIHx8ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYXJlYS5wcm92aW5jZSA9IG5hbWVzWzBdIHx8ICcnO1xuICAgICAgICAgICAgICAgIGFyZWEuY2l0eSA9IG5hbWVzWzFdIHx8ICcnO1xuICAgICAgICAgICAgICAgIGFyZWEuY291bnR5ID0gbmFtZXNbMl0gfHwgJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJlYTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXQ6IGZ1bmN0aW9uIChjb2RlKSB7XG4gICAgICAgICAgICB0aGlzLmNvZGUgPSBjb2RlIHx8ICcnO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2V0VmFsdWVzKCk7XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==