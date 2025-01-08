// 16 **Finding the Sum of Elements in an Array**  
//     **Difficulty**: Easy  
//     **Topics**: Basic Programming, Arrays  
//     **Description**: Write a program to find the sum of elements in an array.  
//     **Example**:  
//     Input: `array = [1, 2, 3, 4, 5]`  
//     Output: `15`  
//     Explanation: The sum of the elements in the array is 15. 


const getSumOfArrayEle =(array)=>{
    let sum = 0 ;
    for(let i =0; i < array.length;i++){
        sum += array[i]
    }
    return sum
}

let newsum = getSumOfArrayEle([1,2,3,4,5])
