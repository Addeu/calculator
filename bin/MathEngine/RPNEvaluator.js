/**
 * @class {RPNEvaluator}
 */
module.exports = class RPNEvaluator {
	constructor(operationsDictionary) {
		this.operations = operationsDictionary;
	}

	/**
	 * @public
	 * @param {String} operator
	 * @param {String} a
	 * @param {String} b
	 * @returns {String}
	 */
	calculate(operator, a, b) {
		return this.operations[operator](a, b);
	}

	/**
	 * @public {Array<Token>}
	 * @param RPNArray
	 * @returns {*}
	 */
	evaluate(RPNArray) {
		let numberStack = [];

		let i = 0;
		while (i !== RPNArray.tokens.length) {
			
			if (RPNArray.tokens[i].type === 'number') {
				numberStack.push(Number(RPNArray.tokens[i].getValue()));
			}
			
			if (RPNArray.tokens[i].type === 'operator') {
				let result;
				
				if (RPNArray.tokens[i].getValue() === '?') {
					let operandSingle = numberStack.pop();

					result = this.calculate(RPNArray.tokens[i].getValue(), operandSingle, '');
				} else {
					let operandRight = numberStack.pop();
					let operandLeft = numberStack.pop();

					result = this.calculate(RPNArray.tokens[i].getValue(), operandLeft, operandRight);
				}
				
				numberStack.push(result);
			}
			
			i++;
		}

		return numberStack[0];
	}
};