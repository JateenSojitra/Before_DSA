// 20 **Checking for Perfect Numbers**  
//     **Difficulty**: Easy  
//     **Topics**: Basic Programming, Number Theory  
//     **Description**: Write a program to determine if a number is a perfect number.  
//     **Example**:  
//     Input: `number = 28`  
//     Output: `Perfect Number`  
//     Explanation: 28 is a c because its divisors (1, 2, 4, 7, 14) sum up to 28.


// Function to check if a number is a perfect number
function isPerfectNumber(num) {
    let sum = 0;

    // Find divisors and calculate their sum
    for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    // Check if the sum of divisors equals the number
    return sum === num && num !== 0;
}

// Function to find perfect numbers in a range
function findPerfectNumbersInRange(start, end) {
    const perfectNumbers = [];

    for (let i = start; i <= end; i++) {
        if (isPerfectNumber(i)) {
            perfectNumbers.push(i);
        }
    }

    return perfectNumbers;
}

// Example Usage
const start = 1;
const end = 10000;
const perfectNumbers = findPerfectNumbersInRange(start, end);
console.log("🐒 ~ file: sp_20.js:43 ~ perfectNumbers:", perfectNumbers)
