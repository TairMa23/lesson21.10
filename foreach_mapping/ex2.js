function onlyEvenValues(values) {
	return values.filter((value) => value % 2 === 0);
}

console.log(onlyEvenValues([1, 2, 3, 4, 5, 6])); // [2, 4, 6]
