const  CONFIG = {
	prohibitedChars: [
		'!', '@', '#' , '$', '%', '^', '&', '_',
		'=', '`', '~' , '"', '№', ';', ':', '?',
		'\'', '<', ',', '|', '\\', '[', ']', '{', '}'
	],
	legalOperations: ['+', '-', '*', '/'],
	tokensDictionary: {
		'+': 'Addition',
		'-': 'Subtraction',
		'*': 'Multiplication',
		'/': 'Division',
		'?': 'UnaryMinus',
		'(': 'OpenParenthesis',
		')': 'CLoseParenthesis',
		'number': 'Number'
	}
};

module.exports = CONFIG;