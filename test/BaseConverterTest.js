// Generated by CoffeeScript 1.3.1

describe('BaseConverterは', function() {
  it('0が渡された場合0を返す', function() {
    expect(BaseConverter.intToBaseN(0, 62)).toEqual('0');
    return expect(BaseConverter.baseNToInt('0', 62)).toEqual(0);
  });
  it('10進数の正の整数をN進数に変換できる', function() {
    expect(BaseConverter.intToBaseN(10, 2)).toEqual('1010');
    expect(BaseConverter.intToBaseN(16, 16)).toEqual('10');
    expect(BaseConverter.intToBaseN(36, 36)).toEqual('10');
    return expect(BaseConverter.intToBaseN(62, 62)).toEqual('10');
  });
  return it('N進数の文字列を10進数の正の整数に変換できる', function() {
    return expect(BaseConverter.baseNToInt('1010', 2)).toEqual(10);
  });
});