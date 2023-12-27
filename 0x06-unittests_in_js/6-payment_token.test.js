// 6-payment_token.test.js
const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
    it('should resolve with a success message when success is true', (done) => {
        getPaymentTokenFromAPI(true)
            .then((result) => {
                expect(result).to.deep.equal({ data: 'Successful response from the API' });
                done();
            })
            .catch(done); // Call done with an error if the promise is rejected
    });

    it('should resolve with no value when success is false', (done) => {
        getPaymentTokenFromAPI(false)
            .then((result) => {
                expect(result).to.be.undefined;
                done();
            })
            .catch(done);
    });
});
