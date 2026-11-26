function reverseInteger(number) {
	let sign = 1;
	if (number < 0) {
		sign = -1;
		number = -number;
	}
	let reversed = 0;
	while (number > 0) {
		let digit = number % 10;
		reversed = reversed * 10 + digit;
		number = (number - digit) / 10;
	}
	return reversed * sign;
}
console.log(reverseInteger(-123));
console.log(reverseInteger(123));
