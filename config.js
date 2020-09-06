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
		')': 'CloseParenthesis',
		'number': 'Number'
	},
	operationsDictionary: {
		'+': (a,b)=>(a+b),
		'-': (a,b)=>(a-b),
		'/': (a,b)=>(a/b),
		'*': (a,b)=>(a*b),
		'?': (a)=>(-a)
	}
};

module.exports = CONFIG;