base-converter.js
===================

概要 Summary
--------------
10進数の整数とn進数の文字列を相互変換する.

Converting between 10 base integer and N base string each other.

[0-9A-Za-z]の文字を使用可能であるから、62進数まで変換可能.

characters: [0-9A-Za-z] are available, can be max 62 base string.

使用例 Examples
----------------
```javascript
/* 10進数の10を2進数に変換する */
BaseConverter.intToBaseN(10, 2);

/* 2進数の'1010'を10進数の整数に変換する */
BaseConverter.baseNToInt('1010', 2);
```
