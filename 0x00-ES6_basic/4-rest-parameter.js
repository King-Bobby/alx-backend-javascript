export default function returnHowManyArguments(...args) {
	let sum = 0;
	for (let arg in args) sum += arg;
	return sum;
}
