// 11. Container With Most Water
var maxArea = function(height) {
    let left = 0, right = height.length - 1;
      let maxWater = 0;
  
      while (left < right) {
          let width = right - left;
          let minHeight = Math.min(height[left], height[right]);
          let currentArea = width * minHeight;
  
          maxWater = Math.max(maxWater, currentArea); 
  
          if (height[left] < height[right]) {
              left++;
          } else {
              right--;
          }
      }
  
      return maxWater;  
  };


  // Example Usage
console.log(maxArea([1,8,6,2,5,4,8,3,7])); // Output: 49
console.log(maxArea([1,1]));               // Output: 1
console.log(maxArea([4,3,2,1,4]));         // Output: 16
console.log(maxArea([1,2,1]));             // Output: 2