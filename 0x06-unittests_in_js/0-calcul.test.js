// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', () => {
    it('should return the sum of rounded numbers for integers', () => {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return the sum of rounded numbers for one decimal place', () => {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
	assert.strictEqual(calculateNumber(1.3, 2), 3);
    });
    it('should return the sum when using math.ceil with math.round', () => {
	assert.strictEqual(calculateNumber(1.6, 2), 4);
	assert.strictEqual(calculateNumber(2, 1.7), 4);
    });

    it('should return the sum of rounded numbers for two decimal places', () => {
        assert.strictEqual(calculateNumber(1.6, 3.7), 6);
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
});
