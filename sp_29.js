
// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

function plusMinus(arr) {
    let n = arr.length
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;
    for (let i = 0; i < n; i++) {
        if (arr[i] >= 1) {
            positiveCount++
        }
        else if (arr[i] < 0) {
            negativeCount++
        }
        else {
            zeroCount++
        }

        let proportionofPositive = positiveCount / n;
        let proportionofNegative = negativeCount / n;
        let proportionofZero = zeroCount / n;
        
        return [proportionofPositive.toFixed(6) , proportionofNegative.toFixed(6) , proportionofZero.toFixed(6)]
    }



}

let arr = [-4, 3, -9, 0, 4, 1]
let value = plusMinus(arr)
console.log("🐒 ~ file: sp_29.js:32 ~ value:", value)
