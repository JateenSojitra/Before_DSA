function findLongestSubstring(str) {
    let maxLength = 0;
    let start = 0;
    const charMap = {};
    for (let i = 0; i < str.length; i++) {
        const currentChar = str[i];
        if (charMap[currentChar] >= start) {
            start = charMap[currentChar] + 1;
        }
        charMap[currentChar] = i;
        maxLength = Math.max(maxLength, i - start + 1);
    }
    return maxLength;
}

findLongestSubstring("stackoverflow")
 