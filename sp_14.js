// 14. **Finding the Largest and Smallest Numbers in an Array**  
//     **Difficulty**: Easy  
//     **Topics**: Basic Programming, Arrays  
//     **Description**: Write a program to find the largest and smallest numbers in an array.  
//     **Example**:  
//     Input: `array = [4, 7, 1, 8, 5]`  
//     Output: `Largest: 8, Smallest: 1`  
//     Explanation: The largest number in the array is 8 and the smallest is 1.  


const IsSmallORLarge =(arr)=>{
    if (arr.length === 0) {
        return { largest: null, smallest: null }; // Handle empty array case
    }

    let largest = arr[0];
    let smallest = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
        if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }

    return { largest, smallest };
}


console.log("IsSmallORLarge" , IsSmallORLarge([2,4,5,9,12,44]))
console.log("IsSmallORLarge" , IsSmallORLarge([2,4,5,99,12,32]))