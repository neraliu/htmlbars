exports.__esModule = true;
exports.cannotRemoveNode = cannotRemoveNode;
exports.cannotReplaceNode = cannotReplaceNode;
exports.cannotReplaceOrRemoveInKeyHandlerYet = cannotReplaceOrRemoveInKeyHandlerYet;
function TraversalError(message, node, parent, key) {
  this.name = "TraversalError";
  this.message = message;
  this.node = node;
  this.parent = parent;
  this.key = key;
}

TraversalError.prototype = Object.create(Error.prototype);
TraversalError.prototype.constructor = TraversalError;

exports.default = TraversalError;

function cannotRemoveNode(node, parent, key) {
  return new TraversalError("Cannot remove a node unless it is part of an array", node, parent, key);
}

function cannotReplaceNode(node, parent, key) {
  return new TraversalError("Cannot replace a node with multiple nodes unless it is part of an array", node, parent, key);
}

function cannotReplaceOrRemoveInKeyHandlerYet(node, key) {
  return new TraversalError("Replacing and removing in key handlers is not yet supported.", node, null, key);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0bWxiYXJzLXN5bnRheC90cmF2ZXJzYWwvZXJyb3JzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxTQUFTLGNBQWMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7QUFDbEQsTUFBSSxDQUFDLElBQUksR0FBRyxnQkFBZ0IsQ0FBQztBQUM3QixNQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUN2QixNQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixNQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztBQUNyQixNQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztDQUNoQjs7QUFFRCxjQUFjLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQzFELGNBQWMsQ0FBQyxTQUFTLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQzs7a0JBRXZDLGNBQWM7O0FBRXRCLFNBQVMsZ0JBQWdCLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUU7QUFDbEQsU0FBTyxJQUFJLGNBQWMsQ0FDdkIsb0RBQW9ELEVBQ3BELElBQUksRUFBRSxNQUFNLEVBQUUsR0FBRyxDQUNsQixDQUFDO0NBQ0g7O0FBRU0sU0FBUyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRTtBQUNuRCxTQUFPLElBQUksY0FBYyxDQUN2Qix5RUFBeUUsRUFDekUsSUFBSSxFQUFFLE1BQU0sRUFBRSxHQUFHLENBQ2xCLENBQUM7Q0FDSDs7QUFFTSxTQUFTLG9DQUFvQyxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUU7QUFDOUQsU0FBTyxJQUFJLGNBQWMsQ0FDdkIsOERBQThELEVBQzlELElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxDQUNoQixDQUFDO0NBQ0giLCJmaWxlIjoiaHRtbGJhcnMtc3ludGF4L3RyYXZlcnNhbC9lcnJvcnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBUcmF2ZXJzYWxFcnJvcihtZXNzYWdlLCBub2RlLCBwYXJlbnQsIGtleSkge1xuICB0aGlzLm5hbWUgPSBcIlRyYXZlcnNhbEVycm9yXCI7XG4gIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gIHRoaXMubm9kZSA9IG5vZGU7XG4gIHRoaXMucGFyZW50ID0gcGFyZW50O1xuICB0aGlzLmtleSA9IGtleTtcbn1cblxuVHJhdmVyc2FsRXJyb3IucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFcnJvci5wcm90b3R5cGUpO1xuVHJhdmVyc2FsRXJyb3IucHJvdG90eXBlLmNvbnN0cnVjdG9yID0gVHJhdmVyc2FsRXJyb3I7XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlcnNhbEVycm9yO1xuXG5leHBvcnQgZnVuY3Rpb24gY2Fubm90UmVtb3ZlTm9kZShub2RlLCBwYXJlbnQsIGtleSkge1xuICByZXR1cm4gbmV3IFRyYXZlcnNhbEVycm9yKFxuICAgIFwiQ2Fubm90IHJlbW92ZSBhIG5vZGUgdW5sZXNzIGl0IGlzIHBhcnQgb2YgYW4gYXJyYXlcIixcbiAgICBub2RlLCBwYXJlbnQsIGtleVxuICApO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2Fubm90UmVwbGFjZU5vZGUobm9kZSwgcGFyZW50LCBrZXkpIHtcbiAgcmV0dXJuIG5ldyBUcmF2ZXJzYWxFcnJvcihcbiAgICBcIkNhbm5vdCByZXBsYWNlIGEgbm9kZSB3aXRoIG11bHRpcGxlIG5vZGVzIHVubGVzcyBpdCBpcyBwYXJ0IG9mIGFuIGFycmF5XCIsXG4gICAgbm9kZSwgcGFyZW50LCBrZXlcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNhbm5vdFJlcGxhY2VPclJlbW92ZUluS2V5SGFuZGxlcllldChub2RlLCBrZXkpIHtcbiAgcmV0dXJuIG5ldyBUcmF2ZXJzYWxFcnJvcihcbiAgICBcIlJlcGxhY2luZyBhbmQgcmVtb3ZpbmcgaW4ga2V5IGhhbmRsZXJzIGlzIG5vdCB5ZXQgc3VwcG9ydGVkLlwiLFxuICAgIG5vZGUsIG51bGwsIGtleVxuICApO1xufVxuIl19