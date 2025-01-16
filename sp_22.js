// 22. **Calculating the Sum of Odd Numbers in a Range**  
//     **Difficulty**: Easy  
//     **Topics**: Basic Programming, Mathematical Computations  
//     **Description**: Write a program to find the sum of all odd numbers within a given range.  
//     **Example**:  
//     Input: `range = [1, 10]`  
//     Output: `25`  
//     Explanation: The sum of odd numbers between 1 and 10 is 1 + 3 + 5 + 7 + 9 = 25.  

const sumOfOddNumber =(array)=>{
    let sumofodd = 0;
    const [start , end] = array

    for (let i = start; i <= end; i++) {
        if ((i % 2) !==  0) {
            sumofodd += i
        }
        console.log("sumofodd" ,sumofodd)
    }
}

console.log(sumOfOddNumber([1,10]))