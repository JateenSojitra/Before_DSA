// # 1. **Determining Even/Odd Numbers**  
// #    **Difficulty**: Easy  
// #    **Topics**: Basic Programming  
// #    **Description**: Write a program to check whether a number is even or odd.  
// #    **Example**:  
// #    Input: `number = 4`  
// #    Output: `Even`  
// #    Explanation: Since 4 is divisible by 2, it is an even number.  

const IsEvenOROdd = (number) => {
    if (isNaN(number)) {
        if ((number % 2) === 0) {
            return "Even Number";
        } else {
            console.log("Odd Number")
            return "Odd Number";
        }
    } else {
        return "Please enter a valid number.";
    }
}
console.log(IsEvenOROdd(11))

