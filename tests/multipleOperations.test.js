const mocha = require('mocha');
const chai = require('chai');
const Calculator = require('../bin/calculator');
const expect = chai.expect;
const calc = new Calculator();

describe('Multiple operations tests', function() {
	it('Checks if addition and subtraction of integers is correct', () => {
		let intExpression = calc.calculate('1 + 2 - 3');
		expect(intExpression).to.equal(0);
	});

	it('Checks if addition and multiplication of integers is correct', () => {
		let intExpression = calc.calculate('1 + 3 * 3');
		expect(intExpression).to.equal(10);
	});

	it('Checks if subtraction and division of integers is correct', () => {
		let intExpression = calc.calculate('10 - 9 / 3');
		expect(intExpression).to.equal(7);
	});

	it('Checks if subtraction and multiplication of integers is correct', () => {
		let intExpression = calc.calculate('10 - 3 * 3');
		expect(intExpression).to.equal(7);
	});

	it('Checks if addition and division of integers is correct', () => {
		let intExpression = calc.calculate('7 + 9 * 3');
		expect(intExpression).to.equal(10);
	});

	it('Checks if a long expression with all basic mathematical operations with integers is correct', () => {
		let intExpression = calc.calculate('69 + 2 * 3 / 4 - 15');
		expect(intExpression).to.equal(55.5);
	});

	it('Checks if a long expression with all basic mathematical operations with integers and parenthesis is correct', () => {
		let intExpression = calc.calculate('(69 + 2) * (3 / 4 - 15)');
		expect(intExpression).to.equal(-1011.75);
	});

	it('Checks if addition and subtraction of floats is correct', () => {
		let intExpression = calc.calculate('1.1 + 2.2 - 3.3');
		expect(intExpression).to.equal(0);
	});

	it('Checks if addition and multiplication of floats is correct', () => {
		let intExpression = calc.calculate('1.5 + 3.6 * 0.3');
		expect(intExpression).to.equal(2.58);
	});

	it('Checks if subtraction and division of floats is correct', () => {
		let intExpression = calc.calculate('1 - 0.9 / 0.33');
		expect(intExpression).to.equal(-1.727272727272727);
	});

	it('Checks if subtraction and multiplication of floats is correct', () => {
		let intExpression = calc.calculate('0.9 - 0.1 * 0.3');
		expect(intExpression).to.equal(0.87);
	});

	it('Checks if addition and division of floats is correct', () => {
		let intExpression = calc.calculate('0.7 + 0.9 * 1.3');
		expect(intExpression).to.equal(1.87);
	});

	it('Checks if a long expression with all basic mathematical operations with floats is correct', () => {
		let intExpression = calc.calculate('6.9 + 0.2 * 1.3 / 2.4 - 1.5');
		expect(intExpression).to.equal(5.508333333333334);
	});

	it('Checks if a long expression with all basic mathematical operations with floats is correct', () => {
		let intExpression = calc.calculate('(6.9 + 0.2) * 1.3 / (2.4 - 1.5)');
		expect(intExpression).to.equal(10.255555555555556);
	});

	it('Checks if a long mixed float-integer expression with all basic mathematical operations is correct', () => {
		let intExpression = calc.calculate('619 + 0.2 * 58 / 2.4 - 3');
		expect(intExpression).to.equal(620.8333333333334);
	});

	it('Checks if a long mixed float-integer expression with all basic mathematical operations and parenthesis is correct', () => {
		let intExpression = calc.calculate('(619 + 0.2 * 58) / (2.4 - 3)');
		expect(intExpression).to.equal(-1050.9999999999998);
	});
});