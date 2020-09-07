const Stack = require('../Utils/stack');

/**
 * @class {ToRPNParser}
 */
module.exports = class ToRPNParser {
	/**
	 * @public
	 * @param {Array<Token>} tokenSet
	 * @returns {Stack} consider as Array
	 */
	postfixNotation(tokenSet) {

		let output = new Stack();
		let operators = new Stack();

		for (let i = 0; i<tokenSet.length; i++) {

			let currentToken = tokenSet[i];

			if (currentToken.type === 'number') {
				output.push(currentToken);
			}
			
			if (currentToken.type === 'operator') {
				while (
				(!operators.isEmpty() && operators.last().type !== 'parenthesis') &&
				((operators.last().precedence >= currentToken.precedence && currentToken.associativity === 'left') ||
					(operators.last().precedence > currentToken.precedence && currentToken.associativity === 'right'))
					) {
					output.push(operators.pop());
				}
				operators.push(currentToken);
			}
			
			if (currentToken.type === 'parenthesis') {
				if (currentToken.getValue() === '(') {
					operators.push(currentToken);
				}
				
				if (currentToken.getValue() === ')') {
					
					while (!operators.isEmpty() && operators.last().getValue() !== '(') {
						output.push(operators.pop());
					}
					
					operators.pop();
				}

			}
		}
		while (!operators.isEmpty()) {
			output.push(operators.pop());
		}
		return output;
	}	
};