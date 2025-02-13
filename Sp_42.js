// 179. Largest Number

var largestNumber = function(nums) {
    let strNums = nums.map(String);
    strNums.sort((a, b) => (b + a) - (a + b));

    let result = strNums.join("");

   return result[0] === "0" ? "0" : result;
};

console.log(largestNumber([3,30,34,5,9]))

