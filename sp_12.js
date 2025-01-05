// 12. **Counting Vowels and Consonants in a String**  
//     **Difficulty**: Easy  
//     **Topics**: Basic Programming, String Manipulation  
//     **Description**: Write a program to count vowels and consonants in a given string.  
//     **Example**:  
//     Input: `string = "hello world"`  
//     Output: `Vowels: 3, Consonants: 7`  
//     Explanation: "hello world" contains 3 vowels (e, o, o) and 7 consonants (h, l, l, w, r, l, d).  


// vowels => a , e , i ,o , u

const IsVowelsConsonants = (string) => {
    let isnewSting = string.split("")
    let isvowels = []
    let isConsonants = []

    for (let i = 0; i < isnewSting.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].includes(isnewSting[i])) {
            isvowels.push(isnewSting[i])
        } else {
            isConsonants.push(isnewSting[i])
        }
    }
    return {
        "v" : isvowels.length ,
        "c" : isConsonants.length
    }
}

let isss = IsVowelsConsonants("helloworlds")
