function mySqrt(number) {
	if (number < 0) {
		return 0;
	}
	let result = 0;
	for (num = 0; num * num <= number; num++) {
		result = num;
	}
	return result;
}
console.log(mySqrt(8));
console.log(mySqrt(16));
console.log(mySqrt(1));
console.log(mySqrt(0));
