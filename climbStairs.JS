function climbStairs(totalSteps) {
	if (totalSteps <= 1) {
		return 1;
	}
	let step2 = 1;
	let step1 = 1;
	for (let number = 2; number <= totalSteps; number++) {
		let current = step1 + step2;
		step2 = step1;
		step1 = current;
	}
	return step1;
}
console.log(climbStairs(5));
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
