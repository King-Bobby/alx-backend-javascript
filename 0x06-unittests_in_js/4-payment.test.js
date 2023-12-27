// 4-payment.test.js
const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    it('should stub Utils.calculateNumber and log the result', () => {
        // Create a stub on Utils.calculateNumber
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);

        // Create a spy on console.log
        const consoleLogSpy = sinon.spy(console, 'log');

        // Call the function under test
        sendPaymentRequestToApi(100, 20);

        // Assertions
        expect(calculateNumberStub.calledOnce).to.be.true;
        expect(calculateNumberStub.calledWithExactly('SUM', 100, 20)).to.be.true;
        expect(consoleLogSpy.calledOnce).to.be.true;
        expect(consoleLogSpy.calledWithExactly('The total is: 10')).to.be.true;

        // Restore the stub and the spy after use
        calculateNumberStub.restore();
        consoleLogSpy.restore();
    });
});
