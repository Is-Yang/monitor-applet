"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var basic_1 = require('./../mixins/basic.js');
var relationFunctions = {
    ancestor: {
        linked: function linked(parent) {
            this.parent = parent;
        },
        unlinked: function unlinked() {
            this.parent = null;
        }
    },
    descendant: {
        linked: function linked(child) {
            this.children = this.children || [];
            this.children.push(child);
        },
        unlinked: function unlinked(child) {
            this.children = (this.children || []).filter(function (it) {
                return it !== child;
            });
        }
    }
};
function mapKeys(source, target, map) {
    Object.keys(map).forEach(function (key) {
        if (source[key]) {
            target[map[key]] = source[key];
        }
    });
}
function makeRelation(options, vantOptions, relation) {
    var _a;
    var type = relation.type,
        name = relation.name,
        _linked = relation.linked,
        _unlinked = relation.unlinked,
        _linkChanged = relation.linkChanged;
    var beforeCreate = vantOptions.beforeCreate,
        destroyed = vantOptions.destroyed;
    if (type === 'descendant') {
        options.created = function () {
            beforeCreate && beforeCreate.bind(this)();
            this.children = this.children || [];
        };
        options.detached = function () {
            this.children = [];
            destroyed && destroyed.bind(this)();
        };
    }
    options.relations = Object.assign(options.relations || {}, (_a = {}, _a["../" + name + "/index"] = {
        type: type,
        linked: function linked(node) {
            relationFunctions[type].linked.bind(this)(node);
            _linked && _linked.bind(this)(node);
        },
        linkChanged: function linkChanged(node) {
            _linkChanged && _linkChanged.bind(this)(node);
        },
        unlinked: function unlinked(node) {
            relationFunctions[type].unlinked.bind(this)(node);
            _unlinked && _unlinked.bind(this)(node);
        }
    }, _a));
}
function VantComponent(vantOptions) {
    if (vantOptions === void 0) {
        vantOptions = {};
    }
    var options = {};
    mapKeys(vantOptions, options, {
        data: 'data',
        props: 'properties',
        mixins: 'behaviors',
        methods: 'methods',
        beforeCreate: 'created',
        created: 'attached',
        mounted: 'ready',
        relations: 'relations',
        destroyed: 'detached',
        classes: 'externalClasses'
    });
    var relation = vantOptions.relation;
    if (relation) {
        makeRelation(options, vantOptions, relation);
    }
    // add default externalClasses
    options.externalClasses = options.externalClasses || [];
    options.externalClasses.push('custom-class');
    // add default behaviors
    options.behaviors = options.behaviors || [];
    options.behaviors.push(basic_1.basic);
    // map field to form-field behavior
    if (vantOptions.field) {
        options.behaviors.push('wx://form-field');
    }
    // add default options
    options.options = {
        multipleSlots: true,
        addGlobalClass: true
    };
    Component(options);
}
exports.VantComponent = VantComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJ2YWx1ZSIsImJhc2ljXzEiLCJyZXF1aXJlIiwicmVsYXRpb25GdW5jdGlvbnMiLCJhbmNlc3RvciIsImxpbmtlZCIsInBhcmVudCIsInVubGlua2VkIiwiZGVzY2VuZGFudCIsImNoaWxkIiwiY2hpbGRyZW4iLCJwdXNoIiwiZmlsdGVyIiwiaXQiLCJtYXBLZXlzIiwic291cmNlIiwidGFyZ2V0IiwibWFwIiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJtYWtlUmVsYXRpb24iLCJvcHRpb25zIiwidmFudE9wdGlvbnMiLCJyZWxhdGlvbiIsIl9hIiwidHlwZSIsIm5hbWUiLCJsaW5rQ2hhbmdlZCIsImJlZm9yZUNyZWF0ZSIsImRlc3Ryb3llZCIsImNyZWF0ZWQiLCJiaW5kIiwiZGV0YWNoZWQiLCJyZWxhdGlvbnMiLCJhc3NpZ24iLCJub2RlIiwiVmFudENvbXBvbmVudCIsImRhdGEiLCJwcm9wcyIsIm1peGlucyIsIm1ldGhvZHMiLCJtb3VudGVkIiwiY2xhc3NlcyIsImV4dGVybmFsQ2xhc3NlcyIsImJlaGF2aW9ycyIsImJhc2ljIiwiZmllbGQiLCJtdWx0aXBsZVNsb3RzIiwiYWRkR2xvYmFsQ2xhc3MiLCJDb21wb25lbnQiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxPQUFPQyxjQUFQLENBQXNCQyxPQUF0QixFQUErQixZQUEvQixFQUE2QyxFQUFFQyxPQUFPLElBQVQsRUFBN0M7QUFDQSxJQUFJQyxVQUFVQyxRQUFRLGlCQUFSLENBQWQ7QUFDQSxJQUFJQyxvQkFBb0I7QUFDcEJDLGNBQVU7QUFDTkMsZ0JBQVEsZ0JBQVVDLE1BQVYsRUFBa0I7QUFDdEIsaUJBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNILFNBSEs7QUFJTkMsa0JBQVUsb0JBQVk7QUFDbEIsaUJBQUtELE1BQUwsR0FBYyxJQUFkO0FBQ0g7QUFOSyxLQURVO0FBU3BCRSxn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O0FBQUVBLHNCQUFjLEVBQWQ7QUFBbUI7QUFDakQsUUFBSUQsVUFBVSxFQUFkO0FBQ0FSLFlBQVFTLFdBQVIsRUFBcUJELE9BQXJCLEVBQThCO0FBQzFCZ0IsY0FBTSxNQURvQjtBQUUxQkMsZUFBTyxZQUZtQjtBQUcxQkMsZ0JBQVEsV0FIa0I7QUFJMUJDLGlCQUFTLFNBSmlCO0FBSzFCWixzQkFBYyxTQUxZO0FBTTFCRSxpQkFBUyxVQU5pQjtBQU8xQlcsaUJBQVMsT0FQaUI7QUFRMUJSLG1CQUFXLFdBUmU7QUFTMUJKLG1CQUFXLFVBVGU7QUFVMUJhLGlCQUFTO0FBVmlCLEtBQTlCO0FBWUEsUUFBSW5CLFdBQVdELFlBQVlDLFFBQTNCO0FBQ0EsUUFBSUEsUUFBSixFQUFjO0FBQ1ZILHFCQUFhQyxPQUFiLEVBQXNCQyxXQUF0QixFQUFtQ0MsUUFBbkM7QUFDSDtBQUNEO0FBQ0FGLFlBQVFzQixlQUFSLEdBQTBCdEIsUUFBUXNCLGVBQVIsSUFBMkIsRUFBckQ7QUFDQXRCLFlBQVFzQixlQUFSLENBQXdCakMsSUFBeEIsQ0FBNkIsY0FBN0I7QUFDQTtBQUNBVyxZQUFRdUIsU0FBUixHQUFvQnZCLFFBQVF1QixTQUFSLElBQXFCLEVBQXpDO0FBQ0F2QixZQUFRdUIsU0FBUixDQUFrQmxDLElBQWxCLENBQXVCVixRQUFRNkMsS0FBL0I7QUFDQTtBQUNBLFFBQUl2QixZQUFZd0IsS0FBaEIsRUFBdUI7QUFDbkJ6QixnQkFBUXVCLFNBQVIsQ0FBa0JsQyxJQUFsQixDQUF1QixpQkFBdkI7QUFDSDtBQUNEO0FBQ0FXLFlBQVFBLE9BQVIsR0FBa0I7QUFDZDBCLHVCQUFlLElBREQ7QUFFZEMsd0JBQWdCO0FBRkYsS0FBbEI7QUFJQUMsY0FBVTVCLE9BQVY7QUFDSDtBQUNEdkIsUUFBUXNDLGFBQVIsR0FBd0JBLGFBQXhCIiwiZmlsZSI6ImNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGJhc2ljXzEgPSByZXF1aXJlKFwiLi4vbWl4aW5zL2Jhc2ljXCIpO1xudmFyIHJlbGF0aW9uRnVuY3Rpb25zID0ge1xuICAgIGFuY2VzdG9yOiB7XG4gICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKHBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgIH0sXG4gICAgICAgIHVubGlua2VkOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgfSxcbiAgICBkZXNjZW5kYW50OiB7XG4gICAgICAgIGxpbmtlZDogZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgICAgICB0aGlzLmNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbiB8fCBbXTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4ucHVzaChjaGlsZCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVubGlua2VkOiBmdW5jdGlvbiAoY2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSAodGhpcy5jaGlsZHJlbiB8fCBbXSkuZmlsdGVyKGZ1bmN0aW9uIChpdCkgeyByZXR1cm4gaXQgIT09IGNoaWxkOyB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcbmZ1bmN0aW9uIG1hcEtleXMoc291cmNlLCB0YXJnZXQsIG1hcCkge1xuICAgIE9iamVjdC5rZXlzKG1hcCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChzb3VyY2Vba2V5XSkge1xuICAgICAgICAgICAgdGFyZ2V0W21hcFtrZXldXSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBtYWtlUmVsYXRpb24ob3B0aW9ucywgdmFudE9wdGlvbnMsIHJlbGF0aW9uKSB7XG4gICAgdmFyIF9hO1xuICAgIHZhciB0eXBlID0gcmVsYXRpb24udHlwZSwgbmFtZSA9IHJlbGF0aW9uLm5hbWUsIGxpbmtlZCA9IHJlbGF0aW9uLmxpbmtlZCwgdW5saW5rZWQgPSByZWxhdGlvbi51bmxpbmtlZCwgbGlua0NoYW5nZWQgPSByZWxhdGlvbi5saW5rQ2hhbmdlZDtcbiAgICB2YXIgYmVmb3JlQ3JlYXRlID0gdmFudE9wdGlvbnMuYmVmb3JlQ3JlYXRlLCBkZXN0cm95ZWQgPSB2YW50T3B0aW9ucy5kZXN0cm95ZWQ7XG4gICAgaWYgKHR5cGUgPT09ICdkZXNjZW5kYW50Jykge1xuICAgICAgICBvcHRpb25zLmNyZWF0ZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBiZWZvcmVDcmVhdGUgJiYgYmVmb3JlQ3JlYXRlLmJpbmQodGhpcykoKTtcbiAgICAgICAgICAgIHRoaXMuY2hpbGRyZW4gPSB0aGlzLmNoaWxkcmVuIHx8IFtdO1xuICAgICAgICB9O1xuICAgICAgICBvcHRpb25zLmRldGFjaGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IFtdO1xuICAgICAgICAgICAgZGVzdHJveWVkICYmIGRlc3Ryb3llZC5iaW5kKHRoaXMpKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIG9wdGlvbnMucmVsYXRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLnJlbGF0aW9ucyB8fCB7fSwgKF9hID0ge30sXG4gICAgICAgIF9hW1wiLi4vXCIgKyBuYW1lICsgXCIvaW5kZXhcIl0gPSB7XG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICAgICAgbGlua2VkOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJlbGF0aW9uRnVuY3Rpb25zW3R5cGVdLmxpbmtlZC5iaW5kKHRoaXMpKG5vZGUpO1xuICAgICAgICAgICAgICAgIGxpbmtlZCAmJiBsaW5rZWQuYmluZCh0aGlzKShub2RlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBsaW5rQ2hhbmdlZDogZnVuY3Rpb24gKG5vZGUpIHtcbiAgICAgICAgICAgICAgICBsaW5rQ2hhbmdlZCAmJiBsaW5rQ2hhbmdlZC5iaW5kKHRoaXMpKG5vZGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVubGlua2VkOiBmdW5jdGlvbiAobm9kZSkge1xuICAgICAgICAgICAgICAgIHJlbGF0aW9uRnVuY3Rpb25zW3R5cGVdLnVubGlua2VkLmJpbmQodGhpcykobm9kZSk7XG4gICAgICAgICAgICAgICAgdW5saW5rZWQgJiYgdW5saW5rZWQuYmluZCh0aGlzKShub2RlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIF9hKSk7XG59XG5mdW5jdGlvbiBWYW50Q29tcG9uZW50KHZhbnRPcHRpb25zKSB7XG4gICAgaWYgKHZhbnRPcHRpb25zID09PSB2b2lkIDApIHsgdmFudE9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBvcHRpb25zID0ge307XG4gICAgbWFwS2V5cyh2YW50T3B0aW9ucywgb3B0aW9ucywge1xuICAgICAgICBkYXRhOiAnZGF0YScsXG4gICAgICAgIHByb3BzOiAncHJvcGVydGllcycsXG4gICAgICAgIG1peGluczogJ2JlaGF2aW9ycycsXG4gICAgICAgIG1ldGhvZHM6ICdtZXRob2RzJyxcbiAgICAgICAgYmVmb3JlQ3JlYXRlOiAnY3JlYXRlZCcsXG4gICAgICAgIGNyZWF0ZWQ6ICdhdHRhY2hlZCcsXG4gICAgICAgIG1vdW50ZWQ6ICdyZWFkeScsXG4gICAgICAgIHJlbGF0aW9uczogJ3JlbGF0aW9ucycsXG4gICAgICAgIGRlc3Ryb3llZDogJ2RldGFjaGVkJyxcbiAgICAgICAgY2xhc3NlczogJ2V4dGVybmFsQ2xhc3NlcydcbiAgICB9KTtcbiAgICB2YXIgcmVsYXRpb24gPSB2YW50T3B0aW9ucy5yZWxhdGlvbjtcbiAgICBpZiAocmVsYXRpb24pIHtcbiAgICAgICAgbWFrZVJlbGF0aW9uKG9wdGlvbnMsIHZhbnRPcHRpb25zLCByZWxhdGlvbik7XG4gICAgfVxuICAgIC8vIGFkZCBkZWZhdWx0IGV4dGVybmFsQ2xhc3Nlc1xuICAgIG9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzID0gb3B0aW9ucy5leHRlcm5hbENsYXNzZXMgfHwgW107XG4gICAgb3B0aW9ucy5leHRlcm5hbENsYXNzZXMucHVzaCgnY3VzdG9tLWNsYXNzJyk7XG4gICAgLy8gYWRkIGRlZmF1bHQgYmVoYXZpb3JzXG4gICAgb3B0aW9ucy5iZWhhdmlvcnMgPSBvcHRpb25zLmJlaGF2aW9ycyB8fCBbXTtcbiAgICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKGJhc2ljXzEuYmFzaWMpO1xuICAgIC8vIG1hcCBmaWVsZCB0byBmb3JtLWZpZWxkIGJlaGF2aW9yXG4gICAgaWYgKHZhbnRPcHRpb25zLmZpZWxkKSB7XG4gICAgICAgIG9wdGlvbnMuYmVoYXZpb3JzLnB1c2goJ3d4Oi8vZm9ybS1maWVsZCcpO1xuICAgIH1cbiAgICAvLyBhZGQgZGVmYXVsdCBvcHRpb25zXG4gICAgb3B0aW9ucy5vcHRpb25zID0ge1xuICAgICAgICBtdWx0aXBsZVNsb3RzOiB0cnVlLFxuICAgICAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxuICAgIH07XG4gICAgQ29tcG9uZW50KG9wdGlvbnMpO1xufVxuZXhwb3J0cy5WYW50Q29tcG9uZW50ID0gVmFudENvbXBvbmVudDtcbiJdfQ==