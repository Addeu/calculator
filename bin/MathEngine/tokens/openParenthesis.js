const Token = require('./token');

/**
 * @class {OpenParenthesisToken}
 */
module.exports = class OpenParenthesisToken extends Token {
	constructor(value) {
		super('parenthesis');
		this.value(value);
	}
};