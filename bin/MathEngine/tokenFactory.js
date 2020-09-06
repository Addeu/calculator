/**
 * @class {TokenFactory}
 */

module.exports = class TokenFactory {
	constructor(dictionary) {
		this.dictionary = dictionary;
	}

	/**
	 * @param type
	 * @returns {String}
	 */
	getTokenClass(type) {
		return this.dictionary[type] + 'Token';
	}

	/**
	 * @public
	 * @param {String} type
	 * @param {String} value
	 * @returns {Token}
	 */
	create(type, value) {
		let Token = this.getTokenClass(type);
		if (Token) {
			return new Token(value);
		}
		else {
			throw Error('No such token class');
		}
	}
}