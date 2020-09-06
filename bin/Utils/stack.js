/**
 * @class {Stack}
 */
module.exports = class Stack {
	constructor() {
		this.tokens = [];
	}

	/**
	 * @public
	 * @returns {number}
	 */
	length() {
		return this.tokens.length;
	}

	/**
	 * @public
	 * @param {Token} token
	 */
	push(token) {
		this.tokens.push(token);
	}

	/**
	 * @public
	 * @returns {Token}
	 */
	pop() {
		return this.tokens.pop();
	}

	/**
	 * @public
	 * @returns {boolean}
	 */
	isEmpty() {
		return !this.tokens.length;
	}

	/**
	 * @public
	 * @returns {Token}
	 */
	last() {
		return this.tokens[this.tokens.length-1];
	}

	/**
	 * @public
	 * @param {function} callback
	 * @returns {Array}
	 */
	map(callback) {
		return this.tokens.map(callback);
	}
};