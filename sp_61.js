// 12. Integer to Roman
var intToRoman = function(num) {
    const valueMap = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
    ];

    let result = "";

    // Step 2: Convert integer to Roman
    for (let { value, numeral } of valueMap) {
        while (num >= value) {
            result += numeral;
            num -= value;
        }
    }

    return result;
};

console.log(intToRoman(3));     // Output: "III"
console.log(intToRoman(58));    // Output: "LVIII"
console.log(intToRoman(1994)); 