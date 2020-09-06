const Token = require('./token');

/**
 * @class {DivisionToken}
 */
module.exports = class DivisionToken extends Token {
	constructor(value) {
		super('operator', 2, 'left');
		this.value(value);
	}
};