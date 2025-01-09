// 17. **Checking for Armstrong Numbers in a Range**  
//     **Difficulty**: Easy  
//     **Topics**: Basic Programming, Number Theory  
//     **Description**: Write a program to find all Armstrong numbers within a given range.  
//     **Example**:  
//     Input: `range = [1, 500]`  
//     Output: `[1, 153, 370, 371, 407]`  
//     Explanation: Armstrong numbers between 1 and 500 are 1, 153, 370, 371, and 407. 


// Armstrong number is a number that is equal to the sum of cubes of its digits.


// const CheckRangeArmstrongNumbers = (arry) => {
//     if (arry.length === 2 & arry[0] < arry[1]) {
//         const [start, end] = arry
//         let ArmstrongNumbersrange = []
//         let rangeArray = []
//         let isarmstrong = 0;
//         for (let i = start; i <= end; i++) {
//             let newvalue = i.toString()
//             rangeArray.push(newvalue)
//         }
//         let sum = 0;
//         for (let j = 0; j < rangeArray.length; j++) {
//             console.log("numStr[i]", rangeArray[j])
//             let numStr = rangeArray[j].toString()
//             for(let k = 0; k<=numStr.length ;k++){
//                 console.log("numStr[k]" , numStr[k])
//                 let newNumber = Number(numStr[k]) 
//                 console.log("newNumber ** 3" , newNumber ,)
//                 isarmstrong = newNumber ** 3
//             }
//             console.log("🐒 ~ file: sp_17.js:28 ~ CheckRangeArmstrongNumbers ~ numStr:", numStr , sum , isarmstrong)
//         }
//         console.log(rangeArray)

//     } else {
//         console.log("Please Enter Valid Number")
//     }
// }

// console.log(CheckRangeArmstrongNumbers([1, 20]))


function isArmstrongNumber(num) {
    let temp = num;
    let sum = 0;
    let power = 0;

    // Calculate the number of digits (power)
    for (let tempCopy = num; tempCopy > 0; tempCopy = Math.floor(tempCopy / 10)) {
        power++;
    }

    // Calculate the Armstrong number
    for (let tempCopy = num; tempCopy > 0; tempCopy = Math.floor(tempCopy / 10)) {
        let digit = tempCopy % 10; // Extract the last digit
        let digitPower = 1;

        // Raise the digit to the power of the number of digits
        for (let i = 0; i < power; i++) {
            digitPower *= digit;
        }

        sum += digitPower;
    }

    return sum === num; // Check if sum equals the original number
}

function findArmstrongNumbersInRange(start, end) {
    const armstrongNumbers = [];

    // Loop through the range
    for (let i = start; i <= end; i++) {
        if (isArmstrongNumber(i)) {
            armstrongNumbers.push(i);
        }
    }

    return armstrongNumbers;
}

// Example Usage
const start = 1;
const end = 5000; // Specify your range
const armstrongNumbers = findArmstrongNumbersInRange(start, end);

console.log(`Armstrong numbers between ${start} and ${end}:`, armstrongNumbers);
