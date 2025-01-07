// 15. **Sorting an arryay**  
//     **Difficulty**: Easy  
//     **Topics**: Basic Programming, Sorting Algorithms  
//     **Description**: Write a program to sort an array of numbers in ascending order.  
//     **Example**:  
//     Input: `array = [3, 1, 4, 1, 5, 9]`  
//     Output: `[1, 1, 3, 4, 5, 9]`  
//     Explanation: The array sorted in ascending order is [1, 1, 3, 4, 5, 9].  


const SortingArray = (arry) => {
    let i, j, temp;
    let n = arry.length
    let swapped;
    for (i = 0; i < n - 1; i++) {
        let swapped = false
        console.log('n - i - 1' , n - i - 1)
        for (j = 0; j < n - i - 1; j++) {
            if (arry[j] > arry[j + 1]) {
                {
                    // Swap arr[j] and arr[j+1]
                    temp = arry[j];
                    arry[j] = arry[j + 1];
                    arry[j + 1] = temp;
                    swapped = true;
                }
            }
        }
        if (swapped == false)
            break;
    }
}

// Function to print an array 
function printArray(arr, size){
    var i;
    let temparray =[]
    for (i = 0; i < size; i++){
        console.log(arr[i] + " ");
        temparray.push(arr[i])
    }
  }
  
  // Driver program
  var arr = [ 64, 34, 25, 12, 22, 11, 90 ];
  var n = arr.length;
  SortingArray(arr, n);
  console.log("Sorted array: ");
  printArray(arr, n);