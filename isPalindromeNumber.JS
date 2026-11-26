function isPalindromeNumber(number) {
	if (number < 0) {
		return false;
	}
	let original = number;
	let reversed = 0;
	while (number > 0) {
		let digit = number % 10;
		reversed = reversed * 10 + digit;
		number = (number - digit) / 10;
	}
	return original === reversed;
}
console.log(isPalindromeNumber(676));
console.log(isPalindromeNumber(453));
console.log(isPalindromeNumber(-896));
