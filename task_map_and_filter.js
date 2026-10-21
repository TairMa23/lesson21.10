function getCarSpeeds(cars) {
	return cars.filter((car) => (Object.values(car)[0]>80));
}

const cars = [
	{ bmw: 100 },
	{ audi: 120 },
	{ toyota: 90 },
	{ honda: 110 },
	{ ford: 130 },
	{ tesla: 150 },
];

console.log(getCarSpeeds(cars)); 
