function TimeConvert(num) {
	return `${Math.floor(num / 60)}:${num % 60}`;
}

console.log(TimeConvert(readline()));
