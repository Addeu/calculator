const Token = require('./token');

/**
 * @class {AdditionToken}
 */
module.exports = class AdditionToken extends Token {
	constructor(value) {
		super('operator', 1, 'left');
		this._value = value;
	}
};