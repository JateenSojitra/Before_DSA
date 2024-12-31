// **Finding the Least Common Multiple (LCM)**  
// **Difficulty**: Easy  
// **Topics**: Basic Programming, Number Theory  
// **Description**: Write a program to find the LCM of two numbers.  
// **Example**:  
// Input: `a = 12, b = 15`  
// Output: `60`  
// Explanation: The LCM of 12 and 15 is 60.  


function findGCD(a, b) {
    if (b === 0) {
      return a;
    }
    return findGCD(b, a % b);
  }
  
  function findLCM(a, b) {
    return Math.abs(a * b) / findGCD(a, b);
  }
  
  const num1 = 12;
  const num2 = 15;
  
  let lcm = findLCM(num1, num2)
  console.log("🐒 ~ file: sp_11.js:26 ~ lcm:", lcm)
