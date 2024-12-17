// 4. **Calculating Armstrong Numbers**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Number Theory  
//    **Description**: Write a program to check if a number is an Armstrong number.  
//    **Example**:  
//    Input: `number = 153`  
//    Output: `Armstrong Number`  
//    Explanation: 153 is an Armstrong number because 1^3 + 5^3 + 3^3 = 153. 
// Armstrong number is a number that is equal to the sum of cubes of its digits.


const IsArmstrongNumber = (number) => {
    const numStr = number.toString()
    let sum = 0;
    for (let i = 0; i < numStr.length; i++) {
        sum += Number(numStr[i]) ** 3
    }
    console.log(sum, number)
    return sum === number
}


console.log(IsArmstrongNumber(153)) //true
console.log(IsArmstrongNumber(374)); // true
console.log(IsArmstrongNumber(975)); // false
console.log(IsArmstrongNumber(370)); // true