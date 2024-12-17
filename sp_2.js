// 2. **Checking for Prime Numbers**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Number Theory  
//    **Description**: Write a program to determine if a number is prime. 
//    ** in Simple term more than two  divisors any number that was not consider ad prime number
//    **Example**:  
//    Input: `number = 7`  
//    Output: `Prime`  
//    Explanation: 7 has no divisors other than 1 and itself, so it is a prime number. 

const isPrime =(number)=> {
    // Numbers less than or equal to 1 are not prime
    if (number <= 1) {
      return number + " is not a prime number.";
    }
  
    // Check for divisors from 2 to the square root of the number
    for (let i = 2; i * i <= number; i++) {
      if (number % i === 0) {
        return number + " is not a prime number.";
      }
    }
  
    return number + " is a prime number.";
  }
  
  // Test the function
  const input = 116; // Replace with any number
  console.log(isPrime(input));

