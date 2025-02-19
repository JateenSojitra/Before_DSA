// 88. Merge Sorted Array
var merge = function (nums1, m, nums2, n) {

    let mergedArray = nums1.slice(0, m).concat(nums2);
    mergedArray.sort((a, b) => a - b);
    for (let i = 0; i < mergedArray.length; i++) {
        nums1[i] = mergedArray[i];
    }
    return mergedArray
};


console.log(merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3))