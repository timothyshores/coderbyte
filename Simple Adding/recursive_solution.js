function SimpleAdding(num) {
	return num === 1 ? 1 : num + SimpleAdding(num - 1);
}

console.log(SimpleAdding(readline()));
