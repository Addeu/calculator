/**
 * @class {Calculator}
 */
module.exports = class Calculator {
	constructor(validator, mathEngine) {
		this._mathEngine = mathEngine;
		this._validator = validator;
	}

	/**
	 * @public
	 * @param {String} expression
	 * @returns {Number} answer
	 */
	calculate(expression) {
		let preformatted = this._preformatExpression(expression);

		if (this._validator.hasNoOperations(expression)) {
			return +expression;
		}

		if (this._validator.isInputValid(preformatted)) {
			return this._mathEngine.evaluate(preformatted);
		}
	}

	/**
	 * @param {String} string
	 * @returns {String} preformatted string
	 * @private
	 */
	_preformatExpression(string) {
		return string.replace(/\s/g, '');
	}
};
