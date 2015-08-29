exports.__esModule = true;
exports.clear = clear;
exports.insertBefore = insertBefore;
// inclusive of both nodes

function clear(parentNode, firstNode, lastNode) {
  if (!parentNode) {
    return;
  }

  var node = firstNode;
  var nextNode;
  do {
    nextNode = node.nextSibling;
    parentNode.removeChild(node);
    if (node === lastNode) {
      break;
    }
    node = nextNode;
  } while (node);
}

function insertBefore(parentNode, firstNode, lastNode, refNode) {
  var node = firstNode;
  var nextNode;
  do {
    nextNode = node.nextSibling;
    parentNode.insertBefore(node, refNode);
    if (node === lastNode) {
      break;
    }
    node = nextNode;
  } while (node);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vcnBoLXJhbmdlL3V0aWxzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ08sU0FBUyxLQUFLLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUU7QUFDckQsTUFBSSxDQUFDLFVBQVUsRUFBRTtBQUFFLFdBQU87R0FBRTs7QUFFNUIsTUFBSSxJQUFJLEdBQUcsU0FBUyxDQUFDO0FBQ3JCLE1BQUksUUFBUSxDQUFDO0FBQ2IsS0FBRztBQUNELFlBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO0FBQzVCLGNBQVUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDN0IsUUFBSSxJQUFJLEtBQUssUUFBUSxFQUFFO0FBQ3JCLFlBQU07S0FDUDtBQUNELFFBQUksR0FBRyxRQUFRLENBQUM7R0FDakIsUUFBUSxJQUFJLEVBQUU7Q0FDaEI7O0FBRU0sU0FBUyxZQUFZLENBQUMsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFO0FBQ3JFLE1BQUksSUFBSSxHQUFHLFNBQVMsQ0FBQztBQUNyQixNQUFJLFFBQVEsQ0FBQztBQUNiLEtBQUc7QUFDRCxZQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztBQUM1QixjQUFVLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQztBQUN2QyxRQUFJLElBQUksS0FBSyxRQUFRLEVBQUU7QUFDckIsWUFBTTtLQUNQO0FBQ0QsUUFBSSxHQUFHLFFBQVEsQ0FBQztHQUNqQixRQUFRLElBQUksRUFBRTtDQUNoQiIsImZpbGUiOiJtb3JwaC1yYW5nZS91dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGluY2x1c2l2ZSBvZiBib3RoIG5vZGVzXG5leHBvcnQgZnVuY3Rpb24gY2xlYXIocGFyZW50Tm9kZSwgZmlyc3ROb2RlLCBsYXN0Tm9kZSkge1xuICBpZiAoIXBhcmVudE5vZGUpIHsgcmV0dXJuOyB9XG5cbiAgdmFyIG5vZGUgPSBmaXJzdE5vZGU7XG4gIHZhciBuZXh0Tm9kZTtcbiAgZG8ge1xuICAgIG5leHROb2RlID0gbm9kZS5uZXh0U2libGluZztcbiAgICBwYXJlbnROb2RlLnJlbW92ZUNoaWxkKG5vZGUpO1xuICAgIGlmIChub2RlID09PSBsYXN0Tm9kZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG5vZGUgPSBuZXh0Tm9kZTtcbiAgfSB3aGlsZSAobm9kZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbnNlcnRCZWZvcmUocGFyZW50Tm9kZSwgZmlyc3ROb2RlLCBsYXN0Tm9kZSwgcmVmTm9kZSkge1xuICB2YXIgbm9kZSA9IGZpcnN0Tm9kZTtcbiAgdmFyIG5leHROb2RlO1xuICBkbyB7XG4gICAgbmV4dE5vZGUgPSBub2RlLm5leHRTaWJsaW5nO1xuICAgIHBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5vZGUsIHJlZk5vZGUpO1xuICAgIGlmIChub2RlID09PSBsYXN0Tm9kZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIG5vZGUgPSBuZXh0Tm9kZTtcbiAgfSB3aGlsZSAobm9kZSk7XG59XG4iXX0=