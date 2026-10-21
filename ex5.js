const mixedArray = [
    1, 2, 3, 5,
    "apple",
    { name: "Alex", age: 25 },
    { name: "Sam", age: 30 },
    { name: "Jordan", age: 22 },
    { name: "Taylor", age: 28 },
    { name: "Casey", age: 35 },
    true, false, true, false, true,
];
function countTypeInArray(arr) {
    let countTypeNumber = 0;
    let countTypeString = 0;
    let countTypeObject = 0;
    let countTypeBoolean = 0;
    for (let i = 0; i < arr.length; i++) {

        typeof arr[i] === "number" ? countTypeNumber++
            : typeof arr[i] === "string" ? countTypeString++
                : typeof arr[i] === "boolean" ? countTypeBoolean++
                    : countTypeObject++

    }
    console.log({ countTypeNumber, countTypeString, countTypeObject, countTypeBoolean });
}

countTypeInArray(mixedArray);