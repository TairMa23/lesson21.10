function swapStrings(a, b) {
	a = a + b; // "some stringother string"
	b = a.slice(0, a.length - b.length); // "some stringother string" aLen:(11+12=23) bLen:12 - > 11
	a = a.slice(b.length); 
	return { a, b };
}

let a = "some string";
let b = "other string";

({ a, b } = swapStrings(a, b));

console.log("a =", a);
console.log("b =", b);
