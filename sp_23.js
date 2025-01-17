// 23. **Finding the Fibonacci Number at a Specific Position**  
//     **Difficulty**: Easy  
//     **Topics**: Basic Programming, Sequences  
//     **Description**: Write a program to find the Fibonacci number at a specific position.  
//     **Example**:  
//     Input: `position = 5`  
//     Output: `5`  
//     Explanation: The Fibonacci number at position 5 is 5 (sequence: 0, 1, 1, 2, 3, 5). 


const seriesFibonacci = (number) => {
    let seriesarray = new Array(number)
    seriesarray[0] = 0;
    seriesarray[1] = 1;
    for (let i = 2; i <= number; i++) {
        seriesarray[i] = seriesarray[i - 1]  + seriesarray[i - 2] 
    }
    return seriesarray[number]
}

console.log(seriesFibonacci(10))
console.log(seriesFibonacci(3))