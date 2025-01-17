// 5. **Generating the Fibonacci Series**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, Sequences  
//    **Description**: Write a program to generate the Fibonacci series up to a given number.  
//    **Example**:  
//    Input: `limit = 10`  
//    Output: `[0, 1, 1, 2, 3, 5, 8]`  
//    Explanation: The Fibonacci series up to 10 is generated as [0, 1, 1, 2, 3, 5, 8].

const Fibonacci =(number)=>{
const series = new Array(number);
  series[0] = 0;
  series[1] = 1;

  for (let i = 2; i < number; i++) {
    series[i] = series[i - 1] + series[i - 2];
  }
  return series;
}
console.log(Fibonacci(10));
Fibonacci(10);