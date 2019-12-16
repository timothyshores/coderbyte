function FirstFactorial(num) {
	return num > 1 ? FirstFactorial(num - 1) * num : 1;
}

// keep this function call here
console.log(FirstFactorial(readline()));
