const Token = require('./token');

/**
 * @class {CloseParenthesisToken}
 */
module.exports = class CloseParenthesisToken extends Token {
	constructor(value) {
		super('parenthesis');
		this.value(value);
	}
};