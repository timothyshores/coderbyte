function LetterChanges(str) {
	return str
		.replace(/[a-zA-Z]/g, c => {
			switch (c) {
				case "z":
					return "a";
				case "Z":
					return "A";
				default:
					return String.fromCharCode(c.charCodeAt(0) + 1);
			}
		})
		.replace(/[aeiou]/g, c => c.toUpperCase());
}

// keep this function call here
console.log(LetterChanges(readline()));
