const Token = require('./token');

/**
 * @class {SubtractionToken}
 */
module.exports = class SubtractionToken extends Token {
	constructor(value) {
		super('operator', 1, 'left');
		this._value = value;
	}
};