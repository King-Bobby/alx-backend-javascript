// 3-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with correct arguments and log the result', () => {
        // Create a spy on Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // Call the function under test
        sendPaymentRequestToApi(100, 20);

        // Assertions
        expect(calculateNumberSpy.calledOnce).to.be.true;
        expect(calculateNumberSpy.calledWithExactly('SUM', 100, 20)).to.be.true;
        expect(sinon.match.string.test(console.log.args[0][0])).to.be.true; // Validate the console.log message

        // Restore the spy after use
        calculateNumberSpy.restore();
    });
});
