// 8. **Finding the Factorial of a Number**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Mathematical Computations  
//    **Description**: Write a program to compute the factorial of a given number.  
//    **Example**:  
//    Input: `number = 5`  
//    Output: `120`  
//    Explanation: 5! (factorial) is 5 × 4 × 3 × 2 × 1 = 120.  


const Factorial = (number) => {
    if(number < 0){
        return "Negative numbers."
    }
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum *= i;
    }
    console.log(sum)
}
Factorial(5)
Factorial(6)