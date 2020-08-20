const CONFIG = require('../config');

/**
 * @class {InputValidator}
 */
module.exports = class InputValidator {
	constructor() {
		this._prohibitedChars = CONFIG.prohibitedChars;
	}

	/**
	 * @param {String} expression
	 * @returns {boolean}
	 * @public
	 */
	isInputValid(expression) {

		if (this._hasNoOperations(expression)) {
			return false
		}

		if (this._hasProhibitedChars(expression)) {
			return false;
		}

		if (this._isParenthesisMatching(expression)) {
			return false;
		}

		if (this._hasLetters(expression)) {
			return false;
		}

		if (this._hasDoubleOperationSigns(expression)) {
			return false;
		}

		return true;
	}

	/**
	 * @param {String} string
	 * @returns {boolean}
	 * @private
	 */
	_hasProhibitedChars(string) {
		let bRet = false;

		for (let i = 0; i < this._prohibitedChars.length; ++i) {
			if (string.indexOf(this._prohibitedChars[i]) !== -1) {
				bRet = true;
			}
		}

		return bRet;
	}

	/**
	 * @param {String} string
	 * @returns {boolean}
	 * @private
	 */
	_isParenthesisMatching (string) {
		let stack = [];
		let splitStr = string.split('');
		let open = { '(': ')'};
		let closed = { ')': true};

		for (let i = 0; i < splitStr.length; ++i) {
			if (open[splitStr[i]]) {
				stack.push(splitStr[i]);
			} else if (closed[splitStr[i]]) {
				if (open[stack.pop()] !== splitStr[i]) {
					return false;
				}
			}
		}

		return stack.length !== 0;
	}

	/**
	 * @param {String} string
	 * @returns {boolean}
	 * @private
	 */
	_hasLetters(string) {
		let regExp = /[a-z]|[а-я]/gi;
		return !!string.match(regExp)
	}

	/**
	 * @param {String} string
	 * @returns {boolean}
	 * @private
	 */
	_hasDoubleOperationSigns(string) {
		let bRet = false;
		let doubles = [/\+\+/, /\-\-/, /\*\*/, /\/\//];

		for (let i = 0; i < doubles.length; ++i) {
			if (string.match(doubles[i])) {
				bRet =  true;
			}
		}

		return bRet;
	}

	/**
	 * @param {String} string
	 * @returns {boolean}
	 * @private
	 */
	_hasNoOperations(string) {
		let absentOperations = 0;
		let operations = CONFIG.legalOperations;

		for (let i = 0; i < operations.length; ++i) {
			if (string.indexOf(operations[i]) === -1) {
				++absentOperations;
			}
		}

		return absentOperations === operations.length;
	}
};