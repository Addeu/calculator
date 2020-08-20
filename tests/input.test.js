const mocha = require('mocha');
const chai = require('chai');
const Validator = require('../bin/inputValidator');
const expect = chai.expect;
const validator = new Validator();

describe('Input tests', function() {
	it('Checks if returns input if no operations were included', () => {
		let expression = validator.hasNoOperations('256');
		expect(expression).to.equal(true);
	});

	it('Checks if returns input if no operations were included and negatives were used', () => {
		let expression = validator.hasNoOperations('-25');
		expect(expression).to.equal(true);
	});

	it('Checks if rejects mixed digit-letter strings', () => {
		let expression = validator.isInputValid('2absfdh4');
		expect(expression).to.equal(false);
	});

	it('Checks if rejects unsupported chars', () => {
		let expression = validator.isInputValid('21&2!2');
		expect(expression).to.equal(false);
	});

	it('Checks if rejects wrong parenthesis chars', () => {
		let expression = validator.isInputValid('2 * {1}');
		expect(expression).to.equal(false);
	});

	it('Checks if rejects wrong parenthesis placement', () => {
		let expression = validator.isInputValid('2 * (2 - (3)');
		expect(expression).to.equal(false);
	});

	it('Checks if rejects double operators', () => {
		let expression = validator.isInputValid('2 ++ 2');
		expect(expression).to.equal(false);
	});

	it('Checks if accepts correct parenthesis placement', () => {
		let expression = validator.isInputValid('2 * (3 + 1)');
		expect(expression).to.equal(true);
	});
});