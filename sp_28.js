// For example, the square matrix  is shown below:

const squareMatrix =(arr)=>{
    let sumoflefttoright = 0 ;
    let sumofrighttoleft = 0 ;
   let n = arr.length
       for (let i = 0; i < n ; i++) {
           sumoflefttoright += arr[i][i]; 
           sumofrighttoleft += arr[i][n - i - 1]; 
       }
   // Return the absolute difference
   return Math.abs(sumoflefttoright - sumofrighttoleft);

}

const sMatrix = [
    [1, 2, 13],
    [4, 15, 6],
    [7, 8, 10]
];
let value = squareMatrix(sMatrix)
console.log("🐒 ~ file: sp_28.js:22 ~ value:", value)
