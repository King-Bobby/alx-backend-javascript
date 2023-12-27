const Utils = require('./utils.js');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
	const sum = Utils.caclculateNumber('SUM', totalAmount, totalShipping);
	console.log('The total is: ${sum}');
}
module.exports = sendPaymentRequestToApi;
