// **Finding the Greatest Common Divisor (GCD)**  
//     **Difficulty**: Easy  
//     **Topics**: Basic Programming, Number Theory  
//     **Description**: Write a program to find the GCD of two numbers.  
//     **Example**:  
//     Input: `a = 48, b = 18`  
//     Output: `6`  
//     Explanation: The GCD of 48 and 18 is 6.

function findGCD(a, b) {
    if (b === 0) {
      return a;
    }
    return findGCD(b, a % b);
  }

  // Example usage:
const num1 = 56;
const num2 = 98;

let ans =findGCD(num1, num2)
console.log("ans" , ans)
