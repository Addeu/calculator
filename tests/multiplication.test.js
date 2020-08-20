const mocha = require('mocha');
const chai = require('chai');
const Calculator = require('../bin/calculator');
const expect = chai.expect;
const calc = new Calculator();

describe('Multiplication tests', function() {
	it('Checks if multiplication of two integers is correct', () => {
		let expression = calc.calculate('2 * 2');
		expect(expression).to.equal(4);
	});

	it('Checks if multiplication of two floats is correct', () => {
		let expression = calc.calculate('0.2 * 0.3');
		expect(expression).to.equal(0.06);
	});

	it('Checks if multiplication of multiple integers is correct', () => {
		let expression = calc.calculate('2 * 2 * 3 * 5');
		expect(expression).to.equal(60);
	});

	it('Checks if multiplication of multiple floats is correct', () => {
		let expression = calc.calculate('1.1 * 0.9 * 1.2 * 1.0');
		expect(expression).to.equal(1.1880000000000002);
	});

	it('Checks if multiplication of integer and float is correct', () => {
		let expression = calc.calculate('4 * 0.9');
		expect(expression).to.equal(3.6);
	});

	it('Checks if multiplication of multiple integers and floats is correct', () => {
		let expression = calc.calculate('555 * 60 * 0.5 * 35 * 8.15');
		expect(expression).to.equal(4749412.5);
	});
});