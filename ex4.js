function reverseArray(array) {
	const reversed = [];

	for (let i = array.length - 1; i >= 0; i--) {
		reversed.push(array[i]);
	}

	return reversed;
}

const exampleArray = [1, 2, 3, 4, 5];
console.log(reverseArray(exampleArray));

