// **Finding Prime Numbers in a Range**  
// **Difficulty**: Easy  
// **Topics**: Basic Programming, Number Theory  
// **Description**: Write a program to find all prime numbers within a given range.  
// **Example**:  
// Input: `range = [10, 30]`  
// Output: `[11, 13, 17, 19, 23, 29]`  
// Explanation: Prime numbers between 10 and 30 are 11, 13, 17, 19, 23, and 29. 

function isPrime(num) {
  if (num < 2) return false; // Numbers less than 2 are not prime

  for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
          return false; // If divisible by any number other than 1 and itself, it's not prime
      }
  }
  return true;
}

const PrimeNumberRange =(arry)=>{
    const [start, end] = arry

    let temparry = []
    // Numbers less than or equal to 1 are not prime
    if (start <= 1) {
        return start + " is not a prime number.";
      }

      for(let i = start ; i <= end ; i++){
        console.log(i)
        // Check for divisors from 2 to the square root of the number
        if(isPrime(i)){
          temparry.push(i)
        }
        console.log(temparry)
      }
    
    
    //   return number + " is a prime number.";
}

PrimeNumberRange([10, 28])