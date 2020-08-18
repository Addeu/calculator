const mathEngine = require('mathjs');
const Validator = require('./inputValidator');

module.exports = class Calculator {
	constructor() {
		this._mathEngine = mathEngine;
		this._validator = new Validator();
	}

	calculate(expression) {
		let preformatted = this._preformatExpression(expression);

		if (this._validator.isInputValid(preformatted)) {
			return this._mathEngine.evaluate(preformatted);
		}
	}

	_preformatExpression(string) {
		return string.replace(/\s/g, '');
	}
};
