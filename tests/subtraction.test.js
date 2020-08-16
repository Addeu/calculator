const mocha = require('mocha');
const chai = require('chai');
const Calculator = require('../bin/calculator');
const expect = chai.expect;
const calc = new Calculator();

describe('Subtraction tests', function() {
	it('Checks if subtraction of two integers is correct', () => {
		let intExpression = calc.calculate('6 - 5');
		expect(intExpression).to.equal(1);
	});

	it('Checks if subtraction of two floats is correct', () => {
		let intExpression = calc.calculate('2.1 - 1.2');
		expect(intExpression).to.equal(0.9);
	});

	it('Checks if subtraction of multiple integers is correct', () => {
		let intExpression = calc.calculate('60 - 2 - 50 - 7');
		expect(intExpression).to.equal(1);
	});

	it('Checks if subtraction of multiple floats is correct', () => {
		let intExpression = calc.calculate('1.2 - 0.9 - 0.2');
		expect(intExpression).to.equal(0.1);
	});

	it('Checks if subtraction of integer and float is correct', () => {
		let intExpression = calc.calculate('4 - 0.2');
		expect(intExpression).to.equal(3.8);
	});

	it('Checks if subtraction of multiple integers and floats is correct', () => {
		let intExpression = calc.calculate('555 - 60 - 0.5 - 35 - 8.15');
		expect(intExpression).to.equal(451.35);
	});
});