const Token = require('./token');

/**
 * @class {MultiplicationToken}
 */
module.exports = class MultiplicationToken extends Token {
	constructor(value) {
		super('operator', 2, 'left');
		this._value = value;
	}
};