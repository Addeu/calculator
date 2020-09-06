/**
 * @class {Token}
 */
module.exports = class Token {
	constructor(type, precedence = null, associativity = null) {
		this.type = type;
		this.precedence = precedence;
		this.associativity = associativity;
		this._value = null;
	}

	set value(value) {
		this._value = value;
	}

	get value() {
		return this._value;
	}
};