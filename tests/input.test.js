const mocha = require('mocha');
const chai = require('chai');
const Calculator = require('../bin/calculator');
const expect = chai.expect;
const calc = new Calculator();

describe('Input tests', function() {
	it('Checks if returns input if no operations were included', () => {
		let intExpression = calc.calculate('256');
		expect(intExpression).to.equal(256);
	});

	it('Checks if rejects mixed digit-letter strings', () => {
		let intExpression = calc.calculate('2absfdh4');
		expect(intExpression).to.equal(false);
	});

	it('Checks if rejects unsupported chars', () => {
		let intExpression = calc.calculate('21&2!2');
		expect(intExpression).to.equal(false);
	});

	it('Checks if rejects wrong parenthesis chars', () => {
		let intExpression = calc.calculate('2 * {1}');
		expect(intExpression).to.equal(false);
	});

	it('Checks if rejects wrong parenthesis placement', () => {
		let intExpression = calc.calculate('2 * (2 - (3)');
		expect(intExpression).to.equal(false);
	});

	it('Checks if rejects double operators', () => {
		let intExpression = calc.calculate('2 ++ 2');
		expect(intExpression).to.equal(false);
	});

	it('Checks if accepts correct parenthesis placement', () => {
		let intExpression = calc.calculate('2 * (3 + 1)');
		expect(intExpression).to.equal(true);
	});
});