const CONFIG = require('../../config');
const Tokenizer = require('./tokenizer');
const TokenFactory = require('./tokenFactory');
const ToRPNParser = require('./toRPNparser');
const RPNEvaluator = require('./RPNEvaluator');
const tokenDictionary = CONFIG.tokensDictionary;
const operationsDictionary = CONFIG.operationsDictionary;

class MathEngine {
	constructor(tokenizer, parser, evaluator) {
		this.tokenizer = tokenizer;
		this.parser = parser;
		this.evaluator = evaluator;
	}

	evaluate(expression) {
		let tokenSet = this.parser.postfixNotation(this.tokenizer.buildTokenSet(expression));
		return this.evaluator.evaluate(tokenSet);
	}
}

module.exports =  new MathEngine(
	new Tokenizer(new TokenFactory(tokenDictionary)),
	new ToRPNParser(),
	new RPNEvaluator(operationsDictionary)
);

