function showFirstAndLast(values) {
	const strings = values.filter((value) => typeof value === "string");
	return strings.length > 1 ? [strings[0], strings[strings.length - 1]] : strings;
}

console.log(showFirstAndLast(['hello', 1, 2, 'world'])); // ['hello', 'world']
