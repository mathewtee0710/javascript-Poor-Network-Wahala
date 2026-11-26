function hammingWeight(number) {
	let count = 0;
	while (number > 0) {
		if (number % 2 === 1) {
			count++;
		}
		number = (number - number % 2) / 2;
	}
	return count;
}
console.log(hammingWeight(11));
