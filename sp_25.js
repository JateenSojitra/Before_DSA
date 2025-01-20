
// Find Duplecates element from array [4, 3, 2, 7, 8, 2, 3, 1 , 1 , 1];
const findDuplicates = (nums) => {
    const result = [];
    
    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1; // Convert number to index (1-based to 0-based)
        console.log("🐒 ~ file: sp_25.js:8 ~ findDuplicates ~ index:", index)
        
        if (nums[index] < 0) {
            if (!result.includes(Math.abs(nums[i]))) {
                result.push(Math.abs(nums[i]));
            }
        } else {
            // Otherwise, mark the index as visited by negating the value
            nums[index] = -nums[index];
        }
        console.log("nums" , nums)
    }
    
    // return result;
    return result.length > 0 ? Math.min(...result) : null; // Return null if no duplicates
};

const nums = [4, 3, 2, 7, 8, 2, 3, 1 , 1 , 1 ,2 , 2];
console.log(findDuplicates(nums))