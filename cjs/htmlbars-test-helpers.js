exports.__esModule = true;
exports.equalInnerHTML = equalInnerHTML;
exports.equalHTML = equalHTML;
exports.equalTokens = equalTokens;
exports.normalizeInnerHTML = normalizeInnerHTML;
exports.isCheckedInputHTML = isCheckedInputHTML;
exports.getTextContent = getTextContent;

var _simpleHtmlTokenizer = require("../simple-html-tokenizer");

var _htmlbarsUtilArrayUtils = require("../htmlbars-util/array-utils");

function equalInnerHTML(fragment, html) {
  var actualHTML = normalizeInnerHTML(fragment.innerHTML);
  QUnit.push(actualHTML === html, actualHTML, html);
}

function equalHTML(node, html) {
  var fragment;
  if (!node.nodeType && node.length) {
    fragment = document.createDocumentFragment();
    while (node[0]) {
      fragment.appendChild(node[0]);
    }
  } else {
    fragment = node;
  }

  var div = document.createElement("div");
  div.appendChild(fragment.cloneNode(true));

  equalInnerHTML(div, html);
}

function generateTokens(fragmentOrHtml) {
  var div = document.createElement("div");
  if (typeof fragmentOrHtml === 'string') {
    div.innerHTML = fragmentOrHtml;
  } else {
    div.appendChild(fragmentOrHtml.cloneNode(true));
  }

  return { tokens: _simpleHtmlTokenizer.tokenize(div.innerHTML), html: div.innerHTML };
}

function equalTokens(fragment, html, message) {
  if (fragment.fragment) {
    fragment = fragment.fragment;
  }
  if (html.fragment) {
    html = html.fragment;
  }

  var fragTokens = generateTokens(fragment);
  var htmlTokens = generateTokens(html);

  function normalizeTokens(token) {
    if (token.type === 'StartTag') {
      token.attributes = token.attributes.sort(function (a, b) {
        if (a[0] > b[0]) {
          return 1;
        }
        if (a[0] < b[0]) {
          return -1;
        }
        return 0;
      });
    }
  }

  _htmlbarsUtilArrayUtils.forEach(fragTokens.tokens, normalizeTokens);
  _htmlbarsUtilArrayUtils.forEach(htmlTokens.tokens, normalizeTokens);

  var msg = "Expected: " + html + "; Actual: " + fragTokens.html;

  if (message) {
    msg += " (" + message + ")";
  }

  deepEqual(fragTokens.tokens, htmlTokens.tokens, msg);
}

// detect side-effects of cloning svg elements in IE9-11
var ieSVGInnerHTML = (function () {
  if (!document.createElementNS) {
    return false;
  }
  var div = document.createElement('div');
  var node = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  div.appendChild(node);
  var clone = div.cloneNode(true);
  return clone.innerHTML === '<svg xmlns="http://www.w3.org/2000/svg" />';
})();

function normalizeInnerHTML(actualHTML) {
  if (ieSVGInnerHTML) {
    // Replace `<svg xmlns="http://www.w3.org/2000/svg" height="50%" />` with `<svg height="50%"></svg>`, etc.
    // drop namespace attribute
    actualHTML = actualHTML.replace(/ xmlns="[^"]+"/, '');
    // replace self-closing elements
    actualHTML = actualHTML.replace(/<([^ >]+) [^\/>]*\/>/gi, function (tag, tagName) {
      return tag.slice(0, tag.length - 3) + '></' + tagName + '>';
    });
  }

  return actualHTML;
}

// detect weird IE8 checked element string
var checkedInput = document.createElement('input');
checkedInput.setAttribute('checked', 'checked');
var checkedInputString = checkedInput.outerHTML;

function isCheckedInputHTML(element) {
  equal(element.outerHTML, checkedInputString);
}

// check which property has the node's text content
var textProperty = document.createElement('div').textContent === undefined ? 'innerText' : 'textContent';

function getTextContent(el) {
  // textNode
  if (el.nodeType === 3) {
    return el.nodeValue;
  } else {
    return el[textProperty];
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImh0bWxiYXJzLXRlc3QtaGVscGVycy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OzttQ0FBeUIsMEJBQTBCOztzQ0FDM0IsOEJBQThCOztBQUUvQyxTQUFTLGNBQWMsQ0FBQyxRQUFRLEVBQUUsSUFBSSxFQUFFO0FBQzdDLE1BQUksVUFBVSxHQUFHLGtCQUFrQixDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN4RCxPQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsS0FBSyxJQUFJLEVBQUUsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO0NBQ25EOztBQUVNLFNBQVMsU0FBUyxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUU7QUFDcEMsTUFBSSxRQUFRLENBQUM7QUFDYixNQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsTUFBTSxFQUFFO0FBQ2pDLFlBQVEsR0FBRyxRQUFRLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztBQUM3QyxXQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRTtBQUNkLGNBQVEsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FDL0I7R0FDRixNQUFNO0FBQ0wsWUFBUSxHQUFHLElBQUksQ0FBQztHQUNqQjs7QUFFRCxNQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ3hDLEtBQUcsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOztBQUUxQyxnQkFBYyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQztDQUMzQjs7QUFFRCxTQUFTLGNBQWMsQ0FBQyxjQUFjLEVBQUU7QUFDdEMsTUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUN4QyxNQUFJLE9BQU8sY0FBYyxLQUFLLFFBQVEsRUFBRTtBQUN0QyxPQUFHLENBQUMsU0FB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TUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxPQUFPLEdBQUcsR0FBRyxDQUFDO0tBQzdELENBQUMsQ0FBQztHQUNKOztBQUVELFNBQU8sVUFBVSxDQUFDO0NBQ25COzs7QUFHRCxJQUFJLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ25ELFlBQVksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO0FBQ2hELElBQUksa0JBQWtCLEdBQUcsWUFBWSxDQUFDLFNBQVMsQ0FBQzs7QUFDekMsU0FBUyxrQkFBa0IsQ0FBQyxPQUFPLEVBQUU7QUFDMUMsT0FBSyxDQUFDLE9BQU8sQ0FBQyxTQUFTLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztDQUM5Qzs7O0FBR0QsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEtBQUssU0FBUyxHQUFHLFdBQVcsR0FBRyxhQUFhLENBQUM7O0FBQ2xHLFNBQVMsY0FBYyxDQUFDLEVBQUUsRUFBRTs7QUFFakMsTUFBSSxFQUFFLENBQUMsUUFBUSxLQUFLLENBQUMsRUFBRTtBQUNyQixXQUFPLEVBQUUsQ0FBQyxTQUFTLENBQUM7R0FDckIsTUFBTTtBQUNMLFdBQU8sRUFBRSxDQUFDLFlBQVksQ0FBQyxDQUFDO0dBQ3pCO0NBQ0YiLCJmaWxlIjoiaHRtbGJhcnMtdGVzdC1oZWxwZXJzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdG9rZW5pemUgfSBmcm9tIFwiLi4vc2ltcGxlLWh0bWwtdG9rZW5pemVyXCI7XG5pbXBvcnQgeyBmb3JFYWNoIH0gZnJvbSBcIi4uL2h0bWxiYXJzLXV0aWwvYXJyYXktdXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsSW5uZXJIVE1MKGZyYWdtZW50LCBodG1sKSB7XG4gIHZhciBhY3R1YWxIVE1MID0gbm9ybWFsaXplSW5uZXJIVE1MKGZyYWdtZW50LmlubmVySFRNTCk7XG4gIFFVbml0LnB1c2goYWN0dWFsSFRNTCA9PT0gaHRtbCwgYWN0dWFsSFRNTCwgaHRtbCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBlcXVhbEhUTUwobm9kZSwgaHRtbCkge1xuICB2YXIgZnJhZ21lbnQ7XG4gIGlmICghbm9kZS5ub2RlVHlwZSAmJiBub2RlLmxlbmd0aCkge1xuICAgIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuICAgIHdoaWxlIChub2RlWzBdKSB7XG4gICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChub2RlWzBdKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZnJhZ21lbnQgPSBub2RlO1xuICB9XG5cbiAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGRpdi5hcHBlbmRDaGlsZChmcmFnbWVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuXG4gIGVxdWFsSW5uZXJIVE1MKGRpdiwgaHRtbCk7XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlVG9rZW5zKGZyYWdtZW50T3JIdG1sKSB7XG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBpZiAodHlwZW9mIGZyYWdtZW50T3JIdG1sID09PSAnc3RyaW5nJykge1xuICAgIGRpdi5pbm5lckhUTUwgPSBmcmFnbWVudE9ySHRtbDtcbiAgfSBlbHNlIHtcbiAgICBkaXYuYXBwZW5kQ2hpbGQoZnJhZ21lbnRPckh0bWwuY2xvbmVOb2RlKHRydWUpKTtcbiAgfVxuXG4gIHJldHVybiB7IHRva2VuczogdG9rZW5pemUoZGl2LmlubmVySFRNTCksIGh0bWw6IGRpdi5pbm5lckhUTUwgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVxdWFsVG9rZW5zKGZyYWdtZW50LCBodG1sLCBtZXNzYWdlKSB7XG4gIGlmIChmcmFnbWVudC5mcmFnbWVudCkgeyBmcmFnbWVudCA9IGZyYWdtZW50LmZyYWdtZW50OyB9XG4gIGlmIChodG1sLmZyYWdtZW50KSB7IGh0bWwgPSBodG1sLmZyYWdtZW50OyB9XG5cbiAgdmFyIGZyYWdUb2tlbnMgPSBnZW5lcmF0ZVRva2VucyhmcmFnbWVudCk7XG4gIHZhciBodG1sVG9rZW5zID0gZ2VuZXJhdGVUb2tlbnMoaHRtbCk7XG5cbiAgZnVuY3Rpb24gbm9ybWFsaXplVG9rZW5zKHRva2VuKSB7XG4gICAgaWYgKHRva2VuLnR5cGUgPT09ICdTdGFydFRhZycpIHtcbiAgICAgIHRva2VuLmF0dHJpYnV0ZXMgPSB0b2tlbi5hdHRyaWJ1dGVzLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICBpZiAoYVswXSA+IGJbMF0pIHsgcmV0dXJuIDE7IH1cbiAgICAgICAgaWYgKGFbMF0gPCBiWzBdKSB7IHJldHVybiAtMTsgfVxuICAgICAgICByZXR1cm4gMDsgICAgXG4gICAgICB9KTsgICAgXG4gICAgfSAgICBcbiAgfSAgICBcbiAgIFxuICBmb3JFYWNoKGZyYWdUb2tlbnMudG9rZW5zLCBub3JtYWxpemVUb2tlbnMpOyAgIFxuICBmb3JFYWNoKGh0bWxUb2tlbnMudG9rZW5zLCBub3JtYWxpemVUb2tlbnMpOyAgIFxuXG4gIHZhciBtc2cgPSBcIkV4cGVjdGVkOiBcIiArIGh0bWwgKyBcIjsgQWN0dWFsOiBcIiArIGZyYWdUb2tlbnMuaHRtbDtcblxuICBpZiAobWVzc2FnZSkgeyBtc2cgKz0gXCIgKFwiICsgbWVzc2FnZSArIFwiKVwiOyB9XG5cbiAgZGVlcEVxdWFsKGZyYWdUb2tlbnMudG9rZW5zLCBodG1sVG9rZW5zLnRva2VucywgbXNnKTtcbn1cblxuLy8gZGV0ZWN0IHNpZGUtZWZmZWN0cyBvZiBjbG9uaW5nIHN2ZyBlbGVtZW50cyBpbiBJRTktMTFcbnZhciBpZVNWR0lubmVySFRNTCA9IChmdW5jdGlvbiAoKSB7XG4gIGlmICghZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xuICBkaXYuYXBwZW5kQ2hpbGQobm9kZSk7XG4gIHZhciBjbG9uZSA9IGRpdi5jbG9uZU5vZGUodHJ1ZSk7XG4gIHJldHVybiBjbG9uZS5pbm5lckhUTUwgPT09ICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAvPic7XG59KSgpO1xuXG5leHBvcnQgZnVuY3Rpb24gbm9ybWFsaXplSW5uZXJIVE1MKGFjdHVhbEhUTUwpIHtcbiAgaWYgKGllU1ZHSW5uZXJIVE1MKSB7XG4gICAgLy8gUmVwbGFjZSBgPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgaGVpZ2h0PVwiNTAlXCIgLz5gIHdpdGggYDxzdmcgaGVpZ2h0PVwiNTAlXCI+PC9zdmc+YCwgZXRjLlxuICAgIC8vIGRyb3AgbmFtZXNwYWNlIGF0dHJpYnV0ZVxuICAgIGFjdHVhbEhUTUwgPSBhY3R1YWxIVE1MLnJlcGxhY2UoLyB4bWxucz1cIlteXCJdK1wiLywgJycpO1xuICAgIC8vIHJlcGxhY2Ugc2VsZi1jbG9zaW5nIGVsZW1lbnRzXG4gICAgYWN0dWFsSFRNTCA9IGFjdHVhbEhUTUwucmVwbGFjZSgvPChbXiA+XSspIFteXFwvPl0qXFwvPi9naSwgZnVuY3Rpb24odGFnLCB0YWdOYW1lKSB7XG4gICAgICByZXR1cm4gdGFnLnNsaWNlKDAsIHRhZy5sZW5ndGggLSAzKSArICc+PC8nICsgdGFnTmFtZSArICc+JztcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiBhY3R1YWxIVE1MO1xufVxuXG4vLyBkZXRlY3Qgd2VpcmQgSUU4IGNoZWNrZWQgZWxlbWVudCBzdHJpbmdcbnZhciBjaGVja2VkSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuY2hlY2tlZElucHV0LnNldEF0dHJpYnV0ZSgnY2hlY2tlZCcsICdjaGVja2VkJyk7XG52YXIgY2hlY2tlZElucHV0U3RyaW5nID0gY2hlY2tlZElucHV0Lm91dGVySFRNTDtcbmV4cG9ydCBmdW5jdGlvbiBpc0NoZWNrZWRJbnB1dEhUTUwoZWxlbWVudCkge1xuICBlcXVhbChlbGVtZW50Lm91dGVySFRNTCwgY2hlY2tlZElucHV0U3RyaW5nKTtcbn1cblxuLy8gY2hlY2sgd2hpY2ggcHJvcGVydHkgaGFzIHRoZSBub2RlJ3MgdGV4dCBjb250ZW50XG52YXIgdGV4dFByb3BlcnR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JykudGV4dENvbnRlbnQgPT09IHVuZGVmaW5lZCA/ICdpbm5lclRleHQnIDogJ3RleHRDb250ZW50JztcbmV4cG9ydCBmdW5jdGlvbiBnZXRUZXh0Q29udGVudChlbCkge1xuICAvLyB0ZXh0Tm9kZVxuICBpZiAoZWwubm9kZVR5cGUgPT09IDMpIHtcbiAgICByZXR1cm4gZWwubm9kZVZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBlbFt0ZXh0UHJvcGVydHldO1xuICB9XG59XG4iXX0=