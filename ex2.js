const letters = [
    ["b", "a", "C", "D", "E"],
    ["s", "X", "H", "I", "J"],
    ["K", "h", "x", "N", "O"],
    ["P", "c", "R", "S", "T"],
    ["U", "n", "W", "X", "Y"],
];

function gridCount(a) {
    let count = 0;
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j < 5; j++) {
            if ('X' === a[i][j]) {
                count += 1;
            }

        }

    }
    console.log(count);

}
gridCount(letters)