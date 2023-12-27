// 6-payment_token.js
function getPaymentTokenFromAPI(success) {
    if (success) {
        return Promise.resolve({ data: 'Successful response from the API' });
    } else {
        return Promise.resolve(); // Resolve with no value for failure
    }
}

module.exports = getPaymentTokenFromAPI;
