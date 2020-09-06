const express = require('express');
const router = express.Router();
const Calculator = require('../bin/calculator');
const Validator = require('../bin/inputValidator');
const MathEngine = require('../bin/MathEngine/mathEngine');

router.post('/calculate', (req, res) =>{
	let expression = req.body.expression;
	let calculator = new Calculator(new Validator(), new MathEngine());

	res.json(calculator.calculate(expression));
});

module.exports = router;