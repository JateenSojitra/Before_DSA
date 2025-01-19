// 24. **Printing Prime Numbers Less Than a Given Number**  
//     **Difficulty**: Easy  
//     **Topics**: Basic Programming, Number Theory  
//     **Description**: Write a program to print all prime numbers less than a given number.  
//     **Example**:  
//     Input: `number = 20`  
//     Output: `2, 3, 5, 7, 11, 13, 17, 19`  
//     Explanation: The prime numbers less than 20 are 2, 3, 5, 7, 11, 13, 17, and 19. 


// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Not prime if divisible by any number other than 1 and itself
    }
    return true; // Number is prime
}

// Function to print all prime numbers less than a given number
function printPrimesLessThan(n) {
    const primes = [];
    for (let i = 2; i < n; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}

// Example Usage
const n = 50; // Replace this with your desired number
console.log(`Prime numbers less than ${n}:`, printPrimesLessThan(n));