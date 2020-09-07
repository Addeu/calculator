/**
 * @class {Stack}
 */
module.exports = class Stack {
	constructor() {
		this.items = [];
	}

	/**
	 * @public
	 * @returns {number}
	 */
	length() {
		return this.items.length;
	}

	/**
	 * @public
	 * @param {item} item
	 */
	push(item) {
		this.items.push(item);
	}

	/**
	 * @public
	 * @returns {item}
	 */
	pop() {
		return this.items.pop();
	}

	/**
	 * @public
	 * @returns {boolean}
	 */
	isEmpty() {
		return !this.items.length;
	}

	/**
	 * @public
	 * @returns {item}
	 */
	last() {
		return this.items[this.items.length-1];
	}

	/**
	 * @public
	 * @param {function} callback
	 * @returns {Array}
	 */
	map(callback) {
		return this.items.map(callback);
	}
};