function LongestWord(sen) {
	// convert input string sen into an array of words
	let words = sen
		.replace(/[^\w\s]|_/g, "")
		.replace(/\s+/g, " ")
		.split(" ");

	// set variable longestWord to an empty string
	let longestWord = "";

	// loop through words array
	for (let word of words) {
		// compare current word length to longestWord length
		// if current word is longer than longest word
		if (word.length > longestWord.length) {
			// set longestWord to current word
			longestWord = word;
		}
	}

	return longestWord;
}

// keep this function call here
console.log(LongestWord(readline()));
