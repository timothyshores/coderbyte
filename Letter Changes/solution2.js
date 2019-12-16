function LetterChanges(str) {
	return str
		.replace(/[a-z]/gi, c => String.fromCharCode(c.charCodeAt(0) + 1))
		.replace(/[aeiou]/gi, c => c.toUpperCase());
}

// keep this function call here
LetterChanges(readline());
