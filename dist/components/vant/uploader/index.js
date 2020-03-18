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
var utils_1 = require('./utils.js');
component_1.VantComponent({
    props: {
        disabled: Boolean,
        multiple: Boolean,
        uploadText: String,
        useBeforeRead: Boolean,
        previewSize: {
            type: null,
            value: 90
        },
        name: {
            type: [Number, String],
            value: ''
        },
        accept: {
            type: String,
            value: 'image'
        },
        sizeType: {
            type: Array,
            value: ['original', 'compressed']
        },
        capture: {
            type: Array,
            value: ['album', 'camera']
        },
        fileList: {
            type: Array,
            value: [],
            observer: 'formatFileList'
        },
        maxSize: {
            type: Number,
            value: Number.MAX_VALUE
        },
        maxCount: {
            type: Number,
            value: 100
        },
        deletable: {
            type: Boolean,
            value: true
        },
        previewImage: {
            type: Boolean,
            value: true
        },
        previewFullImage: {
            type: Boolean,
            value: true
        },
        imageFit: {
            type: String,
            value: 'scaleToFill'
        },
        camera: {
            type: String,
            value: 'back'
        },
        compressed: {
            type: Boolean,
            value: true
        },
        maxDuration: {
            type: Number,
            value: 60
        }
    },
    data: {
        lists: [],
        computedPreviewSize: '',
        isInCount: true
    },
    methods: {
        formatFileList: function formatFileList() {
            var _a = this.data,
                _b = _a.fileList,
                fileList = _b === void 0 ? [] : _b,
                maxCount = _a.maxCount;
            var lists = fileList.map(function (item) {
                return __assign(__assign({}, item), { isImage: typeof item.isImage === 'undefined' ? utils_1.isImageFile(item) : item.isImage });
            });
            this.setData({ lists: lists, isInCount: lists.length < maxCount });
        },
        startUpload: function startUpload() {
            var _this = this;
            if (this.data.disabled) return;
            var _a = this.data,
                _b = _a.name,
                name = _b === void 0 ? '' : _b,
                capture = _a.capture,
                maxCount = _a.maxCount,
                multiple = _a.multiple,
                maxSize = _a.maxSize,
                accept = _a.accept,
                sizeType = _a.sizeType,
                lists = _a.lists,
                camera = _a.camera,
                compressed = _a.compressed,
                maxDuration = _a.maxDuration,
                _c = _a.useBeforeRead // 是否定义了 beforeRead
            ,
                useBeforeRead = _c === void 0 ? false : _c // 是否定义了 beforeRead
            ;
            var chooseFile = null;
            var newMaxCount = maxCount - lists.length;
            // 设置为只选择图片的时候使用 chooseImage 来实现
            if (accept === 'image') {
                chooseFile = new Promise(function (resolve, reject) {
                    wx.chooseImage({
                        count: multiple ? newMaxCount > 9 ? 9 : newMaxCount : 1,
                        sourceType: capture,
                        sizeType: sizeType,
                        success: resolve,
                        fail: reject
                    });
                });
            } else if (accept === 'video') {
                chooseFile = new Promise(function (resolve, reject) {
                    wx.chooseVideo({
                        sourceType: capture,
                        compressed: compressed,
                        maxDuration: maxDuration,
                        camera: camera,
                        success: resolve,
                        fail: reject
                    });
                });
            } else {
                chooseFile = new Promise(function (resolve, reject) {
                    wx.chooseMessageFile({
                        count: multiple ? newMaxCount : 1,
                        type: 'file',
                        success: resolve,
                        fail: reject
                    });
                });
            }
            chooseFile.then(function (res) {
                var file = null;
                if (utils_1.isVideo(res, accept)) {
                    file = __assign({ path: res.tempFilePath }, res);
                } else {
                    file = multiple ? res.tempFiles : res.tempFiles[0];
                }
                // 检查文件大小
                if (file instanceof Array) {
                    var sizeEnable = file.every(function (item) {
                        return item.size <= maxSize;
                    });
                    if (!sizeEnable) {
                        _this.$emit('oversize', { name: name });
                        return;
                    }
                } else if (file.size > maxSize) {
                    _this.$emit('oversize', { name: name });
                    return;
                }
                // 触发上传之前的钩子函数
                if (useBeforeRead) {
                    _this.$emit('before-read', {
                        file: file,
                        name: name,
                        callback: function callback(result) {
                            if (result) {
                                // 开始上传
                                _this.$emit('after-read', { file: file, name: name });
                            }
                        }
                    });
                } else {
                    _this.$emit('after-read', { file: file, name: name });
                }
            }).catch(function (error) {
                _this.$emit('error', error);
            });
        },
        deleteItem: function deleteItem(event) {
            var index = event.currentTarget.dataset.index;
            this.$emit('delete', { index: index, name: this.data.name });
        },
        doPreviewImage: function doPreviewImage(event) {
            if (!this.data.previewFullImage) return;
            var curUrl = event.currentTarget.dataset.url;
            var images = this.data.lists.filter(function (item) {
                return item.isImage;
            }).map(function (item) {
                return item.url || item.path;
            });
            this.$emit('click-preview', { url: curUrl, name: this.data.name });
            wx.previewImage({
                urls: images,
                current: curUrl,
                fail: function fail() {
                    wx.showToast({ title: '预览图片失败', icon: 'none' });
                }
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIl9fYXNzaWduIiwiT2JqZWN0IiwiYXNzaWduIiwidCIsInMiLCJpIiwibiIsImFyZ3VtZW50cyIsImxlbmd0aCIsInAiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJhcHBseSIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsInZhbHVlIiwiY29tcG9uZW50XzEiLCJyZXF1aXJlIiwidXRpbHNfMSIsIlZhbnRDb21wb25lbnQiLCJwcm9wcyIsImRpc2FibGVkIiwiQm9vbGVhbiIsIm11bHRpcGxlIiwidXBsb2FkVGV4dCIsIlN0cmluZyIsInVzZUJlZm9yZVJlYWQiLCJwcmV2aWV3U2l6ZSIsInR5cGUiLCJuYW1lIiwiTnVtYmVyIiwiYWNjZXB0Iiwic2l6ZVR5cGUiLCJBcnJheSIsImNhcHR1cmUiLCJmaWxlTGlzdCIsIm9ic2VydmVyIiwibWF4U2l6ZSIsIk1BWF9WQUxVRSIsIm1heENvdW50IiwiZGVsZXRhYmxlIiwicHJldmlld0ltYWdlIiwicHJldmlld0Z1bGxJbWFnZSIsImltYWdlRml0IiwiY2FtZXJhIiwiY29tcHJlc3NlZCIsIm1heER1cmF0aW9uIiwiZGF0YSIsImxpc3RzIiwiY29tcHV0ZWRQcmV2aWV3U2l6ZSIsImlzSW5Db3VudCIsIm1ldGhvZHMiLCJmb3JtYXRGaWxlTGlzdCIsIl9hIiwiX2IiLCJtYXAiLCJpdGVtIiwiaXNJbWFnZSIsImlzSW1hZ2VGaWxlIiwic2V0RGF0YSIsInN0YXJ0VXBsb2FkIiwiX3RoaXMiLCJfYyIsImNob29zZUZpbGUiLCJuZXdNYXhDb3VudCIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwid3giLCJjaG9vc2VJbWFnZSIsImNvdW50Iiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJmYWlsIiwiY2hvb3NlVmlkZW8iLCJjaG9vc2VNZXNzYWdlRmlsZSIsInRoZW4iLCJyZXMiLCJmaWxlIiwiaXNWaWRlbyIsInBhdGgiLCJ0ZW1wRmlsZVBhdGgiLCJ0ZW1wRmlsZXMiLCJzaXplRW5hYmxlIiwiZXZlcnkiLCJzaXplIiwiJGVtaXQiLCJjYWxsYmFjayIsInJlc3VsdCIsImNhdGNoIiwiZXJyb3IiLCJkZWxldGVJdGVtIiwiZXZlbnQiLCJpbmRleCIsImN1cnJlbnRUYXJnZXQiLCJkYXRhc2V0IiwiZG9QcmV2aWV3SW1hZ2UiLCJjdXJVcmwiLCJ1cmwiLCJpbWFnZXMiLCJmaWx0ZXIiLCJ1cmxzIiwiY3VycmVudCIsInNob3dUb2FzdCIsInRpdGxlIiwiaWNvbiJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0EsSUFBSUEsV0FBWSxhQUFRLFVBQUtBLFFBQWQsSUFBMkIsWUFBWTtBQUNsREEsZUFBV0MsT0FBT0MsTUFBUCxJQUFpQixVQUFTQyxDQUFULEVBQVk7QUFDcEMsYUFBSyxJQUFJQyxDQUFKLEVBQU9DLElBQUksQ0FBWCxFQUFjQyxJQUFJQyxVQUFVQyxNQUFqQyxFQUF5Q0gsSUFBSUMsQ0FBN0MsRUFBZ0RELEdBQWhELEVBQXFEO0FBQ2pERCxnQkFBSUcsVUFBVUYsQ0FBVixDQUFKO0FBQ0EsaUJBQUssSUFBSUksQ0FBVCxJQUFjTCxDQUFkO0FBQWlCLG9CQUFJSCxPQUFPUyxTQUFQLENBQWlCQyxjQUFqQixDQUFnQ0MsSUFBaEMsQ0FBcUNSLENBQXJDLEVBQXdDSyxDQUF4QyxDQUFKLEVBQ2JOLEVBQUVNLENBQUYsSUFBT0wsRUFBRUssQ0FBRixDQUFQO0FBREo7QUFFSDtBQUNELGVBQU9OLENBQVA7QUFDSCxLQVBEO0FBUUEsV0FBT0gsU0FBU2EsS0FBVCxDQUFlLElBQWYsRUFBcUJOLFNBQXJCLENBQVA7QUFDSCxDQVZEO0FBV0FOLE9BQU9hLGNBQVAsQ0FBc0JDLE9BQXRCLEVBQStCLFlBQS9CLEVBQTZDLEVBQUVDLE9BQU8sSUFBVCxFQUE3QztBQUNBLElBQUlDLGNBQWNDLFFBQVEscUJBQVIsQ0FBbEI7QUFDQSxJQUFJQyxVQUFVRCxRQUFRLFNBQVIsQ0FBZDtBQUNBRCxZQUFZRyxhQUFaLENBQTBCO0FBQ3RCQyxXQUFPO0FBQ0hD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RCxJQUFMLENBQVVDLEtBQVYsQ0FDUm9ELE1BRFEsQ0FDRCxVQUFVNUMsSUFBVixFQUFnQjtBQUFFLHVCQUFPQSxLQUFLQyxPQUFaO0FBQXNCLGFBRHZDLEVBRVJGLEdBRlEsQ0FFSixVQUFVQyxJQUFWLEVBQWdCO0FBQUUsdUJBQU9BLEtBQUswQyxHQUFMLElBQVkxQyxLQUFLd0IsSUFBeEI7QUFBK0IsYUFGN0MsQ0FBYjtBQUdBLGlCQUFLTSxLQUFMLENBQVcsZUFBWCxFQUE0QixFQUFFWSxLQUFLRCxNQUFQLEVBQWVwRSxNQUFNLEtBQUtrQixJQUFMLENBQVVsQixJQUEvQixFQUE1QjtBQUNBdUMsZUFBRzNCLFlBQUgsQ0FBZ0I7QUFDWjRELHNCQUFNRixNQURNO0FBRVpHLHlCQUFTTCxNQUZHO0FBR1p4QixzQkFBTSxnQkFBWTtBQUNkTCx1QkFBR21DLFNBQUgsQ0FBYSxFQUFFQyxPQUFPLFFBQVQsRUFBbUJDLE1BQU0sTUFBekIsRUFBYjtBQUNIO0FBTFcsYUFBaEI7QUFPSDtBQTlHSTtBQXpFYSxDQUExQiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xudmFyIF9fYXNzaWduID0gKHRoaXMgJiYgdGhpcy5fX2Fzc2lnbikgfHwgZnVuY3Rpb24gKCkge1xuICAgIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbih0KSB7XG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSlcbiAgICAgICAgICAgICAgICB0W3BdID0gc1twXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdDtcbiAgICB9O1xuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuLi9jb21tb24vY29tcG9uZW50XCIpO1xudmFyIHV0aWxzXzEgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcbmNvbXBvbmVudF8xLlZhbnRDb21wb25lbnQoe1xuICAgIHByb3BzOiB7XG4gICAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgICBtdWx0aXBsZTogQm9vbGVhbixcbiAgICAgICAgdXBsb2FkVGV4dDogU3RyaW5nLFxuICAgICAgICB1c2VCZWZvcmVSZWFkOiBCb29sZWFuLFxuICAgICAgICBwcmV2aWV3U2l6ZToge1xuICAgICAgICAgICAgdHlwZTogbnVsbCxcbiAgICAgICAgICAgIHZhbHVlOiA5MFxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuICAgICAgICAgICAgdmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGFjY2VwdDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICdpbWFnZSdcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZVR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgdmFsdWU6IFsnb3JpZ2luYWwnLCAnY29tcHJlc3NlZCddXG4gICAgICAgIH0sXG4gICAgICAgIGNhcHR1cmU6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgdmFsdWU6IFsnYWxidW0nLCAnY2FtZXJhJ11cbiAgICAgICAgfSxcbiAgICAgICAgZmlsZUxpc3Q6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgdmFsdWU6IFtdLFxuICAgICAgICAgICAgb2JzZXJ2ZXI6ICdmb3JtYXRGaWxlTGlzdCdcbiAgICAgICAgfSxcbiAgICAgICAgbWF4U2l6ZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgdmFsdWU6IE51bWJlci5NQVhfVkFMVUVcbiAgICAgICAgfSxcbiAgICAgICAgbWF4Q291bnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHZhbHVlOiAxMDBcbiAgICAgICAgfSxcbiAgICAgICAgZGVsZXRhYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmlld0ltYWdlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgICAgfSxcbiAgICAgICAgcHJldmlld0Z1bGxJbWFnZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIGltYWdlRml0OiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICB2YWx1ZTogJ3NjYWxlVG9GaWxsJ1xuICAgICAgICB9LFxuICAgICAgICBjYW1lcmE6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHZhbHVlOiAnYmFjaydcbiAgICAgICAgfSxcbiAgICAgICAgY29tcHJlc3NlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICAgIH0sXG4gICAgICAgIG1heER1cmF0aW9uOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICB2YWx1ZTogNjBcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZGF0YToge1xuICAgICAgICBsaXN0czogW10sXG4gICAgICAgIGNvbXB1dGVkUHJldmlld1NpemU6ICcnLFxuICAgICAgICBpc0luQ291bnQ6IHRydWVcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZm9ybWF0RmlsZUxpc3Q6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgX2IgPSBfYS5maWxlTGlzdCwgZmlsZUxpc3QgPSBfYiA9PT0gdm9pZCAwID8gW10gOiBfYiwgbWF4Q291bnQgPSBfYS5tYXhDb3VudDtcbiAgICAgICAgICAgIHZhciBsaXN0cyA9IGZpbGVMaXN0Lm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gKF9fYXNzaWduKF9fYXNzaWduKHt9LCBpdGVtKSwgeyBpc0ltYWdlOiB0eXBlb2YgaXRlbS5pc0ltYWdlID09PSAndW5kZWZpbmVkJyA/IHV0aWxzXzEuaXNJbWFnZUZpbGUoaXRlbSkgOiBpdGVtLmlzSW1hZ2UgfSkpOyB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YSh7IGxpc3RzOiBsaXN0cywgaXNJbkNvdW50OiBsaXN0cy5sZW5ndGggPCBtYXhDb3VudCB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnRVcGxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHZhciBfYSA9IHRoaXMuZGF0YSwgX2IgPSBfYS5uYW1lLCBuYW1lID0gX2IgPT09IHZvaWQgMCA/ICcnIDogX2IsIGNhcHR1cmUgPSBfYS5jYXB0dXJlLCBtYXhDb3VudCA9IF9hLm1heENvdW50LCBtdWx0aXBsZSA9IF9hLm11bHRpcGxlLCBtYXhTaXplID0gX2EubWF4U2l6ZSwgYWNjZXB0ID0gX2EuYWNjZXB0LCBzaXplVHlwZSA9IF9hLnNpemVUeXBlLCBsaXN0cyA9IF9hLmxpc3RzLCBjYW1lcmEgPSBfYS5jYW1lcmEsIGNvbXByZXNzZWQgPSBfYS5jb21wcmVzc2VkLCBtYXhEdXJhdGlvbiA9IF9hLm1heER1cmF0aW9uLCBfYyA9IF9hLnVzZUJlZm9yZVJlYWQgLy8g5piv5ZCm5a6a5LmJ5LqGIGJlZm9yZVJlYWRcbiAgICAgICAgICAgICwgdXNlQmVmb3JlUmVhZCA9IF9jID09PSB2b2lkIDAgPyBmYWxzZSA6IF9jIC8vIOaYr+WQpuWumuS5ieS6hiBiZWZvcmVSZWFkXG4gICAgICAgICAgICA7XG4gICAgICAgICAgICB2YXIgY2hvb3NlRmlsZSA9IG51bGw7XG4gICAgICAgICAgICB2YXIgbmV3TWF4Q291bnQgPSBtYXhDb3VudCAtIGxpc3RzLmxlbmd0aDtcbiAgICAgICAgICAgIC8vIOiuvue9ruS4uuWPqumAieaLqeWbvueJh+eahOaXtuWAmeS9v+eUqCBjaG9vc2VJbWFnZSDmnaXlrp7njrBcbiAgICAgICAgICAgIGlmIChhY2NlcHQgPT09ICdpbWFnZScpIHtcbiAgICAgICAgICAgICAgICBjaG9vc2VGaWxlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgICAgICB3eC5jaG9vc2VJbWFnZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogbXVsdGlwbGUgPyAobmV3TWF4Q291bnQgPiA5ID8gOSA6IG5ld01heENvdW50KSA6IDEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2VUeXBlOiBjYXB0dXJlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZVR5cGU6IHNpemVUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGFjY2VwdCA9PT0gJ3ZpZGVvJykge1xuICAgICAgICAgICAgICAgIGNob29zZUZpbGUgPSBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LmNob29zZVZpZGVvKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IGNhcHR1cmUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wcmVzc2VkOiBjb21wcmVzc2VkLFxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4RHVyYXRpb246IG1heER1cmF0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FtZXJhOiBjYW1lcmEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmFpbDogcmVqZWN0XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY2hvb3NlRmlsZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgd3guY2hvb3NlTWVzc2FnZUZpbGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IG11bHRpcGxlID8gbmV3TWF4Q291bnQgOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWw6IHJlamVjdFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNob29zZUZpbGVcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZpbGUgPSBudWxsO1xuICAgICAgICAgICAgICAgIGlmICh1dGlsc18xLmlzVmlkZW8ocmVzLCBhY2NlcHQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGUgPSBfX2Fzc2lnbih7IHBhdGg6IHJlcy50ZW1wRmlsZVBhdGggfSwgcmVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGUgPSBtdWx0aXBsZSA/IHJlcy50ZW1wRmlsZXMgOiByZXMudGVtcEZpbGVzWzBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDmo4Dmn6Xmlofku7blpKflsI9cbiAgICAgICAgICAgICAgICBpZiAoZmlsZSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzaXplRW5hYmxlID0gZmlsZS5ldmVyeShmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS5zaXplIDw9IG1heFNpemU7IH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXNpemVFbmFibGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbWl0KCdvdmVyc2l6ZScsIHsgbmFtZTogbmFtZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChmaWxlLnNpemUgPiBtYXhTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbWl0KCdvdmVyc2l6ZScsIHsgbmFtZTogbmFtZSB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDop6blj5HkuIrkvKDkuYvliY3nmoTpkqnlrZDlh73mlbBcbiAgICAgICAgICAgICAgICBpZiAodXNlQmVmb3JlUmVhZCkge1xuICAgICAgICAgICAgICAgICAgICBfdGhpcy4kZW1pdCgnYmVmb3JlLXJlYWQnLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlOiBmaWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDlvIDlp4vkuIrkvKBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3RoaXMuJGVtaXQoJ2FmdGVyLXJlYWQnLCB7IGZpbGU6IGZpbGUsIG5hbWU6IG5hbWUgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIF90aGlzLiRlbWl0KCdhZnRlci1yZWFkJywgeyBmaWxlOiBmaWxlLCBuYW1lOiBuYW1lIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmNhdGNoKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgICAgICAgICAgIF90aGlzLiRlbWl0KCdlcnJvcicsIGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkZWxldGVJdGVtOiBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2RlbGV0ZScsIHsgaW5kZXg6IGluZGV4LCBuYW1lOiB0aGlzLmRhdGEubmFtZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZG9QcmV2aWV3SW1hZ2U6IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmRhdGEucHJldmlld0Z1bGxJbWFnZSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB2YXIgY3VyVXJsID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LnVybDtcbiAgICAgICAgICAgIHZhciBpbWFnZXMgPSB0aGlzLmRhdGEubGlzdHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7IHJldHVybiBpdGVtLmlzSW1hZ2U7IH0pXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoaXRlbSkgeyByZXR1cm4gaXRlbS51cmwgfHwgaXRlbS5wYXRoOyB9KTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLXByZXZpZXcnLCB7IHVybDogY3VyVXJsLCBuYW1lOiB0aGlzLmRhdGEubmFtZSB9KTtcbiAgICAgICAgICAgIHd4LnByZXZpZXdJbWFnZSh7XG4gICAgICAgICAgICAgICAgdXJsczogaW1hZ2VzLFxuICAgICAgICAgICAgICAgIGN1cnJlbnQ6IGN1clVybCxcbiAgICAgICAgICAgICAgICBmYWlsOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHd4LnNob3dUb2FzdCh7IHRpdGxlOiAn6aKE6KeI5Zu+54mH5aSx6LSlJywgaWNvbjogJ25vbmUnIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=