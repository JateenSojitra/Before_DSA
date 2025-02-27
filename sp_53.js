// 1497. Check If Array Pairs Are Divisible by k 
var canArrange = function(arr, k) {
    let remainderCount = new Map();
       for (let num of arr) {
           let remainder = ((num % k) + k) % k; 
           remainderCount.set(remainder, (remainderCount.get(remainder) || 0) + 1);
       }
   
       for (let rem of remainderCount.keys()) {
           let freq = remainderCount.get(rem);
   
           if (rem === 0) { 
               if (freq % 2 !== 0) return false; 
           } else if (rem * 2 === k) { 
               if (freq % 2 !== 0) return false; 
           } else { 
               let complement = k - rem;
               if (remainderCount.get(complement) !== freq) return false;
           }
       }
   
       return true;
   };

console.log(canArrange([5, 5, 1, 2, 3, 4], 5)); // ✅ true (valid pairs: [5,5], [1,4], [2,3])
console.log(canArrange([1, 2, 3, 4, 5, 10, 6, 7, 8, 9], 5)); // ✅ true
console.log(canArrange([1, 2, 3, 4, 5, 6], 10)); // ❌ false
console.log(canArrange([-1,1,-2,2,-3,3,-4,4], 3)); // ✅ true