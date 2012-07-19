// Generated by CoffeeScript 1.3.1
var BaseConverter;

BaseConverter = {
  getRangedChars: function(beginChar, endChar) {
    var asc;
    return (function() {
      var _i, _ref, _ref1, _results;
      _results = [];
      for (asc = _i = _ref = beginChar.charCodeAt(0), _ref1 = endChar.charCodeAt(0); _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; asc = _ref <= _ref1 ? ++_i : --_i) {
        _results.push(String.fromCharCode(asc));
      }
      return _results;
    })();
  },
  intToBaseN: function(int, n) {
    var chars, range, result;
    chars = ((function() {
      var _i, _len, _ref, _results;
      _ref = [['0', '9'], ['A', 'Z'], ['a', 'z']];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        range = _ref[_i];
        _results.push(this.getRangedChars(range[0], range[1]).join(''));
      }
      return _results;
    }).call(this)).join('').slice(0, n);
    result = '';
    while (0 < int) {
      result = chars.charAt(Math.floor(int % n)) + result;
      int = Math.floor(int / n);
    }
    if (result === '') {
      return '0';
    } else {
      return result;
    }
  }
};