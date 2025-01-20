
// Find Duplecates element from array
const findDuplicates = (nums) => {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1; // Convert number to index (1-based to 0-based)
        
        if (nums[index] < 0) {
            // If the value at the index is already negative, it's a duplicate
            result.push(Math.abs(nums[i]));
        } else {
            // Otherwise, mark the index as visited by negating the value
            nums[index] = -nums[index];
        }
    }
    
    return result;
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDuplicates(nums))