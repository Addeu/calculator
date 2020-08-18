const mocha = require('mocha');
const chai = require('chai');
const Validator = require('../bin/inputValidator');
const expect = chai.expect;
const validator = new Validator();

describe('Input tests', function() {
	it('Checks if returns input if no operations were included', () => {
		let intExpression = validator.isInputValid('256');
		expect(intExpression).to.equal(256);
	});

	it('Checks if rejects mixed digit-letter strings', () => {
		let intExpression = validator.isInputValid('2absfdh4');
		expect(intExpression).to.equal(false);
	});

	it('Checks if rejects unsupported chars', () => {
		let intExpression = validator.isInputValid('21&2!2');
		expect(intExpression).to.equal(false);
	});

	it('Checks if rejects wrong parenthesis chars', () => {
		let intExpression = validator.isInputValid('2 * {1}');
		expect(intExpression).to.equal(false);
	});

	it('Checks if rejects wrong parenthesis placement', () => {
		let intExpression = validator.isInputValid('2 * (2 - (3)');
		expect(intExpression).to.equal(false);
	});

	it('Checks if rejects double operators', () => {
		let intExpression = validator.isInputValid('2 ++ 2');
		expect(intExpression).to.equal(false);
	});

	it('Checks if accepts correct parenthesis placement', () => {
		let intExpression = validator.isInputValid('2 * (3 + 1)');
		expect(intExpression).to.equal(true);
	});
});