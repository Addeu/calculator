const express = require('express');
const router = express.Router();
const Calculator = require('../bin/calculator');

router.post('/calculate', (req, res) =>{
	let expression = req.body.expression;
	let calculator = new Calculator();

	res.json(calculator.calculate(expression));
});

module.exports = router;