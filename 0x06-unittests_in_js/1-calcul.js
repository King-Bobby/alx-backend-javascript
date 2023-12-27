function calculateNumber(type, a, b) {
	const RoundedA = Math.round(a);
	const RoundedB = Math.round(b);

	switch (type) {
		case 'SUM':
			return RoundedA + RoundedB;
		case 'SUBTRACT':
			return RoundedA - RoundedB;
		case 'DIVIDE':
			if (RoundedB == 0) {
				return 'Error';
			}
			return RoundedA / RoundedB;
	}
}

module.exports = calculateNumber;
