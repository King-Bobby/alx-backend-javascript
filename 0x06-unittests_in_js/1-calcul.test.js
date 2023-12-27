const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe ('calculateNumber', () => {
	describe ('type: SUM', () => {
		it('should add rounded numbers together', () => {
			assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
		});
	});
	describe ('type: SUBTRACT', () => {
		it('should subtact rounded values of b from a', () => {
			assert.strictEqual(calculateNumber('SUBTRACT', 1.3, 4.6), -4);
		});
	});
	describe ('type: DIVIDE', () => {
		it('should divide the rounded value of a by b', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 3.6, 2.2), 2);
		});
		it('should return error if b is equal to 0', () => {
			assert.strictEqual(calculateNumber('DIVIDE', 2.3, 0), 'Error');
		});
	});
});
