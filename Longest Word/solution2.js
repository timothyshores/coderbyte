function LongestWord(sen) {
	return sen
		.match(/[a-z0-9]+/gi)
		.sort((a, b) => b.length - a.length)
		.shift();
}

// keep this function call here
console.log(LongestWord(readline()));
