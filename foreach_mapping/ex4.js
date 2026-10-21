function vowelCount(str) {
    const vowels = str.toLowerCase().split("").filter((char) => "aeiou".includes(char));
    console.log(vowels);
    const uniqueVowels = vowels.filter((vowel, index) => vowels.indexOf(vowel) === index);
    console.log(uniqueVowels);
    return Object.fromEntries(
        uniqueVowels.map((vowel) => [
            vowel,
            vowels.filter((char) => char === vowel).length
        ])
    );

}


console.log(vowelCount('hello world'))
