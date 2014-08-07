base-converter.js
===================

10進数の整数とn進数の文字列を相互変換する.[0-9A-Za-z]の文字を使用可能であるから、62進数まで変換可能.

使用例
----------------

```javascript
/* 10進数の10を2進数に変換する */
BaseConverter.intToBaseN(10, 2);

/* 2進数の'1010'を10進数の整数に変換する */
BaseConverter.baseNToInt('1010', 2);
```