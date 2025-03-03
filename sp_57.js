// 6. Zigzag Conversion
var convert = function(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s; 

    let rows = new Array(numRows).fill(""); 
    let currRow = 0, direction = -1;

    for (let char of s) {
        rows[currRow] += char; 

        if (currRow === 0 || currRow === numRows - 1) {
            direction *= -1;
        }
        currRow += direction; 
    }

    return rows.join(""); 
};


console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
console.log(convert("ABCD", 2));   