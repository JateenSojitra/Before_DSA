// 1331. Rank Transform of an Array

var arrayRankTransform = function(arr) {
    let sortedArr = [...new Set(arr)].sort((a, b) => a - b); // Sort unique numbers
    let rankMap = new Map();
    
    sortedArr.forEach((num, index) => rankMap.set(num, index + 1));

    return arr.map(num => rankMap.get(num));
};

// Example Usage:
console.log(arrayRankTransform([40,10,20,30]));
console.log(arrayRankTransform([100,100,100])); 
console.log(arrayRankTransform([37,12,28,9,100,56,80,5,12])); 