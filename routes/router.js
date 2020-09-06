const express = require('express');
const router = express.Router();
const Calculator = require('../bin/calculator');
const Validator = require('../bin/inputValidator');
const mathEngine = require('../bin/MathEngine/mathEngine');

router.post('/calculate', (req, res) =>{
	let expression = req.body.expression;
	let calculator = new Calculator(new Validator(), mathEngine);

	res.json(calculator.calculate(expression));
});

module.exports = router;