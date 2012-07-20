class BaseConverter
	@getRangedChars: (beginChar, endChar) ->
		return (String.fromCharCode(asc) for asc in [beginChar.charCodeAt(0)..endChar.charCodeAt(0)])

	@getBaseString: (n) ->
		return (BaseConverter.getRangedChars(range[0], range[1]).join('') for range in [['0', '9'], ['A', 'Z'], ['a', 'z']]).join('')[0...n]

	@intToBaseN: (int, n) ->
		chars = BaseConverter.getBaseString n
		result = ''
		while 0 < int
			result = chars.charAt(Math.floor(int % n)) + result
			int = Math.floor(int / n)
		return if result == '' then '0' else result

	@baseNToInt: (base, n) ->
		chars = BaseConverter.getBaseString n
		return -1 if chars.length < n
		result = 0
		for char, i in base.split('').reverse()
			position = chars.indexOf char
			return -1 if position < 0
			result = result + position * Math.pow n, i
		return result
