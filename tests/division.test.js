const mocha = require('mocha');
const chai = require('chai');
const CONFIG = require('../config');
const Validator = require('../bin/inputValidator');
const mathEngine = require('../bin/MathEngine/mathEngine');
const Calculator = require('../bin/calculator');
const expect = chai.expect;
const calc = new Calculator(new Validator(CONFIG.prohibitedChars, CONFIG.legalOperations), mathEngine);

describe('Division tests', function() {
	it('Checks if division of two integers is correct', () => {
		let expression = calc.calculate('4 / 2');
		expect(expression).to.equal(2);
	});

	it('Checks if division of two floats is correct', () => {
		let expression = calc.calculate('0.2 / 0.3');
		expect(expression).to.equal(0.6666666666666667);
	});

	it('Checks if division of multiple integers is correct', () => {
		let expression = calc.calculate('60 / 2 / 3 / 5');
		expect(expression).to.equal(2);
	});

	it('Checks if division of multiple floats is correct', () => {
		let expression = calc.calculate('1.1 / 0.9 / 1.2 / 1.0');
		expect(expression).to.equal(1.0185185185185186);
	});

	it('Checks if division of integer and float is correct', () => {
		let expression = calc.calculate('4 / 0.9');
		expect(expression).to.equal(4.444444444444445);
	});

	it('Checks if division of multiple integers and floats is correct', () => {
		let expression = calc.calculate('555 / 60 / 0.5 / 35 / 8.15');
		expect(expression).to.equal(0.06485539000876424);
	});

	it('Checks division by zero', () => {
		let expression = calc.calculate('4 / 0');
		expect(expression).to.equal(Infinity);
	});
});