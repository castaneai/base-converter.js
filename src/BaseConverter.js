// Generated by CoffeeScript 1.3.1
var BaseConverter;

BaseConverter = (function() {

  BaseConverter.name = 'BaseConverter';

  function BaseConverter() {}

  BaseConverter.getRangedChars = function(beginChar, endChar) {
    var asc;
    return (function() {
      var _i, _ref, _ref1, _results;
      _results = [];
      for (asc = _i = _ref = beginChar.charCodeAt(0), _ref1 = endChar.charCodeAt(0); _ref <= _ref1 ? _i <= _ref1 : _i >= _ref1; asc = _ref <= _ref1 ? ++_i : --_i) {
        _results.push(String.fromCharCode(asc));
      }
      return _results;
    })();
  };

  BaseConverter.getBaseString = function(n) {
    var range;
    return ((function() {
      var _i, _len, _ref, _results;
      _ref = [['0', '9'], ['A', 'Z'], ['a', 'z']];
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        range = _ref[_i];
        _results.push(BaseConverter.getRangedChars(range[0], range[1]).join(''));
      }
      return _results;
    })()).join('').slice(0, n);
  };

  BaseConverter.intToBaseN = function(int, n) {
    var chars, result;
    chars = BaseConverter.getBaseString(n);
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
  };

  BaseConverter.baseNToInt = function(base, n) {
    var char, chars, i, position, result, _i, _len, _ref;
    chars = BaseConverter.getBaseString(n);
    if (chars.length < n) {
      return -1;
    }
    result = 0;
    _ref = base.split('').reverse();
    for (i = _i = 0, _len = _ref.length; _i < _len; i = ++_i) {
      char = _ref[i];
      position = chars.indexOf(char);
      if (position < 0) {
        return -1;
      }
      result = result + position * Math.pow(n, i);
    }
    return result;
  };

  return BaseConverter;

})();
