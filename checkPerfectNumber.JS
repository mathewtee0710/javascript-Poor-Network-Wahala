function checkPerfectNumber(number) {
	if (number <= 1) {
		return false;
	}
	let sum = 0;
	for (let divisor = 1; divisor < number; divisor++) {
		if (number % divisor ===0) {
			sum += divisor;
		}
	}
	return sum === number;
}
console.log(checkPerfectNumber(28));
console.log(checkPerfectNumber(12));
