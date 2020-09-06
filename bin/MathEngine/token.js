/**
 * @class {Token}
 */
module.exports = class Token {
	constructor(type, precedence, associativity) {
		this.type = type;
		this.precedence = precedence;
		this.associativity = associativity;
		this.value = null;
	}
};