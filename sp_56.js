
// 5 lobgest Palindromatic SubString 
var longestPalindrome = function(s) {
    if (s.length < 2) return s; // If the string is empty or single char, return it.

    let start = 0, maxLength = 0;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1]; // Return valid palindrome boundaries
    };

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindrome (centered at a single character)
        let [left1, right1] = expandAroundCenter(i, i);
        // Even-length palindrome (centered between two characters)
        let [left2, right2] = expandAroundCenter(i, i + 1);

        // Update longest palindrome if needed
        if (right1 - left1 > maxLength) {
            start = left1;
            maxLength = right1 - left1;
        }
        if (right2 - left2 > maxLength) {
            start = left2;
            maxLength = right2 - left2;
        }
    }

    return s.substring(start, start + maxLength + 1);
};


// Example Usage
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // Output: "bb"
console.log(longestPalindrome("a"));     // Output: "a"
console.log(longestPalindrome("ac"));    // Output: "a" or "c