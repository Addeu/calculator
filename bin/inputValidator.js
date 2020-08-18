const CONFIG = require('../config');

module.exports = class InputValidator {
	constructor() {
		this._prohibitedChars = CONFIG.prohibitedChars;
	}

	isInputValid(expression) {

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

	_hasProhibitedChars(string) {
		let bRet = false;

		for (let i = 0; i < this._prohibitedChars.length; ++i) {
			if (string.indexOf(this._prohibitedChars[i]) !== -1) {
				bRet = true;
			}
		}

		return bRet;
	}

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

	_hasLetters(string) {
		let regExp = /[a-z]|[а-я]/gi;
		return !!string.match(regExp)
	}

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
};