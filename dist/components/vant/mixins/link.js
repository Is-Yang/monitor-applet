"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.link = Behavior({
    properties: {
        url: String,
        linkType: {
            type: String,
            value: 'navigateTo'
        }
    },
    methods: {
        jumpLink: function jumpLink(urlKey) {
            if (urlKey === void 0) {
                urlKey = 'url';
            }
            var url = this.data[urlKey];
            if (url) {
                wx[this.data.linkType]({ url: url });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpbmsuanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwidmFsdWUiLCJsaW5rIiwiQmVoYXZpb3IiLCJwcm9wZXJ0aWVzIiwidXJsIiwiU3RyaW5nIiwibGlua1R5cGUiLCJ0eXBlIiwibWV0aG9kcyIsImp1bXBMaW5rIiwidXJsS2V5IiwiZGF0YSIsInd4Il0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsT0FBT0MsY0FBUCxDQUFzQkMsT0FBdEIsRUFBK0IsWUFBL0IsRUFBNkMsRUFBRUMsT0FBTyxJQUFULEVBQTdDO0FBQ0FELFFBQVFFLElBQVIsR0FBZUMsU0FBUztBQUNwQkMsZ0JBQVk7QUFDUkMsYUFBS0MsTUFERztBQUVSQyxrQkFBVTtBQUNOQyxrQkFBTUYsTUFEQTtBQUVOTCxtQkFBTztBQUZEO0FBRkYsS0FEUTtBQVFwQlEsYUFBUztBQUNMQyxrQkFBVSxrQkFBVUMsTUFBVixFQUFrQjtBQUN4QixnQkFBSUEsV0FBVyxLQUFLLENBQXBCLEVBQXVCO0FBQUVBLHlCQUFTLEtBQVQ7QUFBaUI7QUFDMUMsZ0JBQUlOLE1BQU0sS0FBS08sSUFBTCxDQUFVRCxNQUFWLENBQVY7QUFDQSxnQkFBSU4sR0FBSixFQUFTO0FBQ0xRLG1CQUFHLEtBQUtELElBQUwsQ0FBVUwsUUFBYixFQUF1QixFQUFFRixLQUFLQSxHQUFQLEVBQXZCO0FBQ0g7QUFDSjtBQVBJO0FBUlcsQ0FBVCxDQUFmIiwiZmlsZSI6ImxpbmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMubGluayA9IEJlaGF2aW9yKHtcbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIHVybDogU3RyaW5nLFxuICAgICAgICBsaW5rVHlwZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgdmFsdWU6ICduYXZpZ2F0ZVRvJ1xuICAgICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGp1bXBMaW5rOiBmdW5jdGlvbiAodXJsS2V5KSB7XG4gICAgICAgICAgICBpZiAodXJsS2V5ID09PSB2b2lkIDApIHsgdXJsS2V5ID0gJ3VybCc7IH1cbiAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLmRhdGFbdXJsS2V5XTtcbiAgICAgICAgICAgIGlmICh1cmwpIHtcbiAgICAgICAgICAgICAgICB3eFt0aGlzLmRhdGEubGlua1R5cGVdKHsgdXJsOiB1cmwgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcbiJdfQ==