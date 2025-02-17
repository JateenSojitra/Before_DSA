
// 14. Longest Common Prefix
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return ""; 
    
    let prefix = strs[0]; 
    
    for (let i = 1; i < strs.length; i++) { 
        let j = 0;
        
        while (j < prefix.length && j < strs[i].length && prefix[j] === strs[i][j]) {
            j++; 
        }
        
        prefix = prefix.slice(0, j); 
        
        if (prefix === "") return "";
        }
    
    return prefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""
console.log(longestCommonPrefix(["apple", "apricot", "ape"]));  // Output: "ap"