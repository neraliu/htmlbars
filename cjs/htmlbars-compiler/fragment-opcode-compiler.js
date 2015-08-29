exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _templateVisitor = require("./template-visitor");

var _templateVisitor2 = _interopRequireDefault(_templateVisitor);

var _utils = require("./utils");

var _htmlbarsUtil = require("../htmlbars-util");

var _htmlbarsUtilArrayUtils = require("../htmlbars-util/array-utils");

function FragmentOpcodeCompiler() {
  this.opcodes = [];
}

exports.default = FragmentOpcodeCompiler;

FragmentOpcodeCompiler.prototype.compile = function (ast) {
  var templateVisitor = new _templateVisitor2.default();
  templateVisitor.visit(ast);

  _utils.processOpcodes(this, templateVisitor.actions);

  return this.opcodes;
};

FragmentOpcodeCompiler.prototype.opcode = function (type, params) {
  this.opcodes.push([type, params]);
};

FragmentOpcodeCompiler.prototype.text = function (text) {
  this.opcode('createText', [text.chars]);
  this.opcode('appendChild');
};

FragmentOpcodeCompiler.prototype.comment = function (comment) {
  this.opcode('createComment', [comment.value]);
  this.opcode('appendChild');
};

FragmentOpcodeCompiler.prototype.openElement = function (element) {
  this.opcode('createElement', [element.tag]);
  _htmlbarsUtilArrayUtils.forEach(element.attributes, this.attribute, this);
};

FragmentOpcodeCompiler.prototype.closeElement = function () {
  this.opcode('appendChild');
};

FragmentOpcodeCompiler.prototype.startProgram = function () {
  this.opcodes.length = 0;
  this.opcode('createFragment');
};

FragmentOpcodeCompiler.prototype.endProgram = function () {
  this.opcode('returnNode');
};

FragmentOpcodeCompiler.prototype.mustache = function () {
  this.pushMorphPlaceholderNode();
};

FragmentOpcodeCompiler.prototype.component = function () {
  this.pushMorphPlaceholderNode();
};

FragmentOpcodeCompiler.prototype.block = function () {
  this.pushMorphPlaceholderNode();
};

FragmentOpcodeCompiler.prototype.pushMorphPlaceholderNode = function () {
  this.opcode('createComment', [""]);
  this.opcode('appendChild');
};

FragmentOpcodeCompiler.prototype.attribute = function (attr) {
  if (attr.value.type === 'TextNode') {
    var namespace = _htmlbarsUtil.getAttrNamespace(attr.name);
    this.opcode('setAttribute', [attr.name, attr.value.chars, namespace]);
  }
};

FragmentOpcodeCompiler.prototype.setNamespace = function (namespace) {
  this.opcode('setNamespace', [namespace]);
};
module.exports = exports.default;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0bWxiYXJzLWNvbXBpbGVyL2ZyYWdtZW50LW9wY29kZS1jb21waWxlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OytCQUE0QixvQkFBb0I7Ozs7cUJBQ2pCLFNBQVM7OzRCQUNQLGtCQUFrQjs7c0NBQzNCLDhCQUE4Qjs7QUFFdEQsU0FBUyxzQkFBc0IsR0FBRztBQUNoQyxNQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztDQUNuQjs7a0JBRWMsc0JBQXNCOztBQUVyQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVMsR0FBRyxFQUFFO0FBQ3ZELE1BQUksZUFBZSxHQUFHLCtCQUFxQixDQUFDO0FBQzVDLGlCQUFlLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDOztBQUUzQix3QkFBZSxJQUFJLEVBQUUsZUFBZSxDQUFDLE9BQU8sQ0FBQyxDQUFDOztBQUU5QyxTQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7Q0FDckIsQ0FBQzs7QUFFRixzQkFBc0IsQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFVBQVMsSUFBSSxFQUFFLE1BQU0sRUFBRTtBQUMvRCxNQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO0NBQ25DLENBQUM7O0FBRUYsc0JBQXNCLENBQUMsU0FBUyxDQUFDLElBQUksR0FBRyxVQUFTLElBQUksRUFBRTtBQUNyRCxNQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO0FBQ3hDLE1BQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7Q0FDNUIsQ0FBQzs7QUFFRixzQkFBc0IsQ0FBQyxTQUFTLENBQUMsT0FBTyxHQUFHLFVBQVMsT0FBTyxFQUFFO0FBQzNELE1BQUksQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7QUFDOUMsTUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztDQUM1QixDQUFDOztBQUVGLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxXQUFXLEdBQUcsVUFBUyxPQUFPLEVBQUU7QUFDL0QsTUFBSSxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUM1QyxrQ0FBUSxPQUFPLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Q0FDbkQsQ0FBQzs7QUFFRixzQkFBc0IsQ0FBQyxTQUFTLENBQUMsWUFBWSxHQUFHLFlBQVc7QUFDekQsTUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztDQUM1QixDQUFDOztBQUVGLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxZQUFZLEdBQUcsWUFBVztBQUN6RCxNQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7QUFDeEIsTUFBSSxDQUFDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0NBQy9CLENBQUM7O0FBRUYsc0JBQXNCLENBQUMsU0FBUyxDQUFDLFVBQVUsR0FBRyxZQUFXO0FBQ3ZELE1BQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7Q0FDM0IsQ0FBQzs7QUFFRixzQkFBc0IsQ0FBQyxTQUFTLENBQUMsUUFBUSxHQUFHLFlBQVc7QUFDckQsTUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7Q0FDakMsQ0FBQzs7QUFFRixzQkFBc0IsQ0FBQyxTQUFTLENBQUMsU0FBUyxHQUFHLFlBQVc7QUFDdEQsTUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7Q0FDakMsQ0FBQzs7QUFFRixzQkFBc0IsQ0FBQyxTQUFTLENBQUMsS0FBSyxHQUFHLFlBQVc7QUFDbEQsTUFBSSxDQUFDLHdCQUF3QixFQUFFLENBQUM7Q0FDakMsQ0FBQzs7QUFFRixzQkFBc0IsQ0FBQyxTQUFTLENBQUMsd0JBQXdCLEdBQUcsWUFBVztBQUNyRSxNQUFJLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7QUFDbkMsTUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztDQUM1QixDQUFDOztBQUVGLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxTQUFTLEdBQUcsVUFBUyxJQUFJLEVBQUU7QUFDMUQsTUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7QUFDbEMsUUFBSSxTQUFTLEdBQUcsK0JBQWlCLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUM1QyxRQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQztHQUN2RTtDQUNGLENBQUM7O0FBRUYsc0JBQXNCLENBQUMsU0FBUyxDQUFDLFlBQVksR0FBRyxVQUFTLFNBQVMsRUFBRTtBQUNsRSxNQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Q0FDMUMsQ0FBQyIsImZpbGUiOiJodG1sYmFycy1jb21waWxlci9mcmFnbWVudC1vcGNvZGUtY29tcGlsZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVGVtcGxhdGVWaXNpdG9yIGZyb20gXCIuL3RlbXBsYXRlLXZpc2l0b3JcIjtcbmltcG9ydCB7IHByb2Nlc3NPcGNvZGVzIH0gZnJvbSBcIi4vdXRpbHNcIjtcbmltcG9ydCB7IGdldEF0dHJOYW1lc3BhY2UgfSBmcm9tIFwiLi4vaHRtbGJhcnMtdXRpbFwiO1xuaW1wb3J0IHsgZm9yRWFjaCB9IGZyb20gXCIuLi9odG1sYmFycy11dGlsL2FycmF5LXV0aWxzXCI7XG5cbmZ1bmN0aW9uIEZyYWdtZW50T3Bjb2RlQ29tcGlsZXIoKSB7XG4gIHRoaXMub3Bjb2RlcyA9IFtdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBGcmFnbWVudE9wY29kZUNvbXBpbGVyO1xuXG5GcmFnbWVudE9wY29kZUNvbXBpbGVyLnByb3RvdHlwZS5jb21waWxlID0gZnVuY3Rpb24oYXN0KSB7XG4gIHZhciB0ZW1wbGF0ZVZpc2l0b3IgPSBuZXcgVGVtcGxhdGVWaXNpdG9yKCk7XG4gIHRlbXBsYXRlVmlzaXRvci52aXNpdChhc3QpO1xuXG4gIHByb2Nlc3NPcGNvZGVzKHRoaXMsIHRlbXBsYXRlVmlzaXRvci5hY3Rpb25zKTtcblxuICByZXR1cm4gdGhpcy5vcGNvZGVzO1xufTtcblxuRnJhZ21lbnRPcGNvZGVDb21waWxlci5wcm90b3R5cGUub3Bjb2RlID0gZnVuY3Rpb24odHlwZSwgcGFyYW1zKSB7XG4gIHRoaXMub3Bjb2Rlcy5wdXNoKFt0eXBlLCBwYXJhbXNdKTtcbn07XG5cbkZyYWdtZW50T3Bjb2RlQ29tcGlsZXIucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHRoaXMub3Bjb2RlKCdjcmVhdGVUZXh0JywgW3RleHQuY2hhcnNdKTtcbiAgdGhpcy5vcGNvZGUoJ2FwcGVuZENoaWxkJyk7XG59O1xuXG5GcmFnbWVudE9wY29kZUNvbXBpbGVyLnByb3RvdHlwZS5jb21tZW50ID0gZnVuY3Rpb24oY29tbWVudCkge1xuICB0aGlzLm9wY29kZSgnY3JlYXRlQ29tbWVudCcsIFtjb21tZW50LnZhbHVlXSk7XG4gIHRoaXMub3Bjb2RlKCdhcHBlbmRDaGlsZCcpO1xufTtcblxuRnJhZ21lbnRPcGNvZGVDb21waWxlci5wcm90b3R5cGUub3BlbkVsZW1lbnQgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gIHRoaXMub3Bjb2RlKCdjcmVhdGVFbGVtZW50JywgW2VsZW1lbnQudGFnXSk7XG4gIGZvckVhY2goZWxlbWVudC5hdHRyaWJ1dGVzLCB0aGlzLmF0dHJpYnV0ZSwgdGhpcyk7XG59O1xuXG5GcmFnbWVudE9wY29kZUNvbXBpbGVyLnByb3RvdHlwZS5jbG9zZUVsZW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5vcGNvZGUoJ2FwcGVuZENoaWxkJyk7XG59O1xuXG5GcmFnbWVudE9wY29kZUNvbXBpbGVyLnByb3RvdHlwZS5zdGFydFByb2dyYW0gPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5vcGNvZGVzLmxlbmd0aCA9IDA7XG4gIHRoaXMub3Bjb2RlKCdjcmVhdGVGcmFnbWVudCcpO1xufTtcblxuRnJhZ21lbnRPcGNvZGVDb21waWxlci5wcm90b3R5cGUuZW5kUHJvZ3JhbSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm9wY29kZSgncmV0dXJuTm9kZScpO1xufTtcblxuRnJhZ21lbnRPcGNvZGVDb21waWxlci5wcm90b3R5cGUubXVzdGFjaGUgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wdXNoTW9ycGhQbGFjZWhvbGRlck5vZGUoKTtcbn07XG5cbkZyYWdtZW50T3Bjb2RlQ29tcGlsZXIucHJvdG90eXBlLmNvbXBvbmVudCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnB1c2hNb3JwaFBsYWNlaG9sZGVyTm9kZSgpO1xufTtcblxuRnJhZ21lbnRPcGNvZGVDb21waWxlci5wcm90b3R5cGUuYmxvY2sgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5wdXNoTW9ycGhQbGFjZWhvbGRlck5vZGUoKTtcbn07XG5cbkZyYWdtZW50T3Bjb2RlQ29tcGlsZXIucHJvdG90eXBlLnB1c2hNb3JwaFBsYWNlaG9sZGVyTm9kZSA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLm9wY29kZSgnY3JlYXRlQ29tbWVudCcsIFtcIlwiXSk7XG4gIHRoaXMub3Bjb2RlKCdhcHBlbmRDaGlsZCcpO1xufTtcblxuRnJhZ21lbnRPcGNvZGVDb21waWxlci5wcm90b3R5cGUuYXR0cmlidXRlID0gZnVuY3Rpb24oYXR0cikge1xuICBpZiAoYXR0ci52YWx1ZS50eXBlID09PSAnVGV4dE5vZGUnKSB7XG4gICAgdmFyIG5hbWVzcGFjZSA9IGdldEF0dHJOYW1lc3BhY2UoYXR0ci5uYW1lKTtcbiAgICB0aGlzLm9wY29kZSgnc2V0QXR0cmlidXRlJywgW2F0dHIubmFtZSwgYXR0ci52YWx1ZS5jaGFycywgbmFtZXNwYWNlXSk7XG4gIH1cbn07XG5cbkZyYWdtZW50T3Bjb2RlQ29tcGlsZXIucHJvdG90eXBlLnNldE5hbWVzcGFjZSA9IGZ1bmN0aW9uKG5hbWVzcGFjZSkge1xuICB0aGlzLm9wY29kZSgnc2V0TmFtZXNwYWNlJywgW25hbWVzcGFjZV0pO1xufTtcbiJdfQ==