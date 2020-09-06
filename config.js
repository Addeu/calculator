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