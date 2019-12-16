function FirstFactorial(num) {
	let factorial = 1;

	while (num > 0) {
		factorial = factorial * num;
		num = num - 1;
	}

	return factorial;
}

// keep this function call here
console.log(FirstFactorial(readline()));
