var arrayRankTransform = function(arr) {
    let sortedArr = [...new Set(arr)].sort((a, b) => a - b); // Sort unique numbers
    let rankMap = new Map();
    
    // Assign ranks starting from 1
    sortedArr.forEach((num, index) => rankMap.set(num, index + 1));

    // Replace each number in arr with its rank
    return arr.map(num => rankMap.get(num));
};

// Example Usage:
console.log(arrayRankTransform([40,10,20,30]));
console.log(arrayRankTransform([100,100,100])); 
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12])); 