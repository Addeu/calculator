/**
 * @class {Tokenizer}
 */
module.exports = class Tokenizer {
	constructor(factory) {
		this.factory = factory;
	}

	/**
	 * @public
	 * @param {String} exp
	 * @returns {Array<Token>}
	 */
	buildTokenSet(exp) {
		let tokens = [];
		let number = '';

		for (let i = 0; i<exp.length; i++) {
			if (['+', '-', '*', '/', '(', ')'].includes(exp[i])) {
				if (number) {
					tokens.push(this.factory.create('number', number));
					number = '';
				}

				if (exp[i] === '-' && (tokens.length === 0 || ((tokens.length) && ['+', '-', '*', '/', '('].includes(tokens[tokens.length - 1].getValue())))) {
					tokens.push(this.factory.create('?', '?'));
				} else {
					tokens.push(this.factory.create(exp[i], exp[i]));
				}
			}
			if (['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'].includes(exp[i])) {
				number += exp[i];
			}
		}

		if (number) {
			tokens.push(this.factory.create('number', number));
		}

		return tokens;
	}
};