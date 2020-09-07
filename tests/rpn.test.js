const mocha = require('mocha');
const chai = require('chai');
const CONFIG = require('../config');
const expect = chai.expect;
const ToRPNParser = require('../bin/MathEngine/toRPNparser');
const Tokenizer = require('../bin/MathEngine/tokenizer');
const TokenFactory = require('../bin/MathEngine/tokenFactory');

describe('Reversed Polish Notation test', function() {
	it('Checks if string of tokens is reversed properly', () => {
		const tokenFactory = new TokenFactory(CONFIG.tokensDictionary);
		const tokenizer = new Tokenizer(tokenFactory);
		const parser = new ToRPNParser();
		const expected = [
			{type: 'number', precedence: null, associativity: null,	_value: '5'},
			{type: 'number', precedence: null, associativity: null,	_value: '6'},
			{type: 'number', precedence: null, associativity: null, _value: '54'},
			{type: 'number', precedence: null, associativity: null, _value: '50'},
			{type: 'operator', precedence: 1, associativity: 'left', _value: '-'},
			{type: 'operator', precedence: 2, associativity: 'left', _value: '*'},
			{type: 'operator', precedence: 1, associativity: 'left', _value: '+'}
		];

		let parsedValue = parser.postfixNotation(tokenizer.buildTokenSet('5+6*(54-50)'));
		expect(parsedValue.tokens).to.have.deep.members(expected);
	})
});