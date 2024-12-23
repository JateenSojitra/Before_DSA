// **Identifying Palindromes**  
//    **Difficulty**: Easy  
//    **Topics**: Basic Programming, String Manipulation  
//    **Description**: Write a program to check if a string or number is a palindrome.  
//    **Example**:  
//    value: `string = "radar"`  
//    Output: `Palindrome`  
//    Explanation: "radar" reads the same backward as forward. 

const isPalindromes =(value)=>{
    if (typeof value === "string") {
        // Palindrome check for strings
        let cleanedStr = '';
        for (let i = 0; i < value.length; i++) {
          const char = value[i].toLowerCase();
          if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
            cleanedStr += char;
          }
        }
    
        const length = cleanedStr.length;
        for (let i = 0; i < length / 2; i++) {
          if (cleanedStr[i] !== cleanedStr[length - 1 - i]) {
            return false;
          }
        }
        return true;
      } else if (typeof value === "number") {
        // Palindrome check for numbers
        let original = value;
        let reversed = 0;
    
        while (value > 0) {
          const digit = value % 10;
          reversed = reversed * 10 + digit;
          value = Math.floor(value / 10);
        }
    
        return original === reversed;
      } else {
        // For unsupported types
        return false;
      }
}

console.log(isPalindromes("Helleh"));       // Output: false
console.log(isPalindromes(121));