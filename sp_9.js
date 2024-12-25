// 9. **Summing Digits of a Number**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Mathematical Computations  
//    **Description**: Write a program to calculate the sum of digits of a number.  
//    **Example**:  
//    Input: `number = 1234`  
//    Output: `10`  
//    Explanation: The sum of the digits 1 + 2 + 3 + 4 = 10.


const SumOfNumber =(number)=>{
    let sum = 0; 
    for(let i=0;i<=number;i++){
        sum += i;
     }
     console.log(sum)
     return sum;
}

SumOfNumber(0)