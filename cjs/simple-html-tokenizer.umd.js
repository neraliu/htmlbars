/* global define:false, module:false */

var _simpleHtmlTokenizer = require('./simple-html-tokenizer');

(function (root, factory) {
  if (typeof define === 'function' && define.amd) {
    define([], factory);
  } else if (typeof exports === 'object') {
    module.exports = factory();
  } else {
    root.HTML5Tokenizer = factory();
  }
})(this, function () {
  return {
    EventedTokenizer: _simpleHtmlTokenizer.EventedTokenizer,
    Tokenizer: _simpleHtmlTokenizer.Tokenizer,
    tokenize: _simpleHtmlTokenizer.tokenize,
    Generator: _simpleHtmlTokenizer.Generator,
    generate: _simpleHtmlTokenizer.generate,
    StartTag: _simpleHtmlTokenizer.StartTag,
    EndTag: _simpleHtmlTokenizer.EndTag,
    Chars: _simpleHtmlTokenizer.Chars,
    Comment: _simpleHtmlTokenizer.Comment
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbXBsZS1odG1sLXRva2VuaXplci51bWQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7bUNBR08seUJBQXlCOztBQUVoQyxBQUFDLENBQUEsVUFBVSxJQUFJLEVBQUUsT0FBTyxFQUFFO0FBQ3hCLE1BQUksT0FBTyxNQUFNLEtBQUssVUFBVSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUU7QUFDOUMsVUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztHQUNyQixNQUFNLElBQUksT0FBTyxPQUFPLEtBQUssUUFBUSxFQUFFO0FBQ3RDLFVBQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUFFLENBQUM7R0FDNUIsTUFBTTtBQUNMLFFBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxFQUFFLENBQUM7R0FDakM7Q0FDRixDQUFBLENBQUMsSUFBSSxFQUFFLFlBQVk7QUFDbEIsU0FBTztBQUNMLG9CQUFnQix1Q0FBa0I7QUFDbEMsYUFBUyxnQ0FBVztBQUNwQixZQUFRLCtCQUFVO0FBQ2xCLGFBQVMsZ0NBQVc7QUFDcEIsWUFBUSwrQkFBVTtBQUNsQixZQUFRLCtCQUFVO0FBQ2xCLFVBQU0sNkJBQVE7QUFDZCxTQUFLLDRCQUFPO0FBQ1osV0FBTyw4QkFBUztHQUNqQixDQUFDO0NBQ0gsQ0FBQyxDQUFFIiwiZmlsZSI6InNpbXBsZS1odG1sLXRva2VuaXplci51bWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBnbG9iYWwgZGVmaW5lOmZhbHNlLCBtb2R1bGU6ZmFsc2UgKi9cbmltcG9ydCB7XG4gIEV2ZW50ZWRUb2tlbml6ZXIsIFRva2VuaXplciwgdG9rZW5pemUsIEdlbmVyYXRvciwgZ2VuZXJhdGUsIFN0YXJ0VGFnLCBFbmRUYWcsIENoYXJzLCBDb21tZW50XG59IGZyb20gJy4vc2ltcGxlLWh0bWwtdG9rZW5pemVyJztcblxuKGZ1bmN0aW9uIChyb290LCBmYWN0b3J5KSB7XG4gIGlmICh0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpIHtcbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jykge1xuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIHJvb3QuSFRNTDVUb2tlbml6ZXIgPSBmYWN0b3J5KCk7XG4gIH1cbn0odGhpcywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4ge1xuICAgIEV2ZW50ZWRUb2tlbml6ZXI6IEV2ZW50ZWRUb2tlbml6ZXIsXG4gICAgVG9rZW5pemVyOiBUb2tlbml6ZXIsXG4gICAgdG9rZW5pemU6IHRva2VuaXplLFxuICAgIEdlbmVyYXRvcjogR2VuZXJhdG9yLFxuICAgIGdlbmVyYXRlOiBnZW5lcmF0ZSxcbiAgICBTdGFydFRhZzogU3RhcnRUYWcsXG4gICAgRW5kVGFnOiBFbmRUYWcsXG4gICAgQ2hhcnM6IENoYXJzLFxuICAgIENvbW1lbnQ6IENvbW1lbnRcbiAgfTtcbn0pKTtcbiJdfQ==