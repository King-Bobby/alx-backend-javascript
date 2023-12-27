// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('should return the sum of rounded numbers for integers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return the sum of rounded numbers for one decimal place', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
    it('should return the sum when the second number is already round', () => {
	assert.strictEqual(calculateNumber(1.3, 2), 3);
    });

    it('should return the sum of rounded numbers for two decimal places', () => {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
});
