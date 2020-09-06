/**
 * @class {TokenFactory}
 */
const tokensRegistry = {
	'AdditionToken': require('./tokens/addition'),
	'CloseParenthesisToken': require('./tokens/closeParenthesis'),
	'OpenParenthesisToken': require('./tokens/openParenthesis'),
	'MultiplicationToken': require('./tokens/multiplication'),
	'SubtractionToken': require('./tokens/subtraction'),
	'DivisionToken': require('./tokens/division'),
	'NumberToken': require('./tokens/number'),
	'UnaryMinusToken': require('./tokens/unaryMinus')
};


module.exports = class TokenFactory {
	constructor(dictionary) {
		this.dictionary = dictionary;
		this.registry = tokensRegistry;
	}

	/**
	 * @param type
	 * @returns {String}
	 */
	getTokenClass(type) {
		return this.registry[this.dictionary[type] + 'Token'];
	}

	/**
	 * @public
	 * @param {String} type
	 * @param {String} value
	 * @returns {Token}
	 */
	create(type, value) {
		let Token = this.getTokenClass(type);
		if (Token) {
			return new Token(value);
		}
		else {
			throw Error('No such token class');
		}
	}
}