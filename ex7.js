const numbers = {
	even: [],
	odd: [],
};

for (let number = 1; number <= 50; number++) {
	numbers[number % 2 === 0 ? "even" : "odd"].push(number);
}
