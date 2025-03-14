// 15 3 sum 
var threeSum = function(nums) {
    nums.sort((a, b) => a - b); // Step 1: Sort the array
    let result = [];

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate elements

        let left = i + 1, right = nums.length - 1;
        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];

            if (sum === 0) { // Found a valid triplet
                result.push([nums[i], nums[left], nums[right]]);
                
                // Move left pointer forward & skip duplicates
                while (left < right && nums[left] === nums[left + 1]) left++;
                // Move right pointer backward & skip duplicates
                while (left < right && nums[right] === nums[right - 1]) right--;

                left++;
                right--;
            } else if (sum < 0) {
                left++; // Increase sum by moving left pointer
            } else {
                right--; // Decrease sum by moving right pointer
            }
        }
    }

    return result;
};