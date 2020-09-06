const Token = require('./token');

/**
 * @class {OpenParenthesisToken}
 */
module.exports = class OpenParenthesisToken extends Token {
	constructor(value) {
		super('parenthesis');
		this._value = value;
	}
};