const Token = require('./token');

/**
 * @class {NumberToken}
 */
module.exports = class NumberToken extends Token {
	constructor(value) {
		super('operator');
		this.value(value);
	}
};