const mocha = require('mocha');
const chai = require('chai');
const CONFIG = require('../config');
const Validator = require('../bin/inputValidator');
const mathEngine = require('../bin/MathEngine/mathEngine');
const Calculator = require('../bin/calculator');
const expect = chai.expect;
const calc = new Calculator(new Validator(CONFIG.prohibitedChars, CONFIG.legalOperations), mathEngine);

describe('Addition tests', function() {
	it('Checks if addition of two integers is correct', () => {
		let expression = calc.calculate('40 + 2');
		expect(expression).to.equal(42);
	});

	it('Checks if addition of two floats is correct', () => {
		let expression = calc.calculate('0.9 + 3.3');
		expect(expression).to.equal(4.2);
	});

	it('Checks if addition of multiple integers is correct', () => {
		let expression = calc.calculate('2 + 2 + 5 + 15 + 14 + 4');
		expect(expression).to.equal(42);
	});

	it('Checks if addition of multiple floats is correct', () => {
		let expression = calc.calculate('1.1 + 0.9 + 1.2 + 1.0');
		expect(expression).to.equal(4.2);
	});

	it('Checks if addition of integer and float is correct', () => {
		let expression = calc.calculate('4 + 0.2');
		expect(expression).to.equal(4.2);
	});

	it('Checks if addition of multiple integers and floats is correct', () => {
		let expression = calc.calculate('555 + 60 + 0.5 + 35 + 8.15');
		expect(expression).to.equal(658.65);
	});
});