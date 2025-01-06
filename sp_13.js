// 13. **Reversing a String**  
//     **Difficulty**: Easy  
//     **Topics**: Basic Programming, String Manipulation  
//     **Description**: Write a program to reverse a given string.  
//     **Example**:  
//     Input: `string = "programming"`  
//     Output: `"gnimmargorp"`  
//     Explanation: The reversed string of "programming" is "gnimmargorp".  


const reverseString =(string)=>{
    let newString ='' ;
    for (let i = string.length - 1; i >= 0; i--) { 
        newString += string[i]; 
    }
    return newString
}

console.log('reverseString' , reverseString("mansi"))
console.log('reverseString' , reverseString("jatin"))
