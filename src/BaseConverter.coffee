class BaseConverter
	@getRangedChars: (beginChar, endChar) ->
		return (String.fromCharCode(asc) for asc in [beginChar.charCodeAt(0)..endChar.charCodeAt(0)])

	@intToBaseN: (int, n) ->
		chars = (BaseConverter.getRangedChars(range[0], range[1]).join('') for range in [['0', '9'], ['A', 'Z'], ['a', 'z']]).join('')[0...n]
		result = ''
		while 0 < int
			result = chars.charAt(Math.floor(int % n)) + result
			int = Math.floor(int / n)
		return if result == '' then '0' else result
