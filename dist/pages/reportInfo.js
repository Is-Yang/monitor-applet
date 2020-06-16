'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _wepy = require('./../npm/wepy/lib/wepy.js');

var _wepy2 = _interopRequireDefault(_wepy);

var _moment = require('./../npm/moment/moment.js');

var _moment2 = _interopRequireDefault(_moment);

var _api = require('./../api/api.js');

var api = _interopRequireWildcard(_api);

var _util = require('./../utils/util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReportInfo = function (_wepy$page) {
    _inherits(ReportInfo, _wepy$page);

    function ReportInfo() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, ReportInfo);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReportInfo.__proto__ || Object.getPrototypeOf(ReportInfo)).call.apply(_ref, [this].concat(args))), _this), _this.config = {
            navigationBarTitleText: '预警上报',
            usingComponents: {
                "van-nav-bar": "../components/vant/nav-bar/index"
            }
        }, _this.data = {
            navTitle: '预警上报',
            statusBarHeight: _wepy2.default.$instance.globalData.statusBarHeight,
            readOnly: false, // true为只读, 小程序展示为只读的模式，否则预警详情页可以进行更新操作
            uploadList: [],
            siteIndex: 0,
            siteRange: [],
            levelIndex: 0,
            levelRange: [],
            relationUser: [], // 相关人员
            selectUserIds: [], // 相关人员id
            sysFileIds: [], // 图片上传id
            hasMonitorDevice: false, // 是否有监控设备
            from: {
                description: '',
                createTime: (0, _moment2.default)(new Date()).format('YYYY-MM-DD HH:mm:ss')
            },
            monitorAddress: '',
            monitorAreaName: '',
            yuJingLevelName: '',
            type: null,
            status: '',
            isBindDept: false,
            isCreate: false,
            areaId: '',
            monitorAreaId: '',
            isAdmin: false // 是否本单位管理员
        }, _this.methods = {
            toMonitorDevice: function toMonitorDevice() {
                if (this.hasMonitorDevice) {
                    wx.navigateTo({
                        url: '/pages/monitorDevice?areaId=' + this.monitorAreaId
                    });
                }
            },
            toReportLogs: function toReportLogs() {
                wx.navigateTo({
                    url: '/pages/package/reportLogs?yujingId=' + this.from.id
                });
            },
            submitFrom: function submitFrom() {
                var monitorAreaId = this.siteRange[this.siteIndex].monitorAreaId;
                var yuJingLevelId = this.levelRange[this.levelIndex].yuJingLevelId;
                var _from = this.from,
                    description = _from.description,
                    createTime = _from.createTime;


                if (!monitorAreaId) {
                    wx.showToast({
                        title: '请选择地点',
                        icon: 'none',
                        duration: 1500
                    });
                    return;
                }

                var params = {
                    description: description,
                    monitorAreaId: monitorAreaId,
                    yuJingLevelId: yuJingLevelId,
                    createTime: createTime,
                    relationUserIds: this.selectUserIds,
                    sysFileIds: this.sysFileIds

                    // 修改
                };if (this.from.id) {
                    params.yuJingId = this.from.id;
                    this.updateWarning(JSON.stringify(params));
                } else {
                    // 新增
                    this.addWarning(JSON.stringify(params));
                }
            },

            // 改变状态
            changeStatus: function changeStatus() {
                this.changeProcessed();
            },
            toDeptUser: function toDeptUser() {
                wx.navigateTo({
                    url: '/pages/package/deptUser'
                });
            },
            inputDesc: function inputDesc(e) {
                this.from.description = e.detail.value;
            },
            onChangeUser: function onChangeUser(e) {
                this.userIndex = e.detail.value;
            },
            onChangeSite: function onChangeSite(e) {
                this.siteIndex = e.detail.value;
            },
            onChangeLevel: function onChangeLevel(e) {
                this.levelIndex = e.detail.value;
            },
            onClickLeft: function onClickLeft() {
                var pages = getCurrentPages();
                if (pages.length == 1) {
                    wx.switchTab({
                        url: '/pages/menu1'
                    });
                } else {
                    wx.navigateBack({
                        delta: 1
                    });
                }
            },
            uploadImage: function uploadImage() {
                var that = this;

                wx.chooseImage({
                    count: 3,
                    sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                    sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                    success: function success(res) {
                        var tempFilePaths = res.tempFilePaths;
                        var uploadList = that.uploadList.concat(tempFilePaths);
                        if (uploadList.length > 3) {
                            wx.showToast({
                                title: '最多三张',
                                icon: 'none',
                                duration: 1500
                            });
                            return;
                        }
                        that.uploadList = uploadList;
                        that.handleUploadApi(res.tempFilePaths);
                        that.$apply();
                    }
                });
            },
            removeImage: function removeImage(e) {
                this.sysFileIds.splice(e.currentTarget.dataset.index, 1);
                this.uploadList.splice(e.currentTarget.dataset.index, 1);
            },
            showImage: function showImage(e) {
                wx.previewImage({
                    urls: this.uploadList,
                    current: this.uploadList[e.currentTarget.dataset.index]
                });
            }
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(ReportInfo, [{
        key: 'onLoad',
        value: function onLoad(options) {
            var _this2 = this;

            _wepy2.default.$instance.shareImage();

            // 初始化时，默认相关人员为自己

            var _wx$getStorageSync = wx.getStorageSync('globalData'),
                nickName = _wx$getStorageSync.nickName,
                userId = _wx$getStorageSync.userId;

            this.relationUser.push({
                nickName: (0, _util2.default)(nickName),
                userId: userId
            });
            this.selectUserIds.push(userId);

            if (options.id || options.areaId) {
                Promise.all([this.getMonitorOptions(), this.getWarnOptions()]).then(function (res) {
                    // 获取预警详情
                    if (options.id) {
                        _this2.navTitle = '预警详情';
                        _this2.from.id = options.id;
                        _this2.getWarningInfo(options.id);
                    }
                    // 从首页上报预警，选中相应的地点
                    if (options.areaId) {
                        _this2.areaId = options.areaId;
                        _this2.getSiteIndexById(_this2.areaId);
                        _this2.$apply();
                    }
                });
            } else {
                this.getMonitorOptions();
                this.getWarnOptions();
            }
        }
    }, {
        key: 'onShow',
        value: function onShow() {
            var _this3 = this;

            // 是否绑定部门
            this.isBindDept = wx.getStorageSync('isBindDept');

            // 获取像当前页面所传递的参数
            var pages = getCurrentPages();
            var currPage = pages[pages.length - 1];
            if (currPage.relationUser && currPage.relationUser.length > 0) {
                // 所选相关人员信息
                this.relationUser = [];
                // 所选相关人员id
                this.selectUserIds = [];

                this.relationUser = currPage.relationUser;

                this.relationUser.forEach(function (item) {
                    // 选中的相关人员id
                    _this3.selectUserIds.push(item.userId);
                });
            }

            this.$apply();
        }
    }, {
        key: 'getSiteIndexById',


        // 根据id获取下拉框index
        value: function getSiteIndexById(areaId) {
            var findAreaId = this.siteRange.findIndex(function (item) {
                return item.monitorAreaId == areaId;
            });
            this.siteIndex = findAreaId > -1 ? findAreaId : 0;
        }
    }, {
        key: 'handleUploadApi',
        value: function handleUploadApi(files) {
            var that = this;
            var token = wx.getStorageSync('token');
            var link = '';
            if (_wepy2.default.$instance.globalData.env == 'prod') {
                link = 'https://tcb-api.tencentcloudapi.com';
            } else {
                link = 'https://beidou.signalfire.net.cn';
            }

            files.forEach(function (item) {
                wx.uploadFile({
                    url: link + '/yujing/upload',
                    filePath: item,
                    name: "file",
                    header: {
                        "Content-Type": "multipart/form-data",
                        "Authorization": token
                    },
                    formData: {},
                    success: function success(data) {
                        var result = JSON.parse(data.data);
                        if (result.code == 200) {
                            that.sysFileIds.push(result.fileId);
                            that.$apply();
                        }
                    }
                });
            });
        }
    }, {
        key: 'getWarningInfo',
        value: function () {
            var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(id) {
                var _this4 = this;

                var res, _res$yujing, createTime, yuJingLevelId, monitorAreaId, sysFiles, sysFileIds, description, relationUsers, relationUserIds, monitorArea, yuJingLevel, type, status, createById, hasMonitorDevice, globalData;

                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                _context.next = 2;
                                return api.getWarningInfo({ yuJingId: id });

                            case 2:
                                res = _context.sent;

                                if (res.code == 200) {
                                    this.readOnly = res.readOnly;
                                    _res$yujing = res.yujing, createTime = _res$yujing.createTime, yuJingLevelId = _res$yujing.yuJingLevelId, monitorAreaId = _res$yujing.monitorAreaId, sysFiles = _res$yujing.sysFiles, sysFileIds = _res$yujing.sysFileIds, description = _res$yujing.description, relationUsers = _res$yujing.relationUsers, relationUserIds = _res$yujing.relationUserIds, monitorArea = _res$yujing.monitorArea, yuJingLevel = _res$yujing.yuJingLevel, type = _res$yujing.type, status = _res$yujing.status, createById = _res$yujing.createById, hasMonitorDevice = _res$yujing.hasMonitorDevice;

                                    this.from.createTime = createTime;
                                    this.from.description = description;
                                    this.levelIndex = this.levelRange.findIndex(function (item) {
                                        return item.yuJingLevelId == yuJingLevelId;
                                    });

                                    this.monitorAreaId = monitorAreaId;

                                    this.getSiteIndexById(monitorAreaId);

                                    this.relationUser = this.decodeNickName(relationUsers, 'nickName');
                                    this.selectUserIds = relationUserIds;
                                    this.uploadList = [];
                                    sysFiles.forEach(function (item) {
                                        _this4.uploadList.push(item.fileUrl);
                                    });
                                    this.sysFileIds = sysFileIds;

                                    this.monitorAddress = monitorArea.address;
                                    this.monitorAreaName = monitorArea.monitorAreaName;
                                    this.yuJingLevelName = yuJingLevel.yuJingLevelName;
                                    this.type = type;
                                    this.status = status;

                                    globalData = wx.getStorageSync('globalData');
                                    // 如果当前预警详情用户id创建的,与用户id一致，则可更改状态

                                    if (createById == (globalData && globalData.userId)) {
                                        this.isCreate = true;
                                    }
                                    this.isAdmin = globalData.firstRoleName == '单位管理员' ? true : false;

                                    this.hasMonitorDevice = hasMonitorDevice > 0 ? true : false;
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context.stop();
                        }
                    }
                }, _callee, this);
            }));

            function getWarningInfo(_x) {
                return _ref2.apply(this, arguments);
            }

            return getWarningInfo;
        }()

        // 相关人员昵称编码

    }, {
        key: 'decodeNickName',
        value: function decodeNickName(data, key) {
            data.forEach(function (item) {
                if (item[key]) {
                    item[key] = (0, _util2.default)(item[key]);
                }
            });
            return data;
        }
    }, {
        key: 'updateWarning',
        value: function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                            case 0:
                                _context2.next = 2;
                                return api.updateWarning(params);

                            case 2:
                                res = _context2.sent;

                                this.handleMessage(res);

                            case 4:
                            case 'end':
                                return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));

            function updateWarning(_x2) {
                return _ref3.apply(this, arguments);
            }

            return updateWarning;
        }()
    }, {
        key: 'addWarning',
        value: function () {
            var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(params) {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                            case 0:
                                _context3.next = 2;
                                return api.addWarning(params);

                            case 2:
                                res = _context3.sent;

                                if (res.code == 200) {
                                    wx.showToast({
                                        title: res.msg,
                                        icon: 'success',
                                        duration: 1500
                                    });
                                    setTimeout(function () {
                                        wx.navigateBack({
                                            delta: 1
                                        });
                                    }, 1000);
                                } else {
                                    wx.showToast({
                                        title: res.msg,
                                        icon: 'none',
                                        duration: 1500
                                    });
                                }

                            case 4:
                            case 'end':
                                return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));

            function addWarning(_x3) {
                return _ref4.apply(this, arguments);
            }

            return addWarning;
        }()
    }, {
        key: 'getWarnOptions',
        value: function () {
            var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
                var res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _context4.next = 2;
                                return api.warnOptions();

                            case 2:
                                res = _context4.sent;

                                if (res.code == 200) {
                                    this.levelRange = res.data;
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));

            function getWarnOptions() {
                return _ref5.apply(this, arguments);
            }

            return getWarnOptions;
        }()
    }, {
        key: 'getMonitorOptions',
        value: function () {
            var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                var res;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                            case 0:
                                _context5.next = 2;
                                return api.monitorAreaOptions();

                            case 2:
                                res = _context5.sent;

                                if (res.code == 200) {
                                    this.siteRange = res.data;
                                    this.siteRange.unshift({
                                        monitorAreaName: '请选择',
                                        monitorAreaId: undefined
                                    });
                                    this.$apply();
                                }

                            case 4:
                            case 'end':
                                return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));

            function getMonitorOptions() {
                return _ref6.apply(this, arguments);
            }

            return getMonitorOptions;
        }()
    }, {
        key: 'changeProcessed',
        value: function () {
            var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                var params, res;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                            case 0:
                                params = {
                                    yuJingId: this.from.id
                                };
                                _context6.next = 3;
                                return api.changeProcessed(params);

                            case 3:
                                res = _context6.sent;

                                this.handleMessage(res);

                            case 5:
                            case 'end':
                                return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));

            function changeProcessed() {
                return _ref7.apply(this, arguments);
            }

            return changeProcessed;
        }()
    }, {
        key: 'handleMessage',
        value: function handleMessage(res) {
            if (res.code == 200) {
                wx.showToast({
                    title: res.msg,
                    icon: 'success',
                    duration: 1500
                });
                setTimeout(function () {
                    wx.navigateBack({
                        delta: 1
                    });
                }, 1000);
            } else {
                wx.showToast({
                    title: res.msg,
                    icon: 'none',
                    duration: 1500
                });
            }
        }
    }, {
        key: 'onShareAppMessage',
        value: function onShareAppMessage() {
            var that = this;
            // 预警详情只读时分享
            if (this.readOnly) {
                var shareInfo = {};
                var image = this.uploadList[0];
                // [预警级别]+预警监测区域
                shareInfo.title = '[' + this.yuJingLevelName + '] ' + this.monitorAreaName;
                shareInfo.path = '/pages/reportInfo?id=' + this.from.id;
                shareInfo.imageUrl = image ? image : '/assets/images/logoShare.png';
                return shareInfo;
            } else {
                return _wepy2.default.$instance.sharePage();
            }
        }
    }]);

    return ReportInfo;
}(_wepy2.default.page);


Page(require('./../npm/wepy/lib/wepy.js').default.$createPage(ReportInfo , 'pages/reportInfo'));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlcG9ydEluZm8uanMiXSwibmFtZXMiOlsiYXBpIiwiUmVwb3J0SW5mbyIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJkYXRhIiwibmF2VGl0bGUiLCJzdGF0dXNCYXJIZWlnaHQiLCJ3ZXB5IiwiJGluc3RhbmNlIiwiZ2xvYmFsRGF0YSIsInJlYWRPbmx5IiwidXBsb2FkTGlzdCIsInNpdGVJbmRleCIsInNpdGVSYW5nZSIsImxldmVsSW5kZXgiLCJsZXZlbFJhbmdlIiwicmVsYXRpb25Vc2VyIiwic2VsZWN0VXNlcklkcyIsInN5c0ZpbGVJZHMiLCJoYXNNb25pdG9yRGV2aWNlIiwiZnJvbSIsImRlc2NyaXB0aW9uIiwiY3JlYXRlVGltZSIsIkRhdGUiLCJmb3JtYXQiLCJtb25pdG9yQWRkcmVzcyIsIm1vbml0b3JBcmVhTmFtZSIsInl1SmluZ0xldmVsTmFtZSIsInR5cGUiLCJzdGF0dXMiLCJpc0JpbmREZXB0IiwiaXNDcmVhdGUiLCJhcmVhSWQiLCJtb25pdG9yQXJlYUlkIiwiaXNBZG1pbiIsIm1ldGhvZHMiLCJ0b01vbml0b3JEZXZpY2UiLCJ3eCIsIm5hdmlnYXRlVG8iLCJ1cmwiLCJ0b1JlcG9ydExvZ3MiLCJpZCIsInN1Ym1pdEZyb20iLCJ5dUppbmdMZXZlbElkIiwic2hvd1RvYXN0IiwidGl0bGUiLCJpY29uIiwiZHVyYXRpb24iLCJwYXJhbXMiLCJyZWxhdGlvblVzZXJJZHMiLCJ5dUppbmdJZCIsInVwZGF0ZVdhcm5pbmciLCJKU09OIiwic3RyaW5naWZ5IiwiYWRkV2FybmluZyIsImNoYW5nZVN0YXR1cyIsImNoYW5nZVByb2Nlc3NlZCIsInRvRGVwdFVzZXIiLCJpbnB1dERlc2MiLCJlIiwiZGV0YWlsIiwidmFsdWUiLCJvbkNoYW5nZVVzZXIiLCJ1c2VySW5kZXgiLCJvbkNoYW5nZVNpdGUiLCJvbkNoYW5nZUxldmVsIiwib25DbGlja0xlZnQiLCJwYWdlcyIsImdldEN1cnJlbnRQYWdlcyIsImxlbmd0aCIsInN3aXRjaFRhYiIsIm5hdmlnYXRlQmFjayIsImRlbHRhIiwidXBsb2FkSW1hZ2UiLCJ0aGF0IiwiY2hvb3NlSW1hZ2UiLCJjb3VudCIsInNpemVUeXBlIiwic291cmNlVHlwZSIsInN1Y2Nlc3MiLCJyZXMiLCJ0ZW1wRmlsZVBhdGhzIiwiY29uY2F0IiwiaGFuZGxlVXBsb2FkQXBpIiwiJGFwcGx5IiwicmVtb3ZlSW1hZ2UiLCJzcGxpY2UiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImluZGV4Iiwic2hvd0ltYWdlIiwicHJldmlld0ltYWdlIiwidXJscyIsImN1cnJlbnQiLCJvcHRpb25zIiwic2hhcmVJbWFnZSIsImdldFN0b3JhZ2VTeW5jIiwibmlja05hbWUiLCJ1c2VySWQiLCJwdXNoIiwiUHJvbWlzZSIsImFsbCIsImdldE1vbml0b3JPcHRpb25zIiwiZ2V0V2Fybk9wdGlvbnMiLCJ0aGVuIiwiZ2V0V2FybmluZ0luZm8iLCJnZXRTaXRlSW5kZXhCeUlkIiwiY3VyclBhZ2UiLCJmb3JFYWNoIiwiaXRlbSIsImZpbmRBcmVhSWQiLCJmaW5kSW5kZXgiLCJmaWxlcyIsInRva2VuIiwibGluayIsImVudiIsInVwbG9hZEZpbGUiLCJmaWxlUGF0aCIsIm5hbWUiLCJoZWFkZXIiLCJmb3JtRGF0YSIsInJlc3VsdCIsInBhcnNlIiwiY29kZSIsImZpbGVJZCIsInl1amluZyIsInN5c0ZpbGVzIiwicmVsYXRpb25Vc2VycyIsIm1vbml0b3JBcmVhIiwieXVKaW5nTGV2ZWwiLCJjcmVhdGVCeUlkIiwiZGVjb2RlTmlja05hbWUiLCJmaWxlVXJsIiwiYWRkcmVzcyIsImZpcnN0Um9sZU5hbWUiLCJrZXkiLCJoYW5kbGVNZXNzYWdlIiwibXNnIiwic2V0VGltZW91dCIsIndhcm5PcHRpb25zIiwibW9uaXRvckFyZWFPcHRpb25zIiwidW5zaGlmdCIsInVuZGVmaW5lZCIsInNoYXJlSW5mbyIsImltYWdlIiwicGF0aCIsImltYWdlVXJsIiwic2hhcmVQYWdlIiwicGFnZSJd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cUgsMEJBQVVFLElBQVYsR0FBaUIsMEJBQTBCLEtBQUs3SCxJQUFMLENBQVVxQixFQUFyRDtBQUNBc0csMEJBQVVHLFFBQVYsR0FBcUJGLFFBQVFBLEtBQVIsR0FBZ0IsOEJBQXJDO0FBQ0EsdUJBQU9ELFNBQVA7QUFDSCxhQVJELE1BUU87QUFDSCx1QkFBT3hJLGVBQUtDLFNBQUwsQ0FBZTJJLFNBQWYsRUFBUDtBQUNIO0FBQ0o7Ozs7RUFuWW1DNUksZUFBSzZJLEk7O2tCQUF4QnBKLFUiLCJmaWxlIjoicmVwb3J0SW5mby5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gICAgaW1wb3J0IHdlcHkgZnJvbSAnd2VweSdcclxuICAgIGltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50J1xyXG4gICAgaW1wb3J0ICogYXMgYXBpIGZyb20gJy4uL2FwaS9hcGknXHJcbiAgICBpbXBvcnQgZGVjb2RlIGZyb20gJy4uL3V0aWxzL3V0aWwuanMnO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwb3J0SW5mbyBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgICAgICAgY29uZmlnID0ge1xyXG4gICAgICAgICAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn6aKE6K2m5LiK5oqlJyxcclxuICAgICAgICAgICAgdXNpbmdDb21wb25lbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBcInZhbi1uYXYtYmFyXCI6IFwiLi4vY29tcG9uZW50cy92YW50L25hdi1iYXIvaW5kZXhcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkYXRhID0ge1xyXG4gICAgICAgICAgICBuYXZUaXRsZTogJ+mihOitpuS4iuaKpScsXHJcbiAgICAgICAgICAgIHN0YXR1c0JhckhlaWdodDogd2VweS4kaW5zdGFuY2UuZ2xvYmFsRGF0YS5zdGF0dXNCYXJIZWlnaHQsXHJcbiAgICAgICAgICAgIHJlYWRPbmx5OiBmYWxzZSwgLy8gdHJ1ZeS4uuWPquivuywg5bCP56iL5bqP5bGV56S65Li65Y+q6K+755qE5qih5byP77yM5ZCm5YiZ6aKE6K2m6K+m5oOF6aG15Y+v5Lul6L+b6KGM5pu05paw5pON5L2cXHJcbiAgICAgICAgICAgIHVwbG9hZExpc3Q6IFtdLFxyXG4gICAgICAgICAgICBzaXRlSW5kZXg6IDAsXHJcbiAgICAgICAgICAgIHNpdGVSYW5nZTogW10sXHJcbiAgICAgICAgICAgIGxldmVsSW5kZXg6IDAsXHJcbiAgICAgICAgICAgIGxldmVsUmFuZ2U6IFtdLFxyXG4gICAgICAgICAgICByZWxhdGlvblVzZXI6IFtdLCAgLy8g55u45YWz5Lq65ZGYXHJcbiAgICAgICAgICAgIHNlbGVjdFVzZXJJZHM6IFtdLCAvLyDnm7jlhbPkurrlkZhpZFxyXG4gICAgICAgICAgICBzeXNGaWxlSWRzOiBbXSwgLy8g5Zu+54mH5LiK5LygaWRcclxuICAgICAgICAgICAgaGFzTW9uaXRvckRldmljZTogZmFsc2UsICAvLyDmmK/lkKbmnInnm5Hmjqforr7lpIdcclxuICAgICAgICAgICAgZnJvbToge1xyXG4gICAgICAgICAgICAgICAgZGVzY3JpcHRpb246ICcnLFxyXG4gICAgICAgICAgICAgICAgY3JlYXRlVGltZTogbW9tZW50KG5ldyBEYXRlKCkpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbTpzcycpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG1vbml0b3JBZGRyZXNzOiAnJyxcclxuICAgICAgICAgICAgbW9uaXRvckFyZWFOYW1lOiAnJyxcclxuICAgICAgICAgICAgeXVKaW5nTGV2ZWxOYW1lOiAnJyxcclxuICAgICAgICAgICAgdHlwZTogbnVsbCxcclxuICAgICAgICAgICAgc3RhdHVzOiAnJyxcclxuICAgICAgICAgICAgaXNCaW5kRGVwdDogZmFsc2UsXHJcbiAgICAgICAgICAgIGlzQ3JlYXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgYXJlYUlkOiAnJyxcclxuICAgICAgICAgICAgbW9uaXRvckFyZWFJZDogJycsXHJcbiAgICAgICAgICAgIGlzQWRtaW46IGZhbHNlLCAgLy8g5piv5ZCm5pys5Y2V5L2N566h55CG5ZGYXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvbkxvYWQob3B0aW9ucykge1xyXG4gICAgICAgICAgICB3ZXB5LiRpbnN0YW5jZS5zaGFyZUltYWdlKClcclxuXHJcbiAgICAgICAgICAgIC8vIOWIneWni+WMluaXtu+8jOm7mOiupOebuOWFs+S6uuWRmOS4uuiHquW3sVxyXG4gICAgICAgICAgICBjb25zdCB7bmlja05hbWUsIHVzZXJJZH0gPSB3eC5nZXRTdG9yYWdlU3luYygnZ2xvYmFsRGF0YScpO1xyXG4gICAgICAgICAgICB0aGlzLnJlbGF0aW9uVXNlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIG5pY2tOYW1lOiBkZWNvZGUobmlja05hbWUpLFxyXG4gICAgICAgICAgICAgICAgdXNlcklkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0VXNlcklkcy5wdXNoKHVzZXJJZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5pZCB8fCBvcHRpb25zLmFyZWFJZCkge1xyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW3RoaXMuZ2V0TW9uaXRvck9wdGlvbnMoKSwgdGhpcy5nZXRXYXJuT3B0aW9ucygpXSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W6aKE6K2m6K+m5oOFXHJcbiAgICAgICAgICAgICAgICAgICAgaWYob3B0aW9ucy5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5hdlRpdGxlID0gJ+mihOitpuivpuaDhSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZnJvbS5pZCA9IG9wdGlvbnMuaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0V2FybmluZ0luZm8ob3B0aW9ucy5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOS7jummlumhteS4iuaKpemihOitpu+8jOmAieS4reebuOW6lOeahOWcsOeCuVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9wdGlvbnMuYXJlYUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXJlYUlkID0gb3B0aW9ucy5hcmVhSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2l0ZUluZGV4QnlJZCh0aGlzLmFyZWFJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldE1vbml0b3JPcHRpb25zKClcclxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0V2Fybk9wdGlvbnMoKVxyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9uU2hvdygpIHtcclxuICAgICAgICAgICAgLy8g5piv5ZCm57uR5a6a6YOo6ZeoXHJcbiAgICAgICAgICAgIHRoaXMuaXNCaW5kRGVwdCA9IHd4LmdldFN0b3JhZ2VTeW5jKCdpc0JpbmREZXB0Jyk7XHJcblxyXG4gICAgICAgICAgICAvLyDojrflj5blg4/lvZPliY3pobXpnaLmiYDkvKDpgJLnmoTlj4LmlbBcclxuICAgICAgICAgICAgbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKClcclxuICAgICAgICAgICAgbGV0IGN1cnJQYWdlID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV1cclxuICAgICAgICAgICAgaWYgKGN1cnJQYWdlLnJlbGF0aW9uVXNlciAmJiBjdXJyUGFnZS5yZWxhdGlvblVzZXIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8g5omA6YCJ55u45YWz5Lq65ZGY5L+h5oGvXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGF0aW9uVXNlciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgLy8g5omA6YCJ55u45YWz5Lq65ZGYaWRcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VXNlcklkcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVsYXRpb25Vc2VyID0gY3VyclBhZ2UucmVsYXRpb25Vc2VyO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVsYXRpb25Vc2VyLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDpgInkuK3nmoTnm7jlhbPkurrlkZhpZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0VXNlcklkcy5wdXNoKGl0ZW0udXNlcklkKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWV0aG9kcyA9IHtcclxuICAgICAgICAgICAgdG9Nb25pdG9yRGV2aWNlKCkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5oYXNNb25pdG9yRGV2aWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9tb25pdG9yRGV2aWNlP2FyZWFJZD0nICsgdGhpcy5tb25pdG9yQXJlYUlkXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9SZXBvcnRMb2dzKCkge1xyXG4gICAgICAgICAgICAgICAgd3gubmF2aWdhdGVUbyh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsOiAnL3BhZ2VzL3BhY2thZ2UvcmVwb3J0TG9ncz95dWppbmdJZD0nICsgdGhpcy5mcm9tLmlkXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzdWJtaXRGcm9tKCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vbml0b3JBcmVhSWQgPSB0aGlzLnNpdGVSYW5nZVt0aGlzLnNpdGVJbmRleF0ubW9uaXRvckFyZWFJZDtcclxuICAgICAgICAgICAgICAgIGxldCB5dUppbmdMZXZlbElkID0gdGhpcy5sZXZlbFJhbmdlW3RoaXMubGV2ZWxJbmRleF0ueXVKaW5nTGV2ZWxJZDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgZGVzY3JpcHRpb24sIGNyZWF0ZVRpbWUgfSA9IHRoaXMuZnJvbTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIW1vbml0b3JBcmVhSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zaG93VG9hc3Qoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+ivt+mAieaLqeWcsOeCuScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBtb25pdG9yQXJlYUlkOiBtb25pdG9yQXJlYUlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHl1SmluZ0xldmVsSWQ6IHl1SmluZ0xldmVsSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlVGltZTogY3JlYXRlVGltZSxcclxuICAgICAgICAgICAgICAgICAgICByZWxhdGlvblVzZXJJZHM6IHRoaXMuc2VsZWN0VXNlcklkcyxcclxuICAgICAgICAgICAgICAgICAgICBzeXNGaWxlSWRzOiB0aGlzLnN5c0ZpbGVJZHNcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDkv67mlLlcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZnJvbS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtcy55dUppbmdJZCA9IHRoaXMuZnJvbS5pZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZVdhcm5pbmcoSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyAgIC8vIOaWsOWinlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkV2FybmluZyhKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g5pS55Y+Y54q25oCBXHJcbiAgICAgICAgICAgIGNoYW5nZVN0YXR1cygpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VQcm9jZXNzZWQoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdG9EZXB0VXNlcigpIHtcclxuICAgICAgICAgICAgICAgIHd4Lm5hdmlnYXRlVG8oe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogJy9wYWdlcy9wYWNrYWdlL2RlcHRVc2VyJ1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGlucHV0RGVzYyhlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyb20uZGVzY3JpcHRpb24gPSBlLmRldGFpbC52YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25DaGFuZ2VVc2VyKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlckluZGV4ID0gZS5kZXRhaWwudmFsdWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ2hhbmdlU2l0ZShlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpdGVJbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNoYW5nZUxldmVsKGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxJbmRleCA9IGUuZGV0YWlsLnZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvbkNsaWNrTGVmdCgpIHtcclxuICAgICAgICAgICAgbGV0IHBhZ2VzID0gZ2V0Q3VycmVudFBhZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFnZXMubGVuZ3RoID09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB3eC5zd2l0Y2hUYWIoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6ICcvcGFnZXMvbWVudTEnXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdXBsb2FkSW1hZ2UoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcblxyXG4gICAgICAgICAgICAgICAgd3guY2hvb3NlSW1hZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiAzLCBcclxuICAgICAgICAgICAgICAgICAgICBzaXplVHlwZTogWydvcmlnaW5hbCcsICdjb21wcmVzc2VkJ10sIC8vIOWPr+S7peaMh+WumuaYr+WOn+Wbvui/mOaYr+WOi+e8qeWbvu+8jOm7mOiupOS6jOiAhemDveaciVxyXG4gICAgICAgICAgICAgICAgICAgIHNvdXJjZVR5cGU6IFsnYWxidW0nLCAnY2FtZXJhJ10sIC8vIOWPr+S7peaMh+Wumuadpea6kOaYr+ebuOWGjOi/mOaYr+ebuOacuu+8jOm7mOiupOS6jOiAhemDveaciVxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGVtcEZpbGVQYXRocyA9IHJlcy50ZW1wRmlsZVBhdGhzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdXBsb2FkTGlzdCA9IHRoYXQudXBsb2FkTGlzdC5jb25jYXQodGVtcEZpbGVQYXRocyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHVwbG9hZExpc3QubGVuZ3RoID4gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ+acgOWkmuS4ieW8oCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ25vbmUnLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LnVwbG9hZExpc3QgPSB1cGxvYWRMaXN0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGF0LmhhbmRsZVVwbG9hZEFwaShyZXMudGVtcEZpbGVQYXRocyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVtb3ZlSW1hZ2UoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zeXNGaWxlSWRzLnNwbGljZShlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZExpc3Quc3BsaWNlKGUuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4LCAxKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd0ltYWdlKGUpIHtcclxuICAgICAgICAgICAgICAgIHd4LnByZXZpZXdJbWFnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsczogdGhpcy51cGxvYWRMaXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnQ6IHRoaXMudXBsb2FkTGlzdFtlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleF1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDmoLnmja5pZOiOt+WPluS4i+aLieahhmluZGV4XHJcbiAgICAgICAgZ2V0U2l0ZUluZGV4QnlJZChhcmVhSWQpIHtcclxuICAgICAgICAgICAgbGV0IGZpbmRBcmVhSWQgPSB0aGlzLnNpdGVSYW5nZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLm1vbml0b3JBcmVhSWQgPT0gYXJlYUlkKTtcclxuICAgICAgICAgICAgdGhpcy5zaXRlSW5kZXggPSAoZmluZEFyZWFJZCA+IC0xKSA/IGZpbmRBcmVhSWQgOiAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGFuZGxlVXBsb2FkQXBpKGZpbGVzKSB7XHJcbiAgICAgICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICAgICAgbGV0IHRva2VuID0gd3guZ2V0U3RvcmFnZVN5bmMoJ3Rva2VuJyk7XHJcbiAgICAgICAgICAgIGxldCBsaW5rID0gJyc7XHJcbiAgICAgICAgICAgIGlmICh3ZXB5LiRpbnN0YW5jZS5nbG9iYWxEYXRhLmVudiA9PSAncHJvZCcpIHtcclxuICAgICAgICAgICAgICAgIGxpbmsgPSAnaHR0cHM6Ly90Y2ItYXBpLnRlbmNlbnRjbG91ZGFwaS5jb20nO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGluayA9ICdodHRwczovL2JlaWRvdS5zaWduYWxmaXJlLm5ldC5jbic7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZpbGVzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgIHd4LnVwbG9hZEZpbGUoe1xyXG4gICAgICAgICAgICAgICAgICAgIHVybDogbGluayArICcveXVqaW5nL3VwbG9hZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZVBhdGg6IGl0ZW0sXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJmaWxlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwibXVsdGlwYXJ0L2Zvcm0tZGF0YVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkF1dGhvcml6YXRpb25cIjogdG9rZW5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHQgPSBKU09OLnBhcnNlKGRhdGEuZGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5zeXNGaWxlSWRzLnB1c2gocmVzdWx0LmZpbGVJZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGFzeW5jIGdldFdhcm5pbmdJbmZvKGlkKSB7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuZ2V0V2FybmluZ0luZm8oe3l1SmluZ0lkOiBpZH0pO1xyXG4gICAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYWRPbmx5ID0gcmVzLnJlYWRPbmx5O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBjcmVhdGVUaW1lLCB5dUppbmdMZXZlbElkLCBtb25pdG9yQXJlYUlkLCBzeXNGaWxlcywgc3lzRmlsZUlkcywgXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb24sIHJlbGF0aW9uVXNlcnMsIHJlbGF0aW9uVXNlcklkcywgbW9uaXRvckFyZWEsIHl1SmluZ0xldmVsLCBcclxuICAgICAgICAgICAgICAgICAgICB0eXBlLCBzdGF0dXMsIGNyZWF0ZUJ5SWQsIGhhc01vbml0b3JEZXZpY2UgfSA9IHJlcy55dWppbmc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyb20uY3JlYXRlVGltZSA9IGNyZWF0ZVRpbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyb20uZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxJbmRleCA9IHRoaXMubGV2ZWxSYW5nZS5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLnl1SmluZ0xldmVsSWQgPT0geXVKaW5nTGV2ZWxJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb25pdG9yQXJlYUlkID0gbW9uaXRvckFyZWFJZDtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldFNpdGVJbmRleEJ5SWQobW9uaXRvckFyZWFJZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWxhdGlvblVzZXIgPSB0aGlzLmRlY29kZU5pY2tOYW1lKHJlbGF0aW9uVXNlcnMsICduaWNrTmFtZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RVc2VySWRzID0gcmVsYXRpb25Vc2VySWRzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRMaXN0ID0gW107XHJcbiAgICAgICAgICAgICAgICBzeXNGaWxlcy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRMaXN0LnB1c2goaXRlbS5maWxlVXJsKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuc3lzRmlsZUlkcyA9IHN5c0ZpbGVJZHM7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5tb25pdG9yQWRkcmVzcyA9IG1vbml0b3JBcmVhLmFkZHJlc3M7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbml0b3JBcmVhTmFtZSA9IG1vbml0b3JBcmVhLm1vbml0b3JBcmVhTmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMueXVKaW5nTGV2ZWxOYW1lID0geXVKaW5nTGV2ZWwueXVKaW5nTGV2ZWxOYW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhdHVzID0gc3RhdHVzO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBnbG9iYWxEYXRhID0gd3guZ2V0U3RvcmFnZVN5bmMoJ2dsb2JhbERhdGEnKTtcclxuICAgICAgICAgICAgICAgIC8vIOWmguaenOW9k+WJjemihOitpuivpuaDheeUqOaIt2lk5Yib5bu655qELOS4jueUqOaIt2lk5LiA6Ie077yM5YiZ5Y+v5pu05pS554q25oCBXHJcbiAgICAgICAgICAgICAgICBpZiAoY3JlYXRlQnlJZCA9PSAoZ2xvYmFsRGF0YSAmJiBnbG9iYWxEYXRhLnVzZXJJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzQ3JlYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBZG1pbiA9IGdsb2JhbERhdGEuZmlyc3RSb2xlTmFtZSA9PSAn5Y2V5L2N566h55CG5ZGYJyA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhc01vbml0b3JEZXZpY2UgPSBoYXNNb25pdG9yRGV2aWNlID4gMCA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOebuOWFs+S6uuWRmOaYteensOe8lueggVxyXG4gICAgICAgIGRlY29kZU5pY2tOYW1lKGRhdGEsIGtleSkge1xyXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihpdGVtW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtW2tleV0gPSBkZWNvZGUoaXRlbVtrZXldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyB1cGRhdGVXYXJuaW5nKHBhcmFtcykge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLnVwZGF0ZVdhcm5pbmcocGFyYW1zKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVNZXNzYWdlKHJlcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyBhZGRXYXJuaW5nKHBhcmFtcykge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gYXdhaXQgYXBpLmFkZFdhcm5pbmcocGFyYW1zKTtcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzLm1zZyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzLm1zZyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyBnZXRXYXJuT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS53YXJuT3B0aW9ucygpXHJcbiAgICAgICAgICAgIGlmKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbFJhbmdlID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyBnZXRNb25pdG9yT3B0aW9ucygpIHtcclxuICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IGFwaS5tb25pdG9yQXJlYU9wdGlvbnMoKTtcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpdGVSYW5nZSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXRlUmFuZ2UudW5zaGlmdCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9uaXRvckFyZWFOYW1lOiAn6K+36YCJ5oupJyxcclxuICAgICAgICAgICAgICAgICAgICBtb25pdG9yQXJlYUlkOiB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHBseSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhc3luYyBjaGFuZ2VQcm9jZXNzZWQoKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICB5dUppbmdJZDogdGhpcy5mcm9tLmlkLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCBhcGkuY2hhbmdlUHJvY2Vzc2VkKHBhcmFtcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlTWVzc2FnZShyZXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaGFuZGxlTWVzc2FnZShyZXMpIHtcclxuICAgICAgICAgICAgaWYocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzLm1zZyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnc3VjY2VzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVsdGE6IDFcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgd3guc2hvd1RvYXN0KHtcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcmVzLm1zZyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbm9uZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb246IDE1MDBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBcclxuICAgICAgICBvblNoYXJlQXBwTWVzc2FnZSgpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAvLyDpooTorabor6bmg4Xlj6ror7vml7bliIbkuqtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVhZE9ubHkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBzaGFyZUluZm8gPSB7fVxyXG4gICAgICAgICAgICAgICAgbGV0IGltYWdlID0gdGhpcy51cGxvYWRMaXN0WzBdO1xyXG4gICAgICAgICAgICAgICAgLy8gW+mihOitpue6p+WIq10r6aKE6K2m55uR5rWL5Yy65Z+fXHJcbiAgICAgICAgICAgICAgICBzaGFyZUluZm8udGl0bGUgPSBgWyR7dGhpcy55dUppbmdMZXZlbE5hbWV9XSAke3RoaXMubW9uaXRvckFyZWFOYW1lfWBcclxuICAgICAgICAgICAgICAgIHNoYXJlSW5mby5wYXRoID0gJy9wYWdlcy9yZXBvcnRJbmZvP2lkPScgKyB0aGlzLmZyb20uaWQ7XHJcbiAgICAgICAgICAgICAgICBzaGFyZUluZm8uaW1hZ2VVcmwgPSBpbWFnZSA/IGltYWdlIDogJy9hc3NldHMvaW1hZ2VzL2xvZ29TaGFyZS5wbmcnXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2hhcmVJbmZvO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHdlcHkuJGluc3RhbmNlLnNoYXJlUGFnZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4iXX0=