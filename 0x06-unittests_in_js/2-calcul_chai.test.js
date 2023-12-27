const chai = require('chai');
const calculateNumber = require('./1-calcul.js');

const { expect } = chai;

describe ('calculateNumber', () => {
	describe ('type: SUM', () => {
		it('should add rounded numbers together', () => {
			expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
		});
	});
	describe ('type: SUBTRACT', () => {
		it('should subtact rounded values of b from a', () => {
			expect(calculateNumber('SUBTRACT', 1.3, 4.6)).to.equal(-4);
		});
	});
	describe ('type: DIVIDE', () => {
		it('should divide the rounded value of a by b', () => {
			expect(calculateNumber('DIVIDE', 3.6, 2.2)).to.equal(2);
		});
		it('should return error if b is equal to 0', () => {
			expect(calculateNumber('DIVIDE', 2.3, 0)).to.equal('Error');
		});
	});
});
