describe 'BaseConverterは', ->

	it '0が渡された場合0を返す', ->
		expect(BaseConverter.intToBaseN(0, 62)).toEqual('0')
		expect(BaseConverter.baseNToInt('0', 62)).toEqual(0)

	it '10進数の正の整数をN進数に変換できる', ->
		expect(BaseConverter.intToBaseN(10, 2)).toEqual('1010')
		expect(BaseConverter.intToBaseN(16, 16)).toEqual('10')
		expect(BaseConverter.intToBaseN(36, 36)).toEqual('10')
		expect(BaseConverter.intToBaseN(62, 62)).toEqual('10')

	it 'N進数の文字列を10進数の正の整数に変換できる', ->
		expect(BaseConverter.baseNToInt('1010', 2)).toEqual(10)
