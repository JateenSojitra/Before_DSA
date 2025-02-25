// 27. Remove Element leet code probelms
var removeElement = function(nums, val) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[k] = nums[i]; // Move valid elements to the front
            k++;
        }
    }
    return k;
};