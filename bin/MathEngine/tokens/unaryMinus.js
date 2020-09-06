const Token = require('./token');

/**
 * @class {UnaryMinusToken}
 */
module.exports = class UnaryMinusToken extends Token {
	constructor(value) {
		super('operator', 100, 'left');
		this.value(value);
	}
};